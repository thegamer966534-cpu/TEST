import { Phone, MapPin, Clock, Navigation, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import AppointmentForm from '@/components/AppointmentForm';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
  const { business } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch With Us"
        subtitle="Call us, request an appointment online, or stop by our office in Wichita Falls. We are here to help you find the right time and discuss what you need."
        breadcrumb="Contact"
      />

      {/* Quick contact cards */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-section py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                value: business.phone,
                href: `tel:${business.phoneRaw}`,
                desc: 'Speak with our team directly',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                value: `${business.address.street}, ${business.address.city}, ${business.address.state}`,
                href: business.mapUrl,
                desc: 'We are conveniently located in Wichita Falls',
              },
              {
                icon: Mail,
                title: 'Email Us',
                value: business.email,
                href: business.mail,
                desc: 'For non-urgent inquiries',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="card p-6 h-full group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-card bg-sage-50 text-primary-500 mb-4 transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-bold text-ink mb-1">{item.title}</h3>
                  <p className="text-primary-500 font-medium mb-1 break-words">{item.value}</p>
                  <p className="text-sm text-ink-muted">{item.desc}</p>
                </div>
              );
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment form + hours */}
      <section className="section bg-ivory">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <ScrollReveal>
              <p className="eyebrow mb-3">Appointment Request</p>
              <h2 className="text-fluid-h2 font-bold mb-5 text-balance">
                Request an Appointment
              </h2>
              <p className="text-ink-muted leading-relaxed mb-8">
                Fill out the form below and our team will contact you to confirm
                availability. For urgent needs, please call our office directly.
              </p>
              <div className="card p-6 sm:p-8">
                <AppointmentForm />
              </div>
            </ScrollReveal>

            {/* Hours + map */}
            <ScrollReveal delay={150}>
              <p className="eyebrow mb-3">Office Hours</p>
              <h2 className="text-fluid-h2 font-bold mb-5 text-balance">
                When We're Open
              </h2>
              <div className="card p-6 mb-6">
                <ul className="space-y-3">
                  {business.hours.map((h) => (
                    <li
                      key={h.day}
                      className={`flex justify-between items-center py-2 border-b border-gray-100 last:border-0 ${
                        h.hours === 'Closed' ? 'opacity-60' : ''
                      }`}
                    >
                      <span className="font-heading font-semibold text-ink">{h.day}</span>
                      <span className="text-ink-muted">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </a>
                <a href={`tel:${business.phoneRaw}`} className="btn-outline">
                  <Phone className="h-5 w-5" />
                  Call the Office
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <ContactSection />
    </>
  );
}
