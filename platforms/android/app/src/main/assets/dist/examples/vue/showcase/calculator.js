// { "framework": "Vue"} 

!function(t){function e(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=475)}({225:function(module,exports){var OP=["+","-","*","/"],modal=weex.requireModule("modal");module.exports={data:function(){return{result:"",inputs:[]}},methods:{input:function(t){modal.toast({message:"input: "+t.target.attr.value,duration:1});var e=t.target.attr.value,n=this.inputs,s=n.length?n[n.length-1]:"";if(!(OP.indexOf(s)>-1&&OP.indexOf(e)>-1)){n.push(e);for(var i,r=[],o=0;o<n.length;o++)i=n[o],OP.indexOf(i)>-1&&(i=" "+i+" "),r.push(i);this.result=r.join("")}},calculate:function(){var result=eval(this.result);this.inputs=[result],this.result=result},clear:function(){this.inputs=[],this.result=""}}}},279:function(t,e){t.exports={row:{flexDirection:"row"},result:{textAlign:"right",backgroundColor:"#666666",fontSize:40,color:"#FFFFFF",height:100,padding:30,margin:5},btn:{flex:1,textAlign:"center",backgroundColor:"#eeeeee",fontSize:36,height:100,padding:30,margin:5},"btn-operator":{backgroundColor:"#666699",fontSize:40,color:"#FFFFFF"}}},334:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"5px"}},[n("text",{staticClass:["result"]},[t._v(t._s(t.result))]),n("div",{staticClass:["row"]},[n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("1")]),n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("2")]),n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("3")]),n("text",{staticClass:["btn","btn-operator"],on:{click:t.input}},[t._v("+")])]),n("div",{staticClass:["row"]},[n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("4")]),n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("5")]),n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("6")]),n("text",{staticClass:["btn","btn-operator"],on:{click:t.input}},[t._v("-")])]),n("div",{staticClass:["row"]},[n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("7")]),n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("8")]),n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("9")]),n("text",{staticClass:["btn","btn-operator"],on:{click:t.input}},[t._v("*")])]),n("div",{staticClass:["row"]},[n("text",{staticClass:["btn"],on:{click:t.input}},[t._v("0")]),n("text",{staticClass:["btn"],on:{click:t.input}},[t._v(".")]),n("text",{staticClass:["btn"],on:{click:t.clear}},[t._v("AC")]),n("text",{staticClass:["btn","btn-operator"],on:{click:t.calculate}},[t._v("=")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},475:function(t,e,n){var s,i,r=[];r.push(n(279)),s=n(225);var o=n(334);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=s=s.default),"function"==typeof i&&(i=i.options),i.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\showcase\\calculator.vue",i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-a1cf7756",i.style=i.style||{},r.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),t.exports=s,t.exports.el="true",new Vue(t.exports)}});