(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7a77"],{7877:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"body"},[s("div",{staticClass:"body"},[s("div",{staticClass:"subbody",attrs:{id:"subbody"}},[s("div",{staticClass:"bodyer thin stack"},[s("div",{staticClass:"horzer dim thin"},[s("div",{staticClass:"lefter"},[s("span",[t._v(t._s(t.status||t.$route.path))])]),s("div",{staticClass:"rghter"},[s("a",{class:t.classFilter("published"),on:{click:function(i){return t.toggleFilter("published")}}},[t._v(" Published")]),t._v(" • "),s("a",{class:t.classFilter("updated"),on:{click:function(i){return t.toggleFilter("updated")}}},[t._v(" Updated")]),t._v(" • "),s("span",[t._v(" "+t._s(t.count||0)+" ")])])])]),t.majigs.length?t._e():s("div",{staticClass:"bodyer thin stack"},[s("p",[t._v("404 Not Found")])]),t._l(t.majigs,(function(t){return s("SupMajig",{key:t.id,attrs:{majig:t}})})),t._m(0)],2)])])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"bodyer thin stack"},[s("div",{staticClass:"horzer dim thin",staticStyle:{"font-size":"1em"}},[s("div",{staticClass:"cntrer"})])])}],n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"bodyer thin stack"},[t.isMode("edit")||t.isMode("source")?t._e():s("div",{domProps:{innerHTML:t._s(t.markeddown)}}),t.isMode("edit")||t.isMode("source")?s("form",{staticClass:"editor",on:{submit:function(t){t.preventDefault()}}},[s("pre",[s("span",[t._v("\n      "+t._s(t.markdown)+"\n    ")]),s("br")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{placeholder:"markdown"},domProps:{value:t.markdown},on:{input:function(i){i.target.composing||(t.markdown=i.target.value)}}})]):t._e(),t._m(0),s("div",{staticClass:"substack horzer dim"},[s("div",{staticClass:"lefter thin"},[s("span",[t._v("U • "+t._s(t._f("datetime")(t.majig.updated))+" ")]),s("br"),s("span",[t._v("P • "+t._s(t._f("datetime")(t.majig.published))+" ")]),s("br"),t.signed?s("span",[t._v("C • "+t._s(t._f("datetime")(t.majig.created))+" ")]):t._e()]),s("div",{staticClass:"rghter thin"},[t.signed?[t.isMode("edit")?[s("a",{on:{click:function(i){return t.toMode("proof")}}},[t._v(" Proof")]),t._v(" • "),s("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),s("a",{on:{click:function(i){return t.toMode("save")}}},[t._v(" Save")])]:t.isMode("proof")?[s("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),s("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")]),t._v(" • "),s("a",{on:{click:function(i){return t.toMode("save")}}},[t._v(" Save")])]:t.majig.id?t.isMode("show")?[s("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")]),t._v(" • "),t.majig.path?s("a",{on:{click:function(i){return t.toMode("move")}}},[t._v(" Move")]):t._e(),t.majig.path?t._e():s("a",{on:{click:function(i){return t.toMode("retag")}}},[t._v(" ReTag")]),s("br"),s("br"),t.majig.published?t._e():s("a",{on:{click:function(i){return t.publish()}}},[t._v(" Publish")]),t.majig.published?s("a",{on:{click:function(i){return t.unpublish()}}},[t._v(" UnPublish")]):t._e(),t._v(" • "),s("a",{on:{click:function(i){return t.toMode("delete")}}},[t._v(" Delete")])]:t.isMode("delete")?[s("a",{on:{click:function(i){return t.remove()}}},[t._v(" Delete")]),t._v(" • "),s("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")])]:t.isMode("move")||t.isMode("retag")?[s("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" Cancel")]),s("br"),s("br"),s("span",[t._v("501 Not Implemented")])]:t._e():[s("a",{on:{click:function(i){return t.toMode("edit")}}},[t._v(" Edit")])]]:[t.majig.id?t.isMode("show")?[s("a",{on:{click:function(i){return t.toMode("source")}}},[t._v(" MarkDown")])]:t.isMode("source")?[s("a",{on:{click:function(i){return t.toMode("cancel")}}},[t._v(" MarkUp")])]:t._e():[s("span",[t._v("404 Not Found")])]]],2)])])},r=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"supstack"},[s("br")])}],o=s("e0c1"),d=s.n(o);const c=new d.a.Renderer,u={link:c.link.bind(c)};c.link=(t,i,s)=>("/"===t[0]?t="#"+t:"#"!==t[0]&&(t="#/"+t),u.link(t,i,s));var l={filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";const i=new Date(t);return i.toLocaleString("sv-SE")}},props:{majig:{type:Object,required:!0}},data(){return{status:"",mode:"show",markdown:""}},created(){this.loadMajig()},watch:{signed:"loadMajig"},computed:{signed(){return this.$store.getters["token/signed"]},markeddown(){return d()(this.markdown||"",{renderer:c})}},methods:{isMode(t){return this.mode===t},toMode(t){switch(t){case"cancel":this.markdown=this.majig.markdown||"",this.mode="show";break;case"save":this.saveMajig().then(()=>{this.mode="show"});break;default:this.mode=t;break}},loadMajig(){this.markdown=this.majig?this.majig.markdown:""},addMajig(){return this.status="adding",this.$store.dispatch("majig/add",{path:this.$route.path,markdown:this.markdown}).then(t=>{this.status=""}).catch(t=>{this.status=t[0].title})},updateMajig(){return this.status="updating",this.$store.dispatch("majig/update",{majigId:this.majig.id,markdown:this.markdown}).then(t=>{this.status=""}).catch(t=>{this.status=t[0].title})},saveMajig(){return this.status="saving",this.majig.id?this.updateMajig():this.addMajig()},move(){return this.status="moving",this.$store.dispatch("majig/update",{majigId:this.majig.id,path:this.majig.path}).then(t=>{this.$router.push(t.path||"/").catch(t=>{})}).catch(t=>{this.status=t[0].title})},retag(){return this.status="tagging",this.$store.dispatch("majig/update",{majigId:this.majig.id,tags:this.majig.tags}).then(t=>{this.status=""}).catch(t=>{this.status=t[0].title})},publish(){this.status="publishing",this.$store.dispatch("majig/update",{majigId:this.majig.id,published:new Date}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},unpublish(){this.status="unpublishing",this.$store.dispatch("majig/update",{majigId:this.majig.id,published:!1}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},remove(){this.status="removing",this.$store.dispatch("majig/remove",{majigId:this.majig.id}).then(()=>{this.status="",this.markdown="",this.toMode("show")}).catch(t=>{this.status=t[0].title})}}},h=l,m=s("2877"),g=Object(m["a"])(h,n,r,!1,null,null,null),p=g.exports,v={components:{SupMajig:p},filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";const i=new Date(t);return i.toLocaleString("sv-SE")}},props:{flags:{type:Array,required:!1}},data(){return{status:"",limit:100,skip:0,filter:"-updated"}},created(){this.loadMajigs()},updated(){let t=this.$el.querySelector("#subbody");t.scrollTop=0},watch:{$route:"loadMajigs",signed:"loadMajigs"},computed:{signed(){return this.$store.getters["token/signed"]},count(){return this.$store.state.majigs.count},majigs(){return this.$store.state.majigs.all||[]}},methods:{toggleFilter(t){this.status="sorting",this.filter=this.filter==t?"-"+t:t,this.$store.dispatch("majigs/load",{filter:this.filter,flags:this.flags,limit:this.limit,skip:this.skip}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},classFilter(t){return this.filter==t?"descend":this.filter=="-"+t?"ascend":""},loadMajigs(){this.status="loading",this.$store.dispatch("majigs/load",{filter:this.filter,flags:this.flags,limit:this.limit,skip:this.skip}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})}}},_=v,k=Object(m["a"])(_,e,a,!1,null,null,null);i["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0d7a77.ec114954.js.map