// { "framework": "Vue"} 

!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=350)}({130:function(t,e){t.exports={type:"scroller",children:[{type:"wxc-panel",attr:{title:"Countdown",type:"primary"},children:[{type:"wxc-countdown",id:"countdown1",attr:{remain:function(){return this.countdown1.remain}},style:{width:750,marginTop:20,marginBottom:20},children:[{type:"text",classList:["ctno1"],attr:{value:function(){return this.countdown1.time.D}}},{type:"text",classList:["ctno1"],style:{backgroundColor:"#FFFFFF",color:"#AAAAAA"},attr:{value:"day(s)"}},{type:"text",classList:["ctno1"],attr:{value:function(){return this.countdown1.time.hh}}},{type:"text",classList:["ctno1"],style:{backgroundColor:"#FFFFFF",color:"#AAAAAA"},attr:{value:"hour(s)"}},{type:"text",classList:["ctno1"],attr:{value:function(){return this.countdown1.time.mm}}},{type:"text",classList:["ctno1"],style:{backgroundColor:"#FFFFFF",color:"#AAAAAA"},attr:{value:"minute(s)"}},{type:"text",classList:["ctno1"],attr:{value:function(){return this.countdown1.time.ss}}},{type:"text",classList:["ctno1"],style:{backgroundColor:"#FFFFFF",color:"#AAAAAA"},attr:{value:"second(s)"}}]},{type:"wxc-countdown",id:"countdown2",attr:{remain:function(){return this.countdown2.remain}},style:{width:600},children:[{type:"text",classList:["ctno2"],attr:{value:function(){return this.countdown2.time.MM}}},{type:"text",classList:["ctno2"],style:{backgroundColor:"#FFFFFF",color:"#AAAAAA"},attr:{value:":"}},{type:"text",classList:["ctno2"],attr:{value:function(){return this.countdown2.time.ss}}}]}]}]}},350:function(t,e,o){var n=o(130),r=o(78),s=o(!function(){var t=new Error('Cannot find module "!!../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./countdown-demo.we"');throw t.code="MODULE_NOT_FOUND",t}());__weex_define__("@weex-component/850ac51bf4a7b78e263ac77e956f1c34",[],function(t,e,o){s(o,e,t),e.__esModule&&e.default&&(o.exports=e.default),o.exports.template=n,o.exports.style=r}),__weex_bootstrap__("@weex-component/850ac51bf4a7b78e263ac77e956f1c34",void 0,void 0)},78:function(t,e){t.exports={ctno1:{borderRadius:8,paddingTop:6,paddingBottom:6,paddingRight:4,paddingLeft:4,marginLeft:2,marginRight:2,backgroundColor:"rgb(242,222,222)",color:"rgb(169,68,66)"},ctno2:{borderRadius:8,paddingTop:30,paddingBottom:30,paddingLeft:16,paddingRight:16,backgroundColor:"rgb(217,237,247)",color:"rgb(49,112,143)",textAlign:"center",fontSize:40}}}});