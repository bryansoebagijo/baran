_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"O1O/":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return a("auAi")}])},auAi:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),o=a.n(t),c=a("tXcZ"),l=a("IIeE"),r=a("YFqc"),i=a.n(r),s=a("nOHt"),u=a("/MKj"),d=a("VtrM"),f=o.a.createElement,m=[{status:"online",connection:"off",serialNumber:"27-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"},{status:"online",connection:"on",serialNumber:"28-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"},{status:"offline",connection:"on",serialNumber:"29-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"warning"},{status:"online",connection:"on",serialNumber:"30-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"}];n.default=function(){var e,n,a,o=Object(t.useState)(""),r=o[0],b=o[1],h=Object(t.useState)(!1),p=h[0],N=h[1],v=Object(t.useState)(!1),g=v[0],k=v[1],w=Object(t.useState)(!0),y=w[0],C=w[1],O=Object(t.useState)(!0),j=O[0],S=O[1],L=Object(t.useState)([]),_=L[0],P=L[1],E=Object(t.useState)(""),x=E[0],B=E[1],W=Object(t.useState)({serial:!1,product:!1,location:!1}),D=W[0],R=W[1],T=Object(t.useState)(""),V=T[0],A=T[1],F=Object(t.useState)({status:!1,rowkey:null}),I=F[0],K=F[1],q=Object(t.useState)([]),J=(q[0],q[1]),M=Object(t.useRef)(),X=Object(t.useRef)(),H=Object(t.useRef)(),U=Object(t.useRef)(),Y=Object(t.useRef)(),G=!0,Z=!0,z=[{}],Q=Object(s.useRouter)(),$=Object(u.c)((function(e){return e.state.username}));if(console.log($),Object(t.useEffect)((function(){$||(alert("you are not loggin yet!"),Q.replace({pathname:"/"}))}),[$]),$){var ee="192.168.5.73/products/"+$,ne=Object(d.a)(ee,(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return fetch.apply(void 0,n.concat([{credentials:"include",method:"GET"}])).then((function(e){return e.json()}))})),ae=ne.data,te=ne.error;ae&&console.log(ae.top),te&&console.log(te)}var oe,ce=function(e){var n=e.id,a=e.newLoc;fetch("".concat("","/").concat(n),{method:"PATCH",body:JSON.stringify({location:a}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){le(),fetch("".concat("")).then((function(e){return e.json()})).then((function(e){return J(e)}))})),le()},le=function(){K({status:!1,rowKey:null}),A(null)},re=function(e){if(G=M.current.checked,Z=X.current.checked,G&&!Z){var n=M.current.value;console.log(n),k(!1),B(""),z=m.filter((function(e){return"on"==e.connection})),P(z)}if(Z&&!G){var a=X.current.value;console.log(a),k(!1),B(""),z=m.filter((function(e){return"off"==e.connection})),P(z)}G||Z||(k(!1),console.log("2 2 nya mati mas"),P([]),B("both"),console.log(_),console.log(_.length)),G&&Z&&(z=m.filter((function(e){return-1!==e.serialNumber.toLowerCase().indexOf(r.toLowerCase())})),B(""),P(z)),k(!1)},ie=function(){e=H.current.checked,n=U.current.checked,a=Y.current.checked,e?(console.log("serial number selected"),P(oe.sort((function(e,n){var a=e.serialNumber.toLowerCase(),t=n.serialNumber.toLowerCase();return a>t?1:a<t?-1:0}))),N(!1)):n?(console.log("product selected"),N(!1),P(oe.sort((function(e,n){var a=e.product.toLowerCase(),t=n.product.toLowerCase();return a>t?-1:a<t?1:0})))):a?(console.log("location selected"),N(!1),P(oe.sort((function(e,n){var a=e.location.toLowerCase(),t=n.location.toLowerCase();return a>t?-1:a<t?1:0})))):(console.log("jangepong"),N(!1))},se=function(){return f("div",{className:"backdrop",onClick:function(){k(!1),N(!1)}})};return Object(t.useEffect)((function(){console.log(oe)}),[_]),oe=_.length>0?_.filter((function(e){return-1!==e.serialNumber.toLowerCase().indexOf(r.toLowerCase())})):m.filter((function(e){return-1!==e.serialNumber.toLowerCase().indexOf(r.toLowerCase())})),"both"==x&&(oe=m.filter((function(e){return"none"==e.connection}))),f("div",{className:"dashboard"},f(c.a,null),f("div",{className:"container-fluid wrapper-dashboard"},g?se():"",g?f("div",{className:"container filtercard"},f("h3",null,"Filter products by"),f("form",null,f("div",{className:"d-flex"},f("label",null,"connection : on"),f("input",{ref:M,type:"checkbox",name:"on",value:"on",checked:y,onChange:function(){return C(!y)}})),f("div",{className:"d-flex"},f("label",null,"connection : off"),f("input",{ref:X,type:"checkbox",name:"off",value:"off",checked:j,onChange:function(){return S(!j)}}))),f("hr",null),f("div",{className:"buttons"},f("button",{type:"button",className:"btn btn-danger cancel",onClick:function(){return k(!1)}},"cancel"),f("button",{type:"button",className:"btn btn-primary ok",onClick:re},"OK"))):"",p?se():"",p?function(){var e,n,a;return f("div",{className:"container sortcard"},f("h3",null,"Sort products by"),f("form",null,f("div",{className:"form-check"},f("input",{className:"form-check-input radio",ref:H,name:"sort",type:"radio",value:"serial-number",checked:null!==(e=D.serial)&&void 0!==e&&e,onChange:function(){return R((function(e){return{serial:!e.serial}}))}}),f("label",{className:"form-check-label"},"Serial Number")),f("div",{className:"form-check"},f("input",{className:"form-check-input radio",ref:U,name:"sort",type:"radio",value:"product",checked:null!==(n=D.product)&&void 0!==n&&n,onChange:function(){return R((function(e){return{product:!e.product}}))}}),f("label",{className:"form-check-label"},"Product")),f("div",{className:"form-check"},f("input",{className:"form-check-input radio",ref:Y,name:"sort",type:"radio",value:"location",checked:null!==(a=D.location)&&void 0!==a&&a,onChange:function(){return R((function(e){return{location:!e.location}}))}}),f("label",{className:"form-check-label"},"Location"))),f("hr",null),f("div",{className:"buttons"},f("button",{type:"button",className:"btn btn-danger cancel",onClick:function(){return N(!1)}},"cancel"),f("button",{type:"button",className:"btn btn-primary ok",onClick:ie},"OK")))}():"",f("div",{className:"row table-row"},f("div",{className:"col-md-2 col-sm-1 col-1 sidebarCol",id:"test"},f(l.a,null,f("ul",{className:"navbar-nav navi"},f("li",{className:"active"},f(i.a,{href:"#"},f("a",null,f("i",{className:"fa fa-tachometer","aria-hidden":"true"},f("span",null,"Dashboard"))))),f("li",{className:"nav-items"},f(i.a,{href:"#"},f("a",null,f("i",{className:"fa fa-signal","aria-hidden":"true"},f("span",null,"Usage Details"))))),f("li",{className:"nav-items"},f(i.a,{href:"#"},f("a",null,f("i",{className:"fa fa-tasks","aria-hidden":"true"},f("span",null,"System Logs"))))),f("li",{className:"nav-items"},f(i.a,{href:"#"},f("a",null,f("i",{className:"fa fa-list-alt","aria-hidden":"true"},f("span",null,"Contact us"))))),f("hr",{className:"sidebar-divider"}),f("li",{className:"nav-items"},f(i.a,{href:"#"},f("a",null,f("i",{className:"fa fa-cog","aria-hidden":"true"},f("span",null,"Main Setting"))))),f("li",{className:"nav-items"},f(i.a,{href:"#"},f("a",null,f("i",{className:"fa fa-plus-square","aria-hidden":"true"},f("span",null,"Integrations")))))))),f("div",{className:"col-md-10 col-sm-11 col-11 page-content"},f("div",{className:"container-fluid"},f("div",{className:"page-header"},f("h2",null,"Your Products")),f("div",{className:"row search_section"},f("div",{className:"col-lg-8 col-md-8 col-sm-6 col-6 searchbar"},f("div",{className:"container-fluid"},f("input",{type:"text",onChange:function(e){return b(e.target.value)},value:r,placeholder:"Search Product..."}),f("button",{type:"button"},f("i",{className:"fa fa-search","aria-hidden":"true"})))),f("div",{className:"col-lg-2 col-md-2 col-sm-3 col-3 sort"},f("button",{type:"button",onClick:function(){return N(!p)}},f("i",{className:"fa fa-sort-amount-desc","aria-hidden":"true"}),f("span",null,"Sort"))),f("div",{className:"col-lg-2 col-md-2 col-sm-3 col-3 filter"},f("button",{type:"button",onClick:function(){return k(!0)}},f("i",{className:"fa fa-filter","aria-hidden":"true"}),f("span",null,"Filter")))),f("div",{className:"row products"},f("div",{className:"col-12 table_product"},f("div",{className:"table-responsive-sm"},f("table",{className:"table table-hover product_list"},f("thead",null,f("tr",null,f("th",{scope:"col"},"Status"),f("th",{scope:"col"},"Connection"),f("th",{scope:"col"},"Serial Number"),f("th",{scope:"col"},"Product"),f("th",{scope:"col"},"Location"),f("th",{scope:"col"},"Condition"))),f("tbody",null,oe.map((function(e){return f("tr",{key:e.serialNumber},f("td",null,"online"==e.status?f("span",{className:"green_round"}):f("span",{className:"red_round"})),f("td",null,"on"==e.connection?f("span",{className:"green_round"}):f("span",{className:"red_round"})),f("td",null,e.serialNumber),f("td",null,e.product),f("td",null,I.status&&I.rowkey===e.serialNumber?f("form",{className:"edit-location"},f("input",{placeholder:"Edit location",name:"location",className:"inputLoc",onChange:function(e){return A(e.target.value)},value:V}),f("i",{class:"fa fa-check check-icon","aria-hidden":"true",onClick:function(){return function(e){var n=e.id,a=e.newLoc;ce({id:n,newLoc:a})}({id:e.serialNumber,newLoc:V})}}),f("i",{class:"fa fa-ban ban-icon","aria-hidden":"true",onClick:le})):e.location,I.status&&I.rowkey===e.serialNumber?"":f("i",{className:"fa fa-pencil edit-icon",onClick:function(){return function(e){var n=e.id,a=e.currentLoc;console.log("onEdit"),K({status:!0,rowkey:n}),A(a)}({id:e.serialNumber,currentLoc:e.location})}})),f("td",null,"okay"==e.condition?f("i",{className:"fa fa-check okay","aria-hidden":"true"}):"warning"==e.condition?f("i",{className:"fa fa-exclamation-triangle warning","aria-hidden":"true"}):f("i",{className:"fa fa-exclamation-circle error","aria-hidden":"true"})))}))))))))))))}}},[["O1O/",1,2,0,3,4,5]]]);