(function(t){function e(e){for(var s,o,i=e[0],c=e[1],d=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0a4971":"897c9375","chunk-2d0c1b59":"e98f90c7","chunk-2d0d7a77":"777300c4","chunk-2d217e3a":"74b086b9","chunk-43839276":"7a18aa04","chunk-2d0e4aea":"d19c5874","chunk-2d21e30d":"bdacbb67","chunk-2d0f1594":"f121ca3a"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var d=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,a[1](d)}n[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=d;r.push(["1b7c","chunk-vendors"]),a()})({"1b7c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},n=[],r=a("ba4c"),o=a.n(r),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny togler10"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{staticClass:"logotype",on:{click:function(e){return t.goto("/")}}})]),a("div",{staticClass:"rghter"},[t.signed?[a("a",{on:{click:function(e){return t.open("create")}}},[t._v(" Create")]),t._v(" • ")]:t._e(),a("a",{on:{click:function(e){return t.open("search")}}},[t._v(" Search")]),t._v(" • "),a("a",{on:{click:function(e){return t.open("goto")}}},[t._v(" GoTo")])],2)])]),a("div",{staticClass:"postbody dark togler01"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{staticClass:"logotype",on:{click:function(e){return t.goto("/")}}})]),a("div",{staticClass:"rghter"},[t.signed?[a("a",{on:{click:function(e){return t.open("create")}}},[t._v(" Create")]),t._v(" • ")]:t._e(),a("a",{on:{click:function(e){return t.open("search")}}},[t._v(" Search")]),t._v(" • "),a("a",{on:{click:function(e){return t.open("goto")}}},[t._v(" GoTo")])],2)])]),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("Widgets"),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("router-view")],1)])],1)])])])},c=[];const d=()=>a.e("chunk-2d0a4971").then(a.bind(null,"06a6")),l=()=>a.e("chunk-2d0c1b59").then(a.bind(null,"46cd")),u=()=>Promise.all([a.e("chunk-43839276"),a.e("chunk-2d21e30d")]).then(a.bind(null,"d506")),p=()=>a.e("chunk-2d217e3a").then(a.bind(null,"c93a")),m={create:l,goto:u,search:p};var h={components:{Widgets:d},computed:{signed(){return this.$store.getters["token/signed"]}},watch:{$route:"stash"},methods:{goto(t){this.$store.dispatch("widgets/notify",{status:"going"}).then(()=>this.$router.push(t).catch(t=>{})).then(()=>this.$store.dispatch("widgets/stash",{}))},open(t){this.$store.dispatch("widgets/open",{widget:m[t]})},stash(){this.$store.dispatch("widgets/stash",{})}}},g=h,f=a("2877"),v=Object(f["a"])(g,i,c,!1,null,null,null),b=v.exports,k=a("916c"),y=a.n(k),w=a("bc3a"),j=a.n(w);const _=[{title:"client error"}],C={all:{}},O={},I={majig(t,e){o.a.set(t.all,e.id,e),o.a.set(t.all,e.path,e)},remove(t,e){o.a.set(t.all,e.id,void 0),o.a.set(t.all,e.path,void 0)},clear(t,e){t.all={}}},x={async load({commit:t},e){return j.a.get("/apis/majig",{params:{majigId:e.majigId,path:e.path}}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:_})},async add({commit:t},e){return j.a.post("/apis/majig",{path:e.path,tags:e.tags,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:_})},async update({commit:t},e){return j.a.put("/apis/majig/"+e.majigId,{path:e.path,tags:e.tags,markdown:e.markdown,published:e.published}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:_})},async remove({commit:t},e){return j.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("remove",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:_})},async clear({commit:t},e){t("clear",e)}};var P={namespaced:!0,state:C,getters:O,mutations:I,actions:x};const S=[{title:"client error"}],$={all:[],count:0},E={},T={set(t,e){t.count=e.count,t.all=e.majigs},update(t,e){const a=t.all.findIndex(t=>t.id===e.majig.id);t.all.splice(a,1,e.majig)},remove(t,e){const a=t.all.findIndex(t=>t.id===e.majig.id);t.all.splice(a,1)},clear(t,e){t.count=0,t.all=[]}},J={async load({commit:t,state:e},a){return j.a.get("/apis/majigs",{params:{flags:a.flags,filter:a.filter,limit:a.limit,skip:a.skip}}).then(e=>(t("set",{count:e.data.data.count,majigs:e.data.data.majigs}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:S})},async search({commit:t,state:e},a){return j.a.get("/apis/majigs",{params:{terms:a.terms,limit:a.limit}}).then(t=>t.data.data.majigs).catch(t=>{throw t.response?t.response.data.errors:S})},async update({commit:t},e){return j.a.put("/apis/majig/"+e.majigId,{path:e.path,tags:e.tags,markdown:e.markdown,published:e.published}).then(e=>(t("update",{majig:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:S})},async remove({commit:t},e){return j.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("remove",{majig:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:S})},async clear({commit:t},e){t("clear",e)}};var M={namespaced:!0,state:$,getters:E,mutations:T,actions:J};const B=[{title:"client error"}],N=window.localStorage,z=j.a.defaults.headers,A={slug:""},G={signed(t,e){return Boolean(t.slug)}},L={slug(t,e){t.slug=e.slug,z.common["x-token"]=e.slug,N.setItem("token/slug",JSON.stringify(t.slug))},clear(t,e){t.slug="",delete z.common["x-token"],N.removeItem("token/slug")}},W={async sign({commit:t},e){return j.a.put("/apis/token",{username:e.username,password:e.password}).then(e=>{t("slug",e.data.data)}).catch(t=>{throw t.response?t.response.data.errors:B})},async clear({commit:t},e){t("clear",e)}};let q=N.getItem("token/slug");q&&(q=JSON.parse(q)),q&&L.slug(A,{slug:q});var D={namespaced:!0,state:A,getters:G,mutations:L,actions:W},F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("Null")])])])])}],K={data(){return{}}},Q=K,R=Object(f["a"])(Q,F,H,!1,null,null,null),U=R.exports;const V={status:"",widget:U,opened:!1,stuck:!1},X={},Y={status(t,e){t.status=e},widget(t,e){t.widget=e},opened(t,e){t.opened=e},stuck(t,e){t.stuck=e}},Z={async notify({commit:t},e){t("status",e.status)},async open({commit:t,state:e},a){t("status",""),!a.widget||e.opened&&e.widget===a.widget?(t("opened",!1),t("stuck",!1),t("widget",U)):(t("opened",!0),t("stuck",!0),t("widget",a.widget))},async stash({commit:t,state:e},a){t("status",""),e.opened||e.stuck?t("stuck",!0):t("stuck",!1),t("opened",!1)},async close({commit:t},e){t("status",""),t("opened",!1),t("stuck",!1),t("widget",U)}};var tt={namespaced:!0,state:V,getters:X,mutations:Y,actions:Z};o.a.use(y.a);var et=new y.a.Store({modules:{majig:P,majigs:M,token:D,widgets:tt}}),at=a("8c4f");const st=()=>Promise.all([a.e("chunk-43839276"),a.e("chunk-2d0e4aea")]).then(a.bind(null,"90eb")),nt=()=>a.e("chunk-2d0d7a77").then(a.bind(null,"7877"));o.a.use(at["a"]);var rt=new at["a"]({routes:[{path:"/",name:"majigs",component:nt},{path:"//:flags*",name:"submajig",component:nt,props:t=>({flags:t.params.flags?t.params.flags.split("/").filter(t=>Boolean(t)):[]})},{path:"///:majigId",name:"supmajig",component:st,props:t=>({majigId:t.params.majigId})},{path:"*",name:"majig",component:st}],scrollBehavior(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}}});o.a.config.productionTip=!1;var ot=new o.a({el:"#app",store:et,router:rt,template:"<app />",components:{App:b}}),it=ot,ct=(a("ce36"),Object(f["a"])(it,s,n,!1,null,null,null));e["default"]=ct.exports},3267:function(t,e,a){},ce36:function(t,e,a){"use strict";var s=a("3267"),n=a.n(s);n.a}});
//# sourceMappingURL=app.065d4270.js.map