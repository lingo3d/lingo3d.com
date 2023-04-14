module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'https://lingo3d.com/strapi'),
  admin: {
    url: '/admin',
    serveAdminPanel: true,
  },
});
