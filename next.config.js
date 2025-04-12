// const withNextOptimizedImages = require('next-optimized-images');

import withMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

const config = mdxConfig({
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

export default config

