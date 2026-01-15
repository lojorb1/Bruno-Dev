
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Locale } from '../translations';

interface NavbarProps {
  onHomeClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.expertise, href: '#expertise' },
    { name: t.nav.contact, href: '#contact' }
  ];

  const languages: { code: Locale; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
    { code: 'es', label: 'ES' }
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    onHomeClick?.();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-3 md:py-4 border-b border-white/10' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-14">
          <a 
            href="#home"
            onClick={handleLogoClick}
            className="flex items-center space-x-2 group hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-white whitespace-nowrap">
              bruno<span className="text-blue-500">dev</span>.eu
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${lang === l.code ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <a 
              href="#contact"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20"
            >
              {t.nav.getStarted}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[100vh] py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="px-6 space-y-6">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 text-xl font-semibold py-2 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <hr className="border-white/5" />

          <div className="space-y-4">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Globe className="w-3 h-3" /> Select Language
            </p>
            <div className="flex items-center gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl border transition-all ${lang === l.code ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-5 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20"
          >
            {t.nav.getStarted}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
