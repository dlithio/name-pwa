import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/name-pwa' : '',
  images: { unoptimized: true }, // Required for static export
  // Add any other Next.js config options here
};

// Configure PWA
const pwaConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

export default pwaConfig(nextConfig);