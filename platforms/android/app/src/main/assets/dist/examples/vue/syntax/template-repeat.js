// { "framework": "Vue"} 

!function(t){function e(s){if(n[s])return n[s].exports;var r=n[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=516)}({247:function(t,e){t.exports={data:function(){return{list:["a","b","c","d","e"],list2:[{text:"a"},{text:"b"},{text:"c"},{text:"d"},{text:"e"}]}}}},256:function(t,e){t.exports={title:{fontSize:48},subtitle:{fontSize:36}}},295:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("text",{staticClass:["title"]},[t._v("Custom item")]),t._l(t.list,function(e){return n("text",{key:e.index,staticClass:["subtitle"]},[t._v(t._s(e))])}),n("text",{staticClass:["title"]},[t._v("Custom key and item")]),t._l(t.list,function(e,s){return n("text",{key:s,staticClass:["subtitle"]},[t._v(t._s(s)+"-"+t._s(e))])}),n("text",{staticClass:["title"]},[t._v("Array of Object")]),t._l(t.list2,function(e,s,r){return n("text",{key:r,staticClass:["subtitle"]},[t._v("> "+t._s(r)+"-"+t._s(e.text))])})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},516:function(t,e,n){var s,r,i=[];i.push(n(256)),s=n(247);var o=n(295);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=s=s.default),"function"==typeof r&&(r=r.options),r.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\syntax\\template-repeat.vue",r.render=o.render,r.staticRenderFns=o.staticRenderFns,r._scopeId="data-v-0ef5f941",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=s,t.exports.el="true",new Vue(t.exports)}});