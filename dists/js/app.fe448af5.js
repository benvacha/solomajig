(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-0c910886":"9e6e2133","chunk-2d0d7a77":"4dd02385","chunk-2d0e4aea":"53559831"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push(["1b7c","chunk-vendors"]),a()})({"1b7c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},r=[],n=a("ba4c"),o=a.n(n),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny togler10"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"postbody dark togler01"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("ParabodyLeft",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("router-view")],1)])],1)])])])},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","finder")}}},[t._v(" Find")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","signer")}}},[t._v(" Author")])])])},u=[],d={name:"public",components:{},props:{},data(){return{}},methods:{}},p=d,m=a("2877"),h=Object(m["a"])(p,c,u,!1,null,null,null),g=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","creator")}}},[t._v(" Create")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","finder")}}},[t._v(" Find")]),t._v(" • "),a("a",{on:{click:function(e){return t.unsign()}}},[t._v(" Leave")])])])},f=[],w={name:"private",props:{},computed:{signed(){return this.$store.getters["token/signed"]}},methods:{unsign(){this.$emit("open",!1),this.$store.dispatch("majig/clear",{}).then(()=>this.$store.dispatch("majigs/clear",{})).then(()=>this.$store.dispatch("token/clear",{})).catch(t=>{console.log(t)})}}},y=w,b=Object(m["a"])(y,v,f,!1,null,null,null),j=b.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parabody left",class:{open:t.opened,sticky:t.stuck}},[a("div",{staticClass:"prebody"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"rghter full"},[a("a",{staticClass:"material-icons full",on:{click:function(e){return t.$emit("open",!1)}}},[t._v(" chevron_left ")])])])]),a(t.views[t.view],{tag:"component",on:{goto:t.goto,open:t.open,notify:t.notify}})],1)},_=[],$={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""}},watch:{view(t,e){this.status="",this.opened=!!t}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(t){this.$emit("goto",t)},open(t){this.$emit("open",t)},notify(t){this.status=t,this.$emit("notify",t)}}},C=$,x=Object(m["a"])(C,k,_,!1,null,null,null),O=x.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("New Majig")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"/path"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],attrs:{type:"text",placeholder:"tags"},domProps:{value:t.tags},on:{input:function(e){e.target.composing||(t.tags=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"Create"}})]),a("h2",[t._v("Markdown")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})])])])])},I=[],S={components:{},data(){return{path:"",tags:"",markdown:""}},methods:{add(){this.$emit("notify","creating"),this.$store.dispatch("majig/add",{path:this.path,tags:this.tags,markdown:this.markdown}).then(t=>{this.$emit("open",!1),t.path?this.$router.push({path:t.path}).catch(()=>{}):this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).catch(t=>{this.$emit("notify",t[0].title)})}}},M=S,E=Object(m["a"])(M,P,I,!1,null,null,null),N=E.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("GoTo Majig")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.goto(t.path)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"/path"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"GoTo"}})]),a("h1",[t._v("Find Majig")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"keyword"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"Find"}})]),a("h2",[t._v("Results "),a("span",[t._v(t._s(t.majigs.length))])]),a("ul",[t.majigs.length?t._e():a("li",[a("div",[t._v("No Results")])]),t._l(t.majigs,(function(e){return a("li",[a("a",{on:{click:function(a){return t.gotoMajig(e)}}},[a("span",[t._v(" "+t._s(t._f("previewed")(e.markdown,t.searched))+" ")]),a("h5",[t._v(t._s(e.path))])])])}))],2)])])])},D=[],L={components:{},filters:{previewed:(t,e)=>{const a=90,s=t.indexOf(e);let r=a-e.length;return r=Math.floor(r/2),t.substring(s-r,s+e.length+r)}},data(){return{path:"",keyword:"",searched:"",majigs:[]}},methods:{goto(t){"/"!==t[0]&&(t="/"+t),this.$router.push(t).catch(t=>{}),this.$emit("open",!1)},gotoMajig(t){t.path?this.$router.push({path:t.path}).catch(()=>{}):this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{}),this.$emit("open",!1)},search(){if(!this.keyword)return this.$emit("notify","keyword required");this.$emit("notify","searching"),this.$store.dispatch("majigs/search",{keyword:this.keyword}).then(t=>{this.$emit("notify",""),this.searched=this.keyword,this.majigs=t}).catch(t=>{this.status=t[0].title})}}},z=L,A=Object(m["a"])(z,T,D,!1,null,null,null),F=A.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("Sign In")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.sign(e)}}},[a("input",{attrs:{type:"submit",value:"Authorize"}}),a("h2",[t._v("Credentials")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])])])},B=[],q={components:{},data(){return{username:"",password:""}},methods:{sign(){this.$emit("notify","signing"),this.$store.dispatch("token/sign",{username:this.username,password:this.password}).then(()=>{this.$emit("open",!1),this.password=""}).catch(t=>{this.$emit("notify",t[0].title)})}}},G=q,R=Object(m["a"])(G,J,B,!1,null,null,null),H=R.exports,K={components:{ParabodyLeft:O},data(){return{status:"",views:{creator:N,finder:F,signer:H},view:"",viewed:null}},computed:{signed(){return this.$store.getters["token/signed"]},menu(){return this.signed?j:g}},methods:{goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},open(t){!1===t||t===this.view?this.view="":this.view=t}}},Q=K,U=Object(m["a"])(Q,i,l,!1,null,null,null),V=U.exports,W=a("916c"),X=a.n(W),Y=a("bc3a"),Z=a.n(Y);const tt={all:{}},et={},at={majig(t,e){o.a.set(t.all,e.id,e),o.a.set(t.all,e.path,e)},remove(t,e){o.a.set(t.all,e.id,void 0),o.a.set(t.all,e.path,void 0)},clear(t,e){t.all={}}},st={async load({commit:t},e){return Z.a.get("/apis/majig",{params:{majigId:e.majigId,path:e.path}}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async add({commit:t},e){return Z.a.post("/apis/majig",{path:e.path,tags:e.tags,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async update({commit:t},e){return Z.a.put("/apis/majig/"+e.majigId,{path:e.path,tags:e.tags,markdown:e.markdown,published:e.published}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async remove({commit:t},e){return Z.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("remove",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async clear({commit:t},e){t("clear",e)}};var rt={namespaced:!0,state:tt,getters:et,mutations:at,actions:st};const nt={all:[],filter:"-updated",flags:void 0},ot={},it={set(t,e){t.all=e.majigs},filter(t,e){t.filter=e.filter||"-updated"},flags(t,e){t.flags=e.flags||void 0},clear(t,e){t.all=[]}},lt={async load({commit:t,state:e},a){return Z.a.get("/apis/majigs",{params:{flags:a.flags,filter:a.filter}}).then(e=>(t("set",{majigs:e.data.data}),t("filter",{filter:a.filter}),t("flags",{flags:a.flags}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async search({commit:t,state:e},a){return Z.a.get("/apis/majigs",{params:{keyword:a.keyword}}).then(t=>t.data.data).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async add({commit:t,state:e},a){return Z.a.post("/apis/majigs",{tags:a.tags,markdown:a.markdown,flags:e.flags,filter:e.filter}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async update({commit:t,state:e},a){return Z.a.put("/apis/majigs/"+a.majigId,{tags:a.tags,markdown:a.markdown,published:a.published,flags:e.flags,filter:e.filter}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async remove({commit:t,filter:e},a){return Z.a.delete("/apis/majigs/"+a.majigId,{params:{flags:nt.flags,filter:nt.filter}}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async clear({commit:t},e){t("clear",e)}};var ct={namespaced:!0,state:nt,getters:ot,mutations:it,actions:lt};const ut=Z.a.defaults.headers,dt={slug:""},pt={signed(t,e){return Boolean(t.slug)}},mt={slug(t,e){t.slug=e.slug,ut.common["x-token"]=e.slug,localStorage.setItem("token/slug",JSON.stringify(t.slug))},clear(t,e){t.slug="",delete ut.common["x-token"],localStorage.removeItem("token/slug")}},ht={async sign({commit:t},e){return Z.a.put("/apis/token",{username:e.username,password:e.password}).then(e=>{t("slug",e.data.data)}).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async clear({commit:t},e){t("clear",e)}};let gt=localStorage.getItem("token/slug");gt&&(gt=JSON.parse(gt)),gt&&mt.slug(dt,{slug:gt});var vt={namespaced:!0,state:dt,getters:pt,mutations:mt,actions:ht};o.a.use(X.a);var ft=new X.a.Store({modules:{majig:rt,majigs:ct,token:vt}}),wt=a("8c4f");const yt=()=>Promise.all([a.e("chunk-0c910886"),a.e("chunk-2d0e4aea")]).then(a.bind(null,"90eb")),bt=()=>Promise.all([a.e("chunk-0c910886"),a.e("chunk-2d0d7a77")]).then(a.bind(null,"7877"));o.a.use(wt["a"]);var jt=new wt["a"]({routes:[{path:"/",name:"majigs",component:bt},{path:"//:flags*",name:"submajig",component:bt,props:t=>({flags:t.params.flags.split("/").filter(t=>Boolean(t))})},{path:"///:majigId",name:"supmajig",component:yt,props:t=>({majigId:t.params.majigId})},{path:"*",name:"majig",component:yt}],scrollBehavior(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}}});o.a.config.productionTip=!1;var kt=new o.a({el:"#app",store:ft,router:jt,template:"<app />",components:{App:V}}),_t=kt,$t=(a("ce36"),Object(m["a"])(_t,s,r,!1,null,null,null));e["default"]=$t.exports},3267:function(t,e,a){},ce36:function(t,e,a){"use strict";var s=a("3267"),r=a.n(s);r.a}});
//# sourceMappingURL=app.fe448af5.js.map