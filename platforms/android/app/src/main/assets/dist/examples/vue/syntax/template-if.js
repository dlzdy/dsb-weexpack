// { "framework": "Weex"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=743)}({470:function(t,e){t.exports={data:{flag:!0},methods:{toggle:function(t){this.flag=!this.flag,console.log("this.flag:",this.flag)}}}},490:function(t,e){t.exports={title:{fontSize:48},btn:{fontSize:36,textAlign:"center",color:"#FFFFFF",backgroundColor:"#808080",padding:20,borderRadius:5}}},531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("text",{staticClass:["btn"],on:{click:t.toggle}},[t._v("Toggle")]),t.flag?n("text",{staticClass:["title"]},[t._v("I'm ON")]):t._e(),t.flag?t._e():n("text",{staticClass:["title"]},[t._v("I'm Off")])])},staticRenderFns:[]},t.exports.render._withStripped=!0},743:function(t,e,n){var r,o,s=[];s.push(n(490)),r=n(470);var i=n(531);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="E:\\work_study\\weex_study\\dsb-weexpack\\src\\examples\\vue\\syntax\\template-if.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-37fb40f9",o.style=o.style||{},s.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),t.exports=r,t.exports.el="true",new Vue(t.exports)}});