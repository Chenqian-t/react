(this.webpackJsonpreact01=this.webpackJsonpreact01||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},136:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);n(0);var r=n(28),a=n.n(r),o=(n(128),n(18)),c=(n(129),n(130),n(10)),s=function(e){var t=e.location,n=e.config,r=t.pathname,a=Boolean(localStorage.getItem("__token__")),s=n.find((function(e){return e.path===r}));if(s&&!s.auth&&!a){var i=s.component,u=s.redirect;return u?Object(c.jsx)(o.a,{to:u}):Object(c.jsx)(o.b,{exact:!0,path:r,component:i})}if(a){if("/login"===r)return Object(c.jsx)(o.a,{to:"/"});if(s){var l=s.component,j=s.redirect;return j?Object(c.jsx)(o.a,{to:j}):Object(c.jsx)(o.b,{exact:!0,path:r,component:l})}return Object(c.jsx)(o.a,{to:"/notfound"})}return s&&s.auth?Object(c.jsx)(o.a,{to:"/login"}):Object(c.jsx)(o.a,{to:"/notfound"})},i=n(37),u=n.n(i),l=n(47),j=n(34),f=(n(136),n(226)),b=n(225),d=n(227),p=n(119),O=n(42),h="FETCH_USER",m="FETCH_USER_SUCC",g="FETCH_USER_FAIL",x="LOGOUT",_=n(110),v=n(111),w=n(112),y={base_url:"https://www.fastmock.site/mock/6dd0114b612f099fe6bac00dca45863c/react/api/"},I=y,L=n.n(w).a.create({baseURL:I.base_url,timeout:2e4});L.interceptors.request.use((function(e){return e.headers.token=sessionStorage.getItem("token"),e}),(function(e){return Promise.reject(e)})),L.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var S=L,k=function(){function e(){Object(_.a)(this,e)}return Object(v.a)(e,null,[{key:"login",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S({url:"/login",method:"POST",data:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),C=function(e){var t=e.username,n=e.password;return function(){var e=Object(l.a)(u.a.mark((function e(r){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(F()),e.next=3,k.login({username:t,password:n});case 3:0===(a=e.sent).errcode?r(E(a.data)):r(N());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){return{type:h,isLoading:!0}},E=function(e){return{type:m,isLoading:!1,data:e}},N=function(){return{type:g,isLoading:!1}},P=[{path:"/",redirect:"/home",auth:!0},{path:"/home",component:function(){var e=Object(O.c)((function(e){return Object(j.a)({},e.user)}));return Object(c.jsx)("div",{children:JSON.stringify(e)})},auth:!0},{path:"/login",component:function(){var e=Object(O.c)((function(e){return Object(j.a)({},e.user)})),t=Object(O.b)(),n=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(C(n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return e.isLogin?Object(c.jsx)(o.a,{to:"/home"}):Object(c.jsx)("div",{className:"login",children:Object(c.jsx)("div",{className:"login_box center_box",children:Object(c.jsx)(f.a,{title:"\u767b\u5f55",hoverable:!0,style:{height:"100%"},children:Object(c.jsxs)(b.a,{name:"basic",labelCol:{span:6},wrapperCol:{span:16},onFinish:n,onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(c.jsx)(b.a.Item,{label:"\u8d26\u53f7",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(c.jsx)(d.a,{})}),Object(c.jsx)(b.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(c.jsx)(d.a.Password,{})}),Object(c.jsx)(b.a.Item,{wrapperCol:{offset:8,span:16},children:Object(c.jsx)(p.a,{type:"primary",htmlType:"submit",loading:e.isLoading,children:"\u767b\u5f55"})})]})})})})}},{path:"/notfound",component:function(){return Object(c.jsx)("div",{children:"NotFound"})}}],T=function(){return Object(c.jsx)(o.d,{children:Object(c.jsx)(s,{config:P})})},U=n(52),J=n(55),R={userInfo:JSON.parse(localStorage.getItem("__userinfo__")||"{}"),isLogin:Boolean(localStorage.getItem("__token__")),isLoading:!1},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case m:return console.log(t),localStorage.setItem("__token__",!0),localStorage.setItem("__userinfo__",JSON.stringify(t.data.userInfo)),{userInfo:t.data.userInfo,isLoading:!1,isLogin:!0};case g:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1});case x:return localStorage.removeItem("__token__"),Object(j.a)(Object(j.a)({},e),{},{userInfo:{},isLogin:!1});default:return e}},B=Object(J.b)({user:q}),H=n(118),A=Object(J.c)(B,Object(J.a)(H.a));a.a.render(Object(c.jsx)(O.a,{store:A,children:Object(c.jsx)(U.a,{children:Object(c.jsx)(T,{})})}),document.getElementById("root"))}},[[221,1,2]]]);
//# sourceMappingURL=main.648bbd4b.chunk.js.map