
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[128px] -z-10 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[128px] -z-10 rounded-full"></div>
      <div className="absolute inset-0 bg-grid-white -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-sm font-medium text-blue-200">{t.hero.badge}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          <span className="block text-white">{t.hero.title1}</span>
          <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent pb-2">
            {t.hero.title2}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact"
            className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl font-bold text-white">10+</span>
            <span className="text-xs uppercase tracking-widest font-medium text-left">{t.hero.stats.years}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl font-bold text-white">50+</span>
            <span className="text-xs uppercase tracking-widest font-medium text-left">{t.hero.stats.projects}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl font-bold text-white">99%</span>
            <span className="text-xs uppercase tracking-widest font-medium text-left">{t.hero.stats.uptime}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl font-bold text-white">24/7</span>
            <span className="text-xs uppercase tracking-widest font-medium text-left">{t.hero.stats.monitoring}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
