import { ArrowUpRight, Check } from 'lucide-react';
import { isSet, projects, type Project } from '@/data/profile';
import { GitHubIcon } from './BrandIcons';
import { Reveal } from './Reveal';

function Links({ p }: { p: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {isSet(p.live) && (
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5">
          Visit site <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      {isSet(p.code) && (
        <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-2.5">
          <GitHubIcon className="h-4 w-4" /> View code
        </a>
      )}
    </div>
  );
}

function Details({ p }: { p: Project }) {
  return (
    <>
      <p className="text-sm font-medium text-brand-deep dark:text-brand">{p.kind}</p>
      <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
      <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{p.description}</p>
      <ul className="mt-5 space-y-2">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
            <Check className="mt-0.5 h-4 w-4 flex-none text-brand-deep dark:text-brand" /> {h}
          </li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
        {p.tech.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
      <Links p={p} />
    </>
  );
}

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <section id="work" className="section bg-white dark:bg-ink-soft/40">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Work</p>
          <h2 className="heading">Selected projects</h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {featured.map((p) => (
            <Reveal key={p.title} className="card grid overflow-hidden lg:grid-cols-2">
              {p.image && (
                <div className="relative self-center overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-ink-line dark:bg-ink lg:border-b-0 lg:border-r">
                  {/* Browser frame around the screenshot */}
                  <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-3 dark:border-ink-line" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <img src={p.image} alt={`${p.title} website home page`} loading="lazy" className="h-auto w-full transition duration-700 hover:scale-[1.03]" />
                </div>
              )}
              <div className="p-7 sm:p-10">
                <Details p={p} />
              </div>
            </Reveal>
          ))}

          {others.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.title} delay={i * 100} className="card p-7 sm:p-8">
                  <Details p={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
