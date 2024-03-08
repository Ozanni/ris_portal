import{s,a as e,j as o,S as h,T as a,r as y,F as m,Z as g,a9 as u,bq as b}from"./vendor-1c7a9a47.js";import{h3 as v,gy as w,h2 as D,bj as x,du as S,ca as p,cb as W,gU as L}from"./index-cdd5c634.js";import{l as I}from"./logo-hih-9d8b84fe.js";import{a as P}from"./ticket-4df0ff63.js";import{Q as N}from"./QMSDisplayTable-4e3e6958.js";const H=()=>e(M,{children:o(h,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",height:"100%",children:[e(k,{children:e(j,{src:I,alt:"logo"})}),e(a,{variant:"h3",textTransform:"uppercase",fontWeight:600,color:"primary",children:v})]})}),M=s("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,k=s("div")`
  display: inline;
  height: 100%;
  position: relative;
  padding: ${t=>t.theme.spacing(1)};
`,j=s("img")`
  height: 100%;
  top: 0;
  left: 0;
`,Y=t=>e(A,{Head:e(D,{customTitle:"Chờ khám"}),children:t.children}),A=s(w)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
`,R=t=>{var c;const{ticket:n}=t,r=x();return o(h,{justifyContent:"center",height:"100%",spacing:1,children:[e(a,{variant:"h3",fontWeight:500,textTransform:"uppercase",textAlign:"center",children:"Bệnh nhân đang khám"}),e(a,{fontSize:200,fontWeight:500,textTransform:"uppercase",textAlign:"center",children:n==null?void 0:n.ticketNumber}),e(a,{variant:"h3",fontWeight:700,textTransform:"uppercase",textAlign:"center",letterSpacing:2,children:n==null?void 0:n.patientName}),o(a,{variant:"h4",fontWeight:400,textTransform:"uppercase",textAlign:"center",children:[r.resources.ticket.pid(),": ",n==null?void 0:n.pid]}),(n==null?void 0:n.birthDate)&&o(a,{variant:"h4",fontWeight:400,textTransform:"uppercase",textAlign:"center",children:[r.resources.ticket.birthYear(),":"," ",(c=S(n.birthDate))==null?void 0:c.format("YYYY")]})]})},E="/assets/medic-aeea9549.svg",T=y.forwardRef((t,n)=>{const{data:r,isFetching:c}=t,l=x(),C=y.useMemo(()=>{const d=i=>e(a,{variant:"h5",textTransform:"uppercase",fontWeight:500,children:i.children});return[{type:"record",name:"ticketNumber",headerLabel:l.resources.ticket.ticketNumber().toUpperCase(),renderHeader:i=>e(d,{children:i}),renderCell:i=>e(p,{sx:{p:.5},children:e(a,{variant:"h5",textTransform:"uppercase",children:i.getValue()})}),columnDefOptions:{maxSize:50}},{type:"record",name:"patientName",headerLabel:l.resources.ticket.patientName().toUpperCase(),renderHeader:i=>e(d,{children:i}),renderCell:i=>e(p,{sx:{p:.5},children:e(a,{variant:"h5",textTransform:"uppercase",children:i.getValue()})}),columnDefOptions:{minSize:250}},{type:"record",name:"birthDate",headerLabel:l.resources.ticket.birthYear().toUpperCase(),renderHeader:i=>e(d,{children:i}),renderCell:i=>{var f;return e(p,{children:(f=S(i.getValue()))==null?void 0:f.format("YYYY")})},columnDefOptions:{maxSize:50}}]},[l.resources]);return e(W,{tableContainerRef:n,tableId:L.QMS_TICKET,data:r,tableColumnsDescription:C,showPagination:!1,showPaginationInfo:!1,MyDataGridProps:{isLoading:c},paginationControls:{totalRecords:0,pageSize:r.length},TanstackTableOptions:{enableRowSelection:!1,enableMultiRowSelection:!1},sx:{height:"100%"}})});T.displayName="PatientWaitingTable";const O=t=>{const{data:n}=t;return o(Q,{children:[e(m,{children:"Bệnh nhân chờ khám"}),n?e(T,{data:n,isFetching:!1}):e(m,{})]})},Q=t=>o(z,{spacing:1,children:[o(g,{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",p:4,children:[e(a,{variant:"h3",fontWeight:500,textTransform:"uppercase",children:t.children[0]}),e(B,{src:E,alt:"medic"})]}),e($,{TableComponent:t.children[1]})]}),$=s(N)`
  width: 100%;
`,z=s(h)`
  width: 100%;
  height: 100%;
  position: relative;
`,B=s("img")`
  position: absolute;
  right: 0;
  height: ${t=>t.theme.typography.h1.fontSize};
`,U=5*1e3,F=t=>{const{modalityID:n}=t,{data:r}=P({filter:{status:"STARTED",modalityID:n}},{pollingInterval:U,skip:isNaN(n)}),c=r==null?void 0:r.list[0];return o(G,{children:[e(R,{ticket:c}),e(O,{data:r==null?void 0:r.list.slice(1)})]})},G=t=>o(V,{container:!0,direction:"row",wrap:"nowrap",alignItems:"center",children:[e(u,{item:!0,xs:5,p:4,height:"100%",children:t.children[0]}),e(u,{item:!0,xs:7,px:4,py:1,height:"100%",children:t.children[1]})]}),V=s(u)`
  width: 100%;
  height: 100%;
  color: ${t=>t.theme.palette.getContrastText(t.theme.palette.primary.main)};
  background-color: ${t=>t.theme.palette.primary.main};
`,_=t=>{const{HeaderComponent:n,MainComponent:r}=t;return o(h,{spacing:0,width:"100%",height:"100%",children:[e(g,{justifyContent:"center",width:"100%",height:"100%",maxHeight:"15vh",children:n}),e(g,{width:"100%",height:"100%",children:r})]})},ee=()=>{const{modalityID:t}=b();return e(m,{children:e(Y,{children:e(_,{HeaderComponent:e(H,{}),MainComponent:t&&e(F,{modalityID:parseInt(t)})})})})};export{ee as PatientWaitingScreen};
