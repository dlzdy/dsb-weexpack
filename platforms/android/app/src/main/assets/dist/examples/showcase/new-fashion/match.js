// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=404)}({38:function(e,t){e.exports={title:{width:750,height:100},"tm-banner":{bottom:4}}},4:function(e,t,n){var r=n(5),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./banner.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/banner",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r})},404:function(e,t,n){n(4);var r=n(51),o=n(38),i=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./match.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/8602d6d4eb984a3214435ba4a051f4d0",[],function(e,t,n){i(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=o}),__weex_bootstrap__("@weex-component/8602d6d4eb984a3214435ba4a051f4d0",void 0,void 0)},5:function(e,t){e.exports={type:"image",style:{width:function(){return this.width},height:function(){return this.height}},attr:{src:function(){return this.src},imageQuality:function(){return this.quality}},events:{click:"_clickHandler"}}},51:function(e,t){e.exports={type:"container",children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"container",classList:["tm-banner"],shown:function(){return this.ds.isShowTmSpecBanner&&this.ds.tmSpecBanner&&this.isTM},children:[{type:"banner",attr:{width:function(){return this.NUMBER_750},height:function(){return this.NUMBER_200},src:function(){return this.ds.tmSpecBanner.img},href:function(){return this.ds.tmSpecBanner.url}}}]},{type:"container",repeat:function(){return this.ds.bannerItems},style:{flexDirection:"row",marginBottom:function(){return this.NUMBER_4}},children:[{type:"container",style:{marginRight:function(){return this.NUMBER_4}},children:[{type:"banner",attr:{width:function(){return this.NUMBER_373},height:function(){return this.NUMBER_240},src:function(){return this.leftImg},href:function(){return this.leftUrl}}}]},{type:"container",children:[{type:"banner",attr:{width:function(){return this.NUMBER_373},height:function(){return this.NUMBER_240},src:function(){return this.rightImg},href:function(){return this.rightUrl}}}]}]}]}}});