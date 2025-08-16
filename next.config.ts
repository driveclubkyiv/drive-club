import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cle7tknx9i41ej9x.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
