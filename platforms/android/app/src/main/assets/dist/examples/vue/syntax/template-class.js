// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=511)}({242:function(e,t){e.exports={data:{x:""},methods:{update:function(e){this.x="b",console.log("x",this.x)}}}},259:function(e,t){e.exports={a:{fontSize:48},b:{color:"#ff0000"}}},300:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:e.update}},[n("text",{staticClass:["a"]},[e._v("Hello")]),n("text",{staticClass:["b"]},[e._v("Hello")]),n("text",{class:["a",e.x]},[e._v("Hello")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},511:function(e,t,n){var r,o,s=[];s.push(n(259)),r=n(242);var c=n(300);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\syntax\\template-class.vue",o.render=c.render,o.staticRenderFns=c.staticRenderFns,o._scopeId="data-v-1ea477c2",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=r,e.exports.el="true",new Vue(e.exports)}});