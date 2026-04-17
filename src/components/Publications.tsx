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
};

const publications: Publication[] = [
  {
    title: 'Citizenship at the Margins: Migration and Local Belonging',
    authors: 'M. Youssoufi, G. Sebaux',
    year: '2024',
    venue: 'Journal of Social Integration',
    type: 'Article',
    link: '#',
  },
  {
    title: 'Borders of Memory: Representations of Migration in Urban Spaces',
    authors: 'M. Youssoufi (ed.)',
    year: '2023',
    venue: 'Innsbruck University Press',
    type: 'Book',
    link: '#',
  },
  {
    title: 'Gender, Sport Leadership, and Social Inclusion through Chess',
    authors: 'M. Youssoufi, H. Zahra',
    year: '2022',
    venue: 'Proceedings of Social Dynamics',
    type: 'Proceedings',
    link: '#',
  },
  {
    title: 'Europe and the Borders of Citizenship',
    authors: 'G. Sebaux, M. Youssoufi (eds.)',
    year: '2021',
    venue: 'Faculty of Letters & Human Sciences, Ibn Zohr',
    type: 'Book',
    link: '#',
  },
  {
    title: 'Collective Memory and Second-Generation Identity',
    authors: 'S. Ben Ali, M. Youssoufi',
    year: '2021',
    venue: 'Migration Studies Review',
    type: 'Article',
    link: '#',
  },
  {
    title: 'Civic Participation among New Arrivals',
    authors: 'R. El Fassi, M. Youssoufi',
    year: '2020',
    venue: 'Urban Citizenship Yearbook',
    type: 'Chapter',
    link: '#',
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

        <div className="space-y-4">
          {publications.map((p, idx) => (
            <motion.div
              key={p.title + idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-offwhite-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">{p.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    <span className="font-medium">{p.authors}</span> · {p.year} · {p.venue} · {t(`types.${p.type.toLowerCase()}`)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {p.link && (
                    <a
                      href={p.link}
                      className="inline-flex items-center px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:border-navy-300 text-navy-800 hover:text-navy-900 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('actions.view')}
                    </a>
                  )}
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm rounded-md bg-navy-900 text-white hover:bg-navy-800 transition-colors"
                    onClick={() => {
                      const bib = `@misc{youssoufi_${p.year}_${idx},\n  title={${p.title}},\n  author={${p.authors}},\n  year={${p.year}},\n  howpublished={${p.venue}}\n}`;
                      navigator.clipboard?.writeText(bib);
                    }}
                  >
                    {t('actions.copy_bib')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
