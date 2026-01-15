
import React from 'react';
import { SERVICES_ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">{t.services.tag}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.services.title}</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {SERVICES_ICONS[index]}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
