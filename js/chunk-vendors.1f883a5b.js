(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),o=n("59ed"),i=n("40d5"),s=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?s(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),o=n("c65b"),i=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!o(i.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0cfb":function(e,t,n){var r=n("83ab"),o=n("d039"),i=n("cc12");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),o=r.String;e.exports=function(e){try{return o(e)}catch(t){return"Object"}}},"13d2":function(e,t,n){var r=n("d039"),o=n("1626"),i=n("1a2d"),s=n("83ab"),a=n("5e77").CONFIGURABLE,c=n("8925"),u=n("69f3"),l=u.enforce,d=u.get,f=Object.defineProperty,h=s&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),v=e.exports=function(e,t,n){if("Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||a&&e.name!==t)&&f(e,"name",{value:t,configurable:!0}),h&&n&&i(n,"arity")&&e.length!==n.arity&&f(e,"length",{value:n.arity}),n&&i(n,"constructor")&&n.constructor){if(s)try{f(e,"prototype",{writable:!1})}catch(o){}}else e.prototype=void 0;var r=l(e);return i(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=v((function(){return o(this)&&d(this).source||c(this)}),"toString")},"14e5":function(e,t,n){"use strict";var r=n("23e7"),o=n("c65b"),i=n("59ed"),s=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{all:function(e){var t=this,n=s.f(t),r=n.resolve,u=n.reject,l=a((function(){var n=i(t.resolve),s=[],a=0,l=1;c(e,(function(e){var i=a++,c=!1;l++,o(n,t,e).then((function(e){c||(c=!0,s[i]=e,--l||r(s))}),u)})),--l||r(s)}));return l.error&&u(l.value),n.promise}})},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"19aa":function(e,t,n){var r=n("da84"),o=n("3a9b"),i=r.TypeError;e.exports=function(e,t){if(o(t,e))return e;throw i("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),o=n("7b0b"),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),o=r("iterator"),i=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){i=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),o=r.TypeError;e.exports=function(e){if(void 0==e)throw o("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d3b7");function r(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))}}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return T})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return k})),n.d(t,"i",(function(){return A})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return O})),n.d(t,"m",(function(){return p})),n.d(t,"n",(function(){return v})),n.d(t,"o",(function(){return d})),n.d(t,"p",(function(){return h})),n.d(t,"q",(function(){return I})),n.d(t,"r",(function(){return S})),n.d(t,"s",(function(){return m}));
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,i||(d=64)),r.push(n[u],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,s=i?n[e.charAt(o)]:0;++o;const a=o<e.length,c=a?n[e.charAt(o)]:64;++o;const u=o<e.length,l=u?n[e.charAt(o)]:64;if(++o,null==t||null==s||null==c||null==l)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return i.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
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
 */
/**
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
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function h(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function v(){return"object"===typeof indexedDB}function m(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
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
 */
const g="FirebaseError";class b extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=g,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?_(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new b(r,s,n);return a}}function _(e,t){return e.replace(w,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const w=/\{\$([^}]+)}/g;
/**
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
 */function O(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(E(n)&&E(i)){if(!j(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function E(e){return null!==e&&"object"===typeof e}
/**
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
 */function I(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function S(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function k(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function T(e,t){const n=new C(e,t);return n.subscribe.bind(n)}class C{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=R(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=x),void 0===r.error&&(r.error=x),void 0===r.complete&&(r.complete=x);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function x(){}
/**
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
 */
/**
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
 */
function A(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),o=n("0366"),i=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),d=n("9a1f"),f=n("35a1"),h=n("2a62"),p=r.TypeError,v=function(e,t){this.stopped=e,this.result=t},m=v.prototype;e.exports=function(e,t,n){var r,g,b,y,_,w,O,j=n&&n.that,E=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),k=o(t,j),T=function(e){return r&&h(r,"normal",e),new v(!0,e)},C=function(e){return E?(s(e),S?k(e[0],e[1],T):k(e[0],e[1])):S?k(e,T):k(e)};if(I)r=e;else{if(g=f(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(b=0,y=u(e);y>b;b++)if(_=C(e[b]),_&&l(m,_))return _;return new v(!1)}r=d(e,g)}w=r.next;while(!(O=i(w,r)).done){try{_=C(O.value)}catch(R){h(r,"throw",R)}if("object"==typeof _&&_&&l(m,_))return _}return new v(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const i="[DEFAULT]";
/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},"23e7":function(e,t,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),s=n("cb2d"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,d,f,h,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(d in t){if(h=t[d],e.noTargetGet?(p=o(l,d),f=p&&p.value):f=l[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h==typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&i(h,"sham",!0),s(l,d,h,e)}}},"241c":function(e,t,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var o="firebase",i="9.8.1";
/**
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
 */
Object(r["f"])(o,i,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),o=n("9bf2"),i=n("b622"),s=n("83ab"),a=i("species");e.exports=function(e){var t=r(e),n=o.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),o=n("825a"),i=n("dc4a");e.exports=function(e,t,n){var s,a;o(e);try{if(s=i(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return o(s),n}},"2ba4":function(e,t,n){var r=n("40d5"),o=Function.prototype,i=o.apply,s=o.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(i):function(){return s.apply(i,arguments)})},"2cf4":function(e,t,n){var r,o,i,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),d=n("1a2d"),f=n("d039"),h=n("1be4"),p=n("f36a"),v=n("cc12"),m=n("d6d6"),g=n("1cdc"),b=n("605d"),y=a.setImmediate,_=a.clearImmediate,w=a.process,O=a.Dispatch,j=a.Function,E=a.MessageChannel,I=a.String,S=0,k={},T="onreadystatechange";try{r=a.location}catch(P){}var C=function(e){if(d(k,e)){var t=k[e];delete k[e],t()}},R=function(e){return function(){C(e)}},x=function(e){C(e.data)},A=function(e){a.postMessage(I(e),r.protocol+"//"+r.host)};y&&_||(y=function(e){m(arguments.length,1);var t=l(e)?e:j(e),n=p(arguments,1);return k[++S]=function(){c(t,void 0,n)},o(S),S},_=function(e){delete k[e]},b?o=function(e){w.nextTick(R(e))}:O&&O.now?o=function(e){O.now(R(e))}:E&&!g?(i=new E,s=i.port2,i.port1.onmessage=x,o=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(A)?(o=A,a.addEventListener("message",x,!1)):o=T in v("script")?function(e){h.appendChild(v("script"))[T]=function(){h.removeChild(this),C(e)}}:function(e){setTimeout(R(e),0)}),e.exports={set:y,clear:_}},"2d00":function(e,t,n){var r,o,i=n("da84"),s=n("342f"),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},3529:function(e,t,n){"use strict";var r=n("23e7"),o=n("c65b"),i=n("59ed"),s=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{race:function(e){var t=this,n=s.f(t),r=n.reject,u=a((function(){var s=i(t.resolve);c(e,(function(e){o(s,t,e).then(n.resolve,r)}))}));return u.error&&r(u.value),n.promise}})},"35a1":function(e,t,n){var r=n("f5df"),o=n("dc4a"),i=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return o(e,a)||o(e,"@@iterator")||i[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),o=n("aed9"),i=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!o?Object.defineProperties:function(e,t){s(e);var n,r=a(t),o=c(t),u=o.length,l=0;while(u>l)i.f(e,n=o[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),o=n("1626"),i=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||o(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,o=n("577e"),i=n("69f3"),s=n("7dd0"),a="String Iterator",c=i.set,u=i.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:o(e),index:0})}),(function(){var e,t=u(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("abc5");const o="devtools-plugin:setup",i="plugin:settings:set";var s=n("5134");class a{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const i in e.settings){const t=e.settings[i];n[i]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let o=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(o,t)}catch(a){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(a){}o=e},now(){return Object(s["a"])()}},t&&t.on(i,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function c(e,t){const n=e,i=Object(r["b"])(),s=Object(r["a"])(),c=r["c"]&&n.enableEarlyProxy;if(!s||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new a(n,s):null,r=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(o,e,t)}},"3f8c":function(e,t){e.exports={}},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"44ad":function(e,t,n){var r=n("da84"),o=n("e330"),i=n("d039"),s=n("c6b6"),a=r.Object,c=o("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4738:function(e,t,n){var r=n("da84"),o=n("d256"),i=n("1626"),s=n("94ca"),a=n("8925"),c=n("b622"),u=n("6069"),l=n("c430"),d=n("2d00"),f=o&&o.prototype,h=c("species"),p=!1,v=i(r.PromiseRejectionEvent),m=s("Promise",(function(){var e=a(o),t=e!==String(o);if(!t&&66===d)return!0;if(l&&(!f["catch"]||!f["finally"]))return!0;if(d>=51&&/native code/.test(e))return!1;var n=new o((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[h]=r,p=n.then((function(){}))instanceof r,!p||!t&&u&&!v}));e.exports={CONSTRUCTOR:m,REJECTION_EVENT:v,SUBCLASSING:p}},4840:function(e,t,n){var r=n("825a"),o=n("5087"),i=n("b622"),s=i("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[s])?t:o(n)}},"485a":function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!s(r=o(n,e)))return r;if(i(n=e.valueOf)&&!s(r=o(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!s(r=o(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),o=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),o=n("23cb"),i=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=i(c),l=o(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},5087:function(e,t,n){var r=n("da84"),o=n("68ee"),i=n("0d51"),s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},5134:function(e,t,n){"use strict";(function(e){let r,o;function i(){var t;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,o=window.performance):"undefined"!==typeof e&&(null===(t=e.perf_hooks)||void 0===t?void 0:t.performance)?(r=!0,o=e.perf_hooks.performance):r=!1),r}function s(){return i()?o.now():Date.now()}n.d(t,"a",(function(){return s}))}).call(this,n("c8ba"))},5692:function(e,t,n){var r=n("c430"),o=n("c6cd");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),o=n("e330"),i=n("241c"),s=n("7418"),a=n("825a"),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),o=n("f5df"),i=r.String;e.exports=function(e){if("Symbol"===o(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return ve})),n.d(t,"b",(function(){return de})),n.d(t,"c",(function(){return le})),n.d(t,"d",(function(){return ge})),n.d(t,"e",(function(){return me})),n.d(t,"f",(function(){return be}));var r=n("22e5"),o=n("e691"),i=n("1fd5");const s=(e,t)=>t.some(t=>e instanceof t);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,h=new WeakMap,p=new WeakMap,v=new WeakMap;function m(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(O(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&d.set(t,e)}).catch(()=>{}),v.set(t,e),t}function g(e){if(f.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});f.set(e,t)}let b={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){b=e(b)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(j(this),t),O(d.get(this))}:function(...t){return O(e.apply(j(this),t))}:function(t,...n){const r=e.call(j(this),t,...n);return h.set(r,t.sort?t.sort():[t]),O(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,b):e)}function O(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),v.set(t,e)),t}const j=e=>v.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),a=O(s);return r&&s.addEventListener("upgradeneeded",e=>{r(O(s.result),e.oldVersion,e.newVersion,O(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(e=>{i&&e.addEventListener("close",()=>i()),o&&e.addEventListener("versionchange",()=>o())}).catch(()=>{}),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function T(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!I.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&i.done]))[0]};return k.set(t,i),i}y(e=>({...e,get:(t,n,r)=>T(t,n)||e.get(t,n,r),has:(t,n)=>!!T(t,n)||e.has(t,n)}));
/**
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
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const x="@firebase/app",A="0.7.24",P=new o["b"]("@firebase/app"),L="@firebase/app-compat",N="@firebase/analytics-compat",M="@firebase/analytics",D="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",H="@firebase/functions",q="@firebase/functions-compat",z="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.8.1",ie="[DEFAULT]",se={[x]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[N]:"fire-analytics-compat",[U]:"fire-app-check",[D]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[H]:"fire-fn",[q]:"fire-fn-compat",[z]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},he=new i["b"]("app","Firebase",fe);
/**
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
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
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
 */const ve=oe;function me(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!==typeof o||!o)throw he.create("bad-app-name",{appName:String(o)});const s=ae.get(o);if(s){if(Object(i["g"])(e,s.options)&&Object(i["g"])(n,s.config))return s;throw he.create("duplicate-app",{appName:o})}const a=new r["b"](o);for(const r of ce.values())a.addComponent(r);const c=new pe(e,n,a);return ae.set(o,c),c}function ge(e=ie){const t=ae.get(e);if(!t)throw he.create("no-app",{appName:e});return t}function be(e,t,n){var o;let i=null!==(o=se[e])&&void 0!==o?o:e;n&&(i+="-"+n);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}le(new r["a"](i+"-version",()=>({library:i,version:t}),"VERSION"))}
/**
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
 */
const ye="firebase-heartbeat-database",_e=1,we="firebase-heartbeat-store";let Oe=null;function je(){return Oe||(Oe=E(ye,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch(e=>{throw he.create("storage-open",{originalErrorMessage:e.message})})),Oe}async function Ee(e){try{const t=await je();return t.transaction(we).objectStore(we).get(Se(e))}catch(t){throw he.create("storage-get",{originalErrorMessage:t.message})}}async function Ie(e,t){try{const n=await je(),r=n.transaction(we,"readwrite"),o=r.objectStore(we);return await o.put(t,Se(e)),r.done}catch(n){throw he.create("storage-set",{originalErrorMessage:n.message})}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const ke=1024,Te=2592e6;class Ce{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ae(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Te}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=xe(this._heartbeatsCache.heartbeats),r=Object(i["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function xe(e,t=ke){const n=[];let r=e.slice();for(const o of e){const e=n.find(e=>e.agent===o.agent);if(e){if(e.dates.push(o.date),Pe(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Pe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ae{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(i["n"])()&&Object(i["s"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ee(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Pe(e){return Object(i["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Le(e){le(new r["a"]("platform-logger",e=>new C(e),"PRIVATE")),le(new r["a"]("heartbeat",e=>new Ce(e),"PRIVATE")),be(x,A,e),be(x,A,"esm2017"),be("fire-js","")}Le("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("0d51"),s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),o=n("1a2d"),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5e7e":function(e,t,n){"use strict";var r,o,i,s,a=n("23e7"),c=n("c430"),u=n("605d"),l=n("da84"),d=n("c65b"),f=n("cb2d"),h=n("d2bb"),p=n("d44e"),v=n("2626"),m=n("59ed"),g=n("1626"),b=n("861d"),y=n("19aa"),_=n("4840"),w=n("2cf4").set,O=n("b575"),j=n("44de"),E=n("e667"),I=n("01b4"),S=n("69f3"),k=n("d256"),T=n("4738"),C=n("f069"),R="Promise",x=T.CONSTRUCTOR,A=T.REJECTION_EVENT,P=T.SUBCLASSING,L=S.getterFor(R),N=S.set,M=k&&k.prototype,D=k,U=M,F=l.TypeError,V=l.document,B=l.process,$=C.f,H=$,q=!!(V&&V.createEvent&&l.dispatchEvent),z="unhandledrejection",W="rejectionhandled",G=0,K=1,J=2,X=1,Y=2,Q=function(e){var t;return!(!b(e)||!g(t=e.then))&&t},Z=function(e,t){var n,r,o,i=t.value,s=t.state==K,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===Y&&oe(t),t.rejection=X),!0===a?n=i:(l&&l.enter(),n=a(i),l&&(l.exit(),o=!0)),n===e.promise?u(F("Promise-chain cycle")):(r=Q(n))?d(r,n,c,u):c(n)):u(i)}catch(f){l&&!o&&l.exit(),u(f)}},ee=function(e,t){e.notified||(e.notified=!0,O((function(){var n,r=e.reactions;while(n=r.get())Z(n,e);e.notified=!1,t&&!e.rejection&&ne(e)})))},te=function(e,t,n){var r,o;q?(r=V.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),l.dispatchEvent(r)):r={promise:t,reason:n},!A&&(o=l["on"+e])?o(r):e===z&&j("Unhandled promise rejection",n)},ne=function(e){d(w,l,(function(){var t,n=e.facade,r=e.value,o=re(e);if(o&&(t=E((function(){u?B.emit("unhandledRejection",r,n):te(z,n,r)})),e.rejection=u||re(e)?Y:X,t.error))throw t.value}))},re=function(e){return e.rejection!==X&&!e.parent},oe=function(e){d(w,l,(function(){var t=e.facade;u?B.emit("rejectionHandled",t):te(W,t,e.value)}))},ie=function(e,t,n){return function(r){e(t,r,n)}},se=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=J,ee(e,!0))},ae=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw F("Promise can't be resolved itself");var r=Q(t);r?O((function(){var n={done:!1};try{d(r,t,ie(ae,n,e),ie(se,n,e))}catch(o){se(n,o,e)}})):(e.value=t,e.state=K,ee(e,!1))}catch(o){se({done:!1},o,e)}}};if(x&&(D=function(e){y(this,U),m(e),d(r,this);var t=L(this);try{e(ie(ae,t),ie(se,t))}catch(n){se(t,n)}},U=D.prototype,r=function(e){N(this,{type:R,done:!1,notified:!1,parent:!1,reactions:new I,rejection:!1,state:G,value:void 0})},r.prototype=f(U,"then",(function(e,t){var n=L(this),r=$(_(this,D));return n.parent=!0,r.ok=!g(e)||e,r.fail=g(t)&&t,r.domain=u?B.domain:void 0,n.state==G?n.reactions.add(r):O((function(){Z(r,n)})),r.promise})),o=function(){var e=new r,t=L(e);this.promise=e,this.resolve=ie(ae,t),this.reject=ie(se,t)},C.f=$=function(e){return e===D||e===i?new o(e):H(e)},!c&&g(k)&&M!==Object.prototype)){s=M.then,P||f(M,"then",(function(e,t){var n=this;return new D((function(e,t){d(s,n,e,t)})).then(e,t)}),{unsafe:!0});try{delete M.constructor}catch(ce){}h&&h(M,U)}a({global:!0,constructor:!0,wrap:!0,forced:x},{Promise:D}),p(D,R,!1,!0),v(R)},"5eed":function(e,t,n){var r=n("d256"),o=n("1c7e"),i=n("4738").CONSTRUCTOR;e.exports=i||!o((function(e){r.all(e).then(void 0,(function(){}))}))},"605d":function(e,t,n){var r=n("c6b6"),o=n("da84");e.exports="process"==r(o.process)},6069:function(e,t){e.exports="object"==typeof window&&"object"!=typeof Deno},"60da":function(e,t,n){"use strict";var r=n("83ab"),o=n("e330"),i=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),d=n("44ad"),f=Object.assign,h=Object.defineProperty,p=o([].concat);e.exports=!f||s((function(){if(r&&1!==f({b:1},f(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=f({},e)[n]||a(f({},t)).join("")!=o}))?function(e,t){var n=l(e),o=arguments.length,s=1,f=c.f,h=u.f;while(o>s){var v,m=d(arguments[s++]),g=f?p(a(m),f(m)):a(m),b=g.length,y=0;while(b>y)v=g[y++],r&&!i(h,m,v)||(n[v]=m[v])}return n}:f},6547:function(e,t,n){var r=n("e330"),o=n("5926"),i=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,d=i(s(t)),f=o(n),h=d.length;return f<0||f>=h?e?"":void 0:(r=c(d,f),r<55296||r>56319||f+1===h||(l=c(d,f+1))<56320||l>57343?e?a(d,f):r:e?u(d,f,f+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"68ee":function(e,t,n){var r=n("e330"),o=n("d039"),i=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],d=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,h=r(f.exec),p=!f.exec(u),v=function(e){if(!i(e))return!1;try{return d(u,l,e),!0}catch(t){return!1}},m=function(e){if(!i(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!h(f,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!d||o((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?m:v},"69f3":function(e,t,n){var r,o,i,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),d=n("1a2d"),f=n("c6cd"),h=n("f772"),p=n("d012"),v="Object already initialized",m=a.TypeError,g=a.WeakMap,b=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||f.state){var _=f.state||(f.state=new g),w=c(_.get),O=c(_.has),j=c(_.set);r=function(e,t){if(O(_,e))throw new m(v);return t.facade=e,j(_,e,t),t},o=function(e){return w(_,e)||{}},i=function(e){return O(_,e)}}else{var E=h("state");p[E]=!0,r=function(e,t){if(d(e,E))throw new m(v);return t.facade=e,l(e,E,t),t},o=function(e){return d(e,E)?e[E]:{}},i=function(e){return d(e,E)}}e.exports={set:r,get:o,has:i,enforce:b,getterFor:y}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return q})),n.d(t,"c",(function(){return rt}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>o?Symbol(e):"_vr_"+e,s=i("rvlm"),a=i("rvd"),c=i("r"),u=i("rl"),l=i("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const h=Object.assign;function p(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const v=()=>{};const m=/\/$/,g=e=>e.replace(m,"");function b(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),o=e(i)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=S(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&O(t.matched[r],n.matched[o])&&j(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function j(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function S(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,s=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],1!==s&&"."!==i){if(".."!==i)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var k,T;(function(e){e["pop"]="pop",e["push"]="push"})(k||(k={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function C(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}const R=/^[^#]+#/;function x(e,t){return e.replace(R,"#")+t}function A(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=A(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function U(e){const t=M.get(e);return M.delete(e),t}let F=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+o}function B(e,t,n,r){let o=[],i=[],s=null;const a=({state:i})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach(e=>{e(n.value,c,{delta:l,type:k.pop,direction:l?l>0?T.forward:T.back:T.unknown})})};function c(){s=n.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:P()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:d}}function $(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function H(e){const{history:t,location:n}=window,r={value:V(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=h({},t.state,$(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function a(e,n){const s=h({},o.value,t.state,{forward:e,scroll:P()});i(s.current,s,!0);const a=h({},$(r.value,e,null),{position:s.position+1},n);i(e,a,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:a,replace:s}}function q(e){e=C(e);const t=H(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=h({location:"",base:e,go:r,createHref:x.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function z(e){return"string"===typeof e||e&&"object"===typeof e}function W(e){return"string"===typeof e||"symbol"===typeof e}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=i("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return h(new Error,{type:e,[K]:!0},t)}function Y(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=h({},Z,t),r=[];let o=n.start?"^":"";const i=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;i.push({name:e,repeatable:n,optional:a});const d=c||Q;if(d!==Q){s+=10;try{new RegExp(`(${d})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+u.message)}}let f=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),o+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===d&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const i of o)if(0===i.type)n+=i.value;else if(1===i.type){const{value:s,repeatable:a,optional:c}=i,u=s in t?t[s]:"";if(Array.isArray(u)&&!a)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(u)?u.join("/"):u;if(!l){if(!c)throw new Error(`Missing required param "${s}"`);o.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:s,score:r,keys:i,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=ne(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const oe={type:0,value:""},ie=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function d(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&d(),s()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ie.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),o}function ae(e,t,n){const r=te(se(e.path),n);const o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ce(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(h({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let d,f;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(d=ae(t,n,u),r?r.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),o&&e.name&&!fe(d)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)i(e[t],d,r&&r.children[t])}r=r||d,c(d)}return f?()=>{s(f)}:v}function s(e){if(W(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ve(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let o,i,s,a={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw X(1,{location:e});s=o.record.name,a=h(ue(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),i=o.stringify(a)}else if("path"in e)i=e.path,o=n.find(e=>e.re.test(i)),o&&(a=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw X(1,{location:e,currentLocation:t});s=o.record.name,a=h({},t.params,e.params),i=o.stringify(a)}const c=[];let u=o;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:i,params:a,matched:c,meta:he(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>i(e)),{addRoute:i,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function he(e){return e.reduce((e,t)=>h(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ve(e,t){return t.children.some(t=>t===e||ve(e,t))}const me=/#/g,ge=/&/g,be=/\//g,ye=/=/g,_e=/\?/g,we=/\+/g,Oe=/%5B/g,je=/%5D/g,Ee=/%5E/g,Ie=/%60/g,Se=/%7B/g,ke=/%7C/g,Te=/%7D/g,Ce=/%20/g;function Re(e){return encodeURI(""+e).replace(ke,"|").replace(Oe,"[").replace(je,"]")}function xe(e){return Re(e).replace(Se,"{").replace(Te,"}").replace(Ee,"^")}function Ae(e){return Re(e).replace(we,"%2B").replace(Ce,"+").replace(me,"%23").replace(ge,"%26").replace(Ie,"`").replace(Se,"{").replace(Te,"}").replace(Ee,"^")}function Pe(e){return Ae(e).replace(ye,"%3D")}function Le(e){return Re(e).replace(me,"%23").replace(_e,"%3F")}function Ne(e){return null==e?"":Le(e).replace(be,"%2F")}function Me(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(we," "),n=e.indexOf("="),i=Me(n<0?e:e.slice(0,n)),s=n<0?null:Me(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=Array.isArray(r)?r.map(e=>e&&Ae(e)):[r&&Ae(r)];o.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(X(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),s())},u=e.call(r&&r.instances[o],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function $e(e,t,n,r){const o=[];for(const i of e)for(const e in i.components){let s=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(He(s)){const a=s.__vccOpts||s,c=a[t];c&&o.push(Be(c,n,r,i,e))}else{let a=s();0,o.push(()=>a.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const s=f(o)?o.default:o;i.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&Be(c,n,r,i,e)()}))}}return o}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function qe(e){const t=Object(r["inject"])(c),n=Object(r["inject"])(u),o=Object(r["computed"])(()=>t.resolve(Object(r["unref"])(e.to))),i=Object(r["computed"])(()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(O.bind(null,r));if(s>-1)return s;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["computed"])(()=>i.value>-1&&Ke(n.params,o.value.params)),a=Object(r["computed"])(()=>i.value>-1&&i.value===n.matched.length-1&&j(n.params,o.value.params));function l(n={}){return Ge(n)?t[Object(r["unref"])(e.replace)?"replace":"push"](Object(r["unref"])(e.to)).catch(v):Promise.resolve()}return{route:o,href:Object(r["computed"])(()=>o.value.href),isActive:s,isExactActive:a,navigate:l}}const ze=Object(r["defineComponent"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qe,setup(e,{slots:t}){const n=Object(r["reactive"])(qe(e)),{options:o}=Object(r["inject"])(c),i=Object(r["computed"])(()=>({[Xe(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Object(r["h"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),We=ze;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ye=Object(r["defineComponent"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=Object(r["inject"])(l),i=Object(r["computed"])(()=>e.route||o.value),c=Object(r["inject"])(a,0),u=Object(r["computed"])(()=>i.value.matched[c]);Object(r["provide"])(a,c+1),Object(r["provide"])(s,u),Object(r["provide"])(l,i);const d=Object(r["ref"])();return Object(r["watch"])(()=>[d.value,u.value,e.name],([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&O(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=i.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Qe(n.default,{Component:a,route:o});const l=s.props[e.name],f=l?!0===l?o.params:"function"===typeof l?l(o):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},v=Object(r["h"])(a,h({},f,t,{onVnodeUnmounted:p,ref:d}));return Qe(n.default,{Component:v,route:o})||v}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Ye;function et(e){const t=ce(e.routes,e),n=e.parseQuery||De,o=e.stringifyQuery||Ue,i=e.history;const s=Ve(),a=Ve(),f=Ve(),m=Object(r["shallowRef"])(G);let g=G;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),O=p.bind(null,Ne),j=p.bind(null,Me);function E(e,n){let r,o;return W(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map(e=>e.record)}function T(e){return!!t.getRecordMatcher(e)}function C(e,r){if(r=h({},r||m.value),"string"===typeof e){const o=b(n,e,r.path),s=t.resolve({path:o.path},r),a=i.createHref(o.fullPath);return h(o,s,{params:j(s.params),hash:Me(o.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=h({},e,{path:b(n,e.path,r.path).path});else{const t=h({},e.params);for(const e in t)null==t[e]&&delete t[e];s=h({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=_(j(a.params));const u=y(o,h({},e,{hash:xe(c),path:a.path})),l=i.createHref(u);return h({fullPath:u,hash:c,query:o===Ue?Fe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function R(e){return"string"===typeof e?b(n,e,m.value.path):h({},e)}function x(e,t){if(g!==e)return X(8,{from:t,to:e})}function A(e){return V(e)}function M(e){return A(h(R(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=g=C(e),r=m.value,i=e.state,s=e.force,a=!0===e.replace,c=F(n);if(c)return V(h(R(c),{state:i,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(o,r,n)&&(l=X(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):$(u,r)).catch(e=>Y(e)?Y(e,2)?e:ne(e):ee(e,u,r)).then(e=>{if(e){if(Y(e,2))return V(h(R(e.to),{state:i,force:s,replace:a}),t||u)}else e=q(u,r,!0,a,i);return H(u,r,e),e})}function B(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,o,i]=nt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Be(r,e,t))});const c=B.bind(null,e,t);return n.push(c),tt(n).then(()=>{n=[];for(const r of s.list())n.push(Be(r,e,t));return n.push(c),tt(n)}).then(()=>{n=$e(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(Be(r,e,t))});return n.push(c),tt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Be(o,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(c),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=$e(i,"beforeRouteEnter",e,t),n.push(c),tt(n))).then(()=>{n=[];for(const r of a.list())n.push(Be(r,e,t));return n.push(c),tt(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function H(e,t,n){for(const r of f.list())r(e,t,n)}function q(e,t,n,r,o){const s=x(e,t);if(s)return s;const a=t===G,c=d?history.state:{};n&&(r||a?i.replace(e.fullPath,h({scroll:a&&c&&c.scroll},o)):i.push(e.fullPath,o)),m.value=e,re(e,t,n,a),ne()}let z;function K(){z||(z=i.listen((e,t,n)=>{const r=C(e),o=F(r);if(o)return void V(h(o,{replace:!0}),r).catch(v);g=r;const s=m.value;d&&D(N(s.fullPath,n.delta),P()),$(r,s).catch(e=>Y(e,12)?e:Y(e,2)?(V(e.to,r).then(e=>{Y(e,20)&&!n.delta&&n.type===k.pop&&i.go(-1,!1)}).catch(v),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||q(r,s,!1),e&&(n.delta?i.go(-n.delta,!1):n.type===k.pop&&Y(e,20)&&i.go(-1,!1)),H(r,s,e)}).catch(v)}))}let J,Q=Ve(),Z=Ve();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return J&&m.value!==G?Promise.resolve():new Promise((e,t)=>{Q.add([e,t])})}function ne(e){return J||(J=!e,K(),Q.list().forEach(([t,n])=>e?n(e):t()),Q.reset()),e}function re(t,n,o,i){const{scrollBehavior:s}=e;if(!d||!s)return Promise.resolve();const a=!o&&U(N(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return Object(r["nextTick"])().then(()=>s(t,n,a)).then(e=>e&&L(e)).catch(e=>ee(e,t,n))}const oe=e=>i.go(e);let ie;const se=new Set,ae={currentRoute:m,addRoute:E,removeRoute:I,hasRoute:T,getRoutes:S,resolve:C,options:e,push:A,replace:M,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["unref"])(m)}),d&&!ie&&m.value===G&&(ie=!0,A(i.location).catch(e=>{0}));const n={};for(const i in G)n[i]=Object(r["computed"])(()=>m.value[i]);e.provide(c,t),e.provide(u,Object(r["reactive"])(n)),e.provide(l,m);const o=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=G,z&&z(),z=null,m.value=G,ie=!1,J=!1),o()}}};return ae}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find(e=>O(e,i))?r.push(i):n.push(i));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||o.push(a))}return[n,r,o]}function rt(){return Object(r["inject"])(c)}},7149:function(e,t,n){"use strict";var r=n("23e7"),o=n("d066"),i=n("c430"),s=n("d256"),a=n("4738").CONSTRUCTOR,c=n("cdf9"),u=o("Promise"),l=i&&!a;r({target:"Promise",stat:!0,forced:i||a},{resolve:function(e){return c(l&&this===u?s:this,e)}})},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),o=r("span").classList,i=o&&o.constructor&&o.constructor.prototype;e.exports=i===Object.prototype?void 0:i},"7a23":function(e,t,n){"use strict";n.r(t),n.d(t,"EffectScope",(function(){return i})),n.d(t,"ReactiveEffect",(function(){return O})),n.d(t,"customRef",(function(){return Qe})),n.d(t,"effect",(function(){return E})),n.d(t,"effectScope",(function(){return s})),n.d(t,"getCurrentScope",(function(){return c})),n.d(t,"isProxy",(function(){return Ne})),n.d(t,"isReactive",(function(){return Ae})),n.d(t,"isReadonly",(function(){return Pe})),n.d(t,"isRef",(function(){return $e})),n.d(t,"isShallow",(function(){return Le})),n.d(t,"markRaw",(function(){return De})),n.d(t,"onScopeDispose",(function(){return u})),n.d(t,"proxyRefs",(function(){return Xe})),n.d(t,"reactive",(function(){return ke})),n.d(t,"readonly",(function(){return Ce})),n.d(t,"ref",(function(){return He})),n.d(t,"shallowReactive",(function(){return Te})),n.d(t,"shallowReadonly",(function(){return Re})),n.d(t,"shallowRef",(function(){return qe})),n.d(t,"stop",(function(){return I})),n.d(t,"toRaw",(function(){return Me})),n.d(t,"toRef",(function(){return tt})),n.d(t,"toRefs",(function(){return Ze})),n.d(t,"triggerRef",(function(){return Ge})),n.d(t,"unref",(function(){return Ke})),n.d(t,"camelize",(function(){return r["e"]})),n.d(t,"capitalize",(function(){return r["f"]})),n.d(t,"normalizeClass",(function(){return r["J"]})),n.d(t,"normalizeProps",(function(){return r["K"]})),n.d(t,"normalizeStyle",(function(){return r["L"]})),n.d(t,"toDisplayString",(function(){return r["N"]})),n.d(t,"toHandlerKey",(function(){return r["O"]})),n.d(t,"BaseTransition",(function(){return Ln})),n.d(t,"Comment",(function(){return So})),n.d(t,"Fragment",(function(){return Eo})),n.d(t,"KeepAlive",(function(){return Gn})),n.d(t,"Static",(function(){return ko})),n.d(t,"Suspense",(function(){return ln})),n.d(t,"Teleport",(function(){return vo})),n.d(t,"Text",(function(){return Io})),n.d(t,"callWithAsyncErrorHandling",(function(){return ft})),n.d(t,"callWithErrorHandling",(function(){return dt})),n.d(t,"cloneVNode",(function(){return Ko})),n.d(t,"compatUtils",(function(){return os})),n.d(t,"computed",(function(){return Di})),n.d(t,"createBlock",(function(){return Do})),n.d(t,"createCommentVNode",(function(){return Yo})),n.d(t,"createElementBlock",(function(){return Mo})),n.d(t,"createElementVNode",(function(){return qo})),n.d(t,"createHydrationRenderer",(function(){return no})),n.d(t,"createPropsRestProxy",(function(){return Wi})),n.d(t,"createRenderer",(function(){return to})),n.d(t,"createSlots",(function(){return oi})),n.d(t,"createStaticVNode",(function(){return Xo})),n.d(t,"createTextVNode",(function(){return Jo})),n.d(t,"createVNode",(function(){return zo})),n.d(t,"defineAsyncComponent",(function(){return Hn})),n.d(t,"defineComponent",(function(){return Bn})),n.d(t,"defineEmits",(function(){return Fi})),n.d(t,"defineExpose",(function(){return Vi})),n.d(t,"defineProps",(function(){return Ui})),n.d(t,"devtools",(function(){return Vt})),n.d(t,"getCurrentInstance",(function(){return mi})),n.d(t,"getTransitionRawChildren",(function(){return Vn})),n.d(t,"guardReactiveProps",(function(){return Go})),n.d(t,"h",(function(){return Ki})),n.d(t,"handleError",(function(){return ht})),n.d(t,"initCustomFormatter",(function(){return Yi})),n.d(t,"inject",(function(){return wn})),n.d(t,"isMemoSame",(function(){return Zi})),n.d(t,"isRuntimeOnly",(function(){return ki})),n.d(t,"isVNode",(function(){return Uo})),n.d(t,"mergeDefaults",(function(){return zi})),n.d(t,"mergeProps",(function(){return ti})),n.d(t,"nextTick",(function(){return Tt})),n.d(t,"onActivated",(function(){return Jn})),n.d(t,"onBeforeMount",(function(){return rr})),n.d(t,"onBeforeUnmount",(function(){return ar})),n.d(t,"onBeforeUpdate",(function(){return ir})),n.d(t,"onDeactivated",(function(){return Xn})),n.d(t,"onErrorCaptured",(function(){return fr})),n.d(t,"onMounted",(function(){return or})),n.d(t,"onRenderTracked",(function(){return dr})),n.d(t,"onRenderTriggered",(function(){return lr})),n.d(t,"onServerPrefetch",(function(){return ur})),n.d(t,"onUnmounted",(function(){return cr})),n.d(t,"onUpdated",(function(){return sr})),n.d(t,"openBlock",(function(){return Ro})),n.d(t,"popScopeId",(function(){return Yt})),n.d(t,"provide",(function(){return _n})),n.d(t,"pushScopeId",(function(){return Xt})),n.d(t,"queuePostFlushCb",(function(){return Nt})),n.d(t,"registerRuntimeCompiler",(function(){return Si})),n.d(t,"renderList",(function(){return ri})),n.d(t,"renderSlot",(function(){return ii})),n.d(t,"resolveComponent",(function(){return bo})),n.d(t,"resolveDirective",(function(){return wo})),n.d(t,"resolveDynamicComponent",(function(){return _o})),n.d(t,"resolveFilter",(function(){return rs})),n.d(t,"resolveTransitionHooks",(function(){return Mn})),n.d(t,"setBlockTracking",(function(){return Lo})),n.d(t,"setDevtoolsHook",(function(){return Ht})),n.d(t,"setTransitionHooks",(function(){return Fn})),n.d(t,"ssrContextKey",(function(){return Ji})),n.d(t,"ssrUtils",(function(){return ns})),n.d(t,"toHandlers",(function(){return ai})),n.d(t,"transformVNodeArgs",(function(){return Vo})),n.d(t,"useAttrs",(function(){return Hi})),n.d(t,"useSSRContext",(function(){return Xi})),n.d(t,"useSlots",(function(){return $i})),n.d(t,"useTransitionState",(function(){return xn})),n.d(t,"version",(function(){return es})),n.d(t,"warn",(function(){return it})),n.d(t,"watch",(function(){return Sn})),n.d(t,"watchEffect",(function(){return On})),n.d(t,"watchPostEffect",(function(){return jn})),n.d(t,"watchSyncEffect",(function(){return En})),n.d(t,"withAsyncContext",(function(){return Gi})),n.d(t,"withCtx",(function(){return Zt})),n.d(t,"withDefaults",(function(){return Bi})),n.d(t,"withDirectives",(function(){return Hr})),n.d(t,"withMemo",(function(){return Qi})),n.d(t,"withScopeId",(function(){return Qt})),n.d(t,"Transition",(function(){return zs})),n.d(t,"TransitionGroup",(function(){return da})),n.d(t,"VueElement",(function(){return Us})),n.d(t,"createApp",(function(){return Wa})),n.d(t,"createSSRApp",(function(){return Ga})),n.d(t,"defineCustomElement",(function(){return Ns})),n.d(t,"defineSSRCustomElement",(function(){return Ms})),n.d(t,"hydrate",(function(){return za})),n.d(t,"initDirectivesForSSR",(function(){return Xa})),n.d(t,"render",(function(){return qa})),n.d(t,"useCssModule",(function(){return Fs})),n.d(t,"useCssVars",(function(){return Vs})),n.d(t,"vModelCheckbox",(function(){return wa})),n.d(t,"vModelDynamic",(function(){return Ta})),n.d(t,"vModelRadio",(function(){return ja})),n.d(t,"vModelSelect",(function(){return Ea})),n.d(t,"vModelText",(function(){return _a})),n.d(t,"vShow",(function(){return Ma})),n.d(t,"withKeys",(function(){return Na})),n.d(t,"withModifiers",(function(){return Pa})),n.d(t,"compile",(function(){return Ya}));var r=n("9ff4");let o;class i{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&o&&(this.parent=o,this.index=(o.scopes||(o.scopes=[])).push(this)-1)}run(e){if(this.active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function s(e){return new i(e)}function a(e,t=o){t&&t.active&&t.effects.push(e)}function c(){return o}function u(e){o&&o.cleanups.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},d=e=>(e.w&g)>0,f=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},p=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];d(o)&&!f(o)?o.delete(e):t[n++]=o,o.w&=~g,o.n&=~g}t.length=n}},v=new WeakMap;let m=0,g=1;const b=30;let y;const _=Symbol(""),w=Symbol("");class O{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=y,t=S;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,S=!0,g=1<<++m,m<=b?h(this):j(this),this.fn()}finally{m<=b&&p(this),g=1<<--m,y=this.parent,S=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(j(this),this.onStop&&this.onStop(),this.active=!1)}}function j(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function E(e,t){e.effect&&(e=e.effect.fn);const n=new O(e);t&&(Object(r["h"])(n,t),t.scope&&a(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o}function I(e){e.effect.stop()}let S=!0;const k=[];function T(){k.push(S),S=!1}function C(){const e=k.pop();S=void 0===e||e}function R(e,t,n){if(S&&y){let t=v.get(e);t||v.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=l());const o=void 0;x(r,o)}}function x(e,t){let n=!1;m<=b?f(e)||(e.n|=g,n=!d(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function A(e,t,n,o,i,s){const a=v.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=o)&&c.push(e)});else switch(void 0!==n&&c.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["t"])(n)&&c.push(a.get("length")):(c.push(a.get(_)),Object(r["u"])(e)&&c.push(a.get(w)));break;case"delete":Object(r["o"])(e)||(c.push(a.get(_)),Object(r["u"])(e)&&c.push(a.get(w)));break;case"set":Object(r["u"])(e)&&c.push(a.get(_));break}if(1===c.length)c[0]&&P(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);P(l(e))}}function P(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const L=Object(r["I"])("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["F"])),M=$(),D=$(!1,!0),U=$(!0),F=$(!0,!0),V=B();function B(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Me(this);for(let t=0,o=this.length;t<o;t++)R(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Me)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){T();const n=Me(this)[t].apply(this,e);return C(),n}}),e}function $(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_isShallow"===o)return t;if("__v_raw"===o&&i===(e?t?Ee:je:t?Oe:we).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(V,o))return Reflect.get(V,o,i);const a=Reflect.get(n,o,i);if(Object(r["F"])(o)?N.has(o):L(o))return a;if(e||R(n,"get",o),t)return a;if($e(a)){const e=!s||!Object(r["t"])(o);return e?a.value:a}return Object(r["w"])(a)?e?Ce(a):ke(a):a}}const H=z(),q=z(!0);function z(e=!1){return function(t,n,o,i){let s=t[n];if(Pe(s)&&$e(s)&&!$e(o))return!1;if(!e&&!Pe(o)&&(Le(o)||(o=Me(o),s=Me(s)),!Object(r["o"])(t)&&$e(s)&&!$e(o)))return s.value=o,!0;const a=Object(r["o"])(t)&&Object(r["t"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,o,i);return t===Me(i)&&(a?Object(r["j"])(o,s)&&A(t,"set",n,o,s):A(t,"add",n,o)),c}}function W(e,t){const n=Object(r["k"])(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&A(e,"delete",t,void 0,o),i}function G(e,t){const n=Reflect.has(e,t);return Object(r["F"])(t)&&N.has(t)||R(e,"has",t),n}function K(e){return R(e,"iterate",Object(r["o"])(e)?"length":_),Reflect.ownKeys(e)}const J={get:M,set:H,deleteProperty:W,has:G,ownKeys:K},X={get:U,set(e,t){return!0},deleteProperty(e,t){return!0}},Y=Object(r["h"])({},J,{get:D,set:q}),Q=Object(r["h"])({},X,{get:F}),Z=e=>e,ee=e=>Reflect.getPrototypeOf(e);function te(e,t,n=!1,r=!1){e=e["__v_raw"];const o=Me(e),i=Me(t);t!==i&&!n&&R(o,"get",t),!n&&R(o,"get",i);const{has:s}=ee(o),a=r?Z:n?Fe:Ue;return s.call(o,t)?a(e.get(t)):s.call(o,i)?a(e.get(i)):void(e!==o&&e.get(t))}function ne(e,t=!1){const n=this["__v_raw"],r=Me(n),o=Me(e);return e!==o&&!t&&R(r,"has",e),!t&&R(r,"has",o),e===o?n.has(e):n.has(e)||n.has(o)}function re(e,t=!1){return e=e["__v_raw"],!t&&R(Me(e),"iterate",_),Reflect.get(e,"size",e)}function oe(e){e=Me(e);const t=Me(this),n=ee(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function ie(e,t){t=Me(t);const n=Me(this),{has:o,get:i}=ee(n);let s=o.call(n,e);s||(e=Me(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function se(e){const t=Me(this),{has:n,get:r}=ee(t);let o=n.call(t,e);o||(e=Me(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&A(t,"delete",e,void 0,i),s}function ae(){const e=Me(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ce(e,t){return function(n,r){const o=this,i=o["__v_raw"],s=Me(i),a=t?Z:e?Fe:Ue;return!e&&R(s,"iterate",_),i.forEach((e,t)=>n.call(r,a(e),a(t),o))}}function ue(e,t,n){return function(...o){const i=this["__v_raw"],s=Me(i),a=Object(r["u"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...o),d=n?Z:t?Fe:Ue;return!t&&R(s,"iterate",u?w:_),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function le(e){return function(...t){return"delete"!==e&&this}}function de(){const e={get(e){return te(this,e)},get size(){return re(this)},has:ne,add:oe,set:ie,delete:se,clear:ae,forEach:ce(!1,!1)},t={get(e){return te(this,e,!1,!0)},get size(){return re(this)},has:ne,add:oe,set:ie,delete:se,clear:ae,forEach:ce(!1,!0)},n={get(e){return te(this,e,!0)},get size(){return re(this,!0)},has(e){return ne.call(this,e,!0)},add:le("add"),set:le("set"),delete:le("delete"),clear:le("clear"),forEach:ce(!0,!1)},r={get(e){return te(this,e,!0,!0)},get size(){return re(this,!0)},has(e){return ne.call(this,e,!0)},add:le("add"),set:le("set"),delete:le("delete"),clear:le("clear"),forEach:ce(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach(o=>{e[o]=ue(o,!1,!1),n[o]=ue(o,!0,!1),t[o]=ue(o,!1,!0),r[o]=ue(o,!0,!0)}),[e,n,t,r]}const[fe,he,pe,ve]=de();function me(e,t){const n=t?e?ve:pe:e?he:fe;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(Object(r["k"])(n,o)&&o in t?n:t,o,i)}const ge={get:me(!1,!1)},be={get:me(!1,!0)},ye={get:me(!0,!1)},_e={get:me(!0,!0)};const we=new WeakMap,Oe=new WeakMap,je=new WeakMap,Ee=new WeakMap;function Ie(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Se(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ie(Object(r["Q"])(e))}function ke(e){return Pe(e)?e:xe(e,!1,J,ge,we)}function Te(e){return xe(e,!1,Y,be,Oe)}function Ce(e){return xe(e,!0,X,ye,je)}function Re(e){return xe(e,!0,Q,_e,Ee)}function xe(e,t,n,o,i){if(!Object(r["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=Se(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function Ae(e){return Pe(e)?Ae(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Pe(e){return!(!e||!e["__v_isReadonly"])}function Le(e){return!(!e||!e["__v_isShallow"])}function Ne(e){return Ae(e)||Pe(e)}function Me(e){const t=e&&e["__v_raw"];return t?Me(t):e}function De(e){return Object(r["g"])(e,"__v_skip",!0),e}const Ue=e=>Object(r["w"])(e)?ke(e):e,Fe=e=>Object(r["w"])(e)?Ce(e):e;function Ve(e){S&&y&&(e=Me(e),x(e.dep||(e.dep=l())))}function Be(e,t){e=Me(e),e.dep&&P(e.dep)}function $e(e){return!(!e||!0!==e.__v_isRef)}function He(e){return ze(e,!1)}function qe(e){return ze(e,!0)}function ze(e,t){return $e(e)?e:new We(e,t)}class We{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Me(e),this._value=t?e:Ue(e)}get value(){return Ve(this),this._value}set value(e){e=this.__v_isShallow?e:Me(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ue(e),Be(this,e))}}function Ge(e){Be(e,void 0)}function Ke(e){return $e(e)?e.value:e}const Je={get:(e,t,n)=>Ke(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return $e(o)&&!$e(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Xe(e){return Ae(e)?e:new Proxy(e,Je)}class Ye{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e(()=>Ve(this),()=>Be(this));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Qe(e){return new Ye(e)}function Ze(e){const t=Object(r["o"])(e)?new Array(e.length):{};for(const n in e)t[n]=tt(e,n);return t}class et{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function tt(e,t,n){const r=e[t];return $e(r)?r:new et(e,t,n)}class nt{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new O(e,()=>{this._dirty||(this._dirty=!0,Be(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Me(this);return Ve(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rt(e,t,n=!1){let o,i;const s=Object(r["q"])(e);s?(o=e,i=r["d"]):(o=e.get,i=e.set);const a=new nt(o,i,s||!i,n);return a}const ot=[];function it(e,...t){T();const n=ot.length?ot[ot.length-1].component:null,r=n&&n.appContext.config.warnHandler,o=st();if(r)dt(r,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:e})=>`at <${Ni(n,e.type)}>`).join("\n"),o]);else{const n=["[Vue warn]: "+e,...t];o.length&&n.push("\n",...at(o)),console.warn(...n)}C()}function st(){let e=ot[ot.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function at(e){const t=[];return e.forEach((e,n)=>{t.push(...0===n?[]:["\n"],...ct(e))}),t}function ct({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,o=" at <"+Ni(e.component,e.type,r),i=">"+n;return e.props?[o,...ut(e.props),i]:[o+i]}function ut(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...lt(n,e[n]))}),n.length>3&&t.push(" ..."),t}function lt(e,t,n){return Object(r["E"])(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:$e(t)?(t=lt(e,Me(t.value),!0),n?t:[e+"=Ref<",t,">"]):Object(r["q"])(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Me(t),n?t:[e+"=",t])}function dt(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){ht(i,t,n)}return o}function ft(e,t,n,o){if(Object(r["q"])(e)){const i=dt(e,t,n,o);return i&&Object(r["z"])(i)&&i.catch(e=>{ht(e,t,n)}),i}const i=[];for(let r=0;r<e.length;r++)i.push(ft(e[r],t,n,o));return i}function ht(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,i=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,i))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void dt(s,null,10,[e,o,i])}pt(e,n,o,r)}function pt(e,t,n,r=!0){console.error(e)}let vt=!1,mt=!1;const gt=[];let bt=0;const yt=[];let _t=null,wt=0;const Ot=[];let jt=null,Et=0;const It=Promise.resolve();let St=null,kt=null;function Tt(e){const t=St||It;return e?t.then(this?e.bind(this):e):t}function Ct(e){let t=bt+1,n=gt.length;while(t<n){const r=t+n>>>1,o=Ut(gt[r]);o<e?t=r+1:n=r}return t}function Rt(e){gt.length&&gt.includes(e,vt&&e.allowRecurse?bt+1:bt)||e===kt||(null==e.id?gt.push(e):gt.splice(Ct(e.id),0,e),xt())}function xt(){vt||mt||(mt=!0,St=It.then(Ft))}function At(e){const t=gt.indexOf(e);t>bt&&gt.splice(t,1)}function Pt(e,t,n,o){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),xt()}function Lt(e){Pt(e,_t,yt,wt)}function Nt(e){Pt(e,jt,Ot,Et)}function Mt(e,t=null){if(yt.length){for(kt=t,_t=[...new Set(yt)],yt.length=0,wt=0;wt<_t.length;wt++)_t[wt]();_t=null,wt=0,kt=null,Mt(e,t)}}function Dt(e){if(Ot.length){const e=[...new Set(Ot)];if(Ot.length=0,jt)return void jt.push(...e);for(jt=e,jt.sort((e,t)=>Ut(e)-Ut(t)),Et=0;Et<jt.length;Et++)jt[Et]();jt=null,Et=0}}const Ut=e=>null==e.id?1/0:e.id;function Ft(e){mt=!1,vt=!0,Mt(e),gt.sort((e,t)=>Ut(e)-Ut(t));r["d"];try{for(bt=0;bt<gt.length;bt++){const e=gt[bt];e&&!1!==e.active&&dt(e,null,14)}}finally{bt=0,gt.length=0,Dt(e),vt=!1,St=null,(gt.length||yt.length||Ot.length)&&Ft(e)}}new Set;new Map;let Vt,Bt=[],$t=!1;function Ht(e,t){var n,r;if(Vt=e,Vt)Vt.enabled=!0,Bt.forEach(({event:e,args:t})=>Vt.emit(e,...t)),Bt=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null===(r=null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||void 0===r?void 0:r.includes("jsdom"))){const e=t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[];e.push(e=>{Ht(e,t)}),setTimeout(()=>{Vt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,$t=!0,Bt=[])},3e3)}else $t=!0,Bt=[]}function qt(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||r["b"];let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in o){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=o[e]||r["b"];s?i=n.map(e=>e.trim()):t&&(i=n.map(r["P"]))}let c;let u=o[c=Object(r["O"])(t)]||o[c=Object(r["O"])(Object(r["e"])(t))];!u&&s&&(u=o[c=Object(r["O"])(Object(r["l"])(t))]),u&&ft(u,e,6,i);const l=o[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,ft(l,e,6,i)}}function zt(e,t,n=!1){const o=t.emitsCache,i=o.get(e);if(void 0!==i)return i;const s=e.emits;let a={},c=!1;if(!Object(r["q"])(e)){const o=e=>{const n=zt(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),o.set(e,a),a):(o.set(e,null),null)}function Wt(e,t){return!(!e||!Object(r["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Gt=null,Kt=null;function Jt(e){const t=Gt;return Gt=e,Kt=e&&e.type.__scopeId||null,t}function Xt(e){Kt=e}function Yt(){Kt=null}const Qt=e=>Zt;function Zt(e,t=Gt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Lo(-1);const o=Jt(t),i=e(...n);return Jt(o),r._d&&Lo(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function en(e){const{type:t,vnode:n,proxy:o,withProxy:i,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:d,renderCache:f,data:h,setupState:p,ctx:v,inheritAttrs:m}=e;let g,b;const y=Jt(e);try{if(4&n.shapeFlag){const e=i||o;g=Qo(d.call(e,e,f,s,p,h,v)),b=u}else{const e=t;0,g=Qo(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),b=t.props?u:nn(u)}}catch(w){To.length=0,ht(w,e,1),g=zo(So)}let _=g;if(b&&!1!==m){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(r["v"])&&(b=rn(b,a)),_=Ko(_,b))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),g=_,Jt(y),g}function tn(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!Uo(r))return;if(r.type!==So||"v-if"===r.children){if(t)return;t=r}}return t}const nn=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["x"])(n))&&((t||(t={}))[n]=e[n]);return t},rn=(e,t)=>{const n={};for(const o in e)Object(r["v"])(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function on(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||sn(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?sn(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Wt(u,n))return!0}}return!1}function sn(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Wt(n,i))return!0}return!1}function an({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const cn=e=>e.__isSuspense,un={name:"Suspense",__isSuspense:!0,process(e,t,n,r,o,i,s,a,c,u){null==e?fn(t,n,r,o,i,s,a,c,u):hn(e,t,n,r,o,s,a,c,u)},hydrate:vn,create:pn,normalize:mn},ln=un;function dn(e,t){const n=e.props&&e.props[t];Object(r["q"])(n)&&n()}function fn(e,t,n,r,o,i,s,a,c){const{p:u,o:{createElement:l}}=c,d=l("div"),f=e.suspense=pn(e,o,r,t,d,n,i,s,a,c);u(null,f.pendingBranch=e.ssContent,d,null,r,f,i,s),f.deps>0?(dn(e,"onPending"),dn(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,i,s),yn(f,e.ssFallback)):f.resolve()}function hn(e,t,n,r,o,i,s,a,{p:c,um:u,o:{createElement:l}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const f=t.ssContent,h=t.ssFallback,{activeBranch:p,pendingBranch:v,isInFallback:m,isHydrating:g}=d;if(v)d.pendingBranch=f,Fo(f,v)?(c(v,f,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0?d.resolve():m&&(c(p,h,n,r,o,null,i,s,a),yn(d,h))):(d.pendingId++,g?(d.isHydrating=!1,d.activeBranch=v):u(v,o,d),d.deps=0,d.effects.length=0,d.hiddenContainer=l("div"),m?(c(null,f,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0?d.resolve():(c(p,h,n,r,o,null,i,s,a),yn(d,h))):p&&Fo(f,p)?(c(p,f,n,r,o,d,i,s,a),d.resolve(!0)):(c(null,f,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0&&d.resolve()));else if(p&&Fo(f,p))c(p,f,n,r,o,d,i,s,a),yn(d,f);else if(dn(t,"onPending"),d.pendingBranch=f,d.pendingId++,c(null,f,d.hiddenContainer,null,o,d,i,s,a),d.deps<=0)d.resolve();else{const{timeout:e,pendingId:t}=d;e>0?setTimeout(()=>{d.pendingId===t&&d.fallback(h)},e):0===e&&d.fallback(h)}}function pn(e,t,n,o,i,s,a,c,u,l,d=!1){const{p:f,m:h,um:p,n:v,o:{parentNode:m,remove:g}}=l,b=Object(r["P"])(e.props&&e.props.timeout),y={vnode:e,parent:t,parentComponent:n,isSVG:a,container:o,hiddenContainer:i,anchor:s,deps:0,pendingId:0,timeout:"number"===typeof b?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:r,pendingId:o,effects:i,parentComponent:s,container:a}=y;if(y.isHydrating)y.isHydrating=!1;else if(!e){const e=n&&r.transition&&"out-in"===r.transition.mode;e&&(n.transition.afterLeave=()=>{o===y.pendingId&&h(r,a,t,0)});let{anchor:t}=y;n&&(t=v(n),p(n,s,y,!0)),e||h(r,a,t,0)}yn(y,r),y.pendingBranch=null,y.isInFallback=!1;let c=y.parent,u=!1;while(c){if(c.pendingBranch){c.effects.push(...i),u=!0;break}c=c.parent}u||Nt(i),y.effects=[],dn(t,"onResolve")},fallback(e){if(!y.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:o,isSVG:i}=y;dn(t,"onFallback");const s=v(n),a=()=>{y.isInFallback&&(f(null,e,o,s,r,null,i,c,u),yn(y,e))},l=e.transition&&"out-in"===e.transition.mode;l&&(n.transition.afterLeave=a),y.isInFallback=!0,p(n,r,null,!0),l||a()},move(e,t,n){y.activeBranch&&h(y.activeBranch,e,t,n),y.container=e},next(){return y.activeBranch&&v(y.activeBranch)},registerDep(e,t){const n=!!y.pendingBranch;n&&y.deps++;const r=e.vnode.el;e.asyncDep.catch(t=>{ht(t,e,0)}).then(o=>{if(e.isUnmounted||y.isUnmounted||y.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:i}=e;Ii(e,o,!1),r&&(i.el=r);const s=!r&&e.subTree.el;t(e,i,m(r||e.subTree.el),r?null:v(e.subTree),y,a,u),s&&g(s),an(e,i.el),n&&0===--y.deps&&y.resolve()})},unmount(e,t){y.isUnmounted=!0,y.activeBranch&&p(y.activeBranch,n,e,t),y.pendingBranch&&p(y.pendingBranch,n,e,t)}};return y}function vn(e,t,n,r,o,i,s,a,c){const u=t.suspense=pn(t,r,n,e.parentNode,document.createElement("div"),null,o,i,s,a,!0),l=c(e,u.pendingBranch=t.ssContent,n,u,i,s);return 0===u.deps&&u.resolve(),l}function mn(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=gn(r?n.default:n),e.ssFallback=r?gn(n.fallback):zo(So)}function gn(e){let t;if(Object(r["q"])(e)){const n=Po&&e._c;n&&(e._d=!1,Ro()),e=e(),n&&(e._d=!0,t=Co,xo())}if(Object(r["o"])(e)){const t=tn(e);0,e=t}return e=Qo(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(t=>t!==e)),e}function bn(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):Nt(e)}function yn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,o=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=o,an(r,o))}function _n(e,t){if(vi){let n=vi.provides;const r=vi.parent&&vi.parent.provides;r===n&&(n=vi.provides=Object.create(r)),n[e]=t}else 0}function wn(e,t,n=!1){const o=vi||Gt;if(o){const i=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Object(r["q"])(t)?t.call(o.proxy):t}else 0}function On(e,t){return kn(e,null,t)}function jn(e,t){return kn(e,null,{flush:"post"})}function En(e,t){return kn(e,null,{flush:"sync"})}const In={};function Sn(e,t,n){return kn(e,t,n)}function kn(e,t,{immediate:n,deep:o,flush:i,onTrack:s,onTrigger:a}=r["b"]){const c=vi;let u,l,d=!1,f=!1;if($e(e)?(u=()=>e.value,d=Le(e)):Ae(e)?(u=()=>e,o=!0):Object(r["o"])(e)?(f=!0,d=e.some(Ae),u=()=>e.map(e=>$e(e)?e.value:Ae(e)?Rn(e):Object(r["q"])(e)?dt(e,c,2):void 0)):u=Object(r["q"])(e)?t?()=>dt(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),ft(e,c,3,[h])}:r["d"],t&&o){const e=u;u=()=>Rn(e())}let h=e=>{l=g.onStop=()=>{dt(e,c,4)}};if(Oi)return h=r["d"],t?n&&ft(t,c,3,[u(),f?[]:void 0,h]):u(),r["d"];let p=f?[]:In;const v=()=>{if(g.active)if(t){const e=g.run();(o||d||(f?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),ft(t,c,3,[e,p===In?void 0:p,h]),p=e)}else g.run()};let m;v.allowRecurse=!!t,m="sync"===i?v:"post"===i?()=>eo(v,c&&c.suspense):()=>{!c||c.isMounted?Lt(v):v()};const g=new O(u,m);return t?n?v():p=g.run():"post"===i?eo(g.run.bind(g),c&&c.suspense):g.run(),()=>{g.stop(),c&&c.scope&&Object(r["M"])(c.scope.effects,g)}}function Tn(e,t,n){const o=this.proxy,i=Object(r["E"])(e)?e.includes(".")?Cn(o,e):()=>o[e]:e.bind(o,o);let s;Object(r["q"])(t)?s=t:(s=t.handler,n=t);const a=vi;gi(this);const c=kn(i,s.bind(o),n);return a?gi(a):bi(),c}function Cn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Rn(e,t){if(!Object(r["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),$e(e))Rn(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)Rn(e[n],t);else if(Object(r["C"])(e)||Object(r["u"])(e))e.forEach(e=>{Rn(e,t)});else if(Object(r["y"])(e))for(const n in e)Rn(e[n],t);return e}function xn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return or(()=>{e.isMounted=!0}),ar(()=>{e.isUnmounting=!0}),e}const An=[Function,Array],Pn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},setup(e,{slots:t}){const n=mi(),r=xn();let o;return()=>{const i=t.default&&Vn(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){let e=!1;for(const t of i)if(t.type!==So){0,s=t,e=!0;break}}const a=Me(e),{mode:c}=a;if(r.isLeaving)return Dn(s);const u=Un(s);if(!u)return Dn(s);const l=Mn(u,a,r,n);Fn(u,l);const d=n.subTree,f=d&&Un(d);let h=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===o?o=e:e!==o&&(o=e,h=!0)}if(f&&f.type!==So&&(!Fo(u,f)||h)){const e=Mn(f,a,r,n);if(Fn(f,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Dn(s);"in-out"===c&&u.type!==So&&(e.delayLeave=(e,t,n)=>{const o=Nn(r,f);o[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return s}}},Ln=Pn;function Nn(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Mn(e,t,n,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:v,onAppear:m,onAfterAppear:g,onAppearCancelled:b}=t,y=String(e.key),_=Nn(n,e),w=(e,t)=>{e&&ft(e,r,9,t)},O={mode:i,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!o)return;r=v||a}t._leaveCb&&t._leaveCb(!0);const i=_[y];i&&Fo(e,i)&&i.el._leaveCb&&i.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,i=l;if(!n.isMounted){if(!o)return;t=m||c,r=g||u,i=b||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?i:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(d,[t]);let i=!1;const s=t._leaveCb=n=>{i||(i=!0,r(),w(n?p:h,[t]),t._leaveCb=void 0,_[o]===e&&delete _[o])};_[o]=e,f?(f(t,s),f.length<=1&&s()):s()},clone(e){return Mn(e,t,n,r)}};return O}function Dn(e){if(zn(e))return e=Ko(e),e.children=null,e}function Un(e){return zn(e)?e.children?e.children[0]:void 0:e}function Fn(e,t){6&e.shapeFlag&&e.component?Fn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vn(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===Eo?(128&s.patchFlag&&o++,r=r.concat(Vn(s.children,t,a))):(t||s.type!==So)&&r.push(null!=a?Ko(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Bn(e){return Object(r["q"])(e)?{setup:e,name:e.name}:e}const $n=e=>!!e.type.__asyncLoader;function Hn(e){Object(r["q"])(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:i=200,timeout:s,suspensible:a=!0,onError:c}=e;let u,l=null,d=0;const f=()=>(d++,l=null,h()),h=()=>{let e;return l||(e=l=t().catch(e=>{if(e=e instanceof Error?e:new Error(String(e)),c)return new Promise((t,n)=>{const r=()=>t(f()),o=()=>n(e);c(e,r,o,d+1)});throw e}).then(t=>e!==l&&l?l:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),u=t,t)))};return Bn({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const e=vi;if(u)return()=>qn(u,e);const t=t=>{l=null,ht(t,e,13,!o)};if(a&&e.suspense||Oi)return h().then(t=>()=>qn(t,e)).catch(e=>(t(e),()=>o?zo(o,{error:e}):null));const r=He(!1),c=He(),d=He(!!i);return i&&setTimeout(()=>{d.value=!1},i),null!=s&&setTimeout(()=>{if(!r.value&&!c.value){const e=new Error(`Async component timed out after ${s}ms.`);t(e),c.value=e}},s),h().then(()=>{r.value=!0,e.parent&&zn(e.parent.vnode)&&Rt(e.parent.update)}).catch(e=>{t(e),c.value=e}),()=>r.value&&u?qn(u,e):c.value&&o?zo(o,{error:c.value}):n&&!d.value?zo(n):void 0}})}function qn(e,{vnode:{ref:t,props:n,children:r}}){const o=zo(e,n,r);return o.ref=t,o}const zn=e=>e.type.__isKeepAlive,Wn={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=mi(),o=n.ctx;if(!o.renderer)return t.default;const i=new Map,s=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:d,o:{createElement:f}}}=o,h=f("div");function p(e){Zn(e),d(e,n,c,!0)}function v(e){i.forEach((t,n)=>{const r=Li(t.type);!r||e&&e(r)||m(n)})}function m(e){const t=i.get(e);a&&t.type===a.type?a&&Zn(a):p(t),i.delete(e),s.delete(e)}o.activate=(e,t,n,o,i)=>{const s=e.component;l(e,t,n,0,c),u(s.vnode,e,t,n,s,c,o,e.slotScopeIds,i),eo(()=>{s.isDeactivated=!1,s.a&&Object(r["n"])(s.a);const t=e.props&&e.props.onVnodeMounted;t&&ni(t,s.parent,e)},c)},o.deactivate=e=>{const t=e.component;l(e,h,null,1,c),eo(()=>{t.da&&Object(r["n"])(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&ni(n,t.parent,e),t.isDeactivated=!0},c)},Sn(()=>[e.include,e.exclude],([e,t])=>{e&&v(t=>Kn(e,t)),t&&v(e=>!Kn(t,e))},{flush:"post",deep:!0});let g=null;const b=()=>{null!=g&&i.set(g,er(n.subTree))};return or(b),sr(b),ar(()=>{i.forEach(e=>{const{subTree:t,suspense:r}=n,o=er(t);if(e.type!==o.type)p(e);else{Zn(o);const e=o.component.da;e&&eo(e,r)}})}),()=>{if(g=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return a=null,n;if(!Uo(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let o=er(r);const c=o.type,u=Li($n(o)?o.type.__asyncResolved||{}:c),{include:l,exclude:d,max:f}=e;if(l&&(!u||!Kn(l,u))||d&&u&&Kn(d,u))return a=o,r;const h=null==o.key?c:o.key,p=i.get(h);return o.el&&(o=Ko(o),128&r.shapeFlag&&(r.ssContent=o)),g=h,p?(o.el=p.el,o.component=p.component,o.transition&&Fn(o,o.transition),o.shapeFlag|=512,s.delete(h),s.add(h)):(s.add(h),f&&s.size>parseInt(f,10)&&m(s.values().next().value)),o.shapeFlag|=256,a=o,r}}},Gn=Wn;function Kn(e,t){return Object(r["o"])(e)?e.some(e=>Kn(e,t)):Object(r["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function Jn(e,t){Yn(e,"a",t)}function Xn(e,t){Yn(e,"da",t)}function Yn(e,t,n=vi){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(tr(t,r,n),n){let e=n.parent;while(e&&e.parent)zn(e.parent.vnode)&&Qn(r,t,n,e),e=e.parent}}function Qn(e,t,n,o){const i=tr(t,e,o,!0);cr(()=>{Object(r["M"])(o[t],i)},n)}function Zn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function er(e){return 128&e.shapeFlag?e.ssContent:e}function tr(e,t,n=vi,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;T(),gi(n);const o=ft(t,n,e,r);return bi(),C(),o});return r?o.unshift(i):o.push(i),i}}const nr=e=>(t,n=vi)=>(!Oi||"sp"===e)&&tr(e,t,n),rr=nr("bm"),or=nr("m"),ir=nr("bu"),sr=nr("u"),ar=nr("bum"),cr=nr("um"),ur=nr("sp"),lr=nr("rtg"),dr=nr("rtc");function fr(e,t=vi){tr("ec",e,t)}let hr=!0;function pr(e){const t=br(e),n=e.proxy,o=e.ctx;hr=!1,t.beforeCreate&&mr(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:c,provide:u,inject:l,created:d,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:m,deactivated:g,beforeDestroy:b,beforeUnmount:y,destroyed:_,unmounted:w,render:O,renderTracked:j,renderTriggered:E,errorCaptured:I,serverPrefetch:S,expose:k,inheritAttrs:T,components:C,directives:R,filters:x}=t,A=null;if(l&&vr(l,o,A,e.appContext.config.unwrapInjectedRef),a)for(const L in a){const e=a[L];Object(r["q"])(e)&&(o[L]=e.bind(n))}if(i){0;const t=i.call(n,n);0,Object(r["w"])(t)&&(e.data=ke(t))}if(hr=!0,s)for(const L in s){const e=s[L],t=Object(r["q"])(e)?e.bind(n,n):Object(r["q"])(e.get)?e.get.bind(n,n):r["d"];0;const i=!Object(r["q"])(e)&&Object(r["q"])(e.set)?e.set.bind(n):r["d"],a=Di({get:t,set:i});Object.defineProperty(o,L,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)gr(c[r],o,n,r);if(u){const e=Object(r["q"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{_n(t,e[t])})}function P(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&mr(d,e,"c"),P(rr,f),P(or,h),P(ir,p),P(sr,v),P(Jn,m),P(Xn,g),P(fr,I),P(dr,j),P(lr,E),P(ar,y),P(cr,w),P(ur,S),Object(r["o"])(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=T&&(e.inheritAttrs=T),C&&(e.components=C),R&&(e.directives=R)}function vr(e,t,n=r["d"],o=!1){Object(r["o"])(e)&&(e=jr(e));for(const i in e){const n=e[i];let s;s=Object(r["w"])(n)?"default"in n?wn(n.from||i,n.default,!0):wn(n.from||i):wn(n),$e(s)&&o?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function mr(e,t,n){ft(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function gr(e,t,n,o){const i=o.includes(".")?Cn(n,o):()=>n[o];if(Object(r["E"])(e)){const n=t[e];Object(r["q"])(n)&&Sn(i,n)}else if(Object(r["q"])(e))Sn(i,e.bind(n));else if(Object(r["w"])(e))if(Object(r["o"])(e))e.forEach(e=>gr(e,t,n,o));else{const o=Object(r["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["q"])(o)&&Sn(i,o,e)}else 0}function br(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let c;return a?c=a:o.length||n||r?(c={},o.length&&o.forEach(e=>yr(c,e,s,!0)),yr(c,t,s)):c=t,i.set(t,c),c}function yr(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&yr(e,i,n,!0),o&&o.forEach(t=>yr(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=_r[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const _r={data:wr,props:Ir,emits:Ir,methods:Ir,computed:Ir,beforeCreate:Er,created:Er,beforeMount:Er,mounted:Er,beforeUpdate:Er,updated:Er,beforeDestroy:Er,beforeUnmount:Er,destroyed:Er,unmounted:Er,activated:Er,deactivated:Er,errorCaptured:Er,serverPrefetch:Er,components:Ir,directives:Ir,watch:Sr,provide:wr,inject:Or};function wr(e,t){return t?e?function(){return Object(r["h"])(Object(r["q"])(e)?e.call(this,this):e,Object(r["q"])(t)?t.call(this,this):t)}:t:e}function Or(e,t){return Ir(jr(e),jr(t))}function jr(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Er(e,t){return e?[...new Set([].concat(e,t))]:t}function Ir(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Sr(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Er(e[r],t[r]);return n}function kr(e,t,n,o=!1){const i={},s={};Object(r["g"])(s,Bo,1),e.propsDefaults=Object.create(null),Cr(e,t,i,s);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=o?i:Te(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Tr(e,t,n,o){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,c=Me(i),[u]=e.propsOptions;let l=!1;if(!(o||a>0)||16&a){let o;Cr(e,t,i,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(o=Object(r["l"])(s))!==s&&Object(r["k"])(t,o))||(u?!n||void 0===n[s]&&void 0===n[o]||(i[s]=Rr(u,c,s,void 0,e,!0)):delete i[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let a=n[o];if(Wt(e.emitsOptions,a))continue;const d=t[a];if(u)if(Object(r["k"])(s,a))d!==s[a]&&(s[a]=d,l=!0);else{const t=Object(r["e"])(a);i[t]=Rr(u,c,t,d,e,!1)}else d!==s[a]&&(s[a]=d,l=!0)}}l&&A(e,"set","$attrs")}function Cr(e,t,n,o){const[i,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["A"])(u))continue;const l=t[u];let d;i&&Object(r["k"])(i,d=Object(r["e"])(u))?s&&s.includes(d)?(a||(a={}))[d]=l:n[d]=l:Wt(e.emitsOptions,u)||u in o&&l===o[u]||(o[u]=l,c=!0)}if(s){const t=Me(n),o=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=Rr(i,t,c,o[c],e,!Object(r["k"])(o,c))}}return c}function Rr(e,t,n,o,i,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===o){const e=a.default;if(a.type!==Function&&Object(r["q"])(e)){const{propsDefaults:r}=i;n in r?o=r[n]:(gi(i),o=r[n]=e.call(null,t),bi())}else o=e}a[0]&&(s&&!e?o=!1:!a[1]||""!==o&&o!==Object(r["l"])(n)||(o=!0))}return o}function xr(e,t,n=!1){const o=t.propsCache,i=o.get(e);if(i)return i;const s=e.props,a={},c=[];let u=!1;if(!Object(r["q"])(e)){const o=e=>{u=!0;const[n,o]=xr(e,t,!0);Object(r["h"])(a,n),o&&c.push(...o)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!s&&!u)return o.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let d=0;d<s.length;d++){0;const e=Object(r["e"])(s[d]);Ar(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(Ar(t)){const n=s[e],o=a[t]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(o){const e=Nr(Boolean,o.type),n=Nr(String,o.type);o[0]=e>-1,o[1]=n<0||e<n,(e>-1||Object(r["k"])(o,"default"))&&c.push(t)}}}}const l=[a,c];return o.set(e,l),l}function Ar(e){return"$"!==e[0]}function Pr(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Lr(e,t){return Pr(e)===Pr(t)}function Nr(e,t){return Object(r["o"])(t)?t.findIndex(t=>Lr(t,e)):Object(r["q"])(t)&&Lr(t,e)?0:-1}const Mr=e=>"_"===e[0]||"$stable"===e,Dr=e=>Object(r["o"])(e)?e.map(Qo):[Qo(e)],Ur=(e,t,n)=>{const r=Zt((...e)=>Dr(t(...e)),n);return r._c=!1,r},Fr=(e,t,n)=>{const o=e._ctx;for(const i in e){if(Mr(i))continue;const n=e[i];if(Object(r["q"])(n))t[i]=Ur(i,n,o);else if(null!=n){0;const e=Dr(n);t[i]=()=>e}}},Vr=(e,t)=>{const n=Dr(t);e.slots.default=()=>n},Br=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Me(t),Object(r["g"])(t,"_",n)):Fr(t,e.slots={})}else e.slots={},t&&Vr(e,t);Object(r["g"])(e.slots,Bo,1)},$r=(e,t,n)=>{const{vnode:o,slots:i}=e;let s=!0,a=r["b"];if(32&o.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(i,t),n||1!==e||delete i._):(s=!t.$stable,Fr(t,i)),a=t}else t&&(Vr(e,t),a={default:1});if(s)for(const r in i)Mr(r)||r in a||delete i[r]};function Hr(e,t){const n=Gt;if(null===n)return e;const o=xi(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&Rn(n),i.push({dir:e,instance:o,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function qr(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let c=a.dir[r];c&&(T(),ft(c,n,8,[e.el,a,e,t]),C())}}function zr(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wr=0;function Gr(e,t){return function(n,o=null){Object(r["q"])(n)||(n=Object.assign({},n)),null==o||Object(r["w"])(o)||(o=null);const i=zr(),s=new Set;let a=!1;const c=i.app={_uid:Wr++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:es,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["q"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["q"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(r,s,u){if(!a){const l=zo(n,o);return l.appContext=i,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,xi(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}function Kr(e,t,n,o,i=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>Kr(e,t&&(Object(r["o"])(t)?t[s]:t),n,o,i));if($n(o)&&!i)return;const s=4&o.shapeFlag?xi(o.component)||o.component.proxy:o.el,a=i?null:s,{i:c,r:u}=e;const l=t&&t.r,d=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["E"])(l)?(d[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):$e(l)&&(l.value=null)),Object(r["q"])(u))dt(u,c,12,[a,d]);else{const t=Object(r["E"])(u),o=$e(u);if(t||o){const o=()=>{if(e.f){const n=t?d[u]:u.value;i?Object(r["o"])(n)&&Object(r["M"])(n,s):Object(r["o"])(n)?n.includes(s)||n.push(s):t?(d[u]=[s],Object(r["k"])(f,u)&&(f[u]=d[u])):(u.value=[s],e.k&&(d[e.k]=u.value))}else t?(d[u]=a,Object(r["k"])(f,u)&&(f[u]=a)):$e(u)&&(u.value=a,e.k&&(d[e.k]=a))};a?(o.id=-1,eo(o,n)):o()}else 0}}let Jr=!1;const Xr=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,Yr=e=>8===e.nodeType;function Qr(e){const{mt:t,p:n,o:{patchProp:o,nextSibling:i,parentNode:s,remove:a,insert:c,createComment:u}}=e,l=(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),void Dt();Jr=!1,d(t.firstChild,e,null,null,null),Dt(),Jr&&console.error("Hydration completed but contains mismatches.")},d=(n,r,o,a,c,u=!1)=>{const l=Yr(n)&&"["===n.data,g=()=>v(n,r,o,a,c,l),{type:b,ref:y,shapeFlag:_}=r,w=n.nodeType;r.el=n;let O=null;switch(b){case Io:3!==w?O=g():(n.data!==r.children&&(Jr=!0,n.data=r.children),O=i(n));break;case So:O=8!==w||l?g():i(n);break;case ko:if(1===w){O=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=O.outerHTML),t===r.staticCount-1&&(r.anchor=O),O=i(O);return O}O=g();break;case Eo:O=l?p(n,r,o,a,c,u):g();break;default:if(1&_)O=1!==w||r.type.toLowerCase()!==n.tagName.toLowerCase()?g():f(n,r,o,a,c,u);else if(6&_){r.slotScopeIds=c;const e=s(n);if(t(r,e,null,o,a,Xr(e),u),O=l?m(n):i(n),$n(r)){let t;l?(t=zo(Eo),t.anchor=O?O.previousSibling:e.lastChild):t=3===n.nodeType?Jo(""):zo("div"),t.el=n,r.component.subTree=t}}else 64&_?O=8!==w?g():r.type.hydrate(n,r,o,a,c,u,e,h):128&_&&(O=r.type.hydrate(n,r,o,a,Xr(s(n)),c,u,e,d))}return null!=y&&Kr(y,null,a,r),O},f=(e,t,n,i,s,c)=>{c=c||!!t.dynamicChildren;const{type:u,props:l,patchFlag:d,shapeFlag:f,dirs:p}=t,v="input"===u&&p||"option"===u;if(v||-1!==d){if(p&&qr(t,null,n,"created"),l)if(v||!c||48&d)for(const t in l)(v&&t.endsWith("value")||Object(r["x"])(t)&&!Object(r["A"])(t))&&o(e,t,null,l[t],!1,void 0,n);else l.onClick&&o(e,"onClick",null,l.onClick,!1,void 0,n);let u;if((u=l&&l.onVnodeBeforeMount)&&ni(u,n,t),p&&qr(t,null,n,"beforeMount"),((u=l&&l.onVnodeMounted)||p)&&bn(()=>{u&&ni(u,n,t),p&&qr(t,null,n,"mounted")},i),16&f&&(!l||!l.innerHTML&&!l.textContent)){let r=h(e.firstChild,t,e,n,i,s,c);while(r){Jr=!0;const e=r;r=r.nextSibling,a(e)}}else 8&f&&e.textContent!==t.children&&(Jr=!0,e.textContent=t.children)}return e.nextSibling},h=(e,t,r,o,i,s,a)=>{a=a||!!t.dynamicChildren;const c=t.children,u=c.length;for(let l=0;l<u;l++){const t=a?c[l]:c[l]=Qo(c[l]);if(e)e=d(e,t,o,i,s,a);else{if(t.type===Io&&!t.children)continue;Jr=!0,n(null,t,r,null,o,i,Xr(r),s)}}return e},p=(e,t,n,r,o,a)=>{const{slotScopeIds:l}=t;l&&(o=o?o.concat(l):l);const d=s(e),f=h(i(e),t,d,n,r,o,a);return f&&Yr(f)&&"]"===f.data?i(t.anchor=f):(Jr=!0,c(t.anchor=u("]"),d,f),f)},v=(e,t,r,o,c,u)=>{if(Jr=!0,t.el=null,u){const t=m(e);while(1){const n=i(e);if(!n||n===t)break;a(n)}}const l=i(e),d=s(e);return a(e),n(null,t,d,l,r,o,Xr(d),c),l},m=e=>{let t=0;while(e)if(e=i(e),e&&Yr(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return i(e);t--}return e};return[l,d]}function Zr(){}const eo=bn;function to(e){return ro(e)}function no(e){return ro(e,Qr)}function ro(e,t){Zr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:o,remove:i,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:d,parentNode:f,nextSibling:h,setScopeId:p=r["d"],cloneNode:v,insertStaticContent:m}=e,g=(e,t,n,r=null,o=null,i=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Fo(e,t)&&(r=K(e),H(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:d}=t;switch(u){case Io:b(e,t,n,r);break;case So:y(e,t,n,r);break;case ko:null==e&&_(t,n,r,s);break;case Eo:P(e,t,n,r,o,i,s,a,c);break;default:1&d?E(e,t,n,r,o,i,s,a,c):6&d?L(e,t,n,r,o,i,s,a,c):(64&d||128&d)&&u.process(e,t,n,r,o,i,s,a,c,X)}null!=l&&o&&Kr(l,e&&e.ref,i,t||e,!t)},b=(e,t,n,r)=>{if(null==e)o(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},y=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},w=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=h(e),o(e,n,r),e=i;o(t,n,r)},j=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=h(e),i(e),e=n;i(t)},E=(e,t,n,r,o,i,s,a,c)=>{s=s||"svg"===t.type,null==e?I(t,n,r,o,i,s,a,c):R(e,t,o,i,s,a,c)},I=(e,t,n,i,c,u,l,f)=>{let h,p;const{type:m,props:g,shapeFlag:b,transition:y,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==v&&-1===_)h=e.el=v(e.el);else{if(h=e.el=a(e.type,u,g&&g.is,g),8&b?d(h,e.children):16&b&&k(e.children,h,null,i,c,u&&"foreignObject"!==m,l,f),w&&qr(e,null,i,"created"),g){for(const t in g)"value"===t||Object(r["A"])(t)||s(h,t,null,g[t],u,e.children,i,c,G);"value"in g&&s(h,"value",null,g.value),(p=g.onVnodeBeforeMount)&&ni(p,i,e)}S(h,e,e.scopeId,l,i)}w&&qr(e,null,i,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;O&&y.beforeEnter(h),o(h,t,n),((p=g&&g.onVnodeMounted)||O||w)&&eo(()=>{p&&ni(p,i,e),O&&y.enter(h),w&&qr(e,null,i,"mounted")},c)},S=(e,t,n,r,o)=>{if(n&&p(e,n),r)for(let i=0;i<r.length;i++)p(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;S(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},k=(e,t,n,r,o,i,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Zo(e[u]):Qo(e[u]);g(null,c,t,n,r,o,i,s,a)}},R=(e,t,n,o,i,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:f,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||r["b"],v=t.props||r["b"];let m;n&&oo(n,!1),(m=v.onVnodeBeforeUpdate)&&ni(m,n,t,e),h&&qr(t,e,n,"beforeUpdate"),n&&oo(n,!0);const g=i&&"foreignObject"!==t.type;if(f?x(e.dynamicChildren,f,u,n,o,g,a):c||F(e,t,u,null,n,o,g,a,!1),l>0){if(16&l)A(u,t,p,v,n,o,i);else if(2&l&&p.class!==v.class&&s(u,"class",null,v.class,i),4&l&&s(u,"style",p.style,v.style,i),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=v[a];l===c&&"value"!==a||s(u,a,c,l,i,e.children,n,o,G)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=f||A(u,t,p,v,n,o,i);((m=v.onVnodeUpdated)||h)&&eo(()=>{m&&ni(m,n,t,e),h&&qr(t,e,n,"updated")},o)},x=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Eo||!Fo(c,u)||70&c.shapeFlag)?f(c.el):n;g(c,u,l,null,r,o,i,s,!0)}},A=(e,t,n,o,i,a,c)=>{if(n!==o){for(const u in o){if(Object(r["A"])(u))continue;const l=o[u],d=n[u];l!==d&&"value"!==u&&s(e,u,d,l,c,t.children,i,a,G)}if(n!==r["b"])for(const u in n)Object(r["A"])(u)||u in o||s(e,u,n[u],null,c,t.children,i,a,G);"value"in o&&s(e,"value",n.value,o.value)}},P=(e,t,n,r,i,s,a,u,l)=>{const d=t.el=e?e.el:c(""),f=t.anchor=e?e.anchor:c("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:v}=t;v&&(u=u?u.concat(v):v),null==e?(o(d,n,r),o(f,n,r),k(t.children,n,f,i,s,a,u,l)):h>0&&64&h&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,i,s,a,u),(null!=t.key||i&&t===i.subTree)&&io(e,t,!0)):F(e,t,n,f,i,s,a,u,l)},L=(e,t,n,r,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,c):N(t,n,r,o,i,s,c):M(e,t,c)},N=(e,t,n,r,o,i,s)=>{const a=e.component=pi(e,r,o);if(zn(e)&&(a.ctx.renderer=X),ji(a),a.asyncDep){if(o&&o.registerDep(a,D),!e.el){const e=a.subTree=zo(So);y(null,e,t,n)}}else D(a,e,t,n,o,i,s)},M=(e,t,n)=>{const r=t.component=e.component;if(on(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,At(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},D=(e,t,n,o,i,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:o,u:c,parent:u,vnode:l}=e,d=n;0,oo(e,!1),n?(n.el=l.el,U(e,n,a)):n=l,o&&Object(r["n"])(o),(t=n.props&&n.props.onVnodeBeforeUpdate)&&ni(t,u,n,l),oo(e,!0);const h=en(e);0;const p=e.subTree;e.subTree=h,g(p,h,f(p.el),K(p),e,i,s),n.el=h.el,null===d&&an(e,h.el),c&&eo(c,i),(t=n.props&&n.props.onVnodeUpdated)&&eo(()=>ni(t,u,n,l),i)}else{let a;const{el:c,props:u}=t,{bm:l,m:d,parent:f}=e,h=$n(t);if(oo(e,!1),l&&Object(r["n"])(l),!h&&(a=u&&u.onVnodeBeforeMount)&&ni(a,f,t),oo(e,!0),c&&Q){const n=()=>{e.subTree=en(e),Q(c,e.subTree,e,i,null)};h?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=en(e);0,g(null,r,n,o,e,i,s),t.el=r.el}if(d&&eo(d,i),!h&&(a=u&&u.onVnodeMounted)){const e=t;eo(()=>ni(a,f,e),i)}256&t.shapeFlag&&e.a&&eo(e.a,i),e.isMounted=!0,t=n=o=null}},u=e.effect=new O(c,()=>Rt(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,oo(e,!0),l()},U=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Tr(e,t.props,r,n),$r(e,t.children,n),T(),Mt(void 0,e.update),C()},F=(e,t,n,r,o,i,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void B(u,f,n,r,o,i,s,a,c);if(256&h)return void V(u,f,n,r,o,i,s,a,c)}8&p?(16&l&&G(u,o,i),f!==u&&d(n,f)):16&l?16&p?B(u,f,n,r,o,i,s,a,c):G(u,o,i,!0):(8&l&&d(n,""),16&p&&k(f,n,r,o,i,s,a,c))},V=(e,t,n,o,i,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,d=t.length,f=Math.min(l,d);let h;for(h=0;h<f;h++){const r=t[h]=u?Zo(t[h]):Qo(t[h]);g(e[h],r,n,null,i,s,a,c,u)}l>d?G(e,i,s,!0,!1,f):k(t,n,o,i,s,a,c,u,f)},B=(e,t,n,o,i,s,a,c,u)=>{let l=0;const d=t.length;let f=e.length-1,h=d-1;while(l<=f&&l<=h){const r=e[l],o=t[l]=u?Zo(t[l]):Qo(t[l]);if(!Fo(r,o))break;g(r,o,n,null,i,s,a,c,u),l++}while(l<=f&&l<=h){const r=e[f],o=t[h]=u?Zo(t[h]):Qo(t[h]);if(!Fo(r,o))break;g(r,o,n,null,i,s,a,c,u),f--,h--}if(l>f){if(l<=h){const e=h+1,r=e<d?t[e].el:o;while(l<=h)g(null,t[l]=u?Zo(t[l]):Qo(t[l]),n,r,i,s,a,c,u),l++}}else if(l>h)while(l<=f)H(e[l],i,s,!0),l++;else{const p=l,v=l,m=new Map;for(l=v;l<=h;l++){const e=t[l]=u?Zo(t[l]):Qo(t[l]);null!=e.key&&m.set(e.key,l)}let b,y=0;const _=h-v+1;let w=!1,O=0;const j=new Array(_);for(l=0;l<_;l++)j[l]=0;for(l=p;l<=f;l++){const r=e[l];if(y>=_){H(r,i,s,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(b=v;b<=h;b++)if(0===j[b-v]&&Fo(r,t[b])){o=b;break}void 0===o?H(r,i,s,!0):(j[o-v]=l+1,o>=O?O=o:w=!0,g(r,t[o],n,null,i,s,a,c,u),y++)}const E=w?so(j):r["a"];for(b=E.length-1,l=_-1;l>=0;l--){const e=v+l,r=t[e],f=e+1<d?t[e+1].el:o;0===j[l]?g(null,r,n,f,i,s,a,c,u):w&&(b<0||l!==E[b]?$(r,n,f,2):b--)}}},$=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void $(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,X);if(a===Eo){o(s,t,n);for(let e=0;e<u.length;e++)$(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===ko)return void w(e,t,n);const d=2!==r&&1&l&&c;if(d)if(0===r)c.beforeEnter(s),o(s,t,n),eo(()=>c.enter(s),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,()=>{a(),i&&i()})};r?r(s,a,u):u()}else o(s,t,n)},H=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:d,dirs:f}=e;if(null!=a&&Kr(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const h=1&l&&f,p=!$n(e);let v;if(p&&(v=s&&s.onVnodeBeforeUnmount)&&ni(v,t,e),6&l)W(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&qr(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,o,X,r):u&&(i!==Eo||d>0&&64&d)?G(u,t,n,!1,!0):(i===Eo&&384&d||!o&&16&l)&&G(c,t,n),r&&q(e)}(p&&(v=s&&s.onVnodeUnmounted)||h)&&eo(()=>{v&&ni(v,t,e),h&&qr(e,null,t,"unmounted")},n)},q=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===Eo)return void z(n,r);if(t===ko)return void j(e);const s=()=>{i(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,i=()=>t(n,s);r?r(e.el,s,i):i()}else s()},z=(e,t)=>{let n;while(e!==t)n=h(e),i(e),e=n;i(t)},W=(e,t,n)=>{const{bum:o,scope:i,update:s,subTree:a,um:c}=e;o&&Object(r["n"])(o),i.stop(),s&&(s.active=!1,H(a,e,t,n)),c&&eo(c,t),eo(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)H(e[s],t,n,r,o)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():h(e.anchor||e.el),J=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),Dt(),t._vnode=e},X={p:g,um:H,m:$,r:q,mt:N,mc:k,pc:F,pbc:x,n:K,o:e};let Y,Q;return t&&([Y,Q]=t(X)),{render:J,hydrate:Y,createApp:Gr(J,Y)}}function oo({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function io(e,t,n=!1){const o=e.children,i=t.children;if(Object(r["o"])(o)&&Object(r["o"])(i))for(let r=0;r<o.length;r++){const e=o[r];let t=i[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[r]=Zo(i[r]),t.el=e.el),n||io(e,t))}}function so(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}const ao=e=>e.__isTeleport,co=e=>e&&(e.disabled||""===e.disabled),uo=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,lo=(e,t)=>{const n=e&&e.to;if(Object(r["E"])(n)){if(t){const e=t(n);return e}return null}return n},fo={__isTeleport:!0,process(e,t,n,r,o,i,s,a,c,u){const{mc:l,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:v,createComment:m}}=u,g=co(t.props);let{shapeFlag:b,children:y,dynamicChildren:_}=t;if(null==e){const e=t.el=v(""),u=t.anchor=v("");h(e,n,r),h(u,n,r);const d=t.target=lo(t.props,p),f=t.targetAnchor=v("");d&&(h(f,d),s=s||uo(d));const m=(e,t)=>{16&b&&l(y,e,t,o,i,s,a,c)};g?m(n,u):d&&m(d,f)}else{t.el=e.el;const r=t.anchor=e.anchor,l=t.target=e.target,h=t.targetAnchor=e.targetAnchor,v=co(e.props),m=v?n:l,b=v?r:h;if(s=s||uo(l),_?(f(e.dynamicChildren,_,m,o,i,s,a),io(e,t,!0)):c||d(e,t,m,b,o,i,s,a,!1),g)v||ho(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=lo(t.props,p);e&&ho(t,e,null,u,0)}else v&&ho(t,l,h,u,1)}},remove(e,t,n,r,{um:o,o:{remove:i}},s){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:d,props:f}=e;if(d&&i(l),(s||!co(f))&&(i(u),16&a))for(let h=0;h<c.length;h++){const e=c[h];o(e,t,n,!0,!!e.dynamicChildren)}},move:ho,hydrate:po};function ho(e,t,n,{o:{insert:r},m:o},i=2){0===i&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:c,children:u,props:l}=e,d=2===i;if(d&&r(s,t,n),(!d||co(l))&&16&c)for(let f=0;f<u.length;f++)o(u[f],t,n,2);d&&r(a,t,n)}function po(e,t,n,r,o,i,{o:{nextSibling:s,parentNode:a,querySelector:c}},u){const l=t.target=lo(t.props,c);if(l){const c=l._lpa||l.firstChild;16&t.shapeFlag&&(co(t.props)?(t.anchor=u(s(e),t,a(e),n,r,o,i),t.targetAnchor=c):(t.anchor=s(e),t.targetAnchor=u(c,t,l,n,r,o,i)),l._lpa=t.targetAnchor&&s(t.targetAnchor))}return t.anchor&&s(t.anchor)}const vo=fo,mo="components",go="directives";function bo(e,t){return Oo(mo,e,!0,t)||e}const yo=Symbol();function _o(e){return Object(r["E"])(e)?Oo(mo,e,!1)||e:e||yo}function wo(e){return Oo(go,e)}function Oo(e,t,n=!0,o=!1){const i=Gt||vi;if(i){const n=i.type;if(e===mo){const e=Li(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=jo(i[e]||n[e],t)||jo(i.appContext[e],t);return!s&&o?n:s}}function jo(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Eo=Symbol(void 0),Io=Symbol(void 0),So=Symbol(void 0),ko=Symbol(void 0),To=[];let Co=null;function Ro(e=!1){To.push(Co=e?null:[])}function xo(){To.pop(),Co=To[To.length-1]||null}let Ao,Po=1;function Lo(e){Po+=e}function No(e){return e.dynamicChildren=Po>0?Co||r["a"]:null,xo(),Po>0&&Co&&Co.push(e),e}function Mo(e,t,n,r,o,i){return No(qo(e,t,n,r,o,i,!0))}function Do(e,t,n,r,o){return No(zo(e,t,n,r,o,!0))}function Uo(e){return!!e&&!0===e.__v_isVNode}function Fo(e,t){return e.type===t.type&&e.key===t.key}function Vo(e){Ao=e}const Bo="__vInternal",$o=({key:e})=>null!=e?e:null,Ho=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["E"])(e)||$e(e)||Object(r["q"])(e)?{i:Gt,r:e,k:t,f:!!n}:e:null;function qo(e,t=null,n=null,o=0,i=null,s=(e===Eo?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$o(t),ref:t&&Ho(t),scopeId:Kt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(ei(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["E"])(n)?8:16),Po>0&&!a&&Co&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Co.push(u),u}const zo=Wo;function Wo(e,t=null,n=null,o=0,i=null,s=!1){if(e&&e!==yo||(e=So),Uo(e)){const r=Ko(e,t,!0);return n&&ei(r,n),r}if(Mi(e)&&(e=e.__vccOpts),t){t=Go(t);let{class:e,style:n}=t;e&&!Object(r["E"])(e)&&(t.class=Object(r["J"])(e)),Object(r["w"])(n)&&(Ne(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["L"])(n))}const a=Object(r["E"])(e)?1:cn(e)?128:ao(e)?64:Object(r["w"])(e)?4:Object(r["q"])(e)?2:0;return qo(e,t,n,o,i,a,s,!0)}function Go(e){return e?Ne(e)||Bo in e?Object(r["h"])({},e):e:null}function Ko(e,t,n=!1){const{props:o,ref:i,patchFlag:s,children:a}=e,c=t?ti(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&$o(c),ref:t&&t.ref?n&&i?Object(r["o"])(i)?i.concat(Ho(t)):[i,Ho(t)]:Ho(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Eo?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ko(e.ssContent),ssFallback:e.ssFallback&&Ko(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Jo(e=" ",t=0){return zo(Io,null,e,t)}function Xo(e,t){const n=zo(ko,null,e);return n.staticCount=t,n}function Yo(e="",t=!1){return t?(Ro(),Do(So,null,e)):zo(So,null,e)}function Qo(e){return null==e||"boolean"===typeof e?zo(So):Object(r["o"])(e)?zo(Eo,null,e.slice()):"object"===typeof e?Zo(e):zo(Io,null,String(e))}function Zo(e){return null===e.el||e.memo?e:Ko(e)}function ei(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),ei(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Bo in t?3===r&&Gt&&(1===Gt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Gt}}else Object(r["q"])(t)?(t={default:t,_ctx:Gt},n=32):(t=String(t),64&o?(n=16,t=[Jo(t)]):n=8);e.children=t,e.shapeFlag|=n}function ti(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=Object(r["J"])([t.class,o.class]));else if("style"===e)t.style=Object(r["L"])([t.style,o.style]);else if(Object(r["x"])(e)){const n=t[e],i=o[e];!i||n===i||Object(r["o"])(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=o[e])}return t}function ni(e,t,n,r=null){ft(e,t,7,[n,r])}function ri(e,t,n,o){let i;const s=n&&n[o];if(Object(r["o"])(e)||Object(r["E"])(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["w"])(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[o]=i),i}function oi(e,t){for(let n=0;n<t.length;n++){const o=t[n];if(Object(r["o"])(o))for(let t=0;t<o.length;t++)e[o[t].name]=o[t].fn;else o&&(e[o.name]=o.fn)}return e}function ii(e,t,n={},r,o){if(Gt.isCE||Gt.parent&&$n(Gt.parent)&&Gt.parent.isCE)return zo("slot","default"===t?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),Ro();const s=i&&si(i(n)),a=Do(Eo,{key:n.key||"_"+t},s||(r?r():[]),s&&1===e._?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function si(e){return e.some(e=>!Uo(e)||e.type!==So&&!(e.type===Eo&&!si(e.children)))?e:null}function ai(e){const t={};for(const n in e)t[Object(r["O"])(n)]=e[n];return t}const ci=e=>e?yi(e)?xi(e)||e.proxy:ci(e.parent):null,ui=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ci(e.parent),$root:e=>ci(e.root),$emit:e=>e.emit,$options:e=>br(e),$forceUpdate:e=>()=>Rt(e.update),$nextTick:e=>Tt.bind(e.proxy),$watch:e=>Tn.bind(e)}),li={get({_:e},t){const{ctx:n,setupState:o,data:i,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return o[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=1,o[t];if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];hr&&(a[t]=0)}}const d=ui[t];let f,h;return d?("$attrs"===t&&R(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(h=u.config.globalProperties,Object(r["k"])(h,t)?h[t]:void 0)},set({_:e},t,n){const{data:o,setupState:i,ctx:s}=e;return i!==r["b"]&&Object(r["k"])(i,t)?(i[t]=n,!0):o!==r["b"]&&Object(r["k"])(o,t)?(o[t]=n,!0):!Object(r["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(o,a)||Object(r["k"])(ui,a)||Object(r["k"])(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:Object(r["k"])(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const di=Object(r["h"])({},li,{get(e,t){if(t!==Symbol.unscopables)return li.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!Object(r["r"])(t);return n}});const fi=zr();let hi=0;function pi(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||fi,a={uid:hi++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new i(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xr(o,s),emitsOptions:zt(o,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:o.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=qt.bind(null,a),e.ce&&e.ce(a),a}let vi=null;const mi=()=>vi||Gt,gi=e=>{vi=e,e.scope.on()},bi=()=>{vi&&vi.scope.off(),vi=null};function yi(e){return 4&e.vnode.shapeFlag}let _i,wi,Oi=!1;function ji(e,t=!1){Oi=t;const{props:n,children:r}=e.vnode,o=yi(e);kr(e,n,o,t),Br(e,r);const i=o?Ei(e,t):void 0;return Oi=!1,i}function Ei(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=De(new Proxy(e.ctx,li));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Ri(e):null;gi(e),T();const i=dt(o,e,0,[e.props,n]);if(C(),bi(),Object(r["z"])(i)){if(i.then(bi,bi),t)return i.then(n=>{Ii(e,n,t)}).catch(t=>{ht(t,e,0)});e.asyncDep=i}else Ii(e,i,t)}else Ti(e,t)}function Ii(e,t,n){Object(r["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["w"])(t)&&(e.setupState=Xe(t)),Ti(e,n)}function Si(e){_i=e,wi=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,di))}}const ki=()=>!_i;function Ti(e,t,n){const o=e.type;if(!e.render){if(!t&&_i&&!o.render){const t=o.template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},i),a);o.render=_i(t,c)}}e.render=o.render||r["d"],wi&&wi(e)}gi(e),T(),pr(e),C(),bi()}function Ci(e){return new Proxy(e.attrs,{get(t,n){return R(e,"get","$attrs"),t[n]}})}function Ri(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Ci(e))},slots:e.slots,emit:e.emit,expose:t}}function xi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xe(De(e.exposed)),{get(t,n){return n in t?t[n]:n in ui?ui[n](e):void 0}}))}const Ai=/(?:^|[-_])(\w)/g,Pi=e=>e.replace(Ai,e=>e.toUpperCase()).replace(/[-_]/g,"");function Li(e){return Object(r["q"])(e)&&e.displayName||e.name}function Ni(e,t,n=!1){let r=Li(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?Pi(r):n?"App":"Anonymous"}function Mi(e){return Object(r["q"])(e)&&"__vccOpts"in e}const Di=(e,t)=>rt(e,t,Oi);function Ui(){return null}function Fi(){return null}function Vi(e){0}function Bi(e,t){return null}function $i(){return qi().slots}function Hi(){return qi().attrs}function qi(){const e=mi();return e.setupContext||(e.setupContext=Ri(e))}function zi(e,t){const n=Object(r["o"])(e)?e.reduce((e,t)=>(e[t]={},e),{}):e;for(const o in t){const e=n[o];e?Object(r["o"])(e)||Object(r["q"])(e)?n[o]={type:e,default:t[o]}:e.default=t[o]:null===e&&(n[o]={default:t[o]})}return n}function Wi(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Gi(e){const t=mi();let n=e();return bi(),Object(r["z"])(n)&&(n=n.catch(e=>{throw gi(t),e})),[n,()=>gi(t)]}function Ki(e,t,n){const o=arguments.length;return 2===o?Object(r["w"])(t)&&!Object(r["o"])(t)?Uo(t)?zo(e,null,[t]):zo(e,t):zo(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&Uo(n)&&(n=[n]),zo(e,t,n))}const Ji=Symbol(""),Xi=()=>{{const e=wn(Ji);return e||it("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Yi(){return void 0}function Qi(e,t,n,r){const o=n[r];if(o&&Zi(o,e))return o;const i=t();return i.memo=e.slice(),n[r]=i}function Zi(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if(n[r]!==t[r])return!1;return Po>0&&Co&&Co.push(e),!0}const es="3.2.33",ts={createComponentInstance:pi,setupComponent:ji,renderComponentRoot:en,setCurrentRenderingInstance:Jt,isVNode:Uo,normalizeVNode:Qo},ns=ts,rs=null,os=null,is="http://www.w3.org/2000/svg",ss="undefined"!==typeof document?document:null,as=ss&&ss.createElement("template"),cs={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?ss.createElementNS(is,e):ss.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>ss.createTextNode(e),createComment:e=>ss.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ss.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{as.innerHTML=r?`<svg>${e}</svg>`:e;const o=as.content;if(r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function us(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ls(e,t,n){const o=e.style,i=Object(r["E"])(n);if(n&&!i){for(const e in n)fs(o,e,n[e]);if(t&&!Object(r["E"])(t))for(const e in t)null==n[e]&&fs(o,e,"")}else{const r=o.display;i?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const ds=/\s*!important$/;function fs(e,t,n){if(Object(r["o"])(n))n.forEach(n=>fs(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=vs(e,t);ds.test(n)?e.setProperty(Object(r["l"])(o),n.replace(ds,""),"important"):e[o]=n}}const hs=["Webkit","Moz","ms"],ps={};function vs(e,t){const n=ps[t];if(n)return n;let o=Object(r["e"])(t);if("filter"!==o&&o in e)return ps[t]=o;o=Object(r["f"])(o);for(let r=0;r<hs.length;r++){const n=hs[r]+o;if(n in e)return ps[t]=n}return t}const ms="http://www.w3.org/1999/xlink";function gs(e,t,n,o,i){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(ms,t.slice(6,t.length)):e.setAttributeNS(ms,t,n);else{const o=Object(r["D"])(t);null==n||o&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function bs(e,t,n,o,i,s,a){if("innerHTML"===t||"textContent"===t)return o&&a(o,i,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const o=typeof e[t];"boolean"===o?n=Object(r["m"])(n):null==n&&"string"===o?(n="",c=!0):"number"===o&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}const[ys,_s]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ws=0;const Os=Promise.resolve(),js=()=>{ws=0},Es=()=>ws||(Os.then(js),ws=ys());function Is(e,t,n,r){e.addEventListener(t,n,r)}function Ss(e,t,n,r){e.removeEventListener(t,n,r)}function ks(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=Cs(t);if(r){const s=i[t]=Rs(r,o);Is(e,n,s,a)}else s&&(Ss(e,n,s,a),i[t]=void 0)}}const Ts=/(?:Once|Passive|Capture)$/;function Cs(e){let t;if(Ts.test(e)){let n;t={};while(n=e.match(Ts))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Rs(e,t){const n=e=>{const r=e.timeStamp||ys();(_s||r>=n.attached-1)&&ft(xs(e,n.value),t,5,[e])};return n.value=e,n.attached=Es(),n}function xs(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const As=/^on[a-z]/,Ps=(e,t,n,o,i=!1,s,a,c,u)=>{"class"===t?us(e,o,i):"style"===t?ls(e,n,o):Object(r["x"])(t)?Object(r["v"])(t)||ks(e,t,n,o,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Ls(e,t,o,i))?bs(e,t,o,s,a,c,u):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),gs(e,t,o,i))};function Ls(e,t,n,o){return o?"innerHTML"===t||"textContent"===t||!!(t in e&&As.test(t)&&Object(r["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!As.test(t)||!Object(r["E"])(n))&&t in e))))}function Ns(e,t){const n=Bn(e);class r extends Us{constructor(e){super(n,e,t)}}return r.def=n,r}const Ms=e=>Ns(e,za),Ds="undefined"!==typeof HTMLElement?HTMLElement:class{};class Us extends Ds{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Tt(()=>{this._connected||(qa(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver(e=>{for(const t of e)this._setAttr(t.attributeName)}).observe(this,{attributes:!0});const e=e=>{const{props:t,styles:n}=e,o=!Object(r["o"])(t),i=t?o?Object.keys(t):t:[];let s;if(o)for(const a in this._props){const e=t[a];(e===Number||e&&e.type===Number)&&(this._props[a]=Object(r["P"])(this._props[a]),(s||(s=Object.create(null)))[a]=!0)}this._numberProps=s;for(const r of Object.keys(this))"_"!==r[0]&&this._setProp(r,this[r],!0,!1);for(const a of i.map(r["e"]))Object.defineProperty(this,a,{get(){return this._getProp(a)},set(e){this._setProp(a,e)}});this._applyStyles(n),this._update()},t=this._def.__asyncLoader;t?t().then(e):e(this._def)}_setAttr(e){let t=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(t=Object(r["P"])(t)),this._setProp(Object(r["e"])(e),t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,o=!0){t!==this._props[e]&&(this._props[e]=t,o&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(Object(r["l"])(e),""):"string"===typeof t||"number"===typeof t?this.setAttribute(Object(r["l"])(e),t+""):t||this.removeAttribute(Object(r["l"])(e))))}_update(){qa(this._createVNode(),this.shadowRoot)}_createVNode(){const e=zo(this._def,Object(r["h"])({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0,e.emit=(e,...t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};let t=this;while(t=t&&(t.parentNode||t.host))if(t instanceof Us){e.parent=t._instance;break}}),e}_applyStyles(e){e&&e.forEach(e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)})}}function Fs(e="$style"){{const t=mi();if(!t)return r["b"];const n=t.type.__cssModules;if(!n)return r["b"];const o=n[e];return o||r["b"]}}function Vs(e){const t=mi();if(!t)return;const n=()=>Bs(t.subTree,e(t.proxy));jn(n),or(()=>{const e=new MutationObserver(n);e.observe(t.subTree.el.parentNode,{childList:!0}),cr(()=>e.disconnect())})}function Bs(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Bs(n.activeBranch,t)})}while(e.component)e=e.component.subTree;if(1&e.shapeFlag&&e.el)$s(e.el,t);else if(e.type===Eo)e.children.forEach(e=>Bs(e,t));else if(e.type===ko){let{el:n,anchor:r}=e;while(n){if($s(n,t),n===r)break;n=n.nextSibling}}}function $s(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty("--"+e,t[e])}}const Hs="transition",qs="animation",zs=(e,{slots:t})=>Ki(Ln,Xs(e),t);zs.displayName="Transition";const Ws={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gs=zs.props=Object(r["h"])({},Ln.props,Ws),Ks=(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)},Js=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function Xs(e){const t={};for(const r in e)r in Ws||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:o,duration:i,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:d=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:h=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,v=Ys(i),m=v&&v[0],g=v&&v[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:_,onLeave:w,onLeaveCancelled:O,onBeforeAppear:j=b,onAppear:E=y,onAppearCancelled:I=_}=t,S=(e,t,n)=>{ea(e,t?d:c),ea(e,t?l:a),n&&n()},k=(e,t)=>{ea(e,p),ea(e,h),t&&t()},T=e=>(t,n)=>{const r=e?E:y,i=()=>S(t,e,n);Ks(r,[t,i]),ta(()=>{ea(t,e?u:s),Zs(t,e?d:c),Js(r)||ra(t,o,m,i)})};return Object(r["h"])(t,{onBeforeEnter(e){Ks(b,[e]),Zs(e,s),Zs(e,a)},onBeforeAppear(e){Ks(j,[e]),Zs(e,u),Zs(e,l)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){const n=()=>k(e,t);Zs(e,f),aa(),Zs(e,h),ta(()=>{ea(e,f),Zs(e,p),Js(w)||ra(e,o,g,n)}),Ks(w,[e,n])},onEnterCancelled(e){S(e,!1),Ks(_,[e])},onAppearCancelled(e){S(e,!0),Ks(I,[e])},onLeaveCancelled(e){k(e),Ks(O,[e])}})}function Ys(e){if(null==e)return null;if(Object(r["w"])(e))return[Qs(e.enter),Qs(e.leave)];{const t=Qs(e);return[t,t]}}function Qs(e){const t=Object(r["P"])(e);return t}function Zs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function ea(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ta(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let na=0;function ra(e,t,n,r){const o=e._endId=++na,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=oa(e,t);if(!s)return r();const u=s+"end";let l=0;const d=()=>{e.removeEventListener(u,f),i()},f=t=>{t.target===e&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),e.addEventListener(u,f)}function oa(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(Hs+"Delay"),i=r(Hs+"Duration"),s=ia(o,i),a=r(qs+"Delay"),c=r(qs+"Duration"),u=ia(a,c);let l=null,d=0,f=0;t===Hs?s>0&&(l=Hs,d=s,f=i.length):t===qs?u>0&&(l=qs,d=u,f=c.length):(d=Math.max(s,u),l=d>0?s>u?Hs:qs:null,f=l?l===Hs?i.length:c.length:0);const h=l===Hs&&/\b(transform|all)(,|$)/.test(n[Hs+"Property"]);return{type:l,timeout:d,propCount:f,hasTransform:h}}function ia(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>sa(t)+sa(e[n])))}function sa(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function aa(){return document.body.offsetHeight}const ca=new WeakMap,ua=new WeakMap,la={name:"TransitionGroup",props:Object(r["h"])({},Gs,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=mi(),r=xn();let o,i;return sr(()=>{if(!o.length)return;const t=e.moveClass||(e.name||"v")+"-move";if(!va(o[0].el,n.vnode.el,t))return;o.forEach(fa),o.forEach(ha);const r=o.filter(pa);aa(),r.forEach(e=>{const n=e.el,r=n.style;Zs(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const o=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",o),n._moveCb=null,ea(n,t))};n.addEventListener("transitionend",o)})}),()=>{const s=Me(e),a=Xs(s);let c=s.tag||Eo;o=i,i=t.default?Vn(t.default()):[];for(let e=0;e<i.length;e++){const t=i[e];null!=t.key&&Fn(t,Mn(t,a,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];Fn(t,Mn(t,a,r,n)),ca.set(t,t.el.getBoundingClientRect())}return zo(c,null,i)}}},da=la;function fa(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ha(e){ua.set(e,e.el.getBoundingClientRect())}function pa(e){const t=ca.get(e),n=ua.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${o}px)`,t.transitionDuration="0s",e}}function va(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display="none";const o=1===t.nodeType?t:t.parentNode;o.appendChild(r);const{hasTransform:i}=oa(r);return o.removeChild(r),i}const ma=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function ga(e){e.target.composing=!0}function ba(e){const t=e.target;t.composing&&(t.composing=!1,ya(t,"input"))}function ya(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const _a={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e._assign=ma(i);const s=o||i.props&&"number"===i.props.type;Is(e,t?"change":"input",t=>{if(t.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=Object(r["P"])(o)),e._assign(o)}),n&&Is(e,"change",()=>{e.value=e.value.trim()}),t||(Is(e,"compositionstart",ga),Is(e,"compositionend",ba),Is(e,"change",ba))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:i}},s){if(e._assign=ma(s),e.composing)return;if(document.activeElement===e){if(n)return;if(o&&e.value.trim()===t)return;if((i||"number"===e.type)&&Object(r["P"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},wa={deep:!0,created(e,t,n){e._assign=ma(n),Is(e,"change",()=>{const t=e._modelValue,n=Sa(e),o=e.checked,i=e._assign;if(Object(r["o"])(t)){const e=Object(r["H"])(t,n),s=-1!==e;if(o&&!s)i(t.concat(n));else if(!o&&s){const n=[...t];n.splice(e,1),i(n)}}else if(Object(r["C"])(t)){const e=new Set(t);o?e.add(n):e.delete(n),i(e)}else i(ka(e,o))})},mounted:Oa,beforeUpdate(e,t,n){e._assign=ma(n),Oa(e,t,n)}};function Oa(e,{value:t,oldValue:n},o){e._modelValue=t,Object(r["o"])(t)?e.checked=Object(r["H"])(t,o.props.value)>-1:Object(r["C"])(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=Object(r["G"])(t,ka(e,!0)))}const ja={created(e,{value:t},n){e.checked=Object(r["G"])(t,n.props.value),e._assign=ma(n),Is(e,"change",()=>{e._assign(Sa(e))})},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=ma(o),t!==n&&(e.checked=Object(r["G"])(t,o.props.value))}},Ea={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const i=Object(r["C"])(t);Is(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(r["P"])(Sa(e)):Sa(e));e._assign(e.multiple?i?new Set(t):t:t[0])}),e._assign=ma(o)},mounted(e,{value:t}){Ia(e,t)},beforeUpdate(e,t,n){e._assign=ma(n)},updated(e,{value:t}){Ia(e,t)}};function Ia(e,t){const n=e.multiple;if(!n||Object(r["o"])(t)||Object(r["C"])(t)){for(let o=0,i=e.options.length;o<i;o++){const i=e.options[o],s=Sa(i);if(n)Object(r["o"])(t)?i.selected=Object(r["H"])(t,s)>-1:i.selected=t.has(s);else if(Object(r["G"])(Sa(i),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Sa(e){return"_value"in e?e._value:e.value}function ka(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ta={created(e,t,n){Ca(e,t,n,null,"created")},mounted(e,t,n){Ca(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Ca(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Ca(e,t,n,r,"updated")}};function Ca(e,t,n,r,o){let i;switch(e.tagName){case"SELECT":i=Ea;break;case"TEXTAREA":i=_a;break;default:switch(n.props&&n.props.type){case"checkbox":i=wa;break;case"radio":i=ja;break;default:i=_a}}const s=i[o];s&&s(e,t,n,r)}function Ra(){_a.getSSRProps=({value:e})=>({value:e}),ja.getSSRProps=({value:e},t)=>{if(t.props&&Object(r["G"])(t.props.value,e))return{checked:!0}},wa.getSSRProps=({value:e},t)=>{if(Object(r["o"])(e)){if(t.props&&Object(r["H"])(e,t.props.value)>-1)return{checked:!0}}else if(Object(r["C"])(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}}}const xa=["ctrl","shift","alt","meta"],Aa={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>xa.some(n=>e[n+"Key"]&&!t.includes(n))},Pa=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Aa[t[e]];if(r&&r(n,t))return}return e(n,...r)},La={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Na=(e,t)=>n=>{if(!("key"in n))return;const o=Object(r["l"])(n.key);return t.some(e=>e===o||La[e]===o)?e(n):void 0},Ma={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Da(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),Da(e,!0),r.enter(e)):r.leave(e,()=>{Da(e,!1)}):Da(e,t))},beforeUnmount(e,{value:t}){Da(e,t)}};function Da(e,t){e.style.display=t?e._vod:"none"}function Ua(){Ma.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Fa=Object(r["h"])({patchProp:Ps},cs);let Va,Ba=!1;function $a(){return Va||(Va=to(Fa))}function Ha(){return Va=Ba?Va:no(Fa),Ba=!0,Va}const qa=(...e)=>{$a().render(...e)},za=(...e)=>{Ha().hydrate(...e)},Wa=(...e)=>{const t=$a().createApp(...e);const{mount:n}=t;return t.mount=e=>{const o=Ka(e);if(!o)return;const i=t._component;Object(r["q"])(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t},Ga=(...e)=>{const t=Ha().createApp(...e);const{mount:n}=t;return t.mount=e=>{const t=Ka(e);if(t)return n(t,!0,t instanceof SVGElement)},t};function Ka(e){if(Object(r["E"])(e)){const t=document.querySelector(e);return t}return e}let Ja=!1;const Xa=()=>{Ja||(Ja=!0,Ra(),Ua())};const Ya=()=>{0}},"7b0b":function(e,t,n){var r=n("da84"),o=n("1d80"),i=r.Object;e.exports=function(e){return i(o(e))}},"7c73":function(e,t,n){var r,o=n("825a"),i=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),d=">",f="<",h="prototype",p="script",v=l("IE_PROTO"),m=function(){},g=function(e){return f+p+d+e+f+"/"+p+d},b=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&r?b(r):y():b(r);var e=s.length;while(e--)delete _[h][s[e]];return _()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[h]=o(e),n=new m,m[h]=null,n[v]=e):n=_(),void 0===t?n:i.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),o=n("c65b"),i=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),d=n("d44e"),f=n("9112"),h=n("cb2d"),p=n("b622"),v=n("3f8c"),m=n("ae93"),g=s.PROPER,b=s.CONFIGURABLE,y=m.IteratorPrototype,_=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",j="values",E="entries",I=function(){return this};e.exports=function(e,t,n,s,p,m,S){c(n,t,s);var k,T,C,R=function(e){if(e===p&&N)return N;if(!_&&e in P)return P[e];switch(e){case O:return function(){return new n(this,e)};case j:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},x=t+" Iterator",A=!1,P=e.prototype,L=P[w]||P["@@iterator"]||p&&P[p],N=!_&&L||R(p),M="Array"==t&&P.entries||L;if(M&&(k=u(M.call(new e)),k!==Object.prototype&&k.next&&(i||u(k)===y||(l?l(k,y):a(k[w])||h(k,w,I)),d(k,x,!0,!0),i&&(v[x]=I))),g&&p==j&&L&&L.name!==j&&(!i&&b?f(P,"name",j):(A=!0,N=function(){return o(L,this)})),p)if(T={values:R(j),keys:m?N:R(O),entries:R(E)},S)for(C in T)(_||A||!(C in P))&&h(P,C,T[C]);else r({target:t,proto:!0,forced:_||A},T);return i&&!S||P[w]===N||h(P,w,N,{name:p}),v[t]=N,T}},"7f9a":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("8925"),s=r.WeakMap;e.exports=o(s)&&/native code/.test(i(s))},"825a":function(e,t,n){var r=n("da84"),o=n("861d"),i=r.String,s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),o=n("1626"),i=n("c6cd"),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},"90e3":function(e,t,n){var r=n("e330"),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},9112:function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),o=n("1626"),i=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(A){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new C(r||[]);return i._invoke=I(e,n,s),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(A){return{type:"throw",arg:A}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function b(){}var y={};c(y,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(R([])));w&&w!==n&&r.call(w,i)&&(y=w);var O=b.prototype=m.prototype=Object.create(y);function j(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,i,s,a){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var o;function i(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function I(e,t,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return x()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=S(s,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function R(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:x}}function x(){return{value:t,done:!0}}return g.prototype=b,c(O,"constructor",b),c(b,"constructor",g),g.displayName=c(b,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},j(E.prototype),c(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var s=new E(u(t,n,r,o),i);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},j(O),c(O,a,"Generator"),c(O,i,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(i(n))return s(o(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),o=n("83ab"),i=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f="enumerable",h="configurable",p="writable";t.f=o?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=d(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:f in n?n[f]:r[f],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=o(r,{next:i(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return Z})),n.d(t,"f",(function(){return ne})),n.d(t,"g",(function(){return se})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return ue})),n.d(t,"j",(function(){return oe})),n.d(t,"k",(function(){return L})),n.d(t,"l",(function(){return te})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return N})),n.d(t,"p",(function(){return X})),n.d(t,"q",(function(){return F})),n.d(t,"r",(function(){return i})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return K})),n.d(t,"u",(function(){return M})),n.d(t,"v",(function(){return R})),n.d(t,"w",(function(){return $})),n.d(t,"x",(function(){return C})),n.d(t,"y",(function(){return G})),n.d(t,"z",(function(){return H})),n.d(t,"A",(function(){return J})),n.d(t,"B",(function(){return b})),n.d(t,"C",(function(){return D})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return V})),n.d(t,"F",(function(){return B})),n.d(t,"G",(function(){return _})),n.d(t,"H",(function(){return w})),n.d(t,"I",(function(){return r})),n.d(t,"J",(function(){return h})),n.d(t,"K",(function(){return p})),n.d(t,"L",(function(){return u})),n.d(t,"M",(function(){return A})),n.d(t,"N",(function(){return O})),n.d(t,"O",(function(){return re})),n.d(t,"P",(function(){return ae})),n.d(t,"Q",(function(){return W}));const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(o);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=V(r)?f(r):u(r);if(o)for(const e in o)t[e]=o[e]}return t}return V(e)||$(e)?e:void 0}const l=/;(?![^(]*\))/g,d=/:(.+)/;function f(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(d);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function h(e){let t="";if(V(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if($(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e){if(!e)return null;let{class:t,style:n}=e;return t&&!V(t)&&(e.class=h(t)),n&&(e.style=u(n)),e}const v="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(v),b=r(m);function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=_(e[r],t[r]);return n}function _(e,t){if(e===t)return!0;let n=U(e),r=U(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=N(e),r=N(t),n||r)return!(!n||!r)&&y(e,t);if(n=$(e),r=$(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!_(e[n],t[n]))return!1}}return String(e)===String(t)}function w(e,t){return e.findIndex(e=>_(e,t))}const O=e=>V(e)?e:null==e?"":N(e)||$(e)&&(e.toString===q||!F(e.toString))?JSON.stringify(e,j,2):String(e),j=(e,t)=>t&&t.__v_isRef?j(e,t.value):M(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!$(t)||N(t)||G(t)?t:String(t),E={},I=[],S=()=>{},k=()=>!1,T=/^on[^a-z]/,C=e=>T.test(e),R=e=>e.startsWith("onUpdate:"),x=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},P=Object.prototype.hasOwnProperty,L=(e,t)=>P.call(e,t),N=Array.isArray,M=e=>"[object Map]"===z(e),D=e=>"[object Set]"===z(e),U=e=>e instanceof Date,F=e=>"function"===typeof e,V=e=>"string"===typeof e,B=e=>"symbol"===typeof e,$=e=>null!==e&&"object"===typeof e,H=e=>$(e)&&F(e.then)&&F(e.catch),q=Object.prototype.toString,z=e=>q.call(e),W=e=>z(e).slice(8,-1),G=e=>"[object Object]"===z(e),K=e=>V(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,J=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Y=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},Q=/-(\w)/g,Z=Y(e=>e.replace(Q,(e,t)=>t?t.toUpperCase():"")),ee=/\B([A-Z])/g,te=Y(e=>e.replace(ee,"-$1").toLowerCase()),ne=Y(e=>e.charAt(0).toUpperCase()+e.slice(1)),re=Y(e=>e?"on"+ne(e):""),oe=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},se=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ae=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ce;const ue=()=>ce||(ce="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),o=n("d9b5");e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},a22e:function(e,t,n){var r=n("7a23");Object.keys(r).forEach((function(e){t[e]=r[e]})),t.set=function(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)},t.del=function(e,t){Array.isArray(e)?e.splice(t,1):delete e[t]},t.Vue=r,t.Vue2=void 0,t.isVue2=!1,t.isVue3=!0,t.install=function(){}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a79d:function(e,t,n){"use strict";var r=n("23e7"),o=n("c430"),i=n("d256"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),d=n("cb2d"),f=i&&i.prototype,h=!!i&&s((function(){f["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!o&&c(i)){var p=a("Promise").prototype["finally"];f["finally"]!==p&&d(f,"finally",p,{unsafe:!0})}},abc5:function(e,t,n){"use strict";(function(e){function r(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));const i="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(e,t,n){"use strict";var r,o,i,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("cb2d"),d=n("b622"),f=n("c430"),h=d("iterator"),p=!1;[].keys&&(i=[].keys(),"next"in i?(o=u(u(i)),o!==Object.prototype&&(r=o)):p=!0);var v=void 0==r||s((function(){var e={};return r[h].call(e)!==e}));v?r={}:f&&(r=c(r)),a(r[h])||l(r,h,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),o=n("d039");e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),o=n("f5df");e.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),o=n("5e77").EXISTS,i=n("e330"),s=n("9bf2").f,a=Function.prototype,c=i(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=i(u.exec),d="name";r&&!o&&s(a,d,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var r,o,i,s,a,c,u,l,d=n("da84"),f=n("0366"),h=n("06cf").f,p=n("2cf4").set,v=n("1cdc"),m=n("d4c3"),g=n("a4b4"),b=n("605d"),y=d.MutationObserver||d.WebKitMutationObserver,_=d.document,w=d.process,O=d.Promise,j=h(d,"queueMicrotask"),E=j&&j.value;E||(r=function(){var e,t;b&&(e=w.domain)&&e.exit();while(o){t=o.fn,o=o.next;try{t()}catch(n){throw o?s():i=void 0,n}}i=void 0,e&&e.enter()},v||b||g||!y||!_?!m&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=f(u.then,u),s=function(){l(r)}):b?s=function(){w.nextTick(r)}:(p=f(p,d),s=function(){p(r)}):(a=!0,c=_.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=E||function(e){var t={fn:e,next:void 0};i&&(i.next=t),o||(o=t,s()),i=t}},b622:function(e,t,n){var r=n("da84"),o=n("5692"),i=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=o("wks"),l=r.Symbol,d=l&&l["for"],f=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!i(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&i(l,e)?u[e]=l[e]:u[e]=c&&d?d(t):f(t)}return u[e]}},be92:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return P}));var r=n("a22e");n("3f4e");
/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let o;const i=e=>o=e,s=Symbol();function a(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var c;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(c||(c={}));const u="undefined"!==typeof window,l=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof e&&e.global===e?e:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function d(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function f(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){g(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function h(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function p(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const v="object"===typeof navigator?navigator:{userAgent:""},m=(()=>/Macintosh/.test(v.userAgent)&&/AppleWebKit/.test(v.userAgent)&&!/Safari/.test(v.userAgent))(),g=u?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!m?b:"msSaveOrOpenBlob"in v?y:_:()=>{};function b(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?h(r.href)?f(e,t,n):(r.target="_blank",p(r)):p(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){p(r)}),0))}function y(e,t="download",n){if("string"===typeof e)if(h(e))f(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){p(t)}))}else navigator.msSaveOrOpenBlob(d(e,n),t)}function _(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return f(e,t,n);const o="application/octet-stream"===e.type,i=/constructor/i.test(String(l.HTMLElement))||"safari"in l,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||o&&i||m)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}function w(){const e=Object(r["effectScope"])(!0),t=e.run(()=>Object(r["ref"])({}));let n=[],o=[];const a=Object(r["markRaw"])({install(e){i(a),r["isVue2"]||(a._a=e,e.provide(s,a),e.config.globalProperties.$pinia=a,o.forEach(e=>n.push(e)),o=[])},use(e){return this._a||r["isVue2"]?n.push(e):o.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const O=()=>{};function j(e,t,n,o=O){e.push(t);const i=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),o())};return!n&&Object(r["getCurrentInstance"])()&&Object(r["onUnmounted"])(i),i}function E(e,...t){e.slice().forEach(e=>{e(...t)})}function I(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const o=t[n],i=e[n];a(i)&&a(o)&&e.hasOwnProperty(n)&&!Object(r["isRef"])(o)&&!Object(r["isReactive"])(o)?e[n]=I(i,o):e[n]=o}return e}const S=Symbol(),k=new WeakMap;function T(e){return r["isVue2"]?!k.has(e):!a(e)||!e.hasOwnProperty(S)}const{assign:C}=Object;function R(e){return!(!Object(r["isRef"])(e)||!e.effect)}function x(e,t,n,o){const{state:s,actions:a,getters:c}=t,u=n.state.value[e];let l;function d(){u||(r["isVue2"]?Object(r["set"])(n.state.value,e,s?s():{}):n.state.value[e]=s?s():{});const t=Object(r["toRefs"])(n.state.value[e]);return C(t,a,Object.keys(c||{}).reduce((t,o)=>(t[o]=Object(r["markRaw"])(Object(r["computed"])(()=>{i(n);const t=n._s.get(e);if(!r["isVue2"]||t._r)return c[o].call(t,t)})),t),{}))}return l=A(e,d,t,n,o,!0),l.$reset=function(){const e=s?s():{};this.$patch(t=>{C(t,e)})},l}function A(e,t,n={},o,s,a){let u;const l=C({actions:{}},n);const d={deep:!0};let f,h;let p,v=Object(r["markRaw"])([]),m=Object(r["markRaw"])([]);const g=o.state.value[e];a||g||(r["isVue2"]?Object(r["set"])(o.state.value,e,{}):o.state.value[e]={});Object(r["ref"])({});let b;function y(t){let n;f=h=!1,"function"===typeof t?(t(o.state.value[e]),n={type:c.patchFunction,storeId:e,events:p}):(I(o.state.value[e],t),n={type:c.patchObject,payload:t,storeId:e,events:p});const i=b=Symbol();Object(r["nextTick"])().then(()=>{b===i&&(f=!0)}),h=!0,E(v,n,o.state.value[e])}const _=O;function w(){u.stop(),v=[],m=[],o._s.delete(e)}function S(t,n){return function(){i(o);const r=Array.from(arguments),s=[],a=[];function c(e){s.push(e)}function u(e){a.push(e)}let l;E(m,{args:r,name:t,store:x,after:c,onError:u});try{l=n.apply(this&&this.$id===e?this:x,r)}catch(d){throw E(a,d),d}return l instanceof Promise?l.then(e=>(E(s,e),e)).catch(e=>(E(a,e),Promise.reject(e))):(E(s,l),l)}}const k={_p:o,$id:e,$onAction:j.bind(null,m),$patch:y,$reset:_,$subscribe(t,n={}){const i=j(v,t,n.detached,()=>s()),s=u.run(()=>Object(r["watch"])(()=>o.state.value[e],r=>{("sync"===n.flush?h:f)&&t({storeId:e,type:c.direct,events:p},r)},C({},d,n)));return i},$dispose:w};r["isVue2"]&&(k._r=!1);const x=Object(r["reactive"])(C({},k));o._s.set(e,x);const A=o._e.run(()=>(u=Object(r["effectScope"])(),u.run(()=>t())));for(const i in A){const t=A[i];if(Object(r["isRef"])(t)&&!R(t)||Object(r["isReactive"])(t))a||(g&&T(t)&&(Object(r["isRef"])(t)?t.value=g[i]:I(t,g[i])),r["isVue2"]?Object(r["set"])(o.state.value[e],i,t):o.state.value[e][i]=t);else if("function"===typeof t){const e=S(i,t);r["isVue2"]?Object(r["set"])(A,i,e):A[i]=e,l.actions[i]=t}else 0}return r["isVue2"]?Object.keys(A).forEach(e=>{Object(r["set"])(x,e,A[e])}):(C(x,A),C(Object(r["toRaw"])(x),A)),Object.defineProperty(x,"$state",{get:()=>o.state.value[e],set:e=>{y(t=>{C(t,e)})}}),r["isVue2"]&&(x._r=!0),o._p.forEach(e=>{C(x,u.run(()=>e({store:x,app:o._a,pinia:o,options:l})))}),g&&a&&n.hydrate&&n.hydrate(x.$state,g),f=!0,h=!0,x}function P(e,t,n){let a,c;const u="function"===typeof t;function l(e,n){const l=Object(r["getCurrentInstance"])();e=e||l&&Object(r["inject"])(s),e&&i(e),e=o,e._s.has(a)||(u?A(a,t,c,e):x(a,c,e));const d=e._s.get(a);return d}return"string"===typeof e?(a=e,c=u?n:t):(c=e,a=e.id),l.$id=a,l}}).call(this,n("c8ba"))},c04e:function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,d=u("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,r=a(e,d);if(r){if(void 0===t&&(t="default"),n=o(r,e,t),!i(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var r=n("40d5"),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},c6b6:function(e,t,n){var r=n("e330"),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),o=n("1a2d"),i=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(t.length>u)o(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},cb2d:function(e,t,n){var r=n("da84"),o=n("1626"),i=n("9112"),s=n("13d2"),a=n("ce4e");e.exports=function(e,t,n,c){var u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet,f=c&&void 0!==c.name?c.name:t;return o(n)&&s(n,f,c),e===r?(l?e[t]=n:a(t,n),e):(u?!d&&e[t]&&(l=!0):delete e[t],l?e[t]=n:i(e,t,n),e)}},cc12:function(e,t,n){var r=n("da84"),o=n("861d"),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},cc98:function(e,t,n){"use strict";var r=n("23e7"),o=n("c430"),i=n("4738").CONSTRUCTOR,s=n("d256"),a=n("d066"),c=n("1626"),u=n("cb2d"),l=s&&s.prototype;if(r({target:"Promise",proto:!0,forced:i,real:!0},{catch:function(e){return this.then(void 0,e)}}),!o&&c(s)){var d=a("Promise").prototype["catch"];l["catch"]!==d&&u(l,"catch",d,{unsafe:!0})}},cca6:function(e,t,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,arity:2,forced:Object.assign!==o},{assign:o})},cdf9:function(e,t,n){var r=n("825a"),o=n("861d"),i=n("f069");e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=i.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),o=n("1626"),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},d256:function(e,t,n){var r=n("da84");e.exports=r.Promise},d2bb:function(e,t,n){var r=n("e330"),o=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return o(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),o=n("cb2d"),i=n("b041");r||o(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,o=n("1a2d"),i=n("b622"),s=i("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!o(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),o=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==o.Pebble},d6d6:function(e,t,n){var r=n("da84"),o=r.TypeError;e.exports=function(e,t){if(e<t)throw o("Not enough arguments");return e}},d9b5:function(e,t,n){var r=n("da84"),o=n("d066"),i=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return i(t)&&s(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),d=s.values,f=function(e,t){if(e){if(e[u]!==d)try{a(e,u,d)}catch(r){e[u]=d}if(e[l]||a(e,l,t),o[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var h in o)f(r[h]&&r[h].prototype,h);f(i,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),o=n("7839");e.exports=Object.keys||function(e){return r(e,o)}},e163:function(e,t,n){var r=n("da84"),o=n("1a2d"),i=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,d=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(o(t,u))return t[u];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?d:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),d="Array Iterator",f=s.set,h=s.getterFor(d);e.exports=c(Array,"Array",(function(e,t){f(this,{type:d,target:r(e),index:0,kind:t})}),(function(){var e=h(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(v){}},e330:function(e,t,n){var r=n("40d5"),o=Function.prototype,i=o.bind,s=o.call,a=r&&i.bind(s,s);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
/**
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
 */
const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=i[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:s,args:i,type:t.name})}}}},e6cf:function(e,t,n){n("5e7e"),n("14e5"),n("cc98"),n("3529"),n("f22b"),n("7149")},e893:function(e,t,n){var r=n("1a2d"),o=n("56ef"),i=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=o(t),c=s.f,u=i.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},e95a:function(e,t,n){var r=n("b622"),o=n("3f8c"),i=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||s[i]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return ir})),n.d(t,"b",(function(){return st}));var r=n("1fd5"),o=n("589b");function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),d=new s["b"]("@firebase/auth");function f(e,...t){d.logLevel<=s["a"].ERROR&&d.error(`Auth (${o["a"]}): ${e}`,...t)}
/**
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
 */function h(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function v(e,t,n){const o=Object.assign(Object.assign({},u()),{[t]:n}),i=new r["b"]("auth","Firebase",o);return i.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function y(e,t){e||b(t)}
/**
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
 */const _=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
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
 */function O(e,t){const n=Object(o["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if(Object(r["g"])(o,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const i=n.initialize({options:t});return i}function j(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["o"])()||Object(r["p"])()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function R(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new C(3e4,6e4);
/**
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
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,n,o,i={}){return M(e,i,async()=>{let i={},s={};o&&("GET"===t?s=o:i={body:JSON.stringify(o)});const a=Object(r["q"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),x.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function M(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},A),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw V(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",i);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(e,a,s);h(e,a)}}catch(i){if(i instanceof r["c"])throw i;h(e,"network-request-failed")}}async function D(e,t,n,r,o={}){const i=await N(e,t,n,r,o);return"mfaPendingCredential"in i&&h(e,"multi-factor-auth-required",{_serverResponse:i}),i}function U(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?R(e.config,o):`${e.config.apiScheme}://${o}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=p(e,t,r);return o.customData._tokenResponse=n,o}
/**
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
 */async function B(e,t){return N(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return N(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function q(e,t=!1){const n=Object(r["i"])(e),o=await n.getIdToken(t),i=W(o);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:o,authTime:H(z(i.auth_time)),issuedAtTime:H(z(i.iat)),expirationTime:H(z(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function W(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",i),null}}function G(e){const t=W(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r["c"]&&J(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),o=await K(e,$(n,{idToken:r}));g(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Y(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function Z(e){const t=Object(r["i"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
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
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["q"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=U(e,o,"/v1/token","key="+i),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(g("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
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
 */function oe(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Y(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:j}=t;g(y&&j,e,"internal-error");const E=re.fromJSON(this.name,j);g("string"===typeof y,e,"internal-error"),oe(l,e.name),oe(d,e.name),g("boolean"===typeof _,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),oe(f,e.name),oe(h,e.name),oe(p,e.name),oe(v,e.name),oe(m,e.name),oe(b,e.name);const I=new ie({uid:y,auth:e,email:d,emailVerified:_,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:b});return O&&Array.isArray(O)&&(I.providerData=O.map(e=>Object.assign({},e))),v&&(I._redirectEventId=v),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const o=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(o),o}}
/**
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
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
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
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,o),this.fullPersistenceKey=ce("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let o=r[0]||w(ae);const i=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ie._fromJSON(e,t);u!==o&&(s=n),o=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==o)try{await e._remove(i)}catch(c){}})),new ue(o,e,n)):new ue(o,e,n)}}
/**
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
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=Object(r["j"])()){return/firefox\//i.test(e)}function fe(e=Object(r["j"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=Object(r["j"])()){return/crios\//i.test(e)}function pe(e=Object(r["j"])()){return/iemobile/i.test(e)}function ve(e=Object(r["j"])()){return/android/i.test(e)}function me(e=Object(r["j"])()){return/blackberry/i.test(e)}function ge(e=Object(r["j"])()){return/webos/i.test(e)}function be(e=Object(r["j"])()){return/iphone|ipad|ipod/i.test(e)}function ye(e=Object(r["j"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return Object(r["m"])()&&10===document.documentMode}function we(e=Object(r["j"])()){return be(e)||ve(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function je(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["j"])());break;case"Worker":n=`${le(Object(r["j"])())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o["a"]}/${i}`}
/**
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
 */class Ee{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n.message})}}}
/**
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
 */class Ie{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.beforeStateQueue=new Ee(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==i||!(null===s||void 0===s?void 0:s.user)||(r=s.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["i"])(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return g(i,this,"internal-error"),i.then(()=>o(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=je(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Se(e){return Object(r["i"])(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["f"])(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class Te{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
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
 */async function Ce(e,t){return N(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function Re(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
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
 */
async function xe(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Ae(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
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
 */class Pe extends Te{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Re(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ce(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ae(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Le(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
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
 */const Ne="http://localhost";class Me extends Te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Me(n,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Le(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:Ne,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["q"])(t)}return e}}
/**
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
 */async function De(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function Ue(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function Fe(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Ve={["USER_NOT_FOUND"]:"user-not-found"};async function Be(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Ve)}
/**
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
 */class $e extends Te{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $e({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $e({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ue(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Be(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new $e({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
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
 */function He(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qe(e){const t=Object(r["r"])(Object(r["h"])(e))["link"],n=t?Object(r["r"])(Object(r["h"])(t))["deep_link_id"]:null,o=Object(r["r"])(Object(r["h"])(e))["deep_link_id"],i=o?Object(r["r"])(Object(r["h"])(o))["link"]:null;return i||o||n||t||e}class ze{constructor(e){var t,n,o,i,s,a;const c=Object(r["r"])(Object(r["h"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=He(null!==(o=c["mode"])&&void 0!==o?o:null);g(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=qe(e);try{return new ze(t)}catch(n){return null}}}
/**
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
 */
class We{constructor(){this.providerId=We.PROVIDER_ID}static credential(e,t){return Pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ze.parseLink(t);return g(n,"argument-error"),Pe._fromEmailAndCode(e,n.code,n.tenantId)}}We.PROVIDER_ID="password",We.EMAIL_PASSWORD_SIGN_IN_METHOD="password",We.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Ge{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Ke extends Ge{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Je extends Ke{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com",Je.PROVIDER_ID="facebook.com";
/**
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
 */
class Xe extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Me._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com",Xe.PROVIDER_ID="google.com";
/**
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
 */
class Ye extends Ke{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com",Ye.PROVIDER_ID="github.com";
/**
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
 */
class Qe extends Ke{constructor(){super("twitter.com")}static credential(e,t){return Me._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";
/**
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
 */
class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ie._fromIdTokenResponse(e,n,r),i=et(n),s=new Ze({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class tt extends r["c"]{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
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
 */async function rt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
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
 */
async function ot(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await K(e,nt(r,o,t,e),n);g(i.idToken,r,"internal-error");const s=W(i.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&h(r,"user-mismatch"),i}}
/**
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
 */async function it(e,t,n=!1){const r="signIn",o=await nt(e,r,t),i=await Ze._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}function st(e,t,n,o){return Object(r["i"])(e).onAuthStateChanged(t,n,o)}
/**
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
 */
function at(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function ct(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const ut="__sak";
/**
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
 */class lt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ut,"1"),this.storage.removeItem(ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function dt(){const e=Object(r["j"])();return fe(e)||be(e)}const ft=1e3,ht=10;class pt extends lt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);_e()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ht):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},ft)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pt.type="LOCAL";const vt=pt;
/**
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
 */class mt extends lt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mt.type="SESSION";const gt=mt;
/**
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
 */function bt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
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
 */class yt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new yt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map(async e=>e(t.origin,o)),a=await bt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function _t(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */yt.receivers=[];class wt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise((s,a)=>{const c=_t("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
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
 */function Ot(){return window}function jt(e){Ot().location.href=e}
/**
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
 */function Et(){return"undefined"!==typeof Ot()["WorkerGlobalScope"]&&"function"===typeof Ot()["importScripts"]}async function It(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function St(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function kt(){return Et()?self:null}
/**
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
 */const Tt="firebaseLocalStorageDb",Ct=1,Rt="firebaseLocalStorage",xt="fbase_key";class At{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pt(e,t){return e.transaction([Rt],t?"readwrite":"readonly").objectStore(Rt)}function Lt(){const e=indexedDB.deleteDatabase(Tt);return new At(e).toPromise()}function Nt(){const e=indexedDB.open(Tt,Ct);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Rt,{keyPath:xt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Rt)?t(n):(n.close(),await Lt(),t(await Nt()))})})}async function Mt(e,t,n){const r=Pt(e,!0).put({[xt]:t,value:n});return new At(r).toPromise()}async function Dt(e,t){const n=Pt(e,!1).get(t),r=await new At(n).toPromise();return void 0===r?null:r.value}function Ut(e,t){const n=Pt(e,!0).delete(t);return new At(n).toPromise()}const Ft=800,Vt=3;class Bt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Nt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Vt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Et()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yt._getInstance(kt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await It(),!this.activeServiceWorker)return;this.sender=new wt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&St()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nt();return await Mt(e,ut,"1"),await Ut(e,ut),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Dt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ut(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Pt(e,!1).getAll();return new At(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ft)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Bt.type="LOCAL";const $t=Bt;
/**
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
 */function Ht(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function qt(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
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
 */
/**
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
 */
function zt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Wt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",zt().appendChild(r)})}function Gt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
Gt("rcb"),new C(3e4,6e4);
/**
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
 */
const Kt="recaptcha";async function Jt(e,t,n){var r;const o=await n.verify();try{let i;if(g("string"===typeof o,e,"argument-error"),g(n.type===Kt,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){g("enroll"===t.type,e,"internal-error");const n=await at(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await Ht(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await De(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
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
 */
class Xt{constructor(e){this.providerId=Xt.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return Jt(this.auth,e,Object(r["i"])(t))}static credential(e,t){return $e._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Xt.credentialFromTaggedObject(t)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?$e._fromTokenResponse(t,n):null}}
/**
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
 */
function Yt(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Xt.PROVIDER_ID="phone",Xt.PHONE_SIGN_IN_METHOD="phone";class Qt extends Te{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zt(e){return it(e.auth,new Qt(e),e.bypassAuthState)}function en(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ot(n,new Qt(e),e.bypassAuthState)}async function tn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),rt(n,new Qt(e),e.bypassAuthState)}
/**
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
 */class nn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zt;case"linkViaPopup":case"linkViaRedirect":return tn;case"reauthViaPopup":case"reauthViaRedirect":return en;default:h(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const rn=new C(2e3,1e4);class on extends nn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=_t();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,rn.get())};e()}}on.currentPopupAction=null;
/**
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
 */
const sn="pendingRedirect",an=new Map;class cn extends nn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=an.get(this.auth._key());if(!e){try{const t=await un(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}an.set(this.auth._key(),e)}return this.bypassAuthState||an.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function un(e,t){const n=fn(t),r=dn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function ln(e,t){an.set(e._key(),t)}function dn(e){return w(e._redirectPersistence)}function fn(e){return ce(sn,e.config.apiKey,e.name)}
/**
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
 */async function hn(e,t,n=!1){const r=Se(e),o=Yt(r,t),i=new cn(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
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
 */
const pn=6e5;class vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!gn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(mn(e))}saveEventToCache(e){this.cachedEventUids.add(mn(e)),this.lastProcessedEventTime=Date.now()}}function mn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function gn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function bn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gn(e);default:return!1}}
/**
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
 */async function yn(e,t={}){return N(e,"GET","/v1/projects",t)}
/**
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
 */const _n=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wn=/^https?/;async function On(e){if(e.config.emulator)return;const{authorizedDomains:t}=await yn(e);for(const r of t)try{if(jn(r))return}catch(n){}h(e,"unauthorized-domain")}function jn(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!wn.test(n))return!1;if(_n.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
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
 */const En=new C(3e4,6e4);function In(){const e=Ot().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Sn(e){return new Promise((t,n)=>{var r,o,i;function s(){In(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{In(),n(p(e,"network-request-failed"))},timeout:En.get()})}if(null===(o=null===(r=Ot().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Ot().gapi)||void 0===i?void 0:i.load)){const t=Gt("iframefcb");return Ot()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Wt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw kn=null,e})}let kn=null;function Tn(e){return kn=kn||Sn(e),kn}
/**
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
 */const Cn=new C(5e3,15e3),Rn="__/auth/iframe",xn="emulator/auth/iframe",An={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ln(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,xn):`https://${e.config.authDomain}/${Rn}`,i={apiKey:t.apiKey,appName:e.name,v:o["a"]},s=Pn.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${Object(r["q"])(i).slice(1)}`}async function Nn(e){const t=await Tn(e),n=Ot().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Ln(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:An,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=p(e,"network-request-failed"),i=Ot().setTimeout(()=>{r(o)},Cn.get());function s(){Ot().clearTimeout(i),n(t)}t.ping(s).then(s,()=>{r(o)})}))}
/**
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
 */const Mn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dn=500,Un=600,Fn="_blank",Vn="http://localhost";class Bn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function $n(e,t,n,o=Dn,i=Un){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Mn),{width:o.toString(),height:i.toString(),top:s,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=he(l)?Fn:n),de(l)&&(t=t||Vn,u.scrollbars="yes");const d=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(l)&&"_self"!==c)return Hn(t||"",c),new Bn(null);const f=window.open(t||"",c,d);g(f,e,"popup-blocked");try{f.focus()}catch(h){}return new Bn(f)}function Hn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const qn="__/auth/handler",zn="emulator/auth/handler";function Wn(e,t,n,i,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o["a"],eventId:s};if(t instanceof Ge){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["l"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ke){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Gn(e)}?${Object(r["q"])(u).slice(1)}`}function Gn({config:e}){return e.emulator?R(e,zn):`https://${e.authDomain}/${qn}`}
/**
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
 */const Kn="webStorageSupport";class Jn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gt,this._completeRedirectFn=hn,this._overrideRedirectResult=ln}async _openPopup(e,t,n,r){var o;y(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=Wn(e,t,n,E(),r);return $n(e,i,_t())}async _openRedirect(e,t,n,r){return await this._originValidation(e),jt(Wn(e,t,n,E(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Nn(e),n=new vn(e);return t.register("authEvent",t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Kn,{type:Kn},n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Kn];void 0!==o&&t(!!o),h(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=On(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||fe()||be()}}const Xn=Jn;class Yn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Qn extends Yn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qn(e)}_finalizeEnroll(e,t,n){return ct(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return qt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Zn{constructor(){}static assertion(e){return Qn._fromCredential(e)}}Zn.FACTOR_ID="phone";var er="@firebase/auth",tr="0.20.1";
/**
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
 */
class nr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function rr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function or(e){Object(o["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=r.options;return((t,r)=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const o={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:je(e)},a=new Ie(t,r,o);return j(a,n),a})(r,o)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(o["c"])(new a["a"]("auth-internal",e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new nr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(o["f"])(er,tr,rr(e)),Object(o["f"])(er,tr,"esm2017")}
/**
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
 */function ir(e=Object(o["d"])()){const t=Object(o["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:Xn,persistence:[$t,vt,gt]})}or("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},f22b:function(e,t,n){"use strict";var r=n("23e7"),o=n("c65b"),i=n("f069"),s=n("4738").CONSTRUCTOR;r({target:"Promise",stat:!0,forced:s},{reject:function(e){var t=i.f(this);return o(t.reject,void 0,e),t.promise}})},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),o=n("00ee"),i=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(n){}};e.exports=o?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=d(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),o=n("90e3"),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},fc6a:function(e,t,n){var r=n("44ad"),o=n("1d80");e.exports=function(e){return r(o(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=chunk-vendors.1f883a5b.js.map