import{s as L,d as B,u as C,g as O,e as E}from"../chunks/scheduler.BMzRc5ua.js";import{S as G,i as P,s as k,e as h,D as T,f as g,b as w,c as b,a as S,v as M,g as $,h as j,j as _,k as A,m as D}from"../chunks/index.BoiQCscu.js";import{b as v}from"../chunks/paths.lgCngjfq.js";const H=!0,N="always";async function I({fetch:s,params:n}){const o=await(await s("/data.json")).json();return{db:R(o)}}function R(s){const n=l=>s.codeMap[l],t=l=>s.slugMap[l];return{fGetAccountByCode:n,fGetPlayerBySlug:t,fGetPlayerByCode:l=>{var i;const a=n(l);if(a!=null&&a.slug)return t(a.slug);for(const[c,m]of Object.entries(s.slugMap))if((i=m.slippiConnectCodes)!=null&&i.includes(l))return m;return null},fGetPlayerByDiscriminator:l=>{for(const[a,i]of Object.entries(s.slugMap))if(i.sgg===l)return i;return null},...s}}const K=Object.freeze(Object.defineProperty({__proto__:null,load:I,prerender:H,trailingSlash:N},Symbol.toStringTag,{value:"Module"}));function z(s){let n,t,o,f=`<div class="flex items-center flex-shrink-0 text-white mr-6 border-r-4 border-primary-dark px-8 h-16"><span class="font-semibold text-2xl tracking-tight">🐸 SLSA</span></div> <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"><div class="text-md lg:flex-grow"><a href="${`${v}/leaderboards`}" class="block lg:inline-block lg:mt-0 mr-4 svelte-aor817">Leaderboards</a> <a href="${`${v}/rankings`}" class="block lg:inline-block lg:mt-0 mr-4 svelte-aor817">Rankings</a> <a href="${`${v}/stats`}" class="block lg:inline-block lg:mt-0 mr-4 svelte-aor817">Stats</a> <a href="${`${v}/meleebr`}" class="block lg:inline-block lg:mt-0 mr-4 svelte-aor817">MELEEBR</a></div></div>`,l,a,i,c,m=`<p><a href="https://slippi.gg/#support" target="_blank" rel="noreferrer" class="svelte-aor817">Support Slippi</a>

      • Maintained by
      <a href="https://www.twitter.com/caioicy" target="_blank" rel="noreferrer" class="svelte-aor817">@caioicy</a>

      • Inspired by
      <a href="https://www.buymeacoffee.com/blorppppp" target="_blank" rel="noreferrer" class="svelte-aor817">blorppppp</a></p>`,u;const y=s[2].default,r=B(y,s,s[1],null);return{c(){n=k(),t=h("main"),o=h("nav"),o.innerHTML=f,l=k(),a=h("div"),r&&r.c(),i=k(),c=h("footer"),c.innerHTML=m,this.h()},l(e){T("svelte-y837zg",document.head).forEach(g),n=w(e),t=b(e,"MAIN",{});var p=S(t);o=b(p,"NAV",{class:!0,"data-svelte-h":!0}),M(o)!=="svelte-1w2191x"&&(o.innerHTML=f),l=w(p),a=b(p,"DIV",{class:!0});var x=S(a);r&&r.l(x),x.forEach(g),i=w(p),c=b(p,"FOOTER",{class:!0,"data-svelte-h":!0}),M(c)!=="svelte-1i18vfi"&&(c.innerHTML=m),p.forEach(g),this.h()},h(){document.title="SLSA",$(o,"class","flex items-center justify-between bg-teal-500 w-full h-16 svelte-aor817"),$(a,"class","flex lg:justify-center ml-2 lg:ml-0"),$(c,"class","text-center text-sm text-primary-light my-4")},m(e,d){j(e,n,d),j(e,t,d),_(t,o),_(t,l),_(t,a),r&&r.m(a,null),_(t,i),_(t,c),u=!0},p(e,[d]){r&&r.p&&(!u||d&2)&&C(r,y,e,e[1],u?E(y,e[1],d,null):O(e[1]),null)},i(e){u||(A(r,e),u=!0)},o(e){D(r,e),u=!1},d(e){e&&(g(n),g(t)),r&&r.d(e)}}}function J(s,n,t){let{$$slots:o={},$$scope:f}=n;const l={};return s.$$set=a=>{"$$scope"in a&&t(1,f=a.$$scope)},[l,f,o]}class Q extends G{constructor(n){super(),P(this,n,J,z,L,{data:0})}get data(){return this.$$.ctx[0]}}export{Q as component,K as universal};
