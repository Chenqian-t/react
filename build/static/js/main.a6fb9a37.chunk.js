(this.webpackJsonpreact01=this.webpackJsonpreact01||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},149:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);n(0);var r=n(24),a=n.n(r),o=(n(141),n(19)),c=(n(142),n(143),n(34)),s=n(39),i=n(13),u=function(e){var t=e.location,n=e.config,r=t.pathname,a=Object(s.c)((function(e){return Object(c.a)({},e.user)})).isLogin,u=n.find((function(e){return e.path===r}));if(u&&!u.auth&&!a){var j=u.component,l=u.redirect;return l?Object(i.jsx)(o.a,{to:l}):Object(i.jsx)(o.b,{exact:!0,path:r,component:j})}if(a){if("/login"===r)return Object(i.jsx)(o.a,{to:"/"});if(u){var b=u.component,f=u.redirect;return f?Object(i.jsx)(o.a,{to:f}):Object(i.jsx)(o.b,{exact:!0,path:r,component:b})}return Object(i.jsx)(o.a,{to:"/notfound"})}return u&&u.auth?Object(i.jsx)(o.a,{to:"/login"}):Object(i.jsx)(o.a,{to:"/notfound"})},j=n(40),l=n.n(j),b=n(52),f=(n(149),n(236)),d=n(237),p=n(238),O=n(130),h="FETCH_USER",m="FETCH_USER_SUCC",g="FETCH_USER_FAIL",x="LOGOUT",_=n(121),v=n(122),w=n(123),y={base_url:"https://www.fastmock.site/mock/6dd0114b612f099fe6bac00dca45863c/react/api/"},I=y,L=n.n(w).a.create({baseURL:I.base_url,timeout:2e4});L.interceptors.request.use((function(e){return e.headers.token=sessionStorage.getItem("token"),e}),(function(e){return Promise.reject(e)})),L.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var S=L,k=function(){function e(){Object(_.a)(this,e)}return Object(v.a)(e,null,[{key:"login",value:function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S({url:"/login",method:"POST",data:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),C=n(132),F=function(e){var t=e.username,n=e.password;return function(){var e=Object(b.a)(l.a.mark((function e(r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(E()),e.next=3,k.login({username:t,password:n});case 3:0===(a=e.sent).errcode?(C.b.success("\u767b\u9646\u6210\u529f\uff01"),r(N(a.data))):(C.b.error("\u767b\u9646\u5931\u8d25\uff01"),r(P()));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){return{type:h,isLoading:!0}},N=function(e){return{type:m,isLoading:!1,data:e}},P=function(){return{type:g,isLoading:!1}},T=[{path:"/",redirect:"/home",auth:!0},{path:"/home",component:function(){var e=Object(s.c)((function(e){return Object(c.a)({},e.user)}));return Object(i.jsx)("div",{children:JSON.stringify(e)})},auth:!0},{path:"/login",component:function(){var e=Object(s.c)((function(e){return Object(c.a)({},e.user)})),t=Object(s.b)(),n=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(F(n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"login",children:Object(i.jsx)("div",{className:"login_box center_box",children:Object(i.jsx)(f.a,{title:"\u767b\u5f55",hoverable:!0,style:{height:"100%"},children:Object(i.jsxs)(d.a,{name:"basic",labelCol:{span:6},wrapperCol:{span:16},onFinish:n,onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(i.jsx)(d.a.Item,{label:"\u8d26\u53f7",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(i.jsx)(p.a,{})}),Object(i.jsx)(d.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(i.jsx)(p.a.Password,{})}),Object(i.jsx)(d.a.Item,{wrapperCol:{offset:8,span:16},children:Object(i.jsx)(O.a,{type:"primary",htmlType:"submit",loading:e.isLoading,children:"\u767b\u5f55"})})]})})})})}},{path:"/notfound",component:function(){return Object(i.jsx)("div",{children:"NotFound"})}}],U=function(){return Object(i.jsx)(o.d,{children:Object(i.jsx)(u,{config:T})})},J=n(72),R=n(65),q={userInfo:JSON.parse(localStorage.getItem("__userinfo__")||"{}"),isLogin:Boolean(localStorage.getItem("__token__")),isLoading:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!0});case m:return console.log(t),localStorage.setItem("__token__",!0),localStorage.setItem("__userinfo__",JSON.stringify(t.data.userInfo)),{userInfo:t.data.userInfo,isLoading:!1,isLogin:!0};case g:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!1});case x:return localStorage.removeItem("__token__"),Object(c.a)(Object(c.a)({},e),{},{userInfo:{},isLogin:!1});default:return e}},B=Object(R.b)({user:H}),A=n(129),G=Object(R.c)(B,Object(R.a)(A.a));a.a.render(Object(i.jsx)(s.a,{store:G,children:Object(i.jsx)(J.a,{children:Object(i.jsx)(U,{})})}),document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.a6fb9a37.chunk.js.map