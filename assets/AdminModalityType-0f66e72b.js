import{j as h,a as t,ao as S,S as z,x as ae,a9 as N,Z as I,y as O,T as L,aF as W,aG as d,r as D,ag as H,F as j,bd as ne}from"./vendor-1c7a9a47.js";import{cL as x,bo as le,fg as ce,cP as de,cQ as ue,cR as E,cS as me,cN as M,bj as f,dm as k,cd as pe,e8 as ye,ex as be,e2 as F,fl as he,ed as q,c8 as C,dn as $,e_ as v,cj as J,bc as K,fm as fe,cM as P,fn as Te,fo as ge,dM as Me,b9 as U,bD as X,bm as Ce,fp as _,c2 as Re,ca as w,f6 as V,cb as Ee,f7 as Se,f9 as Ie,fa as Oe,cH as Le,fb as Fe}from"./index-cdd5c634.js";import{i as Z}from"./validateJSON-0b706ffc.js";import{a as ee}from"./modalityTypeName-04becb4d.js";const B=({modalityType:i})=>{const{data:s}=x({filter:{}}),{data:e}=ee({filter:{}}),{data:a}=le({filter:{modalityTypes:i?[i]:void 0}}),{data:n}=ce({filter:{modalityTypes:i?[i]:void 0}}),u=s==null?void 0:s.list,r=a==null?void 0:a.list,b=e==null?void 0:e.list,m=n==null?void 0:n.list;return{modalityTypes:u,modalities:r,modalityTypeNames:b,procedures:m}},De=de.injectEndpoints({endpoints:i=>({getListModalityTypeAttribute:i.query({query:s=>ue(s,E.MODALITY_TYPE_ATTRIBUTE),providesTags:(s={list:[],meta:{totalRecords:0}})=>[{type:E.MODALITY_TYPE_ATTRIBUTE,id:"LIST"},...s.list.map(e=>({type:E.MODALITY_TYPE_ATTRIBUTE,id:e.id}))],transformResponse:me})})}),{useGetListModalityTypeAttributeQuery:qe,useLazyGetListModalityTypeAttributeQuery:Qe}=De,ve=()=>{const{data:i}=qe({filter:{}});let s=!1,e=!1;const a=i==null?void 0:i.list;return a==null||a.forEach(n=>{n.id===M.REQUIRES_TECHNICIAN&&(e=!0),n.id===M.REQUIRES_TRANSCRIBER&&(s=!0)}),{displayTranscriberField:s,displayTechnicianField:e}},Ae=i=>{const s=f(),{control:e,modalityType:a,name:n}=i,{modalities:u}=B({modalityType:a});return h(k,{name:n,control:e,MySelectProps:{label:s.resources.modalityType.preferredModality(),placeholder:s.resources.modalityType.preferredModality(),fullWidth:!0},children:[t(S,{value:0,children:" "},"null"),u&&(u==null?void 0:u.map(r=>t(S,{value:r.id,children:r.name},r.id)))]})},Ne=i=>{const s=f(),{control:e,modalityType:a,name:n}=i,{procedures:u}=B({modalityType:a});return h(k,{name:n,control:e,MySelectProps:{label:s.resources.modalityType.preferredProcedure(),placeholder:s.resources.modalityType.preferredProcedure(),fullWidth:!0},children:[t(S,{value:0,children:" "},"null"),u&&(u==null?void 0:u.map(r=>t(S,{value:r.id,children:r.name},r.id)))]})},re=i=>{const{record:s,control:e,onKeyDown:a,formState:n,watch:u}=i,{data:r}=ee({filter:{}}),{displayTechnicianField:b,displayTranscriberField:m}=ve(),y=u("name"),o=f();return h(z,{spacing:1,alignItems:"start",width:"500px",children:[s&&t(pe,{value:s.id,size:"small",label:"ID",disabled:!0,fullWidth:!0}),t(k,{name:"name",control:e,required:!0,MySelectProps:{label:o.resources.modalityType.name(),placeholder:o.resources.modalityType.name(),fullWidth:!0},children:(r==null?void 0:r.list)&&(r==null?void 0:r.list.map(c=>t(S,{value:c.id,children:c.id},c.id)))}),t(z,{width:"500px",children:t(ye,{name:"otherNamesObjectList",control:e,placeholder:o.resources.modalityType.otherNames(),MyAutoCompleteProps:{options:(r==null?void 0:r.list)??[],isOptionEqualToValue:(c,p)=>c.id===p.id,getOptionLabel:c=>`${c==null?void 0:c.id}`,renderOption:(c,p,{selected:g})=>h("li",{...c,children:[t(ae,{size:"small",checked:g}),p==null?void 0:p.id]})}})}),t(Ae,{control:e,modalityType:y??void 0,name:"preferredModalityID"}),t(Ne,{control:e,name:"preferredProcedureID",modalityType:y??void 0}),t(be,{name:"config",control:e,MyTextFieldProps:{label:o.resources.certificate.config(),placeholder:o.resources.certificate.config(),fullWidth:!0,size:"small",multiline:!0,minRows:4}}),h(N,{container:!0,children:[h(N,{xs:7,item:!0,children:[h(I,{display:"flex",alignItems:"center",children:[t(O,{name:"requireDicom",control:e,render:({field:{value:c,onChange:p}})=>t(F,{checked:!!c,onChange:p})}),t(L,{children:o.resources.modalityType.requireDicom()})]}),h(I,{display:"flex",alignItems:"center",children:[t(O,{name:"requireConsumable",control:e,render:({field:{value:c,onChange:p}})=>t(F,{checked:!!c,onChange:p})}),t(L,{children:o.resources.modalityType.requireConsumable()})]})]}),h(N,{xs:5,item:!0,children:[b&&h(I,{display:"flex",alignItems:"center",children:[t(O,{name:"haveOperators",control:e,render:({field:{value:c,onChange:p}})=>t(F,{checked:!!c,onChange:p})}),t(L,{children:o.resources.modalityType.haveOperators()})]}),m&&h(I,{display:"flex",alignItems:"center",children:[t(O,{name:"haveTranscribers",control:e,render:({field:{value:c,onChange:p}})=>t(F,{checked:!!c,onChange:p})}),t(L,{children:o.resources.modalityType.haveTranscribers()})]})]})]})]})},Pe=i=>{const{onSuccessCallback:s}=i,[e]=he(),{modalityTypes:a}=B({}),n=f(),u=q(),r=C("success",n.messages.titles.createResource({resource:n.resources.modalityType.title().toLowerCase()})),b=C("error",n.messages.titles.createResource({resource:n.resources.modalityType.title().toLowerCase()})),m={mode:"onChange",criteriaMode:"all",resolver:W(d.object({name:d.string().trim().min(1,n.messages.validation.genericRequired({resource:n.resources.modalityType.name()})).refine(o=>!(a&&a.some(c=>c.name===o)),{message:n.messages.validation.genericDuplicated({name:n.resources.modalityType.name()})}),otherNames:d.string().optional(),preferredModalityID:d.number().optional(),preferredProcedureID:d.number().optional(),config:d.string().refine(o=>o.length?Z(o):!0,n.messages.validation.genericRequiredType({resource:n.resources.certificate.config(),type:"jsonObject"})).optional(),haveOperators:d.boolean().optional(),requireDicom:d.boolean().optional(),requireConsumable:d.boolean().optional(),haveTranscribers:d.boolean().optional(),otherNamesObjectList:d.array(d.object({id:d.string()})).optional()}).transform(o=>{const c=o.otherNamesObjectList&&o.otherNamesObjectList.map(p=>p.id);return{...o,otherNames:c,otherNamesObjectList:void 0}})),defaultValues:{name:"",preferredModalityID:void 0,preferredProcedureID:void 0}};return t($,{registerFormFunctions:o=>u("submitCreateForm",()=>o.submit&&o.submit()),onSubmit:async o=>{var c,p,g,l;try{if(o.name){const T={requires_transcriber:(c=o.haveTranscribers)==null?void 0:c.toString(),requires_technician:(p=o.haveOperators)==null?void 0:p.toString(),preferred_procedure:(g=o.preferredProcedureID)==null?void 0:g.toString(),require_consumable:(l=o.requireConsumable)==null?void 0:l.toString()},R={name:o.name,config:o.config,preferredModalityID:o.preferredModalityID,otherNames:o.otherNames,requireDicom:o.requireDicom,attributes:T};"error"in await e(R)?b():(r(),s())}}catch{b()}},submitOnEnter:!0,formOptions:m,renderInputs:o=>t(re,{...o})})},_e=()=>{const{isOpen:i,open:s,close:e}=K(!1);return q()("openCreateModal",s),t(H,{open:i,children:t(te,{closeModal:e})})},te=D.forwardRef((i,s)=>{const{closeModal:e}=i,a=f(),n=v();return t(J,{ref:s,confirmLabel:a.buttons.create(),handleClose:e,BodyComponent:t(Pe,{onSuccessCallback:e}),handleConfirm:()=>n.submitCreateForm(),title:a.messages.titles.createResource({resource:a.resources.modalityType.title().toLowerCase()})})});te.displayName="ModalityTypeCreateModal";const we=i=>{var p,g;const{onSuccessCallback:s,record:e}=i,[a]=fe(),{data:n}=x({filter:{}}),u=n==null?void 0:n.list.filter(l=>l.id!==e.id),r=f(),b=q(),m=C("success",r.messages.titles.editResource({resource:r.resources.modalityType.title().toLowerCase()})),y=C("error",r.messages.titles.editResource({resource:r.resources.modalityType.title().toLowerCase()})),o={mode:"onChange",criteriaMode:"all",resolver:W(d.object({name:d.string().trim().min(1,r.messages.validation.genericRequired({resource:r.resources.modalityType.name()})).refine(l=>!(u&&u.some(T=>T.name===l)),{message:r.messages.validation.genericDuplicated({name:r.resources.modalityType.name()})}),otherNames:d.string().optional(),preferredModalityID:d.number().optional(),preferredProcedureID:d.number().optional(),config:d.string().refine(l=>l.length?Z(l):!0,r.messages.validation.genericRequiredType({resource:r.resources.certificate.config(),type:"jsonObject"})).optional(),scheduleOrders:d.boolean().optional(),haveOperators:d.boolean().optional(),requireConsumable:d.boolean().optional(),requireDicom:d.boolean().optional(),haveTranscribers:d.boolean().optional(),otherNamesObjectList:d.array(d.object({id:d.string()})).optional()}).transform(l=>{const T=l.otherNamesObjectList&&l.otherNamesObjectList.map(R=>R.id);return{...l,otherNames:T,otherNamesObjectList:void 0}})),defaultValues:{name:e.name??"",otherNamesObjectList:(p=e==null?void 0:e.otherNames)==null?void 0:p.map(l=>({id:l})),config:e.config??"",haveOperators:P(e.attributes,M.REQUIRES_TECHNICIAN),requireDicom:e.requireDicom??null,haveTranscribers:P(e.attributes,M.REQUIRES_TRANSCRIBER),requireConsumable:P(e.attributes,M.REQUIRE_CONSUMABLE),scheduleOrders:void 0,preferredModalityID:((g=e.preferredModality)==null?void 0:g.id)??void 0,preferredProcedureID:e!=null&&e.attributes&&e.attributes[M.PREFERRED_PROCEDURE]?parseInt(e.attributes[M.PREFERRED_PROCEDURE]):void 0}};return t($,{registerFormFunctions:l=>b("submitEditForm",()=>l.submit&&l.submit()),onSubmit:async l=>{var A,Q,Y,G;const T={requires_transcriber:(A=l.haveTranscribers)==null?void 0:A.toString(),requires_technician:(Q=l.haveOperators)==null?void 0:Q.toString(),preferred_procedure:(Y=l.preferredProcedureID)==null?void 0:Y.toString(),require_consumable:(G=l.requireConsumable)==null?void 0:G.toString()},R={id:e.id,name:l.name,config:l.config,preferredModalityID:l.preferredModalityID,otherNames:l.otherNames,requireDicom:l.requireDicom,attributes:T};try{"error"in await a(R)?y():(m(),s())}catch{y()}},submitOnEnter:!0,formOptions:o,renderInputs:l=>t(re,{record:e,...l})})},se=()=>{const i=f(),{isOpen:s,open:e,close:a}=K(!1),[n]=ge(),u=Me(),r=U(X(E.MODALITY_TYPE)),b=q();b("openEditModal",e);const m=C("success",i.messages.titles.deleteResource({resource:i.resources.modalityType.title().toLowerCase()})),y=C("error",i.messages.titles.deleteResource({resource:i.resources.modalityType.title().toLowerCase()})),o=D.useCallback(()=>{u({message:`${i.messages.notification.delete({name:`${r==null?void 0:r.name}`})}`,options:{variant:"warning",onConfirm:()=>{"error"in n({id:r==null?void 0:r.id})?y():(m(),a())}}})},[a,n,y,u,m,r==null?void 0:r.id,r==null?void 0:r.name,i.messages.notification]);return b("submitDelete",()=>o()),r?t(H,{open:s,children:t(oe,{record:r,closeModal:a})}):t(j,{})},oe=D.forwardRef((i,s)=>{const{closeModal:e,record:a}=i,n=f(),u=v(),{data:r}=Te({id:a.id});return t(J,{ref:s,confirmLabel:n.buttons.update(),handleClose:e,BodyComponent:r&&t(we,{record:r,onSuccessCallback:e}),handleConfirm:()=>u.submitEditForm(),title:n.messages.titles.editResource({resource:n.resources.modalityType.title().toLowerCase()})})});oe.displayName="ModalityTypeEditModal";const je=()=>{const i=v(),s=f(),e=U(Ce(_)),{data:a,isFetching:n,refetch:u}=x(e||ne.skipToken),{open:r}=Re(),b=D.useMemo(()=>[{type:"custom",getColumnDef:m=>m.display({id:"stt",header:s.messages.stt(),cell:y=>t(w,{children:y.row.index+1}),minSize:V,maxSize:V})},{type:"record",name:"id",headerLabel:"ID",renderCell:m=>t(w,{children:m.getValue()}),columnDefOptions:{maxSize:100},enableSort:!0},{type:"record",name:"name",headerLabel:s.resources.modalityType.name(),columnDefOptions:{maxSize:100}},{type:"custom",getColumnDef:m=>m.display({id:"otherNames",header:()=>s.resources.modalityType.otherNames(),cell:y=>y.row.original.otherNames&&y.row.original.otherNames.map(o=>o).join(","),size:450})},{type:"custom",getColumnDef:m=>m.display({id:"modality",header:()=>s.resources.modalityType.preferredModality(),cell:y=>{var o;return(o=y.row.original.preferredModality)==null?void 0:o.name},size:550})},{type:"record",name:"requireDicom",headerLabel:s.resources.modalityType.requireDicom(),renderCell:m=>t(w,{children:m.getValue()?s.resources.modalityType.yes():s.resources.modalityType.no()}),columnDefOptions:{size:500}}],[s.messages,s.resources.modalityType]);return h(j,{children:[t(Ee,{tableId:_,data:a==null?void 0:a.list,tableColumnsDescription:b,MyDataGridProps:{isLoading:n,onRowRightClick:m=>{r(m)},onRowDoubleClick(){i.openEditModal()}},paginationControls:{totalRecords:a==null?void 0:a.meta.totalRecords,pageSize:a==null?void 0:a.list.length},TanstackTableOptions:{enableRowSelection:!0,enableMultiRowSelection:!1},renderActionButtons:()=>t(Se,{tableId:_,refetch:u})}),t(se,{})]})},Ye=()=>{const i=f(),s=v();return U(X(E.MODALITY_TYPE)),h(Ie,{children:[t(Oe,{title:i.resources.modalityType.title(),TableComponent:t(je,{}),ActionButtons:t(j,{children:t(Le,{variant:"contained",onClick:()=>s.openCreateModal(),children:i.buttons.create()})})}),t(se,{}),t(_e,{}),t(Fe,{})]})};export{Ye as AdminModalityType};
