(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4aea"],{"90eb":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"body"},[a("div",{staticClass:"subbody"},[a("div",{staticClass:"bodyer thin stack"},[a("div",{staticClass:"horzer dim thin"},[a("div",{staticClass:"lefter"},[t._v(" "+t._s(t.status||t.majig.path||t.majig.tags.join(" ")||t.$route.path)+" ")]),t.signed?a("div",{staticClass:"rghter"},[t.isMode("show")?[a("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),a("a",{on:{click:function(i){return t.toMode("split")}}},[t._v(" Split")])]:t.isMode("edit")?[a("a",{on:{click:function(i){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(i){return t.save()}}},[t._v(" Save")])]:t.isMode("proof")?[a("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(i){return t.save()}}},[t._v(" Save")])]:t.isMode("split")?[a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(i){return t.save()}}},[t._v(" Save")])]:t._e()],2):t._e()])]),t.isMode("split")?t._e():a("div",{staticClass:"bodyer thin stack"},[t.isMode("edit")||t.isMode("source")?t._e():a("div",{domProps:{innerHTML:t._s(t.markeddown)}}),t.isMode("edit")||t.isMode("source")?a("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[a("pre",[a("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(i){i.target.composing||(t.markdown=i.target.value)}}})]):t._e()]),t.isMode("split")?a("div",{staticClass:"bodyer thinthin zero"},[a("div",{staticClass:"bodyer half zero"},[a("div",{staticClass:"bodyer thin stack"},[a("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[a("pre",[a("span",[t._v("\n            "+t._s(t.markdown)+"\n          ")]),a("br")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(i){i.target.composing||(t.markdown=i.target.value)}}})])])]),a("div",{staticClass:"bodyer half zero"},[a("div",{staticClass:"bodyer thin stack"},[a("div",{domProps:{innerHTML:t._s(t.markeddown)}})])]),a("div",{staticClass:"bodyer clear"})]):t._e(),a("div",{staticClass:"bodyer thin stack"},[a("div",{staticClass:"horzer dim"},[a("div",{staticClass:"rghter thin"},[a("span",[t._v("U • "+t._s(t._f("datetime")(t.majig.updated))+" ")]),a("br"),a("span",[t._v("P • "+t._s(t._f("datetime")(t.majig.published))+" ")]),a("br"),t.signed?a("span",[t._v("C • "+t._s(t._f("datetime")(t.majig.created))+" ")]):t._e()]),a("div",{staticClass:"lefter thin"},[t.signed?[t.isMode("edit")?[a("a",{on:{click:function(i){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(i){return t.save()}}},[t._v(" Save")]),a("br"),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")])]:t.isMode("proof")?[a("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(i){return t.save()}}},[t._v(" Save")]),a("br"),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")])]:t.isMode("split")?[a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),t._v(" • "),a("a",{on:{click:function(i){return t.save()}}},[t._v(" Save")]),a("br"),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")])]:t.majig.id?t.isMode("show")?[a("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),a("a",{on:{click:function(i){return t.toMode("tag")}}},[t._v(" Tag")]),t._v(" • "),a("a",{on:{click:function(i){return t.toMode("move")}}},[t._v(" Move")]),a("br"),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.status||t.majig.tags.join(" ")||t.majig.path)+" ")]),a("br"),t.majig.published?t._e():a("a",{on:{click:function(i){return t.toMode("publish")}}},[t._v(" Publish")]),t.majig.published?a("a",{on:{click:function(i){return t.toMode("publish")}}},[t._v(" Conceal")]):t._e(),t._v(" • "),a("a",{on:{click:function(i){return t.toMode("delete")}}},[t._v(" Delete")])]:t.isMode("publish")?[a("a",{on:{click:function(i){return t.conceal()}}},[t._v(" Conceal")]),t._v(" • "),a("a",{on:{click:function(i){return t.publish()}}},[t._v(" Publish")]),t._v(" • "),a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),a("br"),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")]),a("br"),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("pre",[t._v(t._s(t.published))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.published,expression:"published"}],attrs:{type:"text",placeholder:"published",inputmode:"url",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.published},on:{input:function(i){i.target.composing||(t.published=i.target.value)}}})])]:t.isMode("delete")?[a("a",{on:{click:function(i){return t.remove()}}},[t._v(" Delete")]),t._v(" • "),a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),a("br"),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")])]:t.isMode("move")?[a("a",{on:{click:function(i){return t.move()}}},[t._v(" Move")]),t._v(" • "),a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),a("br"),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")]),a("br"),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("pre",[t._v(t._s(t.path))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],attrs:{type:"text",placeholder:"path",inputmode:"url",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.path},on:{input:function(i){i.target.composing||(t.path=i.target.value)}}})])]:t.isMode("tag")?[a("a",{on:{click:function(i){return t.tag()}}},[t._v(" Tag")]),t._v(" • "),a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" Cancel")]),a("br"),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.status)+" ")]),a("br"),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("pre",[t._v(t._s(t.tags))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tags,expression:"tags"}],attrs:{type:"text",placeholder:"tags",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.tags},on:{input:function(i){i.target.composing||(t.tags=i.target.value)}}})])]:t._e():[a("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")])]]:[t.majig.id?t.isMode("show")?[a("a",{on:{click:function(i){return t.toMode("source")}}},[t._v(" MarkDown")])]:t.isMode("source")?[a("a",{on:{click:function(i){return t.cancel()}}},[t._v(" MarkUp")])]:t._e():[a("span",[t._v("404 Not Found")])],a("br"),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.majig.tags.join(" ")||t.majig.path)+" ")])]],2)])])])])},s=[],n=a("e0c1"),o=a.n(n);const r=new o.a.Renderer,c={link:r.link.bind(r)};r.link=(t,i,a)=>("/"===t[0]?t="#"+t:"#"!==t[0]&&(t="#/"+t),c.link(t,i,a));var d={filters:{datetime:t=>{if(!t)return"0000-00-00T00:00:00:000Z";const i=new Date(t);return i.toISOString()}},props:{majigId:{type:String,required:!1}},data(){return{status:"",mode:"show",path:"",tags:"",published:"",markdown:""}},created(){this.load()},watch:{$route:"load",signed:"load"},computed:{signed(){return this.$store.getters["token/signed"]},majig(){const t=this.$store.state.majig.all;return this.majigId?t[this.majigId]||{}:t[this.$route.path]||{}},markeddown(){return o()(this.markdown||"",{renderer:r})}},methods:{isMode(t){return this.mode===t},toMode(t){this.status="",this.mode=t},cancel(){this.status="",this.mode="show",this.path=this.majig.path||"",this.tags=this.majig.tags.join(" ")||"",this.published=new Date(this.majig.published||Date.now()),this.published=this.published.toISOString(),this.markdown=this.majig.markdown||""},load(){return this.status="loading",this.markdown=this.majig.markdown||"",this.$store.dispatch("majig/load",{majigId:this.majigId,path:this.$route.path}).then(t=>{this.cancel()}).catch(t=>{404===t[0].status?(this.status="",this.signed?this.mode="edit":this.mode="show"):this.status=t[0].title})},add(){return this.status="adding",this.$store.dispatch("majig/add",{path:this.$route.path,markdown:this.markdown}).then(t=>{this.cancel()}).catch(t=>{this.status=t[0].title})},update(){return this.status="updating",this.$store.dispatch("majig/update",{majigId:this.majig.id,markdown:this.markdown}).then(t=>{this.cancel()}).catch(t=>{this.status=t[0].title})},save(){return this.status="saving",this.majig.id?this.update():this.add()},move(){return this.status="moving",this.path&&"/"!==this.path[0]?this.path="/"+this.path:this.path||(this.path=!1),this.$store.dispatch("majig/update",{majigId:this.majig.id,path:this.path}).then(t=>{this.$router.push(t.path||"/").catch(t=>{})}).catch(t=>{this.status=t[0].title})},tag(){return this.status="tagging",this.$store.dispatch("majig/update",{majigId:this.majig.id,tags:this.tags}).then(t=>{this.cancel()}).catch(t=>{this.status=t[0].title})},publish(){this.status="publishing",this.$store.dispatch("majig/update",{majigId:this.majig.id,published:this.published}).then(()=>{this.cancel()}).catch(t=>{this.status=t[0].title})},conceal(){this.status="concealing",this.$store.dispatch("majig/update",{majigId:this.majig.id,published:!1}).then(()=>{this.cancel()}).catch(t=>{this.status=t[0].title})},remove(){this.status="deleting",this.$store.dispatch("majig/remove",{majigId:this.majig.id}).then(()=>{this.cancel()}).catch(t=>{this.status=t[0].title})}}},u=d,l=a("2877"),h=Object(l["a"])(u,e,s,!1,null,null,null);i["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0e4aea.af818b7f.js.map