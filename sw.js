if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return n[e]||(a=new Promise(async a=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=a}else importScripts(e),a()})),a.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},a=(a,n)=>{Promise.all(a.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(a)};self.define=(a,s,r)=>{n[a]||(n[a]=Promise.resolve().then(()=>{let n={};const c={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return n;case"module":return c;default:return e(a)}})).then(e=>{const a=r(...e);return n.default||(n.default=a),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/baran/_next/static/-EJ4cV6BnvASzL0Eh558H/_buildManifest.js",revision:"c403ece59b559c825bbab9f568bc2420"},{url:"/baran/_next/static/-EJ4cV6BnvASzL0Eh558H/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/baran/_next/static/chunks/4a3ea9cd.fde289e4fe04678b1170.js",revision:"f1a5478ae85de2329584532c1dcafab3"},{url:"/baran/_next/static/chunks/52ecaf86002a0e730e0a7643e560d4d2afe57b68.092b5d8941de73d7ae6e.js",revision:"f6266444691e5f565a59a7b1ca6fc313"},{url:"/baran/_next/static/chunks/75fc9c18.82b0881b6314dd102280.js",revision:"7363d239857d7c442e10230ab6124263"},{url:"/baran/_next/static/chunks/9cbc0bd6f0af7506b2f69065ac26bdd663f83b42.f87b18d0714e4a4fd040.js",revision:"b5e00234127b06026fcd0bd55dba89c4"},{url:"/baran/_next/static/chunks/commons.f560ef5509a8f94f42ba.js",revision:"31279d6c3e3b37b44c89c1d2134f734f"},{url:"/baran/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/baran/_next/static/chunks/main-066b366248d68aa9e526.js",revision:"0478227ee0b07cd3ad5e521817661425"},{url:"/baran/_next/static/chunks/pages/_app-2f71135ee940748ffa95.js",revision:"3eb96ab61c12fb2a66f6738558852823"},{url:"/baran/_next/static/chunks/pages/_error-1cd4b06b8f7404ff36d9.js",revision:"51ffe7662a3e330ab269461046af0edf"},{url:"/baran/_next/static/chunks/pages/dashboard-5846145d94687fddf424.js",revision:"e2878693596148d7a73c8e120c173ef1"},{url:"/baran/_next/static/chunks/pages/index-1c73e675d0ef9a62301e.js",revision:"778444f6b921dd875980615cad5ce24a"},{url:"/baran/_next/static/chunks/pages/login-f9cac0edfe937f19184c.js",revision:"70b67a3634d214afc73eae6765f3ca07"},{url:"/baran/_next/static/chunks/pages/products-96c5acdbf4fc671f2780.js",revision:"daa5392b965ce9a18e6a128ce0227907"},{url:"/baran/_next/static/chunks/polyfills-d2fc0a4bf0d27c7e92ce.js",revision:"4bb4f951ac78fa2bcaa362f550def2c3"},{url:"/baran/_next/static/chunks/webpack-488dc228921f1fdbc0e7.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/baran/_next/static/css/3137ab986e947f1ec390.css",revision:"451ffbeeec323622c9b6c9fa01e0d96a"},{url:"/baran/_next/static/images/logo-baran-c0af9fece1dcf1959c5d81c1b3aaf6ec.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/android-chrome-192x192.png",revision:"fd24ee6f15da0da1adebce1d4a94babe"},{url:"/baran/android-chrome-512x512.png",revision:"ffb867cf0eb39b9785a956f3dde8fd81"},{url:"/baran/apple-touch-icon.png",revision:"9a836c3bba9bc2d4353d979b33dd0e86"},{url:"/baran/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/baran/favicon-16x16.png",revision:"bb3c5afa8e0056865b263cea36e881d5"},{url:"/baran/favicon-32x32.png",revision:"b3663b3c9dc84ae87bf79000b5d4b9de"},{url:"/baran/favicon.ico",revision:"19383042ab9ad555496217e8f6bc9a39"},{url:"/baran/hardware-svgrepo-com.svg",revision:"1e0853877bbb832d243dadf021710ab2"},{url:"/baran/icons/icon-192x192.png",revision:"7ae5ef007b2244638853ecec8209e909"},{url:"/baran/icons/icon-256x256.png",revision:"48d071233912738fc4d5672ada3984c3"},{url:"/baran/icons/icon-384x384.png",revision:"5c7d8950170116871cd3f46dd5b054e1"},{url:"/baran/icons/icon-512x512.png",revision:"e353c36d8294eb5f69244e1e04f62eb6"},{url:"/baran/logo-baran.png",revision:"11ab37d2b97b5f985cb010a4920751ca"},{url:"/baran/manifest.json",revision:"6f821f6739e16021371a8762c29a0463"},{url:"/baran/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
