(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push(["1b7c","chunk-vendors"]),s()})({"1b7c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},i=[],n=s("ba4c"),r=s.n(n),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"body"},[s("div",{staticClass:"prebody tiny togler10"},[s(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),s("div",{staticClass:"postbody dark togler01"},[s(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),s("div",{staticClass:"body"},[s("div",{staticClass:"body"},[s("ParabodyLeft",{attrs:{views:t.views,view:t.view},on:{open:t.open,goto:t.goto}}),s("div",{staticClass:"body"},[s("div",{staticClass:"body"},[s("router-view")],1)])],1)])])])},l=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"horzer"},[s("div",{staticClass:"lefter"},[s("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" Solomajig")])]),s("div",{staticClass:"rghter"},[s("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" About")]),t._v(" • "),s("a",{on:{click:function(e){return t.$emit("goto","/contact")}}},[t._v(" Contact")]),t._v(" • "),s("a",{on:{click:function(e){return t.$emit("open","signIn")}}},[t._v(" SignIn")])])])},u=[],d={name:"public",components:{},props:{},data(){return{}},methods:{}},p=d,m=s("2877"),h=Object(m["a"])(p,c,u,!1,null,null,null),g=h.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"horzer"},[s("div",{staticClass:"lefter"},[s("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" Solomajig")])]),s("div",{staticClass:"rghter togler10"},[s("a",{on:{click:t.signOut}},[t._v("SignOut")])]),s("div",{staticClass:"rghter togler01"},[s("a",{staticClass:"material-icons",on:{click:t.signOut}},[t._v("exit_to_app")])])])},f=[],w={name:"private",props:{},computed:{signed(){return this.$store.getters["token/signed"]}},methods:{signOut(){this.$store.dispatch("token/signOut").finally(()=>this.$router.push("/")).catch(t=>{})}}},k=w,b=Object(m["a"])(k,v,f,!1,null,null,null),y=b.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"parabody left",class:{open:t.opened,sticky:t.stuck}},[s("div",{staticClass:"prebody"},[s("div",{staticClass:"horzer"},[s("div",{staticClass:"lefter mask"},[t._v(" "+t._s(t.status)+" ")]),s("div",{staticClass:"rghter full"},[s("a",{staticClass:"material-icons full",on:{click:function(e){return t.$emit("open",!1)}}},[t._v(" chevron_left ")])])])]),s(t.views[t.view],{tag:"component",on:{goto:t.goto,open:t.open,notify:t.notify}})],1)},j=[],C={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""}},watch:{view(t,e){this.status="",this.opened=!!t}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(t){this.$emit("goto",t)},open(t){this.$emit("open",t)},notify(t){this.status=t,this.$emit("notify",t)}}},$=C,I=Object(m["a"])($,_,j,!1,null,null,null),O=I.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[s("div",{staticClass:"bodyer thin tiny"},[s("h2",[t._v("Sign In")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.signIn(e)}}},[s("InputText",{attrs:{placeholder:"username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("InputPassword",{attrs:{placeholder:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("input",{attrs:{type:"submit",value:"sign in"}})],1)])])])},M=[],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("input",t._g({staticClass:"input",attrs:{type:"text"},domProps:{value:t.value}},t.listeners))},P=[],E={props:{value:{type:String,default:""}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}}},T=E,F=Object(m["a"])(T,S,P,!1,null,null,null),z=F.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("input",t._g({staticClass:"input",attrs:{type:"password"},domProps:{value:t.value}},t.listeners))},D=[],L={props:{value:{type:String,default:""}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}}},N=L,A=Object(m["a"])(N,J,D,!1,null,null,null),B=A.exports,q={components:{InputText:z,InputPassword:B},data(){return{username:"",password:""}},methods:{signIn(){this.$emit("notify","signing in"),this.$store.dispatch("token/signIn",{username:this.username,password:this.password}).then(()=>{this.$emit("open",!1),this.$emit("notify",""),this.password=""}).catch(t=>{if(this.$emit("notify",""),this.password="",t.response){const e=t.response.data;this.$emit("notify",e.errors[0].title)}else console.log(t)})}}},G=q,H=Object(m["a"])(G,x,M,!1,null,null,null),K=H.exports,Q={components:{ParabodyLeft:O},data(){return{status:"",views:{signIn:K},view:""}},computed:{signed(){return this.$store.getters["token/signed"]},menu(){return this.$store.getters["token/signed"]?y:g}},methods:{goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},open(t){!1===t||t===this.view?this.view="":this.view=t}}},R=Q,U=Object(m["a"])(R,o,l,!1,null,null,null),V=U.exports,W=s("916c"),X=s.n(W),Y=s("bc3a"),Z=s.n(Y);const tt={all:{}},et={},st={majig(t,e){t.all[e.id]=e,t.all[e.path]=e,t.all={...t.all}},clear(t,e){t.all={}}},at={async load({commit:t},e){return Z.a.get("/apis/majig",{params:{majigId:e.majigId,path:e.path}}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async update({commit:t},e){return Z.a.put("/apis/majig",{majigId:e.majigId,path:e.path,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async clear({commit:t},e){t("clear",e)}};var it={namespaced:!0,state:tt,getters:et,mutations:st,actions:at};const nt={all:[]},rt={},ot={set(t,e){t.all=e.majigs}},lt={async add({commit:t},e){return Z.a.post("/apis/majigs",{path:e.path,markdown:e.markdown}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async load({commit:t},e){return Z.a.get("/apis/majigs",{params:{path:e.path}}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})}};var ct={namespaced:!0,state:nt,getters:rt,mutations:ot,actions:lt};const ut=Z.a.defaults.headers,dt={slug:""},pt={signed(t,e){return Boolean(t.slug)}},mt={slug(t,e){t.slug=e.slug,ut.common["x-token"]=e.slug,localStorage.setItem("token/slug",JSON.stringify(t.slug))},clear(t,e){t.slug="",delete ut.common["x-token"],localStorage.removeItem("token/slug")}},ht={async signIn({commit:t},e){return Z.a.put("/apis/token",{username:e.username,password:e.password}).then(e=>{t("slug",e.data.data)})},async signGet({commit:t},e){return Z.a.get("/apis/token",{}).then(e=>{t("slug",e.data.data)})},async signOut({commit:t},e){t("clear",e)}};let gt=localStorage.getItem("token/slug");gt&&(gt=JSON.parse(gt)),gt&&mt.slug(dt,{slug:gt});var vt={namespaced:!0,state:dt,getters:pt,mutations:mt,actions:ht};r.a.use(X.a);var ft=new X.a.Store({modules:{majig:it,majigs:ct,token:vt}}),wt=s("8c4f"),kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"prebody tiny"},[s("div",{staticClass:"horzer"},[s("div",{staticClass:"lefter mask"},[t._v(t._s(t.status))]),t.isMode("show")?s("div",{staticClass:"rghter"},[s("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v("edit")]),t._v(" • "),s("a",{on:{click:function(e){return t.toMode("reset")}}},[t._v("reset")]),t._v(" • "),s("a",{on:{click:function(e){return t.toMode("save")}}},[t._v("save")])]):t._e(),t.isMode("edit")?s("div",{staticClass:"rghter"},[s("a",{on:{click:function(e){return t.toMode("show")}}},[t._v("show")]),t._v(" • "),s("a",{on:{click:function(e){return t.toMode("reset")}}},[t._v("reset")]),t._v(" • "),s("a",{on:{click:function(e){return t.toMode("save")}}},[t._v("save")])]):t._e()])]),s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[s("div",{staticClass:"bodyer thick tall"},[t.isMode("show")?s("div",{domProps:{innerHTML:t._s(t.markeddown)}}):t._e(),t.isMode("edit")?s("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[s("pre",[s("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),s("br")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})]):t._e()])])])])},bt=[],yt=s("e0c1"),_t=s.n(yt),jt={components:{InputText:z},props:{majigId:{type:String,required:!1}},data(){return{mode:"show",status:"",markdown:""}},created(){this.loadMajig()},watch:{$route:"loadMajig"},computed:{majig(){const t=this.$store.state.majig.all;return this.majigId?t[this.majigId]||{}:t[this.$route.path]||{}},markeddown(){return _t()(this.markdown||"")}},methods:{isMode(t){return this.mode===t},toMode(t){switch(t){case"reset":this.markdown=this.majig.markdown||"",this.mode="show";break;case"save":this.updateMajig().then(()=>{this.mode="show"});break;default:this.mode=t;break}},loadMajig(){return this.status="loading",this.markdown=this.majig.markdown||"",this.$store.dispatch("majig/load",{majigId:this.majigId,path:this.$route.path}).then(t=>{this.status="",this.markdown=t.markdown}).catch(t=>{404===t[0].status?this.status="...":this.status=t[0].title})},updateMajig(){return this.status="updating",this.$store.dispatch("majig/update",{majigId:this.majigId,path:this.$route.path,markdown:this.markdown}).then(t=>{this.status="",this.markdown=t.markdown}).catch(t=>{this.status=t[0].title})}}},Ct=jt,$t=Object(m["a"])(Ct,kt,bt,!1,null,null,null),It=$t.exports,Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"parabody right sticky",class:{open:t.opened}},[s("div",{staticClass:"prebody"},[s("div",{staticClass:"horzer"},[s("div",{staticClass:"rghter mask"},[t._v(" "+t._s(t.status)+" ")]),s("div",{staticClass:"lefter full"},[s("a",{staticClass:"material-icons full",on:{click:function(e){return t.toggleOpen(!1)}}},[t._v(" chevron_right")])])])]),s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[s("div",{staticClass:"bodyer thin tiny"},[s("h2",[t._v("Create")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addMajig(e)}}},[s("InputText",{attrs:{placeholder:"markdown"},model:{value:t.markdown,callback:function(e){t.markdown=e},expression:"markdown"}}),s("input",{attrs:{type:"submit",value:"create"}})],1)])])])]),s("div",{staticClass:"body"},[s("div",{staticClass:"body"},[s("div",{staticClass:"prebody tiny"},[s("div",{staticClass:"horzer"},[s("div",{staticClass:"lefter mask"},[t._v(t._s(t.status))]),s("div",{staticClass:"rghter"},[s("a",{on:{click:function(e){return t.toggleOpen(!0)}}},[t._v("create")])])])]),s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[s("div",{staticClass:"bodyer thin"},[s("h1",[t._v("Majigs"),s("ul",[s("li",[t._v(" "+t._s(t.majigs.length||0)+" majigs ")]),s("li",[s("a",{class:t.classFilter("alpha"),on:{click:function(e){return t.toggleFilter("alpha")}}},[t._v(" alpha")]),t._v(" • "),s("a",{class:t.classFilter("created"),on:{click:function(e){return t.toggleFilter("created")}}},[t._v(" created")]),t._v(" • "),s("a",{class:t.classFilter("updated"),on:{click:function(e){return t.toggleFilter("updated")}}},[t._v(" updated")])])])]),s("ul",t._l(t.majigs,(function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:{name:"submajig",params:{majigId:e.id}}}},[t._v(" "+t._s(e.markdown)+" ")])],1)})),0)])])])])])])},xt=[],Mt={components:{InputText:z},data(){return{status:"",opened:!1,filter:"created",markdown:""}},created(){this.loadMajigs()},watch:{$route:"loadMajigs"},computed:{majigs(){return this.$store.state.majigs.all}},methods:{toggleOpen(t){this.opened=void 0!=t?t:!this.opened},toggleFilter(t){this.filter==t?this.filter="!"+t:this.filter=t},classFilter(t){return this.filter==t?"descend":this.filter=="!"+t?"ascend":""},loadMajigs(){this.status="loading",this.$store.dispatch("majigs/load",{path:this.$route.path}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},addMajig(){this.status="adding",this.$store.dispatch("majigs/add",{path:this.$route.path,markdown:this.markdown.trim()}).then(()=>{this.status="",this.markdown="",this.opened=!1}).catch(t=>{this.status=t[0].title})}}},St=Mt,Pt=Object(m["a"])(St,Ot,xt,!1,null,null,null),Et=Pt.exports;r.a.use(wt["a"]);var Tt=new wt["a"]({routes:[{path:"/",name:"majigs",component:Et},{path:"//:majigId",name:"submajig",component:It,props:t=>({majigId:t.params.majigId})},{path:"*",name:"majig",component:It}],scrollBehavior(t,e,s){return t.hash?{selector:t.hash}:s||{x:0,y:0}}});r.a.config.productionTip=!1;var Ft=new r.a({el:"#app",store:ft,router:Tt,template:"<app />",components:{App:V}}),zt=Ft,Jt=(s("ce36"),Object(m["a"])(zt,a,i,!1,null,null,null));e["default"]=Jt.exports},3267:function(t,e,s){},ce36:function(t,e,s){"use strict";var a=s("3267"),i=s.n(a);i.a}});
//# sourceMappingURL=app.76432396.js.map