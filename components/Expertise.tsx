
import React from 'react';
import { TECHNOLOGIES } from '../constants';
import { useLanguage } from '../LanguageContext';

const Expertise: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">{t.expertise.tag}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">{t.expertise.title}</h3>
          </div>
          <p className="text-slate-500 font-mono text-sm">v.2024.1 // {t.expertise.version}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECHNOLOGIES.map((tech, index) => (
            <div 
              key={index}
              className="px-6 py-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col justify-between"
            >
              <span className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">
                {t.expertise.categories[tech.category]}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-white mb-2">{t.expertise.ctaTitle}</h4>
            <p className="text-slate-400">
              {t.expertise.ctaDesc}
            </p>
          </div>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20"
          >
            {t.expertise.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
