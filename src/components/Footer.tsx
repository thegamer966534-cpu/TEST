import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo textColor="text-white" />
            <p className="mt-4 text-sm text-primary-100 leading-relaxed max-w-xs">
              Comfortable, comprehensive dental care for families in Wichita Falls and the
              surrounding area.
            </p>
          </div>

          {/* Practice links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-sage-300 mb-4">
              Practice
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-primary-100 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/new-patients" className="text-primary-100 hover:text-white transition-colors">
                  New Patients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-sage-300 mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/faq" className="text-primary-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/new-patients" className="text-primary-100 hover:text-white transition-colors">
                  Insurance &amp; Financing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors">
                  Request Appointment
                </Link>
              </li>
              <li>
                <span className="text-primary-100 cursor-default">Privacy Policy</span>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-sage-300 mb-4">
              Visit Us
            </h3>
            <ul className="space-y-3 text-sm text-primary-100">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-sage-300 shrink-0" />
                <span>
                  {siteConfig.business.address.street}
                  <br />
                  {siteConfig.business.address.city}, {siteConfig.business.address.state}{' '}
                  {siteConfig.business.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-sage-300 shrink-0" />
                <a
                  href={`tel:${siteConfig.business.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 text-sage-300 shrink-0" />
                <span>
                  Mon–Thu: 8:00 AM – 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700">
          <p className="text-center text-sm text-primary-200">
            &copy; {year} {siteConfig.business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
