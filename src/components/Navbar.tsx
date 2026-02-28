'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import React from 'react';

export default function Navbar() {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const switchLocale = (newLocale: string) => {
    // If the locale is the same, just close the dropdown
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }
    
    // Switch locale
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const navItems = [
    { label: t('about'), href: '/#about' },
    { label: t('research'), href: '/#research' },
    { label: t('leadership'), href: '/#leadership' },
    { label: t('blog'), href: '/blog' },
    { label: t('contact'), href: '/#contact' },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-navy-900">
            Dr. Youssoufi
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="text-gray-600 hover:text-gold-500 transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-gray-600 hover:text-navy-900 transition-colors focus:outline-none"
              >
                <Globe className="w-5 h-5 mr-1" />
                <span className="uppercase font-medium">{locale}</span>
              </button>
              
              {isOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden border border-gray-100 ring-1 ring-black ring-opacity-5 z-20">
                    {['en', 'fr', 'ar'].map((l) => (
                      <button
                        key={l}
                        onClick={() => switchLocale(l)}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-gold-500 transition-colors ${locale === l ? 'text-gold-500 font-semibold' : 'text-gray-700'}`}
                      >
                        {l === 'en' ? 'English' : l === 'fr' ? 'Français' : 'العربية'}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-100 mt-4">
                <div className="flex items-center px-3 mb-2 text-gray-500 text-sm font-medium">
                  <Globe className="w-4 h-4 mr-2" />
                  Language
                </div>
                <div className="grid grid-cols-3 gap-2 px-3">
                  {['en', 'fr', 'ar'].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        switchLocale(l);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`py-2 text-center text-sm rounded-md border ${locale === l ? 'bg-navy-50 border-navy-200 text-navy-900 font-semibold' : 'border-gray-200 text-gray-600'}`}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}