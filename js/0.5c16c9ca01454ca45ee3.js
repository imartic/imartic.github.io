webpackJsonp([0],{142:function(t,e,o){o(162);var s=o(2)(o(148),o(170),"data-v-73b0ff39",null);t.exports=s.exports},148:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(3);o.n(s);e.default={data:function(){return{moveX:0,moveY:0,rotateY:0,rotateX:0}},computed:{position:function(){var t="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";return{top:this.moveY+"px",left:this.moveX+"px","-webkit-transform":t,"-ms-transform":t,transform:t}}},methods:{move:function(t){var e=s.Utils.dom.viewport(),o=e.width,i=e.height,a=s.Utils.event.position(t),r=a.top,n=a.left,v=i/2,p=o/2;this.moveX=(n-p)/p*-8,this.moveY=(r-v)/v*-8,this.rotateY=n/o*14*2-14,this.rotateX=-(r/i*14*2-14)}},mounted:function(){var t=this;this.$nextTick(function(){document.addEventListener("mousemove",t.move),document.addEventListener("touchmove",t.move)})},beforeDestroy:function(){document.removeEventListener("mousemove",this.move),document.removeEventListener("touchmove",this.move)}}},156:function(t,e,o){e=t.exports=o(137)(),e.push([t.i,".logo-container[data-v-73b0ff39]{width:250px;height:250px;-webkit-perspective:800px;perspective:800px;position:absolute;top:40%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.logo[data-v-73b0ff39]{position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.home-title[data-v-73b0ff39]{border:1px solid #bbb;margin-top:30px;font-size:36px;padding:7px}.home-subtitle[data-v-73b0ff39],.home-title[data-v-73b0ff39]{text-shadow:0 5px 10px #050505;-webkit-text-shadow:0 5px 10px #050505;-moz-text-shadow:0 5px 10px #050505}.home-subtitle[data-v-73b0ff39]{margin-top:10px;font-size:16px;font-weight:300}.home-img[data-v-73b0ff39]{border-radius:50%;box-shadow:0 5px 10px #050505;-webkit-box-shadow:0 5px 10px #050505;-moz-box-shadow:0 5px 10px #050505;-webkit-filter:grayscale(100%);filter:grayscale(100%)}.more[data-v-73b0ff39]{font-weight:300}",""])},162:function(t,e,o){var s=o(156);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);o(138)("10568462",s,!0)},164:function(t,e,o){t.exports=o.p+"img/me.dbd6414.jpg"},170:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo-container non-selectable"},[s("div",{staticClass:"logo",style:t.position},[s("img",{staticClass:"home-img",attrs:{src:o(164),height:"250px"}}),t._v(" "),s("div",{staticClass:"text-center"},[s("div",{staticClass:"home-title"},[t._v("IVAN MARTIĆ")]),t._v(" "),s("div",{staticClass:"home-subtitle"},[t._v("SOFTWARE & WEB DEVELOPER")]),t._v(" "),s("br"),s("br"),t._v(" "),s("router-link",{staticClass:"more",attrs:{to:"/about"}},[s("button",{staticClass:"grey clear",staticStyle:{"font-weight":"400"}},[t._v("\n          More about me\n          "),s("i",{staticClass:"on-right"},[t._v("chevron_right")])])])],1)])])},staticRenderFns:[]}}});