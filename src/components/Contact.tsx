import { Code2, Mail, Phone, Trophy } from 'lucide-react';
import type { ComponentType } from 'react';
import { contact, isSet, links } from '@/data/profile';
import { GitHubIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons';
import { Reveal } from './Reveal';

type Item = { label: string; value: string; href: string; Icon: ComponentType<{ className?: string }>; external?: boolean };

const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export function Contact() {
  const items: Item[] = [];
  if (isSet(contact.email)) items.push({ label: 'Email', value: contact.email, href: `mailto:${contact.email}`, Icon: Mail });
  if (isSet(contact.phone)) {
    const shown = isSet(contact.phoneDisplay) ? contact.phoneDisplay : `+${contact.phone}`;
    items.push({ label: 'Call', value: shown, href: `tel:+${contact.phone}`, Icon: Phone });
    items.push({ label: 'WhatsApp', value: shown, href: `https://wa.me/${contact.phone}`, Icon: WhatsAppIcon, external: true });
  }
  const profiles: [keyof typeof links, string, Item['Icon']][] = [
    ['linkedin', 'LinkedIn', LinkedInIcon],
    ['github', 'GitHub', GitHubIcon],
    ['leetcode', 'LeetCode', Code2],
    ['hackerrank', 'HackerRank', Trophy],
    ['instagram', 'Instagram', InstagramIcon],
  ];
  for (const [key, label, Icon] of profiles) {
    if (isSet(links[key])) items.push({ label, value: handle(links[key]), href: links[key], Icon, external: true });
  }

  const primary = isSet(contact.email) ? `mailto:${contact.email}?subject=${encodeURIComponent('Website enquiry')}` : isSet(contact.phone) ? `https://wa.me/${contact.phone}` : null;

  return (
    <section id="contact" className="section bg-white dark:bg-ink-soft/40">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" aria-hidden />
          <p className="eyebrow relative justify-center !text-brand">Contact</p>
          <h2 className="relative mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight !text-white sm:text-5xl">Have a website in mind? Let&apos;s build it.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-400">Tell me about your business and what you need – I&apos;ll reply with ideas, a timeline and a quote.</p>
          {primary && (
            <a href={primary} target={primary.startsWith('https') ? '_blank' : undefined} rel="noopener noreferrer" className="btn-primary relative mt-8 px-8 py-4 text-base">
              Start a project
            </a>
          )}
        </Reveal>

        {items.length > 0 && (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(({ label, value, href, Icon, external }, i) => (
              <Reveal as="li" key={label} delay={i * 60}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="card group flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:border-brand/60"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand/15 text-brand-deep transition group-hover:bg-brand group-hover:text-ink dark:text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-500">{label}</span>
                    <span className="block truncate font-semibold text-slate-900 dark:text-white">{value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
