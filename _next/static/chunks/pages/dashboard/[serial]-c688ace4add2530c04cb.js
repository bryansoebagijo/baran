_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{Hm9N:function(a,e,t){"use strict";t.r(e);var s=t("q1tI"),o=t.n(s),l=t("tXcZ"),i=t("YFqc"),r=t.n(i),n=t("UDbo"),d=t("nOHt"),c=t("IIeE"),u=t("VtrM"),m=t("/MKj"),h=t("q4mZ"),p=t("jkUL"),f=t.n(p),v=o.a.createElement,g=n.Chart.controllers.doughnut.prototype.draw;n.Chart.helpers.extend(n.Chart.controllers.doughnut.prototype,{draw:function(){g.apply(this,arguments);var a=this.chart.chart,e=a.ctx,t=a.width,s=a.height,o=(s/114).toFixed(2);e.font=o+"em Verdana",e.textBaseline="middle",e.fillStyle="white";var l=a.config.data.text,i=Math.round((t-e.measureText(l).width)/2),r=s/2;e.fillText(l,i,r)}}),e.default=function(a){var e=Object(s.useState)("daily"),t=e[0],o=e[1],i=Object(s.useState)(""),p=i[0],g=i[1],b=Object(s.useState)([]),N=b[0],k=(b[1],Object(s.useState)([])),w=k[0],j=k[1],y=Object(d.useRouter)(),C=y.query.serial;Object(s.useEffect)((function(){console.log(t)}),[t]);var x={labels:["Red","Green","Yellow"],datasets:[{data:0!=N.length?N:[300,500,200],borderWidth:0,radius:50,backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}],text:"75%"},E={labels:["January","February","March","April","May","June","July"],datasets:[{fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,scaleSteps:20,data:0!=w.length?w:[65,59,80,81,56,55,40]}]};Object(s.useEffect)((function(){console.log(C)}),[]);var F=Object(m.c)((function(a){return a.state.username}));console.log(F),Object(s.useEffect)((function(){F?g(F):(alert("you are not loggin yet!"),y.replace({pathname:"/"}))}),[]);var B=Object(u.a)("https://api.jikan.moe/v3/top/anime/1/airing",(function(){return fetch.apply(void 0,arguments).then((function(a){return a.json()}))}),{refreshInterval:5e3}),O=B.data,S=B.error;return O&&console.log(O.top),S&&console.log(S),v("div",{className:"dashboard"},v(l.a,{props:{description:"dashboard"}}),v("div",{className:"container-fluid wrapper-dashboard"},v("div",{className:"row table-row"},v("div",{className:"col-md-2 col-sm-1 col-1 sidebarCol",id:"test"},v(c.a,null,v("ul",{className:"navbar-nav navi"},v("li",{className:"active"},v(r.a,{href:"#"},v("a",null,v("i",{className:"fa fa-tachometer","aria-hidden":"true"},v("span",null,"Dashboard"))))),v("li",{className:"nav-items"},v(r.a,{href:"#"},v("a",null,v("i",{className:"fa fa-users","aria-hidden":"true"},v("span",null,"Product Details"))))),v("li",{className:"nav-items"},v(r.a,{href:"#"},v("a",null,v("i",{className:"fa fa-list-alt","aria-hidden":"true"},v("span",null,"Contact us"))))),v("hr",{className:"sidebar-divider"})))),v("div",{className:"col-md-10 col-sm-11 col-11 page-content"},v("div",{className:"container-fluid"},v("div",{className:"page-header"},v("h2",null,"Your Dashboard")),v(h.a,{handlerTime:function(a){o(a),console.log(a),j("daily"==a?[90,30,50,100,38,46,93]:[47,31,98,67,28,86,13])},time:t}),v("div",{className:"row user-intro"},v("div",{className:"col-12 col-user-intro"},v("div",{className:"row user-intro-inside"},v("div",{className:"col-6 user-section"},v("h2",null,"Hello ",p,","),v("p",null,"Your powerwall has emmited bekelmmsodmv sindvimsmdvklskd nsimvsodimdnn sdimvso sidimvspsmd somvsokmdo jsksjfkjadkja lskakjsld ksdiaj askdakd kjasdkja akmsdlak jasdajn aokmsdkam asjkdak maksdaaksdlalkmasdlkml.",v(r.a,{href:""},v("a",null,"Product details ",v("i",{className:"fa fa-chevron-right","aria-hidden":"true"}))))),v("div",{className:"col-6 powerwall-image-section"},v("div",{className:"container-fluid half-circle"}),v("img",{src:"",alt:"powerwall",className:"img-fluid powerwall-img"}))))),v("div",{className:"row chart"},v("div",{className:"col-lg-4 col-md-4 col-sm-6 col-12 colDoughnut"},v("div",{className:"container-fluid chart-state"},v("div",{className:"chart-state-header"},v("h3",null,"State of Charge"),v("div",{className:"donut"},v(n.Doughnut,{data:x,width:100,height:100,options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1,position:"bottom",labels:{fontColor:"#f7fcff"}},cutoutPercentage:90}}))))),v("div",{className:"col-lg-8 col-md-8 col-sm-6 col-12 colUsage"},v("div",{className:"container-fluid total-usage"},v("div",{className:"usage-header"},v("h3",null,"Total usage"),v("div",{className:"line"},p?v(n.Line,{data:E,options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{position:"right",scaleLabel:{display:!1,labelString:"Watt Hours"},gridLines:{drawBorder:!0,lineWidth:.1,color:"gray",zeroLineColor:"white"},ticks:{padding:10,stepSize:10,callback:function(a,e,t){return a+" Wh"}}}],xAxes:[{gridLines:{display:!1},ticks:{maxRotation:0,autoSkip:!0,maxTicksLimit:1}}]}}}):v("div",{className:"d-flex justify-content-center",style:{width:"100%"}},v(f.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})))))))),v("hr",null)))))}},VMmP:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/[serial]",function(){return t("Hm9N")}])}},[["VMmP",1,2,8,9,0,3,4,5,6,7]]]);