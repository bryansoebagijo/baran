if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return n[e]||(a=new Promise(async a=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=a}else importScripts(e),a()})),a.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},a=(a,n)=>{Promise.all(a.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(a)};self.define=(a,s,r)=>{n[a]||(n[a]=Promise.resolve().then(()=>{let n={};const c={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return n;case"module":return c;default:return e(a)}})).then(e=>{const a=r(...e);return n.default||(n.default=a),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/baran/_next/static/chunks/26b998ea254f477378394b8779b9fa8f598c0539.73fbf50ada8c282fd173.js",revision:"5ba6a57946f2488fb75275381bf4c358"},{url:"/baran/_next/static/chunks/2a5971720fddc6829baa40edd5c12ce93ffe4a71.6f757efc3cc75904a014.js",revision:"837ac081b9f0f9e353a35080e987e516"},{url:"/baran/_next/static/chunks/4a3ea9cd.4f5dd97763e672e326b6.js",revision:"df0ec069b7cea6889f5810d524045ad9"},{url:"/baran/_next/static/chunks/75fc9c18.bc36a30a2a79bf55de7c.js",revision:"8e23541e0b5236d74bf617fc851b3ffa"},{url:"/baran/_next/static/chunks/9b6d4a72f34ba44fcc2d398675a0393c6fd641e8.6bddea0f09caf96be6b5.js",revision:"2780df8ece6cdf77aa9d121345031617"},{url:"/baran/_next/static/chunks/commons.b982bbc0d37263820fd2.js",revision:"e339b5362841c80f7493cdbbe862f35d"},{url:"/baran/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/baran/_next/static/chunks/main-647e9423a9f8935adba6.js",revision:"c5281ff0475e24c9b1025be3c674fb1b"},{url:"/baran/_next/static/chunks/pages/_app-bb43322f3b5cd6a26e8b.js",revision:"1784eca4153fa90ea9b871d1d6a68e50"},{url:"/baran/_next/static/chunks/pages/_error-dd0aa13f1a57f0264b54.js",revision:"081cd8db22363fe526e65464f2d70aa0"},{url:"/baran/_next/static/chunks/pages/dashboard/%5Bserial%5D-3fd83e13b51de09c3a6b.js",revision:"3b12b4b954c0b2951db96d196d77c0b3"},{url:"/baran/_next/static/chunks/pages/index-4e238e9858565199b88c.js",revision:"af408cda924d51867cb425a055166829"},{url:"/baran/_next/static/chunks/pages/login-c8920f78771ef0b15b39.js",revision:"55f3669a46cb07f1d4ab2b15bb53d8fa"},{url:"/baran/_next/static/chunks/pages/products-e5773e260d9bf3832b4f.js",revision:"6b604c81f607cf38b5404b48a9f99a8e"},{url:"/baran/_next/static/chunks/polyfills-5bcf04ec8f79435c7968.js",revision:"67903ad29a7b6b9c3190ca62cd2c7c6d"},{url:"/baran/_next/static/chunks/webpack-caf1ff17dad824a6f46b.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/baran/_next/static/css/da9fe06557badec70049.css",revision:"ca8da819d8d1b9a861fade325ab9966c"},{url:"/baran/_next/static/gdiwHrp2Z4CwVJds2RD15/_buildManifest.js",revision:"0ac99c0f6afcf25f9b87d5b80fd4a9cd"},{url:"/baran/_next/static/gdiwHrp2Z4CwVJds2RD15/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/baran/_next/static/images/logo-baran-c0af9fece1dcf1959c5d81c1b3aaf6ec.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/android-chrome-192x192.png",revision:"fd24ee6f15da0da1adebce1d4a94babe"},{url:"/baran/android-chrome-512x512.png",revision:"ffb867cf0eb39b9785a956f3dde8fd81"},{url:"/baran/apple-touch-icon.png",revision:"9a836c3bba9bc2d4353d979b33dd0e86"},{url:"/baran/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/baran/favicon-16x16.png",revision:"bb3c5afa8e0056865b263cea36e881d5"},{url:"/baran/favicon-32x32.png",revision:"b3663b3c9dc84ae87bf79000b5d4b9de"},{url:"/baran/favicon.ico",revision:"19383042ab9ad555496217e8f6bc9a39"},{url:"/baran/hardware-svgrepo-com.svg",revision:"1e0853877bbb832d243dadf021710ab2"},{url:"/baran/icons/icon-192x192.png",revision:"7ae5ef007b2244638853ecec8209e909"},{url:"/baran/icons/icon-256x256.png",revision:"48d071233912738fc4d5672ada3984c3"},{url:"/baran/icons/icon-384x384.png",revision:"5c7d8950170116871cd3f46dd5b054e1"},{url:"/baran/icons/icon-512x512.png",revision:"e353c36d8294eb5f69244e1e04f62eb6"},{url:"/baran/logo-baran.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/manifest.json",revision:"6f821f6739e16021371a8762c29a0463"},{url:"/baran/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
