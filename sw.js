if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return n[e]||(a=new Promise(async a=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=a}else importScripts(e),a()})),a.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},a=(a,n)=>{Promise.all(a.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(a)};self.define=(a,s,c)=>{n[a]||(n[a]=Promise.resolve().then(()=>{let n={};const r={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return n;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return n.default||(n.default=a),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/baran/_next/static/chunks/1250a3da0d55e87a39f0f9603e515026104c51c2.5fae5062421b74f7960f.js",revision:"c074e7f25a6c478d3b2d5aeb40aca956"},{url:"/baran/_next/static/chunks/1eeac3eb552c9e7dc00992fe0c36a87b3d5060d2.49a9b70dfcfa8335abff.js",revision:"1e76fb06a29b34ee5e7f15838b898b2d"},{url:"/baran/_next/static/chunks/4a3ea9cd.b7de0f84cd83712818fa.js",revision:"6220d669fcb2edba36009b494755fb96"},{url:"/baran/_next/static/chunks/52ecaf86002a0e730e0a7643e560d4d2afe57b68.0a4de26b4663ab0ba2fe.js",revision:"be236218bf6fa2de5b05f99aab4cde24"},{url:"/baran/_next/static/chunks/5eb531896c326ace81a91f481a5a3ff2083968e7.e2ff1bdaf022754eb21a.js",revision:"7f12fd82be768a229b0a6368f64e05a2"},{url:"/baran/_next/static/chunks/75fc9c18.c2cbdfac6f4d228bbf9d.js",revision:"7a129a8b2ef284869305272e65f58288"},{url:"/baran/_next/static/chunks/80b9329bb71e2d6c69666fee4c1811d5b981ca98.145b31e0e355fc595424.js",revision:"8467dcf166ebe3fdbc9e96b2de0d4fa0"},{url:"/baran/_next/static/chunks/commons.b982bbc0d37263820fd2.js",revision:"e339b5362841c80f7493cdbbe862f35d"},{url:"/baran/_next/static/chunks/ea5851001dc1e076d0273d3c6962ff89390e4491.fdd1b7de9602fcea6557.js",revision:"e2fddbc157b45270642d815e95d7267c"},{url:"/baran/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/baran/_next/static/chunks/main-6d3ea2bfdd521189ea32.js",revision:"009d025b63fa57801aaffe34c0dcfeae"},{url:"/baran/_next/static/chunks/pages/_app-333711bf85187f620958.js",revision:"1f6d0d568aa220e748232f5b04fc4610"},{url:"/baran/_next/static/chunks/pages/_error-d4dda1b04115fdd1c9b5.js",revision:"4a0ce88bc7e483fcd046426f060f0bf2"},{url:"/baran/_next/static/chunks/pages/dashboard-2f09d6a3a4d43b9c6e2e.js",revision:"f09719265ff5cbdb5139ea15356f7733"},{url:"/baran/_next/static/chunks/pages/dashboard/contact-76004bf8493f9492f91c.js",revision:"582971f2b8899568635847f94329b2f2"},{url:"/baran/_next/static/chunks/pages/dashboard/detail-8fe1bc1be9cb2cf0eeac.js",revision:"15f69f1a6edd3f0ecd96f62944e191b9"},{url:"/baran/_next/static/chunks/pages/index-01ae77ccf8171a4a2dae.js",revision:"29a32fd71ac0f44fc0cd0c6986d088e9"},{url:"/baran/_next/static/chunks/pages/login-9fb04604e855935e30d0.js",revision:"fbb8384bae2bbd7de08fa39fd47b55e4"},{url:"/baran/_next/static/chunks/pages/products-e28fa963e6651c643f0e.js",revision:"d85f4d32d0fd405942758e18ca8d7845"},{url:"/baran/_next/static/chunks/polyfills-20f8107eaa70cb4ff344.js",revision:"473e75c5c348ab66b04b41fa48ebafb2"},{url:"/baran/_next/static/chunks/webpack-caf1ff17dad824a6f46b.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/baran/_next/static/css/ab278ccb35b37f7805aa.css",revision:"0874cb2e1ba59a3e7bff65d9bbae8fb9"},{url:"/baran/_next/static/images/logo-baran-c0af9fece1dcf1959c5d81c1b3aaf6ec.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/_next/static/qiz6EtSt-Pl6H6kkOwHxs/_buildManifest.js",revision:"dd177896c2a6d76b203f7ffe6a74fbe0"},{url:"/baran/_next/static/qiz6EtSt-Pl6H6kkOwHxs/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/baran/android-chrome-192x192.png",revision:"fd24ee6f15da0da1adebce1d4a94babe"},{url:"/baran/android-chrome-512x512.png",revision:"ffb867cf0eb39b9785a956f3dde8fd81"},{url:"/baran/apple-touch-icon.png",revision:"9a836c3bba9bc2d4353d979b33dd0e86"},{url:"/baran/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/baran/favicon-16x16.png",revision:"bb3c5afa8e0056865b263cea36e881d5"},{url:"/baran/favicon-32x32.png",revision:"b3663b3c9dc84ae87bf79000b5d4b9de"},{url:"/baran/favicon.ico",revision:"19383042ab9ad555496217e8f6bc9a39"},{url:"/baran/hardware-svgrepo-com.svg",revision:"1e0853877bbb832d243dadf021710ab2"},{url:"/baran/icons/icon-192x192.png",revision:"7ae5ef007b2244638853ecec8209e909"},{url:"/baran/icons/icon-256x256.png",revision:"48d071233912738fc4d5672ada3984c3"},{url:"/baran/icons/icon-384x384.png",revision:"5c7d8950170116871cd3f46dd5b054e1"},{url:"/baran/icons/icon-512x512.png",revision:"e353c36d8294eb5f69244e1e04f62eb6"},{url:"/baran/logo-baran.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/manifest.json",revision:"6f821f6739e16021371a8762c29a0463"},{url:"/baran/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
