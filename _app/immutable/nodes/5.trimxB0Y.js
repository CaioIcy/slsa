import{s as vt,o as kt,n as lt}from"../chunks/scheduler.BBINyCwK.js";import{S as yt,i as Et,e as C,s as q,c as T,a as R,v as z,b as G,f as E,g as D,h as $,j as g,k as j,n as Pt,m as W,w as X,t as J,d as U,o as et,x as tt,l as _t,p as Ct,q as Tt,r as Dt,u as wt}from"../chunks/index.CWDOeH18.js";import{e as H}from"../chunks/flag.svelte_svelte_type_style_lang.BEUOZ2m7.js";import{C as St}from"../chunks/cellPlayer.BNW0pAy4.js";function rt(i,t,e){const c=i.slice();return c[9]=t[e],c}function ot(i,t,e){const c=i.slice();return c[12]=t[e],c}function pt(i,t,e){const c=i.slice();return c[15]=t[e],c}function dt(i,t,e){const c=i.slice();return c[15]=t[e],c}function mt(i){let t,e=i[5](i[15])+"",c;return{c(){t=C("th"),c=J(e),this.h()},l(l){t=T(l,"TH",{class:!0});var n=R(t);c=U(n,e),n.forEach(E),this.h()},h(){D(t,"class","svelte-1gn0v6r")},m(l,n){$(l,t,n),g(t,c)},p(l,n){n&4&&e!==(e=l[5](l[15])+"")&&et(c,e)},d(l){l&&E(t)}}}function Rt(i){var l;let t,e=((l=i[12][2])==null?void 0:l.tag)+"",c;return{c(){t=C("td"),c=J(e),this.h()},l(n){t=T(n,"TD",{class:!0});var P=R(t);c=U(P,e),P.forEach(E),this.h()},h(){D(t,"class","svelte-1gn0v6r")},m(n,P){$(n,t,P),g(t,c)},p(n,P){var m;P&2&&e!==(e=((m=n[12][2])==null?void 0:m.tag)+"")&&et(c,e)},i:lt,o:lt,d(n){n&&E(t)}}}function At(i){let t,e,c;return e=new St({props:{data:i[0],code:i[4](i[12]),tagAsName:!0}}),{c(){t=C("td"),Ct(e.$$.fragment),this.h()},l(l){t=T(l,"TD",{class:!0});var n=R(t);Tt(e.$$.fragment,n),n.forEach(E),this.h()},h(){D(t,"class","svelte-1gn0v6r")},m(l,n){$(l,t,n),Dt(e,t,null),c=!0},p(l,n){const P={};n&1&&(P.data=l[0]),n&2&&(P.code=l[4](l[12])),e.$set(P)},i(l){c||(j(e.$$.fragment,l),c=!0)},o(l){W(e.$$.fragment,l),c=!1},d(l){l&&E(t),wt(e)}}}function gt(i){let t,e=(i[12][2].placements[i[15]]||"-")+"",c;return{c(){t=C("td"),c=J(e),this.h()},l(l){t=T(l,"TD",{class:!0});var n=R(t);c=U(n,e),n.forEach(E),this.h()},h(){D(t,"class","text-md font-bold svelte-1gn0v6r"),tt(t,"noPlacement",(i[12][2].placements[i[15]]||0)<=0)},m(l,n){$(l,t,n),g(t,c)},p(l,n){n&6&&e!==(e=(l[12][2].placements[l[15]]||"-")+"")&&et(c,e),n&6&&tt(t,"noPlacement",(l[12][2].placements[l[15]]||0)<=0)},d(l){l&&E(t)}}}function ft(i){let t,e,c=i[12][0]+"",l,n,P,m,v,A,I,o;const d=[At,Rt],y=[];function x(r,f){return f&2&&(P=null),P==null&&(P=!!r[6](r[12])),P?0:1}m=x(i,-1),v=y[m]=d[m](i);let _=H(i[2]),p=[];for(let r=0;r<_.length;r+=1)p[r]=gt(pt(i,_,r));return{c(){t=C("tr"),e=C("td"),l=J(c),n=q(),v.c(),A=q();for(let r=0;r<p.length;r+=1)p[r].c();I=q(),this.h()},l(r){t=T(r,"TR",{class:!0});var f=R(t);e=T(f,"TD",{class:!0});var u=R(e);l=U(u,c),u.forEach(E),n=G(f),v.l(f),A=G(f);for(let h=0;h<p.length;h+=1)p[h].l(f);I=G(f),f.forEach(E),this.h()},h(){D(e,"class","svelte-1gn0v6r"),D(t,"class","bg-primary-main svelte-1gn0v6r"),tt(t,"eligible",i[12][0]>=ht)},m(r,f){$(r,t,f),g(t,e),g(e,l),g(t,n),y[m].m(t,null),g(t,A);for(let u=0;u<p.length;u+=1)p[u]&&p[u].m(t,null);g(t,I),o=!0},p(r,f){(!o||f&2)&&c!==(c=r[12][0]+"")&&et(l,c);let u=m;if(m=x(r,f),m===u?y[m].p(r,f):(_t(),W(y[u],1,1,()=>{y[u]=null}),Pt(),v=y[m],v?v.p(r,f):(v=y[m]=d[m](r),v.c()),j(v,1),v.m(t,A)),f&6){_=H(r[2]);let h;for(h=0;h<_.length;h+=1){const B=pt(r,_,h);p[h]?p[h].p(B,f):(p[h]=gt(B),p[h].c(),p[h].m(t,I))}for(;h<p.length;h+=1)p[h].d(1);p.length=_.length}(!o||f&2)&&tt(t,"eligible",r[12][0]>=ht)},i(r){o||(j(v),o=!0)},o(r){W(v),o=!1},d(r){r&&E(t),y[m].d(),X(p,r)}}}function ut(i){let t,e,c=i[9]+"",l,n;return{c(){t=C("div"),e=C("a"),l=J(c),n=q(),this.h()},l(P){t=T(P,"DIV",{class:!0});var m=R(t);e=T(m,"A",{href:!0,class:!0});var v=R(e);l=U(v,c),v.forEach(E),n=G(m),m.forEach(E),this.h()},h(){D(e,"href",`https://${i[9]}`),D(e,"class","svelte-1gn0v6r"),D(t,"class","bg-[#ffffff14] m-2 text-center")},m(P,m){$(P,t,m),g(t,e),g(e,l),g(t,n)},p:lt,d(P){P&&E(t)}}}function Bt(i){let t,e,c="MELEE BR",l,n,P="Tracker de torneios participados, 2024.",m,v,A,I,o,d,y="#",x,_,p="Player",r,f,u,h,B,M,nt='<p class="text-lg font-bold ml-3">Torneios</p>',at,N,Y,F=H(i[2]),w=[];for(let s=0;s<F.length;s+=1)w[s]=mt(dt(i,F,s));let K=H(i[1]),k=[];for(let s=0;s<K.length;s+=1)k[s]=ft(ot(i,K,s));const bt=s=>W(k[s],1,1,()=>{k[s]=null});let V=H(i[3].events),S=[];for(let s=0;s<V.length;s+=1)S[s]=ut(rt(i,V,s));return{c(){t=C("section"),e=C("h1"),e.textContent=c,l=q(),n=C("p"),n.textContent=P,m=q(),v=C("div"),A=C("table"),I=C("thead"),o=C("tr"),d=C("th"),d.textContent=y,x=q(),_=C("th"),_.textContent=p,r=q();for(let s=0;s<w.length;s+=1)w[s].c();f=q(),u=C("tbody");for(let s=0;s<k.length;s+=1)k[s].c();h=q(),B=C("div"),M=C("div"),M.innerHTML=nt,at=q(),N=C("div");for(let s=0;s<S.length;s+=1)S[s].c();this.h()},l(s){t=T(s,"SECTION",{class:!0});var b=R(t);e=T(b,"H1",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1k0zjps"&&(e.textContent=c),l=G(b),n=T(b,"P",{"data-svelte-h":!0}),z(n)!=="svelte-ugllfb"&&(n.textContent=P),m=G(b),v=T(b,"DIV",{class:!0});var a=R(v);A=T(a,"TABLE",{class:!0});var O=R(A);I=T(O,"THEAD",{});var ct=R(I);o=T(ct,"TR",{class:!0});var Z=R(o);d=T(Z,"TH",{class:!0,"data-svelte-h":!0}),z(d)!=="svelte-7cs45d"&&(d.textContent=y),x=G(Z),_=T(Z,"TH",{class:!0,"data-svelte-h":!0}),z(_)!=="svelte-1hwug43"&&(_.textContent=p),r=G(Z);for(let L=0;L<w.length;L+=1)w[L].l(Z);Z.forEach(E),ct.forEach(E),f=G(O),u=T(O,"TBODY",{});var st=R(u);for(let L=0;L<k.length;L+=1)k[L].l(st);st.forEach(E),O.forEach(E),a.forEach(E),h=G(b),B=T(b,"DIV",{class:!0});var Q=R(B);M=T(Q,"DIV",{class:!0,"data-svelte-h":!0}),z(M)!=="svelte-fn0dpt"&&(M.innerHTML=nt),at=G(Q),N=T(Q,"DIV",{class:!0});var it=R(N);for(let L=0;L<S.length;L+=1)S[L].l(it);it.forEach(E),Q.forEach(E),b.forEach(E),this.h()},h(){D(e,"class","text-4xl font-medium mb-2"),D(d,"class","svelte-1gn0v6r"),D(_,"class","svelte-1gn0v6r"),D(o,"class","text-primary-light bg-purple"),D(A,"class","border-collapse w-full svelte-1gn0v6r"),D(v,"class",""),D(M,"class","flex flex-row w-full h-9 items-center bg-purple"),D(N,"class","grid grid-cols-5 p-2 border-y border-primary-dark"),D(B,"class","bg-primary-main w-inherit mt-8 rounded"),D(t,"class","grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] my-8")},m(s,b){$(s,t,b),g(t,e),g(t,l),g(t,n),g(t,m),g(t,v),g(v,A),g(A,I),g(I,o),g(o,d),g(o,x),g(o,_),g(o,r);for(let a=0;a<w.length;a+=1)w[a]&&w[a].m(o,null);g(A,f),g(A,u);for(let a=0;a<k.length;a+=1)k[a]&&k[a].m(u,null);g(t,h),g(t,B),g(B,M),g(B,at),g(B,N);for(let a=0;a<S.length;a+=1)S[a]&&S[a].m(N,null);Y=!0},p(s,[b]){if(b&36){F=H(s[2]);let a;for(a=0;a<F.length;a+=1){const O=dt(s,F,a);w[a]?w[a].p(O,b):(w[a]=mt(O),w[a].c(),w[a].m(o,null))}for(;a<w.length;a+=1)w[a].d(1);w.length=F.length}if(b&87){K=H(s[1]);let a;for(a=0;a<K.length;a+=1){const O=ot(s,K,a);k[a]?(k[a].p(O,b),j(k[a],1)):(k[a]=ft(O),k[a].c(),j(k[a],1),k[a].m(u,null))}for(_t(),a=K.length;a<k.length;a+=1)bt(a);Pt()}if(b&8){V=H(s[3].events);let a;for(a=0;a<V.length;a+=1){const O=rt(s,V,a);S[a]?S[a].p(O,b):(S[a]=ut(O),S[a].c(),S[a].m(N,null))}for(;a<S.length;a+=1)S[a].d(1);S.length=V.length}},i(s){if(!Y){for(let b=0;b<K.length;b+=1)j(k[b]);Y=!0}},o(s){k=k.filter(Boolean);for(let b=0;b<k.length;b+=1)W(k[b]);Y=!1},d(s){s&&E(t),X(w,s),X(k,s),X(S,s)}}}const ht=5;function Ot(i,t,e){let{data:c={}}=t,l=[],n=[1,2,3,4,5];const P={timestamp:1722816993160,events:["braacket.com/tournament/pgs20240715","start.gg/tournament/circuito-paulista-de-i-smash-junho-2024/event/melee-singles","start.gg/tournament/circuito-paulista-de-i-smash-mar-o-2024/event/melee-singles","start.gg/tournament/esq-12-1/event/melee-singles","start.gg/tournament/fodase-2/event/melee-singles","start.gg/tournament/fodase-3/event/melee-singles","start.gg/tournament/fodase/event/melee-singles","start.gg/tournament/last-hit-11-rj/event/last-hit-super-smash-bros-melee","start.gg/tournament/melee-br-by-not/event/esq-1","start.gg/tournament/melee-br-by-not/event/esq-10","start.gg/tournament/melee-br-by-not/event/esq-11","start.gg/tournament/melee-br-by-not/event/esq-2","start.gg/tournament/melee-br-by-not/event/esq-3","start.gg/tournament/melee-br-by-not/event/esq-4","start.gg/tournament/melee-br-by-not/event/esq-5","start.gg/tournament/melee-br-by-not/event/esq-6","start.gg/tournament/melee-br-by-not/event/esq-8","start.gg/tournament/melee-br-by-not/event/esq-9","start.gg/tournament/melee-br-by-not/event/liga-melee-br-fev","start.gg/tournament/melee-br-by-not/event/liga-melee-br-mar","start.gg/tournament/melee-side-3f-fight-for-the-future/event/3f-melee-side","start.gg/tournament/muminha-s-academy/event/singles-das-muminhas","start.gg/tournament/pvp-arena-1/event/melee-singles","start.gg/tournament/pvp-arena-2/event/melee-singles","start.gg/tournament/smash-fellas-14/event/melee-singles","start.gg/tournament/smash-fellas-15/event/melee-singles","start.gg/tournament/smash-fellas-16/event/melee-singles","start.gg/tournament/smash-gelas/event/melee-singles","start.gg/tournament/smatchelee-1/event/sloppi","start.gg/tournament/smatchelee-10/event/sloppi","start.gg/tournament/smatchelee-11/event/sloppi","start.gg/tournament/smatchelee-2/event/sloppi","start.gg/tournament/smatchelee-3/event/sloppi","start.gg/tournament/smatchelee-5/event/sloppi","start.gg/tournament/smatchelee-6/event/sloppi","start.gg/tournament/smatchelee-7/event/sloppi","start.gg/tournament/smatchelee-8/event/sloppi","start.gg/tournament/smatchelee-9/event/sloppi","start.gg/tournament/tws-shadow-temple-2/event/shadow-temple-melee-singles"],data:{34771820:{tag:"wankinha",totalParticipated:8,placements:{0:4,5:1,7:1,9:2}},41242789:{tag:"Bach",totalParticipated:1,placements:{5:1}},42368772:{tag:"pastheo",totalParticipated:5,placements:{5:3,7:2}},48756749:{tag:"GNES42",totalParticipated:1,placements:{9:1}},52030935:{tag:"Emp",totalParticipated:1,placements:{5:1}},55128576:{tag:"alice chinchila",totalParticipated:2,placements:{4:1,7:1}},74683723:{tag:"K4LEER",totalParticipated:1,placements:{13:1}},e100347c:{tag:"W4rio",totalParticipated:19,placements:{1:8,2:8,3:1,4:1,5:1}},c227bc45:{tag:"Trap$tarFox",totalParticipated:14,placements:{1:4,2:4,3:3,4:3}},"34c5c34c":{tag:"JUDITE",totalParticipated:3,placements:{2:2,3:1}},a338d50f:{tag:"Kiw",totalParticipated:1,placements:{4:1}},f0a3386e:{tag:"Fonsie",totalParticipated:4,placements:{5:3,7:1}},"5a1d4c2b":{tag:"Zen",totalParticipated:13,placements:{2:2,3:3,4:2,5:6}},"229262a3":{tag:"Buttelli",totalParticipated:11,placements:{3:2,4:2,5:3,7:3,9:1}},"304019cf":{tag:"delaberry",totalParticipated:1,placements:{7:1}},"25a3c7d6":{tag:"Pintinho",totalParticipated:1,placements:{9:1}},f120989d:{tag:"Smoke",totalParticipated:1,placements:{9:1}},bc8fff89:{tag:"DALSU",totalParticipated:6,placements:{5:4,7:1,9:1}},ec18de9d:{tag:"Geova",totalParticipated:1,placements:{9:1}},b70231fe:{tag:"peebs",totalParticipated:1,placements:{13:1}},"9ee4f06a":{tag:"Balas",totalParticipated:3,placements:{7:2,13:1}},f13da7f8:{tag:"Dewrion",totalParticipated:11,placements:{3:1,4:2,5:2,7:1,9:4,13:1}},fbf2e7e4:{tag:"TheDuckInBlue",totalParticipated:1,placements:{17:1}},"2bc50672":{tag:"Garfo",totalParticipated:1,placements:{17:1}},d6c481e4:{tag:"Kiki",totalParticipated:3,placements:{1:3}},"162fd7e5":{tag:"TXR",totalParticipated:17,placements:{1:1,2:2,3:2,4:2,5:5,7:2,9:3}},"158d12c4":{tag:"naiO",totalParticipated:2,placements:{3:1,5:1}},"6db881e7":{tag:"P",totalParticipated:1,placements:{4:1}},"5580ba64":{tag:"Yalda",totalParticipated:1,placements:{5:1}},"67e845f3":{tag:"Monkey",totalParticipated:1,placements:{7:1}},"7c352bf7":{tag:"bacabau",totalParticipated:1,placements:{7:1}},"226754a1":{tag:"Vlory",totalParticipated:7,placements:{1:3,2:1,3:1,4:2}},"18963e5d":{tag:"Macachita",totalParticipated:3,placements:{4:2,7:1}},"3e1e7cad":{tag:"fofo",totalParticipated:13,placements:{0:1,4:7,5:2,7:2,9:1}},"1e51071d":{tag:"Miguelito",totalParticipated:13,placements:{4:1,5:2,6:1,7:3,9:4,13:2}},b9fd55f7:{tag:"werneck",totalParticipated:1,placements:{9:1}},a83cf36f:{tag:"Tia Silvia",totalParticipated:1,placements:{2:1}},be9a0b7c:{tag:"Tio da Samus",totalParticipated:2,placements:{2:1,3:1}},"33f19991":{tag:"Aceblind",totalParticipated:1,placements:{5:1}},e44151e8:{tag:"Claus",totalParticipated:2,placements:{5:2}},bbf1d61d:{tag:":Paulo",totalParticipated:1,placements:{7:1}},"59093dae":{tag:"Takkar",totalParticipated:8,placements:{3:1,4:2,7:1,9:4}},"714cea55":{tag:"Pomini",totalParticipated:1,placements:{3:1}},"7180d9ab":{tag:"RODIZ_",totalParticipated:1,placements:{9:1}},"22f7681f":{tag:"Mitsu",totalParticipated:5,placements:{2:2,5:1,9:2}},b36ce01e:{tag:"dnk",totalParticipated:4,placements:{7:1,9:1,13:1,25:1}},bc23af58:{tag:"Jota",totalParticipated:5,placements:{5:1,7:1,9:2,17:1}},c1ccf421:{tag:"Zekiki",totalParticipated:2,placements:{7:1,8:1}},"82a10d6e":{tag:"Guiler",totalParticipated:2,placements:{2:1,9:1}},c4a637a7:{tag:"IzZI127",totalParticipated:1,placements:{1:1}},"98f123e8":{tag:"Not",totalParticipated:18,placements:{0:13,2:3,3:1,4:1}},e58cd431:{tag:"FLORIDABOY ARANHA",totalParticipated:2,placements:{3:2}},"1a802a84":{tag:"McS33",totalParticipated:5,placements:{1:1,3:2,4:1,7:1}},a0e4e1b0:{tag:"Rix",totalParticipated:3,placements:{5:1,7:1,13:1}},"3922b2ff":{tag:"Lp de dados",totalParticipated:4,placements:{5:1,7:2,13:1}},"10417ffa":{tag:"PODEROSO PNC",totalParticipated:2,placements:{9:1,13:1}},"24a3a172":{tag:"Quinho",totalParticipated:2,placements:{9:2}},"56e62ed7":{tag:"Rocky",totalParticipated:1,placements:{9:1}},f55023d8:{tag:"Lupini",totalParticipated:1,placements:{13:1}},"4f55fb42":{tag:"Pedro",totalParticipated:6,placements:{5:1,7:2,9:1,13:2}},"7081a58b":{tag:"Guntadela",totalParticipated:3,placements:{13:1,17:2}},cfeaeec3:{tag:"Offline",totalParticipated:1,placements:{17:1}},"6e62999c":{tag:"Espeonatic",totalParticipated:2,placements:{17:2}},"2f3d7b22":{tag:"marxseny",totalParticipated:2,placements:{13:1,17:1}},dfc957cf:{tag:"Norun",totalParticipated:2,placements:{7:1,17:1}},f47b02de:{tag:"ronaldocharuto",totalParticipated:7,placements:{7:1,9:2,13:2,17:2}},"2d16bc33":{tag:"GioBr",totalParticipated:16,placements:{0:1,3:5,4:1,5:6,7:2,9:1}},d9632d80:{tag:"Aleixo",totalParticipated:6,placements:{1:3,2:2,3:1}},"8937f481":{tag:"Big Mac",totalParticipated:17,placements:{2:1,5:5,7:1,9:7,13:3}},"6c1410b5":{tag:"mellamojeff",totalParticipated:1,placements:{5:1}},c6f7ef37:{tag:"caioicy",totalParticipated:13,placements:{0:2,1:10,2:1}},"56ef33af":{tag:"Racconmiku",totalParticipated:3,placements:{1:1,5:1,7:1}},d7571ac2:{tag:"Arth14",totalParticipated:4,placements:{2:1,5:1,7:2}},fae9a3fe:{tag:"Z1C0",totalParticipated:2,placements:{9:1,13:1}},"0e9048bd":{tag:"Aceblind",totalParticipated:1,placements:{4:1}},f196ff27:{tag:"Valind0",totalParticipated:2,placements:{5:1,7:1}},d51ba1ca:{tag:"eB0NES",totalParticipated:3,placements:{5:1,7:2}},"996c10cf":{tag:"Holiday",totalParticipated:1,placements:{7:1}},fbbb5e30:{tag:"Leso",totalParticipated:1,placements:{3:1}},"8774f728":{tag:"Tinky Winky",totalParticipated:1,placements:{4:1}},"6e50e194":{tag:"Shury",totalParticipated:1,placements:{5:1}},"8227660c":{tag:"Gim",totalParticipated:1,placements:{7:1}},b4bb9116:{tag:"Wanshitong",totalParticipated:1,placements:{9:1}},"8e85a771":{tag:"Taunt",totalParticipated:1,placements:{9:1}},db658dad:{tag:"Pee2King",totalParticipated:2,placements:{3:1,17:1}},"6da45a19":{tag:"Drunk",totalParticipated:2,placements:{4:1,9:1}},"17c48ecf":{tag:"EU!?",totalParticipated:2,placements:{2:1,7:1}},"47a17210":{tag:"yanldss",totalParticipated:3,placements:{2:1,3:1,5:1}},"7bca15b4":{tag:"Kipp",totalParticipated:3,placements:{2:2,3:1}},"4b914e88":{tag:"Fatt Williams",totalParticipated:2,placements:{4:2}},c46045b8:{tag:"dede",totalParticipated:3,placements:{0:1,3:1,5:1}},ed907650:{tag:"nitegabro",totalParticipated:8,placements:{7:2,9:4,13:1,25:1}},"3c251b93":{tag:"Chevy",totalParticipated:1,placements:{1:1}},e6d9fe87:{tag:"NyxTheShield",totalParticipated:1,placements:{3:1}},"8af878fd":{tag:"Mafe2233",totalParticipated:2,placements:{7:1,9:1}},"5c51bc52":{tag:"Zim",totalParticipated:2,placements:{3:1,9:1}},"09ef8d1f":{tag:"KYDB",totalParticipated:3,placements:{9:1,13:2}},f30f464b:{tag:"Blaze Z",totalParticipated:1,placements:{17:1}},"4ea932a7":{tag:"TrickuGeeku",totalParticipated:1,placements:{17:1}},"9f793d65":{tag:"Fauro",totalParticipated:8,placements:{0:1,3:1,5:1,9:4,13:1}},b68ffd5c:{tag:"Corazza",totalParticipated:4,placements:{4:1,5:1,7:1,9:1}},b0358e51:{tag:"Kort",totalParticipated:1,placements:{3:1}},"08ad0783":{tag:"Ehro",totalParticipated:1,placements:{2:1}},af32ee3e:{tag:"Korn",totalParticipated:1,placements:{5:1}},"386aae66":{tag:"Ozzy",totalParticipated:1,placements:{9:1}},"961d6eae":{tag:"Traje fino",totalParticipated:2,placements:{5:2}},ed042ec4:{tag:"werneck",totalParticipated:3,placements:{9:2,13:1}},"8a0d3733":{tag:"Aisengobay",totalParticipated:1,placements:{2:1}},d80c9b49:{tag:"Phonix Wrong",totalParticipated:1,placements:{3:1}},"27346b54":{tag:"Capivarado",totalParticipated:2,placements:{13:2}},e81d933a:{tag:"TRZ",totalParticipated:2,placements:{1:2}},ae067bb9:{tag:"LI4R",totalParticipated:2,placements:{2:1,5:1}},ccb3841f:{tag:"Wesai",totalParticipated:1,placements:{9:1}},"3abd82af":{tag:"DanTe",totalParticipated:1,placements:{13:1}},d0de2fe4:{tag:"Cade Meu Jogo Ubi",totalParticipated:3,placements:{17:3}},ff6096ef:{tag:"mik",totalParticipated:3,placements:{7:1,17:2}},e33fff56:{tag:"Goginha",totalParticipated:1,placements:{4:1}},"39545a24":{tag:"Pie",totalParticipated:1,placements:{5:1}},"7027fd6e":{tag:"Luckstorm",totalParticipated:1,placements:{5:1}},"059b73e6":{tag:"Daltonismo",totalParticipated:1,placements:{7:1}},"2349cd06":{tag:"absgabs",totalParticipated:1,placements:{9:1}},"9ce67d46":{tag:"dAniell",totalParticipated:1,placements:{13:1}},f67ecd51:{tag:"vinny",totalParticipated:1,placements:{13:1}},"2aebd7b1":{tag:"tiosunga",totalParticipated:1,placements:{17:1}},"70b7c7ce":{tag:"Levedura",totalParticipated:2,placements:{17:2}},"4591ef67":{tag:"Quenteb",totalParticipated:1,placements:{17:1}},"011eccc0":{tag:"Secret",totalParticipated:1,placements:{5:1}},fcec5d6d:{tag:"TSUK1",totalParticipated:1,placements:{13:1}},__braacket_pgs20240715_Jokerino__:{tag:"Jokerino",totalParticipated:1,placements:{1:1}},__braacket_pgs20240715_Phoca__:{tag:"PODEROSO PNC",totalParticipated:1,placements:{7:1}},"__braacket_pgs20240715_Pedro de Verdade__":{totalParticipated:1,placements:{13:1}},"__braacket_pgs20240715_DH Hunter__":{tag:"DH Hunter",totalParticipated:1,placements:{13:1}},__tos_ludecoli__:{tag:"ludecoli",totalParticipated:2,placements:{0:2}},__tos_ScoutFluor__:{tag:"[Scout] Fluor",totalParticipated:1,placements:{0:1}}},placements:[0,1,2,3,4,5,7,9,13,17,25]},m=o=>c.db.fGetPlayerByDiscriminator(o),v=o=>{var y;const d=(y=m(o[1]))==null?void 0:y.slippiConnectCodes;return(d==null?void 0:d.length)>0?d[0]:null},A=o=>{if(o===0)return"ORG";const y={1:"st",2:"nd",3:"rd"}[o%10]||"th";return`${o}${y}`},I=o=>{const d=m(o[1]),y=d==null?void 0:d.slippiConnectCodes;return(y==null?void 0:y.length)>0};return kt(async()=>{var x;const o=P;e(2,n=o.placements);const d=[],y=new Set;for(const[_,p]of Object.entries(o.data)){const r=m(_),f=((x=m(_))==null?void 0:x.slug)||_;if(y.has(f)){for(let u=0;u<d.length;++u)if(r.sgg.includes(_)&&r.sgg.includes(d[u][1])){d[u][0]+=p.totalParticipated;for(const h of n)h in p&&(h in d[u][2].placements||(d[u][2].placements[h]=0),d[u][2].placements[h]+=p.placements[h]);break}continue}d.push([p.totalParticipated,_,p]),y.add(f)}d.sort((_,p)=>{if(p[0]!==_[0])return p[0]-_[0];for(const r of n){let f=_[2].placements[r]||-1,u=p[2].placements[r]||-1;if(r===0){let h=_[2].placements[1]||-1,B=p[2].placements[1]||-1;if(B!==h)return B-h}if(u!==f)return u-f}return p[1].localeCompare(_[1])}),e(1,l=d)}),i.$$set=o=>{"data"in o&&e(0,c=o.data)},[c,l,n,P,v,A,I]}class xt extends yt{constructor(t){super(),Et(this,t,Ot,Bt,vt,{data:0})}}export{xt as component};