import{s as Z,o as L}from"./scheduler.BMzRc5ua.js";import{S as M,i as R,e as g,s as I,t as P,c as v,a as p,b as V,d as j,f as _,g as y,h as q,j as m,k as N,l as T,m as F,n as z,o as G,p as H,q as J,r as K,u as O}from"./index.CRu9cPtR.js";import{F as Q}from"./flag.C9i4mSIc.js";import{f as U}from"./rankings.BbgBZVIe.js";function X(i){let e,a,s;return a=new Q({props:{country:i[2](i[0])}}),{c(){e=g("div"),H(a.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0});var l=p(e);J(a.$$.fragment,l),l.forEach(_),this.h()},h(){y(e,"class","ml-[1px] mr-2")},m(t,l){q(t,e,l),K(a,e,null),s=!0},p(t,l){const u={};l&1&&(u.country=t[2](t[0])),a.$set(u)},i(t){s||(N(a.$$.fragment,t),s=!0)},o(t){F(a.$$.fragment,t),s=!1},d(t){t&&_(e),O(a)}}}function Y(i){let e,a,s;return{c(){e=g("p"),a=P(" • "),s=P(i[1]),this.h()},l(t){e=v(t,"P",{class:!0});var l=p(e);a=j(l," • "),s=j(l,i[1]),l.forEach(_),this.h()},h(){y(e,"class","font-normal text-sm text-primary-light")},m(t,l){q(t,e,l),m(e,a),m(e,s)},p(t,l){l&2&&G(s,t[1])},d(t){t&&_(e)}}}function x(i){let e,a,s,t=!!i[2](i[0]),l,u,C=i[3](i[0])+"",b,c,n,h,D,w,k,r=t&&X(i),f=!!i[1]&&Y(i);return{c(){e=g("div"),a=g("div"),s=g("div"),r&&r.c(),l=I(),u=g("p"),b=P(C),c=I(),n=g("div"),h=g("p"),D=P(i[0]),w=I(),f&&f.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var d=p(e);a=v(d,"DIV",{class:!0});var E=p(a);s=v(E,"DIV",{class:!0});var A=p(s);r&&r.l(A),l=V(A),u=v(A,"P",{class:!0});var S=p(u);b=j(S,C),S.forEach(_),A.forEach(_),c=V(E),n=v(E,"DIV",{class:!0});var B=p(n);h=v(B,"P",{class:!0});var W=p(h);D=j(W,i[0]),W.forEach(_),w=V(B),f&&f.l(B),B.forEach(_),E.forEach(_),d.forEach(_),this.h()},h(){y(u,"class","text-lg font-medium"),y(s,"class","flex flex-row items-center justify-start"),y(h,"class","font-normal text-sm text-primary-light"),y(n,"class","flex flex-row items-center justify-start"),y(a,"class","flex flex-col justify-start"),y(e,"class","flex flex-row items-center justify-start")},m(o,d){q(o,e,d),m(e,a),m(a,s),r&&r.m(s,null),m(s,l),m(s,u),m(u,b),m(a,c),m(a,n),m(n,h),m(h,D),m(n,w),f&&f.m(n,null),k=!0},p(o,[d]){d&1&&(t=!!o[2](o[0])),t?r?(r.p(o,d),d&1&&N(r,1)):(r=X(o),r.c(),N(r,1),r.m(s,l)):r&&(T(),F(r,1,1,()=>{r=null}),z()),(!k||d&1)&&C!==(C=o[3](o[0])+"")&&G(b,C),(!k||d&1)&&G(D,o[0]),o[1]?f?f.p(o,d):(f=Y(o),f.c(),f.m(n,null)):f&&(f.d(1),f=null)},i(o){k||(N(r),k=!0)},o(o){F(r),k=!1},d(o){o&&_(e),r&&r.d(),f&&f.d()}}}function $(i,e,a){let{data:s={}}=e,{code:t=""}=e,{tagAsName:l=!1}=e,u=null;const C=c=>{var n;return(n=s.db.fGetPlayerByCode(c))==null?void 0:n.countryCode},b=c=>{var h,D;const n=s.db.fGetPlayerByCode(c);return(l||n!=null&&n.forceTag)&&n!=null&&n.tag?n.tag:((D=(h=s.db.fGetAccountByCode(c))==null?void 0:h.account)==null?void 0:D.displayName)||"ABCDWXYZ_ABCDWXYZ"};return L(async()=>{a(1,u=U(s,t))}),i.$$set=c=>{"data"in c&&a(4,s=c.data),"code"in c&&a(0,t=c.code),"tagAsName"in c&&a(5,l=c.tagAsName)},[t,u,C,b,s,l]}class le extends M{constructor(e){super(),R(this,e,$,x,Z,{data:4,code:0,tagAsName:5})}}export{le as C};