module.exports = {
  async redirects() {
    return [
      {
        source: '/cv',
        destination:
          'https://drive.google.com/file/d/1xSuVUMK4WzzzA088TGtvc_zGQbBhhwHe/view',
        permanent: true,
      },
      {
        source: '/CV',
        destination:
          'https://drive.google.com/file/d/1xSuVUMK4WzzzA088TGtvc_zGQbBhhwHe/view',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}
