import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { VT323, Press_Start_2P } from 'next/font/google';
import { cn } from '@/lib/utils';

const fontHeading = Press_Start_2P({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '400',
});

const fontBody = VT323({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
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
          fontBody.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
