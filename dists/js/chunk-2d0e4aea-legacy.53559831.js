(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4aea"],{"90eb":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body"},[i("ParabodyRight",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),i("div",{staticClass:"body"},[i("div",{staticClass:"body"},[i("div",{staticClass:"subbody"},[i("div",{staticClass:"bodyer thin stack"},[i("div",{staticClass:"horzer dim thin"},[i("div",{staticClass:"lefter togler10"},[t._v(" "+t._s(t.status||t.$route.path)+" ")]),t.signed?i("div",{staticClass:"rghter togler10"},[t.isMode("show")?[i("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • ")]:t._e(),t.isMode("edit")?[i("a",{on:{click:function(e){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),i("a",{on:{click:function(e){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),i("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")]),t._v(" • ")]:t._e(),t.isMode("proof")?[i("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),i("a",{on:{click:function(e){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),i("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")]),t._v(" • ")]:t._e(),i("a",{on:{click:function(e){return t.open("configer",t.majig)}}},[t._v(" Meta")])],2):t._e(),i("div",{staticClass:"cntrer togler01"},[t._v(" "+t._s(t.status||t.$route.path)+" ")]),t.signed?i("div",{staticClass:"cntrer togler01"},[t.isMode("show")?[i("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • ")]:t._e(),t.isMode("edit")?[i("a",{on:{click:function(e){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),i("a",{on:{click:function(e){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),i("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")]),t._v(" • ")]:t._e(),t.isMode("proof")?[i("a",{on:{click:function(e){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),i("a",{on:{click:function(e){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),i("a",{on:{click:function(e){return t.toMode("save")}}},[t._v(" Save")]),t._v(" • ")]:t._e(),i("a",{on:{click:function(e){return t.open("configer",t.majig)}}},[t._v(" Meta")])],2):t._e()])]),i("div",{staticClass:"bodyer thin stack"},[t.isMode("show")||t.isMode("proof")?i("div",{domProps:{innerHTML:t._s(t.markeddown)}}):t._e(),t.isMode("edit")?i("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[i("pre",[i("span",[t._v("\n        "+t._s(t.markdown)+"\n      ")]),i("br")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})]):t._e()]),i("div",{staticClass:"bodyer thin stack"},[i("div",{staticClass:"horzer dim"},[i("div",{staticClass:"cntrer thin"},[t._v(" "+t._s(t._f("datetime")(t.majig.created))+" • • • "+t._s(t._f("datetime")(t.majig.updated))+" "),i("br"),t._v(" "+t._s(t._f("datetime")(t.majig.published))+" ")])])])])])])],1)},s=[],o=i("e0c1"),n=i.n(o),d=i("2b91"),r=i("10a0");const c=new n.a.Renderer,u={link:c.link.bind(c)};c.link=(t,e,i)=>("/"===t[0]?t="#"+t:"#"!==t[0]&&(t="#/"+t),u.link(t,e,i));var h={components:{ParabodyRight:d["a"]},filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";const e=new Date(t);return e.toLocaleString("sv-SE")}},props:{majigId:{type:String,required:!1}},data(){return{mode:"show",status:"",markdown:"",views:{configer:r["a"]},view:"",viewed:null}},created(){this.loadMajig()},watch:{$route:"loadMajig",signed:"loadMajig",majig:"loadViewed"},computed:{signed(){return this.$store.getters["token/signed"]},majig(){const t=this.$store.state.majig.all;return this.majigId?t[this.majigId]||{}:t[this.$route.path]||{}},markeddown(){return n()(this.markdown||"404 Not Found",{renderer:c})}},methods:{goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},open(t,e){!1===t||t===this.view&&e===this.viewed?(this.view="",this.viewed=null):t!==this.view?(this.view=t,this.viewed=e):this.viewed=e},isMode(t){return this.mode===t},toMode(t){switch(t){case"cancel":this.markdown=this.majig.markdown||"",this.mode="show";break;case"save":this.saveMajig().then(()=>{this.mode="show"});break;default:this.mode=t;break}},loadViewed(){this.viewed=this.majig,this.markdown=this.majig.markdown},loadMajig(){return this.status="loading",this.open(!1),this.$store.dispatch("majig/load",{majigId:this.majigId,path:this.$route.path}).then(t=>{this.status=""}).catch(t=>{404===t[0].status?this.status="":this.status=t[0].title})},addMajig(){return this.status="adding",this.$store.dispatch("majig/add",{path:this.$route.path,markdown:this.markdown}).then(t=>{this.status=""}).catch(t=>{this.status=t[0].title})},updateMajig(){return this.status="updating",this.$store.dispatch("majig/update",{majigId:this.majig.id,markdown:this.markdown}).then(t=>{this.status=""}).catch(t=>{this.status=t[0].title})},saveMajig(){return this.status="saving",this.majig.id?this.updateMajig():this.addMajig()}}},v=h,l=i("2877"),m=Object(l["a"])(v,a,s,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0e4aea-legacy.53559831.js.map