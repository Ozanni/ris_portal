import{s as l,T as a,a as e,S as p,j as c,a9 as o,r as g,bq as f}from"./vendor-1c7a9a47.js";import{h7 as S,h3 as T,h8 as x,gy as L,h2 as M,gT as C,cQ as v,gU as u,cS as b,ca as d,cb as w,dl as I}from"./index-cdd5c634.js";import{l as D}from"./logo-hih-9d8b84fe.js";import{Q as H}from"./QMSDisplayTable-4e3e6958.js";const R=()=>{const t=S(1e3);return e(E,{children:e(P,{align:"center",children:t.format("DD/MM/YYYY HH:mm:ss")})})},E=l("div")`
  width: 100%;
  flex-direction: column;
`,P=l(a)`
  ${t=>t.theme.typography.h5}
  color: ${t=>t.theme.palette.primary.main};
`,Q=()=>c(o,{container:!0,display:"flex",padding:2,children:[e(o,{item:!0,xs:6,children:c(p,{direction:"row",spacing:2,alignItems:"center",justifyContent:"left",height:"100%",children:[e(A,{children:e(N,{src:D,alt:"logo"})}),c(p,{children:[e(a,{variant:"h4",textTransform:"uppercase",fontWeight:500,color:"primary",children:T}),e(a,{variant:"h5",textTransform:"uppercase",fontWeight:400,color:"primary",sx:{fontStyle:"italic"},children:x})]})]})}),e(o,{item:!0,xs:6,children:c(_,{children:[e(a,{variant:"h3",align:"center",textTransform:"uppercase",fontWeight:600,color:"primary",children:"Số thứ tự tổng hợp"}),e(R,{})]})})]}),_=l(p)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`,A=l("div")`
  display: inline;
  height: 100%;
  position: relative;
  padding: ${t=>t.theme.spacing(1)};
`,N=l("img")`
  height: 100%;
  top: 0;
  left: 0;
`,O=t=>e(W,{Head:e(M,{customTitle:"Màn hình tổng hợp"}),children:t.children}),W=l(L)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
`,q=C.injectEndpoints({endpoints:t=>({getListTicketSummary:t.query({query:i=>({...v(i,u.QMS_TICKET_SUMMARY),useHospitalID:!1}),transformResponse:b})})}),{useGetListTicketSummaryQuery:j,useLazyGetListTicketSummaryQuery:K}=q,k=t=>{if(t){const i=new Set,r=[];return t.map(s=>{s.modalityType&&i.add(s.modalityType)}),i.forEach(s=>{t.forEach(h=>{h.modalityType===s&&r.push(h)})}),r}return[]},G=30*1e3,Y=t=>{const{siteID:i}=t,{data:r,isFetching:s}=j({filter:{siteID:i}},{pollingInterval:G}),h=k(r==null?void 0:r.list),y=g.useMemo(()=>{const m=n=>e(a,{variant:"h5",textTransform:"uppercase",fontWeight:500,children:n.children});return[{type:"record",name:"roomName",headerLabel:"Tên phòng",renderHeader:n=>e(m,{children:n}),renderCell:n=>e(d,{sx:{p:.5},children:e(a,{variant:"h5",textTransform:"uppercase",children:n.getValue()})}),columnDefOptions:{size:300}},{type:"record",name:"firstNumber",headerLabel:"Đang thực hiện",renderHeader:n=>e(m,{children:n}),renderCell:n=>e(d,{sx:{p:.5},children:e(a,{variant:"h5",textTransform:"uppercase",children:n.getValue()})}),columnDefOptions:{maxSize:50}},{type:"record",name:"secondNumber",headerLabel:"Chờ thực hiện",renderHeader:n=>e(m,{children:n}),renderCell:n=>e(d,{sx:{p:.5},children:e(a,{variant:"h5",textTransform:"uppercase",children:n.getValue()})}),columnDefOptions:{maxSize:50}}]},[]);return r?e(H,{TableComponent:e(w,{tableId:u.QMS_TICKET_SUMMARY,data:h,tableColumnsDescription:y,showPagination:!1,showPaginationInfo:!1,MyDataGridProps:{isLoading:s},paginationControls:{totalRecords:r==null?void 0:r.meta.totalRecords,pageSize:r==null?void 0:r.list.length},TanstackTableOptions:{enableRowSelection:!1,enableMultiRowSelection:!1},sx:{height:"100%"}})}):e(I,{})},z=t=>c(o,{container:!0,spacing:2,direction:"column",width:"100%",height:"100%",wrap:"nowrap",children:[e(o,{item:!0,xs:2,children:t.SummaryHeader}),e(o,{item:!0,xs:10,children:t.SummaryList})]}),B=()=>{const{site:t}=f();return e(O,{children:e(z,{SummaryHeader:e(Q,{}),SummaryList:t&&e(Y,{siteID:parseInt(t)})})})};export{B as MainSummary};
