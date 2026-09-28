import { Link } from 'react-router-dom';
import { Phone, CalendarPlus, Star, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig, services, reviews, whyChoose, processSteps, team } from '@/config/site';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import StarRating from '@/components/StarRating';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const { business, images } = siteConfig;

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative bg-ivory overflow-hidden">
        <div className="container-section pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 rounded-pill bg-sage-50 px-4 py-2 mb-6">
                  <MapPin className="h-4 w-4 text-primary-500" />
                  <span className="text-sm font-medium text-primary-500">
                    Wichita Falls, Texas
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-fluid-h1 font-bold text-balance leading-[1.05]">
                  Comfortable Dental Care for Your Whole Family
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-xl">
                  From preventive checkups to restorative and cosmetic care, Smart Mouth
                  Family Dental provides personalized dental care for patients in Wichita Falls
                  and the surrounding area.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary">
                    <CalendarPlus className="h-5 w-5" />
                    Request an Appointment
                  </Link>
                  <a href={`tel:${business.phoneRaw}`} className="btn-outline">
                    <Phone className="h-5 w-5" />
                    Call {business.phone}
                  </a>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-8 flex items-center gap-4">
                  <StarRating rating={business.rating} size="lg" />
                  <span className="text-sm text-ink-muted">
                    <span className="font-semibold text-ink">4.8 on Google</span>
                    • 154 reviews
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <ScrollReveal delay={150} className="relative">
                <div className="relative rounded-card overflow-hidden shadow-2xl">
                  <img
                    src={images.hero}
                    alt={images.heroAlt}
                    className="w-full h-[340px] sm:h-[440px] lg:h-[520px] object-cover"
                    loading="eager"
                    width={1400}
                    height={933}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-card bg-white shadow-xl px-5 py-4 animate-fade-up stagger-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-50 text-coral-400">
                    <Star className="h-6 w-6 fill-coral-400" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-ink text-lg leading-none">
                      {business.rating} / 5
                    </p>
                    <p className="text-sm text-ink-muted">Google Rating</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust Strip ===== */}
      <section className="border-y border-gray-100 bg-white">
        <div className="container-section py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {[
              { icon: Star, value: '4.8', label: 'Google Rating' },
              { value: '154', label: 'Google Reviews' },
              { value: 'Family', label: 'Dentistry' },
              { value: 'Wichita Falls', label: 'Texas' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={i}
                  delay={i * 80}
                  className="flex flex-col items-center text-center"
                >
                  {Icon && (
                    <Icon className="h-6 w-6 text-coral-400 fill-coral-400 mb-2" />
                  )}
                  <span className="font-heading text-2xl md:text-3xl font-bold text-primary-500">
                    {item.value}
                  </span>
                  <span className="text-sm text-ink-muted mt-1">{item.label}</span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="section bg-ivory">
        <div className="container-section">
          <SectionHeading
            eyebrow="Our Services"
            title="Dental Care for Every Stage of Your Smile"
            subtitle="Whether you're due for a routine checkup, dealing with a dental concern, or looking for ways to improve your smile, our team can help you understand your options and choose the next step that's right for you."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 80}>
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="section bg-white">
        <div className="container-section">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A More Comfortable Way to Visit the Dentist"
            subtitle="Good dental care is about more than treatment. It's about feeling heard, understanding your options, and knowing what to expect."
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

      {/* ===== Team / Practice Intro ===== */}
      <section className="section bg-sage-50">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative rounded-card overflow-hidden shadow-xl">
                <img
                  src={images.team}
                  alt={images.teamAlt}
                  className="w-full h-[320px] sm:h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="eyebrow mb-3">Meet the Team</p>
              <h2 className="text-fluid-h2 font-bold mb-5 text-balance">
                Meet the Team Behind Your Smile
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                Choosing a dentist is a personal decision. Our goal is to make every visit
                feel straightforward, welcoming, and focused on your individual needs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Welcoming, patient-focused environment',
                  'Clear explanations of your treatment options',
                  'Comprehensive care for the whole family',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sage-600 shrink-0 mt-0.5" />
                    <span className="text-ink">{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary">
                Meet Our Team
                <ArrowRight className="h-5 w-5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="section bg-ivory">
        <div className="container-section">
          <SectionHeading
            eyebrow="How It Works"
            title="Your Visit, Made Simple"
            subtitle="We have made getting the care you need as straightforward as possible."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8 relative">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="relative text-center">
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary-500 text-white font-heading text-2xl font-bold mb-5 shadow-lg shadow-primary-500/20">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-ink-muted leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-px border-t-2 border-dashed border-sage-300" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link to="/contact" className="btn-primary">
              <CalendarPlus className="h-5 w-5" />
              Request an Appointment
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Reviews ===== */}
      <section className="section bg-white">
        <div className="container-section">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="See Why Patients Choose Smart Mouth"
            subtitle="See what patients are saying about their experiences with Smart Mouth Family Dental."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 100}>
                <ReviewCard review={review} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link to="/reviews" className="btn-outline">
              Read More Reviews
              <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== New Patients ===== */}
      <section className="section bg-primary-50">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="eyebrow mb-3">New Patients</p>
              <h2 className="text-fluid-h2 font-bold mb-5 text-balance">
                New to Smart Mouth Family Dental?
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                We're here to make your first visit as straightforward as possible. Contact
                our team to discuss your needs, appointment options, and what to expect
                when you visit.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Discuss your needs with our team',
                  'Understand your appointment options',
                  'Know what to expect at your first visit',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-ink">{point}</span>
                  </li>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/new-patients" className="btn-primary">
                  I'm a New Patient
                </Link>
                <a href={`tel:${business.phoneRaw}`} className="btn-outline">
                  <Phone className="h-5 w-5" />
                  Call the Office
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="rounded-card overflow-hidden shadow-xl">
                <img
                  src={images.family}
                  alt={images.familyAlt}
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section bg-ivory">
        <div className="container-section max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the questions people ask before choosing a dentist."
          />
          <div className="mt-10">
            <FAQAccordion />
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link to="/faq" className="btn-outline">
              View All FAQs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <CTASection />

      {/* ===== Contact ===== */}
      <ContactSection />
    </>
  );
}
