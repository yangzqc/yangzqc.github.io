import{_ as C,r as n,g as S,h as A,i as B,c as o,o as l,j as w,a as r,v as I,F as h,b as _,t as F,n as M}from"./app-CXCSJ1zq.js";const T={class:"masonry-container"},D={class:"loading-container"},j={class:"error-overlay"},N={class:"error-list"},R={class:"masonry-grid"},U=["src","alt"],V=15,$=260,q={__name:"ImageMasonry",props:{images:{type:Array,default:()=>[]}},setup(x){const E=x;function L(t,e){let s;return function(...d){const g=()=>{clearTimeout(s),t(...d)};clearTimeout(s),s=setTimeout(g,e)}}const a=n(4),f=n($),W=n(window.innerWidth),v=n(!0),u=n([]),c=n(0),m=n(E.images),p=()=>{const t=window.innerWidth;W.value=t,t>=1200?a.value=4:t>=900?a.value=3:t>=600?a.value=2:a.value=1;const e=t;f.value=(e-(a.value-1)*V)/a.value},k=S(()=>{const t=Array.from({length:a.value},()=>[]);return m.value.forEach((e,s)=>{const i=s%a.value;t[i].push(e)}),t}),b=t=>{const e=t.target;e.style.width="100%",e.style.height="auto",c.value++,c.value===m.value.length&&(v.value=!1)},z=t=>{const e=t.target;u.value.includes(e.alt)||u.value.push(e.alt),c.value++,c.value===m.value.length&&(v.value=!1)},y=L(()=>{p()},200);return A(()=>{p(),window.addEventListener("resize",y)}),B(()=>{window.removeEventListener("resize",y)}),(t,e)=>(l(),o("div",T,[w(r("div",D,e[0]||(e[0]=[r("div",{class:"loading-spinner"},"正在加载中，请稍等...",-1)]),512),[[I,v.value]]),w(r("div",j,[e[1]||(e[1]=r("div",{class:"error-title"},"以下图片加载失败：",-1)),r("ul",N,[(l(!0),o(h,null,_(u.value,(s,i)=>(l(),o("li",{key:i},F(s),1))),128))])],512),[[I,u.value.length]]),r("div",R,[(l(!0),o(h,null,_(k.value,(s,i)=>(l(),o("div",{key:i,class:"masonry-column",style:M({width:`${f.value}px`})},[(l(!0),o(h,null,_(s,(d,g)=>(l(),o("div",{key:g,class:"masonry-item"},[r("img",{src:d.imageSrc,alt:d.imageAlt,onLoad:b,onError:z},null,40,U)]))),128))],4))),128))])]))}},H=C(q,[["__scopeId","data-v-4092f8a3"]]);export{H as I};
