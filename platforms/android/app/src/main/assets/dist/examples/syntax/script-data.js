// { "framework": "Weex"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=650)}({261:function(t,e){t.exports={title:{fontSize:48}}},334:function(t,e){t.exports={type:"div",events:{click:"update"},children:[{type:"text",classList:["title"],attr:{value:function(){return this.firstName}}},{type:"text",classList:["title"],attr:{value:function(){return this.lastName}}},{type:"text",classList:["title"],attr:{value:function(){return this.fullName}}},{type:"text",classList:["title"],attr:{value:function(){return this.today}}}]}},405:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{firstName:"John",lastName:"Smith",date:Date.now()}},methods:{update:function(){this.today="2016-01-01"}},computed:{fullName:function(){return this.firstName+" "+this.lastName},today:{get:function(){return new Date(this.date).toDateString()},set:function(t){this.date=Date.parse(t)}}}}}},650:function(t,e,n){var r=n(334),o=n(261),i=n(405);__weex_define__("@weex-component/6975a0636b1a063b6fd453936866803d",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o}),__weex_bootstrap__("@weex-component/6975a0636b1a063b6fd453936866803d",void 0,void 0)}});