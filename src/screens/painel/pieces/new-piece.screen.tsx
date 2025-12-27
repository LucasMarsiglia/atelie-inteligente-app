import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Sparkles } from 'lucide-react';
import { NewPieceForm } from '../components/features/forms/new-piece/new-piece.form';

export function NewPieceScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost">← Voltar</Button>
          <div className="flex items-center gap-2">
            <Palette className="w-6 h-6 text-orange-600" />
            <span className="text-xl font-bold">Nova Peça</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-orange-600" />
              <CardTitle>Criar Nova Peça</CardTitle>
            </div>
            <CardDescription>
              Preencha os dados básicos e escolha o estilo de descrição
            </CardDescription>
          </CardHeader>

          <CardContent>
            <NewPieceForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
