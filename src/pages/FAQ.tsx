import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

export default function FAQ() {
  const { business } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Answers to the questions people ask before choosing a dentist. Don't see your question? Give us a call."
        breadcrumb="FAQ"
      />

      <section className="section bg-ivory">
        <div className="container-section max-w-4xl">
          <ScrollReveal>
            <FAQAccordion />
          </ScrollReveal>

          {/* Still have questions */}
          <ScrollReveal className="mt-12">
            <div className="rounded-card bg-primary-50 p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-3 text-balance">
                Still Have Questions?
              </h2>
              <p className="text-ink-muted mb-6 max-w-md mx-auto">
                Our team is happy to help. Call us or request an appointment and we will
                get back to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={`tel:${business.phoneRaw}`} className="btn-primary">
                  <Phone className="h-5 w-5" />
                  Call {business.phone}
                </a>
                <Link to="/contact" className="btn-outline">
                  Request Appointment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
