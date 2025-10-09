'use client';

import { portfolioData } from '@/app/portfolio-data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import {
  AboutIcon,
  BriefcaseIcon,
  CodeIcon,
  DownloadIcon,
  GraduationCapIcon,
  LanguagesIcon,
  MailIcon,
  GithubIcon,
} from '@/components/portfolio-icons';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type SectionId =
  | 'about'
  | 'education'
  | 'experience'
  | 'skills'
  | 'languages'
  | 'contact'
  | 'github'
  | 'cv';

type Section = {
  id: SectionId;
  label: string;
  icon: React.ElementType;
  isLink?: boolean;
  url?: string;
  position: { top?: string, left?: string, right?: string, bottom?: string };
};

const sections: Section[] = [
  { id: 'about', label: 'Sobre Mí', icon: AboutIcon, position: { top: '10%', left: '15%' } },
  { id: 'experience', label: 'Experiencia', icon: BriefcaseIcon, position: { top: '30%', right: '5%' } },
  { id: 'education', label: 'Educación', icon: GraduationCapIcon, position: { top: '65%', left: '10%' } },
  { id: 'skills', label: 'Habilidades', icon: CodeIcon, position: { top: '5%', right: '25%' } },
  { id: 'languages', label: 'Idiomas', icon: LanguagesIcon, position: { bottom: '5%', right: '15%' } },
  { id: 'contact', label: 'Contacto', icon: MailIcon, position: { bottom: '20%', left: '30%' } },
  {
    id: 'github',
    label: 'GitHub',
    icon: GithubIcon,
    isLink: true,
    url: portfolioData.githubUrl,
    position: { top: '55%', right: '28%' }
  },
  {
    id: 'cv',
    label: 'Descargar CV',
    icon: DownloadIcon,
    isLink: true,
    url: portfolioData.cvUrl,
    position: { bottom: '10%', right: '45%' }
  },
];


const SectionContent: React.FC<{ section: SectionId | null }> = ({ section }) => {
  if (!section) return null;

  switch (section) {
    case 'about':
      const aboutImage = placeholderImages.find(p => p.id === 'about-me');
      return (
        <div className="flex flex-col sm:flex-row gap-8 items-center">
            {aboutImage && (
              <div className="flex-shrink-0">
                <Image
                  src={aboutImage.src}
                  alt="Retrato de Manuel Marcano"
                  width={aboutImage.width}
                  height={aboutImage.height}
                  className="rounded-full border-2 border-primary"
                  data-ai-hint={aboutImage['data-ai-hint']}
                />
              </div>
            )}
            <p className="leading-relaxed text-foreground/80">
              {portfolioData.about}
            </p>
        </div>
      );
    case 'education':
      return (
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index}>
              <p className="font-bold text-primary">
                {edu.period}
              </p>
              <h4 className="font-heading text-2xl">{edu.title}</h4>
              <p className="text-foreground/80">{edu.institution}</p>
            </div>
          ))}
        </div>
      );
    case 'experience':
      return (
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index}>
              <h4 className="font-heading text-2xl">{exp.role}</h4>
              <p className="mb-3 text-foreground/80">{exp.description}</p>
              {exp.details && (
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );
    case 'skills':
      return (
        <div className="space-y-8">
          <div>
            <h4 className="font-heading text-2xl mb-4">Habilidades Técnicas</h4>
            <div className='space-y-6'>
            {portfolioData.technicalSkills.map((skill, index) => (
              <div key={index}>
                  <p className='font-bold text-primary mb-3'>{skill.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge key={i} variant="secondary">{item}</Badge>
                    ))}
                  </div>
              </div>
            ))}
            </div>
          </div>
          <Separator className="my-8 bg-border"/>
          <div>
            <h4 className="font-heading text-2xl mb-4">Habilidades Personales</h4>
            <div className="flex flex-wrap gap-2">
              {portfolioData.softSkills.map((item, i) => (
                <Badge key={i} variant="secondary">{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      );
    case 'languages':
      return (
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
           {portfolioData.languages.map((lang, index) => (
             <Card key={index} className="bg-secondary border-border">
               <CardHeader>
                 <CardTitle className='font-heading text-2xl'>{lang.name}</CardTitle>
                 <CardDescription className='font-bold text-4xl text-primary'>{lang.level}</CardDescription>
               </CardHeader>
             </Card>
           ))}
         </div>
      );
    case 'contact':
        return (
            <div className="space-y-6 text-lg">
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 group transition-colors hover:text-primary">
                    <Mail className="w-6 h-6" />
                    <span className="group-hover:underline">{portfolioData.contact.email}</span>
                </a>
                <a href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group transition-colors hover:text-primary">
                    <Phone className="w-6 h-6" />
                    <span className="group-hover:underline">{portfolioData.contact.phone}</span>
                </a>
                <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6" />
                    <span>{portfolioData.contact.location}</span>
                </div>
            </div>
        );
    default:
        return null;
  }
};

const SectionItem: React.FC<{section: Section, onClick: () => void}> = ({ section, onClick }) => {
  const commonClasses = "group absolute cursor-pointer flex flex-col items-center justify-center text-center float";
  const animationDelay = `${Math.random() * 1000}ms`;

  const content = (
      <>
        <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary/80 border border-border shadow-lg transition-all duration-300 group-hover:bg-primary/80 group-hover:border-primary-foreground backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
          <section.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground/80 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-foreground" />
          <h3 className="font-heading text-xl md:text-2xl text-foreground/90 group-hover:text-primary-foreground">{section.label}</h3>
        </div>
      </>
  );

  if (section.isLink) {
    return (
      <a
        href={section.url}
        target={section.id === 'github' ? '_blank' : undefined}
        rel={section.id === 'github' ? 'noopener noreferrer' : undefined}
        download={section.id === 'cv'}
        className={commonClasses}
        style={{ ...section.position, animationDelay }}
        aria-label={section.label}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      onClick={onClick}
      className={commonClasses}
      style={{ ...section.position, animationDelay }}
    >
      {content}
    </div>
  );
};


export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const getSectionTitle = (sectionId: SectionId | null) => {
    if (!sectionId) return '';
    const section = sections.find(s => s.id === sectionId);
    return section ? section.label : '';
  };
  
  return (
    <main className="min-h-screen w-full relative flex items-center justify-center p-4 font-body text-foreground overflow-hidden">
      
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-7xl font-script text-primary" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>
            {portfolioData.name}
          </h1>
          <p className="text-3xl md:text-4xl text-foreground mt-2 font-heading tracking-wider">
            {portfolioData.title}
          </p>
        </div>

        {sections.map((section) => (
          <SectionItem 
            key={section.id} 
            section={section} 
            onClick={() => !section.isLink && setActiveSection(section.id)}
          />
        ))}
      </div>

      <Dialog open={activeSection !== null} onOpenChange={(isOpen) => !isOpen && setActiveSection(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
             <DialogTitle className="font-heading text-3xl">{getSectionTitle(activeSection)}</DialogTitle>
             <DialogClose />
          </DialogHeader>
          <div className="p-1 -mx-1">
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <SectionContent section={activeSection} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
