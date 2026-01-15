
import React, { useState, useEffect } from 'react';
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

  // Simulate initial load for polished UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5s allows loading animations to play through meaningfully
    return () => clearTimeout(timer);
  }, []);

  // SEO: Dynamic metadata update on language or view change
  useEffect(() => {
    if (view === 'home') {
      document.title = t.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', t.meta.description);
      }
    } else {
      const legalTitle = view === 'privacy' ? t.legal.privacy.title : t.legal.terms.title;
      document.title = `${legalTitle} | BrunoDev`;
    }
    
    // Set lang attribute on html tag for SEO and accessibility
    document.documentElement.lang = lang;
  }, [lang, view, t]);

  const handleHomeClick = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased text-slate-100 animate-in fade-in duration-1000">
      <Navbar onHomeClick={handleHomeClick} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <Services />
            <Expertise />
            <ContactForm />
          </>
        ) : (
          <LegalView 
            type={view as 'privacy' | 'terms'} 
            onClose={() => setView('home')} 
          />
        )}
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
