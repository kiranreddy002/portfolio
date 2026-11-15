import { Monitor, Server, Wrench } from 'lucide-react';
import { skillGroups } from '@/data/profile';
import { Reveal } from './Reveal';

const ICONS = [Monitor, Server, Wrench];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2 className="heading">The tools I build with</h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            One person from design to deployment – so the frontend, backend and admin panel all fit together.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={g.title} delay={i * 100} className="card p-7">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-brand-deep dark:text-brand" />
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand-deep dark:border-ink-line dark:bg-ink dark:text-slate-200 dark:hover:text-brand"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
