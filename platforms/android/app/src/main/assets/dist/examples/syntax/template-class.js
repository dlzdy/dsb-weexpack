// { "framework": "Weex"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=656)}({267:function(t,e){t.exports={a:{fontSize:48},b:{color:"#ff0000"}}},340:function(t,e){t.exports={type:"div",events:{click:"update"},children:[{type:"text",classList:["a"],attr:{value:"Hello"}},{type:"text",classList:["b"],attr:{value:"Hello"}},{type:"text",classList:function(){return["a",this.x]},attr:{value:"Hello"}}]}},411:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{x:""}},methods:{update:function(t){this.x="b"}}}}},656:function(t,e,n){var o=n(340),r=n(267),u=n(411);__weex_define__("@weex-component/effd178443da3210b221f296175b9c27",[],function(t,e,n){u(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=o,n.exports.style=r}),__weex_bootstrap__("@weex-component/effd178443da3210b221f296175b9c27",void 0,void 0)}});