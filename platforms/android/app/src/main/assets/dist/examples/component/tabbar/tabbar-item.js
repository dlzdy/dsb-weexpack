// { "framework": "Weex"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=596)}({236:function(t,e){t.exports={wrapper:{width:750,position:"absolute",top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center"},text:{fontSize:60,fontWeight:"bold",fontFamily:'"Open Sans", sans-serif'}}},297:function(t,e){t.exports={type:"div",classList:["wrapper"],children:[{type:"text",classList:["text"],style:{color:function(){return this.color}},attr:{value:function(){return this.text}}}]}},373:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{color:"#ff0000",text:""}},created:function(){var t=this.$getConfig().bundleUrl;nativeLog("bundleUrl = "+t),t.indexOf("tab1")>0?(this.color="#ff0000",this.text="This is Tab 1 Test."):t.indexOf("tab2")>0?(this.color="#00ff00",this.text="This is Tab 2 Test."):t.indexOf("tab3")>0&&(this.color="#0000ff",this.text="This is Tab 3 Test.")}}}},596:function(t,e,n){var o=n(297),r=n(236),i=n(373);__weex_define__("@weex-component/9b27f0789c42647b779965833d604905",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=o,n.exports.style=r}),__weex_bootstrap__("@weex-component/9b27f0789c42647b779965833d604905",void 0,void 0)}});