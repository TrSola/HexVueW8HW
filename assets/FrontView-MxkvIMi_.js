/* empty css            */import{s as v,o as f,r as m,a as p,c as _,b as t,w as s,d as i,e as a,u as b,t as u,_ as g,f as h,F as x}from"./index-KwQ6PDec.js";import{u as w}from"./cartStore-wSqGby_S.js";import"./axios-L6U4YIEh.js";import"./sweetalert2.all-CmLlFvLk.js";const k={class:"navbar navbar-expand-lg navbar-light position-fixed w-100 z-3 bg-light top-0 ps-4"},y=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),N={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},R={class:"navbar-nav"},V=a("span",{class:"sr-only"},"(目前頁面)",-1),C=a("i",{class:"bi bi-cart"},null,-1),F={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},S={__name:"NavbarComponent",setup(l){const n=w(),{carts:c}=v(n),{getCart:o}=n;return f(()=>{o()}),(L,O)=>{const e=m("RouterLink");return p(),_("nav",k,[t(e,{class:"nav-item nav-link me-4",to:"/"},{default:s(()=>[i("首頁")]),_:1}),y,a("div",N,[a("div",R,[t(e,{class:"nav-item nav-link me-4",to:"/login"},{default:s(()=>[i("登入頁面")]),_:1}),t(e,{class:"nav-item nav-link me-4",to:"/"},{default:s(()=>[i("首頁"),V]),_:1}),t(e,{class:"nav-item nav-link me-4",to:"/products"},{default:s(()=>[i("產品頁面")]),_:1}),t(e,{class:"nav-item nav-link me-4 position-relative",to:"/cart"},{default:s(()=>{var r,d;return[C,a("span",F,u((d=(r=b(c))==null?void 0:r.carts)==null?void 0:d.length),1)]}),_:1})])])])}}},j={},A=h('<div class="bg-light py-4"><div class="container"><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"><p class="mb-0 fw-bold">再看看有沒有自己喜歡的商品吧！</p></div></div></div><div class="bg-dark py-5"><div class="container"><div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"><a class="text-white h4" href="./index.html">SOUXI</a><ul class="d-flex list-unstyled mb-0 h4"><li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li><li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li><li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li></ul></div><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"><div class="mb-md-0 mb-1"><p class="mb-0">02-3456-7890</p><p class="mb-0">service@mail.com</p></div><p class="mb-0">© 2020 LOGO All Rights Reserved.</p></div></div></div>',2);function M(l,n){return A}const B=g(j,[["render",M]]),G={__name:"FrontView",setup(l){return(n,c)=>{const o=m("RouterView");return p(),_(x,null,[t(S),t(o),t(B)],64)}}};export{G as default};
