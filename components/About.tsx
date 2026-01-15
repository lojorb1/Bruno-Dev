
import React from 'react';
import { Shield, Zap, Terminal } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            {/* Ambient glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900">
              <img 
                src="https://i.ibb.co/pjfnK6xC/profile-01.jpg" 
                alt="Bruno - Senior Developer" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-slate-950 z-10">
              <span className="text-3xl font-bold tracking-tighter">10</span>
              <span className="text-xs font-bold uppercase tracking-widest">{t.about.badge}</span>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">{t.about.tag}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {t.about.title}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {t.about.p1}
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t.about.p2}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{t.about.features.security.title}</h4>
                  <p className="text-slate-500 text-sm">{t.about.features.security.desc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{t.about.features.performance.title}</h4>
                  <p className="text-slate-500 text-sm">{t.about.features.performance.desc}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/20 p-3 rounded-xl">
                  <Terminal className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{t.about.features.mastery.title}</h4>
                  <p className="text-slate-500 text-sm">{t.about.features.mastery.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
