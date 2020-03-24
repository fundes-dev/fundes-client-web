const nextConfig = {
  publicRuntimeConfig: {
    APP_ENV: process.env.APP_ENV || 'development',
    API_HOST: process.env.API_HOST || 'http://localhost:5000',
  }
}

module.exports = nextConfig;