(function(t){function e(e){for(var i,n,o=e[0],d=e[1],l=e[2],c=0,p=[];c<o.length;c++)n=o[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var d=a[o];0!==s[d]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=d;r.push(["1b7c","chunk-vendors"]),a()})({"1b7c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},s=[],r=a("ba4c"),n=a.n(r),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("div",{staticClass:"prebody tiny togler10"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"postbody dark togler01"},[a(t.menu,{tag:"component",on:{goto:t.goto,open:t.open}})],1),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("ParabodyLeft",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("router-view")],1)])],1)])])])},d=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","finder")}}},[t._v(" Find")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","signer")}}},[t._v(" Author")])])])},u=[],c={name:"public",components:{},props:{},data(){return{}},methods:{}},p=c,h=a("2877"),m=Object(h["a"])(p,l,u,!1,null,null,null),v=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter"},[a("a",{on:{click:function(e){return t.$emit("goto","/")}}},[t._v(" SoloMajig")])]),a("div",{staticClass:"rghter"},[a("a",{on:{click:function(e){return t.$emit("open","creator")}}},[t._v(" Create")]),t._v(" • "),a("a",{on:{click:function(e){return t.$emit("open","finder")}}},[t._v(" Find")]),t._v(" • "),a("a",{on:{click:function(e){return t.unsign()}}},[t._v(" Leave")])])])},f=[],w={name:"private",props:{},computed:{signed(){return this.$store.getters["token/signed"]}},methods:{unsign(){this.$emit("open",!1),this.$store.dispatch("majig/clear",{}).then(()=>this.$store.dispatch("majigs/clear",{})).then(()=>this.$store.dispatch("token/clear",{})).catch(t=>{console.log(t)})}}},_=w,b=Object(h["a"])(_,g,f,!1,null,null,null),y=b.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parabody left",class:{open:t.opened,sticky:t.stuck}},[a("div",{staticClass:"prebody"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"lefter mask"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"rghter full"},[a("a",{staticClass:"material-icons full",on:{click:function(e){return t.$emit("open",!1)}}},[t._v(" chevron_left ")])])])]),a(t.views[t.view],{tag:"component",on:{goto:t.goto,open:t.open,notify:t.notify}})],1)},k=[],$={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""}},watch:{view(t,e){this.status="",this.opened=!!t}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(t){this.$emit("goto",t)},open(t){this.$emit("open",t)},notify(t){this.status=t,this.$emit("notify",t)}}},C=$,M=Object(h["a"])(C,j,k,!1,null,null,null),I=M.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("New Majig")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[a("input",{attrs:{type:"submit",value:"Create"}}),a("h2",[t._v("Path")]),a("InputText",{attrs:{placeholder:"/path"},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}})],1),a("h2",[t._v("Markdown")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})])])])])},O=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",t._g({staticClass:"input",attrs:{type:"text"},domProps:{value:t.value}},t.listeners))},P=[],E={props:{value:{type:String,default:""}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}}},D=E,T=Object(h["a"])(D,S,P,!1,null,null,null),F=T.exports,R={components:{InputText:F},data(){return{path:"",markdown:""}},methods:{add(){this.$emit("notify","creating"),this.$store.dispatch("majig/add",{path:this.path,markdown:this.markdown}).then(t=>{this.$emit("open",!1),t.path&&t.path!=this.$route.path?this.$router.push({path:t.path}).catch(()=>{}):this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).catch(t=>{this.$emit("notify",t[0].title)})}}},z=R,L=Object(h["a"])(z,x,O,!1,null,null,null),N=L.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("GoTo Majig")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.goto(t.path)}}},[a("InputText",{attrs:{placeholder:"/path"},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}}),a("input",{attrs:{type:"submit",value:"GoTo"}})],1),a("h1",[t._v("Find Majig")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("InputText",{attrs:{placeholder:"keyword"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("input",{attrs:{type:"submit",value:"Find"}})],1),a("h2",[t._v("Results "),a("span",[t._v(t._s(t.majigs.length))])]),a("ul",[t.majigs.length?t._e():a("li",[a("div",[t._v("No Results")])]),t._l(t.majigs,(function(e){return a("li",[a("a",{on:{click:function(a){return t.gotoMajig(e)}}},[a("span",[t._v(" "+t._s(t._f("previewed")(e.markdown,t.keyword))+" ")]),a("h5",[t._v(t._s(e.path))])])])}))],2)])])])},A=[],J={components:{InputText:F},filters:{previewed:(t,e)=>{const a=90,i=t.indexOf(e);let s=a-e.length;return s=Math.floor(s/2),t.substring(i-s,i+e.length+s)}},data(){return{path:"",keyword:"",majigs:[]}},methods:{goto(t){"/"!==t[0]&&(t="/"+t),this.$router.push(t).catch(t=>{}),this.$emit("open",!1)},gotoMajig(t){t.path?this.$router.push({path:t.path}):this.$router.push({name:"supmajig",params:{majigId:t.id}}),this.$emit("open",!1)},search(){if(!this.keyword)return this.$emit("notify","keyword required");this.$emit("notify","searching"),this.$store.dispatch("majigs/search",{keyword:this.keyword}).then(t=>{this.$emit("notify",""),this.majigs=t}).catch(t=>{this.status=t[0].title})}}},U=J,B=Object(h["a"])(U,q,A,!1,null,null,null),G=B.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h1",[t._v("Sign In")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.sign(e)}}},[a("input",{attrs:{type:"submit",value:"Authorize"}}),a("h2",[t._v("Credentials")]),a("InputText",{attrs:{placeholder:"username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("InputPassword",{attrs:{placeholder:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])])])},V=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",t._g({staticClass:"input",attrs:{type:"password"},domProps:{value:t.value}},t.listeners))},Q=[],W={props:{value:{type:String,default:""}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}}},X=W,Y=Object(h["a"])(X,K,Q,!1,null,null,null),Z=Y.exports,tt={components:{InputText:F,InputPassword:Z},data(){return{username:"",password:""}},methods:{sign(){this.$emit("notify","signing"),this.$store.dispatch("token/sign",{username:this.username,password:this.password}).then(()=>{this.$emit("open",!1),this.password=""}).catch(t=>{this.$emit("notify",t[0].title)})}}},et=tt,at=Object(h["a"])(et,H,V,!1,null,null,null),it=at.exports,st={components:{ParabodyLeft:I},data(){return{status:"",views:{creator:N,finder:G,signer:it},view:"",viewed:null}},computed:{signed(){return this.$store.getters["token/signed"]},menu(){return this.signed?y:v}},methods:{goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},open(t){!1===t||t===this.view?this.view="":this.view=t}}},rt=st,nt=Object(h["a"])(rt,o,d,!1,null,null,null),ot=nt.exports,dt=a("916c"),lt=a.n(dt),ut=a("bc3a"),ct=a.n(ut);const pt={all:{}},ht={},mt={majig(t,e){t.all[e.id]=e,t.all[e.path]=e,t.all={...t.all}},remove(t,e){delete t.all[e.id],delete t.all[e.path],t.all={...t.all}},clear(t,e){t.all={}}},vt={async load({commit:t},e){return ct.a.get("/apis/majig",{params:{majigId:e.majigId,path:e.path}}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async add({commit:t},e){return ct.a.post("/apis/majig",{path:e.path,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async update({commit:t},e){return ct.a.put(e.majigId?"/apis/majig/"+e.majigId:"/apis/majig",{path:e.path,markdown:e.markdown}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async publish({commit:t},e){return ct.a.put("/apis/majig/"+e.majigId+"/published",{}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async unpublish({commit:t},e){return ct.a.put("/apis/majig/"+e.majigId+"/unpublished",{}).then(e=>(t("majig",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async remove({commit:t},e){return ct.a.delete("/apis/majig/"+e.majigId,{}).then(e=>(t("remove",e.data.data),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async clear({commit:t},e){t("clear",e)}};var gt={namespaced:!0,state:pt,getters:ht,mutations:mt,actions:vt};const ft={all:[],filter:"-updated",keyword:void 0},wt={},_t={set(t,e){t.all=e.majigs},filter(t,e){t.filter=e.filter||"-updated"},keyword(t,e){t.keyword=e.keyword||void 0},clear(t,e){t.all=[]}},bt={async load({commit:t,state:e},a){return ct.a.get("/apis/majigs",{params:{keyword:a.keyword,filter:a.filter}}).then(e=>(t("set",{majigs:e.data.data}),t("filter",{filter:a.filter}),t("keyword",{keyword:a.keyword}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async search({commit:t,state:e},a){return ct.a.get("/apis/majigs",{params:{keyword:a.keyword,filter:a.filter}}).then(t=>t.data.data).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async add({commit:t,state:e},a){return ct.a.post("/apis/majigs",{markdown:a.markdown,keyword:e.keyword,filter:e.filter}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async update({commit:t,state:e},a){return ct.a.put("/apis/majigs/"+a.majigId,{markdown:a.markdown,keyword:e.keyword,filter:e.filter}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async publish({commit:t},e){return ct.a.put("/apis/majigs/"+e.majigId+"/published",{keyword:ft.keyword,filter:ft.filter}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async unpublish({commit:t},e){return ct.a.put("/apis/majigs/"+e.majigId+"/unpublished",{keyword:ft.keyword,filter:ft.filter}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async remove({commit:t,filter:e},a){return ct.a.delete("/apis/majigs/"+a.majigId,{params:{keyword:ft.keyword,filter:ft.filter}}).then(e=>(t("set",{majigs:e.data.data}),e.data.data)).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async clear({commit:t},e){t("clear",e)}};var yt={namespaced:!0,state:ft,getters:wt,mutations:_t,actions:bt};const jt=ct.a.defaults.headers,kt={slug:""},$t={signed(t,e){return Boolean(t.slug)}},Ct={slug(t,e){t.slug=e.slug,jt.common["x-token"]=e.slug,localStorage.setItem("token/slug",JSON.stringify(t.slug))},clear(t,e){t.slug="",delete jt.common["x-token"],localStorage.removeItem("token/slug")}},Mt={async sign({commit:t},e){return ct.a.put("/apis/token",{username:e.username,password:e.password}).then(e=>{t("slug",e.data.data)}).catch(t=>{throw t.response?t.response.data.errors:[{title:"client error"}]})},async clear({commit:t},e){t("clear",e)}};let It=localStorage.getItem("token/slug");It&&(It=JSON.parse(It)),It&&Ct.slug(kt,{slug:It});var xt={namespaced:!0,state:kt,getters:$t,mutations:Ct,actions:Mt};n.a.use(lt.a);var Ot=new lt.a.Store({modules:{majig:gt,majigs:yt,token:xt}}),St=a("8c4f"),Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("ParabodyRight",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thin stack"},[a("div",{staticClass:"horzer dim thin"},[a("div",{staticClass:"lefter togler10"},[t._v(" "+t._s(t.status||t.$route.path)+" ")]),t.signed?a("div",{staticClass:"rghter togler10"},[t.isMode("show")?[a("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • ")]:t._e(),t.isMode("edit")?[a("a",{on:{click:function(e){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")]),t._v(" • ")]:t._e(),t.isMode("proof")?[a("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")]),t._v(" • ")]:t._e(),a("a",{on:{click:function(e){return t.open("meta",t.majig)}}},[t._v(" Meta")])],2):t._e(),a("div",{staticClass:"cntrer togler01"},[t._v(" "+t._s(t.status||t.$route.path)+" ")]),t.signed?a("div",{staticClass:"cntrer togler01"},[t.isMode("show")?[a("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • ")]:t._e(),t.isMode("edit")?[a("a",{on:{click:function(e){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")]),t._v(" • ")]:t._e(),t.isMode("proof")?[a("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")]),t._v(" • ")]:t._e(),a("a",{on:{click:function(e){return t.open("meta",t.majig)}}},[t._v(" Meta")])],2):t._e()])]),a("div",{staticClass:"bodyer thin stack"},[t.isMode("show")||t.isMode("proof")?a("div",{domProps:{innerHTML:t._s(t.markeddown)}}):t._e(),t.isMode("edit")?a("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})]):t._e()]),a("div",{staticClass:"bodyer thin stack"},[a("div",{staticClass:"horzer dim"},[a("div",{staticClass:"cntrer thin"},[t._v(" "+t._s(t._f("datetime")(t.majig.created))+" • • • "+t._s(t._f("datetime")(t.majig.updated))+" "),a("br"),t._v(" "+t._s(t._f("datetime")(t.majig.published))+" ")])])])])])])],1)},Et=[],Dt=a("e0c1"),Tt=a.n(Dt),Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parabody right",class:{open:t.opened,sticky:t.stuck}},[a("div",{staticClass:"prebody"},[a("div",{staticClass:"horzer"},[a("div",{staticClass:"rghter mask"},[t._v(" "+t._s(t.status)+" ")]),a("div",{staticClass:"lefter full"},[a("a",{staticClass:"material-icons full",on:{click:function(e){return t.$emit("open",!1)}}},[t._v(" chevron_right ")])])])]),a(t.views[t.view],{tag:"component",attrs:{viewed:t.viewed},on:{goto:t.goto,open:t.open,notify:t.notify}})],1)},Rt=[],zt={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""},viewed:{type:Object,default:null}},watch:{view(t,e){this.status="",this.opened=!!t}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(t){this.$emit("goto",t)},open(t,e){this.$emit("open",t,e)},notify(t){this.status=t,this.$emit("notify",t)}}},Lt=zt,Nt=Object(h["a"])(Lt,Ft,Rt,!1,null,null,null),qt=Nt.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h2",[t._v("About Majig")]),a("ul",[a("li",[a("div",[t._v(" published: "),a("b"),a("span",[t._v(t._s(t._f("datetime")(t.viewed.published)))])])]),a("li",[a("div",[t._v(" updated: "),a("b"),a("span",[t._v(t._s(t._f("datetime")(t.viewed.updated)))])])]),a("li",[a("div",[t._v(" created: "),a("b"),a("span",[t._v(t._s(t._f("datetime")(t.viewed.created)))])])])]),a("h2",[t._v("Publish Majig")]),t.viewed.published?t._e():a("form",{on:{submit:function(e){return e.preventDefault(),t.publish(e)}}},[a("input",{attrs:{type:"submit",disabled:!t.viewed.id,value:"Publish"}})]),t.viewed.published?a("form",{on:{submit:function(e){return e.preventDefault(),t.unpublish(e)}}},[a("input",{attrs:{type:"submit",disabled:!t.viewed.id,value:"UnPublish"}})]):t._e(),a("h2",[t._v("Remove Majig")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.remove(e)}}},[a("input",{attrs:{type:"submit",disabled:!t.viewed.id,value:"Remove"}})])])])])},Jt=[],Ut={components:{InputText:F},filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";var e=new Date(t);return e.toLocaleString("sv-SE")}},props:{viewed:{type:Object,required:!0}},data(){return{}},computed:{},methods:{publish(){this.$emit("notify","publishing"),this.$store.dispatch("majig/publish",{majigId:this.viewed.id}).then(t=>{this.$emit("notify","")}).catch(t=>{this.$emit("notify",t[0].title)})},unpublish(){this.$emit("notify","unpublishing"),this.$store.dispatch("majig/unpublish",{majigId:this.viewed.id}).then(t=>{this.$emit("notify","")}).catch(t=>{this.$emit("notify",t[0].title)})},remove(){this.$emit("notify","removing"),this.$store.dispatch("majig/remove",{majigId:this.viewed.id}).then(t=>{this.$emit("open",!1)}).catch(t=>{this.$emit("notify",t[0].title)})}}},Bt=Ut,Gt=Object(h["a"])(Bt,At,Jt,!1,null,null,null),Ht=Gt.exports,Vt={components:{InputText:F,ParabodyRight:qt},filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";var e=new Date(t);return e.toLocaleString("sv-SE")}},props:{majigId:{type:String,required:!1}},data(){return{mode:"show",status:"",markdown:"",views:{meta:Ht},view:"",viewed:null}},created(){this.loadMajig()},watch:{$route:"loadMajig",signed:"loadMajig",majig:"loadViewed"},computed:{signed(){return this.$store.getters["token/signed"]},majig(){const t=this.$store.state.majig.all;return this.majigId?t[this.majigId]||{}:t[this.$route.path]||{}},markeddown(){return Tt()(this.markdown||"Majig Not Found")}},methods:{goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},open(t,e){!1===t||t===this.view&&e===this.viewed?(this.view="",this.viewed=null):t!==this.view?(this.view=t,this.viewed=e):this.viewed=e},isMode(t){return this.mode===t},toMode(t){switch(t){case"cancel":this.markdown=this.majig.markdown||"",this.mode="show";break;case"save":this.updateMajig().then(()=>{this.mode="show"});break;default:this.mode=t;break}},loadViewed(){this.viewed=this.majig,this.markdown=this.majig.markdown},loadMajig(){return this.status="loading",this.open(!1),this.$store.dispatch("majig/load",{majigId:this.majigId,path:this.$route.path}).then(t=>{this.status=""}).catch(t=>{404===t[0].status?this.status="":this.status=t[0].title})},updateMajig(){return this.status="updating",this.$store.dispatch("majig/update",{majigId:this.majig.id,path:this.$route.path,markdown:this.markdown}).then(t=>{this.status=""}).catch(t=>{this.status=t[0].title})}}},Kt=Vt,Qt=Object(h["a"])(Kt,Pt,Et,!1,null,null,null),Wt=Qt.exports,Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("ParabodyRight",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),a("div",{staticClass:"body"},[a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thin stack"},[a("div",{staticClass:"horzer dim thin"},[a("div",{staticClass:"lefter"},[a("span",[t._v(t._s(t.status||t.$route.path))])]),a("div",{staticClass:"rghter"},[a("a",{class:t.classFilter("created"),on:{click:function(e){return t.toggleFilter("created")}}},[t._v(" Created")]),t._v(" • "),a("a",{class:t.classFilter("updated"),on:{click:function(e){return t.toggleFilter("updated")}}},[t._v(" Updated")]),t._v(" • "),a("span",[t._v(" "+t._s(t.majigs.length||0)+" ")])])])]),t.majigs.length?t._e():a("div",{staticClass:"bodyer thin stack"},[a("p",[t._v("Majigs Not Found")])]),t._l(t.majigs,(function(e){return a("div",{key:e.id,staticClass:"bodyer thin stack"},[a("div",{domProps:{innerHTML:t._s(t.marked(e.markdown))}}),t._m(0,!0),a("div",{staticClass:"substack horzer dim"},[a("div",{staticClass:"cntrer thin"},[a("span",[t._v(" "+t._s(t._f("datetime")(e.created))+" • "+t._s(t._f("datetime")(e.updated))+" ")]),a("br"),t.signed?[a("a",{on:{click:function(a){return t.open("editor",e)}}},[t._v(" edit ")]),t._v(" • "),a("a",{on:{click:function(a){return t.open("metas",e)}}},[t._v(" meta ")]),t._v(" • ")]:t._e(),a("a",{on:{click:function(a){return t.gotoMajig(e)}}},[t._v(" goto ")]),t._v(" • "),a("span",[t._v(" "+t._s(t._f("datetime")(e.published))+" ")])],2)])])})),a("div",{staticClass:"bodyer thin stack"})],2)])])],1)},Yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"supstack"},[a("br")])}],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h2",[t._v("Edit Majig")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[a("input",{attrs:{type:"submit",value:"Update"}})]),a("h2",[t._v("Markdown")]),a("form",{staticClass:"editor",on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.majig.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.majig.markdown,expression:"majig.markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.majig.markdown},on:{input:function(e){e.target.composing||t.$set(t.majig,"markdown",e.target.value)}}})])])])])},te=[],ee={components:{InputText:F},props:{viewed:{type:Object,required:!0}},data(){return{}},computed:{majig(){return this.viewed}},methods:{update(){this.$emit("notify","updating"),this.$store.dispatch("majigs/update",{majigId:this.majig.id,markdown:this.majig.markdown}).then(t=>{this.$emit("open",!1)}).catch(t=>{this.$emit("notify",t[0].title)})}}},ae=ee,ie=Object(h["a"])(ae,Zt,te,!1,null,null,null),se=ie.exports,re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer para"},[a("h2",[t._v("About Majig")]),a("ul",[a("li",[a("div",[t._v(" published: "),a("b"),a("span",[t._v(t._s(t._f("datetime")(t.viewed.published)))])])]),a("li",[a("div",[t._v(" updated: "),a("b"),a("span",[t._v(t._s(t._f("datetime")(t.viewed.updated)))])])]),a("li",[a("div",[t._v(" created: "),a("b"),a("span",[t._v(t._s(t._f("datetime")(t.viewed.created)))])])])]),a("h2",[t._v("Publish Majig")]),t.viewed.published?t._e():a("form",{on:{submit:function(e){return e.preventDefault(),t.publish(e)}}},[a("input",{attrs:{type:"submit",disabled:!t.viewed.id,value:"Publish"}})]),t.viewed.published?a("form",{on:{submit:function(e){return e.preventDefault(),t.unpublish(e)}}},[a("input",{attrs:{type:"submit",disabled:!t.viewed.id,value:"UnPublish"}})]):t._e(),a("h2",[t._v("Remove Majig")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.remove(e)}}},[a("input",{attrs:{type:"submit",disabled:!t.viewed.id,value:"Remove"}})])])])])},ne=[],oe={components:{InputText:F},filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";var e=new Date(t);return e.toLocaleString("sv-SE")}},props:{viewed:{type:Object,required:!0}},data(){return{}},computed:{},methods:{publish(){this.$emit("notify","publishing"),this.$store.dispatch("majigs/publish",{majigId:this.viewed.id}).then(t=>{this.$emit("open",!1)}).catch(t=>{this.$emit("notify",t[0].title)})},unpublish(){this.$emit("notify","unpublishing"),this.$store.dispatch("majigs/unpublish",{majigId:this.viewed.id}).then(t=>{this.$emit("open",!1)}).catch(t=>{this.$emit("notify",t[0].title)})},remove(){this.$emit("notify","removing"),this.$store.dispatch("majigs/remove",{majigId:this.viewed.id}).then(t=>{this.$emit("open",!1)}).catch(t=>{this.$emit("notify",t[0].title)})}}},de=oe,le=Object(h["a"])(de,re,ne,!1,null,null,null),ue=le.exports,ce={components:{ParabodyRight:qt},filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";var e=new Date(t);return e.toLocaleString("sv-SE")}},props:{keyword:{type:String,required:!1}},data(){return{status:"",views:{editor:se,metas:ue},view:"",viewed:null}},created(){this.loadMajigs()},watch:{$route:"loadMajigs",signed:"loadMajigs"},computed:{signed(){return this.$store.getters["token/signed"]},filter(){return this.$store.state.majigs.filter},majigs(){return this.$store.state.majigs.all||[]}},methods:{marked(t){return Tt()(t)},goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},gotoMajig(t){t.path?this.$router.push({path:t.path}):this.$router.push({name:"supmajig",params:{majigId:t.id}})},open(t,e){!1===t||t===this.view&&e===this.viewed?(this.view="",this.viewed=null):t!==this.view?(this.view=t,this.viewed=e):this.viewed=e},toggleFilter(t){this.status="sorting",this.filter==t?this.$store.dispatch("majigs/load",{filter:"-"+t,keyword:this.keyword}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title}):this.$store.dispatch("majigs/load",{filter:t,keyword:this.keyword}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},classFilter(t){return this.filter==t?"descend":this.filter=="-"+t?"ascend":""},loadMajigs(){this.open(!1),this.status="loading",this.$store.dispatch("majigs/load",{filter:this.filter,keyword:this.keyword}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},editMajig(t){this.status="updating",this.$store.dispatch("majigs/update",{majigId:t.id,markdown:t.markdown}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},removeMajig(t){this.status="removing",this.$store.dispatch("majigs/remove",{majigId:t.id}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})}}},pe=ce,he=Object(h["a"])(pe,Xt,Yt,!1,null,null,null),me=he.exports;n.a.use(St["a"]);var ve=new St["a"]({routes:[{path:"/",name:"majigs",component:me},{path:"//:keyword",name:"submajig",component:me,props:t=>({keyword:t.params.keyword})},{path:"///:majigId",name:"supmajig",component:Wt,props:t=>({majigId:t.params.majigId})},{path:"*",name:"majig",component:Wt}],scrollBehavior(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}}});n.a.config.productionTip=!1;var ge=new n.a({el:"#app",store:Ot,router:ve,template:"<app />",components:{App:ot}}),fe=ge,we=(a("ce36"),Object(h["a"])(fe,i,s,!1,null,null,null));e["default"]=we.exports},3267:function(t,e,a){},ce36:function(t,e,a){"use strict";var i=a("3267"),s=a.n(i);s.a}});
//# sourceMappingURL=app-legacy.0575a340.js.map