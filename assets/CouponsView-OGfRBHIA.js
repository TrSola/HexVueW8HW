import{a as V}from"./axios-L6U4YIEh.js";import{r as c,w as D,d as p,e as _,f as e,D as g,E as w,J as R,t as C,b as T,h as k,F as L,p as U}from"./index-kqDmHCX4.js";import{u as A}from"./useModal-TGxWW9RN.js";import{_ as I}from"./DelModal-Qdf4VnM8.js";import{_ as N}from"./PaginationComponent-7J505f7t.js";import{S as v}from"./sweetAlertStore-Cw_86rFR.js";import"./selector-engine-iMrYtNy8.js";import"./sweetalert2.all-6lilbHm5.js";const B={class:"modal-dialog",role:"document"},H={class:"modal-content"},O={class:"modal-header"},F={class:"modal-title",id:"exampleModalLabel"},W={key:0},j={key:1},z=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),J={class:"modal-body"},q={class:"mb-3"},G=e("label",{for:"title"},"標題",-1),K={class:"mb-3"},Q=e("label",{for:"coupon_code"},"優惠碼",-1),X={class:"mb-3"},Y=e("label",{for:"dueDate"},"到期日",-1),Z={class:"mb-3"},ee=e("label",{for:"price"},"折扣百分比",-1),oe={class:"mb-3"},te={class:"form-check"},se=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),le={class:"modal-footer"},ae=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),ne={__name:"CouponModal",props:{coupon:Object,isNew:Boolean},emits:["update-coupon"],setup(M,{expose:f,emit:h}){const{openModal:y,hideModal:r,modalRef:b}=A(),n=M,$=h,o=c({}),i=c("");return D(()=>n.coupon,m=>{o.value=m;const t=new Date(o.value.due_date*1e3).toISOString().split("T");[i.value]=t}),D(()=>i.value,m=>{o.value.due_date=Math.floor(new Date(m)/1e3)}),f({openModal:y,hideModal:r}),(m,t)=>(p(),_("div",{class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:b},[e("div",B,[e("div",H,[e("div",O,[e("h5",F,[M.isNew?(p(),_("span",W,"新增優惠卷")):(p(),_("span",j,"編輯優惠卷"))]),z]),e("div",J,[e("div",q,[G,g(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=s=>o.value.title=s),placeholder:"請輸入標題"},null,512),[[w,o.value.title]])]),e("div",K,[Q,g(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=s=>o.value.code=s),placeholder:"請輸入優惠碼"},null,512),[[w,o.value.code]])]),e("div",X,[Y,g(e("input",{type:"date",class:"form-control",id:"dueDate","onUpdate:modelValue":t[2]||(t[2]=s=>i.value=s)},null,512),[[w,i.value]])]),e("div",Z,[ee,g(e("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":t[3]||(t[3]=s=>o.value.percent=s),placeholder:"請輸入折扣百分比"},null,512),[[w,o.value.percent,void 0,{number:!0}]])]),e("div",oe,[e("div",te,[g(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=s=>o.value.is_enabled=s),id:"is_enabled"},null,512),[[R,o.value.is_enabled]]),se])])]),e("div",le,[ae,e("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=s=>$("update-coupon",o.value))},C(M.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512))}};var de={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HW/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ue={class:"text-end mt-4"},ie={class:"table mt-4"},ce=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),re={key:0,class:"text-success"},pe={key:1,class:"text-muted"},_e={class:"btn-group"},me=["onClick"],ve=["onClick"],ke={__name:"CouponsView",setup(M){const f=c(null),h=c(null),y=c({}),r=c({title:"",is_enabled:0,percent:100,code:""}),b=c(!1),n=c(!1),$=c({}),{VITE_APP_URL:o,VITE_APP_PATH:i}=de,m=(l,a)=>{b.value=l,b.value?r.value={due_date:new Date().getTime()/1e3}:r.value={...a},f.value.openModal()},t=l=>{r.value={...l},h.value.openModal()},s=(l=1)=>{const a=`${o}/api/${i}/admin/coupons?page=${l}`;n.value=!0,V.get(a).then(d=>{y.value=d.data.coupons,$.value=d.data.pagination,v.showSuccessMsg("已取得優惠券資料")}).catch(d=>{v.showErrorMsg(d.response.data.message)}).finally(()=>{n.value=!1})},E=l=>{n.value=!0;let a=`${o}/api/${i}/admin/coupon`,d="post",u=l;b.value||(a=`${o}/api/${i}/admin/coupon/${l.id}`,d="put",u=l),V[d](a,{data:u}).then(()=>{n.value=!1,s(),f.value.hideModal(),d==="post"?v.showSuccessMsg("已新增優惠券資料"):d==="put"&&v.showSuccessMsg("已更新優惠券資料")}).catch(x=>{n.value=!1,v.showErrorMsg(x.response.data.message)})},P=()=>{const l=`${o}/api/${i}/admin/coupon/${r.value.id}`;n.value=!0,V.delete(l).then(()=>{n.value=!1,v.showSuccessMsg("已刪除優惠券資料"),h.value.hideModal(),s()}).catch(a=>{n.value=!1,v.showErrorMsg(a.response.data.message)})};return s(),(l,a)=>{const d=T("VueLoading");return p(),_("div",null,[k(d,{active:n.value,"z-index":1060},null,8,["active"]),e("div",ue,[e("button",{class:"btn btn-primary",type:"button",onClick:a[0]||(a[0]=u=>m(!0))}," 建立新的優惠券 ")]),e("table",ie,[ce,e("tbody",null,[(p(!0),_(L,null,U(y.value,(u,x)=>(p(),_("tr",{key:x},[e("td",null,C(u.title),1),e("td",null,C(u.percent)+"%",1),e("td",null,C(l.$filters.date(u.due_date)),1),e("td",null,[u.is_enabled===1?(p(),_("span",re,"啟用")):(p(),_("span",pe,"未啟用"))]),e("td",null,[e("div",_e,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:S=>m(!1,u)}," 編輯 ",8,me),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:S=>t(u)}," 刪除 ",8,ve)])])]))),128))])]),k(N,{pages:$.value,onEmitPages:s},null,8,["pages"]),k(ne,{coupon:r.value,"is-new":b.value,ref_key:"couponModalRef",ref:f,onUpdateCoupon:E},null,8,["coupon","is-new"]),k(I,{item:r.value,ref_key:"delModalRef",ref:h,onDelItem:P},null,8,["item"])])}}};export{ke as default};