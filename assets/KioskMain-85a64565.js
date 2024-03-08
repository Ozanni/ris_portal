import{r as w,a as g,bf as W,s as y,T as R,u as Y,aF as J,aG as I,j as M,F as Z,bq as _}from"./vendor-1c7a9a47.js";import{eL as O,cQ as $,eM as d,cS as b,cR as ee,eN as j,eO as C,cw as te,eP as oe,bj as F,c8 as ne,ef as se,eQ as ie,eR as re,eS as L,dn as ae,eT as ce,eU as N,eV as B,ex as le}from"./index-cdd5c634.js";import{a as h}from"./ticket-0c2265a1.js";const de=O.injectEndpoints({endpoints:e=>({getListKioskModalityType:e.query({query:o=>({...$(o,d.KIOSK_MODALITY_TYPE),useHospitalID:!1}),transformResponse:b,providesTags:(o,t)=>t?[]:[d.KIOSK_MODALITY_TYPE]})})}),{useGetListKioskModalityTypeQuery:ue}=de,pe="data:image/png;base64,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",A=()=>{},X={submitFormAutoSelectModality:A,submitTicketInfomationForm:A,openAutoSelectModalityModal:A,closeAutoSelectModalityModal:A,autoFocusPID:A,clearPID:A},U=w.createContext({registerFn:A,fnRef:{current:X}});function me(e){const o=w.useRef(X),t=w.useCallback((c,u)=>{o.current[c]=u},[]);return g(U.Provider,{value:{registerFn:t,fnRef:o},...e})}const ge=()=>w.useContext(U).fnRef.current,he=()=>w.useContext(U).registerFn,ye=O.injectEndpoints({endpoints:e=>({getModalitySuggestion:e.query({query:o=>{const{filter:t}=o;return{url:`${ee.PROCEDURE}/${d.SUGGEST_MODALITY}`,method:"POST",data:t,useAsync:!0}},transformResponse:j,providesTags:(o,t)=>t?[]:[d.SUGGEST_MODALITY]})})}),{useGetModalitySuggestionQuery:je,useLazyGetModalitySuggestionQuery:fe}=ye,Te=O.injectEndpoints({endpoints:e=>({getListMwl:e.query({query:o=>{const{filter:t}=o;return Object.keys(t).length===0?{url:`${d.KIOSK_MWL}`,method:"GET",useAsync:!0}:{url:`search/${d.KIOSK_MWL}`,method:"POST",data:t,useAsync:!0,headers:o.header}},transformResponse:b})})}),{useGetListMwlQuery:Xe,useLazyGetListMwlQuery:Ie}=Te,xe=O.injectEndpoints({endpoints:e=>({getListTicket:e.query({query:o=>{const{filter:t}=o;return Object.keys(t).length===0?{url:`${d.KIOSK_TICKET}`,method:"GET",useAsync:!0}:{url:`search/${d.KIOSK_TICKET}`,method:"POST",data:t,useAsync:!0}},transformResponse:b}),createTicket:e.mutation({query:o=>({url:`${d.KIOSK_TICKET}`,method:"POST",data:o,useAsync:!0}),transformResponse:j,invalidatesTags:(o,t)=>t?[]:[d.KIOSK_MODALITY]}),updateTicket:e.mutation({query:o=>({url:`${d.KIOSK_TICKET}`,method:"PUT",data:o,useAsync:!0}),invalidatesTags:(o,t)=>t?[]:[d.KIOSK_TICKET]})})}),{useCreateTicketMutation:ke,useGetListTicketQuery:Ve,useLazyGetListTicketQuery:ze,useUpdateTicketMutation:Qe}=xe,V=`
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
         id="${h.PATIENT_BARCODE}">
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
              id="${h.PATIENT_NAME}"
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
                id="${h.QUEUE_NUMBER}"
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
                id="${h.ROOM}"
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
              <span id="${h.TICKET_CREATED_DATE}">xxx xxx xx</span>
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



`,Ae="96px",De=async(e,o)=>{var r;const{patientName:t,pid:c,ticketNumber:u,roomName:p,createdDate:x}=o,l=new DOMParser().parseFromString(V,"text/html"),n=l.getElementById(h.PATIENT_BARCODE);c&&n&&(W(n,c),n.style.height=Ae);const s=[{id:h.PATIENT_NAME,dataType:C.Text,value:t||""},{id:h.PATIENT_ID,dataType:C.Text,value:c||""},{id:h.QUEUE_NUMBER,dataType:C.Text,value:u||""},{id:h.ROOM,dataType:C.Text,value:p||""},{id:h.TICKET_CREATED_DATE,dataType:C.Text,value:((r=te(x||""))==null?void 0:r.format("DD/MM/YYYY hh:mm:ss"))||""}];return oe(l,{items:s})},we=async e=>{const o=document.createElement("div"),t=e.map(p=>De(V,p));return(await Promise.allSettled(t)).forEach(p=>{p.status==="fulfilled"&&o.append(p.value.documentElement)}),new Blob([o.innerHTML],{type:"text/html"})},ve=e=>e.mwlListData&&e.mwlListData.length?{procedures:e.mwlListData.map(t=>({accessionNumber:t.accessionNumber,procedureCode:t.procedureCode,procedureID:t.procedureID,procedureName:t.procedureName,orderID:t.orderID,serviceID:t.serviceID,ticketNumber:t.ticketNumber,modalityID:t.modalityID,roomName:t.roomName,ticketCreatedDate:t.ticketCreatedDate??""}))}:{procedures:void 0},Ce=async e=>{const{filter:o,siteID:t,triggerGetModalitySuggest:c,triggerGetMwlList:u,notifyNotProcedures:p,clearPIDnFocusInput:x}=e,l={},n=new Set;let s;try{const r=await u({filter:{...o,siteID:t}}).unwrap(),m=(r==null?void 0:r.list[0])??[],{procedures:f}=await ve({mwlListData:(r==null?void 0:r.list)??[]}),E=f?f.filter(i=>!i.ticketNumber).map(i=>i.procedureID):[];s=m?{address:m.address,birthDate:m.birthDate,gender:m.gender,patientName:m.patientName,pid:m.pid}:void 0;const D=!!E.length&&await c({filter:{ids:E,siteID:t}}).unwrap(),S=[];D&&f&&Object.keys(D).map(i=>{const T=f.filter(a=>a.procedureID.toString()===i);S.push({...D[i],ticketProcedures:T})}),S.forEach(i=>{var T;if(i.code!==null&&i.ticketProcedures!==null){if(!n.has(i.code))n.add(i.code),l[i.code]=i;else if(n.has(i.code)){const a=(T=l[i.code].ticketProcedures)==null?void 0:T.concat(i.ticketProcedures);a&&(l[i.code]={...l[i.code],ticketProcedures:a})}}})}catch{x()}return{execModalityData:l,ticketInfomation:s}},Ee=()=>{const e=ge(),[o]=Ie(),[t]=fe(),[c]=ke(),u=F(),p=ne("error",u.messages.titles.createResource({resource:u.pages.reception.ticket().toLowerCase()})),x=se(),l=()=>{x({message:"Không tìm thấy dịch vụ chụp",options:{variant:"warning"}})},n=()=>{e.clearPID(),e.autoFocusPID()};return{printTicket:async(r,m)=>{const{execModalityData:f,ticketInfomation:E}=await Ce({filter:r,siteID:m,triggerGetMwlList:o,triggerGetModalitySuggest:t,notifyNotProcedures:l,clearPIDnFocusInput:n}),D=[];Object.values(f).map(a=>{const{id:k,ticketProcedures:v}=a;k&&v&&D.push({...E,modalityID:k,services:v})});const S=D.map(a=>new Promise((k,v)=>{c(a).then(K=>{if("error"in K)p(),v();else{const Q=K.data;k(Q)}}).catch(K=>v(K))})),T=(await Promise.allSettled(S)).filter(ie).map(a=>a.value).map(a=>{var k;return{...a,roomName:((k=a.modality)==null?void 0:k.roomName)??""}});if(T&&T.length!==0){const a=await we(T);re(a)}n(),e.closeAutoSelectModalityModal()}}},Se="all",P="false",z="true";var G,q,H;(G=L)==null||G.buttons.all(),(q=L)==null||q.pages.reception.notCheckedIn(),(H=L)==null||H.pages.reception.checkedIn();const Ke=e=>{const o=F(),t=Y(),c=he(),{siteID:u}=e,{printTicket:p}=Ee(),x={mode:"onChange",resolver:J(I.object({modalityTypes:I.array(I.string()).optional(),pid:I.string().trim().optional().transform(ce),autoSelectModality:I.boolean().optional(),fromDate:I.string().optional(),toDate:I.string().optional(),checkInStr:I.string().optional()}).transform(n=>{let s=null;return n.checkInStr===z?s=!0:n.checkInStr===P&&(s=!1),{...n,checkIn:s,checkInStr:void 0,modalityTypes:n.modalityTypes&&n.modalityTypes[0]===""?void 0:n.modalityTypes}})),defaultValues:{modalityTypes:[],pid:"",fromDate:N(B()),toDate:N(B()),checkInStr:P,autoSelectModality:!0}},l=async n=>{const{pid:s,checkIn:r,fromDate:m,toDate:f}=n;s&&await p({pid:s,checkIn:r,fromDate:m,toDate:f},u)};return w.useEffect(()=>{const n=document.getElementById("pid"),s=()=>{n&&n.focus()};if(n)return n.addEventListener("focusout",s),n.addEventListener("keydown",r=>{(r.keyCode||r.which)==9&&n.focus()}),window.addEventListener("focusin",s),()=>{window.removeEventListener("focusin",s),n.removeEventListener("focusout",s),n.removeEventListener("keydown",s)}},[]),g(Me,{registerFormFunctions:n=>c("clearPID",()=>n.setValue("pid",void 0)),formOptions:x,onSubmit:l,submitOnEnter:!0,autoSubmit:!0,sx:{py:t.spacing(2)},renderInputs:({control:n})=>M(Z,{children:[g(le,{name:"pid",control:n,MyTextFieldProps:{id:"pid",autoFocus:!0,placeholder:o.pages.reception.typePatientId(),fullWidth:!0,autoComplete:"off",size:"medium",inputRef:s=>s&&c("autoFocusPID",()=>s.focus())}}),g(Oe,{children:"Bệnh nhân không lấy được số thứ tự, vui lòng qua quầy tiếp đón để được hỗ trợ."})]})})},Me=y(ae)`
  width: 100%;
  /* padding-left: 50px; */
`,Oe=y(R)`
  text-align: center;
  font-size: 1.5vw;
  color: #f3c103;
  /* color: #f35f03; */
  padding: ${e=>e.theme.spacing(1)} 0;
`,We=()=>{const{site:e}=_(),{data:o}=ue({filter:{siteID:e}}),t=F();return g(me,{children:M(Le,{children:[M(Pe,{children:[g(Re,{src:pe}),g(be,{children:t.kiosk.hospitalName()})]}),g(Fe,{children:M(Ue,{children:[g(Ne,{children:t.kiosk.kioskTitle()}),g(Be,{children:g(Ke,{modalityTypeList:o==null?void 0:o.list,siteID:parseInt(e)})})]})})]})})},Le=y("div")`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`,Pe=y("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.palette.background.paper};
  padding: ${e=>e.theme.spacing(1)} 0;
`,Re=y("img")`
  height: 100%;
  max-height: 100%;
  padding: ${e=>e.theme.spacing("5px",1)};
  object-fit: contain;
`,be=y(R)`
  color: ${e=>e.theme.palette.primary.main};
  font-size: 3vw;
  letter-spacing: 1px;
  margin-left: ${e=>e.theme.spacing(1)};
  text-transform: uppercase;
  font-weight: 600;
`,Fe=y("div")`
  background-color: ${e=>e.theme.palette.primary.main};
`,Ue=y("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: ${e=>e.theme.spacing(10)} 0;
`,Ne=y(R)`
  color: ${e=>e.theme.palette.background.paper};
  font-size: 7vw;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
`,Be=y("div")`
  max-width: 60vw;
  width: 100%;
`;export{We as KioskMain};
