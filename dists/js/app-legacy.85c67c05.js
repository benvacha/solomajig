(function(t){function e(e){for(var s,o,n=e[0],d=e[1],l=e[2],u=0,p=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var d=a[n];0!==i[d]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var c=d;r.push(["1b7c","chunk-vendors"]),a()})({"1b7c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},i=[],r=a("ba4c"),o=a.n(r),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny togler10"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"postbody dark togler01"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("ParabodyLeft",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("router-view")],1)])],1)])])])},d=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","finder")}}},[t._v(" Find")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","signer")}}},[t._v(" Author")])])])},c=[],u={name:"public",components:{},props:{},data(){return{}},methods:{}},p=u,m=a("2877"),h=Object(m["a"])(p,l,c,!1,null,null,null),v=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","creator")}}},[t._v(" Create")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","finder")}}},[t._v(" Find")]),t._v(" • "),a("a",{on:{click:function(e){return t.unsign()}}},[t._v(" Leave")])])])},f=[],w={name:"private",props:{},computed:{signed(){return this.$store.getters["token/signed"]}},methods:{unsign(){this.$emit("open",!1),this.$store.dispatch("token/clear",{}).catch(t=>{})}}},k=w,y=Object(m["a"])(k,g,f,!1,null,null,null),j=y.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parabody left",class:{open:t.opened,sticky:t.stuck}},[a("div",{staticClass:"prebody"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"rghter full"},[a("a",{staticClass:"material-icons full",on:{click:function(e){return t.$emit("open",!1)}}},[t._v(" chevron_left ")])])])]),a(t.views[t.view],{tag:"component",on:{goto:t.goto,open:t.open,notify:t.notify}})],1)},_=[],$={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""}},watch:{view(t,e){this.status="",this.opened=!!t}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(t){this.$emit("goto",t)},open(t){this.$emit("open",t)},notify(t){this.status=t,this.$emit("notify",t)}}},C=$,M=Object(m["a"])(C,b,_,!1,null,null,null),x=M.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("New Majig")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[a("input",{attrs:{type:"submit",value:"Create"}}),a("h2",[t._v("Path")]),a("InputText",{attrs:{placeholder:"/path"},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}})],1),a("h2",[t._v("Markdown")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})])])])])},O=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",t._g({staticClass:"input",attrs:{type:"text"},domProps:{value:t.value}},t.listeners))},P=[],E={props:{value:{type:String,default:""}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}}},T=E,F=Object(m["a"])(T,S,P,!1,null,null,null),z=F.exports,D={components:{InputText:z},data(){return{path:"",markdown:""}},methods:{add(){this.$emit("notify","creating"),this.$store.dispatch("majig/add",{path:this.path,markdown:this.markdown}).then(t=>{this.$emit("open",!1),t.path&&t.path!=this.$route.path?this.$router.push({path:t.path}).catch(()=>{}):this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).catch(t=>{this.$emit("notify",t[0].title)})}}},N=D,R=Object(m["a"])(N,I,O,!1,null,null,null),L=R.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("Find Majig")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("input",{attrs:{type:"submit",value:"Search"}}),a("h2",[t._v("Keyword")]),a("InputText",{attrs:{placeholder:"keyword"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)])])])},J=[],A={components:{InputText:z},data(){return{keyword:""}},methods:{search(){if(!this.keyword)return this.$emit("notify","keyword required");this.$emit("open",!1),this.$router.push({name:"submajig",params:{keyword:this.keyword}}).catch(t=>{})}}},B=A,H=Object(m["a"])(B,q,J,!1,null,null,null),U=H.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("Sign In")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.sign(e)}}},[a("input",{attrs:{type:"submit",value:"Authorize"}}),a("h2",[t._v("Credentials")]),a("InputText",{attrs:{placeholder:"username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("InputPassword",{attrs:{placeholder:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])])])},G=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",t._g({staticClass:"input",attrs:{type:"password"},domProps:{value:t.value}},t.listeners))},V=[],W={props:{value:{type:String,default:""}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}}},X=W,Y=Object(m["a"])(X,Q,V,!1,null,null,null),Z=Y.exports,tt={components:{InputText:z,InputPassword:Z},data(){return{username:"",password:""}},methods:{sign(){this.$emit("notify","signing"),this.$store.dispatch("token/sign",{username:this.username,password:this.password}).then(()=>{this.$emit("open",!1),this.password=""}).catch(t=>{this.$emit("notify",t[0].title)})}}},et=tt,at=Object(m["a"])(et,K,G,!1,null,null,null),st=at.exports,it={components:{ParabodyLeft:x},data(){return{status:"",views:{creator:L,finder:U,signer:st},view:"",viewed:null}},computed:{signed(){return this.$store.getters["token/signed"]},menu(){return this.signed?j:v}},methods:{goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},open(t){!1===t||t===this.view?this.view="":this.view=t}}},rt=it,ot=Object(m["a"])(rt,n,d,!1,null,null,null),nt=ot.exports,dt=a("916c"),lt=a.n(dt),ct=a("bc3a"),ut=a.n(ct);const pt={all:{}},mt={},ht={majig(t,e){t.all[e.id]=e,t.all[e.path]=e,t.all={...t.all}},clear(t,e){delete t.all[e.id],delete t.all[e.path],t.all={...t.all}}},vt={async load({commit:t},e){return ut.a.get("/apis/majig",{params:{majigId:e.majigId,path:e.path}}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async add({commit:t},e){return ut.a.post("/apis/majig",{path:e.path,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async update({commit:t},e){return ut.a.put(e.majigId?"/apis/majig/"+e.majigId:"/apis/majig",{path:e.path,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async remove({commit:t},e){return ut.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("clear",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})}};var gt={namespaced:!0,state:pt,getters:mt,mutations:ht,actions:vt};const ft={all:[],filter:"-updated",keyword:void 0},wt={},kt={set(t,e){t.all=e.majigs},filter(t,e){t.filter=e.filter||"-updated"},keyword(t,e){t.keyword=e.keyword||void 0}},yt={async load({commit:t,state:e},a){return ut.a.get("/apis/majigs",{params:{keyword:a.keyword,filter:a.filter}}).then(e=>(t("set",{majigs:e.data.data}),t("filter",{filter:a.filter}),t("keyword",{keyword:a.keyword}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async add({commit:t,state:e},a){return ut.a.post("/apis/majigs",{markdown:a.markdown,keyword:e.keyword,filter:e.filter}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async update({commit:t,state:e},a){return ut.a.put("/apis/majigs/"+a.majigId,{markdown:a.markdown,keyword:e.keyword,filter:e.filter}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async remove({commit:t,filter:e},a){return ut.a.delete("/apis/majigs/"+a.majigId,{params:{keyword:ft.keyword,filter:ft.filter}}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})}};var jt={namespaced:!0,state:ft,getters:wt,mutations:kt,actions:yt};const bt=ut.a.defaults.headers,_t={slug:""},$t={signed(t,e){return Boolean(t.slug)}},Ct={slug(t,e){t.slug=e.slug,bt.common["x-token"]=e.slug,localStorage.setItem("token/slug",JSON.stringify(t.slug))},clear(t,e){t.slug="",delete bt.common["x-token"],localStorage.removeItem("token/slug")}},Mt={async sign({commit:t},e){return ut.a.put("/apis/token",{username:e.username,password:e.password}).then(e=>{t("slug",e.data.data)}).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async clear({commit:t},e){t("clear",e)}};let xt=localStorage.getItem("token/slug");xt&&(xt=JSON.parse(xt)),xt&&Ct.slug(_t,{slug:xt});var It={namespaced:!0,state:_t,getters:$t,mutations:Ct,actions:Mt};o.a.use(lt.a);var Ot=new lt.a.Store({modules:{majig:gt,majigs:jt,token:It}}),St=a("8c4f"),Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[t._v(" "+t._s(t.status)+" ")]),t.isMode("show")?a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v(" Edit")]),t._v("• "),a("a",{on:{click:function(e){return t.toMode("remove")}}},[t._v(" Remove")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("reset")}}},[t._v(" Reset")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")])]):t._e(),t.isMode("edit")?a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.toMode("show")}}},[t._v(" Show")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("remove")}}},[t._v(" Remove")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("reset")}}},[t._v(" Reset")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")])]):t._e()])]),a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thin stack"}),a("div",{staticClass:"bodyer thin stack"},[t.isMode("show")?a("div",{domProps:{innerHTML:t._s(t.markeddown)}}):t._e(),t.isMode("edit")?a("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})]):t._e()]),a("div",{staticClass:"bodyer thin stack"})])])])},Et=[],Tt=a("e0c1"),Ft=a.n(Tt),zt={components:{InputText:z},props:{majigId:{type:String,required:!1}},data(){return{mode:"show",status:"",markdown:""}},created(){this.loadMajig()},watch:{$route:"loadMajig"},computed:{majig(){const t=this.$store.state.majig.all;return this.majigId?t[this.majigId]||{}:t[this.$route.path]||{}},markeddown(){return Ft()(this.markdown||"")}},methods:{isMode(t){return this.mode===t},toMode(t){switch(t){case"remove":this.removeMajig().then(()=>{this.mode="show"});break;case"reset":this.markdown=this.majig.markdown||"",this.mode="show";break;case"save":this.updateMajig().then(()=>{this.mode="show"});break;default:this.mode=t;break}},loadMajig(){return this.status="loading",this.markdown=this.majig.markdown||"",this.$store.dispatch("majig/load",{majigId:this.majigId,path:this.$route.path}).then(t=>{this.status="",this.markdown=t.markdown}).catch(t=>{404===t[0].status?this.status="...":this.status=t[0].title})},updateMajig(){return this.status="updating",this.$store.dispatch("majig/update",{majigId:this.majig.id,path:this.$route.path,markdown:this.markdown}).then(t=>{this.status="",this.markdown=t.markdown}).catch(t=>{this.status=t[0].title})},removeMajig(){return this.status="removing",this.$store.dispatch("majig/remove",{majigId:this.majig.id}).then(t=>{this.$router.push("/")}).catch(t=>{this.status=t[0].title})}}},Dt=zt,Nt=Object(m["a"])(Dt,Pt,Et,!1,null,null,null),Rt=Nt.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("ParabodyRight",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[a("span",[t._v(t._s(t.status))])]),a("div",{staticClass:"rghter"},[a("a",{class:t.classFilter("created"),on:{click:function(e){return t.toggleFilter("created")}}},[t._v(" Created")]),t._v(" • "),a("a",{class:t.classFilter("updated"),on:{click:function(e){return t.toggleFilter("updated")}}},[t._v(" Updated")]),t._v(" • "),a("span",[t._v(" "+t._s(t.majigs.length||0)+" ")])])])]),a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thin stack"}),t.majigs.length?t._e():a("div",{staticClass:"bodyer thin stack"},[a("p",[t._v("No Results")])]),t._l(t.majigs,(function(e){return a("div",{key:e.id,staticClass:"bodyer thin stack"},[a("div",{domProps:{innerHTML:t._s(t.marked(e.markdown))}}),a("div",{staticClass:"horzer dim"},[t.signed?a("div",{staticClass:"rghter"},[a("a",{on:{click:function(a){return t.gotoMajig(e)}}},[t._v(" goto ")]),t._v(" • • "),a("a",{on:{click:function(a){return t.removeMajig(e)}}},[t._v(" remove ")]),t._v(" • "),a("a",{on:{click:function(a){return t.open("editor",e)}}},[t._v(" edit")])]):t._e()])])})),a("div",{staticClass:"bodyer thin stack"})],2)])])],1)},qt=[],Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parabody right",class:{open:t.opened,sticky:t.stuck}},[a("div",{staticClass:"prebody"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"rghter mask"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"lefter full"},[a("a",{staticClass:"material-icons full",on:{click:function(e){return t.$emit("open",!1)}}},[t._v(" chevron_right ")])])])]),a(t.views[t.view],{tag:"component",attrs:{viewed:t.viewed},on:{goto:t.goto,open:t.open,notify:t.notify}})],1)},At=[],Bt={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""},viewed:{type:Object,default:null}},watch:{view(t,e){this.status="",this.opened=!!t}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(t){this.$emit("goto",t)},open(t,e){this.$emit("open",t,e)},notify(t){this.status=t,this.$emit("notify",t)}}},Ht=Bt,Ut=Object(m["a"])(Ht,Jt,At,!1,null,null,null),Kt=Ut.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h2",[t._v("Edit Majig")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[a("input",{attrs:{type:"submit",value:"Update"}})]),a("h2",[t._v("Markdown")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.majig.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.majig.markdown,expression:"majig.markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.majig.markdown},on:{input:function(e){e.target.composing||t.$set(t.majig,"markdown",e.target.value)}}})])])])])},Qt=[],Vt={components:{InputText:z},props:{viewed:{type:Object,required:!0}},data(){return{}},computed:{majig(){return this.viewed}},methods:{update(){this.$emit("notify","updating"),this.$store.dispatch("majigs/update",{majigId:this.majig.id,markdown:this.majig.markdown}).then(t=>{this.$emit("open",!1)}).catch(t=>{this.$emit("notify",t[0].title)})}}},Wt=Vt,Xt=Object(m["a"])(Wt,Gt,Qt,!1,null,null,null),Yt=Xt.exports,Zt={components:{ParabodyRight:Kt},props:{keyword:{type:String,required:!1}},data(){return{status:"",views:{editor:Yt},view:"",viewed:null}},created(){this.loadMajigs()},watch:{$route:"loadMajigs"},computed:{signed(){return this.$store.getters["token/signed"]},filter(){return this.$store.state.majigs.filter},majigs(){return this.$store.state.majigs.all||[]}},methods:{marked(t){return Ft()(t)},goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},gotoMajig(t){t.path?this.$router.push({path:t.path}):this.$router.push({name:"supmajig",params:{majigId:t.id}})},open(t,e){!1===t||t===this.view&&e===this.viewed?(this.view="",this.viewed=null):t!==this.view?(this.view=t,this.viewed=e):this.viewed=e},toggleFilter(t){this.filter==t?this.$store.dispatch("majigs/load",{filter:"-"+t,keyword:this.keyword}):this.$store.dispatch("majigs/load",{filter:t,keyword:this.keyword})},classFilter(t){return this.filter==t?"descend":this.filter=="-"+t?"ascend":""},loadMajigs(){this.open(!1),this.status="loading",this.$store.dispatch("majigs/load",{filter:this.filter,keyword:this.keyword}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},editMajig(t){this.status="updating",this.$store.dispatch("majigs/update",{majigId:t.id,markdown:t.markdown}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},removeMajig(t){this.status="removing",this.$store.dispatch("majigs/remove",{majigId:t.id}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})}}},te=Zt,ee=Object(m["a"])(te,Lt,qt,!1,null,null,null),ae=ee.exports;o.a.use(St["a"]);var se=new St["a"]({routes:[{path:"/",name:"majigs",component:ae},{path:"//:keyword",name:"submajig",component:ae,props:t=>({keyword:t.params.keyword})},{path:"///:majigId",name:"supmajig",component:Rt,props:t=>({majigId:t.params.majigId})},{path:"*",name:"majig",component:Rt}],scrollBehavior(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}}});o.a.config.productionTip=!1;var ie=new o.a({el:"#app",store:Ot,router:se,template:"<app />",components:{App:nt}}),re=ie,oe=(a("ce36"),Object(m["a"])(re,s,i,!1,null,null,null));e["default"]=oe.exports},3267:function(t,e,a){},ce36:function(t,e,a){"use strict";var s=a("3267"),i=a.n(s);i.a}});
//# sourceMappingURL=app-legacy.85c67c05.js.map