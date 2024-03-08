import{r as E,a as t,bf as $e,F as x,bq as ee,s as I,T as D,ag as He,Z as N,j as y,cg as Be,y as te,av as ge,n as qe,aF as ne,aG as k,A as Ge,a5 as We,ch as Ue,aB as fe,ao as Y,u as Ie,a9 as M,S as X}from"./vendor-1c7a9a47.js";import{gT as oe,cQ as ze,gU as B,cS as Te,eN as je,eO as H,cw as Qe,eP as Ke,bj as w,c8 as q,ef as be,eQ as Ve,eR as ie,dl as Se,d3 as Ye,bc as Xe,ca as Ze,ds as Je,cH as Z,gV as xe,c2 as Me,b9 as G,gW as et,c3 as tt,bJ as nt,gX as ot,bf as re,gY as Ce,dn as se,gZ as it,g_ as De,e0 as rt,g$ as st,eS as V,h0 as ke,eT as at,eU as le,eV as de,ex as ct,dm as lt,gi as dt,e2 as W,h1 as ut,d0 as pt,br as ue,bz as mt,gJ as ht,gK as yt,gy as gt,h2 as ft}from"./index-cdd5c634.js";import{u as ve}from"./ticket-4df0ff63.js";import{a as v}from"./ticket-3f902f2c.js";import{u as It,a as Tt}from"./qmsModality-adfb03b7.js";const bt=oe.injectEndpoints({endpoints:e=>({getListQmsModalityType:e.query({query:n=>({...ze(n,B.QMS_MODALITY_TYPE),useHospitalID:!1}),transformResponse:Te,providesTags:(n,o)=>o?[]:[B.QMS_MODALITY_TYPE]})})}),{useGetListQmsModalityTypeQuery:St}=bt,L=()=>{},Ee={submitFormAutoSelectModality:L,submitTicketInfomationForm:L,openAutoSelectModalityModal:L,closeAutoSelectModalityModal:L,autoFocusPID:L,clearPID:L},A=E.createContext({filter:{},registerFn:L,fnRef:{current:Ee}});function xt(e){const n=E.useRef(Ee),[o,i]=E.useState({}),s=E.useCallback((a,p)=>{n.current[a]=p},[]);return t(A.Provider,{value:{filter:o,setFilter:i,registerFn:s,fnRef:n},...e})}const j=()=>E.useContext(A).fnRef.current,Q=()=>E.useContext(A).registerFn,Mt=oe.injectEndpoints({endpoints:e=>({getModalitySuggestion:e.query({query:n=>{const{filter:o}=n;return{url:`${B.PROCEDURE}/${B.SUGGEST_MODALITY}`,method:"POST",data:o,useAsync:!0}},transformResponse:je,providesTags:(n,o)=>o?[]:[B.SUGGEST_MODALITY]})})}),{useGetModalitySuggestionQuery:Sn,useLazyGetModalitySuggestionQuery:Ct}=Mt,Dt=oe.injectEndpoints({endpoints:e=>({getListMwl:e.query({query:n=>{const{filter:o}=n,i="mwl";return Object.keys(o).length===0?{url:i,method:"GET",useAsync:!0}:{url:`search/${i}`,method:"POST",data:o,useAsync:!0,headers:n.header}},transformResponse:Te})})}),{useGetListMwlQuery:kt,useLazyGetListMwlQuery:we}=Dt,ae=`
<head>
  <style>
    .content {
      margin-bottom: 10px;
    }
  </style>
</head>
<div
  style="
    width: 350px;
    height: 450px;
    margin: auto;
    page-break-after: always;
    margin-top: 16px;
  "
>
  <div
    class="title-container"
    style="display: flex; flex-direction: row; justify-content: space-between"
  >
    <div>
      <div style="margin: 5px; margin-left: 10px; margin-right: 10px">
        <div class="logo">
          <svg
            width="70"
            height="70"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="48" cy="48" r="44.5" stroke="#034EA1" stroke-width="7" />
            <path
              d="M19.5 71.5C35.1 53.5 27.3333 33 21.5 25H32.5C42.5 43.4 35.6667 63.6667 31 71.5H19.5Z"
              fill="#034EA1"
            />
            <path
              d="M77 72C61.5294 53.8065 69.2316 33.086 75.0166 25H64.1078C54.1908 43.5978 60.9674 64.0824 65.5954 72H77Z"
              fill="#034EA1"
            />
            <rect
              x="71.9999"
              y="43"
              width="10"
              height="48"
              transform="rotate(89.9229 71.9999 43)"
              fill="#EC1C24"
            />
            <rect
              x="53"
              y="72"
              width="10"
              height="48"
              transform="rotate(-180 53 72)"
              fill="#EC1C24"
            />
            <path d="M48 40.5V60.5" stroke="white" stroke-linecap="round" />
            <circle cx="48" cy="40" r="1" fill="white" />
            <path
              d="M46.9877 42C46.1544 42.3333 44.9877 43.2 46.9877 44C50.1544 44.6667 54.5877 46.4 46.9877 48C45.4877 48.5 43.3877 49.8 46.9877 51C49.8211 51.6667 53.7878 53.2 46.9877 54C45.6544 54.3333 43.7878 55.3 46.9877 56.5C49.3211 57 52.5878 58.2 46.9877 59"
              stroke="white"
              stroke-linecap="round"
            />
            <path
              d="M48 28L48.8981 30.7639H51.8042L49.4531 32.4721L50.3511 35.2361L48 33.5279L45.6489 35.2361L46.5469 32.4721L44.1958 30.7639H47.1019L48 28Z"
              fill="#FFCA05"
            />
          </svg>
        </div>
      </div>
      <div>KHOA CDHA-TDCN</div>
    </div>
    <div>
      <div style="margin: 5px; margin-left: 10px; margin-right: 10px">
        <svg  
         id="${v.PATIENT_BARCODE}">
        </svg>
      </div>

    </div>
  </div>
  <table style="width: 100%">
    <tbody>
      <tr>
        <td>
          <div>
            <div
              class="content"
              id="${v.PATIENT_NAME}"
              style="
                text-align: center;
                font-weight: 700;
                font-size: 30px;
                font-family: 'Roboto';
              "
            >
              Nguyeen Van A
            </div>
            <div
              class="content"
              style="
                text-align: center;
                font-weight: 700;
                font-size: 20px;
                font-family: 'Roboto';
              "
            >
              <span
                style="font-weight: 700; font-size: 50px"
                id="${v.QUEUE_NUMBER}"
                >001</span
              >
            </div>
            <div
              class="content"
              style="
                text-align: center;
                font-weight: 700;
                font-size: 26px;
                font-family: 'Roboto';
              "
            >
              <span
                style="font-weight: 700; font-size: 30px; font-family: 'Roboto'"
                id="${v.ROOM}"
                >X-QUANG 1</span
              >
            </div>

            <div
              class="content"
              style="
                text-align: center;
                font-weight: 400;
                font-size: 16px;
                font-family: 'Roboto';
              "
            >
              Ngày in:
              <span id="${v.TICKET_CREATED_DATE}">xxx xxx xx</span>
            </div>

            <div
              class="content"
              style="
                text-align: center;
                font-weight: 400;
                font-size: 16px;
                font-family: 'Roboto';
              "
            >
              (Quý khách vui lòng giữ phiếu in để lấy kết quả.)
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>



`,vt="96px",Pe=async(e,n)=>{var m;const{patientName:o,pid:i,ticketNumber:s,roomName:a,createdDate:p}=n,d=new DOMParser().parseFromString(ae,"text/html"),g=d.getElementById(v.PATIENT_BARCODE);i&&g&&($e(g,i),g.style.height=vt);const r=[{id:v.PATIENT_NAME,dataType:H.Text,value:o||""},{id:v.PATIENT_ID,dataType:H.Text,value:i||""},{id:v.QUEUE_NUMBER,dataType:H.Text,value:s||""},{id:v.ROOM,dataType:H.Text,value:a||""},{id:v.TICKET_CREATED_DATE,dataType:H.Text,value:((m=Qe(p||""))==null?void 0:m.format("DD/MM/YYYY hh:mm:ss"))||""}];return Ke(d,{items:r})},Et=async e=>{const n=await Pe(ae,e);return new Blob([n.documentElement.innerHTML],{type:"text/html"})},Ne=async e=>{const n=document.createElement("div"),o=e.map(a=>Pe(ae,a));return(await Promise.allSettled(o)).forEach(a=>{a.status==="fulfilled"&&n.append(a.value.documentElement)}),new Blob([n.innerHTML],{type:"text/html"})},Fe=e=>e.mwlListData&&e.mwlListData.length?{procedures:e.mwlListData.map(o=>({accessionNumber:o.accessionNumber,procedureCode:o.procedureCode,procedureID:o.procedureID,procedureName:o.procedureName,orderID:o.orderID,serviceID:o.serviceID,ticketNumber:o.ticketNumber,modalityID:o.modalityID,roomName:o.roomName,ticketCreatedDate:o.ticketCreatedDate??""}))}:{procedures:void 0},wt=async e=>{const{filter:n,siteID:o,triggerGetModalitySuggest:i,triggerGetMwlList:s,notifyNotProcedures:a}=e,p=await s({filter:{...n,siteID:o}}).unwrap(),d=p==null?void 0:p.list[0],{procedures:g}=Fe({mwlListData:p==null?void 0:p.list});g||a();const r=g?g.filter(l=>!l.ticketNumber).map(l=>l.procedureID):[],m=d?{address:d.address,birthDate:d.birthDate,gender:d.gender,patientName:d.patientName,pid:d.pid}:void 0,u=!!r.length&&await i({filter:{ids:r,siteID:o}}).unwrap(),S=[];u&&g&&Object.keys(u).map(l=>{const T=g.filter(f=>f.procedureID.toString()===l);S.push({...u[l],ticketProcedures:T})});const c={},h=new Set;return S.forEach(l=>{var T;if(l.code!==null&&l.ticketProcedures!==null){if(!h.has(l.code))h.add(l.code),c[l.code]=l;else if(h.has(l.code)){const f=(T=c[l.code].ticketProcedures)==null?void 0:T.concat(l.ticketProcedures);f&&(c[l.code]={...c[l.code],ticketProcedures:f})}}}),{execModalityData:c,ticketInfomation:m}},Le=()=>{const e=j(),[n]=we(),[o]=Ct(),[i]=ve(),s=w(),a=q("error",s.messages.titles.createResource({resource:s.pages.reception.ticket().toLowerCase()})),p=be(),d=()=>{p({message:"Không tìm thấy dịch vụ chụp",options:{variant:"warning"}})};return{printTicket:async(r,m)=>{const{execModalityData:u,ticketInfomation:S}=await wt({filter:r,siteID:m,triggerGetMwlList:n,triggerGetModalitySuggest:o,notifyNotProcedures:d}),c=[];Object.values(u).map(f=>{const{id:b,ticketProcedures:F}=f;b&&F&&c.push({...S,modalityID:b,services:F})});const h=c.map(f=>new Promise((b,F)=>{i(f).then(R=>{if("error"in R)a(),F();else{const C=R.data;b(C)}}).catch(R=>F(R))})),T=(await Promise.allSettled(h)).filter(Ve).map(f=>f.value).map(f=>{var b;return{...f,roomName:((b=f.modality)==null?void 0:b.roomName)??""}});if(T&&T.length!==0){const f=await Ne(T);ie(f),e.clearPID(),e.autoFocusPID()}e.closeAutoSelectModalityModal()}}},Pt=e=>{const{siteID:n}=e;return t(Nt,{siteID:n})},Nt=e=>(w(),E.useContext(A),Q(),Le(),t(x,{})),Ft=()=>{const{site:e}=ee();return e?t(Pt,{siteID:parseInt(e)}):t(Se,{})},Lt=()=>{const{isOpen:e,open:n,close:o}=Xe(!1),i=Q();return i("openAutoSelectModalityModal",n),i("closeAutoSelectModalityModal",o),t(He,{open:e,children:t(At,{close:o})})},At=e=>{const n=j(),o=w();return t(Ot,{renderBody:()=>t(N,{p:2,overflow:"auto",children:t(Ft,{})}),renderTitle:()=>t(Ze,{children:t(Rt,{children:o.pages.reception.confirmAutoPrint()})}),renderFooter:()=>t(N,{padding:2,children:t(Je,{ActionButton:t(Z,{variant:"contained",onClick:()=>{n.submitFormAutoSelectModality(),e.close()},children:o.pages.reception.printTicket()}),OptionalButtons:[t(Z,{variant:"outlined",onClick:e.close,children:o.pages.reception.cancel()},"close")]})})})},Rt=I(D)`
  font-size: 24px;
`,Ot=I(Ye)`
  max-height: 100%;
  width: 500px;
`,_t=e=>{const n=w();return t(x,{children:y(Be,{sx:{height:"100%"},children:[t(D,{variant:"h5",component:"div",sx:{mb:1.5,fontWeight:700},children:e==null?void 0:e.modality.name}),y(D,{children:[n.pages.reception.currentNumber(),": ",e==null?void 0:e.modality.currentNumber]}),y(D,{children:[n.pages.reception.patientHistory(),":"]}),y(D,{children:[e==null?void 0:e.modality.totalCompletedPatients,"/",e==null?void 0:e.modality.totalPatients]}),!e.modality.enabled&&t(xe,{fontSize:"small",color:"primary"})]})})},$t=()=>{const{close:e}=Me(),{selectModality:n}=G(et),[o]=It(),i=n.enabled?"Khóa phòng":"Mở phòng",s=q("success",i),a=q("error",i),p=async()=>{if(n.id)try{"error"in await o({id:n.id,enabled:!n.enabled})?a():(e(),s())}catch{a()}};return t(tt,{type:"menu",children:n&&t(nt,{IconComponent:n.enabled?t(xe,{fontSize:"small",color:"primary"}):t(ot,{fontSize:"small",color:"primary"}),MenuItemProps:{onClick:()=>p()},MainComponent:i})})};function Ht(e){return t(te,{name:e.name,control:e.control,render:({field:{ref:n,...o}})=>t(ge,{fullWidth:!0,children:e.ModalityButtons&&t(Bt,{children:e.ModalityButtons})})})}const Bt=I("div")`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    ${e=>{var n;return(n=e.theme.qms)==null?void 0:n.layout.qmsModalityItem.width}}
  );
  gap: ${e=>e.theme.spacing(2)};
`,qt=e=>{const{siteID:n}=e,{filter:o}=E.useContext(A),{modalityTypes:i}=o,{data:s}=Tt({filter:{modalityTypes:i,siteID:n}}),a=re(),{ticketInfomation:p}=G(Ce),{open:d}=Me(),g={mode:"onChange",criteriaMode:"all",resolver:ne(k.object({id:k.number().optional().transform(u=>u||void 0)})),defaultValues:{id:void 0}},r=async u=>{const{id:S}=u;a(De({...p,modalityID:S}))},m=u=>{const S=[],c=[];return u.forEach(h=>{h.enabled?S.push(h):c.push(h)}),S.concat(c)};return t(se,{formOptions:g,onSubmit:r,autoSubmit:!0,renderInputs:({control:u,watch:S,setValue:c})=>{const h=S("id");return t(x,{children:y(Wt,{children:[s&&t(x,{children:t(Ht,{name:"id",control:u,ModalityButtons:m(s.list).map(l=>t(x,{children:t(Ge,{elevation:3,sx:{cursor:"pointer"},onClick:()=>{l.enabled&&(h===l.id?c("id",0):c("id",l.id))},onContextMenu:T=>{a(it(l)),d(T),T.preventDefault()},children:t(Gt,{color:"primary",value:l.id,selected:h===l.id,disabled:!l.enabled,children:t(_t,{modality:l})})},l.id)}))})}),t($t,{})]})})}})},Gt=I(qe)`
  background-color: ${e=>e.theme.palette.background.paper};
  width: ${e=>{var n;return(n=e.theme.qms)==null?void 0:n.layout.qmsModalityItem.width}};
  height: ${e=>{var n;return(n=e.theme.qms)==null?void 0:n.layout.qmsModalityItem.height}};
  color: ${e=>e.theme.palette.text.primary};
  border-radius: 0px;
`,Wt=I("div")`
  height: 100%;
  padding: ${e=>e.theme.spacing(2)};
  padding-top: ${e=>e.theme.spacing(1)};
  padding-bottom: ${e=>e.theme.spacing(1)};
`,Ut=()=>{const{site:e}=ee();return e?t(qt,{siteID:parseInt(e)}):t(Se,{})};function zt(e){return t(te,{name:e.name,control:e.control,render:({field:{ref:n,...o}})=>t(ge,{fullWidth:!0,children:y(We,{direction:"row",children:[e.ModalityButtons&&t(Ue,{fullWidth:!0,...o,value:o.value||"",onChange:i=>o.onChange([i.target.value]),children:e.ModalityButtons}),e.renderSelectFields&&t(rt,{style:{borderRadius:"0px"},labelId:`label-${e.name}`,fullWidth:!0,...o,value:o.value||"",onChange:i=>o.onChange([i.target.value]),...e.MySelectProps,children:e.renderSelectFields})]})})})}const jt=e=>{const n=w(),o=e.modalityTypeList.slice(),i=o.splice(0,5);return t("div",{children:t(zt,{name:e.name,control:e.control,ModalityButtons:i.map((s,a)=>t(Qt,{color:"primary",fullWidth:!0,value:s,children:s},a)),renderSelectFields:[t(Y,{value:"",children:n.buttons.all()},"null"),o.map((s,a)=>t(Y,{value:s||"",children:s},a))]})})},Qt=I(st)`
  /* background-color: ${e=>e.theme.palette.background.paper}; */
  color: ${e=>e.theme.palette.text.primary};
  border: 1px solid ${e=>fe(e.theme.palette.primary.main,.5)};
  border-radius: 0px;
`,Kt="all",J="false",Ae="true";var me,he,ye;const Vt=[{label:(me=V)==null?void 0:me.buttons.all(),value:Kt},{label:(he=V)==null?void 0:he.pages.reception.notCheckedIn(),value:J},{label:(ye=V)==null?void 0:ye.pages.reception.checkedIn(),value:Ae}],Yt=e=>{const n=w(),o=Ie(),{setFilter:i}=E.useContext(A),[s]=we(),a=Q(),{modalityTypeList:p,siteID:d}=e,g=re(),{printTicket:r}=Le(),m=G(ke),u={mode:"onChange",resolver:ne(k.object({modalityTypes:k.array(k.string()).optional(),pid:k.string().trim().optional().transform(at),autoSelectModality:k.boolean().optional(),fromDate:k.string().optional(),toDate:k.string().optional(),checkInStr:k.string().optional()}).transform(c=>{let h=null;return c.checkInStr===Ae?h=!0:c.checkInStr===J&&(h=!1),{...c,checkIn:h,checkInStr:void 0,modalityTypes:c.modalityTypes&&c.modalityTypes[0]===""?void 0:c.modalityTypes}})),defaultValues:{modalityTypes:[],pid:"",fromDate:le(de()),toDate:le(de()),checkInStr:J,autoSelectModality:m}};return t(Zt,{registerFormFunctions:c=>a("clearPID",()=>c.setValue("pid",void 0)),formOptions:u,onSubmit:async c=>{i&&i(c);const{pid:h,checkIn:l,fromDate:T,toDate:f}=c;h&&(s({filter:{pid:h,checkIn:l,fromDate:T,toDate:f,siteID:d},header:{Headers:"KIOSK"}}),m&&r({pid:h,checkIn:l,fromDate:T,toDate:f},d))},submitOnEnter:!0,autoSubmit:!0,sx:{py:o.spacing(2)},renderInputs:({control:c,setValue:h,watch:l})=>{var T,f;return y(M,{container:!0,children:[t(M,{item:!0,xs:(T=o.qms)==null?void 0:T.layout.qmsSidebarXS,alignItems:"center",justifyItems:"center",children:t(N,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",children:t(Xt,{children:n.pages.reception.title()})})}),t(M,{item:!0,xs:12-(((f=o.qms)==null?void 0:f.layout.qmsSidebarXS)||0),children:y(X,{spacing:1.5,children:[y(M,{container:!0,spacing:3,sx:{width:"100%"},children:[t(M,{item:!0,xs:5,children:t(ct,{name:"pid",control:c,MyTextFieldProps:{label:n.pages.reception.pid(),placeholder:n.pages.reception.typePatientId(),fullWidth:!0,size:"medium",inputRef:b=>b&&a("autoFocusPID",()=>b.focus())}})}),t(M,{item:!0,xs:2,children:t(lt,{name:"checkInStr",control:c,MySelectProps:{label:n.pages.reception.status(),size:"medium"},children:Vt.map(b=>t(Y,{value:b.value,children:b.label},b.value))})}),t(M,{item:!0,xs:2,children:t(dt,{nameStart:"fromDate",nameEnd:"toDate",label:n.pages.reception.time(),formSetValue:h,watch:l,MyTextFieldProps:{size:"medium"}})})]}),y(M,{container:!0,alignItems:"center",children:[t(M,{item:!0,xs:9,children:p&&t(jt,{name:"modalityTypes",control:c,modalityTypeList:p})}),t(M,{item:!0,xs:3,children:y(N,{sx:{display:"flex",alignItems:"center"},children:[t(te,{name:"autoSelectModality",control:c,render:({field:{onChange:b}})=>t(W,{checked:m,onChange:()=>{b(m),g(ut())}})}),t(D,{children:n.pages.reception.autoSelectModality()})]})})]})]})})]})}})},Xt=I(D)`
  ${e=>e.theme.typography.h3};
  font-weight: ${e=>e.theme.typography.fontWeightBold};
  color: ${e=>e.theme.palette.primary.main};
  @media only screen and (max-width: 1800px) {
    ${e=>e.theme.typography.h4};
    font-weight: ${e=>e.theme.typography.fontWeightBold};
  }
`,Zt=I(se)`
  width: 100%;
  /* padding-left: 50px; */
`,U=e=>{const{label:n,Content:o,OptionLabel:i,height:s}=e;return y("div",{style:{height:s},children:[y(en,{children:[t(Jt,{children:n}),i]}),t(tn,{children:o})]})},Jt=I(D)`
  padding-left: 10px;
  font-size: 25px;
  font-weight: 500;
  color: ${e=>e.theme.palette.primary.main};
`,en=I("div")`
  max-height: ${e=>{var n;return(n=e.theme.qms)==null?void 0:n.layout.qmsLabelInfoHeight}};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${e=>fe(e.theme.palette.primary.main,.7)};
`,tn=I("div")`
  padding: ${e=>e.theme.spacing(1)};
  height: calc(100% - ${e=>{var n;return(n=e.theme.qms)==null?void 0:n.layout.qmsLabelInfoHeight}});
  overflow: auto;
`,Re=e=>{const{mwlData:n,printTicket:o}=e,i=w();return y(x,{children:[t(U,{label:i.pages.reception.receptionInfomation(),height:z.RECEPTION,OptionLabel:t(nn,{variant:"contained",onClick:()=>o&&o(),children:i.pages.reception.printTicket()}),Content:y(X,{spacing:2,children:[t(P,{title:i.pages.reception.PID(),content:n==null?void 0:n.pid}),t(P,{title:i.pages.reception.ticket()}),t(P,{title:i.pages.reception.optional()})]})},1),t(U,{label:i.pages.reception.patientInfomation(),height:z.PATIENT,Content:y(X,{spacing:2,children:[t(P,{title:i.pages.reception.PID(),content:n==null?void 0:n.pid}),t(P,{title:i.pages.reception.fullname(),content:n==null?void 0:n.patientName}),t(P,{title:i.pages.reception.optional(),content:n==null?void 0:n.birthDate}),t(P,{title:i.pages.reception.gender(),content:n&&i.messages.gender({gender:n==null?void 0:n.gender})}),t(P,{title:i.pages.reception.address(),content:n==null?void 0:n.address})]})},2)]})},P=e=>{const{content:o,title:i}=e;return y(on,{container:!0,children:[t(M,{item:!0,xs:3,children:y(pe,{fontWeight:600,children:[i,":"]})}),t(M,{item:!0,xs:9,children:t(pe,{children:o})})]})},nn=I(Z)`
  font-size: 16px;
  font-weight: 300;
  border-radius: 0px;
  text-transform: none;
  border-radius: 2px;
`,pe=I(D)`
  font-weight: 400px;
  font-size: 16px;
  line-height: 21px;
`,on=I(M)`
  display: flex;
  flex-direction: row;
`,rn=e=>{const n=w(),{mwlData:o,proceduresCheckedIn:i}=e,s=j(),a={},p=new Set;i.forEach(r=>{p.has(r.modalityID)||(p.add(r.modalityID),a[r.modalityID]=[r]),p.has(r.modalityID)&&(a[r.modalityID]=a[r.modalityID].concat([r]))});const d=async r=>{const m=[];if(o&&r){const u=new Set;a[r].forEach(h=>{u.has(h.ticketNumber)||(m.push({id:parseInt(r),patientName:o.patientName??"",pid:o.pid,ticketNumber:h.ticketNumber,roomName:h.roomName,createdDate:h.ticketCreatedDate??"",birthDate:null,modality:null,modalityID:null,status:null,ticketProcedures:null}),u.add(h.ticketNumber))});const c=await Ne(m);ie(c),s.clearPID(),s.autoFocusPID()}},g=Object.keys(a).map(r=>({MyTreeItemProps:{nodeId:r,label:y("div",{style:{display:"flex",justifyContent:"space-between"},children:[y(D,{children:["Phòng ",a[r][0].roomName]}),t(pt,{color:"inherit",onClick:()=>{d(r)}})]}),ContentProps:{labelCollapsedIcon:t(ue,{color:"primary"}),labelExpandedIcon:t(ue,{color:"primary"})}},children:a[r].map(m=>({MyTreeItemProps:{nodeId:m.serviceID.toString(),label:m.procedureName,ContentProps:{labelIcon:t(W,{checked:!0,disabled:!0})}}}))}));return t(x,{children:i.length!==0&&y(x,{children:[t(D,{fontWeight:Oe,children:n.pages.reception.checkedIn()}),t(mt,{trees:g,multiSelect:!1})]})})},sn=e=>{const n=w(),{control:o,name:i,watch:s,proceduresNotCheckedIn:a}=e,p=s("serviceIDs"),d=E.useMemo(()=>{const g=[];return a.map((r,m)=>{g.push({id:r.serviceID,data:r,isSelected:(p==null?void 0:p.includes(r.serviceID))||!1})}),g},[a,p]);return t(ht,{name:i,control:o,renderInput:g=>t(yt,{value:d,onSelectCallback:r=>{const m=r.map(u=>{if(u.isSelected)return u.id});g.onChange(m.filter(u=>u))},renderOptionSelectAll:({onSelectAll:r,isAllCheckboxSelected:m})=>y(x,{children:[t(D,{fontWeight:Oe,children:"Chưa xếp số"}),y(N,{display:"flex",alignItems:"center",children:[t(W,{value:"",onChange:u=>{r&&r(u)},checked:m}),t(D,{children:n.buttons.all()})]})]}),renderInput:({onItemClick:r,checkboxDataState:m})=>t(x,{children:m.map((u,S)=>t(x,{children:y(N,{display:"flex",alignItems:"center",children:[t(W,{value:u,onChange:c=>{r&&r(c,u)},checked:u.isSelected},S),t(D,{children:u.data&&u.data.procedureName})]})}))})})})},Oe=600,an=e=>{const{controls:n,name:o,procedures:i,mwlData:s}=e,a=i.filter(d=>!!d.ticketNumber),p=i.filter(d=>!d.ticketNumber);return y(x,{children:[t(rn,{proceduresCheckedIn:a,mwlData:s}),t(x,{children:p.length!==0&&t(sn,{control:n.control,name:"serviceIDs",proceduresNotCheckedIn:p,watch:n.watch})})]})},z={RECEPTION:"25%",PATIENT:"30%",SERVICES:"40%"},cn=e=>{const n=w(),{filter:o}=E.useContext(A),{pid:i,checkIn:s,fromDate:a,toDate:p}=o,{data:d}=kt({filter:{pid:i,checkIn:s,fromDate:a,toDate:p,siteID:e.siteID}},{skip:!i}),g=d==null?void 0:d.list[0],{procedures:r}=Fe({mwlListData:d==null?void 0:d.list}),m=i&&g&&r&&r.length!==0;return t(x,{children:m?t(ln,{mwlData:g,procedures:r},g.pid):y(x,{children:[t(Re,{}),t(U,{label:n.pages.reception.servicesInfomation(),height:z.SERVICES},3)]})})},ln=e=>{const{mwlData:n,procedures:o}=e,i=be(),s=w(),[a]=ve(),p=re(),{ticketInfomation:d}=G(Ce);G(ke);const{address:g,birthDate:r,patientName:m,pid:u,gender:S}=n,c=Q(),h=j(),l=o.filter(C=>!C.ticketNumber),T={mode:"onChange",criteriaMode:"all",resolver:ne(k.object({serviceIDs:k.array(k.number()).optional()})),defaultValues:{serviceIDs:l.map(C=>C.serviceID)}},f=q("success",s.messages.titles.createResource({resource:s.pages.reception.ticket().toLowerCase()})),b=q("error",s.messages.titles.createResource({resource:s.pages.reception.ticket().toLowerCase()})),F=async C=>{const{serviceIDs:O}=C,_=o==null?void 0:o.filter($=>O&&O.includes($.serviceID)&&!$.ticketNumber);p(De({...d,address:g,birthDate:r,patientName:m,pid:u,gender:S,services:_}))},R=async()=>{var $;const{modalityID:C,services:O}=d,_=O||l;if(u&&C&&_&&_.length!==0)try{const K=await a({address:g,birthDate:r,patientName:m,pid:u,gender:S,services:_,modalityID:C});if("error"in K)b();else{f();const ce=K.data,_e=await Et({...ce,roomName:(($=ce.modality)==null?void 0:$.roomName)??""});ie(_e),h.clearPID(),h.autoFocusPID()}}catch{b()}else i({message:"Vui lòng chọn đủ thông tin phiếu in",options:{variant:"warning"}})};return t(x,{children:t(dn,{registerFormFunctions:C=>c("submitTicketInfomationForm",()=>C.submit&&C.submit()),formOptions:T,autoSubmit:!0,onSubmit:F,submitOnEnter:!0,renderInputs:C=>y(x,{children:[t(Re,{mwlData:n,printTicket:R}),t(U,{label:s.pages.reception.servicesInfomation(),height:z.SERVICES,Content:t(an,{mwlData:n,controls:C,name:"serviceIDStrings",procedures:o})},3)]})})})},dn=I(se)`
  height: 100%;
`,xn=()=>{var i,s;const{site:e}=ee(),{data:n}=St({filter:{siteID:e}}),o=Ie();return t(xt,{children:y(gt,{Head:t(ft,{customTitle:"Tiếp đón"}),children:[y(un,{children:[t(pn,{children:t(Yt,{modalityTypeList:n==null?void 0:n.list,siteID:parseInt(e)})}),y(yn,{container:!0,children:[t(mn,{item:!0,xs:(i=o.qms)==null?void 0:i.layout.qmsSidebarXS,children:t(cn,{siteID:parseInt(e)})}),t(hn,{item:!0,xs:12-(((s=o.qms)==null?void 0:s.layout.qmsSidebarXS)||0),children:t(Ut,{})})]})]}),t(Lt,{})]})})},un=I(N)`
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.palette.background.default};
`,pn=I(N)`
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #808080;
  height: ${e=>{var n;return(n=e.theme.qms)==null?void 0:n.layout.navBarHeight}};
`,mn=I(M)`
  height: 100%;
  border-right: solid 1px #808080;
`,hn=I(M)`
  overflow: auto;
  height: 100%;
`,yn=I(M)`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: calc(100% - ${e=>{var n;return(n=e.theme.qms)==null?void 0:n.layout.navBarHeight}});
`;export{xn as Reception};
