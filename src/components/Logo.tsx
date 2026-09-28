import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
  textColor?: string;
}

export default function Logo({
  variant = 'full',
  className = '',
}: LogoProps) {
  return (
    <Link
      to="/"
      className={`flex items-center ${className}`}
      aria-label="Smart Mouth Family Dental — Home"
    >
      <img
        src="/logo.png"
        alt="Smart Mouth Family Dental"
        className="h-10 w-auto shrink-0 object-contain"
      />
    </Link>
  );
}