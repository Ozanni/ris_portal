import{r as i,a as t,F as C,j as p,S as y,s as g,T as R,a9 as b}from"./vendor-1c7a9a47.js";import{Q as v}from"./QMSDisplayTable-4e3e6958.js";import{gT as L,cQ as D,gU as T,cS as O,bj as x,ca as f,du as I,cb as P,h3 as q,gy as k,h2 as E}from"./index-cdd5c634.js";import{l as H}from"./logo-hih-9d8b84fe.js";const M=L.injectEndpoints({endpoints:e=>({getListApprovedDiagnosis:e.query({query:o=>({...D(o,T.QMS_APPROVED_DIAGNOSIS),useHospitalID:!1}),transformResponse:O})})}),{useGetListApprovedDiagnosisQuery:N}=M,S=(e,o)=>{if(!e)return{overflowRatio:1,numberOfRowsPerTable:0};const n=e.querySelector("table"),l=n==null?void 0:n.querySelector("thead"),s=n==null?void 0:n.querySelector("tbody"),a=s==null?void 0:s.querySelector("tr");if(l&&a){const r=e.getBoundingClientRect(),c=l.getBoundingClientRect(),m=a.getBoundingClientRect(),u=c.height,d=r.height,h=m.height;return{overflowRatio:o*h/(d-u),numberOfRowsPerTable:Math.floor((d-u)/h)}}return{overflowRatio:1,numberOfRowsPerTable:0}},w=i.forwardRef((e,o)=>{const{data:n,isFetching:l}=e,s=x(),a=i.useMemo(()=>[{type:"record",name:"ticketNumber",headerLabel:s.resources.ticket.ticketNumber().toUpperCase(),renderCell:r=>t(f,{children:r.getValue()}),columnDefOptions:{maxSize:50}},{type:"record",name:"patientName",headerLabel:s.resources.ticket.patientName().toUpperCase(),renderCell:r=>t(f,{children:r.getValue()}),columnDefOptions:{minSize:250}},{type:"record",name:"birthDate",headerLabel:s.resources.ticket.birthYear().toUpperCase(),renderCell:r=>{var c;return t(f,{children:(c=I(r.getValue()))==null?void 0:c.format("YYYY")})},columnDefOptions:{maxSize:50}},{type:"record",name:"procedureCode",headerLabel:s.resources.ticket.procedureCode().toUpperCase(),renderCell:r=>t(f,{children:r.getValue()}),columnDefOptions:{maxSize:50}}],[s.resources]);return t(P,{tableContainerRef:o,tableId:T.QMS_APPROVED_DIAGNOSIS,data:n,tableColumnsDescription:a,showPagination:!1,showPaginationInfo:!1,MyDataGridProps:{isLoading:l},paginationControls:{totalRecords:0,pageSize:n.length},TanstackTableOptions:{enableRowSelection:!1,enableMultiRowSelection:!1},sx:{height:"100%"}})});w.displayName="WaitingListTable";const A=5*1e3,W=()=>{const{data:e,isFetching:o}=N({filter:{}},{pollingInterval:A,refetchOnReconnect:!0,refetchOnFocus:!0}),n=i.useRef(null),l=i.useRef(null),[s,a]=i.useState(S(n.current,(e==null?void 0:e.list.length)||0)),r=i.useCallback(()=>a(S(n.current,(e==null?void 0:e.list.length)||0)),[e==null?void 0:e.list.length]);return i.useEffect(()=>{e&&n.current&&r()},[e,r]),i.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[r]),e?t(j,{data:e,firstTableRef:n,secondTableRef:l,overflowInfo:s,isFetching:o}):t(C,{})},j=e=>{const{data:o,isFetching:n,firstTableRef:l,secondTableRef:s,overflowInfo:a}=e,[r,c]=i.useState({first:o.list.slice(),second:[]});return i.useEffect(()=>{const{overflowRatio:m,numberOfRowsPerTable:u}=a;if(o&&m>1){const d=o.list.slice(),h=d.splice(u);c({first:d,second:h})}},[o,a]),p(z,{children:[t(w,{ref:l,data:r.first,isFetching:n}),t(w,{ref:s,data:r.second,isFetching:n})]})},z=e=>t(y,{direction:"row",height:"100%",children:e.children}),Q=()=>t(G,{children:p(y,{spacing:0,children:[p(y,{direction:"row",spacing:2,alignItems:"center",justifyContent:"center",children:[t(V,{children:t(_,{src:H,alt:"logo"})}),t(R,{variant:"h3",textTransform:"uppercase",fontWeight:600,color:"primary",children:q})]}),t(R,{variant:"h3",textTransform:"uppercase",fontWeight:600,color:"red",align:"center",children:"Nhận kết quả"})]})}),G=g("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,V=g("div")`
  display: inline;
  /* width: ${e=>e.theme.typography.h1.fontSize}; */
  position: relative;
`,_=g("img")`
  height: ${e=>e.theme.typography.h1.fontSize};
  top: 0;
  left: 0;
`,F=e=>t(U,{Head:t(E,{customTitle:"Chờ kết quả"}),children:e.children}),U=g(k)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
`,Y=e=>{const{HeaderComponent:o,TableComponent:n}=e;return p(b,{container:!0,direction:"column",width:"100%",height:"100%",wrap:"nowrap",children:[t(b,{item:!0,xs:2,justifyContent:"center",children:o}),t(b,{item:!0,xs:!0,overflow:"auto",children:n})]})},X=()=>t(F,{children:t(Y,{HeaderComponent:t(Q,{}),TableComponent:t(v,{TableComponent:t(W,{})})})});export{X as WaitingList};
