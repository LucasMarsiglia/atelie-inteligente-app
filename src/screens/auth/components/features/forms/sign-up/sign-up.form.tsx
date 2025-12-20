'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useSignUpContainer } from './sign-up.container';
import { Label } from '@/components/ui/label';
import { AccountType } from '../../../shared/account-type/account-type';
import { FormControl } from '@/components/ui/form';
import { Controller } from 'react-hook-form';

export function SignUpForm() {
  const { form, handleSubmitForm, isLoading } = useSignUpContainer();

  return (
    <form className="grid gap-4" onSubmit={form.handleSubmit(handleSubmitForm)}>
      <Input
        label="Nome"
        id="name"
        type="text"
        placeholder="Seu nome"
        htmlFor="name"
        {...form.register('name')}
        error={form.formState.errors.name?.message}
        disabled={isLoading}
      />

      <div className="grid grid-cols-2 gap-3 space-y-2">
        <Label className="col-span-2">Tipo de Conta</Label>
        <Controller
          render={({ field }) => (
            <>
              <AccountType
                name="ceramista"
                onSelectType={() => form.setValue('accountType', 'ceramista')}
                selectType={field.value}
              />
              <AccountType
                name="comprador"
                onSelectType={() => form.setValue('accountType', 'comprador')}
                selectType={field.value}
              />
            </>
          )}
          name="accountType"
          control={form.control}
        />
      </div>

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

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-600 to-pink-600"
        isLoading={isLoading}
        disabled={isLoading}
      >
        Criar Conta
      </Button>

      <div className="text-center text-sm pt-2">
        <Link
          href="/auth/sign-in"
          type="button"
          className="text-orange-600 hover:underline"
        >
          Já tem conta? Entrar
        </Link>
      </div>
    </form>
  );
}
