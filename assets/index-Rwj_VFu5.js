(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xa(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const oe={},Ut=[],Re=()=>{},pl=()=>!1,ur=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ea=e=>e.startsWith("onUpdate:"),me=Object.assign,ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,Y=(e,t)=>gl.call(e,t),U=Array.isArray,ln=e=>mr(e)==="[object Map]",vl=e=>mr(e)==="[object Set]",V=e=>typeof e=="function",he=e=>typeof e=="string",dr=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",To=e=>(le(e)||V(e))&&V(e.then)&&V(e.catch),bl=Object.prototype.toString,mr=e=>bl.call(e),yl=e=>mr(e).slice(8,-1),_l=e=>mr(e)==="[object Object]",Aa=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yn=xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wl=/-(\w)/g,Ye=hr(e=>e.replace(wl,(t,n)=>n?n.toUpperCase():"")),xl=/\B([A-Z])/g,Jt=hr(e=>e.replace(xl,"-$1").toLowerCase()),pr=hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tr=hr(e=>e?`on${pr(e)}`:""),gt=(e,t)=>!Object.is(e,t),Nr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},er=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},El=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ui;const No=()=>ui||(ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sa(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?Pl(r):Sa(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(he(e)||le(e))return e}const kl=/;(?![^(]*\))/g,Al=/:([^]+)/,Sl=/\/\*[^]*?\*\//g;function Pl(e){const t={};return e.replace(Sl,"").split(kl).forEach(n=>{if(n){const r=n.split(Al);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Pa(e){let t="";if(he(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=Pa(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cl=xa(Ol);function Mo(e){return!!e||e===""}/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class Rl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Il(e,t=Me){t&&t.active&&t.effects.push(e)}function Tl(){return Me}let Pt;class Oa{constructor(t,n,r,a){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Il(this,a)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Tt();for(const t of this.deps)if(t.computed&&(Nl(t.computed),this._dirtyLevel>=2))break;Nt(),this._queryings--}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ht,n=Pt;try{return ht=!0,Pt=this,this._runnings++,di(this),this.fn()}finally{mi(this),this._runnings--,Pt=n,ht=t}}stop(){var t;this.active&&(di(this),mi(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Nl(e){return e.value}function di(e){e._trackId++,e._depsLength=0}function mi(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Lo(e.deps[t],e);e.deps.length=e._depsLength}}function Lo(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let ht=!0,Yr=0;const $o=[];function Tt(){$o.push(ht),ht=!1}function Nt(){const e=$o.pop();ht=e===void 0?!0:e}function Ca(){Yr++}function Ra(){for(Yr--;!Yr&&Gr.length;)Gr.shift()()}function Fo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Lo(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Gr=[];function jo(e,t,n){Ca();for(const r of e.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<t&&(!r._runnings||t!==2)){const a=r._dirtyLevel;r._dirtyLevel=t,a===0&&(!r._queryings||t!==2)&&(r.trigger(),r.scheduler&&Gr.push(r.scheduler))}Ra()}const zo=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},qr=new WeakMap,Ot=Symbol(""),Xr=Symbol("");function Ae(e,t,n){if(ht&&Pt){let r=qr.get(e);r||qr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=zo(()=>r.delete(n))),Fo(Pt,a)}}function Qe(e,t,n,r,a,i){const o=qr.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&U(e)){const s=Number(r);o.forEach((f,c)=>{(c==="length"||!dr(c)&&c>=s)&&l.push(f)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":U(e)?Aa(n)&&l.push(o.get("length")):(l.push(o.get(Ot)),ln(e)&&l.push(o.get(Xr)));break;case"delete":U(e)||(l.push(o.get(Ot)),ln(e)&&l.push(o.get(Xr)));break;case"set":ln(e)&&l.push(o.get(Ot));break}Ca();for(const s of l)s&&jo(s,3);Ra()}const Ml=xa("__proto__,__v_isRef,__isVue"),Do=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(dr)),hi=Ll();function Ll(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(G)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt(),Ca();const r=G(this)[t].apply(this,n);return Ra(),Nt(),r}}),e}function $l(e){const t=G(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Ho{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?ql:Wo:i?Vo:Bo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=U(t);if(!a){if(o&&Y(hi,n))return Reflect.get(hi,n,r);if(n==="hasOwnProperty")return $l}const l=Reflect.get(t,n,r);return(dr(n)?Do.has(n):Ml(n))||(a||Ae(t,"get",n),i)?l:Se(l)?o&&Aa(n)?l:l.value:le(l)?a?Yo(l):vr(l):l}}class Uo extends Ho{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(!this._shallow){const s=Yt(i);if(!tr(r)&&!Yt(r)&&(i=G(i),r=G(r)),!U(t)&&Se(i)&&!Se(r))return s?!1:(i.value=r,!0)}const o=U(t)&&Aa(n)?Number(n)<t.length:Y(t,n),l=Reflect.set(t,n,r,a);return t===G(a)&&(o?gt(r,i)&&Qe(t,"set",n,r):Qe(t,"add",n,r)),l}deleteProperty(t,n){const r=Y(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Qe(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!dr(n)||!Do.has(n))&&Ae(t,"has",n),r}ownKeys(t){return Ae(t,"iterate",U(t)?"length":Ot),Reflect.ownKeys(t)}}class Fl extends Ho{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const jl=new Uo,zl=new Fl,Dl=new Uo(!0),Ia=e=>e,gr=e=>Reflect.getPrototypeOf(e);function Tn(e,t,n=!1,r=!1){e=e.__v_raw;const a=G(e),i=G(t);n||(gt(t,i)&&Ae(a,"get",t),Ae(a,"get",i));const{has:o}=gr(a),l=r?Ia:n?Ma:gn;if(o.call(a,t))return l(e.get(t));if(o.call(a,i))return l(e.get(i));e!==a&&e.get(t)}function Nn(e,t=!1){const n=this.__v_raw,r=G(n),a=G(e);return t||(gt(e,a)&&Ae(r,"has",e),Ae(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Mn(e,t=!1){return e=e.__v_raw,!t&&Ae(G(e),"iterate",Ot),Reflect.get(e,"size",e)}function pi(e){e=G(e);const t=G(this);return gr(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function gi(e,t){t=G(t);const n=G(this),{has:r,get:a}=gr(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?gt(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function vi(e){const t=G(this),{has:n,get:r}=gr(t);let a=n.call(t,e);a||(e=G(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Qe(t,"delete",e,void 0),i}function bi(){const e=G(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function Ln(e,t){return function(r,a){const i=this,o=i.__v_raw,l=G(o),s=t?Ia:e?Ma:gn;return!e&&Ae(l,"iterate",Ot),o.forEach((f,c)=>r.call(a,s(f),s(c),i))}}function $n(e,t,n){return function(...r){const a=this.__v_raw,i=G(a),o=ln(i),l=e==="entries"||e===Symbol.iterator&&o,s=e==="keys"&&o,f=a[e](...r),c=n?Ia:t?Ma:gn;return!t&&Ae(i,"iterate",s?Xr:Ot),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:l?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Hl(){const e={get(i){return Tn(this,i)},get size(){return Mn(this)},has:Nn,add:pi,set:gi,delete:vi,clear:bi,forEach:Ln(!1,!1)},t={get(i){return Tn(this,i,!1,!0)},get size(){return Mn(this)},has:Nn,add:pi,set:gi,delete:vi,clear:bi,forEach:Ln(!1,!0)},n={get(i){return Tn(this,i,!0)},get size(){return Mn(this,!0)},has(i){return Nn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Ln(!0,!1)},r={get(i){return Tn(this,i,!0,!0)},get size(){return Mn(this,!0)},has(i){return Nn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=$n(i,!1,!1),n[i]=$n(i,!0,!1),t[i]=$n(i,!1,!0),r[i]=$n(i,!0,!0)}),[e,n,t,r]}const[Ul,Bl,Vl,Wl]=Hl();function Ta(e,t){const n=t?e?Wl:Vl:e?Bl:Ul;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const Kl={get:Ta(!1,!1)},Yl={get:Ta(!1,!0)},Gl={get:Ta(!0,!1)},Bo=new WeakMap,Vo=new WeakMap,Wo=new WeakMap,ql=new WeakMap;function Xl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ql(e){return e.__v_skip||!Object.isExtensible(e)?0:Xl(yl(e))}function vr(e){return Yt(e)?e:Na(e,!1,jl,Kl,Bo)}function Ko(e){return Na(e,!1,Dl,Yl,Vo)}function Yo(e){return Na(e,!0,zl,Gl,Wo)}function Na(e,t,n,r,a){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ql(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return a.set(e,l),l}function Bt(e){return Yt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function tr(e){return!!(e&&e.__v_isShallow)}function Go(e){return Bt(e)||Yt(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function qo(e){return er(e,"__v_skip",!0),e}const gn=e=>le(e)?vr(e):e,Ma=e=>le(e)?Yo(e):e;class Xo{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Oa(()=>t(this._value),()=>Qr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=G(this);return Qo(t),(!t._cacheable||t.effect.dirty)&&gt(t._value,t._value=t.effect.run())&&Qr(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Jl(e,t,n=!1){let r,a;const i=V(e);return i?(r=e,a=Re):(r=e.get,a=e.set),new Xo(r,a,i||!a,n)}function Qo(e){ht&&Pt&&(e=G(e),Fo(Pt,e.dep||(e.dep=zo(()=>e.dep=void 0,e instanceof Xo?e:void 0))))}function Qr(e,t=3,n){e=G(e);const r=e.dep;r&&jo(r,t)}function Se(e){return!!(e&&e.__v_isRef===!0)}function Zl(e){return Jo(e,!1)}function ec(e){return Jo(e,!0)}function Jo(e,t){return Se(e)?e:new tc(e,t)}class tc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:gn(t)}get value(){return Qo(this),this._value}set value(t){const n=this.__v_isShallow||tr(t)||Yt(t);t=n?t:G(t),gt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:gn(t),Qr(this,3))}}function Ct(e){return Se(e)?e.value:e}const nc={get:(e,t,n)=>Ct(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Se(a)&&!Se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Zo(e){return Bt(e)?e:new Proxy(e,nc)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){br(i,t,n)}return a}function je(e,t,n,r){if(V(e)){const i=pt(e,t,n,r);return i&&To(i)&&i.catch(o=>{br(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function br(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,l=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,l)===!1)return}i=i.parent}const s=t.appContext.config.errorHandler;if(s){pt(s,null,10,[e,o,l]);return}}rc(e,n,a,r)}function rc(e,t,n,r=!0){console.error(e)}let vn=!1,Jr=!1;const ve=[];let We=0;const Vt=[];let ft=null,kt=0;const es=Promise.resolve();let La=null;function ts(e){const t=La||es;return e?t.then(this?e.bind(this):e):t}function ac(e){let t=We+1,n=ve.length;for(;t<n;){const r=t+n>>>1,a=ve[r],i=bn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function $a(e){(!ve.length||!ve.includes(e,vn&&e.allowRecurse?We+1:We))&&(e.id==null?ve.push(e):ve.splice(ac(e.id),0,e),ns())}function ns(){!vn&&!Jr&&(Jr=!0,La=es.then(as))}function ic(e){const t=ve.indexOf(e);t>We&&ve.splice(t,1)}function oc(e){U(e)?Vt.push(...e):(!ft||!ft.includes(e,e.allowRecurse?kt+1:kt))&&Vt.push(e),ns()}function yi(e,t,n=vn?We+1:0){for(;n<ve.length;n++){const r=ve[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ve.splice(n,1),n--,r()}}}function rs(e){if(Vt.length){const t=[...new Set(Vt)].sort((n,r)=>bn(n)-bn(r));if(Vt.length=0,ft){ft.push(...t);return}for(ft=t,kt=0;kt<ft.length;kt++)ft[kt]();ft=null,kt=0}}const bn=e=>e.id==null?1/0:e.id,sc=(e,t)=>{const n=bn(e)-bn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function as(e){Jr=!1,vn=!0,ve.sort(sc);try{for(We=0;We<ve.length;We++){const t=ve[We];t&&t.active!==!1&&pt(t,null,14)}}finally{We=0,ve.length=0,rs(),vn=!1,La=null,(ve.length||Vt.length)&&as()}}function lc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||oe;h&&(a=n.map(g=>he(g)?g.trim():g)),m&&(a=n.map(El))}let l,s=r[l=Tr(t)]||r[l=Tr(Ye(t))];!s&&i&&(s=r[l=Tr(Jt(t))]),s&&je(s,e,6,a);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,je(f,e,6,a)}}function is(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},l=!1;if(!V(e)){const s=f=>{const c=is(f,t,!0);c&&(l=!0,me(o,c))};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!i&&!l?(le(e)&&r.set(e,null),null):(U(i)?i.forEach(s=>o[s]=null):me(o,i),le(e)&&r.set(e,o),o)}function yr(e,t){return!e||!ur(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Jt(t))||Y(e,t))}let Le=null,_r=null;function nr(e){const t=Le;return Le=e,_r=e&&e.type.__scopeId||null,t}function wr(e){_r=e}function xr(){_r=null}function Wt(e,t=Le,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ri(-1);const i=nr(t);let o;try{o=e(...a)}finally{nr(i),r._d&&Ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:l,attrs:s,emit:f,render:c,renderCache:m,data:h,setupState:g,ctx:S,inheritAttrs:R}=e;let $,y;const w=nr(e);try{if(n.shapeFlag&4){const z=a||r,B=z;$=Ve(c.call(B,z,m,i,g,h,S)),y=s}else{const z=t;$=Ve(z.length>1?z(i,{attrs:s,slots:l,emit:f}):z(i,null)),y=t.props?s:cc(s)}}catch(z){un.length=0,br(z,e,1),$=Q(yn)}let C=$;if(y&&R!==!1){const z=Object.keys(y),{shapeFlag:B}=C;z.length&&B&7&&(o&&z.some(Ea)&&(y=fc(y,o)),C=Gt(C,y))}return n.dirs&&(C=Gt(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),$=C,nr(w),$}const cc=e=>{let t;for(const n in e)(n==="class"||n==="style"||ur(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const r in e)(!Ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function uc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:l,patchFlag:s}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return r?_i(r,o,f):!!o;if(s&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!yr(f,h))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?_i(r,o,f):!0:!!o;return!1}function _i(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!yr(n,i))return!0}return!1}function dc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const os="components";function Fa(e,t){return hc(os,e,!0,t)||e}const mc=Symbol.for("v-ndc");function hc(e,t,n=!0,r=!1){const a=Le||be;if(a){const i=a.type;if(e===os){const l=cf(i,!1);if(l&&(l===t||l===Ye(t)||l===pr(Ye(t))))return i}const o=wi(a[e]||i[e],t)||wi(a.appContext[e],t);return!o&&r?i:o}}function wi(e,t){return e&&(e[t]||e[Ye(t)]||e[pr(Ye(t))])}const pc=e=>e.__isSuspense;function gc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):oc(e)}const vc=Symbol.for("v-scx"),bc=()=>Je(vc),Fn={};function cn(e,t,n){return ss(e,t,n)}function ss(e,t,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:l}=oe){if(t&&i){const j=t;t=(...te)=>{j(...te),B()}}const s=be,f=j=>r===!0?j:zt(j,r===!1?1:void 0);let c,m=!1,h=!1;if(Se(e)?(c=()=>e.value,m=tr(e)):Bt(e)?(c=()=>f(e),m=!0):U(e)?(h=!0,m=e.some(j=>Bt(j)||tr(j)),c=()=>e.map(j=>{if(Se(j))return j.value;if(Bt(j))return f(j);if(V(j))return pt(j,s,2)})):V(e)?t?c=()=>pt(e,s,2):c=()=>(g&&g(),je(e,s,3,[S])):c=Re,t&&r){const j=c;c=()=>zt(j())}let g,S=j=>{g=C.onStop=()=>{pt(j,s,4),g=C.onStop=void 0}},R;if(Sr)if(S=Re,t?n&&je(t,s,3,[c(),h?[]:void 0,S]):c(),a==="sync"){const j=bc();R=j.__watcherHandles||(j.__watcherHandles=[])}else return Re;let $=h?new Array(e.length).fill(Fn):Fn;const y=()=>{if(!(!C.active||!C.dirty))if(t){const j=C.run();(r||m||(h?j.some((te,pe)=>gt(te,$[pe])):gt(j,$)))&&(g&&g(),je(t,s,3,[j,$===Fn?void 0:h&&$[0]===Fn?[]:$,S]),$=j)}else C.run()};y.allowRecurse=!!t;let w;a==="sync"?w=y:a==="post"?w=()=>ke(y,s&&s.suspense):(y.pre=!0,s&&(y.id=s.uid),w=()=>$a(y));const C=new Oa(c,Re,w),z=Tl(),B=()=>{C.stop(),z&&ka(z.effects,C)};return t?n?y():$=C.run():a==="post"?ke(C.run.bind(C),s&&s.suspense):C.run(),R&&R.push(B),B}function yc(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?ls(r,e):()=>r[e]:e.bind(r,r);let i;V(t)?i=t:(i=t.handler,n=t);const o=Pn(this),l=ss(a,i.bind(r),n);return o(),l}function ls(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function zt(e,t,n=0,r){if(!le(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),Se(e))zt(e.value,t,n,r);else if(U(e))for(let a=0;a<e.length;a++)zt(e[a],t,n,r);else if(vl(e)||ln(e))e.forEach(a=>{zt(a,t,n,r)});else if(_l(e))for(const a in e)zt(e[a],t,n,r);return e}function xt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const l=a[o];i&&(l.oldValue=i[o].value);let s=l.dir[r];s&&(Tt(),je(s,n,8,[e.el,l,e,t]),Nt())}}/*! #__NO_SIDE_EFFECTS__ */function ja(e,t){return V(e)?me({name:e.name},t,{setup:e}):e}const Gn=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function _c(e,t){fs(e,"a",t)}function wc(e,t){fs(e,"da",t)}function fs(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Er(t,r,n),n){let a=n.parent;for(;a&&a.parent;)cs(a.parent.vnode)&&xc(r,t,n,a),a=a.parent}}function xc(e,t,n,r){const a=Er(t,e,r,!0);us(()=>{ka(r[t],a)},n)}function Er(e,t,n=be,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Tt();const l=Pn(n),s=je(t,n,e,o);return l(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=be)=>(!Sr||e==="sp")&&Er(e,(...r)=>t(...r),n),Ec=nt("bm"),kc=nt("m"),Ac=nt("bu"),Sc=nt("u"),Pc=nt("bum"),us=nt("um"),Oc=nt("sp"),Cc=nt("rtg"),Rc=nt("rtc");function Ic(e,t=be){Er("ec",e,t)}const Zr=e=>e?ks(e)?Ua(e)||e.proxy:Zr(e.parent):null,fn=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zr(e.parent),$root:e=>Zr(e.root),$emit:e=>e.emit,$options:e=>za(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,$a(e.update)}),$nextTick:e=>e.n||(e.n=ts.bind(e.proxy)),$watch:e=>yc.bind(e)}),Lr=(e,t)=>e!==oe&&!e.__isScriptSetup&&Y(e,t),Tc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:l,appContext:s}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Lr(r,t))return o[t]=1,r[t];if(a!==oe&&Y(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,i[t];if(n!==oe&&Y(n,t))return o[t]=4,n[t];ea&&(o[t]=0)}}const c=fn[t];let m,h;if(c)return t==="$attrs"&&Ae(e,"get",t),c(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==oe&&Y(n,t))return o[t]=4,n[t];if(h=s.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Lr(a,t)?(a[t]=n,!0):r!==oe&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let l;return!!n[o]||e!==oe&&Y(e,o)||Lr(t,o)||(l=i[0])&&Y(l,o)||Y(r,o)||Y(fn,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function xi(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ea=!0;function Nc(e){const t=za(e),n=e.proxy,r=e.ctx;ea=!1,t.beforeCreate&&Ei(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:l,provide:s,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:g,updated:S,activated:R,deactivated:$,beforeDestroy:y,beforeUnmount:w,destroyed:C,unmounted:z,render:B,renderTracked:j,renderTriggered:te,errorCaptured:pe,serverPrefetch:ye,expose:Ce,inheritAttrs:it,components:wt,directives:De,filters:tn}=t;if(f&&Mc(f,r,null),o)for(const Z in o){const q=o[Z];V(q)&&(r[Z]=q.bind(n))}if(a){const Z=a.call(n,n);le(Z)&&(e.data=vr(Z))}if(ea=!0,i)for(const Z in i){const q=i[Z],Ge=V(q)?q.bind(n,n):V(q.get)?q.get.bind(n,n):Re,ot=!V(q)&&V(q.set)?q.set.bind(n):Re,He=de({get:Ge,set:ot});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>He.value,set:xe=>He.value=xe})}if(l)for(const Z in l)ds(l[Z],r,n,Z);if(s){const Z=V(s)?s.call(n):s;Reflect.ownKeys(Z).forEach(q=>{qn(q,Z[q])})}c&&Ei(c,e,"c");function fe(Z,q){U(q)?q.forEach(Ge=>Z(Ge.bind(n))):q&&Z(q.bind(n))}if(fe(Ec,m),fe(kc,h),fe(Ac,g),fe(Sc,S),fe(_c,R),fe(wc,$),fe(Ic,pe),fe(Rc,j),fe(Cc,te),fe(Pc,w),fe(us,z),fe(Oc,ye),U(Ce))if(Ce.length){const Z=e.exposed||(e.exposed={});Ce.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:Ge=>n[q]=Ge})})}else e.exposed||(e.exposed={});B&&e.render===Re&&(e.render=B),it!=null&&(e.inheritAttrs=it),wt&&(e.components=wt),De&&(e.directives=De)}function Mc(e,t,n=Re){U(e)&&(e=ta(e));for(const r in e){const a=e[r];let i;le(a)?"default"in a?i=Je(a.from||r,a.default,!0):i=Je(a.from||r):i=Je(a),Se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ei(e,t,n){je(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ds(e,t,n,r){const a=r.includes(".")?ls(n,r):()=>n[r];if(he(e)){const i=t[e];V(i)&&cn(a,i)}else if(V(e))cn(a,e.bind(n));else if(le(e))if(U(e))e.forEach(i=>ds(i,t,n,r));else{const i=V(e.handler)?e.handler.bind(n):t[e.handler];V(i)&&cn(a,i,e)}}function za(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let s;return l?s=l:!a.length&&!n&&!r?s=t:(s={},a.length&&a.forEach(f=>rr(s,f,o,!0)),rr(s,t,o)),le(t)&&i.set(t,s),s}function rr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&rr(e,i,n,!0),a&&a.forEach(o=>rr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=Lc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Lc={data:ki,props:Ai,emits:Ai,methods:on,computed:on,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:on,directives:on,watch:Fc,provide:ki,inject:$c};function ki(e,t){return t?e?function(){return me(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function $c(e,t){return on(ta(e),ta(t))}function ta(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function on(e,t){return e?me(Object.create(null),e,t):t}function Ai(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:me(Object.create(null),xi(e),xi(t??{})):t}function Fc(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function ms(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jc=0;function zc(e,t){return function(r,a=null){V(r)||(r=me({},r)),a!=null&&!le(a)&&(a=null);const i=ms(),o=new WeakSet;let l=!1;const s=i.app={_uid:jc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:uf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&V(f.install)?(o.add(f),f.install(s,...c)):V(f)&&(o.add(f),f(s,...c))),s},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),s},component(f,c){return c?(i.components[f]=c,s):i.components[f]},directive(f,c){return c?(i.directives[f]=c,s):i.directives[f]},mount(f,c,m){if(!l){const h=Q(r,a);return h.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),l=!0,s._container=f,f.__vue_app__=s,Ua(h.component)||h.component.proxy}},unmount(){l&&(e(null,s._container),delete s._container.__vue_app__)},provide(f,c){return i.provides[f]=c,s},runWithContext(f){ar=s;try{return f()}finally{ar=null}}};return s}}let ar=null;function qn(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function Je(e,t,n=!1){const r=be||Le;if(r||ar){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ar._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}function Dc(e,t,n,r=!1){const a={},i={};er(i,Ar,1),e.propsDefaults=Object.create(null),hs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ko(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Hc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,l=G(a),[s]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(yr(e.emitsOptions,h))continue;const g=t[h];if(s)if(Y(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const S=Ye(h);a[S]=na(s,l,S,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{hs(e,t,a,i)&&(f=!0);let c;for(const m in l)(!t||!Y(t,m)&&((c=Jt(m))===m||!Y(t,c)))&&(s?n&&(n[m]!==void 0||n[c]!==void 0)&&(a[m]=na(s,l,m,void 0,e,!0)):delete a[m]);if(i!==l)for(const m in i)(!t||!Y(t,m))&&(delete i[m],f=!0)}f&&Qe(e,"set","$attrs")}function hs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,l;if(t)for(let s in t){if(Yn(s))continue;const f=t[s];let c;a&&Y(a,c=Ye(s))?!i||!i.includes(c)?n[c]=f:(l||(l={}))[c]=f:yr(e.emitsOptions,s)||(!(s in r)||f!==r[s])&&(r[s]=f,o=!0)}if(i){const s=G(n),f=l||oe;for(let c=0;c<i.length;c++){const m=i[c];n[m]=na(a,s,m,f[m],e,!Y(f,m))}}return o}function na(e,t,n,r,a,i){const o=e[n];if(o!=null){const l=Y(o,"default");if(l&&r===void 0){const s=o.default;if(o.type!==Function&&!o.skipFactory&&V(s)){const{propsDefaults:f}=a;if(n in f)r=f[n];else{const c=Pn(a);r=f[n]=s.call(null,t),c()}}else r=s}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Jt(n))&&(r=!0))}return r}function ps(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},l=[];let s=!1;if(!V(e)){const c=m=>{s=!0;const[h,g]=ps(m,t,!0);me(o,h),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!s)return le(e)&&r.set(e,Ut),Ut;if(U(i))for(let c=0;c<i.length;c++){const m=Ye(i[c]);Si(m)&&(o[m]=oe)}else if(i)for(const c in i){const m=Ye(c);if(Si(m)){const h=i[c],g=o[m]=U(h)||V(h)?{type:h}:me({},h);if(g){const S=Ci(Boolean,g.type),R=Ci(String,g.type);g[0]=S>-1,g[1]=R<0||S<R,(S>-1||Y(g,"default"))&&l.push(m)}}}const f=[o,l];return le(e)&&r.set(e,f),f}function Si(e){return e[0]!=="$"}function Pi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Oi(e,t){return Pi(e)===Pi(t)}function Ci(e,t){return U(t)?t.findIndex(n=>Oi(n,e)):V(t)&&Oi(t,e)?0:-1}const gs=e=>e[0]==="_"||e==="$stable",Da=e=>U(e)?e.map(Ve):[Ve(e)],Uc=(e,t,n)=>{if(t._n)return t;const r=Wt((...a)=>Da(t(...a)),n);return r._c=!1,r},vs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(gs(a))continue;const i=e[a];if(V(i))t[a]=Uc(a,i,r);else if(i!=null){const o=Da(i);t[a]=()=>o}}},bs=(e,t)=>{const n=Da(t);e.slots.default=()=>n},Bc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),er(t,"_",n)):vs(t,e.slots={})}else e.slots={},t&&bs(e,t);er(e.slots,Ar,1)},Vc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=oe;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(me(a,t),!n&&l===1&&delete a._):(i=!t.$stable,vs(t,a)),o=t}else t&&(bs(e,t),o={default:1});if(i)for(const l in a)!gs(l)&&o[l]==null&&delete a[l]};function ra(e,t,n,r,a=!1){if(U(e)){e.forEach((h,g)=>ra(h,t&&(U(t)?t[g]:t),n,r,a));return}if(Gn(r)&&!a)return;const i=r.shapeFlag&4?Ua(r.component)||r.component.proxy:r.el,o=a?null:i,{i:l,r:s}=e,f=t&&t.r,c=l.refs===oe?l.refs={}:l.refs,m=l.setupState;if(f!=null&&f!==s&&(he(f)?(c[f]=null,Y(m,f)&&(m[f]=null)):Se(f)&&(f.value=null)),V(s))pt(s,l,12,[o,c]);else{const h=he(s),g=Se(s);if(h||g){const S=()=>{if(e.f){const R=h?Y(m,s)?m[s]:c[s]:s.value;a?U(R)&&ka(R,i):U(R)?R.includes(i)||R.push(i):h?(c[s]=[i],Y(m,s)&&(m[s]=c[s])):(s.value=[i],e.k&&(c[e.k]=s.value))}else h?(c[s]=o,Y(m,s)&&(m[s]=o)):g&&(s.value=o,e.k&&(c[e.k]=o))};o?(S.id=-1,ke(S,n)):S()}}}const ke=gc;function Wc(e){return Kc(e)}function Kc(e,t){const n=No();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:l,createComment:s,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:g=Re,insertStaticContent:S}=e,R=(u,d,p,_=null,v=null,k=null,O=void 0,E=null,A=!!d.dynamicChildren)=>{if(u===d)return;u&&!rn(u,d)&&(_=b(u),xe(u,v,k,!0),u=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:x,ref:N,shapeFlag:D}=d;switch(x){case kr:$(u,d,p,_);break;case yn:y(u,d,p,_);break;case Xn:u==null&&w(d,p,_,O);break;case we:wt(u,d,p,_,v,k,O,E,A);break;default:D&1?B(u,d,p,_,v,k,O,E,A):D&6?De(u,d,p,_,v,k,O,E,A):(D&64||D&128)&&x.process(u,d,p,_,v,k,O,E,A,L)}N!=null&&v&&ra(N,u&&u.ref,k,d||u,!d)},$=(u,d,p,_)=>{if(u==null)r(d.el=l(d.children),p,_);else{const v=d.el=u.el;d.children!==u.children&&f(v,d.children)}},y=(u,d,p,_)=>{u==null?r(d.el=s(d.children||""),p,_):d.el=u.el},w=(u,d,p,_)=>{[u.el,u.anchor]=S(u.children,d,p,_,u.el,u.anchor)},C=({el:u,anchor:d},p,_)=>{let v;for(;u&&u!==d;)v=h(u),r(u,p,_),u=v;r(d,p,_)},z=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),a(u),u=p;a(d)},B=(u,d,p,_,v,k,O,E,A)=>{d.type==="svg"?O="svg":d.type==="math"&&(O="mathml"),u==null?j(d,p,_,v,k,O,E,A):ye(u,d,v,k,O,E,A)},j=(u,d,p,_,v,k,O,E)=>{let A,x;const{props:N,shapeFlag:D,transition:F,dirs:H}=u;if(A=u.el=o(u.type,k,N&&N.is,N),D&8?c(A,u.children):D&16&&pe(u.children,A,null,_,v,$r(u,k),O,E),H&&xt(u,null,_,"created"),te(A,u,u.scopeId,O,_),N){for(const ee in N)ee!=="value"&&!Yn(ee)&&i(A,ee,null,N[ee],k,u.children,_,v,ge);"value"in N&&i(A,"value",null,N.value,k),(x=N.onVnodeBeforeMount)&&Be(x,_,u)}H&&xt(u,null,_,"beforeMount");const K=Yc(v,F);K&&F.beforeEnter(A),r(A,d,p),((x=N&&N.onVnodeMounted)||K||H)&&ke(()=>{x&&Be(x,_,u),K&&F.enter(A),H&&xt(u,null,_,"mounted")},v)},te=(u,d,p,_,v)=>{if(p&&g(u,p),_)for(let k=0;k<_.length;k++)g(u,_[k]);if(v){let k=v.subTree;if(d===k){const O=v.vnode;te(u,O,O.scopeId,O.slotScopeIds,v.parent)}}},pe=(u,d,p,_,v,k,O,E,A=0)=>{for(let x=A;x<u.length;x++){const N=u[x]=E?ut(u[x]):Ve(u[x]);R(null,N,d,p,_,v,k,O,E)}},ye=(u,d,p,_,v,k,O)=>{const E=d.el=u.el;let{patchFlag:A,dynamicChildren:x,dirs:N}=d;A|=u.patchFlag&16;const D=u.props||oe,F=d.props||oe;let H;if(p&&Et(p,!1),(H=F.onVnodeBeforeUpdate)&&Be(H,p,d,u),N&&xt(d,u,p,"beforeUpdate"),p&&Et(p,!0),x?Ce(u.dynamicChildren,x,E,p,_,$r(d,v),k):O||q(u,d,E,null,p,_,$r(d,v),k,!1),A>0){if(A&16)it(E,d,D,F,p,_,v);else if(A&2&&D.class!==F.class&&i(E,"class",null,F.class,v),A&4&&i(E,"style",D.style,F.style,v),A&8){const K=d.dynamicProps;for(let ee=0;ee<K.length;ee++){const ie=K[ee],ue=D[ie],Ne=F[ie];(Ne!==ue||ie==="value")&&i(E,ie,ue,Ne,v,u.children,p,_,ge)}}A&1&&u.children!==d.children&&c(E,d.children)}else!O&&x==null&&it(E,d,D,F,p,_,v);((H=F.onVnodeUpdated)||N)&&ke(()=>{H&&Be(H,p,d,u),N&&xt(d,u,p,"updated")},_)},Ce=(u,d,p,_,v,k,O)=>{for(let E=0;E<d.length;E++){const A=u[E],x=d[E],N=A.el&&(A.type===we||!rn(A,x)||A.shapeFlag&70)?m(A.el):p;R(A,x,N,null,_,v,k,O,!0)}},it=(u,d,p,_,v,k,O)=>{if(p!==_){if(p!==oe)for(const E in p)!Yn(E)&&!(E in _)&&i(u,E,p[E],null,O,d.children,v,k,ge);for(const E in _){if(Yn(E))continue;const A=_[E],x=p[E];A!==x&&E!=="value"&&i(u,E,x,A,O,d.children,v,k,ge)}"value"in _&&i(u,"value",p.value,_.value,O)}},wt=(u,d,p,_,v,k,O,E,A)=>{const x=d.el=u?u.el:l(""),N=d.anchor=u?u.anchor:l("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(r(x,p,_),r(N,p,_),pe(d.children||[],p,N,v,k,O,E,A)):D>0&&D&64&&F&&u.dynamicChildren?(Ce(u.dynamicChildren,F,p,v,k,O,E),(d.key!=null||v&&d===v.subTree)&&ys(u,d,!0)):q(u,d,p,N,v,k,O,E,A)},De=(u,d,p,_,v,k,O,E,A)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,p,_,O,A):tn(d,p,_,v,k,O,A):Mt(u,d,A)},tn=(u,d,p,_,v,k,O)=>{const E=u.component=rf(u,_,v);if(cs(u)&&(E.ctx.renderer=L),af(E),E.asyncDep){if(v&&v.registerDep(E,fe),!u.el){const A=E.subTree=Q(yn);y(null,A,d,p)}}else fe(E,u,d,p,v,k,O)},Mt=(u,d,p)=>{const _=d.component=u.component;if(uc(u,d,p))if(_.asyncDep&&!_.asyncResolved){Z(_,d,p);return}else _.next=d,ic(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},fe=(u,d,p,_,v,k,O)=>{const E=()=>{if(u.isMounted){let{next:N,bu:D,u:F,parent:H,vnode:K}=u;{const Ft=_s(u);if(Ft){N&&(N.el=K.el,Z(u,N,O)),Ft.asyncDep.then(()=>{u.isUnmounted||E()});return}}let ee=N,ie;Et(u,!1),N?(N.el=K.el,Z(u,N,O)):N=K,D&&Nr(D),(ie=N.props&&N.props.onVnodeBeforeUpdate)&&Be(ie,H,N,K),Et(u,!0);const ue=Mr(u),Ne=u.subTree;u.subTree=ue,R(Ne,ue,m(Ne.el),b(Ne),u,v,k),N.el=ue.el,ee===null&&dc(u,ue.el),F&&ke(F,v),(ie=N.props&&N.props.onVnodeUpdated)&&ke(()=>Be(ie,H,N,K),v)}else{let N;const{el:D,props:F}=d,{bm:H,m:K,parent:ee}=u,ie=Gn(d);if(Et(u,!1),H&&Nr(H),!ie&&(N=F&&F.onVnodeBeforeMount)&&Be(N,ee,d),Et(u,!0),D&&ae){const ue=()=>{u.subTree=Mr(u),ae(D,u.subTree,u,v,null)};ie?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=Mr(u);R(null,ue,p,_,u,v,k),d.el=ue.el}if(K&&ke(K,v),!ie&&(N=F&&F.onVnodeMounted)){const ue=d;ke(()=>Be(N,ee,ue),v)}(d.shapeFlag&256||ee&&Gn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&ke(u.a,v),u.isMounted=!0,d=p=_=null}},A=u.effect=new Oa(E,Re,()=>$a(x),u.scope),x=u.update=()=>{A.dirty&&A.run()};x.id=u.uid,Et(u,!0),x()},Z=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Hc(u,d.props,_,p),Vc(u,d.children,p),Tt(),yi(u),Nt()},q=(u,d,p,_,v,k,O,E,A=!1)=>{const x=u&&u.children,N=u?u.shapeFlag:0,D=d.children,{patchFlag:F,shapeFlag:H}=d;if(F>0){if(F&128){ot(x,D,p,_,v,k,O,E,A);return}else if(F&256){Ge(x,D,p,_,v,k,O,E,A);return}}H&8?(N&16&&ge(x,v,k),D!==x&&c(p,D)):N&16?H&16?ot(x,D,p,_,v,k,O,E,A):ge(x,v,k,!0):(N&8&&c(p,""),H&16&&pe(D,p,_,v,k,O,E,A))},Ge=(u,d,p,_,v,k,O,E,A)=>{u=u||Ut,d=d||Ut;const x=u.length,N=d.length,D=Math.min(x,N);let F;for(F=0;F<D;F++){const H=d[F]=A?ut(d[F]):Ve(d[F]);R(u[F],H,p,null,v,k,O,E,A)}x>N?ge(u,v,k,!0,!1,D):pe(d,p,_,v,k,O,E,A,D)},ot=(u,d,p,_,v,k,O,E,A)=>{let x=0;const N=d.length;let D=u.length-1,F=N-1;for(;x<=D&&x<=F;){const H=u[x],K=d[x]=A?ut(d[x]):Ve(d[x]);if(rn(H,K))R(H,K,p,null,v,k,O,E,A);else break;x++}for(;x<=D&&x<=F;){const H=u[D],K=d[F]=A?ut(d[F]):Ve(d[F]);if(rn(H,K))R(H,K,p,null,v,k,O,E,A);else break;D--,F--}if(x>D){if(x<=F){const H=F+1,K=H<N?d[H].el:_;for(;x<=F;)R(null,d[x]=A?ut(d[x]):Ve(d[x]),p,K,v,k,O,E,A),x++}}else if(x>F)for(;x<=D;)xe(u[x],v,k,!0),x++;else{const H=x,K=x,ee=new Map;for(x=K;x<=F;x++){const Pe=d[x]=A?ut(d[x]):Ve(d[x]);Pe.key!=null&&ee.set(Pe.key,x)}let ie,ue=0;const Ne=F-K+1;let Ft=!1,li=0;const nn=new Array(Ne);for(x=0;x<Ne;x++)nn[x]=0;for(x=H;x<=D;x++){const Pe=u[x];if(ue>=Ne){xe(Pe,v,k,!0);continue}let Ue;if(Pe.key!=null)Ue=ee.get(Pe.key);else for(ie=K;ie<=F;ie++)if(nn[ie-K]===0&&rn(Pe,d[ie])){Ue=ie;break}Ue===void 0?xe(Pe,v,k,!0):(nn[Ue-K]=x+1,Ue>=li?li=Ue:Ft=!0,R(Pe,d[Ue],p,null,v,k,O,E,A),ue++)}const ci=Ft?Gc(nn):Ut;for(ie=ci.length-1,x=Ne-1;x>=0;x--){const Pe=K+x,Ue=d[Pe],fi=Pe+1<N?d[Pe+1].el:_;nn[x]===0?R(null,Ue,p,fi,v,k,O,E,A):Ft&&(ie<0||x!==ci[ie]?He(Ue,p,fi,2):ie--)}}},He=(u,d,p,_,v=null)=>{const{el:k,type:O,transition:E,children:A,shapeFlag:x}=u;if(x&6){He(u.component.subTree,d,p,_);return}if(x&128){u.suspense.move(d,p,_);return}if(x&64){O.move(u,d,p,L);return}if(O===we){r(k,d,p);for(let D=0;D<A.length;D++)He(A[D],d,p,_);r(u.anchor,d,p);return}if(O===Xn){C(u,d,p);return}if(_!==2&&x&1&&E)if(_===0)E.beforeEnter(k),r(k,d,p),ke(()=>E.enter(k),v);else{const{leave:D,delayLeave:F,afterLeave:H}=E,K=()=>r(k,d,p),ee=()=>{D(k,()=>{K(),H&&H()})};F?F(k,K,ee):ee()}else r(k,d,p)},xe=(u,d,p,_=!1,v=!1)=>{const{type:k,props:O,ref:E,children:A,dynamicChildren:x,shapeFlag:N,patchFlag:D,dirs:F}=u;if(E!=null&&ra(E,null,p,u,!0),N&256){d.ctx.deactivate(u);return}const H=N&1&&F,K=!Gn(u);let ee;if(K&&(ee=O&&O.onVnodeBeforeUnmount)&&Be(ee,d,u),N&6)In(u.component,p,_);else{if(N&128){u.suspense.unmount(p,_);return}H&&xt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,p,v,L,_):x&&(k!==we||D>0&&D&64)?ge(x,d,p,!1,!0):(k===we&&D&384||!v&&N&16)&&ge(A,d,p),_&&Lt(u)}(K&&(ee=O&&O.onVnodeUnmounted)||H)&&ke(()=>{ee&&Be(ee,d,u),H&&xt(u,null,d,"unmounted")},p)},Lt=u=>{const{type:d,el:p,anchor:_,transition:v}=u;if(d===we){$t(p,_);return}if(d===Xn){z(u);return}const k=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:E}=v,A=()=>O(p,k);E?E(u.el,k,A):A()}else k()},$t=(u,d)=>{let p;for(;u!==d;)p=h(u),a(u),u=p;a(d)},In=(u,d,p)=>{const{bum:_,scope:v,update:k,subTree:O,um:E}=u;_&&Nr(_),v.stop(),k&&(k.active=!1,xe(O,u,d,p)),E&&ke(E,d),ke(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ge=(u,d,p,_=!1,v=!1,k=0)=>{for(let O=k;O<u.length;O++)xe(u[O],d,p,_,v)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el);let T=!1;const P=(u,d,p)=>{u==null?d._vnode&&xe(d._vnode,null,null,!0):R(d._vnode||null,u,d,null,null,null,p),T||(T=!0,yi(),rs(),T=!1),d._vnode=u},L={p:R,um:xe,m:He,r:Lt,mt:tn,mc:pe,pc:q,pbc:Ce,n:b,o:e};let X,ae;return t&&([X,ae]=t(L)),{render:P,hydrate:X,createApp:zc(P,X)}}function $r({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Yc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ys(e,t,n=!1){const r=e.children,a=t.children;if(U(r)&&U(a))for(let i=0;i<r.length;i++){const o=r[i];let l=a[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[i]=ut(a[i]),l.el=o.el),n||ys(o,l)),l.type===kr&&(l.el=o.el)}}function Gc(e){const t=e.slice(),n=[0];let r,a,i,o,l;const s=e.length;for(r=0;r<s;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<f?i=l+1:o=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function _s(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:_s(t)}const qc=e=>e.__isTeleport,we=Symbol.for("v-fgt"),kr=Symbol.for("v-txt"),yn=Symbol.for("v-cmt"),Xn=Symbol.for("v-stc"),un=[];let $e=null;function Ie(e=!1){un.push($e=e?null:[])}function Xc(){un.pop(),$e=un[un.length-1]||null}let _n=1;function Ri(e){_n+=e}function Qc(e){return e.dynamicChildren=_n>0?$e||Ut:null,Xc(),_n>0&&$e&&$e.push(e),e}function Te(e,t,n,r,a,i){return Qc(W(e,t,n,r,a,i,!0))}function aa(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Ar="__vInternal",ws=({key:e})=>e??null,Qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||Se(e)||V(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function W(e,t=null,n=null,r=0,a=null,i=e===we?0:1,o=!1,l=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ws(t),ref:t&&Qn(t),scopeId:_r,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Le};return l?(Ha(s,n),i&128&&e.normalize(s)):n&&(s.shapeFlag|=he(n)?8:16),_n>0&&!o&&$e&&(s.patchFlag>0||i&6)&&s.patchFlag!==32&&$e.push(s),s}const Q=Jc;function Jc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===mc)&&(e=yn),aa(e)){const l=Gt(e,t,!0);return n&&Ha(l,n),_n>0&&!i&&$e&&(l.shapeFlag&6?$e[$e.indexOf(e)]=l:$e.push(l)),l.patchFlag|=-2,l}if(ff(e)&&(e=e.__vccOpts),t){t=Zc(t);let{class:l,style:s}=t;l&&!he(l)&&(t.class=Pa(l)),le(s)&&(Go(s)&&!U(s)&&(s=me({},s)),t.style=Sa(s))}const o=he(e)?1:pc(e)?128:qc(e)?64:le(e)?4:V(e)?2:0;return W(e,t,n,r,a,o,i,!0)}function Zc(e){return e?Go(e)||Ar in e?me({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,l=t?ef(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ws(l),ref:t&&t.ref?n&&a?U(a)?a.concat(Qn(t)):[a,Qn(t)]:Qn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function xs(e=" ",t=0){return Q(kr,null,e,t)}function Es(e,t){const n=Q(Xn,null,e);return n.staticCount=t,n}function Ve(e){return e==null||typeof e=="boolean"?Q(yn):U(e)?Q(we,null,e.slice()):typeof e=="object"?ut(e):Q(kr,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function Ha(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ha(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Ar in t)?t._ctx=Le:a===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[xs(t)]):n=8);e.children=t,e.shapeFlag|=n}function ef(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Pa([t.class,r.class]));else if(a==="style")t.style=Sa([t.style,r.style]);else if(ur(a)){const i=t[a],o=r[a];o&&i!==o&&!(U(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Be(e,t,n,r=null){je(e,t,7,[n,r])}const tf=ms();let nf=0;function rf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||tf,i={uid:nf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ps(r,a),emitsOptions:is(r,a),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=lc.bind(null,i),e.ce&&e.ce(i),i}let be=null,ir,ia;{const e=No(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};ir=t("__VUE_INSTANCE_SETTERS__",n=>be=n),ia=t("__VUE_SSR_SETTERS__",n=>Sr=n)}const Pn=e=>{const t=be;return ir(e),e.scope.on(),()=>{e.scope.off(),ir(t)}},Ii=()=>{be&&be.scope.off(),ir(null)};function ks(e){return e.vnode.shapeFlag&4}let Sr=!1;function af(e,t=!1){t&&ia(t);const{props:n,children:r}=e.vnode,a=ks(e);Dc(e,n,a,t),Bc(e,r);const i=a?of(e,t):void 0;return t&&ia(!1),i}function of(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=qo(new Proxy(e.ctx,Tc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?lf(e):null,i=Pn(e);Tt();const o=pt(r,e,0,[e.props,a]);if(Nt(),i(),To(o)){if(o.then(Ii,Ii),t)return o.then(l=>{Ti(e,l,t)}).catch(l=>{br(l,e,0)});e.asyncDep=o}else Ti(e,o,t)}else As(e,t)}function Ti(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Zo(t)),As(e,n)}let Ni;function As(e,t,n){const r=e.type;if(!e.render){if(!t&&Ni&&!r.render){const a=r.template||za(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:s}=r,f=me(me({isCustomElement:i,delimiters:l},o),s);r.render=Ni(a,f)}}e.render=r.render||Re}{const a=Pn(e);Tt();try{Nc(e)}finally{Nt(),a()}}}function sf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}}))}function lf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return sf(e)},slots:e.slots,emit:e.emit,expose:t}}function Ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zo(qo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fn)return fn[n](e)},has(t,n){return n in t||n in fn}}))}function cf(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function ff(e){return V(e)&&"__vccOpts"in e}const de=(e,t)=>Jl(e,t,Sr);function Ba(e,t,n){const r=arguments.length;return r===2?le(t)&&!U(t)?aa(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&aa(n)&&(n=[n]),Q(e,t,n))}const uf="3.4.10";/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const df="http://www.w3.org/2000/svg",mf="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,Mi=dt&&dt.createElement("template"),hf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?dt.createElementNS(df,e):t==="mathml"?dt.createElementNS(mf,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Mi.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const l=Mi.content;if(r==="svg"||r==="mathml"){const s=l.firstChild;for(;s.firstChild;)l.appendChild(s.firstChild);l.removeChild(s)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},pf=Symbol("_vtc");function gf(e,t,n){const r=e[pf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const vf=Symbol("_vod"),bf=Symbol("");function yf(e,t,n){const r=e.style,a=r.display,i=he(n);if(n&&!i){if(t&&!he(t))for(const o in t)n[o]==null&&oa(r,o,"");for(const o in n)oa(r,o,n[o])}else if(i){if(t!==n){const o=r[bf];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");vf in e&&(r.display=a)}const Li=/\s*!important$/;function oa(e,t,n){if(U(n))n.forEach(r=>oa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_f(e,t);Li.test(n)?e.setProperty(Jt(r),n.replace(Li,""),"important"):e[r]=n}}const $i=["Webkit","Moz","ms"],Fr={};function _f(e,t){const n=Fr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return Fr[t]=r;r=pr(r);for(let a=0;a<$i.length;a++){const i=$i[a]+r;if(i in e)return Fr[t]=i}return t}const Fi="http://www.w3.org/1999/xlink";function wf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Fi,t.slice(6,t.length)):e.setAttributeNS(Fi,t,n);else{const i=Cl(t);n==null||i&&!Mo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const f=l==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Mo(n):n==null&&f==="string"?(n="",s=!0):f==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Ef(e,t,n,r){e.addEventListener(t,n,r)}function kf(e,t,n,r){e.removeEventListener(t,n,r)}const ji=Symbol("_vei");function Af(e,t,n,r,a=null){const i=e[ji]||(e[ji]={}),o=i[t];if(r&&o)o.value=r;else{const[l,s]=Sf(t);if(r){const f=i[t]=Cf(r,a);Ef(e,l,f,s)}else o&&(kf(e,l,o,s),i[t]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function Sf(e){let t;if(zi.test(e)){t={};let r;for(;r=e.match(zi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jt(e.slice(2)),t]}let jr=0;const Pf=Promise.resolve(),Of=()=>jr||(Pf.then(()=>jr=0),jr=Date.now());function Cf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Of(),n}function Rf(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,If=(e,t,n,r,a,i,o,l,s)=>{const f=a==="svg";t==="class"?gf(e,r,f):t==="style"?yf(e,n,r):ur(t)?Ea(t)||Af(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tf(e,t,r,f))?xf(e,t,r,i,o,l,s):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wf(e,t,r,f))};function Tf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Di(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Di(t)&&he(n)?!1:t in e}const Nf=me({patchProp:If},hf);let Hi;function Mf(){return Hi||(Hi=Wc(Nf))}const Lf=(...e)=>{const t=Mf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ff(r);if(!a)return;const i=t._component;!V(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,$f(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function $f(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ff(e){return he(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function jf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const J=Object.assign;function zr(e,t){const n={};for(const r in t){const a=t[r];n[r]=ze(a)?a.map(e):e(a)}return n}const dn=()=>{},ze=Array.isArray,zf=/\/$/,Df=e=>e.replace(zf,"");function Dr(e,t,n="/"){let r,a={},i="",o="";const l=t.indexOf("#");let s=t.indexOf("?");return l<s&&l>=0&&(s=-1),s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Vf(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Hf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ui(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Uf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&qt(t.matched[r],n.matched[a])&&Ss(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function qt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ss(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Bf(e[n],t[n]))return!1;return!0}function Bf(e,t){return ze(e)?Bi(e,t):ze(t)?Bi(t,e):e===t}function Bi(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Vf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var wn;(function(e){e.pop="pop",e.push="push"})(wn||(wn={}));var mn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mn||(mn={}));function Wf(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Df(e)}const Kf=/^[^#]+#/;function Yf(e,t){return e.replace(Kf,"#")+t}function Gf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Pr=()=>({left:window.pageXOffset,top:window.pageYOffset});function qf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Gf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Vi(e,t){return(history.state?history.state.position-t:-1)+e}const sa=new Map;function Xf(e,t){sa.set(e,t)}function Qf(e){const t=sa.get(e);return sa.delete(e),t}let Jf=()=>location.protocol+"//"+location.host;function Ps(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let l=a.includes(e.slice(i))?e.slice(i).length:1,s=a.slice(l);return s[0]!=="/"&&(s="/"+s),Ui(s,"")}return Ui(n,e)+r+a}function Zf(e,t,n,r){let a=[],i=[],o=null;const l=({state:h})=>{const g=Ps(e,location),S=n.value,R=t.value;let $=0;if(h){if(n.value=g,t.value=h,o&&o===S){o=null;return}$=R?h.position-R.position:0}else r(g);a.forEach(y=>{y(n.value,S,{delta:$,type:wn.pop,direction:$?$>0?mn.forward:mn.back:mn.unknown})})};function s(){o=n.value}function f(h){a.push(h);const g=()=>{const S=a.indexOf(h);S>-1&&a.splice(S,1)};return i.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(J({},h.state,{scroll:Pr()}),"")}function m(){for(const h of i)h();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:s,listen:f,destroy:m}}function Wi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Pr():null}}function eu(e){const{history:t,location:n}=window,r={value:Ps(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(s,f,c){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+s:Jf()+e+s;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(s,f){const c=J({},t.state,Wi(a.value.back,s,a.value.forward,!0),f,{position:a.value.position});i(s,c,!0),r.value=s}function l(s,f){const c=J({},a.value,t.state,{forward:s,scroll:Pr()});i(c.current,c,!0);const m=J({},Wi(r.value,s,null),{position:c.position+1},f);i(s,m,!1),r.value=s}return{location:r,state:a,push:l,replace:o}}function tu(e){e=Wf(e);const t=eu(e),n=Zf(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=J({location:"",base:e,go:r,createHref:Yf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function nu(e){return typeof e=="string"||e&&typeof e=="object"}function Os(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cs=Symbol("");var Ki;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ki||(Ki={}));function Xt(e,t){return J(new Error,{type:e,[Cs]:!0},t)}function qe(e,t){return e instanceof Error&&Cs in e&&(t==null||!!(e.type&t))}const Yi="[^/]+?",ru={sensitive:!1,strict:!1,start:!0,end:!0},au=/[.+*?^${}()[\]/\\]/g;function iu(e,t){const n=J({},ru,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let m=0;m<f.length;m++){const h=f[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(a+="/"),a+=h.value.replace(au,"\\$&"),g+=40;else if(h.type===1){const{value:S,repeatable:R,optional:$,regexp:y}=h;i.push({name:S,repeatable:R,optional:$});const w=y||Yi;if(w!==Yi){g+=10;try{new RegExp(`(${w})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${w}): `+z.message)}}let C=R?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;m||(C=$&&f.length<2?`(?:/${C})`:"/"+C),$&&(C+="?"),a+=C,g+=20,$&&(g+=-8),R&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function l(f){const c=f.match(o),m={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",S=i[h-1];m[S.name]=g&&S.repeatable?g.split("/"):g}return m}function s(f){let c="",m=!1;for(const h of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:S,repeatable:R,optional:$}=g,y=S in f?f[S]:"";if(ze(y)&&!R)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const w=ze(y)?y.join("/"):y;if(!w)if($)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${S}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:l,stringify:s}}function ou(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function su(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=ou(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Gi(r))return 1;if(Gi(a))return-1}return a.length-r.length}function Gi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lu={type:0,value:""},cu=/[a-zA-Z0-9_]/;function fu(e){if(!e)return[[]];if(e==="/")return[[lu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let l=0,s,f="",c="";function m(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=s}for(;l<e.length;){if(s=e[l++],s==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:s==="/"?(f&&m(),o()):s===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:s==="("?n=2:cu.test(s)?h():(m(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--);break;case 2:s===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+s:n=3:c+=s;break;case 3:m(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),o(),a}function uu(e,t,n){const r=iu(fu(e.path),n),a=J(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function du(e,t){const n=[],r=new Map;t=Qi({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,m,h){const g=!h,S=mu(c);S.aliasOf=h&&h.record;const R=Qi(t,c),$=[S];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of C)$.push(J({},S,{components:h?h.record.components:S.components,path:z,aliasOf:h?h.record:S}))}let y,w;for(const C of $){const{path:z}=C;if(m&&z[0]!=="/"){const B=m.record.path,j=B[B.length-1]==="/"?"":"/";C.path=m.record.path+(z&&j+z)}if(y=uu(C,m,R),h?h.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&c.name&&!Xi(y)&&o(c.name)),S.children){const B=S.children;for(let j=0;j<B.length;j++)i(B[j],y,h&&h.children[j])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&s(y)}return w?()=>{o(w)}:dn}function o(c){if(Os(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function l(){return n}function s(c){let m=0;for(;m<n.length&&su(c,n[m])>=0&&(c.record.path!==n[m].record.path||!Rs(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!Xi(c)&&r.set(c.record.name,c)}function f(c,m){let h,g={},S,R;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Xt(1,{location:c});R=h.record.name,g=J(qi(m.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&qi(c.params,h.keys.map(w=>w.name))),S=h.stringify(g)}else if("path"in c)S=c.path,h=n.find(w=>w.re.test(S)),h&&(g=h.parse(S),R=h.record.name);else{if(h=m.name?r.get(m.name):n.find(w=>w.re.test(m.path)),!h)throw Xt(1,{location:c,currentLocation:m});R=h.record.name,g=J({},m.params,c.params),S=h.stringify(g)}const $=[];let y=h;for(;y;)$.unshift(y.record),y=y.parent;return{name:R,path:S,params:g,matched:$,meta:pu($)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:l,getRecordMatcher:a}}function qi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function mu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:hu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function hu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Xi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pu(e){return e.reduce((t,n)=>J(t,n.meta),{})}function Qi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Rs(e,t){return t.children.some(n=>n===e||Rs(e,n))}const Is=/#/g,gu=/&/g,vu=/\//g,bu=/=/g,yu=/\?/g,Ts=/\+/g,_u=/%5B/g,wu=/%5D/g,Ns=/%5E/g,xu=/%60/g,Ms=/%7B/g,Eu=/%7C/g,Ls=/%7D/g,ku=/%20/g;function Va(e){return encodeURI(""+e).replace(Eu,"|").replace(_u,"[").replace(wu,"]")}function Au(e){return Va(e).replace(Ms,"{").replace(Ls,"}").replace(Ns,"^")}function la(e){return Va(e).replace(Ts,"%2B").replace(ku,"+").replace(Is,"%23").replace(gu,"%26").replace(xu,"`").replace(Ms,"{").replace(Ls,"}").replace(Ns,"^")}function Su(e){return la(e).replace(bu,"%3D")}function Pu(e){return Va(e).replace(Is,"%23").replace(yu,"%3F")}function Ou(e){return e==null?"":Pu(e).replace(vu,"%2F")}function or(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Cu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ts," "),o=i.indexOf("="),l=or(o<0?i:i.slice(0,o)),s=o<0?null:or(i.slice(o+1));if(l in t){let f=t[l];ze(f)||(f=t[l]=[f]),f.push(s)}else t[l]=s}return t}function Ji(e){let t="";for(let n in e){const r=e[n];if(n=Su(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&la(i)):[r&&la(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Ru(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Iu=Symbol(""),Zi=Symbol(""),Wa=Symbol(""),$s=Symbol(""),ca=Symbol("");function an(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function mt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,l)=>{const s=m=>{m===!1?l(Xt(4,{from:n,to:t})):m instanceof Error?l(m):nu(m)?l(Xt(2,{from:t,to:m})):(i&&r.enterCallbacks[a]===i&&typeof m=="function"&&i.push(m),o())},f=e.call(r&&r.instances[a],t,n,s);let c=Promise.resolve(f);e.length<3&&(c=c.then(s)),c.catch(m=>l(m))})}function Hr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let l=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Tu(l)){const f=(l.__vccOpts||l)[t];f&&a.push(mt(f,n,r,i,o))}else{let s=l();a.push(()=>s.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=jf(f)?f.default:f;i.components[o]=c;const h=(c.__vccOpts||c)[t];return h&&mt(h,n,r,i,o)()}))}}return a}function Tu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function eo(e){const t=Je(Wa),n=Je($s),r=de(()=>t.resolve(Ct(e.to))),a=de(()=>{const{matched:s}=r.value,{length:f}=s,c=s[f-1],m=n.matched;if(!c||!m.length)return-1;const h=m.findIndex(qt.bind(null,c));if(h>-1)return h;const g=to(s[f-2]);return f>1&&to(c)===g&&m[m.length-1].path!==g?m.findIndex(qt.bind(null,s[f-2])):h}),i=de(()=>a.value>-1&&$u(n.params,r.value.params)),o=de(()=>a.value>-1&&a.value===n.matched.length-1&&Ss(n.params,r.value.params));function l(s={}){return Lu(s)?t[Ct(e.replace)?"replace":"push"](Ct(e.to)).catch(dn):Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const Nu=ja({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eo,setup(e,{slots:t}){const n=vr(eo(e)),{options:r}=Je(Wa),a=de(()=>({[no(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[no(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ba("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Mu=Nu;function Lu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $u(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!ze(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function to(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const no=(e,t,n)=>e??t??n,Fu=ja({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Je(ca),a=de(()=>e.route||r.value),i=Je(Zi,0),o=de(()=>{let f=Ct(i);const{matched:c}=a.value;let m;for(;(m=c[f])&&!m.components;)f++;return f}),l=de(()=>a.value.matched[o.value]);qn(Zi,de(()=>o.value+1)),qn(Iu,l),qn(ca,a);const s=Zl();return cn(()=>[s.value,l.value,e.name],([f,c,m],[h,g,S])=>{c&&(c.instances[m]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!qt(c,g)||!h)&&(c.enterCallbacks[m]||[]).forEach(R=>R(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,m=l.value,h=m&&m.components[c];if(!h)return ro(n.default,{Component:h,route:f});const g=m.props[c],S=g?g===!0?f.params:typeof g=="function"?g(f):g:null,$=Ba(h,J({},S,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:s}));return ro(n.default,{Component:$,route:f})||$}}});function ro(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Fs=Fu;function ju(e){const t=du(e.routes,e),n=e.parseQuery||Cu,r=e.stringifyQuery||Ji,a=e.history,i=an(),o=an(),l=an(),s=ec(lt);let f=lt;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=zr.bind(null,b=>""+b),m=zr.bind(null,Ou),h=zr.bind(null,or);function g(b,T){let P,L;return Os(b)?(P=t.getRecordMatcher(b),L=T):L=b,t.addRoute(L,P)}function S(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function R(){return t.getRoutes().map(b=>b.record)}function $(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=J({},T||s.value),typeof b=="string"){const d=Dr(n,b,T.path),p=t.resolve({path:d.path},T),_=a.createHref(d.fullPath);return J(d,p,{params:h(p.params),hash:or(d.hash),redirectedFrom:void 0,href:_})}let P;if("path"in b)P=J({},b,{path:Dr(n,b.path,T.path).path});else{const d=J({},b.params);for(const p in d)d[p]==null&&delete d[p];P=J({},b,{params:m(d)}),T.params=m(T.params)}const L=t.resolve(P,T),X=b.hash||"";L.params=c(h(L.params));const ae=Hf(r,J({},b,{hash:Au(X),path:L.path})),u=a.createHref(ae);return J({fullPath:ae,hash:X,query:r===Ji?Ru(b.query):b.query||{}},L,{redirectedFrom:void 0,href:u})}function w(b){return typeof b=="string"?Dr(n,b,s.value.path):J({},b)}function C(b,T){if(f!==b)return Xt(8,{from:T,to:b})}function z(b){return te(b)}function B(b){return z(J(w(b),{replace:!0}))}function j(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:P}=T;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),J({query:b.query,hash:b.hash,params:"path"in L?{}:b.params},L)}}function te(b,T){const P=f=y(b),L=s.value,X=b.state,ae=b.force,u=b.replace===!0,d=j(P);if(d)return te(J(w(d),{state:typeof d=="object"?J({},X,d.state):X,force:ae,replace:u}),T||P);const p=P;p.redirectedFrom=T;let _;return!ae&&Uf(r,L,P)&&(_=Xt(16,{to:p,from:L}),He(L,L,!0,!1)),(_?Promise.resolve(_):Ce(p,L)).catch(v=>qe(v)?qe(v,2)?v:ot(v):q(v,p,L)).then(v=>{if(v){if(qe(v,2))return te(J({replace:u},w(v.to),{state:typeof v.to=="object"?J({},X,v.to.state):X,force:ae}),T||p)}else v=wt(p,L,!0,u,X);return it(p,L,v),v})}function pe(b,T){const P=C(b,T);return P?Promise.reject(P):Promise.resolve()}function ye(b){const T=$t.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Ce(b,T){let P;const[L,X,ae]=zu(b,T);P=Hr(L.reverse(),"beforeRouteLeave",b,T);for(const d of L)d.leaveGuards.forEach(p=>{P.push(mt(p,b,T))});const u=pe.bind(null,b,T);return P.push(u),ge(P).then(()=>{P=[];for(const d of i.list())P.push(mt(d,b,T));return P.push(u),ge(P)}).then(()=>{P=Hr(X,"beforeRouteUpdate",b,T);for(const d of X)d.updateGuards.forEach(p=>{P.push(mt(p,b,T))});return P.push(u),ge(P)}).then(()=>{P=[];for(const d of ae)if(d.beforeEnter)if(ze(d.beforeEnter))for(const p of d.beforeEnter)P.push(mt(p,b,T));else P.push(mt(d.beforeEnter,b,T));return P.push(u),ge(P)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),P=Hr(ae,"beforeRouteEnter",b,T),P.push(u),ge(P))).then(()=>{P=[];for(const d of o.list())P.push(mt(d,b,T));return P.push(u),ge(P)}).catch(d=>qe(d,8)?d:Promise.reject(d))}function it(b,T,P){l.list().forEach(L=>ye(()=>L(b,T,P)))}function wt(b,T,P,L,X){const ae=C(b,T);if(ae)return ae;const u=T===lt,d=jt?history.state:{};P&&(L||u?a.replace(b.fullPath,J({scroll:u&&d&&d.scroll},X)):a.push(b.fullPath,X)),s.value=b,He(b,T,P,u),ot()}let De;function tn(){De||(De=a.listen((b,T,P)=>{if(!In.listening)return;const L=y(b),X=j(L);if(X){te(J(X,{replace:!0}),L).catch(dn);return}f=L;const ae=s.value;jt&&Xf(Vi(ae.fullPath,P.delta),Pr()),Ce(L,ae).catch(u=>qe(u,12)?u:qe(u,2)?(te(u.to,L).then(d=>{qe(d,20)&&!P.delta&&P.type===wn.pop&&a.go(-1,!1)}).catch(dn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),q(u,L,ae))).then(u=>{u=u||wt(L,ae,!1),u&&(P.delta&&!qe(u,8)?a.go(-P.delta,!1):P.type===wn.pop&&qe(u,20)&&a.go(-1,!1)),it(L,ae,u)}).catch(dn)}))}let Mt=an(),fe=an(),Z;function q(b,T,P){ot(b);const L=fe.list();return L.length?L.forEach(X=>X(b,T,P)):console.error(b),Promise.reject(b)}function Ge(){return Z&&s.value!==lt?Promise.resolve():new Promise((b,T)=>{Mt.add([b,T])})}function ot(b){return Z||(Z=!b,tn(),Mt.list().forEach(([T,P])=>b?P(b):T()),Mt.reset()),b}function He(b,T,P,L){const{scrollBehavior:X}=e;if(!jt||!X)return Promise.resolve();const ae=!P&&Qf(Vi(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return ts().then(()=>X(b,T,ae)).then(u=>u&&qf(u)).catch(u=>q(u,b,T))}const xe=b=>a.go(b);let Lt;const $t=new Set,In={currentRoute:s,listening:!0,addRoute:g,removeRoute:S,hasRoute:$,getRoutes:R,resolve:y,options:e,push:z,replace:B,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:fe.add,isReady:Ge,install(b){const T=this;b.component("RouterLink",Mu),b.component("RouterView",Fs),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(s)}),jt&&!Lt&&s.value===lt&&(Lt=!0,z(a.location).catch(X=>{}));const P={};for(const X in lt)Object.defineProperty(P,X,{get:()=>s.value[X],enumerable:!0});b.provide(Wa,T),b.provide($s,Ko(P)),b.provide(ca,s);const L=b.unmount;$t.add(b),b.unmount=function(){$t.delete(b),$t.size<1&&(f=lt,De&&De(),De=null,s.value=lt,Lt=!1,Z=!1),L()}}};function ge(b){return b.reduce((T,P)=>T.then(()=>ye(P)),Promise.resolve())}return In}function zu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(f=>qt(f,l))?r.push(l):n.push(l));const s=e.matched[o];s&&(t.matched.find(f=>qt(f,s))||a.push(s))}return[n,r,a]}const _t=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Du={};function Hu(e,t){return Ie(),Te("footer",null," © 2024 ")}const Uu=_t(Du,[["render",Hu]]),Bu={},Vu={href:"https://github.com/AmberFryar"},Wu={href:"https://www.linkedin.com/in/amber-fryar/"};function Ku(e,t){const n=Fa("font-awesome-icon");return Ie(),Te("div",null,[W("a",Vu,[Q(n,{icon:"fa-brands fa-github-square"})]),W("a",Wu,[Q(n,{icon:"fa-brands fa-linkedin"})])])}const js=_t(Bu,[["render",Ku],["__scopeId","data-v-8ac6a9a2"]]),Zt=e=>(wr("data-v-9c48f8d9"),e=e(),xr(),e),Yu=Zt(()=>W("hr",null,null,-1)),Gu={id:"banner"},qu=Zt(()=>W("h1",{id:"home"},"Amber Fryar ",-1)),Xu=Zt(()=>W("h4",{id:"about"},"About me",-1)),Qu=Zt(()=>W("a",{id:"projects",href:"https://github.com/dix06001/ReadMe"},"Projects",-1)),Ju=Zt(()=>W("h4",{id:"experience"},"Experience",-1)),Zu=Zt(()=>W("hr",null,null,-1)),ed={__name:"NavBanner",setup(e){return(t,n)=>{const r=Fa("router-link");return Ie(),Te(we,null,[Yu,W("section",Gu,[Q(js),Q(r,{id:"home",to:{name:"home"}},{default:Wt(()=>[qu]),_:1}),Q(r,{id:"about",to:{name:"about"}},{default:Wt(()=>[Xu]),_:1}),Qu,Q(r,{id:"experience",to:{name:"experience"}},{default:Wt(()=>[Ju]),_:1})]),Zu],64)}}},Ka=_t(ed,[["__scopeId","data-v-9c48f8d9"]]),td=W("header",null,null,-1),nd=W("hr",null,null,-1),rd={__name:"App",setup(e){return(t,n)=>(Ie(),Te(we,null,[td,W("main",null,[Q(Ct(Fs))]),nd,W("footer",null,[Q(Uu),Q(js)])],64))}},ad="/assets/logoblack-SKmbsdPU.png",id="/assets/about-tRnK0b8y.png",od={},rt=e=>(wr("data-v-eb9e7e24"),e=e(),xr(),e),sd=rt(()=>W("br",null,null,-1)),ld=rt(()=>W("p",null," I love processes, projects, problem-solving, people, plants, pets, and apparently alliterations. I recently completed Tech Elevator’s remote full-stack development boot camp. Prior to that accomplishment I earned my B.S. in Biological Sciences and obtained a secondary education license. With those credentials in hand, I returned to the place that most adults have tried to remove from memory- middle school. It was as much of a ride as an adult as it was as an adolescent.",-1)),cd=rt(()=>W("br",null,null,-1)),fd=rt(()=>W("p",null,"Walking away from teaching not only left me with many stories but also the confidence and excitement for my newfound path. My time as a teacher helped me discover that my passion and talents lie in problem-solving, finding inefficiencies, and creating new systems. My colleagues always said they taught for that light bulb moment when the student finally gets it. That was their fuel. I realized that my fuel was seeing the positive results of deploying new or updated systems and curricula. Training to be a software developer lets me merge my passion for process improvement with my progressing technical skills. Collaborating with a team to create technical solutions is my fuel. ",-1)),ud=rt(()=>W("br",null,null,-1)),dd=rt(()=>W("p",null,"While I am AFK-ing (as the cool kids say), I can be found volunteering for the local cat rescue, reading Harry Potter (I’m a millennial- what more can I say?), battling my family in Catan, planning and completing home renovations projects, trying to keep my house plants alive or hiking in the mountains. I don’t know if I am more excited to ride my new 1980 Honda Trail 110 in the mountains or replace the 1968 harvest gold bathroom fixtures this year.",-1)),md=rt(()=>W("br",null,null,-1)),hd=rt(()=>W("br",null,null,-1)),pd=rt(()=>W("img",{src:id,class:"img"},null,-1));function gd(e,t){return Ie(),Te(we,null,[sd,ld,cd,fd,ud,dd,md,hd,pd],64)}const vd=_t(od,[["render",gd],["__scopeId","data-v-eb9e7e24"]]),bd={},Ya=e=>(wr("data-v-262d03ba"),e=e(),xr(),e),yd={class:"menuItems"},_d=Ya(()=>W("h2",null,"Experience",-1)),wd=Ya(()=>W("div",null,[W("a",{id:"projects",href:"https://github.com/dix06001/ReadMe"},[W("h2",null,"Projects")])],-1)),xd=Ya(()=>W("h2",null,"About",-1));function Ed(e,t){const n=Fa("router-link");return Ie(),Te("section",yd,[W("div",null,[Q(n,{id:"experience",to:{name:"experience"}},{default:Wt(()=>[_d]),_:1})]),wd,W("div",null,[Q(n,{id:"about",to:{name:"about"}},{default:Wt(()=>[xd]),_:1})])])}const kd=_t(bd,[["render",Ed],["__scopeId","data-v-262d03ba"]]),Ad=e=>(wr("data-v-a68dbea9"),e=e(),xr(),e),Sd=Ad(()=>W("div",null,[W("img",{id:"logo",src:ad})],-1)),Pd={class:"projects"},Od={__name:"HomeView",setup(e){return(t,n)=>(Ie(),Te("main",null,[Sd,W("section",Pd,[Q(kd)])]))}},Cd=_t(Od,[["__scopeId","data-v-a68dbea9"]]),Rd={class:"about"},Id={__name:"AboutView",setup(e){return(t,n)=>(Ie(),Te(we,null,[Q(Ka),W("div",Rd,[Q(vd)])],64))}},Td="/assets/Technical-feZQfQjK.png",Nd={},Md=Es('<br data-v-f7d47860><img src="'+Td+'" class="img" data-v-f7d47860><hr data-v-f7d47860><br data-v-f7d47860><ul data-v-f7d47860><h3 data-v-f7d47860>Tech Elevator</h3><ul data-v-f7d47860><li data-v-f7d47860>Full Stack Software Development</li><li data-v-f7d47860>30 week remote with pair programming and live instruction</li></ul><h3 data-v-f7d47860>Languages and Technologies</h3><ul data-v-f7d47860><li data-v-f7d47860>Java</li><li data-v-f7d47860>SQL and APIs</li><li data-v-f7d47860>Javascript, HTML, CSS</li><li data-v-f7d47860>Vue3</li><li data-v-f7d47860>Responsive Web Design</li></ul></ul><br data-v-f7d47860>',6),Ld=[Md];function $d(e,t){return Ie(),Te("section",null,Ld)}const Fd=_t(Nd,[["render",$d],["__scopeId","data-v-f7d47860"]]),jd="/assets/Professional-fSmjbTnF.png",zd={},Dd=Es('<br data-v-591feecd><img src="'+jd+'" class="img" data-v-591feecd><hr data-v-591feecd><br data-v-591feecd><ul data-v-591feecd><h3 data-v-591feecd>University of Northern Colorado</h3><ul data-v-591feecd><li data-v-591feecd>Bachelor of Science in Biological Sciences</li><li data-v-591feecd>Secondary Education Liscense</li></ul><h3 data-v-591feecd>Leadership</h3><ul data-v-591feecd><li data-v-591feecd>Building Leadership Team liason for administrators and teachers</li><li data-v-591feecd>Organized grade level field trip for 320 students</li></ul><h3 data-v-591feecd>Middle School Science Teacher</h3><ul data-v-591feecd><li data-v-591feecd>General Science, Advanced Science, Study/Life SKills, Zoology</li></ul><h3 data-v-591feecd>Community Volunteer Work</h3><ul data-v-591feecd><li data-v-591feecd>Data entry and veternary medical transcription</li><li data-v-591feecd>School robotics competitions, field trips and curriculum prep</li></ul></ul><br data-v-591feecd>',6),Hd=[Dd];function Ud(e,t){return Ie(),Te("section",null,Hd)}const Bd=_t(zd,[["render",Ud],["__scopeId","data-v-591feecd"]]),Vd={id:"experience"},Wd={id:"technical"},Kd={id:"professional"},Yd={__name:"ExperienceView",setup(e){return(t,n)=>(Ie(),Te(we,null,[Q(Ka),W("section",Vd,[W("div",Wd,[Q(Fd)]),W("div",Kd,[Q(Bd)])])],64))}},Gd={__name:"ProjectsView",setup(e){return(t,n)=>(Ie(),Te(we,null,[Q(Ka),xs(" Projects View ")],64))}},qd=ju({history:tu("/"),routes:[{path:"/",name:"home",component:Cd},{path:"/about",name:"about",component:Id},{path:"/experience",name:"experience",component:Yd},{path:"/projects",name:"projects",component:Gd}]});function ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ao(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ao(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sr(e){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}function Xd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function io(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Qd(e,t,n){return t&&io(e.prototype,t),n&&io(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ga(e,t){return Zd(e)||tm(e,t)||zs(e,t)||rm()}function On(e){return Jd(e)||em(e)||zs(e)||nm()}function Jd(e){if(Array.isArray(e))return fa(e)}function Zd(e){if(Array.isArray(e))return e}function em(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tm(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function zs(e,t){if(e){if(typeof e=="string")return fa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fa(e,t)}}function fa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oo=function(){},qa={},Ds={},Hs=null,Us={mark:oo,measure:oo};try{typeof window<"u"&&(qa=window),typeof document<"u"&&(Ds=document),typeof MutationObserver<"u"&&(Hs=MutationObserver),typeof performance<"u"&&(Us=performance)}catch{}var am=qa.navigator||{},so=am.userAgent,lo=so===void 0?"":so,vt=qa,re=Ds,co=Hs,jn=Us;vt.document;var at=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Bs=~lo.indexOf("MSIE")||~lo.indexOf("Trident/"),zn,Dn,Hn,Un,Bn,Ze="___FONT_AWESOME___",ua=16,Vs="fa",Ws="svg-inline--fa",Rt="data-fa-i2svg",da="data-fa-pseudo-element",im="data-fa-pseudo-element-pending",Xa="data-prefix",Qa="data-icon",fo="fontawesome-i2svg",om="async",sm=["HTML","HEAD","STYLE","SCRIPT"],Ks=function(){try{return!0}catch{return!1}}(),ne="classic",se="sharp",Ja=[ne,se];function Cn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var xn=Cn((zn={},ce(zn,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ce(zn,se,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),zn)),En=Cn((Dn={},ce(Dn,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ce(Dn,se,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Dn)),kn=Cn((Hn={},ce(Hn,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ce(Hn,se,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Hn)),lm=Cn((Un={},ce(Un,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ce(Un,se,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Un)),cm=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ys="fa-layers-text",fm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,um=Cn((Bn={},ce(Bn,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ce(Bn,se,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Bn)),Gs=[1,2,3,4,5,6,7,8,9,10],dm=Gs.concat([11,12,13,14,15,16,17,18,19,20]),mm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},An=new Set;Object.keys(En[ne]).map(An.add.bind(An));Object.keys(En[se]).map(An.add.bind(An));var hm=[].concat(Ja,On(An),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Gs.map(function(e){return"".concat(e,"x")})).concat(dm.map(function(e){return"w-".concat(e)})),hn=vt.FontAwesomeConfig||{};function pm(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function gm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var vm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vm.forEach(function(e){var t=Ga(e,2),n=t[0],r=t[1],a=gm(pm(n));a!=null&&(hn[r]=a)})}var qs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Vs,replacementClass:Ws,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};hn.familyPrefix&&(hn.cssPrefix=hn.familyPrefix);var Qt=I(I({},qs),hn);Qt.autoReplaceSvg||(Qt.observeMutations=!1);var M={};Object.keys(qs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Qt[e]=n,pn.forEach(function(r){return r(M)})},get:function(){return Qt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Qt.cssPrefix=t,pn.forEach(function(n){return n(M)})},get:function(){return Qt.cssPrefix}});vt.FontAwesomeConfig=M;var pn=[];function bm(e){return pn.push(e),function(){pn.splice(pn.indexOf(e),1)}}var ct=ua,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ym(e){if(!(!e||!at)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return re.head.insertBefore(t,r),e}}var _m="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sn(){for(var e=12,t="";e-- >0;)t+=_m[Math.random()*62|0];return t}function en(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Za(e){return e.classList?en(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wm(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xs(e[n]),'" ')},"").trim()}function Or(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ei(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function xm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:f}}function Em(e){var t=e.transform,n=e.width,r=n===void 0?ua:n,a=e.height,i=a===void 0?ua:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Bs?s+="translate(".concat(t.x/ct-r/2,"em, ").concat(t.y/ct-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/ct,"em), calc(-50% + ").concat(t.y/ct,"em)) "):s+="translate(".concat(t.x/ct,"em, ").concat(t.y/ct,"em) "),s+="scale(".concat(t.size/ct*(t.flipX?-1:1),", ").concat(t.size/ct*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var km=`:root, :host {
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
}`;function Qs(){var e=Vs,t=Ws,n=M.cssPrefix,r=M.replacementClass,a=km;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var uo=!1;function Ur(){M.autoAddCss&&!uo&&(ym(Qs()),uo=!0)}var Am={mixout:function(){return{dom:{css:Qs,insertCss:Ur}}},hooks:function(){return{beforeDOMElementCreation:function(){Ur()},beforeI2svg:function(){Ur()}}}},et=vt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var Fe=et[Ze],Js=[],Sm=function e(){re.removeEventListener("DOMContentLoaded",e),lr=1,Js.map(function(t){return t()})},lr=!1;at&&(lr=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),lr||re.addEventListener("DOMContentLoaded",Sm));function Pm(e){at&&(lr?setTimeout(e,0):Js.push(e))}function Rn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xs(e):"<".concat(t," ").concat(wm(r),">").concat(i.map(Rn).join(""),"</").concat(t,">")}function mo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Om=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Br=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?Om(n,a):n,s,f,c;for(r===void 0?(s=1,c=t[i[0]]):(s=0,c=r);s<o;s++)f=i[s],c=l(c,t[f],f,t);return c};function Cm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ma(e){var t=Cm(e);return t.length===1?t[0].toString(16):null}function Rm(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ho(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ha(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ho(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,ho(t)):Fe.styles[e]=I(I({},Fe.styles[e]||{}),i),e==="fas"&&ha("fa",t)}var Vn,Wn,Kn,Dt=Fe.styles,Im=Fe.shims,Tm=(Vn={},ce(Vn,ne,Object.values(kn[ne])),ce(Vn,se,Object.values(kn[se])),Vn),ti=null,Zs={},el={},tl={},nl={},rl={},Nm=(Wn={},ce(Wn,ne,Object.keys(xn[ne])),ce(Wn,se,Object.keys(xn[se])),Wn);function Mm(e){return~hm.indexOf(e)}function Lm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Mm(a)?a:null}var al=function(){var t=function(i){return Br(Dt,function(o,l,s){return o[s]=Br(l,i,{}),o},{})};Zs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),el=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),rl=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in Dt||M.autoFetchSvg,r=Br(Im,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});tl=r.names,nl=r.unicodes,ti=Cr(M.styleDefault,{family:M.familyDefault})};bm(function(e){ti=Cr(e.styleDefault,{family:M.familyDefault})});al();function ni(e,t){return(Zs[e]||{})[t]}function $m(e,t){return(el[e]||{})[t]}function St(e,t){return(rl[e]||{})[t]}function il(e){return tl[e]||{prefix:null,iconName:null}}function Fm(e){var t=nl[e],n=ni("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bt(){return ti}var ri=function(){return{prefix:null,iconName:null,rest:[]}};function Cr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,a=xn[r][e],i=En[r][e]||En[r][a],o=e in Fe.styles?e:null;return i||o||null}var po=(Kn={},ce(Kn,ne,Object.keys(kn[ne])),ce(Kn,se,Object.keys(kn[se])),Kn);function Rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ce(t,ne,"".concat(M.cssPrefix,"-").concat(ne)),ce(t,se,"".concat(M.cssPrefix,"-").concat(se)),t),o=null,l=ne;(e.includes(i[ne])||e.some(function(f){return po[ne].includes(f)}))&&(l=ne),(e.includes(i[se])||e.some(function(f){return po[se].includes(f)}))&&(l=se);var s=e.reduce(function(f,c){var m=Lm(M.cssPrefix,c);if(Dt[c]?(c=Tm[l].includes(c)?lm[l][c]:c,o=c,f.prefix=c):Nm[l].indexOf(c)>-1?(o=c,f.prefix=Cr(c,{family:l})):m?f.iconName=m:c!==M.replacementClass&&c!==i[ne]&&c!==i[se]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=o==="fa"?il(f.iconName):{},g=St(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ri());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===se&&(Dt.fass||M.autoFetchSvg)&&(s.prefix="fass",s.iconName=St(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=bt()||"fas"),s}var jm=function(){function e(){Xd(this,e),this.definitions={}}return Qd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=I(I({},n.definitions[l]||{}),o[l]),ha(l,o[l]);var s=kn[ne][l];s&&ha(s,o[l]),al()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,f=o.icon,c=f[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[l][m]=f)}),n[l][s]=f}),n}}]),e}(),go=[],Ht={},Kt={},zm=Object.keys(Kt);function Dm(e,t){var n=t.mixoutsTo;return go=e,Ht={},Object.keys(Kt).forEach(function(r){zm.indexOf(r)===-1&&delete Kt[r]}),go.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),sr(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(i[o])})}r.provides&&r.provides(Kt)}),n}function pa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kt[e]?Kt[e].apply(null,t):void 0}function ga(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||bt();if(t)return t=St(n,t)||t,mo(ol.definitions,n,t)||mo(Fe.styles,n,t)}var ol=new jm,Hm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,It("noAuto")},Um={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(It("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Pm(function(){Vm({autoReplaceSvgRoot:n}),It("watch",t)})}},Bm={icon:function(t){if(t===null)return null;if(sr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:St(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Cr(t[0]);return{prefix:r,iconName:St(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(cm))){var a=Rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||bt(),iconName:St(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=bt();return{prefix:i,iconName:St(i,t)||t}}}},Oe={noAuto:Hm,config:M,dom:Um,parse:Bm,library:ol,findIconDefinition:ga,toHtml:Rn},Vm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(Fe.styles).length>0||M.autoFetchSvg)&&at&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Ir(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Rn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(at){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Wm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ei(o)&&n.found&&!r.found){var l=n.width,s=n.height,f={x:l/s/2,y:.5};a.style=Or(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Km(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function ai(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,f=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,S=r.found?r:n,R=S.width,$=S.height,y=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ye){return m.classes.indexOf(ye)===-1}).filter(function(ye){return ye!==""||!!ye}).concat(m.classes).join(" "),C={children:[],attributes:I(I({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat($)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/$*16*.0625,"em")}:{};g&&(C.attributes[Rt]=""),s&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Sn())},children:[s]}),delete C.attributes.title);var B=I(I({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:l,styles:I(I({},z),m.styles)}),j=r.found&&n.found?tt("generateAbstractMask",B)||{children:[],attributes:{}}:tt("generateAbstractIcon",B)||{children:[],attributes:{}},te=j.children,pe=j.attributes;return B.children=te,B.attributes=pe,l?Km(B):Wm(B)}function vo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(f[Rt]="");var c=I({},o.styles);ei(a)&&(c.transform=Em({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Or(c);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Ym(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Or(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vr=Fe.styles;function va(e){var t=e[0],n=e[1],r=e.slice(4),a=Ga(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Gm={found:!1,width:512,height:512};function qm(e,t){!Ks&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ba(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=bt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=il(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Vr[t]&&Vr[t][e]){var o=Vr[t][e];return r(va(o))}qm(e,t),r(I(I({},Gm),{},{icon:M.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var bo=function(){},ya=M.measurePerformance&&jn&&jn.mark&&jn.measure?jn:{mark:bo,measure:bo},sn='FA "6.5.1"',Xm=function(t){return ya.mark("".concat(sn," ").concat(t," begins")),function(){return sl(t)}},sl=function(t){ya.mark("".concat(sn," ").concat(t," ends")),ya.measure("".concat(sn," ").concat(t),"".concat(sn," ").concat(t," begins"),"".concat(sn," ").concat(t," ends"))},ii={begin:Xm,end:sl},Jn=function(){};function yo(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function Qm(e){var t=e.getAttribute?e.getAttribute(Xa):null,n=e.getAttribute?e.getAttribute(Qa):null;return t&&n}function Jm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Zm(){if(M.autoReplaceSvg===!0)return Zn.replace;var e=Zn[M.autoReplaceSvg];return e||Zn.replace}function eh(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function th(e){return re.createElement(e)}function ll(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?eh:th:n;if(typeof e=="string")return re.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ll(o,{ceFn:r}))}),a}function nh(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Zn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ll(a),n)}),n.getAttribute(Rt)===null&&M.keepOriginalSource){var r=re.createComment(nh(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Za(n).indexOf(M.replacementClass))return Zn.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===M.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return Rn(l)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function _o(e){e()}function cl(e,t){var n=typeof t=="function"?t:Jn;if(e.length===0)n();else{var r=_o;M.mutateApproach===om&&(r=vt.requestAnimationFrame||_o),r(function(){var a=Zm(),i=ii.begin("mutate");e.map(a),i(),n()})}}var oi=!1;function fl(){oi=!0}function _a(){oi=!1}var cr=null;function wo(e){if(co&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Jn:t,r=e.nodeCallback,a=r===void 0?Jn:r,i=e.pseudoElementsCallback,o=i===void 0?Jn:i,l=e.observeMutationsRoot,s=l===void 0?re:l;cr=new co(function(f){if(!oi){var c=bt();en(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!yo(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&yo(m.target)&&~mm.indexOf(m.attributeName))if(m.attributeName==="class"&&Qm(m.target)){var h=Rr(Za(m.target)),g=h.prefix,S=h.iconName;m.target.setAttribute(Xa,g||c),S&&m.target.setAttribute(Qa,S)}else Jm(m.target)&&a(m.target)})}}),at&&cr.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rh(){cr&&cr.disconnect()}function ah(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function ih(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Rr(Za(e));return a.prefix||(a.prefix=bt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=$m(a.prefix,e.innerText)||ni(a.prefix,ma(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function oh(e){var t=en(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function sh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ih(e),r=n.iconName,a=n.prefix,i=n.rest,o=oh(e),l=pa("parseNodeAttributes",{},e),s=t.styleParser?ah(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var lh=Fe.styles;function ul(e){var t=M.autoReplaceSvg==="nest"?xo(e,{styleParser:!1}):xo(e);return~t.extra.classes.indexOf(Ys)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var yt=new Set;Ja.map(function(e){yt.add("fa-".concat(e))});Object.keys(xn[ne]).map(yt.add.bind(yt));Object.keys(xn[se]).map(yt.add.bind(yt));yt=On(yt);function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var n=re.documentElement.classList,r=function(m){return n.add("".concat(fo,"-").concat(m))},a=function(m){return n.remove("".concat(fo,"-").concat(m))},i=M.autoFetchSvg?yt:Ja.map(function(c){return"fa-".concat(c)}).concat(Object.keys(lh));i.includes("fa")||i.push("fa");var o=[".".concat(Ys,":not([").concat(Rt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=en(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=ii.begin("onTree"),f=l.reduce(function(c,m){try{var h=ul(m);h&&c.push(h)}catch(g){Ks||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(h){cl(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(h){s(),m(h)})})}function ch(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ul(e).then(function(n){n&&cl([n],t)})}function fh(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ga(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ga(a||{})),e(r,I(I({},n),{},{mask:a}))}}var uh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,f=n.maskId,c=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,S=g===void 0?null:g,R=n.classes,$=R===void 0?[]:R,y=n.attributes,w=y===void 0?{}:y,C=n.styles,z=C===void 0?{}:C;if(t){var B=t.prefix,j=t.iconName,te=t.icon;return Ir(I({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(S||Sn()):(w["aria-hidden"]="true",w.focusable="false")),ai({icons:{main:va(te),mask:s?va(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:j,transform:I(I({},Ke),a),symbol:o,title:h,maskId:c,titleId:S,extra:{attributes:w,styles:z,classes:$}})})}},dh={mixout:function(){return{icon:fh(uh)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Eo,n.nodeCallback=ch,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?re:r,i=n.callback,o=i===void 0?function(){}:i;return Eo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,f=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,S){Promise.all([ba(a,l),c.iconName?ba(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var $=Ga(R,2),y=$[0],w=$[1];g([n,ai({icons:{main:y,mask:w},prefix:l,iconName:a,transform:s,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=Or(l);s.length>0&&(a.style=s);var f;return ei(o)&&(f=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},mh={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ir({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(On(i)).join(" ")},children:o}]})}}}},hh={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,f=s===void 0?{}:s,c=r.styles,m=c===void 0?{}:c;return Ir({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),Ym({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(On(l))}})})}}}},ph={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,l=o===void 0?null:o,s=r.classes,f=s===void 0?[]:s,c=r.attributes,m=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Ir({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),vo({content:n,transform:I(I({},Ke),i),title:l,extra:{attributes:m,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(On(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(Bs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/f,s=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vo({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},gh=new RegExp('"',"ug"),ko=[1105920,1112319];function vh(e){var t=e.replace(gh,""),n=Rm(t,0),r=n>=ko[0]&&n<=ko[1],a=t.length===2?t[0]===t[1]:!1;return{value:ma(a?t[0]:t),isSecondary:r||a}}function Ao(e,t){var n="".concat(im).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=en(e.children),o=i.filter(function(te){return te.getAttribute(da)===t})[0],l=vt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(fm),f=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var m=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?se:ne,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?En[h][s[2].toLowerCase()]:um[h][f],S=vh(m),R=S.value,$=S.isSecondary,y=s[0].startsWith("FontAwesome"),w=ni(g,R),C=w;if(y){var z=Fm(R);z.iconName&&z.prefix&&(w=z.iconName,g=z.prefix)}if(w&&!$&&(!o||o.getAttribute(Xa)!==g||o.getAttribute(Qa)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var B=sh(),j=B.extra;j.attributes[da]=t,ba(w,g).then(function(te){var pe=ai(I(I({},B),{},{icons:{main:te,mask:ri()},prefix:g,iconName:C,extra:j,watchable:!0})),ye=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=pe.map(function(Ce){return Rn(Ce)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function bh(e){return Promise.all([Ao(e,"::before"),Ao(e,"::after")])}function yh(e){return e.parentNode!==document.head&&!~sm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(da)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function So(e){if(at)return new Promise(function(t,n){var r=en(e.querySelectorAll("*")).filter(yh).map(bh),a=ii.begin("searchPseudoElements");fl(),Promise.all(r).then(function(){a(),_a(),t()}).catch(function(){a(),_a(),n()})})}var _h={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=So,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?re:r;M.searchPseudoElements&&So(a)}}},Po=!1,wh={mixout:function(){return{dom:{unwatch:function(){fl(),Po=!0}}}},hooks:function(){return{bootstrap:function(){wo(pa("mutationObserverCallbacks",{}))},noAuto:function(){rh()},watch:function(n){var r=n.observeMutationsRoot;Po?_a():wo(pa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Oo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},xh={mixout:function(){return{parse:{transform:function(n){return Oo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Oo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:m,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Wr={x:0,y:0,width:"100%",height:"100%"};function Co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Eh(e){return e.tag==="g"?e.children:[e]}var kh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Rr(a.split(" ").map(function(o){return o.trim()})):ri();return i.prefix||(i.prefix=bt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,f=i.width,c=i.icon,m=o.width,h=o.icon,g=xm({transform:s,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:I(I({},Wr),{},{fill:"white"})},R=c.children?{children:c.children.map(Co)}:{},$={tag:"g",attributes:I({},g.inner),children:[Co(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},R))]},y={tag:"g",attributes:I({},g.outer),children:[$]},w="mask-".concat(l||Sn()),C="clip-".concat(l||Sn()),z={tag:"mask",attributes:I(I({},Wr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Eh(h)},z]};return r.push(B,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(w,")")},Wr)}),{children:r,attributes:a}}}},Ah={provides:function(t){var n=!1;vt.matchMedia&&(n=vt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Sh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ph=[Am,dh,mh,hh,ph,_h,wh,xh,kh,Ah,Sh];Dm(Ph,{mixoutsTo:Oe});Oe.noAuto;Oe.config;var Oh=Oe.library;Oe.dom;var wa=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var Ch=Oe.icon;Oe.layer;Oe.text;Oe.counter;function Ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ro(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ro(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function Ee(e,t,n){return t=Nh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rh(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ih(e,t){if(e==null)return{};var n=Rh(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Th(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nh(e){var t=Th(e,"string");return typeof t=="symbol"?t:String(t)}var Mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dl={exports:{}};(function(e){(function(t){var n=function(y,w,C){if(!f(w)||m(w)||h(w)||g(w)||s(w))return w;var z,B=0,j=0;if(c(w))for(z=[],j=w.length;B<j;B++)z.push(n(y,w[B],C));else{z={};for(var te in w)Object.prototype.hasOwnProperty.call(w,te)&&(z[y(te,C)]=n(y,w[te],C))}return z},r=function(y,w){w=w||{};var C=w.separator||"_",z=w.split||/(?=[A-Z])/;return y.split(z).join(C)},a=function(y){return S(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var w=a(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},l=Object.prototype.toString,s=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return l.call(y)=="[object Array]"},m=function(y){return l.call(y)=="[object Date]"},h=function(y){return l.call(y)=="[object RegExp]"},g=function(y){return l.call(y)=="[object Boolean]"},S=function(y){return y=y-0,y===y},R=function(y,w){var C=w&&"process"in w?w.process:w;return typeof C!="function"?y:function(z,B){return C(z,y,B)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,w){return n(R(a,w),y)},decamelizeKeys:function(y,w){return n(R(o,w),y,w)},pascalizeKeys:function(y,w){return n(R(i,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Mh)})(dl);var Lh=dl.exports,$h=["class","style"];function Fh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Lh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function jh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ml(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(s){return ml(s)}),a=Object.keys(e.attributes||{}).reduce(function(s,f){var c=e.attributes[f];switch(f){case"class":s.class=jh(c);break;case"style":s.style=Fh(c);break;default:s.attrs[f]=c}return s},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=Ih(n,$h);return Ba(e.tag,Xe(Xe(Xe({},t),{},{class:a.class,style:Xe(Xe({},a.style),o)},a.attrs),l),r)}var hl=!1;try{hl=!0}catch{}function zh(){if(!hl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Kr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ee({},e,t):{}}function Dh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ee(t,"fa-".concat(e.size),e.size!==null),Ee(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ee(t,"fa-pull-".concat(e.pull),e.pull!==null),Ee(t,"fa-swap-opacity",e.swapOpacity),Ee(t,"fa-bounce",e.bounce),Ee(t,"fa-shake",e.shake),Ee(t,"fa-beat",e.beat),Ee(t,"fa-fade",e.fade),Ee(t,"fa-beat-fade",e.beatFade),Ee(t,"fa-flash",e.flash),Ee(t,"fa-spin-pulse",e.spinPulse),Ee(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Io(e){if(e&&fr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wa.icon)return wa.icon(e);if(e===null)return null;if(fr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Hh=ja({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=de(function(){return Io(t.icon)}),i=de(function(){return Kr("classes",Dh(t))}),o=de(function(){return Kr("transform",typeof t.transform=="string"?wa.transform(t.transform):t.transform)}),l=de(function(){return Kr("mask",Io(t.mask))}),s=de(function(){return Ch(a.value,Xe(Xe(Xe(Xe({},i.value),o.value),l.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});cn(s,function(c){if(!c)return zh("Could not find one or more icon(s)",a.value,l.value)},{immediate:!0});var f=de(function(){return s.value?ml(s.value.abstract[0],{},r):null});return function(){return f.value}}}),Uh={prefix:"fab",iconName:"square-github",icon:[448,512,["github-square"],"f092","M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"]},Bh=Uh,Vh={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Wh={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};Oh.add(Wh,Vh,Bh);const si=Lf(rd);si.use(qd);si.component("font-awesome-icon",Hh);si.mount("#app");
