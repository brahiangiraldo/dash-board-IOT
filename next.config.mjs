/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_IPREGISTRY_KEY: process.env.REACT_APP_IPREGISTRY_KEY,
    REACT_APP_IPREGISTRY_URL: process.env.REACT_APP_IPREGISTRY_URL,
    REACT_APP_API_COUNTRY: process.env.REACT_APP_API_COUNTRY,
    REACT_APP_API_SENDMAIL_URL: process.env.REACT_APP_API_SENDMAIL_URL,
    REACT_APP_EMAIL: process.env.REACT_APP_EMAIL
  }
};

export default nextConfig;
