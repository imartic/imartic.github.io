webpackJsonp([3],{440:function(t,e,a){a(455);var o=a(88)(a(446),a(463),"data-v-0e4a9da2",null);t.exports=o.exports},446:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(89);a.n(o);e.default={data:function(){return{moveX:0,moveY:0,rotateY:0,rotateX:0,portfolio:[{title:"Portfolio site",thumbnail:"",text:"This portfolio site was created with Vue.js.",tech:["Vue.js","Quasar Framework"],github:"https://github.com/imartic/portfolio",link:""},{title:"Transformers App",thumbnail:"",text:"A demo web application for configuring and organising transformers.",tech:["React","Redux"],github:"https://github.com/imartic/transformers-app",link:""},{title:"MyBiz v1",thumbnail:"",text:"A web application for creating and exporting business proposals.",tech:["C#","MS SQL Server","JavaScript/jQuery","HTML","CSS","Material Design Lite"],github:"https://github.com/imartic/MyBiz",link:""},{title:"MyBiz v2",thumbnail:"",text:"Upgrade from Version 1. In early phases of development.",tech:["Vue.js","Quasar Framework","..."],github:"https://github.com/imartic/MyBiz-v2",link:""},{title:"More projects to be included...",thumbnail:"",text:"",tech:[],github:"",link:""}]}},computed:{position:function(){var t="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";return{top:this.moveY+"px",left:this.moveX+"px","-webkit-transform":t,"-ms-transform":t,transform:t}}},methods:{move:function(t){var e=o.Utils.dom.viewport(),a=e.width,i=e.height,s=o.Utils.event.position(t),r=s.top,n=s.left,c=i/2,l=a/2;this.moveX=(n-l)/l*-1,this.moveY=(r-c)/c*-1,this.rotateY=n/a*1.5*2-1.5,this.rotateX=-(r/i*1.5*2-1.5)},openUrl:function(t){window.open(t,"_blank").focus()}},mounted:function(){var t=this;this.$nextTick(function(){document.addEventListener("mousemove",t.move),document.addEventListener("touchmove",t.move)})},beforeDestroy:function(){document.removeEventListener("mousemove",this.move),document.removeEventListener("touchmove",this.move)}}},449:function(t,e,a){e=t.exports=a(434)(),e.push([t.i,".logo-container[data-v-0e4a9da2]{width:70%;height:50%;-webkit-perspective:800px;perspective:800px;position:absolute;top:40%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.logo[data-v-0e4a9da2]{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.home-title[data-v-0e4a9da2]{text-align:center;border:1px solid #bbb;font-size:36px;padding:7px}.home-subtitle[data-v-0e4a9da2],.home-title[data-v-0e4a9da2]{text-shadow:0 5px 10px #050505;-webkit-text-shadow:0 5px 10px #050505;-moz-text-shadow:0 5px 10px #050505}.home-subtitle[data-v-0e4a9da2]{color:#ddd;margin-top:25px;margin-bottom:25px;font-size:17px;font-weight:300}.project-card[data-v-0e4a9da2]{border:1px solid #bbb}.project-card button i[data-v-0e4a9da2]{font-size:28px}.tech-section[data-v-0e4a9da2]{margin-top:-17px;margin-bottom:15px}.tech-item[data-v-0e4a9da2]{border:1px solid #bbb;color:#999;font-size:16px;padding:3px 6px;margin:3px 7px 3px 0;display:inline-block}.project-card .card-content[data-v-0e4a9da2]{height:110px}.card-actions>[data-v-0e4a9da2]:not(:last-child){padding:0}@media screen and (max-width:1277px){.project-card .card-content[data-v-0e4a9da2]{height:auto}}",""])},455:function(t,e,a){var o=a(449);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(435)("601788cb",o,!0)},463:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-container non-selectable"},[a("div",{staticClass:"logo",style:t.position},[a("div",{staticClass:"home-title"},[t._v("Portfolio")]),t._v(" "),a("div",{staticClass:"home-subtitle"},[a("div",{staticClass:"row wrap gutter sm-column items-stretch"},t._l(t.portfolio,function(e){return a("div",{staticClass:"auto lg-width-1of3"},[a("div",{staticClass:"project-card"},[a("div",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"card-content tech-section"},t._l(e.tech,function(e){return a("div",{staticClass:"tech-item"},[t._v(t._s(e))])})),t._v(" "),a("div",{staticClass:"card-content project-text"},[t._v(t._s(e.text))]),t._v(" "),a("div",{staticClass:"card-actions"},[""!==e.github?a("button",{staticClass:"circular small grey clear",on:{click:function(a){t.openUrl(e.github)}}},[a("i",{staticClass:"fa fa-github"}),t._v(" "),a("q-tooltip",{attrs:{anchor:"center right",self:"center left",offset:[10,0]}},[t._v("\n                View on GitHub\n              ")])],1):t._e(),t._v(" "),a("div",{staticClass:"auto"}),t._v(" "),""!==e.link?a("router-link",{attrs:{to:{name:t.item.link}}},[a("button",{staticClass:"grey clear outline"},[t._v("\n                View project\n              ")])]):t._e()],1)])])}))])])])},staticRenderFns:[]}}});
