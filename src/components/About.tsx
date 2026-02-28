'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, Globe, BookOpen, GraduationCap } from 'lucide-react';

export default function About() {
  const t = useTranslations('About');

  const socialLinks = [
    { icon: Globe, href: "https://www.researchgate.net/profile/Meryem-Youssoufi", label: "ResearchGate" },
    { icon: BookOpen, href: "https://theses.fr/134530128", label: "Thèses.fr" },
    { icon: GraduationCap, href: "#", label: "Google Scholar" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg text-gray-600 rtl:text-right"
          >
            <p className="mb-6 leading-relaxed">
              {t('paragraph1')}
            </p>
            <p className="leading-relaxed mb-8">
              {t('paragraph2')}
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <motion.a 
                href="/cv.pdf" 
                download
                className="inline-flex items-center px-6 py-3 border-2 border-navy-900 text-navy-900 rounded-lg font-semibold hover:bg-navy-900 hover:text-white transition-colors duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                {t('download_cv')}
              </motion.a>

              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-navy-900 rounded-full text-navy-900 hover:bg-navy-900 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-offwhite-50 p-8 rounded-2xl shadow-lg border-l-4 border-gold-500"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-4">{t('philosophy_title')}</h3>
            <p className="text-gray-600 italic">
              &quot;{t('philosophy_quote')}&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
