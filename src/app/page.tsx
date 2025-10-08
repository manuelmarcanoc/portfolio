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
} from '@/components/portfolio-icons';
import { Badge } from '@/components/ui/badge';
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
import Image from 'next/image';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

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
  description: string;
}[] = [
  { id: 'about', label: 'Sobre Mí', icon: AboutIcon, description: 'Conóceme un poco mejor' },
  { id: 'experience', label: 'Experiencia', icon: BriefcaseIcon, description: 'Mi trayectoria profesional' },
  { id: 'education', label: 'Educación', icon: GraduationCapIcon, description: 'Mi formación académica' },
  { id: 'skills', label: 'Habilidades', icon: CodeIcon, description: 'Tecnologías que manejo' },
  { id: 'languages', label: 'Idiomas', icon: LanguagesIcon, description: 'Lenguajes que hablo' },
  { id: 'contact', label: 'Contacto', icon: MailIcon, description: 'Hablemos' },
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
                  className="rounded-full border-4 border-primary shadow-lg"
                  data-ai-hint={aboutImage['data-ai-hint']}
                />
              </div>
            )}
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
              {portfolioData.about}
            </p>
        </div>
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
                <p className="font-semibold text-primary/80 font-mono text-sm">
                  {edu.period}
                </p>
                <h4 className="font-bold text-lg text-foreground">{edu.title}</h4>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case 'experience':
      return (
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="flex gap-4">
               <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="flex-grow w-px bg-border" />
              </div>
              <div className='flex-1'>
                <h4 className="font-bold text-xl text-foreground">{exp.role}</h4>
                <p className="text-muted-foreground mb-3">{exp.description}</p>
                {exp.details && (
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
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
            <h4 className="font-bold text-xl mb-4 text-foreground">Habilidades Técnicas</h4>
            <div className='space-y-6'>
            {portfolioData.technicalSkills.map((skill, index) => (
              <div key={index}>
                  <p className='font-semibold text-primary mb-3'>{skill.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-sm font-medium">{item}</Badge>
                    ))}
                  </div>
              </div>
            ))}
            </div>
          </div>
          <Separator className="my-8"/>
          <div>
            <h4 className="font-bold text-xl mb-4 text-foreground">Habilidades Personales</h4>
            <div className="flex flex-wrap gap-2">
              {portfolioData.softSkills.map((item, i) => (
                <Badge key={i} variant="secondary" className="text-sm font-medium">{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      );
    case 'languages':
      return (
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
           {portfolioData.languages.map((lang, index) => (
             <Card key={index} className="bg-secondary/50 border-border hover:border-primary transition-colors">
               <CardHeader>
                 <CardTitle className="text-foreground">{lang.name}</CardTitle>
                 <CardDescription className='text-primary font-bold text-lg'>{lang.level}</CardDescription>
               </CardHeader>
             </Card>
           ))}
         </div>
      );
    case 'contact':
        return (
            <div className="space-y-6 text-lg">
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 group transition-colors hover:text-primary">
                    <Mail className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors" />
                    <span className="group-hover:underline">{portfolioData.contact.email}</span>
                </a>
                <a href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group transition-colors hover:text-primary">
                    <Phone className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors" />
                    <span className="group-hover:underline">{portfolioData.contact.phone}</span>
                </a>
                <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-primary/80" />
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
    <main className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 background-gradient font-body">
      <div className="text-center z-10 mb-12">
        <h1 className="text-6xl md:text-8xl font-bold font-heading text-foreground tracking-tighter">
          {portfolioData.name}
        </h1>
        <p className="text-2xl md:text-3xl text-primary mt-2 font-medium">
          {portfolioData.title}
        </p>
      </div>

      <div className="z-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className="group relative cursor-pointer rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-primary/50 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                 style={{
                    background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)'
                 }}
            />
            <div className="relative z-10">
              <section.icon className="w-10 h-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-1">{section.label}</h3>
              <p className="text-muted-foreground text-sm">{section.description}</p>
            </div>
          </div>
        ))}
         <a
            href={portfolioData.cvUrl}
            download
            className="group relative cursor-pointer rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-primary/50 overflow-hidden col-span-2 md:col-span-1"
            aria-label="Descargar CV"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                 style={{
                    background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)'
                 }}
            />
            <div className="relative z-10">
              <DownloadIcon className="w-10 h-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-1">Descargar CV</h3>
              <p className="text-muted-foreground text-sm">Obtén mi currículum completo</p>
            </div>
          </a>
      </div>

      <Dialog open={activeSection !== null} onOpenChange={(isOpen) => !isOpen && setActiveSection(null)}>
        <DialogContent className="max-w-md md:max-w-2xl max-h-[80vh] bg-background/80 backdrop-blur-md border-border">
            <DialogHeader>
                <DialogTitle className="font-heading text-2xl text-foreground">
                    {getSectionTitle(activeSection)}
                </DialogTitle>
            </DialogHeader>
            <div className="p-1 -mx-1 overflow-y-auto">
              <div className="p-6 font-body text-foreground/90">
                <SectionContent section={activeSection} />
              </div>
            </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
