import{s as _t,o as bt,n as at}from"../chunks/scheduler.BBINyCwK.js";import{S as yt,i as kt,e as E,s as M,c as T,a as x,v as Y,b as O,f as C,g as w,h as Z,j as m,k as W,n as ht,m as U,w as X,t as H,d as L,o as tt,l as Pt,x as st,p as Ct,q as Et,r as Tt,u as Dt}from"../chunks/index.CWDOeH18.js";import{e as N}from"../chunks/flag.svelte_svelte_type_style_lang.BEUOZ2m7.js";import{C as wt}from"../chunks/cellPlayer.60pu_rtH.js";function ot(s,t,e){const c=s.slice();return c[9]=t[e],c}function rt(s,t,e){const c=s.slice();return c[12]=t[e],c}function pt(s,t,e){const c=s.slice();return c[15]=t[e],c}function mt(s,t,e){const c=s.slice();return c[15]=t[e],c}function dt(s){let t,e=s[5](s[15])+"",c;return{c(){t=E("th"),c=H(e),this.h()},l(l){t=T(l,"TH",{class:!0});var n=x(t);c=L(n,e),n.forEach(C),this.h()},h(){w(t,"class","svelte-v693ym")},m(l,n){Z(l,t,n),m(t,c)},p(l,n){n&4&&e!==(e=l[5](l[15])+"")&&tt(c,e)},d(l){l&&C(t)}}}function Bt(s){var l;let t,e=((l=s[12][2])==null?void 0:l.tag)+"",c;return{c(){t=E("td"),c=H(e),this.h()},l(n){t=T(n,"TD",{class:!0});var P=x(t);c=L(P,e),P.forEach(C),this.h()},h(){w(t,"class","svelte-v693ym")},m(n,P){Z(n,t,P),m(t,c)},p(n,P){var f;P&2&&e!==(e=((f=n[12][2])==null?void 0:f.tag)+"")&&tt(c,e)},i:at,o:at,d(n){n&&C(t)}}}function At(s){let t,e,c;return e=new wt({props:{data:s[0],code:s[4](s[12]),tagAsName:!0}}),{c(){t=E("td"),Ct(e.$$.fragment),this.h()},l(l){t=T(l,"TD",{class:!0});var n=x(t);Et(e.$$.fragment,n),n.forEach(C),this.h()},h(){w(t,"class","svelte-v693ym")},m(l,n){Z(l,t,n),Tt(e,t,null),c=!0},p(l,n){const P={};n&1&&(P.data=l[0]),n&2&&(P.code=l[4](l[12])),e.$set(P)},i(l){c||(W(e.$$.fragment,l),c=!0)},o(l){U(e.$$.fragment,l),c=!1},d(l){l&&C(t),Dt(e)}}}function ft(s){let t,e=(s[12][2].placements[s[15]]||"-")+"",c;return{c(){t=E("td"),c=H(e),this.h()},l(l){t=T(l,"TD",{class:!0});var n=x(t);c=L(n,e),n.forEach(C),this.h()},h(){w(t,"class","text-md font-bold svelte-v693ym"),st(t,"noPlacement",(s[12][2].placements[s[15]]||0)<=0)},m(l,n){Z(l,t,n),m(t,c)},p(l,n){n&6&&e!==(e=(l[12][2].placements[l[15]]||"-")+"")&&tt(c,e),n&6&&st(t,"noPlacement",(l[12][2].placements[l[15]]||0)<=0)},d(l){l&&C(t)}}}function gt(s){let t,e,c=s[12][0]+"",l,n,P,f,v,D,B,r;const p=[At,Bt],k=[];function R(o,_){return _&2&&(P=null),P==null&&(P=!!o[6](o[12])),P?0:1}f=R(s,-1),v=k[f]=p[f](s);let g=N(s[2]),d=[];for(let o=0;o<g.length;o+=1)d[o]=ft(pt(s,g,o));return{c(){t=E("tr"),e=E("td"),l=H(c),n=M(),v.c(),D=M();for(let o=0;o<d.length;o+=1)d[o].c();B=M(),this.h()},l(o){t=T(o,"TR",{class:!0});var _=x(t);e=T(_,"TD",{class:!0});var u=x(e);l=L(u,c),u.forEach(C),n=O(_),v.l(_),D=O(_);for(let h=0;h<d.length;h+=1)d[h].l(_);B=O(_),_.forEach(C),this.h()},h(){w(e,"class","svelte-v693ym"),w(t,"class","bg-primary-main")},m(o,_){Z(o,t,_),m(t,e),m(e,l),m(t,n),k[f].m(t,null),m(t,D);for(let u=0;u<d.length;u+=1)d[u]&&d[u].m(t,null);m(t,B),r=!0},p(o,_){(!r||_&2)&&c!==(c=o[12][0]+"")&&tt(l,c);let u=f;if(f=R(o,_),f===u?k[f].p(o,_):(Pt(),U(k[u],1,1,()=>{k[u]=null}),ht(),v=k[f],v?v.p(o,_):(v=k[f]=p[f](o),v.c()),W(v,1),v.m(t,D)),_&6){g=N(o[2]);let h;for(h=0;h<g.length;h+=1){const q=pt(o,g,h);d[h]?d[h].p(q,_):(d[h]=ft(q),d[h].c(),d[h].m(t,B))}for(;h<d.length;h+=1)d[h].d(1);d.length=g.length}},i(o){r||(W(v),r=!0)},o(o){U(v),r=!1},d(o){o&&C(t),k[f].d(),X(d,o)}}}function ut(s){let t,e,c,l=s[9].split("/")[1]+"",n,P,f=s[9].split("/")[3]+"",v,D;return{c(){t=E("div"),e=E("a"),c=H("start.gg/"),n=H(l),P=H("/"),v=H(f),D=M(),this.h()},l(B){t=T(B,"DIV",{class:!0});var r=x(t);e=T(r,"A",{href:!0,class:!0});var p=x(e);c=L(p,"start.gg/"),n=L(p,l),P=L(p,"/"),v=L(p,f),p.forEach(C),D=O(r),r.forEach(C),this.h()},h(){w(e,"href",`https://start.gg/${s[9]}`),w(e,"class","svelte-v693ym"),w(t,"class","bg-[#ffffff14] m-2 text-center")},m(B,r){Z(B,t,r),m(t,e),m(e,c),m(e,n),m(e,P),m(e,v),m(t,D)},p:at,d(B){B&&C(t)}}}function St(s){let t,e,c="MELEE BR",l,n,P="Tracker de torneios participados, 2024.",f,v,D,B,r,p,k="#",R,g,d="Player",o,_,u,h,q,K,lt='<p class="text-lg font-bold ml-3">Torneios</p>',et,V,J,j=N(s[2]),A=[];for(let i=0;i<j.length;i+=1)A[i]=dt(mt(s,j,i));let $=N(s[1]),y=[];for(let i=0;i<$.length;i+=1)y[i]=gt(rt(s,$,i));const vt=i=>U(y[i],1,1,()=>{y[i]=null});let z=N(s[3].events),S=[];for(let i=0;i<z.length;i+=1)S[i]=ut(ot(s,z,i));return{c(){t=E("section"),e=E("h1"),e.textContent=c,l=M(),n=E("p"),n.textContent=P,f=M(),v=E("div"),D=E("table"),B=E("thead"),r=E("tr"),p=E("th"),p.textContent=k,R=M(),g=E("th"),g.textContent=d,o=M();for(let i=0;i<A.length;i+=1)A[i].c();_=M(),u=E("tbody");for(let i=0;i<y.length;i+=1)y[i].c();h=M(),q=E("div"),K=E("div"),K.innerHTML=lt,et=M(),V=E("div");for(let i=0;i<S.length;i+=1)S[i].c();this.h()},l(i){t=T(i,"SECTION",{class:!0});var b=x(t);e=T(b,"H1",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1k0zjps"&&(e.textContent=c),l=O(b),n=T(b,"P",{"data-svelte-h":!0}),Y(n)!=="svelte-ugllfb"&&(n.textContent=P),f=O(b),v=T(b,"DIV",{class:!0});var a=x(v);D=T(a,"TABLE",{class:!0});var I=x(D);B=T(I,"THEAD",{});var nt=x(B);r=T(nt,"TR",{class:!0});var F=x(r);p=T(F,"TH",{class:!0,"data-svelte-h":!0}),Y(p)!=="svelte-7cs45d"&&(p.textContent=k),R=O(F),g=T(F,"TH",{class:!0,"data-svelte-h":!0}),Y(g)!=="svelte-1hwug43"&&(g.textContent=d),o=O(F);for(let G=0;G<A.length;G+=1)A[G].l(F);F.forEach(C),nt.forEach(C),_=O(I),u=T(I,"TBODY",{});var ct=x(u);for(let G=0;G<y.length;G+=1)y[G].l(ct);ct.forEach(C),I.forEach(C),a.forEach(C),h=O(b),q=T(b,"DIV",{class:!0});var Q=x(q);K=T(Q,"DIV",{class:!0,"data-svelte-h":!0}),Y(K)!=="svelte-fn0dpt"&&(K.innerHTML=lt),et=O(Q),V=T(Q,"DIV",{class:!0});var it=x(V);for(let G=0;G<S.length;G+=1)S[G].l(it);it.forEach(C),Q.forEach(C),b.forEach(C),this.h()},h(){w(e,"class","text-4xl font-medium mb-2"),w(p,"class","svelte-v693ym"),w(g,"class","svelte-v693ym"),w(r,"class","text-primary-light bg-purple"),w(D,"class","border-collapse w-full svelte-v693ym"),w(v,"class",""),w(K,"class","flex flex-row w-full h-9 items-center bg-purple"),w(V,"class","grid grid-cols-5 p-2 border-y border-primary-dark"),w(q,"class","bg-primary-main w-inherit mt-8 rounded"),w(t,"class","grid grid-cols-1 w-full min-w-[1024px] max-w-[1024px] my-8")},m(i,b){Z(i,t,b),m(t,e),m(t,l),m(t,n),m(t,f),m(t,v),m(v,D),m(D,B),m(B,r),m(r,p),m(r,R),m(r,g),m(r,o);for(let a=0;a<A.length;a+=1)A[a]&&A[a].m(r,null);m(D,_),m(D,u);for(let a=0;a<y.length;a+=1)y[a]&&y[a].m(u,null);m(t,h),m(t,q),m(q,K),m(q,et),m(q,V);for(let a=0;a<S.length;a+=1)S[a]&&S[a].m(V,null);J=!0},p(i,[b]){if(b&36){j=N(i[2]);let a;for(a=0;a<j.length;a+=1){const I=mt(i,j,a);A[a]?A[a].p(I,b):(A[a]=dt(I),A[a].c(),A[a].m(r,null))}for(;a<A.length;a+=1)A[a].d(1);A.length=j.length}if(b&87){$=N(i[1]);let a;for(a=0;a<$.length;a+=1){const I=rt(i,$,a);y[a]?(y[a].p(I,b),W(y[a],1)):(y[a]=gt(I),y[a].c(),W(y[a],1),y[a].m(u,null))}for(Pt(),a=$.length;a<y.length;a+=1)vt(a);ht()}if(b&8){z=N(i[3].events);let a;for(a=0;a<z.length;a+=1){const I=ot(i,z,a);S[a]?S[a].p(I,b):(S[a]=ut(I),S[a].c(),S[a].m(V,null))}for(;a<S.length;a+=1)S[a].d(1);S.length=z.length}},i(i){if(!J){for(let b=0;b<$.length;b+=1)W(y[b]);J=!0}},o(i){y=y.filter(Boolean);for(let b=0;b<y.length;b+=1)U(y[b]);J=!1},d(i){i&&C(t),X(A,i),X(y,i),X(S,i)}}}function xt(s,t,e){let{data:c={}}=t,l=[],n=[1,2,3,4,5];const P={timestamp:1720279311544,events:["tournament/circuito-paulista-de-i-smash-junho-2024/event/melee-singles","tournament/circuito-paulista-de-i-smash-mar-o-2024/event/melee-singles","tournament/fodase/event/melee-singles","tournament/last-hit-11-rj/event/last-hit-super-smash-bros-melee","tournament/melee-br-by-not/event/esq-1","tournament/melee-br-by-not/event/esq-2","tournament/melee-br-by-not/event/esq-3","tournament/melee-br-by-not/event/esq-4","tournament/melee-br-by-not/event/esq-5","tournament/melee-br-by-not/event/esq-6","tournament/melee-br-by-not/event/esq-8","tournament/melee-br-by-not/event/esq-9","tournament/melee-br-by-not/event/liga-melee-br-fev","tournament/melee-br-by-not/event/liga-melee-br-mar","tournament/melee-side-3f-fight-for-the-future/event/3f-melee-side","tournament/pvp-arena-1/event/melee-singles","tournament/pvp-arena-2/event/melee-singles","tournament/smash-fellas-14/event/melee-singles","tournament/smash-fellas-15/event/melee-singles","tournament/smash-gelas/event/melee-singles","tournament/smatchelee-1/event/sloppi","tournament/smatchelee-10/event/sloppi","tournament/smatchelee-11/event/sloppi","tournament/smatchelee-2/event/sloppi","tournament/smatchelee-3/event/sloppi","tournament/smatchelee-5/event/sloppi","tournament/smatchelee-6/event/sloppi","tournament/smatchelee-7/event/sloppi","tournament/smatchelee-8/event/sloppi","tournament/smatchelee-9/event/sloppi"],data:{34771820:{tag:"wankinha",totalParticipated:3,placements:{5:1,9:2}},41242789:{tag:"Bach",totalParticipated:1,placements:{5:1}},42368772:{tag:"pastheo",totalParticipated:2,placements:{5:2}},48756749:{tag:"GNES42",totalParticipated:1,placements:{9:1}},55128576:{tag:"alice chinchila",totalParticipated:1,placements:{4:1}},e100347c:{tag:"W4rio",totalParticipated:17,placements:{1:8,2:8,3:1}},c227bc45:{tag:"Kopfcine",totalParticipated:12,placements:{1:4,2:4,3:3,4:1}},"34c5c34c":{tag:"JUDITE",totalParticipated:3,placements:{2:2,3:1}},a338d50f:{tag:"Kiw",totalParticipated:1,placements:{4:1}},f0a3386e:{tag:"Fonsie",totalParticipated:4,placements:{5:3,7:1}},"5a1d4c2b":{tag:"Zen",totalParticipated:9,placements:{2:1,3:2,4:1,5:5}},"229262a3":{tag:"Buttelli",totalParticipated:11,placements:{3:2,4:2,5:3,7:3,9:1}},"304019cf":{tag:"delaberry",totalParticipated:1,placements:{7:1}},"25a3c7d6":{tag:"Pintinho",totalParticipated:1,placements:{9:1}},f120989d:{tag:"Smoke",totalParticipated:1,placements:{9:1}},bc8fff89:{tag:"DALSU",totalParticipated:3,placements:{5:2,9:1}},ec18de9d:{tag:"Geova",totalParticipated:1,placements:{9:1}},b70231fe:{tag:"peebs",totalParticipated:1,placements:{13:1}},"9ee4f06a":{tag:"Balas",totalParticipated:3,placements:{7:2,13:1}},f13da7f8:{tag:"Dewrion",totalParticipated:9,placements:{3:1,4:2,5:2,7:1,9:2,13:1}},fbf2e7e4:{tag:"TheDuckInBlue",totalParticipated:1,placements:{17:1}},"2bc50672":{tag:"Garfo",totalParticipated:1,placements:{17:1}},d6c481e4:{tag:"Kiki",totalParticipated:3,placements:{1:3}},"162fd7e5":{tag:"TXR",totalParticipated:15,placements:{1:1,2:1,3:2,4:2,5:5,7:2,9:2}},"158d12c4":{tag:"naiO",totalParticipated:2,placements:{3:1,5:1}},"6db881e7":{tag:"P",totalParticipated:1,placements:{4:1}},"5580ba64":{tag:"Yalda",totalParticipated:1,placements:{5:1}},"67e845f3":{tag:"Monkey",totalParticipated:1,placements:{7:1}},"7c352bf7":{tag:"bacabau",totalParticipated:1,placements:{7:1}},"226754a1":{tag:"Vlory",totalParticipated:3,placements:{1:2,4:1}},"18963e5d":{tag:"Macachita",totalParticipated:3,placements:{4:2,7:1}},"3e1e7cad":{tag:"fofo",totalParticipated:10,placements:{4:6,5:2,7:2}},"1e51071d":{tag:"Miguelito",totalParticipated:11,placements:{4:1,5:2,6:1,7:3,9:3,13:1}},b9fd55f7:{tag:"werneck",totalParticipated:1,placements:{9:1}},a83cf36f:{tag:"Tia Silvia",totalParticipated:1,placements:{2:1}},be9a0b7c:{tag:"Tio da Samus",totalParticipated:2,placements:{2:1,3:1}},"33f19991":{tag:"Aceblind",totalParticipated:1,placements:{5:1}},e44151e8:{tag:"Claus",totalParticipated:2,placements:{5:2}},bbf1d61d:{tag:":Paulo",totalParticipated:1,placements:{7:1}},"59093dae":{tag:"Takkar",totalParticipated:5,placements:{3:1,4:1,7:1,9:2}},"714cea55":{tag:"Pomini",totalParticipated:1,placements:{3:1}},"7180d9ab":{tag:"RODIZ_",totalParticipated:1,placements:{9:1}},"22f7681f":{tag:"Mitsu",totalParticipated:3,placements:{2:2,5:1}},b36ce01e:{tag:"dnk",totalParticipated:4,placements:{7:1,9:1,13:1,25:1}},bc23af58:{tag:"Jota",totalParticipated:5,placements:{5:1,7:1,9:2,17:1}},c1ccf421:{tag:"Zekiki",totalParticipated:2,placements:{7:1,8:1}},"82a10d6e":{tag:"Guiler",totalParticipated:1,placements:{2:1}},c4a637a7:{tag:"IzZI127",totalParticipated:1,placements:{1:1}},"98f123e8":{tag:"Not",totalParticipated:3,placements:{2:2,4:1}},e58cd431:{tag:"FLORIDABOY ARANHA",totalParticipated:1,placements:{3:1}},"1a802a84":{tag:"McS33",totalParticipated:5,placements:{1:1,3:2,4:1,7:1}},a0e4e1b0:{tag:"Rix",totalParticipated:3,placements:{5:1,7:1,13:1}},"3922b2ff":{tag:"Lp de dados",totalParticipated:4,placements:{5:1,7:2,13:1}},"10417ffa":{tag:"PODEROSO PNC",totalParticipated:2,placements:{9:1,13:1}},"24a3a172":{tag:"Quinho",totalParticipated:1,placements:{9:1}},"56e62ed7":{tag:"Rocky",totalParticipated:1,placements:{9:1}},f55023d8:{tag:"Lupini",totalParticipated:1,placements:{13:1}},"4f55fb42":{tag:"Pedro de Verdade",totalParticipated:4,placements:{5:1,7:1,9:1,13:1}},"7081a58b":{tag:"Guntadela",totalParticipated:2,placements:{17:2}},cfeaeec3:{tag:"Offline",totalParticipated:1,placements:{17:1}},"6e62999c":{tag:"Espeonatic",totalParticipated:2,placements:{17:2}},"2f3d7b22":{tag:"marxseny",totalParticipated:1,placements:{17:1}},dfc957cf:{tag:"Norun",totalParticipated:1,placements:{17:1}},f47b02de:{tag:"ronaldocharuto",totalParticipated:5,placements:{7:1,9:1,13:1,17:2}},"2d16bc33":{tag:"GioBr",totalParticipated:10,placements:{3:5,4:1,5:3,9:1}},d9632d80:{tag:"Aleixo",totalParticipated:5,placements:{1:3,2:1,3:1}},"8937f481":{tag:"Big Mac",totalParticipated:11,placements:{5:4,7:1,9:4,13:2}},"6c1410b5":{tag:"mellamojeff",totalParticipated:1,placements:{5:1}},c6f7ef37:{tag:"caioicy",totalParticipated:7,placements:{1:6,2:1}},"56ef33af":{tag:"Racconmiku",totalParticipated:2,placements:{5:1,7:1}},d7571ac2:{tag:"Arth14",totalParticipated:3,placements:{2:1,5:1,7:1}},fae9a3fe:{tag:"Z1C0",totalParticipated:1,placements:{13:1}},"0e9048bd":{tag:"Aceblind",totalParticipated:1,placements:{4:1}},f196ff27:{tag:"Valind0",totalParticipated:2,placements:{5:1,7:1}},d51ba1ca:{tag:"eB0NES",totalParticipated:2,placements:{7:2}},"996c10cf":{tag:"Holiday",totalParticipated:1,placements:{7:1}},fbbb5e30:{tag:"Leso",totalParticipated:1,placements:{3:1}},"8774f728":{tag:"Tinky Winky",totalParticipated:1,placements:{4:1}},"6e50e194":{tag:"Shury",totalParticipated:1,placements:{5:1}},"8227660c":{tag:"Gim",totalParticipated:1,placements:{7:1}},b4bb9116:{tag:"Wanshitong",totalParticipated:1,placements:{9:1}},"8e85a771":{tag:"Taunt",totalParticipated:1,placements:{9:1}},db658dad:{tag:"Pee2King",totalParticipated:2,placements:{3:1,17:1}},"6da45a19":{tag:"Drunk",totalParticipated:1,placements:{4:1}},"17c48ecf":{tag:"EU!?",totalParticipated:2,placements:{2:1,7:1}},"47a17210":{tag:"yanldss",totalParticipated:2,placements:{2:1,5:1}},"7bca15b4":{tag:"Kipp",totalParticipated:2,placements:{2:2}},"4b914e88":{tag:"Fatt Williams",totalParticipated:2,placements:{4:2}},c46045b8:{tag:"dede",totalParticipated:2,placements:{3:1,5:1}},ed907650:{tag:"nitegabro",totalParticipated:4,placements:{7:2,9:1,25:1}},"3c251b93":{tag:"Chevy",totalParticipated:1,placements:{1:1}},e6d9fe87:{tag:"NyxTheShield",totalParticipated:1,placements:{3:1}},"8af878fd":{tag:"Mafe2233",totalParticipated:1,placements:{9:1}},"5c51bc52":{tag:"Zim",totalParticipated:1,placements:{9:1}},"09ef8d1f":{tag:"KYDB",totalParticipated:1,placements:{13:1}},f30f464b:{tag:"Blaze Z",totalParticipated:1,placements:{17:1}},"4ea932a7":{tag:"TrickuGeeku",totalParticipated:1,placements:{17:1}},"9f793d65":{tag:"Fauro",totalParticipated:3,placements:{5:1,9:2}},b68ffd5c:{tag:"Corazza",totalParticipated:1,placements:{5:1}},b0358e51:{tag:"Kort",totalParticipated:1,placements:{3:1}}},placements:[1,2,3,4,5,7,9,13,17,25]},f=r=>c.db.fGetPlayerByDiscriminator(r),v=r=>{var k;const p=(k=f(r[1]))==null?void 0:k.slippiConnectCodes;return(p==null?void 0:p.length)>0?p[0]:null},D=r=>{const k={1:"st",2:"nd",3:"rd"}[r%10]||"th";return`${r}${k}`},B=r=>{const p=f(r[1]),k=p==null?void 0:p.slippiConnectCodes;return(k==null?void 0:k.length)>0};return bt(async()=>{var R;const r=P;e(2,n=r.placements);const p=[],k=new Set;for(const[g,d]of Object.entries(r.data)){const o=f(g),_=((R=f(g))==null?void 0:R.slug)||g;if(k.has(_)){for(let u=0;u<p.length;++u)if(o.sgg.includes(g)&&o.sgg.includes(p[u][1])){p[u][0]+=d.totalParticipated;for(const h of n)h in d&&(h in p[u][2].placements||(p[u][2].placements[h]=0),p[u][2].placements[h]+=d.placements[h]);break}continue}p.push([d.totalParticipated,g,d]),k.add(_)}p.sort((g,d)=>{if(d[0]!==g[0])return d[0]-g[0];for(const o of n)if((d[2].placements[o]||0)!==(g[2].placements[o]||0))return(d[2].placements[o]||0)-(g[2].placements[o]||0);return d[1].localeCompare(g[1])}),e(1,l=p)}),s.$$set=r=>{"data"in r&&e(0,c=r.data)},[c,l,n,P,v,D,B]}class Ot extends yt{constructor(t){super(),kt(this,t,xt,St,_t,{data:0})}}export{Ot as component};
