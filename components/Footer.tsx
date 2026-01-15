
import React from 'react';
import { Code2, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SOCIAL_LINKS } from '../constants';

interface FooterProps {
  onLegalClick?: (type: string) => void;
  onHomeClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick, onHomeClick }) => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <button 
              onClick={() => onHomeClick?.()}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity focus:outline-none"
            >
              <Code2 className="text-blue-500 w-6 h-6" />
              <span className="text-xl font-bold tracking-tight text-white">bruno<span className="text-blue-500">dev</span>.eu</span>
            </button>
            <p className="text-slate-500 text-sm max-w-[250px] text-center md:text-left">
              Architecting secure and scalable software solutions since 2014.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex space-x-6 text-sm text-slate-500">
              <button 
                onClick={() => onLegalClick?.('privacy')}
                className="hover:text-white transition-colors"
              >
                {t.footer.privacy}
              </button>
              <button 
                onClick={() => onLegalClick?.('terms')}
                className="hover:text-white transition-colors"
              >
                {t.footer.terms}
              </button>
            </div>
            <p className="text-slate-600 text-[10px] tracking-widest uppercase font-bold mt-2">
              &copy; {new Date().getFullYear()} BrunoDev. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
