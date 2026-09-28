import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Reviews from '@/pages/Reviews';
import NewPatients from '@/pages/NewPatients';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import { siteConfig } from '@/config/site';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function StructuredData() {
  const { business } = siteConfig;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: business.name,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <StructuredData />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow pb-16 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/new-patients" element={<NewPatients />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </BrowserRouter>
  );
}
