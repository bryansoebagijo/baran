_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"O1O/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return a("auAi")}])},auAi:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),r=a("tXcZ"),c=a("YFqc"),i=a.n(c),l=a("nOHt"),s=a("/MKj"),u=a("VtrM"),d=a("wx14"),p=a("RD7I"),b=a("cNwE");var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(p.a)(e,Object(d.a)({defaultTheme:b.a},t))},f=a("Ff2n"),h=(a("17x9"),a("iuhU")),g=a("H2TA"),v=a("KQm4"),y=a("ODXe");function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,n=e.componentName,r=void 0===n?"usePagination":n,c=e.count,i=void 0===c?1:c,l=e.defaultPage,s=void 0===l?1:l,u=e.disabled,p=void 0!==u&&u,b=e.hideNextButton,m=void 0!==b&&b,h=e.hidePrevButton,g=void 0!==h&&h,N=e.onChange,O=e.page,k=e.showFirstButton,C=void 0!==k&&k,j=e.showLastButton,w=void 0!==j&&j,x=e.siblingCount,L=void 0===x?1:x,S=Object(f.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),P=function(e){var t=e.controlled,a=e.default,n=(e.name,e.state,o.useRef(void 0!==t).current),r=o.useState(a),c=r[0],i=r[1];return[n?t:c,o.useCallback((function(e){n||i(e)}),[])]}({controlled:O,default:s,name:r,state:"page"}),B=Object(y.a)(P,2),E=B[0],$=B[1],R=function(e,t){O||$(t),N&&N(e,t)},z=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},_=z(1,Math.min(a,i)),M=z(Math.max(i-a+1,a+1),i),V=Math.max(Math.min(E-L,i-a-2*L-1),a+2),W=Math.min(Math.max(E+L,a+2*L+2),M[0]-2),T=[].concat(Object(v.a)(C?["first"]:[]),Object(v.a)(g?[]:["previous"]),Object(v.a)(_),Object(v.a)(V>a+2?["start-ellipsis"]:a+1<i-a?[a+1]:[]),Object(v.a)(z(V,W)),Object(v.a)(W<i-a-1?["end-ellipsis"]:i-a>a?[i-a]:[]),Object(v.a)(M),Object(v.a)(m?[]:["next"]),Object(v.a)(w?["last"]:[])),I=function(e){switch(e){case"first":return 1;case"previous":return E-1;case"next":return E+1;case"last":return i;default:return null}},D=T.map((function(e){return"number"===typeof e?{onClick:function(t){R(t,e)},type:"page",page:e,selected:e===E,disabled:p,"aria-current":e===E?"true":void 0}:{onClick:function(t){R(t,I(e))},type:e,page:I(e),selected:!1,disabled:p||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?E>=i:E<=1)}}));return Object(d.a)({items:D},S)}var O=a("ye/S"),k=a("tr08"),C=a("VD++"),j=a("HR5l");function w(e,t){var a=function(t,a){return n.a.createElement(j.a,Object(d.a)({ref:a},t),e)};return a.muiName=j.a.muiName,n.a.memo(n.a.forwardRef(a))}var x=w(o.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),L=w(o.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),S=w(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),P=w(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),B=a("NqtD"),E=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.color,c=void 0===r?"standard":r,i=e.component,l=e.disabled,s=void 0!==l&&l,u=e.page,p=e.selected,b=void 0!==p&&p,m=e.shape,g=void 0===m?"round":m,v=e.size,y=void 0===v?"medium":v,N=e.type,O=void 0===N?"page":N,j=e.variant,w=void 0===j?"text":j,E=Object(f.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),$=("rtl"===Object(k.a)().direction?{previous:P,next:S,last:x,first:L}:{previous:S,next:P,first:x,last:L})[O];return"start-ellipsis"===O||"end-ellipsis"===O?o.createElement("div",{ref:t,className:Object(h.a)(a.root,a.ellipsis,s&&a.disabled,"medium"!==y&&a["size".concat(Object(B.a)(y))])},"\u2026"):o.createElement(C.a,Object(d.a)({ref:t,component:i,disabled:s,focusVisibleClassName:a.focusVisible,className:Object(h.a)(a.root,a.page,a[w],a[g],n,"standard"!==c&&a["".concat(w).concat(Object(B.a)(c))],s&&a.disabled,b&&a.selected,"medium"!==y&&a["size".concat(Object(B.a)(y))])},E),"page"===O&&u,$?o.createElement($,{className:a.icon}):null)})),$=Object(g.a)((function(e){return{root:Object(d.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(O.b)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(O.b)(e.palette.primary.main,.5)),backgroundColor:Object(O.b)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(O.b)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(O.b)(e.palette.secondary.main,.5)),backgroundColor:Object(O.b)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(O.b)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(E);function R(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var z=o.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,n=e.className,r=e.color,c=void 0===r?"standard":r,i=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),l=void 0===i?R:i,s=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),u=void 0===s?function(e){return o.createElement($,e)}:s,p=e.shape,b=void 0===p?"round":p,m=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),g=void 0===m?"medium":m,v=e.variant,y=void 0===v?"text":v,O=Object(f.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),k=N(Object(d.a)({},e,{componentName:"Pagination"})).items;return o.createElement("nav",Object(d.a)({"aria-label":"pagination navigation",className:Object(h.a)(a.root,n),ref:t},O),o.createElement("ul",{className:a.ul},k.map((function(e,t){return o.createElement("li",{key:t},u(Object(d.a)({},e,{color:c,"aria-label":l(e.type,e.page,e.selected),shape:b,size:g,variant:y})))}))))})),_=Object(g.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(z),M=n.a.createElement,V=[{status:"online",connection:"off",serialNumber:"27-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"},{status:"online",connection:"on",serialNumber:"28-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"},{status:"offline",connection:"on",serialNumber:"29-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"warning"},{status:"online",connection:"on",serialNumber:"30-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"},{status:"offline",connection:"off",serialNumber:"31-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"okay"},{status:"offline",connection:"off",serialNumber:"32-BSD-07-PW-20",product:"Power Wall",location:"Villa Bogor",condition:"warning"}],W=m((function(e){return{root:{width:"100%",margin:"auto",color:"white",display:"flex",alignItems:"center",justifyContent:"center","& > *":{marginTop:e.spacing(2)},"& ul":{color:"white"},"& .MuiPaginationItem-root ":{color:"white"}}}}));t.default=function(){var e,t,a,n=W(),c=Object(o.useState)(""),d=c[0],p=c[1],b=Object(o.useState)(!1),m=b[0],f=b[1],h=Object(o.useState)(!1),g=h[0],v=h[1],y=Object(o.useState)(!0),N=y[0],O=y[1],k=Object(o.useState)(!0),C=k[0],j=k[1],w=Object(o.useState)([]),x=w[0],L=w[1],S=Object(o.useState)(""),P=S[0],B=S[1],E=Object(o.useState)({serial:!1,product:!1,location:!1}),$=E[0],R=E[1],z=Object(o.useState)(""),T=z[0],I=z[1],D=Object(o.useState)({status:!1,rowkey:null}),F=D[0],A=D[1],H=Object(o.useState)([{}]),K=(H[0],H[1]),X=Object(o.useState)(1),q=X[0],G=X[1],J=Object(o.useState)(1),U=J[0],Y=J[1],Q=Object(o.useRef)(),Z=Object(o.useRef)(),ee=Object(o.useRef)(),te=Object(o.useRef)(),ae=Object(o.useRef)(),oe=!0,ne=!0,re=[{}],ce=(Object(l.useRouter)(),Object(s.c)((function(e){return e.state.username})));if(console.log(ce),Object(o.useEffect)((function(){ce||alert("you are not loggin yet!")}),[ce]),ce){var ie="http://192.168.5.73/products/"+ce,le=Object(u.a)(ie,(function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return fetch.apply(void 0,t.concat([{method:"GET",credentials:"include"}])).then((function(e){return e.json()}))}),{dedupingInterval:5e3}),se=le.data,ue=le.error;se&&console.log(se),ue&&console.log(ue)}var de,pe=function(e){var t=e.id,a=e.newLoc;fetch("".concat("","/").concat(t),{method:"PATCH",body:JSON.stringify({location:a}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){be(),fetch("".concat("")).then((function(e){return e.json()})).then((function(e){return K(e)}))})),be()},be=function(){A({status:!1,rowKey:null}),I(null)},me=function(e){if(oe=Q.current.checked,ne=Z.current.checked,oe&&!ne){var t=Q.current.value;console.log(t),v(!1),B(""),re=V.filter((function(e){return"on"==e.connection})),L(re)}if(ne&&!oe){var a=Z.current.value;console.log(a),v(!1),B(""),re=V.filter((function(e){return"off"==e.connection})),L(re)}oe||ne||(v(!1),console.log("2 2 nya mati mas"),L([]),B("both"),console.log(x),console.log(x.length),Y(x.length)),oe&&ne&&(re=V.filter((function(e){return-1!==e.serialNumber.toLowerCase().indexOf(d.toLowerCase())})),B(""),L(re)),v(!1)},fe=function(){e=ee.current.checked,t=te.current.checked,a=ae.current.checked,e?(console.log("serial number selected"),L(de.sort((function(e,t){var a=e.serialNumber.toLowerCase(),o=t.serialNumber.toLowerCase();return a>o?1:a<o?-1:0}))),f(!1)):t?(console.log("product selected"),f(!1),L(de.sort((function(e,t){var a=e.product.toLowerCase(),o=t.product.toLowerCase();return a>o?-1:a<o?1:0})))):a?(console.log("location selected"),f(!1),L(de.sort((function(e,t){var a=e.location.toLowerCase(),o=t.location.toLowerCase();return a>o?-1:a<o?1:0})))):(console.log("jangepong"),f(!1))},he=function(){return M("div",{className:"backdrop",onClick:function(){v(!1),f(!1)}})};return Object(o.useEffect)((function(){console.log(de)}),[x]),de=x.length>0?x.filter((function(e){return-1!==e.serialNumber.toLowerCase().indexOf(d.toLowerCase())})):V.filter((function(e){return-1!==e.serialNumber.toLowerCase().indexOf(d.toLowerCase())})),"both"==P&&(de=V.filter((function(e){return"none"==e.connection}))),Object(o.useEffect)((function(){if(de.length>0){var e=de.length,t=Math.ceil(e/5);Y(t)}else Y(1)}),[de]),M("div",{className:"dashboard"},M(r.a,null),M("div",{className:"container-fluid wrapper-dashboard"},g?he():"",g?M("div",{className:"container filtercard"},M("h3",null,"Filter products by"),M("form",null,M("div",{className:"d-flex"},M("label",null,"connection : on"),M("input",{ref:Q,type:"checkbox",name:"on",value:"on",checked:N,onChange:function(){return O(!N)}})),M("div",{className:"d-flex"},M("label",null,"connection : off"),M("input",{ref:Z,type:"checkbox",name:"off",value:"off",checked:C,onChange:function(){return j(!C)}}))),M("hr",null),M("div",{className:"buttons"},M("button",{type:"button",className:"btn btn-danger cancel",onClick:function(){return v(!1)}},"cancel"),M("button",{type:"button",className:"btn btn-primary ok",onClick:me},"OK"))):"",m?he():"",m?function(){var e,t,a;return M("div",{className:"container sortcard"},M("h3",null,"Sort products by"),M("form",null,M("div",{className:"form-check"},M("input",{className:"form-check-input radio",ref:ee,name:"sort",type:"radio",value:"serial-number",checked:null!==(e=$.serial)&&void 0!==e&&e,onChange:function(){return R((function(e){return{serial:!e.serial}}))}}),M("label",{className:"form-check-label"},"Serial Number")),M("div",{className:"form-check"},M("input",{className:"form-check-input radio",ref:te,name:"sort",type:"radio",value:"product",checked:null!==(t=$.product)&&void 0!==t&&t,onChange:function(){return R((function(e){return{product:!e.product}}))}}),M("label",{className:"form-check-label"},"Product")),M("div",{className:"form-check"},M("input",{className:"form-check-input radio",ref:ae,name:"sort",type:"radio",value:"location",checked:null!==(a=$.location)&&void 0!==a&&a,onChange:function(){return R((function(e){return{location:!e.location}}))}}),M("label",{className:"form-check-label"},"Location"))),M("hr",null),M("div",{className:"buttons"},M("button",{type:"button",className:"btn btn-danger cancel",onClick:function(){return f(!1)}},"cancel"),M("button",{type:"button",className:"btn btn-primary ok",onClick:fe},"OK")))}():"",M("div",{className:"row table-row"},M("div",{className:"col-md-12 col-sm-12 col-12 page-content"},M("div",{className:"container-fluid"},M("div",{className:"page-header"},M("h2",null,"Your Products")),M("div",{className:"row search_section"},M("div",{className:"col-lg-8 col-md-8 col-sm-6 col-6 searchbar"},M("div",{className:"container-fluid"},M("input",{type:"text",onChange:function(e){return p(e.target.value)},value:d,placeholder:"Search Product..."}),M("button",{type:"button"},M("i",{className:"fa fa-search","aria-hidden":"true"})))),M("div",{className:"col-lg-2 col-md-2 col-sm-3 col-3 sort"},M("button",{type:"button",onClick:function(){return f(!m)}},M("i",{className:"fa fa-sort-amount-desc","aria-hidden":"true"}),M("span",null,"Sort"))),M("div",{className:"col-lg-2 col-md-2 col-sm-3 col-3 filter"},M("button",{type:"button",onClick:function(){return v(!0)}},M("i",{className:"fa fa-filter","aria-hidden":"true"}),M("span",null,"Filter")))),M("div",{className:"row products"},M("div",{className:"col-12 table_product"},M("div",{className:"table-responsive-sm"},M("table",{className:"table table-hover product_list"},M("thead",null,M("tr",null,M("th",{scope:"col",className:"first-sm"},"Status"),M("th",{scope:"col",className:"second-sm"},"Connection"),M("th",{scope:"col"},"Serial Number"),M("th",{scope:"col"},"Product"),M("th",{scope:"col"},"Location"),M("th",{scope:"col"},"Condition"))),M("tbody",null,de.slice(5*(q-1),5*(q-1)+5).map((function(e){return M("tr",{key:e.serialNumber},M("td",{className:"first-sm"},"online"==e.status?M("span",{className:"green_round"}):M("span",{className:"red_round"})),M("td",{className:"second-sm"},"on"==e.connection?M("span",{className:"green_round"}):M("span",{className:"red_round"})),M("td",null,M(i.a,{href:"/dashboard/[serial]",as:"/dashboard/".concat(e.serialNumber),key:e.serialNumber},M("a",null,e.serialNumber))),M("td",null,e.product),M("td",null,F.status&&F.rowkey===e.serialNumber?M("form",{className:"edit-location"},M("input",{placeholder:"Edit location",name:"location",className:"inputLoc",onChange:function(e){return I(e.target.value)},value:T}),M("i",{class:"fa fa-check check-icon","aria-hidden":"true",onClick:function(){return function(e){var t=e.id,a=e.newLoc;pe({id:t,newLoc:a})}({id:e.serialNumber,newLoc:T})}}),M("i",{class:"fa fa-ban ban-icon","aria-hidden":"true",onClick:be})):e.location,F.status&&F.rowkey===e.serialNumber?"":M("i",{className:"fa fa-pencil edit-icon",onClick:function(){return function(e){var t=e.id,a=e.currentLoc;console.log("onEdit"),A({status:!0,rowkey:t}),I(a)}({id:e.serialNumber,currentLoc:e.location})}})),M("td",null,"okay"==e.condition?M("i",{className:"fa fa-check okay","aria-hidden":"true"}):"warning"==e.condition?M("i",{className:"fa fa-exclamation-triangle warning","aria-hidden":"true"}):M("i",{className:"fa fa-exclamation-circle error","aria-hidden":"true"})))})))))),M("div",{className:n.root},M(_,{className:n.root,count:U,page:q,color:"primary",onChange:function(e,t){console.log(t),G(t)},showFirstButton:!0,showLastButton:!0}))),M("br",null))))))}}},[["O1O/",1,2,0,3,4,5,7]]]);