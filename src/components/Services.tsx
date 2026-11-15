import { Database, Globe, LayoutTemplate } from 'lucide-react';
import { services } from '@/data/profile';
import { Reveal } from './Reveal';

const ICONS = { globe: Globe, layout: LayoutTemplate, database: Database };

export function Services() {
  return (
    <section aria-labelledby="services-title" className="pb-8">
      <div className="container-x">
        <h2 id="services-title" className="sr-only">
          What I do
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={i * 100} className="card group p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand-deep transition group-hover:bg-brand group-hover:text-ink dark:text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
