import { Link } from 'react-router-dom';
import { HeartPulse, Stethoscope, ShieldCheck, Sparkles, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig, team, whyChoose } from '@/config/site';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

export default function About() {
  const { images } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Dental Care That Puts the Patient First"
        subtitle="Your dental care should feel personal, understandable, and straightforward. At Smart Mouth Family Dental, our goal is to create a welcoming experience while helping you understand your oral health and treatment options."
        breadcrumb="About"
      />

      {/* Intro section */}
      <section className="section bg-ivory">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-card overflow-hidden shadow-xl">
                <img
                  src={images.about}
                  alt={images.aboutAlt}
                  className="w-full h-[320px] sm:h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="eyebrow mb-3">Our Philosophy</p>
              <h2 className="text-fluid-h2 font-bold mb-5 text-balance">
                A Dental Experience Built Around You
              </h2>
              <p className="text-ink-muted leading-relaxed mb-4">
                We believe patients deserve more than a treatment plan. They deserve clear
                communication, a welcoming environment, and the confidence to understand
                their choices.
              </p>
              <p className="text-ink-muted leading-relaxed">
                Whether you're maintaining your smile, addressing a dental concern, or
                exploring cosmetic treatment, we'll help you understand the next step.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-section">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A More Comfortable Way to Visit the Dentist"
            subtitle="We focus on what matters most to patients — comfort, clarity, and care that fits your life."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="card p-7 h-full group">
                    <div className="flex h-14 w-14 items-center justify-center rounded-card bg-primary-50 text-primary-500 mb-5 transition-all duration-500 group-hover:bg-coral-400 group-hover:text-white group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-ink-muted leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-sage-50">
        <div className="container-section">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the Team Behind Your Smile"
            subtitle="Our team is here to make every visit feel straightforward, welcoming, and focused on your individual needs."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="card overflow-hidden h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary-500 font-medium mb-3">
                      {member.credentials}
                    </p>
                    <p className="text-ink-muted leading-relaxed text-sm">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office gallery */}
      <section className="section bg-ivory">
        <div className="container-section">
          <SectionHeading
            eyebrow="Our Office"
            title="A Welcoming Space in Wichita Falls"
            subtitle="Our office is designed to help you feel comfortable from the moment you arrive."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="rounded-card overflow-hidden shadow-lg group">
                <img
                  src={images.office}
                  alt={images.officeAlt}
                  className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="rounded-card overflow-hidden shadow-lg group">
                <img
                  src={images.cta}
                  alt={images.ctaAlt}
                  className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Take Care of Your Smile"
        subtitle="Have a question or ready to schedule? Contact Smart Mouth Family Dental in Wichita Falls today."
      />
    </>
  );
}
