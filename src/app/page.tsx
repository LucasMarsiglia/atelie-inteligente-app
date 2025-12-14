"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/custom/navbar";
import { Sparkles, Package, ShoppingBag, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      <Navbar />

      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Plataforma para ceramistas artesanais
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Transforme sua cerâmica em um
            <span className="text-amber-600"> negócio profissional</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crie catálogos inteligentes, receba encomendas e conecte-se com
            compradores que valorizam o artesanal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Começar agora
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/cadastro">
                Criar conta
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="p-6 rounded-lg border bg-white">
              <Package className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-semibold">Catálogo inteligente</h3>
              <p className="text-sm text-muted-foreground">
                Gere descrições automáticas e compartilhe facilmente.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-white">
              <ShoppingBag className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-semibold">Encomendas</h3>
              <p className="text-sm text-muted-foreground">
                Receba pedidos direto de compradores reais.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-white">
              <Heart className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-semibold">Foco no artesanal</h3>
              <p className="text-sm text-muted-foreground">
                Valorize seu trabalho sem depender de marketplaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
