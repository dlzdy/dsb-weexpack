// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=450)}({10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["btn","btn-"+t.type,"btn-sz-"+t.size]},[n("text",{class:["btn-txt","btn-txt-"+t.type,"btn-txt-sz-"+t.size]},[t._v(t._s(t.value))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},213:function(t,e,n){var o=weex.requireModule("modal");t.exports={data:function(){return{playStatus:"play"}},components:{button:n(7)},methods:{pause:function(){this.playStatus="pause",o.toast({message:"click pause"})},play:function(){this.playStatus="play",o.toast({message:"click play"})},onpause:function(t){this.playStatus=t.playStatus,o.toast({message:"video pause"})},onstart:function(t){this.playStatus=t.playStatus,o.toast({message:"video start"})},onfinish:function(t){this.playStatus=t.playStatus,o.toast({message:"video finish"})},onfail:function(t){this.playStatus=t.playStatus,o.toast({message:"video fail"})}}}},284:function(t,e){t.exports={video:{width:750,height:460,marginBottom:80}}},339:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroller",[n("video",{staticClass:["video"],attrs:{onpause:"onpause",onstart:"onstart",onfinish:"onfinish",onfail:"onfail",src:"http://g.tbcdn.cn/ali-wireless-h5/res/0.0.6/toy.mp4",autoPlay:"true",playStatus:t.playStatus}}),n("div",{staticStyle:{flexDirection:"row",justifyContent:"center"}},[n("button",{attrs:{value:"Pause"},nativeOn:{click:function(e){t.pause(e)}}}),n("button",{staticStyle:{marginLeft:"20px"},attrs:{value:"Play",type:"primary"},nativeOn:{click:function(e){t.play(e)}}})],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},450:function(t,e,n){var o,r,s=[];s.push(n(284)),o=n(213);var a=n(339);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\components\\video.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-e215dfbe",r.style=r.style||{},s.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),t.exports=o,t.exports.el="true",new Vue(t.exports)},7:function(t,e,n){var o,r,s=[];s.push(n(9)),o=n(8);var a=n(10);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\button.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-788a055c",r.style=r.style||{},s.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),t.exports=o},8:function(t,e){t.exports={props:{type:{default:"default"},size:{default:"large"},value:{default:""}}}},9:function(t,e){t.exports={btn:{marginBottom:0,alignItems:"center",justifyContent:"center",borderWidth:1,borderStyle:"solid",borderColor:"#333333"},"btn-default":{color:"rgb(51,51,51)"},"btn-primary":{backgroundColor:"rgb(40,96,144)",borderColor:"rgb(40,96,144)"},"btn-success":{backgroundColor:"rgb(92,184,92)",borderColor:"rgb(76,174,76)"},"btn-info":{backgroundColor:"rgb(91,192,222)",borderColor:"rgb(70,184,218)"},"btn-warning":{backgroundColor:"rgb(240,173,78)",borderColor:"rgb(238,162,54)"},"btn-danger":{backgroundColor:"rgb(217,83,79)",borderColor:"rgb(212,63,58)"},"btn-link":{borderColor:"rgba(0,0,0,0)",borderRadius:0},"btn-txt-default":{color:"rgb(51,51,51)"},"btn-txt-primary":{color:"rgb(255,255,255)"},"btn-txt-success":{color:"rgb(255,255,255)"},"btn-txt-info":{color:"rgb(255,255,255)"},"btn-txt-warning":{color:"rgb(255,255,255)"},"btn-txt-danger":{color:"rgb(255,255,255)"},"btn-txt-link":{color:"rgb(51,122,183)"},"btn-sz-large":{width:300,height:100,paddingTop:25,paddingBottom:25,paddingLeft:40,paddingRight:40,borderRadius:15},"btn-sz-middle":{width:240,height:80,paddingTop:15,paddingBottom:15,paddingLeft:30,paddingRight:30,borderRadius:10},"btn-sz-small":{width:170,height:60,paddingTop:12,paddingBottom:12,paddingLeft:25,paddingRight:25,borderRadius:7},"btn-txt-sz-large":{fontSize:45},"btn-txt-sz-middle":{fontSize:35},"btn-txt-sz-small":{fontSize:30}}}});