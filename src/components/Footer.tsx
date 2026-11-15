import { ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-ink-line">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built by me.
        </p>
        <a href="#home" className="inline-flex items-center gap-1.5 font-medium hover:text-brand-deep dark:hover:text-brand">
          Back to top <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
