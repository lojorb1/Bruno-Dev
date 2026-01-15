
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact via WhatsApp"
    >
      <div className="absolute -inset-2 bg-green-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95">
        <MessageCircle className="text-white w-8 h-8" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
