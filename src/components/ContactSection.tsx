import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { siteConfig } from '@/config/site';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const { business } = siteConfig;

  return (
    <section className="section bg-ivory">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info side */}
          <ScrollReveal>
            <p className="eyebrow mb-3">Get in Touch</p>
            <h2 className="text-fluid-h2 font-bold mb-6 text-balance">
              Contact Smart Mouth Family Dental
            </h2>
            <p className="text-ink-muted leading-relaxed mb-8">
              Have a question or ready to schedule? Reach out by phone or visit us in
              Wichita Falls — we are happy to help you find the right time and discuss what
              you need.
            </p>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-sage-50 text-primary-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ink mb-1">Address</h3>
                  <p className="text-ink-muted">
                    {business.address.street}
                    <br />
                    {business.address.city}, {business.address.state}{' '}
                    {business.address.zip}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-sage-50 text-primary-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ink mb-1">Phone</h3>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="text-primary-500 hover:text-primary-700 transition-colors font-medium"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-sage-50 text-primary-500">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-heading font-semibold text-ink mb-2">Hours</h3>
                  <ul className="space-y-1 text-sm text-ink-muted">
                    {business.hours.map((h) => (
                      <li key={h.day} className="flex justify-between max-w-xs">
                        <span className="font-medium text-ink">{h.day}</span>
                        <span>{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

          {/* Map side */}
          <ScrollReveal delay={150}>
            <div className="rounded-card overflow-hidden shadow-lg h-full min-h-[420px] bg-white">
              <iframe
                title="Map to Smart Mouth Family Dental in Wichita Falls, TX"
                src={business.mapsEmbed}
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
