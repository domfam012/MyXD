(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/a9y":function(e,t,r){"use strict";var n=r("/HRN"),a=r("WaGi"),o=r("ZDA2"),i=r("/+P4"),s=r("N9n2"),l=r("KI45");t.__esModule=!0,t.default=void 0;var d=l(r("q1tI")),c=l(r("8Kt/")),u={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},p=function(e){function t(){return n(this,t),o(this,i(t).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||u[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:f.error},d.default.createElement(c.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:f.h1},e):null,d.default.createElement("div",{style:f.desc},d.default.createElement("h2",{style:f.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}}]),t}(d.default.Component);t.default=p,p.displayName="ErrorPage";var f={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"1HF/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r("Y0NT")}])},Y0NT:function(e,t,r){"use strict";r.r(t);var n=r("ln6h"),a=r.n(n),o=r("MX0m"),i=r.n(o),s=(r("eomm"),r("vcXL")),l=r.n(s),d=r("q1tI"),c=r.n(d).a.createElement,u=function(e){e.errorCode,e.stars;return c("div",{className:"jsx-256527171"},c("div",{id:"wrap",className:"jsx-256527171 wrap error_wrap"},c("div",{className:"jsx-256527171 error_page"},c("img",{src:"/img/common/error.png",alt:"\uc5d0\ub7ec\uc774\ubbf8\uc9c0",className:"jsx-256527171"}),c("div",{className:"jsx-256527171 error_title"},"404 Page not found"),c("div",{className:"jsx-256527171 error_contents"},"\uc694\uccad\ud558\uc2e0 \ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",c("br",{className:"jsx-256527171"}),"\uc0ad\uc81c\ub41c \uc8fc\uc18c\uac70\ub098, \uc77c\uc2dc\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."))),c(i.a,{id:"256527171"},["body.jsx-256527171{background:#F8F8F8;}",".error_wrap.jsx-256527171{position:fixed;width:100%;height:100%;top:0;left:0;z-index:1000;background:#F8F8F8;}",".error_page.jsx-256527171{position:fixed;text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}",".error_title.jsx-256527171{line-height:40px;margin:21px 0 44px;font-size:40px;color:#116EDD;font-weight:bold;font-family:NanumGothic;}",".error_contents.jsx-256527171{text-align:center;line-height:32px;font-size:20px;color:#333333;font-family:NanumGothic;}"]))};u.getInitialProps=function(){var e,t;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(l()("https://api.github.com/repos/zeit/next.js"));case 2:return e=r.sent,e.statusCode>200&&e.statusCode,r.next=6,a.a.awrap(e.json());case 6:return t=r.sent,r.abrupt("return",{errorCode:404,stars:t.stargazers_count});case 8:case"end":return r.stop()}}))},t.default=u},eomm:function(e,t,r){e.exports=r("/a9y")}},[["1HF/",1,2,0,3]]]);