const isProd = process.env.NODE_ENV === 'production';
const next_public = process.env.NEXT_PUBLIC_BASE_PATH? process.env.NEXT_PUBLIC_BASE_PATH:'';

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
    scope:'/', 
    subdomainPrefix:next_public? next_public:''
  }
})

module.exports = 
  withPlugins([
    [withImages,pwa]
  ],
  {

    basePath : isProd? next_public :'',
    assetPrefix : isProd? next_public: '',
    trailingSlash : false
  }
  );
