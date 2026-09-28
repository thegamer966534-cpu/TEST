import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Logo from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary-500 text-white text-sm py-2.5 text-center px-4">
        <span className="font-medium">{siteConfig.business.announcement}</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-md'
            : 'bg-ivory/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-section flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {siteConfig.nav.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-body text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-primary-500' : 'text-ink hover:text-primary-500'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-coral-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.business.phoneRaw}`}
              className="btn-ghost text-sm"
              aria-label={`Call ${siteConfig.business.phone}`}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.business.phone}
            </a>
            <Link to="/contact" className="btn-primary text-sm">
              Request Appointment
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${siteConfig.business.phoneRaw}`}
              className="flex items-center justify-center h-10 w-10 rounded-pill bg-sage-100 text-primary-500 hover:bg-sage-200 transition-colors"
              aria-label={`Call ${siteConfig.business.phone}`}
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center justify-center h-10 w-10 rounded-pill bg-primary-50 text-primary-500 hover:bg-primary-100 transition-colors"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-ivory shadow-2xl animate-slide-down flex flex-col">
            <div className="flex items-center justify-between h-16 px-5 border-b border-primary-100">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center h-10 w-10 rounded-pill bg-primary-50 text-primary-500"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col p-5 gap-1" aria-label="Mobile navigation">
              <Link
                to="/"
                className={`px-4 py-3 rounded-pill font-body font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-ink hover:bg-primary-50'
                }`}
              >
                Home
              </Link>
              {siteConfig.nav.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-3 rounded-pill font-body font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-ink hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto p-5 border-t border-primary-100 space-y-3">
              <Link to="/contact" className="btn-primary w-full">
                Request Appointment
              </Link>
              <a
                href={`tel:${siteConfig.business.phoneRaw}`}
                className="btn-outline w-full"
              >
                <Phone className="h-4 w-4" />
                Call {siteConfig.business.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
