// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=506)}({237:function(t,e){t.exports={data:function(){return{list:[]}},mounted:function(){function t(t){this.list.push("custom: "+JSON.stringify(t)),console.log(this.list)}this.$emit("custom",{x:1}),this.$on("custom",t),this.$emit("custom",{x:2}),this.$off("custom",t),this.$emit("custom",{x:3})}}},258:function(t,e){t.exports={title:{fontSize:48}}},299:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,function(e,r){return n("text",{key:r,staticClass:["title"]},[t._v(t._s(e))])}))},staticRenderFns:[]},t.exports.render._withStripped=!0},506:function(t,e,n){var r,s,o=[];o.push(n(258)),r=n(237);var i=n(299);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s=r=r.default),"function"==typeof s&&(s=s.options),s.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\syntax\\script-events.vue",s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-1becb0e4",s.style=s.style||{},o.forEach(function(t){for(var e in t)s.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,o),t.exports=r,t.exports.el="true",new Vue(t.exports)}});