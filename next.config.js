/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '*',
    },
  ],
}

module.exports = {
  nextConfig,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/sell-nft': { page: '/sell-nft' },
    }
  },
}
