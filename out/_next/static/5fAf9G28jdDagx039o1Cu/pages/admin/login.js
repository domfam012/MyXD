(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3iIM":function(e,a,t){"use strict";t.r(a);var s=t("ln6h"),n=t.n(s),l=t("9Jkg"),o=t.n(l),i=t("MX0m"),r=t.n(i),c=t("q1tI"),p=t.n(c),m=t("8Kt/"),x=t.n(m),d=t("ZUpW"),u=t("nOHt"),g=t("vcXL"),h=t.n(g),b=t("vDqi"),j=t.n(b),f=t("Ma5Y"),N=t.n(f),v=p.a.createElement,w=function(e){var a=Object(c.useState)(""),t=a[0],s=a[1],l=Object(c.useState)(""),i=l[0],p=l[1],m=Object(c.useState)(""),g=m[0],b=m[1],f=Object(c.useState)(""),N=f[0],w=f[1],k=Object(c.useState)(""),y=k[0],O=k[1],L=Object(c.useRef)(null),S=Object(u.useRouter)();return v(d.a,null,v(x.a,null,v("title",{className:"jsx-1646267373"},"Admin - New")),v("div",{className:"jsx-1646267373 content"},v("div",{className:"jsx-1646267373 row box"},v("div",{className:"jsx-1646267373 col col-sm-12"},v("h1",{className:"jsx-1646267373 header"},"XD \uae00\uc4f0\uae30"),v("div",{className:"jsx-1646267373 row"},v("div",{className:"jsx-1646267373 col col-sm-12"},v("form",{encType:"multipart/form-data",onSubmit:function(e){var a,s,l,r;return n.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(e.preventDefault(),!confirm("\ub4f1\ub85d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){c.next=20;break}return c.next=5,n.a.awrap(h()("http://13.209.55.219/api/board/create",{method:"POST",headers:{Accept:"application/json",Headers:"content-type","Content-Type":"application/json"},body:o()({title:t,content:i,img:g,imgName:N,link:y})}));case 5:return a=c.sent,c.next=8,n.a.awrap(a.json());case 8:return s=c.sent,l=s.imgSaveName,console.log("result:{".concat(o()(s),"} uploaded")),console.log("imgSaveName:{".concat(o()(l),"} uploaded")),document.cookie="imgName=".concat(l,"; path=/"),(r=new FormData).set("test","test"),r.append("img",L.current.files[0]),c.next=18,n.a.awrap(j()({url:"http://13.209.55.219/api/board/upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:r}));case 18:200===c.sent.status&&S.push("/admin/p/list");case 20:case"end":return c.stop()}}))},className:"jsx-1646267373"},v("div",{className:"jsx-1646267373 form-group"},v("div",{className:"jsx-1646267373 label-area"},v("label",{className:"jsx-1646267373 col-form-label"},"\uc81c\ubaa9")),v("div",{className:"jsx-1646267373 input-area"},v("input",{type:"text",name:"title",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",maxLength:"50",onChange:function(e){s(e.target.value)},className:"jsx-1646267373 form-control"}))),v("div",{className:"jsx-1646267373 form-group"},v("div",{className:"jsx-1646267373 label-area"},v("label",{className:"jsx-1646267373 col-form-label"},"\uce74\ud14c\uace0\ub9ac")),v("div",{className:"jsx-1646267373 input-area"},v("label",{className:"jsx-1646267373 checkbox checkbox_single"},v("input",{type:"checkbox",className:"jsx-1646267373 filled-in"}),v("span",{className:"jsx-1646267373"},"UI KITS")),v("label",{className:"jsx-1646267373 checkbox checkbox_single"},v("input",{type:"checkbox",className:"jsx-1646267373 filled-in"}),v("span",{className:"jsx-1646267373"},"Website")),v("label",{className:"jsx-1646267373 checkbox checkbox_single"},v("input",{type:"checkbox",className:"jsx-1646267373 filled-in"}),v("span",{className:"jsx-1646267373"},"Mobile")),v("label",{className:"jsx-1646267373 checkbox checkbox_single"},v("input",{type:"checkbox",className:"jsx-1646267373 filled-in"}),v("span",{className:"jsx-1646267373"},"Plug-in")))),v("div",{className:"jsx-1646267373 form-group"},v("div",{className:"jsx-1646267373 label-area"},v("label",{style:{lineHeight:"20.4"},className:"jsx-1646267373 col-form-label"},"\ub0b4\uc6a9")),v("div",{className:"jsx-1646267373 input-area"},v("textarea",{name:"content",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",maxLength:"1000",onChange:function(e){p(e.target.value)},className:"jsx-1646267373 form-control"}))),v("div",{className:"jsx-1646267373 form-group"},v("div",{className:"jsx-1646267373 label-area"},v("label",{style:{lineHeight:"9.4"},className:"jsx-1646267373 col-form-label"},"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc")),v("div",{className:"jsx-1646267373  input-group input-area"},v("div",{className:"jsx-1646267373 file-label"},""===g?v("label",{htmlFor:"fileUploader",className:"jsx-1646267373 add text-center"},"+",v("br",{className:"jsx-1646267373"}),"\uc774\ubbf8\uc9c0"):v("div",{className:"jsx-1646267373 added"},v("img",{src:g,alt:"\uc5c5\ub85c\ub4dc \uc774\ubbf8\uc9c0",className:"jsx-1646267373"}),v("a",{href:"#",onClick:function(e){e.preventDefault(),b(""),w(""),L.current.value=null},className:"jsx-1646267373 btn-close"}))),v("input",{type:"file",id:"fileUploader",name:"img",ref:L,onChange:function(e){var a=URL.createObjectURL(e.target.files[0]);b(a),w(e.target.files[0].name),L.current.focus()},className:"jsx-1646267373 form-control-file"}))),v("div",{className:"jsx-1646267373 form-group"},v("div",{className:"jsx-1646267373 label-area"},v("label",{className:"jsx-1646267373 col-form-label"},"\ub9c1\ud06c")),v("div",{className:"jsx-1646267373 input-area"},v("input",{type:"text",name:"link",placeholder:"\ub9c1\ud06c\ub97c \uc785\ub825\ud558\uc138\uc694.",maxLength:"250",onChange:function(e){O(e.target.value)},className:"jsx-1646267373 form-control"}))),v("div",{className:"jsx-1646267373 row form-btn"},v("div",{className:"jsx-1646267373 col col-sm-12 text-center"},v("button",{href:"#",onClick:function(e){e.preventDefault(),confirm("\uc791\uc131\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&S.push("/admin/p/list")},className:"jsx-1646267373 btn btn-lg btn-outline-lightgray"},"\ucde8\uc18c"),v("button",{href:"#",type:"submit",className:"jsx-1646267373 btn btn-lg btn-primary ml-3"},"\uc800\uc7a5"))))))))),v(r.a,{id:"1646267373"},[".box.jsx-1646267373{margin:70px auto;border:0 solid transparent;box-shadow:0 3px 6px 0 rgba(0,0,0,0.16);background-color:#fff;}",".header.jsx-1646267373{margin:33px 35px 0;padding:0 0 34px;font-weight:bold;line-height:1;border-bottom:3px solid #96959a;}","form.jsx-1646267373{margin:0 35px;}",".form-group.jsx-1646267373{position:relative;}",".label-area.jsx-1646267373{position:absolute;width:17%;top:20px;left:0;padding-left:10px;font-size:18px;}",".input-area.jsx-1646267373{width:83%;margin-left:17%;padding-right:10px;}","textarea.jsx-1646267373{height:381px;line-height:30px;resize:none;}",".file-label.jsx-1646267373{position:relative;width:321px;height:182px;border:1px solid #eaeaea;}",".file-label.jsx-1646267373 .add.jsx-1646267373{display:block;margin:0 auto;padding:69px 0;color:#96959a;}",".file-label.jsx-1646267373 .added.jsx-1646267373{width:100%;margin:auto;}",".file-label.jsx-1646267373 .added.jsx-1646267373 img.jsx-1646267373{width:100%;height:100%;}",'.file-label.jsx-1646267373 .added.jsx-1646267373 .btn-close.jsx-1646267373{position:absolute;top:0;right:0;background-color:#000;width:30px;height:30px;background-image:url("/img/common/btn-close.png");background-repeat:no-repeat;background-size:71%;background-position:center;}','input[type="file"].jsx-1646267373{display:none;}',".form-btn.jsx-1646267373{margin:40px auto;}"]))};w.getInitialProps=function(e){var a,t,s,l,o,i;return n.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=N()(e),t=a.token,(s=!!t)||(e.res.writeHead(302,{Location:"/admin/login"}),e.res.end()),l=e.query.page||"1",r.next=6,n.a.awrap(h()("http://13.209.55.219/api/board/list/5?page=".concat(l)));case 6:return o=r.sent,r.next=9,n.a.awrap(o.json());case 9:return i=r.sent,r.abrupt("return",{auth:s,data:i.data,page:Number(l)});case 11:case"end":return r.stop()}}))},a.default=w},"X6/5":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/login",function(){return t("wDTD")}])},wDTD:function(e,a,t){"use strict";t.r(a);var s=t("ln6h"),n=t.n(s),l=t("9Jkg"),o=t.n(l),i=t("MX0m"),r=t.n(i),c=t("8Kt/"),p=t.n(c),m=t("ZUpW"),x=t("q1tI"),d=t.n(x),u=t("nOHt"),g=t("vcXL"),h=t.n(g),b=t("Ma5Y"),j=t.n(b),f=t("p46w"),N=t.n(f),v=(t("3iIM"),d.a.createElement),w=function(e){var a=Object(u.useRouter)(),t=Object(x.useState)(""),s=t[0],n=t[1],l=Object(x.useState)(""),i=l[0],c=l[1];return v(m.a,null,v(p.a,null,v("title",{className:"jsx-604774386"},"Admin - Login")),v("div",{className:"jsx-604774386 content"},v("div",{className:"jsx-604774386 login-box"},v("h1",{className:"jsx-604774386"},"Login"),v("div",{style:{lineheight:"1px"},className:"jsx-604774386 text-center"},v("span",{className:"jsx-604774386 underline"})),v("form",{name:"login-form",className:"jsx-604774386"},v("input",{name:"login-email",onChange:function(e){n(e.target.value)},type:"text",placeholder:"E-mail\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",maxLength:"20",className:"jsx-604774386"}),v("input",{name:"login-password",onChange:function(e){c(e.target.value)},type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",maxLength:"24",className:"jsx-604774386"})),v("div",{className:"jsx-604774386 text-center"},v("a",{href:"#",onClick:function(){console.log("E-mail :"+s),console.log("PWD :"+i),/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(s)?(h()("http://13.209.55.219/api/user/login",{method:"POST",headers:{Accept:"application/json",Headers:"content-type","Content-Type":"application/json"},body:o()({email:s,password:i})}).then((function(e){if(200===e.status)return e.json();400===e.status&&alert("\uc720\uc800\uc815\ubcf4\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),600===e.status&&alert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")})).then((function(e){console.log("json:::"),console.log(e),N.a.set("token",e.token,{expires:1}),a.push("/admin/p/list")})).catch((function(e){console.log("loginFail"),console.log(e)})),i||alert("Password\ub97c \uc785\ub825\ud558\uc138\uc694")):alert("\uc815\ud655\ud55c Email\uc744 \uc785\ub825\ud558\uc138\uc694")},className:"jsx-604774386 btn btn-primary"},"\ub85c\uadf8\uc778")))),v(r.a,{id:"604774386"},[".content.jsx-604774386{height:calc(100vh - 270px);min-height:420px;margin:0 0 70px;position:relative;}",".login-box.jsx-604774386{position:absolute;width:360px;height:385px;top:calc((35px + 50% - 30px - 192.5px) * 0.96);left:calc(50% - 180px);background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,0.16);padding:52px 40px 50px;}","h1.jsx-604774386{font-size:3rem;font-weight:800;line-height:3rem;text-align:center;margin-bottom:7px;color:#2e001f;}",".underline.jsx-604774386{display:inline-block;width:30px;height:1px;background-color:#2e001f;}","input.jsx-604774386{width:100%;height:40px;margin-top:30px;border:none;border-bottom:1px solid #707070;padding:10px;color:#333;}",'input[type="password"].jsx-604774386{-webkit-letter-spacing:-5.5px;-moz-letter-spacing:-5.5px;-ms-letter-spacing:-5.5px;letter-spacing:-5.5px;}',"input.jsx-604774386::-webkit-input-placeholder{-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#999;}","input.jsx-604774386::-moz-placeholder{-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#999;}","input.jsx-604774386:-ms-input-placeholder{-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#999;}","input.jsx-604774386::placeholder{-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#999;}","a.btn.jsx-604774386{margin-top:50px;}","@media (max-width:1200px){.content.jsx-604774386{height:calc(100vh - 190px);margin:0 0 30px;}}","@media (max-width:768px){.content.jsx-604774386{height:calc(100vh - 197px);margin:0 0 20px;}}","@media (max-width:760px){.content.jsx-604774386{height:calc(100vh - 170px);margin:0 0 20px;}}"]))};w.getInitialProps=function(e){var a,t,s;return n.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=j()(e),t=a.token,(s=!!t)&&(e.res.writeHead(302,{Location:"/admin/p/list"}),e.res.end()),n.abrupt("return",{auth:s});case 4:case"end":return n.stop()}}))},a.default=w}},[["X6/5",1,2,0,3,4,8]]]);