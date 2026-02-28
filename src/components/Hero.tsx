'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-offwhite-50 to-gray-100 overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left z-10 rtl:md:text-right"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-4 leading-tight">
            {t('title')}
          </h1>
          <h2 className="text-xl md:text-2xl text-gold-500 mb-8 font-medium">
            {t('subtitle')}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start rtl:md:justify-start">
            <a href="#research" className="px-8 py-3 bg-navy-900 text-white rounded-full font-semibold hover:bg-navy-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block text-center">
              {t('cta_research')}
            </a>
            <a href="#leadership" className="px-8 py-3 bg-transparent border-2 border-navy-900 text-navy-900 rounded-full font-semibold hover:bg-navy-900 hover:text-white transition-all hover:-translate-y-1 inline-block text-center">
              {t('cta_leadership')}
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold-500 shadow-2xl z-10">
             {/* Note: User needs to place 'professor.jpg' in public/images/ */}
             <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">
                <Image 
                  src="/images/professor.jpg" 
                  alt="Dr. Meryem Youssoufi"
                  fill
                  className="object-cover"
                  priority
                />
             </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -z-0 top-0 right-10 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -z-0 bottom-0 left-10 w-72 h-72 bg-navy-900/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}