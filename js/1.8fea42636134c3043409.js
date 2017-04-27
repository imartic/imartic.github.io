webpackJsonp([1],{436:function(t,e,o){o(457);var a=o(88)(o(442),o(465),"data-v-53f92474",null);t.exports=a.exports},442:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(89),i=(o.n(a),o(460));e.default={data:function(){return{moveX:0,moveY:0,rotateY:0,rotateX:0,about:"I'm a Software and Web Developer and fresh graduate of Telematics with passion for coding and design. I have over 1 year professional experience as a Software Developer developing mainly for desktop, but have also worked on several web-based projects. Lately I'm focusing on Front-end web development and learning about the latest frameworks like Vue and React. When I'm not coding, I try to do some design work and sports.",getInTouch:'If you want to get in touch with me, feel free to \n             <a href="mailto:ivan.martic.ri@gmail.com?Subject=Hello!">send me a mail</a>.',techIUse:["C#","MS SQL Server","HTML","CSS","JavaScript","jQuery","Vue.js","GIT","TFS"],langsISpeak:["English","German","Croatian"],cv_langs:[{text:"English",value:"en"},{text:"German",value:"de"},{text:"Croatian",value:"hr"}],cv_lang:"en"}},computed:{position:function(){var t="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";return{top:this.moveY+"px",left:this.moveX+"px","-webkit-transform":t,"-ms-transform":t,transform:t}}},methods:{move:function(t){var e=a.Utils.dom.viewport(),o=e.width,i=e.height,n=a.Utils.event.position(t),s=n.top,r=n.left,l=i/2,c=o/2;this.moveX=(r-c)/c*-.2,this.moveY=(s-l)/l*-.2,this.rotateY=r/o*1.5*2-1.5,this.rotateX=-(s/i*1.5*2-1.5)},viewCV:function(){this.$refs.cvModal.close(),window.open(i)}},mounted:function(){var t=this;this.$nextTick(function(){document.addEventListener("mousemove",t.move),document.addEventListener("touchmove",t.move)})},beforeDestroy:function(){document.removeEventListener("mousemove",this.move),document.removeEventListener("touchmove",this.move)}}},451:function(t,e,o){e=t.exports=o(434)(),e.push([t.i,".logo-container[data-v-53f92474]{width:70%;height:50%;-webkit-perspective:800px;perspective:800px;position:absolute;top:45%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.logo[data-v-53f92474]{position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.home-title[data-v-53f92474]{text-align:center;border:1px solid #bbb;font-size:36px;padding:7px}.home-subtitle[data-v-53f92474],.home-title[data-v-53f92474]{text-shadow:0 5px 10px #050505;-webkit-text-shadow:0 5px 10px #050505;-moz-text-shadow:0 5px 10px #050505}.home-subtitle[data-v-53f92474]{color:#ddd;margin-top:15px;margin-bottom:25px;font-size:17px;font-weight:300}.tech-section[data-v-53f92474]{margin-top:50px}.lang-section[data-v-53f92474]{margin-top:20px}.tech-item[data-v-53f92474]{border:1px solid #bbb;border-radius:0;color:#bbb;font-size:17px;padding:4px 8px;margin:7px 7px 0 0;display:inline-block}.about-footer[data-v-53f92474]{margin-top:80px;text-align:center}.cv-btn[data-v-53f92474]:active,.cv-btn[data-v-53f92474]:focus{color:#14151a!important}.close-modal-cv i[data-v-53f92474]{font-size:30px}.close-modal-cv[data-v-53f92474]{color:#777;position:absolute;top:12px;right:0}.close-modal-cv[data-v-53f92474]:hover{color:#eee!important}.modal-title-cv[data-v-53f92474]{font-weight:300;margin-top:40px;margin-bottom:20px}.info-divider[data-v-53f92474]{width:200px;border:0;height:1px;background-image:linear-gradient(90deg,rgba(20,20,25,0),rgba(50,50,55,.75),rgba(20,20,25,0));margin-bottom:30px}.cv-list[data-v-53f92474]{border:none;padding-left:30px}.cv-confirm-btn[data-v-53f92474]{margin-top:50px}",""])},457:function(t,e,o){var a=o(451);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(435)("736e2a34",a,!0)},460:function(t,e,o){t.exports=o.p+"IvanMarticCV_en.pdf"},465:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo-container non-selectable"},[o("div",{staticClass:"logo",style:t.position},[o("div",{staticClass:"home-title"},[t._v("About me")]),t._v(" "),o("div",{staticClass:"home-subtitle"},[o("p",[t._v(t._s(t.about))]),t._v(" "),o("div",{domProps:{innerHTML:t._s(t.getInTouch)}}),t._v(" "),o("div",{staticClass:"tech-section"},[o("div",[t._v("Some technologies I use:")]),t._v(" "),t._l(t.techIUse,function(e){return o("div",{staticClass:"tech-item"},[t._v(t._s(e))])})],2),t._v(" "),o("div",{staticClass:"lang-section"},[o("div",[t._v("Languages I speak:")]),t._v(" "),t._l(t.langsISpeak,function(e){return o("div",{staticClass:"tech-item"},[t._v(t._s(e))])})],2),t._v(" "),o("div",{staticClass:"about-footer"},[o("button",{staticClass:"cv-btn clear grey outline",on:{click:function(e){t.$refs.cvModal.toggle()}}},[o("i",{staticClass:"on-left"},[t._v("open_in_new")]),t._v("\n          View my CV\n        ")])])]),t._v(" "),o("q-modal",{ref:"cvModal",staticClass:"full-modal minimized",attrs:{"content-css":{width:"460px",height:"470px"}}},[o("q-layout",[o("div",{staticClass:"layout-view"},[o("button",{staticClass:"close-modal-cv text-shadow",on:{click:function(e){t.$refs.cvModal.toggle()}}},[o("i",[t._v("close")])]),t._v(" "),o("div",{staticClass:"layout-padding text-center"},[o("h5",{staticClass:"modal-title-cv text-shadow"},[t._v("Choose language of CV")]),t._v(" "),o("hr",{staticClass:"info-divider"}),t._v(" "),o("div",{staticClass:"list cv-list"},t._l(t.cv_langs,function(e){return o("label",{staticClass:"item text-shadow"},[o("div",{staticClass:"item-primary"},[o("q-radio",{attrs:{disable:"en"!=e.value,val:e.value},model:{value:t.cv_lang,callback:function(e){t.cv_lang=e},expression:"cv_lang"}})],1),t._v(" "),o("div",{staticClass:"item-content"},[t._v("\n                        "+t._s(e.text)+"\n                      ")])])})),t._v(" "),o("button",{staticClass:"cv-confirm-btn clear grey outline",on:{click:function(e){t.viewCV()}}},[o("i",{staticClass:"on-left"},[t._v("open_in_new")]),t._v("\n                    Open\n                  ")])])])])],1)],1)])},staticRenderFns:[]}}});