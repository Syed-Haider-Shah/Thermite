const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    ANON_KEY: process.env.ANON_KEY,
    SERVICE_ROLE: process.env.SERVICE_ROLE
  },
  trailingSlash: false
}

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
      devIndicators: {
        buildActivityPosition: 'bottom-left'
      },
      onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2
      }
    }
  }

  return nextConfig
}
