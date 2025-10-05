'use client';

import { portfolioData } from '@/app/portfolio-data';
import {
  AboutIcon,
  BriefcaseIcon,
  CodeIcon,
  DownloadIcon,
  GraduationCapIcon,
  LanguagesIcon,
  MailIcon,
  MessageCircleIcon,
} from '@/components/portfolio-icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

type SectionId =
  | 'about'
  | 'education'
  | 'experience'
  | 'skills'
  | 'languages'
  | 'contact';

const sections: {
  id: SectionId;
  label: string;
  icon: React.ElementType;
  style: React.CSSProperties;
  className: string;
}[] = [
  {
    id: 'about',
    label: 'Sobre Mí',
    icon: AboutIcon,
    style: { top: '20%', left: '15%' },
    className: 'w-32 h-32 md:w-40 md:h-40',
  },
  {
    id: 'education',
    label: 'Educación',
    icon: GraduationCapIcon,
    style: { top: '15%', right: '15%' },
    className: 'w-28 h-28 md:w-36 md:h-36',
  },
  {
    id: 'experience',
    label: 'Experiencia',
    icon: BriefcaseIcon,
    style: { top: '45%', right: '5%' },
    className: 'w-32 h-32 md:w-40 md:h-40',
  },
  {
    id: 'skills',
    label: 'Habilidades',
    icon: CodeIcon,
    style: { top: '50%', left: '2%' },
    className: 'w-36 h-36 md:w-44 md:h-44',
  },
  {
    id: 'languages',
    label: 'Idiomas',
    icon: LanguagesIcon,
    style: { bottom: '5%', left: '20%' },
    className: 'w-24 h-24 md:w-32 md:h-32',
  },
  {
    id: 'contact',
    label: 'Contacto',
    icon: MailIcon,
    style: { bottom: '8%', right: '25%' },
    className: 'w-28 h-28 md:w-36 md:h-36',
  },
];

const SectionContent: React.FC<{ section: SectionId | null }> = ({ section }) => {
  if (!section) return null;

  switch (section) {
    case 'about':
      return (
        <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
          {portfolioData.about}
        </p>
      );
    case 'education':
      return (
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="flex-grow w-px bg-border" />
              </div>
              <div>
                <p className="font-semibold text-accent font-display">
                  {edu.period}
                </p>
                <h4 className="font-bold text-lg">{edu.title}</h4>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case 'experience':
      return (
        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="flex gap-4">
               <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="flex-grow w-px bg-border" />
              </div>
              <div className='flex-1'>
                <h4 className="font-bold text-lg font-display">{exp.role}</h4>
                <p className="text-muted-foreground mb-2">{exp.description}</p>
                {exp.details && (
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    {exp.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    case 'skills':
      return (
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-lg font-display mb-3">Habilidades Técnicas</h4>
            <div className='space-y-4'>
            {portfolioData.technicalSkills.map((skill, index) => (
              <div key={index}>
                  <p className='font-semibold text-accent mb-2'>{skill.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
                    ))}
                  </div>
              </div>
            ))}
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-bold text-lg font-display mb-3">Habilidades Personales</h4>
            <div className="flex flex-wrap gap-2">
              {portfolioData.softSkills.map((item, i) => (
                <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      );
    case 'languages':
      return (
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
           {portfolioData.languages.map((lang, index) => (
             <Card key={index} className="bg-secondary/50 border-2 border-primary">
               <CardHeader>
                 <CardTitle className="font-display">{lang.name}</CardTitle>
                 <CardDescription className='text-primary font-bold text-lg'>{lang.level}</CardDescription>
               </CardHeader>
             </Card>
           ))}
         </div>
      );
    case 'contact':
        return (
            <div className="space-y-4 text-lg">
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 group">
                    <Mail className="w-6 h-6 text-primary" />
                    <span className="group-hover:underline">{portfolioData.contact.email}</span>
                </a>
                <a href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="group-hover:underline">{portfolioData.contact.phone}</span>
                </a>
                <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span>{portfolioData.contact.location}</span>
                </div>
            </div>
        );
  }
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const getSectionTitle = (sectionId: SectionId | null) => {
    if (!sectionId) return '';
    const section = sections.find(s => s.id === sectionId);
    return section ? section.label : '';
  };
  
  return (
    <main className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center p-4 bg-background text-outline">
      <div className="text-center z-10 mb-8 md:mb-16">
        <h1 className="text-6xl md:text-8xl font-bold font-headline text-primary text-outline-black">
          {portfolioData.name}
        </h1>
        <p className="text-2xl md:text-4xl text-primary/90 mt-2 font-headline-script">
          {portfolioData.title}
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`absolute flex flex-col items-center justify-center text-center p-2 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary text-primary transition-all duration-300 ease-in-out hover:bg-primary/80 hover:text-primary-foreground hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 ${section.className}`}
            style={section.style}
            aria-label={`Abrir sección ${section.label}`}
          >
            <section.icon className="w-1/3 h-1/3" />
            <span className="font-display text-sm md:text-base font-bold mt-1 uppercase">
              {section.label}
            </span>
          </button>
        ))}
         <a
            href={portfolioData.cvUrl}
            download
            className="absolute flex flex-col items-center justify-center text-center p-2 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary text-primary transition-all duration-300 ease-in-out hover:bg-primary/80 hover:text-primary-foreground hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 w-28 h-28 md:w-32 md:h-32"
            style={{ top: '65%', left: '40%' }}
            aria-label="Descargar CV"
          >
            <DownloadIcon className="w-1/3 h-1/3" />
            <span className="font-display text-sm md:text-base font-bold mt-1 uppercase">
              Descargar CV
            </span>
          </a>
      </div>

      <Dialog open={activeSection !== null} onOpenChange={(isOpen) => !isOpen && setActiveSection(null)}>
        <DialogContent className="max-w-md md:max-w-2xl max-h-[80vh] overflow-y-auto bg-background/80 backdrop-blur-md border-primary text-primary">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold font-display text-primary uppercase">
              {getSectionTitle(activeSection)}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 text-foreground/90 font-sans">
             <SectionContent section={activeSection} />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
