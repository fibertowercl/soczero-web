import type { NextConfig } from "next";

// BASE_PATH se usa para GitHub Pages (ej: "/soczero-web"). En el dominio final queda vacío.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
