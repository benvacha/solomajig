(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217e3a"],{c93a:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"body"},[e("div",{staticClass:"subbody"},[e("div",{staticClass:"bodyer para"},[e("h1",[t._v("Search")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.search()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.terms,expression:"terms"}],attrs:{type:"text",placeholder:"terms && tags",autocorrect:"off",autocapitalize:"none"},domProps:{value:t.terms},on:{input:function(s){s.target.composing||(t.terms=s.target.value)}}}),e("input",{attrs:{type:"submit",value:"Search"}})]),e("h2",[t._v("Results "),e("span",[t._v(t._s(t.majigs.length))])]),e("ul",[t.majigs.length?t._e():e("li",[e("div",[t._v("no results")])]),t._l(t.majigs,(function(s){return e("li",[e("a",{on:{click:function(e){return t.goto(s)}}},[e("span",[t._v(" "+t._s(t._f("previewed")(s.markdown,t.termed))+" ")]),e("h5",[t._v(t._s(s.tags.join(" ")||s.path))])])])}))],2)])])])},i=[],r={filters:{previewed:(t,s)=>{const e=90,a=t.indexOf(s);let i=e-s.length;return i=Math.floor(i/2),t.substring(a-i,a+s.length+i)}},data(){return{terms:"",termed:"",majigs:[]}},methods:{goto(t){this.$store.dispatch("widgets/notify",{status:"going"}).then(()=>{if(t.path)return this.$router.push(t.path).catch(t=>{})}).then(()=>{t.path||this.$router.push({name:"supmajig",params:{majigId:t.id}}).catch(()=>{})}).then(()=>this.$store.dispatch("widgets/stash",{}))},search(){this.$store.dispatch("widgets/notify",{status:"searching"}).then(()=>this.$store.dispatch("majigs/search",{terms:this.terms}).catch(t=>{throw t[0]})).then(t=>(this.termed=this.terms,this.majigs=t,this.$store.dispatch("widgets/notify",{status:""}))).catch(t=>{this.$store.dispatch("widgets/notify",{status:t.title})})}}},n=r,o=e("2877"),h=Object(o["a"])(n,a,i,!1,null,null,null);s["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d217e3a.74b086b9.js.map