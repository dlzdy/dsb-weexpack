// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=399)}({36:function(e,t){e.exports={title:{width:750,height:100},slider:{height:652},pannel:{width:750,height:592,flexDirection:"row"},"middle-col":{marginLeft:4,marginRight:4,width:240,height:588}}},399:function(e,t,n){n(4);var r=n(49),i=n(36),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./goods.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/cc267d95fd6d8c15ecf62d226c7e0750",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i}),__weex_bootstrap__("@weex-component/cc267d95fd6d8c15ecf62d226c7e0750",void 0,void 0)},4:function(e,t,n){var r=n(5),i=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./banner.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/banner",[],function(e,t,n){i(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r})},49:function(e,t){e.exports={type:"container",shown:function(){return!this.ds.isHide},children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"slider",classList:["slider"],attr:{showIndicators:"true",autoPlay:"true",interval:"3000"},children:[{type:"container",classList:["pannel"],repeat:function(){return this.ds.bannerItems},children:[{type:"container",children:[{type:"banner",style:{marginBottom:4},attr:{width:function(){return this.NUMBER_251},height:function(){return this.NUMBER_292},src:function(){return this.img1},href:function(){return this.url1}}},{type:"banner",attr:{width:function(){return this.NUMBER_251},height:function(){return this.NUMBER_292},src:function(){return this.img2},href:function(){return this.url2}}}]},{type:"container",classList:["middle-col"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_240},height:function(){return this.NUMBER_588},src:function(){return this.img3},href:function(){return this.url3}}}]},{type:"container",children:[{type:"banner",style:{marginBottom:4},attr:{width:function(){return this.NUMBER_251},height:function(){return this.NUMBER_292},src:function(){return this.img4},href:function(){return this.url4}}},{type:"banner",attr:{width:function(){return this.NUMBER_251},height:function(){return this.NUMBER_292},src:function(){return this.img5},href:function(){return this.url5}}}]}]},{type:"indicator",style:{position:"absolute",width:714,height:200,left:10,bottom:-80,itemSize:20,itemColor:"#999999",itemSelectedColor:"#000000"}}]}]}},5:function(e,t){e.exports={type:"image",style:{width:function(){return this.width},height:function(){return this.height}},attr:{src:function(){return this.src},imageQuality:function(){return this.quality}},events:{click:"_clickHandler"}}}});