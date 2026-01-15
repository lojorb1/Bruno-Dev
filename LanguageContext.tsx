
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, translations } from './translations';

interface LanguageContextType {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SUPPORTED_LOCALES: Locale[] = ['en', 'pt', 'es'];

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Locale>('en');

  useEffect(() => {
    const normalizeLocale = (raw: string | null): Locale => {
      if (!raw) return 'en';
      // Normalize common variants to our supported short codes
      // e.g., pt-BR -> pt, es-ES -> es
      const clean = raw.split('-')[0].toLowerCase();
      if (SUPPORTED_LOCALES.includes(clean as Locale)) {
        return clean as Locale;
      }
      return 'en';
    };

    // Check URL first for crawlers (e.g. ?lang=pt)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    const saved = localStorage.getItem('lang');
    
    if (urlLang && SUPPORTED_LOCALES.includes(urlLang as Locale)) {
      setLangState(urlLang as Locale);
    } else if (saved) {
      setLangState(normalizeLocale(saved));
    } else {
      const browserLang = normalizeLocale(navigator.language);
      setLangState(browserLang);
    }
  }, []);

  const setLang = (newLang: Locale) => {
    if (SUPPORTED_LOCALES.includes(newLang)) {
      setLangState(newLang);
      localStorage.setItem('lang', newLang);
      
      // Update URL query param without refreshing to help SEO state
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.pushState({}, '', url);
    }
  };

  // Fallback protection: ensure we always return a valid translation object
  const t = translations[lang] || translations['en'];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
