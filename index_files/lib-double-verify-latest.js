// 0.0.5
(()=>{"use strict";var e={578:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function d(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.startDoubleVerify=void 0;const i=n(694),r=n(403);t.startDoubleVerify=function(e){return o(this,void 0,void 0,(function*(){(0,i.appendScript)(e),(0,r.insertPQLoading)()}))}},694:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.appendScript=void 0,t.appendScript=function(e){const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e,document.head.appendChild(t)}},403:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTargetingPQValue=t.insertPQLoading=void 0;const o=n(493),i=["ids","bsc"];function r(){var e;if(null===(e=null===window||void 0===window?void 0:window.PQ)||void 0===e?void 0:e.PTS){const{BSC:e,IDS:t}=window.PQ.PTS;(0,o.setDVPageLevelTargeting)({BSC:e.map((e=>e.toString())),IDS:t.toString()})}}t.insertPQLoading=function(){var e,t;window.PQ=null!==(e=window.PQ)&&void 0!==e?e:{};const{PQ:n}=window;n.cmd=null!==(t=n.cmd)&&void 0!==t?t:[],n.cmd.push((()=>{n.loadSignals(i,r)}))},t.getTargetingPQValue=r},493:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setDVPageLevelTargeting=void 0,t.setDVPageLevelTargeting=function(e){var t,n;window.googletag=null!==(t=window.googletag)&&void 0!==t?t:{};const{googletag:o}=window;o.cmd=null!==(n=o.cmd)&&void 0!==n?n:[],o.cmd.push((()=>{Object.keys(e).forEach((t=>{o.pubads().setTargeting(t,e[t])}))}))}}},t={};(0,function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(578).startDoubleVerify)("https://pub.doubleverify.com/signals/pub.js#ctx=27566431&cmp=DV1036776")})();