/* empty css            */import{a as g}from"./axios-L6U4YIEh.js";import{_ as k}from"./PaginationComponent--y6oH0TI.js";import{k as w,i as r,o as $,l as P,r as E,a as o,b as a,f as t,d,w as _,F as u,m as v,t as c,e as p}from"./index-SsoGIBs4.js";var T={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HW/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const V=t("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"400px"}},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1617110668704-3992ecde48ff?w=1950&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHpvbyUyMGZyaWVuZHxlbnwwfHwwfHx8MA%3D%3D)","background-position":"center center",opacity:"0.1"}}),t("h2",{class:"fw-bold"},"挑選一些自己喜歡的商品吧！")],-1),A={class:"container mt-md-5 mt-3 mb-7"},H={class:"row"},R={class:"col-md-4"},D={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},M={class:"card border-0"},L=t("div",{class:"card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[t("div",{class:"d-flex justify-content-between align-items-center pe-1"},[t("h4",{class:"mb-0"},"分類")])],-1),O={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},j={class:"card-body py-0"},B={class:"list-unstyled"},N={class:"col-md-8"},U={key:0},W={key:1},I={class:"row"},S={class:"card border-0 mb-4 position-relative position-relative"},q=["src","alt"],F=t("a",{href:"#",class:"text-dark"},null,-1),Z={class:"card-body p-0"},z={class:"mb-0 mt-3"},C={class:"card-text mb-0"},G={class:"text-muted"},Y=t("p",{class:"text-muted mt-3"},null,-1),J={class:"d-flex justify-content-center"},K={class:"pagination"},ot={__name:"ProductsView",setup(Q){const m=w(),{VITE_APP_URL:f,VITE_APP_PATH:y}=T,i=r([]),h=r({}),x=r(["動物","食物"]),l=(n=1)=>{const{category:b=""}=m.query;g.get(`${f}/api/${y}/products?category=${b}&page=${n}`).then(s=>{i.value=s.data.products,h.value=s.data.pagination}).catch(s=>alert(s.response.data.message))};return $(()=>{const n=document.cookie.replace(/(?:(?:^|.*;\s*)WillyToken\s*=\s*([^;]*).*$)|^.*$/,"$1");g.defaults.headers.common.Authorization=n,l()}),P(()=>m.query,()=>{l()}),(n,b)=>{const s=E("RouterLink");return o(),a(u,null,[V,t("div",A,[t("div",H,[t("div",R,[t("div",D,[t("div",M,[L,t("div",O,[t("div",j,[t("ul",B,[t("li",null,[d(s,{to:"/products",class:"py-2 d-block text-muted"},{default:_(()=>[p("全部商品")]),_:1})]),(o(!0),a(u,null,v(x.value,e=>(o(),a("li",{key:"categories"+e},[d(s,{to:`/products?category=${e}`,class:"py-2 d-block text-muted"},{default:_(()=>[p(c(e),1)]),_:2},1032,["to"])]))),128))])])])])])]),t("div",N,[i.value.length?(o(),a("div",W,c(`此頁共顯示 ${i.value.length} 項產品`),1)):(o(),a("div",U,"載入中")),t("div",I,[(o(!0),a(u,null,v(i.value,e=>(o(),a("div",{class:"col-md-6",key:e.id},[d(s,{class:"mb-0 mt-3",to:`/product/${e.id}`},{default:_(()=>[t("div",S,[t("img",{src:e.imageUrl,class:"card-img-top rounded-0 object-fit-cover",alt:`${e.title}的圖片`,height:"500"},null,8,q),F,t("div",Z,[t("h4",z,c(e.title),1),t("p",C,[p(" NT$"+c(e.price)+" ",1),t("span",G,[t("del",null,"NT$"+c(e.origin_price),1)])]),Y])])]),_:2},1032,["to"])]))),128))])]),t("nav",J,[t("ul",K,[d(k,{pages:h.value,onEmitPages:l},null,8,["pages"])])])])])],64)}}};export{ot as default};