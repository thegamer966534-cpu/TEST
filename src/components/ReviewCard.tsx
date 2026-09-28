import { Quote } from 'lucide-react';
import StarRating from './StarRating';
import type { ReviewItem } from '@/config/site';

export default function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div className="card p-7 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <Quote className="h-8 w-8 text-sage-300" />
        <StarRating rating={review.rating} size="md" />
      </div>
      <p className="text-ink leading-relaxed flex-grow mb-5">"{review.text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-500 font-heading font-bold">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-heading font-semibold text-ink">{review.name}</p>
          <p className="text-sm text-ink-muted">
            {review.source} • {review.date}
          </p>
        </div>
      </div>
    </div>
  );
}
