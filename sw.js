if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,n,r)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const s={uri:location.origin+a.slice(1)};return Promise.all(n.map(a=>{switch(a){case"exports":return c;case"module":return s;default:return e(a)}})).then(e=>{const a=r(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/baran/BaranPW.png",revision:"8b12a47b0be91dcd09c6bce345070393"},{url:"/baran/_next/static/UvOrle43lzJ-Gia0N0coI/_buildManifest.js",revision:"b5c894effe75a569d60ae8951bd084b2"},{url:"/baran/_next/static/UvOrle43lzJ-Gia0N0coI/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/baran/_next/static/chunks/1250a3da0d55e87a39f0f9603e515026104c51c2.5fae5062421b74f7960f.js",revision:"c074e7f25a6c478d3b2d5aeb40aca956"},{url:"/baran/_next/static/chunks/1eeac3eb552c9e7dc00992fe0c36a87b3d5060d2.49a9b70dfcfa8335abff.js",revision:"1e76fb06a29b34ee5e7f15838b898b2d"},{url:"/baran/_next/static/chunks/4a3ea9cd.811130a957c7f1bcc20d.js",revision:"f406c76a46cb0cffd763bc9ae711885b"},{url:"/baran/_next/static/chunks/5eb531896c326ace81a91f481a5a3ff2083968e7.22956bd7bd23342eb632.js",revision:"93ac78d01647e2434e0fbc2e3bd15cdc"},{url:"/baran/_next/static/chunks/75fc9c18.b29c138eff13782b4616.js",revision:"9f21deb4ad37405b2e96184683c5ff09"},{url:"/baran/_next/static/chunks/80b9329bb71e2d6c69666fee4c1811d5b981ca98.7c2b20dc3c9a1dbb294a.js",revision:"f94f791043e34cb0348900f3611dbeba"},{url:"/baran/_next/static/chunks/commons.302139911494cff0b7dc.js",revision:"dae42306c9c018109e4b9604fe9b5a57"},{url:"/baran/_next/static/chunks/ea5851001dc1e076d0273d3c6962ff89390e4491.99727208fafb9d831ca4.js",revision:"e1a860a8280a490dba6814c4c2dcdb2c"},{url:"/baran/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/baran/_next/static/chunks/main-e8d3529265786c2cedd9.js",revision:"af2fa12d8b1624acc1fa3cc0f7ab2b19"},{url:"/baran/_next/static/chunks/pages/_app-5aaa3b22ea855fd7fc4a.js",revision:"e18233ff9933926c91bfc01689d3540e"},{url:"/baran/_next/static/chunks/pages/_error-d4cf5976c5d866777b88.js",revision:"5a0ed1661518791c6493225b73a946e1"},{url:"/baran/_next/static/chunks/pages/dashboard-d61b94475760e765c0c7.js",revision:"7cab934a26e4b687e5c75a542ba371db"},{url:"/baran/_next/static/chunks/pages/dashboard/contact-fb030e4396f4f22a71bc.js",revision:"2c23dd141d60f84ad3c554935fd8dca0"},{url:"/baran/_next/static/chunks/pages/dashboard/detail-1c39164bfad443029dc1.js",revision:"0e69f911512cfbb94b714fff17184bdd"},{url:"/baran/_next/static/chunks/pages/index-0c0b6f5560c05e227202.js",revision:"ca993b1e1a2c921d7965efcb970f24a3"},{url:"/baran/_next/static/chunks/pages/login-cc631ab5894f7c330000.js",revision:"7c4b62d9ad934d17abd052470a809a58"},{url:"/baran/_next/static/chunks/pages/products-94ff1c5d3c02403d68f9.js",revision:"c845e5fe456a5ab0e6a58a9cee82ec44"},{url:"/baran/_next/static/chunks/polyfills-261b38c7f6b3ef8d69d3.js",revision:"58c5db0adf1eb785cbf3b814dc75f90b"},{url:"/baran/_next/static/chunks/webpack-caf1ff17dad824a6f46b.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/baran/_next/static/css/d62c82abbc44baab2d3b.css",revision:"918a3121be15f802dd1263abdef9e6a8"},{url:"/baran/_next/static/images/BaranPW-e8f6a58cdfa1e6c558d3210c7296981d.png",revision:"8b12a47b0be91dcd09c6bce345070393"},{url:"/baran/_next/static/images/avatar-cf508f5c3858b458f98652bd04c2f74c.png",revision:"4d8877e9d82c04b124f7ec922704457d"},{url:"/baran/_next/static/images/logo-baran-9f6189042015aa669a2d316944039d13.png",revision:"c20c130ecd62501e9b3c55278b30f15f"},{url:"/baran/android-chrome-192x192.png",revision:"fd24ee6f15da0da1adebce1d4a94babe"},{url:"/baran/android-chrome-512x512.png",revision:"ffb867cf0eb39b9785a956f3dde8fd81"},{url:"/baran/apple-touch-icon.png",revision:"9a836c3bba9bc2d4353d979b33dd0e86"},{url:"/baran/avatar.png",revision:"4d8877e9d82c04b124f7ec922704457d"},{url:"/baran/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/baran/favicon-16x16.png",revision:"bb3c5afa8e0056865b263cea36e881d5"},{url:"/baran/favicon-32x32.png",revision:"b3663b3c9dc84ae87bf79000b5d4b9de"},{url:"/baran/favicon.ico",revision:"19383042ab9ad555496217e8f6bc9a39"},{url:"/baran/hardware-svgrepo-com.svg",revision:"1e0853877bbb832d243dadf021710ab2"},{url:"/baran/icons/icon-192x192.png",revision:"7ae5ef007b2244638853ecec8209e909"},{url:"/baran/icons/icon-256x256.png",revision:"48d071233912738fc4d5672ada3984c3"},{url:"/baran/icons/icon-384x384.png",revision:"5c7d8950170116871cd3f46dd5b054e1"},{url:"/baran/icons/icon-512x512.png",revision:"e353c36d8294eb5f69244e1e04f62eb6"},{url:"/baran/logo-baran.png",revision:"c20c130ecd62501e9b3c55278b30f15f"},{url:"/baran/manifest.json",revision:"d1e51e744703d11792409b079e5388f7"},{url:"/baran/site.webmanifest",revision:"3ab6c2a9d3d786eb1fc846155cd56c5f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
