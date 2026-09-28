import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig, services } from '@/config/site';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';

export default function Services() {
  const { images } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Dental Care for Every Stage of Your Smile"
        subtitle="Whether you're due for a routine checkup, dealing with a dental concern, or looking for ways to improve your smile, our team can help you understand your options and choose the next step that's right for you."
        breadcrumb="Services"
      />

      {/* Services grid */}
      <section className="section bg-ivory">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={(i % 3) * 100}>
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="bg-coral-400 text-white">
        <div className="container-section py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-2">
                Have a Dental Emergency?
              </h2>
              <p className="text-white/90">
                Contact our office to discuss your situation and available appointment
                options.
              </p>
            </div>
            <a
              href={`tel:${siteConfig.business.phoneRaw}`}
              className="btn bg-white text-coral-500 hover:bg-coral-50 hover:-translate-y-0.5 shrink-0"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Image showcase */}
      <section className="section bg-white">
        <div className="container-section">
          <SectionHeading
            eyebrow="Comprehensive Care"
            title="One Practice for Your Whole Family"
            subtitle="From preventive checkups to restorative and cosmetic treatments, we offer a broad range of dental services under one roof."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: images.hero, alt: images.heroAlt, label: 'Consultations' },
              { img: images.team, alt: images.teamAlt, label: 'Team Care' },
              { img: images.cta, alt: images.ctaAlt, label: 'Modern Facility' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="rounded-card overflow-hidden shadow-lg group relative">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/80 to-transparent p-5">
                    <p className="font-heading text-white font-semibold text-lg">
                      {item.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
