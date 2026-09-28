import { Link } from 'react-router-dom';
import { Phone, CalendarPlus } from 'lucide-react';
import { siteConfig } from '@/config/site';
import ScrollReveal from './ScrollReveal';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Ready to Take the Next Step for Your Smile?',
  subtitle = "Whether you're looking for a new dental home or need help with a current dental concern, our team is ready to hear from you.",
}: CTASectionProps) {
  return (
    <section className="section bg-primary-900 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sage-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-coral-400/10 blur-3xl" />
      </div>

      <div className="container-section relative">
        <ScrollReveal className="max-w-2xl mx-auto text-center">
          <h2 className="text-fluid-h2 font-bold text-white text-balance">{title}</h2>
          <p className="mt-4 text-lg text-primary-100 leading-relaxed">{subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-accent">
              <CalendarPlus className="h-5 w-5" />
              Request an Appointment
            </Link>
            <a
              href={`tel:${siteConfig.business.phoneRaw}`}
              className="btn-outline border-white/30 text-white hover:bg-white hover:text-primary-700"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.business.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
