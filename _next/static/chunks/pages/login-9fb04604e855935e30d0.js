_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{O2ls:function(e,a,n){"use strict";n.r(a);var r=n("o0o1"),t=n.n(r),s=n("HaE+"),o=n("q1tI"),c=n.n(o),l=n("YFqc"),i=n.n(l),u=n("tXcZ"),d=n("nOHt"),m=n("/MKj"),p=n("fME4"),f=function(e){return{type:p.a.ADD_USERNAME,payload:e}},b=c.a.createElement;a.default=function(){var e=n("v7FG"),a=Object(d.useRouter)(),r=Object(o.useState)({type:"",message:""}),c=(r[0],r[1]),l=Object(o.useRef)(),p=Object(o.useRef)(),E=Object(m.b)(),N=function(){var e=Object(s.a)(t.a.mark((function e(n){var r,s,o;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={username:l.current.value,password:p.current.value},console.log(r),e.prev=3,e.next=6,fetch("https://test.vincentreynard.com/user/login",{method:"POST",credentials:"include",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 6:if(!(s=e.sent).ok){e.next=14;break}return e.next=10,s.json();case 10:o=e.sent,console.log(o),E(f(r.username)),a.push("/baran/products");case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),console.log("An error occured",e.t0),c({type:"error",message:"An error occured while submitting the form"});case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(a){return e.apply(this,arguments)}}();return b("div",{className:"login"},b(u.a,null),b("nav",{className:"navbar"},b("img",{src:e,alt:"Baran logo",className:"navbar-brand"}),b("i",{className:"fa fa-map icon-pajangan","aria-hidden":"true"})),b("div",{className:"container login-content"},b("div",{className:"login-header"},b("h1",null,"Sign In")),b("form",{className:"signin-form"},b("label",{className:"email-label",htmlFor:"email"},"Email Address"),b("input",{ref:l,type:"email",className:"form-control",id:"email",name:"email",placeholder:"email address",required:!0}),b("label",{className:"email-label",htmlFor:"password"},"Password"),b("input",{ref:p,type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",required:!0}),b("button",{className:"btn btn-lg btn-primary btn-block btn-signin",onClick:N},"SIGN IN"),b("div",{className:"forgot-pass"},b(i.a,{href:"#"},b("a",null,"Forgot password?"))))),b("footer",{className:"footer-bottom"},b("p",null,"Baran Energy  2020")))}},fME4:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var r={ADD_USERNAME:"ADD_USERNAME",DEL_USERNAME:"DEL_USERNAME",FETCH_LOGIN:"FETCH_LOGIN",RESET:"RESET"}},u6Hu:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("O2ls")}])},v7FG:function(e,a){e.exports="/baran/_next/static/images/logo-baran-c0af9fece1dcf1959c5d81c1b3aaf6ec.png"}},[["u6Hu",1,2,0,3,4]]]);