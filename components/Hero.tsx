
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-600/20 blur-[100px] md:blur-[128px] -z-10 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-600/20 blur-[100px] md:blur-[128px] -z-10 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-grid-white -z-20"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-sm animate-in fade-in">
          <span className="flex h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-xs md:text-sm font-medium text-blue-200">{t.hero.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-tight animate-in slide-in-from-bottom-10">
          <span className="block text-white mb-1 md:mb-0">{t.hero.title1}</span>
          <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent pb-1 md:pb-2 leading-tight">
            {t.hero.title2}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed px-4 md:px-0 animate-in fade-in" style={{ animationDelay: '200ms' }}>
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4 sm:px-0 animate-in fade-in" style={{ animationDelay: '400ms' }}>
          <a 
            href="#contact"
            className="group w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-white text-slate-950 rounded-full font-bold text-base md:text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-slate-900 text-white border border-white/10 rounded-full font-bold text-base md:text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-60 md:opacity-50 transition-all duration-500 max-w-4xl mx-auto px-4 animate-in fade-in" style={{ animationDelay: '600ms' }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
            <span className="text-xl md:text-2xl font-bold text-white">10+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-center md:text-left leading-tight">{t.hero.stats.years}</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
            <span className="text-xl md:text-2xl font-bold text-white">50+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-center md:text-left leading-tight">{t.hero.stats.projects}</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
            <span className="text-xl md:text-2xl font-bold text-white">99%</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-center md:text-left leading-tight">{t.hero.stats.uptime}</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
            <span className="text-xl md:text-2xl font-bold text-white">24/7</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-center md:text-left leading-tight">{t.hero.stats.monitoring}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
