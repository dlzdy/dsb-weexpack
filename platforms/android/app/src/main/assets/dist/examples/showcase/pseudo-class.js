// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=407)}({108:function(e,t){e.exports={wrapper:{alignItems:"center",marginTop:20},title:{fontSize:24},logo:{width:360,height:82,backgroundColor:"#008000","width:active":180,"height:active":82,"backgroundColor:active":"#FF0000"},focusinput:{fontSize:60,height:80,width:700,"color:focus":"#008000","backgroundColor:focus":"#FF0000"},enabledinput:{fontSize:60,height:80,width:700,"color:enabled":"#FFFF00","backgroundColor:enabled":"#0000FF"},disabledinput:{fontSize:60,height:80,width:700,"color:disabled":"#FFFFFF","backgroundColor:disabled":"#808080"}}},172:function(e,t){e.exports={type:"div",children:[{type:"scroller",children:[{type:"wxc-panel",attr:{title:"active",type:"primary"},children:[{type:"div",classList:["wrapper"],children:[{type:"image",attr:{src:function(){return this.logoUrl}},classList:["logo"]},{type:"text",classList:["title"],attr:{value:"please click image"}}]}]},{type:"wxc-panel",attr:{title:"focus",type:"primary"},children:[{type:"input",attr:{type:"text",placeholder:"Input Text",autofocus:function(){return this.autofocus},value:"test active"},classList:["focusinput"],events:{change:"onchange",input:"oninput"}}]},{type:"wxc-panel",attr:{title:"enabled",type:"primary"},children:[{type:"input",attr:{type:"text",placeholder:"Input Text",autofocus:function(){return this.autofocus},value:"test active"},classList:["enabledinput"],events:{change:"onchange",input:"oninput"}}]},{type:"wxc-panel",attr:{title:"disabled",type:"primary"},children:[{type:"input",attr:{type:"text",placeholder:"Input Text",autofocus:function(){return this.autofocus},value:"test active",disabled:"true"},classList:["disabledinput"],events:{change:"onchange",input:"oninput"}}]}]}]}},407:function(e,t,n){var o=n(172),r=n(108),i=n(!function(){var e=new Error('Cannot find module "!!../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./pseudo-class.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/d4356380f63f15a28f14a18b1dc17156",[],function(e,t,n){i(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=o,n.exports.style=r}),__weex_bootstrap__("@weex-component/d4356380f63f15a28f14a18b1dc17156",void 0,void 0)}});