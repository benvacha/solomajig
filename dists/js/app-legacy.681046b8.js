(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},r={app:0},n=[];function i(t){return o.p+"js/"+({}[t]||t)+"-legacy."+{"chunk-43839276":"7a18aa04","chunk-2d0d7a77":"331b2448","chunk-2d0e4aea":"10f819a3"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=r[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,s[1](l)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;n.push(["1b7c","chunk-vendors"]),s()})({"1b7c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},r=[],n=s("ba4c"),i=s.n(n),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"body"},[s("div",{staticClass:"prebody tiny togler10"},[s("div",{staticClass:"horzer"},[s("div",{staticClass:"lefter"},[s("a",{on:{click:function(e){return t.goto("/")}}},[t._v(" SoloMajig")])]),s("div",{staticClass:"rghter"},[t.signed?[s("a",{on:{click:function(e){return t.open("create")}}},[t._v(" Create")]),t._v(" • ")]:t._e(),s("a",{on:{click:function(e){return t.open("search")}}},[t._v(" Search")]),t._v(" • "),s("a",{on:{click:function(e){return t.open("goto")}}},[t._v(" GoTo")])],2)])]),s("div",{staticClass:"postbody dark togler01"},[s("div",{staticClass:"horzer"},[s("div",{staticClass:"lefter"},[s("a",{on:{click:function(e){return t.goto("/")}}},[t._v(" SoloMajig")])]),s("div",{staticClass:"rghter"},[t.signed?[s("a",{on:{click:function(e){return t.open("create")}}},[t._v(" Create")]),t._v(" • ")]:t._e(),s("a",{on:{click:function(e){return t.open("search")}}},[t._v(" Search")]),t._v(" • "),s("a",{on:{click:function(e){return t.open("goto")}}},[t._v(" GoTo")])],2)])]),s("div",{staticClass:"body"},[s("div",{staticClass:"body"},[s("Utils"),s("div",{staticClass:"body"},[s("div",{staticClass:"body"},[s("router-view")],1)])],1)])])])},c=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"parabody left",class:{open:t.opened,sticky:t.stuck}},[s("div",{staticClass:"prebody"},[s("div",{staticClass:"horzer"},[s("div",{staticClass:"lefter mask"},[t._v(" "+t._s(t.status)+" ")]),s("div",{staticClass:"rghter full"},[s("a",{staticClass:"material-icons full",on:{click:t.close}},[t._v("chevron_left")])])])]),s(t.util,{tag:"component"})],1)},u=[],p={computed:{status(){return this.$store.state.utils.status},util(){return this.$store.state.utils.util},opened(){return this.$store.state.utils.opened},stuck(){return this.$store.state.utils.stuck}},methods:{close(t){this.$store.dispatch("utils/close",{})}}},d=p,h=s("2877"),m=Object(h["a"])(d,l,u,!1,null,null,null),g=m.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[s("div",{staticClass:"bodyer para"},[s("h1",[t._v("Create")]),s("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.create()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"path"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],attrs:{type:"text",placeholder:"tags"},domProps:{value:t.tags},on:{input:function(e){e.target.composing||(t.tags=e.target.value)}}}),s("input",{attrs:{type:"submit",value:"Create"}})]),s("h2",[t._v("Markdown")]),s("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.create()}}},[s("pre",[s("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),s("br")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})])])])])},f=[],y={data(){return{path:"",tags:"",markdown:""}},methods:{create(){this.path.length&&"/"!==this.path[0]&&(this.path="/"+this.path),this.$store.dispatch("utils/notify",{status:"creating"}).then(()=>this.$store.dispatch("majig/add",{path:this.path,tags:this.tags,markdown:this.markdown}).catch(t=>{throw t[0]})).then(t=>t.path?this.$router.push(t.path).catch(t=>{}):t).then(t=>{t.path||this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).then(()=>(this.path="",this.tags="",this.markdown="",this.$store.dispatch("utils/stash",{}))).catch(t=>{this.$store.dispatch("utils/notify",{status:t.title})})}}},b=y,k=Object(h["a"])(b,v,f,!1,null,null,null),w=k.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[t.signed?s("div",{staticClass:"postbody"},[s("div",{staticClass:"horzer"},[s("a",{staticClass:"full",on:{click:function(e){return t.unsign()}}},[t._v(" SignOut ")])])]):t._e(),s("div",{staticClass:"subbody"},[s("div",{staticClass:"bodyer para"},[s("h1",[t._v("GoTo")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.goto()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"path"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),s("input",{attrs:{type:"submit",value:"GoTo"}})]),t.signed?t._e():[s("h1",[t._v("SignIn")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.sign()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("input",{attrs:{type:"submit",value:"SignIn"}})])]],2)])])},j=[],$={data(){return{path:"",username:"",password:""}},computed:{signed(){return this.$store.getters["token/signed"]}},methods:{goto(){"/"!==this.path[0]&&(this.path="/"+this.path),this.$store.dispatch("utils/notify",{status:"going"}).then(()=>this.$router.push(this.path).catch(t=>{})).then(()=>(this.path="",this.$store.dispatch("utils/stash",{})))},sign(){this.$store.dispatch("utils/notify",{status:"signing"}).then(()=>this.$store.dispatch("token/sign",{username:this.username,password:this.password}).catch(t=>{throw t[0]})).then(()=>(this.password="",this.$store.dispatch("utils/stash",{}))).catch(t=>{this.password="",this.$store.dispatch("utils/notify",{status:t.title})})},unsign(){this.$store.dispatch("majig/clear",{}).then(()=>this.$store.dispatch("majigs/clear",{})).then(()=>this.$store.dispatch("token/clear",{})).then(()=>this.$store.dispatch("utils/stash",{})).catch(t=>{this.$store.dispatch("utils/notify",{status:t.title})})}}},C=$,x=Object(h["a"])(C,_,j,!1,null,null,null),O=x.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[s("div",{staticClass:"bodyer para"},[s("h1",[t._v("Search")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.search()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.terms,expression:"terms"}],attrs:{type:"text",placeholder:"terms && tags"},domProps:{value:t.terms},on:{input:function(e){e.target.composing||(t.terms=e.target.value)}}}),s("input",{attrs:{type:"submit",value:"Search"}})]),s("h2",[t._v("Results "),s("span",[t._v(t._s(t.majigs.length))])]),s("ul",[t.majigs.length?t._e():s("li",[s("div",[t._v("no results")])]),t._l(t.majigs,(function(e){return s("li",[s("a",{on:{click:function(s){return t.goto(e)}}},[s("span",[t._v(" "+t._s(t._f("previewed")(e.markdown,t.termed))+" ")]),s("h5",[t._v(t._s(e.path))])])])}))],2)])])])},S=[],I={filters:{previewed:(t,e)=>{const s=90,a=t.indexOf(e);let r=s-e.length;return r=Math.floor(r/2),t.substring(a-r,a+e.length+r)}},data(){return{terms:"",termed:"",majigs:[]}},methods:{goto(t){this.$store.dispatch("utils/notify",{status:"going"}).then(()=>{if(t.path)return this.$router.push(t.path).catch(t=>{})}).then(()=>{t.path||this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).then(()=>this.$store.dispatch("utils/stash",{}))},search(){this.$store.dispatch("utils/notify",{status:"searching"}).then(()=>this.$store.dispatch("majigs/search",{terms:this.terms}).catch(t=>{throw t[0]})).then(t=>(this.termed=this.terms,this.majigs=t,this.$store.dispatch("utils/notify",{status:""}))).catch(t=>{this.$store.dispatch("utils/notify",{status:t.title})})}}},E=I,N=Object(h["a"])(E,P,S,!1,null,null,null),T=N.exports;const M={create:w,goto:O,search:T};var D={components:{Utils:g},computed:{signed(){return this.$store.getters["token/signed"]}},methods:{goto(t){this.$store.dispatch("utils/notify",{status:"going"}).then(()=>this.$router.push(t).catch(t=>{})).then(()=>this.$store.dispatch("utils/stash",{}))},open(t){this.$store.dispatch("utils/open",{util:M[t]})}}},z=D,G=Object(h["a"])(z,o,c,!1,null,null,null),J=G.exports,B=s("916c"),A=s.n(B),L=s("bc3a"),U=s.n(L);const q=[{title:"client error"}],R={all:{}},F={},H={majig(t,e){i.a.set(t.all,e.id,e),i.a.set(t.all,e.path,e)},remove(t,e){i.a.set(t.all,e.id,void 0),i.a.set(t.all,e.path,void 0)},clear(t,e){t.all={}}},K={async load({commit:t},e){return U.a.get("/apis/majig",{params:{majigId:e.majigId,path:e.path}}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:q})},async add({commit:t},e){return U.a.post("/apis/majig",{path:e.path,tags:e.tags,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:q})},async update({commit:t},e){return U.a.put("/apis/majig/"+e.majigId,{path:e.path,tags:e.tags,markdown:e.markdown,published:e.published}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:q})},async remove({commit:t},e){return U.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("remove",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:q})},async clear({commit:t},e){t("clear",e)}};var Q={namespaced:!0,state:R,getters:F,mutations:H,actions:K};const V=[{title:"client error"}],W={all:[],count:0},X={},Y={set(t,e){t.count=e.count,t.all=e.majigs},clear(t,e){t.count=0,t.all=[]}},Z={async load({commit:t,state:e},s){return U.a.get("/apis/majigs",{params:{flags:s.flags,filter:s.filter,limit:s.limit,skip:s.skip}}).then(e=>(t("set",{count:e.data.data.count,majigs:e.data.data.majigs}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:V})},async search({commit:t,state:e},s){return U.a.get("/apis/majigs",{params:{terms:s.terms,limit:s.limit}}).then(t=>t.data.data.majigs).catch(t=>{throw t.response?t.response.data.errors:V})},async clear({commit:t},e){t("clear",e)}};var tt={namespaced:!0,state:W,getters:X,mutations:Y,actions:Z};const et=[{title:"client error"}],st=window.localStorage,at=U.a.defaults.headers,rt={slug:""},nt={signed(t,e){return Boolean(t.slug)}},it={slug(t,e){t.slug=e.slug,at.common["x-token"]=e.slug,st.setItem("token/slug",JSON.stringify(t.slug))},clear(t,e){t.slug="",delete at.common["x-token"],st.removeItem("token/slug")}},ot={async sign({commit:t},e){return U.a.put("/apis/token",{username:e.username,password:e.password}).then(e=>{t("slug",e.data.data)}).catch(t=>{throw t.response?t.response.data.errors:et})},async clear({commit:t},e){t("clear",e)}};let ct=st.getItem("token/slug");ct&&(ct=JSON.parse(ct)),ct&&it.slug(rt,{slug:ct});var lt={namespaced:!0,state:rt,getters:nt,mutations:it,actions:ot},ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[s("div",{staticClass:"bodyer para"},[s("h1",[t._v("Null")])])])])}],dt={data(){return{}}},ht=dt,mt=Object(h["a"])(ht,ut,pt,!1,null,null,null),gt=mt.exports;const vt={status:"",util:gt,opened:!1,stuck:!1},ft={},yt={status(t,e){t.status=e},util(t,e){t.util=e},opened(t,e){t.opened=e},stuck(t,e){t.stuck=e}},bt={async notify({commit:t},e){t("status",e.status)},async open({commit:t,state:e},s){t("status",""),!s.util||e.opened&&e.util===s.util?(t("opened",!1),t("stuck",!1),t("util",gt)):(t("opened",!0),t("stuck",!0),t("util",s.util))},async stash({commit:t,state:e},s){t("status",""),e.opened||e.stuck?t("stuck",!0):t("stuck",!1),t("opened",!1)},async close({commit:t},e){t("status",""),t("opened",!1),t("stuck",!1),t("util",gt)}};var kt={namespaced:!0,state:vt,getters:ft,mutations:yt,actions:bt};i.a.use(A.a);var wt=new A.a.Store({modules:{majig:Q,majigs:tt,token:lt,utils:kt}}),_t=s("8c4f");const jt=()=>Promise.all([s.e("chunk-43839276"),s.e("chunk-2d0e4aea")]).then(s.bind(null,"90eb")),$t=()=>Promise.all([s.e("chunk-43839276"),s.e("chunk-2d0d7a77")]).then(s.bind(null,"7877"));i.a.use(_t["a"]);var Ct=new _t["a"]({routes:[{path:"/",name:"majigs",component:$t},{path:"//:flags*",name:"submajig",component:$t,props:t=>({flags:t.params.flags?t.params.flags.split("/").filter(t=>Boolean(t)):[]})},{path:"///:majigId",name:"supmajig",component:jt,props:t=>({majigId:t.params.majigId})},{path:"*",name:"majig",component:jt}],scrollBehavior(t,e,s){return t.hash?{selector:t.hash}:s||{x:0,y:0}}});i.a.config.productionTip=!1;var xt=new i.a({el:"#app",store:wt,router:Ct,template:"<app />",components:{App:J}}),Ot=xt,Pt=(s("ce36"),Object(h["a"])(Ot,a,r,!1,null,null,null));e["default"]=Pt.exports},3267:function(t,e,s){},ce36:function(t,e,s){"use strict";var a=s("3267"),r=s.n(a);r.a}});
//# sourceMappingURL=app-legacy.681046b8.js.map