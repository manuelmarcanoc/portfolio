import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Exporta el sitio como HTML estático (necesario para GitHub Pages)
  output: 'export',

  // BasePath: nombre del repositorio, para que las rutas funcionen
  basePath: '/portfolio',

  // Desactiva la optimización de imágenes (GitHub Pages no la soporta)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Opcional: evita que ESLint o TypeScript detengan el build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
