'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Youtube, Facebook, Instagram, Video, FileText } from 'lucide-react';
import Image from 'next/image';

type MediaType = 'video' | 'article' | 'social';

type MediaItem = {
  id: string;
  type: MediaType;
  title: string;
  source: string;
  url: string;
  date?: string;
  embedUrl?: string;
  thumbnail?: string;
};

const mediaItems: MediaItem[] = [
  {
    id: 'yt-1',
    type: 'video',
    title: 'Interview sur YouTube',
    source: 'YouTube',
    url: 'https://www.youtube.com/watch?v=hKQ5mysW728',
    embedUrl: 'https://www.youtube.com/embed/hKQ5mysW728',
    date: '2024'
  },
  {
    id: 'fb-1',
    type: 'video',
    title: 'Couverture Coupe du Trône',
    source: 'Facebook',
    url: 'https://www.facebook.com/watch/?v=1152380112905209',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1152380112905209&show_text=false&width=560',
    date: '2024'
  },
  {
    id: 'fb-2',
    type: 'video',
    title: 'Interview Spéciale',
    source: 'Facebook',
    url: 'https://www.facebook.com/watch/?v=1214658707344992',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1214658707344992&show_text=false&width=560',
    date: '2024'
  },
  {
    id: 'insta-1',
    type: 'social',
    title: 'Reel Instagram',
    source: 'Instagram',
    url: 'https://www.instagram.com/reel/DGRHj_wOrk2/',
    date: '2024'
  },
  {
    id: 'frme-1',
    type: 'article',
    title: 'Actualités FRME (1592)',
    source: 'FRME Blog',
    url: 'https://frmechecs.ma/blog/archives/1592',
    date: '2024'
  },
  {
    id: 'frme-2',
    type: 'article',
    title: 'Actualités FRME (1353)',
    source: 'FRME Blog',
    url: 'https://frmechecs.ma/blog/archives/1353',
    date: '2023'
  },
  {
    id: 'tiktok-1',
    type: 'social',
    title: 'Vidéo TikTok FRME',
    source: 'TikTok',
    url: 'https://www.tiktok.com/@frmechecs/video/7534827531640393016',
    embedUrl: 'https://www.tiktok.com/embed/v2/7534827531640393016',
    date: '2024'
  },
  {
    id: 'sawtkom-1',
    type: 'article',
    title: 'Article Sawtkom',
    source: 'Sawtkom.ma',
    url: 'https://sawtkom.ma/73460.html',
    date: '2024'
  },
  {
    id: 'frme-3',
    type: 'article',
    title: 'Actualités FRME (5070)',
    source: 'FRME Blog',
    url: 'https://frmechecs.ma/blog/archives/5070',
    date: '2024'
  }
];

const getIcon = (type: MediaType, source: string) => {
  if (source.includes('YouTube')) return <Youtube className="w-5 h-5" />;
  if (source.includes('Facebook')) return <Facebook className="w-5 h-5" />;
  if (source.includes('Instagram')) return <Instagram className="w-5 h-5" />;
  if (type === 'video') return <Play className="w-5 h-5" />;
  if (type === 'article') return <FileText className="w-5 h-5" />;
  return <ExternalLink className="w-5 h-5" />;
};

export default function MediaSection() {
  const t = useTranslations('Media');

  return (
    <section id="media" className="py-20 bg-offwhite-50">
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
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              {/* Media Preview/Embed Area */}
              <div className="aspect-video w-full bg-gray-100 relative group overflow-hidden">
                {item.embedUrl ? (
                   <iframe
                     src={item.embedUrl}
                     className="w-full h-full"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     loading="lazy"
                   />
                ) : (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                     <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                        <div className="p-4 bg-white/90 rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
                           {getIcon(item.type, item.source)}
                        </div>
                     </div>
                     {/* Fallback pattern for articles without thumbnails */}
                     <div className="w-full h-full bg-navy-50 flex items-center justify-center opacity-20">
                        <FileText className="w-16 h-16 text-navy-200" />
                     </div>
                  </a>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {item.source}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-navy-900 mb-3 line-clamp-2">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold-600 transition-colors">
                    {item.title}
                  </a>
                </h3>

                <div className="mt-auto pt-4 border-t border-gray-50">
                   <a 
                     href={item.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors"
                   >
                     {t('view')} <ExternalLink className="w-4 h-4 ml-2" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
