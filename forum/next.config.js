/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL || "",
  async redirects() {
      return [
          {
            source: process.env.NEXT_PUBLIC_BASE_PATH,
            destination: '/forum',
            basePath: false,
            permanent: true,
          },
      ]
  },
};
