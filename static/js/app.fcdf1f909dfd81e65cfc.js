webpackJsonp([1],{MJM6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("0lrd"),n("X0eL");var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-fixed"},[e("nav",{staticClass:"white"},[e("div",{staticClass:"nav-wrapper"},[e("div",{staticClass:"container"},[e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"brand-logo my-style"},[this._v("\n            "+this._s(this.title)+"\n         ")])])],1)])])])},staticRenderFns:[]};var r={name:"App",components:{Navbar:n("VU/8")({data:function(){return{title:"Projektarbeit2"}}},s,!1,function(t){n("MJM6")},"data-v-220edc88",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]};var o=n("VU/8")(r,i,!1,function(t){n("lnq2")},null,null).exports,c=n("/ocq"),l=n("Xxa5"),u=n.n(l),d=n("exGp"),v=n.n(d),p=n("mtWM"),f=n.n(p),m=function(){return f.a.create({baseURL:"https://fast-mesa-23278.herokuapp.com/"})},_=function(){return m().get("api/posts")},h=function(t){return m().get("api/posts/"+t.id)},g={name:"BlogDashboard",data:function(){return{posts:[]}},mounted:function(){this.getPosts()},methods:{getPosts:function(){var t=this;return v()(u.a.mark(function e(){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,a=n.data,t.posts=a.posts;case 5:case"end":return e.stop()}},e,t)}))()}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-dashboard"},[n("div",{staticClass:"row"},t._l(t.posts,function(e){return n("div",{key:e._id,staticClass:"col s12 m4"},[n("div",{staticClass:"card medium"},[n("div",{staticClass:"card-image"},[n("router-link",{attrs:{to:{name:"BlogPost",params:{id:e._id}}}},[n("img",{attrs:{src:e.image_source}})])],1),t._v(" "),n("div",{staticClass:"card-content"},[n("span",{staticClass:"card-title"},[t._v(t._s(t._f("filterTitle")(e.title,50)))]),t._v(" "),n("p",[t._v(t._s(t._f("truncate")(e.content,100,"...")))])])])])}))])},staticRenderFns:[]};var b=n("VU/8")(g,C,!1,function(t){n("OtEh")},"data-v-8787a0aa",null).exports,x={name:"BlogPost",data:function(){return{title:"",content:"",image_source:""}},mounted:function(){this.getPost()},methods:{getPost:function(){var t=this;return v()(u.a.mark(function e(){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({id:t.$route.params.id});case 2:n=e.sent,a=n.data.post,t.title=a.title,t.content=a.content,t.image_source=a.image_source;case 7:case"end":return e.stop()}},e,t)}))()}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-post"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 m12"},[n("div",{staticClass:"card-panel myCard"},[n("div",{staticClass:"thumbnail"},[n("img",{staticClass:"left",attrs:{src:t.image_source}})]),t._v(" "),n("div",{staticClass:"my-right"},[n("h1",{staticClass:"pageTitle"},[t._v(t._s(t.title))]),t._v(" "),n("h2",{staticClass:"pageSubTitle"},[t._v("by Alexander Tampier")]),t._v(" "),n("div",{staticClass:"divider"}),t._v(" "),n("p",[t._v(t._s(t.content))])])])])])])},staticRenderFns:[]};var P=n("VU/8")(x,w,!1,function(t){n("h7aq")},"data-v-0f94dd80",null).exports;a.a.use(c.a);var k=new c.a({mode:"history",routes:[{path:"/",name:"BlogDashBoard",component:b},{path:"/post/:id",name:"BlogPost",component:P}]});a.a.config.productionTip=!1,a.a.filter("truncate",(t,e,n)=>{const a=n||"...",s=document.createElement("div");s.innerHTML=t;const r=s.textContent;return r.length>e?r.slice(0,e)+a:r}),a.a.filter("filterTitle",(t,e)=>{let n="",a=0;const s=document.createElement("div");s.innerHTML=t;const r=s.textContent;return e>0&&r.length>e&&(a=t.indexOf(" "),n=r.slice(0,a)),""!==n?n:r}),new a.a({el:"#app",router:k,components:{App:o},template:"<App/>"})},OtEh:function(t,e){},X0eL:function(t,e){},h7aq:function(t,e){},lnq2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fcdf1f909dfd81e65cfc.js.map