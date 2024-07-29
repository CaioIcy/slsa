import{s as bt,o as vt,n as at}from"../chunks/scheduler.BBINyCwK.js";import{S as yt,i as kt,e as E,s as H,c as T,a as O,v as z,b as I,f as C,g as D,h as F,j as g,k as j,n as ht,m as W,w as X,t as J,d as U,o as tt,l as Pt,x as it,p as Ct,q as Et,r as Tt,u as Dt}from"../chunks/index.CWDOeH18.js";import{e as M}from"../chunks/flag.svelte_svelte_type_style_lang.BEUOZ2m7.js";import{C as wt}from"../chunks/cellPlayer.BNW0pAy4.js";function rt(i,t,e){const c=i.slice();return c[9]=t[e],c}function ot(i,t,e){const c=i.slice();return c[12]=t[e],c}function pt(i,t,e){const c=i.slice();return c[15]=t[e],c}function mt(i,t,e){const c=i.slice();return c[15]=t[e],c}function dt(i){let t,e=i[5](i[15])+"",c;return{c(){t=E("th"),c=J(e),this.h()},l(l){t=T(l,"TH",{class:!0});var n=O(t);c=U(n,e),n.forEach(C),this.h()},h(){D(t,"class","svelte-v693ym")},m(l,n){F(l,t,n),g(t,c)},p(l,n){n&4&&e!==(e=l[5](l[15])+"")&&tt(c,e)},d(l){l&&C(t)}}}function St(i){var l;let t,e=((l=i[12][2])==null?void 0:l.tag)+"",c;return{c(){t=E("td"),c=J(e),this.h()},l(n){t=T(n,"TD",{class:!0});var P=O(t);c=U(P,e),P.forEach(C),this.h()},h(){D(t,"class","svelte-v693ym")},m(n,P){F(n,t,P),g(t,c)},p(n,P){var d;P&2&&e!==(e=((d=n[12][2])==null?void 0:d.tag)+"")&&tt(c,e)},i:at,o:at,d(n){n&&C(t)}}}function Ot(i){let t,e,c;return e=new wt({props:{data:i[0],code:i[4](i[12]),tagAsName:!0}}),{c(){t=E("td"),Ct(e.$$.fragment),this.h()},l(l){t=T(l,"TD",{class:!0});var n=O(t);Et(e.$$.fragment,n),n.forEach(C),this.h()},h(){D(t,"class","svelte-v693ym")},m(l,n){F(l,t,n),Tt(e,t,null),c=!0},p(l,n){const P={};n&1&&(P.data=l[0]),n&2&&(P.code=l[4](l[12])),e.$set(P)},i(l){c||(j(e.$$.fragment,l),c=!0)},o(l){W(e.$$.fragment,l),c=!1},d(l){l&&C(t),Dt(e)}}}function gt(i){let t,e=(i[12][2].placements[i[15]]||"-")+"",c;return{c(){t=E("td"),c=J(e),this.h()},l(l){t=T(l,"TD",{class:!0});var n=O(t);c=U(n,e),n.forEach(C),this.h()},h(){D(t,"class","text-md font-bold svelte-v693ym"),it(t,"noPlacement",(i[12][2].placements[i[15]]||0)<=0)},m(l,n){F(l,t,n),g(t,c)},p(l,n){n&6&&e!==(e=(l[12][2].placements[l[15]]||"-")+"")&&tt(c,e),n&6&&it(t,"noPlacement",(l[12][2].placements[l[15]]||0)<=0)},d(l){l&&C(t)}}}function ft(i){let t,e,c=i[12][0]+"",l,n,P,d,v,x,R,o;const m=[Ot,St],k=[];function G(r,h){return h&2&&(P=null),P==null&&(P=!!r[6](r[12])),P?0:1}d=G(i,-1),v=k[d]=m[d](i);let _=M(i[2]),p=[];for(let r=0;r<_.length;r+=1)p[r]=gt(pt(i,_,r));return{c(){t=E("tr"),e=E("td"),l=J(c),n=H(),v.c(),x=H();for(let r=0;r<p.length;r+=1)p[r].c();R=H(),this.h()},l(r){t=T(r,"TR",{class:!0});var h=O(t);e=T(h,"TD",{class:!0});var f=O(e);l=U(f,c),f.forEach(C),n=I(h),v.l(h),x=I(h);for(let u=0;u<p.length;u+=1)p[u].l(h);R=I(h),h.forEach(C),this.h()},h(){D(e,"class","svelte-v693ym"),D(t,"class","bg-primary-main")},m(r,h){F(r,t,h),g(t,e),g(e,l),g(t,n),k[d].m(t,null),g(t,x);for(let f=0;f<p.length;f+=1)p[f]&&p[f].m(t,null);g(t,R),o=!0},p(r,h){(!o||h&2)&&c!==(c=r[12][0]+"")&&tt(l,c);let f=d;if(d=G(r,h),d===f?k[d].p(r,h):(Pt(),W(k[f],1,1,()=>{k[f]=null}),ht(),v=k[d],v?v.p(r,h):(v=k[d]=m[d](r),v.c()),j(v,1),v.m(t,x)),h&6){_=M(r[2]);let u;for(u=0;u<_.length;u+=1){const A=pt(r,_,u);p[u]?p[u].p(A,h):(p[u]=gt(A),p[u].c(),p[u].m(t,R))}for(;u<p.length;u+=1)p[u].d(1);p.length=_.length}},i(r){o||(j(v),o=!0)},o(r){W(v),o=!1},d(r){r&&C(t),k[d].d(),X(p,r)}}}function ut(i){let t,e,c=i[9]+"",l,n;return{c(){t=E("div"),e=E("a"),l=J(c),n=H(),this.h()},l(P){t=T(P,"DIV",{class:!0});var d=O(t);e=T(d,"A",{href:!0,class:!0});var v=O(e);l=U(v,c),v.forEach(C),n=I(d),d.forEach(C),this.h()},h(){D(e,"href",`https://${i[9]}`),D(e,"class","svelte-v693ym"),D(t,"class","bg-[#ffffff14] m-2 text-center")},m(P,d){F(P,t,d),g(t,e),g(e,l),g(t,n)},p:at,d(P){P&&C(t)}}}function xt(i){let t,e,c="MELEE BR",l,n,P="Tracker de torneios participados, 2024.",d,v,x,R,o,m,k="#",G,_,p="Player",r,h,f,u,A,N,lt='<p class="text-lg font-bold ml-3">Torneios</p>',et,L,Y,K=M(i[2]),w=[];for(let s=0;s<K.length;s+=1)w[s]=dt(mt(i,K,s));let $=M(i[1]),y=[];for(let s=0;s<$.length;s+=1)y[s]=ft(ot(i,$,s));const _t=s=>W(y[s],1,1,()=>{y[s]=null});let V=M(i[3].events),S=[];for(let s=0;s<V.length;s+=1)S[s]=ut(rt(i,V,s));return{c(){t=E("section"),e=E("h1"),e.textContent=c,l=H(),n=E("p"),n.textContent=P,d=H(),v=E("div"),x=E("table"),R=E("thead"),o=E("tr"),m=E("th"),m.textContent=k,G=H(),_=E("th"),_.textContent=p,r=H();for(let s=0;s<w.length;s+=1)w[s].c();h=H(),f=E("tbody");for(let s=0;s<y.length;s+=1)y[s].c();u=H(),A=E("div"),N=E("div"),N.innerHTML=lt,et=H(),L=E("div");for(let s=0;s<S.length;s+=1)S[s].c();this.h()},l(s){t=T(s,"SECTION",{class:!0});var b=O(t);e=T(b,"H1",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1k0zjps"&&(e.textContent=c),l=I(b),n=T(b,"P",{"data-svelte-h":!0}),z(n)!=="svelte-ugllfb"&&(n.textContent=P),d=I(b),v=T(b,"DIV",{class:!0});var a=O(v);x=T(a,"TABLE",{class:!0});var B=O(x);R=T(B,"THEAD",{});var nt=O(R);o=T(nt,"TR",{class:!0});var Z=O(o);m=T(Z,"TH",{class:!0,"data-svelte-h":!0}),z(m)!=="svelte-7cs45d"&&(m.textContent=k),G=I(Z),_=T(Z,"TH",{class:!0,"data-svelte-h":!0}),z(_)!=="svelte-1hwug43"&&(_.textContent=p),r=I(Z);for(let q=0;q<w.length;q+=1)w[q].l(Z);Z.forEach(C),nt.forEach(C),h=I(B),f=T(B,"TBODY",{});var ct=O(f);for(let q=0;q<y.length;q+=1)y[q].l(ct);ct.forEach(C),B.forEach(C),a.forEach(C),u=I(b),A=T(b,"DIV",{class:!0});var Q=O(A);N=T(Q,"DIV",{class:!0,"data-svelte-h":!0}),z(N)!=="svelte-fn0dpt"&&(N.innerHTML=lt),et=I(Q),L=T(Q,"DIV",{class:!0});var st=O(L);for(let q=0;q<S.length;q+=1)S[q].l(st);st.forEach(C),Q.forEach(C),b.forEach(C),this.h()},h(){D(e,"class","text-4xl font-medium mb-2"),D(m,"class","svelte-v693ym"),D(_,"class","svelte-v693ym"),D(o,"class","text-primary-light bg-purple"),D(x,"class","border-collapse w-full svelte-v693ym"),D(v,"class",""),D(N,"class","flex flex-row w-full h-9 items-center bg-purple"),D(L,"class","grid grid-cols-5 p-2 border-y border-primary-dark"),D(A,"class","bg-primary-main w-inherit mt-8 rounded"),D(t,"class","grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] my-8")},m(s,b){F(s,t,b),g(t,e),g(t,l),g(t,n),g(t,d),g(t,v),g(v,x),g(x,R),g(R,o),g(o,m),g(o,G),g(o,_),g(o,r);for(let a=0;a<w.length;a+=1)w[a]&&w[a].m(o,null);g(x,h),g(x,f);for(let a=0;a<y.length;a+=1)y[a]&&y[a].m(f,null);g(t,u),g(t,A),g(A,N),g(A,et),g(A,L);for(let a=0;a<S.length;a+=1)S[a]&&S[a].m(L,null);Y=!0},p(s,[b]){if(b&36){K=M(s[2]);let a;for(a=0;a<K.length;a+=1){const B=mt(s,K,a);w[a]?w[a].p(B,b):(w[a]=dt(B),w[a].c(),w[a].m(o,null))}for(;a<w.length;a+=1)w[a].d(1);w.length=K.length}if(b&87){$=M(s[1]);let a;for(a=0;a<$.length;a+=1){const B=ot(s,$,a);y[a]?(y[a].p(B,b),j(y[a],1)):(y[a]=ft(B),y[a].c(),j(y[a],1),y[a].m(f,null))}for(Pt(),a=$.length;a<y.length;a+=1)_t(a);ht()}if(b&8){V=M(s[3].events);let a;for(a=0;a<V.length;a+=1){const B=rt(s,V,a);S[a]?S[a].p(B,b):(S[a]=ut(B),S[a].c(),S[a].m(L,null))}for(;a<S.length;a+=1)S[a].d(1);S.length=V.length}},i(s){if(!Y){for(let b=0;b<$.length;b+=1)j(y[b]);Y=!0}},o(s){y=y.filter(Boolean);for(let b=0;b<y.length;b+=1)W(y[b]);Y=!1},d(s){s&&C(t),X(w,s),X(y,s),X(S,s)}}}function At(i,t,e){let{data:c={}}=t,l=[],n=[1,2,3,4,5];const P={timestamp:1722264706527,events:["braacket.com/tournament/pgs20240715","start.gg/tournament/circuito-paulista-de-i-smash-junho-2024/event/melee-singles","start.gg/tournament/circuito-paulista-de-i-smash-mar-o-2024/event/melee-singles","start.gg/tournament/fodase-2/event/melee-singles","start.gg/tournament/fodase-3/event/melee-singles","start.gg/tournament/fodase/event/melee-singles","start.gg/tournament/last-hit-11-rj/event/last-hit-super-smash-bros-melee","start.gg/tournament/melee-br-by-not/event/esq-1","start.gg/tournament/melee-br-by-not/event/esq-10","start.gg/tournament/melee-br-by-not/event/esq-11","start.gg/tournament/melee-br-by-not/event/esq-2","start.gg/tournament/melee-br-by-not/event/esq-3","start.gg/tournament/melee-br-by-not/event/esq-4","start.gg/tournament/melee-br-by-not/event/esq-5","start.gg/tournament/melee-br-by-not/event/esq-6","start.gg/tournament/melee-br-by-not/event/esq-8","start.gg/tournament/melee-br-by-not/event/esq-9","start.gg/tournament/melee-br-by-not/event/liga-melee-br-fev","start.gg/tournament/melee-br-by-not/event/liga-melee-br-mar","start.gg/tournament/melee-side-3f-fight-for-the-future/event/3f-melee-side","start.gg/tournament/pvp-arena-1/event/melee-singles","start.gg/tournament/pvp-arena-2/event/melee-singles","start.gg/tournament/smash-fellas-14/event/melee-singles","start.gg/tournament/smash-fellas-15/event/melee-singles","start.gg/tournament/smash-fellas-16/event/melee-singles","start.gg/tournament/smash-gelas/event/melee-singles","start.gg/tournament/smatchelee-1/event/sloppi","start.gg/tournament/smatchelee-10/event/sloppi","start.gg/tournament/smatchelee-11/event/sloppi","start.gg/tournament/smatchelee-2/event/sloppi","start.gg/tournament/smatchelee-3/event/sloppi","start.gg/tournament/smatchelee-5/event/sloppi","start.gg/tournament/smatchelee-6/event/sloppi","start.gg/tournament/smatchelee-7/event/sloppi","start.gg/tournament/smatchelee-8/event/sloppi","start.gg/tournament/smatchelee-9/event/sloppi","start.gg/tournament/tws-shadow-temple-2/event/shadow-temple-melee-singles"],data:{34771820:{tag:"wankinha",totalParticipated:6,placements:{0:2,5:1,7:1,9:2}},41242789:{tag:"Bach",totalParticipated:1,placements:{5:1}},42368772:{tag:"pastheo",totalParticipated:5,placements:{5:3,7:2}},48756749:{tag:"GNES42",totalParticipated:1,placements:{9:1}},52030935:{tag:"Emp",totalParticipated:1,placements:{5:1}},55128576:{tag:"alice chinchila",totalParticipated:2,placements:{4:1,7:1}},e100347c:{tag:"W4rio",totalParticipated:18,placements:{1:8,2:8,3:1,5:1}},c227bc45:{tag:"Trap$tarFox",totalParticipated:14,placements:{1:4,2:4,3:3,4:3}},"34c5c34c":{tag:"JUDITE",totalParticipated:3,placements:{2:2,3:1}},a338d50f:{tag:"Kiw",totalParticipated:1,placements:{4:1}},f0a3386e:{tag:"Fonsie",totalParticipated:4,placements:{5:3,7:1}},"5a1d4c2b":{tag:"Zen",totalParticipated:13,placements:{2:2,3:3,4:2,5:6}},"229262a3":{tag:"Buttelli",totalParticipated:11,placements:{3:2,4:2,5:3,7:3,9:1}},"304019cf":{tag:"delaberry",totalParticipated:1,placements:{7:1}},"25a3c7d6":{tag:"Pintinho",totalParticipated:1,placements:{9:1}},f120989d:{tag:"Smoke",totalParticipated:1,placements:{9:1}},bc8fff89:{tag:"DALSU",totalParticipated:6,placements:{5:4,7:1,9:1}},ec18de9d:{tag:"Geova",totalParticipated:1,placements:{9:1}},b70231fe:{tag:"peebs",totalParticipated:1,placements:{13:1}},"9ee4f06a":{tag:"Balas",totalParticipated:3,placements:{7:2,13:1}},f13da7f8:{tag:"Dewrion",totalParticipated:11,placements:{3:1,4:2,5:2,7:1,9:4,13:1}},fbf2e7e4:{tag:"TheDuckInBlue",totalParticipated:1,placements:{17:1}},"2bc50672":{tag:"Garfo",totalParticipated:1,placements:{17:1}},d6c481e4:{tag:"Kiki",totalParticipated:3,placements:{1:3}},"162fd7e5":{tag:"TXR",totalParticipated:17,placements:{1:1,2:2,3:2,4:2,5:5,7:2,9:3}},"158d12c4":{tag:"naiO",totalParticipated:2,placements:{3:1,5:1}},"6db881e7":{tag:"P",totalParticipated:1,placements:{4:1}},"5580ba64":{tag:"Yalda",totalParticipated:1,placements:{5:1}},"67e845f3":{tag:"Monkey",totalParticipated:1,placements:{7:1}},"7c352bf7":{tag:"bacabau",totalParticipated:1,placements:{7:1}},"226754a1":{tag:"Vlory",totalParticipated:6,placements:{1:3,2:1,4:2}},"18963e5d":{tag:"Macachita",totalParticipated:3,placements:{4:2,7:1}},"3e1e7cad":{tag:"fofo",totalParticipated:11,placements:{4:7,5:2,7:2}},"1e51071d":{tag:"Miguelito",totalParticipated:11,placements:{4:1,5:2,6:1,7:3,9:3,13:1}},b9fd55f7:{tag:"werneck",totalParticipated:1,placements:{9:1}},a83cf36f:{tag:"Tia Silvia",totalParticipated:1,placements:{2:1}},be9a0b7c:{tag:"Tio da Samus",totalParticipated:2,placements:{2:1,3:1}},"33f19991":{tag:"Aceblind",totalParticipated:1,placements:{5:1}},e44151e8:{tag:"Claus",totalParticipated:2,placements:{5:2}},bbf1d61d:{tag:":Paulo",totalParticipated:1,placements:{7:1}},"59093dae":{tag:"Takkar",totalParticipated:7,placements:{3:1,4:2,7:1,9:3}},"714cea55":{tag:"Pomini",totalParticipated:1,placements:{3:1}},"7180d9ab":{tag:"RODIZ_",totalParticipated:1,placements:{9:1}},"22f7681f":{tag:"Mitsu",totalParticipated:4,placements:{2:2,5:1,9:1}},b36ce01e:{tag:"dnk",totalParticipated:4,placements:{7:1,9:1,13:1,25:1}},bc23af58:{tag:"Jota",totalParticipated:5,placements:{5:1,7:1,9:2,17:1}},c1ccf421:{tag:"Zekiki",totalParticipated:2,placements:{7:1,8:1}},"82a10d6e":{tag:"Guiler",totalParticipated:1,placements:{2:1}},c4a637a7:{tag:"IzZI127",totalParticipated:1,placements:{1:1}},"98f123e8":{tag:"Not",totalParticipated:18,placements:{0:13,2:3,3:1,4:1}},e58cd431:{tag:"FLORIDABOY ARANHA",totalParticipated:2,placements:{3:2}},"1a802a84":{tag:"McS33",totalParticipated:5,placements:{1:1,3:2,4:1,7:1}},a0e4e1b0:{tag:"Rix",totalParticipated:3,placements:{5:1,7:1,13:1}},"3922b2ff":{tag:"Lp de dados",totalParticipated:4,placements:{5:1,7:2,13:1}},"10417ffa":{tag:"PODEROSO PNC",totalParticipated:2,placements:{9:1,13:1}},"24a3a172":{tag:"Quinho",totalParticipated:2,placements:{9:2}},"56e62ed7":{tag:"Rocky",totalParticipated:1,placements:{9:1}},f55023d8:{tag:"Lupini",totalParticipated:1,placements:{13:1}},"4f55fb42":{tag:"Pedro de Verdade",totalParticipated:5,placements:{5:1,7:1,9:1,13:2}},"7081a58b":{tag:"Guntadela",totalParticipated:3,placements:{13:1,17:2}},cfeaeec3:{tag:"Offline",totalParticipated:1,placements:{17:1}},"6e62999c":{tag:"Espeonatic",totalParticipated:2,placements:{17:2}},"2f3d7b22":{tag:"marxseny",totalParticipated:2,placements:{13:1,17:1}},dfc957cf:{tag:"Norun",totalParticipated:2,placements:{7:1,17:1}},f47b02de:{tag:"ronaldocharuto",totalParticipated:6,placements:{7:1,9:2,13:1,17:2}},"2d16bc33":{tag:"GioBr",totalParticipated:15,placements:{0:1,3:5,4:1,5:5,7:2,9:1}},d9632d80:{tag:"Aleixo",totalParticipated:6,placements:{1:3,2:2,3:1}},"8937f481":{tag:"Big Mac",totalParticipated:16,placements:{5:5,7:1,9:7,13:3}},"6c1410b5":{tag:"mellamojeff",totalParticipated:1,placements:{5:1}},c6f7ef37:{tag:"caioicy",totalParticipated:12,placements:{0:2,1:9,2:1}},"56ef33af":{tag:"Racconmiku",totalParticipated:2,placements:{5:1,7:1}},d7571ac2:{tag:"Arth14",totalParticipated:3,placements:{2:1,5:1,7:1}},fae9a3fe:{tag:"Z1C0",totalParticipated:1,placements:{13:1}},"0e9048bd":{tag:"Aceblind",totalParticipated:1,placements:{4:1}},f196ff27:{tag:"Valind0",totalParticipated:2,placements:{5:1,7:1}},d51ba1ca:{tag:"eB0NES",totalParticipated:3,placements:{5:1,7:2}},"996c10cf":{tag:"Holiday",totalParticipated:1,placements:{7:1}},fbbb5e30:{tag:"Leso",totalParticipated:1,placements:{3:1}},"8774f728":{tag:"Tinky Winky",totalParticipated:1,placements:{4:1}},"6e50e194":{tag:"Shury",totalParticipated:1,placements:{5:1}},"8227660c":{tag:"Gim",totalParticipated:1,placements:{7:1}},b4bb9116:{tag:"Wanshitong",totalParticipated:1,placements:{9:1}},"8e85a771":{tag:"Taunt",totalParticipated:1,placements:{9:1}},db658dad:{tag:"Pee2King",totalParticipated:2,placements:{3:1,17:1}},"6da45a19":{tag:"Drunk",totalParticipated:2,placements:{4:1,9:1}},"17c48ecf":{tag:"EU!?",totalParticipated:2,placements:{2:1,7:1}},"47a17210":{tag:"yanldss",totalParticipated:3,placements:{2:1,3:1,5:1}},"7bca15b4":{tag:"Kipp",totalParticipated:3,placements:{2:2,3:1}},"4b914e88":{tag:"Fatt Williams",totalParticipated:2,placements:{4:2}},c46045b8:{tag:"dede",totalParticipated:3,placements:{0:1,3:1,5:1}},ed907650:{tag:"nitegabro",totalParticipated:8,placements:{7:2,9:4,13:1,25:1}},"3c251b93":{tag:"Chevy",totalParticipated:1,placements:{1:1}},e6d9fe87:{tag:"NyxTheShield",totalParticipated:1,placements:{3:1}},"8af878fd":{tag:"Mafe2233",totalParticipated:2,placements:{7:1,9:1}},"5c51bc52":{tag:"Zim",totalParticipated:2,placements:{3:1,9:1}},"09ef8d1f":{tag:"KYDB",totalParticipated:2,placements:{9:1,13:1}},f30f464b:{tag:"Blaze Z",totalParticipated:1,placements:{17:1}},"4ea932a7":{tag:"TrickuGeeku",totalParticipated:1,placements:{17:1}},"9f793d65":{tag:"Fauro",totalParticipated:7,placements:{0:1,5:1,9:4,13:1}},b68ffd5c:{tag:"Corazza",totalParticipated:4,placements:{4:1,5:1,7:1,9:1}},b0358e51:{tag:"Kort",totalParticipated:1,placements:{3:1}},"08ad0783":{tag:"Ehro",totalParticipated:1,placements:{2:1}},af32ee3e:{tag:"Korn",totalParticipated:1,placements:{5:1}},"386aae66":{tag:"Ozzy",totalParticipated:1,placements:{9:1}},"961d6eae":{tag:"Traje fino",totalParticipated:2,placements:{5:2}},ed042ec4:{tag:"werneck",totalParticipated:2,placements:{9:1,13:1}},"8a0d3733":{tag:"Aisengobay",totalParticipated:1,placements:{2:1}},d80c9b49:{tag:"Phonix Wrong",totalParticipated:1,placements:{3:1}},"27346b54":{tag:"Capivarado",totalParticipated:2,placements:{13:2}},e81d933a:{tag:"TRZ",totalParticipated:2,placements:{1:2}},ae067bb9:{tag:"LI4R",totalParticipated:1,placements:{5:1}},ccb3841f:{tag:"Wesai",totalParticipated:1,placements:{9:1}},"3abd82af":{tag:"DanTe",totalParticipated:1,placements:{13:1}},d0de2fe4:{tag:"Cade Meu Jogo Ubi",totalParticipated:1,placements:{17:1}},ff6096ef:{tag:"mik",totalParticipated:1,placements:{17:1}},__braacket_pgs20240715_Jokerino__:{tag:"Jokerino",totalParticipated:1,placements:{1:1}},__braacket_pgs20240715_Phoca__:{tag:"PODEROSO PNC",totalParticipated:1,placements:{7:1}},"__braacket_pgs20240715_DH Hunter__":{tag:"DH Hunter",totalParticipated:1,placements:{13:1}},__tos_ludecoli__:{tag:"ludecoli",totalParticipated:2,placements:{0:2}},__tos_ScoutFluor__:{tag:"[Scout] Fluor",totalParticipated:1,placements:{0:1}}},placements:[0,1,2,3,4,5,7,9,13,17,25]},d=o=>c.db.fGetPlayerByDiscriminator(o),v=o=>{var k;const m=(k=d(o[1]))==null?void 0:k.slippiConnectCodes;return(m==null?void 0:m.length)>0?m[0]:null},x=o=>{if(o===0)return"ORG";const k={1:"st",2:"nd",3:"rd"}[o%10]||"th";return`${o}${k}`},R=o=>{const m=d(o[1]),k=m==null?void 0:m.slippiConnectCodes;return(k==null?void 0:k.length)>0};return vt(async()=>{var G;const o=P;e(2,n=o.placements);const m=[],k=new Set;for(const[_,p]of Object.entries(o.data)){const r=d(_),h=((G=d(_))==null?void 0:G.slug)||_;if(k.has(h)){for(let f=0;f<m.length;++f)if(r.sgg.includes(_)&&r.sgg.includes(m[f][1])){m[f][0]+=p.totalParticipated;for(const u of n)u in p&&(u in m[f][2].placements||(m[f][2].placements[u]=0),m[f][2].placements[u]+=p.placements[u]);break}continue}m.push([p.totalParticipated,_,p]),k.add(h)}m.sort((_,p)=>{if(p[0]!==_[0])return p[0]-_[0];for(const r of n){let h=_[2].placements[r]||-1,f=p[2].placements[r]||-1;if(r===0){let u=_[2].placements[1]||-1,A=p[2].placements[1]||-1;if(A!==u)return A-u}if(f!==h)return f-h}return p[1].localeCompare(_[1])}),e(1,l=m)}),i.$$set=o=>{"data"in o&&e(0,c=o.data)},[c,l,n,P,v,x,R]}class It extends yt{constructor(t){super(),kt(this,t,At,xt,bt,{data:0})}}export{It as component};
