(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a5532"],{"09e8":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"body"},[t.signed?e("div",{staticClass:"postbody"},[e("div",{staticClass:"horzer"},[e("a",{staticClass:"full",on:{click:function(s){return t.unsign()}}},[t._v(" SignOut ")])])]):t._e(),t.signed?t._e():e("div",{staticClass:"postbody former"},[e("div",{staticClass:"bodyer para"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.sign()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"username",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),e("input",{attrs:{type:"submit",value:"SignIn"}})])])]),e("div",{staticClass:"body"},[e("div",{staticClass:"subbody"},[e("div",{staticClass:"bodyer para"},[e("h1",[t._v("GoTo")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.goto()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"path",inputmode:"url",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.path},on:{input:function(s){s.target.composing||(t.path=s.target.value)}}}),e("input",{attrs:{type:"submit",value:"GoTo"}})]),e("h1",[t._v("Jump"),t.signed?e("span",[e("a",{attrs:{href:"#/menu/published"}},[t._v(" Published")]),t._v(" • "),e("a",{attrs:{href:"#/menu/concealed"}},[t._v(" Concealed")])]):t._e()]),e("div",{domProps:{innerHTML:t._s(t.markeddown)}})])])])])},i=[],n=e("e0c1"),o=e.n(n);const r=new o.a.Renderer,u={link:r.link.bind(r)};r.link=(t,s,e)=>("/"===t[0]?t="#"+t:"#"!==t[0]&&(t="#/"+t),u.link(t,s,e));var d={data(){return{path:"",username:"",password:""}},created(){this.load()},watch:{signed:"load"},computed:{signed(){return this.$store.getters["token/signed"]},menu(){return this.signed?"/menu/concealed":"/menu/published"},majig(){const t=this.$store.state.majig.all;return t[this.menu]||{}},markeddown(){return o()(this.majig.markdown||"- [root](/)",{renderer:r})}},methods:{goto(){"/"!==this.path[0]&&(this.path="/"+this.path),this.$store.dispatch("utils/notify",{status:"going"}).then(()=>this.$router.push(this.path).catch(t=>{})).then(()=>(this.path="",this.$store.dispatch("utils/stash",{})))},load(){return this.$store.dispatch("majig/load",{path:this.menu}).then(t=>{}).catch(t=>{})},sign(){this.$store.dispatch("utils/notify",{status:"signing"}).then(()=>this.$store.dispatch("token/sign",{username:this.username,password:this.password}).catch(t=>{throw t[0]})).then(()=>(this.password="",this.$store.dispatch("utils/stash",{}))).catch(t=>{this.password="",this.$store.dispatch("utils/notify",{status:t.title})})},unsign(){this.$store.dispatch("majig/clear",{}).then(()=>this.$store.dispatch("majigs/clear",{})).then(()=>this.$store.dispatch("token/clear",{})).then(()=>this.$store.dispatch("utils/stash",{})).catch(t=>{this.$store.dispatch("utils/notify",{status:t.title})})}}},h=d,p=e("2877"),c=Object(p["a"])(h,a,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a5532-legacy.58203e37.js.map