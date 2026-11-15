import { experience, isSet } from '@/data/profile';
import { Reveal } from './Reveal';

export function Experience() {
  const items = experience.filter((e) => isSet(e.title));
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="heading">My journey so far</h2>
        </Reveal>

        <ol className="relative mt-12 space-y-10 border-l-2 border-slate-200 pl-8 dark:border-ink-line sm:ml-4">
          {items.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 100} className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand bg-slate-50 dark:bg-ink" aria-hidden>
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              {isSet(e.period) && !e.period.includes('[') && <p className="text-sm font-semibold text-brand-deep dark:text-brand">{e.period}</p>}
              <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
              {isSet(e.place) && <p className="text-slate-500">{e.place}</p>}
              {e.points.length > 0 && (
                <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-slate-600 marker:text-brand dark:text-slate-400">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
