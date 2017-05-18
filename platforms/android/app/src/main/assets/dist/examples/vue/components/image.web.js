// { "framework": "Vue"} 

!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=174)}({0:function(e,t){e.exports=function(e,t,n,a){var r,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,o=e.default);var d="function"==typeof o?o.options:o;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),n&&(d._scopeId=n),a){var s=d.computed||(d.computed={});Object.keys(a).forEach(function(e){var t=a[e];s[e]=function(){return t}})}return{esModule:r,exports:o,options:d}}},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},14:function(e,t){e.exports={props:{type:{default:"success"},value:{default:""}}}},15:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.tip[data-v-3d530f66] {\n  padding-left: 36px;\n  padding-right: 36px;\n  padding-top: 36px;\n  padding-bottom: 36px;\n  border-radius: 10px;\n}\n.tip-txt[data-v-3d530f66]{\n  font-size: 28px;\n}\n.tip-success[data-v-3d530f66] {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.tip-txt-success[data-v-3d530f66] {\n  color: #3c763d;\n}\n.tip-info[data-v-3d530f66] {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.tip-txt-info[data-v-3d530f66] {\n  color: #31708f;\n}\n.tip-warning[data-v-3d530f66] {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.tip-txt-warning[data-v-3d530f66] {\n  color: #8a6d3b;\n}\n.tip-danger[data-v-3d530f66] {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.tip-txt-danger[data-v-3d530f66] {\n  color: #a94442;\n}\n",""])},16:function(e,t,n){n(18);var a=n(0)(n(14),n(17),"data-v-3d530f66",null);a.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\tip.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] tip.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},17:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["tip","tip-"+e.type]},[n("text",{class:["tip-txt","tip-txt-"+e.type]},[e._v(e._s(e.value))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},174:function(e,t,n){var a=n(41);a.el="#root",new Vue(a)},18:function(e,t,n){var a=n(15);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("46fa20e8",a,!1)},2:function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=l[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(o(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(o(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,n,a=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(a){if(u)return g;a.parentNode.removeChild(a)}if(h){var o=f++;a=A||(A=r()),t=i.bind(null,a,o,!1),n=i.bind(null,a,o,!0)}else a=r(),t=d.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function i(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function d(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=n(3),l={},c=s&&(document.head||document.getElementsByTagName("head")[0]),A=null,f=0,u=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){u=n;var r=p(e,t);return a(r),function(t){for(var n=[],o=0;o<r.length;o++){var i=r[o],d=l[i.id];d.refs--,n.push(d)}t?(r=p(e,t),a(r)):r=[];for(var o=0;o<n.length;o++){var d=n[o];if(0===d.refs){for(var s=0;s<d.parts.length;s++)d.parts[s]();delete l[d.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},249:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.img[data-v-3f303259] {\n  margin-bottom: 20px;\n}\n",""])},3:function(e,t){e.exports=function(e,t){for(var n=[],a={},r=0;r<t.length;r++){var o=t[r],i=o[0],d=o[1],s=o[2],p=o[3],l={id:e+":"+r,css:d,media:s,sourceMap:p};a[i]?a[i].parts.push(l):n.push(a[i]={id:i,parts:[l]})}return n}},337:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroller",[n("panel",{attrs:{title:"width x height",type:"primary"}},[n("tip",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"warning",value:"Weex screen width is 750"}}),e._v(" "),n("div",{staticStyle:{"flex-direction":"row"}},[n("image",{staticClass:"img",staticStyle:{width:"300px",height:"300px"},attrs:{src:e.img}}),e._v(" "),n("image",{staticClass:"img",staticStyle:{width:"200px",height:"200px"},attrs:{src:e.img}}),e._v(" "),n("image",{staticClass:"img",staticStyle:{width:"50px",height:"50px"},attrs:{src:e.img}})])],1),e._v(" "),n("panel",{attrs:{title:"GIF Animation",type:"primary"}},[n("tip",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"warning",value:"Depanding on Native ImageSDK"}}),e._v(" "),n("div",{staticStyle:{"flex-direction":"row"}},[n("image",{staticClass:"img",staticStyle:{width:"96px",height:"96px"},attrs:{src:"https://gtd.alicdn.com/tps/i4/T1HcvHXd4nXXb6ROYh-48-48.gif"}}),e._v(" "),n("image",{staticClass:"img",staticStyle:{width:"68px",height:"68px","margin-left":"20px"},attrs:{src:"https://gw.alicdn.com/tps/TB1El.mKXXXXXXyapXXXXXXXXXX-34-34.gif"}})])],1),e._v(" "),n("panel",{attrs:{title:"Base64",type:"primary"}},[n("tip",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"warning",value:"Depanding on Native ImageSDK"}}),e._v(" "),n("div",{staticStyle:{"flex-direction":"row"}},[n("image",{staticClass:"img",staticStyle:{width:"96px",height:"96px"},attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAO1QTFRFhomSb3J8XGBrdnqDgYWNlJefV1tmfoGKU1diT1NfgISNgoWOYmZwio2Vi4+Wc3eAkJObZGhzUlZiaGt2U1djfYCKZGdyhYiQeHyFio6VgYWOVVllbHB6XWFsY2ZxaWx3jZCYXmFsfYCJcnZ/UVVham54V1tng4aPb3N8WV1pX2JtZWl0YWVvVlpmiYyUWVxohomRd3uEdHiBeX2GZ2t1hIeQVFhkf4OMbnJ8fYGKdnqEb3N9kJScY2dycnaAjpKZdHeBjpKajI+Yc3eBhYiRf4KLXmFtio6Wi4+XjZCZkJSbkZScjI+XlJifTlJe+rAZcwAAAZBJREFUeNp0lOeWgjAQhSdUBQRRbFjX7tpW3XUt23tL3v9xNigJIHh/zRk+5iR3ZgIkULWmwgv+A7VWDWWBR/nSt2gLUzIVbLH1lo8RRW1wEfqxPtCKUaKTMUhURuUhTIi6Q07l6LuAEFdpEld6tWNEx00CKKJ3jsR1xSHJcj4bB+LmkpxT49Yj8mqQUVBBciUk8ITepESJ+5AqY1+uwny5IjDPcADoN0BIwjLOsjKZOewtbi/9fvi338a44CetIai2H/cokPLj9tfEj2wVzD4rIWMlfpu+CXc5Pw4qh5X7AUw4gZIswUENGT8lAN1fMBVeAxIIxYR3Nin0imOe52emdxkyP8aY+0S9Y2d63cNoxvACRTaeI70slst+cjYCAnXmuuS1RKKmy1hKBX0hzaC3KOsxsmz2Ir2NzMcEbVCo+cf5oDOWOzNAucpxxoglnZlT1+KzXk4kymKwL4ttN+73dhHeuWV85zLL073Vw3v7MdDuE3a/JRrCmqwFQ2yV8gmvg/d+aPCMH0GLvB//AgwAo1MTpxsaxVoAAAAASUVORK5CYII="}}),e._v(" "),n("image",{staticClass:"img",staticStyle:{width:"68px",height:"68px","margin-left":"20px"},attrs:{src:"data:image/gif;base64,R0lGODlhIgAiANU7AMvLy83Nzdra2srKysnJyejo6MbGxtzc3M7Ozuzs7NTU1N3d3fz8/NfX1/j4+Ovr6+/v79DQ0Obm5v39/d/f3/f398/Pz9vb2+np6fn5+f7+/tXV1fX19dnZ2erq6tHR0fb29sjIyMfHx+Li4vLy8u7u7ufn5/r6+uPj49bW1tPT09LS0sTExPT09ODg4O3t7eHh4eTk5MXFxd7e3vHx8fPz8/Dw8OXl5djY2P///8zMzP///wAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0QxODlDNENEOEQxMUUzOEIzM0I1ODVGNjU1MjBBQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0QxODlDNUNEOEQxMUUzOEIzM0I1ODVGNjU1MjBBQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDRDE4OUMyQ0Q4RDExRTM4QjMzQjU4NUY2NTUyMEFCIiBzdFJl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"}})])],1),e._v(" "),n("panel",{attrs:{title:"resize",type:"primary"}},[n("panel",{attrs:{title:"resize=stretch(default) 600 x 200 "}},[n("image",{staticClass:"img",staticStyle:{width:"600px",height:"200px","border-style":"solid","border-width":"1px","border-color":"#333"},attrs:{src:e.img,resize:"stretch"}})]),e._v(" "),n("panel",{attrs:{title:"resize=contain 600 x 200 "}},[n("image",{staticClass:"img",staticStyle:{width:"600px",height:"200px","border-style":"solid","border-width":"1px","border-color":"#333"},attrs:{src:e.img,resize:"contain"}})]),e._v(" "),n("panel",{attrs:{title:"resize=cover 600 x 200"}},[n("image",{staticClass:"img",staticStyle:{width:"600px",height:"200px","border-style":"solid","border-width":"1px","border-color":"#333"},attrs:{src:e.img,resize:"cover"}})])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},4:function(e,t,n){n(8);var a=n(0)(n(5),n(7),"data-v-48dfa6b6",null);a.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\panel.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] panel.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},41:function(e,t,n){n(413);var a=n(0)(n(97),n(337),"data-v-3f303259",null);a.options.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\components\\image.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] image.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},413:function(e,t,n){var a=n(249);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("ac523dcc",a,!1)},5:function(e,t){e.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},6:function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n.panel[data-v-48dfa6b6] {\n  margin-bottom: 20px;\n  background-color: #fff;\n  /*border: 1px solid transparent;*/\n  /*border-radius: 10px;*/\n  /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  border-color: #dddddd;\n  border-width: 1px;\n}\n.panel-default[data-v-48dfa6b6] {\n}\n.panel-primary[data-v-48dfa6b6] {\n  border-color: rgb(40, 96, 144);\n}\n.panel-success[data-v-48dfa6b6] {\n  border-color: rgb(76, 174, 76);\n}\n.panel-info[data-v-48dfa6b6] {\n  border-color: rgb(70, 184, 218);\n}\n.panel-warning[data-v-48dfa6b6] {\n  border-color: rgb(238, 162, 54);\n}\n.panel-danger[data-v-48dfa6b6] {\n  border-color: rgb(212, 63, 58);\n}\n.panel-header[data-v-48dfa6b6] {\n  background-color: #f5f5f5;\n  font-size: 40px;\n  /*padding-left: 12px;*/\n  /*padding-right: 12px;*/\n  /*padding-top: 20px;*/\n  /*padding-bottom: 20px;*/\n  color: #333;\n}\n.panel-header-default[data-v-48dfa6b6] {\n}\n.panel-header-primary[data-v-48dfa6b6] {\n  background-color: rgb(40, 96, 144);\n  color: #ffffff;\n}\n.panel-header-success[data-v-48dfa6b6] {\n  background-color: rgb(92, 184, 92);\n  color: #ffffff;\n}\n.panel-header-info[data-v-48dfa6b6] {\n  background-color: rgb(91, 192, 222);\n  color: #ffffff;\n}\n.panel-header-warning[data-v-48dfa6b6] {\n  background-color: rgb(240, 173, 78);\n  color: #ffffff;\n}\n.panel-header-danger[data-v-48dfa6b6] {\n  background-color: rgb(217, 83, 79);\n  color: #ffffff;\n}\n.panel-body[data-v-48dfa6b6] {\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.panel-body-default[data-v-48dfa6b6] {\n}\n.panel-body-primary[data-v-48dfa6b6] {\n}\n.panel-body-success[data-v-48dfa6b6] {\n}\n.panel-body-info[data-v-48dfa6b6] {\n}\n.panel-body-warning[data-v-48dfa6b6] {\n}\n.panel-body-danger[data-v-48dfa6b6] {\n}\n",""])},7:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["panel","panel-"+e.type],style:{borderWidth:e.border}},[n("text",{class:["panel-header","panel-header-"+e.type],style:{paddingTop:e.paddingHead,paddingBottom:e.paddingHead,paddingLeft:1.5*e.paddingHead,paddingRight:1.5*e.paddingHead}},[e._v(e._s(e.title))]),e._v(" "),n("div",{class:["panel-body","panel-body-"+e.type],style:{paddingTop:e.paddingBody,paddingBottom:e.paddingBody,paddingLeft:1.5*e.paddingBody,paddingRight:1.5*e.paddingBody}},[e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},8:function(e,t,n){var a=n(6);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("2b655c6d",a,!1)},97:function(e,t,n){e.exports={data:function(){return{img:"//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg"}},components:{panel:n(4),tip:n(16)}}}});