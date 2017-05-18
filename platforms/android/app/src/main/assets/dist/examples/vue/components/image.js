// { "framework": "Vue"} 

!function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=439)}({0:function(t,e,i){var r,o,a=[];a.push(i(2)),r=i(1);var n=i(3);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\panel.vue",o.render=n.render,o.staticRenderFns=n.staticRenderFns,o._scopeId="data-v-188d5d14",o.style=o.style||{},a.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,a),t.exports=r},1:function(t,e){t.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},12:function(t,e,i){var r,o,a=[];a.push(i(14)),r=i(13);var n=i(15);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\include\\tip.vue",o.render=n.render,o.staticRenderFns=n.staticRenderFns,o._scopeId="data-v-131a2e2b",o.style=o.style||{},a.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,a),t.exports=r},13:function(t,e){t.exports={props:{type:{default:"success"},value:{default:""}}}},14:function(t,e){t.exports={tip:{paddingLeft:36,paddingRight:36,paddingTop:36,paddingBottom:36,borderRadius:10},"tip-txt":{fontSize:28},"tip-success":{backgroundColor:"#dff0d8",borderColor:"#d6e9c6"},"tip-txt-success":{color:"#3c763d"},"tip-info":{backgroundColor:"#d9edf7",borderColor:"#bce8f1"},"tip-txt-info":{color:"#31708f"},"tip-warning":{backgroundColor:"#fcf8e3",borderColor:"#faebcc"},"tip-txt-warning":{color:"#8a6d3b"},"tip-danger":{backgroundColor:"#f2dede",borderColor:"#ebccd1"},"tip-txt-danger":{color:"#a94442"}}},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["tip","tip-"+t.type]},[i("text",{class:["tip-txt","tip-txt-"+t.type]},[t._v(t._s(t.value))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},2:function(t,e){t.exports={panel:{marginBottom:20,backgroundColor:"#ffffff",borderColor:"#dddddd",borderWidth:1},"panel-primary":{borderColor:"rgb(40,96,144)"},"panel-success":{borderColor:"rgb(76,174,76)"},"panel-info":{borderColor:"rgb(70,184,218)"},"panel-warning":{borderColor:"rgb(238,162,54)"},"panel-danger":{borderColor:"rgb(212,63,58)"},"panel-header":{backgroundColor:"#f5f5f5",fontSize:40,color:"#333333"},"panel-header-primary":{backgroundColor:"rgb(40,96,144)",color:"#ffffff"},"panel-header-success":{backgroundColor:"rgb(92,184,92)",color:"#ffffff"},"panel-header-info":{backgroundColor:"rgb(91,192,222)",color:"#ffffff"},"panel-header-warning":{backgroundColor:"rgb(240,173,78)",color:"#ffffff"},"panel-header-danger":{backgroundColor:"rgb(217,83,79)",color:"#ffffff"},"panel-body":{paddingLeft:12,paddingRight:12,paddingTop:20,paddingBottom:20}}},202:function(t,e,i){t.exports={data:function(){return{img:"//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg"}},components:{panel:i(0),tip:i(12)}}},255:function(t,e){t.exports={img:{marginBottom:20}}},294:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroller",[i("panel",{attrs:{title:"width x height",type:"primary"}},[i("tip",{staticStyle:{marginBottom:"20px"},attrs:{type:"warning",value:"Weex screen width is 750"}}),i("div",{staticStyle:{flexDirection:"row"}},[i("image",{staticClass:["img"],staticStyle:{width:"300px",height:"300px"},attrs:{src:t.img}}),i("image",{staticClass:["img"],staticStyle:{width:"200px",height:"200px"},attrs:{src:t.img}}),i("image",{staticClass:["img"],staticStyle:{width:"50px",height:"50px"},attrs:{src:t.img}})])],1),i("panel",{attrs:{title:"GIF Animation",type:"primary"}},[i("tip",{staticStyle:{marginBottom:"20px"},attrs:{type:"warning",value:"Depanding on Native ImageSDK"}}),i("div",{staticStyle:{flexDirection:"row"}},[i("image",{staticClass:["img"],staticStyle:{width:"96px",height:"96px"},attrs:{src:"https://gtd.alicdn.com/tps/i4/T1HcvHXd4nXXb6ROYh-48-48.gif"}}),i("image",{staticClass:["img"],staticStyle:{width:"68px",height:"68px",marginLeft:"20px"},attrs:{src:"https://gw.alicdn.com/tps/TB1El.mKXXXXXXyapXXXXXXXXXX-34-34.gif"}})])],1),i("panel",{attrs:{title:"Base64",type:"primary"}},[i("tip",{staticStyle:{marginBottom:"20px"},attrs:{type:"warning",value:"Depanding on Native ImageSDK"}}),i("div",{staticStyle:{flexDirection:"row"}},[i("image",{staticClass:["img"],staticStyle:{width:"96px",height:"96px"},attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAO1QTFRFhomSb3J8XGBrdnqDgYWNlJefV1tmfoGKU1diT1NfgISNgoWOYmZwio2Vi4+Wc3eAkJObZGhzUlZiaGt2U1djfYCKZGdyhYiQeHyFio6VgYWOVVllbHB6XWFsY2ZxaWx3jZCYXmFsfYCJcnZ/UVVham54V1tng4aPb3N8WV1pX2JtZWl0YWVvVlpmiYyUWVxohomRd3uEdHiBeX2GZ2t1hIeQVFhkf4OMbnJ8fYGKdnqEb3N9kJScY2dycnaAjpKZdHeBjpKajI+Yc3eBhYiRf4KLXmFtio6Wi4+XjZCZkJSbkZScjI+XlJifTlJe+rAZcwAAAZBJREFUeNp0lOeWgjAQhSdUBQRRbFjX7tpW3XUt23tL3v9xNigJIHh/zRk+5iR3ZgIkULWmwgv+A7VWDWWBR/nSt2gLUzIVbLH1lo8RRW1wEfqxPtCKUaKTMUhURuUhTIi6Q07l6LuAEFdpEld6tWNEx00CKKJ3jsR1xSHJcj4bB+LmkpxT49Yj8mqQUVBBciUk8ITepESJ+5AqY1+uwny5IjDPcADoN0BIwjLOsjKZOewtbi/9fvi338a44CetIai2H/cokPLj9tfEj2wVzD4rIWMlfpu+CXc5Pw4qh5X7AUw4gZIswUENGT8lAN1fMBVeAxIIxYR3Nin0imOe52emdxkyP8aY+0S9Y2d63cNoxvACRTaeI70slst+cjYCAnXmuuS1RKKmy1hKBX0hzaC3KOsxsmz2Ir2NzMcEbVCo+cf5oDOWOzNAucpxxoglnZlT1+KzXk4kymKwL4ttN+73dhHeuWV85zLL073Vw3v7MdDuE3a/JRrCmqwFQ2yV8gmvg/d+aPCMH0GLvB//AgwAo1MTpxsaxVoAAAAASUVORK5CYII="}}),i("image",{staticClass:["img"],staticStyle:{width:"68px",height:"68px",marginLeft:"20px"},attrs:{src:"data:image/gif;base64,R0lGODlhIgAiANU7AMvLy83Nzdra2srKysnJyejo6MbGxtzc3M7Ozuzs7NTU1N3d3fz8/NfX1/j4+Ovr6+/v79DQ0Obm5v39/d/f3/f398/Pz9vb2+np6fn5+f7+/tXV1fX19dnZ2erq6tHR0fb29sjIyMfHx+Li4vLy8u7u7ufn5/r6+uPj49bW1tPT09LS0sTExPT09ODg4O3t7eHh4eTk5MXFxd7e3vHx8fPz8/Dw8OXl5djY2P///8zMzP///wAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0QxODlDNENEOEQxMUUzOEIzM0I1ODVGNjU1MjBBQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0QxODlDNUNEOEQxMUUzOEIzM0I1ODVGNjU1MjBBQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDRDE4OUMyQ0Q4RDExRTM4QjMzQjU4NUY2NTUyMEFCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDRDE4OUMzQ0Q4RDExRTM4QjMzQjU4NUY2NTUyMEFCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQAAOwAsAAAAACIAIgAABv/AnXBIFDIEnxmoyGw6hw6LTrdKPK9PhmI6lWC/xQN3agWDMWNdhDTJmZ+gS1oXUDUoD8dbOHk05oAIHS8aYDRbgIlTDTVXGiiKkVwFTgwdkpg6GE1ymZIRJUUjnpkURBCkmQJDDBueAQGJACEAOqtCCaQhBgOAAxEAAAtCGQKeBAAIyGkiFzk3Ii64UpghCg45EstTAAYQOS0DMUKjmLMPOTkVAQRc3d8cAZQ7YpgDAzbpHDrt3AYlOTggeCDEmL0B3wLyc+ctBwgEHgpmupdwXz8dAGTAC2BCCIWJBACqYzfGwIEcHkSM21EgFiYRC9I9uDcm2IoAAGAIaYFIEgBkAh8UBJvTbUCAYUIkkDLAwiggWLagREiF6ZaQAlQlIR3SKeucAJuITLjkNc2CE0yOlOWiIsOTAgjKNnB7pYKLuKQimJhgxkEBJC7nWFBwwAPaPTs0kJBwIMWGDSkaHECRoMKTIAAh+QQFAAA7ACwPAA0AEgAJAAAGRMCdUKcTGo3E4jF5RDKHSaUzCdtFn9ar5IrVBUQsA+JBDBkMISuSIJAsdgkAgFIojHaDpm3nOJKEFQFpTTsgUi+EiUJBACH5BAUAADsALA8AEQASAAgAAAYfQJ1wSCzqEA+jcmh5LZeWxFOJ8EyVkqsRpi0uukRBEAAh+QQFAAA7ACwPABEAEgAIAAAGWcCdcEgUBkQsAzFkMISKO4JAskAkAABKoTDaDYYAgy3nQHgGA1IuVwk8hQAZJAfSmQaE17pNIBoOOR4iMTsiC2sPaERYKwEAcAQfClhQYQMBfiyXUDsBmDtBACH5BAUAADsALA8ADQASAAkAAAZRwJ1wSBwCAMVdYJkMhGSiYYDAYhmSIVyJQnDtCApTYXY0yiC51iAGCD1yucrUaEBzAoXBwAbnfOklOX4PemiCf0QQOyCJQhw6BEk7d0MlkpdBACH5BAUAADsALBAADQAQAAQAAAYmwN0uEBAajyGAMWQYHIW6QQQA0O0ACILyKLrkbqLQzpGTEJ6GYxAAIfkEBQAAOwAsEAANABAABAAABiTA3U6nExqPgKIwQDwuQzKRLrBjsQxKYwhXohAIO9ODAnDKjkEAIfkEBQAAOwAsDwANABIACQAABkPAnXBIHOp0xR0yqTwum86k8wiDTo1TnSQbFeoCIpYB8TiGDIaQ0kgQSBa7BABAKRRGu0HRtnMQSUIVAWpJIE8vTIlBACH5BAUAADsALA8AEQASAAgAAAYfQJ1wSCzqEA+jcmh5LZeWxFOJ8EyVkqsRpi0uukRBEAAh+QQFAAA7ACwPABEAEgAIAAAGWcCdcEgUBkQsAzFkMISKO4JAskAkAABKoTDaDYYAgy3nQHgGA1IuVwk8hQAZJAfSmQaE17pNIBoOOR4iMTsiC2sPaERYKwEAcAQfClhQYQMBfiyXUDsBmDtBACH5BAUAADsALA8ADQASAAkAAAZQwJ1wSBwCAMVdICkMhGSiYYDAYhmSIVyJQnDtCArTg3I0yiC51iAGCD1yucrUaEBzAoXBwAbnfOklOX4PemiCf0QQOyCJQhw6BEx3QyVMlkEAIfkEBWQAOwAsEAANABAABAAABibA3S4QEBqPIYAxZBgchbpBBADQ7QAIgvIouuRuotDOkZMQnoZjEAA7"}})])],1),i("panel",{attrs:{title:"resize",type:"primary"}},[i("panel",{attrs:{title:"resize=stretch(default) 600 x 200 "}},[i("image",{staticClass:["img"],staticStyle:{width:"600px",height:"200px",borderStyle:"solid",borderWidth:"1px",borderColor:"#333"},attrs:{src:t.img,resize:"stretch"}})]),i("panel",{attrs:{title:"resize=contain 600 x 200 "}},[i("image",{staticClass:["img"],staticStyle:{width:"600px",height:"200px",borderStyle:"solid",borderWidth:"1px",borderColor:"#333"},attrs:{src:t.img,resize:"contain"}})]),i("panel",{attrs:{title:"resize=cover 600 x 200"}},[i("image",{staticClass:["img"],staticStyle:{width:"600px",height:"200px",borderStyle:"solid",borderWidth:"1px",borderColor:"#333"},attrs:{src:t.img,resize:"cover"}})])],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},3:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["panel","panel-"+t.type],style:{borderWidth:t.border}},[i("text",{class:["panel-header","panel-header-"+t.type],style:{paddingTop:t.paddingHead,paddingBottom:t.paddingHead,paddingLeft:1.5*t.paddingHead,paddingRight:1.5*t.paddingHead}},[t._v(t._s(t.title))]),i("div",{class:["panel-body","panel-body-"+t.type],style:{paddingTop:t.paddingBody,paddingBottom:t.paddingBody,paddingLeft:1.5*t.paddingBody,paddingRight:1.5*t.paddingBody}},[t._t("default")],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},439:function(t,e,i){var r,o,a=[];a.push(i(255)),r=i(202);var n=i(294);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="E:\\work_study\\weex\\dsb-weexpack\\src\\examples\\vue\\components\\image.vue",o.render=n.render,o.staticRenderFns=n.staticRenderFns,o._scopeId="data-v-0b2a3501",o.style=o.style||{},a.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,a),t.exports=r,t.exports.el="true",new Vue(t.exports)}});