import{s as O,n as x,o as N}from"../chunks/scheduler.BBINyCwK.js";import{S as I,i as J,e as m,s as C,c as u,a as v,g as M,b as S,d as _,f as b,h as y,j as h,k as P,t as p,l as g,m as E}from"../chunks/index.DBJHe4ZM.js";import{e as k}from"../chunks/characterStock.svelte_svelte_type_style_lang.euvuoDlr.js";function j(f,e,n){const c=f.slice();return c[3]=e[n],c}function w(f){let e,n=f[3][1]+"",c,r,o=f[3][0]+"",i,a;return{c(){e=m("p"),c=p(n),r=p(", "),i=p(o),a=C()},l(t){e=u(t,"P",{});var s=v(e);c=g(s,n),r=g(s,", "),i=g(s,o),a=S(s),s.forEach(_)},m(t,s){y(t,e,s),h(e,c),h(e,r),h(e,i),h(e,a)},p(t,s){s&1&&n!==(n=t[3][1]+"")&&E(c,n),s&1&&o!==(o=t[3][0]+"")&&E(i,o)},d(t){t&&_(e)}}}function q(f){let e,n,c="MELEE BR",r,o,i=k(f[0]),a=[];for(let t=0;t<i.length;t+=1)a[t]=w(j(f,i,t));return{c(){e=m("section"),n=m("h1"),n.textContent=c,r=C(),o=m("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=u(t,"SECTION",{class:!0});var s=v(e);n=u(s,"H1",{class:!0,"data-svelte-h":!0}),M(n)!=="svelte-1k0zjps"&&(n.textContent=c),r=S(s),o=u(s,"DIV",{});var l=v(o);for(let d=0;d<a.length;d+=1)a[d].l(l);l.forEach(_),s.forEach(_),this.h()},h(){b(n,"class","text-4xl font-medium mb-2"),b(e,"class","grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] my-8")},m(t,s){y(t,e,s),h(e,n),h(e,r),h(e,o);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(o,null)},p(t,[s]){if(s&1){i=k(t[0]);let l;for(l=0;l<i.length;l+=1){const d=j(t,i,l);a[l]?a[l].p(d,s):(a[l]=w(d),a[l].c(),a[l].m(o,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=i.length}},i:x,o:x,d(t){t&&_(e),P(a,t)}}}function z(f,e,n){let{data:c={}}=e,r=[];return N(async()=>{const i=await(await fetch("/mbr.json")).json(),a=[];for(const[t,s]of Object.entries(i.data))a.push([s.total,t,s]);a.sort((t,s)=>s[0]-t[0]),n(0,r=a),console.log(r)}),f.$$set=o=>{"data"in o&&n(1,c=o.data)},[r,c]}class L extends I{constructor(e){super(),J(this,e,z,q,O,{data:1})}}export{L as component};
