// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=396)}({34:function(e,t){e.exports={title:{width:750,height:100},"shop-list":{flexDirection:"row"},"shop-img-container":{marginRight:2},"sub-item":{position:"absolute",width:248,height:241,alignItems:"center",backgroundColor:"#ffffff"},"sub-item-bg":{width:248,height:86},"sub-item-title":{position:"absolute",left:0,top:0,width:248,textAlign:"center"},"industry-title":{fontSize:28,color:"#484848",textAlign:"center",marginTop:10,height:34},"industry-benefit":{fontSize:24,color:"#999999",textAlign:"center"}}},396:function(e,t,n){n(4);var r=n(47),i=n(34),s=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./category.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/83f763ab5ce73fc129732324dd21e14e",[],function(e,t,n){s(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i}),__weex_bootstrap__("@weex-component/83f763ab5ce73fc129732324dd21e14e",void 0,void 0)},4:function(e,t,n){var r=n(5),i=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./banner.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/banner",[],function(e,t,n){i(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r})},47:function(e,t){e.exports={type:"container",children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"container",classList:["item-container"],children:[{type:"container",repeat:function(){return this.items},style:{width:750,paddingBottom:14,backgroundColor:function(){return this.colour}},children:[{type:"container",children:[{type:"banner",attr:{width:function(){return this.NUMBER_750},height:function(){return this.NUMBER_237},src:function(){return this.bannerImg},href:function(){return this.bannerUrl}}}]},{type:"container",classList:["shop-list"],children:[{type:"container",repeat:function(){return this.shopList},classList:["shop-img-container"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_186},height:function(){return this.NUMBER_208},src:function(){return this.picUrl},href:function(){return this.shopUrl}}}]}]}]}]},{type:"container",classList:["sub-item-container"],style:{height:function(){return 244*Math.round(this.subItems.length/3)}},children:[{type:"container",repeat:function(){return this.subItems},classList:["sub-item"],style:{top:function(){return this.top},left:function(){return this.left}},children:[{type:"image",classList:["sub-item-bg"],attr:{src:function(){return this.subItemBg}}},{type:"container",classList:["sub-item-img"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_248},height:function(){return this.NUMBER_155},src:function(){return this.industryImg},href:function(){return this.industryUrl}}}]},{type:"container",classList:["sub-item-title"],children:[{type:"text",classList:["industry-title"],attr:{href:function(){return this.industryUrl},value:function(){return this.industryTitle}}},{type:"text",classList:["industry-benefit"],attr:{href:function(){return this.industryUrl},value:function(){return this.industryBenefit}}}]}]}]}]}},5:function(e,t){e.exports={type:"image",style:{width:function(){return this.width},height:function(){return this.height}},attr:{src:function(){return this.src},imageQuality:function(){return this.quality}},events:{click:"_clickHandler"}}}});