import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exporta el sitio como HTML estático (necesario para GitHub Pages)
  output: "export",

  // BasePath: nombre del repositorio
  basePath: "/portfolio",

  // Asegura que los recursos se carguen desde /portfolio/
  assetPrefix: "/portfolio/",

  // Desactiva la optimización de imágenes (GitHub Pages no la soporta)
  images: {
    unoptimized: true,
  },

  // Ignora errores de TS y ESLint al compilar
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
