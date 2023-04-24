module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'gligor@lingo3d.com',
          defaultReplyTo: 'gligor@lingo3d.com',
        },
      },
    }
  });

  //