// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=394)}({11:function(e,t){e.exports={type:"container",children:[{type:"container",shown:function(){return"row"===this.direction},style:{flexDirection:"row"},children:[{type:"container",repeat:function(){return this.ds},style:{width:function(){return this.width},height:function(){return this.height},marginLeft:function(){return this.space}},children:[{type:"banner",attr:{width:function(){return this.width},height:function(){return this.height},src:function(){return this.img},href:function(){return this.url}}}]}]},{type:"container",shown:function(){return"column"===this.direction},children:[{type:"container",repeat:function(){return this.ds},style:{width:function(){return this.width},height:function(){return this.height},marginTop:function(){return this.space}},children:[{type:"banner",attr:{width:function(){return this.width},height:function(){return this.height},src:function(){return this.img},href:function(){return this.url}}}]}]}]}},394:function(e,t,n){n(4);var r=n(11),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./banners.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/6f5776b2c8ef833548022dec095d8112",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r}),__weex_bootstrap__("@weex-component/6f5776b2c8ef833548022dec095d8112",void 0,void 0)},4:function(e,t,n){var r=n(5),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./banner.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/banner",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r})},5:function(e,t){e.exports={type:"image",style:{width:function(){return this.width},height:function(){return this.height}},attr:{src:function(){return this.src},imageQuality:function(){return this.quality}},events:{click:"_clickHandler"}}}});