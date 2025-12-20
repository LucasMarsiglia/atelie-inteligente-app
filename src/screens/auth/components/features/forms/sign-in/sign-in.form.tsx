'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useSignInContainer } from './sign-in.container';

export function SignInForm() {
  const { form, handleSubmitForm, isLoading, handleForgotPassword } =
    useSignInContainer();

  return (
    <form className="grid gap-4" onSubmit={form.handleSubmit(handleSubmitForm)}>
      <Input
        label="E-mail"
        id="email"
        type="email"
        placeholder="seu@email.com"
        htmlFor="email"
        {...form.register('email')}
        error={form.formState.errors.email?.message}
        disabled={isLoading}
      />

      <div>
        <Input
          label="Senha"
          id="password"
          type="password"
          htmlFor="password"
          placeholder="••••••••"
          isPassword
          {...form.register('password')}
          error={form.formState.errors.password?.message}
          disabled={isLoading}
        />

        <Link
          href="/reset-pass"
          type="button"
          className="flex justify-end mt-1 text-sm text-orange-600 hover:underline w-full text-end"
        >
          Esqueci a senha
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-600 to-pink-600"
        isLoading={isLoading}
        disabled={isLoading}
      >
        Entrar
      </Button>

      <div className="text-center text-sm pt-2">
        <Link
          href="/auth/sign-up"
          type="button"
          className="text-orange-600 hover:underline"
        >
          {true ? 'Não tem conta? Criar agora' : 'Já tem conta? Entrar'}
        </Link>
      </div>
    </form>
  );
}
