// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=199)}({0:function(e,t){e.exports=function(e,t,n,r){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:o,exports:s,options:a}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},133:function(e,t){e.exports={data:{},methods:{}}},199:function(e,t,n){var r=n(66);r.el="#root",new Vue(r)},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(v){var s=f++;r=p||(p=o()),t=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,m=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var o=l(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var i=o[s],a=u[i.id];a.refs--,n.push(a)}t?(o=l(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},242:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.wrapper {\n  align-items: center; \n  opacity: 0.8;\n}\n.itemWrapper {\n  flex:1;\n  border-top-right-radius: 80;\n  border-bottom-right-radius: 80;\n  border-top-width: 10;\n  border-top-color: red;\n  border-style: dashed;\n  align-items: center;\n  background-color: white;\n}\n.nameWrapper {\n  background-color:rgba(255,0,0,0.5);\n  border-radius: 30;\n  overflow: visible;\n  border-color: black;\n  border-width: 10;\n}\n.item {\n  margin-top: 120px; \n  background-color: #CCCCCC;\n  align-items: center;\n}\n.itemName {\n  font-size:28;\n  color:#333333;\n  line-height:42;\n  text-align:left;\n  margin-top: 24;\n}\n.itemPhoto {\n  margin-top: 18;\n  width: 220;\n  height: 220;\n  margin-bottom: 18;\n  border-radius: 30;\n  overflow: hidden;\n  background-color: blue;\n}\n.itemDesc {\n  font-size:24;\n  margin:12;\n  color:#999999;\n  line-height:36;\n  text-align:left;\n}\n",""])},3:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a=s[1],c=s[2],l=s[3],u={id:e+":"+o,css:a,media:c,sourceMap:l};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}},330:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",on:{click:e.update}},[n("div",{staticClass:"item",attrs:{compositing:"true"}},[n("div",{staticClass:"itemWrapper"},[n("div",{staticClass:"nameWrapper"},[n("text",{staticClass:"itemName"},[e._v("Thomas Carlyle")])]),e._v(" "),n("image",{staticClass:"itemPhoto",attrs:{src:"https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg"}}),e._v(" "),n("div",{staticClass:"descWrapper"},[n("text",{staticClass:"itemDesc"},[e._v("Genius only means hard-working all one\\'s life")])])])]),e._v(" "),n("div",{staticClass:"item",attrs:{compositing:"false"}},[n("div",{staticClass:"itemWrapper"},[n("div",{staticClass:"nameWrapper"},[n("text",{staticClass:"itemName"},[e._v("Thomas Carlyle")])]),e._v(" "),n("image",{staticClass:"itemPhoto",attrs:{src:"https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg"}}),e._v(" "),n("div",{staticClass:"descWrapper"},[n("text",{staticClass:"itemDesc"},[e._v("Genius only means hard-working all one\\'s life")])])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},406:function(e,t,n){var r=n(242);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("79a1753f",r,!1)},66:function(e,t,n){n(406);var r=n(0)(n(133),n(330),null,null);r.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\showcase\\compositing.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] compositing.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports}});