// { "framework": "Vue"} 

!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=352)}({132:function(t,e){t.exports={type:"div",children:[{type:"div",children:[{type:"text",style:{fontSize:40},attr:{value:function(){return"oninput: "+this.txtInput}}},{type:"text",style:{fontSize:40},attr:{value:function(){return"onchange: "+this.txtChange}}},{type:"text",style:{fontSize:40},attr:{value:function(){return"onreturntype: "+this.txtReturnType}}},{type:"text",style:{fontSize:40},attr:{value:function(){return"onrange: "+this.txtRange}}}]},{type:"scroller",children:[{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input type = text"}}]},{type:"input",attr:{type:"text",placeholder:"Input Text",autofocus:"true",value:""},classList:["input"],events:{change:"onchange",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input type = password"}}]},{type:"input",attr:{type:"password",placeholder:"Input Password"},classList:["input"],events:{change:"onchange",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input type = url"}}]},{type:"input",attr:{type:"url",placeholder:"Input URL"},classList:["input"],events:{change:"onchange",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input type = email"}}]},{type:"input",attr:{type:"email",placeholder:"Input Email"},classList:["input"],events:{change:"onchange",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input type = tel"}}]},{type:"input",attr:{type:"tel",placeholder:"Input Tel"},classList:["input"],events:{change:"onchange",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input type = time"}}]},{type:"input",attr:{type:"time",placeholder:"Input Time"},classList:["input"],events:{change:"onchange",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input type = date"}}]},{type:"input",attr:{type:"date",placeholder:"Input Date",max:"2017-12-12",min:"2015-01-01"},classList:["input"],events:{change:"onchange",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input return-key-type = default"}}]},{type:"input",attr:{type:"text",placeholder:"please input",returnKeyType:"default"},classList:["input"],events:{change:"onchange",return:"onreturn",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input return-key-type = go"}}]},{type:"input",attr:{type:"text",placeholder:"please input",returnKeyType:"go"},classList:["input"],events:{change:"onchange",return:"onreturn",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input return-key-type = next"}}]},{type:"input",attr:{type:"text",placeholder:"please input",returnKeyType:"next"},classList:["input"],events:{change:"onchange",return:"onreturn",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input return-key-type = search"}}]},{type:"input",attr:{type:"text",placeholder:"please input",returnKeyType:"search"},classList:["input"],events:{change:"onchange",return:"onreturn",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input return-key-type = send"}}]},{type:"input",attr:{type:"text",placeholder:"please input",returnKeyType:"send"},classList:["input"],events:{change:"onchange",return:"onreturn",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input return-key-type = done"}}]},{type:"input",attr:{type:"text",placeholder:"please input",returnKeyType:"done"},classList:["input"],events:{change:"onchange",return:"onreturn",input:"oninput"}}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"function focus() & blur()"}}]},{type:"div",style:{flexDirection:"row",marginBottom:16,justifyContent:"space-between"},children:[{type:"text",classList:["button"],attr:{value:"Focus",type:"primary"},events:{click:"focus"}},{type:"text",classList:["button"],attr:{value:"Blur",type:"primary"},events:{click:"blur"}}]},{type:"input",attr:{type:"text",placeholder:"Input1",value:""},classList:["input"],id:"input1"}]},{type:"div",children:[{type:"div",style:{backgroundColor:"#286090"},children:[{type:"text",classList:["title"],style:{height:80,padding:20,color:"#FFFFFF"},attr:{value:"input selection"}}]},{type:"div",style:{flexDirection:"row",marginBottom:16,justifyContent:"space-between"},children:[{type:"text",classList:["button"],attr:{value:"setRange",type:"primary"},events:{click:"setRange"}},{type:"text",classList:["button"],attr:{value:"getRange",type:"primary"},events:{click:"getRange"}}]},{type:"input",attr:{type:"text",placeholder:"please input",value:"123456789"},id:"inputselection",classList:["input"],events:{change:"onchange",return:"onreturn",input:"oninput"}}]}]}]}},352:function(t,e,n){var i=n(132),r=n(80),p=n(!function(){var t=new Error('Cannot find module "!!../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/script.js!../../../node_modules/_babel-loader?presets[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&presets=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-preset-es2015&plugins[]=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&plugins=E:\\work_study\\weex\\dsb-weexpack\\node_modules\\_babel-plugin-transform-runtime&comments=false!../../../node_modules/_weex-loader@0.4.4@weex-loader/lib/extract.js?index=0&type=scripts!./input-demo.we"');throw t.code="MODULE_NOT_FOUND",t}());__weex_define__("@weex-component/c19dcc8ea05b108558a412a21684c301",[],function(t,e,n){p(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=i,n.exports.style=r}),__weex_bootstrap__("@weex-component/c19dcc8ea05b108558a412a21684c301",void 0,void 0)},80:function(t,e){t.exports={input:{fontSize:60,height:80,width:750},button:{fontSize:36,width:200,color:"#41B883",textAlign:"center",paddingTop:10,paddingBottom:10,borderWidth:2,borderStyle:"solid",marginRight:20,borderColor:"rgb(162,217,192)",backgroundColor:"rgba(162,217,192,0.2)"}}}});