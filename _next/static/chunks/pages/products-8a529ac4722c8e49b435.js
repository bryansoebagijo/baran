_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{IIeE:function(e,a,n){"use strict";var o=n("q1tI"),t=n.n(o),l=n("YFqc"),c=n.n(l),r=t.a.createElement;a.a=function(e){return r("div",{className:"col-12 layer"},r("div",{className:"profile-pic"},r(c.a,{href:"#"},r("a",null,r("img",{className:"profile",src:"none",alt:"profile"}))),r("a",{role:"button",className:"collapsed","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne"},"username",r("i",{className:"fa fa-caret-down","aria-hidden":"true"})),r("div",{className:"collapse bg-white",id:"collapseOne","aria-labelledby":"headingOne"},r("h5",{className:"collapse-header"},"Profile"),r("h5",{className:"collapse-header",onClick:function(){sessionStorage.clear(),alert("you have been logged out"),location.replace("/login")}},"logout"))),r("hr",{className:"sidebar-divider"}),e.children)}},"O1O/":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return n("auAi")}])},auAi:function(e,a,n){"use strict";n.r(a);var o=n("q1tI"),t=n.n(o),l=n("tXcZ"),c=n("IIeE"),r=n("YFqc"),s=n.n(r),i=n("nOHt"),u=t.a.createElement,d=[{status:"online",connection:"off",serialNumber:"27-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"},{status:"online",connection:"on",serialNumber:"28-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"},{status:"offline",connection:"on",serialNumber:"29-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"warning"},{status:"online",connection:"on",serialNumber:"30-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"}];a.default=function(){var e,a,n,t,r=Object(o.useState)(""),f=r[0],m=r[1],b=Object(o.useState)(!1),p=b[0],h=b[1],N=Object(o.useState)(!1),v=N[0],g=N[1],k=Object(o.useState)(!0),w=k[0],C=k[1],y=Object(o.useState)(!0),O=y[0],S=y[1],_=Object(o.useState)([]),j=_[0],L=_[1],P=Object(o.useState)(""),x=P[0],E=P[1],B=Object(o.useState)({serial:!1,product:!1,location:!1}),W=B[0],I=B[1],D=Object(o.useRef)(),R=Object(o.useRef)(),q=Object(o.useRef)(),F=Object(o.useRef)(),V=Object(o.useRef)(),X=!0,Y=!0,A=[{}],J=(Object(i.useRouter)(),function(e){if(X=D.current.checked,Y=R.current.checked,X&&!Y){var a=D.current.value;console.log(a),g(!1),E(""),A=d.filter((function(e){return"on"==e.connection})),L(A)}if(Y&&!X){var n=R.current.value;console.log(n),g(!1),E(""),A=d.filter((function(e){return"off"==e.connection})),L(A)}X||Y||(g(!1),console.log("2 2 nya mati mas"),L([]),E("both"),console.log(j),console.log(j.length)),X&&Y&&(A=d.filter((function(e){return-1!==e.serialNumber.toLowerCase().indexOf(f.toLowerCase())})),E(""),L(A)),g(!1)}),K=function(){e=q.current.checked,a=F.current.checked,n=V.current.checked,e?(console.log("serial number selected"),L(t.sort((function(e,a){var n=e.serialNumber.toLowerCase(),o=a.serialNumber.toLowerCase();return n>o?1:n<o?-1:0}))),h(!1)):a?(console.log("product selected"),h(!1),L(t.sort((function(e,a){var n=e.product.toLowerCase(),o=a.product.toLowerCase();return n>o?-1:n<o?1:0})))):n?(console.log("location selected"),h(!1),L(t.sort((function(e,a){var n=e.location.toLowerCase(),o=a.location.toLowerCase();return n>o?-1:n<o?1:0})))):(console.log("jangepong"),h(!1))},T=function(){return u("div",{className:"backdrop",onClick:function(){g(!1),h(!1)}})};return Object(o.useEffect)((function(){console.log(t)}),[j]),t=j.length>0?j.filter((function(e){return-1!==e.serialNumber.toLowerCase().indexOf(f.toLowerCase())})):d.filter((function(e){return-1!==e.serialNumber.toLowerCase().indexOf(f.toLowerCase())})),"both"==x&&(t=d.filter((function(e){return"none"==e.connection}))),u("div",{className:"dashboard"},u(l.a,null),u("div",{className:"container-fluid wrapper-dashboard"},v?T():"",v?u("div",{className:"container filtercard"},u("h3",null,"Filter products by"),u("form",null,u("div",{className:"d-flex"},u("label",null,"connection : on"),u("input",{ref:D,type:"checkbox",name:"on",value:"on",checked:w,onChange:function(){return C(!w)}})),u("div",{className:"d-flex"},u("label",null,"connection : off"),u("input",{ref:R,type:"checkbox",name:"off",value:"off",checked:O,onChange:function(){return S(!O)}}))),u("hr",null),u("div",{className:"buttons"},u("button",{type:"button",className:"btn btn-danger cancel",onClick:function(){return g(!1)}},"cancel"),u("button",{type:"button",className:"btn btn-primary ok",onClick:J},"OK"))):"",p?T():"",p?function(){var e,a,n;return u("div",{className:"container sortcard"},u("h3",null,"Sort products by"),u("form",null,u("div",{className:"form-check"},u("input",{className:"form-check-input radio",ref:q,name:"sort",type:"radio",value:"serial-number",checked:null!==(e=W.serial)&&void 0!==e&&e,onChange:function(){return I((function(e){return{serial:!e.serial}}))}}),u("label",{className:"form-check-label"},"Serial Number")),u("div",{className:"form-check"},u("input",{className:"form-check-input radio",ref:F,name:"sort",type:"radio",value:"product",checked:null!==(a=W.product)&&void 0!==a&&a,onChange:function(){return I((function(e){return{product:!e.product}}))}}),u("label",{className:"form-check-label"},"Product")),u("div",{className:"form-check"},u("input",{className:"form-check-input radio",ref:V,name:"sort",type:"radio",value:"location",checked:null!==(n=W.location)&&void 0!==n&&n,onChange:function(){return I((function(e){return{location:!e.location}}))}}),u("label",{className:"form-check-label"},"Location"))),u("hr",null),u("div",{className:"buttons"},u("button",{type:"button",className:"btn btn-danger cancel",onClick:function(){return h(!1)}},"cancel"),u("button",{type:"button",className:"btn btn-primary ok",onClick:K},"OK")))}():"",u("div",{className:"row table-row"},u("div",{className:"col-md-2 col-sm-1 col-1 sidebarCol",id:"test"},u(c.a,null,u("ul",{className:"navbar-nav navi"},u("li",{className:"active"},u(s.a,{href:"#"},u("a",null,u("i",{className:"fa fa-tachometer","aria-hidden":"true"},u("span",null,"Dashboard"))))),u("li",{className:"nav-items"},u(s.a,{href:"#"},u("a",null,u("i",{className:"fa fa-signal","aria-hidden":"true"},u("span",null,"Usage Details"))))),u("li",{className:"nav-items"},u(s.a,{href:"#"},u("a",null,u("i",{className:"fa fa-tasks","aria-hidden":"true"},u("span",null,"System Logs"))))),u("li",{className:"nav-items"},u(s.a,{href:"#"},u("a",null,u("i",{className:"fa fa-list-alt","aria-hidden":"true"},u("span",null,"Contact us"))))),u("hr",{className:"sidebar-divider"}),u("li",{className:"nav-items"},u(s.a,{href:"#"},u("a",null,u("i",{className:"fa fa-cog","aria-hidden":"true"},u("span",null,"Main Setting"))))),u("li",{className:"nav-items"},u(s.a,{href:"#"},u("a",null,u("i",{className:"fa fa-plus-square","aria-hidden":"true"},u("span",null,"Integrations")))))))),u("div",{className:"col-md-10 col-sm-11 col-11 page-content"},u("div",{className:"container-fluid"},u("div",{className:"page-header"},u("h2",null,"Your Products")),u("div",{className:"row search_section"},u("div",{className:"col-lg-8 col-md-8 col-sm-6 col-6 searchbar"},u("div",{className:"container-fluid"},u("input",{type:"text",onChange:function(e){return m(e.target.value)},value:f,placeholder:"Search Product..."}),u("button",{type:"button"},u("i",{className:"fa fa-search","aria-hidden":"true"})))),u("div",{className:"col-lg-2 col-md-2 col-sm-3 col-3 sort"},u("button",{type:"button",onClick:function(){return h(!p)}},u("i",{className:"fa fa-sort-amount-desc","aria-hidden":"true"}),u("span",null,"Sort"))),u("div",{className:"col-lg-2 col-md-2 col-sm-3 col-3 filter"},u("button",{type:"button",onClick:function(){return g(!0)}},u("i",{className:"fa fa-filter","aria-hidden":"true"}),u("span",null,"Filter")))),u("div",{className:"row products"},u("div",{className:"col-12 table_product"},u("div",{className:"table-responsive-sm"},u("table",{className:"table table-hover product_list"},u("thead",null,u("tr",null,u("th",{scope:"col"},"Status"),u("th",{scope:"col"},"Connection"),u("th",{scope:"col"},"Serial Number"),u("th",{scope:"col"},"Product"),u("th",{scope:"col"},"Location"),u("th",{scope:"col"},"Condition"))),u("tbody",null,t.map((function(e){return u(s.a,{href:"/dashboard",key:e.serialNumber},u("tr",null,u("td",null,"online"==e.status?u("span",{className:"green_round"}):u("span",{className:"red_round"})),u("td",null,"on"==e.connection?u("span",{className:"green_round"}):u("span",{className:"red_round"})),u("td",null,e.serialNumber),u("td",null,e.product),u("td",null,e.location),u("td",null,"okay"==e.condition?u("i",{className:"fa fa-check okay","aria-hidden":"true"}):"warning"==e.condition?u("i",{className:"fa fa-exclamation-triangle warning","aria-hidden":"true"}):u("i",{className:"fa fa-exclamation-circle error","aria-hidden":"true"}))))}))))))))))))}}},[["O1O/",0,2,1,3]]]);