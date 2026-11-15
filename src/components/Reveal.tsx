import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

/** Fades and slides its content in the first time it scrolls into view. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }: { children: ReactNode; as?: ElementType; delay?: number; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.dataset.shown = 'true';
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.shown = 'true';
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
