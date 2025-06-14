/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Server Actions are now available by default
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig 