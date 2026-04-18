'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

type Publication = {
  title: string;
  authors: string;
  year: string;
  venue: string;
  type: 'Article' | 'Chapter' | 'Book' | 'Proceedings';
  link?: string;
  image?: string;
};

const publications: Publication[] = [
  {
    title: "RECHERCHES SUR L'HISTOIRE DU MAROC",
    authors: 'Meryem Youssoufi et al.',
    year: '2024',
    venue: 'Publications universitaires',
    type: 'Book',
    link: 'https://magactuevents.com/parution-du-livre-recherches-sur-lhistoire-du-maroc-etat-des-lieux-et-perspectives/',
    image: '/images/RECHERCHES SUR L\'HISTOIRE DU MAROC.jpg'
  },
  {
    title: 'Migration, exil, diasporas au prisme de la rupture',
    authors: 'Meryem Youssoufi et al.',
    year: '2024',
    venue: 'Presses universitaires de Rennes',
    type: 'Book',
    link: 'https://books.openedition.org/pur/309252',
    image: '/images/Migration, exil, diasporas au prisme de la rupture.jpg'
  },
];

export default function Publications() {
  const t = useTranslations('Publications');

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{t('title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((p, idx) => (
            <motion.div
              key={p.title + idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-offwhite-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6 p-6">
                {p.image && (
                  <div className="flex-shrink-0 w-32 h-44 mx-auto md:mx-0">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover rounded-md shadow-sm border border-gray-200"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-grow justify-center">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        <span className="font-medium text-gray-900">{p.authors}</span>
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{t(`types.${p.type.toLowerCase()}`)}</span>
                        <span>•</span>
                        <span>{p.year}</span>
                        <span>•</span>
                        <span>{p.venue}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0 md:justify-end">
                      {p.link && p.link !== '#' && (
                        <a
                          href={p.link}
                          className="inline-flex items-center px-4 py-2 text-sm rounded-md border border-gray-300 hover:border-navy-300 text-navy-800 hover:text-navy-900 hover:bg-gray-50 transition-colors font-medium"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t('actions.view')}
                        </a>
                      )}
                      <button
                        className="inline-flex items-center px-4 py-2 text-sm rounded-md bg-navy-900 text-white hover:bg-navy-800 transition-colors font-medium"
                        onClick={() => {
                          const bib = `@misc{youssoufi_${p.year}_${idx},\n  title={${p.title}},\n  author={${p.authors}},\n  year={${p.year}},\n  howpublished={${p.venue}}\n}`;
                          navigator.clipboard?.writeText(bib);
                        }}
                      >
                        {t('actions.copy_bib')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
