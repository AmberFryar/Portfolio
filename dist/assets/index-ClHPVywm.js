(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ka(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const oe={},Bt=[],Te=()=>{},gl=()=>!1,hr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Aa=e=>e.startsWith("onUpdate:"),me=Object.assign,Sa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vl=Object.prototype.hasOwnProperty,Y=(e,t)=>vl.call(e,t),U=Array.isArray,ln=e=>gr(e)==="[object Map]",bl=e=>gr(e)==="[object Set]",W=e=>typeof e=="function",he=e=>typeof e=="string",pr=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Mo=e=>(le(e)||W(e))&&W(e.then)&&W(e.catch),yl=Object.prototype.toString,gr=e=>yl.call(e),_l=e=>gr(e).slice(8,-1),wl=e=>gr(e)==="[object Object]",Pa=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xn=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xl=/-(\w)/g,Ye=vr(e=>e.replace(xl,(t,n)=>n?n.toUpperCase():"")),El=/\B([A-Z])/g,Jt=vr(e=>e.replace(El,"-$1").toLowerCase()),br=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Nr=vr(e=>e?`on${br(e)}`:""),vt=(e,t)=>!Object.is(e,t),Lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},rr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},kl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let di;const No=()=>di||(di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oa(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?Ol(r):Oa(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(he(e)||le(e))return e}const Al=/;(?![^(]*\))/g,Sl=/:([^]+)/,Pl=/\/\*[^]*?\*\//g;function Ol(e){const t={};return e.replace(Pl,"").split(Al).forEach(n=>{if(n){const r=n.split(Sl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function yr(e){let t="";if(he(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=yr(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Il=ka(Cl);function Lo(e){return!!e||e===""}/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class Rl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Tl(e,t=Ne){t&&t.active&&t.effects.push(e)}function Ml(){return Ne}let Pt;class Ca{constructor(t,n,r,a){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Tl(this,a)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Tt();for(const t of this.deps)if(t.computed&&(Nl(t.computed),this._dirtyLevel>=2))break;Mt(),this._queryings--}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=pt,n=Pt;try{return pt=!0,Pt=this,this._runnings++,mi(this),this.fn()}finally{hi(this),this._runnings--,Pt=n,pt=t}}stop(){var t;this.active&&(mi(this),hi(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Nl(e){return e.value}function mi(e){e._trackId++,e._depsLength=0}function hi(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)$o(e.deps[t],e);e.deps.length=e._depsLength}}function $o(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let pt=!0,qr=0;const jo=[];function Tt(){jo.push(pt),pt=!1}function Mt(){const e=jo.pop();pt=e===void 0?!0:e}function Ia(){qr++}function Ra(){for(qr--;!qr&&Xr.length;)Xr.shift()()}function Fo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&$o(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Xr=[];function zo(e,t,n){Ia();for(const r of e.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<t&&(!r._runnings||t!==2)){const a=r._dirtyLevel;r._dirtyLevel=t,a===0&&(!r._queryings||t!==2)&&(r.trigger(),r.scheduler&&Xr.push(r.scheduler))}Ra()}const Do=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Qr=new WeakMap,Ot=Symbol(""),Jr=Symbol("");function Ae(e,t,n){if(pt&&Pt){let r=Qr.get(e);r||Qr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Do(()=>r.delete(n))),Fo(Pt,a)}}function Qe(e,t,n,r,a,i){const o=Qr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&U(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||!pr(c)&&c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":U(e)?Pa(n)&&s.push(o.get("length")):(s.push(o.get(Ot)),ln(e)&&s.push(o.get(Jr)));break;case"delete":U(e)||(s.push(o.get(Ot)),ln(e)&&s.push(o.get(Jr)));break;case"set":ln(e)&&s.push(o.get(Ot));break}Ia();for(const l of s)l&&zo(l,3);Ra()}const Ll=ka("__proto__,__v_isRef,__isVue"),Ho=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pr)),pi=$l();function $l(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt(),Ia();const r=q(this)[t].apply(this,n);return Ra(),Mt(),r}}),e}function jl(e){const t=q(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Bo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Xl:Ko:i?Wo:Vo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=U(t);if(!a){if(o&&Y(pi,n))return Reflect.get(pi,n,r);if(n==="hasOwnProperty")return jl}const s=Reflect.get(t,n,r);return(pr(n)?Ho.has(n):Ll(n))||(a||Ae(t,"get",n),i)?s:Se(s)?o&&Pa(n)?s:s.value:le(s)?a?Go(s):wr(s):s}}class Uo extends Bo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(!this._shallow){const l=Yt(i);if(!ar(r)&&!Yt(r)&&(i=q(i),r=q(r)),!U(t)&&Se(i)&&!Se(r))return l?!1:(i.value=r,!0)}const o=U(t)&&Pa(n)?Number(n)<t.length:Y(t,n),s=Reflect.set(t,n,r,a);return t===q(a)&&(o?vt(r,i)&&Qe(t,"set",n,r):Qe(t,"add",n,r)),s}deleteProperty(t,n){const r=Y(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Qe(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!pr(n)||!Ho.has(n))&&Ae(t,"has",n),r}ownKeys(t){return Ae(t,"iterate",U(t)?"length":Ot),Reflect.ownKeys(t)}}class Fl extends Bo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zl=new Uo,Dl=new Fl,Hl=new Uo(!0),Ta=e=>e,_r=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=q(e),i=q(t);n||(vt(t,i)&&Ae(a,"get",t),Ae(a,"get",i));const{has:o}=_r(a),s=r?Ta:n?La:vn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function $n(e,t=!1){const n=this.__v_raw,r=q(n),a=q(e);return t||(vt(e,a)&&Ae(r,"has",e),Ae(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function jn(e,t=!1){return e=e.__v_raw,!t&&Ae(q(e),"iterate",Ot),Reflect.get(e,"size",e)}function gi(e){e=q(e);const t=q(this);return _r(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function vi(e,t){t=q(t);const n=q(this),{has:r,get:a}=_r(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?vt(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function bi(e){const t=q(this),{has:n,get:r}=_r(t);let a=n.call(t,e);a||(e=q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Qe(t,"delete",e,void 0),i}function yi(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function Fn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=q(o),l=t?Ta:e?La:vn;return!e&&Ae(s,"iterate",Ot),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,i=q(a),o=ln(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ta:t?La:vn;return!t&&Ae(i,"iterate",l?Jr:Ot),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function lt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bl(){const e={get(i){return Ln(this,i)},get size(){return jn(this)},has:$n,add:gi,set:vi,delete:bi,clear:yi,forEach:Fn(!1,!1)},t={get(i){return Ln(this,i,!1,!0)},get size(){return jn(this)},has:$n,add:gi,set:vi,delete:bi,clear:yi,forEach:Fn(!1,!0)},n={get(i){return Ln(this,i,!0)},get size(){return jn(this,!0)},has(i){return $n.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Fn(!0,!1)},r={get(i){return Ln(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return $n.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),t[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[e,n,t,r]}const[Ul,Vl,Wl,Kl]=Bl();function Ma(e,t){const n=t?e?Kl:Wl:e?Vl:Ul;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const Yl={get:Ma(!1,!1)},Gl={get:Ma(!1,!0)},ql={get:Ma(!0,!1)},Vo=new WeakMap,Wo=new WeakMap,Ko=new WeakMap,Xl=new WeakMap;function Ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ql(_l(e))}function wr(e){return Yt(e)?e:Na(e,!1,zl,Yl,Vo)}function Yo(e){return Na(e,!1,Hl,Gl,Wo)}function Go(e){return Na(e,!0,Dl,ql,Ko)}function Na(e,t,n,r,a){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Jl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ut(e){return Yt(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function ar(e){return!!(e&&e.__v_isShallow)}function qo(e){return Ut(e)||Yt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Xo(e){return rr(e,"__v_skip",!0),e}const vn=e=>le(e)?wr(e):e,La=e=>le(e)?Go(e):e;class Qo{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ca(()=>t(this._value),()=>Zr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=q(this);return Jo(t),(!t._cacheable||t.effect.dirty)&&vt(t._value,t._value=t.effect.run())&&Zr(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Zl(e,t,n=!1){let r,a;const i=W(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new Qo(r,a,i||!a,n)}function Jo(e){pt&&Pt&&(e=q(e),Fo(Pt,e.dep||(e.dep=Do(()=>e.dep=void 0,e instanceof Qo?e:void 0))))}function Zr(e,t=3,n){e=q(e);const r=e.dep;r&&zo(r,t)}function Se(e){return!!(e&&e.__v_isRef===!0)}function ec(e){return Zo(e,!1)}function tc(e){return Zo(e,!0)}function Zo(e,t){return Se(e)?e:new nc(e,t)}class nc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:vn(t)}get value(){return Jo(this),this._value}set value(t){const n=this.__v_isShallow||ar(t)||Yt(t);t=n?t:q(t),vt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:vn(t),Zr(this,3))}}function Ct(e){return Se(e)?e.value:e}const rc={get:(e,t,n)=>Ct(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Se(a)&&!Se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function es(e){return Ut(e)?e:new Proxy(e,rc)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){xr(i,t,n)}return a}function Fe(e,t,n,r){if(W(e)){const i=gt(e,t,n,r);return i&&Mo(i)&&i.catch(o=>{xr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Fe(e[i],t,n,r));return a}function xr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){gt(l,null,10,[e,o,s]);return}}ac(e,n,a,r)}function ac(e,t,n,r=!0){console.error(e)}let bn=!1,ea=!1;const be=[];let We=0;const Vt=[];let ut=null,kt=0;const ts=Promise.resolve();let $a=null;function ns(e){const t=$a||ts;return e?t.then(this?e.bind(this):e):t}function ic(e){let t=We+1,n=be.length;for(;t<n;){const r=t+n>>>1,a=be[r],i=yn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function ja(e){(!be.length||!be.includes(e,bn&&e.allowRecurse?We+1:We))&&(e.id==null?be.push(e):be.splice(ic(e.id),0,e),rs())}function rs(){!bn&&!ea&&(ea=!0,$a=ts.then(is))}function oc(e){const t=be.indexOf(e);t>We&&be.splice(t,1)}function sc(e){U(e)?Vt.push(...e):(!ut||!ut.includes(e,e.allowRecurse?kt+1:kt))&&Vt.push(e),rs()}function _i(e,t,n=bn?We+1:0){for(;n<be.length;n++){const r=be[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;be.splice(n,1),n--,r()}}}function as(e){if(Vt.length){const t=[...new Set(Vt)].sort((n,r)=>yn(n)-yn(r));if(Vt.length=0,ut){ut.push(...t);return}for(ut=t,kt=0;kt<ut.length;kt++)ut[kt]();ut=null,kt=0}}const yn=e=>e.id==null?1/0:e.id,lc=(e,t)=>{const n=yn(e)-yn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function is(e){ea=!1,bn=!0,be.sort(lc);try{for(We=0;We<be.length;We++){const t=be[We];t&&t.active!==!1&&gt(t,null,14)}}finally{We=0,be.length=0,as(),bn=!1,$a=null,(be.length||Vt.length)&&is()}}function cc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||oe;h&&(a=n.map(g=>he(g)?g.trim():g)),m&&(a=n.map(kl))}let s,l=r[s=Nr(t)]||r[s=Nr(Ye(t))];!l&&i&&(l=r[s=Nr(Jt(t))]),l&&Fe(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Fe(f,e,6,a)}}function os(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!W(e)){const l=f=>{const c=os(f,t,!0);c&&(s=!0,me(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(le(e)&&r.set(e,null),null):(U(i)?i.forEach(l=>o[l]=null):me(o,i),le(e)&&r.set(e,o),o)}function Er(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Jt(t))||Y(e,t))}let Le=null,kr=null;function ir(e){const t=Le;return Le=e,kr=e&&e.type.__scopeId||null,t}function On(e){kr=e}function Cn(){kr=null}function Wt(e,t=Le,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ri(-1);const i=ir(t);let o;try{o=e(...a)}finally{ir(i),r._d&&Ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:m,data:h,setupState:g,ctx:S,inheritAttrs:I}=e;let $,y;const w=ir(e);try{if(n.shapeFlag&4){const z=a||r,V=z;$=Ve(c.call(V,z,m,i,g,h,S)),y=l}else{const z=t;$=Ve(z.length>1?z(i,{attrs:l,slots:s,emit:f}):z(i,null)),y=t.props?l:fc(l)}}catch(z){dn.length=0,xr(z,e,1),$=G(_n)}let C=$;if(y&&I!==!1){const z=Object.keys(y),{shapeFlag:V}=C;z.length&&V&7&&(o&&z.some(Aa)&&(y=uc(y,o)),C=Gt(C,y))}return n.dirs&&(C=Gt(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),$=C,ir(w),$}const fc=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},uc=(e,t)=>{const n={};for(const r in e)(!Aa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!Er(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?wi(r,o,f):!0:!!o;return!1}function wi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Er(n,i))return!0}return!1}function mc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const ss="components";function cn(e,t){return pc(ss,e,!0,t)||e}const hc=Symbol.for("v-ndc");function pc(e,t,n=!0,r=!1){const a=Le||ye;if(a){const i=a.type;if(e===ss){const s=ff(i,!1);if(s&&(s===t||s===Ye(t)||s===br(Ye(t))))return i}const o=xi(a[e]||i[e],t)||xi(a.appContext[e],t);return!o&&r?i:o}}function xi(e,t){return e&&(e[t]||e[Ye(t)]||e[br(Ye(t))])}const gc=e=>e.__isSuspense;function vc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):sc(e)}const bc=Symbol.for("v-scx"),yc=()=>Je(bc),Dn={};function fn(e,t,n){return ls(e,t,n)}function ls(e,t,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=oe){if(t&&i){const F=t;t=(...te)=>{F(...te),V()}}const l=ye,f=F=>r===!0?F:zt(F,r===!1?1:void 0);let c,m=!1,h=!1;if(Se(e)?(c=()=>e.value,m=ar(e)):Ut(e)?(c=()=>f(e),m=!0):U(e)?(h=!0,m=e.some(F=>Ut(F)||ar(F)),c=()=>e.map(F=>{if(Se(F))return F.value;if(Ut(F))return f(F);if(W(F))return gt(F,l,2)})):W(e)?t?c=()=>gt(e,l,2):c=()=>(g&&g(),Fe(e,l,3,[S])):c=Te,t&&r){const F=c;c=()=>zt(F())}let g,S=F=>{g=C.onStop=()=>{gt(F,l,4),g=C.onStop=void 0}},I;if(Or)if(S=Te,t?n&&Fe(t,l,3,[c(),h?[]:void 0,S]):c(),a==="sync"){const F=yc();I=F.__watcherHandles||(F.__watcherHandles=[])}else return Te;let $=h?new Array(e.length).fill(Dn):Dn;const y=()=>{if(!(!C.active||!C.dirty))if(t){const F=C.run();(r||m||(h?F.some((te,pe)=>vt(te,$[pe])):vt(F,$)))&&(g&&g(),Fe(t,l,3,[F,$===Dn?void 0:h&&$[0]===Dn?[]:$,S]),$=F)}else C.run()};y.allowRecurse=!!t;let w;a==="sync"?w=y:a==="post"?w=()=>ke(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),w=()=>ja(y));const C=new Ca(c,Te,w),z=Ml(),V=()=>{C.stop(),z&&Sa(z.effects,C)};return t?n?y():$=C.run():a==="post"?ke(C.run.bind(C),l&&l.suspense):C.run(),I&&I.push(V),V}function _c(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?cs(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=In(this),s=ls(a,i.bind(r),n);return o(),s}function cs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function zt(e,t,n=0,r){if(!le(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),Se(e))zt(e.value,t,n,r);else if(U(e))for(let a=0;a<e.length;a++)zt(e[a],t,n,r);else if(bl(e)||ln(e))e.forEach(a=>{zt(a,t,n,r)});else if(wl(e))for(const a in e)zt(e[a],t,n,r);return e}function xt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Tt(),Fe(l,n,8,[e.el,s,e,t]),Mt())}}/*! #__NO_SIDE_EFFECTS__ */function Fa(e,t){return W(e)?me({name:e.name},t,{setup:e}):e}const Qn=e=>!!e.type.__asyncLoader,fs=e=>e.type.__isKeepAlive;function wc(e,t){us(e,"a",t)}function xc(e,t){us(e,"da",t)}function us(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)fs(a.parent.vnode)&&Ec(r,t,n,a),a=a.parent}}function Ec(e,t,n,r){const a=Ar(t,e,r,!0);ds(()=>{Sa(r[t],a)},n)}function Ar(e,t,n=ye,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Tt();const s=In(n),l=Fe(t,n,e,o);return s(),Mt(),l});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=ye)=>(!Or||e==="sp")&&Ar(e,(...r)=>t(...r),n),kc=nt("bm"),Ac=nt("m"),Sc=nt("bu"),Pc=nt("u"),Oc=nt("bum"),ds=nt("um"),Cc=nt("sp"),Ic=nt("rtg"),Rc=nt("rtc");function Tc(e,t=ye){Ar("ec",e,t)}const ta=e=>e?As(e)?Ba(e)||e.proxy:ta(e.parent):null,un=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ta(e.parent),$root:e=>ta(e.root),$emit:e=>e.emit,$options:e=>za(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ja(e.update)}),$nextTick:e=>e.n||(e.n=ns.bind(e.proxy)),$watch:e=>_c.bind(e)}),jr=(e,t)=>e!==oe&&!e.__isScriptSetup&&Y(e,t),Mc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(jr(r,t))return o[t]=1,r[t];if(a!==oe&&Y(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,i[t];if(n!==oe&&Y(n,t))return o[t]=4,n[t];na&&(o[t]=0)}}const c=un[t];let m,h;if(c)return t==="$attrs"&&Ae(e,"get",t),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==oe&&Y(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return jr(a,t)?(a[t]=n,!0):r!==oe&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==oe&&Y(e,o)||jr(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(un,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ei(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let na=!0;function Nc(e){const t=za(e),n=e.proxy,r=e.ctx;na=!1,t.beforeCreate&&ki(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:g,updated:S,activated:I,deactivated:$,beforeDestroy:y,beforeUnmount:w,destroyed:C,unmounted:z,render:V,renderTracked:F,renderTriggered:te,errorCaptured:pe,serverPrefetch:_e,expose:Re,inheritAttrs:ot,components:wt,directives:De,filters:tn}=t;if(f&&Lc(f,r,null),o)for(const Z in o){const X=o[Z];W(X)&&(r[Z]=X.bind(n))}if(a){const Z=a.call(n,n);le(Z)&&(e.data=wr(Z))}if(na=!0,i)for(const Z in i){const X=i[Z],Ge=W(X)?X.bind(n,n):W(X.get)?X.get.bind(n,n):Te,st=!W(X)&&W(X.set)?X.set.bind(n):Te,He=de({get:Ge,set:st});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>He.value,set:xe=>He.value=xe})}if(s)for(const Z in s)ms(s[Z],r,n,Z);if(l){const Z=W(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(X=>{Jn(X,Z[X])})}c&&ki(c,e,"c");function fe(Z,X){U(X)?X.forEach(Ge=>Z(Ge.bind(n))):X&&Z(X.bind(n))}if(fe(kc,m),fe(Ac,h),fe(Sc,g),fe(Pc,S),fe(wc,I),fe(xc,$),fe(Tc,pe),fe(Rc,F),fe(Ic,te),fe(Oc,w),fe(ds,z),fe(Cc,_e),U(Re))if(Re.length){const Z=e.exposed||(e.exposed={});Re.forEach(X=>{Object.defineProperty(Z,X,{get:()=>n[X],set:Ge=>n[X]=Ge})})}else e.exposed||(e.exposed={});V&&e.render===Te&&(e.render=V),ot!=null&&(e.inheritAttrs=ot),wt&&(e.components=wt),De&&(e.directives=De)}function Lc(e,t,n=Te){U(e)&&(e=ra(e));for(const r in e){const a=e[r];let i;le(a)?"default"in a?i=Je(a.from||r,a.default,!0):i=Je(a.from||r):i=Je(a),Se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ki(e,t,n){Fe(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ms(e,t,n,r){const a=r.includes(".")?cs(n,r):()=>n[r];if(he(e)){const i=t[e];W(i)&&fn(a,i)}else if(W(e))fn(a,e.bind(n));else if(le(e))if(U(e))e.forEach(i=>ms(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&fn(a,i,e)}}function za(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>or(l,f,o,!0)),or(l,t,o)),le(t)&&i.set(t,l),l}function or(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&or(e,i,n,!0),a&&a.forEach(o=>or(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=$c[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const $c={data:Ai,props:Si,emits:Si,methods:on,computed:on,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:on,directives:on,watch:Fc,provide:Ai,inject:jc};function Ai(e,t){return t?e?function(){return me(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function jc(e,t){return on(ra(e),ra(t))}function ra(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function on(e,t){return e?me(Object.create(null),e,t):t}function Si(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:me(Object.create(null),Ei(e),Ei(t??{})):t}function Fc(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=we(e[r],t[r]);return n}function hs(){return{app:null,config:{isNativeTag:gl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zc=0;function Dc(e,t){return function(r,a=null){W(r)||(r=me({},r)),a!=null&&!le(a)&&(a=null);const i=hs(),o=new WeakSet;let s=!1;const l=i.app={_uid:zc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:df,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&W(f.install)?(o.add(f),f.install(l,...c)):W(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,m){if(!s){const h=G(r,a);return h.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,Ba(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){sr=l;try{return f()}finally{sr=null}}};return l}}let sr=null;function Jn(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function Je(e,t,n=!1){const r=ye||Le;if(r||sr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:sr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&W(t)?t.call(r&&r.proxy):t}}function Hc(e,t,n,r=!1){const a={},i={};rr(i,Pr,1),e.propsDefaults=Object.create(null),ps(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Yo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Bc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=q(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(Er(e.emitsOptions,h))continue;const g=t[h];if(l)if(Y(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const S=Ye(h);a[S]=aa(l,s,S,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{ps(e,t,a,i)&&(f=!0);let c;for(const m in s)(!t||!Y(t,m)&&((c=Jt(m))===m||!Y(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(a[m]=aa(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!Y(t,m))&&(delete i[m],f=!0)}f&&Qe(e,"set","$attrs")}function ps(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Xn(l))continue;const f=t[l];let c;a&&Y(a,c=Ye(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:Er(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=q(n),f=s||oe;for(let c=0;c<i.length;c++){const m=i[c];n[m]=aa(a,l,m,f[m],e,!Y(f,m))}}return o}function aa(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&W(l)){const{propsDefaults:f}=a;if(n in f)r=f[n];else{const c=In(a);r=f[n]=l.call(null,t),c()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Jt(n))&&(r=!0))}return r}function gs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!W(e)){const c=m=>{l=!0;const[h,g]=gs(m,t,!0);me(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return le(e)&&r.set(e,Bt),Bt;if(U(i))for(let c=0;c<i.length;c++){const m=Ye(i[c]);Pi(m)&&(o[m]=oe)}else if(i)for(const c in i){const m=Ye(c);if(Pi(m)){const h=i[c],g=o[m]=U(h)||W(h)?{type:h}:me({},h);if(g){const S=Ii(Boolean,g.type),I=Ii(String,g.type);g[0]=S>-1,g[1]=I<0||S<I,(S>-1||Y(g,"default"))&&s.push(m)}}}const f=[o,s];return le(e)&&r.set(e,f),f}function Pi(e){return e[0]!=="$"}function Oi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ci(e,t){return Oi(e)===Oi(t)}function Ii(e,t){return U(t)?t.findIndex(n=>Ci(n,e)):W(t)&&Ci(t,e)?0:-1}const vs=e=>e[0]==="_"||e==="$stable",Da=e=>U(e)?e.map(Ve):[Ve(e)],Uc=(e,t,n)=>{if(t._n)return t;const r=Wt((...a)=>Da(t(...a)),n);return r._c=!1,r},bs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(vs(a))continue;const i=e[a];if(W(i))t[a]=Uc(a,i,r);else if(i!=null){const o=Da(i);t[a]=()=>o}}},ys=(e,t)=>{const n=Da(t);e.slots.default=()=>n},Vc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),rr(t,"_",n)):bs(t,e.slots={})}else e.slots={},t&&ys(e,t);rr(e.slots,Pr,1)},Wc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=oe;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(me(a,t),!n&&s===1&&delete a._):(i=!t.$stable,bs(t,a)),o=t}else t&&(ys(e,t),o={default:1});if(i)for(const s in a)!vs(s)&&o[s]==null&&delete a[s]};function ia(e,t,n,r,a=!1){if(U(e)){e.forEach((h,g)=>ia(h,t&&(U(t)?t[g]:t),n,r,a));return}if(Qn(r)&&!a)return;const i=r.shapeFlag&4?Ba(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===oe?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(he(f)?(c[f]=null,Y(m,f)&&(m[f]=null)):Se(f)&&(f.value=null)),W(l))gt(l,s,12,[o,c]);else{const h=he(l),g=Se(l);if(h||g){const S=()=>{if(e.f){const I=h?Y(m,l)?m[l]:c[l]:l.value;a?U(I)&&Sa(I,i):U(I)?I.includes(i)||I.push(i):h?(c[l]=[i],Y(m,l)&&(m[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,Y(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(S.id=-1,ke(S,n)):S()}}}const ke=vc;function Kc(e){return Yc(e)}function Yc(e,t){const n=No();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:g=Te,insertStaticContent:S}=e,I=(u,d,p,_=null,v=null,k=null,O=void 0,E=null,A=!!d.dynamicChildren)=>{if(u===d)return;u&&!rn(u,d)&&(_=b(u),xe(u,v,k,!0),u=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:x,ref:M,shapeFlag:D}=d;switch(x){case Sr:$(u,d,p,_);break;case _n:y(u,d,p,_);break;case Zn:u==null&&w(d,p,_,O);break;case ve:wt(u,d,p,_,v,k,O,E,A);break;default:D&1?V(u,d,p,_,v,k,O,E,A):D&6?De(u,d,p,_,v,k,O,E,A):(D&64||D&128)&&x.process(u,d,p,_,v,k,O,E,A,L)}M!=null&&v&&ia(M,u&&u.ref,k,d||u,!d)},$=(u,d,p,_)=>{if(u==null)r(d.el=s(d.children),p,_);else{const v=d.el=u.el;d.children!==u.children&&f(v,d.children)}},y=(u,d,p,_)=>{u==null?r(d.el=l(d.children||""),p,_):d.el=u.el},w=(u,d,p,_)=>{[u.el,u.anchor]=S(u.children,d,p,_,u.el,u.anchor)},C=({el:u,anchor:d},p,_)=>{let v;for(;u&&u!==d;)v=h(u),r(u,p,_),u=v;r(d,p,_)},z=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),a(u),u=p;a(d)},V=(u,d,p,_,v,k,O,E,A)=>{d.type==="svg"?O="svg":d.type==="math"&&(O="mathml"),u==null?F(d,p,_,v,k,O,E,A):_e(u,d,v,k,O,E,A)},F=(u,d,p,_,v,k,O,E)=>{let A,x;const{props:M,shapeFlag:D,transition:j,dirs:B}=u;if(A=u.el=o(u.type,k,M&&M.is,M),D&8?c(A,u.children):D&16&&pe(u.children,A,null,_,v,Fr(u,k),O,E),B&&xt(u,null,_,"created"),te(A,u,u.scopeId,O,_),M){for(const ee in M)ee!=="value"&&!Xn(ee)&&i(A,ee,null,M[ee],k,u.children,_,v,ge);"value"in M&&i(A,"value",null,M.value,k),(x=M.onVnodeBeforeMount)&&Ue(x,_,u)}B&&xt(u,null,_,"beforeMount");const K=Gc(v,j);K&&j.beforeEnter(A),r(A,d,p),((x=M&&M.onVnodeMounted)||K||B)&&ke(()=>{x&&Ue(x,_,u),K&&j.enter(A),B&&xt(u,null,_,"mounted")},v)},te=(u,d,p,_,v)=>{if(p&&g(u,p),_)for(let k=0;k<_.length;k++)g(u,_[k]);if(v){let k=v.subTree;if(d===k){const O=v.vnode;te(u,O,O.scopeId,O.slotScopeIds,v.parent)}}},pe=(u,d,p,_,v,k,O,E,A=0)=>{for(let x=A;x<u.length;x++){const M=u[x]=E?dt(u[x]):Ve(u[x]);I(null,M,d,p,_,v,k,O,E)}},_e=(u,d,p,_,v,k,O)=>{const E=d.el=u.el;let{patchFlag:A,dynamicChildren:x,dirs:M}=d;A|=u.patchFlag&16;const D=u.props||oe,j=d.props||oe;let B;if(p&&Et(p,!1),(B=j.onVnodeBeforeUpdate)&&Ue(B,p,d,u),M&&xt(d,u,p,"beforeUpdate"),p&&Et(p,!0),x?Re(u.dynamicChildren,x,E,p,_,Fr(d,v),k):O||X(u,d,E,null,p,_,Fr(d,v),k,!1),A>0){if(A&16)ot(E,d,D,j,p,_,v);else if(A&2&&D.class!==j.class&&i(E,"class",null,j.class,v),A&4&&i(E,"style",D.style,j.style,v),A&8){const K=d.dynamicProps;for(let ee=0;ee<K.length;ee++){const ie=K[ee],ue=D[ie],Me=j[ie];(Me!==ue||ie==="value")&&i(E,ie,ue,Me,v,u.children,p,_,ge)}}A&1&&u.children!==d.children&&c(E,d.children)}else!O&&x==null&&ot(E,d,D,j,p,_,v);((B=j.onVnodeUpdated)||M)&&ke(()=>{B&&Ue(B,p,d,u),M&&xt(d,u,p,"updated")},_)},Re=(u,d,p,_,v,k,O)=>{for(let E=0;E<d.length;E++){const A=u[E],x=d[E],M=A.el&&(A.type===ve||!rn(A,x)||A.shapeFlag&70)?m(A.el):p;I(A,x,M,null,_,v,k,O,!0)}},ot=(u,d,p,_,v,k,O)=>{if(p!==_){if(p!==oe)for(const E in p)!Xn(E)&&!(E in _)&&i(u,E,p[E],null,O,d.children,v,k,ge);for(const E in _){if(Xn(E))continue;const A=_[E],x=p[E];A!==x&&E!=="value"&&i(u,E,x,A,O,d.children,v,k,ge)}"value"in _&&i(u,"value",p.value,_.value,O)}},wt=(u,d,p,_,v,k,O,E,A)=>{const x=d.el=u?u.el:s(""),M=d.anchor=u?u.anchor:s("");let{patchFlag:D,dynamicChildren:j,slotScopeIds:B}=d;B&&(E=E?E.concat(B):B),u==null?(r(x,p,_),r(M,p,_),pe(d.children||[],p,M,v,k,O,E,A)):D>0&&D&64&&j&&u.dynamicChildren?(Re(u.dynamicChildren,j,p,v,k,O,E),(d.key!=null||v&&d===v.subTree)&&_s(u,d,!0)):X(u,d,p,M,v,k,O,E,A)},De=(u,d,p,_,v,k,O,E,A)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,p,_,O,A):tn(d,p,_,v,k,O,A):Nt(u,d,A)},tn=(u,d,p,_,v,k,O)=>{const E=u.component=af(u,_,v);if(fs(u)&&(E.ctx.renderer=L),of(E),E.asyncDep){if(v&&v.registerDep(E,fe),!u.el){const A=E.subTree=G(_n);y(null,A,d,p)}}else fe(E,u,d,p,v,k,O)},Nt=(u,d,p)=>{const _=d.component=u.component;if(dc(u,d,p))if(_.asyncDep&&!_.asyncResolved){Z(_,d,p);return}else _.next=d,oc(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},fe=(u,d,p,_,v,k,O)=>{const E=()=>{if(u.isMounted){let{next:M,bu:D,u:j,parent:B,vnode:K}=u;{const jt=ws(u);if(jt){M&&(M.el=K.el,Z(u,M,O)),jt.asyncDep.then(()=>{u.isUnmounted||E()});return}}let ee=M,ie;Et(u,!1),M?(M.el=K.el,Z(u,M,O)):M=K,D&&Lr(D),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&Ue(ie,B,M,K),Et(u,!0);const ue=$r(u),Me=u.subTree;u.subTree=ue,I(Me,ue,m(Me.el),b(Me),u,v,k),M.el=ue.el,ee===null&&mc(u,ue.el),j&&ke(j,v),(ie=M.props&&M.props.onVnodeUpdated)&&ke(()=>Ue(ie,B,M,K),v)}else{let M;const{el:D,props:j}=d,{bm:B,m:K,parent:ee}=u,ie=Qn(d);if(Et(u,!1),B&&Lr(B),!ie&&(M=j&&j.onVnodeBeforeMount)&&Ue(M,ee,d),Et(u,!0),D&&ae){const ue=()=>{u.subTree=$r(u),ae(D,u.subTree,u,v,null)};ie?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=$r(u);I(null,ue,p,_,u,v,k),d.el=ue.el}if(K&&ke(K,v),!ie&&(M=j&&j.onVnodeMounted)){const ue=d;ke(()=>Ue(M,ee,ue),v)}(d.shapeFlag&256||ee&&Qn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&ke(u.a,v),u.isMounted=!0,d=p=_=null}},A=u.effect=new Ca(E,Te,()=>ja(x),u.scope),x=u.update=()=>{A.dirty&&A.run()};x.id=u.uid,Et(u,!0),x()},Z=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Bc(u,d.props,_,p),Wc(u,d.children,p),Tt(),_i(u),Mt()},X=(u,d,p,_,v,k,O,E,A=!1)=>{const x=u&&u.children,M=u?u.shapeFlag:0,D=d.children,{patchFlag:j,shapeFlag:B}=d;if(j>0){if(j&128){st(x,D,p,_,v,k,O,E,A);return}else if(j&256){Ge(x,D,p,_,v,k,O,E,A);return}}B&8?(M&16&&ge(x,v,k),D!==x&&c(p,D)):M&16?B&16?st(x,D,p,_,v,k,O,E,A):ge(x,v,k,!0):(M&8&&c(p,""),B&16&&pe(D,p,_,v,k,O,E,A))},Ge=(u,d,p,_,v,k,O,E,A)=>{u=u||Bt,d=d||Bt;const x=u.length,M=d.length,D=Math.min(x,M);let j;for(j=0;j<D;j++){const B=d[j]=A?dt(d[j]):Ve(d[j]);I(u[j],B,p,null,v,k,O,E,A)}x>M?ge(u,v,k,!0,!1,D):pe(d,p,_,v,k,O,E,A,D)},st=(u,d,p,_,v,k,O,E,A)=>{let x=0;const M=d.length;let D=u.length-1,j=M-1;for(;x<=D&&x<=j;){const B=u[x],K=d[x]=A?dt(d[x]):Ve(d[x]);if(rn(B,K))I(B,K,p,null,v,k,O,E,A);else break;x++}for(;x<=D&&x<=j;){const B=u[D],K=d[j]=A?dt(d[j]):Ve(d[j]);if(rn(B,K))I(B,K,p,null,v,k,O,E,A);else break;D--,j--}if(x>D){if(x<=j){const B=j+1,K=B<M?d[B].el:_;for(;x<=j;)I(null,d[x]=A?dt(d[x]):Ve(d[x]),p,K,v,k,O,E,A),x++}}else if(x>j)for(;x<=D;)xe(u[x],v,k,!0),x++;else{const B=x,K=x,ee=new Map;for(x=K;x<=j;x++){const Pe=d[x]=A?dt(d[x]):Ve(d[x]);Pe.key!=null&&ee.set(Pe.key,x)}let ie,ue=0;const Me=j-K+1;let jt=!1,ci=0;const nn=new Array(Me);for(x=0;x<Me;x++)nn[x]=0;for(x=B;x<=D;x++){const Pe=u[x];if(ue>=Me){xe(Pe,v,k,!0);continue}let Be;if(Pe.key!=null)Be=ee.get(Pe.key);else for(ie=K;ie<=j;ie++)if(nn[ie-K]===0&&rn(Pe,d[ie])){Be=ie;break}Be===void 0?xe(Pe,v,k,!0):(nn[Be-K]=x+1,Be>=ci?ci=Be:jt=!0,I(Pe,d[Be],p,null,v,k,O,E,A),ue++)}const fi=jt?qc(nn):Bt;for(ie=fi.length-1,x=Me-1;x>=0;x--){const Pe=K+x,Be=d[Pe],ui=Pe+1<M?d[Pe+1].el:_;nn[x]===0?I(null,Be,p,ui,v,k,O,E,A):jt&&(ie<0||x!==fi[ie]?He(Be,p,ui,2):ie--)}}},He=(u,d,p,_,v=null)=>{const{el:k,type:O,transition:E,children:A,shapeFlag:x}=u;if(x&6){He(u.component.subTree,d,p,_);return}if(x&128){u.suspense.move(d,p,_);return}if(x&64){O.move(u,d,p,L);return}if(O===ve){r(k,d,p);for(let D=0;D<A.length;D++)He(A[D],d,p,_);r(u.anchor,d,p);return}if(O===Zn){C(u,d,p);return}if(_!==2&&x&1&&E)if(_===0)E.beforeEnter(k),r(k,d,p),ke(()=>E.enter(k),v);else{const{leave:D,delayLeave:j,afterLeave:B}=E,K=()=>r(k,d,p),ee=()=>{D(k,()=>{K(),B&&B()})};j?j(k,K,ee):ee()}else r(k,d,p)},xe=(u,d,p,_=!1,v=!1)=>{const{type:k,props:O,ref:E,children:A,dynamicChildren:x,shapeFlag:M,patchFlag:D,dirs:j}=u;if(E!=null&&ia(E,null,p,u,!0),M&256){d.ctx.deactivate(u);return}const B=M&1&&j,K=!Qn(u);let ee;if(K&&(ee=O&&O.onVnodeBeforeUnmount)&&Ue(ee,d,u),M&6)Nn(u.component,p,_);else{if(M&128){u.suspense.unmount(p,_);return}B&&xt(u,null,d,"beforeUnmount"),M&64?u.type.remove(u,d,p,v,L,_):x&&(k!==ve||D>0&&D&64)?ge(x,d,p,!1,!0):(k===ve&&D&384||!v&&M&16)&&ge(A,d,p),_&&Lt(u)}(K&&(ee=O&&O.onVnodeUnmounted)||B)&&ke(()=>{ee&&Ue(ee,d,u),B&&xt(u,null,d,"unmounted")},p)},Lt=u=>{const{type:d,el:p,anchor:_,transition:v}=u;if(d===ve){$t(p,_);return}if(d===Zn){z(u);return}const k=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:E}=v,A=()=>O(p,k);E?E(u.el,k,A):A()}else k()},$t=(u,d)=>{let p;for(;u!==d;)p=h(u),a(u),u=p;a(d)},Nn=(u,d,p)=>{const{bum:_,scope:v,update:k,subTree:O,um:E}=u;_&&Lr(_),v.stop(),k&&(k.active=!1,xe(O,u,d,p)),E&&ke(E,d),ke(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ge=(u,d,p,_=!1,v=!1,k=0)=>{for(let O=k;O<u.length;O++)xe(u[O],d,p,_,v)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el);let T=!1;const P=(u,d,p)=>{u==null?d._vnode&&xe(d._vnode,null,null,!0):I(d._vnode||null,u,d,null,null,null,p),T||(T=!0,_i(),as(),T=!1),d._vnode=u},L={p:I,um:xe,m:He,r:Lt,mt:tn,mc:pe,pc:X,pbc:Re,n:b,o:e};let Q,ae;return t&&([Q,ae]=t(L)),{render:P,hydrate:Q,createApp:Dc(P,Q)}}function Fr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Gc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _s(e,t,n=!1){const r=e.children,a=t.children;if(U(r)&&U(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=dt(a[i]),s.el=o.el),n||_s(o,s)),s.type===Sr&&(s.el=o.el)}}function qc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function ws(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ws(t)}const Xc=e=>e.__isTeleport,ve=Symbol.for("v-fgt"),Sr=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),dn=[];let $e=null;function Oe(e=!1){dn.push($e=e?null:[])}function Qc(){dn.pop(),$e=dn[dn.length-1]||null}let wn=1;function Ri(e){wn+=e}function Jc(e){return e.dynamicChildren=wn>0?$e||Bt:null,Qc(),wn>0&&$e&&$e.push(e),e}function Ce(e,t,n,r,a,i){return Jc(H(e,t,n,r,a,i,!0))}function oa(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",xs=({key:e})=>e??null,er=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||Se(e)||W(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function H(e,t=null,n=null,r=0,a=null,i=e===ve?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xs(t),ref:t&&er(t),scopeId:kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Le};return s?(Ha(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),wn>0&&!o&&$e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&$e.push(l),l}const G=Zc;function Zc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===hc)&&(e=_n),oa(e)){const s=Gt(e,t,!0);return n&&Ha(s,n),wn>0&&!i&&$e&&(s.shapeFlag&6?$e[$e.indexOf(e)]=s:$e.push(s)),s.patchFlag|=-2,s}if(uf(e)&&(e=e.__vccOpts),t){t=ef(t);let{class:s,style:l}=t;s&&!he(s)&&(t.class=yr(s)),le(l)&&(qo(l)&&!U(l)&&(l=me({},l)),t.style=Oa(l))}const o=he(e)?1:gc(e)?128:Xc(e)?64:le(e)?4:W(e)?2:0;return H(e,t,n,r,a,o,i,!0)}function ef(e){return e?qo(e)||Pr in e?me({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?tf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&xs(s),ref:t&&t.ref?n&&a?U(a)?a.concat(er(t)):[a,er(t)]:er(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Es(e=" ",t=0){return G(Sr,null,e,t)}function ks(e,t){const n=G(Zn,null,e);return n.staticCount=t,n}function Ve(e){return e==null||typeof e=="boolean"?G(_n):U(e)?G(ve,null,e.slice()):typeof e=="object"?dt(e):G(Sr,null,String(e))}function dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function Ha(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ha(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=Le:a===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[Es(t)]):n=8);e.children=t,e.shapeFlag|=n}function tf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=yr([t.class,r.class]));else if(a==="style")t.style=Oa([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(U(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ue(e,t,n,r=null){Fe(e,t,7,[n,r])}const nf=hs();let rf=0;function af(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nf,i={uid:rf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gs(r,a),emitsOptions:os(r,a),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=cc.bind(null,i),e.ce&&e.ce(i),i}let ye=null,lr,sa;{const e=No(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};lr=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),sa=t("__VUE_SSR_SETTERS__",n=>Or=n)}const In=e=>{const t=ye;return lr(e),e.scope.on(),()=>{e.scope.off(),lr(t)}},Ti=()=>{ye&&ye.scope.off(),lr(null)};function As(e){return e.vnode.shapeFlag&4}let Or=!1;function of(e,t=!1){t&&sa(t);const{props:n,children:r}=e.vnode,a=As(e);Hc(e,n,a,t),Vc(e,r);const i=a?sf(e,t):void 0;return t&&sa(!1),i}function sf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Xo(new Proxy(e.ctx,Mc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?cf(e):null,i=In(e);Tt();const o=gt(r,e,0,[e.props,a]);if(Mt(),i(),Mo(o)){if(o.then(Ti,Ti),t)return o.then(s=>{Mi(e,s,t)}).catch(s=>{xr(s,e,0)});e.asyncDep=o}else Mi(e,o,t)}else Ss(e,t)}function Mi(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=es(t)),Ss(e,n)}let Ni;function Ss(e,t,n){const r=e.type;if(!e.render){if(!t&&Ni&&!r.render){const a=r.template||za(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=me(me({isCustomElement:i,delimiters:s},o),l);r.render=Ni(a,f)}}e.render=r.render||Te}{const a=In(e);Tt();try{Nc(e)}finally{Mt(),a()}}}function lf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}}))}function cf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return lf(e)},slots:e.slots,emit:e.emit,expose:t}}function Ba(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(es(Xo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)},has(t,n){return n in t||n in un}}))}function ff(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function uf(e){return W(e)&&"__vccOpts"in e}const de=(e,t)=>Zl(e,t,Or);function Ua(e,t,n){const r=arguments.length;return r===2?le(t)&&!U(t)?oa(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oa(n)&&(n=[n]),G(e,t,n))}const df="3.4.10";/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mf="http://www.w3.org/2000/svg",hf="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,Li=mt&&mt.createElement("template"),pf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?mt.createElementNS(mf,e):t==="mathml"?mt.createElementNS(hf,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Li.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=Li.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},gf=Symbol("_vtc");function vf(e,t,n){const r=e[gf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const bf=Symbol("_vod"),yf=Symbol("");function _f(e,t,n){const r=e.style,a=r.display,i=he(n);if(n&&!i){if(t&&!he(t))for(const o in t)n[o]==null&&la(r,o,"");for(const o in n)la(r,o,n[o])}else if(i){if(t!==n){const o=r[yf];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");bf in e&&(r.display=a)}const $i=/\s*!important$/;function la(e,t,n){if(U(n))n.forEach(r=>la(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=wf(e,t);$i.test(n)?e.setProperty(Jt(r),n.replace($i,""),"important"):e[r]=n}}const ji=["Webkit","Moz","ms"],zr={};function wf(e,t){const n=zr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return zr[t]=r;r=br(r);for(let a=0;a<ji.length;a++){const i=ji[a]+r;if(i in e)return zr[t]=i}return t}const Fi="http://www.w3.org/1999/xlink";function xf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Fi,t.slice(6,t.length)):e.setAttributeNS(Fi,t,n);else{const i=Il(t);n==null||i&&!Lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ef(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Lo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function kf(e,t,n,r){e.addEventListener(t,n,r)}function Af(e,t,n,r){e.removeEventListener(t,n,r)}const zi=Symbol("_vei");function Sf(e,t,n,r,a=null){const i=e[zi]||(e[zi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Pf(t);if(r){const f=i[t]=If(r,a);kf(e,s,f,l)}else o&&(Af(e,s,o,l),i[t]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function Pf(e){let t;if(Di.test(e)){t={};let r;for(;r=e.match(Di);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jt(e.slice(2)),t]}let Dr=0;const Of=Promise.resolve(),Cf=()=>Dr||(Of.then(()=>Dr=0),Dr=Date.now());function If(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Cf(),n}function Rf(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Hi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tf=(e,t,n,r,a,i,o,s,l)=>{const f=a==="svg";t==="class"?vf(e,r,f):t==="style"?_f(e,n,r):hr(t)?Aa(t)||Sf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mf(e,t,r,f))?Ef(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xf(e,t,r,f))};function Mf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Hi(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Hi(t)&&he(n)?!1:t in e}const Nf=me({patchProp:Tf},pf);let Bi;function Lf(){return Bi||(Bi=Kc(Nf))}const $f=(...e)=>{const t=Lf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ff(r);if(!a)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,jf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function jf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ff(e){return he(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ft=typeof window<"u";function zf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const J=Object.assign;function Hr(e,t){const n={};for(const r in t){const a=t[r];n[r]=ze(a)?a.map(e):e(a)}return n}const mn=()=>{},ze=Array.isArray,Df=/\/$/,Hf=e=>e.replace(Df,"");function Br(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Wf(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Bf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ui(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Uf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&qt(t.matched[r],n.matched[a])&&Ps(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function qt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ps(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Vf(e[n],t[n]))return!1;return!0}function Vf(e,t){return ze(e)?Vi(e,t):ze(t)?Vi(t,e):e===t}function Vi(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Wf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var xn;(function(e){e.pop="pop",e.push="push"})(xn||(xn={}));var hn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hn||(hn={}));function Kf(e){if(!e)if(Ft){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Hf(e)}const Yf=/^[^#]+#/;function Gf(e,t){return e.replace(Yf,"#")+t}function qf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=qf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Wi(e,t){return(history.state?history.state.position-t:-1)+e}const ca=new Map;function Qf(e,t){ca.set(e,t)}function Jf(e){const t=ca.get(e);return ca.delete(e),t}let Zf=()=>location.protocol+"//"+location.host;function Os(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ui(l,"")}return Ui(n,e)+r+a}function eu(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=Os(e,location),S=n.value,I=t.value;let $=0;if(h){if(n.value=g,t.value=h,o&&o===S){o=null;return}$=I?h.position-I.position:0}else r(g);a.forEach(y=>{y(n.value,S,{delta:$,type:xn.pop,direction:$?$>0?hn.forward:hn.back:hn.unknown})})};function l(){o=n.value}function f(h){a.push(h);const g=()=>{const S=a.indexOf(h);S>-1&&a.splice(S,1)};return i.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(J({},h.state,{scroll:Cr()}),"")}function m(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:m}}function Ki(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Cr():null}}function tu(e){const{history:t,location:n}=window,r={value:Os(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:Zf()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=J({},t.state,Ki(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=J({},a.value,t.state,{forward:l,scroll:Cr()});i(c.current,c,!0);const m=J({},Ki(r.value,l,null),{position:c.position+1},f);i(l,m,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function nu(e){e=Kf(e);const t=tu(e),n=eu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=J({location:"",base:e,go:r,createHref:Gf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function ru(e){return typeof e=="string"||e&&typeof e=="object"}function Cs(e){return typeof e=="string"||typeof e=="symbol"}const ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Is=Symbol("");var Yi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Yi||(Yi={}));function Xt(e,t){return J(new Error,{type:e,[Is]:!0},t)}function qe(e,t){return e instanceof Error&&Is in e&&(t==null||!!(e.type&t))}const Gi="[^/]+?",au={sensitive:!1,strict:!1,start:!0,end:!0},iu=/[.+*?^${}()[\]/\\]/g;function ou(e,t){const n=J({},au,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let m=0;m<f.length;m++){const h=f[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(a+="/"),a+=h.value.replace(iu,"\\$&"),g+=40;else if(h.type===1){const{value:S,repeatable:I,optional:$,regexp:y}=h;i.push({name:S,repeatable:I,optional:$});const w=y||Gi;if(w!==Gi){g+=10;try{new RegExp(`(${w})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${w}): `+z.message)}}let C=I?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;m||(C=$&&f.length<2?`(?:/${C})`:"/"+C),$&&(C+="?"),a+=C,g+=20,$&&(g+=-8),I&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),m={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",S=i[h-1];m[S.name]=g&&S.repeatable?g.split("/"):g}return m}function l(f){let c="",m=!1;for(const h of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:S,repeatable:I,optional:$}=g,y=S in f?f[S]:"";if(ze(y)&&!I)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const w=ze(y)?y.join("/"):y;if(!w)if($)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${S}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function su(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function lu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=su(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(qi(r))return 1;if(qi(a))return-1}return a.length-r.length}function qi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cu={type:0,value:""},fu=/[a-zA-Z0-9_]/;function uu(e){if(!e)return[[]];if(e==="/")return[[cu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function m(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&m(),o()):l===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:fu.test(l)?h():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),o(),a}function du(e,t,n){const r=ou(uu(e.path),n),a=J(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function mu(e,t){const n=[],r=new Map;t=Ji({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,m,h){const g=!h,S=hu(c);S.aliasOf=h&&h.record;const I=Ji(t,c),$=[S];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of C)$.push(J({},S,{components:h?h.record.components:S.components,path:z,aliasOf:h?h.record:S}))}let y,w;for(const C of $){const{path:z}=C;if(m&&z[0]!=="/"){const V=m.record.path,F=V[V.length-1]==="/"?"":"/";C.path=m.record.path+(z&&F+z)}if(y=du(C,m,I),h?h.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&c.name&&!Qi(y)&&o(c.name)),S.children){const V=S.children;for(let F=0;F<V.length;F++)i(V[F],y,h&&h.children[F])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return w?()=>{o(w)}:mn}function o(c){if(Cs(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let m=0;for(;m<n.length&&lu(c,n[m])>=0&&(c.record.path!==n[m].record.path||!Rs(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!Qi(c)&&r.set(c.record.name,c)}function f(c,m){let h,g={},S,I;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Xt(1,{location:c});I=h.record.name,g=J(Xi(m.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Xi(c.params,h.keys.map(w=>w.name))),S=h.stringify(g)}else if("path"in c)S=c.path,h=n.find(w=>w.re.test(S)),h&&(g=h.parse(S),I=h.record.name);else{if(h=m.name?r.get(m.name):n.find(w=>w.re.test(m.path)),!h)throw Xt(1,{location:c,currentLocation:m});I=h.record.name,g=J({},m.params,c.params),S=h.stringify(g)}const $=[];let y=h;for(;y;)$.unshift(y.record),y=y.parent;return{name:I,path:S,params:g,matched:$,meta:gu($)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Xi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function hu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:pu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function pu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Qi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function gu(e){return e.reduce((t,n)=>J(t,n.meta),{})}function Ji(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Rs(e,t){return t.children.some(n=>n===e||Rs(e,n))}const Ts=/#/g,vu=/&/g,bu=/\//g,yu=/=/g,_u=/\?/g,Ms=/\+/g,wu=/%5B/g,xu=/%5D/g,Ns=/%5E/g,Eu=/%60/g,Ls=/%7B/g,ku=/%7C/g,$s=/%7D/g,Au=/%20/g;function Va(e){return encodeURI(""+e).replace(ku,"|").replace(wu,"[").replace(xu,"]")}function Su(e){return Va(e).replace(Ls,"{").replace($s,"}").replace(Ns,"^")}function fa(e){return Va(e).replace(Ms,"%2B").replace(Au,"+").replace(Ts,"%23").replace(vu,"%26").replace(Eu,"`").replace(Ls,"{").replace($s,"}").replace(Ns,"^")}function Pu(e){return fa(e).replace(yu,"%3D")}function Ou(e){return Va(e).replace(Ts,"%23").replace(_u,"%3F")}function Cu(e){return e==null?"":Ou(e).replace(bu,"%2F")}function cr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Iu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ms," "),o=i.indexOf("="),s=cr(o<0?i:i.slice(0,o)),l=o<0?null:cr(i.slice(o+1));if(s in t){let f=t[s];ze(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Zi(e){let t="";for(let n in e){const r=e[n];if(n=Pu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&fa(i)):[r&&fa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Ru(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Tu=Symbol(""),eo=Symbol(""),Wa=Symbol(""),js=Symbol(""),ua=Symbol("");function an(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ht(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=m=>{m===!1?s(Xt(4,{from:n,to:t})):m instanceof Error?s(m):ru(m)?s(Xt(2,{from:t,to:m})):(i&&r.enterCallbacks[a]===i&&typeof m=="function"&&i.push(m),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(m=>s(m))})}function Ur(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Mu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ht(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=zf(f)?f.default:f;i.components[o]=c;const h=(c.__vccOpts||c)[t];return h&&ht(h,n,r,i,o)()}))}}return a}function Mu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function to(e){const t=Je(Wa),n=Je(js),r=de(()=>t.resolve(Ct(e.to))),a=de(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],m=n.matched;if(!c||!m.length)return-1;const h=m.findIndex(qt.bind(null,c));if(h>-1)return h;const g=no(l[f-2]);return f>1&&no(c)===g&&m[m.length-1].path!==g?m.findIndex(qt.bind(null,l[f-2])):h}),i=de(()=>a.value>-1&&ju(n.params,r.value.params)),o=de(()=>a.value>-1&&a.value===n.matched.length-1&&Ps(n.params,r.value.params));function s(l={}){return $u(l)?t[Ct(e.replace)?"replace":"push"](Ct(e.to)).catch(mn):Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Nu=Fa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:to,setup(e,{slots:t}){const n=wr(to(e)),{options:r}=Je(Wa),a=de(()=>({[ro(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ro(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ua("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Lu=Nu;function $u(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ju(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!ze(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function no(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ro=(e,t,n)=>e??t??n,Fu=Fa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Je(ua),a=de(()=>e.route||r.value),i=Je(eo,0),o=de(()=>{let f=Ct(i);const{matched:c}=a.value;let m;for(;(m=c[f])&&!m.components;)f++;return f}),s=de(()=>a.value.matched[o.value]);Jn(eo,de(()=>o.value+1)),Jn(Tu,s),Jn(ua,a);const l=ec();return fn(()=>[l.value,s.value,e.name],([f,c,m],[h,g,S])=>{c&&(c.instances[m]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!qt(c,g)||!h)&&(c.enterCallbacks[m]||[]).forEach(I=>I(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,m=s.value,h=m&&m.components[c];if(!h)return ao(n.default,{Component:h,route:f});const g=m.props[c],S=g?g===!0?f.params:typeof g=="function"?g(f):g:null,$=Ua(h,J({},S,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:l}));return ao(n.default,{Component:$,route:f})||$}}});function ao(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Fs=Fu;function zu(e){const t=mu(e.routes,e),n=e.parseQuery||Iu,r=e.stringifyQuery||Zi,a=e.history,i=an(),o=an(),s=an(),l=tc(ct);let f=ct;Ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Hr.bind(null,b=>""+b),m=Hr.bind(null,Cu),h=Hr.bind(null,cr);function g(b,T){let P,L;return Cs(b)?(P=t.getRecordMatcher(b),L=T):L=b,t.addRoute(L,P)}function S(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function I(){return t.getRoutes().map(b=>b.record)}function $(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=J({},T||l.value),typeof b=="string"){const d=Br(n,b,T.path),p=t.resolve({path:d.path},T),_=a.createHref(d.fullPath);return J(d,p,{params:h(p.params),hash:cr(d.hash),redirectedFrom:void 0,href:_})}let P;if("path"in b)P=J({},b,{path:Br(n,b.path,T.path).path});else{const d=J({},b.params);for(const p in d)d[p]==null&&delete d[p];P=J({},b,{params:m(d)}),T.params=m(T.params)}const L=t.resolve(P,T),Q=b.hash||"";L.params=c(h(L.params));const ae=Bf(r,J({},b,{hash:Su(Q),path:L.path})),u=a.createHref(ae);return J({fullPath:ae,hash:Q,query:r===Zi?Ru(b.query):b.query||{}},L,{redirectedFrom:void 0,href:u})}function w(b){return typeof b=="string"?Br(n,b,l.value.path):J({},b)}function C(b,T){if(f!==b)return Xt(8,{from:T,to:b})}function z(b){return te(b)}function V(b){return z(J(w(b),{replace:!0}))}function F(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:P}=T;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),J({query:b.query,hash:b.hash,params:"path"in L?{}:b.params},L)}}function te(b,T){const P=f=y(b),L=l.value,Q=b.state,ae=b.force,u=b.replace===!0,d=F(P);if(d)return te(J(w(d),{state:typeof d=="object"?J({},Q,d.state):Q,force:ae,replace:u}),T||P);const p=P;p.redirectedFrom=T;let _;return!ae&&Uf(r,L,P)&&(_=Xt(16,{to:p,from:L}),He(L,L,!0,!1)),(_?Promise.resolve(_):Re(p,L)).catch(v=>qe(v)?qe(v,2)?v:st(v):X(v,p,L)).then(v=>{if(v){if(qe(v,2))return te(J({replace:u},w(v.to),{state:typeof v.to=="object"?J({},Q,v.to.state):Q,force:ae}),T||p)}else v=wt(p,L,!0,u,Q);return ot(p,L,v),v})}function pe(b,T){const P=C(b,T);return P?Promise.reject(P):Promise.resolve()}function _e(b){const T=$t.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Re(b,T){let P;const[L,Q,ae]=Du(b,T);P=Ur(L.reverse(),"beforeRouteLeave",b,T);for(const d of L)d.leaveGuards.forEach(p=>{P.push(ht(p,b,T))});const u=pe.bind(null,b,T);return P.push(u),ge(P).then(()=>{P=[];for(const d of i.list())P.push(ht(d,b,T));return P.push(u),ge(P)}).then(()=>{P=Ur(Q,"beforeRouteUpdate",b,T);for(const d of Q)d.updateGuards.forEach(p=>{P.push(ht(p,b,T))});return P.push(u),ge(P)}).then(()=>{P=[];for(const d of ae)if(d.beforeEnter)if(ze(d.beforeEnter))for(const p of d.beforeEnter)P.push(ht(p,b,T));else P.push(ht(d.beforeEnter,b,T));return P.push(u),ge(P)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),P=Ur(ae,"beforeRouteEnter",b,T),P.push(u),ge(P))).then(()=>{P=[];for(const d of o.list())P.push(ht(d,b,T));return P.push(u),ge(P)}).catch(d=>qe(d,8)?d:Promise.reject(d))}function ot(b,T,P){s.list().forEach(L=>_e(()=>L(b,T,P)))}function wt(b,T,P,L,Q){const ae=C(b,T);if(ae)return ae;const u=T===ct,d=Ft?history.state:{};P&&(L||u?a.replace(b.fullPath,J({scroll:u&&d&&d.scroll},Q)):a.push(b.fullPath,Q)),l.value=b,He(b,T,P,u),st()}let De;function tn(){De||(De=a.listen((b,T,P)=>{if(!Nn.listening)return;const L=y(b),Q=F(L);if(Q){te(J(Q,{replace:!0}),L).catch(mn);return}f=L;const ae=l.value;Ft&&Qf(Wi(ae.fullPath,P.delta),Cr()),Re(L,ae).catch(u=>qe(u,12)?u:qe(u,2)?(te(u.to,L).then(d=>{qe(d,20)&&!P.delta&&P.type===xn.pop&&a.go(-1,!1)}).catch(mn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),X(u,L,ae))).then(u=>{u=u||wt(L,ae,!1),u&&(P.delta&&!qe(u,8)?a.go(-P.delta,!1):P.type===xn.pop&&qe(u,20)&&a.go(-1,!1)),ot(L,ae,u)}).catch(mn)}))}let Nt=an(),fe=an(),Z;function X(b,T,P){st(b);const L=fe.list();return L.length?L.forEach(Q=>Q(b,T,P)):console.error(b),Promise.reject(b)}function Ge(){return Z&&l.value!==ct?Promise.resolve():new Promise((b,T)=>{Nt.add([b,T])})}function st(b){return Z||(Z=!b,tn(),Nt.list().forEach(([T,P])=>b?P(b):T()),Nt.reset()),b}function He(b,T,P,L){const{scrollBehavior:Q}=e;if(!Ft||!Q)return Promise.resolve();const ae=!P&&Jf(Wi(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return ns().then(()=>Q(b,T,ae)).then(u=>u&&Xf(u)).catch(u=>X(u,b,T))}const xe=b=>a.go(b);let Lt;const $t=new Set,Nn={currentRoute:l,listening:!0,addRoute:g,removeRoute:S,hasRoute:$,getRoutes:I,resolve:y,options:e,push:z,replace:V,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:fe.add,isReady:Ge,install(b){const T=this;b.component("RouterLink",Lu),b.component("RouterView",Fs),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(l)}),Ft&&!Lt&&l.value===ct&&(Lt=!0,z(a.location).catch(Q=>{}));const P={};for(const Q in ct)Object.defineProperty(P,Q,{get:()=>l.value[Q],enumerable:!0});b.provide(Wa,T),b.provide(js,Yo(P)),b.provide(ua,l);const L=b.unmount;$t.add(b),b.unmount=function(){$t.delete(b),$t.size<1&&(f=ct,De&&De(),De=null,l.value=ct,Lt=!1,Z=!1),L()}}};function ge(b){return b.reduce((T,P)=>T.then(()=>_e(P)),Promise.resolve())}return Nn}function Du(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>qt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>qt(f,l))||a.push(l))}return[n,r,a]}const rt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Hu={};function Bu(e,t){return Oe(),Ce("footer",null," © 2024 ")}const Uu=rt(Hu,[["render",Bu]]),Vu={},Wu={href:"https://github.com/AmberFryar"},Ku={href:"https://www.linkedin.com/in/amber-fryar/"};function Yu(e,t){const n=cn("font-awesome-icon");return Oe(),Ce("div",null,[H("a",Wu,[G(n,{icon:"fa-brands fa-github-square"})]),H("a",Ku,[G(n,{icon:"fa-brands fa-linkedin"})])])}const zs=rt(Vu,[["render",Yu],["__scopeId","data-v-92a79d66"]]),Gu={components:{Socials:zs},data(){return{displayMenu:!1}},computed:{menuLinksClass(){return this.displayMenu?"show":"menuLinks"}},methods:{toggleDisplayMenu(){this.displayMenu=!this.displayMenu}}},Zt=e=>(On("data-v-f3022f18"),e=e(),Cn(),e),qu=Zt(()=>H("hr",null,null,-1)),Xu={id:"banner"},Qu=Zt(()=>H("h1",{id:"home"},"Amber Fryar ",-1)),Ju={class:"dropDownMenu"},Zu=Zt(()=>H("h4",{id:"about"},"About Me",-1)),ed=Zt(()=>H("a",{id:"projects",href:"https://github.com/dix06001/ReadMe"},"Projects",-1)),td=Zt(()=>H("h4",{id:"experience"},"Experience",-1)),nd=Zt(()=>H("hr",null,null,-1));function rd(e,t,n,r,a,i){const o=cn("Socials"),s=cn("router-link"),l=cn("font-awesome-icon");return Oe(),Ce(ve,null,[qu,H("section",Xu,[G(o),G(s,{id:"home",to:{name:"home"}},{default:Wt(()=>[Qu]),_:1}),H("div",Ju,[G(l,{icon:"fa-bars",class:"menuIcon",onClick:i.toggleDisplayMenu},null,8,["onClick"]),H("div",{class:yr(i.menuLinksClass)},[G(s,{id:"about",to:{name:"about"}},{default:Wt(()=>[Zu]),_:1}),ed,G(s,{id:"experience",to:{name:"experience"}},{default:Wt(()=>[td]),_:1})],2)])]),nd],64)}const Ka=rt(Gu,[["render",rd],["__scopeId","data-v-f3022f18"]]),ad=H("header",null,null,-1),id=H("hr",null,null,-1),od={__name:"App",setup(e){return(t,n)=>(Oe(),Ce(ve,null,[ad,H("main",null,[G(Ct(Fs))]),id,H("footer",null,[G(Uu),G(zs)])],64))}},sd="/assets/logoblack-SKmbsdPU.png",ld={},Ya=e=>(On("data-v-dfbd917b"),e=e(),Cn(),e),cd={class:"menuItems"},fd=Ya(()=>H("h2",null,"Experience",-1)),ud=Ya(()=>H("div",null,[H("a",{id:"projects",href:"https://github.com/AmberFryar/ReadMe"},[H("h2",null,"Projects")])],-1)),dd=Ya(()=>H("h2",null,"About",-1));function md(e,t){const n=cn("router-link");return Oe(),Ce("section",cd,[H("div",null,[G(n,{id:"experience",to:{name:"experience"}},{default:Wt(()=>[fd]),_:1})]),ud,H("div",null,[G(n,{id:"about",to:{name:"about"}},{default:Wt(()=>[dd]),_:1})])])}const hd=rt(ld,[["render",md],["__scopeId","data-v-dfbd917b"]]),pd=e=>(On("data-v-a8da8ae6"),e=e(),Cn(),e),gd=pd(()=>H("div",null,[H("img",{id:"logo",src:sd})],-1)),vd={class:"projects"},bd={__name:"HomeView",setup(e){return(t,n)=>(Oe(),Ce("main",null,[gd,H("section",vd,[G(hd)])]))}},yd=rt(bd,[["__scopeId","data-v-a8da8ae6"]]),_d="/assets/about-tRnK0b8y.png",wd={},at=e=>(On("data-v-997b0784"),e=e(),Cn(),e),xd=at(()=>H("br",null,null,-1)),Ed=at(()=>H("p",null," I love processes, projects, problem-solving, people, plants, pets, and apparently alliterations. I recently completed Tech Elevator’s remote full-stack development boot camp. Prior to that accomplishment I earned my B.S. in Biological Sciences and obtained a secondary education license. With those credentials in hand, I returned to the place that most adults have tried to remove from memory- middle school. It was as much of a ride as an adult as it was as an adolescent.",-1)),kd=at(()=>H("br",null,null,-1)),Ad=at(()=>H("p",null,"Walking away from teaching not only left me with many stories but also the confidence and excitement for my newfound path. My time as a teacher helped me discover that my passion and talents lie in problem-solving, finding inefficiencies, and creating new systems. My colleagues always said they taught for that light bulb moment when the student finally gets it. That was their fuel. I realized that my fuel was seeing the positive results of deploying new or updated systems and curricula. Training to be a software developer lets me merge my passion for process improvement with my progressing technical skills. Collaborating with a team to create technical solutions is my fuel. ",-1)),Sd=at(()=>H("br",null,null,-1)),Pd=at(()=>H("p",null,"While I am AFK-ing (as the cool kids say), I can be found volunteering for the local cat rescue, reading Harry Potter (I’m a millennial- what more can I say?), battling my family in Catan, planning and completing home renovations projects, trying to keep my house plants alive or hiking in the mountains. I don’t know if I am more excited to ride my new 1980 Honda Trail 110 in the mountains or replace the 1968 harvest gold bathroom fixtures this year.",-1)),Od=at(()=>H("br",null,null,-1)),Cd=at(()=>H("br",null,null,-1)),Id=at(()=>H("img",{src:_d,class:"img"},null,-1));function Rd(e,t){return Oe(),Ce(ve,null,[xd,Ed,kd,Ad,Sd,Pd,Od,Cd,Id],64)}const Td=rt(wd,[["render",Rd],["__scopeId","data-v-997b0784"]]),Md={class:"about"},Nd={__name:"AboutView",setup(e){return(t,n)=>(Oe(),Ce(ve,null,[G(Ka),H("div",Md,[G(Td)])],64))}},Ld="/assets/Technical-feZQfQjK.png",$d={},jd=ks('<br data-v-1d1da584><img src="'+Ld+'" class="img" data-v-1d1da584><hr data-v-1d1da584><br data-v-1d1da584><ul data-v-1d1da584><h3 data-v-1d1da584>Tech Elevator</h3><ul data-v-1d1da584><li data-v-1d1da584>Full Stack Software Development</li><li data-v-1d1da584>30 week remote with pair programming and live instruction</li></ul><h3 data-v-1d1da584>Languages and Technologies</h3><ul data-v-1d1da584><li data-v-1d1da584>Java</li><li data-v-1d1da584>SQL and APIs</li><li data-v-1d1da584>Javascript, HTML, CSS</li><li data-v-1d1da584>Vue3</li><li data-v-1d1da584>Responsive Web Design</li></ul></ul><br data-v-1d1da584>',6),Fd=[jd];function zd(e,t){return Oe(),Ce("section",null,Fd)}const Dd=rt($d,[["render",zd],["__scopeId","data-v-1d1da584"]]),Hd="/assets/Professional-fSmjbTnF.png",Bd={},Ud=ks('<br data-v-7c828fc0><img src="'+Hd+'" class="img" data-v-7c828fc0><hr data-v-7c828fc0><br data-v-7c828fc0><ul data-v-7c828fc0><h3 data-v-7c828fc0>University of Northern Colorado</h3><ul data-v-7c828fc0><li data-v-7c828fc0>Bachelor of Science in Biological Sciences</li><li data-v-7c828fc0>Secondary Education Liscense</li></ul><h3 data-v-7c828fc0>Leadership</h3><ul data-v-7c828fc0><li data-v-7c828fc0>Building Leadership Team liason for administrators and teachers</li><li data-v-7c828fc0>Organized grade level field trip for 320 students</li></ul><h3 data-v-7c828fc0>Middle School Science Teacher</h3><ul data-v-7c828fc0><li data-v-7c828fc0>General Science, Advanced Science, Study/Life SKills, Zoology</li></ul><h3 data-v-7c828fc0>Community Volunteer Work</h3><ul data-v-7c828fc0><li data-v-7c828fc0>Data entry and veternary medical transcription</li><li data-v-7c828fc0>School robotics competitions, field trips and curriculum prep</li></ul></ul><br data-v-7c828fc0>',6),Vd=[Ud];function Wd(e,t){return Oe(),Ce("section",null,Vd)}const Kd=rt(Bd,[["render",Wd],["__scopeId","data-v-7c828fc0"]]),Yd={id:"experience"},Gd={id:"technical"},qd={id:"professional"},Xd={__name:"ExperienceView",setup(e){return(t,n)=>(Oe(),Ce(ve,null,[G(Ka),H("section",Yd,[H("div",Gd,[G(Dd)]),H("div",qd,[G(Kd)])])],64))}},Qd={},Ga=e=>(On("data-v-5c1db1cc"),e=e(),Cn(),e),Jd=Ga(()=>H("div",{class:"project"},[H("h3",null,"Project")],-1)),Zd=Ga(()=>H("div",{class:"project"},[H("h3",null,"Project")],-1)),em=Ga(()=>H("div",{class:"project"},[H("h3",null,"Project")],-1));function tm(e,t){return Oe(),Ce(ve,null,[Jd,Zd,em],64)}const nm=rt(Qd,[["render",tm],["__scopeId","data-v-5c1db1cc"]]),rm={__name:"ProjectsView",setup(e){return(t,n)=>(Oe(),Ce(ve,null,[G(Ka),G(nm),Es(" Projects View ")],64))}},am=zu({history:nu("/"),routes:[{path:"/",name:"home",component:yd},{path:"/about",name:"about",component:Nd},{path:"/experience",name:"experience",component:Xd},{path:"/projects",name:"projects",component:rm}]});function io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?io(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):io(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function im(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function om(e,t,n){return t&&oo(e.prototype,t),n&&oo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qa(e,t){return lm(e)||fm(e,t)||Ds(e,t)||dm()}function Rn(e){return sm(e)||cm(e)||Ds(e)||um()}function sm(e){if(Array.isArray(e))return da(e)}function lm(e){if(Array.isArray(e))return e}function cm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fm(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ds(e,t){if(e){if(typeof e=="string")return da(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return da(e,t)}}function da(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function um(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var so=function(){},Xa={},Hs={},Bs=null,Us={mark:so,measure:so};try{typeof window<"u"&&(Xa=window),typeof document<"u"&&(Hs=document),typeof MutationObserver<"u"&&(Bs=MutationObserver),typeof performance<"u"&&(Us=performance)}catch{}var mm=Xa.navigator||{},lo=mm.userAgent,co=lo===void 0?"":lo,bt=Xa,re=Hs,fo=Bs,Hn=Us;bt.document;var it=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Vs=~co.indexOf("MSIE")||~co.indexOf("Trident/"),Bn,Un,Vn,Wn,Kn,Ze="___FONT_AWESOME___",ma=16,Ws="fa",Ks="svg-inline--fa",It="data-fa-i2svg",ha="data-fa-pseudo-element",hm="data-fa-pseudo-element-pending",Qa="data-prefix",Ja="data-icon",uo="fontawesome-i2svg",pm="async",gm=["HTML","HEAD","STYLE","SCRIPT"],Ys=function(){try{return!0}catch{return!1}}(),ne="classic",se="sharp",Za=[ne,se];function Tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var En=Tn((Bn={},ce(Bn,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ce(Bn,se,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Bn)),kn=Tn((Un={},ce(Un,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ce(Un,se,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Un)),An=Tn((Vn={},ce(Vn,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ce(Vn,se,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Vn)),vm=Tn((Wn={},ce(Wn,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ce(Wn,se,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Wn)),bm=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Gs="fa-layers-text",ym=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_m=Tn((Kn={},ce(Kn,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ce(Kn,se,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Kn)),qs=[1,2,3,4,5,6,7,8,9,10],wm=qs.concat([11,12,13,14,15,16,17,18,19,20]),xm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=new Set;Object.keys(kn[ne]).map(Sn.add.bind(Sn));Object.keys(kn[se]).map(Sn.add.bind(Sn));var Em=[].concat(Za,Rn(Sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(qs.map(function(e){return"".concat(e,"x")})).concat(wm.map(function(e){return"w-".concat(e)})),pn=bt.FontAwesomeConfig||{};function km(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Am(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var Sm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Sm.forEach(function(e){var t=qa(e,2),n=t[0],r=t[1],a=Am(km(n));a!=null&&(pn[r]=a)})}var Xs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ws,replacementClass:Ks,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pn.familyPrefix&&(pn.cssPrefix=pn.familyPrefix);var Qt=R(R({},Xs),pn);Qt.autoReplaceSvg||(Qt.observeMutations=!1);var N={};Object.keys(Xs).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Qt[e]=n,gn.forEach(function(r){return r(N)})},get:function(){return Qt[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Qt.cssPrefix=t,gn.forEach(function(n){return n(N)})},get:function(){return Qt.cssPrefix}});bt.FontAwesomeConfig=N;var gn=[];function Pm(e){return gn.push(e),function(){gn.splice(gn.indexOf(e),1)}}var ft=ma,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Om(e){if(!(!e||!it)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return re.head.insertBefore(t,r),e}}var Cm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pn(){for(var e=12,t="";e-- >0;)t+=Cm[Math.random()*62|0];return t}function en(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ei(e){return e.classList?en(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Qs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Im(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Qs(e[n]),'" ')},"").trim()}function Ir(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ti(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function Rm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Tm(e){var t=e.transform,n=e.width,r=n===void 0?ma:n,a=e.height,i=a===void 0?ma:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Vs?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Mm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Js(){var e=Ws,t=Ks,n=N.cssPrefix,r=N.replacementClass,a=Mm;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var mo=!1;function Vr(){N.autoAddCss&&!mo&&(Om(Js()),mo=!0)}var Nm={mixout:function(){return{dom:{css:Js,insertCss:Vr}}},hooks:function(){return{beforeDOMElementCreation:function(){Vr()},beforeI2svg:function(){Vr()}}}},et=bt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var je=et[Ze],Zs=[],Lm=function e(){re.removeEventListener("DOMContentLoaded",e),ur=1,Zs.map(function(t){return t()})},ur=!1;it&&(ur=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),ur||re.addEventListener("DOMContentLoaded",Lm));function $m(e){it&&(ur?setTimeout(e,0):Zs.push(e))}function Mn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Qs(e):"<".concat(t," ").concat(Im(r),">").concat(i.map(Mn).join(""),"</").concat(t,">")}function ho(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Wr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?jm(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Fm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function pa(e){var t=Fm(e);return t.length===1?t[0].toString(16):null}function zm(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function po(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ga(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=po(t);typeof je.hooks.addPack=="function"&&!a?je.hooks.addPack(e,po(t)):je.styles[e]=R(R({},je.styles[e]||{}),i),e==="fas"&&ga("fa",t)}var Yn,Gn,qn,Dt=je.styles,Dm=je.shims,Hm=(Yn={},ce(Yn,ne,Object.values(An[ne])),ce(Yn,se,Object.values(An[se])),Yn),ni=null,el={},tl={},nl={},rl={},al={},Bm=(Gn={},ce(Gn,ne,Object.keys(En[ne])),ce(Gn,se,Object.keys(En[se])),Gn);function Um(e){return~Em.indexOf(e)}function Vm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Um(a)?a:null}var il=function(){var t=function(i){return Wr(Dt,function(o,s,l){return o[l]=Wr(s,i,{}),o},{})};el=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),tl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),al=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||N.autoFetchSvg,r=Wr(Dm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});nl=r.names,rl=r.unicodes,ni=Rr(N.styleDefault,{family:N.familyDefault})};Pm(function(e){ni=Rr(e.styleDefault,{family:N.familyDefault})});il();function ri(e,t){return(el[e]||{})[t]}function Wm(e,t){return(tl[e]||{})[t]}function St(e,t){return(al[e]||{})[t]}function ol(e){return nl[e]||{prefix:null,iconName:null}}function Km(e){var t=rl[e],n=ri("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yt(){return ni}var ai=function(){return{prefix:null,iconName:null,rest:[]}};function Rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,a=En[r][e],i=kn[r][e]||kn[r][a],o=e in je.styles?e:null;return i||o||null}var go=(qn={},ce(qn,ne,Object.keys(An[ne])),ce(qn,se,Object.keys(An[se])),qn);function Tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ce(t,ne,"".concat(N.cssPrefix,"-").concat(ne)),ce(t,se,"".concat(N.cssPrefix,"-").concat(se)),t),o=null,s=ne;(e.includes(i[ne])||e.some(function(f){return go[ne].includes(f)}))&&(s=ne),(e.includes(i[se])||e.some(function(f){return go[se].includes(f)}))&&(s=se);var l=e.reduce(function(f,c){var m=Vm(N.cssPrefix,c);if(Dt[c]?(c=Hm[s].includes(c)?vm[s][c]:c,o=c,f.prefix=c):Bm[s].indexOf(c)>-1?(o=c,f.prefix=Rr(c,{family:s})):m?f.iconName=m:c!==N.replacementClass&&c!==i[ne]&&c!==i[se]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=o==="fa"?ol(f.iconName):{},g=St(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Dt.far&&Dt.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},ai());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===se&&(Dt.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=St(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yt()||"fas"),l}var Ym=function(){function e(){im(this,e),this.definitions={}}return om(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),ga(s,o[s]);var l=An[ne][s];l&&ga(l,o[s]),il()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),vo=[],Ht={},Kt={},Gm=Object.keys(Kt);function qm(e,t){var n=t.mixoutsTo;return vo=e,Ht={},Object.keys(Kt).forEach(function(r){Gm.indexOf(r)===-1&&delete Kt[r]}),vo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),fr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(i[o])})}r.provides&&r.provides(Kt)}),n}function va(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kt[e]?Kt[e].apply(null,t):void 0}function ba(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||yt();if(t)return t=St(n,t)||t,ho(sl.definitions,n,t)||ho(je.styles,n,t)}var sl=new Ym,Xm=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Rt("noAuto")},Qm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(Rt("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,$m(function(){Zm({autoReplaceSvgRoot:n}),Rt("watch",t)})}},Jm={icon:function(t){if(t===null)return null;if(fr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:St(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rr(t[0]);return{prefix:r,iconName:St(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(bm))){var a=Tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||yt(),iconName:St(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=yt();return{prefix:i,iconName:St(i,t)||t}}}},Ie={noAuto:Xm,config:N,dom:Qm,parse:Jm,library:sl,findIconDefinition:ba,toHtml:Mn},Zm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(je.styles).length>0||N.autoFetchSvg)&&it&&N.autoReplaceSvg&&Ie.dom.i2svg({node:r})};function Mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Mn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(it){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function eh(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ti(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Ir(R(R({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function th(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function ii(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,S=r.found?r:n,I=S.width,$=S.height,y=a==="fak",w=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(_e){return m.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(m.classes).join(" "),C={children:[],attributes:R(R({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat($)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/$*16*.0625,"em")}:{};g&&(C.attributes[It]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Pn())},children:[l]}),delete C.attributes.title);var V=R(R({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:R(R({},z),m.styles)}),F=r.found&&n.found?tt("generateAbstractMask",V)||{children:[],attributes:{}}:tt("generateAbstractIcon",V)||{children:[],attributes:{}},te=F.children,pe=F.attributes;return V.children=te,V.attributes=pe,s?th(V):eh(V)}function bo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[It]="");var c=R({},o.styles);ti(a)&&(c.transform=Tm({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Ir(c);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function nh(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ir(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kr=je.styles;function ya(e){var t=e[0],n=e[1],r=e.slice(4),a=qa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var rh={found:!1,width:512,height:512};function ah(e,t){!Ys&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _a(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=yt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=ol(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Kr[t]&&Kr[t][e]){var o=Kr[t][e];return r(ya(o))}ah(e,t),r(R(R({},rh),{},{icon:N.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var yo=function(){},wa=N.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:yo,measure:yo},sn='FA "6.5.1"',ih=function(t){return wa.mark("".concat(sn," ").concat(t," begins")),function(){return ll(t)}},ll=function(t){wa.mark("".concat(sn," ").concat(t," ends")),wa.measure("".concat(sn," ").concat(t),"".concat(sn," ").concat(t," begins"),"".concat(sn," ").concat(t," ends"))},oi={begin:ih,end:ll},tr=function(){};function _o(e){var t=e.getAttribute?e.getAttribute(It):null;return typeof t=="string"}function oh(e){var t=e.getAttribute?e.getAttribute(Qa):null,n=e.getAttribute?e.getAttribute(Ja):null;return t&&n}function sh(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function lh(){if(N.autoReplaceSvg===!0)return nr.replace;var e=nr[N.autoReplaceSvg];return e||nr.replace}function ch(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function fh(e){return re.createElement(e)}function cl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ch:fh:n;if(typeof e=="string")return re.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cl(o,{ceFn:r}))}),a}function uh(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cl(a),n)}),n.getAttribute(It)===null&&N.keepOriginalSource){var r=re.createComment(uh(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ei(n).indexOf(N.replacementClass))return nr.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Mn(s)}).join(`
`);n.setAttribute(It,""),n.innerHTML=o}};function wo(e){e()}function fl(e,t){var n=typeof t=="function"?t:tr;if(e.length===0)n();else{var r=wo;N.mutateApproach===pm&&(r=bt.requestAnimationFrame||wo),r(function(){var a=lh(),i=oi.begin("mutate");e.map(a),i(),n()})}}var si=!1;function ul(){si=!0}function xa(){si=!1}var dr=null;function xo(e){if(fo&&N.observeMutations){var t=e.treeCallback,n=t===void 0?tr:t,r=e.nodeCallback,a=r===void 0?tr:r,i=e.pseudoElementsCallback,o=i===void 0?tr:i,s=e.observeMutationsRoot,l=s===void 0?re:s;dr=new fo(function(f){if(!si){var c=yt();en(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!_o(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&_o(m.target)&&~xm.indexOf(m.attributeName))if(m.attributeName==="class"&&oh(m.target)){var h=Tr(ei(m.target)),g=h.prefix,S=h.iconName;m.target.setAttribute(Qa,g||c),S&&m.target.setAttribute(Ja,S)}else sh(m.target)&&a(m.target)})}}),it&&dr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function dh(){dr&&dr.disconnect()}function mh(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function hh(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Tr(ei(e));return a.prefix||(a.prefix=yt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Wm(a.prefix,e.innerText)||ri(a.prefix,pa(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ph(e){var t=en(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function gh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hh(e),r=n.iconName,a=n.prefix,i=n.rest,o=ph(e),s=va("parseNodeAttributes",{},e),l=t.styleParser?mh(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var vh=je.styles;function dl(e){var t=N.autoReplaceSvg==="nest"?Eo(e,{styleParser:!1}):Eo(e);return~t.extra.classes.indexOf(Gs)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var _t=new Set;Za.map(function(e){_t.add("fa-".concat(e))});Object.keys(En[ne]).map(_t.add.bind(_t));Object.keys(En[se]).map(_t.add.bind(_t));_t=Rn(_t);function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=re.documentElement.classList,r=function(m){return n.add("".concat(uo,"-").concat(m))},a=function(m){return n.remove("".concat(uo,"-").concat(m))},i=N.autoFetchSvg?_t:Za.map(function(c){return"fa-".concat(c)}).concat(Object.keys(vh));i.includes("fa")||i.push("fa");var o=[".".concat(Gs,":not([").concat(It,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(It,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=en(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=oi.begin("onTree"),f=s.reduce(function(c,m){try{var h=dl(m);h&&c.push(h)}catch(g){Ys||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(h){fl(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),m(h)})})}function bh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dl(e).then(function(n){n&&fl([n],t)})}function yh(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ba(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ba(a||{})),e(r,R(R({},n),{},{mask:a}))}}var _h=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,S=g===void 0?null:g,I=n.classes,$=I===void 0?[]:I,y=n.attributes,w=y===void 0?{}:y,C=n.styles,z=C===void 0?{}:C;if(t){var V=t.prefix,F=t.iconName,te=t.icon;return Mr(R({type:"icon"},t),function(){return Rt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(h?w["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(S||Pn()):(w["aria-hidden"]="true",w.focusable="false")),ii({icons:{main:ya(te),mask:l?ya(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:F,transform:R(R({},Ke),a),symbol:o,title:h,maskId:c,titleId:S,extra:{attributes:w,styles:z,classes:$}})})}},wh={mixout:function(){return{icon:yh(_h)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ko,n.nodeCallback=bh,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?re:r,i=n.callback,o=i===void 0?function(){}:i;return ko(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,S){Promise.all([_a(a,s),c.iconName?_a(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var $=qa(I,2),y=$[0],w=$[1];g([n,ii({icons:{main:y,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ir(s);l.length>0&&(a.style=l);var f;return ti(o)&&(f=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},xh={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Mr({type:"layer"},function(){Rt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Rn(i)).join(" ")},children:o}]})}}}},Eh={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return Mr({type:"counter",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),nh({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Rn(s))}})})}}}},kh={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Mr({type:"text",content:n},function(){return Rt("beforeDOMElementCreation",{content:n,params:r}),bo({content:n,transform:R(R({},Ke),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Rn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Vs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,bo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ah=new RegExp('"',"ug"),Ao=[1105920,1112319];function Sh(e){var t=e.replace(Ah,""),n=zm(t,0),r=n>=Ao[0]&&n<=Ao[1],a=t.length===2?t[0]===t[1]:!1;return{value:pa(a?t[0]:t),isSecondary:r||a}}function So(e,t){var n="".concat(hm).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=en(e.children),o=i.filter(function(te){return te.getAttribute(ha)===t})[0],s=bt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ym),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?se:ne,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?kn[h][l[2].toLowerCase()]:_m[h][f],S=Sh(m),I=S.value,$=S.isSecondary,y=l[0].startsWith("FontAwesome"),w=ri(g,I),C=w;if(y){var z=Km(I);z.iconName&&z.prefix&&(w=z.iconName,g=z.prefix)}if(w&&!$&&(!o||o.getAttribute(Qa)!==g||o.getAttribute(Ja)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var V=gh(),F=V.extra;F.attributes[ha]=t,_a(w,g).then(function(te){var pe=ii(R(R({},V),{},{icons:{main:te,mask:ai()},prefix:g,iconName:C,extra:F,watchable:!0})),_e=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=pe.map(function(Re){return Mn(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ph(e){return Promise.all([So(e,"::before"),So(e,"::after")])}function Oh(e){return e.parentNode!==document.head&&!~gm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ha)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Po(e){if(it)return new Promise(function(t,n){var r=en(e.querySelectorAll("*")).filter(Oh).map(Ph),a=oi.begin("searchPseudoElements");ul(),Promise.all(r).then(function(){a(),xa(),t()}).catch(function(){a(),xa(),n()})})}var Ch={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Po,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?re:r;N.searchPseudoElements&&Po(a)}}},Oo=!1,Ih={mixout:function(){return{dom:{unwatch:function(){ul(),Oo=!0}}}},hooks:function(){return{bootstrap:function(){xo(va("mutationObserverCallbacks",{}))},noAuto:function(){dh()},watch:function(n){var r=n.observeMutationsRoot;Oo?xa():xo(va("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Co=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Rh={mixout:function(){return{parse:{transform:function(n){return Co(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Co(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Yr={x:0,y:0,width:"100%",height:"100%"};function Io(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Th(e){return e.tag==="g"?e.children:[e]}var Mh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Tr(a.split(" ").map(function(o){return o.trim()})):ai();return i.prefix||(i.prefix=yt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,m=o.width,h=o.icon,g=Rm({transform:l,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:R(R({},Yr),{},{fill:"white"})},I=c.children?{children:c.children.map(Io)}:{},$={tag:"g",attributes:R({},g.inner),children:[Io(R({tag:c.tag,attributes:R(R({},c.attributes),g.path)},I))]},y={tag:"g",attributes:R({},g.outer),children:[$]},w="mask-".concat(s||Pn()),C="clip-".concat(s||Pn()),z={tag:"mask",attributes:R(R({},Yr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,y]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Th(h)},z]};return r.push(V,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(w,")")},Yr)}),{children:r,attributes:a}}}},Nh={provides:function(t){var n=!1;bt.matchMedia&&(n=bt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Lh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},$h=[Nm,wh,xh,Eh,kh,Ch,Ih,Rh,Mh,Nh,Lh];qm($h,{mixoutsTo:Ie});Ie.noAuto;Ie.config;var jh=Ie.library;Ie.dom;var Ea=Ie.parse;Ie.findIconDefinition;Ie.toHtml;var Fh=Ie.icon;Ie.layer;Ie.text;Ie.counter;function Ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ro(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ro(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function Ee(e,t,n){return t=Bh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zh(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Dh(e,t){if(e==null)return{};var n=zh(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Hh(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bh(e){var t=Hh(e,"string");return typeof t=="symbol"?t:String(t)}var Uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ml={exports:{}};(function(e){(function(t){var n=function(y,w,C){if(!f(w)||m(w)||h(w)||g(w)||l(w))return w;var z,V=0,F=0;if(c(w))for(z=[],F=w.length;V<F;V++)z.push(n(y,w[V],C));else{z={};for(var te in w)Object.prototype.hasOwnProperty.call(w,te)&&(z[y(te,C)]=n(y,w[te],C))}return z},r=function(y,w){w=w||{};var C=w.separator||"_",z=w.split||/(?=[A-Z])/;return y.split(z).join(C)},a=function(y){return S(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var w=a(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},S=function(y){return y=y-0,y===y},I=function(y,w){var C=w&&"process"in w?w.process:w;return typeof C!="function"?y:function(z,V){return C(z,y,V)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,w){return n(I(a,w),y)},decamelizeKeys:function(y,w){return n(I(o,w),y,w)},pascalizeKeys:function(y,w){return n(I(i,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Uh)})(ml);var Vh=ml.exports,Wh=["class","style"];function Kh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Vh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Yh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function hl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return hl(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Yh(c);break;case"style":l.style=Kh(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Dh(n,Wh);return Ua(e.tag,Xe(Xe(Xe({},t),{},{class:a.class,style:Xe(Xe({},a.style),o)},a.attrs),s),r)}var pl=!1;try{pl=!0}catch{}function Gh(){if(!pl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ee({},e,t):{}}function qh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ee(t,"fa-".concat(e.size),e.size!==null),Ee(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ee(t,"fa-pull-".concat(e.pull),e.pull!==null),Ee(t,"fa-swap-opacity",e.swapOpacity),Ee(t,"fa-bounce",e.bounce),Ee(t,"fa-shake",e.shake),Ee(t,"fa-beat",e.beat),Ee(t,"fa-fade",e.fade),Ee(t,"fa-beat-fade",e.beatFade),Ee(t,"fa-flash",e.flash),Ee(t,"fa-spin-pulse",e.spinPulse),Ee(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function To(e){if(e&&mr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ea.icon)return Ea.icon(e);if(e===null)return null;if(mr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Xh=Fa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=de(function(){return To(t.icon)}),i=de(function(){return Gr("classes",qh(t))}),o=de(function(){return Gr("transform",typeof t.transform=="string"?Ea.transform(t.transform):t.transform)}),s=de(function(){return Gr("mask",To(t.mask))}),l=de(function(){return Fh(a.value,Xe(Xe(Xe(Xe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});fn(l,function(c){if(!c)return Gh("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=de(function(){return l.value?hl(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Qh={prefix:"fab",iconName:"square-github",icon:[448,512,["github-square"],"f092","M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"]},Jh=Qh,Zh={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},ep={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};jh.add(ep,Zh,Jh);const li=$f(od);li.use(am);li.component("font-awesome-icon",Xh);li.mount("#app");
