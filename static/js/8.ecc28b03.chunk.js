(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[8],{106:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_modal",(function(){return v}));var a=o(1),i=o(11),r=o(13),n=o(14),s=o(3),d=o(16),l=o(38),c=(o(26),o(37)),m=(o(25),o(22)),p=o(132),h=o(134),f=.93,u=function(e,t){return Object(n.h)(400,e/Math.abs(1.1*t),500)},b=function(e,t){var o=Object(s.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a=Object(s.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),i=Object(s.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(t){var r=window.innerWidth<768,n="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,d=Object(s.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),l=document.body;if(r){var c=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",m="translateY("+(n?"-10px":c)+") scale("+f+")";d.afterStyles({transform:m}).beforeAddWrite((function(){return l.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:m,borderRadius:"10px 10px 0 0"}]),i.addAnimation(d)}else if(i.addAnimation(o),n){m="translateY(-10px) scale("+(n?f:1)+")";d.afterStyles({transform:m}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:m}]);var p=Object(s.a)().afterStyles({transform:m}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:m}]);i.addAnimation([d,p])}else a.fromTo("opacity","0","1")}else i.addAnimation(o);return i},w=function(e,t,o){void 0===o&&(o=500);var a=Object(s.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i=Object(s.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),r=Object(s.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(i);if(t){var n=window.innerWidth<768,d="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,l=Object(s.a)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){1===e&&(t.style.setProperty("overflow",""),Array.from(c.querySelectorAll("ion-modal")).filter((function(e){return void 0!==e.presentingElement})).length<=1&&c.style.setProperty("background-color",""))})),c=document.body;if(n){var m=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",p="translateY("+(d?"-10px":m)+") scale("+f+")";l.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:p,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),r.addAnimation(l)}else if(r.addAnimation(a),d){p="translateY(-10px) scale("+(d?f:1)+")";l.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:p},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var h=Object(s.a)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:p},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);r.addAnimation([l,h])}else i.fromTo("opacity","1","0")}else r.addAnimation(a);return r},x=function(e){var t=Object(s.a)(),o=Object(s.a)(),a=Object(s.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,a])},y=function(e){var t=Object(s.a)(),o=Object(s.a)(),a=Object(s.a)(),i=e.querySelector(".modal-wrapper");return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(i).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,a])},v=function(){function e(e){var t=this;Object(i.o)(this,e),this.didPresent=Object(i.g)(this,"ionModalDidPresent",7),this.willPresent=Object(i.g)(this,"ionModalWillPresent",7),this.willDismiss=Object(i.g)(this,"ionModalWillDismiss",7),this.didDismiss=Object(i.g)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){t.dismiss(void 0,m.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onLifecycle=function(e){var o=t.usersElement,a=g[e.type];if(o&&a){var i=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}}}return e.prototype.swipeToCloseChanged=function(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()},e.prototype.connectedCallback=function(){Object(m.f)(this.el)},e.prototype.present=function(){return Object(a.a)(this,void 0,void 0,(function(){var e,t,o,r=this;return Object(a.c)(this,(function(a){switch(a.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".modal-wrapper")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),o=this,[4,Object(h.a)(this.delegate,e,this.component,["ion-page"],t)];case 1:return o.usersElement=a.sent(),[4,Object(d.d)(this.usersElement)];case 2:return a.sent(),Object(i.f)((function(){return r.el.classList.add("show-modal")})),[4,Object(m.e)(this,"modalEnter",b,x,this.presentingElement)];case 3:return a.sent(),this.swipeToClose&&this.initSwipeToClose(),[2]}}))}))},e.prototype.initSwipeToClose=function(){var e=this;if("ios"===Object(r.b)(this)){var t=this.leaveAnimation||r.c.get("modalLeave",w),o=this.animation=t(this.el,this.presentingElement);this.gesture=function(e,t,o){var a=e.offsetHeight,i=!1,r=Object(c.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:function(){t.progressStart(!0,i?1:0)},onMove:function(e){var o=Object(n.h)(1e-4,e.deltaY/a,.9999);t.progressStep(o)},onEnd:function(e){var s=e.velocityY,d=Object(n.h)(1e-4,e.deltaY/a,.9999),c=(e.deltaY+1e3*s)/a>=.5,m=c?-.001:.001;c?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),m+=Object(l.a)([0,0],[.32,.72],[0,1],[1,1],d)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),m+=Object(l.a)([0,0],[1,0],[.68,.28],[1,1],d)[0]);var p=u(c?d*a:(1-d)*a,s);i=c,r.enable(!1),t.onFinish((function(){c||r.enable(!0)})).progressEnd(c?1:0,m,p),c&&o()}});return r}(this.el,o,(function(){e.gestureAnimationDismissing=!0,e.animation.onFinish((function(){return Object(a.a)(e,void 0,void 0,(function(){return Object(a.c)(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(void 0,"gesture")];case 1:return e.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))})),this.gesture.enable(!0)}},e.prototype.dismiss=function(e,t){return Object(a.a)(this,void 0,void 0,(function(){var o,i;return Object(a.c)(this,(function(a){switch(a.label){case 0:return this.gestureAnimationDismissing&&"gesture"!==t?[2,!1]:(o=m.i.get(this)||[],[4,Object(m.g)(this,e,t,"modalLeave",w,y,this.presentingElement)]);case 1:return(i=a.sent())?[4,Object(h.b)(this.delegate,this.usersElement)]:[3,3];case 2:a.sent(),this.animation&&this.animation.destroy(),o.forEach((function(e){return e.destroy()})),a.label=3;case 3:return this.animation=void 0,[2,i]}}))}))},e.prototype.onDidDismiss=function(){return Object(m.h)(this.el,"ionModalDidDismiss")},e.prototype.onWillDismiss=function(){return Object(m.h)(this.el,"ionModalWillDismiss")},e.prototype.render=function(){var e,t=Object(r.b)(this);return Object(i.j)(i.c,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},e[t]=!0,e["modal-card"]=void 0!==this.presentingElement&&"ios"===t,e),Object(p.b)(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(i.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===t&&Object(i.j)("div",{class:"modal-shadow"}),Object(i.j)("div",{tabindex:"0"}),Object(i.j)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),Object(i.j)("div",{tabindex:"0"}))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.k)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:!1,configurable:!0}),e}(),g={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};v.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}},132:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return i})),o.d(t,"d",(function(){return d}));var a=o(1),i=function(e,t){return null!==t.closest(e)},r=function(e,t){var o;return"string"===typeof e&&e.length>0?Object.assign(((o={"ion-color":!0})["ion-color-"+e]=!0,o),t):t},n=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,d=function(e,t,o,i){return Object(a.a)(void 0,void 0,void 0,(function(){var r;return Object(a.c)(this,(function(a){return null!=e&&"#"!==e[0]&&!s.test(e)&&(r=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,r.push(e,o,i)]):[2,!1]}))}))}},134:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return r}));var a=o(1),i=function(e,t,o,i,r){return Object(a.a)(void 0,void 0,void 0,(function(){var n;return Object(a.c)(this,(function(a){switch(a.label){case 0:if(e)return[2,e.attachViewToDom(t,o,r,i)];if("string"!==typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");return n="string"===typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o,i&&i.forEach((function(e){return n.classList.add(e)})),r&&Object.assign(n,r),t.appendChild(n),n.componentOnReady?[4,n.componentOnReady()]:[3,2];case 1:a.sent(),a.label=2;case 2:return[2,n]}}))}))},r=function(e,t){if(t){if(e){var o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=8.ecc28b03.chunk.js.map