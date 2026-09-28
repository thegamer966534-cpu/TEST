import type { ReactNode } from 'react';
import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  children,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-fluid-h2 font-bold text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-ink-muted leading-relaxed">{subtitle}</p>
      )}
      {children}
    </ScrollReveal>
  );
}
