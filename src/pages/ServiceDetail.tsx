import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CalendarPlus, CheckCircle2 } from 'lucide-react';
import { siteConfig, services } from '@/config/site';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';
import { useParams, Navigate } from 'react-router-dom';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const { business } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={service.name}
        subtitle={service.shortDesc}
        breadcrumb={service.name}
      />

      {/* Content */}
      <section className="section bg-ivory">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <ScrollReveal>
              <div className="rounded-card overflow-hidden shadow-xl sticky top-28">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-[340px] sm:h-[460px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal delay={150}>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-card bg-sage-50 text-primary-500">
                  <Icon className="h-8 w-8" />
                </div>
                <h2 className="font-heading text-2xl font-bold">{service.name}</h2>
              </div>

              <p className="text-ink-muted leading-relaxed text-lg mb-8">
                {service.description}
              </p>

              <h3 className="font-heading text-lg font-bold mb-4">What This Includes</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sage-600 shrink-0 mt-0.5" />
                    <span className="text-ink">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-primary">
                  <CalendarPlus className="h-5 w-5" />
                  Request an Appointment
                </Link>
                <a href={`tel:${business.phoneRaw}`} className="btn-outline">
                  <Phone className="h-5 w-5" />
                  Call the Office
                </a>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 mt-8 text-sm font-semibold text-primary-500 hover:text-primary-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Services
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section bg-white">
        <div className="container-section">
          <ScrollReveal>
            <h2 className="text-fluid-h2 font-bold text-center mb-12 text-balance">
              Explore Other Services
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s, i) => {
                const OtherIcon = s.icon;
                return (
                  <ScrollReveal key={s.slug} delay={i * 100}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="card p-7 h-full group block"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-card bg-sage-50 text-primary-500 mb-4 transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110">
                        <OtherIcon className="h-7 w-7" />
                      </div>
                      <h3 className="font-heading text-lg font-bold mb-2">{s.name}</h3>
                      <p className="text-ink-muted leading-relaxed text-sm mb-4">
                        {s.shortDesc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary-500 group-hover:text-primary-700 transition-colors">
                        Learn More
                        <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </ScrollReveal>
                );
              })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
