const __vite__fileDeps=["_app/immutable/nodes/0.DZvub2fl.js","_app/immutable/chunks/scheduler.BBINyCwK.js","_app/immutable/chunks/index.CoHGkxOf.js","_app/immutable/chunks/paths.B2VqjTxU.js","_app/immutable/assets/0.DgnuxSQ3.css","_app/immutable/nodes/1.Dme_dUi7.js","_app/immutable/chunks/entry.BHujuywn.js","_app/immutable/nodes/2.CZkVKTZp.js","_app/immutable/nodes/3.C3Ppw_E7.js","_app/immutable/chunks/characterStock.CNgMhMQg.js","_app/immutable/assets/characterStock.BVpLNII1.css","_app/immutable/chunks/rankings.CfyuBnbD.js","_app/immutable/assets/3.99NKKSlU.css","_app/immutable/nodes/4.CCKwbuyf.js","_app/immutable/assets/4.BDhypud9.css","_app/immutable/nodes/5.sFmlmRBn.js","_app/immutable/assets/5.vVm4EqmO.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as N,a as U,o as B,b as R,t as j}from"../chunks/scheduler.BBINyCwK.js";import{S as W,i as z,s as F,x as p,f as G,g as b,o as h,n as A,m as g,d as w,e as H,c as J,a as K,l as D,A as m,t as Q,b as X,j as Y,v as L,B as E,q as v,r as I,u as y,w as P}from"../chunks/index.CoHGkxOf.js";const Z="modulepreload",M=function(a){return"/slsa/"+a},O={},k=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),t=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));s=Promise.all(n.map(i=>{if(i=M(i),i in O)return;O[i]=!0;const l=i.endsWith(".css"),_=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${_}`))return;const o=document.createElement("link");if(o.rel=l?"stylesheet":Z,l||(o.as="script",o.crossOrigin=""),o.href=i,t&&o.setAttribute("nonce",t),document.head.appendChild(o),l)return new Promise((u,d)=>{o.addEventListener("load",u),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(a){let e,n,r;var s=a[1][0];function f(t,i){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,i){e&&y(e,t,i),b(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{P(l,1)}),A()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&h(e.$$.fragment,t),r=!1},d(t){t&&w(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,r;var s=a[1][0];function f(t,i){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,i){e&&y(e,t,i),b(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{P(l,1)}),A()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&8215&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&h(e.$$.fragment,t),r=!1},d(t){t&&w(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,r;var s=a[1][1];function f(t,i){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,i){e&&y(e,t,i),b(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][1])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{P(l,1)}),A()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const l={};i&16&&(l.data=t[4]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&h(e.$$.fragment,t),r=!1},d(t){t&&w(n),a[10](null),e&&P(e,t)}}}function S(a){let e,n=a[6]&&T(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(r){e=J(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(r,s){b(r,e,s),n&&n.m(e,null)},p(r,s){r[6]?n?n.p(r,s):(n=T(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&w(e),n&&n.d()}}}function T(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,r){b(n,e,r)},p(n,r){r&128&&Y(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,r,s,f;const t=[x,$],i=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=i[e]=t[e](a);let _=a[5]&&S(a);return{c(){n.c(),r=F(),_&&_.c(),s=p()},l(o){n.l(o),r=G(o),_&&_.l(o),s=p()},m(o,u){i[e].m(o,u),b(o,r,u),_&&_.m(o,u),b(o,s,u),f=!0},p(o,[u]){let d=e;e=l(o),e===d?i[e].p(o,u):(L(),h(i[d],1,1,()=>{i[d]=null}),A(),n=i[e],n?n.p(o,u):(n=i[e]=t[e](o),n.c()),g(n,1),n.m(r.parentNode,r)),o[5]?_?_.p(o,u):(_=S(o),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(o){f||(g(n),f=!0)},o(o){h(n),f=!1},d(o){o&&(w(r),w(s)),i[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:r}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:i}=e,{data_0:l=null}=e,{data_1:_=null}=e;U(r.page.notify);let o=!1,u=!1,d=null;B(()=>{const c=r.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,d=document.title||"untitled page")}))});return n(5,o=!0),c});function V(c){R[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function q(c){R[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){R[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,r=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,i=c.form),"data_0"in c&&n(3,l=c.data_0),"data_1"in c&&n(4,_=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&r.page.set(s)},[t,f,i,l,_,o,u,d,r,s,V,q,C]}class oe extends W{constructor(e){super(),z(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>k(()=>import("../nodes/0.DZvub2fl.js"),__vite__mapDeps([0,1,2,3,4])),()=>k(()=>import("../nodes/1.Dme_dUi7.js"),__vite__mapDeps([5,1,2,6,3])),()=>k(()=>import("../nodes/2.CZkVKTZp.js"),__vite__mapDeps([7,1,2,6,3])),()=>k(()=>import("../nodes/3.C3Ppw_E7.js"),__vite__mapDeps([8,1,2,9,10,11,12])),()=>k(()=>import("../nodes/4.CCKwbuyf.js"),__vite__mapDeps([13,1,2,9,10,11,14])),()=>k(()=>import("../nodes/5.sFmlmRBn.js"),__vite__mapDeps([15,1,2,9,10,16]))],le=[],fe={"/":[2],"/leaderboards":[3],"/rankings":[4],"/stats":[5]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
