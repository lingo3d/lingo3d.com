module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'pecevgligor@gmail.com',
          defaultReplyTo: 'pecevgligor@gmail.com',
        },
      },
    },
  });