/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/nzh-light',
        destination: '/nzh-light/business-hub',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
