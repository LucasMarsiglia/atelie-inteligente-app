'use client';

import { supabase } from '@/core/utils/lib/supabase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export function ConfirmRegistrationScreen() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const {
          data: { session },
          error: refreshError,
        } = await supabase.auth.refreshSession();

        if (refreshError) throw refreshError;

        if (session) {
          toast.success('Conta confirmada! Bem-vindo ao painel.');
          router.replace('/painel');
          return;
        }

        const {
          data: { session: fallbackSession },
        } = await supabase.auth.getSession();

        if (fallbackSession) {
          toast.success('Conta confirmada! Bem-vindo ao painel.');
          router.replace('/painel');
        } else {
          throw new Error('Sessão não encontrada');
        }
      } catch (error) {
        console.error('Erro ao confirmar sessão:', error);
        toast.error('Erro ao confirmar sua conta. Tente fazer login novamente.');
        router.replace('/auth/sign-in');
      }
    };

    handleAuth();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-700">Confirmando sua conta...</p>
        <p className="text-sm text-gray-500">Aguarde um momento</p>
      </div>
    </div>
  );
}
