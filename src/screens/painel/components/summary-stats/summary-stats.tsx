'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/core/utils/utils';
import Link from 'next/link';
import { useSummaryStatsContainer } from './summary-stats-container';
import { SummaryStatsSkeleton } from './summary-skeleton';

export function SummaryStats() {
  const { isLoading, stats } = useSummaryStatsContainer();

  if (isLoading) return <SummaryStatsSkeleton />;

  return (
    <section className="my-3 rounded-md border bg-white p-4">
      <h2 className="text-lg font-medium">Status do Ateliê</h2>

      <article className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href} className="block">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">{stat.title}</CardTitle>
                <div className={cn('text-3xl font-semibold', stat.className_value)}>
                  {stat.value}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </article>
    </section>
  );
}
