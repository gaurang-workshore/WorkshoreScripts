// finsweet-modal script with custom function
// input counter script
"use strict";let openModalsCount=0;const handleModalBackground=a=>{const b=document.querySelector("[wio-type=\"modal-bg\"]");b&&(!b.style.transition&&(b.style.transition="opacity 0.3s ease-in-out"),a?(openModalsCount++,b.style.display="block",b.offsetHeight,b.style.opacity="1"):(openModalsCount--,0>=openModalsCount&&(openModalsCount=0,b.style.opacity="0",setTimeout(()=>{0===openModalsCount&&(b.style.display="none")},300))))};(()=>{function e(a,b,c,d){return a?(a.addEventListener(b,c,d),()=>a.removeEventListener(b,c,d)):m}function a(a,b,c){var d;let e=window.fsAttributes[a];return e.destroy=c||m,null==(d=e.resolve)||d.call(e,b),b}var c=Object.defineProperty,g=(a,b,d)=>b in a?c(a,b,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[b]=d,h="fs-attributes",d="modal",k="support",i=async(...a)=>{var b;let c=[];for(let d of a){let a=await(null==(b=window.fsAttributes[d])?void 0:b.loading);c.push(a)}return c},l=class{static activateAlerts(){this.alertsActivated=!0}static alert(a,b){if(this.alertsActivated&&window.alert(a),"error"===b)throw new Error(a)}};((a,b,c)=>(g(a,"symbol"==typeof b?b:b+"",c),c))(l,"alertsActivated",!1);var m=()=>{},b=(a,b)=>!!a&&b.includes(a),n=a=>null!=a,v=a=>"string"==typeof a,p=a=>{let b=a.split("-"),c=parseInt(b[b.length-1]);if(!isNaN(c))return c},u=a=>Object.keys(a),s=a=>!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length),r=(a,b="1",c="iife")=>{let d=`${a}${"esm"===c?".esm":""}.js`;return`https://cdn.jsdelivr.net/npm/@finsweet/attributes-${a}@${b}/${d}`},o=r("animation","1","esm"),x=async()=>{let{fsAttributes:a}=window;a.animation||(a.animation={});let{animation:b}=a;if(b.import)return b.import;try{return b.import=import(o),b.import}catch(a){return void l.alert(`${a}`,"error")}},w=async()=>{var a;let{fsAttributes:b,location:c}=window,{host:d,searchParams:e}=new URL(c.href);return!!(d.includes("webflow.io")&&e.has(`${h}-${k}`))&&(null==(a=b.import)?void 0:a.call(b,k,"1"))},t=a=>b=>`${a}${b?`-${b}`:""}`,z=b=>{let c=(d,e,f)=>{let g,h=b[d],{key:a,values:c}=h;if(!e)return`[${a}]`;let i=null==c?void 0:c[e];g=v(i)?i:i(f&&"instanceIndex"in f?f.instanceIndex:void 0);let j=f&&"caseInsensitive"in f&&f.caseInsensitive?"i":"";if(!(null!=f&&f.operator))return`[${a}="${g}"${j}]`;switch(f.operator){case"prefixed":return`[${a}^="${g}"${j}]`;case"suffixed":return`[${a}$="${g}"${j}]`;case"contains":return`[${a}*="${g}"${j}]`;}};return[c,function(b,d){let e=c("element",b,d),f=(null==d?void 0:d.scope)||document;return null!=d&&d.all?[...f.querySelectorAll(e)]:f.querySelector(e)},(a,c)=>{let d=b[c];return d?a.getAttribute(d.key):null}]},A={preventLoad:{key:`${h}-preventload`},debugMode:{key:`${h}-debug`},src:{key:"src",values:{finsweet:"@finsweet/attributes"}},dev:{key:`${h}-dev`}},[B,D]=z(A),E=a=>{let{currentScript:b}=document,c={};if(!b)return{attributes:c,preventsLoad:!1};let d={preventsLoad:v(b.getAttribute(A.preventLoad.key)),attributes:c};for(let c in a){let e=b.getAttribute(a[c]);d.attributes[c]=e}return d},I=()=>{let a=K();if(window.fsAttributes&&!Array.isArray(window.fsAttributes))return void L(window.fsAttributes,a);let b=J(a);L(b,a),F(b),window.fsAttributes=b,window.FsAttributes=window.fsAttributes,w()},J=a=>{let b={cms:{},push(...a){var b,c;for(let[d,e]of a)null==(c=null==(b=this[d])?void 0:b.loading)||c.then(e)},async import(c,a){let d=b[c];return d||new Promise(d=>{let e=document.createElement("script");e.src=r(c,a),e.async=!0,e.onload=()=>{let[e]=L(b,[c]);d(e)},document.head.append(e)})},destroy(){var b,c;for(let d of a)null==(c=null==(b=window.fsAttributes[d])?void 0:b.destroy)||c.call(b)}};return b},K=()=>{let a=B("src","finsweet",{operator:"contains"}),b=B("dev");return[...document.querySelectorAll(`script${a}, script${b}`)].reduce((b,c)=>{var d;let e=c.getAttribute(A.dev.key)||(null==(d=c.src.match(/[\w-. ]+(?=(\.js)$)/))?void 0:d[0]);return e&&!b.includes(e)&&b.push(e),b},[])},L=(a,b)=>b.map(b=>{let c=a[b];return c||(a[b]={},c=a[b],c.loading=new Promise(a=>{c.resolve=b=>{a(b),delete c.resolve}}),c)}),F=a=>{let b=Array.isArray(window.fsAttributes)?window.fsAttributes:[];a.push(...b)},M=()=>{var a,b;return null==(b=(a=window.fsAttributes).import)?void 0:b.call(a,"a11y","1")},N=(a=21)=>crypto.getRandomValues(new Uint8Array(a)).reduce((a,b)=>(b&=63,a+=36>b?b.toString(36):62>b?(b-26).toString(36).toUpperCase():62<b?"-":"_",a),""),O=a=>{if(!a.id||document.getElementById(a.id)!==a){let b=N();return a.id=b,b}return a.id},H=(a,b)=>{let c=a.getAttribute(b);return c?p(c):void 0},P="role",j="aria-roledescription",q=(a,b,c)=>{let d=O(a),e=s(a);a.setAttribute(P,"dialog"),a.setAttribute("aria-modal","true");for(let f of[...b,...c]){if(f.hasAttribute("aria-hidden"))continue;O(f);let a=b.includes(f)?"open":"close";f.setAttribute("tabindex","0"),f.setAttribute(P,"button"),f.setAttribute("aria-controls",d),f.setAttribute("aria-haspopup","dialog"),f.setAttribute("aria-expanded",e+""),f.hasAttribute(j)||f.setAttribute(j,`${a}-modal-trigger`)}},Q=`fs-${d}`,f={element:{key:`${Q}-element`,values:{modal:t("modal"),open:t("open"),close:t("close")}},animation:{key:`${Q}-${"animation"}`},easing:{key:`${Q}-${"easing"}`},duration:{key:`${Q}-${"duration"}`},display:{key:`${Q}-${"display"}`}},[G,R,S]=z(f),y=["block","inline","inline-block","flex","inline-flex","grid","inline-grid","none","contents"],T=(d,{animations:f,easings:e})=>{let g=S(d,"animation"),h=b(g,u(f))?f[g]:f.fade,i=S(d,"duration"),j=S(d,"easing"),k=S(d,"display"),a=b(j,e)?j:void 0,c=i?parseFloat(i)/1e3:void 0,m=b(k,y)?k:void 0;return{actions:h,duration:c,easing:a,display:m}};const C=(b,d,f,g,h)=>{let{parentElement:i}=b;if(!i)return;let{actions:j,duration:k,easing:a,display:c}=g,n=U(b,h),l=new Comment(`${Q}-anchor`);i.insertBefore(l,b);let m,o=!1;const p=d.map(d=>e(d,"click",async d=>{d.preventDefault();o||m||(o=!0,handleModalBackground(!0),await Promise.all([j.animateIn(b,{duration:k,easing:a,display:c||"flex",target:document.body}),Promise.all(n.map(([b,{actions:c,duration:d,easing:e,display:f}])=>c.animateIn(b,{display:f,duration:d||k,easing:e||a})))]),o=!1,m=!0)})),q=f.map(c=>e(c,"click",async c=>{c.preventDefault();o||!1===m||(o=!0,handleModalBackground(!1),await Promise.all([j.animateOut(b,{duration:k,easing:a,target:i,insertAfter:l}),Promise.all(n.map(([b,{actions:c,duration:d,easing:e}])=>c.animateOut(b,{duration:d||k,easing:e||a})))]),i.insertBefore(b,l),o=!1,m=!1)}));return()=>{for(let a of p)a();for(let a of q)a()}},U=(a,b)=>{let c=["animation","duration","easing","display"].map(a=>G(a)).join(",");return[...a.querySelectorAll(c)].map(c=>{let d=T(c,b);return[c,d]})};var V=(a,b)=>{let{parentElement:c}=a;if(c){let c=H(a,f.element.key),d=R("open",{instanceIndex:c,all:!0}),e=R("close",{instanceIndex:c,all:!0});if(d.length||e.length){let c=T(a,b);return q(a,d,e),C(a,d,e,c,b)}}};(({scriptAttributes:b,attributeKey:c,version:d,init:e})=>{var f;I(),(f=window.fsAttributes)[c]||(f[c]={});let{preventsLoad:g,attributes:h}=E(b),i=window.fsAttributes[c];i.version=d,i.init=e,g||(window.Webflow||(window.Webflow=[]),window.Webflow.push(()=>e(h)))})({init:async()=>{await i("cmsattribute");let b=R("modal",{operator:"prefixed",all:!0}),c=await x();if(!c)return a(d,b);let e=b.map(a=>V(a,c)).filter(n);return M(),a(d,b,()=>{for(let a of e)a()})},version:"1.1.3",attributeKey:d}),x()})();var X=Object.defineProperty,_=(a,b,c)=>b in a?X(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,D=(a,b,c)=>_(a,"symbol"==typeof b?b:b+"",c);(function(){function a(a){const b={};return a.integrity&&(b.integrity=a.integrity),a.referrerPolicy&&(b.referrerPolicy=a.referrerPolicy),b.credentials="use-credentials"===a.crossOrigin?"include":"anonymous"===a.crossOrigin?"omit":"same-origin",b}function b(b){if(!b.ep){b.ep=!0;const c=a(b);fetch(b.href,c)}}const c=document.createElement("link").relList;if(!(c&&c.supports&&c.supports("modulepreload"))){for(const a of document.querySelectorAll("link[rel=\"modulepreload\"]"))b(a);new MutationObserver(a=>{for(const c of a)if("childList"===c.type)for(const a of c.addedNodes)"LINK"===a.tagName&&"modulepreload"===a.rel&&b(a)}).observe(document,{childList:!0,subtree:!0})}})();function h(a,b){return Array.from(a.querySelectorAll(b))}function y(a,b,c){return a.querySelector(`[${b}="${c}"]`)}function c(a,b,c){return Array.from(a.querySelectorAll(`[${b}="${c}"]`))}function p(a,b,c){if(a.style.getPropertyValue(b)!==c)return a.style.setProperty(b,c)}function k(a,b,...c){if(a)for(const d of c)d.setAttribute(a,b)}function P(a,b){a.classList.add(b);const c=a.children;for(let d=0;d<c.length;d++){const a=c[d];P(a,b)}}function F(a,b){a.classList.remove(b);const c=a.children;for(let d=0;d<c.length;d++){const a=c[d];F(a,b)}}async function j(a){return new Promise(b=>{const c=new MutationObserver(a=>{a.forEach(d=>{if("attributes"===d.type&&"disabled"===d.attributeName){const e=d.target;e.hasAttribute("disabled")||"none"===e.style.display||(c.disconnect(),b())}})});c.observe(a.querySelector("[type='submit']"),{attributes:!0,childList:!1,subtree:!1})})}function G(a){const b=new Set(a.map(a=>a.closest("form")).filter(a=>a));for(const d of b){const a=c(d,"if-lib","formbutton");for(const b of a)c(b,"if-lib","formbutton-waiting-state").forEach(a=>{a.setAttribute("data-initial-display",getComputedStyle(a).display),a.style.setProperty("display","none")}),"false"!==b.getAttribute("if-lib-freeze-min-width")&&H(b);window.addEventListener("resize",()=>{for(const b of a)"false"!==b.getAttribute("if-lib-freeze-min-width")&&H(b)}),d.addEventListener("submit",async()=>{const a=h(d,"[if-lib='formbutton'] [if-lib='formbutton-waiting-state']"),b=h(d,"[if-lib='formbutton'] [if-lib='formbutton-normal-state']");b.forEach(a=>a.style.setProperty("display","none")),a.forEach(b=>{let c=b.getAttribute("if-lib-display");c||b.getAttribute("data-initial-display"),c=c&&"none"!==c?c:"block",b.style.setProperty("display",c)}),await j(d.parentElement),b.forEach(b=>{let c=b.getAttribute("if-lib-display");c||b.getAttribute("data-initial-display"),c=c&&"none"!==c?c:"block",b.style.setProperty("display",c)}),a.forEach(a=>{a.style.setProperty("display","none")})})}}function H(a){a.style.removeProperty("min-width");const b=a.getBoundingClientRect().width;p(a,"min-width",`${b}px`)}function v(a){const b=a.elements.input.value;a.elements.input.stepUp();const c=a.elements.input.value;if(b!==c){const b=new Event("change",{bubbles:!0,cancelable:!0});a.elements.input.dispatchEvent(b)}}function A(a){const b=a.elements.input.value;a.elements.input.stepDown();const c=a.elements.input.value;if(b!==c){const b=new Event("change",{bubbles:!0,cancelable:!0});a.elements.input.dispatchEvent(b)}}function J(a){const b=a.querySelector("input[type=number]"),c=b.getAttribute("min"),d=b.getAttribute("max"),e=b.getAttribute("step");e||b.setAttribute("step","1");const f={info:{stepSize:null==e?1:+e,minValue:null==c?null:+c,maxValue:null==d?null:+d,correctOnBlur:"true"===a.getAttribute("if-lib-correct-on-blur")},elements:{plusButton:y(a,"if-lib","inputcounter-plus"),minusButton:y(a,"if-lib","inputcounter-minus"),input:b,wrapper:a}};Q(f),Y(f),Z(f),ee(f)}function Q(a){const{plusButton:b,minusButton:c,input:d}=a.elements;d.addEventListener("keydown",b=>{"Home"!==b.code&&"End"!==b.code||(b.preventDefault(),"Home"===b.code&&null!=a.info.minValue?(d.value=a.info.minValue+"",A(a)):"End"===b.code&&null!=a.info.maxValue&&(d.value=a.info.maxValue+"",v(a)))}),b.addEventListener("keydown",b=>{"Space"!==b.code&&"Enter"!==b.code||(b.preventDefault(),v(a))}),c.addEventListener("keydown",b=>{"Space"!==b.code&&"Enter"!==b.code||(b.preventDefault(),A(a))})}function Y(a){a.elements.plusButton.addEventListener("click",b=>{b.preventDefault(),v(a)}),a.elements.minusButton.addEventListener("click",b=>{b.preventDefault(),A(a)})}function Z(a){const{plusButton:b,minusButton:c,input:d}=a.elements,e=d.getAttribute("data-name")||d.getAttribute("name");k("tabindex","0",b,c),k("role","button",b,c),k("aria-controls",d.id,b,c),b.setAttribute("aria-label",`increase ${e}`),c.setAttribute("aria-label",`decrease ${e}`)}function ee(a){const{input:b}=a.elements;a.info.correctOnBlur&&b.addEventListener("blur",()=>{""!==b.value&&(null!=a.info.minValue&&+b.value<a.info.minValue?v(a):null!=a.info.maxValue&&+b.value>a.info.maxValue&&A(a))})}const M="is-checked";function R(a){const b=a.closest("[if-lib-checked-class]");return b&&b.getAttribute("if-lib-checked-class]")||M}function C(a,b){a.checked?P(a.parentElement,b):F(a.parentElement,b)}function te(a){h(a,"form  input[type='radio']").forEach(b=>{const c=R(b),a=b.getAttribute("data-name"),d=h(document.body,`input[type='radio'][data-name='${a}']`);C(b,c);const e=d.filter(c=>b!==c);b.addEventListener("change",()=>{e.forEach(b=>F(b.parentElement,c)),P(b.parentElement,c)})})}function ne(a){h(a,"form input[type='checkbox']").forEach(a=>{const b=R(a);C(a,b),a.addEventListener("change",()=>C(a,b))})}function ie(a,b){const c=Math.round(a/b)*b;return parseFloat(c.toFixed(E(b)))}function N(a,b,c){const d=Math.round((a+c)/b)*b-c,e=Math.max(E(b),E(c));return parseFloat(d.toFixed(e))}function oe(a,b,c){return Math.ceil((a+c)/b)*b-c}function le(a,b,c){return Math.floor((a+c)/b)*b-c}function w(a,b,c){return Math.max(Math.min(a,c),b)}function ue(a,b){return ae(a,b,(a,b)=>a-b)}function ae(a,b,c){const d=c(a,b);return se(d,re(a,b))}function re(...a){const b=a.map(a=>E(a));return Math.max(...b)}function se(a,b){return parseFloat(a.toFixed(b))}function E(a){const b=a.toString();return b.includes(".")?b.split(".")[1].length:0}class d{constructor(a,b){D(this,"from"),D(this,"to"),this.from=a,this.to=b}get length(){return Math.abs(this.to-this.from)}valueAtFraction(a){return this.from+this.length*a}relativePositionOf(a){return(a-this.from)/this.length}clampValue(a){return w(a,this.from,this.to)}clampRange(a){const b=new d(a.from,a.to);return b.from<this.from&&(b.from=this.from),b.to>this.to&&(b.to=this.to),b}}const b=0;function m(a,b,c,d=!0){return 2===a.elements.handles.length&&d&&(c=ce(a,b,c)),c=B(a,c),c=a.range.clampValue(c),b.value=c,ye(a,b,a.range.relativePositionOf(c)),ge(a),fe(a,b,c),c}function B(a,b){return b!==a.range.from&&b!==a.range.to?N(b,a.info.stepSize,a.info.stepSizeOffset):b}function ce(a,b,c){if(a.elements.handles[0]===b){const b=a.elements.handles[1].value;c=Math.min(b-a.info.stepSize,c)}else{const b=a.elements.handles[0].value;c=Math.max(b+a.info.stepSize,c)}return c}function f(a,b,c){let d=c+"";if("text"===b.input.type&&a.info.formatInput&&(d=T(a,c)),b.input.value!==d){b.input.value=d;const a=new Event("change",{bubbles:!0,cancelable:!0});b.input.dispatchEvent(a)}}function fe(a,b,c){const d=T(a,c),{handles:e,valueDisplay:f}=a.elements;if(1===e.length)return void f.all.forEach(a=>a.textContent=d);const g=I(a,b);(g?f.lowValue:f.highValue).forEach(a=>a.textContent=d),g&&1===f.value.length?f.value[0].textContent=d:g||2!==f.value.length?g&&2===f.value.length&&(f.value[0].textContent=d):f.value[1].textContent=d}function V(a,b,c){$(b,c),be(a,b,c)}function de(a){for(const b of a.elements.handles)b.element.setAttribute("tabindex","0"),b.element.setAttribute("role","slider"),he(b,a.range.from),pe(b,a.range.to),$(b,b.value),me(b);for(const b of a.elements.handles)V(a,b,b.value)}function me(a){const b=a.input.getAttribute("data-name")||a.input.getAttribute("name")||"Slider value";a.element.setAttribute("aria-label",b)}function $(a,b){a.element.setAttribute("aria-valuenow",b+"")}function he(a,b){a.element.setAttribute("aria-valuemin",b+"")}function pe(a,b){a.element.setAttribute("aria-valuemax",b+"")}function be(a,b,c){1>=a.elements.handles.length||(I(a,b)?a.elements.handles[1].element.setAttribute("aria-valuemin",B(a,c+a.info.stepSize)+""):a.elements.handles[0].element.setAttribute("aria-valuemax",B(a,c-a.info.stepSize)+""))}function T(a,b){return a.info.formatFunc?window[a.info.formatFunc](b):a.info.numberDisplayFormat?b.toLocaleString(a.info.numberDisplayFormat):b+""}function I(a,b){return a.elements.handles[0]===b}function ge(a){if(1===a.elements.handles.length){const b=L(a,a.elements.handles[0].value);O(a,new d(0,b))}else{let b=L(a,+a.elements.handles[0].value),c=L(a,+a.elements.handles[1].value);b>c&&([b,c]=[c,b]),O(a,new d(b,c))}}function ye(a,c,d){d=w(d,0,1);const e=`calc(${100*d}% - ${d*a.info.handleWidth}px + ${b*(2*d-1)}px)`;p(c.element,"left",e)}function O(a,c){const{handleWidth:d}=a.info,e=`calc(${100*c.from}% - ${d*(c.from-.5)}px + ${b*(2*c.from-1)}px)`,f=`calc(${100-100*c.to}% + ${d*(c.to-.5)}px - ${b*(2*c.to-1)}px)`;p(a.elements.fill,"left",1===a.elements.handles.length?"0":e),p(a.elements.fill,"right",f)}function L(a,b){const c=a.range.relativePositionOf(b);return w(c,0,1)}function S(a,b){let c=ve(a).relativePositionOf(b);c=w(c,0,1);let d=a.range.valueAtFraction(c);return a.range.clampValue(d)}function ve(a){return new d(-0,a.info.trackRect.width+b-a.info.handleWidth)}function U(a,b){return a.reduce((a,c)=>Math.abs(b-+c.value)<Math.abs(b-+a.value)?c:a,a[0])}function z(a,b){return N(b,a.info.stepSize,a.info.stepSizeOffset)===b}function Ae(a){if(1===a.elements.handles.length){const b=getComputedStyle(a.elements.fill).borderTopLeftRadius,c=getComputedStyle(a.elements.fill).borderBottomLeftRadius;a.elements.fill.style.setProperty("border-top-left-radius",b),a.elements.fill.style.setProperty("border-top-right-radius","0"),a.elements.fill.style.setProperty("border-bottom-left-radius",c),a.elements.fill.style.setProperty("border-bottom-right-radius","0")}}function Ee(a){return"ArrowRight"===a||"ArrowUp"===a||"PageUp"===a?1:-1}function we(a){return"PageUp"===a||"PageDown"===a?10:1}function W(a,b){return a.endsWith(b)?a.slice(0,-b.length):a}function Ve(a,b){return function(c){const d=c.clientX-a.info.trackRect.left;let e=S(a,d-a.info.handleWidth/2);m(a,b,e),"move"===a.info.updateBehavior&&f(a,b,b.value)}}function Se(a,b){return function(c){const d=c.touches[0].clientX-a.info.trackRect.left;let e=S(a,d-a.info.handleWidth/2);m(a,b,e),"move"===a.info.updateBehavior&&f(a,b,b.value)}}function xe(a){const b=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","PageUp","PageDown","Home","End"];return function(c){if(!b.includes(c.key))return;c.preventDefault();const d=a.elements.handles.find(a=>a.element===c.target);if("Home"===c.key||"End"===c.key){const b="Home"===c.key?a.range.from:a.range.to;return m(a,d,b),void f(a,d,d.value)}const e=+d.value,g=Ee(c.key),h=we(c.key);let i=a.info.stepSize*g*h+e;e!==a.range.from||1!==g||z(a,e)?e===a.range.to&&-1===g&&!z(a,e)&&(i=oe(e,a.info.stepSize,a.info.stepSizeOffset)-a.info.stepSize):i=le(e,a.info.stepSize,a.info.stepSizeOffset)+a.info.stepSize,m(a,d,i),f(a,d,d.value),V(a,d,d.value)}}function De(a){function b(b,d){b.preventDefault();const e=Ve(a,d);e(b),d.element.focus(),document.addEventListener("mousemove",e),document.addEventListener("mouseup",()=>{"release"===a.info.updateBehavior&&f(a,d,d.value),V(a,d,d.value),c(e)},{once:!0})}function c(a){document.removeEventListener("mousemove",a)}return function(c){const d=c.clientX-a.info.trackRect.left,e=S(a,d-a.info.handleWidth/2),f=U(a.elements.handles,e);b(c,f)}}function ke(a){function b(b,d){const e=Se(a,d);e(b),d.element.focus(),document.addEventListener("touchmove",e,{passive:!0}),document.addEventListener("touchend",()=>{"release"===a.info.updateBehavior&&f(a,d,d.value),V(a,d,d.value),c(e)},{once:!0})}function c(a){document.removeEventListener("touchmove",a)}return function(c){c.preventDefault();const d=c.touches[0].clientX-a.info.trackRect.left,e=S(a,d-a.info.handleWidth/2),f=U(a.elements.handles,e);b(c,f)}}function Le(a){let b=null;return function(){b&&clearTimeout(b),b=setTimeout(()=>{a.info.trackRect=a.elements.track.getBoundingClientRect();const c=+W(getComputedStyle(a.elements.handles[0].element).width,"px")||0;if(c!==a.info.handleWidth){a.info.handleWidth=c;for(const b of a.elements.handles)m(a,b,b.value);b=null}},150)}}function Ce(a,b,c=","){var d;return(null==(d=Be(a,b,c))?void 0:d.map(a=>+a))??null}function Be(a,b,c=","){var d;return(null==(d=a.getAttribute(b))?void 0:d.trim().replace(/\s+/g,"").split(c).filter(a=>a))??null}function Pe(b){const c=Fe(b),e=+b.getAttribute("if-lib-stepsize")||1,g=+b.getAttribute("if-lib-min")||0,h=+b.getAttribute("if-lib-max")||10,i=new d(g,h),j=Me(b,c.handles.length,i),k=b.getAttribute("if-lib-format-function"),a={handleWidth:+W(getComputedStyle(c.handles[0].element).width,"px")||0,trackRect:c.track.getBoundingClientRect(),stepSize:e,stepSizeOffset:ue(ie(j[0],e),j[0]),updateBehavior:b.getAttribute("if-lib-update")||"release",numberDisplayFormat:k?null:He(b),formatFunc:k,formatInput:"true"===b.getAttribute("if-lib-format-input")},l={elements:c,info:a,range:i};return l.elements.handles.forEach((a,b)=>{p(a.element,"position","absolute");const c=m(l,a,j[b],!1);f(l,a,c)}),Ae(l),de(l),ze(l),Re(l),Ne(l),$e(l),l}function Fe(a){const b=c(a,"if-lib","rangeslider-value-display");return{wrapper:a,handles:Oe(a),track:y(a,"if-lib","rangeslider-track"),fill:y(a,"if-lib","rangeslider-track-fill"),valueDisplay:{all:b,value:b.filter(a=>!a.hasAttribute("if-lib-target")),lowValue:b.filter(a=>"low-value"===a.getAttribute("if-lib-target")),highValue:b.filter(a=>"high-value"===a.getAttribute("if-lib-target"))}}}function He(a){let b=a.getAttribute("if-lib-format-number");return"true"===b?b=document.documentElement.lang||navigator.language:(!b||"false"===b)&&(b=null),b}function Me(a,b,c){const d=c.from,e=c.to;let f=Ce(a,"if-lib-initialvalue")??[];1===b&&1!==f.length?f=[e]:2==b&&2!==f.length&&(f=[d,e]);for(let g=0;g<f.length;g++)f[g]=Math.min(e,f[g]),f[g]=Math.max(d,f[g]);return f}function Oe(a){const b=c(a,"if-lib","rangeslider-handle"),d=c(a,"if-lib","rangeslider-value-input"),e=[];for(let c=0;c<b.length;c++)e.push({element:b[c],input:d[c],value:+d[c].value});return e}function ze(a){for(const b of a.elements.handles)b.element.addEventListener("keydown",xe(a))}function Re(a){a.elements.track.addEventListener("mousedown",De(a)),a.elements.track.addEventListener("touchstart",ke(a))}function Ne(a){const b=Le(a);window.addEventListener("resize",b),"IntersectionObserver"in window&&new IntersectionObserver(b,{threshold:0}).observe(a.elements.track)}function $e(a){a.elements.track.addEventListener("contextmenu",a=>(a.preventDefault(),!1))}function g(a){return(...b)=>{try{return a(...b)}catch(a){return void console.error("An error occurred:",a)}}}const Te=[...c(document.body,"if-lib","rangeslider-wrapper"),...c(document.body,"if-lib","rangeslider")];Te.forEach(g(a=>Pe(a)));const Ie=c(document.body,"if-lib","formbutton");g(()=>G(Ie))();const Ue=c(document.body,"if-lib","inputcounter");Ue.forEach(g(a=>J(a))),g(()=>te(document.body))(),g(()=>ne(document.body))();
