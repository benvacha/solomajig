(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7a77"],{7877:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"body"},[i("div",{staticClass:"body"},[i("div",{staticClass:"subbody"},[i("div",{staticClass:"bodyer thin stack"},[i("div",{staticClass:"horzer dim thin"},[i("div",{staticClass:"lefter"},[i("span",[t._v(t._s(t.status||t.$route.path))])]),i("div",{staticClass:"rghter"},[i("a",{class:t.classFilter("published"),on:{click:function(s){return t.toggleFilter("published")}}},[t._v(" Published")]),t._v(" • "),i("a",{class:t.classFilter("updated"),on:{click:function(s){return t.toggleFilter("updated")}}},[t._v(" Updated")]),t._v(" • "),i("span",[t._v(" "+t._s(t.count||0)+" ")])])])]),t.majigs.length?t._e():i("div",{staticClass:"bodyer thin stack"},[i("p",[t._v("404 Not Found")])]),t._l(t.majigs,(function(t){return i("Majig",{key:t.id,attrs:{majig:t}})})),t._m(0)],2)])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"bodyer thin stack"},[i("div",{staticClass:"horzer dim thin",staticStyle:{"font-size":"1em"}},[i("div",{staticClass:"cntrer"})])])}];const l=()=>Promise.all([i.e("chunk-43839276"),i.e("chunk-2d0f1594")]).then(i.bind(null,"9ff7"));var r={components:{Majig:l},filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";const s=new Date(t);return s.toLocaleString("sv-SE")}},props:{flags:{type:Array,required:!1}},data(){return{status:"",limit:100,skip:0,filter:"-published"}},created(){this.loadMajigs()},watch:{$route:"loadMajigs",signed:"loadMajigs"},computed:{signed(){return this.$store.getters["token/signed"]},count(){return this.$store.state.majigs.count},majigs(){return this.$store.state.majigs.all||[]}},methods:{toggleFilter(t){this.status="sorting",this.filter===t?this.filter="-"+t:this.filter.includes(t)?this.filter=t:this.filter="-"+t,this.$store.dispatch("majigs/load",{filter:this.filter,flags:this.flags,limit:this.limit,skip:this.skip}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},classFilter(t){return this.filter==t?"descend":this.filter=="-"+t?"ascend":""},loadMajigs(){this.status="loading",this.signed?this.filter="-updated":this.filter="-published",this.$store.dispatch("majigs/load",{filter:this.filter,flags:this.flags,limit:this.limit,skip:this.skip}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})}}},n=r,d=i("2877"),c=Object(d["a"])(n,e,a,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d7a77-legacy.777300c4.js.map