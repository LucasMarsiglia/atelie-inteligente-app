`use client`;

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema, SignInSchemaType } from '@/core/utils/schemas/sign-in.schema';
import { useState } from 'react';
import { supabase } from '@/core/utils/lib/supabase';
import { setCookie } from 'cookies-next/client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { SignUpSchema, SignUpSchemaType } from '@/core/utils/schemas/sign-up.schema';
import { th } from 'zod/v4/locales';

export function useSignUpContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<SignUpSchemaType>({
    defaultValues: {
      accountType: 'ceramista',
    },
    resolver: zodResolver(SignUpSchema),
  });

  const handleForgotPassword = () => {
    toast.info('Funcionalidade de recuperação de senha ainda não implementada.');
  };

  const handleSubmitForm: SubmitHandler<SignUpSchemaType> = async (formData) => {
    console.log();
    setIsLoading(true);
    try {
      const { error: signupError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { full_name: formData.name },
          // emailRedirectTo: `${window.location.origin}/assinar`,
        },
      });

      if (signupError) throw new Error(signupError.message);

      toast.success('Conta criada! Verifique seu e-mail para confirmar.');
    } catch (error) {
      toast.error(error.message || 'Erro ao criar conta. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return { form, handleSubmitForm, isLoading, handleForgotPassword };
}
