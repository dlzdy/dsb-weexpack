// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=403)}({107:function(e,t){e.exports={content:{color:"#353535",backgroundColor:"#666666",position:"absolute",top:0,left:0,right:0,bottom:0},refresh:{display:"flex",alignItems:"center",justifyContent:"center"},loading:{display:"flex",alignItems:"center",justifyContent:"center"}}},11:function(e,t){e.exports={type:"container",children:[{type:"container",shown:function(){return"row"===this.direction},style:{flexDirection:"row"},children:[{type:"container",repeat:function(){return this.ds},style:{width:function(){return this.width},height:function(){return this.height},marginLeft:function(){return this.space}},children:[{type:"banner",attr:{width:function(){return this.width},height:function(){return this.height},src:function(){return this.img},href:function(){return this.url}}}]}]},{type:"container",shown:function(){return"column"===this.direction},children:[{type:"container",repeat:function(){return this.ds},style:{width:function(){return this.width},height:function(){return this.height},marginTop:function(){return this.space}},children:[{type:"banner",attr:{width:function(){return this.width},height:function(){return this.height},src:function(){return this.img},href:function(){return this.url}}}]}]}]}},171:function(e,t){e.exports={type:"wxc-navpage",attr:{dataRole:"none",height:function(){return this.navBarHeight},backgroundColor:"#ff5898",title:"新风尚会场",titleColor:"white",rightItemSrc:"http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"},children:[{type:"scroller",classList:["content"],children:[{type:"refresh",classList:["refresh"],events:{refresh:"handleRefresh"},attr:{display:function(){return this.displayRefresh}},style:{flexDirection:"row"},children:[{type:"loading-indicator"},{type:"text",style:{marginLeft:36,color:"#eeeeee"},attr:{value:"下拉刷新..."}}]},{type:"headlines",shown:function(){return this.show0},attr:{ds:function(){return this.showData.header}},append:"tree"},{type:"category",shown:function(){return this.show0},attr:{ds:function(){return this.showData.category}},append:"tree"},{type:"coupon",shown:function(){return this.show1},attr:{ds:function(){return this.showData.coupon}},append:"tree"},{type:"goods",shown:function(){return this.show1},attr:{ds:function(){return this.showData.goods}},append:"tree"},{type:"resource",shown:function(){return this.show1},attr:{ds:function(){return this.showData.resource}},append:"tree"},{type:"scene",shown:function(){return this.show1},attr:{ds:function(){return this.showData.scene}},append:"tree"},{type:"match",shown:function(){return this.show2},attr:{ds:function(){return this.showData.match}},append:"tree"},{type:"brand",shown:function(){return this.show2},attr:{ds:function(){return this.showData.brand}},append:"tree"},{type:"loading",classList:["loading"],events:{loading:"handleLoading"},attr:{display:function(){return this.displayLoading}},children:[{type:"text",style:{color:"#eeeeee"},attr:{value:"加载更多..."}}]}]}]}},26:function(e,t){e.exports={type:"text",classList:["link"],shown:function(){return this.href},events:{click:"_clickHandler"},attr:{value:function(){return this.text}}}},29:function(e,t,n){var r=n(26),i=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./link.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/link",[],function(e,t,n){i(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r})},33:function(e,t){e.exports={title:{width:750,height:100},container:{marginBottom:4,backgroundColor:"#C0BABC"}}},34:function(e,t){e.exports={title:{width:750,height:100},"shop-list":{flexDirection:"row"},"shop-img-container":{marginRight:2},"sub-item":{position:"absolute",width:248,height:241,alignItems:"center",backgroundColor:"#ffffff"},"sub-item-bg":{width:248,height:86},"sub-item-title":{position:"absolute",left:0,top:0,width:248,textAlign:"center"},"industry-title":{fontSize:28,color:"#484848",textAlign:"center",marginTop:10,height:34},"industry-benefit":{fontSize:24,color:"#999999",textAlign:"center"}}},35:function(e,t){e.exports={title:{width:750,height:100},wrapper:{color:"#FF4550",width:750,height:230},"my-coupon":{width:180,height:39,position:"absolute",top:15,right:149},guides:{height:39,width:110,position:"absolute",top:15,right:32},lottery:{width:348,height:76,position:"absolute",top:132,right:70},info:{fontSize:18,position:"absolute",top:84,right:70},img:{width:750,height:230}}},36:function(e,t){e.exports={title:{width:750,height:100},slider:{height:652},pannel:{width:750,height:592,flexDirection:"row"},"middle-col":{marginLeft:4,marginRight:4,width:240,height:588}}},37:function(e,t){e.exports={banner:{width:750,height:782},"share-container":{position:"absolute",right:100,top:15,zIndex:100,fontSize:20,color:"#ffffff",backgroundColor:"#000000",borderRadius:17,width:110,height:35,justifyContent:"center",alignItems:"center"},"rule-container":{position:"absolute",right:22,top:15,zIndex:100,fontSize:20,color:"#ffffff",backgroundColor:"#000000",borderRadius:17,width:70,height:35,justifyContent:"center"},announce:{backgroundColor:"#f5f3f4",width:716,height:286,position:"absolute",bottom:17,left:17,borderRadius:5},"announce-hd":{width:700,height:90,marginTop:8,marginBottom:8,marginLeft:5,marginRight:5}}},38:function(e,t){e.exports={title:{width:750,height:100},"tm-banner":{bottom:4}}},39:function(e,t){e.exports={title:{width:750,height:100},"big-banner-container":{marginBottom:4}}},4:function(e,t,n){var r=n(5),i=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./banner.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/banner",[],function(e,t,n){i(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r})},40:function(e,t){e.exports={title:{width:750,height:100},item:{width:750,height:340,marginBottom:4},"item-img":{position:"absolute",left:110,top:20},"right-item-img":{position:"absolute",right:110,top:20},"benifit-img":{position:"absolute",right:5,top:160},"right-benifit-img":{position:"absolute",left:40,top:160},"small-item-container":{width:750},"small-item":{position:"absolute",width:373,height:230,flexDirection:"row"},"small-item-bg":{width:373,height:230},"small-item-img":{position:"absolute",left:12,top:12},"small-benifit-img":{position:"absolute",right:0,top:65}}},403:function(e,t,n){n(70),n(67),n(68),n(69),n(72),n(73),n(71),n(66);var r=n(171),i=n(107),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./main.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/5d56f77fe5dab922b8d389110703a9e0",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i}),__weex_bootstrap__("@weex-component/5d56f77fe5dab922b8d389110703a9e0",void 0,void 0)},46:function(e,t){e.exports={type:"container",classList:["container"],children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"container",style:{marginLeft:4,marginRight:4},children:[{type:"banners",attr:{ds:function(){return this.bannerItems},direction:"column",width:function(){return this.NUMBER_742},height:function(){return this.NUMBER_230},space:function(){return this.NUMBER_4}}}]}]}},47:function(e,t){e.exports={type:"container",children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"container",classList:["item-container"],children:[{type:"container",repeat:function(){return this.items},style:{width:750,paddingBottom:14,backgroundColor:function(){return this.colour}},children:[{type:"container",children:[{type:"banner",attr:{width:function(){return this.NUMBER_750},height:function(){return this.NUMBER_237},src:function(){return this.bannerImg},href:function(){return this.bannerUrl}}}]},{type:"container",classList:["shop-list"],children:[{type:"container",repeat:function(){return this.shopList},classList:["shop-img-container"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_186},height:function(){return this.NUMBER_208},src:function(){return this.picUrl},href:function(){return this.shopUrl}}}]}]}]}]},{type:"container",classList:["sub-item-container"],style:{height:function(){return 244*Math.round(this.subItems.length/3)}},children:[{type:"container",repeat:function(){return this.subItems},classList:["sub-item"],style:{top:function(){return this.top},left:function(){return this.left}},children:[{type:"image",classList:["sub-item-bg"],attr:{src:function(){return this.subItemBg}}},{type:"container",classList:["sub-item-img"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_248},height:function(){return this.NUMBER_155},src:function(){return this.industryImg},href:function(){return this.industryUrl}}}]},{type:"container",classList:["sub-item-title"],children:[{type:"text",classList:["industry-title"],attr:{href:function(){return this.industryUrl},value:function(){return this.industryTitle}}},{type:"text",classList:["industry-benefit"],attr:{href:function(){return this.industryUrl},value:function(){return this.industryBenefit}}}]}]}]}]}},48:function(e,t){e.exports={type:"container",children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"container",classList:["wrapper"],children:[{type:"image",classList:["img"],attr:{src:function(){return this.currentStatus}}},{type:"container",classList:["my-coupon"],events:{click:"handleClick"}},{type:"container",classList:["guides"],events:{click:"handleClick"}},{type:"container",classList:["lottery"],events:{click:"handleClick"}}]}]}},49:function(e,t){e.exports={type:"container",shown:function(){return!this.ds.isHide},children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"slider",classList:["slider"],attr:{showIndicators:"true",autoPlay:"true",interval:"3000"},children:[{type:"container",classList:["pannel"],repeat:function(){return this.ds.bannerItems},children:[{type:"container",children:[{type:"banner",style:{marginBottom:4},attr:{width:function(){return this.NUMBER_251},height:function(){return this.NUMBER_292},src:function(){return this.img1},href:function(){return this.url1}}},{type:"banner",attr:{width:function(){return this.NUMBER_251},height:function(){return this.NUMBER_292},src:function(){return this.img2},href:function(){return this.url2}}}]},{type:"container",classList:["middle-col"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_240},height:function(){return this.NUMBER_588},src:function(){return this.img3},href:function(){return this.url3}}}]},{type:"container",children:[{type:"banner",style:{marginBottom:4},attr:{width:function(){return this.NUMBER_251},height:function(){return this.NUMBER_292},src:function(){return this.img4},href:function(){return this.url4}}},{type:"banner",attr:{width:function(){return this.NUMBER_251},height:function(){return this.NUMBER_292},src:function(){return this.img5},href:function(){return this.url5}}}]}]},{type:"indicator",style:{position:"absolute",width:714,height:200,left:10,bottom:-80,itemSize:20,itemColor:"#999999",itemSelectedColor:"#000000"}}]}]}},5:function(e,t){e.exports={type:"image",style:{width:function(){return this.width},height:function(){return this.height}},attr:{src:function(){return this.src},imageQuality:function(){return this.quality}},events:{click:"_clickHandler"}}},50:function(e,t){e.exports={type:"container",classList:["container"],children:[{type:"image",classList:["banner"],attr:{src:function(){return this.ds.topBanner}}},{type:"container",classList:["rule-container"],children:[{type:"link",style:{fontSize:22,color:"#ffffff",textAlign:"center"},attr:{text:"帮助",href:function(){return this.ds.ruleLink}}}]},{type:"container",classList:["announce"],children:[{type:"image",classList:["announce-hd"],attr:{src:function(){return this.ds.announceHdBanner}}},{type:"banners",style:{marginLeft:6,marginRight:6},attr:{ds:function(){return this.ds.bannerItems},direction:"row",width:function(){return this.NUMBER_233},height:function(){return this.NUMBER_172},space:function(){return this.NUMBER_3}}}]}]}},51:function(e,t){e.exports={type:"container",children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"container",classList:["tm-banner"],shown:function(){return this.ds.isShowTmSpecBanner&&this.ds.tmSpecBanner&&this.isTM},children:[{type:"banner",attr:{width:function(){return this.NUMBER_750},height:function(){return this.NUMBER_200},src:function(){return this.ds.tmSpecBanner.img},href:function(){return this.ds.tmSpecBanner.url}}}]},{type:"container",repeat:function(){return this.ds.bannerItems},style:{flexDirection:"row",marginBottom:function(){return this.NUMBER_4}},children:[{type:"container",style:{marginRight:function(){return this.NUMBER_4}},children:[{type:"banner",attr:{width:function(){return this.NUMBER_373},height:function(){return this.NUMBER_240},src:function(){return this.leftImg},href:function(){return this.leftUrl}}}]},{type:"container",children:[{type:"banner",attr:{width:function(){return this.NUMBER_373},height:function(){return this.NUMBER_240},src:function(){return this.rightImg},href:function(){return this.rightUrl}}}]}]}]}},52:function(e,t){e.exports={type:"container",shown:function(){return!this.ds.isHide},children:[{type:"container",classList:["big-banner-container"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_750},height:function(){return this.NUMBER_200},src:function(){return this.ds.bigBannerImg},href:function(){return this.ds.bigBannerUrl}}}]},{type:"banners",attr:{ds:function(){return this.ds.smallBannerItems},width:function(){return this.NUMBER_373},height:function(){return this.NUMBER_224},direction:"row",space:function(){return this.NUMBER_4}}}]}},53:function(e,t){e.exports={type:"container",children:[{type:"image",shown:function(){return this.ds.floorTitle},classList:["title"],attr:{src:function(){return this.ds.floorTitle}}},{type:"container",classList:["small-item-container"],style:{height:function(){return 234*Math.round(this.smallItems.length/2)}},children:[{type:"container",repeat:function(){return this.smallItems},classList:["small-item"],style:{top:function(){return this.top},left:function(){return this.left}},children:[{type:"container",children:[{type:"image",classList:["small-item-bg"],attr:{src:function(){return this.smallItemBg}}}]},{type:"container",classList:["small-item-img"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_186},height:function(){return this.NUMBER_206},src:function(){return this.itemImg},href:function(){return this.sceneUrl}}}]},{type:"container",classList:["small-benifit-img"],children:[{type:"banner",attr:{width:function(){return this.NUMBER_170},height:function(){return this.NUMBER_100},src:function(){return this.benefitImg},href:function(){return this.sceneUrl}}}]}]}]}]}},6:function(e,t,n){n(4);var r=n(11),i=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./banners.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/banners",[],function(e,t,n){i(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r})},66:function(e,t,n){n(6);var r=n(46),i=n(33),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./brand.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/brand",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i})},67:function(e,t,n){n(4);var r=n(47),i=n(34),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./category.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/category",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i})},68:function(e,t,n){var r=n(48),i=n(35),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./coupon.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/coupon",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i})},69:function(e,t,n){n(4);var r=n(49),i=n(36),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./goods.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/goods",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i})},70:function(e,t,n){n(29),n(6);var r=n(50),i=n(37),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./headlines.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/headlines",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i})},71:function(e,t,n){n(4);var r=n(51),i=n(38),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./match.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/match",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i})},72:function(e,t,n){n(4),n(6);var r=n(52),i=n(39),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./resource.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/resource",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i})},73:function(e,t,n){n(4);var r=n(53),i=n(40),o=n(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./scene.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/scene",[],function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default),n.exports.template=r,n.exports.style=i})}});