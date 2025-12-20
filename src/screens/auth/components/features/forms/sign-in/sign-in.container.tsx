`use client`;

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema, SignInSchemaType } from '@/core/utils/schemas/sign-in.schema';
import { useState } from 'react';
import { supabase } from '@/core/utils/lib/supabase';
import { setCookie } from 'cookies-next/client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export function useSignInContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  const handleForgotPassword = () => {
    toast.info('Funcionalidade de recuperação de senha ainda não implementada.');
  };

  const handleSubmitForm: SubmitHandler<SignInSchemaType> = async (formData) => {
    setIsLoading(true);
    try {
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (loginError) throw new Error(loginError.message);

      router.push('/painel');
    } catch (error) {
      toast.error('Erro ao entrar. Verifique suas credenciais e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return { form, handleSubmitForm, isLoading, handleForgotPassword };
}
