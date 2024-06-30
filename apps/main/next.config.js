/** @type {import('next').NextConfig} */

const WATCH_URL = process.env.WATCH_URL

const nextConfig = {
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: '/watch',
        destination: `${WATCH_URL}/watch`,
      },
      {
        source: '/watch/:path*',
        destination: `${WATCH_URL}/watch/:path*`,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/original/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
}

module.exports = nextConfig
