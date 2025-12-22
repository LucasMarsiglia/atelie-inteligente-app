import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

export function SummaryQuickActionCard() {
  const totalPecas = 0;

  return (
    totalPecas === 0 && (
      <Card className="mb-8 border-2 border-dashed border-orange-300 bg-orange-50/50">
        <CardHeader>
          <CardTitle>Bem-vindo ao Ateliê Inteligente!</CardTitle>
          <CardDescription>Comece criando sua primeira peça para começar a vender</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            // onClick={() => router.push('/painel/pecas/nova')}
            className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Criar Primeira Peça
          </Button>
        </CardContent>
      </Card>
    )
  );
}
