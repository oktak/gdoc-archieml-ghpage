import{S as l,i as a,s as t,e as o,t as e,c as n,b as s,d as r,f as i,h,j as c,k as d,l as u,a as f,g,n as v,p as m}from"../index-29826749.js";function p(l,a,t){const o=l.slice();return o[3]=a[t],o}function k(l,a,t){const o=l.slice();return o[6]=a[t],o}function b(l){let a,t,f,g=l[1]+1+"";return{c(){a=o("span"),t=e(g),f=e("."),this.h()},l(l){a=n(l,"SPAN",{class:!0});var o=s(a);t=r(o,g),f=r(o,"."),o.forEach(i),this.h()},h(){h(a,"class","hook-number svelte-1gwtyoy")},m(l,o){c(l,a,o),d(a,t),d(a,f)},p(l,a){2&a&&g!==(g=l[1]+1+"")&&u(t,g)},d(l){l&&i(a)}}}function E(l){let a,t=l[0].hook+"";return{c(){a=e(t)},l(l){a=r(l,t)},m(l,t){c(l,a,t)},p(l,o){1&o&&t!==(t=l[0].hook+"")&&u(a,t)},d(l){l&&i(a)}}}function y(l){let a,t,f,g=l[0].hook+"";return{c(){a=o("a"),t=e(g),this.h()},l(l){a=n(l,"A",{href:!0});var o=s(a);t=r(o,g),o.forEach(i),this.h()},h(){h(a,"href",f=l[0].link)},m(l,o){c(l,a,o),d(a,t)},p(l,o){1&o&&g!==(g=l[0].hook+"")&&u(t,g),1&o&&f!==(f=l[0].link)&&h(a,"href",f)},d(l){l&&i(a)}}}function D(l){let a,t,v,m,p=l[6]+"";return{c(){a=o("div"),t=e(p),v=f(),this.h()},l(l){a=n(l,"DIV",{class:!0,"data-balloon-length":!0,"data-balloon-pos":!0,"aria-label":!0});var o=s(a);t=r(o,p),v=g(o),o.forEach(i),this.h()},h(){h(a,"class","code svelte-1gwtyoy"),h(a,"data-balloon-length","medium"),h(a,"data-balloon-pos","up"),h(a,"aria-label",m=l[2][l[6]])},m(l,o){c(l,a,o),d(a,t),d(a,v)},p(l,o){1&o&&p!==(p=l[6]+"")&&u(t,p),5&o&&m!==(m=l[2][l[6]])&&h(a,"aria-label",m)},d(l){l&&i(a)}}}function w(l){let a,t,v,m,p=l[3]+"";return{c(){a=o("div"),t=e(p),v=f(),this.h()},l(l){a=n(l,"DIV",{class:!0,"data-balloon-length":!0,"data-balloon-pos":!0,"aria-label":!0});var o=s(a);t=r(o,p),v=g(o),o.forEach(i),this.h()},h(){h(a,"class","code svelte-1gwtyoy"),h(a,"data-balloon-length","medium"),h(a,"data-balloon-pos","up"),h(a,"aria-label",m=l[2][l[3]])},m(l,o){c(l,a,o),d(a,t),d(a,v)},p(l,o){1&o&&p!==(p=l[3]+"")&&u(t,p),5&o&&m!==(m=l[2][l[3]])&&h(a,"aria-label",m)},d(l){l&&i(a)}}}function x(l){let a,t,h;return{c(){a=o("div"),t=o("small"),h=e("This hook is an 'advanced' hook meaning it geared towards advanced users or plugins.")},l(l){a=n(l,"DIV",{});var o=s(a);t=n(o,"SMALL",{});var e=s(t);h=r(e,"This hook is an 'advanced' hook meaning it geared towards advanced users or plugins."),e.forEach(i),o.forEach(i)},m(l,o){c(l,a,o),d(a,t),d(t,h)},d(l){l&&i(a)}}}function S(l){let a,t,S,I,L,V,M,T,A,N,P,j,G,H,O,R,$,q,z,B,C,F,J,K,Q=l[0].context+"",U=l[0].use+"",W=l[0].expiremental?"Expiremental":"Stable",X=l[0].location+"",Y=(l[1]||0===l[1])&&b(l);function Z(l,a){return l[0].link&&l[0].link.length>0?y:E}let _=Z(l),ll=_(l),al=l[0].props,tl=[];for(let a=0;a<al.length;a+=1)tl[a]=D(k(l,al,a));let ol=l[0].mutable,el=[];for(let a=0;a<ol.length;a+=1)el[a]=w(p(l,ol,a));let nl=l[0].advanced&&x();return{c(){a=o("div"),Y&&Y.c(),t=f(),S=o("div"),I=o("span"),ll.c(),L=e(" : "),V=e(Q),M=f(),T=o("div"),A=f(),N=o("div"),P=o("strong"),j=e("Props"),G=e(" : ");for(let l=0;l<tl.length;l+=1)tl[l].c();H=f(),O=o("div"),R=o("strong"),$=e("Mutable"),q=e(" : ");for(let l=0;l<el.length;l+=1)el[l].c();z=f(),nl&&nl.c(),B=f(),C=o("small"),F=e(W),J=e(" · Location: "),K=e(X),this.h()},l(l){a=n(l,"DIV",{class:!0});var o=s(a);Y&&Y.l(o),t=g(o),S=n(o,"DIV",{class:!0});var e=s(S);I=n(e,"SPAN",{class:!0});var h=s(I);ll.l(h),h.forEach(i),L=r(e," : "),V=r(e,Q),e.forEach(i),M=g(o),T=n(o,"DIV",{class:!0}),s(T).forEach(i),A=g(o),N=n(o,"DIV",{class:!0});var c=s(N);P=n(c,"STRONG",{});var d=s(P);j=r(d,"Props"),d.forEach(i),G=r(c," : ");for(let l=0;l<tl.length;l+=1)tl[l].l(c);c.forEach(i),H=g(o),O=n(o,"DIV",{class:!0});var u=s(O);R=n(u,"STRONG",{});var f=s(R);$=r(f,"Mutable"),f.forEach(i),q=r(u," : ");for(let l=0;l<el.length;l+=1)el[l].l(u);u.forEach(i),z=g(o),nl&&nl.l(o),B=g(o),C=n(o,"SMALL",{});var v=s(C);F=r(v,W),J=r(v," · Location: "),K=r(v,X),v.forEach(i),o.forEach(i),this.h()},h(){h(I,"class","hook-name"),h(S,"class","overview svelte-1gwtyoy"),h(T,"class","use svelte-1gwtyoy"),h(N,"class","list svelte-1gwtyoy"),h(O,"class","list svelte-1gwtyoy"),h(a,"class","hook svelte-1gwtyoy")},m(l,o){c(l,a,o),Y&&Y.m(a,null),d(a,t),d(a,S),d(S,I),ll.m(I,null),d(S,L),d(S,V),d(a,M),d(a,T),T.innerHTML=U,d(a,A),d(a,N),d(N,P),d(P,j),d(N,G);for(let l=0;l<tl.length;l+=1)tl[l].m(N,null);d(a,H),d(a,O),d(O,R),d(R,$),d(O,q);for(let l=0;l<el.length;l+=1)el[l].m(O,null);d(a,z),nl&&nl.m(a,null),d(a,B),d(a,C),d(C,F),d(C,J),d(C,K)},p(l,[o]){if(l[1]||0===l[1]?Y?Y.p(l,o):(Y=b(l),Y.c(),Y.m(a,t)):Y&&(Y.d(1),Y=null),_===(_=Z(l))&&ll?ll.p(l,o):(ll.d(1),ll=_(l),ll&&(ll.c(),ll.m(I,null))),1&o&&Q!==(Q=l[0].context+"")&&u(V,Q),1&o&&U!==(U=l[0].use+"")&&(T.innerHTML=U),5&o){let a;for(al=l[0].props,a=0;a<al.length;a+=1){const t=k(l,al,a);tl[a]?tl[a].p(t,o):(tl[a]=D(t),tl[a].c(),tl[a].m(N,null))}for(;a<tl.length;a+=1)tl[a].d(1);tl.length=al.length}if(5&o){let a;for(ol=l[0].mutable,a=0;a<ol.length;a+=1){const t=p(l,ol,a);el[a]?el[a].p(t,o):(el[a]=w(t),el[a].c(),el[a].m(O,null))}for(;a<el.length;a+=1)el[a].d(1);el.length=ol.length}l[0].advanced?nl||(nl=x(),nl.c(),nl.m(a,B)):nl&&(nl.d(1),nl=null),1&o&&W!==(W=l[0].expiremental?"Expiremental":"Stable")&&u(F,W),1&o&&X!==(X=l[0].location+"")&&u(K,X)},i:v,o:v,d(l){l&&i(a),Y&&Y.d(),ll.d(),m(tl,l),m(el,l),nl&&nl.d()}}}function I(l,a,t){let{hook:o}=a,{i:e}=a,{hookEntityDefinitions:n}=a;return l.$$set=l=>{"hook"in l&&t(0,o=l.hook),"i"in l&&t(1,e=l.i),"hookEntityDefinitions"in l&&t(2,n=l.hookEntityDefinitions)},[o,e,n]}export default class extends l{constructor(l){super(),a(this,l,I,S,t,{hook:0,i:1,hookEntityDefinitions:2})}}