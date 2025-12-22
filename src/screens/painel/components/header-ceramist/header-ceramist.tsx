'use client';

import { Header } from '@/components/common/header/header';
import { Button } from '@/components/ui/button';
import { LogOut, Settings } from 'lucide-react';
import { useHeaderCeramistContainer } from './header-ceramist-container';
import { NameSkeleton } from '../shared/name-skeleton/name-skeeleton';

export function HeaderCeramist() {
  const { router, handleLogout, user, isLoadingUser } = useHeaderCeramistContainer();

  return (
    <Header>
      <div className="flex items-center gap-2 sm:gap-4">
        <Button
          onClick={() => router.push('/painel/perfil')}
          className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors max-w-[500px]"
          isLoading={isLoadingUser}
          loadingCustom={<NameSkeleton />}
        >
          <span className="block truncate">{user?.full_name}</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push('/painel/configuracoes')}
          title="Configurações"
        >
          <Settings className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={handleLogout} title="Sair">
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </Header>
  );
}
