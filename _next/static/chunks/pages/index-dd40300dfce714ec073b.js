_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{O2ls:function(e,n,a){"use strict";a.r(n);var t=a("o0o1"),r=a.n(t);function o(e,n,a,t,r,o,s){try{var l=e[o](s),c=l.value}catch(i){return void a(i)}l.done?n(c):Promise.resolve(c).then(t,r)}var s=a("q1tI"),l=a.n(s),c=a("YFqc"),i=a.n(c),u=a("tXcZ"),d=a("nOHt"),m=l.a.createElement;n.default=function(){var e=a("nmHa"),n=(Object(d.useRouter)(),Object(s.useState)({type:"",message:""})),t=(n[0],n[1]),l=Object(s.useRef)(),c=Object(s.useRef)(),p=function(){var e,n=(e=r.a.mark((function e(n){var a,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={username:l.current.value,password:c.current.value},console.log(a),e.prev=3,e.next=6,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 6:if(!(o=e.sent).ok){e.next=13;break}return e.next=10,o.json();case 10:s=e.sent,console.log(s),location.assign("/baran/products");case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.log("An error occured",e.t0),t({type:"error",message:"An error occured while submitting the form"});case 19:case"end":return e.stop()}}),e,null,[[3,15]])})),function(){var n=this,a=arguments;return new Promise((function(t,r){var s=e.apply(n,a);function l(e){o(s,t,r,l,c,"next",e)}function c(e){o(s,t,r,l,c,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}();return m("div",{className:"login"},m(u.a,null),m("nav",{className:"navbar"},m("img",{src:e,alt:"Baran logo",className:"navbar-brand"}),m("i",{className:"fa fa-map icon-pajangan","aria-hidden":"true"})),m("div",{className:"container login-content"},m("div",{className:"login-header"},m("h2",null,"Sign In")),m("form",{className:"signin-form"},m("label",{className:"email-label",htmlFor:"email"},"Email Address"),m("input",{ref:l,type:"email",className:"form-control",id:"email",name:"email",placeholder:"email address",required:!0}),m("label",{className:"email-label",htmlFor:"email"},"Password"),m("input",{ref:c,type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",required:!0}),m("button",{className:"btn btn-lg btn-primary btn-block btn-signin",onClick:p},"SIGN IN"),m("div",{className:"forgot-pass"},m(i.a,{href:"#"},m("a",null,"Forgot password?"))))),m("footer",{className:"fixed-bottom"},m("h6",null,"Baran Energy  2020")))}},RNiq:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return c}));var t=a("q1tI"),r=a.n(t),o=a("tXcZ"),s=a("O2ls"),l=r.a.createElement;function c(){return l("div",null,l(o.a,null),l(s.default,null))}},nmHa:function(e,n){e.exports="/baran/_next/static/images/Logo High-White-10068ecc14baf7018dfdb7567d676726.png"},vlRD:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,2,1,3]]]);