_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"HaE+":function(e,n,a){"use strict";function t(e,n,a,t,r,o,s){try{var c=e[o](s),i=c.value}catch(l){return void a(l)}c.done?n(i):Promise.resolve(i).then(t,r)}function r(e){return function(){var n=this,a=arguments;return new Promise((function(r,o){var s=e.apply(n,a);function c(e){t(s,r,o,c,i,"next",e)}function i(e){t(s,r,o,c,i,"throw",e)}c(void 0)}))}}a.d(n,"a",(function(){return r}))},O2ls:function(e,n,a){"use strict";a.r(n);var t=a("o0o1"),r=a.n(t),o=a("HaE+"),s=a("q1tI"),c=a.n(s),i=a("YFqc"),l=a.n(i),u=a("tXcZ"),d=a("nOHt"),p=a("/MKj"),f=a("fME4"),m=function(e){return{type:f.a.ADD_USERNAME,payload:e}},b=c.a.createElement;n.default=function(){var e=a("v7FG"),n=Object(d.useRouter)(),t=Object(s.useState)(""),c=t[0],i=t[1],f=Object(s.useRef)(),v=Object(s.useRef)(),E=Object(p.b)(),N=function(){var e=Object(o.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={username:f.current.value,password:v.current.value},e.prev=2,e.next=5,fetch("https://test.vincentreynard.com/user/login",{method:"POST",credentials:"include",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){200!==e.status?i("wrong username or password"):(i(""),E(m(t.username)),n.push("/baran/products"))}));case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("An error occured",e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}();return b("div",{className:"login"},b(u.a,{props:{description:"login"}}),b("nav",{className:"navbar"},b("img",{src:e,alt:"Baran logo",className:"navbar-brand"}),b("i",{className:"fa fa-map icon-pajangan","aria-hidden":"true"})),b("div",{className:"container login-content"},b("div",{className:"login-header"},b("h1",null,"Sign In")),c?b("div",{className:"d-flex justify-content-center align-items-center mt-3",style:{width:"100%",background:"#ff6e6b",color:"#cf0a06",borderRadius:"10px",boxShadow:"5px 10px 20px rgba(0, 0, 0, 0.25)","font-size":"calc(1.2vw + 1.2vh)"}},c):"",b("form",{className:"signin-form"},b("label",{className:"email-label",htmlFor:"email"},"Email Address"),b("input",{ref:f,type:"email",className:"form-control",id:"email",name:"email",placeholder:"email address",required:!0}),b("label",{className:"email-label",htmlFor:"password"},"Password"),b("input",{ref:v,type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",required:!0}),b("button",{className:"btn btn-lg btn-primary btn-block btn-signin",onClick:N},"SIGN IN"),b("div",{className:"forgot-pass"},b(l.a,{href:"#"},b("a",null,"Forgot password?"))))),b("footer",{className:"footer-bottom"},b("p",null,"Baran Energy  2020")))}},fME4:function(e,n,a){"use strict";a.d(n,"a",(function(){return t}));var t={ADD_USERNAME:"ADD_USERNAME",DEL_USERNAME:"DEL_USERNAME",FETCH_LOGIN:"FETCH_LOGIN",RESET:"RESET"}},u6Hu:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a("O2ls")}])},v7FG:function(e,n){e.exports="/baran/_next/static/images/logo-baran-9f6189042015aa669a2d316944039d13.png"}},[["u6Hu",1,2,0,3,4]]]);