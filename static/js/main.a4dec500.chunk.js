(this["webpackJsonpmy-chatapp"]=this["webpackJsonpmy-chatapp"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var o=a(1),s=a(0),c=a.n(s),r=a(29),n=a.n(r),l=(a(37),a(4)),i=a(9),u=a(2),d=(a(38),[{id:1,username:"milancemkc",password:"mkc"},{id:2,username:"jocara10",password:"spartacus"},{id:3,username:"pekula96",password:"kockazenepice"},{id:4,username:"suka99",password:"ooomajstore"},{id:5,username:"pero96",password:"mojpero"}]);function g(e){var t=e.usersArray,a=e.setUser,c=Object(s.useState)(""),r=Object(l.a)(c,2),n=r[0],i=r[1],d=Object(s.useState)(""),g=Object(l.a)(d,2),j=g[0],p=g[1],m=Object(u.f)();return Object(s.useEffect)((function(){}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",placeholder:"username",value:n,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("input",{type:"password",placeholder:"password",value:j,onChange:function(e){p(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){console.log(n,j);var e=!1;t.forEach((function(t){t.username===n.trim()&&t.password===j.trim()&&(console.log("uspesno"),e=!0,localStorage.setItem("id",t.id.toString()),localStorage.setItem("username",t.username),localStorage.setItem("password",t.password),localStorage.setItem("isLoged","true"),a({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:!0}),setTimeout((function(){m.push("home")}),150))})),e||console.log("neuspesno")},children:"Uloguj se"}),Object(o.jsx)("button",{onClick:function(){localStorage.setItem("username",null),localStorage.setItem("password",null),localStorage.setItem("id",null),localStorage.setItem("isLoged",null),a({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:null})},children:"Set to null"})]})}var j=a(62);function p(e){var t=e.setUser,a=Object(u.f)();return Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){localStorage.setItem("username",null),localStorage.setItem("password",null),localStorage.setItem("id",null),localStorage.setItem("isLoged",null),t({id:null,username:null,password:null,isLoged:null}),a.push("/login")},children:"LogOut"})})}function m(e){var t=e.usersArray,a=e.setUser,c=Object(s.useState)({}),r=Object(l.a)(c,2),n=r[0];r[1];return Object(s.useEffect)((function(){a({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:localStorage.getItem("isLoged")})}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{setUser:a}),null!==localStorage.getItem("isLoged")&&"null"!==localStorage.getItem("isLoged")?Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)("button",{onClick:function(){console.log(localStorage.getItem("isLoged")),console.log(n.isLoged)},children:"DUGME"}),Object(o.jsxs)("div",{children:[" ",t.map((function(e){return Object(o.jsxs)("p",{children:["Idi na Chat sa: ",Object(o.jsx)(i.b,{to:"chat/".concat(e.id),children:e.username},Object(j.a)())," "]},Object(j.a)())}))," "]})," "]}):"adfdfasdfas"]})}var b=a(14),O=a(11),h=a.n(O),f=function(e){return h.a.get("https://script.google.com/macros/s/AKfycbyaPSgO1KOnrE1vPswfyrByQwhcMtJH5t8VfErd_pc3viSAkU4/exec?id=".concat(e+1))},S=function(e,t){return h.a.post("https://script.google.com/macros/s/AKfycbySS5xyOi8U9KApKftx72Hm5Uy0FcOt3mG6zWKKQ-Ti9OBIhj8/exec?id=".concat(e,"&broj=").concat(t))};function x(e){return e.length<=200&&e.length>0&&!e.includes(";")?[!0,"poruka odgovara formatu"]:e.length>200?[!1,"poruka ima preko 200 karaktera "]:e.length<=0?[!1,"ne mozete poslati praznu poruku"]:e.includes(";")?[!1,"zabranjeno je koristiti neki od karatera iz vase poruke"]:void 0}function I(e){var t=e.setUserApp,a=Object(s.useState)(Object(u.g)().id),c=Object(l.a)(a,1)[0],r=Object(s.useState)({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:localStorage.getItem("isLoged")}),n=Object(l.a)(r,1)[0],i=Object(s.useState)([]),d=Object(l.a)(i,2),g=d[0],m=d[1],O=Object(s.useState)([]),I=Object(l.a)(O,2),v=I[0],w=I[1],k=Object(s.useState)([]),y=Object(l.a)(k,2),U=y[0],L=y[1],P=Object(s.useState)(""),A=Object(l.a)(P,2),K=A[0],E=A[1];window.onbeforeunload=function(){S(n.id,Number(localStorage.getItem("redZaUpis")))},Object(s.useEffect)((function(){(function(e){return h.a.get("https://script.google.com/macros/s/AKfycbySS5xyOi8U9KApKftx72Hm5Uy0FcOt3mG6zWKKQ-Ti9OBIhj8/exec?id=".concat(e))})(n.id).then((function(e){console.log(e.data),localStorage.setItem("redZaUpis",e.data)})),f(Number(c)).then((function(e){var t=e.data.map((function(e){return{id:e.split(";")[0],idPoslao:e.split(";")[1],poruka:e.split(";")[2],date:Date.parse(e.split(";")[3]),stringDate:e.split(";")[3]}}));w(t)})),f(Number(n.id)).then((function(e){var t=e.data.map((function(e){return{id:e.split(";")[0],idPoslao:e.split(";")[1],poruka:e.split(";")[2],date:Date.parse(e.split(";")[3]),stringDate:e.split(";")[3]}}));console.log(t),m(t)}));var e=setInterval((function(){f(Number(c)).then((function(e){var t=e.data.map((function(e){return{id:e.split(";")[0],idPoslao:e.split(";")[1],poruka:e.split(";")[2],date:Date.parse(e.split(";")[3]),stringDate:e.split(";")[3]}}));w(t)}))}),2e3);return function(){clearInterval(e),console.log("odjavaaaaaaaaaa"+localStorage.getItem("redZaUpis")),S(n.id,Number(localStorage.getItem("redZaUpis")))}}),[]),Object(s.useEffect)((function(){var e=[];e=n.id!==c?[].concat(Object(b.a)(v.filter((function(e){return e.idPoslao===n.id}))),Object(b.a)(g.filter((function(e){return e.idPoslao===c})))):Object(b.a)(g.filter((function(e){return e.idPoslao===n.id}))),L(e),console.log(U)}),[v,g]);var D=function(){if(x(K)[0]){!function(e,t,a,o){h.a.post("https://script.google.com/macros/s/AKfycbyaPSgO1KOnrE1vPswfyrByQwhcMtJH5t8VfErd_pc3viSAkU4/exec?poruka=".concat(e,"&id=").concat(t,"&idPoslao=").concat(a,"&redZaUpis=").concat(o))}(K,n.id,c,localStorage.getItem("redZaUpis")),localStorage.setItem("redZaUpis",Number(localStorage.getItem("redZaUpis"))+1);var e=Object(b.a)(g);e.push({id:n.id,idPoslao:c,poruka:K,date:Date.parse((new Date).toString()),stringDate:(new Date).toString()}),m(e),E("")}else alert(x(K)[1])};return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){console.log(localStorage.getItem("redZaUpis"))},children:"DUGME"}),Object(o.jsx)(p,{setUser:t}),Object(o.jsx)("h1",{children:"chat sa korisnikom sa id-om: "+c}),Object(o.jsx)("input",{type:"text",value:K,placeholder:"poruka...",onChange:function(e){E(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&D()}}),U.sort((function(e,t){return e.date-t.date})).map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:e.poruka+" | "+e.id+"   | "},Object(j.a)())},Object(j.a)())}))]})}var v=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:localStorage.getItem("isLoged")}),n=Object(l.a)(r,2),j=n[0],p=n[1];return Object(s.useEffect)((function(){p({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:localStorage.getItem("isLoged")}),c(d)}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Page 11111111111111111"}),Object(o.jsx)(i.a,{children:Object(o.jsxs)(u.c,{children:[Object(o.jsxs)(u.a,{exact:!0,path:"/home",children:["null"!==j.isLoged&&null!==j.isLoged?Object(o.jsx)(m,{usersArray:a,setUser:p}):Object(o.jsx)("p",{children:"nisi ulogovan"}),Object(o.jsx)("h1",{children:"Page 3333333333"})]}),Object(o.jsxs)(u.a,{exact:!0,path:"/",children:[Object(o.jsx)("h1",{children:"Page 3333333333"}),Object(o.jsx)("button",{onClick:function(){console.log(a)},children:"abcdefg"})]}),Object(o.jsxs)(u.a,{exact:!0,path:"/login",children:[Object(o.jsx)(g,{usersArray:a,setUser:p}),Object(o.jsx)("h1",{children:"Page 3333333333"})]}),Object(o.jsx)(u.a,{exact:!0,path:"/register",children:Object(o.jsx)("h1",{children:"Page 3333333333"})}),Object(o.jsxs)(u.a,{exact:!0,path:"/chat/:id",children:[Object(o.jsx)("h1",{children:"Page 3333333333"}),"null"!==j.isLoged&&null!==j.isLoged?Object(o.jsx)(I,{setUserApp:p}):Object(o.jsx)("p",{children:"nisi ulogovan"})]})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.a4dec500.chunk.js.map