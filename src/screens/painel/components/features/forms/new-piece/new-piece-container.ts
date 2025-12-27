import { useUser } from '@/core/hooks/use-user';
import { base64ToBlob } from '@/core/utils/base64ToBlob';
import { supabase } from '@/core/utils/lib/supabase';
import { pieceSchema, PieceSchemaType } from '@/core/utils/schemas/piece-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export function useNewPieceContainer() {
  const form = useForm<PieceSchemaType>({
    resolver: zodResolver(pieceSchema),
    defaultValues: {
      availability: '',
      pieces_images: [],
    },
  });

  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const currentImages = form.getValues('pieces_images') ?? [];

    if (currentImages.length >= 5) {
      toast.error('Máximo de 5 imagens permitido.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      form.setValue('pieces_images', [
        ...currentImages,
        { photo_url: reader.result as string, upload_method: 'local' },
      ]);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmitForm: SubmitHandler<PieceSchemaType> = async (formData) => {
    setIsLoading(true);

    let pieceId: string | null = null;
    const uploadedPaths: string[] = [];

    try {
      const { pieces_images, ...restFormData } = formData;

      if (!pieces_images || pieces_images.length === 0) {
        throw new Error('Adicione ao menos uma imagem');
      }

      const payload = {
        ...restFormData,
        profile_id: user.sub,
        type: 'vaso',
        settings_ai: {
          description_style: 'hello world descrição',
          additional_prompt: 'hello',
        },
      };

      const { data: piece, error: pieceError } = await supabase
        .from('pieces')
        .insert(payload)
        .select('id')
        .single();

      if (pieceError || !piece) {
        throw new Error('Erro ao criar a peça');
      }

      pieceId = piece.id;

      const uploadedImages: { photo_url: string }[] = [];

      for (const image of pieces_images) {
        const blob = base64ToBlob(image.photo_url);
        const filePath = `pieces/${pieceId}/${crypto.randomUUID()}.png`;

        const { error: uploadError } = await supabase.storage
          .from('pieces')
          .upload(filePath, blob, {
            contentType: blob.type,
            upsert: false,
          });

        if (uploadError) {
          throw new Error('Erro ao enviar imagem');
        }

        uploadedPaths.push(filePath);

        const { data: publicUrlData } = supabase.storage.from('pieces').getPublicUrl(filePath);

        uploadedImages.push({
          photo_url: publicUrlData.publicUrl,
        });
      }

      const { error: updateError } = await supabase
        .from('pieces')
        .update({ pieces_images: uploadedImages })
        .eq('id', pieceId);

      if (updateError) {
        throw new Error('Erro ao salvar imagens da peça');
      }

      toast.success('Produto criado com sucesso!');
      form.reset();
      router.push('/dashboard/pieces');
    } catch (error: any) {
      if (pieceId) {
        await supabase.from('pieces').delete().eq('id', pieceId);

        for (const path of uploadedPaths) {
          await supabase.storage.from('pieces').remove([path]);
        }
      }

      toast.error(error?.message ?? 'Erro inesperado');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    errors: form.formState.errors,
    handleSubmitForm,
    handleFileUpload,
    isLoading,
    user,
    router,
  };
}
