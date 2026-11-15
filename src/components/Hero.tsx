import { ArrowRight, Download, MapPin } from 'lucide-react';
import { isSet, profile } from '@/data/profile';

/** A little code card beside the photo – a developer's way of saying hello. */
function CodeCard() {
  return (
    <div className="float absolute -bottom-14 -left-6 w-56 sm:-bottom-12 sm:-left-20 rounded-2xl border border-ink-line bg-ink/95 p-4 font-mono text-[12px] leading-relaxed text-slate-300 shadow-2xl sm:-left-10 sm:w-64">
      <div className="mb-2 flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <p>
        <span className="text-sky-400">const</span> <span className="text-brand">kiran</span> = {'{'}
      </p>
      <p className="pl-4">
        builds: <span className="text-amber-300">'websites'</span>,
      </p>
      <p className="pl-4">
        from: <span className="text-amber-300">'idea'</span>,
      </p>
      <p className="pl-4">
        to: <span className="text-amber-300">'launch'</span>,
      </p>
      <p>
        {'}'}
        <span className="blink ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-brand" aria-hidden />
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl dark:bg-brand/10" aria-hidden />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {profile.available && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for freelance work
            </p>
          )}
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-brand-deep via-brand to-sky-400 bg-clip-text text-transparent">{profile.name}</span>
          </h1>
          <p className="mt-4 font-display text-xl font-medium text-slate-900 dark:text-white sm:text-2xl">{profile.role}</p>
          <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-400">{profile.headline}</p>
          <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-400">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              See my work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact me
            </a>
            {isSet(profile.resume) && (
              <a href={profile.resume} download className="btn-ghost">
                <Download className="h-4 w-4" /> Download CV
              </a>
            )}
          </div>
          {isSet(profile.location) && !profile.location.includes('[') && (
            <p className="mt-6 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-4 w-4" /> {profile.location}
            </p>
          )}
        </div>

        <div className="relative mx-auto w-64 sm:w-80">
          {/* Only the gradient ring spins; the photo / initials sit still on top of it. */}
          <div className="relative aspect-square">
            <div className="ring-spin absolute inset-0 rounded-full" aria-hidden />
            <div className="absolute inset-1.5 flex items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-ink-soft">
              {isSet(profile.photo) ? (
                <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                <span className="font-display text-7xl font-bold text-slate-900 dark:text-white sm:text-8xl">{profile.initials}</span>
              )}
            </div>
          </div>
          <CodeCard />
        </div>
      </div>
    </section>
  );
}
