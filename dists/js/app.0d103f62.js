(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d7a77":"2159442b","chunk-2d0e4aea":"6f9cd954"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var u=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;n.push(["1b7c","chunk-vendors"]),a()})({"1b7c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},r=[],n=a("ba4c"),o=a.n(n),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny togler10"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.goto("/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[t.signed?[a("a",{on:{click:function(e){return t.open("create")}}},[t._v(" Create")]),t._v(" • ")]:t._e(),a("a",{on:{click:function(e){return t.open("search")}}},[t._v(" Search")]),t._v(" • "),a("a",{on:{click:function(e){return t.open("goto")}}},[t._v(" GoTo")])],2)])]),a("div",{staticClass:"postbody dark togler01"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.goto("/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[t.signed?[a("a",{on:{click:function(e){return t.open("create")}}},[t._v(" Create")]),t._v(" • ")]:t._e(),a("a",{on:{click:function(e){return t.open("search")}}},[t._v(" Search")]),t._v(" • "),a("a",{on:{click:function(e){return t.open("goto")}}},[t._v(" GoTo")])],2)])]),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("Utils"),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("router-view")],1)])],1)])])])},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parabody left",class:{open:t.opened,sticky:t.stuck}},[a("div",{staticClass:"prebody"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"rghter full"},[a("a",{staticClass:"material-icons full",on:{click:t.close}},[t._v("chevron_left")])])])]),a(t.util,{tag:"component"})],1)},l=[],d={computed:{status(){return this.$store.state.utils.status},util(){return this.$store.state.utils.util},opened(){return this.$store.state.utils.opened},stuck(){return this.$store.state.utils.stuck}},methods:{close(t){this.$store.dispatch("utils/close",{})}}},p=d,h=a("2877"),m=Object(h["a"])(p,u,l,!1,null,null,null),g=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("Create")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.create()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"path",inputmode:"url",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],attrs:{type:"text",placeholder:"tags",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.tags},on:{input:function(e){e.target.composing||(t.tags=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"Create"}})]),a("h2",[t._v("Markdown")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.create()}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})])])])])},f=[],y={data(){return{path:"",tags:"",markdown:""}},methods:{create(){this.path.length&&"/"!==this.path[0]&&(this.path="/"+this.path),this.$store.dispatch("utils/notify",{status:"creating"}).then(()=>this.$store.dispatch("majig/add",{path:this.path,tags:this.tags,markdown:this.markdown}).catch(t=>{throw t[0]})).then(t=>t.path?this.$router.push(t.path).catch(t=>{}):t).then(t=>{t.path||this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).then(()=>(this.path="",this.tags="",this.markdown="",this.$store.dispatch("utils/stash",{}))).catch(t=>{this.$store.dispatch("utils/notify",{status:t.title})})}}},b=y,w=Object(h["a"])(b,v,f,!1,null,null,null),j=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[t.signed?a("div",{staticClass:"postbody"},[a("div",{staticClass:"horzer"},[a("a",{staticClass:"full",on:{click:function(e){return t.unsign()}}},[t._v(" SignOut ")])])]):t._e(),t.signed?t._e():a("div",{staticClass:"postbody former"},[a("div",{staticClass:"bodyer para"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.sign()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"username",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"SignIn"}})])])]),a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("GoTo")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.goto()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"path",inputmode:"url",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"GoTo"}})]),a("h1",[t._v("Jump"),t.signed?a("span",[a("a",{attrs:{href:"#/menu/published"}},[t._v(" Published")]),t._v(" • "),a("a",{attrs:{href:"#/menu/concealed"}},[t._v(" Concealed")])]):t._e()]),a("div",{domProps:{innerHTML:t._s(t.markeddown)}})])])])])},_=[],$=a("e0c1"),C=a.n($);const x=new C.a.Renderer,O={link:x.link.bind(x)};x.link=(t,e,a)=>("/"===t[0]?t="#"+t:"#"!==t[0]&&(t="#/"+t),O.link(t,e,a));var P={data(){return{path:"",username:"",password:""}},created(){this.load()},watch:{signed:"load"},computed:{signed(){return this.$store.getters["token/signed"]},menu(){return this.signed?"/menu/concealed":"/menu/published"},majig(){const t=this.$store.state.majig.all;return t[this.menu]||{}},markeddown(){return C()(this.majig.markdown||"- [root](/)",{renderer:x})}},methods:{goto(){"/"!==this.path[0]&&(this.path="/"+this.path),this.$store.dispatch("utils/notify",{status:"going"}).then(()=>this.$router.push(this.path).catch(t=>{})).then(()=>(this.path="",this.$store.dispatch("utils/stash",{})))},load(){return this.$store.dispatch("majig/load",{path:this.menu}).then(t=>{}).catch(t=>{})},sign(){this.$store.dispatch("utils/notify",{status:"signing"}).then(()=>this.$store.dispatch("token/sign",{username:this.username,password:this.password}).catch(t=>{throw t[0]})).then(()=>(this.password="",this.$store.dispatch("utils/stash",{}))).catch(t=>{this.password="",this.$store.dispatch("utils/notify",{status:t.title})})},unsign(){this.$store.dispatch("majig/clear",{}).then(()=>this.$store.dispatch("majigs/clear",{})).then(()=>this.$store.dispatch("token/clear",{})).then(()=>this.$store.dispatch("utils/stash",{})).catch(t=>{this.$store.dispatch("utils/notify",{status:t.title})})}}},I=P,S=Object(h["a"])(I,k,_,!1,null,null,null),E=S.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("Search")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.search()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.terms,expression:"terms"}],attrs:{type:"text",placeholder:"terms && tags",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.terms},on:{input:function(e){e.target.composing||(t.terms=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"Search"}})]),a("h2",[t._v("Results "),a("span",[t._v(t._s(t.majigs.length))])]),a("ul",[t.majigs.length?t._e():a("li",[a("div",[t._v("no results")])]),t._l(t.majigs,(function(e){return a("li",[a("a",{on:{click:function(a){return t.goto(e)}}},[a("span",[t._v(" "+t._s(t._f("previewed")(e.markdown,t.termed))+" ")]),a("h5",[t._v(t._s(e.path))])])])}))],2)])])])},N=[],T={filters:{previewed:(t,e)=>{const a=90,s=t.indexOf(e);let r=a-e.length;return r=Math.floor(r/2),t.substring(s-r,s+e.length+r)}},data(){return{terms:"",termed:"",majigs:[]}},methods:{goto(t){this.$store.dispatch("utils/notify",{status:"going"}).then(()=>{if(t.path)return this.$router.push(t.path).catch(t=>{})}).then(()=>{t.path||this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).then(()=>this.$store.dispatch("utils/stash",{}))},search(){this.$store.dispatch("utils/notify",{status:"searching"}).then(()=>this.$store.dispatch("majigs/search",{terms:this.terms}).catch(t=>{throw t[0]})).then(t=>(this.termed=this.terms,this.majigs=t,this.$store.dispatch("utils/notify",{status:""}))).catch(t=>{this.$store.dispatch("utils/notify",{status:t.title})})}}},M=T,D=Object(h["a"])(M,z,N,!1,null,null,null),J=D.exports;const G={create:j,goto:E,search:J};var B={components:{Utils:g},computed:{signed(){return this.$store.getters["token/signed"]}},watch:{$route:"stash"},methods:{goto(t){this.$store.dispatch("utils/notify",{status:"going"}).then(()=>this.$router.push(t).catch(t=>{})).then(()=>this.$store.dispatch("utils/stash",{}))},open(t){this.$store.dispatch("utils/open",{util:G[t]})},stash(){this.$store.dispatch("utils/stash",{})}}},L=B,A=Object(h["a"])(L,i,c,!1,null,null,null),R=A.exports,U=a("916c"),q=a.n(U),H=a("bc3a"),F=a.n(H);const K=[{title:"client error"}],Q={all:{}},V={},W={majig(t,e){o.a.set(t.all,e.id,e),o.a.set(t.all,e.path,e)},remove(t,e){o.a.set(t.all,e.id,void 0),o.a.set(t.all,e.path,void 0)},clear(t,e){t.all={}}},X={async load({commit:t},e){return F.a.get("/apis/majig",{params:{majigId:e.majigId,path:e.path}}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:K})},async add({commit:t},e){return F.a.post("/apis/majig",{path:e.path,tags:e.tags,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:K})},async update({commit:t},e){return F.a.put("/apis/majig/"+e.majigId,{path:e.path,tags:e.tags,markdown:e.markdown,published:e.published}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:K})},async remove({commit:t},e){return F.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("remove",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:K})},async clear({commit:t},e){t("clear",e)}};var Y={namespaced:!0,state:Q,getters:V,mutations:W,actions:X};const Z=[{title:"client error"}],tt={all:[],count:0},et={},at={set(t,e){t.count=e.count,t.all=e.majigs},update(t,e){const a=t.all.findIndex(t=>t.id===e.majig.id);t.all.splice(a,1,e.majig)},remove(t,e){const a=t.all.findIndex(t=>t.id===e.majig.id);t.all.splice(a,1)},clear(t,e){t.count=0,t.all=[]}},st={async load({commit:t,state:e},a){return F.a.get("/apis/majigs",{params:{flags:a.flags,filter:a.filter,limit:a.limit,skip:a.skip}}).then(e=>(t("set",{count:e.data.data.count,majigs:e.data.data.majigs}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:Z})},async search({commit:t,state:e},a){return F.a.get("/apis/majigs",{params:{terms:a.terms,limit:a.limit}}).then(t=>t.data.data.majigs).catch(t=>{throw t.response?t.response.data.errors:Z})},async update({commit:t},e){return F.a.put("/apis/majig/"+e.majigId,{path:e.path,tags:e.tags,markdown:e.markdown,published:e.published}).then(e=>(t("update",{majig:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:Z})},async remove({commit:t},e){return F.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("remove",{majig:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:Z})},async clear({commit:t},e){t("clear",e)}};var rt={namespaced:!0,state:tt,getters:et,mutations:at,actions:st};const nt=[{title:"client error"}],ot=window.localStorage,it=F.a.defaults.headers,ct={slug:""},ut={signed(t,e){return Boolean(t.slug)}},lt={slug(t,e){t.slug=e.slug,it.common["x-token"]=e.slug,ot.setItem("token/slug",JSON.stringify(t.slug))},clear(t,e){t.slug="",delete it.common["x-token"],ot.removeItem("token/slug")}},dt={async sign({commit:t},e){return F.a.put("/apis/token",{username:e.username,password:e.password}).then(e=>{t("slug",e.data.data)}).catch(t=>{throw t.response?t.response.data.errors:nt})},async clear({commit:t},e){t("clear",e)}};let pt=ot.getItem("token/slug");pt&&(pt=JSON.parse(pt)),pt&&lt.slug(ct,{slug:pt});var ht={namespaced:!0,state:ct,getters:ut,mutations:lt,actions:dt},mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("Null")])])])])}],vt={data(){return{}}},ft=vt,yt=Object(h["a"])(ft,mt,gt,!1,null,null,null),bt=yt.exports;const wt={status:"",util:bt,opened:!1,stuck:!1},jt={},kt={status(t,e){t.status=e},util(t,e){t.util=e},opened(t,e){t.opened=e},stuck(t,e){t.stuck=e}},_t={async notify({commit:t},e){t("status",e.status)},async open({commit:t,state:e},a){t("status",""),!a.util||e.opened&&e.util===a.util?(t("opened",!1),t("stuck",!1),t("util",bt)):(t("opened",!0),t("stuck",!0),t("util",a.util))},async stash({commit:t,state:e},a){t("status",""),e.opened||e.stuck?t("stuck",!0):t("stuck",!1),t("opened",!1)},async close({commit:t},e){t("status",""),t("opened",!1),t("stuck",!1),t("util",bt)}};var $t={namespaced:!0,state:wt,getters:jt,mutations:kt,actions:_t};o.a.use(q.a);var Ct=new q.a.Store({modules:{majig:Y,majigs:rt,token:ht,utils:$t}}),xt=a("8c4f");const Ot=()=>a.e("chunk-2d0e4aea").then(a.bind(null,"90eb")),Pt=()=>a.e("chunk-2d0d7a77").then(a.bind(null,"7877"));o.a.use(xt["a"]);var It=new xt["a"]({routes:[{path:"/",name:"majigs",component:Pt},{path:"//:flags*",name:"submajig",component:Pt,props:t=>({flags:t.params.flags?t.params.flags.split("/").filter(t=>Boolean(t)):[]})},{path:"///:majigId",name:"supmajig",component:Ot,props:t=>({majigId:t.params.majigId})},{path:"*",name:"majig",component:Ot}],scrollBehavior(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}}});o.a.config.productionTip=!1;var St=new o.a({el:"#app",store:Ct,router:It,template:"<app />",components:{App:R}}),Et=St,zt=(a("ce36"),Object(h["a"])(Et,s,r,!1,null,null,null));e["default"]=zt.exports},3267:function(t,e,a){},ce36:function(t,e,a){"use strict";var s=a("3267"),r=a.n(s);r.a}});
//# sourceMappingURL=app.0d103f62.js.map