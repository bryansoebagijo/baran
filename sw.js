if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return n[e]||(a=new Promise(async a=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=a}else importScripts(e),a()})),a.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},a=(a,n)=>{Promise.all(a.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(a)};self.define=(a,c,s)=>{n[a]||(n[a]=Promise.resolve().then(()=>{let n={};const r={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return n;case"module":return r;default:return e(a)}})).then(e=>{const a=s(...e);return n.default||(n.default=a),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/baran/_next/static/chunks/26d9ac6faeeba96515d17ccc328a4672870e072f.38ff7e0151cfd8be21cf.js",revision:"048a3b9363028783d1f31bfd2de8807f"},{url:"/baran/_next/static/chunks/2a5971720fddc6829baa40edd5c12ce93ffe4a71.05f079a616918f153f8e.js",revision:"5afe12ea178d102db26c6586b6f0cf1d"},{url:"/baran/_next/static/chunks/4a3ea9cd.811130a957c7f1bcc20d.js",revision:"f406c76a46cb0cffd763bc9ae711885b"},{url:"/baran/_next/static/chunks/4fbc1836408fd4c41b965a8a96226ea52b47a313.fdd1b7de9602fcea6557.js",revision:"e2fddbc157b45270642d815e95d7267c"},{url:"/baran/_next/static/chunks/75fc9c18.b29c138eff13782b4616.js",revision:"9f21deb4ad37405b2e96184683c5ff09"},{url:"/baran/_next/static/chunks/8a7d6233fe99119102376feaf2283daee68e0b53.2554dea413c490c9ccbc.js",revision:"37e5a0b4c3f48591b0752ed35716857f"},{url:"/baran/_next/static/chunks/commons.b982bbc0d37263820fd2.js",revision:"e339b5362841c80f7493cdbbe862f35d"},{url:"/baran/_next/static/chunks/dc9dbf17f5fe3c292ce2598b2181604ac5cc94cb.49a9b70dfcfa8335abff.js",revision:"1e76fb06a29b34ee5e7f15838b898b2d"},{url:"/baran/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/baran/_next/static/chunks/main-e8d3529265786c2cedd9.js",revision:"af2fa12d8b1624acc1fa3cc0f7ab2b19"},{url:"/baran/_next/static/chunks/pages/_app-f9a2bb8da977bbd9d3d4.js",revision:"f5f8617a5ac9f9d431e1dd9e356757be"},{url:"/baran/_next/static/chunks/pages/_error-d4cf5976c5d866777b88.js",revision:"5a0ed1661518791c6493225b73a946e1"},{url:"/baran/_next/static/chunks/pages/dashboard/%5Bserial%5D-1b69430a9d468cee9472.js",revision:"a1680e2302023e6ad8b63f51076ffcd3"},{url:"/baran/_next/static/chunks/pages/dashboard/%5Bserial%5D/detail-e85b9e133f449aff4612.js",revision:"8edef601764842eb80a60be3ceaccdff"},{url:"/baran/_next/static/chunks/pages/index-b741f565548fda6be7d5.js",revision:"88213ccf4f046bae9990df6764c9b334"},{url:"/baran/_next/static/chunks/pages/login-1c33fab4425056d9a078.js",revision:"582170511c6d7751579f2819be59b34f"},{url:"/baran/_next/static/chunks/pages/products-2aa1ed9892dd1dbe34b4.js",revision:"56435d89da46945eeeb69f56588dd063"},{url:"/baran/_next/static/chunks/polyfills-e71ecc872bbe81fa93ed.js",revision:"e032561b330cf0a8f8e73492c251e252"},{url:"/baran/_next/static/chunks/webpack-caf1ff17dad824a6f46b.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/baran/_next/static/css/abeb13f487353b7f26a9.css",revision:"9f05249bf08cbcbabe6cf9e93817e348"},{url:"/baran/_next/static/images/logo-baran-c0af9fece1dcf1959c5d81c1b3aaf6ec.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/_next/static/oXjVX3XSvLeXGjz4Q3f91/_buildManifest.js",revision:"cef14fe0fbdea73487c2b2e0b07bdc25"},{url:"/baran/_next/static/oXjVX3XSvLeXGjz4Q3f91/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/baran/android-chrome-192x192.png",revision:"fd24ee6f15da0da1adebce1d4a94babe"},{url:"/baran/android-chrome-512x512.png",revision:"ffb867cf0eb39b9785a956f3dde8fd81"},{url:"/baran/apple-touch-icon.png",revision:"9a836c3bba9bc2d4353d979b33dd0e86"},{url:"/baran/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/baran/favicon-16x16.png",revision:"bb3c5afa8e0056865b263cea36e881d5"},{url:"/baran/favicon-32x32.png",revision:"b3663b3c9dc84ae87bf79000b5d4b9de"},{url:"/baran/favicon.ico",revision:"19383042ab9ad555496217e8f6bc9a39"},{url:"/baran/hardware-svgrepo-com.svg",revision:"1e0853877bbb832d243dadf021710ab2"},{url:"/baran/icons/icon-192x192.png",revision:"7ae5ef007b2244638853ecec8209e909"},{url:"/baran/icons/icon-256x256.png",revision:"48d071233912738fc4d5672ada3984c3"},{url:"/baran/icons/icon-384x384.png",revision:"5c7d8950170116871cd3f46dd5b054e1"},{url:"/baran/icons/icon-512x512.png",revision:"e353c36d8294eb5f69244e1e04f62eb6"},{url:"/baran/logo-baran.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/manifest.json",revision:"6f821f6739e16021371a8762c29a0463"},{url:"/baran/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
