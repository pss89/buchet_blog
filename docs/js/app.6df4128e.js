(function(){"use strict";var e={8968:function(e,t,n){var o=n(9963),r=n(6252),i=n(3577);const a={class:"app"};function s(e,t,n,o,s,c){const l=(0,r.up)("metainfo"),u=(0,r.up)("Header"),d=(0,r.up)("Intro"),f=(0,r.up)("Career"),p=(0,r.up)("Tech"),m=(0,r.up)("Project"),g=(0,r.up)("Hobby"),h=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(l,null,{title:(0,r.w5)((({content:e})=>[(0,r.Uk)((0,i.zw)(e?`${e}`:"Buchet About"),1)])),_:1}),(0,r.Wm)(u),(0,r.Wm)(d),(0,r.Wm)(f),(0,r.Wm)(p),(0,r.Wm)(m),(0,r.Wm)(g),(0,r.Wm)(h)])}const c={class:"bg-cyan-600 flex items-center justify-between p-4 text-white"},l={class:"font-bold text-lg",href:"/buchet"},u=["src"],d={class:"hidden md:flex space-x-8"},f=["href"],p={class:"hidden md:flex space-x-4"},m=["onClick"],g={class:"md:hidden absolute top-16 right-0 bg-cyan-600 rounded shadow-md p-6 space-y-2"},h={class:"flex space-x-6 pt-4"},b=["onClick"];function w(e,t,n,a,s,w){const v=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("header",c,[(0,r._)("a",l,[(0,r._)("img",{src:s.logoImage,alt:"Logo",class:"w-14"},null,8,u)]),(0,r._)("div",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.constants.MENU.list,(e=>((0,r.wg)(),(0,r.iD)("a",{href:"#"+e.key,class:"hover:text-gray-300",key:e.key},(0,i.zw)(e.title),9,f)))),128))]),(0,r._)("ul",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.constants.SOCIAL.list,(e=>((0,r.wg)(),(0,r.iD)("li",{onClick:t=>w.pageMove(e.key),key:e.key,class:"cursor-pointer"},[(0,r.Wm)(v,{icon:e.fa},null,8,["icon"])],8,m)))),128))]),(0,r._)("button",{class:"md:hidden text-white",onClick:t[0]||(t[0]=(...e)=>w.toggleMenu&&w.toggleMenu(...e))},[(0,r.Wm)(v,{icon:"fa-solid fa-bars"})]),(0,r.wy)((0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.constants.MENU.list,(e=>((0,r.wg)(),(0,r.iD)("a",{href:"#",class:"hover:text-gray-300 block",key:e.key},(0,i.zw)(e.title),1)))),128)),(0,r._)("ul",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.constants.SOCIAL.list,(e=>((0,r.wg)(),(0,r.iD)("li",{onClick:t=>w.pageMove(e.key),key:e.key},[(0,r.Wm)(v,{icon:e.fa},null,8,["icon"])],8,b)))),128))])],512),[[o.F8,s.showMenu]])])}var v={data(){return{showMenu:!1,logoImage:n(6150)}},methods:{toggleMenu(){this.showMenu=!this.showMenu},pageMove:function(e){if(!e)return alert("페이지 이동에 대한 인자값이 없습니다"),!1;switch(e){case"github":window.open("https://github.com/pss89");break;case"blog":window.open("https://buchet.tistory.com/");break;case"insta":window.open("https://www.instagram.com/buchet89/");break;default:return alert("허용하지 않는 유형입니다."),!1}}},inject:["constants"]},y=n(3744);const x=(0,y.Z)(v,[["render",w]]);var _=x;const k={id:"intro",class:"container mx-auto p-4 flex flex-col md:flex-row items-center mt-5"},D={class:"w-full md:w-1/3"},j=["src"],C=(0,r._)("div",{class:"w-full md:w-2/3 md:ml-8 mt-4 md:mt-0"},[(0,r._)("h2",{class:"text-2xl font-bold mb-4"},"안녕하세요! 박성식입니다."),(0,r._)("p",{class:"text-stone-900"},[(0,r.Uk)(" 웹프로그래머로 경력을 쌓고있습니다."),(0,r._)("br"),(0,r.Uk)(" FrontEnd는 기본적으로 html,css,javascript/jquery 사용 경험이 있으며 추가적으로 bootstrap, angularjs 와 같은 FrontEnd FrameWork 사용 경험이 있습니다. "),(0,r._)("br"),(0,r._)("br"),(0,r.Uk)(" 주업무인 BackEnd는 PHP 언어를 사용하였으며 Codeigniter3.x , Laravel 5.x 사용 경험이 있습니다. 주로 Codeigniter 환경에서 개발을 진행하였습니다. "),(0,r._)("br"),(0,r._)("br"),(0,r.Uk)(" 이 외 linux(centos, ubuntu) cli , db(mysql, mariadb) , DevOps(slack, jira/confluence, redmine) , git/github/bitbucket 등을 업무에서 사용 한 경험이 있습니다. ")]),(0,r._)("p",{class:"mt-4 text-stone-900"},[(0,r.Uk)(" 연락 이메일 : seongsigbag2@gmail.com"),(0,r._)("br")])],-1);function S(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",k,[(0,r._)("div",D,[(0,r._)("img",{src:i.profileImage,alt:"Profile",class:"rounded-full w-32 h-32 mx-auto md:mx-0 md:w-48 md:h-48"},null,8,j)]),C])}var E={name:"Intro",props:{msg:String},data(){return{profileImage:n(3478)}}};const z=(0,y.Z)(E,[["render",S]]);var A=z;const O={class:"container mx-auto p-4 mt-10",id:"career"},M={class:"text-4xl font-bold mb-6"},I={class:"grid grid-cols-1 mb-10 md:grid-cols-2 gap-6"},H={class:"text-2xl font-bold"},F={class:"text-gray-600"},P={class:"text-gray-600"},W={class:"text-4xl font-bold mb-6"},R={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},T={class:"text-2xl font-bold"},N={class:"text-gray-600"},L={class:"text-gray-600"};function K(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",O,[(0,r._)("h1",M,(0,i.zw)(s.constants.S_CAREER.subject),1),(0,r._)("div",I,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.constants.S_CAREER.list,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.key,class:"p-4 border rounded shadow-md"},[(0,r._)("h2",H,(0,i.zw)(e.name),1),(0,r._)("p",F,(0,i.zw)(e.major),1),(0,r._)("p",P,(0,i.zw)(s.formatDate(e.period.startDate))+" ~ "+(0,i.zw)(s.formatDate(e.period.endDate)),1)])))),128))]),(0,r._)("h1",W,(0,i.zw)(s.constants.C_CAREER.subject),1),(0,r._)("div",R,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.constants.C_CAREER.list,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.key,class:"p-4 border rounded shadow-md"},[(0,r._)("h2",T,(0,i.zw)(e.name),1),(0,r._)("p",N,(0,i.zw)(e.belong)+" - "+(0,i.zw)(e.position),1),(0,r._)("p",L,(0,i.zw)(s.formatDate(e.period.startDate))+" ~ "+(0,i.zw)(s.formatDate(e.period.endDate)),1)])))),128))])])}var U={data(){return{}},methods:{formatDate:function(e){const t=Math.floor(e/100),n=e%100;return`${t}.${n.toString().padStart(2,"0")}`}},inject:["constants"]};const Y=(0,y.Z)(U,[["render",K]]);var Z=Y;const B={class:"container mx-auto p-4 mt-10",id:"tech"},J=(0,r._)("h2",{class:"text-3xl font-semibold mb-4"},"사용 가능한 언어 및 기술",-1),q={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},$={class:"text-lg font-semibold mb-2"},G={class:"text-gray-600"};function V(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",B,[J,(0,r._)("div",q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.items,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"border rounded p-4"},[(0,r._)("h3",$,(0,i.zw)(e.title),1),(0,r._)("p",G,(0,i.zw)(e.description),1)])))),128))])])}var Q={data(){return{items:[{title:"PHP",description:"프론트엔드 개발에 사용되는 JavaScript 프레임워크"},{title:"Tailwind CSS",description:"가볍고 유연한 CSS 프레임워크로 디자인하기 쉬움"},{title:"AngularJs",description:"서버 사이드 애플리케이션 개발에 사용되는 JavaScript 런타임"},{title:"VueJs",description:"Facebook에서 만든 JavaScript 라이브러리로 사용자 인터페이스를 구축하기 위해 사용됨"}]}}};const X=(0,y.Z)(Q,[["render",V]]);var ee=X;const te=(0,r._)("h1",null,"프로젝트",-1),ne={class:"d-flex fill-height justify-center align-center"},oe={class:"text-h2"};function re(e,t,n,o,a,s){const c=(0,r.up)("v-sheet"),l=(0,r.up)("v-carousel-item"),u=(0,r.up)("v-carousel");return(0,r.wg)(),(0,r.iD)(r.HY,null,[te,(0,r.Wm)(u,{height:"400","hide-delimiters":"",progress:"primary"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.slides,((e,t)=>((0,r.wg)(),(0,r.j4)(l,{key:t},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{height:"100%"},{default:(0,r.w5)((()=>[(0,r._)("div",ne,[(0,r._)("div",oe,(0,i.zw)(e)+" Slide ",1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})],64)}var ie={data(){return{slides:["First","Second","Third","Fourth","Fifth","Sixth"]}}};const ae=(0,y.Z)(ie,[["render",re]]);var se=ae;const ce={class:"flex flex-wrap justify-center"},le=(0,r._)("h1",null,"취미",-1),ue={class:"bg-white rounded-lg shadow-md p-4"},de={class:"text-xl font-semibold mt-2"},fe={class:"text-gray-600 mt-2"};function pe(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",ce,[le,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.hobbies,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4"},[(0,r._)("div",ue,[(0,r._)("h3",de,(0,i.zw)(e.title),1),(0,r._)("p",fe,(0,i.zw)(e.description),1)])])))),128))])}var me={data(){return{hobbies:[{id:1,title:"Photography",description:"I love capturing beautiful moments with my camera.",image:"/src/assets/hobbies/photography.jpg"},{id:2,title:"Cooking",description:"Cooking is my passion. I enjoy experimenting with new recipes.",image:"/src/assets/hobbies/cooking.jpg"}]}}};const ge=(0,y.Z)(me,[["render",pe]]);var he=ge;const be=e=>((0,r.dD)("data-v-aaf1bf2e"),e=e(),(0,r.Cn)(),e),we={class:"bg-cyan-600 text-white py-8 w-full bottom-0 left-0 mt-20"},ve=be((()=>(0,r._)("div",{class:"container mx-auto flex flex-col items-center"},[(0,r._)("div",{class:"text-center md:text-left mb-4 md:mb-0"},[(0,r._)("h3",{class:"text-2xl font-bold"},"Buchet Introduction WebSite"),(0,r._)("p",{class:"text-sm"},"© 2023 All rights reserved.")])],-1))),ye=[ve];function xe(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("footer",we,ye)}var _e={name:"Footer",props:{msg:String}};const ke=(0,y.Z)(_e,[["render",xe],["__scopeId","data-v-aaf1bf2e"]]);var De=ke,je={name:"App",components:{Header:_,Footer:De,Intro:A,Career:Z,Tech:ee,Project:se,Hobby:he},setup(){}};const Ce=(0,y.Z)(je,[["render",s]]);var Se=Ce,Ee=n(2201);const ze=[{path:"/buchet",name:"Main",component:()=>n.e(126).then(n.bind(n,4126))},{path:"/buchet/Info",name:"Info",component:()=>n.e(630).then(n.bind(n,2630)),props:!0},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>n.e(997).then(n.bind(n,9997))}],Ae=(0,Ee.p7)({history:(0,Ee.PO)(),routes:ze});var Oe=Ae,Me=n(9590),Ie=n(3636),He=n(9417),Fe=n(3024),Pe=n(7810),We=n(1493),Re=n.n(We),Te=n(6579),Ne=n(9638),Le=n(6300),Ke=(n(9773),Object.freeze({S_CAREER:{subject:"학력 소개",list:[{name:"청운대학교",major:"컴퓨터학과",period:{startDate:"200803",endDate:"201502"}},{name:"안산국제비즈니스고등학교",major:"정보처리과",period:{startDate:"200503",endDate:"200802"}}]},C_CAREER:{subject:"경력 소개",list:[{name:"오아",belong:"개발본부/서버개발팀",position:"매니저/TL",period:{startDate:"201904",endDate:"202303"}},{name:"인터넷토마토",belong:"개발팀",position:"대리",period:{startDate:"201511",endDate:"201812"}}]},MENU:{list:[{key:"intro",title:"소개"},{key:"career",title:"경력"},{key:"tech",title:"기술"},{key:"project",title:"프로젝트"},{key:"hobby",title:"취미"}]},SOCIAL:{list:[{key:"github",fa:"fa-brands fa-github"},{key:"blog",fa:"fa-solid fa-blog"},{key:"insta",fa:"fa-brands fa-instagram"}]}}));const Ue=(0,Te.Rd)({components:Ne,directives:Le,ssr:!0,defaults:{global:{ripple:!1}}});Ie.vI.add(He.mRB,He.xiG,Fe.zhw,Fe.Zzi);const Ye=(0,o.ri)(Se);Ye.provide("constants",Ke),Ye.use(Oe).use((0,Me.Bg)()).component("font-awesome-icon",Pe.GN).use(Re()).use(Ue).mount("#app")},6150:function(e,t,n){e.exports=n.p+"img/buchet_icon.ab385525.png"},3478:function(e,t,n){e.exports=n.p+"img/pss_caricature.b5411be9.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{126:"19f9e22d",630:"56cee258",997:"646c362a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".0bc66a55.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="buchet-vue-project:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/buchet/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={126:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkbuchet_vue_project"]=self["webpackChunkbuchet_vue_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8968)}));o=n.O(o)})();
//# sourceMappingURL=app.6df4128e.js.map