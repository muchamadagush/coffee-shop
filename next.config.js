module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },
  images: {
    domains: ['http://localhost:4000', 'http://localhost:3000'],
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/register',
        destination: '/auth/register',
      },
      {
        source: '/forgot-password',
        destination: '/auth/forgot-password',
      }
    ]
  },
}
