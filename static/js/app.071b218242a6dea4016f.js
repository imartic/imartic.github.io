webpackJsonp([1],{116:function(t,e,a){a(313);var i=a(45)(a(119),a(330),null,null);t.exports=i.exports},118:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(117),n=a(116),s=a.n(n),r=a(125),o=a(87);a.n(o);i.a.config.productionTip=!1,new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},119:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(324),n=a.n(i);e.default={name:"app",data:function(){return{title:"VUE",sidebar:!1,modal:!1,menu:[{path:"/about",text:"About me",icon:"person"},{path:"/portfolio",text:"Portfolio",icon:"work"},{path:"/contact",text:"Contact me",icon:"mail"}],cv_langs:[{text:"English",value:"en"},{text:"German",value:"de"},{text:"Croatian",value:"hr"}],cv_lang:"en"}},methods:{getCurrentYear:function(){return(new Date).getFullYear()}},components:{Profile:n.a}}},120:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(323),n=a.n(i),s=a(322),r=a.n(s);e.default={name:"about",data:function(){return{title:"About me"}},methods:{},components:{Experience:n.a,Education:r.a}}},121:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(317);e.default={name:"contact",data:function(){return{title:"Contact me",contactMe:i}},methods:{}}},122:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"education",data:function(){return{title:"Education",education:[{title:"Polytechnic of Rijeka - Croatia",logo:"",degree:"Bachelor of Engineering, Telematics",time:"October 2012 - March 2017",text:'Bachelor degree in Telematics.<br/>University website: <a href="https://www.veleri.hr/">https://www.veleri.hr</a>'},{title:"Technical University of Applied Sciences Wildau - Germany",logo:"",degree:"Telematics",time:"March 2015 - July 2015",text:'Exchange semester at TH Wildau.<br/>University website: <a href="http://www.th-wildau.de/">http://www.th-wildau.de</a>'}]}},methods:{}}},123:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(a(319),a(316)),n=a(318);e.default={name:"experience",data:function(){return{title:"Experience",work:[{title:"Alarm automatika d.o.o.",logo:i,pos:"Software Developer",time:"November 2016 - present",text:'Working as Software Developer in Research & Development department at Alarm automatika d.o.o.<br/>Company website: <a href="https://www.alarmautomatika.com/en">https://www.alarmautomatika.com</a>'},{title:"Impuls ing d.o.o.",logo:n,pos:"Junior Software Developer",time:"November 2015 - July 2016",text:'Worked as Junior Software Developer at Impuls ing d.o.o. Responsible for the development of a module for an existing desktop application. <br/>Product website: <a href="http://www.integracert.com">http://www.integracert.com</a>'}]}},methods:{}}},124:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"profile",data:function(){return{title:"VUE",profileList:[{text:"ivan.martic.ri@gmail.com",icon:"mail",fa:""},{text:"imartic.github.io",icon:"language",fa:""},{text:"+385 91 200 8778",icon:"phone",fa:""},{text:"imartic14",icon:"fa fa-skype",fa:"sykpe"},{text:"LinkedIn profile",icon:"fa fa-linkedin",fa:"linkedin",link:"https://www.linkedin.com/in/ivan-martić-81b7a9a5"},{text:"GitHub profile",icon:"fa fa-github",fa:"github",link:"https://www.github.com/imartic"}],links:[{path:"/about",text:"About me",icon:"person"},{path:"/portfolio",text:"Portfolio",icon:"work"},{path:"/contact",text:"Contact me",icon:"mail"}]}},methods:{}}},125:function(t,e,a){"use strict";var i=a(117),n=a(331),s=a(333),r=a.n(s),o=a(307),l=(a.n(o),a(116)),c=(a.n(l),a(320)),A=a.n(c),d=a(321),v=a.n(d);i.a.use(n.a),i.a.use(r.a);var u=new n.a({routes:[{path:"/",name:"About",component:A.a,redirect:"/about"},{path:"/about",name:"About",component:A.a},{path:"/contact",name:"Contact",component:v.a}]});e.a=u},307:function(t,e){},308:function(t,e){},309:function(t,e){},310:function(t,e){},311:function(t,e){},312:function(t,e){},313:function(t,e){},316:function(t,e){t.exports="data:image/jpeg;base64,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"},317:function(t,e,a){t.exports=a.p+"static/img/contactme.1b9d135.jpg"},318:function(t,e,a){t.exports=a.p+"static/img/impuls.43ae3a0.png"},319:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},320:function(t,e,a){a(312);var i=a(45)(a(120),a(329),"data-v-12e88f7d",null);t.exports=i.exports},321:function(t,e,a){a(308);var i=a(45)(a(121),a(325),"data-v-05010ee0",null);t.exports=i.exports},322:function(t,e,a){a(311);var i=a(45)(a(122),a(328),"data-v-0bb1a218",null);t.exports=i.exports},323:function(t,e,a){a(310);var i=a(45)(a(123),a(327),"data-v-05b6262a",null);t.exports=i.exports},324:function(t,e,a){a(309);var i=a(45)(a(124),a(326),"data-v-05a6f199",null);t.exports=i.exports},325:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[a("v-card-row",{attrs:{img:t.contactMe,height:"200px"}})],1),t._v(" "),a("v-card-text",[a("v-content",{staticClass:"px-2"},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{xs12:"",sm12:"",md12:"",lg6:""}},[a("v-text-field",{attrs:{name:"name",label:"Name"}})],1),t._v(" "),a("v-col",{attrs:{xs12:"",sm12:"",md12:"",lg6:""}},[a("v-text-field",{attrs:{name:"email",label:"E-mail *"}})],1)],1),t._v(" "),a("v-text-field",{attrs:{name:"message",label:"Message *","multi-line":""}}),t._v(" "),a("span",{staticStyle:{color:"rgba(0,0,0,.38)"}},[t._v("\n                        * required fileds\n                    ")])],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-card-row",{attrs:{actions:""}},[a("v-btn",{staticClass:"send",attrs:{block:"",flat:""}},[t._v("\n                    Send\n                    "),a("v-icon",{attrs:{right:""}},[t._v("send")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},326:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"profile-card"},[a("div",{staticClass:"profile-header"},[a("div",{staticClass:"md-title info-heading"},[t._v("Ivan Martić")]),t._v(" "),a("div",{staticClass:"info-subheading"},[t._v("Software & Web Developer")])]),t._v(" "),a("div",{staticClass:"infos"},t._l(t.profileList,function(e){return a("ul",{staticClass:"profile-list"},[a("li",[""!==e.link?a("a",{attrs:{href:e.link}},[""==e.fa?a("span",{staticClass:"title"},[a("v-icon",[t._v(t._s(e.icon))])],1):a("span",{staticClass:"title"},[a("i",{class:e.icon})]),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(e.text))])]):t._e()])])})),t._v(" "),a("div",{staticClass:"profile-menu"},t._l(t.links,function(e){return a("router-link",{attrs:{to:e.path}},[a("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:bottom",value:{html:e.text},expression:"{ html: item.text }",arg:"bottom"}],attrs:{dark:"",flat:""}},[a("v-icon",[t._v(t._s(e.icon))])],1)],1)}))])},staticRenderFns:[]}},327:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),a("v-card-text",[a("ul",{staticClass:"exp-list"},t._l(t.work,function(e,i){return a("li",{staticClass:"exp-list-item",class:{notlast:i!==t.work.length-1}},[a("v-row",[a("div",{staticClass:"exp-logo"},[a("img",{attrs:{src:e.logo,height:"70",width:"70"}})]),t._v(" "),a("div",{staticClass:"exp-header"},[a("div",{staticClass:"exp-title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"exp-pos"},[t._v(t._s(e.pos))]),t._v(" "),a("div",{staticClass:"exp-time"},[t._v(t._s(e.time))])])]),t._v(" "),a("v-divider"),t._v(" "),a("div",{staticClass:"exp-text",domProps:{innerHTML:t._s(e.text)}})],1)}))])],1)},staticRenderFns:[]}},328:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),a("v-card-text",[a("ul",{staticClass:"edu-list"},t._l(t.education,function(e,i){return a("li",{staticClass:"edu-list-item",class:{notlast:i!==t.education.length-1}},[a("v-row",[a("div",{staticClass:"edu-header"},[a("div",{staticClass:"edu-title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"edu-degree"},[t._v(t._s(e.degree))]),t._v(" "),a("div",{staticClass:"edu-time"},[t._v(t._s(e.time))])])]),t._v(" "),a("v-divider"),t._v(" "),a("div",{staticClass:"edu-text",domProps:{innerHTML:t._s(e.text)}})],1)}))])],1)},staticRenderFns:[]}},329:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),a("v-card-text",[a("span",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \n            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \n            culpa qui officia deserunt mollit anim id est laborum.")])])],1),t._v(" "),a("Experience"),t._v(" "),a("Education")],1)},staticRenderFns:[]}},330:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"cv"}},[a("v-toolbar-side-icon",{staticClass:"toggle-btn",nativeOn:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}}),t._v(" "),a("div",{staticClass:"in-progress"},[t._v("still in progress...")]),t._v(" "),a("v-sidebar",{attrs:{drawer:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[a("v-toolbar",{staticStyle:{"background-color":"#156"}},[a("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}},[a("v-icon",[t._v("close")])],1)],1),t._v(" "),a("v-list",t._l(t.menu,function(e){return a("router-link",{attrs:{to:e.path}},[a("v-list-tile",[a("v-list-tile-avatar",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{staticStyle:{"font-weight":"400"},domProps:{textContent:t._s(e.text)}})],1)],1)],1)})),t._v(" "),a("div",{staticClass:"menu-footer text-xs-center"},[t._v("\n      Copyright © "+t._s(t.getCurrentYear())+". Ivan Martić\n    ")])],1),t._v(" "),a("main",[a("v-content",{staticClass:"main-content"},[a("v-container",{attrs:{fluid:"fluid"}},[a("v-row",[a("v-col",{attrs:{xs12:"",sm12:"",md5:"",lg4:""}},[a("Profile"),t._v(" "),a("v-modal",{staticClass:"cv-modal",model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-btn",{attrs:{flat:"",block:""},slot:"activator"},[a("v-icon",{attrs:{left:""}},[t._v("file_download")]),t._v("\n                  Download CV\n                ")],1),t._v(" "),a("v-card",{staticClass:"cv-modal-card"},[a("v-card-text",[a("h2",{staticClass:"title"},[t._v("Choose language of CV")])]),t._v(" "),a("v-card-text",t._l(t.cv_langs,function(e){return a("v-radio",{staticClass:"radio-cv-lang",attrs:{label:e.text,value:e.value},model:{value:t.cv_lang,callback:function(e){t.cv_lang=e},expression:"cv_lang"}})})),t._v(" "),a("v-card-row",{attrs:{actions:""}},[a("v-btn",{staticClass:"prim-col",attrs:{flat:"",block:""},nativeOn:{click:function(e){t.modal=!1}}},[t._v("Download")])],1)],1)],1),t._v(" "),a("br")],1),t._v(" "),a("v-col",{attrs:{xs12:"",sm12:"",md7:"",lg8:""}},[a("router-view")],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},334:function(t,e,a){a(87),t.exports=a(118)}},[334]);
//# sourceMappingURL=app.071b218242a6dea4016f.js.map