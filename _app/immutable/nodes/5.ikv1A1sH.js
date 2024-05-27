import{s as K}from"../chunks/scheduler.lUutRtrL.js";import{S as L,i as M,e as w,s as j,c as b,b as E,g as x,h as I,d as p,l as y,a as R,j as _,m as C,n as J,o as V,p as A,q as Q,t as B,r as T,f as G,u as U,v as W,w as X,x as u,k as Y}from"../chunks/index.B4dXGHaY.js";import{e as D,R as $,F as Z}from"../chunks/rankings.CKNLI40f.js";function F(r,t,a){const i=r.slice();return i[1]=t[a],i}function H(r,t,a){const i=r.slice();return i[4]=t[a],i}function N(r){let t,a,i=(r[4].hm?"HM":r[4].rank)+"",d,m,o,s=r[0].db.fGetPlayerBySlug(r[4].player).tag+"",v,n;return{c(){t=w("div"),a=w("p"),d=B(i),m=j(),o=w("p"),v=B(s),n=j(),this.h()},l(l){t=b(l,"DIV",{class:!0});var e=E(t);a=b(e,"P",{class:!0});var g=E(a);d=G(g,i),g.forEach(p),m=I(e),o=b(e,"P",{class:!0});var h=E(o);v=G(h,s),h.forEach(p),n=I(e),e.forEach(p),this.h()},h(){y(a,"class","text-center min-w-6 svelte-1fxjn5i"),u(a,"hm",r[4].hm),u(a,"one",r[4].rank===1),u(a,"two",r[4].rank===2),u(a,"three",r[4].rank===3),y(o,"class","ml-2 svelte-1fxjn5i"),u(o,"hm",r[4].hm),u(o,"one",r[4].rank===1),u(o,"two",r[4].rank===2),u(o,"three",r[4].rank===3),y(t,"class","flex flex-row justify-start font-medium")},m(l,e){R(l,t,e),_(t,a),_(a,d),_(t,m),_(t,o),_(o,v),_(t,n)},p(l,e){e&0&&u(a,"hm",l[4].hm),e&0&&u(a,"one",l[4].rank===1),e&0&&u(a,"two",l[4].rank===2),e&0&&u(a,"three",l[4].rank===3),e&1&&s!==(s=l[0].db.fGetPlayerBySlug(l[4].player).tag+"")&&Y(v,s),e&0&&u(o,"hm",l[4].hm),e&0&&u(o,"one",l[4].rank===1),e&0&&u(o,"two",l[4].rank===2),e&0&&u(o,"three",l[4].rank===3)},d(l){l&&p(t)}}}function O(r){let t,a,i,d,m,o=$[r[1]].title+"",s,v,n,l,e;i=new Z({props:{country:$[r[1]].flag||$[r[1]].tag.toLowerCase()}});let g=D($[r[1]].players.sort(z)),h=[];for(let f=0;f<g.length;f+=1)h[f]=N(H(r,g,f));return{c(){t=w("div"),a=w("div"),Q(i.$$.fragment),d=j(),m=w("p"),s=B(o),v=j(),n=w("div");for(let f=0;f<h.length;f+=1)h[f].c();l=j(),this.h()},l(f){t=b(f,"DIV",{class:!0});var k=E(t);a=b(k,"DIV",{class:!0});var c=E(a);T(i.$$.fragment,c),d=I(c),m=b(c,"P",{class:!0});var P=E(m);s=G(P,o),P.forEach(p),c.forEach(p),v=I(k),n=b(k,"DIV",{class:!0});var q=E(n);for(let S=0;S<h.length;S+=1)h[S].l(q);q.forEach(p),l=I(k),k.forEach(p),this.h()},h(){y(m,"class","ml-2"),y(a,"class","flex flex-row w-full min-h-8 items-center bg-purple"),y(n,"class","grid grid-rows-5 grid-flow-col p-4"),y(t,"class","bg-primary-main w-full mb-12 p-4")},m(f,k){R(f,t,k),_(t,a),U(i,a,null),_(a,d),_(a,m),_(m,s),_(t,v),_(t,n);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(n,null);_(t,l),e=!0},p(f,k){if(k&1){g=D($[f[1]].players.sort(z));let c;for(c=0;c<g.length;c+=1){const P=H(f,g,c);h[c]?h[c].p(P,k):(h[c]=N(P),h[c].c(),h[c].m(n,null))}for(;c<h.length;c+=1)h[c].d(1);h.length=g.length}},i(f){e||(C(i.$$.fragment,f),e=!0)},o(f){V(i.$$.fragment,f),e=!1},d(f){f&&p(t),W(i),A(h,f)}}}function ee(r){let t,a,i="Rankings",d,m,o=D(Object.keys($).reverse()),s=[];for(let n=0;n<o.length;n+=1)s[n]=O(F(r,o,n));const v=n=>V(s[n],1,1,()=>{s[n]=null});return{c(){t=w("div"),a=w("h1"),a.textContent=i,d=j();for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){t=b(n,"DIV",{class:!0});var l=E(t);a=b(l,"H1",{class:!0,"data-svelte-h":!0}),x(a)!=="svelte-pl0w6z"&&(a.textContent=i),d=I(l);for(let e=0;e<s.length;e+=1)s[e].l(l);l.forEach(p),this.h()},h(){y(a,"class","text-4xl font-medium"),y(t,"class","grid grid-cols-1 w-full max-w-[1024px] m-8")},m(n,l){R(n,t,l),_(t,a),_(t,d);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,null);m=!0},p(n,[l]){if(l&1){o=D(Object.keys($).reverse());let e;for(e=0;e<o.length;e+=1){const g=F(n,o,e);s[e]?(s[e].p(g,l),C(s[e],1)):(s[e]=O(g),s[e].c(),C(s[e],1),s[e].m(t,null))}for(X(),e=o.length;e<s.length;e+=1)v(e);J()}},i(n){if(!m){for(let l=0;l<o.length;l+=1)C(s[l]);m=!0}},o(n){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)V(s[l]);m=!1},d(n){n&&p(t),A(s,n)}}}const z=(r,t)=>t.rank-r.rank;function te(r,t,a){let{data:i={}}=t;return r.$$set=d=>{"data"in d&&a(0,i=d.data)},[i]}class ne extends L{constructor(t){super(),M(this,t,te,ee,K,{data:0})}}export{ne as component};
