'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Leadership() {
  const t = useTranslations('Leadership');

  return (
    <section id="leadership" className="py-20 bg-navy-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          {/* Abstract Chess Board Pattern */}
          <div className="grid grid-cols-8 grid-rows-8 w-[200vw] h-[200vw] -rotate-12 origin-top-left transform translate-x-[-50%] translate-y-[-50%]">
             {Array.from({ length: 64 }).map((_, i) => (
               <div key={i} className={`${(Math.floor(i / 8) + i) % 2 === 0 ? 'bg-white' : 'bg-transparent'}`} />
             ))}
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-50"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
             <h3 className="text-2xl font-bold mb-6 text-white leading-tight">
               {t('role_title')}
             </h3>
             <p className="text-gray-300 mb-6 text-lg leading-relaxed">
               {t('role_description')}
             </p>
             
             <div className="bg-navy-800 p-6 rounded-xl border border-navy-700 shadow-lg">
               <h4 className="text-gold-500 font-bold text-lg mb-2 flex items-center">
                 <span className="mr-2">🏆</span> {t('achievement_title')}
               </h4>
               <p className="text-gray-400">
                 {t('achievement_description')}
               </p>
             </div>

             <div className="mt-8 relative h-64 w-full rounded-xl overflow-hidden border-2 border-navy-700 bg-navy-800/50 group">
                <Image
                  src="/images/najahsouss.jpg"
                  alt="Souss-Massa Chess Team / Throne Cup Victory"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent z-10" />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white text-navy-900 p-8 rounded-2xl shadow-2xl relative"
          >
             <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
               ♟️
             </div>
             <h3 className="text-xl font-bold mb-4">{t('vision_title')}</h3>
             <p className="text-gray-600 mb-6 italic">
               &quot;{t('vision_quote')}&quot;
             </p>
             <ul className="space-y-3">
               <li className="flex items-center text-gray-700">
                 <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                 {t('vision_point1')}
               </li>
               <li className="flex items-center text-gray-700">
                 <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                 {t('vision_point2')}
               </li>
               <li className="flex items-center text-gray-700">
                 <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                 {t('vision_point3')}
               </li>
             </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
