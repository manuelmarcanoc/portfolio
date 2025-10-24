import type { SVGProps } from 'react';

const commonProps = {
  strokeWidth: "2",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  stroke: "currentColor",
  fill: "none",
};

export const AboutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...commonProps} {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const GraduationCapIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...commonProps} {...props}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 1.66 4 3 10 0v-5"/>
    </svg>
);

export const BriefcaseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...commonProps} {...props}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
);

export const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...commonProps} {...props}>
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
    </svg>
);

export const LanguagesIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...commonProps} {...props}>
        <path d="M5 8h14M5 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM5 8v10m14-10h-6m-6 10h6m-3-10v10"/>
        <path d="m14 18 3 3 3-3"/>
    </svg>
);

export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...commonProps} {...props}>
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
);

export const MessageCircleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...commonProps} {...props}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
);

export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...commonProps} {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
);

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...commonProps} {...props}>
        <path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.5-.9 1.2-.9 2.2V22"/>
    </svg>
);
