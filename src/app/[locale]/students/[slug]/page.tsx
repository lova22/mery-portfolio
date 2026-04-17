import { students } from '@/data/students';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, User, Calendar, Building, Award } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const locales = ['en', 'fr', 'ar'];
  const params = [];

  for (const locale of locales) {
    for (const student of students) {
      params.push({ locale, slug: student.id });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const student = students.find((s) => s.id === slug);
  const t = await getTranslations({ locale, namespace: 'Students' });

  if (!student) {
    return {
      title: 'Student Not Found',
    };
  }

  return {
    title: `${student.name} - ${student.degree} | Dr. Meryem Youssoufi`,
    description: student.topic,
  };
}

export default async function StudentPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const student = students.find((s) => s.id === slug);

  if (!student) {
    notFound();
  }

  // We need to fetch translations on the server side for this component
  // But for the client-side parts (Navbar), we'll use the provider in layout
  const t = await getTranslations({ locale, namespace: 'Students' });
  const isRtl = locale === 'ar';

  return (
    <main className="min-h-screen bg-offwhite-50">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href={`/${locale}/#students`}
          className={`inline-flex items-center text-navy-600 hover:text-gold-600 transition-colors mb-8 font-medium ${isRtl ? 'flex-row-reverse' : ''}`}
        >
          <ArrowLeft className={`w-4 h-4 ${isRtl ? 'ml-2 rotate-180' : 'mr-2'}`} />
          {t('back_to_list') || 'Back to Students'}
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-navy-900 p-8 md:p-12 text-white">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold border border-gold-500/30">
                <Award className="w-4 h-4 mr-2" />
                {student.degree}
              </span>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${
                student.status === 'completed' 
                  ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                  : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
              }`}>
                <Calendar className="w-4 h-4 mr-2" />
                {student.years}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{student.topic}</h1>
            
            <div className="flex items-center text-gray-300 text-lg">
              <User className="w-5 h-5 mr-3 text-gold-500" />
              <span className="font-medium">{student.name}</span>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            {/* Academic Context */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  {t('institution') || 'Institution'}
                </h3>
                <p className="text-navy-900 font-medium">{student.faculty}</p>
                <p className="text-gray-600">{student.university}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {t('supervisor') || 'Supervisor'}
                </h3>
                {student.supervisors?.map((sup, idx) => (
                  <p key={idx} className="text-navy-900 font-medium">{sup}</p>
                ))}
              </div>
            </div>

            {/* Abstract */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-gold-600" />
                {t('abstract') || 'Abstract'}
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                <p>{student.abstract}</p>
              </div>
            </div>

            {/* Keywords */}
            {student.keywords && (
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {t('keywords') || 'Keywords'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {student.keywords.map((keyword, idx) => (
                    <span key={idx} className="px-4 py-2 bg-navy-50 text-navy-800 rounded-lg text-sm font-medium border border-navy-100 hover:bg-navy-100 transition-colors cursor-default">
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
