
import React, { useState, useEffect } from 'react';
import { Shield, X, Settings as SettingsIcon } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const saved = localStorage.getItem('bruno_dev_cookies');
    if (!saved) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullSettings = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('bruno_dev_cookies', JSON.stringify(fullSettings));
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const minSettings = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('bruno_dev_cookies', JSON.stringify(minSettings));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('bruno_dev_cookies', JSON.stringify(settings));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-8 md:right-auto md:max-w-md z-[100] p-4 md:p-0 animate-in slide-in-from-bottom-10 duration-500">
      <div className="glass-card rounded-[2rem] p-6 shadow-2xl border border-white/20 max-h-[85vh] md:max-h-[none] overflow-y-auto overflow-x-hidden">
        {!showSettings ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600/20 rounded-lg flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="text-white font-bold">{t.cookies.title}</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.cookies.desc}
            </p>
            <div className="flex flex-col gap-2">
              <button 
                onClick={handleAcceptAll}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/10"
              >
                {t.cookies.acceptAll}
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={handleRejectNonEssential}
                  className="py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-[11px] md:text-xs font-bold transition-all"
                >
                  {t.cookies.rejectAll}
                </button>
                <button 
                  onClick={() => setShowSettings(true)}
                  className="py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-[11px] md:text-xs font-bold transition-all flex items-center justify-center gap-1.5 md:gap-2"
                >
                  <SettingsIcon className="w-3 h-3" />
                  {t.cookies.settings}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex justify-between items-center sticky top-0 bg-slate-900/40 backdrop-blur-sm pb-2 z-10">
              <h4 className="text-white font-bold">{t.cookies.settings}</h4>
              <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-white text-xs font-bold uppercase tracking-tight">{t.cookies.essential.title}</p>
                  <p className="text-slate-500 text-[11px] leading-tight mt-0.5">{t.cookies.essential.desc}</p>
                </div>
                <div className="w-10 h-5 bg-blue-600/50 rounded-full flex items-center px-1 opacity-60 cursor-not-allowed flex-shrink-0">
                  <div className="w-3.5 h-3.5 bg-white rounded-full translate-x-5"></div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-white text-xs font-bold uppercase tracking-tight">{t.cookies.analytics.title}</p>
                  <p className="text-slate-500 text-[11px] leading-tight mt-0.5">{t.cookies.analytics.desc}</p>
                </div>
                <button 
                  onClick={() => setSettings({...settings, analytics: !settings.analytics})}
                  className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors flex-shrink-0 ${settings.analytics ? 'bg-blue-600' : 'bg-slate-700'}`}
                >
                  <div className={`w-3.5 h-3.5 bg-white rounded-full transition-transform ${settings.analytics ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </button>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-white text-xs font-bold uppercase tracking-tight">{t.cookies.marketing.title}</p>
                  <p className="text-slate-500 text-[11px] leading-tight mt-0.5">{t.cookies.marketing.desc}</p>
                </div>
                <button 
                  onClick={() => setSettings({...settings, marketing: !settings.marketing})}
                  className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors flex-shrink-0 ${settings.marketing ? 'bg-blue-600' : 'bg-slate-700'}`}
                >
                  <div className={`w-3.5 h-3.5 bg-white rounded-full transition-transform ${settings.marketing ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </button>
              </div>
            </div>

            <button 
              onClick={handleSavePreferences}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-xl shadow-blue-600/20"
            >
              {t.cookies.save}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
