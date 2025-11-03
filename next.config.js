/** @type {import('next').NextConfig} */
const NEXT_DEST = 'https://lacerveceriadepozuelo.talentohq.com';

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${NEXT_DEST}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lacerveceriadepozuelo.talentohq.com',
      },
    ],
  },
};

module.exports = nextConfig;
