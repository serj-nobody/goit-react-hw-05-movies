"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[346],{7346:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t=n(5861),a=n(885),u=n(7757),c=n.n(u),s=n(2791),i=n(6871),o=n(232),p={container:"ReviewsPage_container__YnmPG",reviewItem:"ReviewsPage_reviewItem__kez-t",name:"ReviewsPage_name__NCu2J",loading:"ReviewsPage_loading__Uij8T"},f=n(184),v=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),n=r[0],u=r[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),l=d[0],m=d[1],h=(0,s.useState)(null),w=(0,a.Z)(h,2),x=w[0],g=w[1],_=(0,i.UO)().id;(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,(0,o.tx)(_);case 4:r=e.sent,n=r.results,u(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),g(e.t0);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]);var k=n.map((function(e){var r=e.id,n=e.author,t=e.content;return(0,f.jsxs)("li",{className:p.reviewItem,children:[(0,f.jsx)("h2",{className:p.name,children:n}),(0,f.jsx)("p",{children:t})]},r)}));return(0,f.jsxs)("div",{className:p.container,children:[(0,f.jsx)("ul",{className:p.castList,children:k}),l&&(0,f.jsx)("p",{className:p.loading,children:"...loading"}),x&&(0,f.jsx)("p",{children:"Oops! Loading failed due to an error"})]})}},232:function(e,r,n){n.d(r,{Df:function(){return i},M1:function(){return p},TP:function(){return o},tx:function(){return f},z1:function(){return v}});var t=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"55f4870ea098f37a25ead3578c555cbf"}}),i=function(){var e=(0,t.Z)(u().mark((function e(){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day",{params:{page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:r,page:1}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=346.9eeb8d94.chunk.js.map