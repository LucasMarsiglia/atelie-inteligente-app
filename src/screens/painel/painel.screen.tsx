'use client';

import { HeaderCeramist } from './components/header-ceramist/header-ceramist';
import { SummaryStats } from './components/summary-stats/summary-stats';
import { SummaryActionCard } from './components/summary-action-card/summary-action-card';
import { Footer } from '@/components/common/footer/footer';
import { SummaryQuickActionCard } from './components/summary-quick-action-card/summary-quick-action-card';
import { GrowthTipsCard } from './components/growth-tips-card/growth-tips-card';

export function PainelScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <HeaderCeramist />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Painel do Ceramista</h1>
          <p className="text-gray-600">Gerencie suas peças e pedidos em um só lugar</p>
        </div>

        {/* 1. Criação de peça */}
        <SummaryQuickActionCard />

        {/* 2. Resumo Rápido */}
        <SummaryStats />

        {/* 3.  Resumo do Cartão de Ação */}
        <SummaryActionCard />

        {/* 6. Dicas de Marketing e Vendas */}
        <GrowthTipsCard />

        <Footer />
      </main>
    </div>
  );
}
