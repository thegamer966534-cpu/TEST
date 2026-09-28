import { Link } from 'react-router-dom';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig, reviews } from '@/config/site';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import ReviewCard from '@/components/ReviewCard';
import StarRating from '@/components/StarRating';
import CTASection from '@/components/CTASection';

export default function Reviews() {
  const { business } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Patient Reviews"
        title="Real Experiences From Our Patients"
        subtitle="See what patients are saying about their experiences with Smart Mouth Family Dental."
        breadcrumb="Reviews"
      />

      {/* Rating summary */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-section py-12">
          <ScrollReveal className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
            <div>
              <div className="flex items-center gap-3 justify-center mb-2">
                <span className="font-heading text-5xl font-bold text-primary-500">
                  {business.rating}
                </span>
                <Star className="h-8 w-8 text-coral-400 fill-coral-400" />
              </div>
              <StarRating rating={business.rating} size="lg" className="justify-center" />
              <p className="text-sm text-ink-muted mt-2">Featured reviews</p>
            </div>
            <div className="hidden sm:block h-20 w-px bg-gray-200" />
            <div>
              <span className="font-heading text-5xl font-bold text-primary-500">
                {business.reviewCount}
              </span>
              <p className="text-sm text-ink-muted mt-2">Reviews shown on live site</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section bg-ivory">
        <div className="container-section">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Patients Are Saying"
            subtitle="These reviews are attributed to verified Google reviews. Reviews are not edited in a way that changes their meaning."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 100}>
                <ReviewCard review={review} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <a
              href={business.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLink className="h-5 w-5" />
              View on Google
            </a>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
