(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7a77"],{7877:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"body"},[i("ParabodyRight",{attrs:{views:t.views,view:t.view,viewed:t.viewed},on:{open:t.open,goto:t.goto}}),i("div",{staticClass:"body"},[i("div",{staticClass:"body"},[i("div",{staticClass:"subbody"},[i("div",{staticClass:"bodyer thin stack"},[i("div",{staticClass:"horzer dim thin"},[i("div",{staticClass:"lefter"},[i("span",[t._v(t._s(t.status||t.$route.path))])]),i("div",{staticClass:"rghter"},[i("a",{class:t.classFilter("published"),on:{click:function(s){return t.toggleFilter("published")}}},[t._v(" Published")]),t._v(" • "),i("a",{class:t.classFilter("updated"),on:{click:function(s){return t.toggleFilter("updated")}}},[t._v(" Updated")]),t._v(" • "),i("span",[t._v(" "+t._s(t.majigs.length||0)+" ")])])])]),t.majigs.length?t._e():i("div",{staticClass:"bodyer thin stack"},[i("p",[t._v("404 Not Found")])]),t._l(t.majigs,(function(s){return i("div",{key:s.id,staticClass:"bodyer thin stack"},[i("div",{domProps:{innerHTML:t._s(t.marked(s.markdown))}}),t._m(0,!0),i("div",{staticClass:"substack horzer dim"},[t.filter.includes("published")?i("div",{staticClass:"lefter thin"},[t._v(" P • "+t._s(t._f("datetime")(s.published))+" ")]):t._e(),t.filter.includes("updated")?i("div",{staticClass:"lefter thin"},[t._v(" U • "+t._s(t._f("datetime")(s.updated))+" ")]):t._e(),i("div",{staticClass:"rghter thin"},[i("a",{on:{click:function(i){return t.gotoMajig(s)}}},[t._v(" GoTo ")]),t._v(" • "),i("a",{on:{click:function(i){return t.open("sourcer",s)}}},[t._v(" Source ")]),t._v(" • "),i("a",{on:{click:function(i){return t.open("abouter",s)}}},[t._v(" Meta ")])])])])})),i("div",{staticClass:"bodyer thin stack"})],2)])])],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"supstack"},[i("br")])}],r=i("e0c1"),n=i.n(r),l=i("2b91"),o=i("624f"),d=i("c71a");const c=new n.a.Renderer,h={link:c.link.bind(c)};c.link=(t,s,i)=>("/"===t[0]?t="#"+t:"#"!==t[0]&&(t="#/"+t),h.link(t,s,i));var u={components:{ParabodyRight:l["a"]},filters:{datetime:t=>{if(!t)return"000-00-00 00:00:00";const s=new Date(t);return s.toLocaleString("sv-SE")}},props:{flags:{type:Array,required:!1}},data(){return{status:"",views:{abouter:o["a"],sourcer:d["a"]},view:"",viewed:null}},created(){this.loadMajigs()},watch:{$route:"loadMajigs",signed:"loadMajigs"},computed:{signed(){return this.$store.getters["token/signed"]},filter(){return this.$store.state.majigs.filter},majigs(){return this.$store.state.majigs.all||[]}},methods:{marked(t){return n()(t||"404 Not Found",{renderer:c})},goto(t){this.open(!1),this.$router.push(t).catch(t=>{})},gotoMajig(t){t.path?this.$router.push({path:t.path}):this.$router.push({name:"supmajig",params:{majigId:t.id}})},open(t,s){!1===t||t===this.view&&s===this.viewed?(this.view="",this.viewed=null):t!==this.view?(this.view=t,this.viewed=s):this.viewed=s},toggleFilter(t){this.status="sorting",this.filter==t?this.$store.dispatch("majigs/load",{filter:"-"+t,flags:this.flags}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title}):this.$store.dispatch("majigs/load",{filter:t,flags:this.flags}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})},classFilter(t){return this.filter==t?"descend":this.filter=="-"+t?"ascend":""},loadMajigs(){this.open(!1),this.status="loading",this.$store.dispatch("majigs/load",{filter:this.filter,flags:this.flags}).then(()=>{this.status=""}).catch(t=>{this.status=t[0].title})}}},v=u,g=i("2877"),p=Object(g["a"])(v,e,a,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d7a77.07885ec0.js.map