(this["webpackJsonpfirefighter-blog"]=this["webpackJsonpfirefighter-blog"]||[]).push([[0],{38:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var n,r,c=s(1),o=s.n(c),a=s(32),i=s.n(a),l=(s(38),s(9)),j=s(2),d=s(4),b=s(10),h=s.n(b),u=["title","titleId"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)s=c[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)s=c[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function O(e,t){var s=e.title,o=e.titleId,a=p(e,u);return c.createElement("svg",f({id:"fireIcon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 256 256",style:{enableBackground:"new 0 0 256 256"},xmlSpace:"preserve",ref:t,"aria-labelledby":o},a),s?c.createElement("title",{id:o},s):null,n||(n=c.createElement("style",{type:"text/css"},"\r\n\t.st0{fill:url(#SVGID_1_);stroke:#000000;stroke-miterlimit:10;}\r\n")),c.createElement("radialGradient",{id:"SVGID_1_",cx:130.8557,cy:127.5,r:102.3719,fx:131.4201,fy:229.8703,gradientTransform:"matrix(1 -1.991360e-03 2.230324e-03 1.12 -0.2841 -15.0391)",gradientUnits:"userSpaceOnUse"},c.createElement("stop",{offset:0,style:{stopColor:"#FF3F00"}}),c.createElement("stop",{offset:.1259,style:{stopColor:"#FF5700"}}),c.createElement("stop",{offset:.2817,style:{stopColor:"#FF6D00"}}),c.createElement("stop",{offset:.4305,style:{stopColor:"#FF7A00"}}),c.createElement("stop",{offset:.5635,style:{stopColor:"#FF7F00"}}),c.createElement("stop",{offset:.6295,style:{stopColor:"#FF8400"}}),c.createElement("stop",{offset:.7106,style:{stopColor:"#FF9300"}}),c.createElement("stop",{offset:.7995,style:{stopColor:"#FFAC00"}}),c.createElement("stop",{offset:.8941,style:{stopColor:"#FFCF00"}}),c.createElement("stop",{offset:.9922,style:{stopColor:"#FFFB00"}}),c.createElement("stop",{offset:1,style:{stopColor:"#FFFF00"}})),r||(r=c.createElement("path",{className:"st0",d:"M44,143c1.8-13.18,23-48,23-48c0.71-2.09,0.56-1.99,1.36,0.07l0.12,1.14c1.01,9.81,3.5,19.4,7.38,28.46L76,125 l1-10c0,0,5.96-29.78,10-39c4.73-10.81,19.37-29.95,28-38c8.88-8.28,41-26,41-26s-1.83,18.8-1,25c0.95,7.05,6.46,20.35,9,27 c4.1,10.71,13.75,31.75,16,43c1.28,6.38,1,26,1,26l35-44l-1,45c0,0,4.21,35.13,2.89,47.23c-1.36,12.51-9.76,26-30.89,39.77 c-22.05,14.37-43,22-56,22c-11.82,0-43-6-64-29C50.05,195.44,41.47,161.49,44,143z"})))}var m=c.forwardRef(O),g=(s.p,s(64)),x=s(0);var v=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],n=t[1],r=Object(g.a)(["user-token"]),o=Object(d.a)(r,3),a=o[0],i=o[2];function j(){return Object(x.jsx)(l.b,{to:"/firefighter-blog/login",children:Object(x.jsx)("div",{className:"button menuItem",children:"Log in"})})}function b(){return Object(x.jsx)("div",{className:"button menuItem",onClick:function(){h.a.get("https://firefighter-2376.instashop.ae/api/users/logout",{headers:{"x-sessionToken":a["user-token"].sessionToken}}).then((function(e){console.log(e),200===e.status&&(i("user-token",{path:"/"}),window.location="/firefighter-blog")})).catch((function(e){401===e.response.status&&(console.log("Missing or invalid session token"),i("user-token",{path:"/"}),window.location="/firefighter-blog")}))},children:"Log out"})}return Object(x.jsxs)("div",{className:"headerContainer",children:[Object(x.jsx)(l.b,{to:"/firefighter-blog",children:Object(x.jsxs)("div",{className:"headerIconTitle",children:[Object(x.jsx)(m,{className:"headerIcon"}),Object(x.jsx)("div",{className:"headerTitle",children:"Firefighter's Blog"})]})}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"hamburger",onClick:function(){n(!s)},children:Object(x.jsxs)("svg",{viewBox:"0 0 100 80",width:"30",height:"30",children:[Object(x.jsx)("rect",{width:"100",height:"20",rx:"8"}),Object(x.jsx)("rect",{y:"30",width:"100",height:"20",rx:"8"}),Object(x.jsx)("rect",{y:"60",width:"100",height:"20",rx:"8"})]})})}),Object(x.jsx)("div",{className:s?"headerMenuActivated":"headerMenu",children:a.hasOwnProperty("user-token")?Object(x.jsx)(b,{}):Object(x.jsx)(j,{})})]})};var y=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(void 0),o=Object(d.a)(r,2),a=o[0],i=o[1];return Object(c.useEffect)((function(){h.a.get("https://firefighter-2376.instashop.ae/api/landmarks").then((function(e){n(e.data)})).catch((function(e){400===e.response.status&&console.log("Error trying to fetch the landmarks")}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),void 0!==a&&Object(x.jsxs)("div",{className:"imageFrameContainer",children:[Object(x.jsx)("div",{className:"button imageFrameButton",onClick:function(){return i(void 0)},children:"X"}),Object(x.jsx)("img",{className:"imageFramePhoto",src:a.url,alt:a.name})]}),Object(x.jsx)("div",{children:s.map((function(e,t){return Object(x.jsxs)("div",{className:"postContainer",children:[Object(x.jsx)("div",{className:"postImageContainer",children:Object(x.jsx)("img",{className:"postImage",onClick:function(){i(e.photo)},src:e.photo_thumb.url,alt:e.photo_thumb.name})}),Object(x.jsxs)("div",{children:[Object(x.jsx)(l.b,{to:"/firefighter-blog/post/".concat(e.objectId),children:Object(x.jsx)("h1",{className:"postTitle",children:e.title})}),Object(x.jsx)("p",{children:e.short_info}),Object(x.jsx)(l.b,{to:"/firefighter-blog/post/".concat(e.objectId),className:"postButton",children:"Read More"})]})]},t)}))})]})},k=s(12),w=s(14);var N=function(e){var t=e.message,s=e.color,n=Object(c.useState)(0),r=Object(d.a)(n,2),o=r[0],a=r[1];return Object(c.useEffect)((function(){""!==t&&a(5e3)}),[t]),Object(c.useEffect)((function(){var e=setTimeout((function(){a(0)}),o);return function(){clearTimeout(e)}}),[o]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"messageContainer ".concat(0!==o?"active":""),children:Object(x.jsx)("span",{className:s,children:t})})})};var C=function(){var e=Object(c.useState)(void 0),t=Object(d.a)(e,2),s=t[0],n=t[1],r=Object(g.a)(["user-token"]),o=Object(d.a)(r,1)[0],a=Object(c.useState)(!1),i=Object(d.a)(a,2),b=i[0],u=i[1],f=Object(c.useState)({message:"",color:""}),p=Object(d.a)(f,2),O=p[0],m=p[1],y=Object(j.f)().id;function C(e){e.preventDefault(),n(Object(w.a)(Object(w.a)({},s),{},Object(k.a)({},e.currentTarget.id,e.currentTarget.innerText)))}return Object(c.useEffect)((function(){h.a.get("https://firefighter-2376.instashop.ae/api/landmarks/".concat(y)).then((function(e){n(e.data)})).catch((function(e){400===e.response.status?(console.log("Error trying to fetch this landmark"),window.alert("Error trying to fetch this landmark (400)")):404===e.response.status&&(console.log("Object not found"),window.alert("Object not found (404)"))})),u(o.hasOwnProperty("user-token"))}),[y,o]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsx)(N,{message:O.message,color:O.color}),Object(x.jsx)("div",{children:void 0!==s&&Object(x.jsxs)("div",{className:"post_PostContainer",children:[Object(x.jsx)("div",{className:"post_ImageContainer",children:Object(x.jsx)("img",{className:"post_Image",onClick:function(){return window.open(s.photo.url,"_blank")},src:s.photo.url,alt:s.photo.name})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{contentEditable:b,suppressContentEditableWarning:!0,onBlur:C,className:"primaryText postTitle ".concat(!b&&"disabled"),id:"title",children:s.title}),Object(x.jsx)("a",{className:"post_url",href:s.url,target:"_blank",rel:"noreferrer",children:s.url}),Object(x.jsx)("br",{}),Object(x.jsxs)("span",{className:"primaryText",children:["Location: [",s.location[0],", ",s.location[1],"]"]}),Object(x.jsx)("hr",{}),Object(x.jsx)("div",{contentEditable:b,suppressContentEditableWarning:!0,onBlur:C,className:"primaryText postParagraph ".concat(!b&&"disabled"),id:"short_info",children:s.short_info}),Object(x.jsx)("h3",{className:"primaryText",children:"Description"}),Object(x.jsx)("div",{contentEditable:b,suppressContentEditableWarning:!0,onBlur:C,className:"primaryText postParagraph ".concat(!b&&"disabled"),id:"description",children:s.description}),Object(x.jsxs)("div",{className:"postActionsContainer",children:[Object(x.jsx)(l.b,{to:"/firefighter-blog",children:Object(x.jsx)("div",{className:"button mr-1",children:"Go Back"})}),b&&Object(x.jsx)("div",{className:"button",onClick:function(e){e.preventDefault(),h.a.put("https://firefighter-2376.instashop.ae/api/landmarks/".concat(y),{title:s.title,short_info:s.short_info,description:s.description},{headers:{"x-sessionToken":o["user-token"].sessionToken}}).then((function(e){m({message:e.data.message,color:"success"})})).catch((function(e){400===e.response.status?(console.log(e.response.data),m({message:e.response.data.message,color:"fail"})):401===e.response.status?(console.log("Missing or invalid session token"),m({message:"Missing or invalid session token",color:"fail"})):404===e.response.status&&(console.log("Object not found"),m({message:"Object not found",color:"fail"}))}))},children:"Submit Changes"})]})]})]})})]})};var F=function(){var e=Object(c.useState)({username:"",password:""}),t=Object(d.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(void 0),o=Object(d.a)(r,2),a=o[0],i=o[1],l=Object(g.a)(["user-token"]),j=Object(d.a)(l,2),b=j[0],u=j[1];function f(e){e.preventDefault(),n(Object(w.a)(Object(w.a)({},s),{},Object(k.a)({},e.target.name,e.target.value)))}return Object(c.useEffect)((function(){b.hasOwnProperty("user-token")&&(window.location.href="/firefighter-blog")}),[b]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsxs)("div",{className:"loginContainer",children:[Object(x.jsx)("h1",{className:"centerText primaryText",children:"Log in"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Username"}),Object(x.jsx)("input",{type:"username",name:"username",onChange:f})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",onChange:f})]}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"button",onClick:function(e){e.preventDefault(),h.a.post("https://firefighter-2376.instashop.ae/api/users/login",{username:s.username,password:s.password}).then((function(e){console.log(e),u("user-token",e.data,{path:"/"})})).catch((function(e){400===e.response.status?i("Invalid username or password"):i("Internal error - Check back later")}))},children:"Log in"})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"loginErrorMessage ".concat(void 0!==a&&"enter"),children:a})})]})};var E=function(){return Object(x.jsx)("div",{className:"footer",children:Object(x.jsxs)("p",{className:"footerText",children:["Made by ",Object(x.jsx)("a",{href:"https://github.com/Kinigopoulos",target:"_blank",rel:"noreferrer",children:"@kinigopoulos"})]})})},T=s(65);var I=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"page",children:Object(x.jsx)(T.a,{children:Object(x.jsx)(l.a,{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",component:y}),Object(x.jsx)(j.a,{exact:!0,path:"/firefighter-blog",component:y}),Object(x.jsx)(j.a,{exact:!0,path:"/firefighter-blog/post/:id",component:C}),Object(x.jsx)(j.a,{exact:!0,path:"/firefighter-blog/login",component:F})]})})})}),Object(x.jsx)(E,{})]})};i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.21968704.chunk.js.map