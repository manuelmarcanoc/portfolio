export type EducationItem = {
  period: string;
  institution: string;
  title: string;
};

export type ExperienceItem = {
  role: string;
  description: string;
  details?: string[];
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export const portfolioData = {
  name: 'Manuel Marcano',
  title: 'Software Developer',
  about:
    'Desarrollador de software con formación en Desarrollo de Aplicaciones Multiplataforma (DAM) y pasión por el diseño UX/UI. Experiencia en atención al cliente y hostelería, lo que me aporta habilidades de comunicación, organización y trabajo en equipo. Creativo y orientado a resultados, busco aportar soluciones digitales innovadoras.',
  contact: {
    email: 'manuelmarcanocubillas@gmail.com',
    phone: '+34 653 097 798',
    location: 'Barcelona',
  },
  education: [
    {
      period: '2024–2025',
      institution: 'Prat FP',
      title: 'Desarrollo de Aplicaciones Multiplataforma',
    },
    {
      period: '2024',
      institution: 'Universidad de Mondragón',
      title: 'Curso de gestión de proyectos',
    },
    {
      period: '2025',
      institution: 'Domestika',
      title: 'Especialización en diseño UX/UI',
    },
  ] as EducationItem[],
  experience: [
    {
      role: 'Recepcionista / Camarero',
      description:
        'Atención al público, gestión de clientes y trabajo en equipo en entornos dinámicos',
    },
    {
      role: 'Proyectos académicos (DAM)',
      description: 'Proyectos desarrollados durante mi formación, aplicando:',
      details: [
        'Desarrollo de aplicaciones multiplataforma',
        'Lógica de programación',
        'Diseño de interfaces UX/UI',
      ],
    },
  ] as ExperienceItem[],
  languages: [
    { name: 'Inglés', level: 'C1' },
    { name: 'Francés', level: 'B2' },
    { name: 'Alemán', level: 'B1' },
  ] as LanguageItem[],
  technicalSkills: [
    {
      category: 'Lenguajes',
      items: ['Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      category: 'Frameworks y herramientas',
      items: ['React', 'Git', 'MySQL', 'NetBeans', 'VS Code', 'Figma'],
    },
    {
      category: 'Metodologías ágiles',
      items: ['Scrum', 'Kanban'],
    },
     {
      category: 'Diseño',
      items: ['Diseño UX/UI'],
    },
  ] as Skill[],
  softSkills: [
    'Atención al público',
    'Gestión de clientes',
    'Comunicación efectiva',
    'Organización',
    'Trabajo en equipo',
    'Creatividad',
  ],
  cvUrl: '/Manuel_Marcano_CV.pdf',
};
