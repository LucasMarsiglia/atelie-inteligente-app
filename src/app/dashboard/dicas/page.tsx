import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Camera, Palette, TrendingUp, Users, Clock } from 'lucide-react';

export default function DicasPage() {
  const dicas = [
    {
      icon: Camera,
      title: 'Fotografe suas peças com luz natural',
      description: 'Use luz natural próxima a uma janela para capturar as cores reais e texturas das suas peças. Evite flash direto.',
      category: 'Fotografia',
    },
    {
      icon: Palette,
      title: 'Conte a história por trás de cada peça',
      description: 'Compartilhe o processo criativo, técnicas utilizadas e inspirações. Isso cria conexão com os compradores.',
      category: 'Marketing',
    },
    {
      icon: TrendingUp,
      title: 'Mantenha seu catálogo atualizado',
      description: 'Adicione novas peças regularmente e remova itens indisponíveis. Um catálogo ativo atrai mais compradores.',
      category: 'Gestão',
    },
    {
      icon: Users,
      title: 'Responda rapidamente às solicitações',
      description: 'Compradores valorizam respostas rápidas. Tente responder em até 24 horas para manter o interesse.',
      category: 'Atendimento',
    },
    {
      icon: Clock,
      title: 'Seja realista com prazos',
      description: 'Estabeleça prazos que você possa cumprir confortavelmente. É melhor surpreender positivamente do que atrasar.',
      category: 'Produção',
    },
    {
      icon: Lightbulb,
      title: 'Mostre seu processo criativo',
      description: 'Compartilhe fotos do processo de criação. Isso valoriza seu trabalho e educa os compradores sobre o artesanato.',
      category: 'Conteúdo',
    },
  ];

  const categorias = ['Fotografia', 'Marketing', 'Gestão', 'Atendimento', 'Produção', 'Conteúdo'];
  const cores = [
    'from-amber-500 to-orange-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-purple-500 to-pink-500',
    'from-red-500 to-rose-500',
    'from-indigo-500 to-blue-500',
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dicas para Ceramistas</h1>
        <p className="text-gray-600 mt-2">Aprenda a destacar seu trabalho e crescer seu negócio</p>
      </div>

      {/* Banner de Destaque */}
      <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Lightbulb className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-white text-xl mb-2">
                Dica do Dia
              </CardTitle>
              <CardDescription className="text-white/90">
                A consistência é a chave para o sucesso. Mantenha uma presença ativa na plataforma, 
                atualize seu catálogo regularmente e responda prontamente aos compradores.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Grid de Dicas */}
      <div className="grid gap-6 md:grid-cols-2">
        {dicas.map((dica, index) => {
          const Icon = dica.icon;
          const corIndex = categorias.indexOf(dica.category);
          
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${cores[corIndex]} flex-shrink-0`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {dica.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{dica.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{dica.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recursos Adicionais */}
      <Card>
        <CardHeader>
          <CardTitle>Recursos Adicionais</CardTitle>
          <CardDescription>Materiais para aprimorar seu trabalho</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <h4 className="font-medium text-gray-900 mb-1">Guia de Precificação</h4>
              <p className="text-sm text-gray-600">Aprenda a calcular o valor justo das suas peças</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <h4 className="font-medium text-gray-900 mb-1">Técnicas de Fotografia</h4>
              <p className="text-sm text-gray-600">Dicas práticas para fotografar cerâmica</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <h4 className="font-medium text-gray-900 mb-1">Marketing para Artesãos</h4>
              <p className="text-sm text-gray-600">Estratégias para divulgar seu trabalho</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
