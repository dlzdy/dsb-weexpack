// { "framework": "Vue"} 

!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=406)}({4:function(e,t,n){var i=n(5),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./banner.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/banner",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=i})},40:function(e,t){e.exports={title:{width:750,height:100},item:{width:750,height:340,marginBottom:4},"item-img":{position:"absolute",left:110,top:20},"right-item-img":{position:"absolute",right:110,top:20},"benifit-img":{position:"absolute",right:5,top:160},"right-benifit-img":{position:"absolute",left:40,top:160},"small-item-container":{width:750},"small-item":{position:"absolute",width:373,height:230,flexDirection:"row"},"small-item-bg":{width:373,height:230},"small-item-img":{position:"absolute",left:12,top:12},"small-benifit-img":{position:"absolute",right:0,top:65}}},406:function(e,t,n){n(4);var i=n(53),o=n(40),r=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./scene.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/ab29c3d66e9a364fe3f4dbc35204fdcb",[],function(e,t,n){r(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=i,n.exports.style=o}),__weex_bootstrap__("@weex-component/ab29c3d66e9a364fe3f4dbc35204fdcb",void 0,void 0)},5:function(e,t){e.exports={type:"image",style:{width:function(){return this.width},height:function(){return this.height}},attr:{src:function(){return this.src},imageQuality:function(){return this.quality}},events:{click:"_clickHandler"}}},53:function(e,t){e.exports={type:"container",children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"container",classList:["small-item-container"],style:{height:function(){return 234*Math.round(this.smallItems.length/2)}},children:[{type:"container",repeat:function(){return this.smallItems},classList:["small-item"],style:{top:function(){return this.top},left:function(){return this.left}},children:[{type:"container",children:[{type:"image",classList:["small-item-bg"],attr:{src:function(){return this.smallItemBg}}}]},{type:"container",classList:["small-item-img"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_186},height:function(){return this.NUMBER_206},src:function(){return this.itemImg},href:function(){return this.sceneUrl}}}]},{type:"container",classList:["small-benifit-img"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_170},height:function(){return this.NUMBER_100},src:function(){return this.benefitImg},href:function(){return this.sceneUrl}}}]}]}]}]}}});