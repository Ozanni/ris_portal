import{c5 as _,c6 as x,c7 as D,a as e,s as u,Z as w,S as R,F as A,aF as se,aG as C,j as S,ao as ie,r as I,T as O,a9 as le,bd as ce}from"./vendor-1c7a9a47.js";import{c8 as T,bU as de,ce as k,bP as ue,b9 as b,bD as q,gU as E,bm as F,h4 as y,ef as pe,b0 as he,bj as L,bf as $,eT as N,dn as me,f4 as fe,f5 as ye,ex as be,dm as Te,bv as v,h5 as Z,br as g,bz as Se,gy as ge,h2 as ve,cH as Ce,dM as Ie,ca as W,du as ke,cb as Me,bx as _e}from"./index-cdd5c634.js";import{b as xe,c as J,a as De}from"./ticket-4df0ff63.js";import{T as M}from"./ticket-3f902f2c.js";import{a as z}from"./qmsModality-adfb03b7.js";import{u as Ee}from"./sound-37325c7e.js";var j={},Le=x;Object.defineProperty(j,"__esModule",{value:!0});var ee=j.default=void 0,Ne=Le(_()),Pe=D,we=(0,Ne.default)((0,Pe.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"}),"Cast");ee=j.default=we;var B={},Re=x;Object.defineProperty(B,"__esModule",{value:!0});var te=B.default=void 0,Ae=Re(_()),Oe=D,Fe=(0,Ae.default)((0,Oe.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");te=B.default=Fe;var G={},$e=x;Object.defineProperty(G,"__esModule",{value:!0});var ne=G.default=void 0,ze=$e(_()),je=D,Be=(0,ze.default)((0,je.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"DoDisturbOn");ne=G.default=Be;const Ge=t=>{const{record:n}=t,[r]=xe(),a=T("success","Bỏ lượt"),l=T("error","Bỏ lượt không thành công"),s=T("success","Hoàn thành"),o=T("error","Xác nhận hoàn thành thất bại");return{passingTicket:async()=>{n&&("error"in await r({status:M.PASSING,id:n.id})?l():a())},completeTicket:async()=>{n&&("error"in await r({status:M.COMPLETED,id:n.id})?o():s())}}};var Q={},Qe=x;Object.defineProperty(Q,"__esModule",{value:!0});var re=Q.default=void 0,Ue=Qe(_()),He=D,We=(0,Ue.default)((0,He.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");re=Q.default=We;const Ve=t=>{var p;const{query:n}=t,[r]=J(),[a]=Ee(),l=(p=n==null?void 0:n.filter)==null?void 0:p.modalityID,{data:s}=z({filter:{}}),o=s==null?void 0:s.list.find(d=>d.id===l),m=T("success","Gọi loa"),c=T("error","Gọi loa");return{currentModality:o,callSpeaker:async()=>{if(n&&o){const f=(await r(n).unwrap()).list[0].id;try{"error"in await a({ticketId:f})?c():m()}catch{c()}}},isDisableButton:!(o!=null&&o.speakerID)}},Ke=t=>{const{query:n}=t,{callSpeaker:r,isDisableButton:a}=Ve({query:n});return de("space",()=>{r()}),e(k,{disabled:a,title:`Gọi loa (${ue.CALL_SPEAKER.title})`,onClick:async()=>r(),children:e(re,{})})},Ye=t=>{const{ActionsButton:n,ContainerProps:r}=t;return e(Xe,{...r,children:e(A,{children:e(qe,{direction:"row",children:n})})})},Xe=u(w)`
  display: flex;
  width: 100%;
  justify-content: left;
`,qe=u(R)``;function Ze(){var o;const t=b(q(E.QMS_TICKET)),n=b(F(y)),r=(o=n==null?void 0:n.filter)==null?void 0:o.modalityID,a=pe(),{completeTicket:l,passingTicket:s}=Ge({record:t});return e(Ye,{ActionsButton:[n&&e(Ke,{query:n},"Gọi loa"),e(k,{title:"Hoàn thành",onClick:async()=>{l()},children:e(te,{})},"Hoàn thành"),e(k,{title:"Bỏ lượt",onClick:async()=>{s()},children:e(ne,{})},"Bỏ lượt"),e(k,{title:"Màn hình chờ",onClick:()=>{r?window.open(`${he}/${r}`,"_blank"):a({message:"Chọn phòng chụp để thực hiện chức năng này",options:{variant:"error"}})},children:e(ee,{})},"Màn hình chờ")]})}const oe={STARTED:{label:"Chưa chụp"},PASSING:{label:"Qua lượt"},COMPLETED:{label:"Hoàn thành"}},V={pid:"",patientName:"",status:M.STARTED},Je=()=>{const t=L(),n=$(),r=b(F(y)),[a]=J(),l={mode:"onChange",resolver:se(C.object({pid:C.string().trim().optional().transform(N),patientName:C.string().trim().optional().transform(N),status:C.string().trim().optional().transform(N)})),defaultValues:{status:(r==null?void 0:r.filter.status)??V.status}};return e(et,{children:e(me,{formOptions:l,onSubmit:o=>{n(v({tableId:y,filter:{...r==null?void 0:r.filter,...o}})),a({...r,filter:{...r==null?void 0:r.filter,...o}})},submitOnEnter:!0,renderInputs:({control:o,formState:m,onKeyDown:c,submit:i,reset:p})=>e(fe,{handleSubmit:i,renderPrimaryField:({open:d,isOpen:f})=>e(ye,{name:"patientName",control:o,handleSubmit:i,handleExpand:d,isExpanded:f,isFormDirty:m.isDirty,handleReset:()=>p(V),MyTextFieldProps:{placeholder:"Tên bệnh nhân",fullWidth:!0,onKeyDown:c}}),ExtraFieldsComponent:S(A,{children:[e(be,{name:"pid",control:o,MyTextFieldProps:{label:"Mã bệnh nhân",placeholder:"Mã bệnh nhân",fullWidth:!0,onKeyDown:c}}),e(Te,{name:"status",control:o,MySelectProps:{label:t.pages.reception.status(),size:"small"},children:Object.entries(oe).map(([d,f])=>e(ie,{value:d,children:f.label},d))})]})})})})},et=u("div")`
  width: 100%;
`,P="MODALITY_GROUP_",ae="MODALITY_",K="ALL_",tt=()=>{const{data:t}=z({filter:{}}),n=b(Z(E.QMS_TICKET)),r=(n==null?void 0:n.modalityID)&&X(n==null?void 0:n.modalityID),a=$(),l=L(),s=I.useMemo(()=>{const i=t==null?void 0:t.list,p=(i==null?void 0:i.map(h=>h.modalityType))||[],d=[...new Set(p)],f=new Map;return i&&d&&(d.forEach(h=>{h&&f.set(Y(h),[])}),i.forEach(h=>{var U;if(h.modalityType){const H=Y(h.modalityType);f.get(H)&&((U=f.get(H))==null||U.push(h))}})),f},[t==null?void 0:t.list]),o=I.useMemo(()=>{const i=[];return i.push({MyTreeItemProps:{nodeId:K,label:l.buttons.all(),ContentProps:{labelCollapsedIcon:e(g,{color:"primary"}),labelIcon:e(g,{color:"primary"})}}}),s.forEach((p,d)=>{const f={MyTreeItemProps:{nodeId:d,label:d.replace(P,""),ContentProps:{labelCollapsedIcon:e(g,{color:"primary"}),labelIcon:e(g,{color:"primary"})}},children:p.map(h=>({MyTreeItemProps:{nodeId:X(h.id),label:h.name,ContentProps:{labelIcon:e(g,{color:"primary"})}}}))};i.push(f)}),i},[s,l]),m=I.useCallback((i,p)=>{if(p===K){a(v({tableId:y,filter:{modalityID:null},merge:!0}));return}if(p.includes(P))s.get(p),a(v({tableId:y,filter:{modalityID:null},merge:!0}));else{const d=p.replace(ae,"");a(v({tableId:y,filter:{modalityID:parseInt(d)},merge:!0}))}},[a,s]),c=Array.from(s.keys());return t?e(Se,{trees:o,multiSelect:!1,defaultExpanded:c,onNodeSelect:m,selected:r||""}):e(A,{})},Y=t=>`${P}${t}`,X=t=>`${ae}${t}`,nt=u(ge)`
  display: flex;
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  overflow: hidden;
`,rt=({children:t})=>e(nt,{Head:e(ve,{customTitle:"Phòng chụp"}),children:t}),ot=()=>{const t=b(q(E.QMS_TICKET));return S(at,{sx:{p:2,border:"1px solid grey"},children:[e(O,{children:"STT vào chụp:"}),e(st,{children:(t==null?void 0:t.ticketNumber)??"____"})]})},at=u("div")`
  width: 176px;
`,st=u(O)`
  font-size: 46px;
`,it=()=>{var l;const t=b(Z(E.QMS_TICKET)),n=(t==null?void 0:t.modalityID)||0,{data:r}=z({filter:{}}),a=(l=r==null?void 0:r.list.find(s=>s.id===n))==null?void 0:l.roomName;return e(lt,{roomName:a||""},n)},lt=t=>{const{roomName:n}=t;return e(w,{display:"flex",justifyContent:"center",alignItems:"center",children:e(O,{variant:"h3",fontWeight:600,color:"primary",children:n})})},ct=t=>{const{TableComponent:n,FilterComponent:r,ActionButons:a,TicketNumber:l,RoomName:s}=t;return S(pt,{children:[S(dt,{children:[S(ut,{children:[e(mt,{children:r}),e(ft,{children:a})]}),s,e(yt,{item:!0,xs:5,justifyContent:"end",children:l})]}),e(ht,{children:n})]})},dt=u("div")`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
`,ut=u(R)`
  width: 100%;
  gap: ${t=>t.theme.spacing(3)};
`,pt=u(R)`
  display: flex;
  gap: ${t=>t.theme.spacing(2)};
  width: 100%;
  height: 100%;
  /* max-height: 100%; */
  overflow: hidden;
  padding: ${t=>t.theme.spacing(1)};
  padding-bottom: 0;
`,ht=u("div")`
  display: flex;
  flex: 1;
  height: 100%;
  overflow: auto;
  /* max-height: 100%; */
`,mt=u("div")`
  display: flex;
  width: 100%;
  /* max-height: 100%; */
`,ft=u("div")`
  display: flex;
  width: 50%;
  /* max-height: 100%; */
`,yt=u(le)`
  display: flex;
`,bt=(t,n)=>{if(!n)return!1;const{filter:r}=n;return Object.keys(r).length===0&&t(v({tableId:y,filter:{status:M.STARTED},merge:!0})),n},Tt=5e3,St=t=>oe[t].label,gt=()=>{L(),Ie();const t=$(),n=b(F(y)),r=bt(t,n),{data:a,isFetching:l}=De(r||ce.skipToken,{pollingInterval:Tt}),s=I.useMemo(()=>[{type:"record",name:"id",headerLabel:"ID",renderCell:o=>e(W,{children:o.row.index+1}),columnDefOptions:{maxSize:50,size:10},enableSort:!0},{type:"record",name:"ticketNumber",headerLabel:"Số phiếu",columnDefOptions:{size:50}},{type:"record",name:"pid",headerLabel:"Mã bệnh nhân",columnDefOptions:{size:50}},{type:"record",name:"patientName",headerLabel:"Tên bệnh nhân",columnDefOptions:{size:100}},{type:"custom",getColumnDef:o=>o.display({id:"birthDate",header:()=>"Năm sinh",cell:m=>{var c;return(c=ke(m.row.original.birthDate))==null?void 0:c.format("YYYY")},size:50})},{type:"custom",getColumnDef:o=>o.display({id:"modality",header:()=>"Tên phòng",cell:m=>{var c;return(c=m.row.original.modality)==null?void 0:c.roomName},size:50})},{type:"record",name:"status",headerLabel:"Trạng thái",renderCell:o=>e(W,{children:St(o.getValue())})},{type:"custom",getColumnDef:o=>o.display({id:"ticketProcedures",header:()=>"Chỉ định",cell:m=>{var c;return(c=m.row.original.ticketProcedures)==null?void 0:c.map(i=>i.procedureName).join(`
`)},size:600})}],[]);return e(Me,{tableId:y,data:a==null?void 0:a.list,tableColumnsDescription:s,MyDataGridProps:{isLoading:l,hasRowClick:!0},paginationControls:{totalRecords:a==null?void 0:a.meta.totalRecords,pageSize:a==null?void 0:a.list.length},TanstackTableOptions:{enableRowSelection:!0,enableMultiRowSelection:!1}})};u(Ce)`
  border: 0;
  &:hover {
    border: 0;
  }
`;const xt=()=>(L(),S(rt,{title:"Phòng chụp",children:[e(_e,{title:"Phòng chụp",collapsible:!0,children:e(tt,{})}),e(w,{width:"100%",height:"100%",children:e(ct,{FilterComponent:e(Je,{}),TableComponent:e(gt,{}),TicketNumber:e(ot,{}),ActionButons:e(Ze,{}),RoomName:e(it,{})})})]}));export{xt as TicketMain};
