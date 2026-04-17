export type Student = {
  id: string;
  name: string;
  degree: string;
  topic: string;
  years?: string;
  status?: string;
  faculty?: string;
  university?: string;
  abstract?: string;
  supervisors?: string[];
  keywords?: string[];
};

export const students: Student[] = [
  {
    id: 'a-el-amrani',
    name: 'A. El Amrani',
    degree: 'PhD',
    topic: 'Migration, citizenship, and urban integration in Souss‑Massa',
    years: '2023–present',
    status: 'ongoing',
    faculty: 'Faculty of Letters and Human Sciences',
    university: 'University Ibn Zohr, Agadir',
    abstract: 'This research investigates the socio-spatial dynamics of migrant integration in the Souss-Massa region. It focuses on how urban spaces facilitate or hinder the exercise of citizenship rights and social belonging among sub-Saharan migrants.',
    supervisors: ['Dr. Meryem Youssoufi'],
    keywords: ['Migration', 'Urban Sociology', 'Citizenship', 'Souss-Massa']
  },
  {
    id: 's-ben-ali',
    name: 'S. Ben Ali',
    degree: 'PhD',
    topic: 'Collective memory and identity construction among second‑generation migrants',
    years: '2022–present',
    status: 'ongoing',
    faculty: 'Faculty of Letters and Human Sciences',
    university: 'University Ibn Zohr, Agadir',
    abstract: 'A sociological study exploring how the children of immigrants reconstruct their identity through collective memory. The project analyzes intergenerational transmission of cultural heritage and its role in navigating dual identities.',
    supervisors: ['Dr. Meryem Youssoufi'],
    keywords: ['Collective Memory', 'Identity', 'Second Generation', 'Diaspora']
  },
  {
    id: 'h-zahra',
    name: 'H. Zahra',
    degree: 'MA',
    topic: 'Gender, sport leadership, and social inclusion through chess',
    years: '2024',
    status: 'completed',
    faculty: 'Faculty of Letters and Human Sciences',
    university: 'University Ibn Zohr, Agadir',
    abstract: 'This thesis examines the role of chess as a tool for female empowerment and social inclusion. It provides a case study of leadership dynamics within regional chess leagues in Morocco.',
    supervisors: ['Dr. Meryem Youssoufi'],
    keywords: ['Gender Studies', 'Sport Sociology', 'Chess', 'Leadership']
  },
  {
    id: 'm-idrissi',
    name: 'M. Idrissi',
    degree: 'PhD',
    topic: 'Transnational networks and remittance economies in Southern Morocco',
    years: '2021–present',
    status: 'ongoing',
    faculty: 'Faculty of Letters and Human Sciences',
    university: 'University Ibn Zohr, Agadir',
    abstract: 'An analysis of how transnational migration networks influence local economies in Southern Morocco. The study looks beyond financial remittances to include social and cultural transfers.',
    supervisors: ['Dr. Meryem Youssoufi'],
    keywords: ['Transnationalism', 'Economy', 'Migration', 'Development']
  },
  {
    id: 'r-el-fassi',
    name: 'R. El Fassi',
    degree: 'MA',
    topic: 'Civic participation and local citizenship among new arrivals',
    years: '2023–2024',
    status: 'completed',
    faculty: 'Faculty of Letters and Human Sciences',
    university: 'University Ibn Zohr, Agadir',
    abstract: 'This research assesses the level of civic engagement among newly arrived migrants in Agadir. It explores the barriers to participation and the informal mechanisms of local citizenship.',
    supervisors: ['Dr. Meryem Youssoufi'],
    keywords: ['Civic Participation', 'Local Citizenship', 'Migration', 'Agadir']
  },
  {
    id: 'n-bakkali',
    name: 'N. Bakkali',
    degree: 'PhD',
    topic: 'Memory, heritage, and urban spaces in post‑migration neighborhoods',
    years: '2022–present',
    status: 'ongoing',
    faculty: 'Faculty of Letters and Human Sciences',
    university: 'University Ibn Zohr, Agadir',
    abstract: 'Investigating the transformation of urban spaces in neighborhoods with high migration history. The study focuses on how heritage is preserved, contested, or reinvented in changing urban landscapes.',
    supervisors: ['Dr. Meryem Youssoufi'],
    keywords: ['Urban Heritage', 'Memory', 'Migration', 'Space']
  }
];
