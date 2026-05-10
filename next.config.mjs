/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kaif-portfolio',
  assetPrefix: '/kaif-portfolio',
};

export default nextConfig;
