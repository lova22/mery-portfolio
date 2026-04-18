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
    id: 'demo-student-1',
    name: 'Demo Student 1',
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
    id: 'demo-student-2',
    name: 'Demo Student 2',
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
    id: 'demo-student-3',
    name: 'Demo Student 3',
    degree: 'MA',
    topic: 'Gender, sport leadership, and social inclusion through chess',
    years: '2024',
    status: 'completed',
    faculty: 'Faculty of Letters and Human Sciences',
    university: 'University Ibn Zohr, Agadir',
    abstract: 'This thesis examines the role of chess as a tool for female empowerment and social inclusion. It provides a case study of leadership dynamics within regional chess leagues in Morocco.',
    supervisors: ['Dr. Meryem Youssoufi'],
    keywords: ['Gender Studies', 'Sport Sociology', 'Chess', 'Leadership']
  }
];
