// { "framework": "Weex"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=637)}({0:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},1:function(t,e,n){t.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},10:function(t,e,n){var r=n(9),o=n(16);t.exports=n(1)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},11:function(t,e,n){var r=n(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},12:function(t,e,n){var r=n(65),o=n(54),i=n(76);__weex_define__("@weex-component/wxc-navbar",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},13:function(t,e,n){var r=n(69),o=n(58),i=n(80);__weex_define__("@weex-component/wxc-tabitem",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},137:function(t,e,n){var r=n(139),o=n(138),i=n(140);__weex_define__("@weex-component/style-item",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},138:function(t,e){t.exports={item:{marginRight:10,width:160,height:75,paddingLeft:8,paddingRight:8,paddingTop:8,paddingBottom:8},txt:{color:"#eeeeee"}}},139:function(t,e){t.exports={type:"text",classList:["item","txt"],attr:{value:function(){return this.value}},style:{backgroundColor:function(){return this.bgColor()}}}},14:function(t,e,n){var r=n(28),o=n(21);t.exports=Object.keys||function(t){return r(t,o)}},140:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{value:"",type:"0"}},methods:{bgColor:function(){return"1"==this.type?"#7BA3A8":"#BEAD92"}}}}},15:function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},16:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},165:function(t,e){t.exports={box:{backgroundColor:"#f5f5f5",width:260,height:260,paddingLeft:40,paddingTop:40,paddingRight:40,paddingBottom:40,marginLeft:40,marginTop:40,marginRight:40,marginBottom:40,borderWidth:40,borderColor:"#333333",borderStyle:"solid"}}},17:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},178:function(t,e){t.exports={type:"div",children:[{type:"wxc-panel",attr:{title:"Box Model",paddingBody:"0",type:"primary"},children:[{type:"text",classList:["box"],attr:{value:"Box"}}]},{type:"wxc-panel",attr:{title:"border",type:"primary"},children:[{type:"wxc-panel",attr:{title:"border-width",type:""},children:[{type:"div",style:{flexDirection:"row"},children:[{type:"style-item",style:{borderStyle:"solid",borderWidth:2,borderColor:"#333333"},attr:{value:""}},{type:"style-item",style:{borderStyle:"solid",borderWidth:10,borderColor:"#333333"},attr:{value:""}},{type:"style-item",style:{borderStyle:"solid",borderLeftWidth:4,borderColor:"#333333"},attr:{value:""}},{type:"style-item",style:{borderStyle:"solid",borderBottomWidth:4,borderColor:"#333333"},attr:{value:""}}]}]},{type:"wxc-panel",attr:{title:"border-color",type:""},children:[{type:"div",style:{flexDirection:"row"},children:[{type:"style-item",style:{borderStyle:"solid",borderWidth:4,borderColor:"#333333"},attr:{value:""}},{type:"style-item",style:{borderStyle:"solid",borderWidth:4,borderColor:"#dddddd"},attr:{value:""}},{type:"style-item",style:{borderStyle:"solid",borderWidth:4,borderColor:"#FF0000"},attr:{value:""}}]}]},{type:"wxc-panel",attr:{title:"border-style",type:""},children:[{type:"wxc-tip",attr:{type:"warning",value:"just support four edges"},style:{marginBottom:10}},{type:"div",style:{flexDirection:"row"},children:[{type:"style-item",style:{borderStyle:"solid",borderWidth:4,borderColor:"#333333"},attr:{value:""}},{type:"style-item",style:{borderStyle:"dashed",borderWidth:4,borderColor:"#333333"},attr:{value:"",type:""}},{type:"style-item",style:{borderStyle:"dotted",borderWidth:4,borderColor:"#333333"},attr:{value:""}}]}]},{type:"wxc-panel",attr:{title:"border-radius",type:""},children:[{type:"div",style:{flexDirection:"row"},children:[{type:"style-item",style:{width:75,borderRadius:38},attr:{value:""}},{type:"style-item",style:{borderRadius:20},attr:{value:""}},{type:"style-item",style:{borderTopLeftRadius:20,borderTopRightRadius:20},attr:{value:""}},{type:"style-item",style:{borderBottomLeftRadius:20,borderBottomRightRadius:20},attr:{value:""}}]}]}]}]}},18:function(t,e){e.f={}.propertyIsEnumerable},19:function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},191:function(t,e,n){t.exports=function(t,e,r){"use strict";n(32),t.exports={data:function(){return{size:40}}}}},2:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},20:function(t,e,n){var r=n(0),o=n(5),i=n(31),s=n(10),a=function(t,e,n){var c,l,u,d=t&a.F,f=t&a.G,p=t&a.S,h=t&a.P,b=t&a.B,m=t&a.W,g=f?o:o[e]||(o[e]={}),x=g.prototype,y=f?r:p?r[e]:(r[e]||{}).prototype;f&&(n=e);for(c in n)(l=!d&&y&&void 0!==y[c])&&c in g||(u=l?y[c]:n[c],g[c]=f&&"function"!=typeof y[c]?n[c]:b&&l?i(u,r):m&&y[c]==u?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):h&&"function"==typeof u?i(Function.call,u):u,h&&((g.virtual||(g.virtual={}))[c]=u,t&a.R&&x&&!x[c]&&s(x,c,u)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},21:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},22:function(t,e,n){var r=n(23)("keys"),o=n(17);t.exports=function(t){return r[t]||(r[t]=o(t))}},23:function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},24:function(t,e){e.f=Object.getOwnPropertySymbols},25:function(t,e,n){var r=n(3),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},26:function(t,e,n){t.exports=!n(1)&&!n(2)(function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a})},27:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},28:function(t,e,n){var r=n(6),o=n(4),i=n(33)(!1),s=n(22)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,l=[];for(n in a)n!=s&&r(a,n)&&l.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(l,n)||l.push(n));return l}},29:function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},3:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},30:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},31:function(t,e,n){var r=n(30);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},32:function(t,e,n){n(40),n(42),n(43),n(46),n(48),n(41),n(44),n(12),n(45),n(47),n(13)},33:function(t,e,n){var r=n(4),o=n(35),i=n(34);t.exports=function(t){return function(e,n,s){var a,c=r(e),l=o(c.length),u=i(s,l);if(t&&n!=n){for(;l>u;)if((a=c[u++])!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},34:function(t,e,n){var r=n(8),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},35:function(t,e,n){var r=n(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},36:function(t,e,n){t.exports={default:n(37),__esModule:!0}},37:function(t,e,n){n(39),t.exports=n(5).Object.assign},38:function(t,e,n){"use strict";var r=n(14),o=n(24),i=n(18),s=n(29),a=n(11),c=Object.assign;t.exports=!c||n(2)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=s(t),c=arguments.length,l=1,u=o.f,d=i.f;c>l;)for(var f,p=a(arguments[l++]),h=u?r(p).concat(u(p)):r(p),b=h.length,m=0;b>m;)d.call(p,f=h[m++])&&(n[f]=p[f]);return n}:c},39:function(t,e,n){var r=n(20);r(r.S+r.F,"Object",{assign:n(38)})},4:function(t,e,n){var r=n(11),o=n(7);t.exports=function(t){return r(o(t))}},40:function(t,e,n){var r=n(60),o=n(49),i=n(71);__weex_define__("@weex-component/wxc-button",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},41:function(t,e,n){var r=n(61),o=n(50),i=n(72);__weex_define__("@weex-component/wxc-countdown",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},42:function(t,e,n){var r=n(62),o=n(51),i=n(73);__weex_define__("@weex-component/wxc-hn",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},43:function(t,e,n){var r=n(63),o=n(52),i=n(74);__weex_define__("@weex-component/wxc-list-item",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},44:function(t,e,n){var r=n(64),o=n(53),i=n(75);__weex_define__("@weex-component/wxc-marquee",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},45:function(t,e,n){n(12);var r=n(66),o=n(55),i=n(77);__weex_define__("@weex-component/wxc-navpage",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},46:function(t,e,n){var r=n(67),o=n(56),i=n(78);__weex_define__("@weex-component/wxc-panel",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},47:function(t,e,n){n(13);var r=n(68),o=n(57),i=n(79);__weex_define__("@weex-component/wxc-tabbar",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},48:function(t,e,n){var r=n(70),o=n(59),i=n(81);__weex_define__("@weex-component/wxc-tip",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o})},49:function(t,e){t.exports={btn:{marginBottom:0,alignItems:"center",justifyContent:"center",borderWidth:1,borderStyle:"solid",borderColor:"#333333"},"btn-default":{color:"rgb(51,51,51)"},"btn-primary":{backgroundColor:"rgb(40,96,144)",borderColor:"rgb(40,96,144)"},"btn-success":{backgroundColor:"rgb(92,184,92)",borderColor:"rgb(76,174,76)"},"btn-info":{backgroundColor:"rgb(91,192,222)",borderColor:"rgb(70,184,218)"},"btn-warning":{backgroundColor:"rgb(240,173,78)",borderColor:"rgb(238,162,54)"},"btn-danger":{backgroundColor:"rgb(217,83,79)",borderColor:"rgb(212,63,58)"},"btn-link":{borderColor:"rgba(0,0,0,0)",borderRadius:0},"btn-txt-default":{color:"rgb(51,51,51)"},"btn-txt-primary":{color:"rgb(255,255,255)"},"btn-txt-success":{color:"rgb(255,255,255)"},"btn-txt-info":{color:"rgb(255,255,255)"},"btn-txt-warning":{color:"rgb(255,255,255)"},"btn-txt-danger":{color:"rgb(255,255,255)"},"btn-txt-link":{color:"rgb(51,122,183)"},"btn-sz-large":{width:300,height:100,paddingTop:25,paddingBottom:25,paddingLeft:40,paddingRight:40,borderRadius:15},"btn-sz-middle":{width:240,height:80,paddingTop:15,paddingBottom:15,paddingLeft:30,paddingRight:30,borderRadius:10},"btn-sz-small":{width:170,height:60,paddingTop:12,paddingBottom:12,paddingLeft:25,paddingRight:25,borderRadius:7},"btn-txt-sz-large":{fontSize:45},"btn-txt-sz-middle":{fontSize:35},"btn-txt-sz-small":{fontSize:30}}},5:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},50:function(t,e){t.exports={wrap:{overflow:"hidden"}}},51:function(t,e){t.exports={h1:{height:110,paddingTop:20,paddingBottom:20},h2:{height:110,paddingTop:20,paddingBottom:20},h3:{height:110,paddingTop:20,paddingBottom:20},"txt-h1":{fontSize:70},"txt-h2":{fontSize:52},"txt-h3":{fontSize:42}}},52:function(t,e){t.exports={item:{paddingTop:25,paddingBottom:25,paddingLeft:35,paddingRight:35,height:160,justifyContent:"center",borderBottomWidth:1,borderColor:"#dddddd"}}},53:function(t,e){t.exports={wrap:{overflow:"hidden",position:"relative"},anim:{flexDirection:"column",position:"absolute",transform:"translateY(0) translateZ(0)"}}},54:function(t,e){t.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image":{position:"absolute",bottom:20,left:28,width:50,height:50},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},55:function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},56:function(t,e){t.exports={panel:{marginBottom:20,backgroundColor:"#ffffff",borderColor:"#dddddd",borderWidth:1},"panel-primary":{borderColor:"rgb(40,96,144)"},"panel-success":{borderColor:"rgb(76,174,76)"},"panel-info":{borderColor:"rgb(70,184,218)"},"panel-warning":{borderColor:"rgb(238,162,54)"},"panel-danger":{borderColor:"rgb(212,63,58)"},"panel-header":{backgroundColor:"#f5f5f5",fontSize:40,color:"#333333"},"panel-header-primary":{backgroundColor:"rgb(40,96,144)",color:"#ffffff"},"panel-header-success":{backgroundColor:"rgb(92,184,92)",color:"#ffffff"},"panel-header-info":{backgroundColor:"rgb(91,192,222)",color:"#ffffff"},"panel-header-warning":{backgroundColor:"rgb(240,173,78)",color:"#ffffff"},"panel-header-danger":{backgroundColor:"rgb(217,83,79)",color:"#ffffff"}}},57:function(t,e){t.exports={wrapper:{width:750,position:"absolute",top:0,left:0,right:0,bottom:0},content:{position:"absolute",top:0,left:0,right:0,bottom:0,marginTop:0,marginBottom:88},tabbar:{flexDirection:"row",position:"fixed",bottom:0,left:0,right:0,height:88}}},58:function(t,e){t.exports={container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",height:88},"top-line":{position:"absolute",top:0,left:0,right:0,height:2},"tab-icon":{marginTop:5,width:40,height:40},"tab-text":{marginTop:5,textAlign:"center",fontSize:20}}},59:function(t,e){t.exports={tip:{paddingLeft:36,paddingRight:36,paddingTop:36,paddingBottom:36,borderRadius:10},"tip-txt":{fontSize:28},"tip-success":{backgroundColor:"#dff0d8",borderColor:"#d6e9c6"},"tip-txt-success":{color:"#3c763d"},"tip-info":{backgroundColor:"#d9edf7",borderColor:"#bce8f1"},"tip-txt-info":{color:"#31708f"},"tip-warning":{backgroundColor:"#fcf8e3",borderColor:"#faebcc"},"tip-txt-warning":{color:"#8a6d3b"},"tip-danger":{backgroundColor:"#f2dede",borderColor:"#ebccd1"},"tip-txt-danger":{color:"#a94442"}}},6:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},60:function(t,e){t.exports={type:"div",classList:function(){return["btn","btn-"+this.type,"btn-sz-"+this.size]},children:[{type:"text",classList:function(){return["btn-txt","btn-txt-"+this.type,"btn-txt-sz-"+this.size]},attr:{value:function(){return this.value}}}]}},61:function(t,e){t.exports={type:"div",style:{overflow:"hidden",flexDirection:"row"},events:{appear:"appeared",disappear:"disappeared"},children:[{type:"content"}]}},62:function(t,e){t.exports={type:"div",classList:function(){return["h"+this.level]},style:{justifyContent:"center"},children:[{type:"text",classList:function(){return["txt-h"+this.level]},attr:{value:function(){return this.value}}}]}},63:function(t,e){t.exports={type:"div",classList:["item"],events:{touchstart:"touchstart",touchend:"touchend"},style:{backgroundColor:function(){return this.bgColor}},children:[{type:"content"}]}},637:function(t,e,n){n(137);var r=n(178),o=n(165),i=n(191);__weex_define__("@weex-component/d722bcbfef77cd5fb12f94c8740b0756",[],function(t,e,n){i(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=r,n.exports.style=o}),__weex_bootstrap__("@weex-component/d722bcbfef77cd5fb12f94c8740b0756",void 0,void 0)},64:function(t,e){t.exports={type:"div",classList:["wrap"],events:{appear:"appeared",disappear:"disappeared"},children:[{type:"div",id:"anim",classList:["anim"],children:[{type:"content"}]}]}},65:function(t,e){t.exports={type:"div",classList:["container"],style:{height:function(){return this.height},backgroundColor:function(){return this.backgroundColor}},attr:{dataRole:function(){return this.dataRole}},children:[{type:"text",classList:["right-text"],style:{color:function(){return this.rightItemColor}},attr:{naviItemPosition:"right",value:function(){return this.rightItemTitle}},shown:function(){return!this.rightItemSrc},events:{click:"onclickrightitem"}},{type:"image",classList:["right-image"],attr:{naviItemPosition:"right",src:function(){return this.rightItemSrc}},shown:function(){return this.rightItemSrc},events:{click:"onclickrightitem"}},{type:"text",classList:["left-text"],style:{color:function(){return this.leftItemColor}},attr:{naviItemPosition:"left",value:function(){return this.leftItemTitle}},shown:function(){return!this.leftItemSrc},events:{click:"onclickleftitem"}},{type:"image",classList:["left-image"],attr:{naviItemPosition:"left",src:function(){return this.leftItemSrc}},shown:function(){return this.leftItemSrc},events:{click:"onclickleftitem"}},{type:"text",classList:["center-text"],style:{color:function(){return this.titleColor}},attr:{naviItemPosition:"center",value:function(){return this.title}}}]}},66:function(t,e){t.exports={type:"div",classList:["wrapper"],children:[{type:"wxc-navbar",attr:{dataRole:function(){return this.dataRole},height:function(){return this.height},backgroundColor:function(){return this.backgroundColor},title:function(){return this.title},titleColor:function(){return this.titleColor},leftItemSrc:function(){return this.leftItemSrc},leftItemTitle:function(){return this.leftItemTitle},leftItemColor:function(){return this.leftItemColor},rightItemSrc:function(){return this.rightItemSrc},rightItemTitle:function(){return this.rightItemTitle},rightItemColor:function(){return this.rightItemColor}}},{type:"div",classList:["wrapper"],style:{marginTop:function(){return this.height}},children:[{type:"content"}]}]}},67:function(t,e){t.exports={type:"div",classList:function(){return["panel","panel-"+this.type]},style:{borderWidth:function(){return this.border}},children:[{type:"text",classList:function(){return["panel-header","panel-header-"+this.type]},style:{paddingTop:function(){return this.paddingHead},paddingBottom:function(){return this.paddingHead},paddingLeft:function(){return 1.5*this.paddingHead},paddingRight:function(){return 1.5*this.paddingHead}},attr:{value:function(){return this.title}}},{type:"div",classList:function(){return["panel-body","panel-body-"+this.type]},style:{paddingTop:function(){return this.paddingBody},paddingBottom:function(){return this.paddingBody},paddingLeft:function(){return 1.5*this.paddingBody},paddingRight:function(){return 1.5*this.paddingBody}},children:[{type:"content"}]}]}},68:function(t,e){t.exports={type:"div",classList:["wrapper"],children:[{type:"embed",classList:["content"],style:{visibility:function(){return this.visibility}},repeat:function(){return this.tabItems},attr:{src:function(){return this.src},type:"weex"}},{type:"div",classList:["tabbar"],append:"tree",children:[{type:"wxc-tabitem",repeat:function(){return this.tabItems},attr:{index:function(){return this.index},icon:function(){return this.icon},title:function(){return this.title},titleColor:function(){return this.titleColor}}}]}]}},69:function(t,e){t.exports={type:"div",classList:["container"],style:{backgroundColor:function(){return this.backgroundColor}},events:{click:"onclickitem"},children:[{type:"image",classList:["top-line"],attr:{src:"http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"}},{type:"image",classList:["tab-icon"],attr:{src:function(){return this.icon}}},{type:"text",classList:["tab-text"],style:{color:function(){return this.titleColor}},attr:{value:function(){return this.title}}}]}},7:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},70:function(t,e){t.exports={type:"div",classList:function(){return["tip","tip-"+this.type]},children:[{type:"text",classList:function(){return["tip-txt","tip-txt-"+this.type]},attr:{value:function(){return this.value}}}]}},71:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{type:"default",size:"large",value:""}},methods:{}}}},72:function(t,e,n){t.exports=function(t,e,r){"use strict";var o=n(36),i=function(t){return t&&t.__esModule?t:{default:t}}(o);t.exports={data:function(){return{now:0,remain:0,time:{elapse:0,D:"0",DD:"0",h:"0",hh:"00",H:"0",HH:"0",m:"0",mm:"00",M:"0",MM:"0",s:"0",ss:"00",S:"0",SS:"0"},outofview:!1}},ready:function(){this.remain<=0||(this.now=Date.now(),this.nextTick())},methods:{nextTick:function(){this.outofview?setTimeout(this.nextTick.bind(this),1e3):(this.time.elapse=parseInt((Date.now()-this.now)/1e3),this.calc()?(this.$emit("tick",(0,i.default)({},this.time)),setTimeout(this.nextTick.bind(this),1e3)):this.$emit("alarm",(0,i.default)({},this.time)),this._app.updateActions())},format:function(t){return t.length>=2?t:"0"+t},calc:function(){var t=this.remain-this.time.elapse;return t<0&&(t=0),this.time.D=String(parseInt(t/86400)),this.time.DD=this.format(this.time.D),this.time.h=String(parseInt((t-86400*parseInt(this.time.D))/3600)),this.time.hh=this.format(this.time.h),this.time.H=String(parseInt(t/3600)),this.time.HH=this.format(this.time.H),this.time.m=String(parseInt((t-3600*parseInt(this.time.H))/60)),this.time.mm=this.format(this.time.m),this.time.M=String(parseInt(t/60)),this.time.MM=this.format(this.time.M),this.time.s=String(t-60*parseInt(this.time.M)),this.time.ss=this.format(this.time.s),this.time.S=String(t),this.time.SS=this.format(this.time.S),t>0},appeared:function(){this.outofview=!1},disappeared:function(){this.outofview=!0}}}}},73:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{level:1,value:""}},methods:{}}}},74:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{bgColor:"#ffffff"}},methods:{touchstart:function(){},touchend:function(){}}}}},75:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{step:0,count:0,index:1,duration:0,interval:0,outofview:!1}},ready:function(){this.interval>0&&this.step>0&&this.duration>0&&this.nextTick()},methods:{nextTick:function(){var t=this;this.outofview?setTimeout(t.nextTick.bind(t),t.interval):setTimeout(function(){t.animation(t.nextTick.bind(t))},t.interval)},animation:function(t){var e=this,r=-e.step*e.index;n("@weex-module/animation").transition(this.$el("anim"),{styles:{transform:"translateY("+String(r)+"px) translateZ(0)"},timingFunction:"ease",duration:e.duration},function(){e.index=(e.index+1)%e.count,e.$emit("change",{index:e.index,count:e.count}),t&&t()})},appeared:function(){this.outofview=!1},disappeared:function(){this.outofview=!0}}}}},76:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{dataRole:"navbar",backgroundColor:"black",height:88,title:"",titleColor:"black",rightItemSrc:"",rightItemTitle:"",rightItemColor:"black",leftItemSrc:"",leftItemTitle:"",leftItemColor:"black"}},methods:{onclickrightitem:function(t){this.$dispatch("naviBar.rightItem.click",{})},onclickleftitem:function(t){this.$dispatch("naviBar.leftItem.click",{})}}}}},77:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{dataRole:"navbar",backgroundColor:"black",height:88,title:"",titleColor:"black",rightItemSrc:"",rightItemTitle:"",rightItemColor:"black",leftItemSrc:"",leftItemTitle:"",leftItemColor:"black"}}}}},78:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{type:"default",title:"",paddingBody:20,paddingHead:20,dataClass:"",border:0}},ready:function(){}}}},79:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{tabItems:[],selectedIndex:0,selectedColor:"#ff0000",unselectedColor:"#000000"}},created:function(){this.selected(this.selectedIndex),this.$on("tabItem.onClick",function(t){var e=t.detail;this.selectedIndex=e.index,this.selected(e.index);var n={index:e.index};this.$dispatch("tabBar.onClick",n)})},methods:{selected:function(t){for(var e=0;e<this.tabItems.length;e++){var n=this.tabItems[e];e==t?(n.icon=n.selectedImage,n.titleColor=this.selectedColor,n.visibility="visible"):(n.icon=n.image,n.titleColor=this.unselectedColor,n.visibility="hidden")}}}}}},8:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},80:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{index:0,title:"",titleColor:"#000000",icon:"",backgroundColor:"#ffffff"}},methods:{onclickitem:function(t){var e=this,n={index:e.index};e.$dispatch("tabItem.onClick",n)}}}}},81:function(t,e){t.exports=function(t,e,n){"use strict";t.exports={data:function(){return{type:"success",value:""}}}}},9:function(t,e,n){var r=n(15),o=n(26),i=n(19),s=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}}});