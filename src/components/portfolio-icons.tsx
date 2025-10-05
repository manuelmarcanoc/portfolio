import type { SVGProps } from 'react';

const commonProps = {
  strokeWidth: "8",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
  className: "text-primary-foreground",
};

export const AboutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...commonProps} {...props}>
    <circle cx="50" cy="35" r="15" />
    <path d="M20 85 C 20 65, 80 65, 80 85 Z" />
  </svg>
);

export const GraduationCapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...commonProps} {...props}>
    <path d="M10 45 L50 25 L90 45 L50 65 L10 45 Z" />
    <path d="M30 55 V 75 C 30 80, 50 85, 50 85" />
    <path d="M70 55 V 75" />
  </svg>
);

export const BriefcaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...commonProps} {...props}>
    <rect x="15" y="30" width="70" height="50" rx="10" />
    <path d="M35 30 V 20 C 35 15, 65 15, 65 20 V 30" />
    <line x1="15" y1="45" x2="85" y2="45" />
  </svg>
);

export const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...commonProps} {...props}>
    <path d="M30 30 L10 50 L30 70" />
    <path d="M70 30 L90 50 L70 70" />
    <path d="M58 25 L42 75" />
  </svg>
);

export const LanguagesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...commonProps} {...props}>
    <circle cx="50" cy="50" r="35" />
    <path d="M50 15 V 85" />
    <path d="M15 50 H 85" />
    <path d="M25 25 C 40 40, 60 40, 75 25" />
    <path d="M25 75 C 40 60, 60 60, 75 75" />
  </svg>
);

export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" {...commonProps} {...props}>
    <rect x="15" y="25" width="70" height="50" rx="10" />
    <path d="M18 28 L50 55 L82 28" />
  </svg>
);

export const MessageCircleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 100" {...commonProps} {...props}>
        <path d="M15 65 C 10 45, 20 20, 50 20 C 80 20, 90 45, 85 65 C 80 85, 55 85, 50 85 L 35 90 L 40 70 C 35 75, 20 85, 15 65 Z" />
    </svg>
);

export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 100" {...commonProps} {...props}>
        <path d="M50 15 V 65" />
        <path d="M30 50 L50 70 L70 50" />
        <path d="M20 85 H 80" />
    </svg>
);
