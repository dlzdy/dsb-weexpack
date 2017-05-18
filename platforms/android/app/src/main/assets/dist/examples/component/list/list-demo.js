// { "framework": "Vue"} 

!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=356)}({136:function(e,t){e.exports={type:"list",classList:["list"],attr:{loadmoreoffset:"2000"},children:[{type:"cell",append:"tree",classList:["cell"],events:{click:"oncellclick"},attr:{rownumber:function(){return this.id},scope:function(){return this.scopeValue},composite:function(){return this.composite}},repeat:function(){return this.shopList},children:[{type:"div",classList:["shopDiv"],children:[{type:"div",classList:["shopHeader"],style:{flexDirection:"row",overflow:"hidden"},children:[{type:"div",style:{flex:2,flexDirection:"row"},children:[{type:"div",children:[{type:"image",style:{width:60,height:60},attr:{src:function(){return this.PersonPhoto}}}]},{type:"div",style:{flexDirection:"column",marginLeft:5},children:[{type:"div",style:{marginTop:5},children:[{type:"text",style:{fontSize:20},attr:{value:function(){return this.PersonName}}}]},{type:"div",style:{marginTop:5},children:[{type:"text",style:{fontSize:20,color:"#cccccc"},attr:{value:function(){return this.PersonVisitTime}}}]}]}]},{type:"div",style:{flex:5,flexDirection:"row"},children:[{type:"div",style:{flexDirection:"row",marginLeft:10,marginTop:10},children:[{type:"div",children:[{type:"image",style:{width:20,height:20},attr:{src:"https://img.alicdn.com/tps/i4/TB1zkDeIFXXXXXrXVXX07tlTXXX-200-200.png_88x88xz.jpg"}}]},{type:"div",children:[{type:"text",style:{fontSize:20},attr:{value:"Hope"}}]}]},{type:"div",style:{position:"absolute",left:90,top:10,flexDirection:"row"},children:[{type:"div",children:[{type:"image",style:{width:20,height:20},attr:{src:"https://img.alicdn.com/tps/i2/TB1hRb1IXXXXXX3XVXXXQaP.pXX-87-87.jpeg"}}]},{type:"div",children:[{type:"text",style:{fontSize:20},attr:{value:"Mem"}}]}]},{type:"div",style:{position:"absolute",left:170,top:10,flexDirection:"row"},children:[{type:"div",children:[{type:"image",style:{width:20,height:20},attr:{src:"https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"}}]},{type:"div",children:[{type:"text",style:{fontSize:20},attr:{value:"auth"}}]}]},{type:"div",style:{position:"absolute",left:250,top:10,flexDirection:"row"},children:[{type:"div",children:[{type:"image",style:{width:20,height:20},attr:{src:"https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"}}]},{type:"div",children:[{type:"text",style:{fontSize:20},attr:{value:"Friend"}}]}]},{type:"div",style:{position:"absolute",left:330,top:10,flexDirection:"row"},children:[{type:"div",children:[{type:"image",style:{width:20,height:20},attr:{src:"https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"}}]},{type:"div",children:[{type:"text",style:{fontSize:20},attr:{value:"issue"}}]}]},{type:"div",style:{position:"absolute",left:410,top:10,flexDirection:"row"},children:[{type:"div",children:[{type:"image",style:{width:20,height:20},attr:{src:"https://gtms02.alicdn.com/tps/i2/TB11ZZfIVXXXXbMXFXXEDhGGXXX-32-32.png"}}]},{type:"div",children:[{type:"text",style:{fontSize:20},attr:{value:"super"}}]}]}]}]},{type:"div",classList:["shopBody"],style:{flexDirection:"column"},children:[{type:"div",classList:["descDiv"],style:{marginTop:10,marginLeft:10},children:[{type:"text",classList:["shopDesc"],style:{fontSize:25},attr:{value:function(){return this.shopDesc}}}]},{type:"div",style:{flexDirection:"row"},children:[{type:"div",classList:["imgDiv"],style:{flex:1,flexDirection:"column",margin:10},repeat:function(){return this.shopImgList},children:[{type:"div",children:[{type:"image",classList:["shopImg"],style:{width:function(){return this.shopImgWidth},height:function(){return this.shopImgHeight}},attr:{src:function(){return this.shopImg}}}]},{type:"div",style:{flex:1,marginTop:10,flexDirection:"row"},children:[{type:"div",style:{flex:1,justifyContent:"center",flexDirection:"row"},children:[{type:"div",children:[{type:"image",style:{width:20,height:20},attr:{src:"https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"}}]},{type:"div",style:{marginLeft:5},children:[{type:"text",style:{fontSize:20,textAlign:"center"},attr:{value:"Up"}}]}]},{type:"div",style:{flex:1,justifyContent:"center",flexDirection:"row"},children:[{type:"div",children:[{type:"image",style:{width:20,height:20},attr:{src:"https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"}}]},{type:"div",style:{marginLeft:5},children:[{type:"text",style:{fontSize:20,textAlign:"center"},attr:{value:"down"}}]}]}]}]}]}]},{type:"div",classList:["shopFooter"],style:{flexDirection:"row",marginTop:10,marginLeft:10,justifyContent:"flex-end"},children:[{type:"div",style:{marginRight:5},children:[{type:"image",classList:["shopLikeImg","smallImg"],attr:{src:function(){return this.shopLikeImg}}}]},{type:"div",style:{marginRight:15},children:[{type:"text",classList:["shopLikeText"],style:{fontSize:20},attr:{value:function(){return this.shopLikeText}}}]},{type:"div",style:{marginRight:5},children:[{type:"image",classList:["shopCommentImg","smallImg"],attr:{src:function(){return this.shopCommentImg}}}]},{type:"div",style:{marginRight:15},children:[{type:"text",classList:["shopCommentText"],style:{fontSize:20},attr:{value:function(){return this.shopCommentText}}}]},{type:"div",style:{marginRight:5},children:[{type:"image",classList:["shopLookImg","smallImg"],attr:{src:function(){return this.shopLookImg}}}]},{type:"div",style:{marginRight:15},children:[{type:"text",classList:["shopLookText"],style:{fontSize:20},attr:{value:function(){return this.shopLookText}}}]},{type:"div",style:{marginRight:5},children:[{type:"image",classList:["shareImg","smallImg"],attr:{src:function(){return this.shareImg}}}]},{type:"div",style:{marginRight:20},children:[{type:"text",classList:["shareText"],style:{fontSize:20},attr:{value:function(){return this.shareText}}}]}]}]}]},{type:"loading",classList:["refresh-view"],attr:{display:function(){return this.loading_display}},events:{loading:"onloading"},children:[{type:"text",classList:["refresh-arrow"],style:{textAlign:"center",color:"rgb(238,162,54)"},shown:function(){return"hide"===this.refresh_display},attr:{value:"Load more"}},{type:"loading-indicator",style:{height:60,width:60,color:"#3192e1"}}]}]}},356:function(e,t,i){var r=i(136),n=i(84),o=i(!function(){var e=new Error('Cannot find module "!!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./list-demo.we"');throw e.code="MODULE_NOT_FOUND",e}());__weex_define__("@weex-component/1a1726ac8c06461187857a9d378fa171",[],function(e,t,i){o(i,t,e),t.__esModule&&t.default&&(i.exports=t.default),i.exports.template=r,i.exports.style=n}),__weex_bootstrap__("@weex-component/1a1726ac8c06461187857a9d378fa171",void 0,void 0)},84:function(e,t){e.exports={flexRow:{flexDirection:"row"},flexColumn:{flexDirection:"column"},fixed:{position:"fixed",bottom:50,left:50,width:300,height:50,alignItems:"center",justifyContent:"center"},shopImg:{width:220,height:220},list:{flexDirection:"column",overflow:"hidden",width:750,height:1200,backgroundColor:"#dddddd"},cell:{backgroundColor:"#dddddd",flexDirection:"column",width:750},shopDiv:{flexDirection:"column",backgroundColor:"#ffffff",margin:5,padding:10,borderWidth:1,borderColor:"#cccccc",overflow:"visible"},shopRowList:{flexDirection:"column",borderWidth:1,borderColor:"#cccccc",overflow:"visible",margin:5,padding:10,backgroundColor:"#ffffff"},shopHeader:{flexDirection:"row",width:720},shopFooter:{flexDirection:"row",width:720},smallImg:{width:20,height:20},"refresh-view":{height:120,width:750,display:"flex",MsFlexAlign:"center",WebkitAlignItems:"center",WebkitBoxAlign:"center",alignItems:"center"}}}});