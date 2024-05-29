import{s as j,d as S,u as M,g as z,e as q}from"../chunks/scheduler.BBINyCwK.js";import{S as L,i as C,e as d,s as y,c as m,a as w,g as x,b as k,d as _,f as h,h as O,j as u,t as T,l as B}from"../chunks/index.DwQYmpNp.js";import{b as $}from"../chunks/paths.B4GD9dvK.js";const A=!0,G="always";async function H({fetch:r,params:e}){const i=await(await r("/data.json")).json();return{db:N(i)}}function N(r){const e=l=>r.codeMap[l],a=l=>r.slugMap[l];return{fGetAccountByCode:e,fGetPlayerBySlug:a,fGetPlayerByCode:l=>{const n=e(l);return!n||!n.slug?null:a(n.slug)},...r}}const R=Object.freeze(Object.defineProperty({__proto__:null,load:H,prerender:A,trailingSlash:G},Symbol.toStringTag,{value:"Module"}));function P(r){let e,a,i=`<div class="flex items-center flex-shrink-0 text-white mr-6 border-r-4 border-primary-dark px-8 h-16"><span class="font-semibold text-2xl tracking-tight">🐸 SLSA</span></div> <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"><div class="text-md lg:flex-grow"><a href="${`${$}/leaderboards`}" class="block lg:inline-block lg:mt-0 mr-4 svelte-12zjpoq">Leaderboards</a> <a href="${`${$}/rankings`}" class="block lg:inline-block lg:mt-0 mr-4 svelte-12zjpoq">Rankings</a></div></div>`,l,n,p,c,b=`<p><a href="https://slippi.gg/#support" target="_blank" rel="noreferrer" class="svelte-12zjpoq">Support Slippi</a>

      • Maintained by
      <a href="https://www.twitter.com/caioicy" target="_blank" rel="noreferrer" class="svelte-12zjpoq">@caioicy</a>

      • Inspired by
      <a href="https://www.buymeacoffee.com/blorppppp" target="_blank" rel="noreferrer" class="svelte-12zjpoq">blorppppp</a></p>`,f;const g=r[2].default,s=S(g,r,r[1],null);return{c(){e=d("main"),a=d("nav"),a.innerHTML=i,l=y(),n=d("div"),s&&s.c(),p=y(),c=d("footer"),c.innerHTML=b,this.h()},l(t){e=m(t,"MAIN",{});var o=w(e);a=m(o,"NAV",{class:!0,"data-svelte-h":!0}),x(a)!=="svelte-xttbi8"&&(a.innerHTML=i),l=k(o),n=m(o,"DIV",{class:!0});var v=w(n);s&&s.l(v),v.forEach(_),p=k(o),c=m(o,"FOOTER",{class:!0,"data-svelte-h":!0}),x(c)!=="svelte-knmv9z"&&(c.innerHTML=b),o.forEach(_),this.h()},h(){h(a,"class","flex items-center justify-between bg-teal-500 w-screen h-16 svelte-12zjpoq"),h(n,"class","flex justify-center"),h(c,"class","text-center text-primary-light mt-4")},m(t,o){O(t,e,o),u(e,a),u(e,l),u(e,n),s&&s.m(n,null),u(e,p),u(e,c),f=!0},p(t,[o]){s&&s.p&&(!f||o&2)&&M(s,g,t,t[1],f?q(g,t[1],o,null):z(t[1]),null)},i(t){f||(T(s,t),f=!0)},o(t){B(s,t),f=!1},d(t){t&&_(e),s&&s.d(t)}}}function E(r,e,a){let{$$slots:i={},$$scope:l}=e;const n={};return r.$$set=p=>{"$$scope"in p&&a(1,l=p.$$scope)},[n,l,i]}class V extends L{constructor(e){super(),C(this,e,E,P,j,{data:0})}get data(){return this.$$.ctx[0]}}export{V as component,R as universal};
