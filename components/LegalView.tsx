
import React, { useEffect } from 'react';
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface LegalViewProps {
  type: 'privacy' | 'terms';
  onClose: () => void;
}

const LegalView: React.FC<LegalViewProps> = ({ type, onClose }) => {
  const { t } = useLanguage();
  const content = type === 'privacy' ? t.legal.privacy : t.legal.terms;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:border-white/20">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-semibold">{t.legal.back}</span>
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center">
            {type === 'privacy' ? (
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            ) : (
              <FileText className="w-6 h-6 text-blue-400" />
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {content.title}
          </h1>
        </div>
        
        <p className="text-slate-500 font-mono text-xs mb-12">
          {content.lastUpdated}
        </p>

        <div className="space-y-12">
          {content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
              <h2 className="text-xl font-bold text-white border-l-4 border-blue-600 pl-4 py-1">
                {section.h}
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {section.p}
              </p>
            </section>
          ))}
        </div>
        
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center text-center">
          <p className="text-slate-500 text-sm mb-6">
            {t.legal.footerNote}
          </p>
          <a 
            href="mailto:contact@brunodev.eu"
            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all"
          >
            contact@brunodev.eu
          </a>
        </div>
      </div>
    </div>
  );
};

export default LegalView;
