import{i as y,s as q,l as A,o as U,r as w,a as i,b as c,f as k,t as r,u as d,e as C,d as t,F as x,m as L,v as $,x as T,w as N,h as R}from"./index-gkNKv6pX.js";import{a as f}from"./axios-L6U4YIEh.js";import{S as u}from"./sweetAlertStore-r3IolCu1.js";import{S}from"./sweetalert2.all-B64XtaCh.js";import{u as H}from"./cartStore-sePvMB7E.js";var j={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HW/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const F={class:"container"},O={class:"mt-6"},z={class:"row"},W={key:0,class:"text-end"},I=R('<h2 class="pt-7 mt-6 h1" style="font-size:58px;"><strong>試試放一項商品到購物車中吧</strong></h2><div class="pb-7"></div><div class="pb-7"></div><div class="pb-7"></div><div class="pb-5"></div>',5),G=[I],J=t("h3",{class:"mt-3 mb-5"},"購物車",-1),K={class:"col-md-8"},Q={class:"table"},X=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0"},"商品名稱"),t("th",{scope:"col",class:"border-0"},"商品數量"),t("th",{scope:"col",class:"border-0"},"商品價格"),t("th",{scope:"col",class:"border-0"})])],-1),Y={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},Z=["src"],tt={class:"mb-0 fw-bold ms-3 d-inline-block"},ot={class:"border-0 align-middle",style:{"max-width":"160px"}},et={class:"input-group pe-5"},st={class:"input-group-prepend"},nt=["onClick","disabled"],at=t("i",{class:"fas fa-minus"},null,-1),dt=[at],lt=["onUpdate:modelValue","onBlur","disabled"],it={class:"input-group-append"},ct=["onClick"],rt=t("i",{class:"fas fa-plus"},null,-1),ut=[rt],_t={class:"border-0 align-middle"},pt={class:"mb-0 ms-auto"},ht=["onClick","disabled"],bt=t("i",{class:"fas fa-times"},null,-1),mt=[bt],ft={class:"input-group w-50 mb-3"},vt=t("i",{class:"fas fa-paper-plane"},null,-1),gt=[vt],yt=t("p",{class:"text-muted"}," 2025/7/31前輸入優惠碼「迷你奧利給」全站商品享5折優惠 ",-1),xt={class:"col-md-4"},wt={class:"border p-4 mb-4"},kt=t("h4",{class:"fw-bold mb-4"},"訂單資料",-1),Ct={class:"table text-muted border-bottom"},$t=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 小計 ",-1),Tt={class:"text-end border-0 px-0 pt-4"},St=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 付款方式 "),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),Vt={key:0,class:"d-flex justify-content-between mt-4"},Pt=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),Et={class:"mb-0 h4 fw-bold"},Bt={key:1},Mt={class:"d-flex justify-content-between mt-4"},Dt=t("p",{class:"mb-0 h4 fw-bold text-del",style:{"text-decoration":"line-through"}}," 總計 ",-1),qt={class:"mb-0 h4 fw-bold",style:{"text-decoration":"line-through"}},At={class:"d-flex justify-content-between"},Ut=t("p",{class:"text-end text-muted mb-0 h4 fw-bold"},"折扣價",-1),Lt={class:"mb-0 h4 fw-bold"},zt={__name:"CartView",setup(Nt){const{VITE_APP_URL:p,VITE_APP_PATH:h}=j,l=y({loadingItem:""}),v=y(""),g=y(!1),V=H(),{carts:n}=q(V),P=e=>{l.value.loadingItem=e.id;const o=`${p}/api/${h}/cart/${e.id}`,a={product_id:e.product_id,qty:e.qty};f.put(o,{data:a}).then(()=>{u.showSuccessMsg("已更新購物車"),_(),l.value.loadingItem=""}).catch(b=>{alert(b.response.data.message),l.value.loadingItem=""})},E=()=>{S.fire({title:"是否清空購物車?",showDenyButton:!0,confirmButtonText:"確認清空",denyButtonText:"再想想好了"}).then(o=>{o.isConfirmed?(u.showSuccessMsg("刪除成功"),f.delete(e).then(()=>{_()}).catch(a=>{alert(a.response.data.message)})):o.isDenied&&u.showErrorMsg("已為您保留購物車")}).catch(()=>{alert("伺服器錯誤")});const e=`${p}/api/${h}/carts`},_=()=>{g.value=!0;const e=`${p}/api/${h}/cart`;f.get(e).then(o=>{n.value=o.data.data}).catch(o=>{alert(o.response.data.message)}).finally(()=>{g.value=!1})},B=e=>{S.fire({title:"確認要刪除",showDenyButton:!0,confirmButtonText:"確認刪除",denyButtonText:"再想想好了"}).then(a=>{a.isConfirmed?(l.value.loadingItem=e,u.showSuccessMsg("刪除成功"),f.delete(o).then(()=>{_(),l.value.loadingItem=""}).catch(b=>{alert(b.response.data.message)})):a.isDenied&&u.showErrorMsg("已為您保留該品項")});const o=`${p}/api/${h}/cart/${e}`},M=()=>{const e=`${p}/api/${h}/coupon`,o={code:v.value};f.post(e,{data:o}).then(()=>{u.showSuccessMsg("已加入優惠券"),_(),l.value.loadingItem=""}).catch(()=>{u.showErrorMsg("加入優惠券失敗"),_(),l.value.loadingItem=""})},D=e=>{let o=0;e.forEach(a=>{o+=a.product.price*a.qty}),n.total=o};return A(()=>n.carts,(e,o)=>{D(e)}),U(()=>{_()}),(e,o)=>{const a=w("VueLoading"),b=w("router-link");return i(),c(x,null,[k(r(d(n).carts&&d(n).carts[0])+" ",1),C(a,{active:g.value,"z-index":1060},null,8,["active"]),t("div",F,[t("div",O,[t("div",z,[d(n).carts&&d(n).carts.length===0?(i(),c("div",W,G)):(i(),c(x,{key:1},[t("div",{class:"text-end"},[t("button",{class:"btn btn-outline-dark",type:"button",onClick:E}," 清空購物車 ")]),J,t("div",K,[t("table",Q,[X,t("tbody",null,[(i(!0),c(x,null,L(d(n).carts,s=>(i(),c("tr",{class:"border-bottom border-top",key:s.id},[t("th",Y,[t("img",{src:s.product.imageUrl,alt:"商品圖片",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,Z),t("p",tt,r(s.product.title),1)]),t("td",ot,[t("div",et,[t("div",st,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:m=>s.qty--,disabled:s.qty===1},dt,8,nt)]),$(t("input",{"onUpdate:modelValue":m=>s.qty=m,"type.prevent":"number",onBlur:m=>P(s),disabled:l.value.loadingItem===s.id,class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",min:"1"},null,40,lt),[[T,s.qty,void 0,{number:!0}]]),t("div",it,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:m=>s.qty++},ut,8,ct)])])]),t("td",_t,[t("p",pt,r(s.product.price*s.qty),1)]),t("td",{class:"border-0 align-middle",onClick:m=>B(s.id),disabled:l.value.loadingItem===s.id,style:{cursor:"pointer"}},mt,8,ht)]))),128))])]),t("div",ft,[$(t("input",{type:"text",class:"form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none",placeholder:"請輸入優惠碼","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":o[0]||(o[0]=s=>v.value=s)},null,512),[[T,v.value]]),t("div",{class:"input-group-append"},[t("button",{onClick:M,class:"btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0",type:"button",id:"button-addon2"},gt)])]),yt]),t("div",xt,[t("div",wt,[kt,t("table",Ct,[t("tbody",null,[t("tr",null,[$t,t("td",Tt,r(d(n).total),1)]),St])]),d(n).final_total===d(n).total?(i(),c("div",Vt,[Pt,t("p",Et," NT$ "+r(d(n).total),1)])):(i(),c("div",Bt,[t("div",Mt,[Dt,t("p",qt," NT$ "+r(d(n).total),1)]),t("div",At,[Ut,t("p",Lt," NT$ "+r(Math.floor(d(n).final_total)),1)])])),C(b,{to:"/checkOut",class:"btn btn-dark w-100 mt-4"},{default:N(()=>[k(" 去結帳")]),_:1})])])],64))])])])],64)}}};export{zt as default};
