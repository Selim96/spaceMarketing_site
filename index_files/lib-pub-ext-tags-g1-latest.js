(()=>{"use strict";var e={83:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.insertComscore=void 0;var i=t(953);r.insertComscore=function(e){var r=e.baseUrl,t=e.keys,n=t.c1,s=t.c2;window._comscore=window._comscore||[],window._comscore.push({c1:n,c2:s});var o=r;(0,i.insertScript)({src:o})}},846:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.insertDoubleVerify=void 0;var i=t(953);r.insertDoubleVerify=function(e){var r=e.baseUrl;(0,i.insertScript)({src:r})}},573:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.insertGoogleTopics=void 0;var i=t(953);r.insertGoogleTopics=function(e){var r=e.baseUrl;(0,i.insertIframe)({src:r})}},520:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.insertKrux=void 0;var i=t(953);r.insertKrux=function(e){window.Krux=window.Krux||function(){window.Krux.q.push(arguments)},window.Krux.q=window.Krux.q||[];var r=e.baseUrl,t=e.id,n="".concat(r).concat(t,".js");(0,i.insertScript)({src:n})}},881:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.insertLiveramp=void 0;var i=t(953);r.insertLiveramp=function(e){var r=e.baseUrl;(0,i.insertScript)({src:r})}},350:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.insertNavegg=void 0;var i=t(953);r.insertNavegg=function(e){var r=e.baseUrl,t=e.id,n="".concat(r,"tm").concat(t,".js");(0,i.insertScript)({src:n})}},823:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.insertTail=void 0;var i=t(953);r.insertTail=function(e){var r=e.baseUrl,t=e.id,n="".concat(r,"t3m.js?i=").concat(t);(0,i.insertScript)({src:n})}},953:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.insertIframe=r.insertScript=r.insertTenantTags=void 0;var i=t(83),n=t(520),s=t(881),o=t(350),c=t(823),a=t(846),l=t(573),u={comscore:function(e){return(0,i.insertComscore)(e)},liveramp:function(e){return(0,s.insertLiveramp)(e)},krux:function(e){return(0,n.insertKrux)(e)},navegg:function(e){return(0,o.insertNavegg)(e)},tail:function(e){return(0,c.insertTail)(e)},doubleVerify:function(e){return(0,a.insertDoubleVerify)(e)},googleTopics:function(e){return(0,l.insertGoogleTopics)(e)}};r.insertTenantTags=function(e){Object.keys(e).forEach((function(r){u[r](e[r])}))},r.insertScript=function(e){var r,t=e.async,i=void 0===t||t,n=e.nonce,s=e.type,o=void 0===s?"text/javascript":s,c=e.src,a=document.createElement("script");a.async=i,a.type=o,a.src=c,n&&(a.nonce=n);var l=document.getElementsByTagName("script")[0];null===(r=null==l?void 0:l.parentNode)||void 0===r||r.insertBefore(a,l)},r.insertIframe=function(e){var r=e.src,t=e.title,i=void 0===t?"":t,n=document.createElement("iframe");n.src=r,n.title=i,n.style.display="none",document.body.appendChild(n)}}},r={};(0,function t(i){var n=r[i];if(void 0!==n)return n.exports;var s=r[i]={exports:{}};return e[i](s,s.exports,t),s.exports}(953).insertTenantTags)({comscore:{baseUrl:"https://sb.scorecardresearch.com/cs/6035227/beacon.js",keys:{c1:"2",c2:"6035227"}},liveramp:{baseUrl:"https://s3.glbimg.com/v1/AUTH_acd8438fd650434baa93efc372c066a1/libs/liveramp/ats/prod/lib-liveramp-ats-latest.js"},navegg:{baseUrl:"https://tag.navdmp.com/",id:"13574"},tail:{baseUrl:"https://tags.t.tailtarget.com/",id:"TT-12842-2/CT-1047"},doubleVerify:{baseUrl:"https://s3.glbimg.com/v1/AUTH_acd8438fd650434baa93efc372c066a1/libs/lib-double-verify/prod/lib-double-verify-latest.js"}})})();