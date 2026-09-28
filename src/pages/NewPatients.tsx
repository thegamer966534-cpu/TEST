import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ClipboardList, CalendarClock, FileText, CreditCard } from 'lucide-react';
import { siteConfig } from '@/config/site';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import AppointmentForm from '@/components/AppointmentForm';
import CTASection from '@/components/CTASection';

export default function NewPatients() {
  const { business, images } = siteConfig;

  const steps = [
    {
      icon: Phone,
      title: 'Contact Our Team',
      description:
        'Call us or use the appointment request form to tell us what you need and when you would like to come in.',
    },
    {
      icon: CalendarClock,
      title: 'Confirm Your Visit',
      description:
        'Our team will contact you to confirm availability and help you understand what to expect during your first appointment.',
    },
    {
      icon: ClipboardList,
      title: 'Arrive & Get Care',
      description:
        'Bring any relevant information with you. We will help you feel comfortable and walk you through your treatment options.',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="New Patients"
        title="New to Smart Mouth Family Dental?"
        subtitle="We're here to make your first visit as straightforward as possible. Contact our team to discuss your needs, appointment options, and what to expect when you visit."
        breadcrumb="New Patients"
      />

      {/* What to expect */}
      <section className="section bg-ivory">
        <div className="container-section">
          <SectionHeading
            eyebrow="What to Expect"
            title="Your First Visit, Step by Step"
            subtitle="We want you to feel prepared and comfortable from the start."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={i} delay={i * 120}>
                  <div className="text-center">
                    <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary-50 text-primary-500 mb-5">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-ink-muted leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance & Financing */}
      <section className="section bg-white">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="eyebrow mb-3">Insurance &amp; Financing</p>
              <h2 className="text-fluid-h2 font-bold mb-5 text-balance">
                Understanding Your Payment Options
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                We want to help you understand your options before you commit to treatment.
                Contact our office to discuss insurance, financing, and payment plans.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'We accept major PPO insurance',
                  'CareCredit® financing is accepted',
                  'An in-house membership plan is available for patients without insurance',
                  'Clear, upfront treatment planning',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sage-600 shrink-0 mt-0.5" />
                    <span className="text-ink">{point}</span>
                  </li>
                ))}
              </ul>
              <a href={`tel:${business.phoneRaw}`} className="btn-outline">
                <Phone className="h-5 w-5" />
                Call to Discuss Options
              </a>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="rounded-card overflow-hidden shadow-xl">
                <img
                  src={images.about}
                  alt={images.aboutAlt}
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Appointment form */}
      <section className="section bg-sage-50">
        <div className="container-section max-w-3xl">
          <SectionHeading
            eyebrow="Request an Appointment"
            title="Tell Us What You Need"
            subtitle="Fill out the form below and our team will contact you to confirm availability."
          />
          <div className="mt-10">
            <div className="card p-6 sm:p-10">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
