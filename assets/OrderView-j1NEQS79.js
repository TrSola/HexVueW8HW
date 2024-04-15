import{r as u,w as A,d as s,e as l,f as e,t as a,m as C,F as k,p as P,D as R,J as S,b as U,h as M,n as T}from"./index-kqDmHCX4.js";import{a as w}from"./axios-L6U4YIEh.js";import{_ as H}from"./DelModal-Qdf4VnM8.js";import{u as I}from"./useModal-TGxWW9RN.js";import{_ as B}from"./PaginationComponent-7J505f7t.js";import{S as m}from"./sweetAlertStore-Cw_86rFR.js";import"./selector-engine-iMrYtNy8.js";import"./sweetalert2.all-6lilbHm5.js";const N={class:"modal-dialog modal-xl",role:"document"},j={class:"modal-content border-0"},q=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),z={class:"modal-body"},F={class:"row"},W={class:"col-md-4"},J=e("h3",null,"用戶資料",-1),G={class:"table"},K={key:0},Q=e("th",{style:{width:"100px"}},"姓名",-1),X=e("th",null,"Email",-1),Y=e("th",null,"電話",-1),Z=e("th",null,"地址",-1),ee={class:"col-md-8"},te=e("h3",null,"訂單細節",-1),se={class:"table"},le=e("th",{style:{width:"100px"}},"訂單編號",-1),oe=e("th",null,"下單時間",-1),ae=e("th",null,"付款時間",-1),ne={key:0},de={key:1},ie=e("th",null,"付款狀態",-1),ue={key:0,class:"text-success"},re={key:1,class:"text-muted"},ce=e("th",null,"總金額",-1),_e=e("h3",null,"選購商品",-1),he={class:"table"},pe=e("thead",null,[e("tr")],-1),ve={class:"text-end"},me={class:"d-flex justify-content-end"},fe={class:"form-check"},be={class:"form-check-label",for:"flexCheckDefault"},ye={key:0},ke={key:1},$e={class:"modal-footer"},ge=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Me={__name:"OrderModal",props:{order:Object},emits:["update-paid"],setup(V,{expose:f,emit:b}){const{openModal:y,hideModal:x,modalRef:$}=I(),i=V,p=b,t=u({});return A(()=>i.order,r=>{t.value=r}),f({openModal:y,hideModal:x}),(r,_)=>(s(),l("div",{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:$},[e("div",N,[e("div",j,[q,e("div",z,[e("div",F,[e("div",W,[J,e("table",G,[t.value.user?(s(),l("tbody",K,[e("tr",null,[Q,e("td",null,a(t.value.user.name),1)]),e("tr",null,[X,e("td",null,a(t.value.user.email),1)]),e("tr",null,[Y,e("td",null,a(t.value.user.tel),1)]),e("tr",null,[Z,e("td",null,a(t.value.user.address),1)])])):C("",!0)])]),e("div",ee,[te,e("table",se,[e("tbody",null,[e("tr",null,[le,e("td",null,a(t.value.id),1)]),e("tr",null,[oe,e("td",null,a(r.$filters.date(t.value.create_at)),1)]),e("tr",null,[ae,e("td",null,[t.value.paid_date?(s(),l("span",ne,a(r.$filters.date(t.value.paid_date)),1)):(s(),l("span",de,"時間不正確"))])]),e("tr",null,[ie,e("td",null,[t.value.is_paid?(s(),l("strong",ue,"已付款")):(s(),l("span",re,"尚未付款"))])]),e("tr",null,[ce,e("td",null,a(r.$filters.currency(t.value.total)),1)])])]),_e,e("table",he,[pe,e("tbody",null,[(s(!0),l(k,null,P(t.value.products,n=>(s(),l("tr",{key:n.id},[e("th",null,a(n.product.title),1),e("td",null,a(n.qty)+" / "+a(n.product.unit),1),e("td",ve,a(r.$filters.currency(n.final_total)),1)]))),128))])]),e("div",me,[e("div",fe,[R(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":_[0]||(_[0]=n=>t.value.is_paid=n)},null,512),[[S,t.value.is_paid]]),e("label",be,[t.value.is_paid?(s(),l("span",ye,"已付款")):(s(),l("span",ke,"未付款"))])])])])])]),e("div",$e,[ge,e("button",{type:"button",class:"btn btn-primary",onClick:_[1]||(_[1]=n=>p("update-paid",t.value))}," 修改付款狀態 ")])])])],512))}};var xe={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HW/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const we={class:"table mt-4"},Ce=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),Pe=["textContent"],Ve={class:"list-unstyled"},Ee={class:"text-right"},Re={class:"form-check form-switch"},Se=["id","onUpdate:modelValue","onChange"],De=["for"],Oe={key:0},Le={key:1},Ae={class:"btn-group"},Ue=["onClick"],Te=["onClick"],We={__name:"OrderView",setup(V){const f=u(null),b=u(null),y=u({}),x=u(!1),$=u({}),i=u(!1),p=u({}),t=u({}),r=u(1),{VITE_APP_URL:_,VITE_APP_PATH:n}=xe,g=(d=1)=>{const v=`${_}/api/${n}/admin/orders?page=${d}`;i.value=!0,w.get(v,t).then(h=>{y.value=h.data.orders,$.value=h.data.pagination,m.showSuccessMsg("已取得訂單資料")}).catch(h=>{m.showErrorMsg(h.response.data.message)}).finally(()=>{i.value=!1})},D=d=>{p.value={...d},x.value=!1,f.value.openModal()},O=d=>{p.value={...d},b.value.openModal()},E=d=>{const v=`${_}/api/${n}/admin/order/${d.id}`,h={is_paid:d.is_paid};i.value=!0,w.put(v,{data:h}).then(o=>{i.value=!1,f.value.hideModal(),g(r.value),m.showSuccessMsg("修改付款狀態成功")}).catch(o=>{i.value=!1,m.showErrorMsg(o.response.data.message)})},L=()=>{const d=`${_}/api/${n}/admin/order/${p.value.id}`;i.value=!0,w.delete(d).then(v=>{i.value=!1,b.value.hideModal(),g(r.value),m.showSuccessMsg("刪除訂單成功")}).catch(v=>{i.value=!1,m.showErrorMsg(v.response.data.message)})};return g(),(d,v)=>{const h=U("VueLoading");return s(),l(k,null,[M(h,{active:i.value,"z-index":1060},null,8,["active"]),e("table",we,[Ce,e("tbody",null,[(s(!0),l(k,null,P(y.value,o=>(s(),l(k,{key:o.id},[y.value.length?(s(),l("tr",{key:0,class:T({"text-secondary":!o.is_paid})},[e("td",null,a(d.$filters.date(o.create_at)),1),e("td",null,[o.user?(s(),l("span",{key:0,textContent:a(o.user.email)},null,8,Pe)):C("",!0)]),e("td",null,[e("ul",Ve,[(s(!0),l(k,null,P(o.products,c=>(s(),l("li",{key:c.id},a(c.product.title)+" 數量："+a(c.qty)+" "+a(c.product.unit),1))),128))])]),e("td",Ee,a(o.total),1),e("td",null,[e("div",Re,[R(e("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${o.id}`,"onUpdate:modelValue":c=>o.is_paid=c,onChange:c=>E(o)},null,40,Se),[[S,o.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${o.id}`},[o.is_paid?(s(),l("span",Oe,"已付款")):(s(),l("span",Le,"未付款"))],8,De)])]),e("td",null,[e("div",Ae,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:c=>D(o)}," 檢視 ",8,Ue),e("button",{class:"btn btn-outline-warning btn-sm",type:"button",onClick:c=>O(o)}," 刪除 ",8,Te)])])],2)):C("",!0)],64))),128))])]),M(Me,{order:p.value,ref_key:"orderModalRef",ref:f,onUpdatePaid:E},null,8,["order"]),M(H,{item:p.value,ref_key:"delModalRef",ref:b,onDelItem:L},null,8,["item"]),M(B,{pages:$.value,onEmitPages:g},null,8,["pages"])],64)}}};export{We as default};