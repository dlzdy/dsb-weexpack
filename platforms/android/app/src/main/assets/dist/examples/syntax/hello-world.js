// { "framework": "Weex"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=645)}({260:function(t,e){t.exports={wrapper:{alignItems:"center",marginTop:120},title:{fontSize:48},logo:{width:360,height:82}}},331:function(t,e){t.exports={type:"div",classList:["wrapper"],events:{click:"update"},children:[{type:"image",attr:{src:function(){return this.logoUrl}},classList:["logo"]},{type:"text",classList:["title"],attr:{value:function(){return"Hello "+this.target}}}]}},402:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{logoUrl:"https://alibaba.github.io/weex/img/weex_logo_blue@3x.png",target:"World"}},methods:{update:function(t){this.target="Weex"}}}}},645:function(t,e,n){var o=n(331),r=n(260),i=n(402);__weex_define__("@weex-component/329270b3bfbbd14903cbd434ae412a35",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=o,n.exports.style=r}),__weex_bootstrap__("@weex-component/329270b3bfbbd14903cbd434ae412a35",void 0,void 0)}});