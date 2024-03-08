import{s as i,A as w,r as c,a as o,F as H,j as u,T as S,aV as T}from"./vendor-1c7a9a47.js";import{ei as a,e9 as E,eh as m,bc as f,b9 as D,fX as O,bf as P,fY as k,fZ as A}from"./index-cdd5c634.js";const X=e=>{const{onClose:t,initialExpanded:d=!0,...l}=e,{isOpen:n,close:s}=f(!0),h=c.useCallback(()=>{t&&t(),s()},[s,t]);return n?o(j,{...l,initialExpanded:d,onClose:h}):o(H,{})},j=e=>{const{title:t,initialExpanded:d=!1,onClose:l,onExpand:n,onCollapse:s,sx:h,isNotToggle:b}=e,{isOpen:r,toggle:x}=f(d),p=D(O),g=P(),C=c.useCallback(()=>{r?s&&s():n&&n(),x()},[r,s,n,x]),$=c.useCallback((G,y)=>{const v=p-(y.y??0);g(k(v))},[g,p]);return u(N,{sx:h,children:[r&&o(A,{type:"horizontal",onDrag:$,mouseEvent:"mouseup"}),u(F,{children:[o(I,{$isNotToggle:b,onClick:b?void 0:C,children:t&&o(S,{px:1,textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",children:t})}),l&&o(z,{onClick:l,children:o(T,{})})]}),o(R,{$isOpen:r,$height:`${p}px`,children:r&&e.children})]})},N=i("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  /* bottom: 0; */
  border-radius: 3px;
  width: 100%;
  max-width: 100%;
  /* box-shadow: 0px -3px 3px -2px rgba(0, 0, 0, 0.2), 0px -3px 4px 0px rgba(0, 0, 0, 0.14),
    0px -1px 8px 0px rgba(0, 0, 0, 0.12); */
  // when render below a table, the table's border gets shown on the bottom, translate down by 2px to hide it */
  /* transform: translateY(
    2px
  ); */
`,F=i("div")`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${e=>e.theme.spacing(4)};
  ${a.sidebarHeader}
  white-space: nowrap;
  border-radius: ${e=>{var t;return(t=e.theme.pacs)==null?void 0:t.layout.borderRadius}}
    ${e=>{var t;return(t=e.theme.pacs)==null?void 0:t.layout.borderRadius}} 0 0;
  :hover {
    ${a.onSideHeaderHover};
  }
  border-top: 0;
  border-bottom: 0;
`,I=i(E,m)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  ${e=>e.$isNotToggle?void 0:a.sidebarHeader};
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  :hover {
    ${a.onSideHeaderHover};
  }
`,R=i(w,m)`
  height: ${e=>e.$isOpen?e.$height:0};
  transition: height ${e=>e.theme.transitions.duration.standard}ms
    ${e=>e.theme.transitions.easing.easeOut};
  overflow: auto;
  box-shadow: none;
`,Y=i("div")`
  ${a.centerChildren};
  max-width: ${e=>e.theme.spacing(4)};
  :hover {
    ${a.onSideHeaderHover};
  }
`,z=i(Y)`
  position: absolute;
  right: 0;
`;export{X as C};
