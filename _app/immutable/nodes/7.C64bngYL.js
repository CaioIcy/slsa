import{s as ie,o as fe}from"../chunks/scheduler.BMzRc5ua.js";import{S as ue,i as he,e as I,s as V,r as O,a as j,b as P,g as de,d as M,u as B,h as y,j as p,k as Q,l as o,w as K,t as A,n as X,o as q,q as Y,c as ae,f as oe,m as ce,p as ne,z as U,A as J,v as Z}from"../chunks/index._m_Nnysb.js";import{e as T,F as me}from"../chunks/flag.BGrZi1Wb.js";import{C as _e}from"../chunks/characterStock.C5TeI9ZJ.js";function ee(f,t,l){const n=f.slice();return n[8]=t[l],n}function te(f,t,l){const n=f.slice();return n[11]=t[l],n}function re(f){let t,l,n,g,c=f[11][1]+"",k,w,b;return l=new me({props:{width:48,country:f[11][0]}}),{c(){t=I("div"),ae(l.$$.fragment),n=V(),g=I("p"),k=O(c),w=V(),this.h()},l(d){t=j(d,"DIV",{class:!0});var _=P(t);oe(l.$$.fragment,_),n=M(_),g=j(_,"P",{class:!0});var u=P(g);k=B(u,c),u.forEach(y),w=M(_),_.forEach(y),this.h()},h(){p(g,"class","text-lg"),p(t,"class","flex flex-col items-center mx-1 my-4")},m(d,_){Q(d,t,_),ce(l,t,null),o(t,n),o(t,g),o(g,k),o(t,w),b=!0},p(d,_){const u={};_&1&&(u.country=d[11][0]),l.$set(u),(!b||_&1)&&c!==(c=d[11][1]+"")&&K(k,c)},i(d){b||(A(l.$$.fragment,d),b=!0)},o(d){q(l.$$.fragment,d),b=!1},d(d){d&&y(t),ne(l)}}}function se(f){let t,l,n,g,c,k,w,b,d,_,u,N=le(f[8][0])+"",C,z,x=Number((100*f[8][1]/f[3]).toFixed(1))+"",D,S,v,i;return d=new _e({props:{character:f[8][0]}}),{c(){t=I("div"),l=I("div"),n=U("svg"),g=U("circle"),c=U("circle"),w=V(),b=I("div"),ae(d.$$.fragment),_=V(),u=I("span"),C=O(N),z=O(" ("),D=O(x),S=O("%)"),v=V(),this.h()},l(h){t=j(h,"DIV",{class:!0});var r=P(t);l=j(r,"DIV",{class:!0});var E=P(l);n=J(E,"svg",{class:!0,viewBox:!0,transform:!0});var F=P(n);g=J(F,"circle",{class:!0,cx:!0,cy:!0,r:!0}),P(g).forEach(y),c=J(F,"circle",{class:!0,cx:!0,cy:!0,r:!0,"stroke-dasharray":!0}),P(c).forEach(y),F.forEach(y),w=M(E),b=j(E,"DIV",{class:!0});var m=P(b);oe(d.$$.fragment,m),m.forEach(y),_=M(E),u=j(E,"SPAN",{class:!0});var G=P(u);C=B(G,N),z=B(G," ("),D=B(G,x),S=B(G,"%)"),G.forEach(y),E.forEach(y),v=M(r),r.forEach(y),this.h()},h(){p(g,"class","progress-background svelte-gcvfa3"),p(g,"cx","50"),p(g,"cy","50"),p(g,"r","45"),p(c,"class","progress-bar svelte-gcvfa3"),p(c,"cx","50"),p(c,"cy","50"),p(c,"r","45"),p(c,"stroke-dasharray",k=f[6](f[8][1])+" 283"),p(n,"class","absolute z-10 sized-40 progress svelte-gcvfa3"),p(n,"viewBox","0 0 100 100"),p(n,"transform","scale(-1, 1) rotate(-90)"),p(b,"class","z-20 w-max h-max"),p(u,"class","tooltip rounded shadow-lg p-1 bg-primary-contrastText text-primary-dark mt-[64px] text-xs svelte-gcvfa3"),p(l,"class","sized-40 m-4 flex items-center justify-center has-tooltip svelte-gcvfa3"),p(t,"class","flex sized-48 items-center justify-center svelte-gcvfa3")},m(h,r){Q(h,t,r),o(t,l),o(l,n),o(n,g),o(n,c),o(l,w),o(l,b),ce(d,b,null),o(l,_),o(l,u),o(u,C),o(u,z),o(u,D),o(u,S),o(t,v),i=!0},p(h,r){(!i||r&2&&k!==(k=h[6](h[8][1])+" 283"))&&p(c,"stroke-dasharray",k);const E={};r&2&&(E.character=h[8][0]),d.$set(E),(!i||r&2)&&N!==(N=le(h[8][0])+"")&&K(C,N),(!i||r&10)&&x!==(x=Number((100*h[8][1]/h[3]).toFixed(1))+"")&&K(D,x)},i(h){i||(A(d.$$.fragment,h),i=!0)},o(h){q(d.$$.fragment,h),i=!1},d(h){h&&y(t),ne(d)}}}function pe(f){let t,l,n="Stats",g,c,k,w,b,d,_,u,N,C,z,x,D,S,v,i=f[5]&&!1,h=T(f[0]),r=[];for(let s=0;s<h.length;s+=1)r[s]=re(te(f,h,s));const E=s=>q(r[s],1,1,()=>{r[s]=null});let F=T(f[1]),m=[];for(let s=0;s<F.length;s+=1)m[s]=se(ee(f,F,s));const G=s=>q(m[s],1,1,()=>{m[s]=null});return{c(){t=I("section"),l=I("h1"),l.textContent=n,g=V(),c=I("div"),k=I("p"),w=O("Sets: "),b=O(f[2]),d=V(),_=I("p"),u=O("Games: "),N=O(f[3]),C=V(),i&&i.c(),z=V(),x=I("div");for(let s=0;s<r.length;s+=1)r[s].c();D=V(),S=I("div");for(let s=0;s<m.length;s+=1)m[s].c();this.h()},l(s){t=j(s,"SECTION",{class:!0});var a=P(t);l=j(a,"H1",{class:!0,"data-svelte-h":!0}),de(l)!=="svelte-gmp7if"&&(l.textContent=n),g=M(a),c=j(a,"DIV",{class:!0});var e=P(c);k=j(e,"P",{});var $=P(k);w=B($,"Sets: "),b=B($,f[2]),$.forEach(y),d=M(e),_=j(e,"P",{});var L=P(_);u=B(L,"Games: "),N=B(L,f[3]),L.forEach(y),C=M(e),i&&i.l(e),e.forEach(y),z=M(a),x=j(a,"DIV",{class:!0});var R=P(x);for(let H=0;H<r.length;H+=1)r[H].l(R);R.forEach(y),D=M(a),S=j(a,"DIV",{class:!0});var W=P(S);for(let H=0;H<m.length;H+=1)m[H].l(W);W.forEach(y),a.forEach(y),this.h()},h(){p(l,"class","text-4xl font-medium mb-2"),p(c,"class","flex flex-row bg-primary-main justify-evenly my-2"),p(x,"class","grid grid-cols-6 bg-primary-main my-2 place-items-center"),p(S,"class","grid grid-cols-7 bg-primary-main my-2 place-items-center"),p(t,"class","grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] my-8")},m(s,a){Q(s,t,a),o(t,l),o(t,g),o(t,c),o(c,k),o(k,w),o(k,b),o(c,d),o(c,_),o(_,u),o(_,N),o(c,C),i&&i.m(c,null),o(t,z),o(t,x);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(x,null);o(t,D),o(t,S);for(let e=0;e<m.length;e+=1)m[e]&&m[e].m(S,null);v=!0},p(s,[a]){if((!v||a&4)&&K(b,s[2]),(!v||a&8)&&K(N,s[3]),s[5],i&&(i.d(1),i=null),a&1){h=T(s[0]);let e;for(e=0;e<h.length;e+=1){const $=te(s,h,e);r[e]?(r[e].p($,a),A(r[e],1)):(r[e]=re($),r[e].c(),A(r[e],1),r[e].m(x,null))}for(Z(),e=h.length;e<r.length;e+=1)E(e);X()}if(a&74){F=T(s[1]);let e;for(e=0;e<F.length;e+=1){const $=ee(s,F,e);m[e]?(m[e].p($,a),A(m[e],1)):(m[e]=se($),m[e].c(),A(m[e],1),m[e].m(S,null))}for(Z(),e=F.length;e<m.length;e+=1)G(e);X()}},i(s){if(!v){for(let a=0;a<h.length;a+=1)A(r[a]);for(let a=0;a<F.length;a+=1)A(m[a]);v=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)q(r[a]);m=m.filter(Boolean);for(let a=0;a<m.length;a+=1)q(m[a]);v=!1},d(s){s&&y(t),i&&i.d(),Y(r,s),Y(m,s)}}}function le(f){return f.toLowerCase().split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function ge(f,t,l){let{data:n={}}=t,g=[],c=[],k=0,w=1,b=0;function d(u){return u*283/w}let _=!1;return fe(async()=>{var S;let u=0,N=0;const C={},z={};for(const v of n.db.leaderboard){const i=n.db.codeMap[v].slug,h=((S=n.db.slugMap[i])==null?void 0:S.countryCode)||"xx";h in C||(C[h]=0),C[h]+=1;const r=n.db.codeMap[v].account;for(const E of r.rankedNetplayProfile.characters)E.character in z||(z[E.character]=0),z[E.character]+=E.gameCount,l(3,w+=E.gameCount);l(2,k+=r.rankedNetplayProfile.wins+r.rankedNetplayProfile.losses),u+=r.rankedNetplayProfile.wins,N+=r.rankedNetplayProfile.losses}const x=[];for(const[v,i]of Object.entries(C))v!="xx"&&x.push([v,i]);x.sort((v,i)=>i[1]-v[1]),"xx"in C&&x.push(["xx",C.xx]),l(0,g=x);const D=[];for(const[v,i]of Object.entries(z))D.push([v,i]);D.sort((v,i)=>i[1]-v[1]),l(1,c=D),l(4,b=100-100*(Math.abs(u-N)/Math.max(u,N))),l(5,_=!0)}),f.$$set=u=>{"data"in u&&l(7,n=u.data)},[g,c,k,w,b,_,d,n]}class ye extends ue{constructor(t){super(),he(this,t,ge,pe,ie,{data:7})}}export{ye as component};
