import{_ as A,r as h,c as r,d as $,w as o,e as w,o as i,a as c,F as u,b as d,f}from"./app-UGwjUi0H.js";const I={class:"grid-container"},S=["src","alt"],U={class:"grid-container"},N=["src","alt"],k={class:"grid-container"},E=["src","alt"],j={class:"grid-container"},Y=["src","alt"],B={__name:"index.html",setup(F){const m=(n,e)=>`${n}-${e<9?0:""}${e+1}`,p=n=>n===0?".webp":n===1?".png":".jpg",v=()=>{const n="https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/gongyuan/",e=[];return Array.from({length:10}).forEach((g,t)=>{const a=m("gongyuan",t);e.push({imageUrl:`${n}${a}${p(t)}`,altText:a})}),e},y=()=>{const n="https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/fenghuangshan/",e=[];return Array.from({length:10}).forEach((g,t)=>{const a=m("fenghuangshan",t);e.push({imageUrl:`${n}${a}.jpg`,altText:a})}),e},b=()=>{const n="https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/wutongshan/",e=[];return Array.from({length:7}).forEach((g,t)=>{const a=m("wutongshan",t);e.push({imageUrl:`${n}${a}.jpg`,altText:a})}),e},_=()=>{const n="https://memories.obs.cn-south-1.myhuaweicloud.com/shenzhen/yangtaishan/",e=[];return Array.from({length:4}).forEach((g,t)=>{const a=m("yangtaishan",t);e.push({imageUrl:`${n}${a}.jpeg`,altText:a})}),e},x=h(v()),z=h(y()),T=h(b()),q=h(_());return(n,e)=>{const g=w("Tabs");return i(),r("div",null,[$(g,{id:"0",data:[{id:"公园"},{id:"凤凰山"},{id:"梧桐山"},{id:"羊台山"}]},{title0:o(({value:t,isActive:a})=>e[0]||(e[0]=[f("公园")])),title1:o(({value:t,isActive:a})=>e[1]||(e[1]=[f("凤凰山")])),title2:o(({value:t,isActive:a})=>e[2]||(e[2]=[f("梧桐山")])),title3:o(({value:t,isActive:a})=>e[3]||(e[3]=[f("羊台山")])),tab0:o(({value:t,isActive:a})=>[c("div",I,[(i(!0),r(u,null,d(x.value,(s,l)=>(i(),r("div",{key:l,class:"grid-item"},[c("img",{src:s.imageUrl,alt:s.altText},null,8,S)]))),128))])]),tab1:o(({value:t,isActive:a})=>[c("div",U,[(i(!0),r(u,null,d(z.value,(s,l)=>(i(),r("div",{key:l,class:"grid-item"},[c("img",{src:s.imageUrl,alt:s.altText},null,8,N)]))),128))])]),tab2:o(({value:t,isActive:a})=>[c("div",k,[(i(!0),r(u,null,d(T.value,(s,l)=>(i(),r("div",{key:l,class:"grid-item"},[c("img",{src:s.imageUrl,alt:s.altText},null,8,E)]))),128))])]),tab3:o(({value:t,isActive:a})=>[c("div",j,[(i(!0),r(u,null,d(q.value,(s,l)=>(i(),r("div",{key:l,class:"grid-item"},[c("img",{src:s.imageUrl,alt:s.altText},null,8,Y)]))),128))])]),_:1})])}}},C=A(B,[["__scopeId","data-v-cdb5d248"]]),G=JSON.parse('{"path":"/shenzhen/","title":"深圳","lang":"en-US","frontmatter":{"title":"深圳","sidebar":false,"lastUpdated":false,"contributors":false,"prev":{"text":"首页","link":"/"},"next":{"text":"西安","link":"/xian/"}},"headers":[],"git":{"updatedTime":1744556875000,"changelog":[{"hash":"0858219b9f0ee051b62875d6450a1680d4750e43","time":1744556875000,"email":"yangzqc@126.com","author":"yangzqc","message":"feat: [城市] 增加西安"},{"hash":"750eee42dfdb470a0a5de38d60336015aa763fa5","time":1743944374000,"email":"yangzqc@126.com","author":"yangzqc","message":"feat: add yangTaiShan and wuTongShan"},{"hash":"420ec477605806cc9c560881d66d47e2c8fb6824","time":1743943680000,"email":"yangzqc@126.com","author":"yangzqc","message":"fix: perfect use function replace arr"},{"hash":"006938745ff8fd4caa66509eb336b5fac8de8377","time":1743939989000,"email":"yangzqc@126.com","author":"yangzqc","message":"fix: modify styles and hidden sliderbar"},{"hash":"238369c1421a03ae1c724b940bbdda3075c05576","time":1743785026000,"email":"yangzqc@126.com","author":"yangzqc","message":"feat: [shenzhen] add fenghuangshan"},{"hash":"d4cb60053823ab4c1209534020c850149fcc63a0","time":1743776314000,"email":"yangzqc@126.com","author":"yangzqc","message":"feat: add shenzhen"}]},"filePathRelative":"shenzhen/index.md"}');export{C as comp,G as data};
