if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,n,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(n.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/baran/Logo High-White.png",revision:"f96682da46ec1184d811499f4e889328"},{url:"/baran/_next/static/RdFb892BWRx9Lq78hbM0g/_buildManifest.js",revision:"d02fbd6efbc6ed82b50599d6aa54a534"},{url:"/baran/_next/static/RdFb892BWRx9Lq78hbM0g/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/baran/_next/static/chunks/4a3ea9cd.87c8a55aba1e273c1502.js",revision:"9e773ef8228996bdc4573d9dc868b2c8"},{url:"/baran/_next/static/chunks/75fc9c18.5f09f0328eb61e208564.js",revision:"2dae889cfe02b1bf0144ddbb4bef25bf"},{url:"/baran/_next/static/chunks/9cbc0bd6f0af7506b2f69065ac26bdd663f83b42.0fc5dae3a6d45706c4db.js",revision:"3e9ab9afe2f95b247146c0ac10295074"},{url:"/baran/_next/static/chunks/commons.f560ef5509a8f94f42ba.js",revision:"31279d6c3e3b37b44c89c1d2134f734f"},{url:"/baran/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/baran/_next/static/chunks/main-d6a06a5823514cdbcab1.js",revision:"bab0bebb75ee964fd96d50a8c2b6212d"},{url:"/baran/_next/static/chunks/pages/_app-d02a3b42427801437532.js",revision:"9d5ad8df793d7bac47fad6ff1af07922"},{url:"/baran/_next/static/chunks/pages/_error-e51e4bdac77caa4b1c40.js",revision:"4768131d0d64b601e03bc840f0aa3946"},{url:"/baran/_next/static/chunks/pages/dashboard-eac61d8809122d2cf86c.js",revision:"f1a92ffc58cbe43fe9a385f7f766114f"},{url:"/baran/_next/static/chunks/pages/index-dd40300dfce714ec073b.js",revision:"98b37660ed5267642e79bd560a83604e"},{url:"/baran/_next/static/chunks/pages/login-cccb53e601c28a062b7d.js",revision:"48fef5b8e5f35f420a7c93d04a3f88ed"},{url:"/baran/_next/static/chunks/pages/products-8a529ac4722c8e49b435.js",revision:"d79ae568fe4fdd1994206e6c829f36ce"},{url:"/baran/_next/static/chunks/polyfills-c0664c850fd807bc92c2.js",revision:"90ff26de925d896506e96868d52d1db7"},{url:"/baran/_next/static/chunks/webpack-488dc228921f1fdbc0e7.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/baran/_next/static/css/f28c3fa15293828997bf.css",revision:"94db1b9c2fa97d953bc66edbcc34461d"},{url:"/baran/_next/static/images/Logo High-White-10068ecc14baf7018dfdb7567d676726.png",revision:"f96682da46ec1184d811499f4e889328"},{url:"/baran/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/baran/hardware-svgrepo-com.svg",revision:"1e0853877bbb832d243dadf021710ab2"},{url:"/baran/sw.js",revision:"16b0348cccd1554fa8524c2953ace95f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
