(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0794d9c3"],{"10a0":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[e.signed?s("div",{staticClass:"bodyer para"},[s("h2",[e._v("About Majig")]),s("ul",[s("li",[s("div",[e._v(" published: "),s("b"),s("span",[e._v(e._s(e._f("datetime")(e.viewed.published)))])])]),s("li",[s("div",[e._v(" updated: "),s("b"),s("span",[e._v(e._s(e._f("datetime")(e.viewed.updated)))])])]),s("li",[s("div",[e._v(" created: "),s("b"),s("span",[e._v(e._s(e._f("datetime")(e.viewed.created)))])])])]),e.viewed.published?e._e():s("form",{on:{submit:function(t){return t.preventDefault(),e.publish(t)}}},[s("input",{attrs:{type:"submit",disabled:!e.viewed.id,value:"Publish"}})]),e.viewed.published?s("form",{on:{submit:function(t){return t.preventDefault(),e.unpublish(t)}}},[s("input",{attrs:{type:"submit",disabled:!e.viewed.id,value:"UnPublish"}})]):e._e(),s("h2",[e._v("Tag Majig")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.retag(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.viewed.tags,expression:"viewed.tags"}],attrs:{type:"text",placeholder:"tags"},domProps:{value:e.viewed.tags},on:{input:function(t){t.target.composing||e.$set(e.viewed,"tags",t.target.value)}}}),s("input",{attrs:{type:"submit",disabled:!e.viewed.id,value:"ReTag"}})]),s("h6"),s("h2",[e._v("Move Majig")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.move(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.viewed.path,expression:"viewed.path"}],attrs:{type:"text",placeholder:"/path"},domProps:{value:e.viewed.path},on:{input:function(t){t.target.composing||e.$set(e.viewed,"path",t.target.value)}}}),s("input",{attrs:{type:"submit",disabled:!e.viewed.id,value:"Move"}})]),s("h2",[e._v("Remove Majig")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.remove(t)}}},[s("input",{attrs:{type:"submit",disabled:!e.viewed.id,value:"Remove"}})])]):e._e(),e.signed?e._e():s("div",{staticClass:"bodyer para"},[s("h2",[e._v("About Majig")]),s("ul",[s("li",[s("div",[e._v(" tags: "),s("b"),s("span",[e._v(e._s(e.viewed.tags))])])]),s("li",[s("div",[e._v(" published: "),s("b"),s("span",[e._v(e._s(e._f("datetime")(e.viewed.published)))])])]),s("li",[s("div",[e._v(" updated: "),s("b"),s("span",[e._v(e._s(e._f("datetime")(e.viewed.updated)))])])]),s("li",[s("div",[e._v(" created: "),s("b"),s("span",[e._v(e._s(e._f("datetime")(e.viewed.created)))])])])])])])])},n=[],r={components:{},filters:{datetime:e=>{if(!e)return"000-00-00 00:00:00";const t=new Date(e);return t.toLocaleString("sv-SE")}},props:{stacked:{type:Boolean,default:!1},viewed:{type:Object,required:!0}},data(){return{}},computed:{signed(){return this.$store.getters["token/signed"]}},methods:{move(){return this.$emit("notify","moving"),this.$store.dispatch("majig/update",{majigId:this.viewed.id,path:this.viewed.path||!1}).then(e=>{this.$emit("open",!1),this.$router.push(e.path||"/").catch(e=>{})}).catch(e=>{this.$emit("notify",e[0].title)})},retag(){return this.$emit("notify","tagging"),this.$store.dispatch(this.stacked?"majigs/update":"majig/update",{majigId:this.viewed.id,tags:this.viewed.tags}).then(()=>{this.stacked?this.$emit("open",!1):this.$emit("notify","")}).catch(e=>{this.$emit("notify",e[0].title)})},publish(){this.$emit("notify","publishing"),this.$store.dispatch(this.stacked?"majigs/update":"majig/update",{majigId:this.viewed.id,published:new Date}).then(()=>{this.stacked?this.$emit("open",!1):this.$emit("notify","")}).catch(e=>{this.$emit("notify",e[0].title)})},unpublish(){this.$emit("notify","unpublishing"),this.$store.dispatch(this.stacked?"majigs/update":"majig/update",{majigId:this.viewed.id,published:!1}).then(()=>{this.stacked?this.$emit("open",!1):this.$emit("notify","")}).catch(e=>{this.$emit("notify",e[0].title)})},remove(){this.$emit("notify","removing"),this.$store.dispatch(this.stacked?"majigs/remove":"majig/remove",{majigId:this.viewed.id}).then(()=>{this.$emit("open",!1)}).catch(e=>{this.$emit("notify",e[0].title)})}}},a=r,l=s("2877"),o=Object(l["a"])(a,i,n,!1,null,null,null);t["a"]=o.exports},"27b0":function(e,t){e.exports=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}},"2b91":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"parabody right",class:{open:e.opened,sticky:e.stuck}},[s("div",{staticClass:"prebody"},[s("div",{staticClass:"horzer"},[s("div",{staticClass:"rghter mask"},[e._v(" "+e._s(e.status)+" ")]),s("div",{staticClass:"lefter full"},[s("a",{staticClass:"material-icons full",on:{click:function(t){return e.$emit("open",!1)}}},[e._v(" chevron_right ")])])])]),s(e.views[e.view],{tag:"component",attrs:{viewed:e.viewed,stacked:e.stacked},on:{goto:e.goto,open:e.open,notify:e.notify}})],1)},n=[],r={components:{},props:{views:{type:Object,default:{}},view:{type:String,default:""},viewed:{type:Object,default:null},stacked:{type:Boolean,default:!1}},watch:{view(e,t){this.status="",this.opened=!!e}},data(){return{opened:!1,stuck:!1,status:""}},methods:{goto(e){this.$emit("goto",e)},open(e,t){this.$emit("open",e,t)},notify(e){this.status=e,this.$emit("notify",e)}}},a=r,l=s("2877"),o=Object(l["a"])(a,i,n,!1,null,null,null);t["a"]=o.exports},"49b6":function(e,t,s){const{defaults:i}=s("bdbb"),{cleanUrl:n,escape:r}=s("ad42");e.exports=class{constructor(e){this.options=e||i}code(e,t,s){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,i);null!=t&&t!==e&&(s=!0,e=t)}return i?'<pre><code class="'+this.options.langPrefix+r(i,!0)+'">'+(s?e:r(e,!0))+"</code></pre>\n":"<pre><code>"+(s?e:r(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,s,i){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+i.slug(s)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,s){const i=t?"ol":"ul",n=t&&1!==s?' start="'+s+'"':"";return"<"+i+n+">\n"+e+"</"+i+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const s=t.header?"th":"td",i=t.align?"<"+s+' align="'+t.align+'">':"<"+s+">";return i+e+"</"+s+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,s){if(e=n(this.options.sanitize,this.options.baseUrl,e),null===e)return s;let i='<a href="'+r(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+s+"</a>",i}image(e,t,s){if(e=n(this.options.sanitize,this.options.baseUrl,e),null===e)return s;let i='<img src="'+e+'" alt="'+s+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">",i}text(e){return e}}},"4fd2":function(e,t,s){const{defaults:i}=s("bdbb"),{block:n}=s("7b9e"),{rtrim:r,splitCells:a,escape:l}=s("ad42");e.exports=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||i,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.rules=n.gfm)}static get rules(){return n}static lex(t,s){const i=new e(s);return i.lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let s,i,o,h,c,u,p,d,g,m,f,b,k,x,_,v;e=e.replace(/^ +$/gm,"");while(e)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(o[0].length),t&&"paragraph"===t.type?t.text+="\n"+o[0].trimRight():(o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?o:r(o,"\n")}))}else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2]?o[2].trim():o[2],text:o[3]||""});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if((o=this.rules.nptable.exec(e))&&(u={type:"table",header:a(o[1].replace(/^ *| *\| *$/g,"")),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3]?o[3].replace(/\n$/,"").split("\n"):[]},u.header.length===u.align.length)){for(e=e.substring(o[0].length),f=0;f<u.align.length;f++)/^ *-+: *$/.test(u.align[f])?u.align[f]="right":/^ *:-+: *$/.test(u.align[f])?u.align[f]="center":/^ *:-+ *$/.test(u.align[f])?u.align[f]="left":u.align[f]=null;for(f=0;f<u.cells.length;f++)u.cells[f]=a(u.cells[f],u.header.length);this.tokens.push(u)}else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),h=o[2],x=h.length>1,p={type:"list_start",ordered:x,start:x?+h:"",loose:!1},this.tokens.push(p),o=o[0].match(this.rules.item),d=[],s=!1,k=o.length,f=0;f<k;f++)u=o[f],m=u.length,u=u.replace(/^ *([*+-]|\d+\.) */,""),~u.indexOf("\n ")&&(m-=u.length,u=this.options.pedantic?u.replace(/^ {1,4}/gm,""):u.replace(new RegExp("^ {1,"+m+"}","gm"),"")),f!==k-1&&(c=n.bullet.exec(o[f+1])[0],(h.length>1?1===c.length:c.length>1||this.options.smartLists&&c!==h)&&(e=o.slice(f+1).join("\n")+e,f=k-1)),i=s||/\n\n(?!\s*$)/.test(u),f!==k-1&&(s="\n"===u.charAt(u.length-1),i||(i=s)),i&&(p.loose=!0),_=/^\[[ xX]\] /.test(u),v=void 0,_&&(v=" "!==u[1],u=u.replace(/^\[[ xX]\] +/,"")),g={type:"list_item_start",task:_,checked:v,loose:i},d.push(g),this.tokens.push(g),this.token(u,!1),this.tokens.push({type:"list_item_end"});if(p.loose)for(k=d.length,f=0;f<k;f++)d[f].loose=!0;this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):l(o[0]):o[0]});else if(t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),o[3]&&(o[3]=o[3].substring(1,o[3].length-1)),b=o[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[b]||(this.tokens.links[b]={href:o[2],title:o[3]});else if((o=this.rules.table.exec(e))&&(u={type:"table",header:a(o[1].replace(/^ *| *\| *$/g,"")),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3]?o[3].replace(/\n$/,"").split("\n"):[]},u.header.length===u.align.length)){for(e=e.substring(o[0].length),f=0;f<u.align.length;f++)/^ *-+: *$/.test(u.align[f])?u.align[f]="right":/^ *:-+: *$/.test(u.align[f])?u.align[f]="center":/^ *:-+ *$/.test(u.align[f])?u.align[f]="left":u.align[f]=null;for(f=0;f<u.cells.length;f++)u.cells[f]=a(u.cells[f].replace(/^ *\| *| *\| *$/g,""),u.header.length);this.tokens.push(u)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2].charAt(0)?1:2,text:o[1]});else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}}},5515:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"body"},[s("div",{staticClass:"subbody"},[e.signed?s("div",{staticClass:"bodyer para"},[s("h2",[e._v("Edit Majig")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.update(t)}}},[s("input",{attrs:{type:"submit",value:"Update"}})]),s("h2",[e._v("Markdown")]),s("form",{staticClass:"editor",on:{submit:function(t){return t.preventDefault(),e.update(t)}}},[s("pre",[s("span",[e._v("\n        "+e._s(e.majig.markdown)+"\n      ")]),s("br")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.majig.markdown,expression:"majig.markdown"}],attrs:{placeholder:"markdown"},domProps:{value:e.majig.markdown},on:{input:function(t){t.target.composing||e.$set(e.majig,"markdown",t.target.value)}}})])]):e._e(),e.signed?e._e():s("div",{staticClass:"bodyer para"},[s("h2",[e._v("Markdown")]),s("pre",[e._v(e._s(e.majig.markdown))])])])])},n=[],r={components:{},props:{viewed:{type:Object,required:!0}},data(){return{}},computed:{signed(){return this.$store.getters["token/signed"]},majig(){return this.viewed}},methods:{update(){this.$emit("notify","updating"),this.$store.dispatch("majigs/update",{majigId:this.majig.id,markdown:this.majig.markdown}).then(e=>{this.$emit("open",!1)}).catch(e=>{this.$emit("notify",e[0].title)})}}},a=r,l=s("2877"),o=Object(l["a"])(a,i,n,!1,null,null,null);t["a"]=o.exports},"7b9e":function(e,t,s){const{noopTest:i,edit:n,merge:r}=s("ad42"),a={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:i,table:i,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};a.def=n(a.def).replace("label",a._label).replace("title",a._title).getRegex(),a.bullet=/(?:[*+-]|\d{1,9}\.)/,a.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,a.item=n(a.item,"gm").replace(/bull/g,a.bullet).getRegex(),a.list=n(a.list).replace(/bull/g,a.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+a.def.source+")").getRegex(),a._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",a._comment=/<!--(?!-?>)[\s\S]*?-->/,a.html=n(a.html,"i").replace("comment",a._comment).replace("tag",a._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),a.paragraph=n(a._paragraph).replace("hr",a.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",a._tag).getRegex(),a.blockquote=n(a.blockquote).replace("paragraph",a.paragraph).getRegex(),a.normal=r({},a),a.gfm=r({},a.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),a.pedantic=r({},a.normal,{html:n("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",a._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:i,paragraph:n(a.normal._paragraph).replace("hr",a.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",a.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const l={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:i,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:i,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};l.em=n(l.em).replace(/punctuation/g,l._punctuation).getRegex(),l._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,l._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,l._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,l.autolink=n(l.autolink).replace("scheme",l._scheme).replace("email",l._email).getRegex(),l._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,l.tag=n(l.tag).replace("comment",a._comment).replace("attribute",l._attribute).getRegex(),l._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,l._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,l._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,l.link=n(l.link).replace("label",l._label).replace("href",l._href).replace("title",l._title).getRegex(),l.reflink=n(l.reflink).replace("label",l._label).getRegex(),l.normal=r({},l),l.pedantic=r({},l.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:n(/^!?\[(label)\]\((.*?)\)/).replace("label",l._label).getRegex(),reflink:n(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",l._label).getRegex()}),l.gfm=r({},l.normal,{escape:n(l.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),l.gfm.url=n(l.gfm.url,"i").replace("email",l.gfm._extended_email).getRegex(),l.breaks=r({},l.gfm,{br:n(l.br).replace("{2,}","*").getRegex(),text:n(l.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),e.exports={block:a,inline:l}},8725:function(e,t,s){const i=s("49b6"),{defaults:n}=s("bdbb"),{inline:r}=s("7b9e"),{findClosingBracket:a,escape:l}=s("ad42");e.exports=class e{constructor(e,t){if(this.options=t||n,this.links=e,this.rules=r.normal,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.options.breaks?this.rules=r.breaks:this.rules=r.gfm)}static get rules(){return r}static output(t,s,i){const n=new e(s,i);return n.output(t)}output(t){let s,i,n,r,o,h,c="";while(t)if(o=this.rules.escape.exec(t))t=t.substring(o[0].length),c+=l(o[1]);else if(o=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),t=t.substring(o[0].length),c+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):l(o[0]):o[0];else if(o=this.rules.link.exec(t)){const i=a(o[2],"()");if(i>-1){const e=0===o[0].indexOf("!")?5:4,t=e+o[1].length+i;o[2]=o[2].substring(0,i),o[0]=o[0].substring(0,t).trim(),o[3]=""}t=t.substring(o[0].length),this.inLink=!0,n=o[2],this.options.pedantic?(s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n),s?(n=s[1],r=s[3]):r=""):r=o[3]?o[3].slice(1,-1):"",n=n.trim().replace(/^<([\s\S]*)>$/,"$1"),c+=this.outputLink(o,{href:e.escapes(n),title:e.escapes(r)}),this.inLink=!1}else if((o=this.rules.reflink.exec(t))||(o=this.rules.nolink.exec(t))){if(t=t.substring(o[0].length),s=(o[2]||o[1]).replace(/\s+/g," "),s=this.links[s.toLowerCase()],!s||!s.href){c+=o[0].charAt(0),t=o[0].substring(1)+t;continue}this.inLink=!0,c+=this.outputLink(o,s),this.inLink=!1}else if(o=this.rules.strong.exec(t))t=t.substring(o[0].length),c+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(t))t=t.substring(o[0].length),c+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(t))t=t.substring(o[0].length),c+=this.renderer.codespan(l(o[2].trim(),!0));else if(o=this.rules.br.exec(t))t=t.substring(o[0].length),c+=this.renderer.br();else if(o=this.rules.del.exec(t))t=t.substring(o[0].length),c+=this.renderer.del(this.output(o[1]));else if(o=this.rules.autolink.exec(t))t=t.substring(o[0].length),"@"===o[2]?(i=l(this.mangle(o[1])),n="mailto:"+i):(i=l(o[1]),n=i),c+=this.renderer.link(n,null,i);else if(this.inLink||!(o=this.rules.url.exec(t))){if(o=this.rules.text.exec(t))t=t.substring(o[0].length),this.inRawBlock?c+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):l(o[0]):o[0]):c+=this.renderer.text(l(this.smartypants(o[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===o[2])i=l(o[0]),n="mailto:"+i;else{do{h=o[0],o[0]=this.rules._backpedal.exec(o[0])[0]}while(h!==o[0]);i=l(o[0]),n="www."===o[1]?"http://"+i:i}t=t.substring(o[0].length),c+=this.renderer.link(n,null,i)}return c}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const s=t.href,i=t.title?l(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(s,i,this.output(e[1])):this.renderer.image(s,i,l(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let s,i="",n=0;for(;n<t;n++)s=e.charCodeAt(n),Math.random()>.5&&(s="x"+s.toString(16)),i+="&#"+s+";";return i}}},ad42:function(e,t){const s=/[&<>"']/,i=/[&<>"']/g,n=/[<>"']|&(?!#?\w+;)/,r=/[<>"']|&(?!#?\w+;)/g,a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},l=e=>a[e];function o(e,t){if(t){if(s.test(e))return e.replace(i,l)}else if(n.test(e))return e.replace(r,l);return e}const h=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(e){return e.replace(h,(e,t)=>(t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const u=/(^|[^\[])\^/g;function p(e,t){e=e.source||e,t=t||"";const s={replace:(t,i)=>(i=i.source||i,i=i.replace(u,"$1"),e=e.replace(t,i),s),getRegex:()=>new RegExp(e,t)};return s}const d=/[^\w:]/g,g=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(e,t,s){if(e){let e;try{e=decodeURIComponent(c(s)).replace(d,"").toLowerCase()}catch(i){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!g.test(s)&&(s=_(t,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch(i){return null}return s}const f={},b=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,x=/^([^:]+:\/*[^/]*)[\s\S]*$/;function _(e,t){f[" "+e]||(b.test(e)?f[" "+e]=e+"/":f[" "+e]=$(e,"/",!0)),e=f[" "+e];const s=-1===e.indexOf(":");return"//"===t.substring(0,2)?s?t:e.replace(k,"$1")+t:"/"===t.charAt(0)?s?t:e.replace(x,"$1")+t:e+t}const v={exec:function(){}};function w(e){let t,s,i=1;for(;i<arguments.length;i++)for(s in t=arguments[i],t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}function y(e,t){const s=e.replace(/\|/g,(e,t,s)=>{let i=!1,n=t;while(--n>=0&&"\\"===s[n])i=!i;return i?"|":" |"}),i=s.split(/ \|/);let n=0;if(i.length>t)i.splice(t);else while(i.length<t)i.push("");for(;n<i.length;n++)i[n]=i[n].trim().replace(/\\\|/g,"|");return i}function $(e,t,s){const i=e.length;if(0===i)return"";let n=0;while(n<i){const r=e.charAt(i-n-1);if(r!==t||s){if(r===t||!s)break;n++}else n++}return e.substr(0,i-n)}function S(e,t){if(-1===e.indexOf(t[1]))return-1;const s=e.length;let i=0,n=0;for(;n<s;n++)if("\\"===e[n])n++;else if(e[n]===t[0])i++;else if(e[n]===t[1]&&(i--,i<0))return n;return-1}function z(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}e.exports={escape:o,unescape:c,edit:p,cleanUrl:m,resolveUrl:_,noopTest:v,merge:w,splitCells:y,rtrim:$,findClosingBracket:S,checkSanitizeDeprecation:z}},bdbb:function(e,t){function s(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}function i(t){e.exports.defaults=t}e.exports={defaults:s(),getDefaults:s,changeDefaults:i}},e0c1:function(e,t,s){const i=s("4fd2"),n=s("eba7"),r=s("49b6"),a=s("fbf7"),l=s("8725"),o=s("27b0"),{merge:h,checkSanitizeDeprecation:c,escape:u}=s("ad42"),{getDefaults:p,changeDefaults:d,defaults:g}=s("bdbb");function m(e,t,s){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(s||"function"===typeof t){s||(s=t,t=null),t=h({},m.defaults,t||{}),c(t);const a=t.highlight;let l,o,u=0;try{l=i.lex(e,t)}catch(r){return s(r)}o=l.length;const p=function(e){if(e)return t.highlight=a,s(e);let i;try{i=n.parse(l,t)}catch(r){e=r}return t.highlight=a,e?s(e):s(null,i)};if(!a||a.length<3)return p();if(delete t.highlight,!o)return p();for(;u<l.length;u++)(function(e){"code"!==e.type?--o||p():a(e.text,e.lang,(function(t,s){return t?p(t):null==s||s===e.text?--o||p():(e.text=s,e.escaped=!0,void(--o||p()))}))})(l[u])}else try{return t=h({},m.defaults,t||{}),c(t),n.parse(i.lex(e,t),t)}catch(r){if(r.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||m.defaults).silent)return"<p>An error occurred:</p><pre>"+u(r.message+"",!0)+"</pre>";throw r}}m.options=m.setOptions=function(e){return h(m.defaults,e),d(m.defaults),m},m.getDefaults=p,m.defaults=g,m.Parser=n,m.parser=n.parse,m.Renderer=r,m.TextRenderer=a,m.Lexer=i,m.lexer=i.lex,m.InlineLexer=l,m.inlineLexer=l.output,m.Slugger=o,m.parse=m,e.exports=m},eba7:function(e,t,s){const i=s("49b6"),n=s("27b0"),r=s("8725"),a=s("fbf7"),{defaults:l}=s("bdbb"),{merge:o,unescape:h}=s("ad42");e.exports=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||l,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new n}static parse(t,s){const i=new e(s);return i.parse(t)}parse(e){this.inline=new r(e.links,this.options),this.inlineText=new r(e.links,o({},this.options,{renderer:new a})),this.tokens=e.reverse();let t="";while(this.next())t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;while("text"===this.peek().type)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,h(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,s,i,n,r="";for(i="",t=0;t<this.token.header.length;t++)i+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(r+=this.renderer.tablerow(i),t=0;t<this.token.cells.length;t++){for(s=this.token.cells[t],i="",n=0;n<s.length;n++)i+=this.renderer.tablecell(this.inline.output(s[n]),{header:!1,align:this.token.align[n]});e+=this.renderer.tablerow(i)}return this.renderer.table(r,e)}case"blockquote_start":e="";while("blockquote_end"!==this.next().type)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,s=this.token.start;while("list_end"!==this.next().type)e+=this.tok();return this.renderer.list(e,t,s)}case"list_item_start":{e="";const t=this.token.loose,s=this.token.checked,i=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(s)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(s)});else e+=this.renderer.checkbox(s);while("list_item_end"!==this.next().type)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,i,s)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}}},fbf7:function(e,t){e.exports=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}}}}]);
//# sourceMappingURL=chunk-0794d9c3.a7d36971.js.map