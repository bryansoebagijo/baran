if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return n[e]||(a=new Promise(async a=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=a}else importScripts(e),a()})),a.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},a=(a,n)=>{Promise.all(a.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(a)};self.define=(a,c,s)=>{n[a]||(n[a]=Promise.resolve().then(()=>{let n={};const r={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return n;case"module":return r;default:return e(a)}})).then(e=>{const a=s(...e);return n.default||(n.default=a),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/baran/_next/static/9GMbQeZkBeYsgG0PfpLYE/_buildManifest.js",revision:"539b126b46cd27d962f85a57173cc5fa"},{url:"/baran/_next/static/9GMbQeZkBeYsgG0PfpLYE/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/baran/_next/static/chunks/2a5971720fddc6829baa40edd5c12ce93ffe4a71.94610bac97696d75901d.js",revision:"b717b347068d590964e64538a787cce3"},{url:"/baran/_next/static/chunks/3e14ee2c5b758e3871aec44d5df7d8abb3e0d7c8.49a9b70dfcfa8335abff.js",revision:"1e76fb06a29b34ee5e7f15838b898b2d"},{url:"/baran/_next/static/chunks/4a3ea9cd.811130a957c7f1bcc20d.js",revision:"f406c76a46cb0cffd763bc9ae711885b"},{url:"/baran/_next/static/chunks/677596e1773b20e3c959eef3efb88452a723c824.0c2c60ae598d4653c2d4.js",revision:"8f7bc436b9a20d7d4dea2c0e740eded4"},{url:"/baran/_next/static/chunks/75fc9c18.b29c138eff13782b4616.js",revision:"9f21deb4ad37405b2e96184683c5ff09"},{url:"/baran/_next/static/chunks/cfcd84ddb6c8292e3c92d2d4e6ca69500642eec7.22956bd7bd23342eb632.js",revision:"93ac78d01647e2434e0fbc2e3bd15cdc"},{url:"/baran/_next/static/chunks/commons.b982bbc0d37263820fd2.js",revision:"e339b5362841c80f7493cdbbe862f35d"},{url:"/baran/_next/static/chunks/e60997da61e9fe0b5984383c302f4be60572412e.252eef8b44321ced3132.js",revision:"ee7d02653d11fbede6a2d3ef0929e818"},{url:"/baran/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/baran/_next/static/chunks/main-e8d3529265786c2cedd9.js",revision:"af2fa12d8b1624acc1fa3cc0f7ab2b19"},{url:"/baran/_next/static/chunks/pages/_app-f9ad44126e1067b579db.js",revision:"70084f019f4214e7677f52abe92180fa"},{url:"/baran/_next/static/chunks/pages/_error-d4cf5976c5d866777b88.js",revision:"5a0ed1661518791c6493225b73a946e1"},{url:"/baran/_next/static/chunks/pages/dashboard/%5Bserial%5D-1ab219ebef79edaa13b2.js",revision:"48c0faace3987312be32682b4914c26d"},{url:"/baran/_next/static/chunks/pages/dashboard/%5Bserial%5D/contact-4580da6a6153ec32c965.js",revision:"80dfa29773e83a55a44067db04d2fade"},{url:"/baran/_next/static/chunks/pages/dashboard/%5Bserial%5D/detail-ecb8c38fd5cea0f2220d.js",revision:"5236a1bbf5b0e0686f295cb16432c1a7"},{url:"/baran/_next/static/chunks/pages/index-30ea65751c60be9302fd.js",revision:"d2b220b712f16f3679e1484c016a7b10"},{url:"/baran/_next/static/chunks/pages/login-45fb5897f5c0e3cf8a32.js",revision:"f3ebfa2278bb3ddd06f2eb366d794114"},{url:"/baran/_next/static/chunks/pages/products-398313fd8f93e34d98e9.js",revision:"72a17be38daf6015b2eac6b15b4e65f3"},{url:"/baran/_next/static/chunks/polyfills-261b38c7f6b3ef8d69d3.js",revision:"58c5db0adf1eb785cbf3b814dc75f90b"},{url:"/baran/_next/static/chunks/webpack-caf1ff17dad824a6f46b.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/baran/_next/static/css/cb4106aadd620b096d6c.css",revision:"77b181e19aff308b1a80db6119be0e02"},{url:"/baran/_next/static/images/logo-baran-c0af9fece1dcf1959c5d81c1b3aaf6ec.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/android-chrome-192x192.png",revision:"fd24ee6f15da0da1adebce1d4a94babe"},{url:"/baran/android-chrome-512x512.png",revision:"ffb867cf0eb39b9785a956f3dde8fd81"},{url:"/baran/apple-touch-icon.png",revision:"9a836c3bba9bc2d4353d979b33dd0e86"},{url:"/baran/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/baran/favicon-16x16.png",revision:"bb3c5afa8e0056865b263cea36e881d5"},{url:"/baran/favicon-32x32.png",revision:"b3663b3c9dc84ae87bf79000b5d4b9de"},{url:"/baran/favicon.ico",revision:"19383042ab9ad555496217e8f6bc9a39"},{url:"/baran/hardware-svgrepo-com.svg",revision:"1e0853877bbb832d243dadf021710ab2"},{url:"/baran/icons/icon-192x192.png",revision:"7ae5ef007b2244638853ecec8209e909"},{url:"/baran/icons/icon-256x256.png",revision:"48d071233912738fc4d5672ada3984c3"},{url:"/baran/icons/icon-384x384.png",revision:"5c7d8950170116871cd3f46dd5b054e1"},{url:"/baran/icons/icon-512x512.png",revision:"e353c36d8294eb5f69244e1e04f62eb6"},{url:"/baran/logo-baran.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/manifest.json",revision:"6f821f6739e16021371a8762c29a0463"},{url:"/baran/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
