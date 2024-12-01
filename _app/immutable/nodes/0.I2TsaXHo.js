import{s as L,d as j,u as O,g as T,e as A}from"../chunks/scheduler.5-OGTJjP.js";import{S as B,i as E,s as v,e as _,C as G,d as p,f as y,c as h,a as w,l as M,n as k,g as C,h as m,p as H,r as N}from"../chunks/index.U6rtkGPE.js";import{b as x}from"../chunks/paths.Q0FKF5rx.js";const P=!0,I="always";async function z({fetch:a,params:l}){const r=await(await a("/data.json")).json();return{db:D(r)}}function D(a){const l=n=>a.codeMap[n],t=n=>a.slugMap[n];return{fGetAccountByCode:l,fGetPlayerBySlug:t,fGetPlayerByCode:n=>{var o;const i=l(n);if(i!=null&&i.slug)return t(i.slug);for(const[g,c]of Object.entries(a.slugMap))if((o=c.slippiConnectCodes)!=null&&o.includes(n))return c;return null},...a}}const K=Object.freeze(Object.defineProperty({__proto__:null,load:z,prerender:P,trailingSlash:I},Symbol.toStringTag,{value:"Module"}));function J(a){let l,t,r,n=`<div class="flex items-center flex-shrink-0 text-white mr-6 border-r-4 border-primary-dark px-8 h-16"><span class="font-semibold text-2xl tracking-tight">🐸 SLSA</span></div> <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"><div class="text-md lg:flex-grow"><a href="${`${x}/leaderboards`}" class="block lg:inline-block lg:mt-0 mr-4 svelte-aor817">Leaderboards</a> <a href="${`${x}/rankings`}" class="block lg:inline-block lg:mt-0 mr-4 svelte-aor817">Rankings</a> <a href="${`${x}/stats`}" class="block lg:inline-block lg:mt-0 mr-4 svelte-aor817">Stats</a></div></div>`,i,o,g,c,$=`<p><a href="https://slippi.gg/#support" target="_blank" rel="noreferrer" class="svelte-aor817">Support Slippi</a>

      • Maintained by
      <a href="https://bsky.app/profile/caioicy.bsky.social" target="_blank" rel="noreferrer" class="svelte-aor817">@caioicy</a>

      • Inspired by
      <a href="https://www.buymeacoffee.com/blorppppp" target="_blank" rel="noreferrer" class="svelte-aor817">blorppppp</a></p>`,f;const b=a[2].default,s=j(b,a,a[1],null);return{c(){l=v(),t=_("main"),r=_("nav"),r.innerHTML=n,i=v(),o=_("div"),s&&s.c(),g=v(),c=_("footer"),c.innerHTML=$,this.h()},l(e){G("svelte-y837zg",document.head).forEach(p),l=y(e),t=h(e,"MAIN",{});var d=w(t);r=h(d,"NAV",{class:!0,"data-svelte-h":!0}),M(r)!=="svelte-1vmbbrd"&&(r.innerHTML=n),i=y(d),o=h(d,"DIV",{class:!0});var S=w(o);s&&s.l(S),S.forEach(p),g=y(d),c=h(d,"FOOTER",{class:!0,"data-svelte-h":!0}),M(c)!=="svelte-1uf7eux"&&(c.innerHTML=$),d.forEach(p),this.h()},h(){document.title="SLSA",k(r,"class","flex items-center justify-between bg-teal-500 w-full h-16 svelte-aor817"),k(o,"class","flex lg:justify-center ml-2 lg:ml-0"),k(c,"class","text-center text-sm text-primary-light my-2")},m(e,u){C(e,l,u),C(e,t,u),m(t,r),m(t,i),m(t,o),s&&s.m(o,null),m(t,g),m(t,c),f=!0},p(e,[u]){s&&s.p&&(!f||u&2)&&O(s,b,e,e[1],f?A(b,e[1],u,null):T(e[1]),null)},i(e){f||(H(s,e),f=!0)},o(e){N(s,e),f=!1},d(e){e&&(p(l),p(t)),s&&s.d(e)}}}function R(a,l,t){let{$$slots:r={},$$scope:n}=l;const i={};return a.$$set=o=>{"$$scope"in o&&t(1,n=o.$$scope)},[i,n,r]}class Q extends B{constructor(l){super(),E(this,l,R,J,L,{data:0})}get data(){return this.$$.ctx[0]}}export{Q as component,K as universal};
