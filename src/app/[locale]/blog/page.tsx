import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import { Link } from '@/i18n/routing';

export default function BlogPage() {
  const t = useTranslations('Blog');

  // Dummy data - in a real app this would come from a CMS or MDX files
  const posts = [
    { 
      id: 1, 
      title: 'The Intersection of Sociology and Chess', 
      slug: 'sociology-chess', 
      date: '2025-10-15', 
      excerpt: 'Exploring how strategic thinking in chess applies to social structures and community building.' 
    },
    { 
      id: 2, 
      title: 'Women in Leadership: Breaking Barriers in Souss-Massa', 
      slug: 'women-leadership', 
      date: '2025-09-22', 
      excerpt: 'Reflecting on my journey as the first female president of the regional chess league and the challenges overcome.' 
    },
    { 
      id: 3, 
      title: 'Migration Memory: A Sociological Perspective', 
      slug: 'migration-memory', 
      date: '2025-08-05', 
      excerpt: 'Analyzing the collective memory of migration and its impact on identity formation in modern Morocco.' 
    },
  ];

  return (
    <main className="min-h-screen bg-offwhite-50">
      <Navbar />
      <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-12 relative inline-block">
          {t('title')}
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gold-500 rounded-full"></span>
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
              <span className="text-sm text-gold-500 font-medium mb-3 block">{post.date}</span>
              <h2 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-navy-900 font-semibold hover:text-gold-500 inline-flex items-center transition-colors mt-auto"
              >
                {t('read_more')} 
                <span className="ml-2 rtl:hidden">&rarr;</span>
                <span className="mr-2 ltr:hidden">&larr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}