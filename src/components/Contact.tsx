'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, BookOpen, GraduationCap, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/meryemyoussoufi', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{t('title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-6">{t('connect_title')}</h3>
            
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="bg-navy-50 p-3 rounded-full text-navy-900">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-900">{t('email_label')}</h4>
                <a href="mailto:m.youssoufi@uiz.ac.ma" className="text-gold-600 hover:text-gold-700 transition-colors">
                  m.youssoufi@uiz.ac.ma
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="bg-navy-50 p-3 rounded-full text-navy-900">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-900">{t('scholar_label')}</h4>
                <a href="#" className="text-gray-600 hover:text-navy-900 transition-colors block">
                  Google Scholar Profile
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="bg-navy-50 p-3 rounded-full text-navy-900">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-900">{t('researchgate_label')}</h4>
                <a href="https://www.researchgate.net/profile/Meryem-Youssoufi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-navy-900 transition-colors block">
                  ResearchGate Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-offwhite-50 p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('form_name')}</label>
                <input 
                  type="text" 
                  name="name"
                  id="name" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
                  placeholder={t('form_name_placeholder')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('form_email')}</label>
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
                  placeholder={t('form_email_placeholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('form_message')}</label>
                <textarea 
                  name="message"
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={t('form_message_placeholder')}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-navy-900 text-white py-3 rounded-lg font-semibold hover:bg-navy-800 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t('sending')}</span>
                  </>
                ) : status === 'success' ? (
                  <span>{t('sent_success')}</span>
                ) : (
                  <>
                    <span>{t('form_submit')}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center mt-2">{t('send_error')}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
