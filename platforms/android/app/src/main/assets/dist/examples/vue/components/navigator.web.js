// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=178)}({0:function(t,e){t.exports=function(t,e,n,r){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var l="function"==typeof o?o.options:o;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),n&&(l._scopeId=n),r){var d=l.computed||(l.computed={});Object.keys(r).forEach(function(t){var e=r[t];d[t]=function(){return e}})}return{esModule:a,exports:o,options:l}}},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},10:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.btn[data-v-c49c3020] {\n  margin-bottom: 0;\n  align-items: center;\n  justify-content: center;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #333;\n\n  /*white-space: nowrap;*/\n  /*vertical-align: middle;*/\n  /*touch-action: manipulation;*/\n  /*cursor: pointer;*/\n  /*-webkit-user-select: none;*/\n  /*background-image: none;*/\n  /*border-image-source: initial;*/\n  /*border-image-slice: initial;*/\n  /*border-image-width: initial;*/\n  /*border-image-outset: initial;*/\n  /*border-image-repeat: initial;*/\n}\n.btn-txt[data-v-c49c3020] {\n}\n\n/**TYPE**/\n.btn-default[data-v-c49c3020] {\n  color: rgb(51, 51, 51);\n}\n.btn-primary[data-v-c49c3020] {\n  background-color: rgb(40, 96, 144);\n  border-color: rgb(40, 96, 144);\n}\n.btn-success[data-v-c49c3020] {\n  background-color: rgb(92, 184, 92);\n  border-color: rgb(76, 174, 76);\n}\n.btn-info[data-v-c49c3020] {\n  background-color: rgb(91, 192, 222);\n  border-color: rgb(70, 184, 218);\n}\n.btn-warning[data-v-c49c3020] {\n  background-color: rgb(240, 173, 78);\n  border-color: rgb(238, 162, 54);\n}\n.btn-danger[data-v-c49c3020] {\n  background-color: rgb(217, 83, 79);\n  border-color: rgb(212, 63, 58);\n}\n.btn-link[data-v-c49c3020] {\n  border-color: transparent;\n  border-radius: 0;\n}\n.btn-txt-default[data-v-c49c3020] {\n  color: rgb(51, 51, 51);\n}\n.btn-txt-primary[data-v-c49c3020] {\n  color: rgb(255, 255, 255);\n}\n.btn-txt-success[data-v-c49c3020] {\n  color: rgb(255, 255, 255);\n}\n.btn-txt-info[data-v-c49c3020] {\n  color: rgb(255, 255, 255);\n}\n.btn-txt-warning[data-v-c49c3020] {\n  color: rgb(255, 255, 255);\n}\n.btn-txt-danger[data-v-c49c3020] {\n  color: rgb(255, 255, 255);\n}\n.btn-txt-link[data-v-c49c3020] {\n  color: rgb(51, 122, 183);\n  /*font-weight: 400;*/\n}\n\n/**SIZE**/\n.btn-sz-large[data-v-c49c3020] {\n  width: 300px;\n  height: 100px;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  padding-left: 40px;\n  padding-right: 40px;\n  /*line-height: 1.33333;*/\n  border-radius: 15px;\n}\n.btn-sz-middle[data-v-c49c3020] {\n  width: 240px;\n  height: 80px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 30px;\n  padding-right: 30px;\n  /*line-height: 1.42857;*/\n  border-radius: 10px;\n}\n.btn-sz-small[data-v-c49c3020] {\n  width: 170px;\n  height: 60px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 25px;\n  padding-right: 25px;\n  /*line-height: 1.5;*/\n  border-radius: 7px;\n}\n.btn-txt-sz-large[data-v-c49c3020] {\n  font-size: 45px;\n}\n.btn-txt-sz-middle[data-v-c49c3020] {\n  font-size: 35px;\n}\n.btn-txt-sz-small[data-v-c49c3020] {\n  font-size: 30px;\n}\n\n/*DISABLED*/\n.disabled[data-v-c49c3020] {\n}\n\n",""])},101:function(t,e,n){var r=weex.requireModule("navigator"),a=n(25).getBaseURL;t.exports={data:function(){return{navBarHeight:88,title:"Navigator",dir:"examples",baseURL:"",subPath:"Web"===weex.config.env.platform?"vue-web/":""}},components:{panel:n(4),navpage:n(296),button:n(11)},created:function(){this.$getConfig(function(t){var e=t.env;if("iOS"==e.platform){var n=e.scale,r=e.deviceWidth/n;this.navBarHeight=48e3/r}}.bind(this)),this.baseURL=a(this)},methods:{naviBarLeftItemClick:function(t){modal.toast({message:"naviBarLeftItemClick",duration:2})},naviBarRightItemClick:function(t){modal.toast({message:"naviBarRightItemClick",duration:2})},push:function(){var t={url:this.baseURL+this.subPath+"vue/components/navigator.js?test=1",animated:"true"};r.push(t,function(){})},pop:function(){var t={url:this.baseURL+this.subPath+"vue/components/navigator.js?test=1",animated:"true"};r.pop(t,function(){})}}}},11:function(t,e,n){n(13);var r=n(0)(n(9),n(12),"data-v-c49c3020",null);r.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\button.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},118:function(t,e){t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick")},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick")}}}},119:function(t,e,n){t.exports={components:{navbar:n(295)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},12:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["btn","btn-"+t.type,"btn-sz-"+t.size]},[n("text",{class:["btn-txt","btn-txt-"+t.type,"btn-txt-sz-"+t.size]},[t._v(t._s(t.value))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},13:function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("7c6f472a",r,!1)},178:function(t,e,n){var r=n(45);r.el="#root",new Vue(r)},2:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=c[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));c[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(g)return b;r.parentNode.removeChild(r)}if(v){var o=f++;r=u||(u=a()),e=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),e=l.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function l(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(3),c={},p=d&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,g=!1,b=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){g=n;var a=s(t,e);return r(a),function(e){for(var n=[],o=0;o<a.length;o++){var i=a[o],l=c[i.id];l.refs--,n.push(l)}e?(a=s(t,e),r(a)):a=[];for(var o=0;o<n.length;o++){var l=n[o];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete c[l.id]}}}};var h=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},25:function(t,e){e.getBaseURL=function(t){var e,n=weex.config.bundleUrl,r=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,a=n.indexOf("file:///")>=0&&n.indexOf("WeexDemo.app")>0;if(r)e="file://assets/";else if(a)e=n.substring(0,n.lastIndexOf("/")+1);else{var o="localhost:12580",i=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);i&&i.length>=2&&(o=i[1]),e="http://"+o+"/"+t.dir+"/build/"}var l="./vue.html?page=./"+t.dir+"/build/",d=e;return"object"==typeof window&&(d=l),d}},269:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.container[data-v-7bb13dce] {\n  flex-direction: row; \n  position: fixed; \n  top: 0; \n  left: 0; \n  right: 0; \n  width: 750;\n}\n.right-text[data-v-7bb13dce] {\n  position: absolute; \n  bottom: 28; \n  right: 32; \n  text-align: right;\n  font-size: 32; \n  font-family: 'Open Sans', sans-serif;\n}\n.left-text[data-v-7bb13dce] {\n  position: absolute; \n  bottom: 28; \n  left :32; \n  text-align :left;  \n  font-size: 32; \n  font-family: 'Open Sans', sans-serif;\n}\n.center-text[data-v-7bb13dce] {\n  position: absolute; \n  bottom: 25; \n  left: 172; \n  right: 172;\n  text-align: center; \n  font-size: 36; \n  font-weight: bold;\n}\n.left-image[data-v-7bb13dce] {\n  position: absolute; \n  bottom: 20; \n  left: 28; \n  width: 50; \n  height: 50;\n}\n.right-image[data-v-7bb13dce] {\n  position: absolute; \n  bottom: 20; \n  right: 28; \n  width: 50; \n  height: 50;\n}\n",""])},281:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.wrapper[data-v-ce300d38] {\n  position: absolute; \n  top: 0; \n  left: 0; \n  right: 0; \n  bottom: 0; \n  width: 750;\n}\n",""])},295:function(t,e,n){n(433);var r=n(0)(n(118),n(362),"data-v-7bb13dce",null);r.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\navbar.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},296:function(t,e,n){n(445);var r=n(0)(n(119),n(383),"data-v-ce300d38",null);r.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\navpage.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navpage.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},3:function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=o[0],l=o[1],d=o[2],s=o[3],c={id:t+":"+a,css:l,media:d,sourceMap:s};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}},362:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():n("text",{staticClass:"right-text",style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t._v(" "),t.rightItemSrc?n("image",{staticClass:"right-image",attrs:{naviItemPosition:"right",src:t.rightItemSrc},on:{click:t.onclickrightitem}}):t._e(),t._v(" "),t.leftItemSrc?t._e():n("text",{staticClass:"left-text",style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t._v(" "),t.leftItemSrc?n("image",{staticClass:"left-image",attrs:{naviItemPosition:"left",src:t.leftItemSrc},on:{click:t.onclickleftitem}}):t._e(),t._v(" "),n("text",{staticClass:"center-text",style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},367:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("navpage",{attrs:{dataRole:"none",height:t.navBarHeight,title:t.title,backgroundColor:"#ff5898",titleColor:"white",leftItemTitle:"More",leftItemColor:"white",rightItemSrc:"http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"},on:{naviBarLeftItemClick:t.naviBarLeftItemClick,naviBarRightItemClick:t.naviBarRightItemClick}},[n("panel",{attrs:{title:"push a new page"}},[n("button",{attrs:{type:"primary",size:"small",value:"push"},nativeOn:{click:function(e){t.push(e)}}})]),t._v(" "),n("panel",{attrs:{title:"pop to the last page"}},[n("button",{attrs:{type:"success",size:"small",value:"pop"},nativeOn:{click:function(e){t.pop(e)}}})])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},383:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("navbar",{attrs:{dataRole:t.dataRole,height:t.height,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),t._v(" "),n("div",{staticClass:"wrapper",style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},4:function(t,e,n){n(8);var r=n(0)(n(5),n(7),"data-v-48dfa6b6",null);r.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\panel.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] panel.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},433:function(t,e,n){var r=n(269);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("4fbf7e75",r,!1)},445:function(t,e,n){var r=n(281);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("b1fa71f0",r,!1)},45:function(t,e,n){var r=n(0)(n(101),n(367),null,null);r.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\components\\navigator.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] navigator.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},5:function(t,e){t.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},6:function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.panel[data-v-48dfa6b6] {\n  margin-bottom: 20px;\n  background-color: #fff;\n  /*border: 1px solid transparent;*/\n  /*border-radius: 10px;*/\n  /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  border-color: #dddddd;\n  border-width: 1px;\n}\n.panel-default[data-v-48dfa6b6] {\n}\n.panel-primary[data-v-48dfa6b6] {\n  border-color: rgb(40, 96, 144);\n}\n.panel-success[data-v-48dfa6b6] {\n  border-color: rgb(76, 174, 76);\n}\n.panel-info[data-v-48dfa6b6] {\n  border-color: rgb(70, 184, 218);\n}\n.panel-warning[data-v-48dfa6b6] {\n  border-color: rgb(238, 162, 54);\n}\n.panel-danger[data-v-48dfa6b6] {\n  border-color: rgb(212, 63, 58);\n}\n.panel-header[data-v-48dfa6b6] {\n  background-color: #f5f5f5;\n  font-size: 40px;\n  /*padding-left: 12px;*/\n  /*padding-right: 12px;*/\n  /*padding-top: 20px;*/\n  /*padding-bottom: 20px;*/\n  color: #333;\n}\n.panel-header-default[data-v-48dfa6b6] {\n}\n.panel-header-primary[data-v-48dfa6b6] {\n  background-color: rgb(40, 96, 144);\n  color: #ffffff;\n}\n.panel-header-success[data-v-48dfa6b6] {\n  background-color: rgb(92, 184, 92);\n  color: #ffffff;\n}\n.panel-header-info[data-v-48dfa6b6] {\n  background-color: rgb(91, 192, 222);\n  color: #ffffff;\n}\n.panel-header-warning[data-v-48dfa6b6] {\n  background-color: rgb(240, 173, 78);\n  color: #ffffff;\n}\n.panel-header-danger[data-v-48dfa6b6] {\n  background-color: rgb(217, 83, 79);\n  color: #ffffff;\n}\n.panel-body[data-v-48dfa6b6] {\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.panel-body-default[data-v-48dfa6b6] {\n}\n.panel-body-primary[data-v-48dfa6b6] {\n}\n.panel-body-success[data-v-48dfa6b6] {\n}\n.panel-body-info[data-v-48dfa6b6] {\n}\n.panel-body-warning[data-v-48dfa6b6] {\n}\n.panel-body-danger[data-v-48dfa6b6] {\n}\n",""])},7:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["panel","panel-"+t.type],style:{borderWidth:t.border}},[n("text",{class:["panel-header","panel-header-"+t.type],style:{paddingTop:t.paddingHead,paddingBottom:t.paddingHead,paddingLeft:1.5*t.paddingHead,paddingRight:1.5*t.paddingHead}},[t._v(t._s(t.title))]),t._v(" "),n("div",{class:["panel-body","panel-body-"+t.type],style:{paddingTop:t.paddingBody,paddingBottom:t.paddingBody,paddingLeft:1.5*t.paddingBody,paddingRight:1.5*t.paddingBody}},[t._t("default")],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},8:function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("2b655c6d",r,!1)},9:function(t,e){t.exports={props:{type:{default:"default"},size:{default:"large"},value:{default:""}}}}});