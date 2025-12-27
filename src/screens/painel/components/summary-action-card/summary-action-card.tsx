'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link2, Package, Plus, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export const actionCards = [
  {
    id: 'catalog',
    title: 'Meu Catálogo',
    description: 'Onde cuido das minhas peças',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-4">
        <Package className="w-6 h-6 text-white" />
      </div>
    ),
    render: () => (
      <Button variant="primary">
        <Plus className="w-4 h-4 mr-2" />
        Nova Peça
      </Button>
    ),
  },
  {
    id: 'orders',
    title: 'Pedidos e Encomendas',
    description: 'Acompanhe pedidos do catálogo e encomendas personalizadas.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
        <ShoppingCart className="w-6 h-6 text-white" />
      </div>
    ),
    render: () => (
      <div className="grid gap-2 w-full">
        <Link href="/painel/pedidos">
          <Button variant="outline" className="w-full">
            Ver Todos os Pedidos
          </Button>
        </Link>
        <Link href="/painel/encomendas">
          <Button variant="outline" className="w-full">
            Ver Todas as Encomendas
          </Button>
        </Link>
      </div>
    ),
  },
  {
    id: 'link',
    title: 'Meu Link de Divulgação',
    description: 'Compartilhe seu catálogo e receba pedidos pelo seu link.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
        <Link2 className="w-6 h-6 text-white" />
      </div>
    ),
    render: () => (
      <Button variant="secondary">
        <Plus className="w-4 h-4 mr-2" />
        Meu Link de Divulgação
      </Button>
    ),
  },
];

export function SummaryActionCard() {
  return (
    <section>
      <article className="grid gap-6 md:grid-cols-3 mb-6">
        {actionCards.map((card) => (
          <Card key={card.id}>
            <CardHeader className="space-y-2">
              {card.icon}
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex items-center h-full">{card.render()}</CardContent>
          </Card>
        ))}
      </article>
    </section>
  );
}
