if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,n)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Logo High-Black.png",revision:"809aa5c8ba3fd42136b35ce6ead693c4"},{url:"/Logo High-Blue.png",revision:"912c39d62782d3ad7dc1b03d696c1957"},{url:"/Logo High-White.png",revision:"f96682da46ec1184d811499f4e889328"},{url:"/_next/static/0xy49BSR5taeRpzo22mPF/_buildManifest.js",revision:"8f217ee7dc924b22b1aa472620d23a68"},{url:"/_next/static/0xy49BSR5taeRpzo22mPF/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/4a3ea9cd.fde289e4fe04678b1170.js",revision:"f1a5478ae85de2329584532c1dcafab3"},{url:"/_next/static/chunks/75fc9c18.82b0881b6314dd102280.js",revision:"7363d239857d7c442e10230ab6124263"},{url:"/_next/static/chunks/c76f6acabe9d59fea9332d21f13afe78d2bcf70e.86cd8e60ddeea590e2f7.js",revision:"a3504312d575ecfcf318bb7994c29dd7"},{url:"/_next/static/chunks/commons.2c990f5acfba8cce8cde.js",revision:"b849f17728945228f5884847b42154b4"},{url:"/_next/static/chunks/e982e66d7d0884ff2ec2b994f666ff07a20fef4f.d5692fdd2179c63c66d0.js",revision:"3b8fd197a4a8c18d4da58dbd07fd095e"},{url:"/_next/static/chunks/framework.a5d4ffe593e18b49243e.js",revision:"1c8c47501f8a83e7cbef6220665aa75a"},{url:"/_next/static/chunks/main-c31e0c7110c652f97455.js",revision:"f72738650bb68bbb9d134ee362720e93"},{url:"/_next/static/chunks/pages/_app-7e1e3ea0f3241b0e92db.js",revision:"6d6a17e4f110c7a3dd625c48a6286325"},{url:"/_next/static/chunks/pages/_error-1cd4b06b8f7404ff36d9.js",revision:"51ffe7662a3e330ab269461046af0edf"},{url:"/_next/static/chunks/pages/dashboard-8bdae5261a400ce9e5a7.js",revision:"3f65018b6eaae3d16cc765972b86e6f7"},{url:"/_next/static/chunks/pages/index-347a9f7ba5d7f631957e.js",revision:"eac24e04a39356edee624f46a1546271"},{url:"/_next/static/chunks/pages/login-016a8be4d22314150120.js",revision:"f3998c5af5ad442c28bad2416802adb0"},{url:"/_next/static/chunks/pages/login2-d9c790ac9da89144947b.js",revision:"9d6717899da17e42a35ceac1c15ff18e"},{url:"/_next/static/chunks/pages/products-ecaf66348ec77d693c73.js",revision:"25f19dff1131de99662b9bd538708618"},{url:"/_next/static/chunks/polyfills-5083d63d7d3968a1458a.js",revision:"a10a3f86694c288bc80e5015f6bdb549"},{url:"/_next/static/chunks/webpack-488dc228921f1fdbc0e7.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/65667e795b3d37a12e08.css",revision:"e71ea6dc85cc6a5cf429503b0a2aa875"},{url:"/_next/static/images/Logo High-White-10068ecc14baf7018dfdb7567d676726.png",revision:"f96682da46ec1184d811499f4e889328"},{url:"/_next/static/images/logo_baran-603c8883bbafd80d1f89558f681c56b3.png",revision:"fa61a3f65da9b8f2760ab5f8d6298c37"},{url:"/circuit-svgrepo-com.svg",revision:"0f218162b0aafb9c61174b6699586bb6"},{url:"/hardware-svgrepo-com.svg",revision:"0fa876bcbe73e4545fe6caa856b8c0d0"},{url:"/logo_baran.png",revision:"fa61a3f65da9b8f2760ab5f8d6298c37"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));