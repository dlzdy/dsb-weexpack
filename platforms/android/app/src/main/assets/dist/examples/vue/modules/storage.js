// { "framework": "Weex"} 

!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=701)}({447:function(e,t,o){var r=weex.requireModule("storage");e.exports={data:function(){return{setItemResult:"loading",getItemResult:"loading",removeItemResult:"loading",lengthResult:"loading",getAllKeysResult:"loading"}},components:{panel:o(83)},created:function(){var e=this;r.setItem("foo","foo-value",function(t){console.log("set [foo<->foo-value]:"+JSON.stringify(t)),e.setItemResult="foo:"+JSON.stringify(t)+"\n"}),r.setItem("bar","bar-value",function(t){console.log("set [bar<->bar-value]:"+JSON.stringify(t)),e.setItemResult=e.setItemResult+"bar:"+JSON.stringify(t)}),r.getItem("foo",function(t){console.log("get foo result:"+JSON.stringify(t)),e.getItemResult="get foo,value is "+t.data+"\n"}),r.getItem("bar",function(t){console.log("get bar result:"+JSON.stringify(t)),e.getItemResult+="get bar,value is "+t.data}),r.length(function(t){console.log("length:"+JSON.stringify(t)),e.lengthResult="current length is "+t.data}),r.getAllKeys(function(t){console.log("getAllKeys:"+JSON.stringify(t)),e.getAllKeysResult=""+t.data}),r.removeItem("foo",function(t){console.log("remove foo:"+JSON.stringify(t)),e.removeItemResult="remove item foo "+t.result})}}},538:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroller",[o("panel",{attrs:{title:"storage API",type:"primary"}},[o("panel",{attrs:{title:"setItem"}},[o("text",[e._v(e._s(e.setItemResult))])]),o("panel",{attrs:{title:"getItem"}},[o("text",[e._v(e._s(e.getItemResult))])]),o("panel",{attrs:{title:"length"}},[o("text",[e._v(e._s(e.lengthResult))])]),o("panel",{attrs:{title:"getAllKeys"}},[o("text",[e._v(e._s(e.getAllKeysResult))])]),o("panel",{attrs:{title:"removeItem"}},[o("text",[e._v(e._s(e.removeItemResult))])])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},701:function(e,t,o){var r,n,a=[];r=o(447);var l=o(538);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="E:\\work_study\\weex_study\\dsb-weexpack\\src\\examples\\vue\\modules\\storage.vue",n.render=l.render,n.staticRenderFns=l.staticRenderFns,n.style=n.style||{},a.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),e.exports=r,e.exports.el="true",new Vue(e.exports)},83:function(e,t,o){var r,n,a=[];a.push(o(85)),r=o(84);var l=o(86);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(n=n.options),n.__file="E:\\work_study\\weex_study\\dsb-weexpack\\src\\examples\\vue\\include\\panel.vue",n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-c0525dc4",n.style=n.style||{},a.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),e.exports=r},84:function(e,t){e.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},85:function(e,t){e.exports={panel:{marginBottom:20,backgroundColor:"#ffffff",borderColor:"#dddddd",borderWidth:1},"panel-primary":{borderColor:"rgb(40,96,144)"},"panel-success":{borderColor:"rgb(76,174,76)"},"panel-info":{borderColor:"rgb(70,184,218)"},"panel-warning":{borderColor:"rgb(238,162,54)"},"panel-danger":{borderColor:"rgb(212,63,58)"},"panel-header":{backgroundColor:"#f5f5f5",fontSize:40,color:"#333333"},"panel-header-primary":{backgroundColor:"rgb(40,96,144)",color:"#ffffff"},"panel-header-success":{backgroundColor:"rgb(92,184,92)",color:"#ffffff"},"panel-header-info":{backgroundColor:"rgb(91,192,222)",color:"#ffffff"},"panel-header-warning":{backgroundColor:"rgb(240,173,78)",color:"#ffffff"},"panel-header-danger":{backgroundColor:"rgb(217,83,79)",color:"#ffffff"},"panel-body":{paddingLeft:12,paddingRight:12,paddingTop:20,paddingBottom:20}}},86:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:["panel","panel-"+e.type],style:{borderWidth:e.border}},[o("text",{class:["panel-header","panel-header-"+e.type],style:{paddingTop:e.paddingHead,paddingBottom:e.paddingHead,paddingLeft:1.5*e.paddingHead,paddingRight:1.5*e.paddingHead}},[e._v(e._s(e.title))]),o("div",{class:["panel-body","panel-body-"+e.type],style:{paddingTop:e.paddingBody,paddingBottom:e.paddingBody,paddingLeft:1.5*e.paddingBody,paddingRight:1.5*e.paddingBody}},[e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});