_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"O1O/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return a("auAi")}])},auAi:function(e,t,a){"use strict";a.r(t);var o=a("o0o1"),n=a.n(o),r=a("HaE+"),c=a("q1tI"),l=a.n(c),i=a("tXcZ"),s=a("YFqc"),u=a.n(s),d=a("nOHt"),b=a("/MKj"),p=a("VtrM"),m=a("wx14"),f=a("RD7I"),h=a("cNwE");var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(f.a)(e,Object(m.a)({defaultTheme:h.a},t))},v=a("Ff2n"),y=(a("17x9"),a("iuhU")),O=a("H2TA"),N=a("KQm4"),k=a("ODXe");function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,r=e.count,l=void 0===r?1:r,i=e.defaultPage,s=void 0===i?1:i,u=e.disabled,d=void 0!==u&&u,b=e.hideNextButton,p=void 0!==b&&b,f=e.hidePrevButton,h=void 0!==f&&f,g=e.onChange,y=e.page,O=e.showFirstButton,j=void 0!==O&&O,w=e.showLastButton,C=void 0!==w&&w,x=e.siblingCount,S=void 0===x?1:x,L=Object(v.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),P=function(e){var t=e.controlled,a=e.default,o=(e.name,e.state,c.useRef(void 0!==t).current),n=c.useState(a),r=n[0],l=n[1];return[o?t:r,c.useCallback((function(e){o||l(e)}),[])]}({controlled:y,default:s,name:n,state:"page"}),B=Object(k.a)(P,2),E=B[0],$=B[1],R=function(e,t){y||$(t),g&&g(e,t)},z=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},_=z(1,Math.min(a,l)),M=z(Math.max(l-a+1,a+1),l),V=Math.max(Math.min(E-S,l-a-2*S-1),a+2),F=Math.min(Math.max(E+S,a+2*S+2),M[0]-2),W=[].concat(Object(N.a)(j?["first"]:[]),Object(N.a)(h?[]:["previous"]),Object(N.a)(_),Object(N.a)(V>a+2?["start-ellipsis"]:a+1<l-a?[a+1]:[]),Object(N.a)(z(V,F)),Object(N.a)(F<l-a-1?["end-ellipsis"]:l-a>a?[l-a]:[]),Object(N.a)(M),Object(N.a)(p?[]:["next"]),Object(N.a)(C?["last"]:[])),T=function(e){switch(e){case"first":return 1;case"previous":return E-1;case"next":return E+1;case"last":return l;default:return null}},D=W.map((function(e){return"number"===typeof e?{onClick:function(t){R(t,e)},type:"page",page:e,selected:e===E,disabled:d,"aria-current":e===E?"true":void 0}:{onClick:function(t){R(t,T(e))},type:e,page:T(e),selected:!1,disabled:d||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?E>=l:E<=1)}}));return Object(m.a)({items:D},L)}var w=a("ye/S"),C=a("tr08"),x=a("VD++"),S=a("HR5l");function L(e,t){var a=function(t,a){return l.a.createElement(S.a,Object(m.a)({ref:a},t),e)};return a.muiName=S.a.muiName,l.a.memo(l.a.forwardRef(a))}var P=L(c.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),B=L(c.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),E=L(c.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),$=L(c.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),R=a("NqtD"),z=c.forwardRef((function(e,t){var a=e.classes,o=e.className,n=e.color,r=void 0===n?"standard":n,l=e.component,i=e.disabled,s=void 0!==i&&i,u=e.page,d=e.selected,b=void 0!==d&&d,p=e.shape,f=void 0===p?"round":p,h=e.size,g=void 0===h?"medium":h,O=e.type,N=void 0===O?"page":O,k=e.variant,j=void 0===k?"text":k,w=Object(v.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),S=("rtl"===Object(C.a)().direction?{previous:$,next:E,last:P,first:B}:{previous:E,next:$,first:P,last:B})[N];return"start-ellipsis"===N||"end-ellipsis"===N?c.createElement("div",{ref:t,className:Object(y.a)(a.root,a.ellipsis,s&&a.disabled,"medium"!==g&&a["size".concat(Object(R.a)(g))])},"\u2026"):c.createElement(x.a,Object(m.a)({ref:t,component:l,disabled:s,focusVisibleClassName:a.focusVisible,className:Object(y.a)(a.root,a.page,a[j],a[f],o,"standard"!==r&&a["".concat(j).concat(Object(R.a)(r))],s&&a.disabled,b&&a.selected,"medium"!==g&&a["size".concat(Object(R.a)(g))])},w),"page"===N&&u,S?c.createElement(S,{className:a.icon}):null)})),_=Object(O.a)((function(e){return{root:Object(m.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(w.b)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(w.b)(e.palette.primary.main,.5)),backgroundColor:Object(w.b)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(w.b)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(w.b)(e.palette.secondary.main,.5)),backgroundColor:Object(w.b)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(w.b)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(z);function M(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var V=c.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,o=e.className,n=e.color,r=void 0===n?"standard":n,l=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),i=void 0===l?M:l,s=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),u=void 0===s?function(e){return c.createElement(_,e)}:s,d=e.shape,b=void 0===d?"round":d,p=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),f=void 0===p?"medium":p,h=e.variant,g=void 0===h?"text":h,O=Object(v.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),N=j(Object(m.a)({},e,{componentName:"Pagination"})).items;return c.createElement("nav",Object(m.a)({"aria-label":"pagination navigation",className:Object(y.a)(a.root,o),ref:t},O),c.createElement("ul",{className:a.ul},N.map((function(e,t){return c.createElement("li",{key:t},u(Object(m.a)({},e,{color:r,"aria-label":i(e.type,e.page,e.selected),shape:b,size:f,variant:g})))}))))})),F=Object(O.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(V),W=a("jkUL"),T=a.n(W),D=l.a.createElement,I=g((function(e){return{root:{width:"100%",margin:"auto",color:"white",display:"flex",alignItems:"center",justifyContent:"center","& > *":{marginTop:e.spacing(2)},"& ul":{color:"white"},"& .MuiPaginationItem-root ":{color:"white"}}}})),A="https://test.vincentreynard.com";t.default=function(){var e,t,a,o=I(),l=[{status:"1",connection:"0",serialnumberid:"27-BSD-07-PW-20",producttype:"Power Wall",label:"Villa Bogor",condition:"okay"},{status:"1",connection:"1",serialnumberid:"28-BSD-07-PW-20",producttype:"Power Wall",label:"Villa Bogor",condition:"okay"},{status:"0",connection:"1",serialnumberid:"29-BSD-07-PW-20",producttype:"Power Wall",label:"Villa Bogor",condition:"warning"},{status:"1",connection:"1",serialnumberid:"30-BSD-07-PW-20",producttype:"Power Wall",label:"Villa Bogor",condition:"okay"},{status:"0",connection:"0",serialnumberid:"31-BSD-07-PW-20",producttype:"Power Wall",label:"Villa Bogor",condition:"okay"},{status:"0",connection:"0",serialnumberid:"32-BSD-07-PW-20",producttype:"Power Wall",label:"Villa Bogor",condition:"warning"}],s=Object(c.useState)(""),m=s[0],f=s[1],h=Object(c.useState)(!1),g=h[0],v=h[1],y=Object(c.useState)(!1),O=y[0],N=y[1],k=Object(c.useState)(!0),j=k[0],w=k[1],C=Object(c.useState)(!0),x=C[0],S=C[1],L=Object(c.useState)([]),P=L[0],B=L[1],E=Object(c.useState)(""),$=E[0],R=E[1],z=Object(c.useState)({serial:!1,producttype:!1,label:!1}),_=z[0],M=z[1],V=Object(c.useState)(""),W=V[0],H=V[1],K=Object(c.useState)({status:!1,rowkey:null}),X=K[0],q=K[1],G=Object(c.useState)([{}]),J=(G[0],G[1],Object(c.useState)(1)),U=J[0],Y=J[1],Q=Object(c.useState)(1),Z=Q[0],ee=Q[1],te=Object(c.useState)([]),ae=te[0],oe=te[1],ne=Object(c.useRef)(),re=Object(c.useRef)(),ce=Object(c.useRef)(),le=Object(c.useRef)(),ie=Object(c.useRef)(),se=!0,ue=!0,de=[{}],be=(Object(d.useRouter)(),Object(b.c)((function(e){return e.state.username})));if(Object(c.useEffect)((function(){be||alert("you are not loggin yet!")}),[be]),be){var pe=A+"/products/"+be,me=Object(p.a)(pe,(function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return fetch.apply(void 0,t.concat([{method:"GET",credentials:"include"}])).then((function(e){return e.json()}))}),{onSuccess:function(e){console.log(e.products),oe(e.products)},onError:function(e){console.log(e)}});me.data,me.error}Object(c.useEffect)((function(){console.log(ae)}),[ae]),l=ae||l;var fe,he=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,o,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,o=t.newLoc,e.next=3,fetch(A+"/products/".concat(a,"/label"),{method:"PATCH",credentials:"include",body:JSON.stringify({label:o}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:if(!(r=e.sent).ok){e.next=11;break}return e.next=7,r.json();case 7:c=e.sent,console.log(c),alert("value changed!"),ge();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){q({status:!1,rowKey:null}),H(null)},ve=function(e){if(se=ne.current.checked,ue=re.current.checked,se&&!ue){var t=ne.current.value;console.log(t),N(!1),R(""),(de=l.filter((function(e){return"1"==e.connection}))).length>0?(console.log(de),B(de)):(R("both"),B([]))}if(ue&&!se){var a=re.current.value;console.log(a),N(!1),R(""),(de=l.filter((function(e){return"0"==e.connection}))).length>0?(console.log(de),B(de)):(R("both"),B([]))}se||ue||(N(!1),console.log("2 2 nya mati mas"),B([]),R("both"),console.log(P),console.log(P.length),ee(P.length)),se&&ue&&(de=l.filter((function(e){return-1!==e.serialnumberid.toLowerCase().indexOf(m.toLowerCase())})),R(""),B(de)),N(!1)},ye=function(){e=ce.current.checked,t=le.current.checked,a=ie.current.checked,e?(console.log("serial number selected"),B(fe.sort((function(e,t){var a=e.serialnumberid.toLowerCase(),o=t.serialnumberid.toLowerCase();return a>o?1:a<o?-1:0}))),v(!1)):t?(console.log("product selected"),v(!1),B(fe.sort((function(e,t){var a=e.producttype.toLowerCase(),o=t.producttype.toLowerCase();return a>o?-1:a<o?1:0})))):a?(console.log("label selected"),v(!1),B(fe.sort((function(e,t){var a=e.label.toLowerCase(),o=t.label.toLowerCase();return a>o?-1:a<o?1:0})))):(console.log("jangepong"),v(!1))},Oe=function(){return D("div",{className:"backdrop",onClick:function(){N(!1),v(!1)}})};return Object(c.useEffect)((function(){console.log(fe)}),[P]),fe=P.length>0?P.filter((function(e){return-1!==e.serialnumberid.toLowerCase().indexOf(m.toLowerCase())})):l.filter((function(e){return-1!==e.serialnumberid.toLowerCase().indexOf(m.toLowerCase())})),"both"==$&&(fe=l.filter((function(e){return"none"==e.connection}))),Object(c.useEffect)((function(){if(fe.length>0){var e=fe.length,t=Math.ceil(e/5);ee(t)}else ee(1)}),[fe]),D("div",{className:"dashboard"},D(i.a,null),D("div",{className:"container-fluid wrapper-dashboard"},O?Oe():"",O?D("div",{className:"container filtercard"},D("h3",null,"Filter products by"),D("form",null,D("div",{className:"d-flex"},D("label",null,"connection : on"),D("input",{ref:ne,type:"checkbox",name:"on",value:"on",checked:j,onChange:function(){return w(!j)}})),D("div",{className:"d-flex"},D("label",null,"connection : off"),D("input",{ref:re,type:"checkbox",name:"off",value:"off",checked:x,onChange:function(){return S(!x)}}))),D("hr",null),D("div",{className:"buttons"},D("button",{type:"button","aria-label":"cancel",className:"btn btn-danger cancel",onClick:function(){return N(!1)}},"cancel"),D("button",{type:"button","aria-label":"ok",className:"btn btn-primary ok",onClick:ve},"OK"))):"",g?Oe():"",g?function(){var e,t,a;return D("div",{className:"container sortcard"},D("h3",null,"Sort products by"),D("form",null,D("div",{className:"form-check"},D("input",{className:"form-check-input radio",ref:ce,id:"serial",type:"radio",value:"serial-number",checked:null!==(e=_.serial)&&void 0!==e&&e,onChange:function(){return M((function(e){return{serial:!e.serial}}))}}),D("label",{className:"form-check-label",htmlFor:"serial"},"Serial Number")),D("div",{className:"form-check"},D("input",{className:"form-check-input radio",ref:le,id:"producttype",type:"radio",value:"producttype",checked:null!==(t=_.producttype)&&void 0!==t&&t,onChange:function(){return M((function(e){return{producttype:!e.producttype}}))}}),D("label",{className:"form-check-label",htmlFor:"producttype"},"Product type")),D("div",{className:"form-check"},D("input",{className:"form-check-input radio",ref:ie,id:"label",type:"radio",value:"label",checked:null!==(a=_.label)&&void 0!==a&&a,onChange:function(){return M((function(e){return{label:!e.label}}))}}),D("label",{className:"form-check-label",htmlFor:"label"},"Label"))),D("hr",null),D("div",{className:"buttons"},D("button",{type:"button",className:"btn btn-danger cancel",onClick:function(){return v(!1)}},"cancel"),D("button",{type:"button",className:"btn btn-primary ok",onClick:ye},"OK")))}():"",D("div",{className:"row table-row"},D("div",{className:"col-md-12 col-sm-12 col-12 page-content"},D("div",{className:"container-fluid"},D("div",{className:"page-header"},D("h2",null,"Your Products")),D("div",{className:"row search_section"},D("div",{className:"col-lg-8 col-md-8 col-sm-6 col-6 searchbar"},D("div",{className:"container-fluid"},D("input",{type:"text",onChange:function(e){return f(e.target.value)},value:m,placeholder:"Search Product..."}),D("button",{type:"button"},D("i",{className:"fa fa-search","aria-hidden":"true"})))),D("div",{className:"col-lg-2 col-md-2 col-sm-3 col-3 sort"},D("button",{type:"button",onClick:function(){return v(!g)}},D("i",{className:"fa fa-sort-amount-desc","aria-hidden":"true"}),D("span",null,"Sort"))),D("div",{className:"col-lg-2 col-md-2 col-sm-3 col-3 filter"},D("button",{type:"button",onClick:function(){return N(!0)}},D("i",{className:"fa fa-filter","aria-hidden":"true"}),D("span",null,"Filter")))),D("div",{className:"row products"},D("div",{className:"col-12 table_product"},D("div",{className:"table-responsive-sm"},D("table",{className:"table table-hover product_list"},D("thead",null,D("tr",null,D("th",{scope:"col",className:"first-sm"},"Status"),D("th",{scope:"col",className:"second-sm"},"Connection"),D("th",{scope:"col"},"Serial Number"),D("th",{scope:"col"},"Product"),D("th",{scope:"col"},"Label"),D("th",{scope:"col"},"Condition"))),D("tbody",null,ae?fe.slice(5*(U-1),5*(U-1)+5).map((function(e){return D("tr",{key:e.serialnumberid},D("td",{className:"first-sm"},"1"==e.status?D("span",{className:"green_round"}):D("span",{className:"red_round"})),D("td",{className:"second-sm"},"1"==e.connection?D("span",{className:"green_round"}):D("span",{className:"red_round"})),D("td",null,D(u.a,{href:"/dashboard/[serial]",as:"/dashboard/".concat(e.serialnumberid),key:e.serialnumberid},D("a",null,e.serialnumberid))),D("td",null,e.producttype),D("td",null,X.status&&X.rowkey===e.serialnumberid?D("form",{className:"edit-label"},D("input",{placeholder:"Edit label",name:"label",className:"inputLoc",onChange:function(e){return H(e.target.value)},value:W}),D("i",{className:"fa fa-check check-icon","aria-hidden":"true",onClick:function(){return function(e){var t=e.id,a=e.newLoc;console.log("onsave bang"),he({id:t,newLoc:a})}({id:e.serialnumberid,newLoc:W})}}),D("i",{className:"fa fa-ban ban-icon","aria-hidden":"true",onClick:ge})):e.label,X.status&&X.rowkey===e.serialnumberid?"":D("i",{className:"fa fa-pencil edit-icon",onClick:function(){return function(e){var t=e.id,a=e.currentLoc;console.log("onEdit"),q({status:!0,rowkey:t}),H(a)}({id:e.serialnumberid,currentLoc:e.label})}})),D("td",null,"unknown"))})):D("div",{className:"d-flex justify-content-center align-items-center",style:{width:"100%"}},D(T.a,{type:"ThreeDots",color:"#00BFFF",height:60,width:60})))))),D("div",{className:o.root},D(F,{className:o.root,count:Z,page:U,color:"primary",onChange:function(e,t){console.log(t),Y(t)},showFirstButton:!0,showLastButton:!0}))),D("br",null))))))}}},[["O1O/",1,2,0,3,4,5,6,8]]]);