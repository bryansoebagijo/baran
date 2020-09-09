module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
};

// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
//const withCSS = require('@zeit/next-css');

const pwa = withPWA({
  pwa:{
    disable: process.env.NODE_ENV === 'development',
    register : true,
    dest:'public',
    scope:'/app', 
  }
})

module.exports = withPlugins([
  [withImages, pwa]
])
