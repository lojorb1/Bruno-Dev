
import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Linkedin, Github, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const SITE_KEY = (import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validate = (): boolean => {
    const errors: FieldErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim().length < 2) {
      errors.name = t.contact.form.validation.name;
    }

    if (!emailRegex.test(formData.email.trim())) {
      errors.email = t.contact.form.validation.email;
    }

    if (formData.message.trim().length < 10) {
      errors.message = t.contact.form.validation.message;
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (typeof window.grecaptcha === 'undefined') {
        throw new Error(t.contact.form.errorCaptcha);
      }

      const captchaToken = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(SITE_KEY, { action: 'contact_submit' })
            .then(resolve)
            .catch(reject);
        });
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || t.contact.form.error);
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({});
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || t.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">{t.contact.tag}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">{t.contact.title}</h3>
            <p className="text-slate-400 text-lg mb-12">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <Mail className="text-blue-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <p className="text-white font-medium">contact@brunodev.eu</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                  <MapPin className="text-purple-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">{t.contact.locationLabel}</p>
                  <p className="text-white font-medium">Europe (Remote Worldwide)</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-blue-600 transition-colors">
                <Linkedin className="text-white w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-slate-700 transition-colors">
                <Github className="text-white w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-20"></div>
            <div className="relative glass-card p-8 md:p-10 rounded-[2rem]">
              {isSuccess ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-500 w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{t.contact.form.successTitle}</h4>
                  <p className="text-slate-400">{t.contact.form.successDesc}</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-8 text-blue-400 hover:text-blue-300 font-semibold">
                    {t.contact.form.successButton}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {error && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p>{error}</p>
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">{t.contact.form.nameLabel}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-5 py-4 bg-slate-900 border rounded-2xl text-white focus:outline-none transition-colors ${fieldErrors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500'}`}
                        placeholder={t.contact.form.placeholderName}
                      />
                      {fieldErrors.name && <p className="mt-1 text-xs text-red-400 font-medium">{fieldErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">{t.contact.form.emailLabel}</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-5 py-4 bg-slate-900 border rounded-2xl text-white focus:outline-none transition-colors ${fieldErrors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500'}`}
                        placeholder={t.contact.form.placeholderEmail}
                      />
                      {fieldErrors.email && <p className="mt-1 text-xs text-red-400 font-medium">{fieldErrors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">{t.contact.form.messageLabel}</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full px-5 py-4 bg-slate-900 border rounded-2xl text-white focus:outline-none transition-colors ${fieldErrors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500'}`}
                      placeholder={t.contact.form.placeholderMessage}
                    />
                    {fieldErrors.message && <p className="mt-1 text-xs text-red-400 font-medium">{fieldErrors.message}</p>}
                  </div>
                  
                  <div className="space-y-4">
                    <button disabled={isSubmitting} className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                      {isSubmitting ? (
                        <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          {t.contact.form.submit}
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-slate-500 text-center leading-tight">
                      {t.contact.form.captchaDisclaimer}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
