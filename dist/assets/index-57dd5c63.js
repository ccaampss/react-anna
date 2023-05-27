(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function uS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iv={exports:{}},su={},sv={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),cS=Symbol.for("react.portal"),hS=Symbol.for("react.fragment"),dS=Symbol.for("react.strict_mode"),fS=Symbol.for("react.profiler"),pS=Symbol.for("react.provider"),mS=Symbol.for("react.context"),gS=Symbol.for("react.forward_ref"),yS=Symbol.for("react.suspense"),vS=Symbol.for("react.memo"),wS=Symbol.for("react.lazy"),cm=Symbol.iterator;function ES(t){return t===null||typeof t!="object"?null:(t=cm&&t[cm]||t["@@iterator"],typeof t=="function"?t:null)}var ov={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},av=Object.assign,lv={};function Wi(t,e,r){this.props=t,this.context=e,this.refs=lv,this.updater=r||ov}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uv(){}uv.prototype=Wi.prototype;function zd(t,e,r){this.props=t,this.context=e,this.refs=lv,this.updater=r||ov}var Hd=zd.prototype=new uv;Hd.constructor=zd;av(Hd,Wi.prototype);Hd.isPureReactComponent=!0;var hm=Array.isArray,cv=Object.prototype.hasOwnProperty,Gd={current:null},hv={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,r){var i,s={},o=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)cv.call(e,i)&&!hv.hasOwnProperty(i)&&(s[i]=e[i]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)s[i]===void 0&&(s[i]=l[i]);return{$$typeof:xo,type:t,key:o,ref:a,props:s,_owner:Gd.current}}function _S(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function SS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var dm=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?SS(""+t.key):e.toString(36)}function $a(t,e,r,i,s){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case xo:case cS:a=!0}}if(a)return a=t,s=s(a),t=i===""?"."+hc(a,0):i,hm(s)?(r="",t!=null&&(r=t.replace(dm,"$&/")+"/"),$a(s,e,r,"",function(c){return c})):s!=null&&(Wd(s)&&(s=_S(s,r+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(dm,"$&/")+"/")+t)),e.push(s)),1;if(a=0,i=i===""?".":i+":",hm(t))for(var l=0;l<t.length;l++){o=t[l];var u=i+hc(o,l);a+=$a(o,e,r,u,s)}else if(u=ES(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=i+hc(o,l++),a+=$a(o,e,r,u,s);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ua(t,e,r){if(t==null)return t;var i=[],s=0;return $a(t,i,"","",function(o){return e.call(r,o,s++)}),i}function IS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},ja={transition:null},AS={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:ja,ReactCurrentOwner:Gd};W.Children={map:ua,forEach:function(t,e,r){ua(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return ua(t,function(){e++}),e},toArray:function(t){return ua(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Wi;W.Fragment=hS;W.Profiler=fS;W.PureComponent=zd;W.StrictMode=dS;W.Suspense=yS;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AS;W.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=av({},t.props),s=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Gd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)cv.call(e,u)&&!hv.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:xo,type:t.type,key:s,ref:o,props:i,_owner:a}};W.createContext=function(t){return t={$$typeof:mS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pS,_context:t},t.Consumer=t};W.createElement=dv;W.createFactory=function(t){var e=dv.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:gS,render:t}};W.isValidElement=Wd;W.lazy=function(t){return{$$typeof:wS,_payload:{_status:-1,_result:t},_init:IS}};W.memo=function(t,e){return{$$typeof:vS,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return rt.current.useCallback(t,e)};W.useContext=function(t){return rt.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};W.useEffect=function(t,e){return rt.current.useEffect(t,e)};W.useId=function(){return rt.current.useId()};W.useImperativeHandle=function(t,e,r){return rt.current.useImperativeHandle(t,e,r)};W.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return rt.current.useMemo(t,e)};W.useReducer=function(t,e,r){return rt.current.useReducer(t,e,r)};W.useRef=function(t){return rt.current.useRef(t)};W.useState=function(t){return rt.current.useState(t)};W.useSyncExternalStore=function(t,e,r){return rt.current.useSyncExternalStore(t,e,r)};W.useTransition=function(){return rt.current.useTransition()};W.version="18.2.0";sv.exports=W;var A=sv.exports;const TS=uS(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CS=A,kS=Symbol.for("react.element"),RS=Symbol.for("react.fragment"),NS=Object.prototype.hasOwnProperty,xS=CS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DS={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,r){var i,s={},o=null,a=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)NS.call(e,i)&&!DS.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:kS,type:t,key:o,ref:a,props:s,_owner:xS.current}}su.Fragment=RS;su.jsx=fv;su.jsxs=fv;iv.exports=su;var I=iv.exports,ch={},pv={exports:{}},Et={},mv={exports:{}},gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,V){var z=O.length;O.push(V);e:for(;0<z;){var ge=z-1>>>1,Ce=O[ge];if(0<s(Ce,V))O[ge]=V,O[z]=Ce,z=ge;else break e}}function r(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var V=O[0],z=O.pop();if(z!==V){O[0]=z;e:for(var ge=0,Ce=O.length,aa=Ce>>>1;ge<aa;){var dr=2*(ge+1)-1,cc=O[dr],fr=dr+1,la=O[fr];if(0>s(cc,z))fr<Ce&&0>s(la,cc)?(O[ge]=la,O[fr]=z,ge=fr):(O[ge]=cc,O[dr]=z,ge=dr);else if(fr<Ce&&0>s(la,z))O[ge]=la,O[fr]=z,ge=fr;else break e}}return V}function s(O,V){var z=O.sortIndex-V.sortIndex;return z!==0?z:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],c=[],h=1,d=null,f=3,y=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var V=r(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=O)i(c),V.sortIndex=V.expirationTime,e(u,V);else break;V=r(c)}}function E(O){if(w=!1,g(O),!v)if(r(u)!==null)v=!0,lc(k);else{var V=r(c);V!==null&&uc(E,V.startTime-O)}}function k(O,V){v=!1,w&&(w=!1,m(L),L=-1),y=!0;var z=f;try{for(g(V),d=r(u);d!==null&&(!(d.expirationTime>V)||O&&!Dt());){var ge=d.callback;if(typeof ge=="function"){d.callback=null,f=d.priorityLevel;var Ce=ge(d.expirationTime<=V);V=t.unstable_now(),typeof Ce=="function"?d.callback=Ce:d===r(u)&&i(u),g(V)}else i(u);d=r(u)}if(d!==null)var aa=!0;else{var dr=r(c);dr!==null&&uc(E,dr.startTime-V),aa=!1}return aa}finally{d=null,f=z,y=!1}}var R=!1,x=null,L=-1,Q=5,H=-1;function Dt(){return!(t.unstable_now()-H<Q)}function us(){if(x!==null){var O=t.unstable_now();H=O;var V=!0;try{V=x(!0,O)}finally{V?cs():(R=!1,x=null)}}else R=!1}var cs;if(typeof p=="function")cs=function(){p(us)};else if(typeof MessageChannel<"u"){var um=new MessageChannel,lS=um.port2;um.port1.onmessage=us,cs=function(){lS.postMessage(null)}}else cs=function(){_(us,0)};function lc(O){x=O,R||(R=!0,cs())}function uc(O,V){L=_(function(){O(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,lc(k))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var z=f;f=V;try{return O()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=f;f=O;try{return V()}finally{f=z}},t.unstable_scheduleCallback=function(O,V,z){var ge=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ge+z:ge):z=ge,O){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=z+Ce,O={id:h++,callback:V,priorityLevel:O,startTime:z,expirationTime:Ce,sortIndex:-1},z>ge?(O.sortIndex=z,e(c,O),r(u)===null&&O===r(c)&&(w?(m(L),L=-1):w=!0,uc(E,z-ge))):(O.sortIndex=Ce,e(u,O),v||y||(v=!0,lc(k))),O},t.unstable_shouldYield=Dt,t.unstable_wrapCallback=function(O){var V=f;return function(){var z=f;f=V;try{return O.apply(this,arguments)}finally{f=z}}}})(gv);mv.exports=gv;var PS=mv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=A,vt=PS;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vv=new Set,Ys={};function Vr(t,e){Ni(t,e),Ni(t+"Capture",e)}function Ni(t,e){for(Ys[t]=e,t=0;t<e.length;t++)vv.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hh=Object.prototype.hasOwnProperty,OS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},pm={};function LS(t){return hh.call(pm,t)?!0:hh.call(fm,t)?!1:OS.test(t)?pm[t]=!0:(fm[t]=!0,!1)}function MS(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function US(t,e,r,i){if(e===null||typeof e>"u"||MS(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,r,i,s,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qd,Kd);Fe[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qd,Kd);Fe[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qd,Kd);Fe[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,r,i){var s=Fe.hasOwnProperty(e)?Fe[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(US(e,r,s,i)&&(r=null),i||s===null?LS(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):s.mustUseProperty?t[s.propertyName]=r===null?s.type===3?!1:"":r:(e=s.attributeName,i=s.attributeNamespace,r===null?t.removeAttribute(e):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var An=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),ni=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),fh=Symbol.for("react.suspense"),ph=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),_v=Symbol.for("react.offscreen"),mm=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=mm&&t[mm]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,dc;function Ss(t){if(dc===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function pc(t,e){if(!t||fc)return"";fc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),o=i.stack.split(`
`),a=s.length-1,l=o.length-1;1<=a&&0<=l&&s[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==o[l]){var u=`
`+s[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{fc=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ss(t):""}function bS(t){switch(t.tag){case 5:return Ss(t.type);case 16:return Ss("Lazy");case 13:return Ss("Suspense");case 19:return Ss("SuspenseList");case 0:case 2:case 15:return t=pc(t.type,!1),t;case 11:return t=pc(t.type.render,!1),t;case 1:return t=pc(t.type,!0),t;default:return""}}function mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ri:return"Fragment";case ni:return"Portal";case dh:return"Profiler";case Yd:return"StrictMode";case fh:return"Suspense";case ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ev:return(t.displayName||"Context")+".Consumer";case wv:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:mh(t.type)||"Memo";case kn:e=t._payload,t=t._init;try{return mh(t(e))}catch{}}return null}function FS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mh(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $S(t){var e=Sv(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ha(t){t._valueTracker||(t._valueTracker=$S(t))}function Iv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=Sv(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gh(t,e){var r=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function gm(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=Jn(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Av(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function yh(t,e){Av(t,e);var r=Jn(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vh(t,e.type,r):e.hasOwnProperty("defaultValue")&&vh(t,e.type,Jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ym(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function vh(t,e,r){(e!=="number"||sl(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Is=Array.isArray;function yi(t,e,r,i){if(t=t.options,e){e={};for(var s=0;s<r.length;s++)e["$"+r[s]]=!0;for(r=0;r<t.length;r++)s=e.hasOwnProperty("$"+t[r].value),t[r].selected!==s&&(t[r].selected=s),s&&i&&(t[r].defaultSelected=!0)}else{for(r=""+Jn(r),e=null,s=0;s<t.length;s++){if(t[s].value===r){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function wh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vm(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(T(92));if(Is(r)){if(1<r.length)throw Error(T(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Jn(r)}}function Tv(t,e){var r=Jn(e.value),i=Jn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,kv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xs(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jS=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){jS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function Rv(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function Nv(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=Rv(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,s):t[r]=s}}var BS=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _h(t,e){if(e){if(BS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Sh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ih=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ah=null,vi=null,wi=null;function Em(t){if(t=Oo(t)){if(typeof Ah!="function")throw Error(T(280));var e=t.stateNode;e&&(e=cu(e),Ah(t.stateNode,t.type,e))}}function xv(t){vi?wi?wi.push(t):wi=[t]:vi=t}function Dv(){if(vi){var t=vi,e=wi;if(wi=vi=null,Em(t),e)for(t=0;t<e.length;t++)Em(e[t])}}function Pv(t,e){return t(e)}function Ov(){}var mc=!1;function Lv(t,e,r){if(mc)return t(e,r);mc=!0;try{return Pv(t,e,r)}finally{mc=!1,(vi!==null||wi!==null)&&(Ov(),Dv())}}function Js(t,e){var r=t.stateNode;if(r===null)return null;var i=cu(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(T(231,e,typeof r));return r}var Th=!1;if(mn)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){Th=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{Th=!1}function VS(t,e,r,i,s,o,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(h){this.onError(h)}}var Ms=!1,ol=null,al=!1,Ch=null,zS={onError:function(t){Ms=!0,ol=t}};function HS(t,e,r,i,s,o,a,l,u){Ms=!1,ol=null,VS.apply(zS,arguments)}function GS(t,e,r,i,s,o,a,l,u){if(HS.apply(this,arguments),Ms){if(Ms){var c=ol;Ms=!1,ol=null}else throw Error(T(198));al||(al=!0,Ch=c)}}function zr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Mv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _m(t){if(zr(t)!==t)throw Error(T(188))}function WS(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var r=t,i=e;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return _m(s),t;if(o===i)return _m(s),e;o=o.sibling}throw Error(T(188))}if(r.return!==i.return)r=s,i=o;else{for(var a=!1,l=s.child;l;){if(l===r){a=!0,r=s,i=o;break}if(l===i){a=!0,i=s,r=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===r){a=!0,r=o,i=s;break}if(l===i){a=!0,i=o,r=s;break}l=l.sibling}if(!a)throw Error(T(189))}}if(r.alternate!==i)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?t:e}function Uv(t){return t=WS(t),t!==null?bv(t):null}function bv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bv(t);if(e!==null)return e;t=t.sibling}return null}var Fv=vt.unstable_scheduleCallback,Sm=vt.unstable_cancelCallback,qS=vt.unstable_shouldYield,KS=vt.unstable_requestPaint,ye=vt.unstable_now,QS=vt.unstable_getCurrentPriorityLevel,ef=vt.unstable_ImmediatePriority,$v=vt.unstable_UserBlockingPriority,ll=vt.unstable_NormalPriority,YS=vt.unstable_LowPriority,jv=vt.unstable_IdlePriority,ou=null,Kt=null;function XS(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:eI,JS=Math.log,ZS=Math.LN2;function eI(t){return t>>>=0,t===0?32:31-(JS(t)/ZS|0)|0}var fa=64,pa=4194304;function As(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,s=t.suspendedLanes,o=t.pingedLanes,a=r&268435455;if(a!==0){var l=a&~s;l!==0?i=As(l):(o&=a,o!==0&&(i=As(o)))}else a=r&~s,a!==0?i=As(a):o!==0&&(i=As(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,o=e&-e,s>=o||s===16&&(o&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-Ut(e),s=1<<r,i|=t[r],e&=~s;return i}function tI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nI(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Ut(o),l=1<<a,u=s[a];u===-1?(!(l&r)||l&i)&&(s[a]=tI(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bv(){var t=fa;return fa<<=1,!(fa&4194240)&&(fa=64),t}function gc(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Do(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=r}function rI(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var s=31-Ut(r),o=1<<s;e[s]=0,i[s]=-1,t[s]=-1,r&=~o}}function tf(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-Ut(r),s=1<<i;s&e|t[i]&e&&(t[i]|=e),r&=~s}}var J=0;function Vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zv,nf,Hv,Gv,Wv,Rh=!1,ma=[],jn=null,Bn=null,Vn=null,Zs=new Map,eo=new Map,Nn=[],iI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Im(t,e){switch(t){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function fs(t,e,r,i,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},e!==null&&(e=Oo(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function sI(t,e,r,i,s){switch(e){case"focusin":return jn=fs(jn,t,e,r,i,s),!0;case"dragenter":return Bn=fs(Bn,t,e,r,i,s),!0;case"mouseover":return Vn=fs(Vn,t,e,r,i,s),!0;case"pointerover":var o=s.pointerId;return Zs.set(o,fs(Zs.get(o)||null,t,e,r,i,s)),!0;case"gotpointercapture":return o=s.pointerId,eo.set(o,fs(eo.get(o)||null,t,e,r,i,s)),!0}return!1}function qv(t){var e=yr(t.target);if(e!==null){var r=zr(e);if(r!==null){if(e=r.tag,e===13){if(e=Mv(r),e!==null){t.blockedOn=e,Wv(t.priority,function(){Hv(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);Ih=i,r.target.dispatchEvent(i),Ih=null}else return e=Oo(r),e!==null&&nf(e),t.blockedOn=r,!1;e.shift()}return!0}function Am(t,e,r){Ba(t)&&r.delete(e)}function oI(){Rh=!1,jn!==null&&Ba(jn)&&(jn=null),Bn!==null&&Ba(Bn)&&(Bn=null),Vn!==null&&Ba(Vn)&&(Vn=null),Zs.forEach(Am),eo.forEach(Am)}function ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Rh||(Rh=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,oI)))}function to(t){function e(s){return ps(s,t)}if(0<ma.length){ps(ma[0],t);for(var r=1;r<ma.length;r++){var i=ma[r];i.blockedOn===t&&(i.blockedOn=null)}}for(jn!==null&&ps(jn,t),Bn!==null&&ps(Bn,t),Vn!==null&&ps(Vn,t),Zs.forEach(e),eo.forEach(e),r=0;r<Nn.length;r++)i=Nn[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<Nn.length&&(r=Nn[0],r.blockedOn===null);)qv(r),r.blockedOn===null&&Nn.shift()}var Ei=An.ReactCurrentBatchConfig,cl=!0;function aI(t,e,r,i){var s=J,o=Ei.transition;Ei.transition=null;try{J=1,rf(t,e,r,i)}finally{J=s,Ei.transition=o}}function lI(t,e,r,i){var s=J,o=Ei.transition;Ei.transition=null;try{J=4,rf(t,e,r,i)}finally{J=s,Ei.transition=o}}function rf(t,e,r,i){if(cl){var s=Nh(t,e,r,i);if(s===null)Cc(t,e,i,hl,r),Im(t,i);else if(sI(s,t,e,r,i))i.stopPropagation();else if(Im(t,i),e&4&&-1<iI.indexOf(t)){for(;s!==null;){var o=Oo(s);if(o!==null&&zv(o),o=Nh(t,e,r,i),o===null&&Cc(t,e,i,hl,r),o===s)break;s=o}s!==null&&i.stopPropagation()}else Cc(t,e,i,null,r)}}var hl=null;function Nh(t,e,r,i){if(hl=null,t=Zd(i),t=yr(t),t!==null)if(e=zr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Mv(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function Kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QS()){case ef:return 1;case $v:return 4;case ll:case YS:return 16;case jv:return 536870912;default:return 16}default:return 16}}var Un=null,sf=null,Va=null;function Qv(){if(Va)return Va;var t,e=sf,r=e.length,i,s="value"in Un?Un.value:Un.textContent,o=s.length;for(t=0;t<r&&e[t]===s[t];t++);var a=r-t;for(i=1;i<=a&&e[r-i]===s[o-i];i++);return Va=s.slice(t,1<i?1-i:void 0)}function za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function Tm(){return!1}function _t(t){function e(r,i,s,o,a){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ga:Tm,this.isPropagationStopped=Tm,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=_t(qi),Po=he({},qi,{view:0,detail:0}),uI=_t(Po),yc,vc,ms,au=he({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ms&&(ms&&t.type==="mousemove"?(yc=t.screenX-ms.screenX,vc=t.screenY-ms.screenY):vc=yc=0,ms=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),Cm=_t(au),cI=he({},au,{dataTransfer:0}),hI=_t(cI),dI=he({},Po,{relatedTarget:0}),wc=_t(dI),fI=he({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),pI=_t(fI),mI=he({},qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gI=_t(mI),yI=he({},qi,{data:0}),km=_t(yI),vI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _I(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=EI[t])?!!e[t]:!1}function af(){return _I}var SI=he({},Po,{key:function(t){if(t.key){var e=vI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),II=_t(SI),AI=he({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=_t(AI),TI=he({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),CI=_t(TI),kI=he({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),RI=_t(kI),NI=he({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xI=_t(NI),DI=[9,13,27,32],lf=mn&&"CompositionEvent"in window,Us=null;mn&&"documentMode"in document&&(Us=document.documentMode);var PI=mn&&"TextEvent"in window&&!Us,Yv=mn&&(!lf||Us&&8<Us&&11>=Us),Nm=String.fromCharCode(32),xm=!1;function Xv(t,e){switch(t){case"keyup":return DI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ii=!1;function OI(t,e){switch(t){case"compositionend":return Jv(e);case"keypress":return e.which!==32?null:(xm=!0,Nm);case"textInput":return t=e.data,t===Nm&&xm?null:t;default:return null}}function LI(t,e){if(ii)return t==="compositionend"||!lf&&Xv(t,e)?(t=Qv(),Va=sf=Un=null,ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yv&&e.locale!=="ko"?null:e.data;default:return null}}var MI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MI[t.type]:e==="textarea"}function Zv(t,e,r,i){xv(i),e=dl(e,"onChange"),0<e.length&&(r=new of("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var bs=null,no=null;function UI(t){c0(t,0)}function lu(t){var e=ai(t);if(Iv(e))return t}function bI(t,e){if(t==="change")return e}var e0=!1;if(mn){var Ec;if(mn){var _c="oninput"in document;if(!_c){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),_c=typeof Pm.oninput=="function"}Ec=_c}else Ec=!1;e0=Ec&&(!document.documentMode||9<document.documentMode)}function Om(){bs&&(bs.detachEvent("onpropertychange",t0),no=bs=null)}function t0(t){if(t.propertyName==="value"&&lu(no)){var e=[];Zv(e,no,t,Zd(t)),Lv(UI,e)}}function FI(t,e,r){t==="focusin"?(Om(),bs=e,no=r,bs.attachEvent("onpropertychange",t0)):t==="focusout"&&Om()}function $I(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(no)}function jI(t,e){if(t==="click")return lu(e)}function BI(t,e){if(t==="input"||t==="change")return lu(e)}function VI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:VI;function ro(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!hh.call(e,s)||!Ft(t[s],e[s]))return!1}return!0}function Lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,e){var r=Lm(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Lm(r)}}function n0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r0(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=sl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zI(t){var e=r0(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&n0(r.ownerDocument.documentElement,r)){if(i!==null&&uf(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=r.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!t.extend&&o>i&&(s=i,i=o,o=s),s=Mm(r,o);var a=Mm(r,i);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HI=mn&&"documentMode"in document&&11>=document.documentMode,si=null,xh=null,Fs=null,Dh=!1;function Um(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Dh||si==null||si!==sl(i)||(i=si,"selectionStart"in i&&uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fs&&ro(Fs,i)||(Fs=i,i=dl(xh,"onSelect"),0<i.length&&(e=new of("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=si)))}function ya(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var oi={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},Sc={},i0={};mn&&(i0=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function uu(t){if(Sc[t])return Sc[t];if(!oi[t])return t;var e=oi[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in i0)return Sc[t]=e[r];return t}var s0=uu("animationend"),o0=uu("animationiteration"),a0=uu("animationstart"),l0=uu("transitionend"),u0=new Map,bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){u0.set(t,e),Vr(e,[t])}for(var Ic=0;Ic<bm.length;Ic++){var Ac=bm[Ic],GI=Ac.toLowerCase(),WI=Ac[0].toUpperCase()+Ac.slice(1);ir(GI,"on"+WI)}ir(s0,"onAnimationEnd");ir(o0,"onAnimationIteration");ir(a0,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(l0,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));function Fm(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,GS(i,e,void 0,t),t.currentTarget=null}function c0(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],s=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&s.isPropagationStopped())break e;Fm(s,l,c),o=u}else for(a=0;a<i.length;a++){if(l=i[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&s.isPropagationStopped())break e;Fm(s,l,c),o=u}}}if(al)throw t=Ch,al=!1,Ch=null,t}function te(t,e){var r=e[Uh];r===void 0&&(r=e[Uh]=new Set);var i=t+"__bubble";r.has(i)||(h0(e,t,2,!1),r.add(i))}function Tc(t,e,r){var i=0;e&&(i|=4),h0(r,t,i,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[va]){t[va]=!0,vv.forEach(function(r){r!=="selectionchange"&&(qI.has(r)||Tc(r,!1,t),Tc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[va]||(e[va]=!0,Tc("selectionchange",!1,e))}}function h0(t,e,r,i){switch(Kv(e)){case 1:var s=aI;break;case 4:s=lI;break;default:s=rf}r=s.bind(null,e,r,t),s=void 0,!Th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,r,{capture:!0,passive:s}):t.addEventListener(e,r,!0):s!==void 0?t.addEventListener(e,r,{passive:s}):t.addEventListener(e,r,!1)}function Cc(t,e,r,i,s){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=i.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;a=a.return}for(;l!==null;){if(a=yr(l),a===null)return;if(u=a.tag,u===5||u===6){i=o=a;continue e}l=l.parentNode}}i=i.return}Lv(function(){var c=o,h=Zd(r),d=[];e:{var f=u0.get(t);if(f!==void 0){var y=of,v=t;switch(t){case"keypress":if(za(r)===0)break e;case"keydown":case"keyup":y=II;break;case"focusin":v="focus",y=wc;break;case"focusout":v="blur",y=wc;break;case"beforeblur":case"afterblur":y=wc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=CI;break;case s0:case o0:case a0:y=pI;break;case l0:y=RI;break;case"scroll":y=uI;break;case"wheel":y=xI;break;case"copy":case"cut":case"paste":y=gI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Rm}var w=(e&4)!==0,_=!w&&t==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var p=c,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=Js(p,m),E!=null&&w.push(so(p,E,g)))),_)break;p=p.return}0<w.length&&(f=new y(f,v,null,r,h),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&r!==Ih&&(v=r.relatedTarget||r.fromElement)&&(yr(v)||v[gn]))break e;if((y||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=r.relatedTarget||r.toElement,y=c,v=v?yr(v):null,v!==null&&(_=zr(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(w=Cm,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Rm,E="onPointerLeave",m="onPointerEnter",p="pointer"),_=y==null?f:ai(y),g=v==null?f:ai(v),f=new w(E,p+"leave",y,r,h),f.target=_,f.relatedTarget=g,E=null,yr(h)===c&&(w=new w(m,p+"enter",v,r,h),w.target=g,w.relatedTarget=_,E=w),_=E,y&&v)t:{for(w=y,m=v,p=0,g=w;g;g=Yr(g))p++;for(g=0,E=m;E;E=Yr(E))g++;for(;0<p-g;)w=Yr(w),p--;for(;0<g-p;)m=Yr(m),g--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Yr(w),m=Yr(m)}w=null}else w=null;y!==null&&$m(d,f,y,w,!1),v!==null&&_!==null&&$m(d,_,v,w,!0)}}e:{if(f=c?ai(c):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var k=bI;else if(Dm(f))if(e0)k=BI;else{k=$I;var R=FI}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=jI);if(k&&(k=k(t,c))){Zv(d,k,r,h);break e}R&&R(t,f,c),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&vh(f,"number",f.value)}switch(R=c?ai(c):window,t){case"focusin":(Dm(R)||R.contentEditable==="true")&&(si=R,xh=c,Fs=null);break;case"focusout":Fs=xh=si=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,Um(d,r,h);break;case"selectionchange":if(HI)break;case"keydown":case"keyup":Um(d,r,h)}var x;if(lf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ii?Xv(t,r)&&(L="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(Yv&&r.locale!=="ko"&&(ii||L!=="onCompositionStart"?L==="onCompositionEnd"&&ii&&(x=Qv()):(Un=h,sf="value"in Un?Un.value:Un.textContent,ii=!0)),R=dl(c,L),0<R.length&&(L=new km(L,t,null,r,h),d.push({event:L,listeners:R}),x?L.data=x:(x=Jv(r),x!==null&&(L.data=x)))),(x=PI?OI(t,r):LI(t,r))&&(c=dl(c,"onBeforeInput"),0<c.length&&(h=new km("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:c}),h.data=x))}c0(d,e)})}function so(t,e,r){return{instance:t,listener:e,currentTarget:r}}function dl(t,e){for(var r=e+"Capture",i=[];t!==null;){var s=t,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Js(t,r),o!=null&&i.unshift(so(t,o,s)),o=Js(t,e),o!=null&&i.push(so(t,o,s))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $m(t,e,r,i,s){for(var o=e._reactName,a=[];r!==null&&r!==i;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===i)break;l.tag===5&&c!==null&&(l=c,s?(u=Js(r,o),u!=null&&a.unshift(so(r,u,l))):s||(u=Js(r,o),u!=null&&a.push(so(r,u,l)))),r=r.return}a.length!==0&&t.push({event:e,listeners:a})}var KI=/\r\n?/g,QI=/\u0000|\uFFFD/g;function jm(t){return(typeof t=="string"?t:""+t).replace(KI,`
`).replace(QI,"")}function wa(t,e,r){if(e=jm(e),jm(t)!==e&&r)throw Error(T(425))}function fl(){}var Ph=null,Oh=null;function Lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mh=typeof setTimeout=="function"?setTimeout:void 0,YI=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,XI=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(t){return Bm.resolve(null).then(t).catch(JI)}:Mh;function JI(t){setTimeout(function(){throw t})}function kc(t,e){var r=e,i=0;do{var s=r.nextSibling;if(t.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){t.removeChild(s),to(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);to(e)}function zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Ki,oo="__reactProps$"+Ki,gn="__reactContainer$"+Ki,Uh="__reactEvents$"+Ki,ZI="__reactListeners$"+Ki,eA="__reactHandles$"+Ki;function yr(t){var e=t[Ht];if(e)return e;for(var r=t.parentNode;r;){if(e=r[gn]||r[Ht]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Vm(t);t!==null;){if(r=t[Ht])return r;t=Vm(t)}return e}t=r,r=t.parentNode}return null}function Oo(t){return t=t[Ht]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function cu(t){return t[oo]||null}var bh=[],li=-1;function sr(t){return{current:t}}function re(t){0>li||(t.current=bh[li],bh[li]=null,li--)}function ee(t,e){li++,bh[li]=t.current,t.current=e}var Zn={},Ye=sr(Zn),ut=sr(!1),Rr=Zn;function xi(t,e){var r=t.type.contextTypes;if(!r)return Zn;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ct(t){return t=t.childContextTypes,t!=null}function pl(){re(ut),re(Ye)}function zm(t,e,r){if(Ye.current!==Zn)throw Error(T(168));ee(Ye,e),ee(ut,r)}function d0(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(T(108,FS(t)||"Unknown",s));return he({},r,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zn,Rr=Ye.current,ee(Ye,t),ee(ut,ut.current),!0}function Hm(t,e,r){var i=t.stateNode;if(!i)throw Error(T(169));r?(t=d0(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,re(ut),re(Ye),ee(Ye,t)):re(ut),ee(ut,r)}var sn=null,hu=!1,Rc=!1;function f0(t){sn===null?sn=[t]:sn.push(t)}function tA(t){hu=!0,f0(t)}function or(){if(!Rc&&sn!==null){Rc=!0;var t=0,e=J;try{var r=sn;for(J=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}sn=null,hu=!1}catch(s){throw sn!==null&&(sn=sn.slice(t+1)),Fv(ef,or),s}finally{J=e,Rc=!1}}return null}var ui=[],ci=0,gl=null,yl=0,St=[],It=0,Nr=null,on=1,an="";function pr(t,e){ui[ci++]=yl,ui[ci++]=gl,gl=t,yl=e}function p0(t,e,r){St[It++]=on,St[It++]=an,St[It++]=Nr,Nr=t;var i=on;t=an;var s=32-Ut(i)-1;i&=~(1<<s),r+=1;var o=32-Ut(e)+s;if(30<o){var a=s-s%5;o=(i&(1<<a)-1).toString(32),i>>=a,s-=a,on=1<<32-Ut(e)+s|r<<s|i,an=o+t}else on=1<<o|r<<s|i,an=t}function cf(t){t.return!==null&&(pr(t,1),p0(t,1,0))}function hf(t){for(;t===gl;)gl=ui[--ci],ui[ci]=null,yl=ui[--ci],ui[ci]=null;for(;t===Nr;)Nr=St[--It],St[It]=null,an=St[--It],St[It]=null,on=St[--It],St[It]=null}var yt=null,pt=null,oe=!1,Mt=null;function m0(t,e){var r=Tt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Gm(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,pt=zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Nr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Tt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,yt=t,pt=null,!0):!1;default:return!1}}function Fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $h(t){if(oe){var e=pt;if(e){var r=e;if(!Gm(t,e)){if(Fh(t))throw Error(T(418));e=zn(r.nextSibling);var i=yt;e&&Gm(t,e)?m0(i,r):(t.flags=t.flags&-4097|2,oe=!1,yt=t)}}else{if(Fh(t))throw Error(T(418));t.flags=t.flags&-4097|2,oe=!1,yt=t}}}function Wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function Ea(t){if(t!==yt)return!1;if(!oe)return Wm(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lh(t.type,t.memoizedProps)),e&&(e=pt)){if(Fh(t))throw g0(),Error(T(418));for(;e;)m0(t,e),e=zn(e.nextSibling)}if(Wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){pt=zn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}pt=null}}else pt=yt?zn(t.stateNode.nextSibling):null;return!0}function g0(){for(var t=pt;t;)t=zn(t.nextSibling)}function Di(){pt=yt=null,oe=!1}function df(t){Mt===null?Mt=[t]:Mt.push(t)}var nA=An.ReactCurrentBatchConfig;function Ot(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var vl=sr(null),wl=null,hi=null,ff=null;function pf(){ff=hi=wl=null}function mf(t){var e=vl.current;re(vl),t._currentValue=e}function jh(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function _i(t,e){wl=t,ff=hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lt=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},hi===null){if(wl===null)throw Error(T(308));hi=t,wl.dependencies={lanes:0,firstContext:t}}else hi=hi.next=t;return e}var vr=null;function gf(t){vr===null?vr=[t]:vr.push(t)}function y0(t,e,r,i){var s=e.interleaved;return s===null?(r.next=r,gf(e)):(r.next=s.next,s.next=r),e.interleaved=r,yn(t,i)}function yn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Rn=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,K&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,yn(t,r)}return s=i.interleaved,s===null?(e.next=e,gf(i)):(e.next=s.next,s.next=e),i.interleaved=e,yn(t,r)}function Ha(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,tf(t,r)}}function qm(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?s=o=e:o=o.next=e}else s=o=e;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function El(t,e,r,i){var s=t.updateQueue;Rn=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(o!==null){var d=s.baseState;a=0,h=c=u=null,l=o;do{var f=l.lane,y=l.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(f=e,y=r,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=he({},d,f);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else y={eventTime:y,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=y,u=d):h=h.next=y,a|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(h===null&&(u=d),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else o===null&&(s.shared.lanes=0);Dr|=a,t.lanes=a,t.memoizedState=d}}function Km(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(T(191,s));s.call(i)}}}var w0=new yv.Component().refs;function Bh(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:he({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var du={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=nt(),s=Wn(t),o=dn(i,s);o.payload=e,r!=null&&(o.callback=r),e=Hn(t,o,s),e!==null&&(bt(e,t,s,i),Ha(e,t,s))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=nt(),s=Wn(t),o=dn(i,s);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=Hn(t,o,s),e!==null&&(bt(e,t,s,i),Ha(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=nt(),i=Wn(t),s=dn(r,i);s.tag=2,e!=null&&(s.callback=e),e=Hn(t,s,i),e!==null&&(bt(e,t,i,r),Ha(e,t,i))}};function Qm(t,e,r,i,s,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,a):e.prototype&&e.prototype.isPureReactComponent?!ro(r,i)||!ro(s,o):!0}function E0(t,e,r){var i=!1,s=Zn,o=e.contextType;return typeof o=="object"&&o!==null?o=Nt(o):(s=ct(e)?Rr:Ye.current,i=e.contextTypes,o=(i=i!=null)?xi(t,s):Zn),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=o),e}function Ym(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Vh(t,e,r,i){var s=t.stateNode;s.props=r,s.state=t.memoizedState,s.refs=w0,yf(t);var o=e.contextType;typeof o=="object"&&o!==null?s.context=Nt(o):(o=ct(e)?Rr:Ye.current,s.context=xi(t,o)),s.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Bh(t,e,o,r),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&du.enqueueReplaceState(s,s.state,null),El(t,r,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var i=r.stateNode}if(!i)throw Error(T(147,t));var s=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var l=s.refs;l===w0&&(l=s.refs={}),a===null?delete l[o]:l[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,t))}return t}function _a(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xm(t){var e=t._init;return e(t._payload)}function _0(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function r(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function i(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=qn(m,p),m.index=0,m.sibling=null,m}function o(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,E){return p===null||p.tag!==6?(p=Mc(g,m.mode,E),p.return=m,p):(p=s(p,g),p.return=m,p)}function u(m,p,g,E){var k=g.type;return k===ri?h(m,p,g.props.children,E,g.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===kn&&Xm(k)===p.type)?(E=s(p,g.props),E.ref=gs(m,p,g),E.return=m,E):(E=Ya(g.type,g.key,g.props,null,m.mode,E),E.ref=gs(m,p,g),E.return=m,E)}function c(m,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Uc(g,m.mode,E),p.return=m,p):(p=s(p,g.children||[]),p.return=m,p)}function h(m,p,g,E,k){return p===null||p.tag!==7?(p=Ar(g,m.mode,E,k),p.return=m,p):(p=s(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Mc(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ca:return g=Ya(p.type,p.key,p.props,null,m.mode,g),g.ref=gs(m,null,p),g.return=m,g;case ni:return p=Uc(p,m.mode,g),p.return=m,p;case kn:var E=p._init;return d(m,E(p._payload),g)}if(Is(p)||hs(p))return p=Ar(p,m.mode,g,null),p.return=m,p;_a(m,p)}return null}function f(m,p,g,E){var k=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:return g.key===k?u(m,p,g,E):null;case ni:return g.key===k?c(m,p,g,E):null;case kn:return k=g._init,f(m,p,k(g._payload),E)}if(Is(g)||hs(g))return k!==null?null:h(m,p,g,E,null);_a(m,g)}return null}function y(m,p,g,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,l(p,m,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ca:return m=m.get(E.key===null?g:E.key)||null,u(p,m,E,k);case ni:return m=m.get(E.key===null?g:E.key)||null,c(p,m,E,k);case kn:var R=E._init;return y(m,p,g,R(E._payload),k)}if(Is(E)||hs(E))return m=m.get(g)||null,h(p,m,E,k,null);_a(p,E)}return null}function v(m,p,g,E){for(var k=null,R=null,x=p,L=p=0,Q=null;x!==null&&L<g.length;L++){x.index>L?(Q=x,x=null):Q=x.sibling;var H=f(m,x,g[L],E);if(H===null){x===null&&(x=Q);break}t&&x&&H.alternate===null&&e(m,x),p=o(H,p,L),R===null?k=H:R.sibling=H,R=H,x=Q}if(L===g.length)return r(m,x),oe&&pr(m,L),k;if(x===null){for(;L<g.length;L++)x=d(m,g[L],E),x!==null&&(p=o(x,p,L),R===null?k=x:R.sibling=x,R=x);return oe&&pr(m,L),k}for(x=i(m,x);L<g.length;L++)Q=y(x,m,L,g[L],E),Q!==null&&(t&&Q.alternate!==null&&x.delete(Q.key===null?L:Q.key),p=o(Q,p,L),R===null?k=Q:R.sibling=Q,R=Q);return t&&x.forEach(function(Dt){return e(m,Dt)}),oe&&pr(m,L),k}function w(m,p,g,E){var k=hs(g);if(typeof k!="function")throw Error(T(150));if(g=k.call(g),g==null)throw Error(T(151));for(var R=k=null,x=p,L=p=0,Q=null,H=g.next();x!==null&&!H.done;L++,H=g.next()){x.index>L?(Q=x,x=null):Q=x.sibling;var Dt=f(m,x,H.value,E);if(Dt===null){x===null&&(x=Q);break}t&&x&&Dt.alternate===null&&e(m,x),p=o(Dt,p,L),R===null?k=Dt:R.sibling=Dt,R=Dt,x=Q}if(H.done)return r(m,x),oe&&pr(m,L),k;if(x===null){for(;!H.done;L++,H=g.next())H=d(m,H.value,E),H!==null&&(p=o(H,p,L),R===null?k=H:R.sibling=H,R=H);return oe&&pr(m,L),k}for(x=i(m,x);!H.done;L++,H=g.next())H=y(x,m,L,H.value,E),H!==null&&(t&&H.alternate!==null&&x.delete(H.key===null?L:H.key),p=o(H,p,L),R===null?k=H:R.sibling=H,R=H);return t&&x.forEach(function(us){return e(m,us)}),oe&&pr(m,L),k}function _(m,p,g,E){if(typeof g=="object"&&g!==null&&g.type===ri&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:e:{for(var k=g.key,R=p;R!==null;){if(R.key===k){if(k=g.type,k===ri){if(R.tag===7){r(m,R.sibling),p=s(R,g.props.children),p.return=m,m=p;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===kn&&Xm(k)===R.type){r(m,R.sibling),p=s(R,g.props),p.ref=gs(m,R,g),p.return=m,m=p;break e}r(m,R);break}else e(m,R);R=R.sibling}g.type===ri?(p=Ar(g.props.children,m.mode,E,g.key),p.return=m,m=p):(E=Ya(g.type,g.key,g.props,null,m.mode,E),E.ref=gs(m,p,g),E.return=m,m=E)}return a(m);case ni:e:{for(R=g.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){r(m,p.sibling),p=s(p,g.children||[]),p.return=m,m=p;break e}else{r(m,p);break}else e(m,p);p=p.sibling}p=Uc(g,m.mode,E),p.return=m,m=p}return a(m);case kn:return R=g._init,_(m,p,R(g._payload),E)}if(Is(g))return v(m,p,g,E);if(hs(g))return w(m,p,g,E);_a(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(r(m,p.sibling),p=s(p,g),p.return=m,m=p):(r(m,p),p=Mc(g,m.mode,E),p.return=m,m=p),a(m)):r(m,p)}return _}var Pi=_0(!0),S0=_0(!1),Lo={},Qt=sr(Lo),ao=sr(Lo),lo=sr(Lo);function wr(t){if(t===Lo)throw Error(T(174));return t}function vf(t,e){switch(ee(lo,e),ee(ao,t),ee(Qt,Lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eh(e,t)}re(Qt),ee(Qt,e)}function Oi(){re(Qt),re(ao),re(lo)}function I0(t){wr(lo.current);var e=wr(Qt.current),r=Eh(e,t.type);e!==r&&(ee(ao,t),ee(Qt,r))}function wf(t){ao.current===t&&(re(Qt),re(ao))}var ue=sr(0);function _l(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function Ef(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Ga=An.ReactCurrentDispatcher,xc=An.ReactCurrentBatchConfig,xr=0,ce=null,Ae=null,Re=null,Sl=!1,$s=!1,uo=0,rA=0;function $e(){throw Error(T(321))}function _f(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Ft(t[r],e[r]))return!1;return!0}function Sf(t,e,r,i,s,o){if(xr=o,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=t===null||t.memoizedState===null?aA:lA,t=r(i,s),$s){o=0;do{if($s=!1,uo=0,25<=o)throw Error(T(301));o+=1,Re=Ae=null,e.updateQueue=null,Ga.current=uA,t=r(i,s)}while($s)}if(Ga.current=Il,e=Ae!==null&&Ae.next!==null,xr=0,Re=Ae=ce=null,Sl=!1,e)throw Error(T(300));return t}function If(){var t=uo!==0;return uo=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ce.memoizedState=Re=t:Re=Re.next=t,Re}function xt(){if(Ae===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=Re===null?ce.memoizedState:Re.next;if(e!==null)Re=e,Ae=t;else{if(t===null)throw Error(T(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Re===null?ce.memoizedState=Re=t:Re=Re.next=t}return Re}function co(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=xt(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var i=Ae,s=i.baseQueue,o=r.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}i.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,i=i.baseState;var l=a=null,u=null,c=o;do{var h=c.lane;if((xr&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=d,a=i):u=u.next=d,ce.lanes|=h,Dr|=h}c=c.next}while(c!==null&&c!==o);u===null?a=i:u.next=l,Ft(i,e.memoizedState)||(lt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=u,r.lastRenderedState=i}if(t=r.interleaved,t!==null){s=t;do o=s.lane,ce.lanes|=o,Dr|=o,s=s.next;while(s!==t)}else s===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Pc(t){var e=xt(),r=e.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=t;var i=r.dispatch,s=r.pending,o=e.memoizedState;if(s!==null){r.pending=null;var a=s=s.next;do o=t(o,a.action),a=a.next;while(a!==s);Ft(o,e.memoizedState)||(lt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,i]}function A0(){}function T0(t,e){var r=ce,i=xt(),s=e(),o=!Ft(i.memoizedState,s);if(o&&(i.memoizedState=s,lt=!0),i=i.queue,Af(R0.bind(null,r,i,t),[t]),i.getSnapshot!==e||o||Re!==null&&Re.memoizedState.tag&1){if(r.flags|=2048,ho(9,k0.bind(null,r,i,s,e),void 0,null),Ne===null)throw Error(T(349));xr&30||C0(r,e,s)}return s}function C0(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function k0(t,e,r,i){e.value=r,e.getSnapshot=i,N0(e)&&x0(t)}function R0(t,e,r){return r(function(){N0(e)&&x0(t)})}function N0(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Ft(t,r)}catch{return!0}}function x0(t){var e=yn(t,1);e!==null&&bt(e,t,1,-1)}function Jm(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=oA.bind(null,ce,t),[e.memoizedState,t]}function ho(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function D0(){return xt().memoizedState}function Wa(t,e,r,i){var s=zt();ce.flags|=t,s.memoizedState=ho(1|e,r,void 0,i===void 0?null:i)}function fu(t,e,r,i){var s=xt();i=i===void 0?null:i;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,i!==null&&_f(i,a.deps)){s.memoizedState=ho(e,r,o,i);return}}ce.flags|=t,s.memoizedState=ho(1|e,r,o,i)}function Zm(t,e){return Wa(8390656,8,t,e)}function Af(t,e){return fu(2048,8,t,e)}function P0(t,e){return fu(4,2,t,e)}function O0(t,e){return fu(4,4,t,e)}function L0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M0(t,e,r){return r=r!=null?r.concat([t]):null,fu(4,4,L0.bind(null,e,t),r)}function Tf(){}function U0(t,e){var r=xt();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function b0(t,e){var r=xt();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function F0(t,e,r){return xr&21?(Ft(r,e)||(r=Bv(),ce.lanes|=r,Dr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=r)}function iA(t,e){var r=J;J=r!==0&&4>r?r:4,t(!0);var i=xc.transition;xc.transition={};try{t(!1),e()}finally{J=r,xc.transition=i}}function $0(){return xt().memoizedState}function sA(t,e,r){var i=Wn(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},j0(t))B0(e,r);else if(r=y0(t,e,r,i),r!==null){var s=nt();bt(r,t,i,s),V0(r,e,i)}}function oA(t,e,r){var i=Wn(t),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(j0(t))B0(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,r);if(s.hasEagerState=!0,s.eagerState=l,Ft(l,a)){var u=e.interleaved;u===null?(s.next=s,gf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}r=y0(t,e,s,i),r!==null&&(s=nt(),bt(r,t,i,s),V0(r,e,i))}}function j0(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function B0(t,e){$s=Sl=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function V0(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,tf(t,r)}}var Il={readContext:Nt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},aA={readContext:Nt,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:Zm,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Wa(4194308,4,L0.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wa(4,2,t,e)},useMemo:function(t,e){var r=zt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=zt();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sA.bind(null,ce,t),[i.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Jm,useDebugValue:Tf,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Jm(!1),e=t[0];return t=iA.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=ce,s=zt();if(oe){if(r===void 0)throw Error(T(407));r=r()}else{if(r=e(),Ne===null)throw Error(T(349));xr&30||C0(i,e,r)}s.memoizedState=r;var o={value:r,getSnapshot:e};return s.queue=o,Zm(R0.bind(null,i,o,t),[t]),i.flags|=2048,ho(9,k0.bind(null,i,o,r,e),void 0,null),r},useId:function(){var t=zt(),e=Ne.identifierPrefix;if(oe){var r=an,i=on;r=(i&~(1<<32-Ut(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=uo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=rA++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lA={readContext:Nt,useCallback:U0,useContext:Nt,useEffect:Af,useImperativeHandle:M0,useInsertionEffect:P0,useLayoutEffect:O0,useMemo:b0,useReducer:Dc,useRef:D0,useState:function(){return Dc(co)},useDebugValue:Tf,useDeferredValue:function(t){var e=xt();return F0(e,Ae.memoizedState,t)},useTransition:function(){var t=Dc(co)[0],e=xt().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:T0,useId:$0,unstable_isNewReconciler:!1},uA={readContext:Nt,useCallback:U0,useContext:Nt,useEffect:Af,useImperativeHandle:M0,useInsertionEffect:P0,useLayoutEffect:O0,useMemo:b0,useReducer:Pc,useRef:D0,useState:function(){return Pc(co)},useDebugValue:Tf,useDeferredValue:function(t){var e=xt();return Ae===null?e.memoizedState=t:F0(e,Ae.memoizedState,t)},useTransition:function(){var t=Pc(co)[0],e=xt().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:T0,useId:$0,unstable_isNewReconciler:!1};function Li(t,e){try{var r="",i=e;do r+=bS(i),i=i.return;while(i);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:s,digest:null}}function Oc(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function zh(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var cA=typeof WeakMap=="function"?WeakMap:Map;function z0(t,e,r){r=dn(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){Tl||(Tl=!0,Zh=i),zh(t,e)},r}function H0(t,e,r){r=dn(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;r.payload=function(){return i(s)},r.callback=function(){zh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){zh(t,e),typeof i!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),r}function eg(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new cA;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(r)||(s.add(r),t=AA.bind(null,t,e,r),e.then(t,t))}function tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ng(t,e,r,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=dn(-1,1),e.tag=2,Hn(r,e,1))),r.lanes|=1),t)}var hA=An.ReactCurrentOwner,lt=!1;function et(t,e,r,i){e.child=t===null?S0(e,null,r,i):Pi(e,t.child,r,i)}function rg(t,e,r,i,s){r=r.render;var o=e.ref;return _i(e,s),i=Sf(t,e,r,i,o,s),r=If(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,vn(t,e,s)):(oe&&r&&cf(e),e.flags|=1,et(t,e,i,s),e.child)}function ig(t,e,r,i,s){if(t===null){var o=r.type;return typeof o=="function"&&!Of(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,G0(t,e,o,i,s)):(t=Ya(r.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&s)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:ro,r(a,i)&&t.ref===e.ref)return vn(t,e,s)}return e.flags|=1,t=qn(o,i),t.ref=e.ref,t.return=e,e.child=t}function G0(t,e,r,i,s){if(t!==null){var o=t.memoizedProps;if(ro(o,i)&&t.ref===e.ref)if(lt=!1,e.pendingProps=i=o,(t.lanes&s)!==0)t.flags&131072&&(lt=!0);else return e.lanes=t.lanes,vn(t,e,s)}return Hh(t,e,r,i,s)}function W0(t,e,r){var i=e.pendingProps,s=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(fi,dt),dt|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(fi,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:r,ee(fi,dt),dt|=i}else o!==null?(i=o.baseLanes|r,e.memoizedState=null):i=r,ee(fi,dt),dt|=i;return et(t,e,s,r),e.child}function q0(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Hh(t,e,r,i,s){var o=ct(r)?Rr:Ye.current;return o=xi(e,o),_i(e,s),r=Sf(t,e,r,i,o,s),i=If(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,vn(t,e,s)):(oe&&i&&cf(e),e.flags|=1,et(t,e,r,s),e.child)}function sg(t,e,r,i,s){if(ct(r)){var o=!0;ml(e)}else o=!1;if(_i(e,s),e.stateNode===null)qa(t,e),E0(e,r,i),Vh(e,r,i,s),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=Nt(c):(c=ct(r)?Rr:Ye.current,c=xi(e,c));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||u!==c)&&Ym(e,a,i,c),Rn=!1;var f=e.memoizedState;a.state=f,El(e,i,a,s),u=e.memoizedState,l!==i||f!==u||ut.current||Rn?(typeof h=="function"&&(Bh(e,r,h,i),u=e.memoizedState),(l=Rn||Qm(e,r,l,i,f,u,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),a.props=i,a.state=u,a.context=c,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,v0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ot(e.type,l),a.props=c,d=e.pendingProps,f=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=Nt(u):(u=ct(r)?Rr:Ye.current,u=xi(e,u));var y=r.getDerivedStateFromProps;(h=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||f!==u)&&Ym(e,a,i,u),Rn=!1,f=e.memoizedState,a.state=f,El(e,i,a,s);var v=e.memoizedState;l!==d||f!==v||ut.current||Rn?(typeof y=="function"&&(Bh(e,r,y,i),v=e.memoizedState),(c=Rn||Qm(e,r,c,i,f,v,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=u,i=c):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Gh(t,e,r,i,o,s)}function Gh(t,e,r,i,s,o){q0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return s&&Hm(e,r,!1),vn(t,e,o);i=e.stateNode,hA.current=e;var l=a&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Pi(e,t.child,null,o),e.child=Pi(e,null,l,o)):et(t,e,l,o),e.memoizedState=i.state,s&&Hm(e,r,!0),e.child}function K0(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),vf(t,e.containerInfo)}function og(t,e,r,i,s){return Di(),df(s),e.flags|=256,et(t,e,r,i),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Q0(t,e,r){var i=e.pendingProps,s=ue.current,o=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ee(ue,s&1),t===null)return $h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,o?(i=e.mode,o=e.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=gu(a,i,0,null),t=Ar(t,i,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=qh(r),e.memoizedState=Wh,t):Cf(e,a));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return dA(t,e,a,i,l,s,r);if(o){o=i.fallback,a=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:i.children};return!(a&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=qn(s,u),i.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=qn(l,o):(o=Ar(o,a,r,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,a=t.child.memoizedState,a=a===null?qh(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~r,e.memoizedState=Wh,i}return o=t.child,t=o.sibling,i=qn(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Cf(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sa(t,e,r,i){return i!==null&&df(i),Pi(e,t.child,null,r),t=Cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dA(t,e,r,i,s,o,a){if(r)return e.flags&256?(e.flags&=-257,i=Oc(Error(T(422))),Sa(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,s=e.mode,i=gu({mode:"visible",children:i.children},s,0,null),o=Ar(o,s,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Pi(e,t.child,null,a),e.child.memoizedState=qh(a),e.memoizedState=Wh,o);if(!(e.mode&1))return Sa(t,e,a,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,o=Error(T(419)),i=Oc(o,i,void 0),Sa(t,e,a,i)}if(l=(a&t.childLanes)!==0,lt||l){if(i=Ne,i!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,yn(t,s),bt(i,t,s,-1))}return Pf(),i=Oc(Error(T(421))),Sa(t,e,a,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=TA.bind(null,t),s._reactRetry=e,null):(t=o.treeContext,pt=zn(s.nextSibling),yt=e,oe=!0,Mt=null,t!==null&&(St[It++]=on,St[It++]=an,St[It++]=Nr,on=t.id,an=t.overflow,Nr=e),e=Cf(e,i.children),e.flags|=4096,e)}function ag(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),jh(t.return,e,r)}function Lc(t,e,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=r,o.tailMode=s)}function Y0(t,e,r){var i=e.pendingProps,s=i.revealOrder,o=i.tail;if(et(t,e,i.children,r),i=ue.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,r,e);else if(t.tag===19)ag(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ee(ue,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(r=e.child,s=null;r!==null;)t=r.alternate,t!==null&&_l(t)===null&&(s=r),r=r.sibling;r=s,r===null?(s=e.child,e.child=null):(s=r.sibling,r.sibling=null),Lc(e,!1,s,r,o);break;case"backwards":for(r=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&_l(t)===null){e.child=s;break}t=s.sibling,s.sibling=r,r=s,s=t}Lc(e,!0,r,null,o);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,r=qn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=qn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function fA(t,e,r){switch(e.tag){case 3:K0(e),Di();break;case 5:I0(e);break;case 1:ct(e.type)&&ml(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;ee(vl,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ee(ue,ue.current&1),e.flags|=128,null):r&e.child.childLanes?Q0(t,e,r):(ee(ue,ue.current&1),t=vn(t,e,r),t!==null?t.sibling:null);ee(ue,ue.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return Y0(t,e,r);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ee(ue,ue.current),i)break;return null;case 22:case 23:return e.lanes=0,W0(t,e,r)}return vn(t,e,r)}var X0,Kh,J0,Z0;X0=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Kh=function(){};J0=function(t,e,r,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,wr(Qt.current);var o=null;switch(r){case"input":s=gh(t,s),i=gh(t,i),o=[];break;case"select":s=he({},s,{value:void 0}),i=he({},i,{value:void 0}),o=[];break;case"textarea":s=wh(t,s),i=wh(t,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fl)}_h(r,i);var a;r=null;for(c in s)if(!i.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ys.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var u=i[c];if(l=s!=null?s[c]:void 0,i.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(o||(o=[]),o.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ys.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&te("scroll",t),o||l===u||(o=[])):(o=o||[]).push(c,u))}r&&(o=o||[]).push("style",r);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Z0=function(t,e,r,i){r!==i&&(e.flags|=4)};function ys(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function je(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var s=t.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function pA(t,e,r){var i=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(e),null;case 1:return ct(e.type)&&pl(),je(e),null;case 3:return i=e.stateNode,Oi(),re(ut),re(Ye),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(nd(Mt),Mt=null))),Kh(t,e),je(e),null;case 5:wf(e);var s=wr(lo.current);if(r=e.type,t!==null&&e.stateNode!=null)J0(t,e,r,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(T(166));return je(e),null}if(t=wr(Qt.current),Ea(e)){i=e.stateNode,r=e.type;var o=e.memoizedProps;switch(i[Ht]=e,i[oo]=o,t=(e.mode&1)!==0,r){case"dialog":te("cancel",i),te("close",i);break;case"iframe":case"object":case"embed":te("load",i);break;case"video":case"audio":for(s=0;s<Ts.length;s++)te(Ts[s],i);break;case"source":te("error",i);break;case"img":case"image":case"link":te("error",i),te("load",i);break;case"details":te("toggle",i);break;case"input":gm(i,o),te("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},te("invalid",i);break;case"textarea":vm(i,o),te("invalid",i)}_h(r,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?i.textContent!==l&&(o.suppressHydrationWarning!==!0&&wa(i.textContent,l,t),s=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&wa(i.textContent,l,t),s=["children",""+l]):Ys.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&te("scroll",i)}switch(r){case"input":ha(i),ym(i,o,!0);break;case"textarea":ha(i),wm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=fl)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cv(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(r,{is:i.is}):(t=a.createElement(r),r==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,r),t[Ht]=e,t[oo]=i,X0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Sh(r,i),r){case"dialog":te("cancel",t),te("close",t),s=i;break;case"iframe":case"object":case"embed":te("load",t),s=i;break;case"video":case"audio":for(s=0;s<Ts.length;s++)te(Ts[s],t);s=i;break;case"source":te("error",t),s=i;break;case"img":case"image":case"link":te("error",t),te("load",t),s=i;break;case"details":te("toggle",t),s=i;break;case"input":gm(t,i),s=gh(t,i),te("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=he({},i,{value:void 0}),te("invalid",t);break;case"textarea":vm(t,i),s=wh(t,i),te("invalid",t);break;default:s=i}_h(r,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Nv(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kv(t,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Xs(t,u):typeof u=="number"&&Xs(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ys.hasOwnProperty(o)?u!=null&&o==="onScroll"&&te("scroll",t):u!=null&&Qd(t,o,u,a))}switch(r){case"input":ha(t),ym(t,i,!1);break;case"textarea":ha(t),wm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Jn(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?yi(t,!!i.multiple,o,!1):i.defaultValue!=null&&yi(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=fl)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return je(e),null;case 6:if(t&&e.stateNode!=null)Z0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(T(166));if(r=wr(lo.current),wr(Qt.current),Ea(e)){if(i=e.stateNode,r=e.memoizedProps,i[Ht]=e,(o=i.nodeValue!==r)&&(t=yt,t!==null))switch(t.tag){case 3:wa(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(i.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ht]=e,e.stateNode=i}return je(e),null;case 13:if(re(ue),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&pt!==null&&e.mode&1&&!(e.flags&128))g0(),Di(),e.flags|=98560,o=!1;else if(o=Ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(T(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Ht]=e}else Di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;je(e),o=!1}else Mt!==null&&(nd(Mt),Mt=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?Te===0&&(Te=3):Pf())),e.updateQueue!==null&&(e.flags|=4),je(e),null);case 4:return Oi(),Kh(t,e),t===null&&io(e.stateNode.containerInfo),je(e),null;case 10:return mf(e.type._context),je(e),null;case 17:return ct(e.type)&&pl(),je(e),null;case 19:if(re(ue),o=e.memoizedState,o===null)return je(e),null;if(i=(e.flags&128)!==0,a=o.rendering,a===null)if(i)ys(o,!1);else{if(Te!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=_l(t),a!==null){for(e.flags|=128,ys(o,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)o=r,t=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ee(ue,ue.current&1|2),e.child}t=t.sibling}o.tail!==null&&ye()>Mi&&(e.flags|=128,i=!0,ys(o,!1),e.lanes=4194304)}else{if(!i)if(t=_l(a),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),ys(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!oe)return je(e),null}else 2*ye()-o.renderingStartTime>Mi&&r!==1073741824&&(e.flags|=128,i=!0,ys(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(r=o.last,r!==null?r.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ye(),e.sibling=null,r=ue.current,ee(ue,i?r&1|2:r&1),e):(je(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dt&1073741824&&(je(e),e.subtreeFlags&6&&(e.flags|=8192)):je(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function mA(t,e){switch(hf(e),e.tag){case 1:return ct(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oi(),re(ut),re(Ye),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(re(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(ue),null;case 4:return Oi(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Ia=!1,ze=!1,gA=typeof WeakSet=="function"?WeakSet:Set,P=null;function di(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){pe(t,e,i)}else r.current=null}function Qh(t,e,r){try{r()}catch(i){pe(t,e,i)}}var lg=!1;function yA(t,e){if(Ph=cl,t=r0(),uf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,l=-1,u=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var y;d!==r||s!==0&&d.nodeType!==3||(l=a+s),d!==o||i!==0&&d.nodeType!==3||(u=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===t)break t;if(f===r&&++c===s&&(l=a),f===o&&++h===i&&(u=a),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oh={focusedElem:t,selectionRange:r},cl=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,_=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Ot(e.type,w),_);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){pe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=lg,lg=!1,v}function js(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var o=s.destroy;s.destroy=void 0,o!==void 0&&Qh(e,r,o)}s=s.next}while(s!==i)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Yh(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function ew(t){var e=t.alternate;e!==null&&(t.alternate=null,ew(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[oo],delete e[Uh],delete e[ZI],delete e[eA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tw(t){return t.tag===5||t.tag===3||t.tag===4}function ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xh(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=fl));else if(i!==4&&(t=t.child,t!==null))for(Xh(t,e,r),t=t.sibling;t!==null;)Xh(t,e,r),t=t.sibling}function Jh(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jh(t,e,r),t=t.sibling;t!==null;)Jh(t,e,r),t=t.sibling}var Oe=null,Lt=!1;function Tn(t,e,r){for(r=r.child;r!==null;)nw(t,e,r),r=r.sibling}function nw(t,e,r){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(ou,r)}catch{}switch(r.tag){case 5:ze||di(r,e);case 6:var i=Oe,s=Lt;Oe=null,Tn(t,e,r),Oe=i,Lt=s,Oe!==null&&(Lt?(t=Oe,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Oe.removeChild(r.stateNode));break;case 18:Oe!==null&&(Lt?(t=Oe,r=r.stateNode,t.nodeType===8?kc(t.parentNode,r):t.nodeType===1&&kc(t,r),to(t)):kc(Oe,r.stateNode));break;case 4:i=Oe,s=Lt,Oe=r.stateNode.containerInfo,Lt=!0,Tn(t,e,r),Oe=i,Lt=s;break;case 0:case 11:case 14:case 15:if(!ze&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Qh(r,e,a),s=s.next}while(s!==i)}Tn(t,e,r);break;case 1:if(!ze&&(di(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(l){pe(r,e,l)}Tn(t,e,r);break;case 21:Tn(t,e,r);break;case 22:r.mode&1?(ze=(i=ze)||r.memoizedState!==null,Tn(t,e,r),ze=i):Tn(t,e,r);break;default:Tn(t,e,r)}}function cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new gA),e.forEach(function(i){var s=CA.bind(null,t,i);r.has(i)||(r.add(i),i.then(s,s))})}}function Pt(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var o=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Oe=l.stateNode,Lt=!1;break e;case 3:Oe=l.stateNode.containerInfo,Lt=!0;break e;case 4:Oe=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(Oe===null)throw Error(T(160));nw(o,a,s),Oe=null,Lt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){pe(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rw(e,t),e=e.sibling}function rw(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),Vt(t),i&4){try{js(3,t,t.return),pu(3,t)}catch(w){pe(t,t.return,w)}try{js(5,t,t.return)}catch(w){pe(t,t.return,w)}}break;case 1:Pt(e,t),Vt(t),i&512&&r!==null&&di(r,r.return);break;case 5:if(Pt(e,t),Vt(t),i&512&&r!==null&&di(r,r.return),t.flags&32){var s=t.stateNode;try{Xs(s,"")}catch(w){pe(t,t.return,w)}}if(i&4&&(s=t.stateNode,s!=null)){var o=t.memoizedProps,a=r!==null?r.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Av(s,o),Sh(l,a);var c=Sh(l,o);for(a=0;a<u.length;a+=2){var h=u[a],d=u[a+1];h==="style"?Nv(s,d):h==="dangerouslySetInnerHTML"?kv(s,d):h==="children"?Xs(s,d):Qd(s,h,d,c)}switch(l){case"input":yh(s,o);break;case"textarea":Tv(s,o);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?yi(s,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?yi(s,!!o.multiple,o.defaultValue,!0):yi(s,!!o.multiple,o.multiple?[]:"",!1))}s[oo]=o}catch(w){pe(t,t.return,w)}}break;case 6:if(Pt(e,t),Vt(t),i&4){if(t.stateNode===null)throw Error(T(162));s=t.stateNode,o=t.memoizedProps;try{s.nodeValue=o}catch(w){pe(t,t.return,w)}}break;case 3:if(Pt(e,t),Vt(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(w){pe(t,t.return,w)}break;case 4:Pt(e,t),Vt(t);break;case 13:Pt(e,t),Vt(t),s=t.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Nf=ye())),i&4&&cg(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(ze=(c=ze)||h,Pt(e,t),ze=c):Pt(e,t),Vt(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(P=t,h=t.child;h!==null;){for(d=P=h;P!==null;){switch(f=P,y=f.child,f.tag){case 0:case 11:case 14:case 15:js(4,f,f.return);break;case 1:di(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,r=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){pe(i,r,w)}}break;case 5:di(f,f.return);break;case 22:if(f.memoizedState!==null){dg(d);continue}}y!==null?(y.return=f,P=y):dg(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,c?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,u=d.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Rv("display",a))}catch(w){pe(t,t.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){pe(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pt(e,t),Vt(t),i&4&&cg(t);break;case 21:break;default:Pt(e,t),Vt(t)}}function Vt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(tw(r)){var i=r;break e}r=r.return}throw Error(T(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Xs(s,""),i.flags&=-33);var o=ug(t);Jh(t,o,s);break;case 3:case 4:var a=i.stateNode.containerInfo,l=ug(t);Xh(t,l,a);break;default:throw Error(T(161))}}catch(u){pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vA(t,e,r){P=t,iw(t)}function iw(t,e,r){for(var i=(t.mode&1)!==0;P!==null;){var s=P,o=s.child;if(s.tag===22&&i){var a=s.memoizedState!==null||Ia;if(!a){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ze;l=Ia;var c=ze;if(Ia=a,(ze=u)&&!c)for(P=s;P!==null;)a=P,u=a.child,a.tag===22&&a.memoizedState!==null?fg(s):u!==null?(u.return=a,P=u):fg(s);for(;o!==null;)P=o,iw(o),o=o.sibling;P=s,Ia=l,ze=c}hg(t)}else s.subtreeFlags&8772&&o!==null?(o.return=s,P=o):hg(t)}}function hg(t){for(;P!==null;){var e=P;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ze||pu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ze)if(r===null)i.componentDidMount();else{var s=e.elementType===e.type?r.memoizedProps:Ot(e.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Km(e,o,i);break;case 3:var a=e.updateQueue;if(a!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Km(e,a,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&to(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ze||e.flags&512&&Yh(e)}catch(f){pe(e,e.return,f)}}if(e===t){P=null;break}if(r=e.sibling,r!==null){r.return=e.return,P=r;break}P=e.return}}function dg(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var r=e.sibling;if(r!==null){r.return=e.return,P=r;break}P=e.return}}function fg(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{pu(4,e)}catch(u){pe(e,r,u)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(u){pe(e,s,u)}}var o=e.return;try{Yh(e)}catch(u){pe(e,o,u)}break;case 5:var a=e.return;try{Yh(e)}catch(u){pe(e,a,u)}}}catch(u){pe(e,e.return,u)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var wA=Math.ceil,Al=An.ReactCurrentDispatcher,kf=An.ReactCurrentOwner,kt=An.ReactCurrentBatchConfig,K=0,Ne=null,Se=null,Ue=0,dt=0,fi=sr(0),Te=0,fo=null,Dr=0,mu=0,Rf=0,Bs=null,ot=null,Nf=0,Mi=1/0,rn=null,Tl=!1,Zh=null,Gn=null,Aa=!1,bn=null,Cl=0,Vs=0,ed=null,Ka=-1,Qa=0;function nt(){return K&6?ye():Ka!==-1?Ka:Ka=ye()}function Wn(t){return t.mode&1?K&2&&Ue!==0?Ue&-Ue:nA.transition!==null?(Qa===0&&(Qa=Bv()),Qa):(t=J,t!==0||(t=window.event,t=t===void 0?16:Kv(t.type)),t):1}function bt(t,e,r,i){if(50<Vs)throw Vs=0,ed=null,Error(T(185));Do(t,r,i),(!(K&2)||t!==Ne)&&(t===Ne&&(!(K&2)&&(mu|=r),Te===4&&xn(t,Ue)),ht(t,i),r===1&&K===0&&!(e.mode&1)&&(Mi=ye()+500,hu&&or()))}function ht(t,e){var r=t.callbackNode;nI(t,e);var i=ul(t,t===Ne?Ue:0);if(i===0)r!==null&&Sm(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&Sm(r),e===1)t.tag===0?tA(pg.bind(null,t)):f0(pg.bind(null,t)),XI(function(){!(K&6)&&or()}),r=null;else{switch(Vv(i)){case 1:r=ef;break;case 4:r=$v;break;case 16:r=ll;break;case 536870912:r=jv;break;default:r=ll}r=dw(r,sw.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function sw(t,e){if(Ka=-1,Qa=0,K&6)throw Error(T(327));var r=t.callbackNode;if(Si()&&t.callbackNode!==r)return null;var i=ul(t,t===Ne?Ue:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=kl(t,i);else{e=i;var s=K;K|=2;var o=aw();(Ne!==t||Ue!==e)&&(rn=null,Mi=ye()+500,Ir(t,e));do try{SA();break}catch(l){ow(t,l)}while(1);pf(),Al.current=o,K=s,Se!==null?e=0:(Ne=null,Ue=0,e=Te)}if(e!==0){if(e===2&&(s=kh(t),s!==0&&(i=s,e=td(t,s))),e===1)throw r=fo,Ir(t,0),xn(t,i),ht(t,ye()),r;if(e===6)xn(t,i);else{if(s=t.current.alternate,!(i&30)&&!EA(s)&&(e=kl(t,i),e===2&&(o=kh(t),o!==0&&(i=o,e=td(t,o))),e===1))throw r=fo,Ir(t,0),xn(t,i),ht(t,ye()),r;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(T(345));case 2:mr(t,ot,rn);break;case 3:if(xn(t,i),(i&130023424)===i&&(e=Nf+500-ye(),10<e)){if(ul(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){nt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Mh(mr.bind(null,t,ot,rn),e);break}mr(t,ot,rn);break;case 4:if(xn(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var a=31-Ut(i);o=1<<a,a=e[a],a>s&&(s=a),i&=~o}if(i=s,i=ye()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wA(i/1960))-i,10<i){t.timeoutHandle=Mh(mr.bind(null,t,ot,rn),i);break}mr(t,ot,rn);break;case 5:mr(t,ot,rn);break;default:throw Error(T(329))}}}return ht(t,ye()),t.callbackNode===r?sw.bind(null,t):null}function td(t,e){var r=Bs;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=kl(t,e),t!==2&&(e=ot,ot=r,e!==null&&nd(e)),t}function nd(t){ot===null?ot=t:ot.push.apply(ot,t)}function EA(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],o=s.getSnapshot;s=s.value;try{if(!Ft(o(),s))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~Rf,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Ut(e),i=1<<r;t[r]=-1,e&=~i}}function pg(t){if(K&6)throw Error(T(327));Si();var e=ul(t,0);if(!(e&1))return ht(t,ye()),null;var r=kl(t,e);if(t.tag!==0&&r===2){var i=kh(t);i!==0&&(e=i,r=td(t,i))}if(r===1)throw r=fo,Ir(t,0),xn(t,e),ht(t,ye()),r;if(r===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,ot,rn),ht(t,ye()),null}function xf(t,e){var r=K;K|=1;try{return t(e)}finally{K=r,K===0&&(Mi=ye()+500,hu&&or())}}function Pr(t){bn!==null&&bn.tag===0&&!(K&6)&&Si();var e=K;K|=1;var r=kt.transition,i=J;try{if(kt.transition=null,J=1,t)return t()}finally{J=i,kt.transition=r,K=e,!(K&6)&&or()}}function Df(){dt=fi.current,re(fi)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,YI(r)),Se!==null)for(r=Se.return;r!==null;){var i=r;switch(hf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:Oi(),re(ut),re(Ye),Ef();break;case 5:wf(i);break;case 4:Oi();break;case 13:re(ue);break;case 19:re(ue);break;case 10:mf(i.type._context);break;case 22:case 23:Df()}r=r.return}if(Ne=t,Se=t=qn(t.current,null),Ue=dt=e,Te=0,fo=null,Rf=mu=Dr=0,ot=Bs=null,vr!==null){for(e=0;e<vr.length;e++)if(r=vr[e],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,o=r.pending;if(o!==null){var a=o.next;o.next=s,i.next=a}r.pending=i}vr=null}return t}function ow(t,e){do{var r=Se;try{if(pf(),Ga.current=Il,Sl){for(var i=ce.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Sl=!1}if(xr=0,Re=Ae=ce=null,$s=!1,uo=0,kf.current=null,r===null||r.return===null){Te=1,fo=e,Se=null;break}e:{var o=t,a=r.return,l=r,u=e;if(e=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=tg(a);if(y!==null){y.flags&=-257,ng(y,a,l,o,e),y.mode&1&&eg(o,c,e),e=y,u=c;var v=e.updateQueue;if(v===null){var w=new Set;w.add(u),e.updateQueue=w}else v.add(u);break e}else{if(!(e&1)){eg(o,c,e),Pf();break e}u=Error(T(426))}}else if(oe&&l.mode&1){var _=tg(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ng(_,a,l,o,e),df(Li(u,l));break e}}o=u=Li(u,l),Te!==4&&(Te=2),Bs===null?Bs=[o]:Bs.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var m=z0(o,u,e);qm(o,m);break e;case 1:l=u;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gn===null||!Gn.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=H0(o,l,e);qm(o,E);break e}}o=o.return}while(o!==null)}uw(r)}catch(k){e=k,Se===r&&r!==null&&(Se=r=r.return);continue}break}while(1)}function aw(){var t=Al.current;return Al.current=Il,t===null?Il:t}function Pf(){(Te===0||Te===3||Te===2)&&(Te=4),Ne===null||!(Dr&268435455)&&!(mu&268435455)||xn(Ne,Ue)}function kl(t,e){var r=K;K|=2;var i=aw();(Ne!==t||Ue!==e)&&(rn=null,Ir(t,e));do try{_A();break}catch(s){ow(t,s)}while(1);if(pf(),K=r,Al.current=i,Se!==null)throw Error(T(261));return Ne=null,Ue=0,Te}function _A(){for(;Se!==null;)lw(Se)}function SA(){for(;Se!==null&&!qS();)lw(Se)}function lw(t){var e=hw(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?uw(t):Se=e,kf.current=null}function uw(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=mA(r,e),r!==null){r.flags&=32767,Se=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Te=6,Se=null;return}}else if(r=pA(r,e,dt),r!==null){Se=r;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);Te===0&&(Te=5)}function mr(t,e,r){var i=J,s=kt.transition;try{kt.transition=null,J=1,IA(t,e,r,i)}finally{kt.transition=s,J=i}return null}function IA(t,e,r,i){do Si();while(bn!==null);if(K&6)throw Error(T(327));r=t.finishedWork;var s=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(rI(t,o),t===Ne&&(Se=Ne=null,Ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Aa||(Aa=!0,dw(ll,function(){return Si(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=kt.transition,kt.transition=null;var a=J;J=1;var l=K;K|=4,kf.current=null,yA(t,r),rw(r,t),zI(Oh),cl=!!Ph,Oh=Ph=null,t.current=r,vA(r),KS(),K=l,J=a,kt.transition=o}else t.current=r;if(Aa&&(Aa=!1,bn=t,Cl=s),o=t.pendingLanes,o===0&&(Gn=null),XS(r.stateNode),ht(t,ye()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)s=e[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(Tl)throw Tl=!1,t=Zh,Zh=null,t;return Cl&1&&t.tag!==0&&Si(),o=t.pendingLanes,o&1?t===ed?Vs++:(Vs=0,ed=t):Vs=0,or(),null}function Si(){if(bn!==null){var t=Vv(Cl),e=kt.transition,r=J;try{if(kt.transition=null,J=16>t?16:t,bn===null)var i=!1;else{if(t=bn,bn=null,Cl=0,K&6)throw Error(T(331));var s=K;for(K|=4,P=t.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:js(8,h,o)}var d=h.child;if(d!==null)d.return=h,P=d;else for(;P!==null;){h=P;var f=h.sibling,y=h.return;if(ew(h),h===c){P=null;break}if(f!==null){f.return=y,P=f;break}P=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:js(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,P=m;break e}P=o.return}}var p=t.current;for(P=p;P!==null;){a=P;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,P=g;else e:for(a=p;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pu(9,l)}}catch(k){pe(l,l.return,k)}if(l===a){P=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,P=E;break e}P=l.return}}if(K=s,or(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(ou,t)}catch{}i=!0}return i}finally{J=r,kt.transition=e}}return!1}function mg(t,e,r){e=Li(r,e),e=z0(t,e,1),t=Hn(t,e,1),e=nt(),t!==null&&(Do(t,1,e),ht(t,e))}function pe(t,e,r){if(t.tag===3)mg(t,t,r);else for(;e!==null;){if(e.tag===3){mg(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gn===null||!Gn.has(i))){t=Li(r,t),t=H0(e,t,1),e=Hn(e,t,1),t=nt(),e!==null&&(Do(e,1,t),ht(e,t));break}}e=e.return}}function AA(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&r,Ne===t&&(Ue&r)===r&&(Te===4||Te===3&&(Ue&130023424)===Ue&&500>ye()-Nf?Ir(t,0):Rf|=r),ht(t,e)}function cw(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var r=nt();t=yn(t,e),t!==null&&(Do(t,e,r),ht(t,r))}function TA(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),cw(t,r)}function CA(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(T(314))}i!==null&&i.delete(e),cw(t,r)}var hw;hw=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)lt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return lt=!1,fA(t,e,r);lt=!!(t.flags&131072)}else lt=!1,oe&&e.flags&1048576&&p0(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qa(t,e),t=e.pendingProps;var s=xi(e,Ye.current);_i(e,r),s=Sf(null,e,i,t,s,r);var o=If();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(i)?(o=!0,ml(e)):o=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,yf(e),s.updater=du,e.stateNode=s,s._reactInternals=e,Vh(e,i,t,r),e=Gh(null,e,i,!0,o,r)):(e.tag=0,oe&&o&&cf(e),et(null,e,s,r),e=e.child),e;case 16:i=e.elementType;e:{switch(qa(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=RA(i),t=Ot(i,t),s){case 0:e=Hh(null,e,i,t,r);break e;case 1:e=sg(null,e,i,t,r);break e;case 11:e=rg(null,e,i,t,r);break e;case 14:e=ig(null,e,i,Ot(i.type,t),r);break e}throw Error(T(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Ot(i,s),Hh(t,e,i,s,r);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Ot(i,s),sg(t,e,i,s,r);case 3:e:{if(K0(e),t===null)throw Error(T(387));i=e.pendingProps,o=e.memoizedState,s=o.element,v0(t,e),El(e,i,null,r);var a=e.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){s=Li(Error(T(423)),e),e=og(t,e,i,r,s);break e}else if(i!==s){s=Li(Error(T(424)),e),e=og(t,e,i,r,s);break e}else for(pt=zn(e.stateNode.containerInfo.firstChild),yt=e,oe=!0,Mt=null,r=S0(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Di(),i===s){e=vn(t,e,r);break e}et(t,e,i,r)}e=e.child}return e;case 5:return I0(e),t===null&&$h(e),i=e.type,s=e.pendingProps,o=t!==null?t.memoizedProps:null,a=s.children,Lh(i,s)?a=null:o!==null&&Lh(i,o)&&(e.flags|=32),q0(t,e),et(t,e,a,r),e.child;case 6:return t===null&&$h(e),null;case 13:return Q0(t,e,r);case 4:return vf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Pi(e,null,i,r):et(t,e,i,r),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Ot(i,s),rg(t,e,i,s,r);case 7:return et(t,e,e.pendingProps,r),e.child;case 8:return et(t,e,e.pendingProps.children,r),e.child;case 12:return et(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,o=e.memoizedProps,a=s.value,ee(vl,i._currentValue),i._currentValue=a,o!==null)if(Ft(o.value,a)){if(o.children===s.children&&!ut.current){e=vn(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===i){if(o.tag===1){u=dn(-1,r&-r),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),jh(o.return,r,e),l.lanes|=r;break}u=u.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(T(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),jh(a,r,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}et(t,e,s.children,r),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,_i(e,r),s=Nt(s),i=i(s),e.flags|=1,et(t,e,i,r),e.child;case 14:return i=e.type,s=Ot(i,e.pendingProps),s=Ot(i.type,s),ig(t,e,i,s,r);case 15:return G0(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Ot(i,s),qa(t,e),e.tag=1,ct(i)?(t=!0,ml(e)):t=!1,_i(e,r),E0(e,i,s),Vh(e,i,s,r),Gh(null,e,i,!0,t,r);case 19:return Y0(t,e,r);case 22:return W0(t,e,r)}throw Error(T(156,e.tag))};function dw(t,e){return Fv(t,e)}function kA(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,r,i){return new kA(t,e,r,i)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RA(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===Jd)return 14}return 2}function qn(t,e){var r=t.alternate;return r===null?(r=Tt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ya(t,e,r,i,s,o){var a=2;if(i=t,typeof t=="function")Of(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ri:return Ar(r.children,s,o,e);case Yd:a=8,s|=8;break;case dh:return t=Tt(12,r,e,s|2),t.elementType=dh,t.lanes=o,t;case fh:return t=Tt(13,r,e,s),t.elementType=fh,t.lanes=o,t;case ph:return t=Tt(19,r,e,s),t.elementType=ph,t.lanes=o,t;case _v:return gu(r,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wv:a=10;break e;case Ev:a=9;break e;case Xd:a=11;break e;case Jd:a=14;break e;case kn:a=16,i=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Tt(a,r,e,s),e.elementType=t,e.type=i,e.lanes=o,e}function Ar(t,e,r,i){return t=Tt(7,t,i,e),t.lanes=r,t}function gu(t,e,r,i){return t=Tt(22,t,i,e),t.elementType=_v,t.lanes=r,t.stateNode={isHidden:!1},t}function Mc(t,e,r){return t=Tt(6,t,null,e),t.lanes=r,t}function Uc(t,e,r){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NA(t,e,r,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gc(0),this.expirationTimes=gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gc(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Lf(t,e,r,i,s,o,a,l,u){return t=new NA(t,e,r,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Tt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(o),t}function xA(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ni,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function fw(t){if(!t)return Zn;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var r=t.type;if(ct(r))return d0(t,r,e)}return e}function pw(t,e,r,i,s,o,a,l,u){return t=Lf(r,i,!0,t,s,o,a,l,u),t.context=fw(null),r=t.current,i=nt(),s=Wn(r),o=dn(i,s),o.callback=e??null,Hn(r,o,s),t.current.lanes=s,Do(t,s,i),ht(t,i),t}function yu(t,e,r,i){var s=e.current,o=nt(),a=Wn(s);return r=fw(r),e.context===null?e.context=r:e.pendingContext=r,e=dn(o,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hn(s,e,a),t!==null&&(bt(t,s,a,o),Ha(t,s,a)),a}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Mf(t,e){gg(t,e),(t=t.alternate)&&gg(t,e)}function DA(){return null}var mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uf(t){this._internalRoot=t}vu.prototype.render=Uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));yu(t,e,null,null)};vu.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){yu(null,t,null,null)}),e[gn]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gv();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Nn.length&&e!==0&&e<Nn[r].priority;r++);Nn.splice(r,0,t),r===0&&qv(t)}};function bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yg(){}function PA(t,e,r,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var c=Rl(a);o.call(c)}}var a=pw(e,i,t,0,null,!1,!1,"",yg);return t._reactRootContainer=a,t[gn]=a.current,io(t.nodeType===8?t.parentNode:t),Pr(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var l=i;i=function(){var c=Rl(u);l.call(c)}}var u=Lf(t,0,!1,null,null,!1,!1,"",yg);return t._reactRootContainer=u,t[gn]=u.current,io(t.nodeType===8?t.parentNode:t),Pr(function(){yu(e,u,r,i)}),u}function Eu(t,e,r,i,s){var o=r._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var l=s;s=function(){var u=Rl(a);l.call(u)}}yu(e,a,t,s)}else a=PA(r,e,t,s,i);return Rl(a)}zv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=As(e.pendingLanes);r!==0&&(tf(e,r|1),ht(e,ye()),!(K&6)&&(Mi=ye()+500,or()))}break;case 13:Pr(function(){var i=yn(t,1);if(i!==null){var s=nt();bt(i,t,1,s)}}),Mf(t,1)}};nf=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var r=nt();bt(e,t,134217728,r)}Mf(t,134217728)}};Hv=function(t){if(t.tag===13){var e=Wn(t),r=yn(t,e);if(r!==null){var i=nt();bt(r,t,e,i)}Mf(t,e)}};Gv=function(){return J};Wv=function(t,e){var r=J;try{return J=t,e()}finally{J=r}};Ah=function(t,e,r){switch(e){case"input":if(yh(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var s=cu(i);if(!s)throw Error(T(90));Iv(i),yh(i,s)}}}break;case"textarea":Tv(t,r);break;case"select":e=r.value,e!=null&&yi(t,!!r.multiple,e,!1)}};Pv=xf;Ov=Pr;var OA={usingClientEntryPoint:!1,Events:[Oo,ai,cu,xv,Dv,xf]},vs={findFiberByHostInstance:yr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LA={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Uv(t),t===null?null:t.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||DA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{ou=Ta.inject(LA),Kt=Ta}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OA;Et.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(e))throw Error(T(200));return xA(t,e,null,r)};Et.createRoot=function(t,e){if(!bf(t))throw Error(T(299));var r=!1,i="",s=mw;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Lf(t,1,!1,null,null,r,!1,i,s),t[gn]=e.current,io(t.nodeType===8?t.parentNode:t),new Uf(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Uv(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return Pr(t)};Et.hydrate=function(t,e,r){if(!wu(e))throw Error(T(200));return Eu(null,t,e,!0,r)};Et.hydrateRoot=function(t,e,r){if(!bf(t))throw Error(T(405));var i=r!=null&&r.hydratedSources||null,s=!1,o="",a=mw;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),e=pw(e,null,t,1,r??null,s,!1,o,a),t[gn]=e.current,io(t),i)for(t=0;t<i.length;t++)r=i[t],s=r._getVersion,s=s(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,s]:e.mutableSourceEagerHydrationData.push(r,s);return new vu(e)};Et.render=function(t,e,r){if(!wu(e))throw Error(T(200));return Eu(null,t,e,!1,r)};Et.unmountComponentAtNode=function(t){if(!wu(t))throw Error(T(40));return t._reactRootContainer?(Pr(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};Et.unstable_batchedUpdates=xf;Et.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!wu(r))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Eu(t,e,r,!1,i)};Et.version="18.2.0-next-9e3b772b8-20220608";function gw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gw)}catch(t){console.error(t)}}gw(),pv.exports=Et;var MA=pv.exports,vg=MA;ch.createRoot=vg.createRoot,ch.hydrateRoot=vg.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=function(t){const e=[];let r=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[r++]=s:s<2048?(e[r++]=s>>6|192,e[r++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[r++]=s>>18|240,e[r++]=s>>12&63|128,e[r++]=s>>6&63|128,e[r++]=s&63|128):(e[r++]=s>>12|224,e[r++]=s>>6&63|128,e[r++]=s&63|128)}return e},UA=function(t){const e=[];let r=0,i=0;for(;r<t.length;){const s=t[r++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[r++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[r++],a=t[r++],l=t[r++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const o=t[r++],a=t[r++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},vw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,l=a?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,h=o>>2,d=(o&3)<<4|l>>4;let f=(l&15)<<2|c>>6,y=c&63;u||(y=64,a||(f=64)),i.push(r[h],r[d],r[f],r[y])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=r[t.charAt(s++)],l=s<t.length?r[t.charAt(s)]:0;++s;const c=s<t.length?r[t.charAt(s)]:64;++s;const d=s<t.length?r[t.charAt(s)]:64;if(++s,o==null||l==null||c==null||d==null)throw new bA;const f=o<<2|l>>4;if(i.push(f),c!==64){const y=l<<4&240|c>>2;if(i.push(y),d!==64){const v=c<<6&192|d;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FA=function(t){const e=yw(t);return vw.encodeByteArray(e,!0)},Nl=function(t){return FA(t).replace(/\./g,"")},ww=function(t){try{return vw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=()=>$A().__FIREBASE_DEFAULTS__,BA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ww(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return jA()||BA()||VA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ew=t=>{var e,r;return(r=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},_w=t=>{const e=Ew(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),i]:[e.substring(0,r),i]},Sw=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},Iw=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,i)=>{r?this.reject(r):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Nl(JSON.stringify(r)),Nl(JSON.stringify(a)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function GA(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KA(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QA(){try{return typeof indexedDB=="object"}catch{return!1}}function YA(){return new Promise((t,e)=>{try{let r=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="FirebaseError";class nn extends Error{constructor(e,r,i){super(r),this.code=e,this.customData=i,this.name=XA,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,r,i){this.service=e,this.serviceName=r,this.errors=i}create(e,...r){const i=r[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?JA(o,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new nn(s,l,i)}}function JA(t,e){return t.replace(ZA,(r,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ZA=/\{\$([^}]+)}/g;function eT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xl(t,e){if(t===e)return!0;const r=Object.keys(t),i=Object.keys(e);for(const s of r){if(!i.includes(s))return!1;const o=t[s],a=e[s];if(wg(o)&&wg(a)){if(!xl(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!r.includes(s))return!1;return!0}function wg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){const e=[];for(const[r,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function tT(t,e){const r=new nT(t,e);return r.subscribe.bind(r)}class nT{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,i){let s;if(e===void 0&&r===void 0&&i===void 0)throw new Error("Missing Observer.");rT(e,["next","error","complete"])?s=e:s={next:e,error:r,complete:i},s.next===void 0&&(s.next=bc),s.error===void 0&&(s.error=bc),s.complete===void 0&&(s.complete=bc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rT(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function bc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,r,i){this.name=e,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const i=new zA;if(this.instancesDeferred.set(r,i),this.isInitialized(r)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:r});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oT(e))try{this.getOrInitializeService({instanceIdentifier:gr})}catch{}for(const[r,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gr){return this.instances.has(e)}getOptions(e=gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:r});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);i===l&&a.resolve(s)}return s}onInit(e,r){var i;const s=this.normalizeInstanceIdentifier(r),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,r){const i=this.onInitCallbacks.get(r);if(i)for(const s of i)try{s(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sT(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=gr){return this.component?this.component.multipleInstances?e:gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sT(t){return t===gr?void 0:t}function oT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new iT(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const lT={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},uT=Y.INFO,cT={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},hT=(t,e,...r)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=cT[e];if(s)console[s](`[${i}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ff{constructor(e){this.name=e,this._logLevel=uT,this._logHandler=hT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const dT=(t,e)=>e.some(r=>t instanceof r);let Eg,_g;function fT(){return Eg||(Eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pT(){return _g||(_g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tw=new WeakMap,rd=new WeakMap,Cw=new WeakMap,Fc=new WeakMap,$f=new WeakMap;function mT(t){const e=new Promise((r,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{r(Kn(t.result)),s()},a=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(r=>{r instanceof IDBCursor&&Tw.set(r,t)}).catch(()=>{}),$f.set(e,t),e}function gT(t){if(rd.has(t))return;const e=new Promise((r,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{r(),s()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});rd.set(t,e)}let id={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return rd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cw.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Kn(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yT(t){id=t(id)}function vT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const i=t.call($c(this),e,...r);return Cw.set(i,e.sort?e.sort():[e]),Kn(i)}:pT().includes(t)?function(...e){return t.apply($c(this),e),Kn(Tw.get(this))}:function(...e){return Kn(t.apply($c(this),e))}}function wT(t){return typeof t=="function"?vT(t):(t instanceof IDBTransaction&&gT(t),dT(t,fT())?new Proxy(t,id):t)}function Kn(t){if(t instanceof IDBRequest)return mT(t);if(Fc.has(t))return Fc.get(t);const e=wT(t);return e!==t&&(Fc.set(t,e),$f.set(e,t)),e}const $c=t=>$f.get(t);function ET(t,e,{blocked:r,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),l=Kn(a);return i&&a.addEventListener("upgradeneeded",u=>{i(Kn(a.result),u.oldVersion,u.newVersion,Kn(a.transaction),u)}),r&&a.addEventListener("blocked",u=>r(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const _T=["get","getKey","getAll","getAllKeys","count"],ST=["put","add","delete","clear"],jc=new Map;function Sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const r=e.replace(/FromIndex$/,""),i=e!==r,s=ST.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!(s||_T.includes(r)))return;const o=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let c=u.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[r](...l),s&&u.done]))[0]};return jc.set(e,o),o}yT(t=>({...t,get:(e,r,i)=>Sg(e,r)||t.get(e,r,i),has:(e,r)=>!!Sg(e,r)||t.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(AT(r)){const i=r.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(r=>r).join(" ")}}function AT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sd="@firebase/app",Ig="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Ff("@firebase/app"),TT="@firebase/app-compat",CT="@firebase/analytics-compat",kT="@firebase/analytics",RT="@firebase/app-check-compat",NT="@firebase/app-check",xT="@firebase/auth",DT="@firebase/auth-compat",PT="@firebase/database",OT="@firebase/database-compat",LT="@firebase/functions",MT="@firebase/functions-compat",UT="@firebase/installations",bT="@firebase/installations-compat",FT="@firebase/messaging",$T="@firebase/messaging-compat",jT="@firebase/performance",BT="@firebase/performance-compat",VT="@firebase/remote-config",zT="@firebase/remote-config-compat",HT="@firebase/storage",GT="@firebase/storage-compat",WT="@firebase/firestore",qT="@firebase/firestore-compat",KT="firebase",QT="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="[DEFAULT]",YT={[sd]:"fire-core",[TT]:"fire-core-compat",[kT]:"fire-analytics",[CT]:"fire-analytics-compat",[NT]:"fire-app-check",[RT]:"fire-app-check-compat",[xT]:"fire-auth",[DT]:"fire-auth-compat",[PT]:"fire-rtdb",[OT]:"fire-rtdb-compat",[LT]:"fire-fn",[MT]:"fire-fn-compat",[UT]:"fire-iid",[bT]:"fire-iid-compat",[FT]:"fire-fcm",[$T]:"fire-fcm-compat",[jT]:"fire-perf",[BT]:"fire-perf-compat",[VT]:"fire-rc",[zT]:"fire-rc-compat",[HT]:"fire-gcs",[GT]:"fire-gcs-compat",[WT]:"fire-fst",[qT]:"fire-fst-compat","fire-js":"fire-js",[KT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map,ad=new Map;function XT(t,e){try{t.container.addComponent(e)}catch(r){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Lr(t){const e=t.name;if(ad.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;ad.set(e,t);for(const r of Dl.values())XT(r,t);return!0}function Su(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new Mo("app","Firebase",JT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,r,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=QT;function kw(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:od,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(r||(r=Sw()),!r)throw Qn.create("no-options");const o=Dl.get(s);if(o){if(xl(r,o.options)&&xl(i,o.config))return o;throw Qn.create("duplicate-app",{appName:s})}const a=new aT(s);for(const u of ad.values())a.addComponent(u);const l=new ZT(r,i,a);return Dl.set(s,l),l}function jf(t=od){const e=Dl.get(t);if(!e&&t===od&&Sw())return kw();if(!e)throw Qn.create("no-app",{appName:t});return e}function Yt(t,e,r){var i;let s=(i=YT[t])!==null&&i!==void 0?i:t;r&&(s+=`-${r}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${e}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(l.join(" "));return}Lr(new er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="firebase-heartbeat-database",tC=1,po="firebase-heartbeat-store";let Bc=null;function Rw(){return Bc||(Bc=ET(eC,tC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(po)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function nC(t){try{return await(await Rw()).transaction(po).objectStore(po).get(Nw(t))}catch(e){if(e instanceof nn)Or.warn(e.message);else{const r=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(r.message)}}}async function Ag(t,e){try{const i=(await Rw()).transaction(po,"readwrite");await i.objectStore(po).put(e,Nw(t)),await i.done}catch(r){if(r instanceof nn)Or.warn(r.message);else{const i=Qn.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Or.warn(i.message)}}}function Nw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=1024,iC=30*24*60*60*1e3;class sC{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new aC(r),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=iC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tg(),{heartbeatsToSend:r,unsentEntries:i}=oC(this._heartbeatsCache.heartbeats),s=Nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Tg(){return new Date().toISOString().substring(0,10)}function oC(t,e=rC){const r=[];let i=t.slice();for(const s of t){const o=r.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Cg(r)>e){o.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),Cg(r)>e){r.pop();break}i=i.slice(1)}return{heartbeatsToSend:r,unsentEntries:i}}class aC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QA()?YA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ag(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cg(t){return Nl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){Lr(new er("platform-logger",e=>new IT(e),"PRIVATE")),Lr(new er("heartbeat",e=>new sC(e),"PRIVATE")),Yt(sd,Ig,t),Yt(sd,Ig,"esm2017"),Yt("fire-js","")}lC("");function Bf(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(r[i[s]]=t[i[s]]);return r}function xw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uC=xw,Dw=new Mo("auth","Firebase",xw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Ff("@firebase/auth");function cC(t,...e){Pl.logLevel<=Y.WARN&&Pl.warn(`Auth (${Hr}): ${t}`,...e)}function Xa(t,...e){Pl.logLevel<=Y.ERROR&&Pl.error(`Auth (${Hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Vf(t,...e)}function Xt(t,...e){return Vf(t,...e)}function hC(t,e,r){const i=Object.assign(Object.assign({},uC()),{[e]:r});return new Mo("auth","Firebase",i).create(e,{appName:t.name})}function Vf(t,...e){if(typeof t!="string"){const r=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(r,...i)}return Dw.create(t,...e)}function b(t,e,...r){if(!t)throw Vf(e,...r)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xa(e),new Error(e)}function wn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dC(){return kg()==="http:"||kg()==="https:"}function kg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dC()||WA()||"connection"in navigator)?navigator.onLine:!0}function pC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,r){this.shortDelay=e,this.longDelay=r,wn(r>e,"Short delay should be less than long delay!"),this.isMobile=HA()||qA()}get(){return fC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t,e){wn(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{static initialize(e,r,i){this.fetchImpl=e,r&&(this.headersImpl=r),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new bo(3e4,6e4);function Qi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,r,i,s={}){return Ow(t,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const l=Uo(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Pw.fetch()(Lw(t,t.config.apiHost,r,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},o))})}async function Ow(t,e,r){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},mC),e);try{const s=new yC(t),o=await Promise.race([r(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Ca(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ca(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ca(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ca(t,"user-disabled",a);const h=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hC(t,h,c);$t(t,h)}}catch(s){if(s instanceof nn)throw s;$t(t,"network-request-failed",{message:String(s)})}}async function Fo(t,e,r,i,s={}){const o=await Gr(t,e,r,i,s);return"mfaPendingCredential"in o&&$t(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Lw(t,e,r,i){const s=`${e}${r}?${i}`;return t.config.emulator?zf(t.config,s):`${t.config.apiScheme}://${s}`}class yC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,i)=>{this.timer=setTimeout(()=>i(Xt(this.auth,"network-request-failed")),gC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ca(t,e,r){const i={appName:t.name};r.email&&(i.email=r.email),r.phoneNumber&&(i.phoneNumber=r.phoneNumber);const s=Xt(t,e,i);return s.customData._tokenResponse=r,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function wC(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EC(t,e=!1){const r=le(t),i=await r.getIdToken(e),s=Hf(i);b(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:zs(Vc(s.auth_time)),issuedAtTime:zs(Vc(s.iat)),expirationTime:zs(Vc(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function Hf(t){const[e,r,i]=t.split(".");if(e===void 0||r===void 0||i===void 0)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const s=ww(r);return s?JSON.parse(s):(Xa("Failed to decode base64 JWT payload"),null)}catch(s){return Xa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _C(t){const e=Hf(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e,r=!1){if(r)return e;try{return await e}catch(i){throw i instanceof nn&&SC(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function SC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t){var e;const r=t.auth,i=await t.getIdToken(),s=await Ui(t,wC(r,{idToken:i}));b(s==null?void 0:s.users.length,r,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?CC(o.providerUserInfo):[],l=TC(t.providerData,a),u=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Mw(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function AC(t){const e=le(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TC(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function CC(t){return t.map(e=>{var{providerId:r}=e,i=Bf(e,["providerId"]);return{providerId:r,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){const r=await Ow(t,{},async()=>{const i=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=Lw(t,s,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Pw.fetch()(a,{method:"POST",headers:l,body:i})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_C(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:i,refreshToken:s,expiresIn:o}=await kC(e,r);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,r,i){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,r){const{refreshToken:i,accessToken:s,expirationTime:o}=r,a=new mo;return i&&(b(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(b(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(b(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:r,auth:i,stsTokenManager:s}=e,o=Bf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Mw(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const r=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return b(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return EC(this,e)}reload(){return AC(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),r&&await Ol(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ui(this,vC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var i,s,o,a,l,u,c,h;const d=(i=r.displayName)!==null&&i!==void 0?i:void 0,f=(s=r.email)!==null&&s!==void 0?s:void 0,y=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,v=(a=r.photoURL)!==null&&a!==void 0?a:void 0,w=(l=r.tenantId)!==null&&l!==void 0?l:void 0,_=(u=r._redirectEventId)!==null&&u!==void 0?u:void 0,m=(c=r.createdAt)!==null&&c!==void 0?c:void 0,p=(h=r.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:g,emailVerified:E,isAnonymous:k,providerData:R,stsTokenManager:x}=r;b(g&&x,e,"internal-error");const L=mo.fromJSON(this.name,x);b(typeof g=="string",e,"internal-error"),Cn(d,e.name),Cn(f,e.name),b(typeof E=="boolean",e,"internal-error"),b(typeof k=="boolean",e,"internal-error"),Cn(y,e.name),Cn(v,e.name),Cn(w,e.name),Cn(_,e.name),Cn(m,e.name),Cn(p,e.name);const Q=new Tr({uid:g,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:L,createdAt:m,lastLoginAt:p});return R&&Array.isArray(R)&&(Q.providerData=R.map(H=>Object.assign({},H))),_&&(Q._redirectEventId=_),Q}static async _fromIdTokenResponse(e,r,i=!1){const s=new mo;s.updateFromServerResponse(r);const o=new Tr({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ol(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new Map;function un(t){wn(t instanceof Function,"Expected a class definition");let e=Rg.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}Uw.type="NONE";const Ng=Uw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t,e,r){return`firebase:${t}:${e}:${r}`}class Ii{constructor(e,r,i){this.persistence=e,this.auth=r,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Ja(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ja("persistence",s.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,i="authUser"){if(!r.length)return new Ii(un(Ng),e,i);const s=(await Promise.all(r.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=s[0]||un(Ng);const a=Ja(i,e.config.apiKey,e.name);let l=null;for(const c of r)try{const h=await c._get(a);if(h){const d=Tr._fromJSON(e,h);c!==o&&(l=d),o=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Ii(o,e,i):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(r.map(async c=>{if(c!==o)try{await c._remove(a)}catch{}})),new Ii(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($w(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bw(e))return"Blackberry";if(Vw(e))return"Webos";if(Gf(e))return"Safari";if((e.includes("chrome/")||Fw(e))&&!e.includes("edge/"))return"Chrome";if(jw(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(r);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function bw(t=Xe()){return/firefox\//i.test(t)}function Gf(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fw(t=Xe()){return/crios\//i.test(t)}function $w(t=Xe()){return/iemobile/i.test(t)}function jw(t=Xe()){return/android/i.test(t)}function Bw(t=Xe()){return/blackberry/i.test(t)}function Vw(t=Xe()){return/webos/i.test(t)}function Iu(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RC(t=Xe()){var e;return Iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NC(){return KA()&&document.documentMode===10}function zw(t=Xe()){return Iu(t)||jw(t)||Vw(t)||Bw(t)||/windows phone/i.test(t)||$w(t)}function xC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t,e=[]){let r;switch(t){case"Browser":r=xg(Xe());break;case"Worker":r=`${xg(Xe())}-${t}`;break;default:r=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Hr}/${i}`}async function Gw(t,e){return Gr(t,"GET","/v2/recaptchaConfig",Qi(t,e))}function Dg(t){return t!==void 0&&t.enterprise!==void 0}class Ww{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(r=>r.provider==="EMAIL_PASSWORD_PROVIDER"&&r.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qw(t){return new Promise((e,r)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=Xt("internal-error");o.customData=s,r(o)},i.type="text/javascript",i.charset="UTF-8",DC().appendChild(i)})}function PC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const OC="https://www.google.com/recaptcha/enterprise.js?render=",LC="recaptcha-enterprise",MC="NO_RECAPTCHA";class Kw{constructor(e){this.type=LC,this.auth=Yi(e)}async verify(e="verify",r=!1){async function i(o){if(!r){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Gw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ww(u);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,a(c.siteKey)}}).catch(u=>{l(u)})})}function s(o,a,l){const u=window.grecaptcha;Dg(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(c=>{a(c)}).catch(()=>{a(MC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{i(this.auth).then(l=>{if(!r&&Dg(window.grecaptcha))s(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}qw(OC+l).then(()=>{s(l,o,a)}).catch(u=>{a(u)})}}).catch(l=>{a(l)})})}}async function Ll(t,e,r,i=!1){const s=new Kw(t);let o;try{o=await s.verify(r)}catch{o=await s.verify(r,!0)}const a=Object.assign({},e);return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const i=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});i.onAbort=r,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,r,i,s){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pg(this),this.idTokenSubscription=new Pg(this),this.beforeStateQueue=new UC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=un(r)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?le(e):null;return r&&b(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}async initializeRecaptchaConfig(){const e=await Gw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ww(e);this.tenantId==null?this._agentRecaptchaConfig=r:this._tenantRecaptchaConfigs[this.tenantId]=r,r.emailPasswordEnabled&&new Kw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,r,i){return this.registerStateListener(this.authStateSubscription,e,r,i)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,i){return this.registerStateListener(this.idTokenSubscription,e,r,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const i=await this.getOrInitRedirectPersistenceManager(r);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&un(e)||this._popupRedirectResolver;b(r,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[un(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,i;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,i,s){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r),a=this._isInitialized?Promise.resolve():this._initializationPromise;return b(a,this,"internal-error"),a.then(()=>o(this.currentUser)),typeof r=="function"?e.addObserver(r,i,s):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(r["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(r["X-Firebase-AppCheck"]=s),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&cC(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Yi(t){return le(t)}class Pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=tT(r=>this.observer=r)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t,e){const r=Su(t,"auth");if(r.isInitialized()){const s=r.getImmediate(),o=r.getOptions();if(xl(o,e??{}))return s;$t(s,"already-initialized")}return r.initialize({options:e})}function $C(t,e){const r=(e==null?void 0:e.persistence)||[],i=(Array.isArray(r)?r:[r]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function jC(t,e,r){const i=Yi(t);b(i._canInitEmulator,i,"emulator-config-failed"),b(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(r!=null&&r.disableWarnings),o=Qw(e),{host:a,port:l}=BC(e),u=l===null?"":`:${l}`;i.config.emulator={url:`${o}//${a}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||VC()}function Qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BC(t){const e=Qw(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const i=r[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:Og(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:Og(a)}}}function Og(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VC(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,r){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function zC(t,e){return Gr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(t,e){return Fo(t,"POST","/v1/accounts:signInWithPassword",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return Fo(t,"POST","/v1/accounts:signInWithEmailLink",Qi(t,e))}async function GC(t,e){return Fo(t,"POST","/v1/accounts:signInWithEmailLink",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Wf{constructor(e,r,i,s=null){super("password",i),this._email=e,this._password=r,this._tenantId=s}static _fromEmailAndPassword(e,r){return new go(e,r,"password")}static _fromEmailAndCode(e,r,i=null){return new go(e,r,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){var r;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((r=e._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const s=await Ll(e,i,"signInWithPassword");return zc(e,s)}else return zc(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await Ll(e,i,"signInWithPassword");return zc(e,o)}else return Promise.reject(s)});case"emailLink":return HC(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":return zC(e,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return GC(e,{idToken:r,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e){return Fo(t,"POST","/v1/accounts:signInWithIdp",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="http://localhost";class Mr extends Wf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):$t("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=r,o=Bf(r,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Mr(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const r=this.buildRequest();return Ai(e,r)}_linkToIdToken(e,r){const i=this.buildRequest();return i.idToken=r,Ai(e,i)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Ai(e,r)}buildRequest(){const e={requestUri:WC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Uo(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KC(t){const e=Cs(ks(t)).link,r=e?Cs(ks(e)).deep_link_id:null,i=Cs(ks(t)).deep_link_id;return(i?Cs(ks(i)).link:null)||i||r||e||t}class qf{constructor(e){var r,i,s,o,a,l;const u=Cs(ks(e)),c=(r=u.apiKey)!==null&&r!==void 0?r:null,h=(i=u.oobCode)!==null&&i!==void 0?i:null,d=qC((s=u.mode)!==null&&s!==void 0?s:null);b(c&&h&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=h,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const r=KC(e);try{return new qf(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.providerId=Xi.PROVIDER_ID}static credential(e,r){return go._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const i=qf.parseLink(r);return b(i,"argument-error"),go._fromEmailAndCode(e,i.code,i.tenantId)}}Xi.PROVIDER_ID="password";Xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends $o{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Mr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:i}=e;if(!r&&!i)return null;try{return Pn.credential(r,i)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends $o{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends $o{constructor(){super("twitter.com")}static credential(e,r){return Mr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:i}=e;if(!r||!i)return null;try{return Ln.credential(r,i)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t,e){return Fo(t,"POST","/v1/accounts:signUp",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,i,s=!1){const o=await Tr._fromIdTokenResponse(e,i,s),a=Lg(i);return new Ur({user:o,providerId:a,_tokenResponse:i,operationType:r})}static async _forOperation(e,r,i){await e._updateTokensIfNecessary(i,!0);const s=Lg(i);return new Ur({user:e,providerId:s,_tokenResponse:i,operationType:r})}}function Lg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends nn{constructor(e,r,i,s){var o;super(r.code,r.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ml.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,r,i,s){return new Ml(e,r,i,s)}}function Xw(t,e,r,i){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ml._fromErrorAndOperation(t,o,e,i):o})}async function QC(t,e,r=!1){const i=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ur._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e,r=!1){const{auth:i}=t,s="reauthenticate";try{const o=await Ui(t,Xw(i,s,e,t),r);b(o.idToken,i,"internal-error");const a=Hf(o.idToken);b(a,i,"internal-error");const{sub:l}=a;return b(t.uid===l,i,"user-mismatch"),Ur._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&$t(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e,r=!1){const i="signIn",s=await Xw(t,i,e),o=await Ur._fromIdTokenResponse(t,i,s);return r||await t._updateCurrentUser(o.user),o}async function XC(t,e){return Jw(Yi(t),e)}async function JC(t,e,r){var i;const s=Yi(t),o={returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"};let a;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await Ll(s,o,"signUpPassword");a=Hc(s,c)}else a=Hc(s,o).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await Ll(s,o,"signUpPassword");return Hc(s,h)}else return Promise.reject(c)});const l=await a.catch(c=>Promise.reject(c)),u=await Ur._fromIdTokenResponse(s,"signIn",l);return await s._updateCurrentUser(u.user),u}function ZC(t,e,r){return XC(le(t),Xi.credential(e,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t,e){return Gr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,{displayName:e,photoURL:r}){if(e===void 0&&r===void 0)return;const i=le(t),o={idToken:await i.getIdToken(),displayName:e,photoUrl:r,returnSecureToken:!0},a=await Ui(i,ek(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const l=i.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function nk(t,e,r,i){return le(t).onIdTokenChanged(e,r,i)}function rk(t,e,r){return le(t).beforeAuthStateChanged(e,r)}function ik(t,e,r,i){return le(t).onAuthStateChanged(e,r,i)}function sk(t){return le(t).signOut()}const Ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(){const t=Xe();return Gf(t)||Iu(t)}const ak=1e3,lk=10;class e1 extends Zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ok()&&xC(),this.fallbackToPolling=zw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const i=this.storage.getItem(r),s=this.localCache[r];i!==s&&e(r,s,i)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!r)return}const s=()=>{const a=this.storage.getItem(i);!r&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);NC()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lk):s()}notifyListeners(e,r){this.localCache[e]=r;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:i}),!0)})},ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}e1.type="LOCAL";const uk=e1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1 extends Zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}t1.type="SESSION";const n1=t1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(s=>s.isListeningto(e));if(r)return r;const i=new Au(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:i,eventType:s,data:o}=r.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;r.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async c=>c(r.origin,o)),u=await ck(l);r.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Au.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t="",e=10){let r="";for(let i=0;i<e;i++)r+=Math.floor(Math.random()*10);return t+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const c=Kf("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(f.data.response);break;default:clearTimeout(h),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:r},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function dk(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function fk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mk(){return r1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="firebaseLocalStorageDb",gk=1,bl="firebaseLocalStorage",s1="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Tu(t,e){return t.transaction([bl],e?"readwrite":"readonly").objectStore(bl)}function yk(){const t=indexedDB.deleteDatabase(i1);return new jo(t).toPromise()}function ud(){const t=indexedDB.open(i1,gk);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(bl,{keyPath:s1})}catch(s){r(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(bl)?e(i):(i.close(),await yk(),e(await ud()))})})}async function Mg(t,e,r){const i=Tu(t,!0).put({[s1]:e,value:r});return new jo(i).toPromise()}async function vk(t,e){const r=Tu(t,!1).get(e),i=await new jo(r).toPromise();return i===void 0?null:i.value}function Ug(t,e){const r=Tu(t,!0).delete(e);return new jo(r).toPromise()}const wk=800,Ek=3;class o1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ud(),this.db)}async _withRetries(e){let r=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(r++>Ek)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Au._getInstance(mk()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await fk(),!this.activeServiceWorker)return;this.sender=new hk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((r=i[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ud();return await Mg(e,Ul,"1"),await Ug(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(i=>Mg(i,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(i=>vk(i,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ug(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Tu(s,!1).getAll();return new jo(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],i=new Set;for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),r.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),r.push(s));return r}notifyListeners(e,r){this.localCache[e]=r;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o1.type="LOCAL";const _k=o1;new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t,e){return e?un(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends Wf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Ai(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Ik(t){return Jw(t.auth,new Qf(t),t.bypassAuthState)}function Ak(t){const{auth:e,user:r}=t;return b(r,e,"internal-error"),YC(r,new Qf(t),t.bypassAuthState)}async function Tk(t){const{auth:e,user:r}=t;return b(r,e,"internal-error"),QC(r,new Qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,r,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:i,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:r,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ik;case"linkViaPopup":case"linkViaRedirect":return Tk;case"reauthViaPopup":case"reauthViaRedirect":return Ak;default:$t(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=new bo(2e3,1e4);class pi extends a1{constructor(e,r,i,s,o){super(e,r,s,o),this.provider=i,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,i;if(!((i=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ck.get())};e()}}pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="pendingRedirect",Za=new Map;class Rk extends a1{constructor(e,r,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i),this.eventId=null}async execute(){let e=Za.get(this.auth._key());if(!e){try{const i=await Nk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(r){e=()=>Promise.reject(r)}Za.set(this.auth._key(),e)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nk(t,e){const r=Pk(e),i=Dk(t);if(!await i._isAvailable())return!1;const s=await i._get(r)==="true";return await i._remove(r),s}function xk(t,e){Za.set(t._key(),e)}function Dk(t){return un(t._redirectPersistence)}function Pk(t){return Ja(kk,t.config.apiKey,t.name)}async function Ok(t,e,r=!1){const i=Yi(t),s=Sk(i,e),a=await new Rk(i,s,r).execute();return a&&!r&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=10*60*1e3;class Mk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(r=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uk(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var i;if(e.error&&!l1(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";r.onError(Xt(this.auth,s))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const i=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lk&&this.cachedEventUids.clear(),this.cachedEventUids.has(bg(e))}saveEventToCache(e){this.cachedEventUids.add(bg(e)),this.lastProcessedEventTime=Date.now()}}function bg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function l1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Uk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$k=/^https?/;async function jk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bk(t);for(const r of e)try{if(Bk(r))return}catch{}$t(t,"unauthorized-domain")}function Bk(t){const e=ld(),{protocol:r,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&a.hostname===i}if(!$k.test(r))return!1;if(Fk.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=new bo(3e4,6e4);function Fg(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function zk(t){return new Promise((e,r)=>{var i,s,o;function a(){Fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fg(),r(Xt(t,"network-request-failed"))},timeout:Vk.get()})}if(!((s=(i=Jt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Jt().gapi)===null||o===void 0)&&o.load)a();else{const l=PC("iframefcb");return Jt()[l]=()=>{gapi.load?a():r(Xt(t,"network-request-failed"))},qw(`https://apis.google.com/js/api.js?onload=${l}`).catch(u=>r(u))}}).catch(e=>{throw el=null,e})}let el=null;function Hk(t){return el=el||zk(t),el}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=new bo(5e3,15e3),Wk="__/auth/iframe",qk="emulator/auth/iframe",Kk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yk(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?zf(e,qk):`https://${t.config.authDomain}/${Wk}`,i={apiKey:e.apiKey,appName:t.name,v:Hr},s=Qk.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${r}?${Uo(i).slice(1)}`}async function Xk(t){const e=await Hk(t),r=Jt().gapi;return b(r,t,"internal-error"),e.open({where:document.body,url:Yk(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kk,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=Xt(t,"network-request-failed"),l=Jt().setTimeout(()=>{o(a)},Gk.get());function u(){Jt().clearTimeout(l),s(i)}i.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zk=500,eR=600,tR="_blank",nR="http://localhost";class $g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rR(t,e,r,i=Zk,s=eR){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Jk),{width:i.toString(),height:s.toString(),top:o,left:a}),c=Xe().toLowerCase();r&&(l=Fw(c)?tR:r),bw(c)&&(e=e||nR,u.scrollbars="yes");const h=Object.entries(u).reduce((f,[y,v])=>`${f}${y}=${v},`,"");if(RC(c)&&l!=="_self")return iR(e||"",l),new $g(null);const d=window.open(e||"",l,h);b(d,t,"popup-blocked");try{d.focus()}catch{}return new $g(d)}function iR(t,e){const r=document.createElement("a");r.href=t,r.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="__/auth/handler",oR="emulator/auth/handler",aR=encodeURIComponent("fac");async function jg(t,e,r,i,s,o){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:Hr,eventId:s};if(e instanceof Yw){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",eT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(o||{}))a[h]=d}if(e instanceof $o){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(a.scopes=h.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${aR}=${encodeURIComponent(u)}`:"";return`${lR(t)}?${Uo(l).slice(1)}${c}`}function lR({config:t}){return t.emulator?zf(t,oR):`https://${t.authDomain}/${sR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="webStorageSupport";class uR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n1,this._completeRedirectFn=Ok,this._overrideRedirectResult=xk}async _openPopup(e,r,i,s){var o;wn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await jg(e,r,i,ld(),s);return rR(e,a,Kf())}async _openRedirect(e,r,i,s){await this._originValidation(e);const o=await jg(e,r,i,ld(),s);return dk(o),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:s,promise:o}=this.eventManagers[r];return s?Promise.resolve(s):(wn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[r]={promise:i},i.catch(()=>{delete this.eventManagers[r]}),i}async initAndGetManager(e){const r=await Xk(e),i=new Mk(e);return r.register("authEvent",s=>(b(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=r,i}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Gc,{type:Gc},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Gc];a!==void 0&&r(!!a),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=jk(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return zw()||Gf()||Iu()}}const cR=uR;var Bg="@firebase/auth",Vg="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fR(t){Lr(new er("auth",(e,{options:r})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;b(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hw(t)},c=new bC(i,s,o,u);return $C(c,r),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,i)=>{e.getProvider("auth-internal").initialize()})),Lr(new er("auth-internal",e=>{const r=Yi(e.getProvider("auth").getImmediate());return(i=>new hR(i))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Bg,Vg,dR(t)),Yt(Bg,Vg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=5*60,mR=Iw("authIdTokenMaxAge")||pR;let zg=null;const gR=t=>async e=>{const r=e&&await e.getIdTokenResult(),i=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(i&&i>mR)return;const s=r==null?void 0:r.token;zg!==s&&(zg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yR(t=jf()){const e=Su(t,"auth");if(e.isInitialized())return e.getImmediate();const r=FC(t,{popupRedirectResolver:cR,persistence:[_k,uk,n1]}),i=Iw("authTokenSyncURL");if(i){const o=gR(i);rk(r,o,()=>o(r.currentUser)),nk(r,a=>o(a))}const s=Ew("auth");return s&&jC(r,`http://${s}`),r}fR("Browser");var vR="firebase",wR="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(vR,wR,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="firebasestorage.googleapis.com",c1="storageBucket",ER=2*60*1e3,_R=10*60*1e3,SR=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends nn{constructor(e,r,i=0){super(Wc(e),`Firebase Storage: ${r} (${Wc(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(se||(se={}));function Wc(t){return"storage/"+t}function Yf(){const t="An unknown error occurred, please check the error payload for server response.";return new fe(se.UNKNOWN,t)}function IR(t){return new fe(se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function AR(t){return new fe(se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe(se.UNAUTHENTICATED,t)}function CR(){return new fe(se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kR(t){return new fe(se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function h1(){return new fe(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function d1(){return new fe(se.CANCELED,"User canceled the upload/download.")}function RR(t){return new fe(se.INVALID_URL,"Invalid URL '"+t+"'.")}function NR(t){return new fe(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xR(){return new fe(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c1+"' property when initializing the app?")}function f1(){return new fe(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function DR(){return new fe(se.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function PR(){return new fe(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function OR(t){return new fe(se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cd(t){return new fe(se.INVALID_ARGUMENT,t)}function p1(){return new fe(se.APP_DELETED,"The Firebase app was deleted.")}function LR(t){return new fe(se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hs(t,e){return new fe(se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ws(t){throw new fe(se.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,r){this.bucket=e,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,r){let i;try{i=mt.makeFromUrl(e,r)}catch{return new mt(e,"")}if(i.path==="")return i;throw NR(e)}static makeFromUrl(e,r){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const h="v[A-Za-z0-9_]+",d=r.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",y=new RegExp(`^https?://${d}/${h}/b/${s}/o${f}`,"i"),v={bucket:1,path:3},w=r===u1?"(?:storage.googleapis.com|storage.cloud.google.com)":r,_="([^?#]*)",m=new RegExp(`^https?://${w}/${s}/${_}`,"i"),g=[{regex:l,indices:u,postModify:o},{regex:y,indices:v,postModify:c},{regex:m,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<g.length;E++){const k=g[E],R=k.regex.exec(e);if(R){const x=R[k.indices.bucket];let L=R[k.indices.path];L||(L=""),i=new mt(x,L),k.postModify(i);break}}if(i==null)throw RR(e);return i}}class MR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t,e,r){let i=1,s=null,o=null,a=!1,l=0;function u(){return l===2}let c=!1;function h(..._){c||(c=!0,e.apply(null,_))}function d(_){s=setTimeout(()=>{s=null,t(y,u())},_)}function f(){o&&clearTimeout(o)}function y(_,...m){if(c){f();return}if(_){f(),h.call(null,_,...m);return}if(u()||a){f(),h.call(null,_,...m);return}i<64&&(i*=2);let g;l===1?(l=2,g=0):g=(i+Math.random())*1e3,d(g)}let v=!1;function w(_){v||(v=!0,f(),!c&&(s!==null?(_||(l=2),clearTimeout(s),d(0)):_||(l=1)))}return d(0),o=setTimeout(()=>{a=!0,w(!0)},r),w}function bR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){return t!==void 0}function $R(t){return typeof t=="function"}function jR(t){return typeof t=="object"&&!Array.isArray(t)}function Cu(t){return typeof t=="string"||t instanceof String}function Hg(t){return Xf()&&t instanceof Blob}function Xf(){return typeof Blob<"u"&&!GA()}function Gg(t,e,r,i){if(i<e)throw cd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>r)throw cd(`Invalid value for '${t}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t,e,r){let i=e;return r==null&&(i=`https://${e}`),`${r}://${i}/v0${t}`}function m1(t){const e=encodeURIComponent;let r="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);r=r+s+"&"}return r=r.slice(0,-1),r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Cr||(Cr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t,e){const r=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return r||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,r,i,s,o,a,l,u,c,h,d,f=!0){this.url_=e,this.method_=r,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,v)=>{this.resolve_=y,this.reject_=v,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new ka(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===Cr.NO_ERROR,u=o.getStatus();if(!l||g1(u,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===Cr.ABORT;i(!1,new ka(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;i(!0,new ka(c,o))})},r=(i,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());FR(u)?o(u):o()}catch(u){a(u)}else if(l!==null){const u=Yf();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?p1():d1();a(u)}else{const u=h1();a(u)}};this.canceled_?r(!1,new ka(!1,null,!0)):this.backoffId_=UR(e,r,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,r,i){this.wasSuccessCode=e,this.connection=r,this.canceled=!!i}}function VR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function WR(t,e,r,i,s,o,a=!0){const l=m1(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return HR(c,e),VR(c,r),zR(c,o),GR(c,i),new BR(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function KR(...t){const e=qR();if(e!==void 0){const r=new e;for(let i=0;i<t.length;i++)r.append(t[i]);return r.getBlob()}else{if(Xf())return new Blob(t);throw new fe(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QR(t,e,r){return t.webkitSlice?t.webkitSlice(e,r):t.mozSlice?t.mozSlice(e,r):t.slice?t.slice(e,r):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){if(typeof atob>"u")throw OR("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qc{constructor(e,r){this.data=e,this.contentType=r||null}}function XR(t,e){switch(t){case Wt.RAW:return new qc(y1(e));case Wt.BASE64:case Wt.BASE64URL:return new qc(v1(t,e));case Wt.DATA_URL:return new qc(ZR(e),eN(e))}throw Yf()}function y1(t){const e=[];for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(r<t.length-1&&(t.charCodeAt(r+1)&64512)===56320))e.push(239,191,189);else{const o=i,a=t.charCodeAt(++r);i=65536|(o&1023)<<10|a&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function JR(t){let e;try{e=decodeURIComponent(t)}catch{throw Hs(Wt.DATA_URL,"Malformed data URL.")}return y1(e)}function v1(t,e){switch(t){case Wt.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw Hs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Wt.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw Hs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=YR(e)}catch(s){throw s.message.includes("polyfill")?s:Hs(t,"Invalid character found")}const i=new Uint8Array(r.length);for(let s=0;s<r.length;s++)i[s]=r.charCodeAt(s);return i}class w1{constructor(e){this.base64=!1,this.contentType=null;const r=e.match(/^data:([^,]+)?,/);if(r===null)throw Hs(Wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=r[1]||null;i!=null&&(this.base64=tN(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function ZR(t){const e=new w1(t);return e.base64?v1(Wt.BASE64,e.rest):JR(e.rest)}function eN(t){return new w1(t).contentType}function tN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,r){let i=0,s="";Hg(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(r?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(r?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,r){if(Hg(this.data_)){const i=this.data_,s=QR(i,e,r);return s===null?null:new Mn(s)}else{const i=new Uint8Array(this.data_.buffer,e,r-e);return new Mn(i,!0)}}static getBlob(...e){if(Xf()){const r=e.map(i=>i instanceof Mn?i.data_:i);return new Mn(KR.apply(null,r))}else{const r=e.map(a=>Cu(a)?XR(Wt.RAW,a).data:a.data_);let i=0;r.forEach(a=>{i+=a.byteLength});const s=new Uint8Array(i);let o=0;return r.forEach(a=>{for(let l=0;l<a.length;l++)s[o++]=a[l]}),new Mn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){let e;try{e=JSON.parse(t)}catch{return null}return jR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rN(t,e){const r=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?r:t+"/"+r}function _1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t,e){return e}class Ze{constructor(e,r,i,s){this.server=e,this.local=r||e,this.writable=!!i,this.xform=s||iN}}let Ra=null;function sN(t){return!Cu(t)||t.length<2?t:_1(t)}function S1(){if(Ra)return Ra;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(o,a){return sN(a)}const r=new Ze("name");r.xform=e,t.push(r);function i(o,a){return a!==void 0?Number(a):a}const s=new Ze("size");return s.xform=i,t.push(s),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Ra=t,Ra}function oN(t,e){function r(){const i=t.bucket,s=t.fullPath,o=new mt(i,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:r})}function aN(t,e,r){const i={};i.type="file";const s=r.length;for(let o=0;o<s;o++){const a=r[o];i[a.local]=a.xform(i,e[a.server])}return oN(i,t),i}function I1(t,e,r){const i=E1(e);return i===null?null:aN(t,i,r)}function lN(t,e,r,i){const s=E1(e);if(s===null||!Cu(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(c=>{const h=t.bucket,d=t.fullPath,f="/b/"+a(h)+"/o/"+a(d),y=Bo(f,r,i),v=m1({alt:"media",token:c});return y+v})[0]}function A1(t,e){const r={},i=e.length;for(let s=0;s<i;s++){const o=e[s];o.writable&&(r[o.server]=t[o.local])}return JSON.stringify(r)}class Ji{constructor(e,r,i,s){this.url=e,this.method=r,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t){if(!t)throw Yf()}function Jf(t,e){function r(i,s){const o=I1(t,s,e);return fn(o!==null),o}return r}function uN(t,e){function r(i,s){const o=I1(t,s,e);return fn(o!==null),lN(o,s,t.host,t._protocol)}return r}function Vo(t){function e(r,i){let s;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?s=CR():s=TR():r.getStatus()===402?s=AR(t.bucket):r.getStatus()===403?s=kR(t.path):s=i,s.status=r.getStatus(),s.serverResponse=i.serverResponse,s}return e}function T1(t){const e=Vo(t);function r(i,s){let o=e(i,s);return i.getStatus()===404&&(o=IR(t.path)),o.serverResponse=s.serverResponse,o}return r}function cN(t,e,r){const i=e.fullServerUrl(),s=Bo(i,t.host,t._protocol),o="GET",a=t.maxOperationRetryTime,l=new Ji(s,o,Jf(t,r),a);return l.errorHandler=T1(e),l}function hN(t,e,r){const i=e.fullServerUrl(),s=Bo(i,t.host,t._protocol),o="GET",a=t.maxOperationRetryTime,l=new Ji(s,o,uN(t,r),a);return l.errorHandler=T1(e),l}function dN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function C1(t,e,r){const i=Object.assign({},r);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=dN(null,e)),i}function fN(t,e,r,i,s){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const c=C1(e,i,s),h=A1(c,r),d="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+u+"--",y=Mn.getBlob(d,i,f);if(y===null)throw f1();const v={name:c.fullPath},w=Bo(o,t.host,t._protocol),_="POST",m=t.maxUploadRetryTime,p=new Ji(w,_,Jf(t,r),m);return p.urlParams=v,p.headers=a,p.body=y.uploadData(),p.errorHandler=Vo(e),p}class Fl{constructor(e,r,i,s){this.current=e,this.total=r,this.finalized=!!i,this.metadata=s||null}}function Zf(t,e){let r=null;try{r=t.getResponseHeader("X-Goog-Upload-Status")}catch{fn(!1)}return fn(!!r&&(e||["active"]).indexOf(r)!==-1),r}function pN(t,e,r,i,s){const o=e.bucketOnlyServerUrl(),a=C1(e,i,s),l={name:a.fullPath},u=Bo(o,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},d=A1(a,r),f=t.maxUploadRetryTime;function y(w){Zf(w);let _;try{_=w.getResponseHeader("X-Goog-Upload-URL")}catch{fn(!1)}return fn(Cu(_)),_}const v=new Ji(u,c,y,f);return v.urlParams=l,v.headers=h,v.body=d,v.errorHandler=Vo(e),v}function mN(t,e,r,i){const s={"X-Goog-Upload-Command":"query"};function o(c){const h=Zf(c,["active","final"]);let d=null;try{d=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{fn(!1)}d||fn(!1);const f=Number(d);return fn(!isNaN(f)),new Fl(f,i.size(),h==="final")}const a="POST",l=t.maxUploadRetryTime,u=new Ji(r,a,o,l);return u.headers=s,u.errorHandler=Vo(e),u}const Wg=256*1024;function gN(t,e,r,i,s,o,a,l){const u=new Fl(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=i.size()),i.size()!==u.total)throw DR();const c=u.total-u.current;let h=c;s>0&&(h=Math.min(h,s));const d=u.current,f=d+h;let y="";h===0?y="finalize":c===h?y="upload, finalize":y="upload";const v={"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":`${u.current}`},w=i.slice(d,f);if(w===null)throw f1();function _(E,k){const R=Zf(E,["active","final"]),x=u.current+h,L=i.size();let Q;return R==="final"?Q=Jf(e,o)(E,k):Q=null,new Fl(x,L,R==="final",Q)}const m="POST",p=e.maxUploadRetryTime,g=new Ji(r,m,_,p);return g.headers=v,g.body=w.uploadData(),g.progressCallback=l||null,g.errorHandler=Vo(t),g}const st={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Kc(t){switch(t){case"running":case"pausing":case"canceling":return st.RUNNING;case"paused":return st.PAUSED;case"success":return st.SUCCESS;case"canceled":return st.CANCELED;case"error":return st.ERROR;default:return st.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,r,i){if($R(e)||r!=null||i!=null)this.next=e,this.error=r??void 0,this.complete=i??void 0;else{const o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class vN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Cr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Cr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,r,i,s){if(this.sent_)throw ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wN extends vN{initXhr(){this.xhr_.responseType="text"}}function Zr(){return new wN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,r,i=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=r,this._metadata=i,this._mappings=S1(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(se.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(g1(s.status,[]))if(o)s=h1();else{this.sleepTime=Math.max(this.sleepTime*2,SR),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(se.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,o)=>{this._resolve=s,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return r=>this._updateProgress(e+r)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([r,i])=>{switch(this._state){case"running":e(r,i);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,r)=>{const i=pN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,Zr,e,r);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((r,i)=>{const s=mN(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(s,Zr,r,i);this._request=o,o.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Wg*this._chunkMultiplier,r=new Fl(this._transferred,this._blob.size()),i=this._uploadUrl;this._resolveToken((s,o)=>{let a;try{a=gN(this._ref._location,this._ref.storage,i,this._blob,e,this._mappings,r,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(a,Zr,s,o,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Wg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,r)=>{const i=cN(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(i,Zr,e,r);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,r)=>{const i=fN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,Zr,e,r);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const r=this._transferred;this._transferred=e,this._transferred!==r&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const r=this._state==="paused";this._state=e,r&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=d1(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Kc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,r,i,s){const o=new yN(r||void 0,i||void 0,s||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,r){return this._promise.then(e,r)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const r=this._observers.indexOf(e);r!==-1&&this._observers.splice(r,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(r=>{this._notifyObserver(r)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Kc(this._state)){case st.SUCCESS:Xr(this._resolve.bind(null,this.snapshot))();break;case st.CANCELED:case st.ERROR:const r=this._reject;Xr(r.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Kc(this._state)){case st.RUNNING:case st.PAUSED:e.next&&Xr(e.next.bind(e,this.snapshot))();break;case st.SUCCESS:e.complete&&Xr(e.complete.bind(e))();break;case st.CANCELED:case st.ERROR:e.error&&Xr(e.error.bind(e,this._error))();break;default:e.error&&Xr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,r){this._service=e,r instanceof mt?this._location=r:this._location=mt.makeFromUrl(r,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,r){return new br(e,r)}get root(){const e=new mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _1(this._location.path)}get storage(){return this._service}get parent(){const e=nN(this._location.path);if(e===null)return null;const r=new mt(this._location.bucket,e);return new br(this._service,r)}_throwIfRoot(e){if(this._location.path==="")throw LR(e)}}function _N(t,e,r){return t._throwIfRoot("uploadBytesResumable"),new EN(t,new Mn(e),r)}function SN(t){t._throwIfRoot("getDownloadURL");const e=hN(t.storage,t._location,S1());return t.storage.makeRequestWithTokens(e,Zr).then(r=>{if(r===null)throw PR();return r})}function IN(t,e){const r=rN(t._location.path,e),i=new mt(t._location.bucket,r);return new br(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t){return/^[A-Za-z]+:\/\//.test(t)}function TN(t,e){return new br(t,e)}function k1(t,e){if(t instanceof ep){const r=t;if(r._bucket==null)throw xR();const i=new br(r,r._bucket);return e!=null?k1(i,e):i}else return e!==void 0?IN(t,e):t}function CN(t,e){if(e&&AN(e)){if(t instanceof ep)return TN(t,e);throw cd("To use ref(service, url), the first argument must be a Storage instance.")}else return k1(t,e)}function qg(t,e){const r=e==null?void 0:e[c1];return r==null?null:mt.makeFromBucketSpec(r,t)}function kN(t,e,r,i={}){t.host=`${e}:${r}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken=typeof s=="string"?s:Aw(s,t.app.options.projectId))}class ep{constructor(e,r,i,s,o){this.app=e,this._authProvider=r,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=u1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ER,this._maxUploadRetryTime=_R,this._requests=new Set,s!=null?this._bucket=mt.makeFromBucketSpec(s,this._host):this._bucket=qg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mt.makeFromBucketSpec(this._url,e):this._bucket=qg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const r=await e.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new br(this,e)}_makeRequest(e,r,i,s,o=!0){if(this._deleted)return new MR(p1());{const a=WR(e,this._appId,i,s,r,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,r){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,r,i,s).getPromise()}}const Kg="@firebase/storage",Qg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1="storage";function N1(t,e,r){return t=le(t),_N(t,e,r)}function x1(t){return t=le(t),SN(t)}function D1(t,e){return t=le(t),CN(t,e)}function RN(t=jf(),e){t=le(t);const i=Su(t,R1).getImmediate({identifier:e}),s=_w("storage");return s&&NN(i,...s),i}function NN(t,e,r,i={}){kN(t,e,r,i)}function xN(t,{instanceIdentifier:e}){const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ep(r,i,s,e,Hr)}function DN(){Lr(new er(R1,xN,"PUBLIC").setMultipleInstances(!0)),Yt(Kg,Qg,""),Yt(Kg,Qg,"esm2017")}DN();var PN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,tp=tp||{},$=PN||self;function $l(){}function ku(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ON(t){return Object.prototype.hasOwnProperty.call(t,Qc)&&t[Qc]||(t[Qc]=++LN)}var Qc="closure_uid_"+(1e9*Math.random()>>>0),LN=0;function MN(t,e,r){return t.call.apply(t.bind,arguments)}function UN(t,e,r){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function We(t,e,r){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=MN:We=UN,We.apply(null,arguments)}function Na(t,e){var r=Array.prototype.slice.call(arguments,1);return function(){var i=r.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function De(t,e){function r(){}r.prototype=e.prototype,t.$=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.ac=function(i,s,o){for(var a=Array(arguments.length-2),l=2;l<arguments.length;l++)a[l-2]=arguments[l];return e.prototype[s].apply(i,a)}}function ar(){this.s=this.s,this.o=this.o}var bN=0;ar.prototype.s=!1;ar.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),bN!=0)&&ON(this)};ar.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const P1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let r=0;r<t.length;r++)if(r in t&&t[r]===e)return r;return-1};function np(t){const e=t.length;if(0<e){const r=Array(e);for(let i=0;i<e;i++)r[i]=t[i];return r}return[]}function Yg(t,e){for(let r=1;r<arguments.length;r++){const i=arguments[r];if(ku(i)){const s=t.length||0,o=i.length||0;t.length=s+o;for(let a=0;a<o;a++)t[s+a]=i[a]}else t.push(i)}}function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var FN=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",$l,e),$.removeEventListener("test",$l,e)}catch{}return t}();function jl(t){return/^[\s\xa0]*$/.test(t)}var Xg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Yc(t,e){return t<e?-1:t>e?1:0}function Ru(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Gt(t){return Ru().indexOf(t)!=-1}function rp(t){return rp[" "](t),t}rp[" "]=$l;function O1(t,e,r){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=r(e)}var $N=Gt("Opera"),bi=Gt("Trident")||Gt("MSIE"),L1=Gt("Edge"),hd=L1||bi,M1=Gt("Gecko")&&!(Ru().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge"))&&!(Gt("Trident")||Gt("MSIE"))&&!Gt("Edge"),jN=Ru().toLowerCase().indexOf("webkit")!=-1&&!Gt("Edge");function U1(){var t=$.document;return t?t.documentMode:void 0}var Bl;e:{var Xc="",Jc=function(){var t=Ru();if(M1)return/rv:([^\);]+)(\)|;)/.exec(t);if(L1)return/Edge\/([\d\.]+)/.exec(t);if(bi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jN)return/WebKit\/(\S+)/.exec(t);if($N)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jc&&(Xc=Jc?Jc[1]:""),bi){var Zc=U1();if(Zc!=null&&Zc>parseFloat(Xc)){Bl=String(Zc);break e}}Bl=Xc}var BN={};function VN(){return O1(BN,9,function(){let t=0;const e=Xg(String(Bl)).split("."),r=Xg("9").split("."),i=Math.max(e.length,r.length);for(let a=0;t==0&&a<i;a++){var s=e[a]||"",o=r[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s[0].length==0&&o[0].length==0)break;t=Yc(s[1].length==0?0:parseInt(s[1],10),o[1].length==0?0:parseInt(o[1],10))||Yc(s[2].length==0,o[2].length==0)||Yc(s[2],o[2]),s=s[3],o=o[3]}while(t==0)}return 0<=t})}var dd;if($.document&&bi){var Jg=U1();dd=Jg||parseInt(Bl,10)||void 0}else dd=void 0;var zN=dd;function yo(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(M1){e:{try{rp(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else r=="mouseover"?e=t.fromElement:r=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yo.$.h.call(this)}}De(yo,qe);var HN={2:"touch",3:"pen",4:"mouse"};yo.prototype.h=function(){yo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ho="closure_listenable_"+(1e6*Math.random()|0),GN=0;function WN(t,e,r,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=r,this.capture=!!i,this.la=s,this.key=++GN,this.fa=this.ia=!1}function Nu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ip(t,e,r){for(const i in t)e.call(r,t[i],i,t)}function b1(t){const e={};for(const r in t)e[r]=t[r];return e}const Zg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F1(t,e){let r,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(r in i)t[r]=i[r];for(let o=0;o<Zg.length;o++)r=Zg[o],Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}}function xu(t){this.src=t,this.g={},this.h=0}xu.prototype.add=function(t,e,r,i,s){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var a=pd(t,e,i,s);return-1<a?(e=t[a],r||(e.ia=!1)):(e=new WN(e,this.src,o,!!i,s),e.ia=r,t.push(e)),e};function fd(t,e){var r=e.type;if(r in t.g){var i=t.g[r],s=P1(i,e),o;(o=0<=s)&&Array.prototype.splice.call(i,s,1),o&&(Nu(e),t.g[r].length==0&&(delete t.g[r],t.h--))}}function pd(t,e,r,i){for(var s=0;s<t.length;++s){var o=t[s];if(!o.fa&&o.listener==e&&o.capture==!!r&&o.la==i)return s}return-1}var sp="closure_lm_"+(1e6*Math.random()|0),eh={};function $1(t,e,r,i,s){if(i&&i.once)return B1(t,e,r,i,s);if(Array.isArray(e)){for(var o=0;o<e.length;o++)$1(t,e[o],r,i,s);return null}return r=lp(r),t&&t[Ho]?t.O(e,r,zo(i)?!!i.capture:!!i,s):j1(t,e,r,!1,i,s)}function j1(t,e,r,i,s,o){if(!e)throw Error("Invalid event type");var a=zo(s)?!!s.capture:!!s,l=ap(t);if(l||(t[sp]=l=new xu(t)),r=l.add(e,r,i,a,o),r.proxy)return r;if(i=qN(),r.proxy=i,i.src=t,i.listener=r,t.addEventListener)FN||(s=a),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(z1(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return r}function qN(){function t(r){return e.call(t.src,t.listener,r)}const e=KN;return t}function B1(t,e,r,i,s){if(Array.isArray(e)){for(var o=0;o<e.length;o++)B1(t,e[o],r,i,s);return null}return r=lp(r),t&&t[Ho]?t.P(e,r,zo(i)?!!i.capture:!!i,s):j1(t,e,r,!0,i,s)}function V1(t,e,r,i,s){if(Array.isArray(e))for(var o=0;o<e.length;o++)V1(t,e[o],r,i,s);else i=zo(i)?!!i.capture:!!i,r=lp(r),t&&t[Ho]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],r=pd(o,r,i,s),-1<r&&(Nu(o[r]),Array.prototype.splice.call(o,r,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=ap(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pd(e,r,i,s)),(r=-1<t?e[t]:null)&&op(r))}function op(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ho])fd(e.i,t);else{var r=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(r,i,t.capture):e.detachEvent?e.detachEvent(z1(r),i):e.addListener&&e.removeListener&&e.removeListener(i),(r=ap(e))?(fd(r,t),r.h==0&&(r.src=null,e[sp]=null)):Nu(t)}}}function z1(t){return t in eh?eh[t]:eh[t]="on"+t}function KN(t,e){if(t.fa)t=!0;else{e=new yo(e,this);var r=t.listener,i=t.la||t.src;t.ia&&op(t),t=r.call(i,e)}return t}function ap(t){return t=t[sp],t instanceof xu?t:null}var th="__closure_events_fn_"+(1e9*Math.random()>>>0);function lp(t){return typeof t=="function"?t:(t[th]||(t[th]=function(e){return t.handleEvent(e)}),t[th])}function xe(){ar.call(this),this.i=new xu(this),this.S=this,this.J=null}De(xe,ar);xe.prototype[Ho]=!0;xe.prototype.removeEventListener=function(t,e,r,i){V1(this,t,e,r,i)};function be(t,e){var r,i=t.J;if(i)for(r=[];i;i=i.J)r.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var s=e;e=new qe(i,t),F1(e,s)}if(s=!0,r)for(var o=r.length-1;0<=o;o--){var a=e.g=r[o];s=xa(a,i,!0,e)&&s}if(a=e.g=t,s=xa(a,i,!0,e)&&s,s=xa(a,i,!1,e)&&s,r)for(o=0;o<r.length;o++)a=e.g=r[o],s=xa(a,i,!1,e)&&s}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var r=t.g[e],i=0;i<r.length;i++)Nu(r[i]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,r,i){return this.i.add(String(t),e,!1,r,i)};xe.prototype.P=function(t,e,r,i){return this.i.add(String(t),e,!0,r,i)};function xa(t,e,r,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,o=0;o<e.length;++o){var a=e[o];if(a&&!a.fa&&a.capture==r){var l=a.listener,u=a.la||a.src;a.ia&&fd(t.i,a),s=l.call(u,i)!==!1&&s}}return s&&!i.defaultPrevented}var up=$.JSON.stringify;function QN(){var t=W1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class YN{constructor(){this.h=this.g=null}add(e,r){const i=H1.get();i.set(e,r),this.h?this.h.next=i:this.g=i,this.h=i}}var H1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new XN,t=>t.reset());class XN{constructor(){this.next=this.g=this.h=null}set(e,r){this.h=e,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}function JN(t){$.setTimeout(()=>{throw t},0)}function G1(t,e){md||ZN(),gd||(md(),gd=!0),W1.add(t,e)}var md;function ZN(){var t=$.Promise.resolve(void 0);md=function(){t.then(ex)}}var gd=!1,W1=new YN;function ex(){for(var t;t=QN();){try{t.h.call(t.g)}catch(r){JN(r)}var e=H1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gd=!1}function Du(t,e){xe.call(this),this.h=t||1,this.g=e||$,this.j=We(this.qb,this),this.l=Date.now()}De(Du,xe);N=Du.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),be(this,"tick"),this.ga&&(cp(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Du.$.N.call(this),cp(this),delete this.g};function hp(t,e,r){if(typeof t=="function")r&&(t=We(t,r));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function q1(t){t.g=hp(()=>{t.g=null,t.i&&(t.i=!1,q1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class tx extends ar{constructor(e,r){super(),this.m=e,this.j=r,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:q1(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vo(t){ar.call(this),this.h=t,this.g={}}De(vo,ar);var ey=[];function K1(t,e,r,i){Array.isArray(r)||(r&&(ey[0]=r.toString()),r=ey);for(var s=0;s<r.length;s++){var o=$1(e,r[s],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Q1(t){ip(t.g,function(e,r){this.g.hasOwnProperty(r)&&op(e)},t),t.g={}}vo.prototype.N=function(){vo.$.N.call(this),Q1(this)};vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pu(){this.g=!0}Pu.prototype.Ea=function(){this.g=!1};function nx(t,e,r,i,s,o){t.info(function(){if(t.g)if(o)for(var a="",l=o.split("&"),u=0;u<l.length;u++){var c=l[u].split("=");if(1<c.length){var h=c[0];c=c[1];var d=h.split("_");a=2<=d.length&&d[1]=="type"?a+(h+"="+c+"&"):a+(h+"=redacted&")}}else a=null;else a=o;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+r+`
`+a})}function rx(t,e,r,i,s,o,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+r+`
`+o+" "+a})}function mi(t,e,r,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sx(t,r)+(i?" "+i:"")})}function ix(t,e){t.info(function(){return"TIMEOUT: "+e})}Pu.prototype.info=function(){};function sx(t,e){if(!t.g)return e;if(!e)return null;try{var r=JSON.parse(e);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var i=r[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var o=s[0];if(o!="noop"&&o!="stop"&&o!="close")for(var a=1;a<s.length;a++)s[a]=""}}}}return up(r)}catch{return e}}var Wr={},ty=null;function Ou(){return ty=ty||new xe}Wr.Ta="serverreachability";function Y1(t){qe.call(this,Wr.Ta,t)}De(Y1,qe);function wo(t){const e=Ou();be(e,new Y1(e))}Wr.STAT_EVENT="statevent";function X1(t,e){qe.call(this,Wr.STAT_EVENT,t),this.stat=e}De(X1,qe);function tt(t){const e=Ou();be(e,new X1(e,t))}Wr.Ua="timingevent";function J1(t,e){qe.call(this,Wr.Ua,t),this.size=e}De(J1,qe);function Go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Lu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Z1={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dp(){}dp.prototype.h=null;function ny(t){return t.h||(t.h=t.i())}function eE(){}var Wo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fp(){qe.call(this,"d")}De(fp,qe);function pp(){qe.call(this,"c")}De(pp,qe);var yd;function Mu(){}De(Mu,dp);Mu.prototype.g=function(){return new XMLHttpRequest};Mu.prototype.i=function(){return{}};yd=new Mu;function qo(t,e,r,i){this.l=t,this.j=e,this.m=r,this.W=i||1,this.U=new vo(this),this.P=ox,t=hd?125:void 0,this.V=new Du(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new tE}function tE(){this.i=null,this.g="",this.h=!1}var ox=45e3,vd={},Vl={};N=qo.prototype;N.setTimeout=function(t){this.P=t};function wd(t,e,r){t.L=1,t.v=bu(En(e)),t.s=r,t.S=!0,nE(t,null)}function nE(t,e){t.G=Date.now(),Ko(t),t.A=En(t.v);var r=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),cE(r.i,"t",i),t.C=0,r=t.l.I,t.h=new tE,t.g=DE(t.l,r?e:null,!t.s),0<t.O&&(t.M=new tx(We(t.Pa,t,t.g),t.O)),K1(t.U,t.g,"readystatechange",t.nb),e=t.I?b1(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),wo(),nx(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&cn(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const h=cn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>h)&&(h!=3||hd||this.g&&(this.h.h||this.g.ja()||oy(this.g)))){this.J||h!=4||e==7||(e==8||0>=d?wo(3):wo(2)),Uu(this);var r=this.g.da();this.aa=r;t:if(rE(this)){var i=oy(this.g);t="";var s=i.length,o=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Er(this),Gs(this);var a="";break t}this.h.i=new $.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:o&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=r==200,rx(this.j,this.u,this.A,this.m,this.W,h,r),this.i){if(this.ba&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jl(l)){var c=l;break t}}c=null}if(r=c)mi(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ed(this,r);else{this.i=!1,this.o=3,tt(12),Er(this),Gs(this);break e}}this.S?(iE(this,h,a),hd&&this.i&&h==3&&(K1(this.U,this.V,"tick",this.mb),this.V.start())):(mi(this.j,this.m,a,null),Ed(this,a)),h==4&&Er(this),this.i&&!this.J&&(h==4?kE(this.l,this):(this.i=!1,Ko(this)))}else r==400&&0<a.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Er(this),Gs(this)}}}catch{}finally{}};function rE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function iE(t,e,r){let i=!0,s;for(;!t.J&&t.C<r.length;)if(s=ax(t,r),s==Vl){e==4&&(t.o=4,tt(14),i=!1),mi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==vd){t.o=4,tt(15),mi(t.j,t.m,r,"[Invalid Chunk]"),i=!1;break}else mi(t.j,t.m,s,null),Ed(t,s);rE(t)&&s!=Vl&&s!=vd&&(t.h.g="",t.C=0),e!=4||r.length!=0||t.h.h||(t.o=1,tt(16),i=!1),t.i=t.i&&i,i?0<r.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+r.length),_p(e),e.L=!0,tt(11))):(mi(t.j,t.m,r,"[Invalid Chunked Response]"),Er(t),Gs(t))}N.mb=function(){if(this.g){var t=cn(this.g),e=this.g.ja();this.C<e.length&&(Uu(this),iE(this,t,e),this.i&&t!=4&&Ko(this))}};function ax(t,e){var r=t.C,i=e.indexOf(`
`,r);return i==-1?Vl:(r=Number(e.substring(r,i)),isNaN(r)?vd:(i+=1,i+r>e.length?Vl:(e=e.substr(i,r),t.C=i+r,e)))}N.cancel=function(){this.J=!0,Er(this)};function Ko(t){t.Y=Date.now()+t.P,sE(t,t.P)}function sE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Go(We(t.lb,t),e)}function Uu(t){t.B&&($.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ix(this.j,this.A),this.L!=2&&(wo(),tt(17)),Er(this),this.o=2,Gs(this)):sE(this,this.Y-t)};function Gs(t){t.l.H==0||t.J||kE(t.l,t)}function Er(t){Uu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,cp(t.V),Q1(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Ed(t,e){try{var r=t.l;if(r.H!=0&&(r.g==t||_d(r.h,t))){if(!t.K&&_d(r.h,t)&&r.H==3){try{var i=r.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!r.u){if(r.g)if(r.g.G+3e3<t.G)Gl(r),ju(r);else break e;Ep(r),tt(18)}}else r.Fa=s[1],0<r.Fa-r.V&&37500>s[2]&&r.M&&r.A==0&&!r.v&&(r.v=Go(We(r.ib,r),6e3));if(1>=fE(r.h)&&r.na){try{r.na()}catch{}r.na=void 0}}else _r(r,11)}else if((t.K||r.g==t)&&Gl(r),!jl(e))for(s=r.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(r.V=c[0],c=c[1],r.H==2)if(c[0]=="c"){r.J=c[1],r.oa=c[2];const h=c[3];h!=null&&(r.qa=h,r.j.info("VER="+r.qa));const d=c[4];d!=null&&(r.Ga=d,r.j.info("SVER="+r.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,r.K=i,r.j.info("backChannelRequestTimeoutMs_="+i)),i=r;const y=t.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var o=i.h;o.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(mp(o,o.h),o.h=null))}if(i.F){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(i.Da=w,ae(i.G,i.F,w))}}r.H=3,r.l&&r.l.Ba(),r.ca&&(r.S=Date.now()-t.G,r.j.info("Handshake RTT: "+r.S+"ms")),i=r;var a=t;if(i.wa=xE(i,i.I?i.oa:null,i.Y),a.K){pE(i.h,a);var l=a,u=i.K;u&&l.setTimeout(u),l.B&&(Uu(l),Ko(l)),i.g=a}else TE(i);0<r.i.length&&Bu(r)}else c[0]!="stop"&&c[0]!="close"||_r(r,7);else r.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?_r(r,7):wp(r):c[0]!="noop"&&r.l&&r.l.Aa(c),r.A=0)}}wo(4)}catch{}}function lx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ku(t)){for(var e=[],r=t.length,i=0;i<r;i++)e.push(t[i]);return e}e=[],r=0;for(i in t)e[r++]=t[i];return e}function ux(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ku(t)||typeof t=="string"){var e=[];t=t.length;for(var r=0;r<t;r++)e.push(r);return e}e=[],r=0;for(const i in t)e[r++]=i;return e}}}function oE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ku(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var r=ux(t),i=lx(t),s=i.length,o=0;o<s;o++)e.call(void 0,i[o],r&&r[o],t)}var aE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cx(t,e){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var i=t[r].indexOf("="),s=null;if(0<=i){var o=t[r].substring(0,i);s=t[r].substring(i+1)}else o=t[r];e(o,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function kr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof kr){this.h=e!==void 0?e:t.h,zl(this,t.j),this.s=t.s,this.g=t.g,Hl(this,t.m),this.l=t.l,e=t.i;var r=new Eo;r.i=e.i,e.g&&(r.g=new Map(e.g),r.h=e.h),ry(this,r),this.o=t.o}else t&&(r=String(t).match(aE))?(this.h=!!e,zl(this,r[1]||"",!0),this.s=Rs(r[2]||""),this.g=Rs(r[3]||"",!0),Hl(this,r[4]),this.l=Rs(r[5]||"",!0),ry(this,r[6]||"",!0),this.o=Rs(r[7]||"")):(this.h=!!e,this.i=new Eo(null,this.h))}kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,iy,!0),":");var r=this.g;return(r||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,iy,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.m,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(Ns(r,r.charAt(0)=="/"?fx:dx,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.o)&&t.push("#",Ns(r,mx)),t.join("")};function En(t){return new kr(t)}function zl(t,e,r){t.j=r?Rs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ry(t,e,r){e instanceof Eo?(t.i=e,gx(t.i,t.h)):(r||(e=Ns(e,px)),t.i=new Eo(e,t.h))}function ae(t,e,r){t.i.set(e,r)}function bu(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,r){return typeof t=="string"?(t=encodeURI(t).replace(e,hx),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var iy=/[#\/\?@]/g,dx=/[#\?:]/g,fx=/[#\?]/g,px=/[#\?@]/g,mx=/#/g;function Eo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lr(t){t.g||(t.g=new Map,t.h=0,t.i&&cx(t.i,function(e,r){t.add(decodeURIComponent(e.replace(/\+/g," ")),r)}))}N=Eo.prototype;N.add=function(t,e){lr(this),this.i=null,t=Zi(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(e),this.h+=1,this};function lE(t,e){lr(t),e=Zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uE(t,e){return lr(t),e=Zi(t,e),t.g.has(e)}N.forEach=function(t,e){lr(this),this.g.forEach(function(r,i){r.forEach(function(s){t.call(e,s,i,this)},this)},this)};N.sa=function(){lr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),r=[];for(let i=0;i<e.length;i++){const s=t[i];for(let o=0;o<s.length;o++)r.push(e[i])}return r};N.Z=function(t){lr(this);let e=[];if(typeof t=="string")uE(this,t)&&(e=e.concat(this.g.get(Zi(this,t))));else{t=Array.from(this.g.values());for(let r=0;r<t.length;r++)e=e.concat(t[r])}return e};N.set=function(t,e){return lr(this),this.i=null,t=Zi(this,t),uE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cE(t,e,r){lE(t,e),0<r.length&&(t.i=null,t.g.set(Zi(t,e),np(r)),t.h+=r.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var r=0;r<e.length;r++){var i=e[r];const o=encodeURIComponent(String(i)),a=this.Z(i);for(i=0;i<a.length;i++){var s=o;a[i]!==""&&(s+="="+encodeURIComponent(String(a[i]))),t.push(s)}}return this.i=t.join("&")};function Zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gx(t,e){e&&!t.j&&(lr(t),t.i=null,t.g.forEach(function(r,i){var s=i.toLowerCase();i!=s&&(lE(this,i),cE(this,s,r))},t)),t.j=e}var yx=class{constructor(t,e){this.h=t,this.g=e}};function hE(t){this.l=t||vx,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vx=10;function dE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fE(t){return t.h?1:t.g?t.g.size:0}function _d(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mp(t,e){t.g?t.g.add(e):t.h=e}function pE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hE.prototype.cancel=function(){if(this.i=mE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const r of t.g.values())e=e.concat(r.F);return e}return np(t.i)}function gp(){}gp.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};gp.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function wx(){this.g=new gp}function Ex(t,e,r){const i=r||"";try{oE(t,function(s,o){let a=s;zo(s)&&(a=up(s)),e.push(i+o+"="+encodeURIComponent(a))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function _x(t,e){const r=new Pu;if($.Image){const i=new Image;i.onload=Na(Da,r,i,"TestLoadImage: loaded",!0,e),i.onerror=Na(Da,r,i,"TestLoadImage: error",!1,e),i.onabort=Na(Da,r,i,"TestLoadImage: abort",!1,e),i.ontimeout=Na(Da,r,i,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Da(t,e,r,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Qo(t){this.l=t.fc||null,this.j=t.ob||!1}De(Qo,dp);Qo.prototype.g=function(){return new Fu(this.l,this.j)};Qo.prototype.i=function(t){return function(){return t}}({});function Fu(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=yp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Fu,xe);var yp=0;N=Fu.prototype;N.open=function(t,e){if(this.readyState!=yp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_o(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yo(this)),this.readyState=yp};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_o(this)),this.g&&(this.readyState=3,_o(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function gE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yo(this):_o(this),this.readyState==3&&gE(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Yo(this))};N.Ya=function(t){this.g&&(this.response=t,Yo(this))};N.ka=function(){this.g&&Yo(this)};function Yo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_o(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var r=e.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=e.next();return t.join(`\r
`)};function _o(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Sx=$.JSON.parse;function me(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yE,this.L=this.M=!1}De(me,xe);var yE="",Ix=/^https?$/i,Ax=["POST","PUT"];N=me.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():yd.g(),this.C=this.u?ny(this.u):ny(yd),this.g.onreadystatechange=We(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){sy(this,o);return}if(t=r||"",r=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)r.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const o of i.keys())r.set(o,i.get(o));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(r.keys()).find(o=>o.toLowerCase()=="content-type"),s=$.FormData&&t instanceof $.FormData,!(0<=P1(Ax,e))||i||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of r)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{EE(this),0<this.B&&((this.L=Tx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.ua,this)):this.A=hp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){sy(this,o)}};function Tx(t){return bi&&VN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof tp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))};function sy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vE(t),$u(t)}function vE(t){t.F||(t.F=!0,be(t,"complete"),be(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,be(this,"complete"),be(this,"abort"),$u(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$u(this,!0)),me.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?wE(this):this.kb())};N.kb=function(){wE(this)};function wE(t){if(t.h&&typeof tp<"u"&&(!t.C[1]||cn(t)!=4||t.da()!=2)){if(t.v&&cn(t)==4)hp(t.La,0,t);else if(be(t,"readystatechange"),cn(t)==4){t.h=!1;try{const l=t.da();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var r;if(!(r=e)){var i;if(i=l===0){var s=String(t.I).match(aE)[1]||null;if(!s&&$.self&&$.self.location){var o=$.self.location.protocol;s=o.substr(0,o.length-1)}i=!Ix.test(s?s.toLowerCase():"")}r=i}if(r)be(t,"complete"),be(t,"success");else{t.m=6;try{var a=2<cn(t)?t.g.statusText:""}catch{a=""}t.j=a+" ["+t.da()+"]",vE(t)}}finally{$u(t)}}}}function $u(t,e){if(t.g){EE(t);const r=t.g,i=t.C[0]?$l:null;t.g=null,t.C=null,e||be(t,"ready");try{r.onreadystatechange=i}catch{}}}function EE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function cn(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Sx(e)}};function oy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case yE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _E(t){let e="";return ip(t,function(r,i){e+=i,e+=":",e+=r,e+=`\r
`}),e}function vp(t,e,r){e:{for(i in r){var i=!1;break e}i=!0}i||(r=_E(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):ae(t,e,r))}function Es(t,e,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||e}function SE(t){this.Ga=0,this.i=[],this.j=new Pu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Es("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Es("baseRetryDelayMs",5e3,t),this.hb=Es("retryDelaySeedMs",1e4,t),this.eb=Es("forwardChannelMaxRetries",2,t),this.xa=Es("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new hE(t&&t.concurrentRequestLimit),this.Ja=new wx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}N=SE.prototype;N.qa=8;N.H=1;function wp(t){if(IE(t),t.H==3){var e=t.W++,r=En(t.G);ae(r,"SID",t.J),ae(r,"RID",e),ae(r,"TYPE","terminate"),Xo(t,r),e=new qo(t,t.j,e,void 0),e.L=2,e.v=bu(En(r)),r=!1,$.navigator&&$.navigator.sendBeacon&&(r=$.navigator.sendBeacon(e.v.toString(),"")),!r&&$.Image&&(new Image().src=e.v,r=!0),r||(e.g=DE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ko(e)}NE(t)}function ju(t){t.g&&(_p(t),t.g.cancel(),t.g=null)}function IE(t){ju(t),t.u&&($.clearTimeout(t.u),t.u=null),Gl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Bu(t){dE(t.h)||t.m||(t.m=!0,G1(t.Na,t),t.C=0)}function Cx(t,e){return fE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Go(We(t.Na,t,e),RE(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new qo(this,this.j,t,void 0);let o=this.s;if(this.U&&(o?(o=b1(o),F1(o,this.U)):o=this.U),this.o!==null||this.O||(s.I=o,o=null),this.P)e:{for(var e=0,r=0;r<this.i.length;r++){t:{var i=this.i[r];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=r;break e}if(e===4096||r===this.i.length-1){e=r+1;break e}}e=1e3}else e=1e3;e=AE(this,s,e),r=En(this.G),ae(r,"RID",t),ae(r,"CVER",22),this.F&&ae(r,"X-HTTP-Session-Id",this.F),Xo(this,r),o&&(this.O?e="headers="+encodeURIComponent(String(_E(o)))+"&"+e:this.o&&vp(r,this.o,o)),mp(this.h,s),this.bb&&ae(r,"TYPE","init"),this.P?(ae(r,"$req",e),ae(r,"SID","null"),s.ba=!0,wd(s,r,null)):wd(s,r,e),this.H=2}}else this.H==3&&(t?ay(this,t):this.i.length==0||dE(this.h)||ay(this))};function ay(t,e){var r;e?r=e.m:r=t.W++;const i=En(t.G);ae(i,"SID",t.J),ae(i,"RID",r),ae(i,"AID",t.V),Xo(t,i),t.o&&t.s&&vp(i,t.o,t.s),r=new qo(t,t.j,r,t.C+1),t.o===null&&(r.I=t.s),e&&(t.i=e.F.concat(t.i)),e=AE(t,r,1e3),r.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mp(t.h,r),wd(r,i,e)}function Xo(t,e){t.ma&&ip(t.ma,function(r,i){ae(e,i,r)}),t.l&&oE({},function(r,i){ae(e,i,r)})}function AE(t,e,r){r=Math.min(t.i.length,r);var i=t.l?We(t.l.Va,t.l,t):null;e:{var s=t.i;let o=-1;for(;;){const a=["count="+r];o==-1?0<r?(o=s[0].h,a.push("ofs="+o)):o=0:a.push("ofs="+o);let l=!0;for(let u=0;u<r;u++){let c=s[u].h;const h=s[u].g;if(c-=o,0>c)o=Math.max(0,s[u].h-100),l=!1;else try{Ex(h,a,"req"+c+"_")}catch{i&&i(h)}}if(l){i=a.join("&");break e}}}return t=t.i.splice(0,r),e.F=t,i}function TE(t){t.g||t.u||(t.ba=1,G1(t.Ma,t),t.A=0)}function Ep(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Go(We(t.Ma,t),RE(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,CE(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Go(We(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,tt(10),ju(this),CE(this))};function _p(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function CE(t){t.g=new qo(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=En(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.J),ae(e,"CI",t.M?"0":"1"),ae(e,"AID",t.V),ae(e,"TYPE","xmlhttp"),Xo(t,e),t.o&&t.s&&vp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var r=t.g;t=t.oa,r.L=1,r.v=bu(En(e)),r.s=null,r.S=!0,nE(r,t)}N.ib=function(){this.v!=null&&(this.v=null,ju(this),Ep(this),tt(19))};function Gl(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function kE(t,e){var r=null;if(t.g==e){Gl(t),_p(t),t.g=null;var i=2}else if(_d(t.h,e))r=e.F,pE(t.h,e),i=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(i==1){r=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Ou(),be(i,new J1(i,r)),Bu(t)}else TE(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(i==1&&Cx(t,e)||i==2&&Ep(t)))switch(r&&0<r.length&&(e=t.h,e.i=e.i.concat(r)),s){case 1:_r(t,5);break;case 4:_r(t,10);break;case 3:_r(t,6);break;default:_r(t,2)}}}function RE(t,e){let r=t.ab+Math.floor(Math.random()*t.hb);return t.l||(r*=2),r*e}function _r(t,e){if(t.j.info("Error code "+e),e==2){var r=null;t.l&&(r=null);var i=We(t.pb,t);r||(r=new kr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||zl(r,"https"),bu(r)),_x(r.toString(),i)}else tt(2);t.H=0,t.l&&t.l.za(e),NE(t),IE(t)}N.pb=function(t){t?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function NE(t){if(t.H=0,t.pa=[],t.l){const e=mE(t.h);(e.length!=0||t.i.length!=0)&&(Yg(t.pa,e),Yg(t.pa,t.i),t.h.i.length=0,np(t.i),t.i.length=0),t.l.ya()}}function xE(t,e,r){var i=r instanceof kr?En(r):new kr(r,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Hl(i,i.m);else{var s=$.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var o=new kr(null,void 0);i&&zl(o,i),e&&(o.g=e),s&&Hl(o,s),r&&(o.l=r),i=o}return r=t.F,e=t.Da,r&&e&&ae(i,r,e),ae(i,"VER",t.qa),Xo(t,i),i}function DE(t,e,r){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=r&&t.Ha&&!t.va?new me(new Qo({ob:!0})):new me(t.va),e.Oa(t.I),e}function PE(){}N=PE.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.Va=function(){};function Wl(){if(bi&&!(10<=Number(zN)))throw Error("Environmental error: no available transport.")}Wl.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){xe.call(this),this.g=new SE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!jl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new es(this)}De(wt,xe);wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,r=this.h||void 0;tt(0),t.Y=e,t.ma=r||{},t.M=t.aa,t.G=xE(t,null,t.Y),Bu(t)};wt.prototype.close=function(){wp(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.v&&(r={},r.__data__=up(t),t=r);e.i.push(new yx(e.fb++,t)),e.H==3&&Bu(e)};wt.prototype.N=function(){this.g.l=null,delete this.j,wp(this.g),delete this.g,wt.$.N.call(this)};function OE(t){fp.call(this);var e=t.__sm__;if(e){e:{for(const r in e){t=r;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(OE,fp);function LE(){pp.call(this),this.status=1}De(LE,pp);function es(t){this.g=t}De(es,PE);es.prototype.Ba=function(){be(this.g,"a")};es.prototype.Aa=function(t){be(this.g,new OE(t))};es.prototype.za=function(t){be(this.g,new LE)};es.prototype.ya=function(){be(this.g,"b")};function kx(){this.blockSize=-1}function jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De(jt,kx);jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function nh(t,e,r){r||(r=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(r++)|e.charCodeAt(r++)<<8|e.charCodeAt(r++)<<16|e.charCodeAt(r++)<<24;else for(s=0;16>s;++s)i[s]=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;e=t.g[0],r=t.g[1],s=t.g[2];var o=t.g[3],a=e+(o^r&(s^o))+i[0]+3614090360&4294967295;e=r+(a<<7&4294967295|a>>>25),a=o+(s^e&(r^s))+i[1]+3905402710&4294967295,o=e+(a<<12&4294967295|a>>>20),a=s+(r^o&(e^r))+i[2]+606105819&4294967295,s=o+(a<<17&4294967295|a>>>15),a=r+(e^s&(o^e))+i[3]+3250441966&4294967295,r=s+(a<<22&4294967295|a>>>10),a=e+(o^r&(s^o))+i[4]+4118548399&4294967295,e=r+(a<<7&4294967295|a>>>25),a=o+(s^e&(r^s))+i[5]+1200080426&4294967295,o=e+(a<<12&4294967295|a>>>20),a=s+(r^o&(e^r))+i[6]+2821735955&4294967295,s=o+(a<<17&4294967295|a>>>15),a=r+(e^s&(o^e))+i[7]+4249261313&4294967295,r=s+(a<<22&4294967295|a>>>10),a=e+(o^r&(s^o))+i[8]+1770035416&4294967295,e=r+(a<<7&4294967295|a>>>25),a=o+(s^e&(r^s))+i[9]+2336552879&4294967295,o=e+(a<<12&4294967295|a>>>20),a=s+(r^o&(e^r))+i[10]+4294925233&4294967295,s=o+(a<<17&4294967295|a>>>15),a=r+(e^s&(o^e))+i[11]+2304563134&4294967295,r=s+(a<<22&4294967295|a>>>10),a=e+(o^r&(s^o))+i[12]+1804603682&4294967295,e=r+(a<<7&4294967295|a>>>25),a=o+(s^e&(r^s))+i[13]+4254626195&4294967295,o=e+(a<<12&4294967295|a>>>20),a=s+(r^o&(e^r))+i[14]+2792965006&4294967295,s=o+(a<<17&4294967295|a>>>15),a=r+(e^s&(o^e))+i[15]+1236535329&4294967295,r=s+(a<<22&4294967295|a>>>10),a=e+(s^o&(r^s))+i[1]+4129170786&4294967295,e=r+(a<<5&4294967295|a>>>27),a=o+(r^s&(e^r))+i[6]+3225465664&4294967295,o=e+(a<<9&4294967295|a>>>23),a=s+(e^r&(o^e))+i[11]+643717713&4294967295,s=o+(a<<14&4294967295|a>>>18),a=r+(o^e&(s^o))+i[0]+3921069994&4294967295,r=s+(a<<20&4294967295|a>>>12),a=e+(s^o&(r^s))+i[5]+3593408605&4294967295,e=r+(a<<5&4294967295|a>>>27),a=o+(r^s&(e^r))+i[10]+38016083&4294967295,o=e+(a<<9&4294967295|a>>>23),a=s+(e^r&(o^e))+i[15]+3634488961&4294967295,s=o+(a<<14&4294967295|a>>>18),a=r+(o^e&(s^o))+i[4]+3889429448&4294967295,r=s+(a<<20&4294967295|a>>>12),a=e+(s^o&(r^s))+i[9]+568446438&4294967295,e=r+(a<<5&4294967295|a>>>27),a=o+(r^s&(e^r))+i[14]+3275163606&4294967295,o=e+(a<<9&4294967295|a>>>23),a=s+(e^r&(o^e))+i[3]+4107603335&4294967295,s=o+(a<<14&4294967295|a>>>18),a=r+(o^e&(s^o))+i[8]+1163531501&4294967295,r=s+(a<<20&4294967295|a>>>12),a=e+(s^o&(r^s))+i[13]+2850285829&4294967295,e=r+(a<<5&4294967295|a>>>27),a=o+(r^s&(e^r))+i[2]+4243563512&4294967295,o=e+(a<<9&4294967295|a>>>23),a=s+(e^r&(o^e))+i[7]+1735328473&4294967295,s=o+(a<<14&4294967295|a>>>18),a=r+(o^e&(s^o))+i[12]+2368359562&4294967295,r=s+(a<<20&4294967295|a>>>12),a=e+(r^s^o)+i[5]+4294588738&4294967295,e=r+(a<<4&4294967295|a>>>28),a=o+(e^r^s)+i[8]+2272392833&4294967295,o=e+(a<<11&4294967295|a>>>21),a=s+(o^e^r)+i[11]+1839030562&4294967295,s=o+(a<<16&4294967295|a>>>16),a=r+(s^o^e)+i[14]+4259657740&4294967295,r=s+(a<<23&4294967295|a>>>9),a=e+(r^s^o)+i[1]+2763975236&4294967295,e=r+(a<<4&4294967295|a>>>28),a=o+(e^r^s)+i[4]+1272893353&4294967295,o=e+(a<<11&4294967295|a>>>21),a=s+(o^e^r)+i[7]+4139469664&4294967295,s=o+(a<<16&4294967295|a>>>16),a=r+(s^o^e)+i[10]+3200236656&4294967295,r=s+(a<<23&4294967295|a>>>9),a=e+(r^s^o)+i[13]+681279174&4294967295,e=r+(a<<4&4294967295|a>>>28),a=o+(e^r^s)+i[0]+3936430074&4294967295,o=e+(a<<11&4294967295|a>>>21),a=s+(o^e^r)+i[3]+3572445317&4294967295,s=o+(a<<16&4294967295|a>>>16),a=r+(s^o^e)+i[6]+76029189&4294967295,r=s+(a<<23&4294967295|a>>>9),a=e+(r^s^o)+i[9]+3654602809&4294967295,e=r+(a<<4&4294967295|a>>>28),a=o+(e^r^s)+i[12]+3873151461&4294967295,o=e+(a<<11&4294967295|a>>>21),a=s+(o^e^r)+i[15]+530742520&4294967295,s=o+(a<<16&4294967295|a>>>16),a=r+(s^o^e)+i[2]+3299628645&4294967295,r=s+(a<<23&4294967295|a>>>9),a=e+(s^(r|~o))+i[0]+4096336452&4294967295,e=r+(a<<6&4294967295|a>>>26),a=o+(r^(e|~s))+i[7]+1126891415&4294967295,o=e+(a<<10&4294967295|a>>>22),a=s+(e^(o|~r))+i[14]+2878612391&4294967295,s=o+(a<<15&4294967295|a>>>17),a=r+(o^(s|~e))+i[5]+4237533241&4294967295,r=s+(a<<21&4294967295|a>>>11),a=e+(s^(r|~o))+i[12]+1700485571&4294967295,e=r+(a<<6&4294967295|a>>>26),a=o+(r^(e|~s))+i[3]+2399980690&4294967295,o=e+(a<<10&4294967295|a>>>22),a=s+(e^(o|~r))+i[10]+4293915773&4294967295,s=o+(a<<15&4294967295|a>>>17),a=r+(o^(s|~e))+i[1]+2240044497&4294967295,r=s+(a<<21&4294967295|a>>>11),a=e+(s^(r|~o))+i[8]+1873313359&4294967295,e=r+(a<<6&4294967295|a>>>26),a=o+(r^(e|~s))+i[15]+4264355552&4294967295,o=e+(a<<10&4294967295|a>>>22),a=s+(e^(o|~r))+i[6]+2734768916&4294967295,s=o+(a<<15&4294967295|a>>>17),a=r+(o^(s|~e))+i[13]+1309151649&4294967295,r=s+(a<<21&4294967295|a>>>11),a=e+(s^(r|~o))+i[4]+4149444226&4294967295,e=r+(a<<6&4294967295|a>>>26),a=o+(r^(e|~s))+i[11]+3174756917&4294967295,o=e+(a<<10&4294967295|a>>>22),a=s+(e^(o|~r))+i[2]+718787259&4294967295,s=o+(a<<15&4294967295|a>>>17),a=r+(o^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(a<<21&4294967295|a>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+o&4294967295}jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var r=e-this.blockSize,i=this.m,s=this.h,o=0;o<e;){if(s==0)for(;o<=r;)nh(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(i[s++]=t.charCodeAt(o++),s==this.blockSize){nh(this,i),s=0;break}}else for(;o<e;)if(i[s++]=t[o++],s==this.blockSize){nh(this,i),s=0;break}}this.h=s,this.i+=e};jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var r=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=r&255,r/=256;for(this.j(t),t=Array(16),e=r=0;4>e;++e)for(var i=0;32>i;i+=8)t[r++]=this.g[e]>>>i&255;return t};function Z(t,e){this.h=e;for(var r=[],i=!0,s=t.length-1;0<=s;s--){var o=t[s]|0;i&&o==e||(r[s]=o,i=!1)}this.g=r}var Rx={};function Sp(t){return-128<=t&&128>t?O1(Rx,t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function qt(t){if(isNaN(t)||!isFinite(t))return Ti;if(0>t)return Me(qt(-t));for(var e=[],r=1,i=0;t>=r;i++)e[i]=t/r|0,r*=Sd;return new Z(e,0)}function ME(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(ME(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=qt(Math.pow(e,8)),i=Ti,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),e);8>o?(o=qt(Math.pow(e,o)),i=i.R(o).add(qt(a))):(i=i.R(r),i=i.add(qt(a)))}return i}var Sd=4294967296,Ti=Sp(0),Id=Sp(1),ly=Sp(16777216);N=Z.prototype;N.ea=function(){if(At(this))return-Me(this).ea();for(var t=0,e=1,r=0;r<this.g.length;r++){var i=this.D(r);t+=(0<=i?i:Sd+i)*e,e*=Sd}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(hn(this))return"0";if(At(this))return"-"+Me(this).toString(t);for(var e=qt(Math.pow(t,6)),r=this,i="";;){var s=Kl(r,e).g;r=ql(r,s.R(e));var o=((0<r.g.length?r.g[0]:r.h)>>>0).toString(t);if(r=s,hn(r))return o+i;for(;6>o.length;)o="0"+o;i=o+i}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function hn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function At(t){return t.h==-1}N.X=function(t){return t=ql(this,t),At(t)?-1:hn(t)?0:1};function Me(t){for(var e=t.g.length,r=[],i=0;i<e;i++)r[i]=~t.g[i];return new Z(r,~t.h).add(Id)}N.abs=function(){return At(this)?Me(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),r=[],i=0,s=0;s<=e;s++){var o=i+(this.D(s)&65535)+(t.D(s)&65535),a=(o>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=a>>>16,o&=65535,a&=65535,r[s]=a<<16|o}return new Z(r,r[r.length-1]&-2147483648?-1:0)};function ql(t,e){return t.add(Me(e))}N.R=function(t){if(hn(this)||hn(t))return Ti;if(At(this))return At(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(At(t))return Me(this.R(Me(t)));if(0>this.X(ly)&&0>t.X(ly))return qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,r=[],i=0;i<2*e;i++)r[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var o=this.D(i)>>>16,a=this.D(i)&65535,l=t.D(s)>>>16,u=t.D(s)&65535;r[2*i+2*s]+=a*u,Pa(r,2*i+2*s),r[2*i+2*s+1]+=o*u,Pa(r,2*i+2*s+1),r[2*i+2*s+1]+=a*l,Pa(r,2*i+2*s+1),r[2*i+2*s+2]+=o*l,Pa(r,2*i+2*s+2)}for(i=0;i<e;i++)r[i]=r[2*i+1]<<16|r[2*i];for(i=e;i<2*e;i++)r[i]=0;return new Z(r,0)};function Pa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function _s(t,e){this.g=t,this.h=e}function Kl(t,e){if(hn(e))throw Error("division by zero");if(hn(t))return new _s(Ti,Ti);if(At(t))return e=Kl(Me(t),e),new _s(Me(e.g),Me(e.h));if(At(e))return e=Kl(t,Me(e)),new _s(Me(e.g),e.h);if(30<t.g.length){if(At(t)||At(e))throw Error("slowDivide_ only works with positive integers.");for(var r=Id,i=e;0>=i.X(t);)r=uy(r),i=uy(i);var s=Jr(r,1),o=Jr(i,1);for(i=Jr(i,2),r=Jr(r,2);!hn(i);){var a=o.add(i);0>=a.X(t)&&(s=s.add(r),o=a),i=Jr(i,1),r=Jr(r,1)}return e=ql(t,s.R(e)),new _s(s,e)}for(s=Ti;0<=t.X(e);){for(r=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(r)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),o=qt(r),a=o.R(e);At(a)||0<a.X(t);)r-=i,o=qt(r),a=o.R(e);hn(o)&&(o=Id),s=s.add(o),t=ql(t,a)}return new _s(s,t)}N.gb=function(t){return Kl(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),r=[],i=0;i<e;i++)r[i]=this.D(i)&t.D(i);return new Z(r,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),r=[],i=0;i<e;i++)r[i]=this.D(i)|t.D(i);return new Z(r,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),r=[],i=0;i<e;i++)r[i]=this.D(i)^t.D(i);return new Z(r,this.h^t.h)};function uy(t){for(var e=t.g.length+1,r=[],i=0;i<e;i++)r[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Z(r,t.h)}function Jr(t,e){var r=e>>5;e%=32;for(var i=t.g.length-r,s=[],o=0;o<i;o++)s[o]=0<e?t.D(o+r)>>>e|t.D(o+r+1)<<32-e:t.D(o+r);return new Z(s,t.h)}Wl.prototype.createWebChannel=Wl.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;Lu.NO_ERROR=0;Lu.TIMEOUT=8;Lu.HTTP_ERROR=6;Z1.COMPLETE="complete";eE.EventType=Wo;Wo.OPEN="a";Wo.CLOSE="b";Wo.ERROR="c";Wo.MESSAGE="d";xe.prototype.listen=xe.prototype.O;me.prototype.listenOnce=me.prototype.P;me.prototype.getLastError=me.prototype.Sa;me.prototype.getLastErrorCode=me.prototype.Ia;me.prototype.getStatus=me.prototype.da;me.prototype.getResponseJson=me.prototype.Wa;me.prototype.getResponseText=me.prototype.ja;me.prototype.send=me.prototype.ha;me.prototype.setWithCredentials=me.prototype.Oa;jt.prototype.digest=jt.prototype.l;jt.prototype.reset=jt.prototype.reset;jt.prototype.update=jt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=qt;Z.fromString=ME;var Nx=function(){return new Wl},xx=function(){return Ou()},rh=Lu,Dx=Z1,Px=Wr,cy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ox=Qo,Oa=eE,Lx=me,Mx=jt,Ci=Z;const hy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Ff("@firebase/firestore");function dy(){return Fr.logLevel}function M(t,...e){if(Fr.logLevel<=Y.DEBUG){const r=e.map(Ip);Fr.debug(`Firestore (${ts}): ${t}`,...r)}}function _n(t,...e){if(Fr.logLevel<=Y.ERROR){const r=e.map(Ip);Fr.error(`Firestore (${ts}): ${t}`,...r)}}function Fi(t,...e){if(Fr.logLevel<=Y.WARN){const r=e.map(Ip);Fr.warn(`Firestore (${ts}): ${t}`,...r)}}function Ip(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function ie(t,e){t||F()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends nn{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ux{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(Ve.UNAUTHENTICATED))}shutdown(){}}class bx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class Fx{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){let i=this.i;const s=u=>this.i!==i?(i=this.i,r(u)):Promise.resolve();let o=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new pn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new pn)}},0),a()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(i=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ie(typeof i.accessToken=="string"),new UE(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Ve(e)}}class $x{constructor(e,r,i){this.h=e,this.l=r,this.m=i,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class jx{constructor(e,r,i){this.h=e,this.l=r,this.m=i}getToken(){return Promise.resolve(new $x(this.h,this.l,this.m))}start(e,r){e.enqueueRetryable(()=>r(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,r){const i=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.T;return this.T=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?r(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.I.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.I.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(ie(typeof r.token=="string"),this.T=r.token,new Bx(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let i=0;i<t;i++)r[i]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=zx(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<r&&(i+=e.charAt(s[o]%e.length))}return i}}function X(t,e){return t<e?-1:t>e?1:0}function $i(t,e,r){return t.length===e.length&&t.every((i,s)=>r(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*r));return new ve(r,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new ve(0,0))}static max(){return new j(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,r,i){r===void 0?r=0:r>e.length&&F(),i===void 0?i=e.length-r:i>e.length-r&&F(),this.segments=e,this.offset=r,this.len=i}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(i=>{r.push(i)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,i=this.limit();r<i;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const i=Math.min(e.length,r.length);for(let s=0;s<i;s++){const o=e.get(s),a=r.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class ne extends So{construct(e,r,i){return new ne(e,r,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const r=[];for(const i of e){if(i.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);r.push(...i.split("/").filter(s=>s.length>0))}return new ne(r)}static emptyPath(){return new ne([])}}const Hx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends So{construct(e,r,i){return new Ge(e,r,i)}static isValidIdentifier(e){return Hx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const r=[];let i="",s=0;const o=()=>{if(i.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(i),i=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(o(),s++)}if(o(),a)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(r)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ne.fromString(e))}static fromName(e){return new U(ne.fromString(e).popFirst(5))}static empty(){return new U(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return ne.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ne(e.slice()))}}function Gx(t,e){const r=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=j.fromTimestamp(i===1e9?new ve(r+1,0):new ve(r,i));return new tr(s,U.empty(),e)}function Wx(t){return new tr(t.readTime,t.key,-1)}class tr{constructor(e,r,i){this.readTime=e,this.documentKey=r,this.largestBatchId=i}static min(){return new tr(j.min(),U.empty(),-1)}static max(){return new tr(j.max(),U.empty(),-1)}}function qx(t,e){let r=t.readTime.compareTo(e.readTime);return r!==0?r:(r=U.comparator(t.documentKey,e.documentKey),r!==0?r:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Kx)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new C((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(r,o).next(i,s)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof C?r:C.resolve(r)}catch(r){return C.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):C.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):C.reject(r)}static resolve(e){return new C((r,i)=>{r(e)})}static reject(e){return new C((r,i)=>{i(e)})}static waitFor(e){return new C((r,i)=>{let s=0,o=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&r()},u=>i(u))}),a=!0,o===s&&r()})}static or(e){let r=C.resolve(!1);for(const i of e)r=r.next(s=>s?C.resolve(s):i());return r}static forEach(e,r){const i=[];return e.forEach((s,o)=>{i.push(r.call(this,s,o))}),this.waitFor(i)}static mapArray(e,r){return new C((i,s)=>{const o=e.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const c=u;r(e[c]).next(h=>{a[c]=h,++l,l===o&&i(a)},h=>s(h))}})}static doWhile(e,r){return new C((i,s)=>{const o=()=>{e()===!0?r().next(()=>{o()},s):i()};o()})}}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>r.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ap.ct=-1;function Vu(t){return t==null}function Ql(t){return t===0&&1/t==-1/0}function Yx(t){return typeof t=="number"&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function qr(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function FE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,r){this.comparator=e,this.root=r||Le.EMPTY}insert(e,r){return new de(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}indexOf(e){let r=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return r+i.left.size;s<0?i=i.left:(r+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,i)=>(e(r,i),!1))}toString(){const e=[];return this.inorderTraversal((r,i)=>(e.push(`${r}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new La(this.root,e,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new La(this.root,e,this.comparator,!0)}}class La{constructor(e,r,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=r?i(e.key,r):1,r&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,r,i,s,o){this.key=e,this.value=r,this.color=i??Le.RED,this.left=s??Le.EMPTY,this.right=o??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,i,s,o){return new Le(e??this.key,r??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,r,i),null):o===0?s.copy(null,r,null,null,null):s.copy(null,null,null,null,s.right.insert(e,r,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let i,s=this;if(r(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,r),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),r(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,r))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,i)=>(e(r),!1))}forEachInRange(e,r){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;r(s.key)}}forEachWhile(e,r){let i;for(i=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new py(this.data.getIterator())}getIteratorFrom(e){return new py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(i=>{r=r.add(i)}),r}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const r=this.data.getIterator(),i=e.data.getIterator();for(;r.hasNext();){const s=r.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new Ke(this.comparator);return r.data=e,r}}class py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new gt([])}unionWith(e){let r=new Ke(Ge.comparator);for(const i of this.fields)r=r.add(i);for(const i of e)r=r.add(i);return new gt(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(r,i)=>r.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $E("Invalid base64 string: "+s):s}}(e);return new Je(r)}static fromUint8Array(e){const r=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const Xx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(ie(!!t),typeof t=="string"){let e=0;const r=Xx.exec(t);if(ie(!!r),r[1]){let s=r[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function Cp(t){const e=t.mapValue.fields.__previous_value__;return Tp(e)?Cp(e):e}function Io(t){const e=nr(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,r,i,s,o,a,l,u,c){this.databaseId=e,this.appId=r,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Ao{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tp(t)?4:Zx(t)?9007199254740991:10:F()}function tn(t,e){if(t===e)return!0;const r=jr(t);if(r!==jr(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=nr(i.timestampValue),a=nr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return $r(i.bytesValue).isEqual($r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return _e(i.geoPointValue.latitude)===_e(s.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _e(i.integerValue)===_e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=_e(i.doubleValue),a=_e(s.doubleValue);return o===a?Ql(o)===Ql(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(fy(o)!==fy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!tn(o[l],a[l])))return!1;return!0}(t,e);default:return F()}}function To(t,e){return(t.values||[]).find(r=>tn(r,e))!==void 0}function ji(t,e){if(t===e)return 0;const r=jr(t),i=jr(e);if(r!==i)return X(r,i);switch(r){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=_e(s.integerValue||s.doubleValue),l=_e(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return my(t.timestampValue,e.timestampValue);case 4:return my(Io(t),Io(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(s,o){const a=$r(s),l=$r(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=X(a[u],l[u]);if(c!==0)return c}return X(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(_e(s.latitude),_e(o.latitude));return a!==0?a:X(_e(s.longitude),_e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ji(a[u],l[u]);if(c)return c}return X(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ma.mapValue&&o===Ma.mapValue)return 0;if(s===Ma.mapValue)return 1;if(o===Ma.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=X(l[h],c[h]);if(d!==0)return d;const f=ji(a[l[h]],u[c[h]]);if(f!==0)return f}return X(l.length,c.length)}(t.mapValue,e.mapValue);default:throw F()}}function my(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const r=nr(t),i=nr(e),s=X(r.seconds,i.seconds);return s!==0?s:X(r.nanos,i.nanos)}function Bi(t){return Ad(t)}function Ad(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=nr(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$r(t.bytesValue).toBase64():"referenceValue"in t?(r=t.referenceValue,U.fromName(r).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",o=!0;for(const a of i.values||[])o?o=!1:s+=",",s+=Ad(a);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let o="{",a=!0;for(const l of s)a?a=!1:o+=",",o+=`${l}:${Ad(i.fields[l])}`;return o+"}"}(t.mapValue):F();var e,r}function gy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Td(t){return!!t&&"integerValue"in t}function kp(t){return!!t&&"arrayValue"in t}function yy(t){return!!t&&"nullValue"in t}function vy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tl(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,(r,i)=>e.mapValue.fields[r]=Ws(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=Ws(t.arrayValue.values[r]);return e}return Object.assign({},t)}function Zx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let i=0;i<e.length-1;++i)if(r=(r.mapValue.fields||{})[e.get(i)],!tl(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(r)}setAll(e){let r=Ge.emptyPath(),i={},s=[];e.forEach((a,l)=>{if(!r.isImmediateParentOf(l)){const u=this.getFieldsMap(r);this.applyChanges(u,i,s),i={},s=[],r=l.popLast()}a?i[l.lastSegment()]=Ws(a):s.push(l.lastSegment())});const o=this.getFieldsMap(r);this.applyChanges(o,i,s)}delete(e){const r=this.field(e.popLast());tl(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=r.mapValue.fields[e.get(i)];tl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},r.mapValue.fields[e.get(i)]=s),r=s}return r.mapValue.fields}applyChanges(e,r,i){qr(r,(s,o)=>e[s]=o);for(const s of i)delete e[s]}clone(){return new at(Ws(this.value))}}function jE(t){const e=[];return qr(t.fields,(r,i)=>{const s=new Ge([r]);if(tl(i)){const o=jE(i.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,r,i,s,o,a,l){this.key=e,this.documentType=r,this.version=i,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new He(e,0,j.min(),j.min(),j.min(),at.empty(),0)}static newFoundDocument(e,r,i,s){return new He(e,1,r,j.min(),i,s,0)}static newNoDocument(e,r){return new He(e,2,r,j.min(),j.min(),at.empty(),0)}static newUnknownDocument(e,r){return new He(e,3,r,j.min(),j.min(),at.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,r){this.position=e,this.inclusive=r}}function wy(t,e,r){let i=0;for(let s=0;s<t.position.length;s++){const o=e[s],a=t.position[s];if(o.field.isKeyField()?i=U.comparator(U.fromName(a.referenceValue),r.key):i=ji(a,r.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ey(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!tn(t.position[r],e.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,r="asc"){this.field=e,this.dir=r}}function e2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{}class Ie extends BE{constructor(e,r,i){super(),this.field=e,this.op=r,this.value=i}static create(e,r,i){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,i):new n2(e,r,i):r==="array-contains"?new s2(e,i):r==="in"?new o2(e,i):r==="not-in"?new a2(e,i):r==="array-contains-any"?new l2(e,i):new Ie(e,r,i)}static createKeyFieldInFilter(e,r,i){return r==="in"?new r2(e,i):new i2(e,i)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.matchesComparison(ji(r,this.value)):r!==null&&jr(this.value)===jr(r)&&this.matchesComparison(ji(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bt extends BE{constructor(e,r){super(),this.filters=e,this.op=r,this.lt=null}static create(e,r){return new Bt(e,r)}matches(e){return VE(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(r=>r.isInequality());return e!==null?e.field:null}ft(e){for(const r of this.getFlattenedFilters())if(e(r))return r;return null}}function VE(t){return t.op==="and"}function zE(t){return t2(t)&&VE(t)}function t2(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function Cd(t){if(t instanceof Ie)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(zE(t))return t.filters.map(e=>Cd(e)).join(",");{const e=t.filters.map(r=>Cd(r)).join(",");return`${t.op}(${e})`}}function HE(t,e){return t instanceof Ie?function(r,i){return i instanceof Ie&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof Bt?function(r,i){return i instanceof Bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&HE(o,i.filters[a]),!0):!1}(t,e):void F()}function GE(t){return t instanceof Ie?function(e){return`${e.field.canonicalString()} ${e.op} ${Bi(e.value)}`}(t):t instanceof Bt?function(e){return e.op.toString()+" {"+e.getFilters().map(GE).join(" ,")+"}"}(t):"Filter"}class n2 extends Ie{constructor(e,r,i){super(e,r,i),this.key=U.fromName(i.referenceValue)}matches(e){const r=U.comparator(e.key,this.key);return this.matchesComparison(r)}}class r2 extends Ie{constructor(e,r){super(e,"in",r),this.keys=WE("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class i2 extends Ie{constructor(e,r){super(e,"not-in",r),this.keys=WE("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function WE(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(i=>U.fromName(i.referenceValue))}class s2 extends Ie{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return kp(r)&&To(r.arrayValue,this.value)}}class o2 extends Ie{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&To(this.value.arrayValue,r)}}class a2 extends Ie{constructor(e,r){super(e,"not-in",r)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!To(this.value.arrayValue,r)}}class l2 extends Ie{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!kp(r)||!r.arrayValue.values)&&r.arrayValue.values.some(i=>To(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,r=null,i=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=r,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.dt=null}}function _y(t,e=null,r=[],i=[],s=null,o=null,a=null){return new u2(t,e,r,i,s,o,a)}function Rp(t){const e=B(t);if(e.dt===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(i=>Cd(i)).join(","),r+="|ob:",r+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Vu(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Bi(i)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Bi(i)).join(",")),e.dt=r}return e.dt}function Np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!e2(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!HE(t.filters[r],e.filters[r]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ey(t.startAt,e.startAt)&&Ey(t.endAt,e.endAt)}function kd(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,r=null,i=[],s=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function c2(t,e,r,i,s,o,a,l){return new ea(t,e,r,i,s,o,a,l)}function zu(t){return new ea(t)}function Sy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xp(t){for(const e of t.filters){const r=e.getFirstInequalityField();if(r!==null)return r}return null}function KE(t){return t.collectionGroup!==null}function ki(t){const e=B(t);if(e.wt===null){e.wt=[];const r=xp(e),i=qE(e);if(r!==null&&i===null)r.isKeyField()||e.wt.push(new qs(r)),e.wt.push(new qs(Ge.keyField(),"asc"));else{let s=!1;for(const o of e.explicitOrderBy)e.wt.push(o),o.field.isKeyField()&&(s=!0);if(!s){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new qs(Ge.keyField(),o))}}}return e.wt}function Sn(t){const e=B(t);if(!e._t)if(e.limitType==="F")e._t=_y(e.path,e.collectionGroup,ki(e),e.filters,e.limit,e.startAt,e.endAt);else{const r=[];for(const o of ki(e)){const a=o.dir==="desc"?"asc":"desc";r.push(new qs(o.field,a))}const i=e.endAt?new Yl(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Yl(e.startAt.position,e.startAt.inclusive):null;e._t=_y(e.path,e.collectionGroup,r,e.filters,e.limit,i,s)}return e._t}function Rd(t,e){e.getFirstInequalityField(),xp(t);const r=t.filters.concat([e]);return new ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),r,t.limit,t.limitType,t.startAt,t.endAt)}function Nd(t,e,r){return new ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function Hu(t,e){return Np(Sn(t),Sn(e))&&t.limitType===e.limitType}function QE(t){return`${Rp(Sn(t))}|lt:${t.limitType}`}function xd(t){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>GE(i)).join(", ")}]`),Vu(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Bi(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Bi(i)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Gu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ki(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,o,a){const l=wy(s,o,a);return s.inclusive?l<=0:l<0}(r.startAt,ki(r),i)||r.endAt&&!function(s,o,a){const l=wy(s,o,a);return s.inclusive?l>=0:l>0}(r.endAt,ki(r),i))}(t,e)}function h2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YE(t){return(e,r)=>{let i=!1;for(const s of ki(t)){const o=d2(s,e,r);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function d2(t,e,r){const i=t.field.isKeyField()?U.comparator(e.key,r.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ji(l,u):F()}(t.field,e,r);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,r){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,r]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,r]);s.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[r]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qr(this.inner,(r,i)=>{for(const[s,o]of i)e(s,o)})}isEmpty(){return FE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=new de(U.comparator);function In(){return f2}const XE=new de(U.comparator);function xs(...t){let e=XE;for(const r of t)e=e.insert(r.key,r);return e}function JE(t){let e=XE;return t.forEach((r,i)=>e=e.insert(r,i.overlayedDocument)),e}function Sr(){return Ks()}function ZE(){return Ks()}function Ks(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const p2=new de(U.comparator),m2=new Ke(U.comparator);function G(...t){let e=m2;for(const r of t)e=e.add(r);return e}const g2=new Ke(X);function y2(){return g2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function t_(t){return{integerValue:""+t}}function v2(t,e){return Yx(e)?t_(e):e_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this._=void 0}}function w2(t,e,r){return t instanceof Co?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Tp(s)&&(s=Cp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(r,e):t instanceof Vi?r_(t,e):t instanceof ko?i_(t,e):function(i,s){const o=n_(i,s),a=Iy(o)+Iy(i.gt);return Td(o)&&Td(i.gt)?t_(a):e_(i.serializer,a)}(t,e)}function E2(t,e,r){return t instanceof Vi?r_(t,e):t instanceof ko?i_(t,e):r}function n_(t,e){return t instanceof Xl?Td(r=e)||function(i){return!!i&&"doubleValue"in i}(r)?e:{integerValue:0}:null;var r}class Co extends Wu{}class Vi extends Wu{constructor(e){super(),this.elements=e}}function r_(t,e){const r=s_(e);for(const i of t.elements)r.some(s=>tn(s,i))||r.push(i);return{arrayValue:{values:r}}}class ko extends Wu{constructor(e){super(),this.elements=e}}function i_(t,e){let r=s_(e);for(const i of t.elements)r=r.filter(s=>!tn(s,i));return{arrayValue:{values:r}}}class Xl extends Wu{constructor(e,r){super(),this.serializer=e,this.gt=r}}function Iy(t){return _e(t.integerValue||t.doubleValue)}function s_(t){return kp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,r){this.field=e,this.transform=r}}function _2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Vi&&i instanceof Vi||r instanceof ko&&i instanceof ko?$i(r.elements,i.elements,tn):r instanceof Xl&&i instanceof Xl?tn(r.gt,i.gt):r instanceof Co&&i instanceof Co}(t.transform,e.transform)}class S2{constructor(e,r){this.version=e,this.transformResults=r}}class Zt{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qu{}function a_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new u_(t.key,Zt.none()):new ta(t.key,t.data,Zt.none());{const r=t.data,i=at.empty();let s=new Ke(Ge.comparator);for(let o of e.fields)if(!s.has(o)){let a=r.field(o);a===null&&o.length>1&&(o=o.popLast(),a=r.field(o)),a===null?i.delete(o):i.set(o,a),s=s.add(o)}return new ur(t.key,i,new gt(s.toArray()),Zt.none())}}function I2(t,e,r){t instanceof ta?function(i,s,o){const a=i.value.clone(),l=Ty(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,r):t instanceof ur?function(i,s,o){if(!nl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ty(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(l_(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,r):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,r)}function Qs(t,e,r,i){return t instanceof ta?function(s,o,a,l){if(!nl(s.precondition,o))return a;const u=s.value.clone(),c=Cy(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,r,i):t instanceof ur?function(s,o,a,l){if(!nl(s.precondition,o))return a;const u=Cy(s.fieldTransforms,l,o),c=o.data;return c.setAll(l_(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,r,i):function(s,o,a){return nl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,r)}function A2(t,e){let r=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),o=n_(i.transform,s||null);o!=null&&(r===null&&(r=at.empty()),r.set(i.field,o))}return r||null}function Ay(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$i(r,i,(s,o)=>_2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends qu{constructor(e,r,i,s=[]){super(),this.key=e,this.value=r,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends qu{constructor(e,r,i,s,o=[]){super(),this.key=e,this.data=r,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function l_(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const i=t.data.field(r);e.set(r,i)}}),e}function Ty(t,e,r){const i=new Map;ie(t.length===r.length);for(let s=0;s<r.length;s++){const o=t[s],a=o.transform,l=e.data.field(o.field);i.set(o.field,E2(a,l,r[s]))}return i}function Cy(t,e,r){const i=new Map;for(const s of t){const o=s.transform,a=r.data.field(s.field);i.set(s.field,w2(o,a,e))}return i}class u_ extends qu{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class T2 extends qu{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,r,i,s){this.batchId=e,this.localWriteTime=r,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,r){const i=r.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&I2(o,e,i[s])}}applyToLocalView(e,r){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(r=Qs(i,e,r,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(r=Qs(i,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const i=ZE();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=r.has(s.key)?null:l;const u=a_(a,l);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(j.min())}),i}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),G())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(r,i)=>Ay(r,i))&&$i(this.baseMutations,e.baseMutations,(r,i)=>Ay(r,i))}}class Dp{constructor(e,r,i,s){this.batch=e,this.commitVersion=r,this.mutationResults=i,this.docVersions=s}static from(e,r,i){ie(e.mutations.length===i.length);let s=p2;const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,i[a].version);return new Dp(e,r,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,r){this.count=e,this.unchangedNames=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,q;function N2(t){switch(t){default:return F();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function c_(t){if(t===void 0)return _n("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ee.OK:return S.OK;case Ee.CANCELLED:return S.CANCELLED;case Ee.UNKNOWN:return S.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return S.INTERNAL;case Ee.UNAVAILABLE:return S.UNAVAILABLE;case Ee.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ee.NOT_FOUND:return S.NOT_FOUND;case Ee.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ee.ABORTED:return S.ABORTED;case Ee.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ee.DATA_LOSS:return S.DATA_LOSS;default:return F()}}(q=Ee||(Ee={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ua}static getOrCreateInstance(){return Ua===null&&(Ua=new Pp),Ua}onExistenceFilterMismatch(e){const r=Symbol();return this.onExistenceFilterMismatchCallbacks.set(r,e),()=>this.onExistenceFilterMismatchCallbacks.delete(r)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(r=>r(e))}}let Ua=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=new Ci([4294967295,4294967295],0);function ky(t){const e=x2().encode(t),r=new Mx;return r.update(e),new Uint8Array(r.digest())}function Ry(t){const e=new DataView(t.buffer),r=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ci([r,i],0),new Ci([s,o],0)]}class Op{constructor(e,r,i){if(this.bitmap=e,this.padding=r,this.hashCount=i,r<0||r>=8)throw new Ds(`Invalid padding: ${r}`);if(i<0)throw new Ds(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${i}`);if(e.length===0&&r!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${r}`);this.It=8*e.length-r,this.Tt=Ci.fromNumber(this.It)}Et(e,r,i){let s=e.add(r.multiply(Ci.fromNumber(i)));return s.compare(D2)===1&&(s=new Ci([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const r=ky(e),[i,s]=Ry(r);for(let o=0;o<this.hashCount;o++){const a=this.Et(i,s,o);if(!this.At(a))return!1}return!0}static create(e,r,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Op(o,s,r);return i.forEach(l=>a.insert(l)),a}insert(e){if(this.It===0)return;const r=ky(e),[i,s]=Ry(r);for(let o=0;o<this.hashCount;o++){const a=this.Et(i,s,o);this.Rt(a)}}Rt(e){const r=Math.floor(e/8),i=e%8;this.bitmap[r]|=1<<i}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,r,i,s,o){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,r,i){const s=new Map;return s.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,r,i)),new Ku(j.min(),s,new de(X),In(),G())}}class na{constructor(e,r,i,s,o){this.resumeToken=e,this.current=r,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,r,i){return new na(i,r,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,r,i,s){this.Pt=e,this.removedTargetIds=r,this.key=i,this.bt=s}}class h_{constructor(e,r){this.targetId=e,this.Vt=r}}class d_{constructor(e,r,i=Je.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=r,this.resumeToken=i,this.cause=s}}class Ny{constructor(){this.St=0,this.Dt=Dy(),this.Ct=Je.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=G(),r=G(),i=G();return this.Dt.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:r=r.add(s);break;case 1:i=i.add(s);break;default:F()}}),new na(this.Ct,this.xt,e,r,i)}Ft(){this.Nt=!1,this.Dt=Dy()}Bt(e,r){this.Nt=!0,this.Dt=this.Dt.insert(e,r)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class P2{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=In(),this.zt=xy(),this.Wt=new de(X)}Ht(e){for(const r of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(r,e.bt):this.Yt(r,e.key,e.bt);for(const r of e.removedTargetIds)this.Yt(r,e.key,e.bt)}Xt(e){this.forEachTarget(e,r=>{const i=this.Zt(r);switch(e.state){case 0:this.te(r)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(r);break;case 3:this.te(r)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(r)&&(this.ee(r),i.$t(e.resumeToken));break;default:F()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.Qt.forEach((i,s)=>{this.te(s)&&r(s)})}ne(e){var r;const i=e.targetId,s=e.Vt.count,o=this.se(i);if(o){const a=o.target;if(kd(a))if(s===0){const l=new U(a.path);this.Yt(i,l,He.newNoDocument(l,j.min()))}else ie(s===1);else{const l=this.ie(i);if(l!==s){const u=this.re(e,l);if(u!==0){this.ee(i);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,c)}(r=Pp.instance)===null||r===void 0||r.notifyOnExistenceFilterMismatch(function(c,h,d){var f,y,v,w,_,m;const p={localCacheCount:h,existenceFilterCount:d.count},g=d.unchangedNames;return g&&(p.bloomFilter={applied:c===0,hashCount:(f=g==null?void 0:g.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(w=(v=(y=g==null?void 0:g.bits)===null||y===void 0?void 0:y.bitmap)===null||v===void 0?void 0:v.length)!==null&&w!==void 0?w:0,padding:(m=(_=g==null?void 0:g.bits)===null||_===void 0?void 0:_.padding)!==null&&m!==void 0?m:0}),p}(u,l,e.Vt))}}}}re(e,r){const{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:o="",padding:a=0},hashCount:l=0}=i;let u,c;try{u=$r(o).toUint8Array()}catch(h){if(h instanceof $E)return Fi("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new Op(u,a,l)}catch(h){return Fi(h instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.It===0?1:s!==r-this.oe(e.targetId,c)?2:0}oe(e,r){const i=this.Gt.getRemoteKeysForTarget(e);let s=0;return i.forEach(o=>{const a=this.Gt.ue(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;r.vt(l)||(this.Yt(e,o,null),s++)}),s}ce(e){const r=new Map;this.Qt.forEach((o,a)=>{const l=this.se(a);if(l){if(o.current&&kd(l.target)){const u=new U(l.target.path);this.jt.get(u)!==null||this.ae(a,u)||this.Yt(a,u,He.newNoDocument(u,e))}o.Mt&&(r.set(a,o.Ot()),o.Ft())}});let i=G();this.zt.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(o))}),this.jt.forEach((o,a)=>a.setReadTime(e));const s=new Ku(e,r,this.Wt,this.jt,i);return this.jt=In(),this.zt=xy(),this.Wt=new de(X),s}Jt(e,r){if(!this.te(e))return;const i=this.ae(e,r.key)?2:0;this.Zt(e).Bt(r.key,i),this.jt=this.jt.insert(r.key,r),this.zt=this.zt.insert(r.key,this.he(r.key).add(e))}Yt(e,r,i){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,r)?s.Bt(r,1):s.Lt(r),this.zt=this.zt.insert(r,this.he(r).delete(e)),i&&(this.jt=this.jt.insert(r,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const r=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let r=this.Qt.get(e);return r||(r=new Ny,this.Qt.set(e,r)),r}he(e){let r=this.zt.get(e);return r||(r=new Ke(X),this.zt=this.zt.insert(e,r)),r}te(e){const r=this.se(e)!==null;return r||M("WatchChangeAggregator","Detected inactive target",e),r}se(e){const r=this.Qt.get(e);return r&&r.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ny),this.Gt.getRemoteKeysForTarget(e).forEach(r=>{this.Yt(e,r,null)})}ae(e,r){return this.Gt.getRemoteKeysForTarget(e).has(r)}}function xy(){return new de(U.comparator)}function Dy(){return new de(U.comparator)}const O2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),L2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),M2=(()=>({and:"AND",or:"OR"}))();class U2{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function Dd(t,e){return t.useProto3Json||Vu(e)?e:{value:e}}function Jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function f_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b2(t,e){return Jl(t,e.toTimestamp())}function en(t){return ie(!!t),j.fromTimestamp(function(e){const r=nr(e);return new ve(r.seconds,r.nanos)}(t))}function Lp(t,e){return function(r){return new ne(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function p_(t){const e=ne.fromString(t);return ie(v_(e)),e}function Pd(t,e){return Lp(t.databaseId,e.path)}function ih(t,e){const r=p_(e);if(r.get(1)!==t.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new U(m_(r))}function Od(t,e){return Lp(t.databaseId,e)}function F2(t){const e=p_(t);return e.length===4?ne.emptyPath():m_(e)}function Ld(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m_(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Py(t,e,r){return{name:Pd(t,e),fields:r.value.mapValue.fields}}function $2(t,e){let r;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(u,c){return u.useProto3Json?(ie(c===void 0||typeof c=="string"),Je.fromBase64String(c||"")):(ie(c===void 0||c instanceof Uint8Array),Je.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const c=u.code===void 0?S.UNKNOWN:c_(u.code);return new D(c,u.message||"")}(a);r=new d_(i,s,o,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=ih(t,i.document.name),o=en(i.document.updateTime),a=i.document.createTime?en(i.document.createTime):j.min(),l=new at({mapValue:{fields:i.document.fields}}),u=He.newFoundDocument(s,o,a,l),c=i.targetIds||[],h=i.removedTargetIds||[];r=new rl(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=ih(t,i.document),o=i.readTime?en(i.readTime):j.min(),a=He.newNoDocument(s,o),l=i.removedTargetIds||[];r=new rl([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=ih(t,i.document),o=i.removedTargetIds||[];r=new rl([],o,s,null)}else{if(!("filter"in e))return F();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,a=new R2(s,o),l=i.targetId;r=new h_(l,a)}}return r}function j2(t,e){let r;if(e instanceof ta)r={update:Py(t,e.key,e.value)};else if(e instanceof u_)r={delete:Pd(t,e.key)};else if(e instanceof ur)r={update:Py(t,e.key,e.data),updateMask:Q2(e.fieldMask)};else{if(!(e instanceof T2))return F();r={verify:Pd(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof Co)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xl)return{fieldPath:o.field.canonicalString(),increment:a.gt};throw F()}(0,i))),e.precondition.isNone||(r.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:b2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(t,e.precondition)),r}function B2(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(r=>function(i,s){let o=i.updateTime?en(i.updateTime):en(s);return o.isEqual(j.min())&&(o=en(s)),new S2(o,i.transformResults||[])}(r,e))):[]}function V2(t,e){return{documents:[Od(t,e.path)]}}function z2(t,e){const r={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(r.parent=Od(t,i),r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r.parent=Od(t,i.popLast()),r.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(u){if(u.length!==0)return y_(Bt.create(u,"and"))}(e.filters);s&&(r.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:ei(h.field),direction:W2(h.dir)}}(c))}(e.orderBy);o&&(r.structuredQuery.orderBy=o);const a=Dd(t,e.limit);var l;return a!==null&&(r.structuredQuery.limit=a),e.startAt&&(r.structuredQuery.startAt={before:(l=e.startAt).inclusive,values:l.position}),e.endAt&&(r.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),r}function H2(t){let e=F2(t.parent);const r=t.structuredQuery,i=r.from?r.from.length:0;let s=null;if(i>0){ie(i===1);const h=r.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let o=[];r.where&&(o=function(h){const d=g_(h);return d instanceof Bt&&zE(d)?d.getFilters():[d]}(r.where));let a=[];r.orderBy&&(a=r.orderBy.map(h=>function(d){return new qs(ti(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let l=null;r.limit&&(l=function(h){let d;return d=typeof h=="object"?h.value:h,Vu(d)?null:d}(r.limit));let u=null;r.startAt&&(u=function(h){const d=!!h.before,f=h.values||[];return new Yl(f,d)}(r.startAt));let c=null;return r.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Yl(f,d)}(r.endAt)),c2(e,s,a,o,l,"F",u,c)}function G2(t,e){const r=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function g_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ti(e.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ti(e.unaryFilter.field);return Ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ti(e.unaryFilter.field);return Ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ti(e.unaryFilter.field);return Ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return Ie.create(ti(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Bt.create(e.compositeFilter.filters.map(r=>g_(r)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function W2(t){return O2[t]}function q2(t){return L2[t]}function K2(t){return M2[t]}function ei(t){return{fieldPath:t.canonicalString()}}function ti(t){return Ge.fromServerFormat(t.fieldPath)}function y_(t){return t instanceof Ie?function(e){if(e.op==="=="){if(vy(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NAN"}};if(yy(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vy(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NOT_NAN"}};if(yy(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(e.field),op:q2(e.op),value:e.value}}}(t):t instanceof Bt?function(e){const r=e.getFilters().map(i=>y_(i));return r.length===1?r[0]:{compositeFilter:{op:K2(e.op),filters:r}}}(t):F()}function Q2(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function v_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,r,i,s,o=j.min(),a=j.min(),l=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=r,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.fe=e}}function X2(t){const e=H2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.rn=new Z2}addToCollectionParentIndex(e,r){return this.rn.add(r),C.resolve()}getCollectionParents(e,r){return C.resolve(this.rn.getEntries(r))}addFieldIndex(e,r){return C.resolve()}deleteFieldIndex(e,r){return C.resolve()}getDocumentsMatchingTarget(e,r){return C.resolve(null)}getIndexType(e,r){return C.resolve(0)}getFieldIndexes(e,r){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,r){return C.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,r){return C.resolve(tr.min())}updateCollectionGroup(e,r,i){return C.resolve()}updateIndexEntries(e,r){return C.resolve()}}class Z2{constructor(){this.index={}}add(e){const r=e.lastSegment(),i=e.popLast(),s=this.index[r]||new Ke(ne.comparator),o=!s.has(i);return this.index[r]=s.add(i),o}has(e){const r=e.lastSegment(),i=e.popLast(),s=this.index[r];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ke(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new zi(0)}static Mn(){return new zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.changes=new ns(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const i=this.changes.get(r);return i!==void 0?C.resolve(i):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,r,i,s){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,r){let i=null;return this.documentOverlayCache.getOverlay(e,r).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,r))).next(s=>(i!==null&&Qs(i.mutation,s,gt.empty(),ve.now()),s))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(i=>this.getLocalViewOfDocuments(e,i,G()).next(()=>i))}getLocalViewOfDocuments(e,r,i=G()){const s=Sr();return this.populateOverlays(e,s,r).next(()=>this.computeViews(e,r,s,i).next(o=>{let a=xs();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,r){const i=Sr();return this.populateOverlays(e,i,r).next(()=>this.computeViews(e,r,i,G()))}populateOverlays(e,r,i){const s=[];return i.forEach(o=>{r.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,l)=>{r.set(a,l)})})}computeViews(e,r,i,s){let o=In();const a=Ks(),l=Ks();return r.forEach((u,c)=>{const h=i.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof ur)?o=o.insert(c.key,c):h!==void 0?(a.set(c.key,h.mutation.getFieldMask()),Qs(h.mutation,c,h.mutation.getFieldMask(),ve.now())):a.set(c.key,gt.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((c,h)=>a.set(c,h)),r.forEach((c,h)=>{var d;return l.set(c,new tD(h,(d=a.get(c))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,r){const i=Ks();let s=new de((a,l)=>a-l),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(a=>{for(const l of a)l.keys().forEach(u=>{const c=r.get(u);if(c===null)return;let h=i.get(u)||gt.empty();h=l.applyToLocalView(c,h),i.set(u,h);const d=(s.get(l.batchId)||G()).add(u);s=s.insert(l.batchId,d)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,d=ZE();h.forEach(f=>{if(!o.has(f)){const y=a_(r.get(f),i.get(f));y!==null&&d.set(f,y),o=o.add(f)}}),a.push(this.documentOverlayCache.saveOverlays(e,c,d))}return C.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,r,i){return function(s){return U.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):KE(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,i):this.getDocumentsMatchingCollectionQuery(e,r,i)}getNextDocuments(e,r,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,i,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,i.largestBatchId,s-o.size):C.resolve(Sr());let l=-1,u=o;return a.next(c=>C.forEach(c,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),o.get(h)?C.resolve():this.remoteDocumentCache.getEntry(e,h).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,u,c,G())).next(h=>({batchId:l,changes:JE(h)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new U(r)).next(i=>{let s=xs();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,r,i){const s=r.collectionGroup;let o=xs();return this.indexManager.getCollectionParents(e,s).next(a=>C.forEach(a,l=>{const u=function(c,h){return new ea(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(r,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,i,s))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,He.newInvalidDocument(c)))});let a=xs();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Qs(c.mutation,u,gt.empty(),ve.now()),Gu(r,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,r){return C.resolve(this.cs.get(r))}saveBundleMetadata(e,r){var i;return this.cs.set(r.id,{id:(i=r).id,version:i.version,createTime:en(i.createTime)}),C.resolve()}getNamedQuery(e,r){return C.resolve(this.hs.get(r))}saveNamedQuery(e,r){return this.hs.set(r.name,function(i){return{name:i.name,query:X2(i.bundledQuery),readTime:en(i.readTime)}}(r)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.overlays=new de(U.comparator),this.ls=new Map}getOverlay(e,r){return C.resolve(this.overlays.get(r))}getOverlays(e,r){const i=Sr();return C.forEach(r,s=>this.getOverlay(e,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(e,r,i){return i.forEach((s,o)=>{this.we(e,r,o)}),C.resolve()}removeOverlaysForBatchId(e,r,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.ls.delete(i)),C.resolve()}getOverlaysForCollection(e,r,i){const s=Sr(),o=r.length+1,a=new U(r.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!r.isPrefixOf(c.path))break;c.path.length===o&&u.largestBatchId>i&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,r,i,s){let o=new de((c,h)=>c-h);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===r&&c.largestBatchId>i){let h=o.get(c.largestBatchId);h===null&&(h=Sr(),o=o.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=Sr(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=s)););return C.resolve(l)}we(e,r,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new k2(r,i));let o=this.ls.get(r);o===void 0&&(o=G(),this.ls.set(r,o)),this.ls.set(r,o.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.fs=new Ke(ke.ds),this.ws=new Ke(ke._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,r){const i=new ke(e,r);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,r){e.forEach(i=>this.addReference(i,r))}removeReference(e,r){this.ys(new ke(e,r))}ps(e,r){e.forEach(i=>this.removeReference(i,r))}Is(e){const r=new U(new ne([])),i=new ke(r,e),s=new ke(r,e+1),o=[];return this.ws.forEachInRange([i,s],a=>{this.ys(a),o.push(a.key)}),o}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const r=new U(new ne([])),i=new ke(r,e),s=new ke(r,e+1);let o=G();return this.ws.forEachInRange([i,s],a=>{o=o.add(a.key)}),o}containsKey(e){const r=new ke(e,0),i=this.fs.firstAfterOrEqual(r);return i!==null&&e.isEqual(i.key)}}class ke{constructor(e,r){this.key=e,this.As=r}static ds(e,r){return U.comparator(e.key,r.key)||X(e.As,r.As)}static _s(e,r){return X(e.As,r.As)||U.comparator(e.key,r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.vs=1,this.Rs=new Ke(ke.ds)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,i,s){const o=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new C2(o,r,i,s);this.mutationQueue.push(a);for(const l of s)this.Rs=this.Rs.add(new ke(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,r){return C.resolve(this.Ps(r))}getNextMutationBatchAfterBatchId(e,r){const i=r+1,s=this.bs(i),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const i=new ke(r,0),s=new ke(r,Number.POSITIVE_INFINITY),o=[];return this.Rs.forEachInRange([i,s],a=>{const l=this.Ps(a.As);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,r){let i=new Ke(X);return r.forEach(s=>{const o=new ke(s,0),a=new ke(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([o,a],l=>{i=i.add(l.As)})}),C.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,r){const i=r.path,s=i.length+1;let o=i;U.isDocumentKey(o)||(o=o.child(""));const a=new ke(new U(o),0);let l=new Ke(X);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.As)),!0)},a),C.resolve(this.Vs(l))}Vs(e){const r=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&r.push(s)}),r}removeMutationBatch(e,r){ie(this.Ss(r.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return C.forEach(r.mutations,s=>{const o=new ke(s.key,r.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,r){const i=new ke(r,0),s=this.Rs.firstAfterOrEqual(i);return C.resolve(r.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ss(e,r){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const r=this.bs(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.Ds=e,this.docs=new de(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const i=r.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ds(r);return this.docs=this.docs.insert(i,{document:r.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const i=this.docs.get(r);return C.resolve(i?i.document.mutableCopy():He.newInvalidDocument(r))}getEntries(e,r){let i=In();return r.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():He.newInvalidDocument(s))}),C.resolve(i)}getDocumentsMatchingQuery(e,r,i,s){let o=In();const a=r.path,l=new U(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||qx(Wx(h),i)<=0||(s.has(h.key)||Gu(r,h))&&(o=o.insert(h.key,h.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,r,i,s){F()}Cs(e,r){return C.forEach(this.docs,i=>r(i))}newChangeBuffer(e){return new aD(this)}getSize(e){return C.resolve(this.size)}}class aD extends eD{constructor(e){super(),this.os=e}applyChanges(e){const r=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?r.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),C.waitFor(r)}getFromCache(e,r){return this.os.getEntry(e,r)}getAllFromCache(e,r){return this.os.getEntries(e,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.persistence=e,this.xs=new ns(r=>Rp(r),Np),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Mp,this.targetCount=0,this.Ms=zi.kn()}forEachTarget(e,r){return this.xs.forEach((i,s)=>r(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,r,i){return i&&(this.lastRemoteSnapshotVersion=i),r>this.Ns&&(this.Ns=r),C.resolve()}Fn(e){this.xs.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.Ms=new zi(r),this.highestTargetId=r),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,r){return this.Fn(r),this.targetCount+=1,C.resolve()}updateTargetData(e,r){return this.Fn(r),C.resolve()}removeTargetData(e,r){return this.xs.delete(r.target),this.ks.Is(r.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,r,i){let s=0;const o=[];return this.xs.forEach((a,l)=>{l.sequenceNumber<=r&&i.get(l.targetId)===null&&(this.xs.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,r){const i=this.xs.get(r)||null;return C.resolve(i)}addMatchingKeys(e,r,i){return this.ks.gs(r,i),C.resolve()}removeMatchingKeys(e,r,i){this.ks.ps(r,i);const s=this.persistence.referenceDelegate,o=[];return s&&r.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(e,r){return this.ks.Is(r),C.resolve()}getMatchingKeysForTargetId(e,r){const i=this.ks.Es(r);return C.resolve(i)}containsKey(e,r){return C.resolve(this.ks.containsKey(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,r){this.$s={},this.overlays={},this.Os=new Ap(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new lD(this),this.indexManager=new J2,this.remoteDocumentCache=function(i){return new oD(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new Y2(r),this.qs=new rD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new iD,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let i=this.$s[e.toKey()];return i||(i=new sD(r,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,r,i){M("MemoryPersistence","Starting transaction:",e);const s=new cD(this.Os.next());return this.referenceDelegate.Us(),i(s).next(o=>this.referenceDelegate.Ks(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gs(e,r){return C.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,r)))}}class cD extends Qx{constructor(e){super(),this.currentSequenceNumber=e}}class Up{constructor(e){this.persistence=e,this.Qs=new Mp,this.js=null}static zs(e){return new Up(e)}get Ws(){if(this.js)return this.js;throw F()}addReference(e,r,i){return this.Qs.addReference(i,r),this.Ws.delete(i.toString()),C.resolve()}removeReference(e,r,i){return this.Qs.removeReference(i,r),this.Ws.add(i.toString()),C.resolve()}markPotentiallyOrphaned(e,r){return this.Ws.add(r.toString()),C.resolve()}removeTarget(e,r){this.Qs.Is(r.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,r.targetId).next(s=>{s.forEach(o=>this.Ws.add(o.toString()))}).next(()=>i.removeTargetData(e,r))}Us(){this.js=new Set}Ks(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ws,i=>{const s=U.fromPath(i);return this.Hs(e,s).next(o=>{o||r.removeEntry(s,j.min())})}).next(()=>(this.js=null,r.apply(e)))}updateLimboDocument(e,r){return this.Hs(e,r).next(i=>{i?this.Ws.delete(r.toString()):this.Ws.add(r.toString())})}Ls(e){return 0}Hs(e,r){return C.or([()=>C.resolve(this.Qs.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Gs(e,r)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,r,i,s){this.targetId=e,this.fromCache=r,this.Fi=i,this.Bi=s}static Li(e,r){let i=G(),s=G();for(const o of r.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new bp(e,r.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(){this.qi=!1}initialize(e,r){this.Ui=e,this.indexManager=r,this.qi=!0}getDocumentsMatchingQuery(e,r,i,s){return this.Ki(e,r).next(o=>o||this.Gi(e,r,s,i)).next(o=>o||this.Qi(e,r))}Ki(e,r){if(Sy(r))return C.resolve(null);let i=Sn(r);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(r.limit!==null&&s===1&&(r=Nd(r,null,"F"),i=Sn(r)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const a=G(...o);return this.Ui.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,i).next(u=>{const c=this.ji(r,l);return this.zi(r,c,a,u.readTime)?this.Ki(e,Nd(r,null,"F")):this.Wi(e,c,r,u)}))})))}Gi(e,r,i,s){return Sy(r)||s.isEqual(j.min())?this.Qi(e,r):this.Ui.getDocuments(e,i).next(o=>{const a=this.ji(r,o);return this.zi(r,a,i,s)?this.Qi(e,r):(dy()<=Y.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xd(r)),this.Wi(e,a,r,Gx(s,-1)))})}ji(e,r){let i=new Ke(YE(e));return r.forEach((s,o)=>{Gu(e,o)&&(i=i.add(o))}),i}zi(e,r,i,s){if(e.limit===null)return!1;if(i.size!==r.size)return!0;const o=e.limitType==="F"?r.last():r.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Qi(e,r){return dy()<=Y.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",xd(r)),this.Ui.getDocumentsMatchingQuery(e,r,tr.min())}Wi(e,r,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(o=>(r.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,r,i,s){this.persistence=e,this.Hi=r,this.serializer=s,this.Ji=new de(X),this.Yi=new ns(o=>Rp(o),Np),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nD(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.Ji))}}function fD(t,e,r,i){return new dD(t,e,r,i)}async function w_(t,e){const r=B(t);return await r.persistence.runTransaction("Handle user change","readonly",i=>{let s;return r.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,r.tr(e),r.mutationQueue.getAllMutationBatches(i))).next(o=>{const a=[],l=[];let u=G();for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of o){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return r.localDocuments.getDocuments(i,u).next(c=>({er:c,removedBatchIds:a,addedBatchIds:l}))})})}function pD(t,e){const r=B(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),o=r.Zi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=C.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(v=>{const w=u.docVersions.get(y);ie(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(r,i,e,o).next(()=>o.apply(i)).next(()=>r.mutationQueue.performConsistencyCheck(i)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=G();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>r.localDocuments.getDocuments(i,s))})}function E_(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.Bs.getLastRemoteSnapshotVersion(r))}function mD(t,e){const r=B(t),i=e.snapshotVersion;let s=r.Ji;return r.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=r.Zi.newChangeBuffer({trackRemovals:!0});s=r.Ji;const l=[];e.targetChanges.forEach((h,d)=>{const f=s.get(d);if(!f)return;l.push(r.Bs.removeMatchingKeys(o,h.removedDocuments,d).next(()=>r.Bs.addMatchingKeys(o,h.addedDocuments,d)));let y=f.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(Je.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,i)),s=s.insert(d,y),function(v,w,_){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,y,h)&&l.push(r.Bs.updateTargetData(o,y))});let u=In(),c=G();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(r.persistence.referenceDelegate.updateLimboDocument(o,h))}),l.push(gD(o,a,e.documentUpdates).next(h=>{u=h.nr,c=h.sr})),!i.isEqual(j.min())){const h=r.Bs.getLastRemoteSnapshotVersion(o).next(d=>r.Bs.setTargetsMetadata(o,o.currentSequenceNumber,i));l.push(h)}return C.waitFor(l).next(()=>a.apply(o)).next(()=>r.localDocuments.getLocalViewOfDocuments(o,u,c)).next(()=>u)}).then(o=>(r.Ji=s,o))}function gD(t,e,r){let i=G(),s=G();return r.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=In();return r.forEach((l,u)=>{const c=o.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):M("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{nr:a,sr:s}})}function yD(t,e){const r=B(t);return r.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function vD(t,e){const r=B(t);return r.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return r.Bs.getTargetData(i,e).next(o=>o?(s=o,C.resolve(s)):r.Bs.allocateTargetId(i).next(a=>(s=new Fn(e,a,"TargetPurposeListen",i.currentSequenceNumber),r.Bs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=r.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(r.Ji=r.Ji.insert(i.targetId,i),r.Yi.set(e,i.targetId)),i})}async function Md(t,e,r){const i=B(t),s=i.Ji.get(e),o=r?"readwrite":"readwrite-primary";try{r||await i.persistence.runTransaction("Release target",o,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Zo(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function Oy(t,e,r){const i=B(t);let s=j.min(),o=G();return i.persistence.runTransaction("Execute query","readonly",a=>function(l,u,c){const h=B(l),d=h.Yi.get(c);return d!==void 0?C.resolve(h.Ji.get(d)):h.Bs.getTargetData(u,c)}(i,a,Sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>i.Hi.getDocumentsMatchingQuery(a,e,r?s:j.min(),r?o:G())).next(l=>(wD(i,h2(e),l),{documents:l,ir:o})))}function wD(t,e,r){let i=t.Xi.get(e)||j.min();r.forEach((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),t.Xi.set(e,i)}class Ly{constructor(){this.activeTargetIds=y2()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ED{constructor(){this.Hr=new Ly,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,r,i){this.Jr[e]=r}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ly,Promise.resolve()}handleUserChange(e,r,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba=null;function sh(){return ba===null?ba=268435456+Math.round(2147483648*Math.random()):ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection";class AD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http";this.mo=r+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,r,i,s,o){const a=sh(),l=this.To(e,r);M("RestConnection",`Sending RPC '${e}' ${a}:`,l,i);const u={};return this.Eo(u,s,o),this.Ao(e,l,u,i).then(c=>(M("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw Fi("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(e,r,i,s,o,a){return this.Io(e,r,i,s,o)}Eo(e,r,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ts,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}To(e,r){const i=SD[e];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,r,i,s){const o=sh();return new Promise((a,l)=>{const u=new Lx;u.setWithCredentials(!0),u.listenOnce(Dx.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case rh.NO_ERROR:const h=u.getResponseJson();M(Be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case rh.TIMEOUT:M(Be,`RPC '${e}' ${o} timed out`),l(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case rh.HTTP_ERROR:const d=u.getStatus();if(M(Be,`RPC '${e}' ${o} failed with status:`,d,"response text:",u.getResponseText()),d>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const y=f==null?void 0:f.error;if(y&&y.status&&y.message){const v=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(_)>=0?_:S.UNKNOWN}(y.status);l(new D(v,y.message))}else l(new D(S.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new D(S.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{M(Be,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(s);M(Be,`RPC '${e}' ${o} sending request:`,s),u.send(r,"POST",c,i,15)})}Ro(e,r,i){const s=sh(),o=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Nx(),l=xx(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Ox({})),this.Eo(u.initMessageHeaders,r,i),u.encodeInitMessageHeaders=!0;const h=o.join("");M(Be,`Creating RPC '${e}' stream ${s}: ${h}`,u);const d=a.createWebChannel(h,u);let f=!1,y=!1;const v=new ID({ro:_=>{y?M(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(f||(M(Be,`Opening RPC '${e}' stream ${s} transport.`),d.open(),f=!0),M(Be,`RPC '${e}' stream ${s} sending:`,_),d.send(_))},oo:()=>d.close()}),w=(_,m,p)=>{_.listen(m,g=>{try{p(g)}catch(E){setTimeout(()=>{throw E},0)}})};return w(d,Oa.EventType.OPEN,()=>{y||M(Be,`RPC '${e}' stream ${s} transport opened.`)}),w(d,Oa.EventType.CLOSE,()=>{y||(y=!0,M(Be,`RPC '${e}' stream ${s} transport closed`),v.wo())}),w(d,Oa.EventType.ERROR,_=>{y||(y=!0,Fi(Be,`RPC '${e}' stream ${s} transport errored:`,_),v.wo(new D(S.UNAVAILABLE,"The operation could not be completed")))}),w(d,Oa.EventType.MESSAGE,_=>{var m;if(!y){const p=_.data[0];ie(!!p);const g=p,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){M(Be,`RPC '${e}' stream ${s} received error:`,E);const k=E.status;let R=function(L){const Q=Ee[L];if(Q!==void 0)return c_(Q)}(k),x=E.message;R===void 0&&(R=S.INTERNAL,x="Unknown error status: "+k+" with message "+E.message),y=!0,v.wo(new D(R,x)),d.close()}else M(Be,`RPC '${e}' stream ${s} received:`,p),v._o(p)}}),w(l,Px.STAT_EVENT,_=>{_.stat===cy.PROXY?M(Be,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===cy.NOPROXY&&M(Be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function oh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){return new U2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,r,i=1e3,s=1.5,o=6e4){this.ii=e,this.timerId=r,this.Po=i,this.bo=s,this.Vo=o,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const r=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,r-i);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${r} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,r,i,s,o,a,l,u){this.ii=e,this.$o=i,this.Oo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new __(e,r)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,r){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():r&&r.code===S.RESOURCE_EXHAUSTED?(_n(r.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):r&&r.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(r)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),r=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===r&&this.Zo(i,s)},i=>{e(()=>{const s=new D(S.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,r){const i=this.Xo(this.Fo);this.stream=this.eu(e,r),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return r=>{this.ii.enqueueAndForget(()=>this.Fo===e?r():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TD extends S_{constructor(e,r,i,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,i,s,a),this.serializer=o}eu(e,r){return this.connection.Ro("Listen",e,r)}onMessage(e){this.qo.reset();const r=$2(this.serializer,e),i=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?en(o.readTime):j.min()}(e);return this.listener.nu(r,i)}su(e){const r={};r.database=Ld(this.serializer),r.addTarget=function(s,o){let a;const l=o.target;if(a=kd(l)?{documents:V2(s,l)}:{query:z2(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=f_(s,o.resumeToken);const u=Dd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=Jl(s,o.snapshotVersion.toTimestamp());const u=Dd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const i=G2(this.serializer,e);i&&(r.labels=i),this.Wo(r)}iu(e){const r={};r.database=Ld(this.serializer),r.removeTarget=e,this.Wo(r)}}class CD extends S_{constructor(e,r,i,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,i,s,a),this.serializer=o,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,r){return this.connection.Ro("Write",e,r)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const r=B2(e.writeResults,e.commitTime),i=en(e.commitTime);return this.listener.cu(i,r)}return ie(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ld(this.serializer),this.Wo(e)}uu(e){const r={streamToken:this.lastStreamToken,writes:e.map(i=>j2(this.serializer,i))};this.Wo(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD extends class{}{constructor(e,r,i,s){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Io(e,r,i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(S.UNKNOWN,s.toString())})}vo(e,r,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,r,i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())})}terminate(){this.lu=!0}}class RD{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(_n(r),this.mu=!1):M("OnlineStateTracker",r)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,r,i,s,o){this.localStore=e,this.datastore=r,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=o,this.Pu.Yr(a=>{i.enqueueAndForget(async()=>{Kr(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=B(l);u.vu.add(4),await ra(u),u.bu.set("Unknown"),u.vu.delete(4),await Yu(u)}(this))})}),this.bu=new RD(i,s)}}async function Yu(t){if(Kr(t))for(const e of t.Ru)await e(!0)}async function ra(t){for(const e of t.Ru)await e(!1)}function I_(t,e){const r=B(t);r.Au.has(e.targetId)||(r.Au.set(e.targetId,e),jp(r)?$p(r):rs(r).Ko()&&Fp(r,e))}function A_(t,e){const r=B(t),i=rs(r);r.Au.delete(e),i.Ko()&&T_(r,e),r.Au.size===0&&(i.Ko()?i.jo():Kr(r)&&r.bu.set("Unknown"))}function Fp(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const r=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}rs(t).su(e)}function T_(t,e){t.Vu.qt(e),rs(t).iu(e)}function $p(t){t.Vu=new P2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),rs(t).start(),t.bu.gu()}function jp(t){return Kr(t)&&!rs(t).Uo()&&t.Au.size>0}function Kr(t){return B(t).vu.size===0}function C_(t){t.Vu=void 0}async function xD(t){t.Au.forEach((e,r)=>{Fp(t,e)})}async function DD(t,e){C_(t),jp(t)?(t.bu.Iu(e),$p(t)):t.bu.set("Unknown")}async function PD(t,e,r){if(t.bu.set("Online"),e instanceof d_&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Au.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Au.delete(a),i.Vu.removeTarget(a))}(t,e)}catch(i){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Zl(t,i)}else if(e instanceof rl?t.Vu.Ht(e):e instanceof h_?t.Vu.ne(e):t.Vu.Xt(e),!r.isEqual(j.min()))try{const i=await E_(t.localStore);r.compareTo(i)>=0&&await function(s,o){const a=s.Vu.ce(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.Au.get(u);c&&s.Au.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.Au.get(l);if(!c)return;s.Au.set(l,c.withResumeToken(Je.EMPTY_BYTE_STRING,c.snapshotVersion)),T_(s,l);const h=new Fn(c.target,l,u,c.sequenceNumber);Fp(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,r)}catch(i){M("RemoteStore","Failed to raise snapshot:",i),await Zl(t,i)}}async function Zl(t,e,r){if(!Zo(e))throw e;t.vu.add(1),await ra(t),t.bu.set("Offline"),r||(r=()=>E_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await r(),t.vu.delete(1),await Yu(t)})}function k_(t,e){return e().catch(r=>Zl(t,r,e))}async function Xu(t){const e=B(t),r=rr(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;OD(e);)try{const s=await yD(e.localStore,i);if(s===null){e.Eu.length===0&&r.jo();break}i=s.batchId,LD(e,s)}catch(s){await Zl(e,s)}R_(e)&&N_(e)}function OD(t){return Kr(t)&&t.Eu.length<10}function LD(t,e){t.Eu.push(e);const r=rr(t);r.Ko()&&r.ou&&r.uu(e.mutations)}function R_(t){return Kr(t)&&!rr(t).Uo()&&t.Eu.length>0}function N_(t){rr(t).start()}async function MD(t){rr(t).hu()}async function UD(t){const e=rr(t);for(const r of t.Eu)e.uu(r.mutations)}async function bD(t,e,r){const i=t.Eu.shift(),s=Dp.from(i,e,r);await k_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xu(t)}async function FD(t,e){e&&rr(t).ou&&await async function(r,i){if(s=i.code,N2(s)&&s!==S.ABORTED){const o=r.Eu.shift();rr(r).Qo(),await k_(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Xu(r)}var s}(t,e),R_(t)&&N_(t)}async function Uy(t,e){const r=B(t);r.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const i=Kr(r);r.vu.add(3),await ra(r),i&&r.bu.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.vu.delete(3),await Yu(r)}async function $D(t,e){const r=B(t);e?(r.vu.delete(2),await Yu(r)):e||(r.vu.add(2),await ra(r),r.bu.set("Unknown"))}function rs(t){return t.Su||(t.Su=function(e,r,i){const s=B(e);return s.fu(),new TD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:xD.bind(null,t),ao:DD.bind(null,t),nu:PD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),jp(t)?$p(t):t.bu.set("Unknown")):(await t.Su.stop(),C_(t))})),t.Su}function rr(t){return t.Du||(t.Du=function(e,r,i){const s=B(e);return s.fu(),new CD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:MD.bind(null,t),ao:FD.bind(null,t),au:UD.bind(null,t),cu:bD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Xu(t)):(await t.Du.stop(),t.Eu.length>0&&(M("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,r,i,s,o){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,r,i,s,o){const a=Date.now()+i,l=new Bp(e,r,a,s,o);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vp(t,e){if(_n("AsyncQueue",`${e}: ${t}`),Zo(t))return new D(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.comparator=e?(r,i)=>e(r,i)||U.comparator(r.key,i.key):(r,i)=>U.comparator(r.key,i.key),this.keyedMap=xs(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new Ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,i)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof Ri)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;r.hasNext();){const s=r.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const i=new Ri;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=r,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.Cu=new de(U.comparator)}track(e){const r=e.doc.key,i=this.Cu.get(r);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(r,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(r,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(r,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(r,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(r):e.type===1&&i.type===2?this.Cu=this.Cu.insert(r,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(r,{type:2,doc:e.doc}):F():this.Cu=this.Cu.insert(r,e)}xu(){const e=[];return this.Cu.inorderTraversal((r,i)=>{e.push(i)}),e}}class Hi{constructor(e,r,i,s,o,a,l,u,c){this.query=e,this.docs=r,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,r,i,s,o){const a=[];return r.forEach(l=>{a.push({type:0,doc:l})}),new Hi(e,r,Ri.emptySet(r),a,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,i=e.docChanges;if(r.length!==i.length)return!1;for(let s=0;s<r.length;s++)if(r[s].type!==i[s].type||!r[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.Nu=void 0,this.listeners=[]}}class BD{constructor(){this.queries=new ns(e=>QE(e),Hu),this.onlineState="Unknown",this.ku=new Set}}async function zp(t,e){const r=B(t),i=e.query;let s=!1,o=r.queries.get(i);if(o||(s=!0,o=new jD),s)try{o.Nu=await r.onListen(i)}catch(a){const l=Vp(a,`Initialization of query '${xd(e.query)}' failed`);return void e.onError(l)}r.queries.set(i,o),o.listeners.push(e),e.Mu(r.onlineState),o.Nu&&e.$u(o.Nu)&&Gp(r)}async function Hp(t,e){const r=B(t),i=e.query;let s=!1;const o=r.queries.get(i);if(o){const a=o.listeners.indexOf(e);a>=0&&(o.listeners.splice(a,1),s=o.listeners.length===0)}if(s)return r.queries.delete(i),r.onUnlisten(i)}function VD(t,e){const r=B(t);let i=!1;for(const s of e){const o=s.query,a=r.queries.get(o);if(a){for(const l of a.listeners)l.$u(s)&&(i=!0);a.Nu=s}}i&&Gp(r)}function zD(t,e,r){const i=B(t),s=i.queries.get(e);if(s)for(const o of s.listeners)o.onError(r);i.queries.delete(e)}function Gp(t){t.ku.forEach(e=>{e.next()})}class Wp{constructor(e,r,i){this.query=e,this.Ou=r,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Hi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),r=!0):this.qu(e,this.onlineState)&&(this.Uu(e),r=!0),this.Bu=e,r}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let r=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),r=!0),r}qu(e,r){if(!e.fromCache)return!0;const i=r!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const r=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}Uu(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.key=e}}class D_{constructor(e){this.key=e}}class HD{constructor(e,r){this.query=e,this.Yu=r,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=G(),this.mutatedKeys=G(),this.tc=YE(e),this.ec=new Ri(this.tc)}get nc(){return this.Yu}sc(e,r){const i=r?r.ic:new by,s=r?r.ec:this.ec;let o=r?r.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const f=s.get(h),y=Gu(this.query,d)?d:null,v=!!f&&this.mutatedKeys.has(f.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let _=!1;f&&y?f.data.isEqual(y.data)?v!==w&&(i.track({type:3,doc:y}),_=!0):this.rc(f,y)||(i.track({type:2,doc:y}),_=!0,(u&&this.tc(y,u)>0||c&&this.tc(y,c)<0)&&(l=!0)):!f&&y?(i.track({type:0,doc:y}),_=!0):f&&!y&&(i.track({type:1,doc:f}),_=!0,(u||c)&&(l=!0)),_&&(y?(a=a.add(y),o=w?o.add(h):o.delete(h)):(a=a.delete(h),o=o.delete(h)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const h=this.query.limitType==="F"?a.last():a.first();a=a.delete(h.key),o=o.delete(h.key),i.track({type:1,doc:h})}return{ec:a,ic:i,zi:l,mutatedKeys:o}}rc(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,i){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const o=e.ic.xu();o.sort((c,h)=>function(d,f){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return y(d)-y(f)}(c.type,h.type)||this.tc(c.doc,h.doc)),this.oc(i);const a=r?this.uc():[],l=this.Zu.size===0&&this.current?1:0,u=l!==this.Xu;return this.Xu=l,o.length!==0||u?{snapshot:new Hi(this.query,e.ec,s,o,e.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:a}:{cc:a}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new by,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(r=>this.Yu=this.Yu.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.Yu=this.Yu.delete(r)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=G(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const r=[];return e.forEach(i=>{this.Zu.has(i)||r.push(new D_(i))}),this.Zu.forEach(i=>{e.has(i)||r.push(new x_(i))}),r}hc(e){this.Yu=e.ir,this.Zu=G();const r=this.sc(e.documents);return this.applyChanges(r,!0)}lc(){return Hi.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class GD{constructor(e,r,i){this.query=e,this.targetId=r,this.view=i}}class WD{constructor(e){this.key=e,this.fc=!1}}class qD{constructor(e,r,i,s,o,a){this.localStore=e,this.remoteStore=r,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.dc={},this.wc=new ns(l=>QE(l),Hu),this._c=new Map,this.mc=new Set,this.gc=new de(U.comparator),this.yc=new Map,this.Ic=new Mp,this.Tc={},this.Ec=new Map,this.Ac=zi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function KD(t,e){const r=iP(t);let i,s;const o=r.wc.get(e);if(o)i=o.targetId,r.sharedClientState.addLocalQueryTarget(i),s=o.view.lc();else{const a=await vD(r.localStore,Sn(e)),l=r.sharedClientState.addLocalQueryTarget(a.targetId);i=a.targetId,s=await QD(r,e,i,l==="current",a.resumeToken),r.isPrimaryClient&&I_(r.remoteStore,a)}return s}async function QD(t,e,r,i,s){t.Rc=(d,f,y)=>async function(v,w,_,m){let p=w.view.sc(_);p.zi&&(p=await Oy(v.localStore,w.query,!1).then(({documents:k})=>w.view.sc(k,p)));const g=m&&m.targetChanges.get(w.targetId),E=w.view.applyChanges(p,v.isPrimaryClient,g);return $y(v,w.targetId,E.cc),E.snapshot}(t,d,f,y);const o=await Oy(t.localStore,e,!0),a=new HD(e,o.ir),l=a.sc(o.documents),u=na.createSynthesizedTargetChangeForCurrentChange(r,i&&t.onlineState!=="Offline",s),c=a.applyChanges(l,t.isPrimaryClient,u);$y(t,r,c.cc);const h=new GD(e,r,a);return t.wc.set(e,h),t._c.has(r)?t._c.get(r).push(e):t._c.set(r,[e]),c.snapshot}async function YD(t,e){const r=B(t),i=r.wc.get(e),s=r._c.get(i.targetId);if(s.length>1)return r._c.set(i.targetId,s.filter(o=>!Hu(o,e))),void r.wc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Md(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),A_(r.remoteStore,i.targetId),Ud(r,i.targetId)}).catch(Jo)):(Ud(r,i.targetId),await Md(r.localStore,i.targetId,!0))}async function XD(t,e,r){const i=sP(t);try{const s=await function(o,a){const l=B(o),u=ve.now(),c=a.reduce((f,y)=>f.add(y.key),G());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=In(),v=G();return l.Zi.getEntries(f,c).next(w=>{y=w,y.forEach((_,m)=>{m.isValidDocument()||(v=v.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(w=>{h=w;const _=[];for(const m of a){const p=A2(m,h.get(m.key).overlayedDocument);p!=null&&_.push(new ur(m.key,p,jE(p.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,_,a)}).next(w=>{d=w;const _=w.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,w.batchId,_)})}).then(()=>({batchId:d.batchId,changes:JE(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Tc[o.currentUser.toKey()];u||(u=new de(X)),u=u.insert(a,l),o.Tc[o.currentUser.toKey()]=u}(i,s.batchId,r),await ia(i,s.changes),await Xu(i.remoteStore)}catch(s){const o=Vp(s,"Failed to persist write");r.reject(o)}}async function P_(t,e){const r=B(t);try{const i=await mD(r.localStore,e);e.targetChanges.forEach((s,o)=>{const a=r.yc.get(o);a&&(ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.fc=!0:s.modifiedDocuments.size>0?ie(a.fc):s.removedDocuments.size>0&&(ie(a.fc),a.fc=!1))}),await ia(r,i,e)}catch(i){await Jo(i)}}function Fy(t,e,r){const i=B(t);if(i.isPrimaryClient&&r===0||!i.isPrimaryClient&&r===1){const s=[];i.wc.forEach((o,a)=>{const l=a.view.Mu(e);l.snapshot&&s.push(l.snapshot)}),function(o,a){const l=B(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.Mu(a)&&(u=!0)}),u&&Gp(l)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function JD(t,e,r){const i=B(t);i.sharedClientState.updateQueryState(e,"rejected",r);const s=i.yc.get(e),o=s&&s.key;if(o){let a=new de(U.comparator);a=a.insert(o,He.newNoDocument(o,j.min()));const l=G().add(o),u=new Ku(j.min(),new Map,new de(X),a,l);await P_(i,u),i.gc=i.gc.remove(o),i.yc.delete(e),qp(i)}else await Md(i.localStore,e,!1).then(()=>Ud(i,e,r)).catch(Jo)}async function ZD(t,e){const r=B(t),i=e.batch.batchId;try{const s=await pD(r.localStore,e);L_(r,i,null),O_(r,i),r.sharedClientState.updateMutationState(i,"acknowledged"),await ia(r,s)}catch(s){await Jo(s)}}async function eP(t,e,r){const i=B(t);try{const s=await function(o,a){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ie(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(i.localStore,e);L_(i,e,r),O_(i,e),i.sharedClientState.updateMutationState(e,"rejected",r),await ia(i,s)}catch(s){await Jo(s)}}function O_(t,e){(t.Ec.get(e)||[]).forEach(r=>{r.resolve()}),t.Ec.delete(e)}function L_(t,e,r){const i=B(t);let s=i.Tc[i.currentUser.toKey()];if(s){const o=s.get(e);o&&(r?o.reject(r):o.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}function Ud(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t._c.get(e))t.wc.delete(i),r&&t.dc.Pc(i,r);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(i=>{t.Ic.containsKey(i)||M_(t,i)})}function M_(t,e){t.mc.delete(e.path.canonicalString());const r=t.gc.get(e);r!==null&&(A_(t.remoteStore,r),t.gc=t.gc.remove(e),t.yc.delete(r),qp(t))}function $y(t,e,r){for(const i of r)i instanceof x_?(t.Ic.addReference(i.key,e),tP(t,i)):i instanceof D_?(M("SyncEngine","Document no longer in limbo: "+i.key),t.Ic.removeReference(i.key,e),t.Ic.containsKey(i.key)||M_(t,i.key)):F()}function tP(t,e){const r=e.key,i=r.path.canonicalString();t.gc.get(r)||t.mc.has(i)||(M("SyncEngine","New document in limbo: "+r),t.mc.add(i),qp(t))}function qp(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const r=new U(ne.fromString(e)),i=t.Ac.next();t.yc.set(i,new WD(r)),t.gc=t.gc.insert(r,i),I_(t.remoteStore,new Fn(Sn(zu(r.path)),i,"TargetPurposeLimboResolution",Ap.ct))}}async function ia(t,e,r){const i=B(t),s=[],o=[],a=[];i.wc.isEmpty()||(i.wc.forEach((l,u)=>{a.push(i.Rc(u,e,r).then(c=>{if((c||r)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const h=bp.Li(u.targetId,c);o.push(h)}}))}),await Promise.all(a),i.dc.nu(s),await async function(l,u){const c=B(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(u,d=>C.forEach(d.Fi,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>C.forEach(d.Bi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Zo(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.Ji.get(d),y=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(y);c.Ji=c.Ji.insert(d,v)}}}(i.localStore,o))}async function nP(t,e){const r=B(t);if(!r.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const i=await w_(r.localStore,e);r.currentUser=e,function(s,o){s.Ec.forEach(a=>{a.forEach(l=>{l.reject(new D(S.CANCELLED,o))})}),s.Ec.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ia(r,i.er)}}function rP(t,e){const r=B(t),i=r.yc.get(e);if(i&&i.fc)return G().add(i.key);{let s=G();const o=r._c.get(e);if(!o)return s;for(const a of o){const l=r.wc.get(a);s=s.unionWith(l.view.nc)}return s}}function iP(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=P_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JD.bind(null,e),e.dc.nu=VD.bind(null,e.eventManager),e.dc.Pc=zD.bind(null,e.eventManager),e}function sP(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eP.bind(null,e),e}class jy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,r){return null}createIndexBackfillerScheduler(e,r){return null}createLocalStore(e){return fD(this.persistence,new hD,e.initialUser,this.serializer)}createPersistence(e){return new uD(Up.zs,this.serializer)}createSharedClientState(e){return new ED}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oP{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Fy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=nP.bind(null,this.syncEngine),await $D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BD}createDatastore(e){const r=Qu(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new AD(s));var s;return function(o,a,l,u){return new kD(o,a,l,u)}(e.authCredentials,e.appCheckCredentials,i,r)}createRemoteStore(e){return r=this.localStore,i=this.datastore,s=e.asyncQueue,o=l=>Fy(this.syncEngine,l,0),a=My.D()?new My:new _D,new ND(r,i,s,o,a);var r,i,s,o,a}createSyncEngine(e,r){return function(i,s,o,a,l,u,c){const h=new qD(i,s,o,a,l,u);return c&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}terminate(){return async function(e){const r=B(e);M("RemoteStore","RemoteStore shutting down."),r.vu.add(5),await ra(r),r.Pu.shutdown(),r.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,r){this.muted||setTimeout(()=>{this.muted||e(r)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,r,i,s){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=bE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{M("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(M("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const i=Vp(r,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function ah(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const r=await t.getConfiguration();await e.initialize(r);let i=r.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await w_(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function By(t,e){t.asyncQueue.verifyOperationInProgress();const r=await uP(t);M("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(r,i),t.setCredentialChangeListener(s=>Uy(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,o)=>Uy(e.remoteStore,o)),t._onlineComponents=e}function lP(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function uP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!lP(r))throw r;Fi("Error using user provided cache. Falling back to memory cache: "+r),await ah(t,new jy)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await ah(t,new jy);return t._offlineComponents}async function U_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await By(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await By(t,new oP))),t._onlineComponents}function cP(t){return U_(t).then(e=>e.syncEngine)}async function eu(t){const e=await U_(t),r=e.eventManager;return r.onListen=KD.bind(null,e.syncEngine),r.onUnlisten=YD.bind(null,e.syncEngine),r}function hP(t,e,r={}){const i=new pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Kp({next:d=>{o.enqueueAndForget(()=>Hp(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new D(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new D(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Wp(zu(a.path),c,{includeMetadataChanges:!0,Ku:!0});return zp(s,h)}(await eu(t),t.asyncQueue,e,r,i)),i.promise}function dP(t,e,r={}){const i=new pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Kp({next:d=>{o.enqueueAndForget(()=>Hp(s,h)),d.fromCache&&l.source==="server"?u.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Wp(a,c,{includeMetadataChanges:!0,Ku:!0});return zp(s,h)}(await eu(t),t.asyncQueue,e,r,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t,e,r){if(!r)throw new D(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fP(t,e,r,i){if(e===!0&&i===!0)throw new D(S.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function zy(t){if(!U.isDocumentKey(t))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hy(t){if(U.isDocumentKey(t))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ju(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Rt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Ju(t);throw new D(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){var r,i;if(e.host===void 0){if(e.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(r=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,r.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var r,i}}class Zu{constructor(e,r,i,s){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ux;switch(r.type){case"firstParty":return new jx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Vy.get(e);r&&(M("ComponentProvider","Removing Datastore"),Vy.delete(e),r.terminate())}(this),Promise.resolve()}}function pP(t,e,r,i={}){var s;const o=(t=Rt(t,Zu))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==e&&Fi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${r}`,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Ve.MOCK_USER;else{a=Aw(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ve(u)}t._authCredentials=new bx(new UE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,r,i){this.converter=r,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class Qr{constructor(e,r,i){this.converter=r,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Qr(this.firestore,e,this._query)}}class Yn extends Qr{constructor(e,r,i){super(e,r,zu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new U(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function mP(t,e,...r){if(t=le(t),F_("collection","path",e),t instanceof Zu){const i=ne.fromString(e,...r);return Hy(i),new Yn(t,null,i)}{if(!(t instanceof Qe||t instanceof Yn))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ne.fromString(e,...r));return Hy(i),new Yn(t.firestore,null,i)}}function Ct(t,e,...r){if(t=le(t),arguments.length===1&&(e=bE.A()),F_("doc","path",e),t instanceof Zu){const i=ne.fromString(e,...r);return zy(i),new Qe(t,null,new U(i))}{if(!(t instanceof Qe||t instanceof Yn))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ne.fromString(e,...r));return zy(i),new Qe(t.firestore,t instanceof Yn?t.converter:null,new U(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new __(this,"async_queue_retry"),this.Xc=()=>{const r=oh();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.qo.Mo()};const e=oh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const r=oh();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const r=new pn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Zo(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const r=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw _n("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=r,r}enqueueAfterDelay(e,r,i){this.Zc(),this.Yc.indexOf(e)>-1&&(r=0);const s=Bp.createAndSchedule(this,e,r,i,o=>this.na(o));return this.zc.push(s),s}Zc(){this.Wc&&F()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const r of this.zc)if(r.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((r,i)=>r.targetTimeMs-i.targetTimeMs);for(const r of this.zc)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const r=this.zc.indexOf(e);this.zc.splice(r,1)}}function Wy(t){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Br extends Zu{constructor(e,r,i,s){super(e,r,i,s),this.type="firestore",this._queue=new gP,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$_(this),this._firestoreClient.terminate()}}function yP(t,e){const r=typeof t=="object"?t:jf(),i=typeof t=="string"?t:e||"(default)",s=Su(r,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=_w("firestore");o&&pP(s,...o)}return s}function ec(t){return t._firestoreClient||$_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $_(t){var e,r,i;const s=t._freezeSettings(),o=function(a,l,u,c){return new Jx(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,b_(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new aP(t._authCredentials,t._appCheckCredentials,t._queue,o),!((r=s.cache)===null||r===void 0)&&r._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gi(Je.fromBase64String(e))}catch(r){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new Gi(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=/^__.*__$/;class wP{constructor(e,r,i){this.data=e,this.fieldMask=r,this.fieldTransforms=i}toMutation(e,r){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,r,this.fieldTransforms):new ta(e,this.data,r,this.fieldTransforms)}}class j_{constructor(e,r,i){this.data=e,this.fieldMask=r,this.fieldTransforms=i}toMutation(e,r){return new ur(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function B_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class nc{constructor(e,r,i,s,o,a){this.settings=e,this.databaseId=r,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.ua(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new nc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var r;const i=(r=this.path)===null||r===void 0?void 0:r.child(e),s=this.aa({path:i,la:!1});return s.fa(e),s}da(e){var r;const i=(r=this.path)===null||r===void 0?void 0:r.child(e),s=this.aa({path:i,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return tu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(B_(this.ca)&&vP.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class EP{constructor(e,r,i){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=i||Qu(e)}ya(e,r,i,s=!1){return new nc({ca:e,methodName:r,ga:i,path:Ge.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yp(t){const e=t._freezeSettings(),r=Qu(t._databaseId);return new EP(t._databaseId,!!e.ignoreUndefinedProperties,r)}function _P(t,e,r,i,s,o={}){const a=t.ya(o.merge||o.mergeFields?2:0,e,r,s);Jp("Data must be an object, but it was:",a,i);const l=V_(i,a);let u,c;if(o.merge)u=new gt(a.fieldMask),c=a.fieldTransforms;else if(o.mergeFields){const h=[];for(const d of o.mergeFields){const f=bd(e,d,r);if(!a.contains(f))throw new D(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);H_(h,f)||h.push(f)}u=new gt(h),c=a.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=a.fieldTransforms;return new wP(new at(l),u,c)}class rc extends sa{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rc}}function SP(t,e,r){return new nc({ca:3,ga:e.settings.ga,methodName:t._methodName,la:r},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Xp extends sa{_toFieldTransform(e){return new o_(e.path,new Co)}isEqual(e){return e instanceof Xp}}class IP extends sa{constructor(e,r){super(e),this.pa=r}_toFieldTransform(e){const r=SP(this,e,!0),i=this.pa.map(o=>is(o,r)),s=new Vi(i);return new o_(e.path,s)}isEqual(e){return this===e}}function AP(t,e,r,i){const s=t.ya(1,e,r);Jp("Data must be an object, but it was:",s,i);const o=[],a=at.empty();qr(i,(u,c)=>{const h=Zp(e,u,r);c=le(c);const d=s.da(h);if(c instanceof rc)o.push(h);else{const f=is(c,d);f!=null&&(o.push(h),a.set(h,f))}});const l=new gt(o);return new j_(a,l,s.fieldTransforms)}function TP(t,e,r,i,s,o){const a=t.ya(1,e,r),l=[bd(e,i,r)],u=[s];if(o.length%2!=0)throw new D(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<o.length;f+=2)l.push(bd(e,o[f])),u.push(o[f+1]);const c=[],h=at.empty();for(let f=l.length-1;f>=0;--f)if(!H_(c,l[f])){const y=l[f];let v=u[f];v=le(v);const w=a.da(y);if(v instanceof rc)c.push(y);else{const _=is(v,w);_!=null&&(c.push(y),h.set(y,_))}}const d=new gt(c);return new j_(h,d,a.fieldTransforms)}function CP(t,e,r,i=!1){return is(r,t.ya(i?4:3,e))}function is(t,e){if(z_(t=le(t)))return Jp("Unsupported field value:",e,t),V_(t,e);if(t instanceof sa)return function(r,i){if(!B_(i.ca))throw i._a(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=is(a,i.wa(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return v2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ve.fromDate(r);return{timestampValue:Jl(i.serializer,s)}}if(r instanceof ve){const s=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jl(i.serializer,s)}}if(r instanceof Qp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gi)return{bytesValue:f_(i.serializer,r._byteString)};if(r instanceof Qe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._a(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Lp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i._a(`Unsupported field value: ${Ju(r)}`)}(t,e)}function V_(t,e){const r={};return FE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,(i,s)=>{const o=is(s,e.ha(i));o!=null&&(r[i]=o)}),{mapValue:{fields:r}}}function z_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Qp||t instanceof Gi||t instanceof Qe||t instanceof sa)}function Jp(t,e,r){if(!z_(r)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(r)){const i=Ju(r);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function bd(t,e,r){if((e=le(e))instanceof tc)return e._internalPath;if(typeof e=="string")return Zp(t,e);throw tu("Field path arguments must be of type string or ",t,!1,void 0,r)}const kP=new RegExp("[~\\*/\\[\\]]");function Zp(t,e,r){if(e.search(kP)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new tc(...e.split("."))._internalPath}catch{throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function tu(t,e,r,i,s){const o=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;r&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new D(S.INVALID_ARGUMENT,l+t+u)}function H_(t,e){return t.some(r=>r.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,r,i,s,o){this._firestore=e,this._userDataWriter=r,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(em("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class RP extends G_{data(){return super.data()}}function em(t,e){return typeof e=="string"?Zp(t,e):e instanceof tc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tm{}class NP extends tm{}function xP(t,e,...r){let i=[];e instanceof tm&&i.push(e),i=i.concat(r),function(s){const o=s.filter(l=>l instanceof nm).length,a=s.filter(l=>l instanceof ic).length;if(o>1||o>0&&a>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class ic extends NP{constructor(e,r,i){super(),this._field=e,this._op=r,this._value=i,this.type="where"}static _create(e,r,i){return new ic(e,r,i)}_apply(e){const r=this._parse(e);return q_(e._query,r),new Qr(e.firestore,e.converter,Rd(e._query,r))}_parse(e){const r=Yp(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Ky(h,c);const f=[];for(const y of h)f.push(qy(l,s,y));d={arrayValue:{values:f}}}else d=qy(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Ky(h,c),d=CP(a,o,h,c==="in"||c==="not-in");return Ie.create(u,c,d)}(e._query,"where",r,e.firestore._databaseId,this._field,this._op,this._value)}}function DP(t,e,r){const i=e,s=em("where",t);return ic._create(s,i,r)}class nm extends tm{constructor(e,r){super(),this.type=e,this._queryConstraints=r}static _create(e,r){return new nm(e,r)}_parse(e){const r=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return r.length===1?r[0]:Bt.create(r,this._getOperator())}_apply(e){const r=this._parse(e);return r.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)q_(o,l),o=Rd(o,l)}(e._query,r),new Qr(e.firestore,e.converter,Rd(e._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function qy(t,e,r){if(typeof(r=le(r))=="string"){if(r==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KE(e)&&r.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const i=e.path.child(ne.fromString(r));if(!U.isDocumentKey(i))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return gy(t,new U(i))}if(r instanceof Qe)return gy(t,r._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ju(r)}.`)}function Ky(t,e){if(!Array.isArray(t)||t.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function q_(t,e){if(e.isInequality()){const i=xp(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new D(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const o=qE(t);o!==null&&PP(t,s,o)}const r=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(r!==null)throw r===e.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${r.toString()}' filters.`)}function PP(t,e,r){if(!r.isEqual(e))throw new D(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}class OP{convertValue(e,r="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 10:return this.convertObject(e.mapValue,r);default:throw F()}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const i={};return qr(e,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(e){return new Qp(_e(e.latitude),_e(e.longitude))}convertArray(e,r){return(e.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(e,r){switch(r){case"previous":const i=Cp(e);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const r=nr(e);return new ve(r.seconds,r.nanos)}convertDocumentKey(e,r){const i=ne.fromString(e);ie(v_(i));const s=new Ao(i.get(1),i.get(3)),o=new U(i.popFirst(5));return s.isEqual(r)||_n(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e,r){let i;return i=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class K_ extends G_{constructor(e,r,i,s,o,a){super(e,r,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const i=this._document.data.field(em("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,r.serverTimestamps)}}}class il extends K_{data(e={}){return super.data(e)}}class Q_{constructor(e,r,i,s){this._firestore=e,this._userDataWriter=r,this._snapshot=s,this.metadata=new Ps(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(i=>{e.call(r,new il(this._firestore,this._userDataWriter,i.key,i,new Ps(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new il(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new il(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:MP(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function MP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){t=Rt(t,Qe);const e=Rt(t.firestore,Br);return hP(ec(e),t._key).then(r=>J_(e,t,r))}class rm extends OP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,r)}}function bP(t){t=Rt(t,Qr);const e=Rt(t.firestore,Br),r=ec(e),i=new rm(e);return W_(t._query),dP(r,t._query).then(s=>new Q_(e,i,t,s))}function Fd(t,e,r){t=Rt(t,Qe);const i=Rt(t.firestore,Br),s=LP(t.converter,e,r);return X_(i,[_P(Yp(i),"setDoc",t._key,s,t.converter!==null,r).toMutation(t._key,Zt.none())])}function gi(t,e,r,...i){t=Rt(t,Qe);const s=Rt(t.firestore,Br),o=Yp(s);let a;return a=typeof(e=le(e))=="string"||e instanceof tc?TP(o,"updateDoc",t._key,e,r,i):AP(o,"updateDoc",t._key,e),X_(s,[a.toMutation(t._key,Zt.exists(!0))])}function Y_(t,...e){var r,i,s;t=le(t);let o={includeMetadataChanges:!1},a=0;typeof e[a]!="object"||Wy(e[a])||(o=e[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges};if(Wy(e[a])){const d=e[a];e[a]=(r=d.next)===null||r===void 0?void 0:r.bind(d),e[a+1]=(i=d.error)===null||i===void 0?void 0:i.bind(d),e[a+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let u,c,h;if(t instanceof Qe)c=Rt(t.firestore,Br),h=zu(t._key.path),u={next:d=>{e[a]&&e[a](J_(c,t,d))},error:e[a+1],complete:e[a+2]};else{const d=Rt(t,Qr);c=Rt(d.firestore,Br),h=d._query;const f=new rm(c);u={next:y=>{e[a]&&e[a](new Q_(c,f,d,y))},error:e[a+1],complete:e[a+2]},W_(t._query)}return function(d,f,y,v){const w=new Kp(v),_=new Wp(f,w,y);return d.asyncQueue.enqueueAndForget(async()=>zp(await eu(d),_)),()=>{w.Dc(),d.asyncQueue.enqueueAndForget(async()=>Hp(await eu(d),_))}}(ec(c),h,l,u)}function X_(t,e){return function(r,i){const s=new pn;return r.asyncQueue.enqueueAndForget(async()=>XD(await cP(r),i,s)),s.promise}(ec(t),e)}function J_(t,e,r){const i=r.docs.get(e._key),s=new rm(t);return new K_(t,s,e._key,i,new Ps(r.hasPendingWrites,r.fromCache),e.converter)}function nu(){return new Xp("serverTimestamp")}function Qy(...t){return new IP("arrayUnion",t)}(function(t,e=!0){(function(r){ts=r})(Hr),Lr(new er("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Br(new Fx(r.getProvider("auth-internal")),new Vx(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Yt(hy,"3.12.0",t),Yt(hy,"3.12.0","esm2017")})();const FP={apiKey:"AIzaSyCX80Ok09-3KKoMmdNk88bczduEuhJs0r8",authDomain:"chat-a489f.firebaseapp.com",projectId:"chat-a489f",storageBucket:"chat-a489f.appspot.com",messagingSenderId:"351684203516",appId:"1:351684203516:web:ed34e3870cb678348fd879"};kw(FP);const sc=yR(),Z_=RN(),ft=yP(),cr=A.createContext(),$P=({children:t})=>{const[e,r]=A.useState({});return A.useEffect(()=>{const i=ik(sc,s=>{r(s),console.log(s)});return()=>{i()}},[]),I.jsx(cr.Provider,{value:{currentUser:e},children:t})},jP=()=>{const{currentUser:t}=A.useContext(cr);return I.jsxs("div",{className:"navbar",children:[I.jsx("span",{className:"logo",children:"Chat Clone"}),I.jsxs("div",{className:"user",children:[I.jsx("img",{src:t.photoURL,alt:""}),I.jsxs("span",{children:[" ",t.displayName," "]}),I.jsx("button",{onClick:()=>sk(sc),children:"Logout"})]})]})},BP=()=>{const[t,e]=A.useState(""),[r,i]=A.useState(null),[s,o]=A.useState(!1),{currentUser:a}=A.useContext(cr),l=async()=>{const h=xP(mP(ft,"users"),DP("displayName","==",t));try{(await bP(h)).forEach(f=>{i(f.data())})}catch{o(!0)}},u=h=>{h.code==="Enter"&&l()},c=async()=>{const h=a.uid>r.uid?a.uid+r.uid:r.uid+a.uid;try{(await UP(Ct(ft,"chats",h))).exists()||(await Fd(Ct(ft,"chats",h),{messages:[]}),await gi(Ct(ft,"userChats",a.uid),{[h+".userInfo"]:{uid:r.uid,displayName:r.displayName,photoURL:r.photoURL},[h+".date"]:nu()}),await gi(Ct(ft,"userChats",r.uid),{[h+".userInfo"]:{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL},[h+".date"]:nu()}))}catch{}i(null),e("")};return I.jsxs("div",{className:"search",children:[I.jsx("div",{className:"searchForm",children:I.jsx("input",{type:"text",placeholder:"Find a user",onKeyDown:u,onChange:h=>e(h.target.value),value:t})}),s&&I.jsx("span",{children:"User not found!"}),r&&I.jsxs("div",{className:"userChat",onClick:c,children:[I.jsx("img",{src:r.photoURL,alt:""}),I.jsx("div",{className:"userChatInfo",children:I.jsx("span",{children:r.displayName})})]})]})},ss=A.createContext(),VP=({children:t})=>{const{currentUser:e}=A.useContext(cr),r={chatId:"null",user:{}},i=(a,l)=>{switch(l.type){case"CHANGE_USER":return{user:l.payload,chatId:e.uid>l.payload.uid?e.uid+l.payload.uid:l.payload.uid+e.uid};default:return a}},[s,o]=A.useReducer(i,r);return I.jsx(ss.Provider,{value:{data:s,dispatch:o},children:t})},zP=()=>{var o;const[t,e]=A.useState([]),{currentUser:r}=A.useContext(cr),{dispatch:i}=A.useContext(ss);A.useEffect(()=>{const a=()=>{const l=Y_(Ct(ft,"userChats",r.uid),u=>{e(u.data())});return()=>{l()}};r.uid&&a()},[r.uid]);const s=a=>{i({type:"CHANGE_USER",payload:a})};return I.jsx("div",{className:"chats",children:(o=Object.entries(t))==null?void 0:o.sort((a,l)=>l[1].date-a[1].date).map(a=>{var l;return I.jsxs("div",{className:"userChat",onClick:()=>s(a[1].userInfo),children:[I.jsx("img",{src:a[1].userInfo.photoURL,alt:""}),I.jsxs("div",{className:"userChatInfo",children:[I.jsx("span",{children:a[1].userInfo.displayName}),I.jsx("p",{children:(l=a[1].lastMessage)==null?void 0:l.text})]})]},a[0])})})},HP=()=>I.jsxs("div",{className:"sidebar",children:[I.jsx(jP,{}),I.jsx(BP,{}),I.jsx(zP,{})]}),GP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA4LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmRjMjBmNTM2LTJhZjUtNGM3My05ZjZjLTAzMzkwY2JlN2VjMDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MYW1hIERldjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PvItxZYAAAKwSURBVFiF7Ze9bhNBFIW/M2s7JqJAUKdKpJS8AwXpkRANzxAJ0cIbREi8AAUSSqBFUNDxBrQoilLTUeQPxzuHYmYdx3Y2tpdYSPGRVusdz5355ufeuQNLLbXUUrdbGi04ODgd+isSggR4Ut0pZRvZOASQoN+HjY07swPaZn//BElIKAQszcs13G5q264GKyRPxFhf716ybY0RKz2AJboS3dTofJLARmXJEagPxh70gR2RiivtxwBDCAGIwOMYvQu0mwBm2xVbP4Et0C/JGU+2jaS7wNFUgDE6ADEEPbJ1HxyB0AAwz5YegreA90ArRp+HACEUOxA/A99zP3HYtq7jMzCS+pI87wOK1dKC2/ltSdi8Ab8En+byMYixGZwAr5H3jHK21aANyX3wjs2LBH+16gCH1cCVL5nG7CRvJbbTN6Gu/UZ7a1bZ/JF4BdpOMydxzeCnncGmKkhh6zWwmYqcw7azU0zmvHFAKcUSCYE2bZy9ugo11EWxG1/iBCTZsk3M3luF6WvtF7UHDdalT2Aa31vAElvpaFMEh6HfmgZwAUucArbtYOurpGPbIQXw/2eJI4DNO+BJ2ocuMmTtTC4IMKWTkh/Y/gY8T2mcA6i8OObGZ3QqQNsNspkq1zU5OGP7A/AsQ7byeT3Rus5JKqhSDbLWbFqCCqDIza7Y/iQpgHZTEgGTIOsAOwC2uzV1plXVz+8M0odY2OxdDCD1di2glCrb/ihpg3+TsHaAwxD0JSG4bLdXOTs7FoS9VqujTqeg1yvrAfNWqzbNjxjj00bbb0ijuyTGSKfT9fl5T1A6xsBgIq8CzMcQpINd6TYW48W5ObcsKdgMEoOyTGlgCIVjNL1eb/LARgsOD09ptUS7DScnxh69gc0qke8d9Ptn2GZ19R5ra81vi0sttdRSt0F/AbV4QUoZ1kOTAAAAAElFTkSuQmCC",WP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA4LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmQyOGI5NDkyLTJiMDAtNDVjZC1iNDc4LTNjODM4YzMxZTZhMzwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MYW1hIERldjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PgpJjy4AAAWJSURBVFiF7ZdNiGRXGYaf95xb3V01o+MYEzLOCNP2xDDgD+ImgRDQpSIuXKigmEBQSBaCC7Nyo5v8ICSrkIWB4EZ3BsVEQVEMBqIbYWAw00WRLDQOkwRnpqd+7j3ndXFuVZeZrs7tHhMXzge96Fvfud97vp/3ey/ctJv2vzUd9MBwOCYEI0HTCAmV98hgQ8I2UmRra/DeAhwOx4ABsBWBpMUbhG2AIOVcfCDGAZubB87DwqqujtvbY0r8RbBk05P4KNAHZhIjm/FgcJGdndsEOKVrhwYHELo4DYczIBZUKSCB5G+FwCvAOeBl8F9tX5D83atXT2A3nt+mZP5dBFhVvRZUUlUlbB61eRp82nZlu2e7knQS+JGUn4mxx/p6YwiUgr+LAO2M3QQ72NaXge9JJFtJkud/thOoBu7PmYdmsx7gqMO3YLch2d4ec+LEm1y6dIy6ji9JvstWI7kq04vKSEi2k6RoexvyWVCj/0Ao5SyDkDJnzvT3jd0pg5L1+uvHaZpwCvwpW4CjrUWfteAsKRSa0WmpulMKQFCZ6ADg0iZrSGI02r8/OwKUJCHpuKQKTPn/Or82j9imsn3SBjuHcoYIfMSGfv88Bfz+1rEHC8XZugieSMw57+1+lN+QRBMCr5XhUlxfH1DX+cfAaznrm9PpJjmnHgRGo3rlpHcCmHP22lpFjPqnzV/aqia3tabgtWTZC/I+D9UrkrE9u3bNAF8ql9A97QXr2WzK5csXV2azE1H3egOm00kAMuiHNp+VqGyathcpQGhakACP2HUOwe8DfT7G6a1leAC8JXEf8A9Jv+73j67MVacpHo3eIIQPUtfjOcjvSH5ivt5KWTUvL8BjMerhlDISP7D5fgllWjraXZDiXuCPQNjaGlzHmJ1KnFKf48dBCjlnC3gS9EXbf5K4Yuuq5Cvgl4GvheCH7Rzb45fagcqAS0fI7dC9BfoXc71xmAwOh9dYvnArFizBeLwT+v2jdwNnJUYp8aLkKYAdBAmpsuSP275T4hnb7wd+BXoc9KqdRmBB8h13HLsu/r49OBxOSakmhAAolu0BwOds3b+xceRu8IeAwoDiisSLNj+VeK7cP1Wgc7B+DiZPtaT9d5vfhyByRjaGvffhyhKPRmPspgVHBBJwEvQL4Lfgr0vasnXM1gdsH5N8Cvgq8HMp/07iYxKN7XWYYvOE7VfBP5NMzrkaDv/sy5cvEcLe2nFliS9cGCN5CZw+A/xS4vYWrG2HIljLa2wblCVkE8E7El+w/QdwkELe2ak1GKx5PjQxwubm6nW3Zwa3t8ctdgVQknQaeB58O3jmohoq7S7Zxbor9OMguZZ0xOYF0KchZJu4thaX1uM7254AQyiyvq7rnItWehZ8q6SZzVoLqw20C7Jkzm5XXg9cgzaAZyXWJKeqCpJsKSF53+ytBBjjUWxir9cjhPAVm3tLL9GT5kpkbxE1f174jp5EDXzC5kE7UKpitraOdPpm2RPgbNbQ78fU6wnwt3f3q99W0pWmuaCwHcqFeCBGB8mpI/2uBhgCmkwaUsonJe5qRUDY1X5dbFd+td1wNmd9sj3eGeEqRwHYnKF8EB3K1NZZUm4H66yLNOo8JHsStb3I0odLIHIroQ4h3gU4l97jlqWHhwe41P7zTF4nTjvDK5zo9vwt7+DeDeCSFtUypbSBOkMtK2wxLAD1fwWgxBzi33azp/qgJW7PeUGZcH6O/YYAgjJkinoOP7H9DeZf7oc0id+sr288lxI0zSzdIMDcyiUsbdxnT16SOEUp0UGyaCDavAXx6clkmguX6sYy2MryohQiuWl4aq+PpINY+6GleV/eEMAYB6Q0ASCl6cLvoNO87G/nZj4rMXbvln3DtaTK8trtmskVq3rl85v2f2v/BnSI93fiTohdAAAAAElFTkSuQmCC",qP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA4LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmNhNTE4ODMwLTBmMmYtNGY0NC1iYzQ2LWVlM2JlZmQ4MmIxNjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MYW1hIERldjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PlV4Lz0AAANzSURBVFiF7ZVNixxlFIWfc6u6pyYzi7iImkUWSXqT+Ilg/Fhkl1VcuAn+BUFw7Q/wX7gRQXAl/gIFQQ0EBKMizkdGgpBFxF07091V97iot+ejZ4xuhTrQ0FWc973nPee+t2DAgAEDBgwYMOD/DJ31cnf3L6qqQUq6bkEmIYGkvHx5jUzY25sBpqqEBF1nbEmyAEfgiI62rYiAtoVMqCqQUKltOyyBbSaT5t8F7u7ukwlSX6eqyK6DIhA7Q3LaM+BwwwDS7sVSKj98eD8nk9eYzw8AA2g6XXhzc3ysfBd2lWUVk8n6CT2xKtCmFLGAlKIBXgJekWIT1MvX6Pghs6rqAL0AvAo8BeSlS89rOv0D29i9YxsbNcA1iRvABZvMXCBVbG76lIOnBBbno5fql9u2+0nie+Be17W/2r5p23ZEWW+bK23b3gP/AHwHfiBxR5JHo3Mh9eYDT0v6CvjZ5lvbDyDei6ix29jfh+1tn1JzAjs7+yUOVeAfQdf6SJGEbB5H8JzNY0hltpbWvpH8Zh9z31+SZqAXwVtABe5sPgPe6VPwcj+AN0B3gZjPm7x+/UjWGQ6iovuqxESyj3pLC+BCJrf6jWtLzQsSr9skaNmrc9trkG/bJmLRAc8At0tvlx7XrJS8LRnJoRXL6lPqdGjxCIo6oBfppfjNY9z1k0lIJQFsn+vfrSHlOjByH8XyFqscaukk58+f1HPGJdHy98hm3jvCXGIB1OX5bj8aGiDu2/xeRscMPC/tAfA1QNe1MR4/+s32VilTeJTD8Es5nC9ePNmDZwm0lCH5T+ADG2yv2R73wvkwk/uZCA4C8kDi/eJYY2sMroCPwF9KliRms2eReFdiatPYjG2PJH2+sdF8urGxToS6EthRHqsCt7cPkGCxWFDXNRK3JG4CYXMvIr9o25qIJLNDCtF3/A2Jt3qet2x9EtHRFzSgoB9b14A7wBp4t6rWP27bg1w2x5UrTenPfxC4s3PQWxsiM8vuPqRXVarrwgBXrzZsbU2JiJCURzxYLMRoVOYvuQwrpEj7iFfXDW07Y7l2Mjn35IgnkwbJjMdJXduFU5dftVhUzuyX7e3NmM3MdDrPVd547MOi0hg76T926Div6+blsomqOnVnz/4WQz99V59PWF/+r/JOFTi25klcrc6XAQMGDBgwYMCA/4K/AR9NvILUl7eBAAAAAElFTkSuQmCC",KP=({message:t})=>{const{currentUser:e}=A.useContext(cr),{data:r}=A.useContext(ss),i=A.useRef();return A.useEffect(()=>{var s;(s=i.current)==null||s.scrollIntoView({behavior:"smooth"})},[t]),I.jsxs("div",{ref:i,className:`message ${t.senderId===e.uid&&"owner"}`,children:[I.jsxs("div",{className:"messageInfo",children:[I.jsx("img",{src:t.senderId===e.uid?e.photoURL:r.user.photoURL,alt:""}),I.jsx("span",{children:"just now"})]}),I.jsxs("div",{className:"messageContent",children:[I.jsx("p",{children:t.text}),t.img&&I.jsx("img",{src:t.img,alt:""})]})]})},QP=()=>{const[t,e]=A.useState([]),{data:r}=A.useContext(ss);return A.useEffect(()=>{const i=Y_(Ct(ft,"chats",r.chatId),s=>{s.exists()&&e(s.data().messages)});return()=>{i()}},[r.chatId]),console.log(t),I.jsx("div",{className:"messages",children:t.map(i=>I.jsx(KP,{message:i},i.id))})},YP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCB8RAzQjvjAGAAAEuUlEQVRYw+2WbUyTVxTH/7cvdFiBOBCKqJCROlJETQQaUVpeu4mxH5ZCidkyUWOiuBmRaBRJIL4lhPnyZR/QxBpRtmqyhtWiRVeftsaAG0t0+AIuoqmausdMrUUstWcfNgh0ILBWlyX7f7p57rnn/s59zj33AP/rLxExZt9ZX2+PUan+FQAbpaVxHJH9w9bWd7mvYHiwSSwGACoSCP65u6mL2TMPH6bpS5dCHRmJAoWCrX72jJLv3MF3Ph9mb9+u9joc3O8FBdDv2wefSBTyjmWvX6OtszPQWl+fz3heBK9Kha8WLRqaJ0NMDLB4MW77/WSWyZAP4IlcjhqlMmxhp2dnC57qdDbKymJGo1CYmBgdjVqFIlDvdOKV1SqILC9/udHn01z3eofWOH+LiqJboZ8Aq4uKCijq6khXUYHPzpwZnuAqMzI4joirNJvDFuk46tZFRHArvV7upscznHDezT09rMHpZKoRVEEyGoXCjtTo6FAB0s/4fJjL83g8ffqkF3HGrVvtshcvOI6Ia+E4e+acOaFAcJX37nEc0agrd9GQlNSti4gINrZRURESGhtpkVgMpcuFWSoV7Tt6NNSTAEbUgYvZCQmitL4+vqip6W9G94uKAAD8li3u1pQUttXtRld+vo1CT8phB6Ks+Hi8EolwPS4u2IjVuly0FmCppaUyV2wsaePjoXC58pnfHzaAN2ng52PHJO+vX08b8/KAvDxI/H6WvG1bqJtPGkBz3eu98rFSOXhArydPQgJLb2tTJV679s4AAGDJg5cvoTcY3mRjNAqFCTXNzSx1yRKqKi5Wa3p7J/I7pYeHk+bm2mN27RrrphAxJnMcOYKj5eW0IzmZfWS1XjQkJYUNwLFLqWRRbW3Uuns3v/P06WAIR3FjI+kqKqB0uaA3mehSSorortV6wRAbGzKAjdLSApVmM30rlWIez8Oj1Y6E4A7U1FBtVRXm8Ty+1mik35eVQWCxoEChEPdbLDYav+JNCGCj2bMFm86fR09cHMkPHmQtCxbgi9u3hyA46+bNWLxnD37xeLCypERddfNmZtbgoDSytJQ1OJ1Iz84WfGoyWXokkikDtFtjYgRLzWaUzZ2LBadOqROrq1VVjx7531Or8cONG/BotZAcOoT9Ph9UOp36x6tXh9ZmZvb3S26tWIGfurqwvrBQ+sJoHKtwjQtwJSkyMuKBxYL9Cxcy07lz0jurVzMWCABAYafbzfY2NAAAJH6/4LFer86wWoN9KH99/tz/TUkJWG8vPFqt8MumJiLGJgUw+IlGgw9ycrC3o2Pggk6XmTU4OMpgVnU1OCK2bN263C6TaTw/hZ1udyBXo4HS5SJdRcUlpKdPCmDa5+3taFy7VlC7fPnIxmRIFL9mTaBWo1H5jx+fKI/yWV8fW5aTQ/2rVuWhu3tMo+GGxHH27EQOwyGu9f79Uc+xsO7Jkz9Dk8uJ3m5n7HDMmIEbMhnm8fxwVi6b+fAh12K3Y5ZKZX964sSlu83NlBL038MgQfO0aYHs6moExGIaaGkZlZGcVS5nB9rbaUdy8ts8AQDA3o4O4cniYhb8vSM1Onpgx4YNODR/Pps5dvEIReTxetmqy5dfbzEYwtFP/Pf1B63n8BCweUoHAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTMxVDE3OjAzOjUyKzAwOjAwAqs7ggAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0zMVQxNzowMzo1MiswMDowMHP2gz4AAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMDgtMzFUMTc6MDM6NTIrMDA6MDAk46LhAAAAAElFTkSuQmCC",XP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCB8RBhBiyiCSAAACDklEQVRYw+2XPUgbcRjGn0vtUj8mzRDBUSeXkkgbHCS4xWiV1FWQkqWEwkF7yQUUOoTGFheziDpEJzPce5JIN48YMgnRkg4NnbocItr6kaXX4e2QEEqwekkuXXrP+D7Pvff7P8v/DrDVhPa809OU1DTyVCrkqVQoqWmqOxBoZ6dgNkiH8TguotFbzUg8PluOxVoBcJg9OS6iUQwZhvAxEuEXLpfj/eAgHkkShgwD72SZRqam2mni7tMnNY2IWQ1JUqOnhiSJiJlGDg461gBSHg8AGJOpVKNVn4lud+cA5O5uAJifPz1ttOozZ29v5wAaROFCgc7y+Vb9P9XVCgB8Xi8KbfjtNmClbAAbwAawAWyA1u6Ckq5j1OVSvo+PAwBytdk/a+DDzg4ACLl8XshVbz3hy/Z25wDObm4AIL3b0wMAvzaWlrCQSKCk6yjpOhYSCWNmeRkA9ry174LaM5aINo+PiZiJJybuyyorPh8RMz0pFq1rYDKbBQC8EcV7F55UM0Iok7GsAWXF6aT162siZtUny3/NlWKxalOXl5nH/f1mdpv+L1APg0HeTKcxKwh4ms065lZXf746OgKArm9jY44TUeTnfj+ImV8Hg3OjimIpQB3i7dYWXvb13Rp4dnXFnxcXzb68aQAASO8ODDxcD4eFT34/fx0eBgDkymXhx/7+g+TaWqB4ft7szv9bvwGBKNSBpuqWcAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOC0zMVQxNzowNjoxNiswMDowMJSH2i8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDgtMzFUMTc6MDY6MTYrMDA6MDDl2mKTAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTA4LTMxVDE3OjA2OjE2KzAwOjAwss9DTAAAAABJRU5ErkJggg==";let Fa;const JP=new Uint8Array(16);function ZP(){if(!Fa&&(Fa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Fa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Fa(JP)}const Pe=[];for(let t=0;t<256;++t)Pe.push((t+256).toString(16).slice(1));function eO(t,e=0){return(Pe[t[e+0]]+Pe[t[e+1]]+Pe[t[e+2]]+Pe[t[e+3]]+"-"+Pe[t[e+4]]+Pe[t[e+5]]+"-"+Pe[t[e+6]]+Pe[t[e+7]]+"-"+Pe[t[e+8]]+Pe[t[e+9]]+"-"+Pe[t[e+10]]+Pe[t[e+11]]+Pe[t[e+12]]+Pe[t[e+13]]+Pe[t[e+14]]+Pe[t[e+15]]).toLowerCase()}const tO=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Yy={randomUUID:tO};function lh(t,e,r){if(Yy.randomUUID&&!e&&!t)return Yy.randomUUID();t=t||{};const i=t.random||(t.rng||ZP)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){r=r||0;for(let s=0;s<16;++s)e[r+s]=i[s];return e}return eO(i)}const nO=()=>{const[t,e]=A.useState(""),[r,i]=A.useState(null),{currentUser:s}=A.useContext(cr),{data:o}=A.useContext(ss),a=async()=>{if(r){const l=D1(Z_,lh()),u=N1(l,r);u.on(c=>{console.log(c)},()=>{x1(u.snapshot.ref).then(async c=>{await gi(Ct(ft,"chats",o.chatId),{messages:Qy({id:lh(),text:t,senderId:s.uid,date:ve.now(),img:c})})})})}else await gi(Ct(ft,"chats",o.chatId),{messages:Qy({id:lh(),text:t,senderId:s.uid,date:ve.now()})});await gi(Ct(ft,"userChats",s.uid),{[o.chatId+".lastMessage"]:{text:t},[o.chatId+".date"]:nu()}),await gi(Ct(ft,"userChats",o.user.uid),{[o.chatId+".lastMessage"]:{text:t},[o.chatId+".date"]:nu()}),e(""),i(null)};return I.jsxs("div",{className:"input",children:[I.jsx("input",{type:"text",placeholder:"Say something...",onChange:l=>e(l.target.value),value:t}),I.jsxs("div",{className:"send",children:[I.jsx("img",{src:XP,alt:""}),I.jsx("input",{type:"file",style:{display:"none"},id:"file",onChange:l=>i(l.target.files[0])}),I.jsx("label",{htmlFor:"file",children:I.jsx("img",{src:YP,alt:""})}),I.jsx("button",{onClick:a,children:"Send"})]})]})},rO=()=>{var e;const{data:t}=A.useContext(ss);return I.jsxs("div",{className:"chat",children:[I.jsxs("div",{className:"chatInfo",children:[I.jsx("span",{children:(e=t.user)==null?void 0:e.displayName}),I.jsxs("div",{className:"chatIcons",children:[I.jsx("img",{src:GP,alt:""}),I.jsx("img",{src:WP,alt:""}),I.jsx("img",{src:qP,alt:""})]})]}),I.jsx(QP,{}),I.jsx(nO,{})]})},iO=()=>I.jsx("div",{className:"Home",children:I.jsxs("div",{className:"container",children:[I.jsx(HP,{}),I.jsx(rO,{})]})});/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Ro.apply(this,arguments)}var $n;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($n||($n={}));const Xy="popstate";function sO(t){t===void 0&&(t={});function e(i,s){let{pathname:o,search:a,hash:l}=i.location;return $d("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:ru(s)}return aO(e,r,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function im(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oO(){return Math.random().toString(36).substr(2,8)}function Jy(t,e){return{usr:t.state,key:t.key,idx:e}}function $d(t,e,r,i){return r===void 0&&(r=null),Ro({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?os(e):e,{state:r,key:e&&e.key||i||oO()})}function ru(t){let{pathname:e="/",search:r="",hash:i=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function os(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function aO(t,e,r,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:o=!1}=i,a=s.history,l=$n.Pop,u=null,c=h();c==null&&(c=0,a.replaceState(Ro({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function d(){l=$n.Pop;let _=h(),m=_==null?null:_-c;c=_,u&&u({action:l,location:w.location,delta:m})}function f(_,m){l=$n.Push;let p=$d(w.location,_,m);r&&r(p,_),c=h()+1;let g=Jy(p,c),E=w.createHref(p);try{a.pushState(g,"",E)}catch{s.location.assign(E)}o&&u&&u({action:l,location:w.location,delta:1})}function y(_,m){l=$n.Replace;let p=$d(w.location,_,m);r&&r(p,_),c=h();let g=Jy(p,c),E=w.createHref(p);a.replaceState(g,"",E),o&&u&&u({action:l,location:w.location,delta:0})}function v(_){let m=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof _=="string"?_:ru(_);return we(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return l},get location(){return t(s,a)},listen(_){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Xy,d),u=_,()=>{s.removeEventListener(Xy,d),u=null}},createHref(_){return e(s,_)},createURL:v,encodeLocation(_){let m=v(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:y,go(_){return a.go(_)}};return w}var Zy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zy||(Zy={}));function lO(t,e,r){r===void 0&&(r="/");let i=typeof e=="string"?os(e):e,s=sm(i.pathname||"/",r);if(s==null)return null;let o=eS(t);uO(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=vO(o[l],_O(s));return a}function eS(t,e,r,i){e===void 0&&(e=[]),r===void 0&&(r=[]),i===void 0&&(i="");let s=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(we(u.relativePath.startsWith(i),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(i.length));let c=Xn([i,u.relativePath]),h=r.concat(u);o.children&&o.children.length>0&&(we(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),eS(o.children,e,h,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:gO(c,o.index),routesMeta:h})};return t.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let u of tS(o.path))s(o,a,u)}),e}function tS(t){let e=t.split("/");if(e.length===0)return[];let[r,...i]=e,s=r.endsWith("?"),o=r.replace(/\?$/,"");if(i.length===0)return s?[o,""]:[o];let a=tS(i.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),s&&l.push(...a),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function uO(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:yO(e.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const cO=/^:\w+$/,hO=3,dO=2,fO=1,pO=10,mO=-2,ev=t=>t==="*";function gO(t,e){let r=t.split("/"),i=r.length;return r.some(ev)&&(i+=mO),e&&(i+=dO),r.filter(s=>!ev(s)).reduce((s,o)=>s+(cO.test(o)?hO:o===""?fO:pO),i)}function yO(t,e){return t.length===e.length&&t.slice(0,-1).every((i,s)=>i===e[s])?t[t.length-1]-e[e.length-1]:0}function vO(t,e){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=s==="/"?e:e.slice(s.length)||"/",h=wO({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c);if(!h)return null;Object.assign(i,h.params);let d=l.route;o.push({params:i,pathname:Xn([s,h.pathname]),pathnameBase:TO(Xn([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=Xn([s,h.pathnameBase]))}return o}function wO(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,i]=EO(t.path,t.caseSensitive,t.end),s=e.match(r);if(!s)return null;let o=s[0],a=o.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:i.reduce((c,h,d)=>{if(h==="*"){let f=l[d]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return c[h]=SO(l[d]||"",h),c},{}),pathname:o,pathnameBase:a,pattern:t}}function EO(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),im(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(i.push(l),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function _O(t){try{return decodeURI(t)}catch(e){return im(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function SO(t,e){try{return decodeURIComponent(t)}catch(r){return im(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function sm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,i=t.charAt(r);return i&&i!=="/"?null:t.slice(r)||"/"}function IO(t,e){e===void 0&&(e="/");let{pathname:r,search:i="",hash:s=""}=typeof t=="string"?os(t):t;return{pathname:r?r.startsWith("/")?r:AO(r,e):e,search:CO(i),hash:kO(s)}}function AO(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function uh(t,e,r,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function om(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function am(t,e,r,i){i===void 0&&(i=!1);let s;typeof t=="string"?s=os(t):(s=Ro({},t),we(!s.pathname||!s.pathname.includes("?"),uh("?","pathname","search",s)),we(!s.pathname||!s.pathname.includes("#"),uh("#","pathname","hash",s)),we(!s.search||!s.search.includes("#"),uh("#","search","hash",s)));let o=t===""||s.pathname==="",a=o?"/":s.pathname,l;if(i||a==null)l=r;else{let d=e.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;s.pathname=f.join("/")}l=d>=0?e[d]:"/"}let u=IO(s,l),c=a&&a!=="/"&&a.endsWith("/"),h=(o||a===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Xn=t=>t.join("/").replace(/\/\/+/g,"/"),TO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function RO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nS=["post","put","patch","delete"];new Set(nS);const NO=["get",...nS];new Set(NO);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iu(){return iu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},iu.apply(this,arguments)}const lm=A.createContext(null),xO=A.createContext(null),as=A.createContext(null),oc=A.createContext(null),hr=A.createContext({outlet:null,matches:[],isDataRoute:!1}),rS=A.createContext(null);function DO(t,e){let{relative:r}=e===void 0?{}:e;ls()||we(!1);let{basename:i,navigator:s}=A.useContext(as),{hash:o,pathname:a,search:l}=sS(t,{relative:r}),u=a;return i!=="/"&&(u=a==="/"?i:Xn([i,a])),s.createHref({pathname:u,search:l,hash:o})}function ls(){return A.useContext(oc)!=null}function oa(){return ls()||we(!1),A.useContext(oc).location}function iS(t){A.useContext(as).static||A.useLayoutEffect(t)}function ac(){let{isDataRoute:t}=A.useContext(hr);return t?HO():PO()}function PO(){ls()||we(!1);let t=A.useContext(lm),{basename:e,navigator:r}=A.useContext(as),{matches:i}=A.useContext(hr),{pathname:s}=oa(),o=JSON.stringify(om(i).map(u=>u.pathnameBase)),a=A.useRef(!1);return iS(()=>{a.current=!0}),A.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=am(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Xn([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function sS(t,e){let{relative:r}=e===void 0?{}:e,{matches:i}=A.useContext(hr),{pathname:s}=oa(),o=JSON.stringify(om(i).map(a=>a.pathnameBase));return A.useMemo(()=>am(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function OO(t,e){return LO(t,e)}function LO(t,e,r){ls()||we(!1);let{navigator:i}=A.useContext(as),{matches:s}=A.useContext(hr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=oa(),c;if(e){var h;let w=typeof e=="string"?os(e):e;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||we(!1),c=w}else c=u;let d=c.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",y=lO(t,{pathname:f}),v=$O(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Xn([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Xn([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,r);return e&&v?A.createElement(oc.Provider,{value:{location:iu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:$n.Pop}},v):v}function MO(){let t=zO(),e=RO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),r?A.createElement("pre",{style:s},r):null,o)}const UO=A.createElement(MO,null);class bO extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?A.createElement(hr.Provider,{value:this.props.routeContext},A.createElement(rS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FO(t){let{routeContext:e,match:r,children:i}=t,s=A.useContext(lm);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),A.createElement(hr.Provider,{value:e},i)}function $O(t,e,r){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,a=(i=r)==null?void 0:i.errors;if(a!=null){let l=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));l>=0||we(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,u,c)=>{let h=u.route.id?a==null?void 0:a[u.route.id]:null,d=null;r&&(d=u.route.errorElement||UO);let f=e.concat(o.slice(0,c+1)),y=()=>{let v;return h?v=d:u.route.Component?v=A.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=l,A.createElement(FO,{match:u,routeContext:{outlet:l,matches:f,isDataRoute:r!=null},children:v})};return r&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?A.createElement(bO,{location:r.location,revalidation:r.revalidation,component:d,error:h,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var jd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(jd||(jd={}));var No;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(No||(No={}));function jO(t){let e=A.useContext(lm);return e||we(!1),e}function BO(t){let e=A.useContext(xO);return e||we(!1),e}function VO(t){let e=A.useContext(hr);return e||we(!1),e}function oS(t){let e=VO(),r=e.matches[e.matches.length-1];return r.route.id||we(!1),r.route.id}function zO(){var t;let e=A.useContext(rS),r=BO(No.UseRouteError),i=oS(No.UseRouteError);return e||((t=r.errors)==null?void 0:t[i])}function HO(){let{router:t}=jO(jd.UseNavigateStable),e=oS(No.UseNavigateStable),r=A.useRef(!1);return iS(()=>{r.current=!0}),A.useCallback(function(s,o){o===void 0&&(o={}),r.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,iu({fromRouteId:e},o)))},[t,e])}function GO(t){let{to:e,replace:r,state:i,relative:s}=t;ls()||we(!1);let{matches:o}=A.useContext(hr),{pathname:a}=oa(),l=ac(),u=am(e,om(o).map(h=>h.pathnameBase),a,s==="path"),c=JSON.stringify(u);return A.useEffect(()=>l(JSON.parse(c),{replace:r,state:i,relative:s}),[l,c,s,r,i]),null}function Os(t){we(!1)}function WO(t){let{basename:e="/",children:r=null,location:i,navigationType:s=$n.Pop,navigator:o,static:a=!1}=t;ls()&&we(!1);let l=e.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof i=="string"&&(i=os(i));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:y="default"}=i,v=A.useMemo(()=>{let w=sm(c,l);return w==null?null:{location:{pathname:w,search:h,hash:d,state:f,key:y},navigationType:s}},[l,c,h,d,f,y,s]);return v==null?null:A.createElement(as.Provider,{value:u},A.createElement(oc.Provider,{children:r,value:v}))}function qO(t){let{children:e,location:r}=t;return OO(Bd(e),r)}var tv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(tv||(tv={}));new Promise(()=>{});function Bd(t,e){e===void 0&&(e=[]);let r=[];return A.Children.forEach(t,(i,s)=>{if(!A.isValidElement(i))return;let o=[...e,s];if(i.type===A.Fragment){r.push.apply(r,Bd(i.props.children,o));return}i.type!==Os&&we(!1),!i.props.index||!i.props.children||we(!1);let a={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Bd(i.props.children,o)),r.push(a)}),r}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vd(){return Vd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Vd.apply(this,arguments)}function KO(t,e){if(t==null)return{};var r={},i=Object.keys(t),s,o;for(o=0;o<i.length;o++)s=i[o],!(e.indexOf(s)>=0)&&(r[s]=t[s]);return r}function QO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YO(t,e){return t.button===0&&(!e||e==="_self")&&!QO(t)}const XO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function JO(t){let{basename:e,children:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=sO({window:i,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location});return A.useLayoutEffect(()=>o.listen(l),[o]),A.createElement(WO,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:o})}const ZO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aS=A.forwardRef(function(e,r){let{onClick:i,relative:s,reloadDocument:o,replace:a,state:l,target:u,to:c,preventScrollReset:h}=e,d=KO(e,XO),{basename:f}=A.useContext(as),y,v=!1;if(typeof c=="string"&&eL.test(c)&&(y=c,ZO))try{let p=new URL(window.location.href),g=c.startsWith("//")?new URL(p.protocol+c):new URL(c),E=sm(g.pathname,f);g.origin===p.origin&&E!=null?c=E+g.search+g.hash:v=!0}catch{}let w=DO(c,{relative:s}),_=tL(c,{replace:a,state:l,target:u,preventScrollReset:h,relative:s});function m(p){i&&i(p),p.defaultPrevented||_(p)}return A.createElement("a",Vd({},d,{href:y||w,onClick:v||o?i:m,ref:r,target:u}))});var nv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(nv||(nv={}));var rv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rv||(rv={}));function tL(t,e){let{target:r,replace:i,state:s,preventScrollReset:o,relative:a}=e===void 0?{}:e,l=ac(),u=oa(),c=sS(t,{relative:a});return A.useCallback(h=>{if(YO(h,r)){h.preventDefault();let d=i!==void 0?i:ru(u)===ru(c);l(t,{replace:d,state:s,preventScrollReset:o,relative:a})}},[u,l,c,i,s,r,t,o,a])}const nL=()=>{const[t,e]=A.useState(""),[r,i]=A.useState(!1),s=ac(),o=async a=>{i(!0),a.preventDefault();const l=a.target[0].value,u=a.target[1].value;try{await ZC(sc,l,u),s("/")}catch(c){e(c.message),n,i(!1)}};return I.jsx("div",{className:"formContainer",children:I.jsxs("div",{className:"formWrapper",children:[I.jsx("span",{className:"logo",children:"Chat clone"}),I.jsx("span",{className:"title",children:"Login"}),I.jsxs("form",{onSubmit:o,children:[I.jsx("input",{type:"email",placeholder:"email"}),I.jsx("input",{type:"password",placeholder:"password"}),I.jsx("button",{children:"Log in"}),t&&I.jsx("span",{children:t})]}),I.jsxs("p",{children:["New in here? ",I.jsx(aS,{to:"/register",children:"Register"})]})]})})},rL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5gkBChonodWdTQAADIVJREFUeNrtnX1UVVXawH/PuUIIfgJOZoCjoGlOH0LaiFQiRuZ6tV5zFLUPy/xYoTLmV2Uqpk0141gqOKWVY8tE6XNqtUoE8c0JVxqpaX686kySuSwVGdEK5Z5n/rjca4If517u5ULc3z93sdfez372s5+zz3P2s88BAgQI0HgRfyvQ2FiTnv93NTt3Nt8wViFxccYyfQINC/NUnjlWnkfOnIHKP6P7948oT40XY/9+q+0DDuBjVo9Zn6dmUpJUShaSlUUqk+Cmm3zVn7wgT6Hbt8tV9vuRCROGfZ46SeSzzy5Z398G+rXimvibjMlIQQERugiCg+tMgROSAWfPEscKSE4e3j+lp0hRUfVqTfxloNzc3FxVm61yQMQCNDLSWGm2Q8LDGWW0h6ZNdVPlfyAkRFtLMYSE6H6jBWoY/tLXXeQBFWThQla7OfH3EIH+61/me8ZJZOhQI98+BBVhpxGG5OYyRVdAhw5XlON0uDCuQbOyHIXx8TX0rCuDrFpUqGpGRQXtsSdBly5mEfuQmBip4Dpo4jdH9DZSKTMhNNScr8Hw4otut/8nh2HKlLTsfqNEFi50lq8+XdBTdcoU+VD/BAsWuC13sZEBcXFpm/t+LXLwoLPcZ4Zffbqgp5pXXy0LeAxJTJSl9iRo00adCsF1vurbn5jXmxuhZUuQVI8E5LMcTp+uXiwTuQ/OnMEzqdBO46FzZ+BrOO8AXl9S33xzwwbVhAQZYg6HQYMkR5dDmzbe7qfeEmlkg83mbbGy14wH8XzFHsJDaLNm1Yu9tgLkHMzfp+Ztt8kA8xHo2hUkEGJ6k3DjO9RmA43ypl1r7QCuK9418QEuylymw4EDPM1uWLpU5pEAZ87UqDdJ28CmTaRfWGyOlRKksNCYrsth3LjqzXQWxRAWxjGeRNPTaUtvJDb2Smp57ACue/wQ+w40Pj5wxV8ec5axANLSRo7s21ekuBi4+LN5+sXbj7in72yRr792/OX8/QX3O35yHl6/SM1Nm2grvWHr1ivp5XEM4Aru/i1vI7W4NwXwKrpVFiJBQVbru70C5HyybpSa0dGS0ciCu1pi3KX/Czk5OS/mz1UzK0teJg/5+ecaFatuAWnpd74vsmePs3j1PzY8o9qtmzHdXAe9e1dvZn7oePyUEYyDSZNAV1jRy20H0KQmu6FLF0Ete1kAYL2+A5060RaQRYs0k94XqyaZMuf8Pf68AxjLNAZNTtZM5iJLltRoV1z1gD0FSxPvxLIDOHfu7In6GERHU0fP8ZJPKhoSokNJQJKT+atMh4QEs6PeAW3b/qLeCjh6lEjuhi++MB7WxVBYqC0kDSoq6kJXn1JqXovY7d4OtCw7gGvLdpZeh/h+584s1wchOlqOGh8h6elM0t7QujWHdDGAHKrWwMZ9EB3NSYDoaG0q++H22zVR98DSpVIkXeHwYV/rzV8lHc6dY53WXtYv0C7Gl6AKmuBR+6n6EVJeXr3cchDo2qv3NaM0E8LDjbbyAWRkcEAnQevWbg/4WUyIiGCKIZCRoaskwhM5bvd73P4j1DS05fbOx7nq5Ut452LlVpEYIw9qpomtPwVUJWl8YLMLB/p/cg0MHqzTmAzNm9da4E5dCy1ayGC9GQYP9rX+xkDZBj/+SJE8D7t2uS2g6jk+5+H14Wrecsva5vkPqdmjh6zWFjBhgtvy3mUXfPll9RyAS1+rcpzZOV8Zzun5+jYPQYJHy9xl5WfqZEhIcCZrfDUOFw8SCqtWudKyVnFu4KRKLrJ1q7mMB5AtW2jOE/Db31qW4+x3tCTCxImXqmbdAarSsr6yl7yhZRATIx/yAvgg7RsqxWCzmc+ShcbE+GocrvHcryfg5EluJRZmz/Z4RXCXPBbDjh1XOgfgxHIwd0E+3gfbPvqS9ISQEHawsPbSLsPL5mQkJAQk06f9VOFyBACWLDEn6vsQGiqRtlBo3pwpmg3WN25qyO+jR6Gy0uwlm+DUKbXrCXTXrpH9U3qKcemJd1Jv8vBSKo9DWZni3ei5Rj8HmYWWlRGKzR9b164YARPHLzfXSmAR/QGMKrvZZ7mpT92b4OJIBN/DoUP0JBq9SJKktvL/Iq9Debn24/+RkhJ/j7e+UG8cQO/VD8A02c8TSF6e1zuo5C3Iy3PsB5imv8dbX6g3DuBSqL38HvLy+Eru/OVWqMeM4wzs3i1rmQ/5+f4eX32j3jmAayUAIDtbinkNPv1U1sgGx07YFbhXngLTlF7cgW7caCjvQnb2hXIDOKk3QWB15F1NhHPngBJ4803drK0gP58tZEP37syTz9FrrnHVn8YgOHJE+5prYNs2SqUP8sMP2s7fI6nf1FsHqI704iv4/nvHX598Atrhgih+BjsBBHnA37o2JOrdLSBA3RJwgEZOwAEaOQ0mBvi1YQaZ10GzZvzNGAy33Was4Tj06KEl7IV27eQL5sKxY9qfZ9DiYmM3KcjGjVrGLCgr85YeAQeoa8KJQjt3Nh5psh2ZOFEPmyMgOFiTiKqqEQWgI9gEv/kNkIzcfbd9CdPgrrukTFehr72mK6UZFBcbb5CGWHg8vgQBB/Ax5oOsQUWMJ+RGJD5ec3UuMnasIxdgnfNZUvkOGTNGDlCIRkU5Tjx98IGnO5yBGMBHaKIMAsOQ/5F+yMCBmqtvwdixXusg1bEyOCb+0Ud1sBR5klUMrABeRgfbukFQEAP0FXT0aHaby5Du3X3WXyZzISGBcn0eIiKMCvsbMG0aYGkLLLACeAlXUNfN/CfMmMFh3058DZwnhl6w/QGGDrXaLLAC1BLZxusQGSmZRjlMn45NRzheD28YBFYATwliDsTGmj/LUsjMpDtlDWninTSgFcCYB2A8oyVocLC9JddDSIh25DhSWclbegP600+1fSy6Uv86QG+HXr3oqRth1CjW6UB/W6Y21GMHcBjcvN18Be3cWe7QCcjQoXZTFyPR0ZzkFIAU4/j+TleaIkeO6Fxpia5dK3NkKrJ3L5huHpK6EMdjlmHwtHkt3HMPW9gI/fv72zreot45gHnEXAJNm8rfZSU6fLicZQxy661c6axgBduhXTvQx5HJk/UPZje0oEAKyETeeYdSyQS73aoe56P5ysfQ0aPZwrd1GtTVEZZjgKBgYyfiiwMVVUvrXGmJduki240w9NlnOasDHRPvId1kJ5KSYq40zsGMGSzmW4iJcV3R1QnXTLDZdLKuQDt1EsyDMGcOh+XqhjTx8h29EevvQlo/Fr5Cv0ErK4GB3jhNq+MdL30Sbr6LDBuG8jiSmMgWvvWqQYo1GNq3V3gdZs5kr1wPFRXmy9IVSkqMs7yKGob+mXKkfXtaUoI0aaI36pPe1KOu0FacgxMnsHis1vIKYKba76jNW7bOLVGzWDugcXFkyT5k/nyCuRcSE+vMQpPYDVddJUcdr2trqbZGYmN5lBa/hs/VyVNyGo4ds1rf8oAlWGKRU6cAy8IBuEVKoGlTYz5dkCFDtCP/gKQk5vv2/H9jRT80r0d/+MFqfcsOYD5kHEFLS43FGnS5W4DzSpcI/Qni4mSZZCLjxunr+ohXXvYMcFmMz2Q7bN9uub7VivvCPv0cOXbMjNJOVYc1L8R5pT/CNmTkSFpKCTJ1qk4LTHydcIMMg1On5NXSAbBjh9Vmbodza6ILQ1VTUszx9n1oXJyRwx6kY0ddI8Nh/Hjn69j+tkej40duhbVrh4/u11wkLc1qM7eDHnuYeRg9cMBoQnN4+mmdyT7o08cx8QH8hf7OuBaWLXO3ndu5gJF7U8LFOHSIZnyMeP+TqAHc5CzvQ1HR8J7J/4HCQnebe5wMModJKTp1Kq9yCior/W2HRkeV3Y0JlKN//KOIiHiQA/HYAUZGpowSY8sWpkkU+mSD3DRp0HzDazB79rDyfivFuPIXQS9Frff0VFVVRdasK/geXnqJk+xyfKgwgC+QT0iGpUvTVvaziaSn11qetxXM2VowSHXGDGL1Wpg3j3XcV5svYDR6nLfYqit++MF+H4k895y3xPvsGxk5N+ZHqnbvLkd4D7KzdQkV0KtX3Vit4SMTuQo2b5YKXkUzMmq71F+yn7oaUI6uV9U+fXjJuBvGjJHlmgQDBugsfg+tWtWVHvWOqg0cPtdv4OOPJVPvhOXLh5X02wwbNnga3FnFb1/5fuXlL7aqGRTUalpZFtx8s9mBj5AbbiCVBRAby0GZDJGRfKYzoUULWvGe4x8mNAycaVlXdi5GJ6LHj+vvjEVw9Kg+R3f46qvTb7fsBtu2jRt/Sw8xLrLDGiBAgAABAgQIECCAt/kvM0G98R+QJHEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDktMDFUMTA6MjY6MzkrMDA6MDCBjcn+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA5LTAxVDEwOjI2OjM5KzAwOjAw8NBxQgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMi0wOS0wMVQxMDoyNjozOSswMDowMKfFUJ0AAAAASUVORK5CYII=",iL=()=>{const[t,e]=A.useState(""),[r,i]=A.useState(!1),s=ac(),o=async a=>{i(!0),a.preventDefault();const l=a.target[0].value,u=a.target[1].value,c=a.target[2].value,h=a.target[3].files[0];try{const d=await JC(sc,u,c),f=new Date().getTime(),y=D1(Z_,`${l+f}`);await N1(y,h).then(()=>{x1(y).then(async v=>{try{await tk(d.user,{displayName:l,photoURL:v}),await Fd(Ct(ft,"users",d.user.uid),{uid:d.user.uid,displayName:l,email:u,photoURL:v}),await Fd(Ct(ft,"userChats",d.user.uid),{}),s("/")}catch(w){console.log(w),e(w.message),i(!1)}})})}catch(d){e(d.message),i(!1)}};return I.jsx("div",{className:"formContainer",children:I.jsxs("div",{className:"formWrapper",children:[I.jsx("span",{className:"logo",children:"Lama Chat"}),I.jsx("span",{className:"title",children:"Register"}),I.jsxs("form",{onSubmit:o,children:[I.jsx("input",{required:!0,type:"text",placeholder:"display name"}),I.jsx("input",{required:!0,type:"email",placeholder:"email"}),I.jsx("input",{required:!0,type:"password",placeholder:"password"}),I.jsx("input",{required:!0,style:{display:"none"},type:"file",id:"file"}),I.jsxs("label",{htmlFor:"file",children:[I.jsx("img",{src:rL,alt:""}),I.jsx("span",{children:"Add an avatar"})]}),I.jsx("button",{disabled:r,children:"Sign up"}),r&&"...",t&&I.jsx("span",{children:t})]}),I.jsxs("p",{children:["You do have an account? ",I.jsx(aS,{to:"/login",children:"Login"})]})]})})};function sL(){const{currentUser:t}=A.useContext(cr),e=({children:r})=>t?r:I.jsx(GO,{to:"/login"});return I.jsx(JO,{children:I.jsx(qO,{children:I.jsxs(Os,{path:"/",children:[I.jsx(Os,{index:!0,element:I.jsx(e,{children:I.jsx(iO,{})})}),I.jsx(Os,{path:"login",element:I.jsx(nL,{})}),I.jsx(Os,{path:"register",element:I.jsx(iL,{})})]})})})}ch.createRoot(document.getElementById("root")).render(I.jsx($P,{children:I.jsx(VP,{children:I.jsx(TS.StrictMode,{children:I.jsx(sL,{})})})}));
