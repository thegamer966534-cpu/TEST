import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ServiceItem } from '@/config/site';

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: ServiceItem;
  index?: number;
}) {
  const Icon = service.icon;

  return (
    <div
      className="card group p-7 flex flex-col h-full"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-card bg-sage-50 text-primary-500 transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110">
          <Icon className="h-7 w-7" />
        </div>
      </div>
      <h3 className="font-heading text-xl font-bold mb-2">{service.name}</h3>
      <p className="text-ink-muted leading-relaxed mb-5 flex-grow">
        {service.shortDesc}
      </p>
      <Link
        to={`/services/${service.slug}`}
        className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary-500 hover:text-primary-700 transition-colors group/link"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}
