import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { VT323, Roboto_Mono, Rokkitt } from 'next/font/google';
import { cn } from '@/lib/utils';

const fontHeading = VT323({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '400',
});

const fontBody = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontDisplay = Rokkitt({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '700'],
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
          fontDisplay.variable,
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
