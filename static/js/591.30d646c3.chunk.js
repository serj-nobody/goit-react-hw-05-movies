"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[591],{3591:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(5861),a=r(885),s=r(7757),c=r.n(s),u=r(2791),i=r(6871),o=r(232),p="CastPage_container__rbsf6",f="CastPage_castList__hf-hk",l="CastPage_castItem__lk69u",h="CastPage_castPhoto__gR7D1",v="CastPage_name__h9vn+",d="CastPage_text__PjoiI",m="CastPage_character__5rPGR",_="CastPage_loading__cEUxs",g=r(184),x=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],x=(0,u.useState)(!1),w=(0,a.Z)(x,2),k=w[0],b=w[1],P=(0,u.useState)(null),j=(0,a.Z)(P,2),C=j[0],y=j[1],Z=(0,i.UO)().id;(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,o.M1)(Z);case 4:t=e.sent,r=t.cast,s(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),y(e.t0);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]);var N=r.map((function(e){var t=e.id,r=e.profile_path,n=e.name,a=e.character;return(0,g.jsxs)("li",{className:l,children:[(0,g.jsx)("img",{className:h,src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image",alt:""}),(0,g.jsx)("h2",{className:v,children:n}),(0,g.jsxs)("p",{className:d,children:["Character: ",(0,g.jsx)("span",{className:m,children:a})]})]},t)}));return(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("ul",{className:f,children:N}),k&&(0,g.jsx)("p",{className:_,children:"...loading"}),C&&(0,g.jsx)("p",{children:"Oops! Loading failed due to an error"})]})}},232:function(e,t,r){r.d(t,{Df:function(){return i},M1:function(){return p},TP:function(){return o},tx:function(){return f},z1:function(){return l}});var n=r(5861),a=r(7757),s=r.n(a),c=r(4569),u=r.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"55f4870ea098f37a25ead3578c555cbf"}}),i=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day",{params:{page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:t,page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=591.30d646c3.chunk.js.map