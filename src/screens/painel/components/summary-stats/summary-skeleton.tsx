import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function SummaryStatsSkeleton() {
  return (
    <section className="my-3 rounded-md border bg-white p-4">
      <div className="h-5 w-40 rounded-md bg-gray-200 animate-pulse" />

      <article className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="space-y-3">
              {/* Título do card */}
              <div className="h-4 w-32 rounded-md bg-gray-200 animate-pulse" />

              {/* Valor */}
              <div className="h-8 w-16 rounded-md bg-gray-300 animate-pulse" />
            </CardHeader>

            <CardContent>
              {/* Descrição */}
              <div className="h-4 w-40 rounded-md bg-gray-200 animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </article>
    </section>
  );
}
