if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,n,s)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+a.slice(1)};return Promise.all(n.map(a=>{switch(a){case"exports":return c;case"module":return r;default:return e(a)}})).then(e=>{const a=s(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/baran/_next/static/chunks/1250a3da0d55e87a39f0f9603e515026104c51c2.5fae5062421b74f7960f.js",revision:"c074e7f25a6c478d3b2d5aeb40aca956"},{url:"/baran/_next/static/chunks/1eeac3eb552c9e7dc00992fe0c36a87b3d5060d2.49a9b70dfcfa8335abff.js",revision:"1e76fb06a29b34ee5e7f15838b898b2d"},{url:"/baran/_next/static/chunks/4a3ea9cd.b7de0f84cd83712818fa.js",revision:"6220d669fcb2edba36009b494755fb96"},{url:"/baran/_next/static/chunks/52ecaf86002a0e730e0a7643e560d4d2afe57b68.994f5cee5b15e3ba2e44.js",revision:"7d9bc5dc872fafc2019b2c877ef6ac4d"},{url:"/baran/_next/static/chunks/5eb531896c326ace81a91f481a5a3ff2083968e7.22956bd7bd23342eb632.js",revision:"93ac78d01647e2434e0fbc2e3bd15cdc"},{url:"/baran/_next/static/chunks/75fc9c18.c2cbdfac6f4d228bbf9d.js",revision:"7a129a8b2ef284869305272e65f58288"},{url:"/baran/_next/static/chunks/80b9329bb71e2d6c69666fee4c1811d5b981ca98.7c2b20dc3c9a1dbb294a.js",revision:"f94f791043e34cb0348900f3611dbeba"},{url:"/baran/_next/static/chunks/commons.302139911494cff0b7dc.js",revision:"dae42306c9c018109e4b9604fe9b5a57"},{url:"/baran/_next/static/chunks/ea5851001dc1e076d0273d3c6962ff89390e4491.fdd1b7de9602fcea6557.js",revision:"e2fddbc157b45270642d815e95d7267c"},{url:"/baran/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/baran/_next/static/chunks/main-6d3ea2bfdd521189ea32.js",revision:"009d025b63fa57801aaffe34c0dcfeae"},{url:"/baran/_next/static/chunks/pages/_app-d5fc9fe9475aa97dd93b.js",revision:"5f96e66d7fe910bc6fc69a36f06ad2de"},{url:"/baran/_next/static/chunks/pages/_error-d4dda1b04115fdd1c9b5.js",revision:"4a0ce88bc7e483fcd046426f060f0bf2"},{url:"/baran/_next/static/chunks/pages/dashboard-e15e88aa2457955b76f5.js",revision:"4792ef12dfeba1823b31cf6d3898d923"},{url:"/baran/_next/static/chunks/pages/dashboard/contact-114011b6f1a1d06fde17.js",revision:"a28e28144c608a883111c04dfca4fade"},{url:"/baran/_next/static/chunks/pages/dashboard/detail-c5b4244981b5a0efc511.js",revision:"fa6a4995ad0825cd53ecf3fba04bc3a1"},{url:"/baran/_next/static/chunks/pages/index-f8241c16350efd859d55.js",revision:"0888696af4dd623c41a10a439dee6243"},{url:"/baran/_next/static/chunks/pages/login-cc3a8e5a63ba24efe67b.js",revision:"fc3c76f7dfdc195bcb2fd42a382cbcaa"},{url:"/baran/_next/static/chunks/pages/products-59ed7d7f94459b12e70e.js",revision:"aaeb7808df455a0b16afbf29f4492a8d"},{url:"/baran/_next/static/chunks/polyfills-20f8107eaa70cb4ff344.js",revision:"473e75c5c348ab66b04b41fa48ebafb2"},{url:"/baran/_next/static/chunks/webpack-caf1ff17dad824a6f46b.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/baran/_next/static/css/eea37cee16d5369b31be.css",revision:"44e991fe589208886a8fee376219445d"},{url:"/baran/_next/static/images/avatar-cf508f5c3858b458f98652bd04c2f74c.png",revision:"4d8877e9d82c04b124f7ec922704457d"},{url:"/baran/_next/static/images/logo-baran-9f6189042015aa669a2d316944039d13.png",revision:"c20c130ecd62501e9b3c55278b30f15f"},{url:"/baran/_next/static/qsJZoKRE1-km9Np5tdePq/_buildManifest.js",revision:"a8c2d055edb1c7c890b899e1070bcb70"},{url:"/baran/_next/static/qsJZoKRE1-km9Np5tdePq/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/baran/android-chrome-192x192.png",revision:"fd24ee6f15da0da1adebce1d4a94babe"},{url:"/baran/android-chrome-512x512.png",revision:"ffb867cf0eb39b9785a956f3dde8fd81"},{url:"/baran/apple-touch-icon.png",revision:"9a836c3bba9bc2d4353d979b33dd0e86"},{url:"/baran/avatar.png",revision:"4d8877e9d82c04b124f7ec922704457d"},{url:"/baran/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/baran/favicon-16x16.png",revision:"bb3c5afa8e0056865b263cea36e881d5"},{url:"/baran/favicon-32x32.png",revision:"b3663b3c9dc84ae87bf79000b5d4b9de"},{url:"/baran/favicon.ico",revision:"19383042ab9ad555496217e8f6bc9a39"},{url:"/baran/hardware-svgrepo-com.svg",revision:"1e0853877bbb832d243dadf021710ab2"},{url:"/baran/icons/icon-192x192.png",revision:"7ae5ef007b2244638853ecec8209e909"},{url:"/baran/icons/icon-256x256.png",revision:"48d071233912738fc4d5672ada3984c3"},{url:"/baran/icons/icon-384x384.png",revision:"5c7d8950170116871cd3f46dd5b054e1"},{url:"/baran/icons/icon-512x512.png",revision:"e353c36d8294eb5f69244e1e04f62eb6"},{url:"/baran/logo-baran.png",revision:"c20c130ecd62501e9b3c55278b30f15f"},{url:"/baran/manifest.json",revision:"d1e51e744703d11792409b079e5388f7"},{url:"/baran/site.webmanifest",revision:"3ab6c2a9d3d786eb1fc846155cd56c5f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
