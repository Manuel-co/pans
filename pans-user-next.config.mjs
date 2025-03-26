/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['v0.blob.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;

