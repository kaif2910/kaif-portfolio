/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo is NOT at kaif2910.github.io but at kaif2910.github.io/kaif-portfolio, 
  // you might need to uncomment the lines below:
  // basePath: '/kaif-portfolio',
  // assetPrefix: '/kaif-portfolio',
};

export default nextConfig;
