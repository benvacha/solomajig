(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4aea"],{"90eb":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"body"},[e("div",{staticClass:"subbody"},[e("div",{staticClass:"bodyer thin stack"},[e("div",{staticClass:"horzer dim thin"},[e("div",{staticClass:"lefter"},[t._v(" "+t._s(t.status||t.majig.path||t.majig.tags||t.$route.path)+" ")]),t.signed?e("div",{staticClass:"rghter"},[t.isMode("show")?[e("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")])]:t._e(),t.isMode("edit")?[e("a",{on:{click:function(i){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("save")}}},[t._v(" Save")])]:t._e(),t.isMode("proof")?[e("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("save")}}},[t._v(" Save")])]:t._e()],2):t._e()])]),e("div",{staticClass:"bodyer thin stack"},[t.isMode("edit")||t.isMode("source")?t._e():e("div",{domProps:{innerHTML:t._s(t.markeddown)}}),t.isMode("edit")||t.isMode("source")?e("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[e("pre",[e("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),e("br")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(i){i.target.composing||(t.markdown=i.target.value)}}})]):t._e()]),e("div",{staticClass:"bodyer thin stack"},[e("div",{staticClass:"horzer dim"},[e("div",{staticClass:"lefter thin"},[e("span",[t._v("U • "+t._s(t._f("datetime")(t.majig.updated))+" ")]),e("br"),e("span",[t._v("P • "+t._s(t._f("datetime")(t.majig.published))+" ")]),e("br"),t.signed?e("span",[t._v("C • "+t._s(t._f("datetime")(t.majig.created))+" ")]):t._e()]),e("div",{staticClass:"rghter thin"},[t.signed?[t.isMode("edit")?[e("a",{on:{click:function(i){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("save")}}},[t._v(" Save")])]:t.isMode("proof")?[e("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("save")}}},[t._v(" Save")])]:t.majig.id?t.isMode("show")?[e("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),t.majig.path?e("a",{on:{click:function(i){return t.toMode("move")}}},[t._v(" Move")]):t._e(),t.majig.path?t._e():e("a",{on:{click:function(i){return t.toMode("retag")}}},[t._v(" ReTag")]),e("br"),e("br"),t.majig.published?t._e():e("a",{on:{click:function(i){return t.publish()}}},[t._v(" Publish")]),t.majig.published?e("a",{on:{click:function(i){return t.unpublish()}}},[t._v(" UnPublish")]):t._e(),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("delete")}}},[t._v(" Delete")])]:t.isMode("delete")?[e("a",{on:{click:function(i){return t.remove()}}},[t._v(" Delete")]),t._v(" • "),e("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")])]:t.isMode("move")||t.isMode("retag")?[e("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")]),e("br"),e("br"),e("span",[t._v("501 Not Implemented")])]:t._e():[e("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")])]]:[t.majig.id?t.isMode("show")?[e("a",{on:{click:function(i){return t.toMode("source")}}},[t._v(" MarkDown")])]:t.isMode("source")?[e("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" MarkUp")])]:t._e():[e("span",[t._v("404 Not Found")])]]],2)])])])])},s=[],n=e("e0c1"),o=e.n(n);const r=new o.a.Renderer,d={link:r.link.bind(r)};r.link=(t,i,e)=>("/"===t[0]?t="#"+t:"#"!==t[0]&&(t="#/"+t),d.link(t,i,e));var c={filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";const i=new Date(t);return i.toLocaleString("sv-SE")}},props:{majigId:{type:String,required:!1}},data(){return{status:"",mode:"show",markdown:""}},created(){this.loadMajig()},watch:{$route:"loadMajig",signed:"loadMajig"},computed:{signed(){return this.$store.getters["token/signed"]},majig(){const t=this.$store.state.majig.all;return this.majigId?t[this.majigId]||{}:t[this.$route.path]||{}},markeddown(){return o()(this.markdown||"",{renderer:r})}},methods:{isMode(t){return this.mode===t},toMode(t){switch(t){case"cancel":this.markdown=this.majig.markdown||"",this.mode="show";break;case"save":this.saveMajig().then(()=>{this.mode="show"});break;default:this.mode=t;break}},loadMajig(){return this.markdown=this.majig?this.majig.markdown:"",this.status="loading",this.$store.dispatch("majig/load",{majigId:this.majigId,path:this.$route.path}).then(t=>{this.status="",this.markdown=t.markdown}).catch(t=>{404===t[0].status?this.status="":this.status=t[0].title})},addMajig(){return this.status="adding",this.$store.dispatch("majig/add",{path:this.$route.path,markdown:this.markdown}).then(t=>{this.status=""}).catch(t=>{this.status=t[0].title})},updateMajig(){return this.status="updating",this.$store.dispatch("majig/update",{majigId:this.majig.id,markdown:this.markdown}).then(t=>{this.status=""}).catch(t=>{this.status=t[0].title})},saveMajig(){return this.status="saving",this.majig.id?this.updateMajig():this.addMajig()},move(){return this.status="moving",this.$store.dispatch("majig/update",{majigId:this.majig.id,path:this.majig.path}).then(t=>{this.$router.push(t.path||"/").catch(t=>{})}).catch(t=>{this.status=t[0].title})},retag(){return this.status="tagging",this.$store.dispatch("majig/update",{majigId:this.majig.id,tags:this.majig.tags}).then(t=>{this.status=""}).catch(t=>{this.status=t[0].title})},publish(){this.status="publishing",this.$store.dispatch("majig/update",{majigId:this.majig.id,published:new Date}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},unpublish(){this.status="unpublishing",this.$store.dispatch("majig/update",{majigId:this.majig.id,published:!1}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},remove(){this.status="removing",this.$store.dispatch("majig/remove",{majigId:this.majig.id}).then(()=>{this.status="",this.markdown="",this.toMode("show")}).catch(t=>{this.status=t[0].title})}}},u=c,h=e("2877"),l=Object(h["a"])(u,a,s,!1,null,null,null);i["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e4aea-legacy.10f819a3.js.map