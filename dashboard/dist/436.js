/*! For license information please see 436.js.LICENSE.txt */
"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[436],{462:(e,n,o)=>{var r=o(597),t=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,o){var r,a={},c=null,f=null;for(r in void 0!==o&&(c=""+o),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(f=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:f,props:a,_owner:s.current}}n.jsx=a,n.jsxs=a},70:(e,n,o)=>{e.exports=o(462)},949:(e,n,o)=>{o.d(n,{$k:()=>c});var r=o(706);o(233),o(150),r.isPlainObject;var t=(0,r.createAction)("__rtkq/focused"),i=(0,r.createAction)("__rtkq/unfocused"),s=(0,r.createAction)("__rtkq/online"),d=(0,r.createAction)("__rtkq/offline"),a=!1;function c(e,n){return n?n(e,{onFocus:t,onFocusLost:i,onOffline:d,onOnline:s}):function(){const n=()=>e(t()),o=()=>e(s()),r=()=>e(d()),c=()=>{"visible"===window.document.visibilityState?n():e(i())};return a||"undefined"!=typeof window&&window.addEventListener&&(window.addEventListener("visibilitychange",c,!1),window.addEventListener("focus",n,!1),window.addEventListener("online",o,!1),window.addEventListener("offline",r,!1),a=!0),()=>{window.removeEventListener("focus",n),window.removeEventListener("visibilitychange",c),window.removeEventListener("online",o),window.removeEventListener("offline",r),a=!1}}()}Symbol("forceQueryFn");WeakMap;new Error("Promise never resolved before cacheEntryRemoved.")}}]);