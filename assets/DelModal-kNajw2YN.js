import{u as r}from"./useModal-v0T3CbRT.js";import{a as b,c as _,e as t,t as s,d as a}from"./index-KwQ6PDec.js";const u={class:"modal-dialog",role:"document"},h={class:"modal-content border-0"},p={class:"modal-header bg-danger text-white"},f={class:"modal-title"},g=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),x={class:"modal-body"},y={class:"text-danger"},v={class:"modal-footer"},M=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1),N={__name:"DelModal",props:{item:Object},emits:["del-item"],setup(e,{expose:d,emit:l}){const{openModal:i,hideModal:n,modalRef:c}=r(),m=l;return d({openModal:i,hideModal:n}),(k,o)=>(b(),_("div",{class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:c},[t("div",u,[t("div",h,[t("div",p,[t("h5",f,[t("span",null,"刪除 "+s(e.item.title),1)]),g]),t("div",x,[a(" 是否刪除 "),t("strong",y,s(e.item.title),1),a(" (刪除後將無法恢復)。 ")]),t("div",v,[M,t("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=B=>m("del-item"))},"確認刪除 ")])])])],512))}};export{N as _};
