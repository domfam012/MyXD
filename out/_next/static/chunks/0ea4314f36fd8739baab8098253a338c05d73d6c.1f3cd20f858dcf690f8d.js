(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/h46":function(a,e,n){n("cHUd")("Map")},LX0d:function(a,e,n){a.exports=n("UDep")},UDep:function(a,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),a.exports=n("WEpk").Map},XLbu:function(a,e,n){var t=n("Y7ZC");t(t.P+t.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(a,e,n){a.exports=n("cTJO")},ZUpW:function(a,e,n){"use strict";var t=n("q1tI"),r=n.n(t),o=n("8Kt/"),i=n.n(o),s=n("ln6h"),l=n.n(s),c=n("MX0m"),p=n.n(c),x=n("nOHt"),f=n("YFqc"),v=n.n(f),d=n("vcXL"),g=n.n(d),m=n("p46w"),u=n.n(m),b=r.a.createElement,h=function(a){var e=Object(x.useRouter)(),n=Object(t.useState)(!1),r=n[0],o=n[1];return b("header",{className:"jsx-1315134181"},b("div",{className:"jsx-1315134181 nav_wrap"},b("nav",{className:"jsx-1315134181 "+((a.isResponsive?"navbar navbar-expand-xl":"navbar navbar-expand-xl admin")||"")},b(v.a,{href:"/"},b("a",{className:"jsx-1315134181 navbar-brand"},b("span",{className:"jsx-1315134181 pink"},"MyXD")," logo")),b("button",{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return o(!r)},className:"jsx-1315134181 "+"navbar-toggle ".concat(r?"active":"")},b("div",{className:"jsx-1315134181 navbar-toggler-icon"},b("span",{className:"jsx-1315134181 bar1"}),b("span",{className:"jsx-1315134181 bar2"}),b("span",{className:"jsx-1315134181 bar3"}))),b("div",{id:"navbarText",className:"jsx-1315134181 collapse navbar-collapse menu"},b("ul",{className:"jsx-1315134181 navbar-nav mr-auto"},b("li",{className:"jsx-1315134181 nav-item"},b(v.a,{href:"/list"},b("a",{href:"/",className:"jsx-1315134181 nav-link"},"UI KITS"))),b("li",{className:"jsx-1315134181 nav-item"},b(v.a,{href:"/list"},b("a",{href:"/list",className:"jsx-1315134181 nav-link"},"Website"))),b("li",{className:"jsx-1315134181 nav-item"},b(v.a,{href:"/admin"},b("a",{href:"/detail",className:"jsx-1315134181 nav-link"},"Mobile"))),b("li",{className:"jsx-1315134181 nav-item"},b(v.a,{href:"/detail"},b("a",{className:"jsx-1315134181 nav-link"},"Plug-in"))))),b("div",{className:"jsx-1315134181 collapse navbar-collapse navbar-icon"},b("ul",{className:"jsx-1315134181 navbar-nav"},b("li",{className:"jsx-1315134181 nav-item"},b("a",{href:"#",className:"jsx-1315134181 nav-link"},b("img",{src:"/img/common/instargram.png",alt:"instargram",className:"jsx-1315134181"}))),b("li",{className:"jsx-1315134181 nav-item"},b("a",{href:"#",className:"jsx-1315134181 nav-link"},b("img",{src:"/img/common/twitter.png",alt:"twitter",className:"jsx-1315134181"}))),b("li",{className:"jsx-1315134181 nav-item"},b("a",{href:"#",className:"jsx-1315134181 nav-link"},b("img",{src:"/img/common/facebook.png",alt:"facebook",className:"jsx-1315134181"}))),b("li",{className:"jsx-1315134181 nav-item"},b(v.a,{href:"/admin/login"},b("a",{onClick:function(a){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),!confirm("\ub85c\uadf8\uc544\uc6c3 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){n.next=8;break}return console.log("logout check true"),n.next=6,l.a.awrap(g()("http://13.209.55.219/api/user/logout"));case 6:200===n.sent.status?(console.log("logout success"),u.a.remove("token"),e.push("/admin/login")):console.log("error occured");case 8:case"end":return n.stop()}}))},href:"#",className:"jsx-1315134181 nav-link"},b("img",{src:"/img/common/login.png",alt:"login",className:"jsx-1315134181"})))))))),b(p.a,{id:"1315134181"},[".nav_wrap.jsx-1315134181{width:100%;background:#2e001f;height:70px;}",".navbar.jsx-1315134181{max-width:1200px;margin:0 auto;padding:0 30px;color:#fff;}",".navbar-brand.jsx-1315134181{font-size:20px;line-height:66px;color:#fff;margin-right:95px;}",".nav-link.jsx-1315134181{padding:17px 10px !important;}",".menu.jsx-1315134181 .nav-item.active.jsx-1315134181,.menu.jsx-1315134181 .nav-item.jsx-1315134181:hover{border-bottom:2px solid var(--pink);color:var(--pink);}",".nav-item.jsx-1315134181{margin-right:80px;border-color:var(--pink);border-bottom:2px solid transparent;}",".nav-item.jsx-1315134181:last-child{margin-right:0 !important;}",".navbar-icon.jsx-1315134181{position:relative;}",".navbar-icon.jsx-1315134181 .navbar-nav.jsx-1315134181{position:absolute;right:0;display:none;}",".navbar-icon.jsx-1315134181 .navbar-nav.jsx-1315134181 .nav-item.jsx-1315134181{margin-right:30px;}",".navbar-icon.jsx-1315134181 .navbar-nav.jsx-1315134181 .nav-item.jsx-1315134181:nth-child(3){margin-right:78px;}",".navbar-toggler-icon.jsx-1315134181{display:none;}","@media (max-width:1199px){.navbar.jsx-1315134181{padding:0;min-width:564px;}.menu.jsx-1315134181 .nav-item.jsx-1315134181:active,.menu.jsx-1315134181 .nav-item.jsx-1315134181:hover{border:none;background :#aaaaaa;}.menu.jsx-1315134181 .nav-item.jsx-1315134181:active a.jsx-1315134181,.menu.jsx-1315134181 .nav-item.jsx-1315134181:hover a.jsx-1315134181{color:#ffffff;}.navbar-brand.jsx-1315134181{padding:0 0 0 30px;}.navbar-toggler.jsx-1315134181{position:relative;padding-right:48px;margin-right:30px;}.nav-item.jsx-1315134181{margin:0;border:none;}.nav-item.jsx-1315134181:last-child .nav-link.jsx-1315134181{border-bottom:none;}.nav-link.jsx-1315134181{padding:7px 0;text-align:center;color:#676767;border-bottom:1px solid #E2E2E2;font-weight:bold;}.nav-link.jsx-1315134181:active{background:#aaaaaa;color:#ffffff;}.navbar-toggle.jsx-1315134181{background:none;padding-right:60px;margin-right:30px;}.navbar-toggle.jsx-1315134181:focus{outline:none;}.navbar-toggler-icon.jsx-1315134181:after{content:'MENU';position:absolute;color:#ffffff;font-size:16px;top:-4px;right:-52px;}.navbar-toggler-icon.jsx-1315134181{position:relative;display:inline-block;color:#fff;width:14px;height:16px;cursor:pointer;}.navbar-toggler-icon.jsx-1315134181 .bar1.jsx-1315134181,.navbar-toggler-icon.jsx-1315134181 .bar2.jsx-1315134181,.navbar-toggler-icon.jsx-1315134181 .bar3.jsx-1315134181{display:block;width:14px;height:2px;border-radius:4px;background:#ffffff;-webkit-transition:.3s;transition:.3s;}.navbar-toggler-icon.jsx-1315134181 .bar2.jsx-1315134181{margin:3px 0;}.navbar-toggle.active.jsx-1315134181 .bar1.jsx-1315134181{-webkit-transform:rotate(-45deg) translate(-9px,6px);-webkit-transform:rotate(-45deg) translate(-1.5px,4.5px);-ms-transform:rotate(-45deg) translate(-1.5px,4.5px);transform:rotate(-45deg) translate(-1.5px,4.5px);}.navbar-toggle.active.jsx-1315134181 .bar2.jsx-1315134181{-webkit-transform:rotate(45deg) translate(-8px,-8px);-webkit-transform:rotate(45deg) translate(1px,-2px);-ms-transform:rotate(45deg) translate(1px,-2px);transform:rotate(45deg) translate(1px,-2px);}.navbar-toggle.active.jsx-1315134181 .bar3.jsx-1315134181{opacity:0;}.navbar-toggler.jsx-1315134181:hover,.navbar-toggler.jsx-1315134181:focus{outline:none;}.navbar-nav.jsx-1315134181{position:relative;z-index:1;top:5px;background:#ffffff;box-shadow:0 3px 6px 0 rgba(0,0,0,0.16);border:solid 1px var(--white);}.menu.jsx-1315134181 .nav-item.active.jsx-1315134181,.menu.jsx-1315134181 .nav-item.jsx-1315134181:hover{border:0;}.navbar-brand.jsx-1315134181{padding:0 0 0 30px;}.navbar-toggler.jsx-1315134181{position:relative;padding-right:48px;margin-right:30px;}.nav-item.jsx-1315134181{margin:0;}.nav-item.jsx-1315134181:last-child .nav-link.jsx-1315134181{border-bottom:none;}.nav-link.jsx-1315134181{padding:7px 0;text-align:center;color:#676767;border-bottom:1px solid #E2E2E2;font-weight:bold;}.nav-link.jsx-1315134181:active{background:#aaaaaa;color:#ffffff;}.navbar-toggle.jsx-1315134181{background:none;padding-right:60px;margin-right:30px;}.navbar-toggle.jsx-1315134181:focus{outline:none;}.navbar-toggler-icon.jsx-1315134181:after{content:'MENU';position:absolute;color:#ffffff;font-size:16px;top:-4px;right:-52px;}.navbar-toggler-icon.jsx-1315134181{position:relative;display:inline-block;color:#fff;width:14px;height:16px;cursor:pointer;}.navbar-toggler-icon.jsx-1315134181 .bar1.jsx-1315134181,.navbar-toggler-icon.jsx-1315134181 .bar2.jsx-1315134181,.navbar-toggler-icon.jsx-1315134181 .bar3.jsx-1315134181{display:block;width:14px;height:2px;border-radius:4px;background:#ffffff;-webkit-transition:.3s;transition:.3s;}.navbar-toggler-icon.jsx-1315134181 .bar2.jsx-1315134181{margin:3px 0;}.navbar-toggle.active.jsx-1315134181 .bar1.jsx-1315134181{-webkit-transform:rotate(-45deg) translate(-9px,6px);-webkit-transform:rotate(-45deg) translate(-1.5px,4.5px);-ms-transform:rotate(-45deg) translate(-1.5px,4.5px);transform:rotate(-45deg) translate(-1.5px,4.5px);}.navbar-toggle.active.jsx-1315134181 .bar2.jsx-1315134181{-webkit-transform:rotate(45deg) translate(-8px,-8px);-webkit-transform:rotate(45deg) translate(1px,-2px);-ms-transform:rotate(45deg) translate(1px,-2px);transform:rotate(45deg) translate(1px,-2px);}.navbar-toggle.active.jsx-1315134181 .bar3.jsx-1315134181{opacity:0;}.navbar-toggler.jsx-1315134181:hover,.navbar-toggler.jsx-1315134181:focus{outline:none;}}","@media (max-width:760px){.navbar.jsx-1315134181{padding:0;min-width:320px;}.navbar-xl.jsx-1315134181{min-width:1200px;}.navbar-brand.jsx-1315134181{margin-right:50px;}}",".admin.jsx-1315134181 .navbar-icon.jsx-1315134181 .navbar-nav.jsx-1315134181{position:absolute;right:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}",".admin.jsx-1315134181 .navbar-icon.jsx-1315134181 .navbar-nav.jsx-1315134181 .nav-item.jsx-1315134181:nth-child(1),.admin.jsx-1315134181 .navbar-icon.jsx-1315134181 .navbar-nav.jsx-1315134181 .nav-item.jsx-1315134181:nth-child(2),.admin.jsx-1315134181 .navbar-icon.jsx-1315134181 .navbar-nav.jsx-1315134181 .nav-item.jsx-1315134181:nth-child(3){display:none;}"]))},j=r.a.createElement,w=function(a){return j("footer",{className:"jsx-216879403"},j("div",{className:"jsx-216879403 "+((a.isResponsive?"footer":"footer footer-xl")||"")},j("span",{className:"jsx-216879403"},"Copyright \xa9 Domfam Corp. All rights reserved.")),j(p.a,{id:"216879403"},[".footer.jsx-216879403{width:100%;height:60px;border:solid 1px #707070;background-color:#777777;}",".footer.jsx-216879403 span.jsx-216879403{font-size :12px;color :var(--white);vertical-align:middle;line-height:60px;padding-left:170px;}","@media (max-width:1200px){.footer.jsx-216879403 span.jsx-216879403{padding-left:30px;}.footer-xl.jsx-216879403{min-width:1200px;}}","@media (max-width:768px){.footer.jsx-216879403 span.jsx-216879403{padding-left:20px;}.footer-xl.jsx-216879403{min-width:1200px;}}"]))},k=r.a.createElement;e.a=function(a){var e=Object(x.useRouter)().pathname.split("/"),n="admin"===e[1],t=!1;n&&(t="login"===e[2]||""===e[2]);var o=!(n&&!t),s="";return s="list"===a.page?"list-container":"",s+=o?" container":" container-xl",k(r.a.Fragment,null,k(i.a,null,k("title",null,"MyXD"),k("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",key:"viewport"}),k("meta",{name:"Referrer",content:"origin"}),k("meta",{httpEquiv:"X-UA-Compatible",content:"IE=Edge"}),k("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),k("meta",{name:"apple-mobile-web-app-title",content:"MyXD"}),k("meta",{name:"robots",content:"index,nofollow"}),k("meta",{name:"description",content:"MyXD"}),k("meta",{name:"keywords",content:"MyXD"}),k("script",{src:"/js/jquery.js"}),k("script",{src:"/js/bootstrap.min.js"}),k("script",{src:"/js/common.js"})),k(h,{isResponsive:o}),k("div",{className:s},a.children),k(w,{isResponsive:o}))}},cTJO:function(a,e,n){"use strict";var t=n("/HRN"),r=n("WaGi"),o=n("ZDA2"),i=n("/+P4"),s=n("N9n2"),l=n("LX0d"),c=n("KI45"),p=n("5Uuq");e.__esModule=!0,e.default=void 0;var x,f=n("CxY0"),v=p(n("q1tI")),d=c(n("nOHt")),g=n("g/15");function m(a){return a&&"object"===typeof a?(0,g.formatWithValidation)(a):a}var u=new l,b=window.IntersectionObserver,h={};function j(){return x||(b?x=new b((function(a){a.forEach((function(a){if(u.has(a.target)){var e=u.get(a.target);(a.isIntersecting||a.intersectionRatio>0)&&(x.unobserve(a.target),u.delete(a.target),e())}}))}),{rootMargin:"200px"}):void 0)}var w=function(a){function e(a){var n;return t(this,e),(n=o(this,i(e).call(this,a))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(a){var e=null,n=null,t=null;return function(r,o){if(t&&r===e&&o===n)return t;var i=a(r,o);return e=r,n=o,t=i,i}}((function(a,e){return{href:m(a),as:e?m(e):e}})),n.linkClicked=function(a){var e=a.currentTarget,t=e.nodeName,r=e.target;if("A"!==t||!(r&&"_self"!==r||a.metaKey||a.ctrlKey||a.shiftKey||a.nativeEvent&&2===a.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),i=o.href,s=o.as;if(function(a){var e=(0,f.parse)(a,!1,!0),n=(0,f.parse)((0,g.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var l=window.location.pathname;i=(0,f.resolve)(l,i),s=s?(0,f.resolve)(l,s):i,a.preventDefault();var c=n.props.scroll;null==c&&(c=s.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then((function(a){a&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==a.prefetch,n}return s(e,a),r(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var a=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,f.resolve)(a,e)}},{key:"handleRef",value:function(a){var e=this,n=h[this.getHref()];this.p&&b&&a&&a.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(a,e){var n=j();return n?(n.observe(a),u.set(a,e),function(){try{n.unobserve(a)}catch(e){console.error(e)}u.delete(a)}):function(){}}(a,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var a=this.getHref();d.default.prefetch(a),h[a]=!0}}},{key:"render",value:function(){var a=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as;"string"===typeof e&&(e=v.default.createElement("a",null,e));var o=v.Children.only(e),i={ref:function(e){a.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),a.prefetch()},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||a.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||t),v.default.cloneElement(o,i)}}]),e}(v.Component);e.default=w},dVTT:function(a,e,n){n("aPfg")("Map")},g33z:function(a,e,n){"use strict";var t=n("Wu5q"),r=n("n3ko");a.exports=n("raTm")("Map",(function(a){return function(){return a(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(a){var e=t.getEntry(r(this,"Map"),a);return e&&e.v},set:function(a,e){return t.def(r(this,"Map"),0===a?0:a,e)}},t,!0)},p46w:function(a,e,n){var t,r;!function(o){if(void 0===(r="function"===typeof(t=o)?t.call(e,n,e,a):t)||(a.exports=r),!0,a.exports=o(),!!0){var i=window.Cookies,s=window.Cookies=o();s.noConflict=function(){return window.Cookies=i,s}}}((function(){function a(){for(var a=0,e={};a<arguments.length;a++){var n=arguments[a];for(var t in n)e[t]=n[t]}return e}function e(a){return a.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(t){function r(){}function o(e,n,o){if("undefined"!==typeof document){"number"===typeof(o=a({path:"/"},r.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(c){}n=t.write?t.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var l in o)o[l]&&(s+="; "+l,!0!==o[l]&&(s+="="+o[l].split(";")[0]));return document.cookie=e+"="+n+s}}function i(a,n){if("undefined"!==typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],i=0;i<o.length;i++){var s=o[i].split("="),l=s.slice(1).join("=");n||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=e(s[0]);if(l=(t.read||t)(l,c)||e(l),n)try{l=JSON.parse(l)}catch(p){}if(r[c]=l,a===c)break}catch(p){}}return a?r[a]:r}}return r.set=o,r.get=function(a){return i(a,!1)},r.getJSON=function(a){return i(a,!0)},r.remove=function(e,n){o(e,"",a(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))}}]);
