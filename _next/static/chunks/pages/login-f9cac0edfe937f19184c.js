_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{O2ls:function(e,a,n){"use strict";n.r(a);var r=n("o0o1"),t=n.n(r);function o(e,a,n,r,t,o,s){try{var c=e[o](s),l=c.value}catch(i){return void n(i)}c.done?a(l):Promise.resolve(l).then(r,t)}var s=n("q1tI"),c=n.n(s),l=n("YFqc"),i=n.n(l),u=n("tXcZ"),d=n("nOHt"),m=c.a.createElement;a.default=function(){var e=n("v7FG"),a=(Object(d.useRouter)(),Object(s.useState)({type:"",message:""})),r=(a[0],a[1]),c=Object(s.useRef)(),l=Object(s.useRef)(),p=function(){var e,a=(e=t.a.mark((function e(a){var n,o,s;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={username:c.current.value,password:l.current.value},console.log(n),e.prev=3,e.next=6,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 6:if(!(o=e.sent).ok){e.next=13;break}return e.next=10,o.json();case 10:s=e.sent,console.log(s),location.assign("/baran/products");case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.log("An error occured",e.t0),r({type:"error",message:"An error occured while submitting the form"});case 19:case"end":return e.stop()}}),e,null,[[3,15]])})),function(){var a=this,n=arguments;return new Promise((function(r,t){var s=e.apply(a,n);function c(e){o(s,r,t,c,l,"next",e)}function l(e){o(s,r,t,c,l,"throw",e)}c(void 0)}))});return function(e){return a.apply(this,arguments)}}();return m("div",{className:"login"},m(u.a,null),m("nav",{className:"navbar"},m("img",{src:e,alt:"Baran logo",className:"navbar-brand"}),m("i",{className:"fa fa-map icon-pajangan","aria-hidden":"true"})),m("div",{className:"container login-content"},m("div",{className:"login-header"},m("h1",null,"Sign In")),m("form",{className:"signin-form"},m("label",{className:"email-label",htmlFor:"email"},"Email Address"),m("input",{ref:c,type:"email",className:"form-control",id:"email",name:"email",placeholder:"email address",required:!0}),m("label",{className:"email-label",htmlFor:"password"},"Password"),m("input",{ref:l,type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",required:!0}),m("button",{className:"btn btn-lg btn-primary btn-block btn-signin",onClick:p},"SIGN IN"),m("div",{className:"forgot-pass"},m(i.a,{href:"#"},m("a",null,"Forgot password?"))))),m("footer",{className:"fixed-bottom"},m("p",null,"Baran Energy  2020")))}},u6Hu:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("O2ls")}])},v7FG:function(e,a){e.exports="/baran/_next/static/images/logo-baran-c0af9fece1dcf1959c5d81c1b3aaf6ec.png"}},[["u6Hu",0,2,1,3]]]);