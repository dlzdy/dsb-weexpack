// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=207)}({0:function(e,t){e.exports=function(e,t,n,r){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var u=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}})}return{esModule:o,exports:s,options:a}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},19:function(e,t,n){n(23);var r=n(0)(n(20),n(22),"data-v-46d426f8",null);r.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\style\\style-item.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] style-item.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var s=l++;r=f||(f=o()),t=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=n(3),d={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,l=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=p(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var i=o[s],a=d[i.id];a.refs--,n.push(a)}t?(o=p(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},20:function(e,t){e.exports={props:{value:{default:""},type:{default:"0"}},computed:{bgColor:function(){return"1"==this.type?"#7BA3A8":"#BEAD92"}}}},207:function(e,t,n){var r=n(19);r.el="#root",new Vue(r)},21:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.item[data-v-46d426f8] {\n  margin-right: 10px;\n  /*margin-bottom: 10px;*/\n  width: 160px;\n  height: 75px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.txt[data-v-46d426f8] {\n  color: #eee;\n}\n",""])},22:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:"item txt",style:{backgroundColor:e.bgColor},attrs:{value:e.value}})},staticRenderFns:[]},e.exports.render._withStripped=!0},23:function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("b76a9c0a",r,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a=s[1],u=s[2],p=s[3],d={id:e+":"+o,css:a,media:u,sourceMap:p};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}}});