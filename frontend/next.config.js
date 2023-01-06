/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/forum',
  async redirects() {
      return [
          {
              source: '/',
              destination: '/forum',
              basePath: false,
              permanent: false
          },
          {
            source: '/forum/categories',
            destination: '/forum',
            basePath: false,
            permanent: true,
          },
      ]
  },

};