/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'http://192.168.1.77'],
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '3333' },
      { protocol: 'http', hostname: '192.168.1.77', port: '3333' },
    ],
  },
}

module.exports = nextConfig
