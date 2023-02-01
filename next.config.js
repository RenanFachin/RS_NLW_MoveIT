/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Liberando o next/image a buscar imagens deste servidor
    domains: ['github.com']
  }
}

module.exports = nextConfig
