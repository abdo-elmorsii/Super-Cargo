/** @type {import('next').NextConfig} */
// const { i18n } = require("./next-i18next.config");



const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  swcMinify: false,

}

module.exports = nextConfig
