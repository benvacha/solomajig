(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function o(t){return i.p+"js/"+({}[t]||t)+"-legacy."+{"chunk-58532c03":"20e31f3e","chunk-2d0d7a77":"884b998e","chunk-2d0e4aea":"99bab347"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;n.push(["1b7c","chunk-vendors"]),a()})({"1b7c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},r=[],n=a("ba4c"),o=a.n(n),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny togler10"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"postbody dark togler01"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("ParabodyLeft",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("router-view")],1)])],1)])])])},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","finder")}}},[t._v(" Search")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","signer")}}},[t._v(" GoTo")])])])},u=[],p={name:"public"},d=p,m=a("2877"),h=Object(m["a"])(d,c,u,!1,null,null,null),g=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","creator")}}},[t._v(" Create")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","finder")}}},[t._v(" Search")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","signer")}}},[t._v(" GoTo")])])])},f=[],y={name:"private"},w=y,b=Object(m["a"])(w,v,f,!1,null,null,null),k=b.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parabody left",class:{open:t.opened,sticky:t.stuck}},[a("div",{staticClass:"prebody"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"rghter full"},[a("a",{staticClass:"material-icons full",on:{click:function(e){return t.$emit("open",!1)}}},[t._v(" chevron_left ")])])])]),a(t.views[t.view],{tag:"component",on:{goto:t.goto,open:t.open,notify:t.notify}})],1)},_=[],$={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""}},watch:{view(t,e){this.status="",this.opened=!!t}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(t){this.$emit("goto",t)},open(t){this.$emit("open",t)},notify(t){this.status=t,this.$emit("notify",t)}}},C=$,x=Object(m["a"])(C,j,_,!1,null,null,null),O=x.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("New Majig")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"/path"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],attrs:{type:"text",placeholder:"tags"},domProps:{value:t.tags},on:{input:function(e){e.target.composing||(t.tags=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"Create"}})]),a("h2",[t._v("Markdown")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})])])])])},S=[],I={data(){return{path:"",tags:"",markdown:""}},methods:{add(){this.$emit("notify","creating"),this.$store.dispatch("majig/add",{path:this.path,tags:this.tags,markdown:this.markdown}).then(t=>{this.$emit("open",!1),t.path?this.$router.push({path:t.path}).catch(()=>{}):this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).catch(t=>{this.$emit("notify",t[0].title)})}}},E=I,M=Object(m["a"])(E,P,S,!1,null,null,null),N=M.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("Search")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"keyword"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"Search"}})]),a("h2",[t._v("Results "),a("span",[t._v(t._s(t.majigs.length))])]),a("ul",[t.majigs.length?t._e():a("li",[a("div",[t._v("No Results")])]),t._l(t.majigs,(function(e){return a("li",[a("a",{on:{click:function(a){return t.gotoMajig(e)}}},[a("span",[t._v(" "+t._s(t._f("previewed")(e.markdown,t.searched))+" ")]),a("h5",[t._v(t._s(e.path))])])])}))],2)])])])},D=[],z={filters:{previewed:(t,e)=>{const a=90,s=t.indexOf(e);let r=a-e.length;return r=Math.floor(r/2),t.substring(s-r,s+e.length+r)}},data(){return{keyword:"",searched:"",majigs:[]}},methods:{gotoMajig(t){t.path?this.$router.push({path:t.path}).catch(()=>{}):this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{}),this.$emit("open",!1)},search(){if(!this.keyword)return this.$emit("notify","keyword required");this.$emit("notify","searching"),this.$store.dispatch("majigs/search",{keyword:this.keyword}).then(t=>{this.$emit("notify",""),this.searched=this.keyword,this.majigs=t}).catch(t=>{this.status=t[0].title})}}},B=z,G=Object(m["a"])(B,T,D,!1,null,null,null),J=G.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[t.signed?a("div",{staticClass:"postbody"},[a("div",{staticClass:"horzer"},[a("a",{staticClass:"full",on:{click:function(e){return t.unsign()}}},[t._v(" SignOut ")])])]):t._e(),a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("GoTo")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.goto(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"/path"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"GoTo"}})]),t.signed?t._e():[a("h1",[t._v("SignIn")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.sign(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"SignIn"}})])]],2)])])},q=[],A={data(){return{path:"",username:"",password:""}},computed:{signed(){return this.$store.getters["token/signed"]}},methods:{goto(){"/"!==this.path[0]&&(this.path="/"+this.path),this.$router.push(this.path).catch(t=>{}),this.$emit("open",!1)},sign(){this.$emit("notify","signing"),this.$store.dispatch("token/sign",{username:this.username,password:this.password}).then(()=>{this.$emit("open",!1),this.password=""}).catch(t=>{this.$emit("notify",t[0].title)})},unsign(){this.$emit("open",!1),this.$store.dispatch("majig/clear",{}).then(()=>this.$store.dispatch("majigs/clear",{})).then(()=>this.$store.dispatch("token/clear",{})).catch(t=>{this.$emit("notify",t.title)})}}},R=A,F=Object(m["a"])(R,L,q,!1,null,null,null),H=F.exports,K={components:{ParabodyLeft:O},data(){return{status:"",views:{creator:N,finder:J,signer:H},view:"",viewed:null}},computed:{signed(){return this.$store.getters["token/signed"]},menu(){return this.signed?k:g}},methods:{goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},open(t){!1===t||t===this.view?this.view="":this.view=t}}},Q=K,U=Object(m["a"])(Q,i,l,!1,null,null,null),V=U.exports,W=a("916c"),X=a.n(W),Y=a("bc3a"),Z=a.n(Y);const tt=[{title:"client error"}],et={all:{}},at={},st={majig(t,e){o.a.set(t.all,e.id,e),o.a.set(t.all,e.path,e)},remove(t,e){o.a.set(t.all,e.id,void 0),o.a.set(t.all,e.path,void 0)},clear(t,e){t.all={}}},rt={async load({commit:t},e){return Z.a.get("/apis/majig",{params:{majigId:e.majigId,path:e.path}}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:tt})},async add({commit:t},e){return Z.a.post("/apis/majig",{path:e.path,tags:e.tags,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:tt})},async update({commit:t},e){return Z.a.put("/apis/majig/"+e.majigId,{path:e.path,tags:e.tags,markdown:e.markdown,published:e.published}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:tt})},async remove({commit:t},e){return Z.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("remove",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:tt})},async clear({commit:t},e){t("clear",e)}};var nt={namespaced:!0,state:et,getters:at,mutations:st,actions:rt};const ot=[{title:"client error"}],it={all:[],count:0,filter:"-updated",flags:void 0},lt={},ct={set(t,e){t.count=e.count,t.all=e.majigs},filter(t,e){t.filter=e.filter||"-updated"},flags(t,e){t.flags=e.flags||void 0},clear(t,e){t.count=0,t.all=[]}},ut={async load({commit:t,state:e},a){return Z.a.get("/apis/majigs",{params:{flags:a.flags,filter:a.filter,limit:a.limit,skip:a.skip}}).then(e=>(t("set",{count:e.data.data.count,majigs:e.data.data.majigs}),t("filter",{filter:a.filter}),t("flags",{flags:a.flags}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:ot})},async search({commit:t,state:e},a){return Z.a.get("/apis/majigs",{params:{keyword:a.keyword,limit:33}}).then(t=>t.data.data.majigs).catch(t=>{throw t.response?t.response.data.errors:ot})},async clear({commit:t},e){t("clear",e)}};var pt={namespaced:!0,state:it,getters:lt,mutations:ct,actions:ut};const dt=[{title:"client error"}],mt=window.localStorage,ht=Z.a.defaults.headers,gt={slug:""},vt={signed(t,e){return Boolean(t.slug)}},ft={slug(t,e){t.slug=e.slug,ht.common["x-token"]=e.slug,mt.setItem("token/slug",JSON.stringify(t.slug))},clear(t,e){t.slug="",delete ht.common["x-token"],mt.removeItem("token/slug")}},yt={async sign({commit:t},e){return Z.a.put("/apis/token",{username:e.username,password:e.password}).then(e=>{t("slug",e.data.data)}).catch(t=>{throw t.response?t.response.data.errors:dt})},async clear({commit:t},e){t("clear",e)}};let wt=mt.getItem("token/slug");wt&&(wt=JSON.parse(wt)),wt&&ft.slug(gt,{slug:wt});var bt={namespaced:!0,state:gt,getters:vt,mutations:ft,actions:yt};o.a.use(X.a);var kt=new X.a.Store({modules:{majig:nt,majigs:pt,token:bt}}),jt=a("8c4f");const _t=()=>Promise.all([a.e("chunk-58532c03"),a.e("chunk-2d0e4aea")]).then(a.bind(null,"90eb")),$t=()=>Promise.all([a.e("chunk-58532c03"),a.e("chunk-2d0d7a77")]).then(a.bind(null,"7877"));o.a.use(jt["a"]);var Ct=new jt["a"]({routes:[{path:"/",name:"majigs",component:$t},{path:"//:flags*//:page*",name:"submajig",component:$t,props:t=>({flags:t.params.flags?t.params.flags.split("/").filter(t=>Boolean(t)):[],page:parseInt(t.params.page)||0})},{path:"//:flags*",name:"subsubmajig",component:$t,props:t=>({flags:t.params.flags?t.params.flags.split("/").filter(t=>Boolean(t)):[]})},{path:"///:majigId",name:"supmajig",component:_t,props:t=>({majigId:t.params.majigId})},{path:"*",name:"majig",component:_t}],scrollBehavior(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}}});o.a.config.productionTip=!1;var xt=new o.a({el:"#app",store:kt,router:Ct,template:"<app />",components:{App:V}}),Ot=xt,Pt=(a("ce36"),Object(m["a"])(Ot,s,r,!1,null,null,null));e["default"]=Pt.exports},3267:function(t,e,a){},ce36:function(t,e,a){"use strict";var s=a("3267"),r=a.n(s);r.a}});
//# sourceMappingURL=app-legacy.636d2b9b.js.map