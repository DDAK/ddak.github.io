// const withNextOptimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports =withMDX({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        // fs: 'empty'
      }
    }
    return config
  },
  output: "export", 
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: '/public/**',
        search: '',
      },
    ],
  },
})

