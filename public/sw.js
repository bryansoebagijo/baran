if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,n)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/MJpP-3Fo82KdeAy7M9TNW/_buildManifest.js",revision:"b8aa952ce6fa965b7eb02769626f99d8"},{url:"/_next/static/MJpP-3Fo82KdeAy7M9TNW/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/1250a3da0d55e87a39f0f9603e515026104c51c2.5fae5062421b74f7960f.js",revision:"c074e7f25a6c478d3b2d5aeb40aca956"},{url:"/_next/static/chunks/1eeac3eb552c9e7dc00992fe0c36a87b3d5060d2.49a9b70dfcfa8335abff.js",revision:"1e76fb06a29b34ee5e7f15838b898b2d"},{url:"/_next/static/chunks/4a3ea9cd.b7de0f84cd83712818fa.js",revision:"6220d669fcb2edba36009b494755fb96"},{url:"/_next/static/chunks/52ecaf86002a0e730e0a7643e560d4d2afe57b68.994f5cee5b15e3ba2e44.js",revision:"7d9bc5dc872fafc2019b2c877ef6ac4d"},{url:"/_next/static/chunks/5eb531896c326ace81a91f481a5a3ff2083968e7.22956bd7bd23342eb632.js",revision:"93ac78d01647e2434e0fbc2e3bd15cdc"},{url:"/_next/static/chunks/75fc9c18.c2cbdfac6f4d228bbf9d.js",revision:"7a129a8b2ef284869305272e65f58288"},{url:"/_next/static/chunks/80b9329bb71e2d6c69666fee4c1811d5b981ca98.145b31e0e355fc595424.js",revision:"8467dcf166ebe3fdbc9e96b2de0d4fa0"},{url:"/_next/static/chunks/commons.3c15f31d0b62afb5bad0.js",revision:"43f441b6e15d4c483886b5bbc6c428f0"},{url:"/_next/static/chunks/ea5851001dc1e076d0273d3c6962ff89390e4491.fdd1b7de9602fcea6557.js",revision:"e2fddbc157b45270642d815e95d7267c"},{url:"/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/_next/static/chunks/main-7a2c8f0fdbe4348ed464.js",revision:"27beda99cc51c8a773582af14dbac9b9"},{url:"/_next/static/chunks/pages/_app-121690b5737c138b5432.js",revision:"5f96e66d7fe910bc6fc69a36f06ad2de"},{url:"/_next/static/chunks/pages/_error-d4dda1b04115fdd1c9b5.js",revision:"4a0ce88bc7e483fcd046426f060f0bf2"},{url:"/_next/static/chunks/pages/dashboard-3cfe49d029f27a341133.js",revision:"ce85aa0368d80ee29daf24c0e203b460"},{url:"/_next/static/chunks/pages/dashboard/contact-114011b6f1a1d06fde17.js",revision:"a28e28144c608a883111c04dfca4fade"},{url:"/_next/static/chunks/pages/dashboard/detail-ea1e14284304f0134a33.js",revision:"529961dec8b276f015ca9708ec4638a0"},{url:"/_next/static/chunks/pages/index-8db0f96046413ed2c5f3.js",revision:"a40fa88856dc62b4feb2cd7a1aff85cf"},{url:"/_next/static/chunks/pages/login-da560d1d0c69397c14a9.js",revision:"5ad6d3219e6ad37c8b6c45b1f0c0e489"},{url:"/_next/static/chunks/pages/products-59ed7d7f94459b12e70e.js",revision:"aaeb7808df455a0b16afbf29f4492a8d"},{url:"/_next/static/chunks/polyfills-20f8107eaa70cb4ff344.js",revision:"473e75c5c348ab66b04b41fa48ebafb2"},{url:"/_next/static/chunks/webpack-caf1ff17dad824a6f46b.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/_next/static/css/c27b3aae2d7f529cdbd4.css",revision:"e627847e52c9f27a5052138920bcc315"},{url:"/_next/static/images/logo-baran-c0af9fece1dcf1959c5d81c1b3aaf6ec.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/android-chrome-192x192.png",revision:"fd24ee6f15da0da1adebce1d4a94babe"},{url:"/android-chrome-512x512.png",revision:"ffb867cf0eb39b9785a956f3dde8fd81"},{url:"/apple-touch-icon.png",revision:"9a836c3bba9bc2d4353d979b33dd0e86"},{url:"/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/favicon-16x16.png",revision:"bb3c5afa8e0056865b263cea36e881d5"},{url:"/favicon-32x32.png",revision:"b3663b3c9dc84ae87bf79000b5d4b9de"},{url:"/favicon.ico",revision:"19383042ab9ad555496217e8f6bc9a39"},{url:"/hardware-svgrepo-com.svg",revision:"0fa876bcbe73e4545fe6caa856b8c0d0"},{url:"/icons/icon-192x192.png",revision:"7ae5ef007b2244638853ecec8209e909"},{url:"/icons/icon-256x256.png",revision:"48d071233912738fc4d5672ada3984c3"},{url:"/icons/icon-384x384.png",revision:"5c7d8950170116871cd3f46dd5b054e1"},{url:"/icons/icon-512x512.png",revision:"e353c36d8294eb5f69244e1e04f62eb6"},{url:"/logo-baran.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/manifest.json",revision:"d1e51e744703d11792409b079e5388f7"},{url:"/site.webmanifest",revision:"3ab6c2a9d3d786eb1fc846155cd56c5f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
