import{a as D}from"./axios-L6U4YIEh.js";import{r as c,w as E,d as r,e as _,f as e,D as g,E as k,J as S,t as x,o as L,b as T,h as C,F as U,p as A}from"./index--5RmUa0K.js";import{u as I}from"./useModal-uaOw0Vy1.js";import{_ as N}from"./DelModal-shSf7ayd.js";import{_ as B}from"./PaginationComponent-tHqa8yc7.js";import{a as m}from"./sweetAlertStore-yXRoe6Nu.js";import"./selector-engine-Le2foxcA.js";const H={class:"modal-dialog",role:"document"},O={class:"modal-content"},F={class:"modal-header"},W={class:"modal-title",id:"exampleModalLabel"},j={key:0},z={key:1},J=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),q={class:"modal-body"},G={class:"mb-3"},K=e("label",{for:"title"},"標題",-1),Q={class:"mb-3"},X=e("label",{for:"coupon_code"},"優惠碼",-1),Y={class:"mb-3"},Z=e("label",{for:"dueDate"},"到期日",-1),ee={class:"mb-3"},te=e("label",{for:"price"},"折扣百分比",-1),oe={class:"mb-3"},le={class:"form-check"},se=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),ae={class:"modal-footer"},ne=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),de={__name:"CouponModal",props:{coupon:Object,isNew:Boolean},emits:["update-coupon"],setup(M,{expose:f,emit:h}){const{openModal:y,hideModal:p,modalRef:v}=I(),n=M,$=h,t=c({}),i=c(""),w=()=>{(t.value.percent<=0||t.value.percent>=100)&&(t.value.percent="")};return E(()=>n.coupon,b=>{t.value=b;const o=new Date(t.value.due_date*1e3).toISOString().split("T");[i.value]=o}),E(()=>i.value,b=>{t.value.due_date=Math.floor(new Date(b)/1e3)}),f({openModal:y,hideModal:p}),(b,o)=>(r(),_("div",{class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:v},[e("div",H,[e("div",O,[e("div",F,[e("h5",W,[M.isNew?(r(),_("span",j,"新增優惠卷")):(r(),_("span",z,"編輯優惠卷"))]),J]),e("div",q,[e("div",G,[K,g(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=s=>t.value.title=s),placeholder:"請輸入標題"},null,512),[[k,t.value.title]])]),e("div",Q,[X,g(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[1]||(o[1]=s=>t.value.code=s),placeholder:"請輸入優惠碼"},null,512),[[k,t.value.code]])]),e("div",Y,[Z,g(e("input",{type:"date",class:"form-control",id:"dueDate","onUpdate:modelValue":o[2]||(o[2]=s=>i.value=s)},null,512),[[k,i.value]])]),e("div",ee,[te,g(e("input",{type:"number",class:"form-control",id:"price",min:"1","onUpdate:modelValue":o[3]||(o[3]=s=>t.value.percent=s),onInput:w,placeholder:"請輸入折扣百分比"},null,544),[[k,t.value.percent]])]),e("div",oe,[e("div",le,[g(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=s=>t.value.is_enabled=s),id:"is_enabled"},null,512),[[S,t.value.is_enabled]]),se])])]),e("div",ae,[ne,e("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=s=>$("update-coupon",t.value))},x(M.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512))}};var ue={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HW/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ie={class:"text-end mt-4"},ce={class:"table mt-4"},pe=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),re={key:0,class:"text-success"},_e={key:1,class:"text-muted"},me={class:"btn-group"},ve=["onClick"],be=["onClick"],ke={__name:"CouponsView",setup(M){const f=c(null),h=c(null),y=c({}),p=c({title:"",is_enabled:0,percent:100,code:""}),v=c(!1),n=c(!1),$=c({}),{VITE_APP_URL:t,VITE_APP_PATH:i}=ue,w=(l,a)=>{v.value=l,v.value?p.value={due_date:new Date().getTime()/1e3}:p.value={...a},f.value.openModal()},b=l=>{p.value={...l},h.value.openModal()},o=(l=1)=>{const a=`${t}/api/${i}/admin/coupons?page=${l}`;n.value=!0,D.get(a).then(d=>{y.value=d.data.coupons,$.value=d.data.pagination,m.showSuccessMsg("已取得優惠券資料")}).catch(d=>{m.showErrorMsg(d.response.data.message)}).finally(()=>{n.value=!1})},s=l=>{n.value=!0;let a=`${t}/api/${i}/admin/coupon`,d="post",u=l;v.value||(a=`${t}/api/${i}/admin/coupon/${l.id}`,d="put",u=l),D[d](a,{data:u}).then(()=>{n.value=!1,o(),f.value.hideModal(),d==="post"?m.showSuccessMsg("已新增優惠券資料"):d==="put"&&m.showSuccessMsg("已更新優惠券資料")}).catch(V=>{n.value=!1,m.showErrorMsg(V.response.data.message)})},P=()=>{const l=`${t}/api/${i}/admin/coupon/${p.value.id}`;n.value=!0,D.delete(l).then(()=>{n.value=!1,m.showSuccessMsg("已刪除優惠券資料"),h.value.hideModal(),o()}).catch(a=>{n.value=!1,m.showErrorMsg(a.response.data.message)})};return L(()=>{o()}),(l,a)=>{const d=T("VueLoading");return r(),_("div",null,[C(d,{active:n.value,"z-index":1060},null,8,["active"]),e("div",ie,[e("button",{class:"btn btn-primary",type:"button",onClick:a[0]||(a[0]=u=>w(!0))}," 建立新的優惠券 ")]),e("table",ce,[pe,e("tbody",null,[(r(!0),_(U,null,A(y.value,(u,V)=>(r(),_("tr",{key:V},[e("td",null,x(u.title),1),e("td",null,x(u.percent)+"%",1),e("td",null,x(l.$filters.date(u.due_date)),1),e("td",null,[u.is_enabled===1?(r(),_("span",re,"啟用")):(r(),_("span",_e,"未啟用"))]),e("td",null,[e("div",me,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:R=>w(!1,u)}," 編輯 ",8,ve),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:R=>b(u)}," 刪除 ",8,be)])])]))),128))])]),C(B,{pages:$.value,onEmitPages:o},null,8,["pages"]),C(de,{coupon:p.value,"is-new":v.value,ref_key:"couponModalRef",ref:f,onUpdateCoupon:s},null,8,["coupon","is-new"]),C(N,{item:p.value,ref_key:"delModalRef",ref:h,onDelItem:P},null,8,["item"])])}}};export{ke as default};
