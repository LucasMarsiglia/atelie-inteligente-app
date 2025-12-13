'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Image as ImageIcon, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function PecasPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Dados simulados
  const pecas = [
    {
      id: '1',
      title: 'Vaso Rústico',
      description: 'Vaso artesanal com acabamento rústico',
      images: [],
      available: true,
    },
    {
      id: '2',
      title: 'Tigela Decorativa',
      description: 'Tigela feita à mão com detalhes únicos',
      images: [],
      available: true,
    },
    {
      id: '3',
      title: 'Xícara Artesanal',
      description: 'Conjunto de xícaras personalizadas',
      images: [],
      available: false,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Minhas Peças</h1>
          <p className="text-gray-600 mt-2">Gerencie seu catálogo de peças</p>
        </div>
        
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
              <Plus className="h-4 w-4 mr-2" />
              Nova Peça
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Adicionar Nova Peça</DialogTitle>
              <DialogDescription>
                Preencha os detalhes da sua peça artesanal
              </DialogDescription>
            </DialogHeader>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título da peça</Label>
                <Input id="title" placeholder="Ex: Vaso decorativo" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea 
                  id="description" 
                  placeholder="Descreva sua peça, técnicas utilizadas, dimensões..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Fotos da peça</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-gray-50 cursor-pointer">
                  <ImageIcon className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Clique para adicionar fotos</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG até 5MB</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria (opcional)</Label>
                <Input id="category" placeholder="Ex: Vasos, Tigelas, Pratos..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Preço referência (opcional)</Label>
                <Input id="price" type="number" placeholder="R$ 0,00" />
              </div>

              <div className="flex gap-2 pt-4">
                <Button 
                  type="button"
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                >
                  Adicionar Peça
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Grid de Peças */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pecas.map((peca) => (
          <Card key={peca.id} className="overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <ImageIcon className="h-16 w-16 text-gray-400" />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{peca.title}</CardTitle>
                  <CardDescription className="mt-1">{peca.description}</CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  peca.available 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {peca.available ? 'Disponível' : 'Indisponível'}
                </span>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {pecas.length === 0 && (
        <Card className="p-12 text-center">
          <ImageIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Nenhuma peça cadastrada
          </h3>
          <p className="text-gray-600 mb-4">
            Comece adicionando suas primeiras peças ao catálogo
          </p>
          <Button 
            onClick={() => setDialogOpen(true)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Primeira Peça
          </Button>
        </Card>
      )}
    </div>
  );
}
