import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs, type FAQItem } from '@/config/site';

export default function FAQAccordion({
  items = faqs,
}: {
  items?: FAQItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-card border transition-all duration-300 ${
              isOpen
                ? 'bg-white border-primary-200 shadow-md'
                : 'bg-white border-gray-200 hover:border-primary-200'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="font-heading font-semibold text-ink text-lg">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`grid transition-all duration-300 ease-smooth ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-ink-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
