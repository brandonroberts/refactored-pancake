(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/CO3":function(l,t,n){"use strict";n.r(t);var e=n("CcnG"),i=n("mrSG"),u=n("S5bw"),o=n("dzgT"),a=function(){this.query="",this.status="all",this.type="all"},s=function(){function l(l,t){this.apiService=l,this.locationService=t,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new u.a(1),this.searchCriteria=new a,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"decorator",title:"Decorator"},{value:"directive",title:"Directive"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"pipe",title:"Pipe"},{value:"type-alias",title:"Type alias"},{value:"package",title:"Package"}],this.statuses=[{value:"all",title:"All"},{value:"stable",title:"Stable"},{value:"deprecated",title:"Deprecated"},{value:"experimental",title:"Experimental"},{value:"security-risk",title:"Security Risk"}]}return l.prototype.ngOnInit=function(){var l=this;this.filteredSections=Object(o.a)(this.apiService.sections,this.criteriaSubject,function(t,n){return t.map(function(t){return i.a({},t,{items:l.filterSection(t,n)})})}),this.initializeSearchCriteria()},l.prototype.setQuery=function(l){this.setSearchCriteria({query:(l||"").toLowerCase().trim()})},l.prototype.setStatus=function(l){this.toggleStatusMenu(),this.status=l,this.setSearchCriteria({status:l.value})},l.prototype.setType=function(l){this.toggleTypeMenu(),this.type=l,this.setSearchCriteria({type:l.value})},l.prototype.toggleStatusMenu=function(){this.showStatusMenu=!this.showStatusMenu},l.prototype.toggleTypeMenu=function(){this.showTypeMenu=!this.showTypeMenu},l.prototype.filterSection=function(l,t){var n=t.query,e=t.status,i=t.type,u=l.items.filter(function(t){return("all"===i||i===t.docType)&&("all"===e||e===t.stability||"security-risk"===e&&t.securityRisk)&&(!n||-1!==l.name.indexOf(n)||-1!==t.name.indexOf(n))});return u.length?u:"package"!==i||n&&-1===l.name.indexOf(n)?null:[]},l.prototype.initializeSearchCriteria=function(){var l=this.locationService.search(),t=l.status,n=l.type,e=(l.query||"").toLowerCase();this.queryEl.nativeElement.value=e,this.status=this.statuses.find(function(l){return l.value===t})||this.statuses[0],this.type=this.types.find(function(l){return l.value===n})||this.types[0],this.searchCriteria={query:e,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)},l.prototype.setLocationSearch=function(){var l=this.searchCriteria,t=l.status,n=l.type;this.locationService.setSearch("API Search",{query:l.query||void 0,status:"all"!==t?t:void 0,type:"all"!==n?n:void 0})},l.prototype.setSearchCriteria=function(l){this.criteriaSubject.next(Object.assign(this.searchCriteria,l)),this.setLocationSearch()},l}(),c=function(){return function(){this.customElementComponent=s}}(),r=n("Ip0R"),p=function(){function l(l){this.hostElement=l,this.change=new e.m,this.showSymbol=!1,this.showOptions=!1}return l.prototype.ngOnInit=function(){this.label=this.label||""},l.prototype.toggleOptions=function(){this.showOptions=!this.showOptions},l.prototype.hideOptions=function(){this.showOptions=!1},l.prototype.select=function(l,t){this.selected=l,this.change.emit({option:l,index:t}),this.hideOptions()},l.prototype.onClick=function(l){this.hostElement.nativeElement.contains(l)||this.hideOptions()},l.prototype.onKeyDown=function(){this.hideOptions()},l}(),h=e.Ma({encapsulation:2,styles:[],data:{}});function f(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null))],null,function(l,t){var n=t.component;l(t,0,0,e.Qa(1,"symbol ",null==n.selected?null:n.selected.value,""))})}function y(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null))],null,function(l,t){l(t,0,0,e.Qa(1,"symbol ",t.parent.context.$implicit.value,""))})}function m(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,3,"li",[["role","button"],["tabindex","0"]],[[2,"selected",null]],[[null,"click"],[null,"keydown.enter"],[null,"keydown.space"]],function(l,t,n){var e=!0,i=l.component;return"click"===t&&(e=!1!==i.select(l.context.$implicit,l.context.index)&&e),"keydown.enter"===t&&(e=!1!==i.select(l.context.$implicit,l.context.index)&&e),"keydown.space"===t&&(i.select(l.context.$implicit,l.context.index),e=!1!==n.preventDefault()&&e),e},null,null)),(l()(),e.Fa(16777216,null,null,1,null,y)),e.Na(2,16384,null,0,r.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.cb(3,null,[""," "]))],function(l,t){l(t,2,0,t.component.showSymbol)},function(l,t){l(t,0,0,t.context.$implicit===t.component.selected),l(t,3,0,t.context.$implicit.title)})}function d(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,2,"ul",[["class","form-select-dropdown"]],null,null,null,null,null)),(l()(),e.Fa(16777216,null,null,1,null,m)),e.Na(2,278528,null,0,r.j,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,t){l(t,2,0,t.component.options)},null)}function g(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,8,"div",[["class","form-select-menu"]],null,null,null,null,null)),(l()(),e.Oa(1,0,null,null,5,"button",[["class","form-select-button"]],null,[[null,"click"]],function(l,t,n){var e=!0;return"click"===t&&(e=!1!==l.component.toggleOptions()&&e),e},null,null)),(l()(),e.Oa(2,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.cb(3,null,["",""])),(l()(),e.Fa(16777216,null,null,1,null,f)),e.Na(5,16384,null,0,r.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.cb(6,null,[""," "])),(l()(),e.Fa(16777216,null,null,1,null,d)),e.Na(8,16384,null,0,r.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,t){var n=t.component;l(t,5,0,n.showSymbol),l(t,8,0,n.showOptions)},function(l,t){var n=t.component;l(t,3,0,n.label),l(t,6,0,null==n.selected?null:n.selected.title)})}var b=n("K9Ia"),v=n("ny24"),O=n("xMyE"),S=n("jn67"),w=function(){function l(l,t){this.http=l,this.logger=t,this.apiBase=S.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new b.a,this.sectionsSubject=new u.a(1),this._sections=this.sectionsSubject.pipe(Object(v.a)(this.onDestroy))}return Object.defineProperty(l.prototype,"sections",{get:function(){var l=this;return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(function(t){return l.logger.log("ApiService got API sections")})),this._sections},enumerable:!0,configurable:!0}),l.prototype.ngOnDestroy=function(){this.onDestroy.next()},l.prototype.fetchSections=function(l){var t=this,n=this.apiBase+(l||this.apiListJsonDefault);this.http.get(n).pipe(Object(v.a)(this.onDestroy),Object(O.a)(function(){return t.logger.log("Got API sections from "+n)})).subscribe(function(l){return t.sectionsSubject.next(l)},function(l){throw t.logger.error(l),l})},l}(),k=n("/lUL"),x=e.Ma({encapsulation:2,styles:[],data:{}});function C(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),e.Oa(1,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),e.cb(2,null,["@ngrx/",""]))],null,function(l,t){l(t,1,0,t.parent.context.$implicit.path),l(t,2,0,t.parent.context.$implicit.title)})}function j(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e.Oa(1,0,null,null,3,"li",[["class","api-item"]],null,null,null,null,null)),(l()(),e.Oa(2,0,null,null,2,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),e.Oa(3,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),e.cb(4,null,[" ",""]))],null,function(l,t){l(t,2,0,t.context.$implicit.path),l(t,3,0,e.Qa(1,"symbol ",t.context.$implicit.docType,"")),l(t,4,0,t.context.$implicit.title)})}function F(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,2,"ul",[["class","api-list"]],null,null,null,null,null)),(l()(),e.Fa(16777216,null,null,1,null,j)),e.Na(2,278528,null,0,r.j,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,t){l(t,2,0,t.parent.context.$implicit.items)},null)}function N(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.Fa(16777216,null,null,1,null,C)),e.Na(2,16384,null,0,r.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.Fa(16777216,null,null,1,null,F)),e.Na(4,16384,null,0,r.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,t){l(t,2,0,t.context.$implicit.items),l(t,4,0,null==t.context.$implicit.items?null:t.context.$implicit.items.length)},null)}function V(l){return e.eb(0,[e.ab(402653184,1,{queryEl:0}),(l()(),e.Oa(1,0,null,null,8,"div",[["class","l-flex-wrap api-filter"]],null,null,null,null,null)),(l()(),e.Oa(2,0,null,null,1,"aio-select",[["label","Type:"]],null,[[null,"change"],["document","click"],["document","keydown.escape"]],function(l,t,n){var i=!0,u=l.component;return"document:click"===t&&(i=!1!==e.Xa(l,3).onClick(n.target)&&i),"document:keydown.escape"===t&&(i=!1!==e.Xa(l,3).onKeyDown()&&i),"change"===t&&(i=!1!==u.setType(n.option)&&i),i},g,h)),e.Na(3,114688,null,0,p,[e.k],{selected:[0,"selected"],options:[1,"options"],showSymbol:[2,"showSymbol"],label:[3,"label"]},{change:"change"}),(l()(),e.Oa(4,0,null,null,1,"aio-select",[["label","Status:"]],null,[[null,"change"],["document","click"],["document","keydown.escape"]],function(l,t,n){var i=!0,u=l.component;return"document:click"===t&&(i=!1!==e.Xa(l,5).onClick(n.target)&&i),"document:keydown.escape"===t&&(i=!1!==e.Xa(l,5).onKeyDown()&&i),"change"===t&&(i=!1!==u.setStatus(n.option)&&i),i},g,h)),e.Na(5,114688,null,0,p,[e.k],{selected:[0,"selected"],options:[1,"options"],label:[2,"label"]},{change:"change"}),(l()(),e.Oa(6,0,null,null,3,"div",[["class","form-search"]],null,null,null,null,null)),(l()(),e.Oa(7,0,[[1,0],["filter",1]],null,0,"input",[["placeholder","Filter"]],null,[[null,"input"]],function(l,t,n){var e=!0;return"input"===t&&(e=!1!==l.component.setQuery(n.target.value)&&e),e},null,null)),(l()(),e.Oa(8,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e.cb(-1,null,["search"])),(l()(),e.Oa(10,0,null,null,3,"article",[["class","api-list-container l-content-small docs-content"]],null,null,null,null,null)),(l()(),e.Fa(16777216,null,null,2,null,N)),e.Na(12,278528,null,0,r.j,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null),e.Ya(131072,r.b,[e.h])],function(l,t){var n=t.component;l(t,3,0,n.type,n.types,!0,"Type:"),l(t,5,0,n.status,n.statuses,"Status:"),l(t,12,0,e.db(t,12,0,e.Xa(t,13).transform(n.filteredSections)))},null)}var I=e.Ka("aio-api-list",s,function(l){return e.eb(0,[(l()(),e.Oa(0,0,null,null,1,"aio-api-list",[],null,null,null,V,x)),e.Na(1,114688,null,0,s,[w,k.a],null,null)],function(l,t){l(t,1,0)},null)},{},{},[]),T=n("t/Na"),L=n("vHPH"),$=n("PCNd");n.d(t,"ApiListModuleNgFactory",function(){return D});var D=e.La(c,[],function(l){return e.Ua([e.Va(512,e.j,e.Aa,[[8,[I]],[3,e.j],e.v]),e.Va(4608,r.m,r.l,[e.s,[2,r.x]]),e.Va(4608,T.h,T.n,[r.d,e.z,T.l]),e.Va(4608,T.o,T.o,[T.h,T.m]),e.Va(5120,T.a,function(l){return[l]},[T.o]),e.Va(4608,T.k,T.k,[]),e.Va(6144,T.i,null,[T.k]),e.Va(4608,T.g,T.g,[T.i]),e.Va(6144,T.b,null,[T.g]),e.Va(4608,T.f,T.j,[T.b,e.p]),e.Va(4608,T.c,T.c,[T.f]),e.Va(135680,w,w,[T.c,L.a]),e.Va(1073742336,r.c,r.c,[]),e.Va(1073742336,$.a,$.a,[]),e.Va(1073742336,T.e,T.e,[]),e.Va(1073742336,T.d,T.d,[]),e.Va(1073742336,c,c,[]),e.Va(256,T.l,"XSRF-TOKEN",[]),e.Va(256,T.m,"X-XSRF-TOKEN",[])])})}}]);
//# sourceMappingURL=api-api-list-module-ngfactory.640da4625af0e4f1373f.js.map