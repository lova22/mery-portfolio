export default function JsonLd() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Dr. Meryem Youssoufi',
      jobTitle: ['Professeure Habilitée', 'Chercheuse'],
      affiliation: [
        {
          '@type': 'Organization',
          name: 'University Ibn Zohr'
        },
        {
          '@type': 'Organization',
          name: 'Souss-Massa Regional Chess League'
        }
      ],
      knowsAbout: ['Sociology', 'Anthropology', 'Migration', 'Chess', 'Leadership'],
      url: 'https://meryem-youssoufi.com', 
      image: 'https://meryem-youssoufi.com/images/professor.jpg'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      headline: 'Repräsentation und Erinnerung der Migration',
      author: {
        '@type': 'Person',
        name: 'Meryem Youssoufi'
      },
      publisher: {
        '@type': 'Organization',
        name: 'innsbruck university press'
      },
      image: 'https://meryem-youssoufi.com/images/book2.jpg'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      headline: 'FRONTIÈRES DE LA CITOYENNETÉ: ENJEUX DE L’ACCUEIL DES PRIMO-ARRIVANTS',
      author: {
        '@type': 'Person',
        name: 'Meryem Youssoufi'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Faculté des Lettres et des Sciences Humaines, Université Ibn Zohr, Agadir'
      },
      datePublished: '2021-10',
      image: 'https://meryem-youssoufi.com/images/book1.jpg'
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}