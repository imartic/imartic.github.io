webpackJsonp([5],{437:function(t,e,a){a(456);var s=a(88)(a(443),a(464),"data-v-3cbeabc7",null);t.exports=s.exports},443:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(89);a.n(s);e.default={data:function(){return{moveX:0,moveY:0,rotateY:0,rotateX:0,mail:"",subject:"",message:"",alert:!1,alertMsg:""}},computed:{position:function(){var t="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";return{top:this.moveY+"px",left:this.moveX+"px","-webkit-transform":t,"-ms-transform":t,transform:t}}},methods:{move:function(t){var e=s.Utils.dom.viewport(),a=e.width,o=e.height,i=s.Utils.event.position(t),n=i.top,r=i.left,c=o/2,l=a/2;this.moveX=(r-l)/l*-1,this.moveY=(n-c)/c*-1,this.rotateY=r/a*1.5*2-1.5,this.rotateX=-(n/o*1.5*2-1.5)},sendMail:function(){return""!==document.mail.email.value&&this.validateEmail(document.mail.email.value)?""===document.mail._subject.value?(this.alert=!0,this.alertMsg="Please enter a subject!",void document.mail._subject.focus()):""===document.mail.message.value?(this.alert=!0,this.alertMsg="Please enter your message!",void document.mail.message.focus()):(this.alert=!1,this.alertMsg="",void document.mail.submit()):(this.alert=!0,this.alertMsg="Please enter a valid e-mail address!",void document.mail.email.focus())},validateEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},closeAlert:function(){this.alert=!1,this.alertMsg=""}},mounted:function(){var t=this;this.$nextTick(function(){document.addEventListener("mousemove",t.move),document.addEventListener("touchmove",t.move)})},beforeDestroy:function(){document.removeEventListener("mousemove",this.move),document.removeEventListener("touchmove",this.move)}}},450:function(t,e,a){e=t.exports=a(434)(),e.push([t.i,".logo-container[data-v-3cbeabc7]{width:70%;height:50%;-webkit-perspective:800px;perspective:800px;position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.logo[data-v-3cbeabc7]{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.home-title[data-v-3cbeabc7]{text-align:center;border:1px solid #bbb;font-size:36px;padding:7px}.home-subtitle[data-v-3cbeabc7],.home-title[data-v-3cbeabc7]{text-shadow:0 5px 10px #050505;-webkit-text-shadow:0 5px 10px #050505;-moz-text-shadow:0 5px 10px #050505}.home-subtitle[data-v-3cbeabc7]{color:#ddd;margin-top:25px;margin-bottom:25px;font-size:17px;font-weight:300}input[data-v-3cbeabc7],textarea[data-v-3cbeabc7]{color:#ddd;font-weight:300;border:1px solid #999;padding-left:10px}input[data-v-3cbeabc7]:active,input[data-v-3cbeabc7]:focus,input[data-v-3cbeabc7]:hover,textarea[data-v-3cbeabc7]:active,textarea[data-v-3cbeabc7]:focus,textarea[data-v-3cbeabc7]:hover{border:1px solid #eee}.send-btn[data-v-3cbeabc7]{margin-top:25px}.input-alert[data-v-3cbeabc7]{text-shadow:none;border:2px solid #822;padding:18px;color:#bbb;font-size:15px;margin-top:20px}.close-alert[data-v-3cbeabc7]{margin-left:15px;color:#bbb;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;transition:.3s}.close-alert[data-v-3cbeabc7]:hover{color:#822}.fade-enter-active[data-v-3cbeabc7],.fade-leave-active[data-v-3cbeabc7]{transition-property:opacity;transition-duration:.15s}.fade-enter-active[data-v-3cbeabc7]{transition-delay:.15s}.fade-enter[data-v-3cbeabc7],.fade-leave-active[data-v-3cbeabc7]{opacity:0}",""])},456:function(t,e,a){var s=a(450);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(435)("29a7d129",s,!0)},464:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-container non-selectable"},[a("div",{staticClass:"logo",style:t.position},[a("div",{staticClass:"home-title"},[t._v("Contact me")]),t._v(" "),a("div",{staticClass:"home-subtitle"},[a("form",{staticClass:"mail-frm",attrs:{name:"mail",action:"https://formspree.io/ivan.martic.ri@gmail.com",method:"POST"}},[a("div",{staticClass:"row wrap gutter"},[a("div",{staticClass:"auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mail,expression:"mail"}],staticClass:"full-width",attrs:{placeholder:"Your e-mail",name:"email"},domProps:{value:t.mail},on:{input:function(e){e.target.composing||(t.mail=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"full-width",attrs:{placeholder:"Subject",name:"_subject"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})])]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"full-width",attrs:{rows:"7",placeholder:"Your message",name:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"_next",value:""}}),t._v(" "),a("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"_gotcha"}}),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.alert?a("div",{staticClass:"input-alert"},[a("span",{staticClass:"close-alert",on:{click:function(e){t.closeAlert()}}},[t._v("×")]),t._v(" \n            "+t._s(t.alertMsg)+"\n          ")]):t._e()]),t._v(" "),a("button",{staticClass:"grey outline send-btn",attrs:{type:"button"},on:{click:function(e){t.sendMail()}}},[t._v("\n          Send mail\n          "),a("i",{staticClass:"on-right"},[t._v("send")])])],1)])])])},staticRenderFns:[]}}});