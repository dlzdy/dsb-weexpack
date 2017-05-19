// { "framework": "Weex"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=671)}({430:function(e,t,r){e.exports={data:function(){return{marquee:{height:30,duration:1500,interval:2e3,list:[{text:"Introducing Bots on Messenger"},{text:"Capturing 3D 360-Stereo VR Video"},{text:"The Future of Video on Facebook"},{text:"Announcing Vue.js 2.0"},{text:"Not Your Average Virtual-DOM"},{text:"Templates, JSX, or Hyperscript?"}]}}},components:{panel:r(83),marquee:r(689)},methods:{marqueeChange:function(e){console.log(e)}}}},515:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("scroller",[r("panel",{attrs:{title:"Marquee",type:"primary"}},[r("marquee",{style:{width:700,height:2*e.marquee.height,backgroundColor:"rgb(223, 240, 216)",borderRadius:8,paddingLeft:10,paddingRight:10},attrs:{step:2*e.marquee.height,count:e.marquee.list.length,interval:e.marquee.interval,duration:e.marquee.duration},on:{change:e.marqueeChange}},e._l(e.marquee.list,function(t,n){return r("div",{key:n,style:{height:e.marquee.height*e.marquee.length,paddingTop:.5*e.marquee.height,paddingBottom:.5*e.marquee.height,overflow:"hidden"}},[r("text",{style:{height:e.marquee.height,color:"rgb(60, 118, 61)",fontSize:28}},[e._v(e._s(t.text))])])}))],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},671:function(e,t,r){var n,o,a=[];n=r(430);var i=r(515);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\work_study\\weex_study\\dsb-weexpack\\src\\examples\\vue\\components\\marquee.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o.style=o.style||{},a.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,a),e.exports=n,e.exports.el="true",new Vue(e.exports)},689:function(e,t,r){var n,o,a=[];a.push(r(800)),n=r(766);var i=r(825);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\work_study\\weex_study\\dsb-weexpack\\src\\examples\\vue\\include\\marquee.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-a1885088",o.style=o.style||{},a.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,a),e.exports=n},766:function(e,t){var r=weex.requireModule("animation");e.exports={props:{step:{default:0},count:{default:0},index:{default:1},duration:{default:0},interval:{default:0},outofview:{default:!1}},created:function(){this.interval>0&&this.step>0&&this.duration>0&&this.run()},methods:{run:function(){this.outofview?setTimeout(this.run.bind(this),this.interval):setTimeout(function(){this.animation(this.run.bind(this))}.bind(this),this.interval)},animation:function(e){var t=-this.step*this.index;r.transition(this.$refs.anim,{styles:{transform:"translateY("+t+"px) translateZ(0)"},timingFunction:"ease",duration:this.duration},function(){this.index=(this.index+1)%this.count,this.$emit("change",{index:this.index,count:this.count}),e&&e()}.bind(this))},appeared:function(){this.outofview=!1},disappeared:function(){this.outofview=!0}}}},800:function(e,t){e.exports={wrap:{overflow:"hidden",position:"relative"},anim:{flexDirection:"column",position:"absolute",transform:"translateY(0) translateZ(0)"}}},825:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["wrap"],on:{appear:e.appeared,disappear:e.disappeared}},[r("div",{ref:"anim",staticClass:["anim"]},[e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0},83:function(e,t,r){var n,o,a=[];a.push(r(85)),n=r(84);var i=r(86);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\work_study\\weex_study\\dsb-weexpack\\src\\examples\\vue\\include\\panel.vue",o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-c0525dc4",o.style=o.style||{},a.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,a),e.exports=n},84:function(e,t){e.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},85:function(e,t){e.exports={panel:{marginBottom:20,backgroundColor:"#ffffff",borderColor:"#dddddd",borderWidth:1},"panel-primary":{borderColor:"rgb(40,96,144)"},"panel-success":{borderColor:"rgb(76,174,76)"},"panel-info":{borderColor:"rgb(70,184,218)"},"panel-warning":{borderColor:"rgb(238,162,54)"},"panel-danger":{borderColor:"rgb(212,63,58)"},"panel-header":{backgroundColor:"#f5f5f5",fontSize:40,color:"#333333"},"panel-header-primary":{backgroundColor:"rgb(40,96,144)",color:"#ffffff"},"panel-header-success":{backgroundColor:"rgb(92,184,92)",color:"#ffffff"},"panel-header-info":{backgroundColor:"rgb(91,192,222)",color:"#ffffff"},"panel-header-warning":{backgroundColor:"rgb(240,173,78)",color:"#ffffff"},"panel-header-danger":{backgroundColor:"rgb(217,83,79)",color:"#ffffff"},"panel-body":{paddingLeft:12,paddingRight:12,paddingTop:20,paddingBottom:20}}},86:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["panel","panel-"+e.type],style:{borderWidth:e.border}},[r("text",{class:["panel-header","panel-header-"+e.type],style:{paddingTop:e.paddingHead,paddingBottom:e.paddingHead,paddingLeft:1.5*e.paddingHead,paddingRight:1.5*e.paddingHead}},[e._v(e._s(e.title))]),r("div",{class:["panel-body","panel-body-"+e.type],style:{paddingTop:e.paddingBody,paddingBottom:e.paddingBody,paddingLeft:1.5*e.paddingBody,paddingRight:1.5*e.paddingBody}},[e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});