// { "framework": "Vue"} 

!function(t){function e(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,a){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=204)}({0:function(t,e){t.exports=function(t,e,r,a){var n,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(n=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),a){var l=s.computed||(s.computed={});Object.keys(a).forEach(function(t){var e=a[t];l[t]=function(){return e}})}return{esModule:n,exports:i,options:s}}},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(a[i]=!0)}for(n=0;n<e.length;n++){var o=e[n];"number"==typeof o[0]&&a[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),t.push(o))}},t}},14:function(t,e){t.exports={props:{type:{default:"success"},value:{default:""}}}},149:function(t,e,r){t.exports={components:{panel:r(4),styleBox:r(26),styleFlex:r(27),styleItem:r(19)}}},15:function(t,e,r){e=t.exports=r(1)(),e.push([t.i,"\n.tip[data-v-3d530f66] {\n  padding-left: 36px;\n  padding-right: 36px;\n  padding-top: 36px;\n  padding-bottom: 36px;\n  border-radius: 10px;\n}\n.tip-txt[data-v-3d530f66]{\n  font-size: 28px;\n}\n.tip-success[data-v-3d530f66] {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.tip-txt-success[data-v-3d530f66] {\n  color: #3c763d;\n}\n.tip-info[data-v-3d530f66] {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.tip-txt-info[data-v-3d530f66] {\n  color: #31708f;\n}\n.tip-warning[data-v-3d530f66] {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.tip-txt-warning[data-v-3d530f66] {\n  color: #8a6d3b;\n}\n.tip-danger[data-v-3d530f66] {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.tip-txt-danger[data-v-3d530f66] {\n  color: #a94442;\n}\n",""])},16:function(t,e,r){r(18);var a=r(0)(r(14),r(17),"data-v-3d530f66",null);a.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\tip.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] tip.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},17:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["tip","tip-"+t.type]},[r("text",{class:["tip-txt","tip-txt-"+t.type]},[t._v(t._s(t.value))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},18:function(t,e,r){var a=r(15);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(2)("46fa20e8",a,!1)},19:function(t,e,r){r(23);var a=r(0)(r(20),r(22),"data-v-46d426f8",null);a.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\style\\style-item.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] style-item.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},2:function(t,e,r){function a(t){for(var e=0;e<t.length;e++){var r=t[e],a=p[r.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](r.parts[n]);for(;n<r.parts.length;n++)a.parts.push(i(r.parts[n]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{for(var o=[],n=0;n<r.parts.length;n++)o.push(i(r.parts[n]));p[r.id]={id:r.id,refs:1,parts:o}}}}function n(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function i(t){var e,r,a=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(a){if(y)return v;a.parentNode.removeChild(a)}if(g){var i=f++;a=u||(u=n()),e=o.bind(null,a,i,!1),r=o.bind(null,a,i,!0)}else a=n(),e=s.bind(null,a),r=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else r()}}function o(t,e,r,a){var n=r?"":a.css;if(t.styleSheet)t.styleSheet.cssText=m(e,n);else{var i=document.createTextNode(n),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function s(t,e){var r=e.css,a=e.media,n=e.sourceMap;if(a&&t.setAttribute("media",a),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=r(3),p={},c=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,y=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){y=r;var n=d(t,e);return a(n),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i],s=p[o.id];s.refs--,r.push(s)}e?(n=d(t,e),a(n)):n=[];for(var i=0;i<r.length;i++){var s=r[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete p[s.id]}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},20:function(t,e){t.exports={props:{value:{default:""},type:{default:"0"}},computed:{bgColor:function(){return"1"==this.type?"#7BA3A8":"#BEAD92"}}}},204:function(t,e,r){var a=r(71);a.el="#root",new Vue(a)},21:function(t,e,r){e=t.exports=r(1)(),e.push([t.i,"\n.item[data-v-46d426f8] {\n  margin-right: 10px;\n  /*margin-bottom: 10px;*/\n  width: 160px;\n  height: 75px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.txt[data-v-46d426f8] {\n  color: #eee;\n}\n",""])},22:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{staticClass:"item txt",style:{backgroundColor:t.bgColor},attrs:{value:t.value}})},staticRenderFns:[]},t.exports.render._withStripped=!0},23:function(t,e,r){var a=r(21);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(2)("b76a9c0a",a,!1)},256:function(t,e,r){e=t.exports=r(1)(),e.push([t.i,"\n.bg-item[data-v-4cd886e6] {\n  width: 690px;\n  margin-bottom: 10px;\n}\n",""])},26:function(t,e,r){r(36);var a=r(0)(r(28),r(34),"data-v-0918e36a",null);a.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\style\\style-box.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] style-box.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},27:function(t,e,r){r(35);var a=r(0)(r(29),r(33),"data-v-0348e32c",null);a.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\style\\style-flex.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] style-flex.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},28:function(t,e,r){t.exports={components:{panel:r(4),tip:r(16),styleItem:r(19)}}},29:function(t,e,r){t.exports={components:{panel:r(4),styleItem:r(19)}}},3:function(t,e){t.exports=function(t,e){for(var r=[],a={},n=0;n<e.length;n++){var i=e[n],o=i[0],s=i[1],l=i[2],d=i[3],p={id:t+":"+n,css:s,media:l,sourceMap:d};a[o]?a[o].parts.push(p):r.push(a[o]={id:o,parts:[p]})}return r}},30:function(t,e,r){e=t.exports=r(1)(),e.push([t.i,"\n.row[data-v-0348e32c] {\n  flex-direction: row;\n  margin-bottom: 10px;\n}\n.row-align[data-v-0348e32c] {\n  height: 160px;\n  border-width: 3px;\n  border-color: #ddd;\n  border-style: solid;\n}\n",""])},31:function(t,e,r){e=t.exports=r(1)(),e.push([t.i,"\n.box[data-v-0918e36a] {\n  background-color: #f5f5f5;\n  width: 260px;\n  height: 260px;\n  padding-left: 40px;\n  padding-top: 40px;\n  padding-right: 40px;\n  padding-bottom: 40px;\n  margin-left: 40px;\n  margin-top: 40px;\n  margin-right: 40px;\n  margin-bottom: 40px;\n  border-width: 40px;\n  border-color: #333;\n  border-style: solid;\n}\n",""])},33:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("panel",{attrs:{title:"flex-direction",type:"primary"}},[r("div",{staticClass:"row",staticStyle:{"flex-direction":"row"}},[r("style-item",{staticStyle:{"margin-right":"0"},attrs:{value:"row"}}),t._v(" "),r("style-item",{attrs:{type:"1"}})],1),t._v(" "),r("div",{staticClass:"row",staticStyle:{"flex-direction":"column"}},[r("style-item",{attrs:{value:"column"}}),t._v(" "),r("style-item",{attrs:{type:"1"}})],1)]),t._v(" "),r("panel",{attrs:{title:"justify-content",type:"primary"}},[r("div",{staticClass:"row",staticStyle:{"justify-content":"flex-start"}},[r("style-item",{staticStyle:{"margin-right":"0"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{type:"1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"}})],1),t._v(" "),r("div",{staticClass:"row",staticStyle:{"justify-content":"flex-end"}},[r("style-item",{staticStyle:{"margin-right":"0"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{type:"1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"}})],1),t._v(" "),r("div",{staticClass:"row",staticStyle:{"justify-content":"center"}},[r("style-item",{staticStyle:{"margin-right":"0"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{type:"1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"}})],1),t._v(" "),r("div",{staticClass:"row",staticStyle:{"justify-content":"space-between"}},[r("style-item",{staticStyle:{"margin-right":"0"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{type:"1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"}})],1)]),t._v(" "),r("panel",{attrs:{title:"align-items",type:"primary"}},[r("div",{staticClass:"row row-align",staticStyle:{"align-items":"flex-start"}},[r("style-item",{staticStyle:{"margin-right":"0"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{type:"1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"}})],1),t._v(" "),r("div",{staticClass:"row row-align",staticStyle:{"align-items":"flex-end"}},[r("style-item",{staticStyle:{"margin-right":"0"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{type:"1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"}})],1),t._v(" "),r("div",{staticClass:"row row-align",staticStyle:{"align-items":"center"}},[r("style-item",{staticStyle:{"margin-right":"0"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{type:"1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"}})],1),t._v(" "),r("div",{staticClass:"row row-align",staticStyle:{"align-items":"stretch"}},[r("style-item",{staticStyle:{"margin-right":"0"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{type:"1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"}})],1)]),t._v(" "),r("panel",{attrs:{title:"flex",type:"primary"}},[r("div",{staticClass:"row",staticStyle:{"align-items":"flex-start"}},[r("style-item",{staticStyle:{"margin-right":"0"},attrs:{value:"no flex"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{value:"no flex",type:"1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0"},attrs:{value:"no flex"}})],1),t._v(" "),r("div",{staticClass:"row",staticStyle:{"align-items":"flex-start"}},[r("style-item",{staticStyle:{"margin-right":"0"},attrs:{value:"no flex"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0",flex:"1"},attrs:{type:"1",value:"flex:1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0",flex:"2"},attrs:{value:"flex:2"}})],1),t._v(" "),r("div",{staticClass:"row",staticStyle:{"align-items":"flex-start"}},[r("style-item",{staticStyle:{"margin-right":"0",flex:"1"},attrs:{value:"flex:1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0",flex:"1"},attrs:{type:"1",value:"flex:1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0",flex:"1"},attrs:{value:"flex:1"}})],1),t._v(" "),r("div",{staticClass:"row",staticStyle:{"align-items":"flex-start"}},[r("style-item",{staticStyle:{"margin-right":"0",flex:"1"},attrs:{value:"flex:1"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0",flex:"2"},attrs:{type:"1",value:"flex:2"}}),t._v(" "),r("style-item",{staticStyle:{"margin-right":"0",flex:"3"},attrs:{value:"flex:3"}})],1)]),t._v(" "),r("panel",{attrs:{title:"flex-wrap",type:"primary"}},[r("div",{staticClass:"row",staticStyle:{"flex-wrap":"wrap","background-color":"grey",padding:"10"}},[r("style-item",{attrs:{value:"1:wrap"}}),t._v(" "),r("style-item",{attrs:{value:"2:wrap"}}),t._v(" "),r("style-item",{attrs:{value:"3:wrap"}}),t._v(" "),r("style-item",{attrs:{value:"4:wrap"}}),t._v(" "),r("style-item",{attrs:{value:"5:wrap"}}),t._v(" "),r("style-item",{attrs:{value:"6:wrap"}})],1),t._v(" "),r("div",{staticClass:"row",staticStyle:{"flex-wrap":"nowrap","background-color":"grey",padding:"10"}},[r("style-item",{attrs:{value:"1:nowrap"}}),t._v(" "),r("style-item",{attrs:{value:"2:nowrap"}}),t._v(" "),r("style-item",{attrs:{value:"3:nowrap"}}),t._v(" "),r("style-item",{attrs:{value:"4:nowrap"}}),t._v(" "),r("style-item",{attrs:{value:"5:nowrap"}}),t._v(" "),r("style-item",{attrs:{value:"6:nowrap"}})],1)])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},34:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("panel",{attrs:{title:"Box Model","padding-body":"0",type:"primary"}},[r("text",{staticClass:"box"},[t._v("Box")])]),t._v(" "),r("panel",{attrs:{title:"border",type:"primary"}},[r("panel",{attrs:{title:"border-width",type:""}},[r("div",{staticStyle:{"flex-direction":"row"}},[r("style-item",{staticStyle:{"border-style":"solid","border-width":"2px","border-color":"#333"},attrs:{value:""}}),t._v(" "),r("style-item",{staticStyle:{"border-style":"solid","border-width":"10px","border-color":"#333"},attrs:{value:""}}),t._v(" "),r("style-item",{staticStyle:{"border-style":"solid","border-left-width":"4px","border-color":"#333"},attrs:{value:""}}),t._v(" "),r("style-item",{staticStyle:{"border-style":"solid","border-bottom-width":"4px","border-color":"#333"},attrs:{value:""}})],1)]),t._v(" "),r("panel",{attrs:{title:"border-color",type:""}},[r("div",{staticStyle:{"flex-direction":"row"}},[r("style-item",{staticStyle:{"border-style":"solid","border-width":"4px","border-color":"#333"},attrs:{value:""}}),t._v(" "),r("style-item",{staticStyle:{"border-style":"solid","border-width":"4px","border-color":"#ddd"},attrs:{value:""}}),t._v(" "),r("style-item",{staticStyle:{"border-style":"solid","border-width":"4px","border-color":"red"},attrs:{value:""}})],1)]),t._v(" "),r("panel",{attrs:{title:"border-style",type:""}},[r("tip",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"warning",value:"just support four edges"}}),t._v(" "),r("div",{staticStyle:{"flex-direction":"row"}},[r("style-item",{staticStyle:{"border-style":"solid","border-width":"4px","border-color":"#333"},attrs:{value:""}}),t._v(" "),r("style-item",{staticStyle:{"border-style":"dashed","border-width":"4px","border-color":"#333"},attrs:{value:"",type:""}}),t._v(" "),r("style-item",{staticStyle:{"border-style":"dotted","border-width":"4px","border-color":"#333"},attrs:{value:""}})],1)],1),t._v(" "),r("panel",{attrs:{title:"border-radius",type:""}},[r("div",{staticStyle:{"flex-direction":"row"}},[r("style-item",{staticStyle:{width:"75px","border-radius":"38px"},attrs:{value:""}}),t._v(" "),r("style-item",{staticStyle:{"border-radius":"20px"},attrs:{value:""}}),t._v(" "),r("style-item",{staticStyle:{"border-top-left-radius":"20px","border-top-right-radius":"20px"},attrs:{value:""}}),t._v(" "),r("style-item",{staticStyle:{"border-bottom-left-radius":"20px","border-bottom-right-radius":"20px"},attrs:{value:""}})],1)])],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},345:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroller",{staticStyle:{"overflow-x":"hidden"}},[r("style-box"),t._v(" "),r("style-flex"),t._v(" "),r("panel",{attrs:{title:"opacity",type:"primary"}},[r("div",{staticStyle:{"flex-direction":"row"}},[r("style-item",{staticStyle:{opacity:"1"},attrs:{value:"1"}}),t._v(" "),r("style-item",{staticStyle:{opacity:"0.9"},attrs:{value:"0.9"}}),t._v(" "),r("style-item",{staticStyle:{opacity:"0.5"},attrs:{value:"0.5"}}),t._v(" "),r("style-item",{staticStyle:{opacity:"0.2"},attrs:{value:"0.2"}})],1)]),t._v(" "),r("panel",{attrs:{title:"background-color",type:"primary"}},[r("div",[r("style-item",{staticClass:"bg-item",staticStyle:{"background-color":"#333"},attrs:{value:"#333"}}),t._v(" "),r("style-item",{staticClass:"bg-item",staticStyle:{"background-color":"#333333"},attrs:{value:"#333333"}}),t._v(" "),r("style-item",{staticClass:"bg-item",staticStyle:{"background-color":"rgb(238, 162, 54)"},attrs:{value:"rgb()"}}),t._v(" "),r("style-item",{staticClass:"bg-item",staticStyle:{"background-color":"rgba(238, 162, 54, 0.5)"},attrs:{value:"rgba()"}}),t._v(" "),r("style-item",{staticClass:"bg-item",staticStyle:{"background-color":"red"},attrs:{value:"red"}})],1)])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},35:function(t,e,r){var a=r(30);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(2)("cdf1b3d2",a,!1)},36:function(t,e,r){var a=r(31);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(2)("1fe57fc8",a,!1)},4:function(t,e,r){r(8);var a=r(0)(r(5),r(7),"data-v-48dfa6b6",null);a.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\panel.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] panel.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},420:function(t,e,r){var a=r(256);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(2)("5045b2c2",a,!1)},5:function(t,e){t.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},6:function(t,e,r){e=t.exports=r(1)(),e.push([t.i,"\n.panel[data-v-48dfa6b6] {\n  margin-bottom: 20px;\n  background-color: #fff;\n  /*border: 1px solid transparent;*/\n  /*border-radius: 10px;*/\n  /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  border-color: #dddddd;\n  border-width: 1px;\n}\n.panel-default[data-v-48dfa6b6] {\n}\n.panel-primary[data-v-48dfa6b6] {\n  border-color: rgb(40, 96, 144);\n}\n.panel-success[data-v-48dfa6b6] {\n  border-color: rgb(76, 174, 76);\n}\n.panel-info[data-v-48dfa6b6] {\n  border-color: rgb(70, 184, 218);\n}\n.panel-warning[data-v-48dfa6b6] {\n  border-color: rgb(238, 162, 54);\n}\n.panel-danger[data-v-48dfa6b6] {\n  border-color: rgb(212, 63, 58);\n}\n.panel-header[data-v-48dfa6b6] {\n  background-color: #f5f5f5;\n  font-size: 40px;\n  /*padding-left: 12px;*/\n  /*padding-right: 12px;*/\n  /*padding-top: 20px;*/\n  /*padding-bottom: 20px;*/\n  color: #333;\n}\n.panel-header-default[data-v-48dfa6b6] {\n}\n.panel-header-primary[data-v-48dfa6b6] {\n  background-color: rgb(40, 96, 144);\n  color: #ffffff;\n}\n.panel-header-success[data-v-48dfa6b6] {\n  background-color: rgb(92, 184, 92);\n  color: #ffffff;\n}\n.panel-header-info[data-v-48dfa6b6] {\n  background-color: rgb(91, 192, 222);\n  color: #ffffff;\n}\n.panel-header-warning[data-v-48dfa6b6] {\n  background-color: rgb(240, 173, 78);\n  color: #ffffff;\n}\n.panel-header-danger[data-v-48dfa6b6] {\n  background-color: rgb(217, 83, 79);\n  color: #ffffff;\n}\n.panel-body[data-v-48dfa6b6] {\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.panel-body-default[data-v-48dfa6b6] {\n}\n.panel-body-primary[data-v-48dfa6b6] {\n}\n.panel-body-success[data-v-48dfa6b6] {\n}\n.panel-body-info[data-v-48dfa6b6] {\n}\n.panel-body-warning[data-v-48dfa6b6] {\n}\n.panel-body-danger[data-v-48dfa6b6] {\n}\n",""])},7:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["panel","panel-"+t.type],style:{borderWidth:t.border}},[r("text",{class:["panel-header","panel-header-"+t.type],style:{paddingTop:t.paddingHead,paddingBottom:t.paddingHead,paddingLeft:1.5*t.paddingHead,paddingRight:1.5*t.paddingHead}},[t._v(t._s(t.title))]),t._v(" "),r("div",{class:["panel-body","panel-body-"+t.type],style:{paddingTop:t.paddingBody,paddingBottom:t.paddingBody,paddingLeft:1.5*t.paddingBody,paddingRight:1.5*t.paddingBody}},[t._t("default")],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},71:function(t,e,r){r(420);var a=r(0)(r(149),r(345),"data-v-4cd886e6",null);a.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\style\\index.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},8:function(t,e,r){var a=r(6);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(2)("2b655c6d",a,!1)}});