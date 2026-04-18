'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { students } from '@/data/students';

export default function Students() {
  const t = useTranslations('Students');
  const locale = useLocale();

  return (
    <section id="students" className="py-20 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((st, idx) => (
            <NextLink 
              key={st.id} 
              href={`/${locale}/students/${st.id}`}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-offwhite-50 rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">{st.name}</h3>
                    <p className="text-sm text-gold-600 font-medium">{st.degree}</p>
                  </div>
                  {st.status && (
                    <span className={`px-2.5 py-1 text-xs rounded-full border ${
                      st.status === 'completed'
                        ? 'bg-green-50 text-green-700 border-green-200'
                        : 'bg-navy-50 text-navy-800 border-navy-100'
                    }`}>
                      {st.status === 'completed' ? t('status.completed') : t('status.ongoing')}
                    </span>
                  )}
                </div>
                <div className="mt-4 text-sm text-gray-700 leading-relaxed flex-grow">
                  <p className="line-clamp-3"><span className="font-semibold">{t('labels.topic')}:</span> {st.topic}</p>
                  {st.years && <p className="mt-2 text-xs text-gray-500"><span className="font-semibold">{t('labels.years')}:</span> {st.years}</p>}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm font-medium text-gold-600 flex items-center">
                  {t('view_details') || 'View Details'} →
                </div>
              </motion.div>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
}
