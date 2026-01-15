
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieBanner from './components/CookieBanner';
import LegalView from './components/LegalView';
import LoadingScreen from './components/LoadingScreen';
import { useLanguage } from './LanguageContext';

type ViewState = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [isLoading, setIsLoading] = useState(true);
  const { lang, t } = useLanguage();

  // Optimized Loading Sequence
  useEffect(() => {
    // Sync with LoadingScreen sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); 
    return () => clearTimeout(timer);
  }, []);

  // SEO: Optimized meta updates
  useEffect(() => {
    const isHome = view === 'home';
    const title = isHome 
      ? t.meta.title 
      : `${view === 'privacy' ? t.legal.privacy.title : t.legal.terms.title} | BrunoDev`;
    
    document.title = title;
    
    if (isHome) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
    }
    
    document.documentElement.lang = lang;
  }, [lang, view, t]);

  const handleHomeClick = () => {
    setView('home');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Performance: Memoized components to prevent unnecessary re-renders during interactions
  const mainContent = useMemo(() => {
    if (view !== 'home') {
      return (
        <LegalView 
          type={view as 'privacy' | 'terms'} 
          onClose={() => setView('home')} 
        />
      );
    }
    return (
      <>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <ContactForm />
      </>
    );
  }, [view]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-[100svh] bg-slate-950 font-sans antialiased text-slate-100 animate-fade-in">
      <Navbar onHomeClick={handleHomeClick} />
      
      <main className="relative">
        {mainContent}
      </main>

      <Footer 
        onHomeClick={handleHomeClick}
        onLegalClick={(type) => setView(type as ViewState)} 
      />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
};

export default App;
