`use client`;

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { supabase } from '@/core/utils/lib/supabase';
import { toast } from 'react-toastify';
import { SignUpSchema, SignUpSchemaType } from '@/core/utils/schemas/sign-up.schema';

export function useSignUpContainer() {
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    try {
      const { error: signupError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,

        options: {
          data: {
            full_name: formData.name,
            type: formData.accountType,
          },
          emailRedirectTo: `${window.location.origin}/auth/confirm-registration`,
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
