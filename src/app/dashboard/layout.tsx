'use client';

import { useState } from 'react';
import { Navbar } from '@/components/custom/navbar';
import { Sidebar } from '@/components/custom/sidebar';
import { UserType } from '@/lib/types';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Simulação de usuário logado - em produção viria do contexto de autenticação
  const userType: UserType = 'ceramista'; // ou 'comprador'
  const userName = 'Maria Silva';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        isAuthenticated 
        userName={userName}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        showMenuButton
      />
      
      <div className="flex">
        <Sidebar 
          userType={userType}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
