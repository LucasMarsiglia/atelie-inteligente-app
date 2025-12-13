'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Clock, Package } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function EncomendasPage() {
  // Dados simulados
  const encomendas = [
    {
      id: '1',
      comprador: 'João Silva',
      peca: 'Vaso decorativo',
      descricao: 'Gostaria de um vaso médio com tons de azul',
      status: 'pendente' as const,
      data: '2024-01-15',
    },
    {
      id: '2',
      comprador: 'Maria Santos',
      peca: 'Conjunto de xícaras',
      descricao: 'Conjunto de 6 xícaras personalizadas',
      status: 'aceito' as const,
      data: '2024-01-14',
    },
    {
      id: '3',
      comprador: 'Pedro Costa',
      peca: 'Tigela grande',
      descricao: 'Tigela para salada, estilo rústico',
      status: 'em_producao' as const,
      data: '2024-01-10',
    },
    {
      id: '4',
      comprador: 'Ana Lima',
      peca: 'Prato decorativo',
      descricao: 'Prato para parede com motivos florais',
      status: 'concluido' as const,
      data: '2024-01-05',
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      pendente: { label: 'Pendente', className: 'bg-amber-100 text-amber-700' },
      aceito: { label: 'Aceito', className: 'bg-blue-100 text-blue-700' },
      recusado: { label: 'Recusado', className: 'bg-red-100 text-red-700' },
      em_producao: { label: 'Em Produção', className: 'bg-purple-100 text-purple-700' },
      concluido: { label: 'Concluído', className: 'bg-green-100 text-green-700' },
    };
    const variant = variants[status as keyof typeof variants];
    return <Badge className={variant.className}>{variant.label}</Badge>;
  };

  const getStatusIcon = (status: string) => {
    const icons = {
      pendente: Clock,
      aceito: Check,
      recusado: X,
      em_producao: Package,
      concluido: Check,
    };
    const Icon = icons[status as keyof typeof icons];
    return Icon ? <Icon className="h-4 w-4" /> : null;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Encomendas</h1>
          <p className="text-gray-600 mt-2">Gerencie as solicitações recebidas</p>
        </div>
        
        <Select defaultValue="todas">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas</SelectItem>
            <SelectItem value="pendente">Pendentes</SelectItem>
            <SelectItem value="aceito">Aceitas</SelectItem>
            <SelectItem value="em_producao">Em Produção</SelectItem>
            <SelectItem value="concluido">Concluídas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Lista de Encomendas */}
      <div className="space-y-4">
        {encomendas.map((encomenda) => (
          <Card key={encomenda.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-lg">{encomenda.peca}</CardTitle>
                    {getStatusBadge(encomenda.status)}
                  </div>
                  <CardDescription>
                    Solicitado por <strong>{encomenda.comprador}</strong> • {encomenda.data}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Descrição da encomenda:</p>
                  <p className="text-sm text-gray-600">{encomenda.descricao}</p>
                </div>

                {encomenda.status === 'pendente' && (
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Recusar
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Aceitar
                    </Button>
                  </div>
                )}

                {encomenda.status === 'aceito' && (
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Iniciar Produção
                  </Button>
                )}

                {encomenda.status === 'em_producao' && (
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Marcar como Concluído
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
