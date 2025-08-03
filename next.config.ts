/** @type {import('next').NextConfig} */
const basePath = "";
const assetPrefix = "";
console.log("Base Path:", basePath);
console.log("Asset Prefix:", assetPrefix);

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  images: {
    unoptimized: true, // Evita llamadas a /_next/image
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath, // Disponibiliza el prefix al cliente
  },
};

module.exports = nextConfig;
