var xe=Object.defineProperty;var Ae=(r,e,l)=>e in r?xe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[e]=l;var pe=(r,e,l)=>(Ae(r,typeof e!="symbol"?e+"":e,l),l);import{s as ae,n as Z,o as be,r as Ve}from"../chunks/scheduler.BMzRc5ua.js";import{S as ne,i as oe,e as g,n as L,s as D,c as b,a as E,p as q,d as v,b as T,f as _,h as z,j as h,w as Y,x as H,g as U,u as ke,l as K,k as we,t as F,y as $e,o as J,q as Q,r as X,v as ee,z as _e,A as ge,E as ce}from"../chunks/index.Cy7HWZkL.js";import{e as fe,u as qe,o as Se}from"../chunks/each.r4O2nWSO.js";import{C as He}from"../chunks/cellPlayer.CfTdK-1f.js";import{R as Ue}from"../chunks/rankIcon.BtgN8J26.js";import{C as Oe}from"../chunks/characterStock.DRh1g3KM.js";function Ke(r){let e,l,t=Math.abs(r[0].diff.rank)+"",s;return{c(){e=g("div"),l=g("p"),s=L(t),this.h()},l(a){e=b(a,"DIV",{});var n=E(e);l=b(n,"P",{class:!0});var o=E(l);s=q(o,t),o.forEach(v),n.forEach(v),this.h()},h(){_(l,"class","text-sm font-bold svelte-166ajc"),H(l,"rankDown",r[0].diff.rank<0),H(l,"rankUp",r[0].diff.rank>0)},m(a,n){z(a,e,n),h(e,l),h(l,s)},p(a,n){n&1&&t!==(t=Math.abs(a[0].diff.rank)+"")&&Y(s,t),n&1&&H(l,"rankDown",a[0].diff.rank<0),n&1&&H(l,"rankUp",a[0].diff.rank>0)},d(a){a&&v(e)}}}function Fe(r){let e,l='<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="rgb(242, 201, 76)" class="svelte-166ajc"><path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"></path></svg> <p class="text-sm text-yellow font-bold ml-1">NEW!</p>';return{c(){e=g("div"),e.innerHTML=l,this.h()},l(t){e=b(t,"DIV",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-1uasq6l"&&(e.innerHTML=l),this.h()},h(){_(e,"class","flex flex-row justify-center items-center")},m(t,s){z(t,e,s)},p:Z,d(t){t&&v(e)}}}function Ye(r){let e,l,t=r[0].rank+"",s,a;function n(m,d){if(m[0].diff.isNew)return Fe;if(m[0].diff.rank>0)return Ke}let o=n(r),f=o&&o(r);return{c(){e=g("div"),l=g("p"),s=L(t),a=D(),f&&f.c(),this.h()},l(m){e=b(m,"DIV",{});var d=E(e);l=b(d,"P",{class:!0});var u=E(l);s=q(u,t),u.forEach(v),a=T(d),f&&f.l(d),d.forEach(v),this.h()},h(){_(l,"class","text-xl font-bold")},m(m,d){z(m,e,d),h(e,l),h(l,s),h(e,a),f&&f.m(e,null)},p(m,[d]){d&1&&t!==(t=m[0].rank+"")&&Y(s,t),o===(o=n(m))&&f?f.p(m,d):(f&&f.d(1),f=o&&o(m),f&&(f.c(),f.m(e,null)))},i:Z,o:Z,d(m){m&&v(e),f&&f.d()}}}function We(r,e,l){let{slippi:t={}}=e;return r.$$set=s=>{"slippi"in s&&l(0,t=s.slippi)},[t]}class Ze extends ne{constructor(e){super(),oe(this,e,We,Ye,ae,{slippi:0})}}function Je(r){let e;return{c(){e=g("div"),this.h()},l(l){e=b(l,"DIV",{class:!0}),E(e).forEach(v),this.h()},h(){_(e,"class","rank-icon-placeholder svelte-108sy99")},m(l,t){z(l,e,t)},p:Z,i:Z,o:Z,d(l){l&&v(e)}}}function Qe(r){let e,l;return e=new Ue({props:{key:r[4](r[0].db.fGetAccountByCode(r[1]).account).ic}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,s){X(e,t,s),l=!0},p(t,s){const a={};s&3&&(a.key=t[4](t[0].db.fGetAccountByCode(t[1]).account).ic),e.$set(a)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){K(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Pe(r){let e;function l(a,n){return a[3]>0?et:Xe}let t=l(r),s=t(r);return{c(){s.c(),e=$e()},l(a){s.l(a),e=$e()},m(a,n){s.m(a,n),z(a,e,n)},p(a,n){t===(t=l(a))&&s?s.p(a,n):(s.d(1),s=t(a),s&&(s.c(),s.m(e.parentNode,e)))},d(a){a&&v(e),s.d(a)}}}function Xe(r){let e,l;return{c(){e=g("p"),l=L(r[3]),this.h()},l(t){e=b(t,"P",{class:!0});var s=E(e);l=q(s,r[3]),s.forEach(v),this.h()},h(){_(e,"class","font-medium ml-2 text-red")},m(t,s){z(t,e,s),h(e,l)},p(t,s){s&8&&Y(l,t[3])},d(t){t&&v(e)}}}function et(r){let e,l,t;return{c(){e=g("p"),l=L("+"),t=L(r[3]),this.h()},l(s){e=b(s,"P",{class:!0});var a=E(e);l=q(a,"+"),t=q(a,r[3]),a.forEach(v),this.h()},h(){_(e,"class","font-medium ml-2 text-green")},m(s,a){z(s,e,a),h(e,l),h(e,t)},p(s,a){a&8&&Y(t,s[3])},d(s){s&&v(e)}}}function tt(r){var N;let e,l,t,s,a,n,o,f,m=Math.floor(r[0].db.fGetAccountByCode(r[1]).account.rankedNetplayProfile.ratingOrdinal)+"",d,u,i=r[2]&&r[3]!=0&&!r[0].db.fGetAccountByCode(r[1]).diff.isNew,c,p,k=((N=r[4](r[0].db.fGetAccountByCode(r[1]).account).name)==null?void 0:N.toUpperCase())+"",w,R;const x=[Qe,Je],y=[];function C(I,B){return I[2]?0:1}t=C(r),s=y[t]=x[t](r);let M=i&&Pe(r);return{c(){e=g("div"),l=g("div"),s.c(),a=D(),n=g("div"),o=g("div"),f=g("p"),d=L(m),u=D(),M&&M.c(),c=D(),p=g("p"),w=L(k),this.h()},l(I){e=b(I,"DIV",{class:!0});var B=E(e);l=b(B,"DIV",{class:!0});var j=E(l);s.l(j),j.forEach(v),a=T(B),n=b(B,"DIV",{class:!0});var A=E(n);o=b(A,"DIV",{class:!0});var G=E(o);f=b(G,"P",{class:!0});var te=E(f);d=q(te,m),te.forEach(v),u=T(G),M&&M.l(G),G.forEach(v),c=T(A),p=b(A,"P",{class:!0});var O=E(p);w=q(O,k),O.forEach(v),A.forEach(v),B.forEach(v),this.h()},h(){_(l,"class",""),_(f,"class","text-lg font-bold"),_(o,"class","flex flex-row items-center"),_(p,"class","font-normal text-sm text-primary-light"),_(n,"class","flex flex-col items-start ml-2"),_(e,"class","flex flex-row items-center")},m(I,B){z(I,e,B),h(e,l),y[t].m(l,null),h(e,a),h(e,n),h(n,o),h(o,f),h(f,d),h(o,u),M&&M.m(o,null),h(n,c),h(n,p),h(p,w),R=!0},p(I,[B]){var A;let j=t;t=C(I),t===j?y[t].p(I,B):(ke(),K(y[j],1,1,()=>{y[j]=null}),we(),s=y[t],s?s.p(I,B):(s=y[t]=x[t](I),s.c()),F(s,1),s.m(l,null)),(!R||B&3)&&m!==(m=Math.floor(I[0].db.fGetAccountByCode(I[1]).account.rankedNetplayProfile.ratingOrdinal)+"")&&Y(d,m),B&15&&(i=I[2]&&I[3]!=0&&!I[0].db.fGetAccountByCode(I[1]).diff.isNew),i?M?M.p(I,B):(M=Pe(I),M.c(),M.m(o,null)):M&&(M.d(1),M=null),(!R||B&3)&&k!==(k=((A=I[4](I[0].db.fGetAccountByCode(I[1]).account).name)==null?void 0:A.toUpperCase())+"")&&Y(w,k)},i(I){R||(F(s),R=!0)},o(I){K(s),R=!1},d(I){I&&v(e),y[t].d(),M&&M.d()}}}const Ne=5;function lt(r,e,l){let{data:t={}}=e,{code:s}=e,a=!1;const n=c=>c.rankedNetplayProfile.wins+c.rankedNetplayProfile.losses;class o{constructor(){pe(this,"ic","PN");pe(this,"name","Pending")}isRank(p){const k=n(p);return 0<k&&k<Ne}}class f{constructor(p,k,w,R){this.ic=p,this.name=k,this.lowerBound=w,this.upperBound=R}isRank(p){if(n(p)<Ne)return!1;const k=Math.floor(100*p.rankedNetplayProfile.ratingOrdinal)/100;return this.lowerBound<=k&&k<=this.upperBound}}class m extends f{constructor(){super("GM","Grandmaster",2191.75,1/0)}isRank(p){return super.isRank(p)?p.rankedNetplayProfile.dailyGlobalPlacement!==null||p.rankedNetplayProfile.dailyRegionalPlacement!==null:!1}}function d(c){for(let p=u.length-1;p>=0;p--)if(u[p].isRank(c))return u[p];return new NoneRank}const u=[new o,new f("B1","Bronze I",0,765.42),new f("B2","Bronze II",765.43,913.71),new f("B3","Bronze III",913.72,1054.86),new f("S1","Silver I",1054.87,1188.87),new f("S2","Silver II",1188.88,1315.74),new f("S3","Silver III",1315.75,1435.47),new f("G1","Gold I",1435.48,1548.06),new f("G2","Gold II",1548.07,1653.51),new f("G3","Gold III",1653.52,1751.82),new f("P1","Platinum I",1751.83,1842.99),new f("P2","Platinum II",1843,1927.02),new f("P3","Platinum III",1927.03,2003.91),new f("D1","Diamond I",2003.92,2073.66),new f("D2","Diamond II",2073.67,2136.27),new f("D3","Diamond III",2136.28,2191.74),new f("M1","Master I",2191.75,2274.99),new f("M2","Master II",2275,2350),new f("M3","Master III",2350,1/0),new m];let i=0;return be(async()=>{l(2,a=!0),l(3,i=Math.floor(t.db.fGetAccountByCode(s).diff.elo))}),r.$$set=c=>{"data"in c&&l(0,t=c.data),"code"in c&&l(1,s=c.code)},[t,s,a,i,d,u]}class st extends ne{constructor(e){super(),oe(this,e,lt,tt,ae,{data:0,code:1,RANKS:5})}get RANKS(){return this.$$.ctx[5]}}function Be(r,e,l){const t=r.slice();return t[8]=e[l],t}function De(r){let e,l='<div class="sized-40 m-4 flex items-center justify-center has-tooltip svelte-owq861"><svg class="absolute z-10 sized-40 progress svelte-owq861" viewBox="0 0 100 100" transform="scale(-1, 1) rotate(-90)"><circle class="progress-background svelte-owq861" cx="50" cy="50" r="45"></circle></svg></div>',t,s,a='<div class="sized-40 m-4 flex items-center justify-center has-tooltip svelte-owq861"><svg class="absolute z-10 sized-40 progress svelte-owq861" viewBox="0 0 100 100" transform="scale(-1, 1) rotate(-90)"><circle class="progress-background-placeholder svelte-owq861" cx="50" cy="50" r="45"></circle></svg></div>',n,o,f='<div class="sized-40 m-4 flex items-center justify-center has-tooltip svelte-owq861"><svg class="absolute z-10 sized-40 progress svelte-owq861" viewBox="0 0 100 100" transform="scale(-1, 1) rotate(-90)"><circle class="progress-background-placeholder svelte-owq861" cx="50" cy="50" r="45"></circle></svg></div>',m,d,u='<div class="sized-40 m-4 flex items-center justify-center has-tooltip svelte-owq861"><svg class="absolute z-10 sized-40 progress svelte-owq861" viewBox="0 0 100 100" transform="scale(-1, 1) rotate(-90)"><circle class="progress-background-placeholder svelte-owq861" cx="50" cy="50" r="45"></circle></svg></div>';return{c(){e=g("div"),e.innerHTML=l,t=D(),s=g("div"),s.innerHTML=a,n=D(),o=g("div"),o.innerHTML=f,m=D(),d=g("div"),d.innerHTML=u,this.h()},l(i){e=b(i,"DIV",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-s6rhx0"&&(e.innerHTML=l),t=T(i),s=b(i,"DIV",{class:!0,"data-svelte-h":!0}),U(s)!=="svelte-1n2xegc"&&(s.innerHTML=a),n=T(i),o=b(i,"DIV",{class:!0,"data-svelte-h":!0}),U(o)!=="svelte-1n2xegc"&&(o.innerHTML=f),m=T(i),d=b(i,"DIV",{class:!0,"data-svelte-h":!0}),U(d)!=="svelte-1n2xegc"&&(d.innerHTML=u),this.h()},h(){_(e,"class","flex sized-48 items-center justify-center svelte-owq861"),_(s,"class","flex sized-48 items-center justify-center svelte-owq861"),_(o,"class","flex sized-48 items-center justify-center svelte-owq861"),_(d,"class","flex sized-48 items-center justify-center svelte-owq861")},m(i,c){z(i,e,c),z(i,t,c),z(i,s,c),z(i,n,c),z(i,o,c),z(i,m,c),z(i,d,c)},d(i){i&&(v(e),v(t),v(s),v(n),v(o),v(m),v(d))}}}function Te(r,e){let l,t,s,a,n,o,f,m,d,u,i,c=ze(e[8].character)+"",p,k,w=e[4](e[8].character)+"",R,x,y;return d=new Oe({props:{character:e[8].character}}),{key:r,first:null,c(){l=g("div"),t=g("div"),s=_e("svg"),a=_e("circle"),n=_e("circle"),f=D(),m=g("div"),J(d.$$.fragment),u=D(),i=g("span"),p=L(c),k=L(" ("),R=L(w),x=L("%)"),this.h()},l(C){l=b(C,"DIV",{class:!0});var M=E(l);t=b(M,"DIV",{class:!0});var N=E(t);s=ge(N,"svg",{class:!0,viewBox:!0,transform:!0});var I=E(s);a=ge(I,"circle",{class:!0,cx:!0,cy:!0,r:!0}),E(a).forEach(v),n=ge(I,"circle",{class:!0,cx:!0,cy:!0,r:!0,"stroke-dasharray":!0}),E(n).forEach(v),I.forEach(v),f=T(N),m=b(N,"DIV",{class:!0});var B=E(m);Q(d.$$.fragment,B),B.forEach(v),u=T(N),i=b(N,"SPAN",{class:!0});var j=E(i);p=q(j,c),k=q(j," ("),R=q(j,w),x=q(j,"%)"),j.forEach(v),N.forEach(v),M.forEach(v),this.h()},h(){_(a,"class","progress-background svelte-owq861"),_(a,"cx","50"),_(a,"cy","50"),_(a,"r","45"),_(n,"class","progress-bar svelte-owq861"),_(n,"cx","50"),_(n,"cy","50"),_(n,"r","45"),_(n,"stroke-dasharray",o=e[3](e[8].character)+" 283"),_(s,"class","absolute z-10 sized-40 progress svelte-owq861"),_(s,"viewBox","0 0 100 100"),_(s,"transform","scale(-1, 1) rotate(-90)"),_(m,"class","z-20 w-max h-max"),_(i,"class","tooltip rounded shadow-lg p-1 bg-primary-contrastText text-primary-dark mt-[64px] text-xs svelte-owq861"),_(t,"class","sized-40 m-4 flex items-center justify-center has-tooltip svelte-owq861"),_(l,"class","flex sized-48 items-center justify-center svelte-owq861"),this.first=l},m(C,M){z(C,l,M),h(l,t),h(t,s),h(s,a),h(s,n),h(t,f),h(t,m),X(d,m,null),h(t,u),h(t,i),h(i,p),h(i,k),h(i,R),h(i,x),y=!0},p(C,M){e=C,(!y||M&4&&o!==(o=e[3](e[8].character)+" 283"))&&_(n,"stroke-dasharray",o);const N={};M&4&&(N.character=e[8].character),d.$set(N),(!y||M&4)&&c!==(c=ze(e[8].character)+"")&&Y(p,c),(!y||M&4)&&w!==(w=e[4](e[8].character)+"")&&Y(R,w)},i(C){y||(F(d.$$.fragment,C),y=!0)},o(C){K(d.$$.fragment,C),y=!1},d(C){C&&v(l),ee(d)}}}function je(r){let e,l,t,s,a,n=r[1].length-re+"",o,f,m,d="more";return{c(){e=g("div"),l=g("div"),t=g("div"),s=g("p"),a=L("+ "),o=L(n),f=D(),m=g("p"),m.textContent=d,this.h()},l(u){e=b(u,"DIV",{class:!0});var i=E(e);l=b(i,"DIV",{class:!0});var c=E(l);t=b(c,"DIV",{class:!0});var p=E(t);s=b(p,"P",{class:!0});var k=E(s);a=q(k,"+ "),o=q(k,n),k.forEach(v),f=T(p),m=b(p,"P",{class:!0,"data-svelte-h":!0}),U(m)!=="svelte-1gah9d"&&(m.textContent=d),p.forEach(v),c.forEach(v),i.forEach(v),this.h()},h(){_(s,"class","text-[10px]"),_(m,"class","text-[10px]"),_(t,"class","flex flex-col sized-40 items-center text-primary-light more-chars align-center justify-center leading-tight svelte-owq861"),_(l,"class","sized-40 m-4 flex items-center justify-center svelte-owq861"),_(e,"class","flex sized-48 items-center justify-center svelte-owq861")},m(u,i){z(u,e,i),h(e,l),h(l,t),h(t,s),h(s,a),h(s,o),h(t,f),h(t,m)},p(u,i){i&2&&n!==(n=u[1].length-re+"")&&Y(o,n)},d(u){u&&v(e)}}}function rt(r){let e,l,t=[],s=new Map,a,n,o=!r[0]&&De(),f=fe(r[2]);const m=u=>u[8].character;for(let u=0;u<f.length;u+=1){let i=Be(r,f,u),c=m(i);s.set(c,t[u]=Te(c,i))}let d=r[1].length>re&&je(r);return{c(){e=g("div"),o&&o.c(),l=D();for(let u=0;u<t.length;u+=1)t[u].c();a=D(),d&&d.c(),this.h()},l(u){e=b(u,"DIV",{class:!0});var i=E(e);o&&o.l(i),l=T(i);for(let c=0;c<t.length;c+=1)t[c].l(i);a=T(i),d&&d.l(i),i.forEach(v),this.h()},h(){_(e,"class","flex flex-row items-center align-center justify-start")},m(u,i){z(u,e,i),o&&o.m(e,null),h(e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);h(e,a),d&&d.m(e,null),n=!0},p(u,[i]){u[0]?o&&(o.d(1),o=null):o||(o=De(),o.c(),o.m(e,l)),i&28&&(f=fe(u[2]),ke(),t=qe(t,i,m,1,u,f,s,e,Se,Te,a,Be),we()),u[1].length>re?d?d.p(u,i):(d=je(u),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(u){if(!n){for(let i=0;i<f.length;i+=1)F(t[i]);n=!0}},o(u){for(let i=0;i<t.length;i+=1)K(t[i]);n=!1},d(u){u&&v(e),o&&o.d();for(let i=0;i<t.length;i+=1)t[i].d();d&&d.d()}}}const re=3;function ze(r){return r.toLowerCase().split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function at(r,e,l){let{data:t={}}=e,{code:s=""}=e,a=!1,n=1,o=[],f=[];function m(u){return t.db.codeMap[s].account.rankedNetplayProfile.characters.find(c=>c.character===u).gameCount*283/n}function d(u){const c=100*(t.db.codeMap[s].account.rankedNetplayProfile.characters.find(p=>p.character===u).gameCount/n);return Number(c.toFixed(1))}return be(async()=>{n=t.db.codeMap[s].account.rankedNetplayProfile.characters.reduce((u,i)=>u+i.gameCount,0),l(1,o=(t.db.codeMap[s].account.rankedNetplayProfile.characters||[]).sort((u,i)=>i.gameCount-u.gameCount)),l(2,f=o.slice(0,re)),l(0,a=!0)}),r.$$set=u=>{"data"in u&&l(5,t=u.data),"code"in u&&l(6,s=u.code)},[a,o,f,m,d,t,s]}class nt extends ne{constructor(e){super(),oe(this,e,at,rt,ae,{data:5,code:6})}}function ot(r){let e,l,t;return{c(){e=g("div"),l=g("p"),t=L(r[0]),this.h()},l(s){e=b(s,"DIV",{});var a=E(e);l=b(a,"P",{class:!0});var n=E(l);t=q(n,r[0]),n.forEach(v),a.forEach(v),this.h()},h(){_(l,"class","text-lg font-semibold text-center text-primary-light")},m(s,a){z(s,e,a),h(e,l),h(l,t)},p(s,[a]){a&1&&Y(t,s[0])},i:Z,o:Z,d(s){s&&v(e)}}}function it(r,e,l){let{sets:t=0}=e;return r.$$set=s=>{"sets"in s&&l(0,t=s.sets)},[t]}class ct extends ne{constructor(e){super(),oe(this,e,it,ot,ae,{sets:0})}}function Re(r,e,l){const t=r.slice();return t[11]=e[l],t[13]=l,t}function Ge(r){let e,l,t=r[4](r[0].db.timestamp)+"",s,a;return{c(){e=g("p"),l=L("Updated "),s=L(t),a=L(" ago"),this.h()},l(n){e=b(n,"P",{class:!0});var o=E(e);l=q(o,"Updated "),s=q(o,t),a=q(o," ago"),o.forEach(v),this.h()},h(){_(e,"class","text-primary-light")},m(n,o){z(n,e,o),h(e,l),h(e,s),h(e,a)},p(n,o){o&1&&t!==(t=n[4](n[0].db.timestamp)+"")&&Y(s,t)},d(n){n&&v(e)}}}function Le(r,e){let l,t,s,a,n,o,f,m,d,u,i,c,p,k,w,R,x;return s=new Ze({props:{slippi:e[0].db.codeMap[e[11]]}}),o=new He({props:{data:e[0],code:e[11]}}),d=new nt({props:{data:e[0],code:e[11]}}),c=new st({props:{data:e[0],code:e[11]}}),w=new ct({props:{sets:Math.max(e[0].db.codeMap[e[11]].account.rankedNetplayProfile.wins+e[0].db.codeMap[e[11]].account.rankedNetplayProfile.losses,e[0].db.codeMap[e[11]].account.rankedNetplayProfile.ratingUpdateCount)}}),{key:r,first:null,c(){l=g("tr"),t=g("td"),J(s.$$.fragment),a=D(),n=g("td"),J(o.$$.fragment),f=D(),m=g("td"),J(d.$$.fragment),u=D(),i=g("td"),J(c.$$.fragment),p=D(),k=g("td"),J(w.$$.fragment),R=D(),this.h()},l(y){l=b(y,"TR",{class:!0});var C=E(l);t=b(C,"TD",{class:!0});var M=E(t);Q(s.$$.fragment,M),M.forEach(v),a=T(C),n=b(C,"TD",{class:!0});var N=E(n);Q(o.$$.fragment,N),N.forEach(v),f=T(C),m=b(C,"TD",{class:!0});var I=E(m);Q(d.$$.fragment,I),I.forEach(v),u=T(C),i=b(C,"TD",{class:!0});var B=E(i);Q(c.$$.fragment,B),B.forEach(v),p=T(C),k=b(C,"TD",{class:!0});var j=E(k);Q(w.$$.fragment,j),j.forEach(v),R=T(C),C.forEach(v),this.h()},h(){_(t,"class","text-center svelte-jd56ox"),_(n,"class"," svelte-jd56ox"),_(m,"class"," svelte-jd56ox"),_(i,"class"," svelte-jd56ox"),_(k,"class"," svelte-jd56ox"),_(l,"class","bg-primary-main max-h-[64px]"),this.first=l},m(y,C){z(y,l,C),h(l,t),X(s,t,null),h(l,a),h(l,n),X(o,n,null),h(l,f),h(l,m),X(d,m,null),h(l,u),h(l,i),X(c,i,null),h(l,p),h(l,k),X(w,k,null),h(l,R),x=!0},p(y,C){e=y;const M={};C&15&&(M.slippi=e[0].db.codeMap[e[11]]),s.$set(M);const N={};C&1&&(N.data=e[0]),C&15&&(N.code=e[11]),o.$set(N);const I={};C&1&&(I.data=e[0]),C&15&&(I.code=e[11]),d.$set(I);const B={};C&1&&(B.data=e[0]),C&15&&(B.code=e[11]),c.$set(B);const j={};C&15&&(j.sets=Math.max(e[0].db.codeMap[e[11]].account.rankedNetplayProfile.wins+e[0].db.codeMap[e[11]].account.rankedNetplayProfile.losses,e[0].db.codeMap[e[11]].account.rankedNetplayProfile.ratingUpdateCount)),w.$set(j)},i(y){x||(F(s.$$.fragment,y),F(o.$$.fragment,y),F(d.$$.fragment,y),F(c.$$.fragment,y),F(w.$$.fragment,y),x=!0)},o(y){K(s.$$.fragment,y),K(o.$$.fragment,y),K(d.$$.fragment,y),K(c.$$.fragment,y),K(w.$$.fragment,y),x=!1},d(y){y&&v(l),ee(s),ee(o),ee(d),ee(c),ee(w)}}}function ft(r){let e,l,t="Leaderboards",s,a,n,o,f="All",m,d,u="Brazil",i,c,p="Chile",k,w,R="Other",x,y,C,M,N,I,B='<tr class="text-primary-light bg-primary-main"><th class=" svelte-jd56ox">RANK</th> <th class=" svelte-jd56ox">PLAYER</th> <th class=" svelte-jd56ox">CHARACTERS</th> <th class=" svelte-jd56ox">RATING</th> <th class=" svelte-jd56ox">SETS</th></tr>',j,A,G=[],te=new Map,O,ve,ye,S=r[1]&&Ge(r),le=fe(r[1]?r[3][r[2]]:r[0].db.leaderboard);const Ie=$=>$[11];for(let $=0;$<le.length;$+=1){let P=Re(r,le,$),V=Ie(P);te.set(V,G[$]=Le(V,P))}return{c(){e=g("section"),l=g("h1"),l.textContent=t,s=D(),a=g("div"),n=g("div"),o=g("button"),o.textContent=f,m=D(),d=g("button"),d.textContent=u,i=D(),c=g("button"),c.textContent=p,k=D(),w=g("button"),w.textContent=R,x=D(),y=g("div"),S&&S.c(),C=D(),M=g("div"),N=g("table"),I=g("thead"),I.innerHTML=B,j=D(),A=g("tbody");for(let $=0;$<G.length;$+=1)G[$].c();this.h()},l($){e=b($,"SECTION",{class:!0});var P=E(e);l=b(P,"H1",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-1l7rv7a"&&(l.textContent=t),s=T(P),a=b(P,"DIV",{class:!0});var V=E(a);n=b(V,"DIV",{class:!0});var W=E(n);o=b(W,"BUTTON",{class:!0,"data-svelte-h":!0}),U(o)!=="svelte-akxss4"&&(o.textContent=f),m=T(W),d=b(W,"BUTTON",{class:!0,"data-svelte-h":!0}),U(d)!=="svelte-dfav71"&&(d.textContent=u),i=T(W),c=b(W,"BUTTON",{class:!0,"data-svelte-h":!0}),U(c)!=="svelte-sf4vom"&&(c.textContent=p),k=T(W),w=b(W,"BUTTON",{class:!0,"data-svelte-h":!0}),U(w)!=="svelte-lsrrzw"&&(w.textContent=R),W.forEach(v),x=T(V),y=b(V,"DIV",{});var Ce=E(y);S&&S.l(Ce),Ce.forEach(v),V.forEach(v),C=T(P),M=b(P,"DIV",{class:!0});var Ee=E(M);N=b(Ee,"TABLE",{class:!0});var ie=E(N);I=b(ie,"THEAD",{"data-svelte-h":!0}),U(I)!=="svelte-1efe288"&&(I.innerHTML=B),j=T(ie),A=b(ie,"TBODY",{});var Me=E(A);for(let me=0;me<G.length;me+=1)G[me].l(Me);Me.forEach(v),ie.forEach(v),Ee.forEach(v),P.forEach(v),this.h()},h(){_(l,"class","text-4xl font-medium"),_(o,"class","grow h-full font-semibold border-r svelte-jd56ox"),H(o,"btn-group-active",r[2]===se),_(d,"class","grow h-full font-semibold border-r svelte-jd56ox"),H(d,"btn-group-active",r[2]===de),_(c,"class","grow h-full font-semibold border-r svelte-jd56ox"),H(c,"btn-group-active",r[2]===ue),_(w,"class","grow h-full font-semibold svelte-jd56ox"),H(w,"btn-group-active",r[2]===he),_(n,"class","flex flex-row items-center box-content w-64 border-2 border-primary-light text-primary-light rounded-md h-8"),_(a,"class","flex justify-between items-end w-inherit my-2"),_(N,"class","border-collapse w-full svelte-jd56ox"),_(M,"class","items-center"),_(e,"class","grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] my-8")},m($,P){z($,e,P),h(e,l),h(e,s),h(e,a),h(a,n),h(n,o),h(n,m),h(n,d),h(n,i),h(n,c),h(n,k),h(n,w),h(a,x),h(a,y),S&&S.m(y,null),h(e,C),h(e,M),h(M,N),h(N,I),h(N,j),h(N,A);for(let V=0;V<G.length;V+=1)G[V]&&G[V].m(A,null);O=!0,ve||(ye=[ce(o,"click",r[6]),ce(d,"click",r[7]),ce(c,"click",r[8]),ce(w,"click",r[9])],ve=!0)},p($,[P]){(!O||P&4)&&H(o,"btn-group-active",$[2]===se),(!O||P&4)&&H(d,"btn-group-active",$[2]===de),(!O||P&4)&&H(c,"btn-group-active",$[2]===ue),(!O||P&4)&&H(w,"btn-group-active",$[2]===he),$[1]?S?S.p($,P):(S=Ge($),S.c(),S.m(y,null)):S&&(S.d(1),S=null),P&15&&(le=fe($[1]?$[3][$[2]]:$[0].db.leaderboard),ke(),G=qe(G,P,Ie,1,$,le,te,A,Se,Le,null,Re),we())},i($){if(!O){for(let P=0;P<le.length;P+=1)F(G[P]);O=!0}},o($){for(let P=0;P<G.length;P+=1)K(G[P]);O=!1},d($){$&&v(e),S&&S.d();for(let P=0;P<G.length;P+=1)G[P].d();ve=!1,Ve(ye)}}}const se=0,de=1,ue=2,he=3;function dt(r,e,l){let{data:t}=e;const s=c=>{let p=Math.floor((Date.now()-c)/1e3),k=p/31536e3;if(k>1){const w=Math.floor(k);return w+` year${w>1?"s":""}`}if(k=p/2592e3,k>1){const w=Math.floor(k);return w+` month${w>1?"s":""}`}if(k=p/86400,k>1){const w=Math.floor(k);return w+` day${w>1?"s":""}`}if(k=p/3600,k>1){const w=Math.floor(k);return w+` hour${w>1?"s":""}`}if(k=p/60,k>1){const w=Math.floor(k);return w+` minute${w>1?"s":""}`}return Math.floor(p)+" seconds"};let a=!1,n=se;function o(c){l(2,n=c)}const f={};be(async()=>{l(3,f[se]=t.db.leaderboard,f),l(3,f[de]=t.db.leaderboard.filter(c=>{var p;return((p=t.db.fGetPlayerByCode(c))==null?void 0:p.subregion)==="br"}),f),l(3,f[ue]=t.db.leaderboard.filter(c=>{var p;return((p=t.db.fGetPlayerByCode(c))==null?void 0:p.subregion)==="cl"}),f),l(3,f[he]=t.db.leaderboard.filter(c=>{var p;return!["br","cl"].includes((p=t.db.fGetPlayerByCode(c))==null?void 0:p.subregion)}),f),l(1,a=!0)});const m=()=>o(se),d=()=>o(de),u=()=>o(ue),i=()=>o(he);return r.$$set=c=>{"data"in c&&l(0,t=c.data)},[t,a,n,f,s,o,m,d,u,i]}class bt extends ne{constructor(e){super(),oe(this,e,dt,ft,ae,{data:0})}}export{bt as component};