(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e30d"],{d506:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[t.signed?s("div",{staticClass:"postbody"},[s("div",{staticClass:"horzer"},[s("a",{staticClass:"full",on:{click:function(e){return t.unsign()}}},[t._v(" SignOut ")])])]):t._e(),t.signed?t._e():s("div",{staticClass:"postbody former"},[s("div",{staticClass:"bodyer para"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.sign()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"username",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("input",{attrs:{type:"submit",value:"SignIn"}})])])]),s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[s("div",{staticClass:"bodyer para"},[s("h1",[t._v("GoTo")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.goto()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"path",inputmode:"url",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),s("input",{attrs:{type:"submit",value:"GoTo"}})]),s("h1",[t._v("Jump"),t.signed?s("span",[s("a",{attrs:{href:"#/menu/published"}},[t._v(" Published")]),t._v(" • "),s("a",{attrs:{href:"#/menu/concealed"}},[t._v(" Concealed")])]):t._e()]),s("div",{domProps:{innerHTML:t._s(t.markeddown)}})])])])])},i=[],n=s("e0c1"),o=s.n(n);const r=new o.a.Renderer,d={link:r.link.bind(r)};r.link=(t,e,s)=>("/"===t[0]?t="#"+t:"#"!==t[0]&&(t="#/"+t),d.link(t,e,s));var u={data(){return{path:"",username:"",password:""}},created(){this.load()},watch:{signed:"load"},computed:{signed(){return this.$store.getters["token/signed"]},menu(){return this.signed?"/menu/concealed":"/menu/published"},majig(){const t=this.$store.state.majig.all;return t[this.menu]||{}},markeddown(){return o()(this.majig.markdown||"- [root](/)",{renderer:r})}},methods:{goto(){"/"!==this.path[0]&&(this.path="/"+this.path),this.$store.dispatch("widgets/notify",{status:"going"}).then(()=>this.$router.push(this.path).catch(t=>{})).then(()=>(this.path="",this.$store.dispatch("widgets/stash",{})))},load(){return this.$store.dispatch("majig/load",{path:this.menu}).then(t=>{}).catch(t=>{})},sign(){this.$store.dispatch("widgets/notify",{status:"signing"}).then(()=>this.$store.dispatch("token/sign",{username:this.username,password:this.password}).catch(t=>{throw t[0]})).then(()=>(this.password="",this.$store.dispatch("widgets/stash",{}))).catch(t=>{this.password="",this.$store.dispatch("widgets/notify",{status:t.title})})},unsign(){this.$store.dispatch("majig/clear",{}).then(()=>this.$store.dispatch("majigs/clear",{})).then(()=>this.$store.dispatch("token/clear",{})).then(()=>this.$store.dispatch("widgets/stash",{})).catch(t=>{this.$store.dispatch("widgets/notify",{status:t.title})})}}},h=u,p=s("2877"),c=Object(p["a"])(h,a,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21e30d-legacy.bdacbb67.js.map