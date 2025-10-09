import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Bebas_Neue, Lobster, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';

const fontHeading = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '400',
});

const fontBody = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontScript = Lobster({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-script',
  weight: '400',
});


export const metadata: Metadata = {
  title: 'Manuel Marcano Portfolio',
  description: 'Portfolio de Manuel Marcano, Software Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable,
          fontScript.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
