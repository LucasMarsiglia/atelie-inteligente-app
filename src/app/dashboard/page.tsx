import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingBag, TrendingUp, Clock } from 'lucide-react';

export default function DashboardPage() {
  // Dados simulados
  const stats = [
    {
      title: 'Peças no Catálogo',
      value: '12',
      icon: Package,
      description: '+2 este mês',
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Encomendas Ativas',
      value: '5',
      icon: ShoppingBag,
      description: '3 pendentes',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Taxa de Aceitação',
      value: '85%',
      icon: TrendingUp,
      description: 'Últimos 30 dias',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Tempo Médio',
      value: '7 dias',
      icon: Clock,
      description: 'De produção',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Bem-vindo de volta! Aqui está um resumo do seu ateliê.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Encomendas Recentes</CardTitle>
            <CardDescription>Últimas solicitações recebidas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-gray-50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-orange-300" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Vaso decorativo</p>
                    <p className="text-sm text-gray-500">João Silva • Há 2 horas</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                    Pendente
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Peças em Destaque</CardTitle>
            <CardDescription>Suas criações mais visualizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-gray-50">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Tigela artesanal</p>
                    <p className="text-sm text-gray-500">124 visualizações</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
