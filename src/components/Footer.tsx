'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white py-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left rtl:md:text-right">
            <h3 className="text-2xl font-bold text-white mb-2">Dr. Meryem Youssoufi</h3>
            <p className="text-gray-400 max-w-sm">
              {t('tagline')}
            </p>
          </div>

          <div className="flex space-x-8 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
              {t('link_scholar')}
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
              {t('link_researchgate')}
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="border-t border-navy-900 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Dr. Meryem Youssoufi. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
