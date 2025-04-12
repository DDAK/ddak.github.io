// const withNextOptimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
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
  pageExtensions: ['js', 'jsx', 'mdx','md','ts','tsx'],
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

