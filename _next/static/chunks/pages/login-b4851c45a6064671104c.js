_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"HaE+":function(e,n,a){"use strict";function r(e,n,a,r,t,o,s){try{var c=e[o](s),i=c.value}catch(l){return void a(l)}c.done?n(i):Promise.resolve(i).then(r,t)}function t(e){return function(){var n=this,a=arguments;return new Promise((function(t,o){var s=e.apply(n,a);function c(e){r(s,t,o,c,i,"next",e)}function i(e){r(s,t,o,c,i,"throw",e)}c(void 0)}))}}a.d(n,"a",(function(){return t}))},O2ls:function(e,n,a){"use strict";a.r(n);var r=a("o0o1"),t=a.n(r),o=a("HaE+"),s=a("q1tI"),c=a.n(s),i=a("YFqc"),l=a.n(i),u=a("tXcZ"),d=a("nOHt"),p=a("/MKj"),f=a("fME4"),m=function(e){return{type:f.a.ADD_USERNAME,payload:e}},b=c.a.createElement;n.default=function(){var e=a("v7FG"),n=Object(d.useRouter)(),r=Object(s.useState)({type:"",message:""}),c=(r[0],r[1]),i=Object(s.useRef)(),f=Object(s.useRef)(),E=Object(p.b)(),N=function(){var e=Object(o.a)(t.a.mark((function e(a){var r,o,s;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r={username:i.current.value,password:f.current.value},console.log(r),e.prev=3,e.next=6,fetch("https://test.vincentreynard.com/user/login",{method:"POST",credentials:"include",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 6:if(!(o=e.sent).ok){e.next=14;break}return e.next=10,o.json();case 10:s=e.sent,console.log(s),E(m(r.username)),n.push("/baran/products");case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),console.log("An error occured",e.t0),c({type:"error",message:"An error occured while submitting the form"});case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}();return b("div",{className:"login"},b(u.a,{props:{description:"login"}}),b("nav",{className:"navbar"},b("img",{src:e,alt:"Baran logo",className:"navbar-brand"}),b("i",{className:"fa fa-map icon-pajangan","aria-hidden":"true"})),b("div",{className:"container login-content"},b("div",{className:"login-header"},b("h1",null,"Sign In")),b("form",{className:"signin-form"},b("label",{className:"email-label",htmlFor:"email"},"Email Address"),b("input",{ref:i,type:"email",className:"form-control",id:"email",name:"email",placeholder:"email address",required:!0}),b("label",{className:"email-label",htmlFor:"password"},"Password"),b("input",{ref:f,type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",required:!0}),b("button",{className:"btn btn-lg btn-primary btn-block btn-signin",onClick:N},"SIGN IN"),b("div",{className:"forgot-pass"},b(l.a,{href:"#"},b("a",null,"Forgot password?"))))),b("footer",{className:"footer-bottom"},b("p",null,"Baran Energy  2020")))}},fME4:function(e,n,a){"use strict";a.d(n,"a",(function(){return r}));var r={ADD_USERNAME:"ADD_USERNAME",DEL_USERNAME:"DEL_USERNAME",FETCH_LOGIN:"FETCH_LOGIN",RESET:"RESET"}},u6Hu:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a("O2ls")}])},v7FG:function(e,n){e.exports="/baran/_next/static/images/logo-baran-c0af9fece1dcf1959c5d81c1b3aaf6ec.png"}},[["u6Hu",1,2,0,3,4]]]);