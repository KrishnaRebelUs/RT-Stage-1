import{a as R,d as D,C as A,s as x,c as w,b as $}from"./Box-5352c7b4.js";import{_ as r,e as B,r as M,a as k,b as L,j as f}from"./index-9f53dfb6.js";import{g as W}from"./IconClock-f09b6440.js";import{c as h}from"./createReactComponent-b4845c0e.js";const N=R("MuiBox",["root"]),j=N,y=D({defaultClassName:j.root,generateClassName:A.generate}),G=y,_=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],T=i=>{const{absolute:t,children:e,classes:n,flexItem:s,light:l,orientation:a,textAlign:o,variant:c}=i;return $({root:["root",t&&"absolute",c,l&&"light",a==="vertical"&&"vertical",s&&"flexItem",e&&"withChildren",e&&a==="vertical"&&"withChildrenVertical",o==="right"&&a!=="vertical"&&"textAlignRight",o==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},W,n)},V=x("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>r({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:B(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:i})=>r({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:i,ownerState:t})=>r({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`}}),({theme:i,ownerState:t})=>r({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(i.vars||i).palette.divider}`}}),({ownerState:i})=>r({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),U=x("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>r({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),m=M.forwardRef(function(t,e){const n=k({props:t,name:"MuiDivider"}),{absolute:s=!1,children:l,className:a,component:o=l?"div":"hr",flexItem:c=!1,light:p=!1,orientation:u="horizontal",role:g=o!=="hr"?"separator":void 0,textAlign:b="center",variant:C="fullWidth"}=n,I=L(n,_),d=r({},n,{absolute:s,component:o,flexItem:c,light:p,orientation:u,role:g,textAlign:b,variant:C}),v=T(d);return f.jsx(V,r({as:o,className:w(v.root,a),role:g,ref:e,ownerState:d},I,{children:l?f.jsx(U,{className:v.wrapper,ownerState:d,children:l}):null}))});m.muiSkipListHighlight=!0;const H=m;var q=h("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]),F=h("currency-dollar","IconCurrencyDollar",[["path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2",key:"svg-0"}],["path",{d:"M12 3v3m0 12v3",key:"svg-1"}]]),J=h("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);export{G as B,H as D,q as I,F as a,J as b};
