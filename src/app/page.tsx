import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/custom/navbar';
import { Sparkles, Package, ShoppingBag, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Plataforma para ceramistas artesanais
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Transforme sua arte em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              negócio profissional
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Crie catálogos elegantes, receba encomendas personalizadas e conecte-se 
            com pessoas que valorizam o trabalho artesanal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              asChild
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8"
            >
              <Link href="/cadastro">Começar agora</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">Já tenho conta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <Package className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Catálogo Profissional
            </h3>
            <p className="text-gray-600">
              Crie um portfólio elegante das suas peças com fotos e descrições detalhadas.
            </p>
          </div>

          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <ShoppingBag className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Encomendas Personalizadas
            </h3>
            <p className="text-gray-600">
              Receba solicitações de peças únicas e gerencie seus pedidos em um só lugar.
            </p>
          </div>

          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Conexão Autêntica
            </h3>
            <p className="text-gray-600">
              Conecte-se com pessoas que valorizam o trabalho artesanal e a exclusividade.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Junte-se a ceramistas que já estão transformando sua arte em negócio.
          </p>
          <Button 
            size="lg" 
            asChild
            className="bg-white text-orange-600 hover:bg-gray-50"
          >
            <Link href="/cadastro">Criar minha conta grátis</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2024 Ateliê Inteligente. Feito com carinho para ceramistas artesanais.</p>
        </div>
      </footer>
    </div>
  );
}
