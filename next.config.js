const isProd = process.env.NODE_ENV === 'production';

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
    sw: 'service-worker.js',
    subdomain: isProd?process.env.NEXT_PUBLIC_BASE_PATH:''
  }
})

module.exports = 
  withPlugins([
    [withImages,pwa]
  ],
  {
    basePath : isProd? process.env.NEXT_PUBLIC_BASE_PATH :'',
    assetPrefix : isProd? process.env.NEXT_PUBLIC_BASE_PATH : '',
    trailingSlash : true
  }
  );
