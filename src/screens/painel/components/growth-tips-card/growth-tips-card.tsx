import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export function GrowthTipsCard() {
  return (
    <Card
      className="mb-6 border-2 border-yellow-300 bg-yellow-50/50 hover:shadow-lg transition-shadow cursor-pointer"
      // onClick={() => router.push('/painel/dicas')}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <CardTitle>Dicas de Marketing & Vendas</CardTitle>
            <CardDescription>Aprenda a divulgar suas peças e vender mais</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Button className="w-full" variant="outline">
          Ver Dicas Práticas
        </Button>
      </CardContent>
    </Card>
  );
}
