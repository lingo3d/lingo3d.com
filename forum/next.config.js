/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL || "",
  async redirects() {
      return [
          {
            source: '/categories',
            destination: '/',
            basePath: false,
            permanent: true,
          },
      ]
  },
};
