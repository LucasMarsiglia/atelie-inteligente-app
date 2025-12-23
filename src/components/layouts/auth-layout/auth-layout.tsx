import { Palette, ShoppingBag, Sparkles } from 'lucide-react';
import { Header } from '@/components/common/header/header';
import { Footer } from '@/components/common/footer/footer';
import { IAuthLayoutProps } from './auth-layout.types';
import NextTopLoader from 'nextjs-toploader';

export function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 text-left">
      <NextTopLoader color="#c2410c" />

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Plataforma para Ceramistas
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              Transforme sua arte em{' '}
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                negócio digital
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Crie catálogos profissionais, gere textos para redes sociais e gerencie pedidos em um
              só lugar.
            </p>
          </div>

          {children}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 mx-auto flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">IA Integrada</h3>
            <p className="text-gray-600">
              Textos profissionais gerados automaticamente para suas peças
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Vendas Simplificadas</h3>
            <p className="text-gray-600">
              Recebimento de encomenda e gestão de pedidos em um só lugar
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto flex items-center justify-center">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Páginas Públicas</h3>
            <p className="text-gray-600">
              Compartilhe suas peças no Instagram e WhatsApp facilmente
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
