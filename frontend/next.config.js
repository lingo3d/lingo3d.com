/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/forum/categories',
        destination: '/forum',
        permanent: true,
      },
    ]
  },
}
