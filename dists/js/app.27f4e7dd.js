(function(t){function e(e){for(var s,r,o=e[0],l=e[1],d=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=l;n.push(["1b7c","chunk-vendors"]),a()})({"1b7c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},i=[],n=a("ba4c"),r=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny togler10"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"postbody dark togler01"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("ParabodyLeft",{attrs:{views:t.views,view:t.view},on:{open:t.open,goto:t.goto}}),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("router-view")],1)])],1)])])])},l=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" Solomajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","create")}}},[t._v(" Create")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","search")}}},[t._v(" Search")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","signIn")}}},[t._v(" SignIn")])])])},c=[],u={name:"public",components:{},props:{},data(){return{}},methods:{}},p=u,h=a("2877"),m=Object(h["a"])(p,d,c,!1,null,null,null),v=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" Solomajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","create")}}},[t._v(" Create")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","search")}}},[t._v(" Search")]),t._v(" • "),a("a",{on:{click:t.signOut}},[t._v(" SignOut")])])])},f=[],w={name:"private",props:{},computed:{signed(){return this.$store.getters["token/signed"]}},methods:{signOut(){this.$store.dispatch("token/signOut").finally(()=>this.$router.push("/")).catch(t=>{})}}},y=w,k=Object(h["a"])(y,g,f,!1,null,null,null),j=k.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parabody left",class:{open:t.opened,sticky:t.stuck}},[a("div",{staticClass:"prebody"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"rghter full"},[a("a",{staticClass:"material-icons full",on:{click:function(e){return t.$emit("open",!1)}}},[t._v(" chevron_left ")])])])]),a(t.views[t.view],{tag:"component",on:{goto:t.goto,open:t.open,notify:t.notify}})],1)},_=[],$={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""}},watch:{view(t,e){this.status="",this.opened=!!t}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(t){this.$emit("goto",t)},open(t){this.$emit("open",t)},notify(t){this.status=t,this.$emit("notify",t)}}},C=$,I=Object(h["a"])(C,b,_,!1,null,null,null),x=I.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thin tiny"},[a("h2",[t._v("Create")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[a("InputText",{attrs:{placeholder:"/path"},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}}),a("InputText",{attrs:{placeholder:"markdown"},model:{value:t.markdown,callback:function(e){t.markdown=e},expression:"markdown"}}),a("input",{attrs:{type:"submit",value:"create"}})],1)])])])},M=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",t._g({staticClass:"input",attrs:{type:"text"},domProps:{value:t.value}},t.listeners))},P=[],E={props:{value:{type:String,default:""}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}}},T=E,z=Object(h["a"])(T,S,P,!1,null,null,null),F=z.exports,D={components:{InputText:F},data(){return{path:"",markdown:""}},methods:{add(){this.$emit("notify","creating"),this.$store.dispatch("majig/add",{path:this.path,markdown:this.markdown}).then(t=>{this.$emit("open",!1),this.$emit("notify",""),t.path&&t.path!=this.$route.path?this.$router.push({path:t.path}).catch(()=>{}):this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).catch(t=>{this.$emit("notify",t[0].title)})}}},q=D,J=Object(h["a"])(q,O,M,!1,null,null,null),L=J.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thin tiny"},[a("h2",[t._v("Search")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("InputText",{attrs:{placeholder:"keyword"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("input",{attrs:{type:"submit",value:"search"}})],1)])])])},B=[],H={components:{InputText:F},data(){return{keyword:""}},methods:{search(){if(!this.keyword)return this.$emit("notify","keyword required");this.$emit("open",!1),this.$router.push({name:"submajig",params:{keyword:this.keyword}}).catch(t=>{})}}},R=H,A=Object(h["a"])(R,N,B,!1,null,null,null),G=A.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thin tiny"},[a("h2",[t._v("Sign In")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.signIn(e)}}},[a("InputText",{attrs:{placeholder:"username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("InputPassword",{attrs:{placeholder:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("input",{attrs:{type:"submit",value:"sign in"}})],1)])])])},K=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",t._g({staticClass:"input",attrs:{type:"password"},domProps:{value:t.value}},t.listeners))},V=[],W={props:{value:{type:String,default:""}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}}},X=W,Y=Object(h["a"])(X,Q,V,!1,null,null,null),Z=Y.exports,tt={components:{InputText:F,InputPassword:Z},data(){return{username:"",password:""}},methods:{signIn(){this.$emit("notify","signing in"),this.$store.dispatch("token/signIn",{username:this.username,password:this.password}).then(()=>{this.$emit("open",!1),this.$emit("notify",""),this.password=""}).catch(t=>{if(this.$emit("notify",""),this.password="",t.response){const e=t.response.data;this.$emit("notify",e.errors[0].title)}else console.log(t)})}}},et=tt,at=Object(h["a"])(et,U,K,!1,null,null,null),st=at.exports,it={components:{ParabodyLeft:x},data(){return{status:"",views:{create:L,search:G,signIn:st},view:""}},computed:{signed(){return this.$store.getters["token/signed"]},menu(){return this.$store.getters["token/signed"]?j:v}},methods:{goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},open(t){!1===t||t===this.view?this.view="":this.view=t}}},nt=it,rt=Object(h["a"])(nt,o,l,!1,null,null,null),ot=rt.exports,lt=a("916c"),dt=a.n(lt),ct=a("bc3a"),ut=a.n(ct);const pt={all:{}},ht={},mt={majig(t,e){t.all[e.id]=e,t.all[e.path]=e,t.all={...t.all}},clear(t,e){delete t.all[e.id],delete t.all[e.path],t.all={...t.all}}},vt={async load({commit:t},e){return ut.a.get("/apis/majig",{params:{majigId:e.majigId,path:e.path}}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async add({commit:t},e){return ut.a.post("/apis/majig",{path:e.path,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async update({commit:t},e){return ut.a.put(e.majigId?"/apis/majig/"+e.majigId:"/apis/majig",{path:e.path,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async remove({commit:t},e){return ut.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("clear",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})}};var gt={namespaced:!0,state:pt,getters:ht,mutations:mt,actions:vt};const ft={all:[]},wt={},yt={set(t,e){t.all=e.majigs}},kt={async load({commit:t},e){return ut.a.get("/apis/majigs",{params:{keyword:e.keyword}}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async add({commit:t},e){return ut.a.post("/apis/majigs",{markdown:e.markdown}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async update({commit:t},e){return ut.a.put("/apis/majigs/"+e.majigId,{markdown:e.markdown}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async remove({commit:t},e){return ut.a.delete("/apis/majigs/"+e.majigId,{}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})}};var jt={namespaced:!0,state:ft,getters:wt,mutations:yt,actions:kt};const bt=ut.a.defaults.headers,_t={slug:""},$t={signed(t,e){return Boolean(t.slug)}},Ct={slug(t,e){t.slug=e.slug,bt.common["x-token"]=e.slug,localStorage.setItem("token/slug",JSON.stringify(t.slug))},clear(t,e){t.slug="",delete bt.common["x-token"],localStorage.removeItem("token/slug")}},It={async signIn({commit:t},e){return ut.a.put("/apis/token",{username:e.username,password:e.password}).then(e=>{t("slug",e.data.data)})},async signGet({commit:t},e){return ut.a.get("/apis/token",{}).then(e=>{t("slug",e.data.data)})},async signOut({commit:t},e){t("clear",e)}};let xt=localStorage.getItem("token/slug");xt&&(xt=JSON.parse(xt)),xt&&Ct.slug(_t,{slug:xt});var Ot={namespaced:!0,state:_t,getters:$t,mutations:Ct,actions:It};r.a.use(dt.a);var Mt=new dt.a.Store({modules:{majig:gt,majigs:jt,token:Ot}}),St=a("8c4f"),Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[t._v(t._s(t.status))]),t.isMode("show")?a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v("edit")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("remove")}}},[t._v("remove")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("reset")}}},[t._v("reset")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("save")}}},[t._v("save")])]):t._e(),t.isMode("edit")?a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.toMode("show")}}},[t._v("show")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("remove")}}},[t._v("remove")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("reset")}}},[t._v("reset")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("save")}}},[t._v("save")])]):t._e()])]),a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thick tall"},[t.isMode("show")?a("div",{domProps:{innerHTML:t._s(t.markeddown)}}):t._e(),t.isMode("edit")?a("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})]):t._e()])])])])},Et=[],Tt=a("e0c1"),zt=a.n(Tt),Ft={components:{InputText:F},props:{majigId:{type:String,required:!1}},data(){return{mode:"show",status:"",markdown:""}},created(){this.loadMajig()},watch:{$route:"loadMajig"},computed:{majig(){const t=this.$store.state.majig.all;return this.majigId?t[this.majigId]||{}:t[this.$route.path]||{}},markeddown(){return zt()(this.markdown||"")}},methods:{isMode(t){return this.mode===t},toMode(t){switch(t){case"remove":this.removeMajig().then(()=>{this.mode="show"});break;case"reset":this.markdown=this.majig.markdown||"",this.mode="show";break;case"save":this.updateMajig().then(()=>{this.mode="show"});break;default:this.mode=t;break}},loadMajig(){return this.status="loading",this.markdown=this.majig.markdown||"",this.$store.dispatch("majig/load",{majigId:this.majigId,path:this.$route.path}).then(t=>{this.status="",this.markdown=t.markdown}).catch(t=>{404===t[0].status?this.status="...":this.status=t[0].title})},updateMajig(){return this.status="updating",this.$store.dispatch("majig/update",{majigId:this.majig.id,path:this.$route.path,markdown:this.markdown}).then(t=>{this.status="",this.markdown=t.markdown}).catch(t=>{this.status=t[0].title})},removeMajig(){return this.status="removing",this.$store.dispatch("majig/remove",{majigId:this.majig.id}).then(t=>{this.$router.push("/")}).catch(t=>{this.status=t[0].title})}}},Dt=Ft,qt=Object(h["a"])(Dt,Pt,Et,!1,null,null,null),Jt=qt.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("ParabodyRight",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[a("span",[t._v(t._s(t.status))])]),a("div",{staticClass:"rghter"},[a("a",{class:t.classFilter("created"),on:{click:function(e){return t.toggleFilter("created")}}},[t._v(" Created")]),t._v(" • "),a("a",{class:t.classFilter("updated"),on:{click:function(e){return t.toggleFilter("updated")}}},[t._v(" Updated")]),t._v(" • "),a("span",[t._v(" "+t._s(t.majigs.length||0)+" ")])])])]),a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thick tall"},[a("ul",t._l(t.majigs,(function(e){return a("li",{key:e.id},[a("span",{domProps:{innerHTML:t._s(t.marked(e.markdown))}}),a("span",[a("a",{on:{click:function(a){return t.gotoMajig(e)}}},[t._v(" goto ")]),t._v(" • • "),a("a",{on:{click:function(a){return t.removeMajig(e)}}},[t._v(" remove ")]),t._v(" • "),a("a",{on:{click:function(a){return t.open("editor",e)}}},[t._v(" edit")])])])})),0)])])])])],1)},Nt=[],Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parabody right",class:{open:t.opened,sticky:t.stuck}},[a("div",{staticClass:"prebody"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"rghter mask"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"lefter full"},[a("a",{staticClass:"material-icons full",on:{click:function(e){return t.$emit("open",!1)}}},[t._v(" chevron_right ")])])])]),a(t.views[t.view],{tag:"component",attrs:{majig:t.viewed},on:{goto:t.goto,open:t.open,notify:t.notify}})],1)},Ht=[],Rt={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""},viewed:{type:Object,default:null}},watch:{view(t,e){this.status="",this.opened=!!t}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(t){this.$emit("goto",t)},open(t,e){this.$emit("open",t,e)},notify(t){this.status=t,this.$emit("notify",t)}}},At=Rt,Gt=Object(h["a"])(At,Bt,Ht,!1,null,null,null),Ut=Gt.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thin tiny"},[a("h2",[t._v("Edit")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[a("InputText",{attrs:{placeholder:"markdown"},model:{value:t.majig.markdown,callback:function(e){t.$set(t.majig,"markdown",e)},expression:"majig.markdown"}}),a("input",{attrs:{type:"submit",value:"update"}})],1)])])])},Qt=[],Vt={components:{InputText:F},props:{majig:{type:Object,required:!0}},data(){return{}},methods:{update(){this.$emit("notify","updating"),this.$store.dispatch("majigs/update",{majigId:this.majig.id,markdown:this.majig.markdown}).then(t=>{this.$emit("open",!1),this.$emit("notify","")}).catch(t=>{this.$emit("notify",t[0].title)})}}},Wt=Vt,Xt=Object(h["a"])(Wt,Kt,Qt,!1,null,null,null),Yt=Xt.exports,Zt={components:{ParabodyRight:Ut},props:{keyword:{type:String,required:!1}},data(){return{status:"",filter:"created",views:{editor:Yt},view:"",viewed:null}},created(){this.loadMajigs()},watch:{$route:"loadMajigs"},computed:{majigs(){return this.$store.state.majigs.all||[]}},methods:{marked(t){return zt()(t)},goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},gotoMajig(t){t.path?this.$router.push({path:t.path}):this.$router.push({name:"supmajig",params:{majigId:t.id}})},open(t,e){!1===t||t===this.view&&e===this.viewed?(this.view="",this.viewed=null):t!==this.view?(this.view=t,this.viewed=e):this.viewed=e},toggleFilter(t){this.filter==t?this.filter="!"+t:this.filter=t},classFilter(t){return this.filter==t?"descend":this.filter=="!"+t?"ascend":""},loadMajigs(){this.status="loading",this.$store.dispatch("majigs/load",{keyword:this.keyword}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},editMajig(t){this.status="updating",this.$store.dispatch("majigs/update",{majigId:t.id,markdown:t.markdown}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},removeMajig(t){this.status="removing",this.$store.dispatch("majigs/remove",{majigId:t.id}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})}}},te=Zt,ee=Object(h["a"])(te,Lt,Nt,!1,null,null,null),ae=ee.exports;r.a.use(St["a"]);var se=new St["a"]({routes:[{path:"/",name:"majigs",component:ae},{path:"//:keyword",name:"submajig",component:ae,props:t=>({keyword:t.params.keyword})},{path:"///:majigId",name:"supmajig",component:Jt,props:t=>({majigId:t.params.majigId})},{path:"*",name:"majig",component:Jt}],scrollBehavior(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}}});r.a.config.productionTip=!1;var ie=new r.a({el:"#app",store:Mt,router:se,template:"<app />",components:{App:ot}}),ne=ie,re=(a("ce36"),Object(h["a"])(ne,s,i,!1,null,null,null));e["default"]=re.exports},3267:function(t,e,a){},ce36:function(t,e,a){"use strict";var s=a("3267"),i=a.n(s);i.a}});
//# sourceMappingURL=app.27f4e7dd.js.map