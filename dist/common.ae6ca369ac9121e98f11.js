(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"R/Hu":function(t,n,e){"use strict";e.d(n,"b",(function(){return p})),e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return l}));var i=e("TYT/"),o=e("K9Ia"),r=e("Gi3i"),s=e("Valr");function a(t,n){if(1&t&&(i.Vb(0,"div",3),i.Qb(1,"div",4),i.Ub()),2&t){var e=i.hc(2);i.Ec("color",e.color),i.Cb(1),i.Ec("width",e.diameter)("height",e.diameter)}}function c(t,n){if(1&t&&(i.Vb(0,"div",5),i.Vb(1,"div",6),i.Qb(2,"div",7),i.Ub(),i.Ub()),2&t){var e=i.hc().ngIf,o=i.hc();i.Ec("color",o.color),i.Cb(1),i.Ec("background",o.color,i.Ib)("height",o.height)("width",e+"%"),i.Cb(1),i.Ec("height",o.height)}}function d(t,n){if(1&t&&(i.Tb(0),i.Fc(1,a,2,6,"div",1),i.Fc(2,c,3,10,"div",2),i.Sb()),2&t){var e=i.hc();i.Cb(1),i.nc("ngIf",e.includeSpinner),i.Cb(1),i.nc("ngIf",e.includeBar)}}var l=function(){function t(t){this.platformId=t,this.progress$=(new o.a).pipe(Object(r.a)(0)),this._pendingRequests=0,this._value=0}return t.prototype.start=function(t){void 0===t&&(t=2),++this._pendingRequests,0!==this._value&&1!==this._pendingRequests||this.set(1===this._pendingRequests&&this._value>0?this._value:t)},t.prototype.stop=function(){for(this.complete();this._pendingRequests>0;)this.complete()},t.prototype.complete=function(){var t=this;0===this._pendingRequests&&0===this._value||(this._pendingRequests>0&&--this._pendingRequests,(0===this._pendingRequests||0===this._pendingRequests&&this._value>0)&&(100!==this._value&&this.set(100),setTimeout((function(){return t.set(0)}),500)))},t.prototype.set=function(t){var n=this;Object(s.u)(this.platformId)?(0===t&&this._pendingRequests>0&&(t=2),this._value=t,this.progress$.next(t),0!==this._pendingRequests&&(clearTimeout(this._incTimeout),this._value>0&&this._value<100&&(this._incTimeout=setTimeout((function(){return n.increment()}),250)))):this._pendingRequests=0},t.prototype.increment=function(t){void 0===t&&(t=0),t>0&&this.set(this._value+t);var n=this._value;t=n>=0&&n<25?3*Math.random()+3:n>=25&&n<65?3*Math.random():n>=65&&n<90?2*Math.random():n>=90&&n<99?.5:0,this.set(this._value+t)},t.prototype.ngOnDestroy=function(){this.progress$.complete()},t.ngInjectableDef=Object(i.S)({factory:function(){return new t(Object(i.V)(i.B))},token:t,providedIn:"root"}),t.\u0275fac=function(n){return new(n||t)(i.Zb(i.B))},t.\u0275prov=i.Lb({token:t,factory:function(n){return t.\u0275fac(n)},providedIn:"root"}),t}(),u=function(){function t(t){this.loader=t,this.includeSpinner=!0,this.includeBar=!0,this.fixed=!0,this.value=null}return t.\u0275fac=function(n){return new(n||t)(i.Pb(l))},t.\u0275cmp=i.Jb({type:t,selectors:[["ngx-loading-bar"]],hostVars:2,hostBindings:function(t,n){2&t&&i.Gb("loading-bar-fixed",n.fixed)},inputs:{includeSpinner:"includeSpinner",includeBar:"includeBar",fixed:"fixed",value:"value",color:"color",height:"height",diameter:"diameter"},decls:2,vars:3,consts:[[4,"ngIf"],["id","loading-bar-spinner",3,"color",4,"ngIf"],["id","loading-bar",3,"color",4,"ngIf"],["id","loading-bar-spinner"],[1,"spinner-icon"],["id","loading-bar"],[1,"bar"],[1,"peg"]],template:function(t,n){1&t&&(i.Fc(0,d,3,2,"ng-container",0),i.ic(1,"async")),2&t&&i.nc("ngIf",null!==n.value?n.value:i.jc(1,1,n.loader.progress$))},directives:[s.l],pipes:[s.b],styles:["[_nghost-%COMP%]{position:relative;display:block}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{position:fixed}.loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   .loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{right:10px;left:unset}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:none;transition:350ms linear;color:#29d}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{transition:width 350ms;background:#29d;position:absolute;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{right:0;left:unset}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:none;position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{display:block;position:absolute;z-index:10002;top:5px;left:0}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]}),t}(),p=function(){function t(){}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(n){return new(n||t)},imports:[[s.c]]}),t}()},"VlD+":function(t,n,e){"use strict";var i=e("NSr3"),o=e("VIqg"),r=e("TYT/"),s=Object(o.a)().domain([100,3e3]).range(["#AAAAAA","#444444"]),a={Russia:{color:s(300)},Canada:{color:s(120)},China:{color:s(1300)},"United States":{color:s(2920)},Brazil:{color:s(550)},Australia:{color:s(760)},India:{color:s(200)},Argentina:{color:s(240)},Romania:{color:s(600)},Algeria:{color:s(540)}},c=function(){function t(){}return t.prototype.getCountries=function(){return a},t.\u0275prov=r.Lb({token:t,factory:t.\u0275fac=function(n){return new(n||t)}}),t}(),d=e("ghUt"),l=e("2uaZ");e.d(n,"a",(function(){return p}));var u=function(){return[0,0,0,0]},p=function(){function t(t){this.worldMap=i.world,this.countries=t.getCountries(),this.customizeTooltip=this.customizeTooltip.bind(this),this.customizeLayers=this.customizeLayers.bind(this),this.click=this.click.bind(this)}return t.prototype.customizeTooltip=function(t){return{text:t.attribute("name"),color:"#FFFFFF",fontColor:"#000"}},t.prototype.customizeLayers=function(t){var n=this;t.forEach((function(t){var e=n.countries[t.attribute("name")];t.applySettings(e?{color:e.color,hoveredColor:e.color,selectedColor:e.color}:{color:"#e4e4e4",hoveredColor:"#e4e4e4",selectedColor:"#e4e4e4"})}))},t.prototype.click=function(t){var n=t.target;n&&this.countries[n.attribute("name")]&&n.selected(!n.selected())},t.\u0275fac=function(n){return new(n||t)(r.Pb(c))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-vector-map-component"]],features:[r.Bb([c])],decls:5,vars:7,consts:[["id","vector-map",3,"bounds","onClick"],[3,"enabled","customizeTooltip"],["color","#fff"],[3,"visible"],[3,"dataSource","customize"]],template:function(t,n){1&t&&(r.Vb(0,"dx-vector-map",0),r.dc("onClick",(function(t){return n.click(t)})),r.Vb(1,"dxo-tooltip",1),r.Qb(2,"dxo-font",2),r.Qb(3,"dxo-border",3),r.Ub(),r.Qb(4,"dxi-layer",4),r.Ub()),2&t&&(r.nc("bounds",r.pc(6,u)),r.Cb(1),r.nc("enabled",!0)("customizeTooltip",n.customizeTooltip),r.Cb(2),r.nc("visible",!1),r.Cb(1),r.nc("dataSource",n.worldMap)("customize",n.customizeLayers))},directives:[d.a,l.v,l.j,l.f,l.a],styles:["#vector-map{min-height:220px;width:100%;display:block}  #vector-map>svg>rect{display:none}"]}),t}()}}]);