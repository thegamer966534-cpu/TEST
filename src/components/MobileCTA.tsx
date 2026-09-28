import { Link } from 'react-router-dom';
import { Phone, CalendarPlus } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="grid grid-cols-2 gap-px bg-primary-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:${siteConfig.business.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-4 bg-white text-primary-500 font-heading font-semibold active:bg-primary-50 transition-colors"
          aria-label={`Call ${siteConfig.business.phone}`}
        >
          <Phone className="h-5 w-5" />
          Call
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 py-4 bg-primary-500 text-white font-heading font-semibold active:bg-primary-700 transition-colors"
        >
          <CalendarPlus className="h-5 w-5" />
          Request Appointment
        </Link>
      </div>
    </div>
  );
}
