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
  CardHeader,
  CardTitle,
  CardDescription
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
}[] = [
  { id: 'about', label: 'Sobre Mí', icon: AboutIcon },
  { id: 'experience', label: 'Experiencia', icon: BriefcaseIcon },
  { id: 'education', label: 'Educación', icon: GraduationCapIcon },
  { id: 'skills', label: 'Habilidades', icon: CodeIcon },
  { id: 'languages', label: 'Idiomas', icon: LanguagesIcon },
  { id: 'contact', label: 'Contacto', icon: MailIcon },
];

const SectionContent: React.FC<{ section: SectionId | null }> = ({ section }) => {
  if (!section) return null;

  switch (section) {
    case 'about':
      const aboutImage = placeholderImages.find(p => p.id === 'about-me');
      return (
        <div className="flex flex-col sm:flex-row gap-8 items-center text-lg">
            {aboutImage && (
              <div className="flex-shrink-0">
                <Image
                  src={aboutImage.src}
                  alt="Retrato de Manuel Marcano"
                  width={aboutImage.width}
                  height={aboutImage.height}
                  className="rounded-lg border-2 border-black"
                  data-ai-hint={aboutImage['data-ai-hint']}
                />
              </div>
            )}
            <p className="leading-relaxed">
              {portfolioData.about}
            </p>
        </div>
      );
    case 'education':
      return (
        <div className="space-y-6 text-lg">
          {portfolioData.education.map((edu, index) => (
            <div key={index}>
              <p className="font-bold text-red-600">
                {edu.period}
              </p>
              <h4 className="font-bold">{edu.title}</h4>
              <p>{edu.institution}</p>
            </div>
          ))}
        </div>
      );
    case 'experience':
      return (
        <div className="space-y-8 text-lg">
          {portfolioData.experience.map((exp, index) => (
            <div key={index}>
              <h4 className="font-bold text-xl">{exp.role}</h4>
              <p className="mb-3">{exp.description}</p>
              {exp.details && (
                <ul className="list-disc list-inside space-y-2">
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
        <div className="space-y-8 text-lg">
          <div>
            <h4 className="font-bold text-xl mb-4">Habilidades Técnicas</h4>
            <div className='space-y-6'>
            {portfolioData.technicalSkills.map((skill, index) => (
              <div key={index}>
                  <p className='font-bold text-red-600 mb-3'>{skill.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-lg bg-gray-300 text-black border-black border-2">{item}</Badge>
                    ))}
                  </div>
              </div>
            ))}
            </div>
          </div>
          <Separator className="my-8 bg-gray-400"/>
          <div>
            <h4 className="font-bold text-xl mb-4">Habilidades Personales</h4>
            <div className="flex flex-wrap gap-2">
              {portfolioData.softSkills.map((item, i) => (
                <Badge key={i} variant="secondary" className="text-lg bg-gray-300 text-black border-black border-2">{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      );
    case 'languages':
      return (
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-lg">
           {portfolioData.languages.map((lang, index) => (
             <Card key={index} className="bg-gray-200 border-2 border-black">
               <CardHeader>
                 <CardTitle className='text-xl'>{lang.name}</CardTitle>
                 <CardDescription className='font-bold text-2xl text-red-600'>{lang.level}</CardDescription>
               </CardHeader>
             </Card>
           ))}
         </div>
      );
    case 'contact':
        return (
            <div className="space-y-6 text-xl">
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 group transition-colors hover:text-red-600">
                    <Mail className="w-8 h-8" />
                    <span className="group-hover:underline">{portfolioData.contact.email}</span>
                </a>
                <a href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group transition-colors hover:text-red-600">
                    <Phone className="w-8 h-8" />
                    <span className="group-hover:underline">{portfolioData.contact.phone}</span>
                </a>
                <div className="flex items-center gap-4">
                    <MapPin className="w-8 h-8" />
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
    <main className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 font-body text-black">
      <div className="text-center z-10 mb-12">
        <h1 className="text-5xl md:text-7xl font-heading text-black">
          <span className="text-red-600">The</span> {portfolioData.name}
        </h1>
        <p className="text-3xl md:text-4xl text-red-600 mt-2 font-heading">
          {`"${portfolioData.title}"`}
        </p>
      </div>

      <div className="z-10 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full">
        {sections.map((section, index) => (
          <div
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className="group relative cursor-pointer flex flex-col items-center justify-center text-center float"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute w-40 h-40 rounded-full bg-gray-200 border-4 border-black transition-all duration-300 group-hover:bg-red-200 group-hover:border-red-600" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
              <section.icon className="w-12 h-12 text-red-600 mb-2 transition-transform duration-300 group-hover:scale-110" style={{marginTop: '-1rem'}} />
              <h3 className="font-heading font-bold text-lg text-black">{section.label}</h3>
            </div>
          </div>
        ))}
         <a
            href={portfolioData.cvUrl}
            download
            className="group relative cursor-pointer flex flex-col items-center justify-center text-center float col-span-2 md:col-span-1"
            aria-label="Descargar CV"
            style={{ animationDelay: `${sections.length * 150}ms` }}
          >
             <div className="absolute w-40 h-40 rounded-full bg-gray-200 border-4 border-black transition-all duration-300 group-hover:bg-red-200 group-hover:border-red-600" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
              <DownloadIcon className="w-12 h-12 text-red-600 mb-2 transition-transform duration-300 group-hover:scale-110" style={{marginTop: '-1rem'}}/>
              <h3 className="font-heading font-bold text-lg text-black">Descargar CV</h3>
            </div>
          </a>
      </div>

      <Dialog open={activeSection !== null} onOpenChange={(isOpen) => !isOpen && setActiveSection(null)}>
        <DialogContent className="font-body text-black">
          <DialogHeader>
              <DialogTitle>{getSectionTitle(activeSection)}</DialogTitle>
          </DialogHeader>
          <div className="p-1 -mx-1">
            <div className="p-6">
              <SectionContent section={activeSection} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
