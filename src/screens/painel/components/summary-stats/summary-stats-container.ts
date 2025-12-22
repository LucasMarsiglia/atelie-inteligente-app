'use client';

import { useEffect, useState } from 'react';

// Ao implementar a logica, passar isso para um hashmap
const stats = [
  {
    title: 'Peças Publicadas',
    value: 5,
    description: 'Disponiveis para venda',
    className_value: 'text-blue-500',
    href: '/painel/pecas',
  },
  {
    title: 'Pedidos Ativos',
    value: 2,
    description: 'Pedidos ativos',
    className_value: 'text-green-500',
    href: '/painel/pedidos',
  },
  {
    title: 'Encomendas Aguardando Respostas',
    value: 2,
    description: 'Pedidos em andamento',
    href: '/painel/encomendas',
  },
];

export function useSummaryStatsContainer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading, stats };
}
