import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumb?: string;
}

export default function PageHeader({
  title,
  subtitle,
  eyebrow,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sage-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-coral-400/10 blur-3xl" />
      </div>

      <div className="container-section relative py-16 md:py-24">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-sm text-primary-200 mb-6 animate-fade-in"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-primary-300" />
          <span className="text-sage-300">{breadcrumb || title}</span>
        </nav>

        {eyebrow && (
          <p className="eyebrow text-coral-300 mb-4 animate-fade-up">{eyebrow}</p>
        )}
        <h1 className="text-fluid-h1 font-bold text-balance animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-primary-100 max-w-2xl leading-relaxed animate-fade-up stagger-1">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
