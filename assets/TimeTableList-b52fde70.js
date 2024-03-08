import{s as D,a as t,r as T,a2 as me,a3 as he,cd as be,S as b,T as k,aB as J,aF as X,aG as g,F as y,j as d,b3 as pe,d as I,ao as Z,x as fe,ag as ge,ce as Te,cf as ye}from"./vendor-1c7a9a47.js";import{gy as Ce,gz as De,bf as G,b9 as C,bm as x,gH as f,cw as L,eV as O,bv as M,em as j,e6 as q,bC as Se,e2 as Ie,bj as h,gI as ee,dn as te,gJ as ke,gK as xe,gL as ae,gM as we,gN as H,bx as ve,gO as Me,bD as se,gP as Fe,cd as Ue,du as re,cx as F,dm as ne,e8 as Le,e9 as Oe,cz as B,gQ as Ae,c8 as V,bc as Be,ck as We,gR as Pe,cj as Ee,M as Ne,cn as $,ce as R,gS as je,cU as ie,ei as Ge,ca as w,cb as $e,gG as Re}from"./index-cdd5c634.js";const ze=D(Ce)`
  display: flex;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  max-height: 100%;
  flex-direction: row;
  overflow: hidden;
`,_e=({children:e,title:a})=>t(ze,{Head:t(De,{customTitle:a}),children:e}),He=e=>{const{onChange:a,value:s,...i}=e,n=T.useCallback(r=>{a&&a(r,s)},[a,s]);return t(me,{dateAdapter:he,adapterLocale:"en",children:t(be,{openTo:"day",value:s,onChange:n,...i})})},Ve=()=>{const e=G(),a=C(x(f));return t(Qe,{children:t(He,{onChange:i=>{e(M({tableId:f,filter:{...a==null?void 0:a.filter,sidebarSelectedDay:j(i)}}))},value:a!=null&&a.filter.sidebarSelectedDay?L(a==null?void 0:a.filter.sidebarSelectedDay):O()})})},Qe=D("div")`
  .MuiDateCalendar-root {
    width: auto;
    margin: 0;
  }
  .MuiDayCalendar-weekDayLabel {
    width: 32px;
  }
  .MuiPickersDay-root {
    width: 32px;
    height: 32px;
  }
`,Ye=()=>{const{data:e}=q({filter:{}}),a=C(x(f)),s=C(Se),i=e==null?void 0:e.list.filter(l=>l.enabled),n=T.useCallback(l=>[...l].map((o,p)=>o.id===(s==null?void 0:s.id)?{...o,fullname:"Lịch của tôi"}:o).sort(o=>o.id===(s==null?void 0:s.id)?-1:0),[s==null?void 0:s.id]);return T.useMemo(()=>{const l=[];return i&&n(i).map(m=>{l.push({id:m.id,data:m,isSelected:a!=null&&a.filter.userIDs?a==null?void 0:a.filter.userIDs.includes(m.id):!1})}),l},[n,i,a==null?void 0:a.filter.userIDs])},Ke=()=>{const e=h(),a=G(),s=C(x(f)),i=Ye(),n={mode:"onBlur",criteriaMode:"all",resolver:X(g.object({userIDs:g.array(g.number()).optional()})),defaultValues:{userIDs:s==null?void 0:s.filter.userIDs}};return t(ee,{title:"Lịch theo tên",collapsible:!0,children:t(te,{onSubmit:l=>{a(M({tableId:f,filter:{...s==null?void 0:s.filter,userIDs:l.userIDs}}))},autoSubmit:!0,formOptions:n,renderInputs:l=>t(ke,{control:l.control,name:"userIDs",renderInput:m=>t(b,{padding:1,spacing:.5,style:{maxHeight:"25vh",overflow:"auto"},children:t(xe,{value:i,onSelectCallback:o=>{const p=o.map(u=>{var c;if(u.isSelected)return(c=u.data)==null?void 0:c.id});m.onChange(p.filter(u=>u))},renderOptionSelectAll:({onSelectAll:o,isAllCheckboxSelected:p})=>t(y,{children:t(Q,{children:d(Y,{children:[t(K,{value:"",onChange:u=>{o&&o(u)},checked:p}),t(k,{children:e.buttons.all()})]})})}),renderInput:({onItemClick:o,checkboxDataState:p})=>t(y,{children:p.map((u,c)=>{var S,A,_;return d(Q,{children:[d(Y,{children:[t(K,{value:(S=u.data)==null?void 0:S.id,onChange:ue=>{o&&o(ue,u)},checked:u.isSelected}),t(k,{children:(A=u.data)==null?void 0:A.fullname})]}),t(Je,{children:(_=u.data)==null?void 0:_.title})]},c)})})})})})})})},Q=D(b)`
  padding: ${e=>e.theme.spacing(.25)} 0;
  flex-direction: row;
  justify-content: space-between;
`,Y=D(b)`
  flex-direction: row;
  align-items: center;
  gap: ${e=>e.theme.spacing(1)};
`,K=D(Ie)`
  padding: 0;
`,Je=D(k)`
  color: ${e=>J(e.theme.palette.text.primary,.5)};
`,Xe="0.9rem",Ze=()=>{const e=h(),{data:a}=ae({filter:{}}),s=a&&a.list.length!==0?[...a.list].sort((n,r)=>n.index&&r.index?n.index-r.index:0):void 0,i=pe("(max-height:856px)");return t(ee,{title:"Ca làm việc",collapsible:!0,sx:i?{height:"100px"}:void 0,children:t(b,{padding:1,style:{maxHeight:"30vh",overflow:"auto"},children:(s==null?void 0:s.length)&&s.map(n=>d(b,{height:"100%",children:[d(b,{direction:"row",alignItems:"center",spacing:1,children:[t(we,{color:"primary",sx:{fontSize:Xe}}),t(k,{children:n.name})]}),t(b,{paddingLeft:3,children:d(qe,{children:[H(n.fromTime??"")," -"," ",H(n.toTime??"")," ",n.consecutive&&`(${e.resources.timetable.nextDay()})`]})})]},n.id))})})},qe=D(k)`
  color: ${e=>J(e.theme.palette.text.primary,.5)};
`,et=()=>{const e=h();return t(ve,{title:e.pages.timeTable.title(),collapsible:!0,children:d(b,{height:"100%",justifyContent:"space-between",overflow:"auto",children:[t(Ve,{}),d("div",{style:{display:"grid"},children:[t(Ke,{}),t(Ze,{})]})]})})},v="YYYYMMDD",tt=()=>{var p;const e=C(x(f)),a=h(),s=e!=null&&e.filter.sidebarSelectedDay?L(e==null?void 0:e.filter.sidebarSelectedDay):O(),i=s?s.startOf("week").toDate():null,n=s?s.endOf("week").toDate():null,r=I(i).format(v),l=I(n).format(v),{data:m}=Me({filter:{userIDs:e==null?void 0:e.filter.userIDs,fromDate:r,toDate:l}},{skip:!s}),o=[];for(let u=0;u<7;u++){const c=s?s.startOf("week").add(u,"day").toDate():null;o.push({id:I(c).format(v),timetable:(p=m==null?void 0:m.list.find(S=>S.id===I(c).format(v)))==null?void 0:p.timetable,dateOfWeek:a.resources.timetable.weekday({weekday:(u+1).toString()})})}return o},U=()=>{},le={submitUpdateTimetable:U,openModalUpdateTimetable:U},z=T.createContext({fnRef:{current:le},registerFn:U,debug:U});function at(e){const a=T.useRef(le),s=T.useCallback((n,r)=>{a.current[n]=r},[]),i=T.useMemo(()=>({fnRef:a,registerFn:s,debug:()=>{}}),[s]);return t(z.Provider,{value:i,...e})}const oe=()=>T.useContext(z).fnRef.current,ce=()=>T.useContext(z).registerFn,st=()=>{const e=C(se(f)),{data:a}=Fe({id:(e==null?void 0:e.id)??""},{skip:!(e!=null&&e.id)});return{id:(e==null?void 0:e.id)??"",dateOfWeek:e==null?void 0:e.dateOfWeek,timetable:(a==null?void 0:a.timetable)??(e==null?void 0:e.timetable)}},rt=()=>{var a;const e=C(se(f));return t(Ue,{value:`${e==null?void 0:e.dateOfWeek}, ${(a=re((e==null?void 0:e.id)??""))==null?void 0:a.format(F.date)}`,disabled:!0,size:"small"})},nt=({control:e})=>{const{data:a}=ae({filter:{}}),s=h();return t(ne,{name:"periodID",control:e,MySelectProps:{label:s.resources.shiftWork.title(),size:"small"},children:a==null?void 0:a.list.map(i=>t(Z,{value:i.id,children:i.name},i.id))})},it=e=>{const{control:a,watch:s}=e,{data:i}=q({filter:{types:[s("userType")]}}),n=h();return t(Le,{name:"users",control:a,label:n.resources.analytics.approverNameTitle(),placeholder:"Thêm người dùng",MyAutoCompleteProps:{options:(i==null?void 0:i.list.filter(r=>r.enabled))??[],isOptionEqualToValue:(r,l)=>r.id===l.id,getOptionLabel:r=>`${r==null?void 0:r.id} - ${r==null?void 0:r.fullname}`,fullWidth:!0,renderOption:(r,l,{selected:m})=>t("li",{...r,children:d(Oe,{children:[t(fe,{size:"small",checked:m}),l==null?void 0:l.id,"-",l==null?void 0:l.fullname]})})}})},lt=[`${B.IMAGING_DOCTOR}`,`${B.NURSING}`,`${B.TECHNICIAN}`],ot=({control:e})=>{const a=h();return t(ne,{name:"userType",control:e,MySelectProps:{label:a.resources.user.userType()},children:lt.map(s=>t(Z,{value:s,children:s},s))})},ct=e=>(h(),d(b,{spacing:1,children:[t(rt,{}),t(nt,{...e}),t(ot,{...e}),t(it,{...e})]})),dt=e=>{const{onSuccessCallback:a,record:s,periodID:i}=e,n=ce(),r=h(),[l]=Ae(),m=V("success",r.messages.titles.createResource({resource:r.pages.timeTable.title().toLowerCase()})),o=V("error",r.messages.titles.createResource({resource:r.pages.timeTable.title().toLowerCase()})),p={mode:"onBlur",criteriaMode:"all",resolver:X(g.object({id:g.string(),periodID:g.number(),userType:g.string().optional(),userIDs:g.array(g.number()).optional(),users:g.array(g.object({id:g.number()})).optional()}).transform(c=>({...c,userIDs:c.users?c.users.map(S=>S.id):void 0,users:void 0}))),defaultValues:{id:s==null?void 0:s.id,periodID:i,userIDs:[],users:s!=null&&s.timetable?s==null?void 0:s.timetable[i]:[],userType:void 0}};return t(te,{registerFormFunctions:c=>n("submitUpdateTimetable",()=>c.submit&&c.submit()),onSubmit:async c=>{try{const S={id:c.id??"",periodID:c.periodID,userIDs:c.userIDs};"error"in await l(S)?o():(m(),a&&a())}catch{o()}},submitOnEnter:!0,formOptions:p,renderInputs:c=>t(ct,{...c})})},ut=()=>{const e=ce(),{close:a,isOpen:s,open:i,toggle:n}=Be();e("openModalUpdateTimetable",i);const r=We(),l=h(),m=oe(),o=st(),{currentPeriodId:p}=C(Pe);return t(ge,{open:s,children:t(Ee,{confirmLabel:l.buttons.update(),handleClose:a,BodyComponent:t(dt,{periodID:p,onSuccessCallback:a,record:o},Ne()),handleConfirm:()=>m.submitUpdateTimetable(),ConfirmButton:!(r!=null&&r.userCanUpdateTimeTable)&&t(y,{}),title:l.messages.titles.editResource({resource:l.pages.timeTable.title().toLowerCase()}),width:"500px"})})},de=()=>{const e=C(x(f)),a=G(),s=e!=null&&e.filter.sidebarSelectedDay?L(e==null?void 0:e.filter.sidebarSelectedDay):O();return{onFowardWeek:()=>{const r=s==null?void 0:s.add(7,"day");a(M({tableId:f,filter:{...e==null?void 0:e.filter,sidebarSelectedDay:j(r)}}))},onPreviousWeek:()=>{const r=s==null?void 0:s.add(-7,"day");a(M({tableId:f,filter:{...e==null?void 0:e.filter,sidebarSelectedDay:j(r)}}))}}},mt=()=>{const e=h(),{onPreviousWeek:a}=de();return t($,{ActionsButton:t(R,{title:e.resources.timetable.previousWeek(),onClick:()=>a(),color:"primary",children:t(Te,{})})})},ht=()=>{const e=h(),{onFowardWeek:a}=de();return t("div",{children:t($,{ActionsButton:t(R,{title:e.resources.timetable.nextWeek(),onClick:()=>a(),color:"primary",children:t(ye,{})})})})},bt=()=>{const e=oe();return t(y,{children:t($,{ActionsButton:t(R,{title:"Sửa lịch",onClick:()=>{e.openModalUpdateTimetable()},color:"primary",children:t(je,{})})})})},pt=()=>d(b,{direction:"row",children:[t(mt,{}),t(bt,{}),t(ht,{})]}),W=({users:e=[]})=>{const a=(s,i)=>{if(i.length===0)return null;const r=i.filter(l=>l.type===s).map(l=>l.fullname).join(", ");return t(ie,{title:r,children:r})};return d(b,{width:"100%",spacing:1,children:[d(E,{children:[t(P,{title:"BS",children:"BS"}),t(y,{children:a("IMAGING_DOCTOR",e)})]}),d(E,{children:[t(P,{title:"KTV",children:"KTV"}),t(y,{children:a("TECHNICIAN",e)})]}),d(E,{children:[t(P,{title:"ĐD",children:"ĐD"}),t(y,{children:a("NURSING",e)})]})]})},P=D(ie)`
  color: ${e=>{var a;return(a=e.theme.pacs)==null?void 0:a.customColors.text.label}};
`,E=D("div")`
  ${Ge.ellipsisEffect};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(30px, 0.5fr) 5fr;
`,N=({UsersCellButton:e,UsersInfoComponent:a})=>d(ft,{children:[t(b,{children:a}),t(b,{children:e})]}),ft=D("div")`
  display: grid;
  width: 100%;
  grid-template-columns: 4fr minmax(30px, 0.5fr);
  .MuiButtonBase-root {
    display: none;
  }
  :hover {
    .MuiButtonBase-root {
      display: flex;
    }
  }
`,gt=()=>{const e=h(),a=C(x(f)),s=a!=null&&a.filter.sidebarSelectedDay?L(a==null?void 0:a.filter.sidebarSelectedDay):O(),i=s?s.startOf("week").toDate():null,n=s?s.endOf("week").toDate():null;return d(k,{children:[e.resources.timetable.weekFrom()," :"," ",i&&I(i).format(F.date)," ",e.resources.timetable.weekTo()," :"," ",n&&I(n).format(F.date)]})},Tt=e=>{const a=h();T.useRef(null);const s=tt(),i=T.useMemo(()=>[{type:"custom",getColumnDef:n=>n.display({header:"Thứ",cell:r=>t("div",{style:{height:"110px"},children:t(w,{children:r.row.original.dateOfWeek})}),size:75})},{type:"record",name:"id",headerLabel:a.resources.timetable.date(),columnDefOptions:{size:50},renderCell:n=>{var r;return t(w,{children:(r=re(n.row.original.id))==null?void 0:r.format(F.date)})}},{type:"custom",getColumnDef:n=>n.display({header:a.resources.timetable.shift.morning(),cell:r=>t(w,{children:t(N,{UsersInfoComponent:r.row.original&&t(W,{users:r.row.original.timetable?r.row.original.timetable[1]:[]}),UsersCellButton:t(y,{})})}),size:300})},{type:"custom",getColumnDef:n=>n.display({header:a.resources.timetable.shift.afternoon(),cell:r=>t(w,{children:t(N,{UsersInfoComponent:r.row.original&&t(W,{users:r.row.original.timetable?r.row.original.timetable[2]:[]}),UsersCellButton:t(y,{})})}),size:300})},{type:"custom",getColumnDef:n=>n.display({header:a.resources.timetable.shift.day(),cell:r=>t(w,{children:t(N,{UsersInfoComponent:r.row.original&&t(W,{users:r.row.original.timetable?r.row.original.timetable[3]:[]}),UsersCellButton:t(y,{})})}),size:300})}],[]);return d(at,{children:[t($e,{tableId:f,data:s,tableColumnsDescription:i,TanstackTableOptions:{enableRowSelection:!0,enableMultiRowSelection:!1},showPaginationInfo:!1,renderPagination:()=>t(gt,{}),renderActionButtons:()=>t(pt,{})}),t(ut,{})]})},Dt=()=>{const e=h();return t(Re,{children:d(_e,{title:e.pages.timeTable.title(),children:[t(et,{}),t(b,{height:"100%",width:"100%",overflow:"hidden",padding:1,children:t(Tt,{})})]})})};export{Dt as TimeTableList};
