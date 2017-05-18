// { "framework": "Vue"} 

!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=184)}({0:function(e,n){e.exports=function(e,n,t,r){var a,o=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(a=e,o=e.default);var s="function"==typeof o?o.options:o;if(n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns),t&&(s._scopeId=t),r){var i=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var n=r[e];i[e]=function(){return n}})}return{esModule:a,exports:o,options:s}}},1:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<n.length;a++){var d=n[a];"number"==typeof d[0]&&r[d[0]]||(t&&!d[2]?d[2]=t:t&&(d[2]="("+d[2]+") and ("+t+")"),e.push(d))}},e}},107:function(e,n,t){weex.requireModule("modal");e.exports={data:function(){return{txtInput:"",txtChange:"",returnType:"",msg:""}},components:{panel:t(4)},methods:{onchange:function(e){this.txtChange=e.value},oninput:function(e){this.txtInput=e.value},onreturn:function(e){this.returnType=e.returnKeyType,this.msg='You are "'+this.returnType+'" '+e.value}}}},184:function(e,n,t){var r=t(51);r.el="#root",new Vue(r)},2:function(e,n,t){function r(e){for(var n=0;n<e.length;n++){var t=e[n],r=u[t.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](t.parts[a]);for(;a<t.parts.length;a++)r.parts.push(o(t.parts[a]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var d=[],a=0;a<t.parts.length;a++)d.push(o(t.parts[a]));u[t.id]={id:t.id,refs:1,parts:d}}}}function a(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return g;r.parentNode.removeChild(r)}if(b){var o=c++;r=l||(l=a()),n=d.bind(null,r,o,!1),t=d.bind(null,r,o,!0)}else r=a(),n=s.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function d(e,n,t,r){var a=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(n,a);else{var o=document.createTextNode(a),d=e.childNodes;d[n]&&e.removeChild(d[n]),d.length?e.insertBefore(o,d[n]):e.appendChild(o)}}function s(e,n){var t=n.css,r=n.media,a=n.sourceMap;if(r&&e.setAttribute("media",r),a&&(t+="\n/*# sourceURL="+a.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=t(3),u={},f=i&&(document.head||document.getElementsByTagName("head")[0]),l=null,c=0,v=!1,g=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){v=t;var a=p(e,n);return r(a),function(n){for(var t=[],o=0;o<a.length;o++){var d=a[o],s=u[d.id];s.refs--,t.push(s)}n?(a=p(e,n),r(a)):a=[];for(var o=0;o<t.length;o++){var s=t[o];if(0===s.refs){for(var i=0;i<s.parts.length;i++)s.parts[i]();delete u[s.id]}}}};var h=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},272:function(e,n,t){n=e.exports=t(1)(),n.push([e.i,"\n.textarea[data-v-7e9c21a8] {\n  font-size: 30px;\n  height: 280px;\n  width: 400px;\n  border-width: 2px;\n  border-color: #ccc;\n}\n",""])},3:function(e,n){e.exports=function(e,n){for(var t=[],r={},a=0;a<n.length;a++){var o=n[a],d=o[0],s=o[1],i=o[2],p=o[3],u={id:e+":"+a,css:s,media:i,sourceMap:p};r[d]?r[d].parts.push(u):t.push(r[d]={id:d,parts:[u]})}return t}},366:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("scroller",[t("panel",{attrs:{title:"textarea",type:"primary"}},[t("textarea",{staticClass:"textarea",attrs:{autofocus:"true","return-key-type":"done"},on:{return:e.onreturn,change:e.onchange,input:e.oninput}}),e._v(" "),t("text",[e._v("oninput: "+e._s(e.txtInput))]),e._v(" "),t("text",[e._v("onchange: "+e._s(e.txtChange))]),e._v(" "),t("text",[e._v("enter key type: "+e._s(e.returnType))]),e._v(" "),t("text",[e._v("action: "+e._s(e.msg))])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},4:function(e,n,t){t(8);var r=t(0)(t(5),t(7),"data-v-48dfa6b6",null);r.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\panel.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] panel.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},436:function(e,n,t){var r=t(272);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(2)("e8d1eb2c",r,!1)},5:function(e,n){e.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},51:function(e,n,t){t(436);var r=t(0)(t(107),t(366),"data-v-7e9c21a8",null);r.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\components\\textarea.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] textarea.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},6:function(e,n,t){n=e.exports=t(1)(),n.push([e.i,"\n.panel[data-v-48dfa6b6] {\n  margin-bottom: 20px;\n  background-color: #fff;\n  /*border: 1px solid transparent;*/\n  /*border-radius: 10px;*/\n  /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  border-color: #dddddd;\n  border-width: 1px;\n}\n.panel-default[data-v-48dfa6b6] {\n}\n.panel-primary[data-v-48dfa6b6] {\n  border-color: rgb(40, 96, 144);\n}\n.panel-success[data-v-48dfa6b6] {\n  border-color: rgb(76, 174, 76);\n}\n.panel-info[data-v-48dfa6b6] {\n  border-color: rgb(70, 184, 218);\n}\n.panel-warning[data-v-48dfa6b6] {\n  border-color: rgb(238, 162, 54);\n}\n.panel-danger[data-v-48dfa6b6] {\n  border-color: rgb(212, 63, 58);\n}\n.panel-header[data-v-48dfa6b6] {\n  background-color: #f5f5f5;\n  font-size: 40px;\n  /*padding-left: 12px;*/\n  /*padding-right: 12px;*/\n  /*padding-top: 20px;*/\n  /*padding-bottom: 20px;*/\n  color: #333;\n}\n.panel-header-default[data-v-48dfa6b6] {\n}\n.panel-header-primary[data-v-48dfa6b6] {\n  background-color: rgb(40, 96, 144);\n  color: #ffffff;\n}\n.panel-header-success[data-v-48dfa6b6] {\n  background-color: rgb(92, 184, 92);\n  color: #ffffff;\n}\n.panel-header-info[data-v-48dfa6b6] {\n  background-color: rgb(91, 192, 222);\n  color: #ffffff;\n}\n.panel-header-warning[data-v-48dfa6b6] {\n  background-color: rgb(240, 173, 78);\n  color: #ffffff;\n}\n.panel-header-danger[data-v-48dfa6b6] {\n  background-color: rgb(217, 83, 79);\n  color: #ffffff;\n}\n.panel-body[data-v-48dfa6b6] {\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.panel-body-default[data-v-48dfa6b6] {\n}\n.panel-body-primary[data-v-48dfa6b6] {\n}\n.panel-body-success[data-v-48dfa6b6] {\n}\n.panel-body-info[data-v-48dfa6b6] {\n}\n.panel-body-warning[data-v-48dfa6b6] {\n}\n.panel-body-danger[data-v-48dfa6b6] {\n}\n",""])},7:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:["panel","panel-"+e.type],style:{borderWidth:e.border}},[t("text",{class:["panel-header","panel-header-"+e.type],style:{paddingTop:e.paddingHead,paddingBottom:e.paddingHead,paddingLeft:1.5*e.paddingHead,paddingRight:1.5*e.paddingHead}},[e._v(e._s(e.title))]),e._v(" "),t("div",{class:["panel-body","panel-body-"+e.type],style:{paddingTop:e.paddingBody,paddingBottom:e.paddingBody,paddingLeft:1.5*e.paddingBody,paddingRight:1.5*e.paddingBody}},[e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},8:function(e,n,t){var r=t(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(2)("2b655c6d",r,!1)}});