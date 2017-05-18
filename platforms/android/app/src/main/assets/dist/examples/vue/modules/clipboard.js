// { "framework": "Vue"} 

!function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=469)}({0:function(t,e,o){var r,n,d=[];d.push(o(2)),r=o(1);var a=o(3);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\panel.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-188d5d14",n.style=n.style||{},d.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,d),t.exports=r},1:function(t,e){t.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["btn","btn-"+t.type,"btn-sz-"+t.size]},[o("text",{class:["btn-txt","btn-txt-"+t.type,"btn-txt-sz-"+t.size]},[t._v(t._s(t.value))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},12:function(t,e,o){var r,n,d=[];d.push(o(14)),r=o(13);var a=o(15);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\tip.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-131a2e2b",n.style=n.style||{},d.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,d),t.exports=r},13:function(t,e){t.exports={props:{type:{default:"success"},value:{default:""}}}},14:function(t,e){t.exports={tip:{paddingLeft:36,paddingRight:36,paddingTop:36,paddingBottom:36,borderRadius:10},"tip-txt":{fontSize:28},"tip-success":{backgroundColor:"#dff0d8",borderColor:"#d6e9c6"},"tip-txt-success":{color:"#3c763d"},"tip-info":{backgroundColor:"#d9edf7",borderColor:"#bce8f1"},"tip-txt-info":{color:"#31708f"},"tip-warning":{backgroundColor:"#fcf8e3",borderColor:"#faebcc"},"tip-txt-warning":{color:"#8a6d3b"},"tip-danger":{backgroundColor:"#f2dede",borderColor:"#ebccd1"},"tip-txt-danger":{color:"#a94442"}}},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["tip","tip-"+t.type]},[o("text",{class:["tip-txt","tip-txt-"+t.type]},[t._v(t._s(t.value))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},2:function(t,e){t.exports={panel:{marginBottom:20,backgroundColor:"#ffffff",borderColor:"#dddddd",borderWidth:1},"panel-primary":{borderColor:"rgb(40,96,144)"},"panel-success":{borderColor:"rgb(76,174,76)"},"panel-info":{borderColor:"rgb(70,184,218)"},"panel-warning":{borderColor:"rgb(238,162,54)"},"panel-danger":{borderColor:"rgb(212,63,58)"},"panel-header":{backgroundColor:"#f5f5f5",fontSize:40,color:"#333333"},"panel-header-primary":{backgroundColor:"rgb(40,96,144)",color:"#ffffff"},"panel-header-success":{backgroundColor:"rgb(92,184,92)",color:"#ffffff"},"panel-header-info":{backgroundColor:"rgb(91,192,222)",color:"#ffffff"},"panel-header-warning":{backgroundColor:"rgb(240,173,78)",color:"#ffffff"},"panel-header-danger":{backgroundColor:"rgb(217,83,79)",color:"#ffffff"},"panel-body":{paddingLeft:12,paddingRight:12,paddingTop:20,paddingBottom:20}}},219:function(t,e,o){var r=weex.requireModule("modal"),n=weex.requireModule("clipboard");t.exports={data:function(){return{textToCopy:"",textFromPaste:"",tips:""}},components:{panel:o(0),tip:o(12),button:o(7)},mounted:function(){this.tips="1. Just click COPY button. It will auto generate a string with random text, and copy to system clipboard. \n 2. do copy in another app, then come back and click PASTE button."},methods:{doCopy:function(){r.toast({message:"doCopy!",duration:.5}),textToCopy="autoGenerateTextToCopy"+Math.random(),n.setString(textToCopy),this.textToCopy=textToCopy,this.tips="copy done. Now system clipboard has string of '"+textToCopy+"', try PASTE button, or paste in another app."},doPaste:function(){var t=this;r.toast({message:"doPaste!",duration:.5}),n.getString(function(e){console.log("paste result is "+JSON.stringify(e)),t.textFromPaste=e.data,t.tips="Paste done. Only support native(Android/iOS) NOW. according to security reason, paste in html5 is not supported."})}}}},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("scroller",[o("panel",{attrs:{title:"Clipboard",type:"primary"}},[o("panel",{attrs:{title:"Copy to clipboard5"}},[o("text",{staticStyle:{lineHeight:"40px",fontSize:"28px"}},[t._v(t._s(t.textToCopy))]),o("button",{attrs:{type:"info",size:"middle",value:"Copy"},nativeOn:{click:function(e){t.doCopy(e)}}})],1),o("panel",{attrs:{title:"Paste from clipboard"}},[o("text",{staticStyle:{lineHeight:"40px",fontSize:"28px"}},[t._v(t._s(t.textFromPaste))]),o("button",{attrs:{type:"info",size:"middle",value:"Paste"},nativeOn:{click:function(e){t.doPaste(e)}}})],1),o("panel",{attrs:{title:"Result"}},[o("tip",{staticStyle:{marginBottom:"20px"},attrs:{value:t.tips}})],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},3:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["panel","panel-"+t.type],style:{borderWidth:t.border}},[o("text",{class:["panel-header","panel-header-"+t.type],style:{paddingTop:t.paddingHead,paddingBottom:t.paddingHead,paddingLeft:1.5*t.paddingHead,paddingRight:1.5*t.paddingHead}},[t._v(t._s(t.title))]),o("div",{class:["panel-body","panel-body-"+t.type],style:{paddingTop:t.paddingBody,paddingBottom:t.paddingBody,paddingLeft:1.5*t.paddingBody,paddingRight:1.5*t.paddingBody}},[t._t("default")],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},469:function(t,e,o){var r,n,d=[];r=o(219);var a=o(296);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\modules\\clipboard.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n.style=n.style||{},d.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,d),t.exports=r,t.exports.el="true",new Vue(t.exports)},7:function(t,e,o){var r,n,d=[];d.push(o(9)),r=o(8);var a=o(10);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\button.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-788a055c",n.style=n.style||{},d.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,d),t.exports=r},8:function(t,e){t.exports={props:{type:{default:"default"},size:{default:"large"},value:{default:""}}}},9:function(t,e){t.exports={btn:{marginBottom:0,alignItems:"center",justifyContent:"center",borderWidth:1,borderStyle:"solid",borderColor:"#333333"},"btn-default":{color:"rgb(51,51,51)"},"btn-primary":{backgroundColor:"rgb(40,96,144)",borderColor:"rgb(40,96,144)"},"btn-success":{backgroundColor:"rgb(92,184,92)",borderColor:"rgb(76,174,76)"},"btn-info":{backgroundColor:"rgb(91,192,222)",borderColor:"rgb(70,184,218)"},"btn-warning":{backgroundColor:"rgb(240,173,78)",borderColor:"rgb(238,162,54)"},"btn-danger":{backgroundColor:"rgb(217,83,79)",borderColor:"rgb(212,63,58)"},"btn-link":{borderColor:"rgba(0,0,0,0)",borderRadius:0},"btn-txt-default":{color:"rgb(51,51,51)"},"btn-txt-primary":{color:"rgb(255,255,255)"},"btn-txt-success":{color:"rgb(255,255,255)"},"btn-txt-info":{color:"rgb(255,255,255)"},"btn-txt-warning":{color:"rgb(255,255,255)"},"btn-txt-danger":{color:"rgb(255,255,255)"},"btn-txt-link":{color:"rgb(51,122,183)"},"btn-sz-large":{width:300,height:100,paddingTop:25,paddingBottom:25,paddingLeft:40,paddingRight:40,borderRadius:15},"btn-sz-middle":{width:240,height:80,paddingTop:15,paddingBottom:15,paddingLeft:30,paddingRight:30,borderRadius:10},"btn-sz-small":{width:170,height:60,paddingTop:12,paddingBottom:12,paddingLeft:25,paddingRight:25,borderRadius:7},"btn-txt-sz-large":{fontSize:45},"btn-txt-sz-middle":{fontSize:35},"btn-txt-sz-small":{fontSize:30}}}});