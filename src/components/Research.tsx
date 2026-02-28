'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const books = [
  {
    id: 1,
    title: "Repräsentation und Erinnerung der Migration",
    subtitle: "Représentation et mémoire de la migration",
    editors: "Dirk Rupnow, Gwénola Sebaux, Bettina Severin-Barboutie, Meryem Youssoufi, Zaihia Zeroulou (Hg./éd.)",
    publisher: "innsbruck university press",
    image: "/images/book2.jpg",
    tags: ["Migration", "Memory", "Representation"],
    color: "from-green-900 to-black"
  },
  {
    id: 2,
    title: "FRONTIÈRES DE LA CITOYENNETÉ",
    subtitle: "ENJEUX DE L’ACCUEIL DES PRIMO-ARRIVANTS",
    editors: "Gwénola Sebaux et Meryem Youssoufi (dir.)",
    publisher: "Faculté des Lettres et des Sciences Humaines, Université Ibn Zohr, Agadir",
    date: "Octobre 2021",
    isbn: "978-9920-615-14-3",
    image: "/images/book1.jpg",
    tags: ["Migration", "Social Exclusion", "Multiculturalism", "Citizenship"],
    color: "from-red-900 to-black"
  }
];

export default function Research() {
  const t = useTranslations('Research');

  return (
    <section id="research" className="py-20 bg-offwhite-50">
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

        <div className="grid md:grid-cols-2 gap-10">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`h-2 bg-gradient-to-r ${book.color}`} />
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Book Cover Placeholder */}
                  <div className="w-full md:w-1/3 flex-shrink-0 relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <Image
                       src={book.image}
                       alt={book.title}
                       fill
                       className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {book.title}
                    </h3>
                    <h4 className="text-md font-medium text-gray-700 mb-4 italic">
                      {book.subtitle}
                    </h4>
                    
                    <div className="text-sm text-gray-600 space-y-2 mb-6">
                      <p><span className="font-semibold">Editors:</span> {book.editors}</p>
                      <p><span className="font-semibold">Publisher:</span> {book.publisher}</p>
                      {book.date && <p><span className="font-semibold">Date:</span> {book.date}</p>}
                      {book.isbn && <p><span className="font-semibold">ISBN:</span> {book.isbn}</p>}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {book.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-navy-50 text-navy-800 text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* International Collaboration Section */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="mt-20 border-t border-gray-200 pt-16"
        >
            <div className="text-center mb-12">
               <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">{t('collab_title')}</h3>
               <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
               <div className="grid md:grid-cols-12">
                  <div className="md:col-span-4 bg-navy-50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                     <div className="text-center">
                        <span className="block text-5xl mb-4">🌍</span>
                        <h4 className="text-xl font-bold text-navy-900">{t('citer_project_name')}</h4>
                     </div>
                  </div>
                  <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center">
                     <h4 className="text-xl font-bold text-navy-900 mb-4">{t('citer_full_title')}</h4>
                     <p className="text-gray-600 mb-6 leading-relaxed">
                        {t('citer_description')}
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center px-4 py-2 bg-offwhite-50 text-navy-800 rounded-lg text-sm font-medium border border-gray-200">
                           🏛️ University Ibn Zohr
                        </span>
                        <span className="inline-flex items-center px-4 py-2 bg-offwhite-50 text-navy-800 rounded-lg text-sm font-medium border border-gray-200">
                           🇫🇷 UCO France
                        </span>
                     </div>
                  </div>
               </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
