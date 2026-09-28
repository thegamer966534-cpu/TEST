import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-ivory">
      <div className="text-center max-w-md px-6">
        <p className="font-heading text-7xl font-bold text-primary-500 mb-4">404</p>
        <h1 className="font-heading text-2xl font-bold text-ink mb-3">
          Page Not Found
        </h1>
        <p className="text-ink-muted mb-8">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <Link to="/services" className="btn-outline">
            View Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
