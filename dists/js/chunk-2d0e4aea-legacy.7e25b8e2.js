(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4aea"],{"90eb":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"body"},[e("div",{staticClass:"subbody"},[e("div",{staticClass:"bodyer thin stack"},[e("div",{staticClass:"horzer dim thin"},[e("div",{staticClass:"lefter"},[t._v(" "+t._s(t.status||t.majig.path||t.majig.tags||t.$route.path)+" ")]),t.signed?e("div",{staticClass:"rghter"},[t.isMode("show")?[e("a",{on:{click:function(a){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),e("a",{on:{click:function(a){return t.toMode("split")}}},[t._v(" Split")])]:t.isMode("edit")?[e("a",{on:{click:function(a){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(a){return t.save()}}},[t._v(" Save")])]:t.isMode("proof")?[e("a",{on:{click:function(a){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(a){return t.save()}}},[t._v(" Save")])]:t.isMode("split")?[e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(a){return t.save()}}},[t._v(" Save")])]:t._e()],2):t._e()])]),t.isMode("split")?t._e():e("div",{staticClass:"bodyer thin stack"},[t.isMode("edit")||t.isMode("source")?t._e():e("div",{domProps:{innerHTML:t._s(t.markeddown)}}),t.isMode("edit")||t.isMode("source")?e("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[e("pre",[e("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),e("br")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(a){a.target.composing||(t.markdown=a.target.value)}}})]):t._e()]),t.isMode("split")?e("div",{staticClass:"bodyer thinthin zero"},[e("div",{staticClass:"bodyer half zero"},[e("div",{staticClass:"bodyer thin stack"},[e("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[e("pre",[e("span",[t._v("\n            "+t._s(t.markdown)+"\n          ")]),e("br")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(a){a.target.composing||(t.markdown=a.target.value)}}})])])]),e("div",{staticClass:"bodyer half zero"},[e("div",{staticClass:"bodyer thin stack"},[e("div",{domProps:{innerHTML:t._s(t.markeddown)}})])]),e("div",{staticClass:"bodyer clear"})]):t._e(),e("div",{staticClass:"bodyer thin stack"},[e("div",{staticClass:"horzer dim"},[e("div",{staticClass:"rghter thin"},[e("span",[t._v("U • "+t._s(t._f("datetime")(t.majig.updated))+" ")]),e("br"),e("span",[t._v("P • "+t._s(t._f("datetime")(t.majig.published))+" ")]),e("br"),t.signed?e("span",[t._v("C • "+t._s(t._f("datetime")(t.majig.created))+" ")]):t._e()]),e("div",{staticClass:"lefter thin"},[t.signed?[t.isMode("edit")?[e("a",{on:{click:function(a){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(a){return t.save()}}},[t._v(" Save")]),e("br"),e("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")])]:t.isMode("proof")?[e("a",{on:{click:function(a){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(a){return t.save()}}},[t._v(" Save")]),e("br"),e("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")])]:t.isMode("split")?[e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(a){return t.save()}}},[t._v(" Save")]),e("br"),e("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")])]:t.majig.id?t.isMode("show")?[e("a",{on:{click:function(a){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),e("a",{on:{click:function(a){return t.toMode("tag")}}},[t._v(" Tag")]),t._v(" • "),e("a",{on:{click:function(a){return t.toMode("move")}}},[t._v(" Move")]),e("br"),e("span",{staticClass:"bold"},[t._v(" "+t._s(t.status||t.majig.tags.join(" ")||t.majig.path)+" ")]),e("br"),t.majig.published?t._e():e("a",{on:{click:function(a){return t.toMode("publish")}}},[t._v(" Publish")]),t.majig.published?e("a",{on:{click:function(a){return t.toMode("publish")}}},[t._v(" Conceal")]):t._e(),t._v(" • "),e("a",{on:{click:function(a){return t.toMode("delete")}}},[t._v(" Delete")])]:t.isMode("publish")?[e("a",{on:{click:function(a){return t.conceal()}}},[t._v(" Conceal")]),t._v(" • "),e("a",{on:{click:function(a){return t.publish()}}},[t._v(" Publish")]),t._v(" • "),e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),e("br"),e("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")]),e("br"),e("form",{on:{submit:function(t){t.preventDefault()}}},[e("pre",[t._v(t._s(t.published))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.published,expression:"published"}],attrs:{type:"text",placeholder:"published",inputmode:"url",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.published},on:{input:function(a){a.target.composing||(t.published=a.target.value)}}})])]:t.isMode("delete")?[e("a",{on:{click:function(a){return t.remove()}}},[t._v(" Delete")]),t._v(" • "),e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),e("br"),e("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")])]:t.isMode("move")?[e("a",{on:{click:function(a){return t.move()}}},[t._v(" Move")]),t._v(" • "),e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),e("br"),e("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")]),e("br"),e("form",{on:{submit:function(t){t.preventDefault()}}},[e("pre",[t._v(t._s(t.path))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"path",inputmode:"url",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.path},on:{input:function(a){a.target.composing||(t.path=a.target.value)}}})])]:t.isMode("tag")?[e("a",{on:{click:function(a){return t.tag()}}},[t._v(" Tag")]),t._v(" • "),e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" Cancel")]),e("br"),e("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")]),e("br"),e("form",{on:{submit:function(t){t.preventDefault()}}},[e("pre",[t._v(t._s(t.tags))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],attrs:{type:"text",placeholder:"tags",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.tags},on:{input:function(a){a.target.composing||(t.tags=a.target.value)}}})])]:t._e():[e("a",{on:{click:function(a){return t.toMode("edit")}}},[t._v(" Edit")])]]:[t.majig.id?t.isMode("show")?[e("a",{on:{click:function(a){return t.toMode("source")}}},[t._v(" MarkDown")])]:t.isMode("source")?[e("a",{on:{click:function(a){return t.cancel()}}},[t._v(" MarkUp")])]:t._e():[e("span",[t._v("404 Not Found")])],e("br"),e("span",{staticClass:"bold"},[t._v(" "+t._s(t.majig.path||t.majig.tags)+" ")])]],2)])])])])},s=[],n=e("e0c1"),o=e.n(n);const r=new o.a.Renderer,c={link:r.link.bind(r)};r.link=(t,a,e)=>("/"===t[0]?t="#"+t:"#"!==t[0]&&(t="#/"+t),c.link(t,a,e));var d={filters:{datetime:t=>{if(!t)return"0000-00-00 00:00:00";const a=new Date(t);return a.toLocaleString("sv-SE")}},props:{majigId:{type:String,required:!1}},data(){return{status:"",mode:"show",path:"",tags:"",published:"",markdown:""}},created(){this.load()},watch:{$route:"load",signed:"load"},computed:{signed(){return this.$store.getters["token/signed"]},majig(){const t=this.$store.state.majig.all;return this.majigId?t[this.majigId]||{}:t[this.$route.path]||{}},markeddown(){return o()(this.markdown||"",{renderer:r})}},methods:{isMode(t){return this.mode===t},toMode(t){this.status="",this.mode=t},cancel(){this.status="",this.mode="show",this.path=this.majig.path||"",this.tags=this.majig.tags.join(" ")||"",this.published=new Date(this.majig.published||Date.now()),this.published=this.published.toLocaleString("sv-SE"),this.markdown=this.majig.markdown||""},load(){return this.status="loading",this.markdown=this.majig.markdown||"",this.$store.dispatch("majig/load",{majigId:this.majigId,path:this.$route.path}).then(t=>{this.cancel()}).catch(t=>{404===t[0].status?(this.status="",this.signed?this.mode="edit":this.mode="show"):this.status=t[0].title})},add(){return this.status="adding",this.$store.dispatch("majig/add",{path:this.$route.path,markdown:this.markdown}).then(t=>{this.cancel()}).catch(t=>{this.status=t[0].title})},update(){return this.status="updating",this.$store.dispatch("majig/update",{majigId:this.majig.id,markdown:this.markdown}).then(t=>{this.cancel()}).catch(t=>{this.status=t[0].title})},save(){return this.status="saving",this.majig.id?this.update():this.add()},move(){return this.status="moving",this.path&&"/"!==this.path[0]?this.path="/"+this.path:this.path||(this.path=!1),this.$store.dispatch("majig/update",{majigId:this.majig.id,path:this.path}).then(t=>{this.$router.push(t.path||"/").catch(t=>{})}).catch(t=>{this.status=t[0].title})},tag(){return this.status="tagging",this.$store.dispatch("majig/update",{majigId:this.majig.id,tags:this.tags}).then(t=>{this.cancel()}).catch(t=>{this.status=t[0].title})},publish(){this.status="publishing",this.$store.dispatch("majig/update",{majigId:this.majig.id,published:this.published}).then(()=>{this.cancel()}).catch(t=>{this.status=t[0].title})},conceal(){this.status="concealing",this.$store.dispatch("majig/update",{majigId:this.majig.id,published:!1}).then(()=>{this.cancel()}).catch(t=>{this.status=t[0].title})},remove(){this.status="deleting",this.$store.dispatch("majig/remove",{majigId:this.majig.id}).then(()=>{this.cancel()}).catch(t=>{this.status=t[0].title})}}},u=d,l=e("2877"),h=Object(l["a"])(u,i,s,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0e4aea-legacy.7e25b8e2.js.map