import{a as x}from"./axios-L6U4YIEh.js";import{i as u,l as T,a,b as n,d as e,C as c,D as v,f as C,j as L,F as E,m as A,I,t as w,r as H,e as V}from"./index-oOOxwQ2I.js";import{u as R}from"./useModal-4EO46lV6.js";import{S as B}from"./sweetalert2.all-e6ZYtJOG.js";import{_ as F}from"./PaginationComponent-mzzZlOL0.js";import{S as h}from"./sweetAlertStore-lROGJj-i.js";var N={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HW/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const O={class:"modal-dialog modal-xl"},W={class:"modal-content border-0"},G={class:"modal-header bg-dark text-white"},j={id:"productModalLabel",class:"modal-title"},z={key:0},q={key:1},J=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),K={class:"modal-body"},Q={class:"row"},X={class:"col-sm-4"},Y={class:"mb-2"},Z={class:"mb-3"},ee=e("label",{for:"imageUrl",class:"form-label"}," 輸入圖片網址 ",-1),te=["src"],oe={class:"mb-3"},le={for:"customFile",class:"form-label"},se={key:0,class:"fas fa-spinner fa-spin"},ae=e("h3",null,"新增更多圖片",-1),ne=["for"],ie=["onUpdate:modelValue","id"],de=["src"],re={key:0},ce={key:1},ue={key:1},me={class:"col-sm-8"},pe={class:"mb-3"},_e=e("label",{for:"title",class:"form-label"},"標題",-1),ve={class:"row"},be={class:"mb-3 col-md-6"},fe=e("label",{for:"category",class:"form-label"},"分類",-1),he={class:"mb-3 col-md-6"},ge=e("label",{for:"unit",class:"form-label"},"單位",-1),ye={class:"row"},Ue={class:"mb-3 col-md-6"},$e=e("label",{for:"origin_price",class:"form-label"},"原價",-1),Pe={class:"mb-3 col-md-6"},ke=e("label",{for:"price",class:"form-label"},"售價",-1),Me=e("hr",null,null,-1),xe={class:"mb-3"},we=e("label",{for:"description",class:"form-label"},"產品描述",-1),Ve={class:"mb-3"},Ce=e("label",{for:"content",class:"form-label"},"說明內容",-1),Ee={class:"mb-3"},De={class:"form-check"},Ae=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Re={class:"modal-footer"},Se=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Te={__name:"ProductModal",props:["status","tempProduct"],emits:["confirm-update"],setup(k,{expose:m,emit:g}){const U=B.mixin({toast:!0,position:"center",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:1500,timerProgressBar:!0}),t=u({}),b=k,p=g,{openModal:$,hideModal:d,modalRef:y}=R(),f=u(null),{VITE_APP_URL:_,VITE_APP_PATH:M}=N,P=u({fileUploading:!1}),D=()=>{t.value.imagesUrl=[],t.value.imagesUrl.push("")};T(()=>b.tempProduct,i=>{t.value=i,t.value.imagesUrl||(t.value.imagesUrl=[]),t.value.imageUrl||(t.value.imageUrl="")});const s=()=>{const i=f.value.files[0],l=new FormData;l.append("file-to-upload",i);const o=`${_}/api/${M}/admin/upload`;P.value.fileUploading=!0,x.post(o,l,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{P.value.fileUploading=!1,t.value.imageUrl=r.data.imageUrl,f.value.value="",U.fire({icon:"success",title:"圖片上傳成功"})}).catch(r=>{P.value.fileUploading=!1,U.fire({icon:"error",title:r.response.data.message})})};return m({openModal:$,hideModal:d}),(i,l)=>(a(),n("div",null,[e("div",null,[e("div",{id:"productModal",ref_key:"modalRef",ref:y,class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},[e("div",O,[e("div",W,[e("div",G,[e("h5",j,[k.status.value==="new"?(a(),n("span",z,"新增產品")):(a(),n("span",q,"編輯產品"))]),J]),e("div",K,[e("div",Q,[e("div",X,[e("div",Y,[e("div",Z,[ee,c(e("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":l[0]||(l[0]=o=>t.value.imageUrl=o)},null,512),[[v,t.value.imageUrl]])]),e("img",{class:"img-fluid",src:t.value.imageUrl,alt:"主要圖片"},null,8,te),e("div",oe,[e("label",le,[C("或 上傳圖片 "),P.value.fileUploading?(a(),n("i",se)):L("",!0)]),e("input",{type:"file",id:"customFile",class:"form-control",ref_key:"fileInputRef",ref:f,onChange:s},null,544)])]),ae,Array.isArray(t.value.imagesUrl)?(a(),n(E,{key:0},[(a(!0),n(E,null,A(t.value.imagesUrl,(o,r)=>(a(),n("div",{key:o+r,class:"mb-3"},[e("label",{for:o+r,class:"form-label"}," 更多圖片網址 ",8,ne),c(e("input",{type:"text","onUpdate:modelValue":S=>t.value.imagesUrl[r]=S,id:o+r,class:"form-control"},null,8,ie),[[v,t.value.imagesUrl[r]]]),e("img",{src:t.value.imagesUrl[r],class:"img-fluid"},null,8,de)]))),128)),!t.value.imagesUrl.length||t.value.imagesUrl[t.value.imagesUrl.length-1]?(a(),n("div",re,[e("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:l[1]||(l[1]=o=>t.value.imagesUrl.push("")),type:"button"}," 新增圖片 ")])):(a(),n("div",ce,[e("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:l[2]||(l[2]=o=>t.value.imagesUrl.pop()),type:"button"}," 刪除圖片 ")]))],64)):(a(),n("div",ue,[e("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:D,type:"button"}," 新增圖片 ")]))]),e("div",me,[e("div",pe,[_e,c(e("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":l[3]||(l[3]=o=>t.value.title=o)},null,512),[[v,t.value.title]])]),e("div",ve,[e("div",be,[fe,c(e("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":l[4]||(l[4]=o=>t.value.category=o)},null,512),[[v,t.value.category]])]),e("div",he,[ge,c(e("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":l[5]||(l[5]=o=>t.value.unit=o)},null,512),[[v,t.value.unit]])])]),e("div",ye,[e("div",Ue,[$e,c(e("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":l[6]||(l[6]=o=>t.value.origin_price=o)},null,512),[[v,t.value.origin_price,void 0,{number:!0}]])]),e("div",Pe,[ke,c(e("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":l[7]||(l[7]=o=>t.value.price=o)},null,512),[[v,t.value.price,void 0,{number:!0}]])])]),Me,e("div",xe,[we,c(e("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":l[8]||(l[8]=o=>t.value.description=o)},null,512),[[v,t.value.description]])]),e("div",Ve,[Ce,c(e("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":l[9]||(l[9]=o=>t.value.content=o)},null,512),[[v,t.value.content]])]),e("div",Ee,[e("div",De,[c(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":l[10]||(l[10]=o=>t.value.is_enabled=o)},null,512),[[I,t.value.is_enabled]]),Ae])])])])]),e("div",Re,[Se,e("button",{type:"button",class:"btn btn-primary",onClick:l[11]||(l[11]=o=>p("confirm-update"))}," 確認 ")])])])],512)]),C(" `, ")]))}},Le={class:"modal-dialog"},Ie={class:"modal-content border-0"},He=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delProductModalLabel",class:"modal-title"},[e("span",null,"刪除產品")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Be={class:"modal-body"},Fe={class:"text-danger"},Ne={class:"modal-footer"},Oe=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),We={__name:"DelProductModal",props:["tempProduct"],emits:["confirmDelete"],setup(k,{expose:m,emit:g}){const U=k,t=g,{openModal:b,hideModal:p,modalRef:$}=R();return m({openModal:b,hideModal:p}),(d,y)=>(a(),n("div",null,[e("div",{id:"delProductModal",ref_key:"modalRef",ref:$,class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},[e("div",Le,[e("div",Ie,[He,e("div",Be,[C(" 是否刪除 "),e("strong",Fe,w(U.tempProduct.title),1),C(" 商品(刪除後將無法恢復)。 ")]),e("div",Ne,[Oe,e("button",{type:"button",class:"btn btn-danger",onClick:y[0]||(y[0]=f=>t("confirmDelete"))}," 確認刪除 ")])])])],512)]))}};var Ge={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HW/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const je={class:"container"},ze={class:"text-end mt-4"},qe={class:"table mt-4"},Je=e("thead",null,[e("tr",null,[e("th",{width:"120"},"分類"),e("th",null,"產品名稱"),e("th",{width:"120"},"原價"),e("th",{width:"120"},"售價"),e("th",{width:"100"},"是否啟用"),e("th",{width:"120"},"編輯")])],-1),Ke={class:"text-end"},Qe={class:"text-end"},Xe={key:0,class:"text-success"},Ye={key:1},Ze={class:"btn-group"},et=["onClick"],tt=["onClick"],dt={__name:"ProductsView",setup(k){const m=u(null),g=u(null),{VITE_APP_URL:U,VITE_APP_PATH:t}=Ge,b=`${U}/api/${t}/admin`,p=u(!1),$=u([]),d=u({imagesUrl:[]}),y=u({}),f=u(!1),_=(s=1)=>{f.value=!0,x.get(`${b}/products?page=${s}`).then(i=>{$.value=i.data.products,y.value=i.data.pagination,h.showSuccessMsg("已取得產品資料")}).catch(i=>{h.showErrorMsg(i.response.data.message)}).finally(()=>{f.value=!1})},M=(s,i)=>{s==="new"?(d.value={imagesUrl:[]},p.value="new",m.value.openModal()):s==="edit"?(d.value={...i},p.value="edit",m.value.openModal()):s==="delete"&&(d.value={...i},g.value.openModal())},P=()=>{p.value==="new"?x.post(`${b}/product`,{data:d.value}).then(s=>{h.showSuccessMsg("已新增產品資料"),m.value.hideModal(),_()}).catch(s=>{h.showErrorMsg(s.response.data.message)}):p.value==="edit"&&x.put(`${b}/product/${d.value.id}`,{data:d.value}).then(()=>{h.showSuccessMsg("已更新產品資料"),m.value.hideModal(),_()}).catch(s=>{h.showErrorMsg(s.response.data.message)})},D=()=>{x.delete(`${b}/product/${d.value.id}`).then(s=>{h.showSuccessMsg("已刪除產品資料"),g.value.hideModal(),_()}).catch(s=>{h.showErrorMsg(s.response.data.message)})};return _(),(s,i)=>{const l=H("VueLoading");return a(),n(E,null,[V(l,{active:f.value,"z-index":1060},null,8,["active"]),e("div",null,[e("div",je,[e("div",ze,[e("button",{class:"btn btn-primary",onClick:i[0]||(i[0]=o=>M("new")),type:"button"}," 建立新的產品 ")]),e("table",qe,[Je,e("tbody",null,[(a(!0),n(E,null,A($.value,o=>(a(),n("tr",{key:o.id},[e("td",null,w(o.category),1),e("td",null,w(o.title),1),e("td",Ke,w(o.origin_price),1),e("td",Qe,w(o.price),1),e("td",null,[o.is_enabled?(a(),n("span",Xe,"啟用")):(a(),n("span",Ye,"未啟用"))]),e("td",null,[e("div",Ze,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:r=>M("edit",o)}," 編輯 ",8,et),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:r=>M("delete",o)}," 刪除 ",8,tt)])])]))),128))])]),V(F,{pages:y.value,onEmitPages:_},null,8,["pages"])]),V(Te,{status:p.value,"temp-product":d.value,onGetData:_,ref_key:"productModal2",ref:m,onConfirmUpdate:P},null,8,["status","temp-product"]),V(We,{"temp-product":d.value,onGetData:_,ref_key:"delProductModal2",ref:g,onConfirmDelete:D},null,8,["temp-product"])])],64)}}};export{dt as default};
