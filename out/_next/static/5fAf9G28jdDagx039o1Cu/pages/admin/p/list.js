(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/v97":function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/p/list",function(){return i("LcDE")}])},"9ONQ":function(t,e,i){"use strict";i.r(e);var n=i("iVi/");function o(t,e){void 0===e&&(e={});var i=function(t){if(t&&"j"===t[0]&&":"===t[1])return t.substr(2);return t}(t);if(function(t,e){return"undefined"===typeof e&&(e=!t||"{"!==t[0]&&"["!==t[0]&&'"'!==t[0]),!e}(i,e.doNotParse))try{return JSON.parse(i)}catch(n){}return t}var a=i("Qetd"),s=function(){function t(t,e){var i=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(t,e){return"string"===typeof t?n.parse(t,e):"object"===typeof t&&null!==t?t:{}}(t,e),new Promise((function(){i.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return t.prototype._updateBrowserValues=function(t){this.HAS_DOCUMENT_COOKIE&&(this.cookies=n.parse(document.cookie,t))},t.prototype._emitChange=function(t){for(var e=0;e<this.changeListeners.length;++e)this.changeListeners[e](t)},t.prototype.get=function(t,e,i){return void 0===e&&(e={}),this._updateBrowserValues(i),o(this.cookies[t],e)},t.prototype.getAll=function(t,e){void 0===t&&(t={}),this._updateBrowserValues(e);var i={};for(var n in this.cookies)i[n]=o(this.cookies[n],t);return i},t.prototype.set=function(t,e,i){var o;"object"===typeof e&&(e=JSON.stringify(e)),this.cookies=a({},this.cookies,((o={})[t]=e,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.serialize(t,e,i)),this._emitChange({name:t,value:e,options:i})},t.prototype.remove=function(t,e){var i=e=a({},e,{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=a({},this.cookies),delete this.cookies[t],this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.serialize(t,"",i)),this._emitChange({name:t,value:void 0,options:e})},t.prototype.addChangeListener=function(t){this.changeListeners.push(t)},t.prototype.removeChangeListener=function(t){var e=this.changeListeners.indexOf(t);e>=0&&this.changeListeners.splice(e,1)},t}();e.default=s},LcDE:function(t,e,i){"use strict";i.r(e);var n=i("ln6h"),o=i.n(n),a=i("MX0m"),s=i.n(a),r=i("q1tI"),p=i.n(r),c=i("8Kt/"),l=i.n(c),d=i("ZUpW"),x=i("YFqc"),m=i.n(x),h=i("nOHt"),u=i("vcXL"),g=i.n(u),f=i("IP2g"),v=i("4Bjl"),w=i("WE53"),b=i("0fKb"),j=i.n(b),y=i("Ma5Y"),N=i.n(y),k=p.a.createElement,C=function(t){var e=t.router,i=t.item,n=(t.onDelete,i.pid);return k("div",{className:"jsx-2260793160 box-list"},k("div",{className:"jsx-2260793160 item row"},k("div",{className:"jsx-2260793160 col item-box-1"},k("img",{src:i.imgPath,className:"jsx-2260793160 img-list"})),k("div",{className:"jsx-2260793160 col item-box-2"},k("div",{className:"jsx-2260793160 list-title"},i.title),k("p",{className:"jsx-2260793160 list-content"},i.content)),k("div",{className:"jsx-2260793160 col item-box-3"},k("button",{onClick:function(){confirm("\ud574\ub2f9 \uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&g()("http://13.209.55.219/api/board/post/".concat(n),{method:"DELETE",headers:{Accept:"application/json",Headers:"content-type","Content-Type":"application/json"}}).then((function(t){alert("\uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),location.reload()})).catch((function(t){console.log(t)}))},className:"jsx-2260793160 btn-sm btn-gray-7 mr-3"},"\uc0ad\uc81c"),k("button",{onClick:function(){confirm("\ud574\ub2f9 \uae00\uc744 \uc218\uc815\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&e.push("/admin/p/".concat(n,"/update"))},className:"jsx-2260793160 btn-sm btn-primary"},"\ud3b8\uc9d1"))),k("hr",{className:"jsx-2260793160 box-bottom-line"}),k(s.a,{id:"2260793160"},[".item.jsx-2260793160{height:158px;}",".item-box-1.jsx-2260793160{width:271px;padding-left:64px;padding-right:10px;}",".item-box-2.jsx-2260793160{width:579px;padding-left:1px;padding-top:1px;}",".item-box-3.jsx-2260793160{width:260px;padding-right:65px;text-align:right;}",".list-title.jsx-2260793160{width:498px;height:35px;font-size:30px;font-weight:bold;font-stretch:normal;font-style:normal;line-height:1.33;-webkit-letter-spacing:-1.5px;-moz-letter-spacing:-1.5px;-ms-letter-spacing:-1.5px;letter-spacing:-1.5px;text-align:left;color:#333333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:38px;}",".list-content.jsx-2260793160{margin-top:22px;width:432px;height:98px;font-size:16px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.57;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#666666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:38px;}",".box-list.jsx-2260793160{padding-top:39px;padding-bottom:39px;height:238px;border:0 solid transparent;}",".box-list.jsx-2260793160:hover{box-shadow:3px 3px 12px 0 rgba(0,0,0,0.24);background-color:var(--white);}",".img-list.jsx-2260793160{width:278px;height:162px;}",".box-bottom-line.jsx-2260793160{margin-top:41px;width:1060px;color:#fcfcfc;}",".box-list.jsx-2260793160:hover .box-bottom-line.jsx-2260793160{width:0;}"]))},E=function(t){var e=Object(h.useRouter)();return console.log(t.page),k(d.a,null,k(l.a,null,k("title",{className:"jsx-2451880634"},"Admin - List")),k("div",{className:"jsx-2451880634 content"},k("div",{className:"jsx-2451880634 row box"},k("div",{className:"jsx-2451880634 col col-sm-12"},k("h1",{className:"jsx-2451880634 header"},"\ubaa9\ub85d"),k("div",{className:"jsx-2451880634 damper"}),k("div",{className:"jsx-2451880634 row pl-0 pr-0"},k("div",{className:"jsx-2451880634 col pl-0 pr-0"},t.data.map((function(t){return k(C,{key:t.pid,router:e,item:t})})))),k("div",{className:"jsx-2451880634 bottom-btn-area"},k(m.a,{href:"/admin/p/new"},k("button",{className:"jsx-2451880634 btn-sm btn-primary"},"\uae00\uc4f0\uae30"))),k("div",{className:"jsx-2451880634 paging"},k(j.a,{activePage:t.page,itemsCountPerPage:5,totalItemsCount:t.total,pageRangeDisplayed:5,onChange:function(t){window.scrollTo(0,0),e.push("/admin/p/list?page=".concat(t))},linkClass:"page-link",innerClass:"pagination text-center",itemClass:"page-item",activeClass:"active",linkClassLast:"last",linkClassNext:"next",linkClassPrev:"prev",linkClassFirst:"first",firstPageText:k(f.a,{icon:w.a}),prevPageText:k(f.a,{icon:w.c}),nextPageText:k(f.a,{icon:w.d}),lastPageText:k(f.a,{icon:v.a})}))))),k(s.a,{id:"2451880634"},[".box.jsx-2451880634{margin:70px auto;border:0 solid transparent;box-shadow:0 3px 6px 0 rgba(0,0,0,0.16);background-color:#ffffff;}",".header.jsx-2451880634{margin:33px 35px 0;padding:0 0 34px;font-weight:bold;line-height:1;border-bottom:3px solid #96959A;}",".damper.jsx-2451880634{height:20px;}",".bottom-btn-area.jsx-2451880634{margin-top:42px;margin-right:35px;text-align:right;}",".paging.jsx-2451880634{margin-left:466px;margin-right:465px;margin-top:32px;margin-bottom:31px;}"]))};E.getInitialProps=function(t){var e,i,n,a,s;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=N()(t),i=e.token,!!i||(t.res.writeHead(302,{Location:"/admin/login"}),t.res.end()),n=t.query.page||"1",r.next=6,o.a.awrap(g()("http://13.209.55.219/api/board/list/5?page=".concat(n)));case 6:return a=r.sent,r.next=9,o.a.awrap(a.json());case 9:return s=r.sent,r.abrupt("return",{data:s.data,page:Number(n),total:s.total});case 11:case"end":return r.stop()}}))},e.default=E},Ma5Y:function(t,e,i){var n=i("9ONQ");n=n.default||n,t.exports=function(t,e){var i=t.req&&t.req.headers&&t.req.headers.cookie;return new n(i).getAll(e)}},"iVi/":function(t,e,i){"use strict";e.parse=function(t,e){if("string"!==typeof t)throw new TypeError("argument str must be a string");for(var i={},o=e||{},s=t.split(a),p=o.decode||n,c=0;c<s.length;c++){var l=s[c],d=l.indexOf("=");if(!(d<0)){var x=l.substr(0,d).trim(),m=l.substr(++d,l.length).trim();'"'==m[0]&&(m=m.slice(1,-1)),void 0==i[x]&&(i[x]=r(m,p))}}return i},e.serialize=function(t,e,i){var n=i||{},a=n.encode||o;if("function"!==typeof a)throw new TypeError("option encode is invalid");if(!s.test(t))throw new TypeError("argument name is invalid");var r=a(e);if(r&&!s.test(r))throw new TypeError("argument val is invalid");var p=t+"="+r;if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c))throw new Error("maxAge should be a Number");p+="; Max-Age="+Math.floor(c)}if(n.domain){if(!s.test(n.domain))throw new TypeError("option domain is invalid");p+="; Domain="+n.domain}if(n.path){if(!s.test(n.path))throw new TypeError("option path is invalid");p+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");p+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(p+="; HttpOnly");n.secure&&(p+="; Secure");if(n.sameSite){switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p};var n=decodeURIComponent,o=encodeURIComponent,a=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function r(t,e){try{return e(t)}catch(i){return t}}}},[["/v97",1,2,7,10,0,3,4,5,6]]]);