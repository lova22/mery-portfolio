import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import { Download, Eye, BookOpen } from 'lucide-react';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}, {locale: 'ar'}];
}

export default function CoursPage() {
  const t = useTranslations('Cours');

  const categories = [
    {
      id: "urbaine",
      title: "علم الإجتماع الحضري - La sociologie urbaine",
      courses: [
        {
          id: 1,
          title: "علم الاجتماع الحضري -هناء محمد الجوهري -الموضوع",
          driveId: "1WZI1rVFiV9aJlf_r_Ww7dJg8xjYQrDvi"
        },
        {
          id: 2,
          title: "Thèorie علم الاجتماع الحضرية -السيد عبد العاطي السيد",
          driveId: "1EjN_24Wej3z2jeAsgDeGQz092-QdFhDT"
        },
        {
          id: 3,
          title: "La sociologie urbaine Stébé et Marchal- Ville Campagne",
          driveId: "1ACM3VE5ig4ow_SBfYReaJT5l-V3cqqQx"
        },
        {
          id: 4,
          title: "محمد ياسر الخواجة علم الاجتماع الحضري بين الرؤية والنظرية والتحليل",
          driveId: "1mism55V85Q1ddKKrNzeniplTjOPD1L2v"
        }
      ]
    },
    {
      id: "numerique",
      title: "السوسيولوجيا الرقمية - Sociologie numérique",
      courses: []
    },
    {
      id: "rurale",
      title: "السوسيولوجيا القروية - Sociologie rurale",
      courses: []
    }
  ];

  return (
    <main className="min-h-screen bg-offwhite-50">
      <Navbar />
      <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 relative inline-block">
            {t('title')}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gold-500 rounded-full"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="space-y-16">
          {categories.map(category => (
            <div key={category.id} className="scroll-mt-24" id={category.id}>
              <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
                <BookOpen className="w-8 h-8 text-gold-500" />
                <h2 className="text-3xl font-bold text-navy-900">
                  {category.title}
                </h2>
              </div>
              
              {category.courses.length > 0 ? (
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                  {category.courses.map(course => (
                    <div key={course.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                      <div className="p-6 pb-4">
                        <h3 className="text-xl font-bold text-navy-900 mb-2 line-clamp-2" dir="auto">
                          {course.title}
                        </h3>
                      </div>
                      
                      <div className="w-full h-[400px] bg-gray-50 border-t border-b border-gray-100">
                        {/* Google Drive PDF Embed */}
                        <iframe 
                          src={`https://drive.google.com/file/d/${course.driveId}/preview`} 
                          className="w-full h-full border-0" 
                          allow="autoplay"
                        ></iframe>
                      </div>

                      <div className="p-6 mt-auto bg-gray-50/50 flex gap-4">
                        <a 
                          href={`https://drive.google.com/file/d/${course.driveId}/view`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-navy-900 text-white px-4 py-3 rounded-xl hover:bg-navy-800 transition-colors font-medium text-sm sm:text-base"
                        >
                          <Eye className="w-5 h-5" />
                          {t('read')}
                        </a>
                        <a 
                          href={`https://drive.google.com/uc?export=download&id=${course.driveId}`}
                          className="flex-1 flex items-center justify-center gap-2 border-2 border-navy-900 text-navy-900 px-4 py-3 rounded-xl hover:bg-navy-50 transition-colors font-medium text-sm sm:text-base"
                        >
                          <Download className="w-5 h-5" />
                          {t('download')}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
                  <p className="text-gray-500 font-medium">قريباً / Bientôt disponible</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
