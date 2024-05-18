import{r as a,b as K,j as W,_ as T,a as xe,d as ke}from"./index-9f53dfb6.js";import{P as $e,u as q,b as _e}from"./ListContext-291d03b2.js";import{g as be,a as we,s as Y,c as oe,b as Me,r as ze}from"./Box-5352c7b4.js";import{T as He,r as je,g as me,a as Ae,M as Ne}from"./Modal-fa771678.js";import{e as Ke,a as re,u as We}from"./Typography-ce8240ad.js";import{a as J,o as ge,d as Ue}from"./ownerWindow-fbe9f185.js";import{u as Ge}from"./Grid-b755f9c1.js";import{L as Ve}from"./List-2cc2d37a.js";const Be=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ne(t){return`scale(${t}, ${t**2})`}const Xe={entering:{opacity:1,transform:ne(1)},entered:{opacity:1,transform:"none"}},Z=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Te=a.forwardRef(function(e,o){const{addEndListener:L,appear:M=!0,children:y,easing:f,in:d,onEnter:u,onEntered:v,onEntering:D,onExit:E,onExited:A,onExiting:x,style:z,timeout:b="auto",TransitionComponent:h=He}=e,i=K(e,Be),H=Ke(),n=a.useRef(),s=Ge(),c=a.useRef(null),m=re(c,y.ref,o),r=l=>R=>{if(l){const S=c.current;R===void 0?l(S):l(S,R)}},F=r(D),k=r((l,R)=>{je(l);const{duration:S,delay:g,easing:P}=me({style:z,timeout:b,easing:f},{mode:"enter"});let N;b==="auto"?(N=s.transitions.getAutoHeightDuration(l.clientHeight),n.current=N):N=S,l.style.transition=[s.transitions.create("opacity",{duration:N,delay:g}),s.transitions.create("transform",{duration:Z?N:N*.666,delay:g,easing:P})].join(","),u&&u(l,R)}),$=r(v),B=r(x),I=r(l=>{const{duration:R,delay:S,easing:g}=me({style:z,timeout:b,easing:f},{mode:"exit"});let P;b==="auto"?(P=s.transitions.getAutoHeightDuration(l.clientHeight),n.current=P):P=R,l.style.transition=[s.transitions.create("opacity",{duration:P,delay:S}),s.transitions.create("transform",{duration:Z?P:P*.666,delay:Z?S:S||P*.333,easing:g})].join(","),l.style.opacity=0,l.style.transform=ne(.75),E&&E(l)}),_=r(A),U=l=>{b==="auto"&&H.start(n.current||0,l),L&&L(c.current,l)};return W.jsx(h,T({appear:M,in:d,nodeRef:c,onEnter:k,onEntered:$,onEntering:F,onExit:I,onExited:_,onExiting:B,addEndListener:U,timeout:b==="auto"?null:b},i,{children:(l,R)=>a.cloneElement(y,T({style:T({opacity:0,transform:ne(.75),visibility:l==="exited"&&!d?"hidden":void 0},Xe[l],z,y.props.style),ref:m},R))}))});Te.muiSupportAuto=!0;const Ye=Te,qe=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function ee(t,e,o){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:o?null:t.firstChild}function Pe(t,e,o){return t===e?o?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:o?null:t.lastChild}function Re(t,e){if(e===void 0)return!0;let o=t.innerText;return o===void 0&&(o=t.textContent),o=o.trim().toLowerCase(),o.length===0?!1:e.repeating?o[0]===e.keys[0]:o.indexOf(e.keys.join(""))===0}function X(t,e,o,L,M,y){let f=!1,d=M(t,e,e?o:!1);for(;d;){if(d===t.firstChild){if(f)return!1;f=!0}const u=L?!1:d.disabled||d.getAttribute("aria-disabled")==="true";if(!d.hasAttribute("tabindex")||!Re(d,y)||u)d=M(t,d,o);else return d.focus(),!0}return!1}const Je=a.forwardRef(function(e,o){const{actions:L,autoFocus:M=!1,autoFocusItem:y=!1,children:f,className:d,disabledItemsFocusable:u=!1,disableListWrap:v=!1,onKeyDown:D,variant:E="selectedMenu"}=e,A=K(e,qe),x=a.useRef(null),z=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});We(()=>{M&&x.current.focus()},[M]),a.useImperativeHandle(L,()=>({adjustStyleForScrollbar:(n,{direction:s})=>{const c=!x.current.style.width;if(n.clientHeight<x.current.clientHeight&&c){const m=`${Ae(J(n))}px`;x.current.style[s==="rtl"?"paddingLeft":"paddingRight"]=m,x.current.style.width=`calc(100% + ${m})`}return x.current}}),[]);const b=n=>{const s=x.current,c=n.key,m=J(s).activeElement;if(c==="ArrowDown")n.preventDefault(),X(s,m,v,u,ee);else if(c==="ArrowUp")n.preventDefault(),X(s,m,v,u,Pe);else if(c==="Home")n.preventDefault(),X(s,null,v,u,ee);else if(c==="End")n.preventDefault(),X(s,null,v,u,Pe);else if(c.length===1){const r=z.current,F=c.toLowerCase(),k=performance.now();r.keys.length>0&&(k-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&F!==r.keys[0]&&(r.repeating=!1)),r.lastTime=k,r.keys.push(F);const $=m&&!r.repeating&&Re(m,r);r.previousKeyMatched&&($||X(s,m,!1,u,ee,r))?n.preventDefault():r.previousKeyMatched=!1}D&&D(n)},h=re(x,o);let i=-1;a.Children.forEach(f,(n,s)=>{if(!a.isValidElement(n)){i===s&&(i+=1,i>=f.length&&(i=-1));return}n.props.disabled||(E==="selectedMenu"&&n.props.selected||i===-1)&&(i=s),i===s&&(n.props.disabled||n.props.muiSkipListHighlight||n.type.muiSkipListHighlight)&&(i+=1,i>=f.length&&(i=-1))});const H=a.Children.map(f,(n,s)=>{if(s===i){const c={};return y&&(c.autoFocus=!0),n.props.tabIndex===void 0&&E==="selectedMenu"&&(c.tabIndex=0),a.cloneElement(n,c)}return n});return W.jsx(Ve,T({role:"menu",ref:h,className:d,onKeyDown:b,tabIndex:M?0:-1},A,{children:H}))}),Qe=Je;function Ze(t){return be("MuiPopover",t)}we("MuiPopover",["root","paper"]);const et=["onEntering"],tt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],ot=["slotProps"];function ve(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.height/2:e==="bottom"&&(o=t.height),o}function ye(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.width/2:e==="right"&&(o=t.width),o}function Ee(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function te(t){return typeof t=="function"?t():t}const nt=t=>{const{classes:e}=t;return Me({root:["root"],paper:["paper"]},Ze,e)},rt=Y(Ne,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Se=Y($e,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),st=a.forwardRef(function(e,o){var L,M,y;const f=xe({props:e,name:"MuiPopover"}),{action:d,anchorEl:u,anchorOrigin:v={vertical:"top",horizontal:"left"},anchorPosition:D,anchorReference:E="anchorEl",children:A,className:x,container:z,elevation:b=8,marginThreshold:h=16,open:i,PaperProps:H={},slots:n,slotProps:s,transformOrigin:c={vertical:"top",horizontal:"left"},TransitionComponent:m=Ye,transitionDuration:r="auto",TransitionProps:{onEntering:F}={},disableScrollLock:k=!1}=f,$=K(f.TransitionProps,et),B=K(f,tt),I=(L=s==null?void 0:s.paper)!=null?L:H,_=a.useRef(),U=re(_,I.ref),l=T({},f,{anchorOrigin:v,anchorReference:E,elevation:b,marginThreshold:h,externalPaperSlotProps:I,transformOrigin:c,TransitionComponent:m,transitionDuration:r,TransitionProps:$}),R=nt(l),S=a.useCallback(()=>{if(E==="anchorPosition")return D;const p=te(u),C=(p&&p.nodeType===1?p:J(_.current).body).getBoundingClientRect();return{top:C.top+ve(C,v.vertical),left:C.left+ye(C,v.horizontal)}},[u,v.horizontal,v.vertical,D,E]),g=a.useCallback(p=>({vertical:ve(p,c.vertical),horizontal:ye(p,c.horizontal)}),[c.horizontal,c.vertical]),P=a.useCallback(p=>{const w={width:p.offsetWidth,height:p.offsetHeight},C=g(w);if(E==="none")return{top:null,left:null,transformOrigin:Ee(C)};const ce=S();let G=ce.top-C.vertical,V=ce.left-C.horizontal;const ue=G+w.height,pe=V+w.width,fe=ge(te(u)),de=fe.innerHeight-h,he=fe.innerWidth-h;if(h!==null&&G<h){const O=G-h;G-=O,C.vertical+=O}else if(h!==null&&ue>de){const O=ue-de;G-=O,C.vertical+=O}if(h!==null&&V<h){const O=V-h;V-=O,C.horizontal+=O}else if(pe>he){const O=pe-he;V-=O,C.horizontal+=O}return{top:`${Math.round(G)}px`,left:`${Math.round(V)}px`,transformOrigin:Ee(C)}},[u,E,S,g,h]),[N,se]=a.useState(i),j=a.useCallback(()=>{const p=_.current;if(!p)return;const w=P(p);w.top!==null&&(p.style.top=w.top),w.left!==null&&(p.style.left=w.left),p.style.transformOrigin=w.transformOrigin,se(!0)},[P]);a.useEffect(()=>(k&&window.addEventListener("scroll",j),()=>window.removeEventListener("scroll",j)),[u,k,j]);const Ce=(p,w)=>{F&&F(p,w),j()},Le=()=>{se(!1)};a.useEffect(()=>{i&&j()}),a.useImperativeHandle(d,()=>i?{updatePosition:()=>{j()}}:null,[i,j]),a.useEffect(()=>{if(!i)return;const p=Ue(()=>{j()}),w=ge(u);return w.addEventListener("resize",p),()=>{p.clear(),w.removeEventListener("resize",p)}},[u,i,j]);let ie=r;r==="auto"&&!m.muiSupportAuto&&(ie=void 0);const De=z||(u?J(te(u)).body:void 0),Q=(M=n==null?void 0:n.root)!=null?M:rt,ae=(y=n==null?void 0:n.paper)!=null?y:Se,Fe=q({elementType:ae,externalSlotProps:T({},I,{style:N?I.style:T({},I.style,{opacity:0})}),additionalProps:{elevation:b,ref:U},ownerState:l,className:oe(R.paper,I==null?void 0:I.className)}),le=q({elementType:Q,externalSlotProps:(s==null?void 0:s.root)||{},externalForwardedProps:B,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:De,open:i},ownerState:l,className:oe(R.root,x)}),{slotProps:Ie}=le,Oe=K(le,ot);return W.jsx(Q,T({},Oe,!_e(Q)&&{slotProps:Ie,disableScrollLock:k},{children:W.jsx(m,T({appear:!0,in:i,onEntering:Ce,onExited:Le,timeout:ie},$,{children:W.jsx(ae,T({},Fe,{children:A}))}))}))}),it=st;function at(t){return be("MuiMenu",t)}we("MuiMenu",["root","paper","list"]);const lt=["onEntering"],ct=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],ut={vertical:"top",horizontal:"right"},pt={vertical:"top",horizontal:"left"},ft=t=>{const{classes:e}=t;return Me({root:["root"],paper:["paper"],list:["list"]},at,e)},dt=Y(it,{shouldForwardProp:t=>ze(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),ht=Y(Se,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),mt=Y(Qe,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),gt=a.forwardRef(function(e,o){var L,M;const y=xe({props:e,name:"MuiMenu"}),{autoFocus:f=!0,children:d,className:u,disableAutoFocusItem:v=!1,MenuListProps:D={},onClose:E,open:A,PaperProps:x={},PopoverClasses:z,transitionDuration:b="auto",TransitionProps:{onEntering:h}={},variant:i="selectedMenu",slots:H={},slotProps:n={}}=y,s=K(y.TransitionProps,lt),c=K(y,ct),m=ke(),r=T({},y,{autoFocus:f,disableAutoFocusItem:v,MenuListProps:D,onEntering:h,PaperProps:x,transitionDuration:b,TransitionProps:s,variant:i}),F=ft(r),k=f&&!v&&A,$=a.useRef(null),B=(g,P)=>{$.current&&$.current.adjustStyleForScrollbar(g,{direction:m?"rtl":"ltr"}),h&&h(g,P)},I=g=>{g.key==="Tab"&&(g.preventDefault(),E&&E(g,"tabKeyDown"))};let _=-1;a.Children.map(d,(g,P)=>{a.isValidElement(g)&&(g.props.disabled||(i==="selectedMenu"&&g.props.selected||_===-1)&&(_=P))});const U=(L=H.paper)!=null?L:ht,l=(M=n.paper)!=null?M:x,R=q({elementType:H.root,externalSlotProps:n.root,ownerState:r,className:[F.root,u]}),S=q({elementType:U,externalSlotProps:l,ownerState:r,className:F.paper});return W.jsx(dt,T({onClose:E,anchorOrigin:{vertical:"bottom",horizontal:m?"right":"left"},transformOrigin:m?ut:pt,slots:{paper:U,root:H.root},slotProps:{root:R,paper:S},open:A,ref:o,transitionDuration:b,TransitionProps:T({onEntering:B},s),ownerState:r},c,{classes:z,children:W.jsx(mt,T({onKeyDown:I,actions:$,autoFocus:f&&(_===-1||v),autoFocusItem:k,variant:i},D,{className:oe(F.list,D.className),children:d}))}))}),Tt=gt;export{Tt as M};
