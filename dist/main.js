(()=>{"use strict";var n,e,t,r,a,o,i,c,s,u,d,f,p,l,m={28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,'.main-container,\n.main-info,\n.actual-day-forecast,\n.ten-day-forecast{\n    border: red solid 1px;\n    font-family: \'Courier New\', Courier, monospace;\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n\n.main-container{   \n\n    padding:40px;\n    display:grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-areas:\n    "main-info"\n    "actual-day-fcast"\n    "ten-day-fcast";\n\n}\n\n\n.main-info *{\n    grid-area: main-info;\n    border-radius: 10px;\n    \n\n}\n.actual-day-forecast{\n    grid-area: actual-day-fcast;\n    border-radius: 10px;\n\n}\n.ten-day-forecast{\n    grid-area: ten-day-fcast;\n    border-radius: 10px;\n}\n\n.main-container{\n\n    justify-content: center;\n    align-items: center;\n}\n\n\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],d=o[u]||0,f="".concat(u," ").concat(d);o[u]=d+1;var p=t(f),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(l);else{var m=a(l,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),u=0;u<o.length;u++){var d=t(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function y(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return m[n](t,t.exports,y),t.exports}y.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return y.d(e,{a:e}),e},y.d=(n,e)=>{for(var t in e)y.o(e,t)&&!y.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},y.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),y.nc=void 0,n=y(379),e=y.n(n),t=y(795),r=y.n(t),a=y(569),o=y.n(a),i=y(565),c=y.n(i),s=y(216),u=y.n(s),d=y(589),f=y.n(d),p=y(28),(l={}).styleTagTransform=f(),l.setAttributes=c(),l.insert=o().bind(null,"head"),l.domAPI=r(),l.insertStyleElement=u(),e()(p.Z,l),p.Z&&p.Z.locals&&p.Z.locals})();