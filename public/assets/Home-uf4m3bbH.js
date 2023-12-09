import{r as y,o as f,c as p,a as x,n as h,b as c,t as g,d as b,e as k,F as M,f as S,g as _,w as $,h as B,i as C}from"./index-AoccnuB6.js";import{_ as w}from"./_plugin-vue_export-helper-x3n3nnut.js";const H=["data-cy","name","type","disabled"],I={__name:"Btn",props:{name:{type:String,default:()=>"id-"+Math.random().toString(16).slice(2)},type:{type:String,default:()=>"button"},def:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},round:{type:Boolean,default:!1}},emits:["click","cancel"],setup(t,{emit:s}){const o=s,n=y({down:!1});function u(l){o("click",l)}function r(l){n.down&&(o("cancel",l),n.down=!1)}return(l,i)=>(f(),p("button",{"data-cy":`btn-${t.name}`,name:t.name,type:t.type,disabled:!!t.disabled,class:h({disabled:t.disabled,default:t.def,round:t.round,down:n.down}),onClick:u,onMouseup:i[0]||(i[0]=e=>n.down=!1),onMousedown:i[1]||(i[1]=e=>n.down=!0),onMouseleave:r},[x(l.$slots,"default",{},void 0,!0),x(l.$slots,"icon",{},void 0,!0)],42,H))}},T=w(I,[["__scopeId","data-v-9531c6e6"]]),E={class:"main-input"},F=["value"],L={__name:"InputText",props:{text:String,placeholder:String},emits:["update:text"],setup(t,{emit:s}){const o=s;return(n,u)=>(f(),p("div",E,[c("input",{type:"text",value:t.text,onInput:u[0]||(u[0]=r=>o("update:text",r.target.value))},null,40,F),c("p",{class:h(["label",{animate:t.text.length}])},g(t.placeholder),3)]))}},N=w(L,[["__scopeId","data-v-4d1f0db6"]]),V={class:"main"},W={class:"chat"},D={class:"input-wrapper"},K="wss://ws-chat-ntws.onrender.com",z={__name:"Home",setup(t){const s=b(""),o=b([]);let n;function u(){o.value.push({value:s.value,is_sent:!0,hhmm:r()}),n.send(s.value),s.value=""}function r(){const e=new Date,d=e.getHours()<10?"0"+e.getHours():e.getHours(),a=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();return d+":"+a}function l(){n=new WebSocket(K),n.addEventListener("open",e=>{console.log("Connected to WebSocket server")}),n.addEventListener("message",async e=>{const d=await i(e.data);o.value.push({value:d,hhmm:r()})})}function i(e){return new Promise((d,a)=>{const m=new FileReader;m.onload=v=>d(v.target.result),m.onerror=v=>a(v.target.error),m.readAsText(e)})}return k(()=>{l()}),(e,d)=>(f(),p("div",V,[c("div",W,[(f(!0),p(M,null,S(o.value,(a,m)=>(f(),p("div",{key:m,class:h(["cloud-text",{sent:a.is_sent}])},[c("p",null,g(a.value),1),c("label",null,g(a.hhmm),1)],2))),128))]),c("div",D,[_(N,{class:"input",placeholder:"Message",text:s.value,"onUpdate:text":d[0]||(d[0]=a=>s.value=a),onKeydown:$(u,["enter"])},null,8,["text"]),_(T,{class:"l-12",onClick:u},{default:B(()=>[C("Send")]),_:1})])]))}},R=w(z,[["__scopeId","data-v-9318d829"]]);export{R as default};
