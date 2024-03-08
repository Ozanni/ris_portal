import{a as e,j as y,x as V,b as U,Z as W,s as P,F as M,ag as R,a9 as w,S as v,ao as f,aF as k,aG as i,r as I,C as oe,bd as ae}from"./vendor-1c7a9a47.js";import{eX as _,bj as h,e8 as Q,e9 as $,dl as ne,d3 as ie,ds as le,cH as X,bc as N,fO as ce,fg as K,ex as A,dm as T,fP as de,ed as O,c8 as C,eT as F,dn as J,e_ as E,cj as Y,fQ as ue,fR as me,ca as D,b9 as z,bD as pe,cR as ye,fS as he,fT as be,dM as ge,ei as fe,bf as Le,bm as q,fU as S,fV as Me,f3 as Fe,f4 as Ce,f5 as Te,bv as Se,fW as Ie,c2 as Oe,f6 as G,cb as Ee,f7 as we,f9 as Ae,fa as xe,fb as ve}from"./index-cdd5c634.js";import{a as Z}from"./modalityTypeName-04becb4d.js";import{u as De}from"./convertPdf-d312bc78.js";const ee=()=>{const{data:l}=Z({filter:{}});return{modalityTypeNames:l==null?void 0:l.list}},Pe=l=>{const{control:t,name:s}=l,{data:c}=_({filter:{}}),a=h();return c?e(Q,{name:s,control:t,placeholder:a.resources.layout.department(),enableSelectAll:!0,MyAutoCompleteProps:{size:"small",fullWidth:!0,disablePortal:!0,options:c.list,isOptionEqualToValue:(r,n)=>r.id===n.id,getOptionLabel:r=>typeof r!="string"?`${r==null?void 0:r.id} - ${r==null?void 0:r.name}`:r,renderOption:(r,n,m)=>e("li",{...r,children:y($,{children:[e(V,{size:"small",checked:m.selected}),n==null?void 0:n.id,"-",n==null?void 0:n.name]})})}}):e(U,{})},Re={normalA4:{pageSize:"A4",marginBottom:"20"}},ke=l=>{const{html:t}=l,{data:s}=De({contentHTML:t,...Re.normalA4}),c=s&&URL.createObjectURL(s);return c?e(W,{padding:1,height:"100%",children:e("iframe",{width:"100%",height:"100%",src:c,title:"layout-preview"})}):e(ne,{})},Ne=l=>{const{getValues:t,disclosure:s}=l,c=h(),a=t("data");return e(M,{children:s.isOpen&&e(R,{open:s.isOpen,children:e(ze,{width:"55%",height:"80%",renderBody:()=>a?e(ke,{html:a}):e(M,{}),renderFooter:()=>e(W,{padding:2,children:e(le,{ActionButton:e(M,{}),OptionalButtons:[e(X,{variant:"outlined",onClick:s.close,children:c.buttons.close()},"close")]})})})})})},ze=P(ie)`
  max-height: 100%;
`,Ge=l=>{const{getValues:t,control:s}=l,c=N(),a=h();return y(M,{children:[e(Ne,{disclosure:c,getValues:t}),e(ce,{name:"data",control:s,required:!0,label:a.resources.layout.data(),placeholder:a.resources.layout.data(),MyHtmlEditorProp:{customAddButtons:[{name:"viewpdf",options:{text:"View PDF",onAction(){c.open()},tooltip:"View PDF"}}]}})]})},je=l=>{const{control:t,name:s}=l,{data:c}=K({filter:{}}),a=h();return c?e(Q,{name:s,control:t,placeholder:a.resources.content.procedureIDs(),enableSelectAll:!0,MyAutoCompleteProps:{size:"small",fullWidth:!0,disablePortal:!0,options:c.list,isOptionEqualToValue:(r,n)=>r.id===n.id,getOptionLabel:r=>typeof r!="string"?`${r==null?void 0:r.id} - ${r==null?void 0:r.name}`:r,renderOption:(r,n,m)=>e("li",{...r,children:y($,{children:[e(V,{size:"small",checked:m.selected}),n==null?void 0:n.id,"-",n==null?void 0:n.name]})})}}):e(U,{})},j=[{name:"HTML",id:"HTML"},{name:"JSON",id:"JSON"},{name:"EXCEL",id:"EXCEL"},{name:"DOC",id:"DOC"}],te=l=>{const{control:t,onKeyDown:s,modalityTypeNames:c,getValues:a}=l,r=h();return y(Be,{children:[y(w,{container:!0,spacing:2,children:[e(w,{item:!0,xs:6,children:y(v,{spacing:2,children:[e(A,{name:"name",control:t,MyTextFieldProps:{label:r.resources.layout.name.short(),placeholder:r.resources.layout.name.short(),fullWidth:!0,required:!0,size:"small",onKeyDown:s}}),y(T,{name:"modalityType",control:t,MySelectProps:{label:r.resources.layout.modalityType()},children:[e(f,{value:"",children:" "},"null"),c&&c.map(n=>e(f,{value:n.id,children:n.id},n.id))]}),e(je,{control:t,name:"procedures"})]})}),e(w,{item:!0,xs:6,children:y(v,{spacing:2,children:[y(T,{name:"format",control:t,MySelectProps:{label:r.resources.layout.format()},children:[e(f,{value:"",children:" "},"null"),j&&j.map(n=>e(f,{value:n.name,children:n.name},n.id))]}),e(A,{name:"numOfImages",control:t,MyTextFieldProps:{type:"number",label:r.resources.layout.numOfImages(),placeholder:r.resources.layout.numOfImages(),fullWidth:!0,size:"small",onKeyDown:s,InputProps:{inputProps:{min:0}}}}),e(Pe,{control:t,name:"departments"})]})})]}),e(Ge,{getValues:a,control:t}),e(A,{name:"description",control:t,MyTextFieldProps:{label:r.resources.layout.description(),placeholder:r.resources.layout.description(),fullWidth:!0,size:"small",onKeyDown:s,multiline:!0,rows:4}})]})},Be=P("div")`
  display: grid;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  row-gap: ${l=>l.theme.spacing(2)};
`,He=l=>{const t=h(),{onSuccessCallback:s}=l,[c]=de(),a=O(),{modalityTypeNames:r}=ee(),n=C("success",t.messages.titles.createResource({resource:t.resources.layout.title.short().toLowerCase()})),m=C("error",t.messages.titles.createResource({resource:t.resources.layout.title.short().toLowerCase()})),b={criteriaMode:"all",resolver:k(i.object({name:i.string().trim().min(3,t.messages.validation.genericMinLength({resource:t.resources.layout.name.long(),length:3})),data:i.string().trim().min(1,t.messages.validation.genericRequired({resource:t.resources.layout.data()})),format:i.string().optional().transform(F),modalityType:i.string().optional(),description:i.string().optional(),procedures:i.array(i.object({id:i.number()})).optional(),procedureIDs:i.array(i.number()).optional(),departments:i.array(i.object({id:i.number()})).optional(),departmentIDs:i.array(i.number()).optional(),numOfImages:i.coerce.number()}).transform(d=>({...d,procedureIDs:d.procedures?d.procedures.map(p=>p.id):void 0,departmentIDs:d.departments?d.departments.map(p=>p.id):void 0,procedures:void 0}))),defaultValues:{data:"",description:"",format:"",modalityType:"",name:"",procedures:[],departments:[],numOfImages:0}};return e(J,{registerFormFunctions:d=>a("submitCreateForm",()=>d.submit&&d.submit()),formOptions:b,submitOnEnter:!0,onSubmit:async d=>{const p=[];if(d.numOfImages)for(let o=0;o<d.numOfImages;o++)p.push(`image${o+1}`);try{const o={name:d.name,format:d.format,procedureIDs:d.procedureIDs,departmentIDs:d.departmentIDs,data:d.data,description:d.description,modalityType:d.modalityType,keyImageNames:p};"error"in await c(o)?m():(n(),s())}catch{m()}},renderInputs:d=>r&&e(te,{modalityTypeNames:r,...d})})},Ve=()=>{const{isOpen:l,open:t,close:s}=N(!1);return O()("openCreateModal",t),e(R,{disableEnforceFocus:!0,open:l,children:e(se,{closeModal:s})})},se=I.forwardRef((l,t)=>{const{closeModal:s}=l,c=h(),a=E();return e(Y,{ref:t,confirmLabel:c.buttons.create(),handleClose:s,BodyComponent:e(He,{onSuccessCallback:s}),handleConfirm:()=>a.submitCreateForm(),title:c.messages.titles.createResource({resource:c.resources.layout.title.short().toLowerCase()}),width:"70%"})});se.displayName="LayoutCreateModal";const Ue=l=>{var p;const{record:t,onSuccessCallback:s}=l,[c]=ue(),a=h(),r=O(),{modalityTypeNames:n}=ee(),m=C("success",a.messages.titles.createResource({resource:a.resources.layout.title.short().toLowerCase()})),b=C("error",a.messages.titles.createResource({resource:a.resources.layout.title.short().toLowerCase()})),g={criteriaMode:"all",resolver:k(i.object({name:i.string().trim().min(3,a.messages.validation.genericMinLength({resource:a.resources.layout.name.long(),length:3})),data:i.string().trim().min(1,a.messages.validation.genericRequired({resource:a.resources.layout.data()})),format:i.string().optional().transform(F),modalityType:i.string().optional(),description:i.string().optional(),procedures:i.array(i.object({id:i.number()})).optional(),procedureIDs:i.array(i.number()).optional(),departments:i.array(i.object({id:i.number()})).optional(),departmentIDs:i.array(i.number()).optional(),numOfImages:i.coerce.number()}).transform(o=>({...o,procedureIDs:o.procedures?o.procedures.map(u=>u.id):void 0,departmentIDs:o.departments?o.departments.map(u=>u.id):void 0,procedures:void 0}))),defaultValues:{data:t.data??"",description:t.description??"",format:t.format??"",modalityType:t.modalityType??"",name:t.name??"",procedures:(t==null?void 0:t.procedures)??[],departments:(t==null?void 0:t.departments)??[],numOfImages:((p=t.keyImageNames)==null?void 0:p.length)??void 0}};return e(J,{registerFormFunctions:o=>r("submitEditForm",()=>o.submit&&o.submit()),formOptions:g,submitOnEnter:!0,onSubmit:async o=>{const u=[];if(o.numOfImages)for(let L=0;L<o.numOfImages;L++)u.push(`image${L+1}`);try{const L={name:o.name,description:o.description,procedureIDs:o==null?void 0:o.procedureIDs,departmentIDs:o==null?void 0:o.departmentIDs,id:t.id,data:o.data,format:o.format??"",modalityType:o.modalityType,keyImageNames:u};"error"in await c({...L})?b():(m(),s())}catch{b()}},renderInputs:o=>n&&e(te,{modalityTypeNames:n,...o})})},We=()=>{const{isOpen:l,open:t,close:s}=N(!1),c=z(pe(ye.LAYOUT)),[a]=he(),[r]=be(),n=h(),m=ge(),b=O();b("openEditModal",t);const g=C("success",n.messages.titles.deleteResource({resource:n.resources.layout.title.short().toLowerCase()})),d=C("error",n.messages.titles.deleteResource({resource:n.resources.layout.title.short().toLowerCase()})),p=I.useCallback(async()=>{if(c){const o=await a({id:c.id}).unwrap();m({message:`${n.messages.notification.delete({name:`${o==null?void 0:o.name}`})}`,options:{variant:"warning",onConfirm:()=>{"error"in r({id:c.id})?d():(g(),s())}}})}},[s,r,a,d,m,g,c,n.messages.notification]);return b("submitDelete",()=>p()),c?e(R,{disableEnforceFocus:!0,open:l,children:e(re,{record:c,closeModal:s})}):e(M,{})},re=I.forwardRef((l,t)=>{const{closeModal:s,record:c}=l,a=h(),r=E(),{data:n}=me({id:c.id});return e(M,{children:e(Y,{ref:t,confirmLabel:a.buttons.update(),handleConfirm:()=>r.submitEditForm(),handleClose:s,BodyComponent:n?e(Ue,{record:n,onSuccessCallback:s}):e(D,{children:e(oe,{})}),title:a.messages.titles.editResource({resource:a.resources.layout.title.short().toLowerCase()}),width:"70%"})})});re.displayName="LayoutEditModal";const _e={name:"",modalityType:"",procedureID:void 0},B="20vw",H="300px",Qe=()=>{const l=h(),t=Le(),s=z(q(S)),[c]=Me(),{data:a}=Z({filter:{}}),{data:r}=_({filter:{}}),n=a==null?void 0:a.list,{data:m}=K({filter:{}}),b=m==null?void 0:m.list,g=r==null?void 0:r.list,d={mode:"onChange",resolver:k(i.object({name:i.string().trim().optional().transform(F),modalityType:i.string().trim().optional().transform(F),procedureID:i.union([i.number(),i.string()]).optional().transform(F),departmentID:i.union([i.number(),i.string()]).optional().transform(F)})),defaultValues:{name:(s==null?void 0:s.filter.name)??"",modalityType:(s==null?void 0:s.filter.modalityType)??"",procedureID:(s==null?void 0:s.filter.procedureID)??void 0,departmentID:(s==null?void 0:s.filter.departmentID)??void 0}};return e(Fe,{formOptions:d,onSubmit:o=>{t(Se({tableId:S,filter:o})),s&&c({...s,filter:o})},submitOnEnter:!0,autoSubmit:!0,renderInputs:o=>e(Ce,{handleSubmit:o.submit,renderPrimaryField:({open:u,isOpen:L})=>e(Te,{name:"name",control:o.control,handleSubmit:o.submit,handleExpand:u,isExpanded:L,isFormDirty:o.formState.isDirty,resetFormOnDirty:!1,handleReset:()=>o.reset(_e),MyTextFieldProps:{placeholder:l.resources.layout.name.long(),fullWidth:!0,onKeyDown:o.onKeyDown}}),ExtraFieldsComponent:y(v,{spacing:1,children:[y(T,{name:"modalityType",control:o.control,MySelectProps:{label:l.resources.layout.modalityType()},children:[e(f,{value:"",children:" "},"null"),n&&n.map(u=>e(f,{value:u.id,children:e(x,{title:u.id??"",children:u.id})},u.id))]}),y(T,{name:"procedureID",control:o.control,MySelectProps:{label:l.resources.layout.procedureID(),MenuProps:{sx:{".MuiPopover-paper":{maxWidth:B,maxHeight:H}}}},children:[e(f,{value:"",children:" "},"null"),b&&b.map(u=>e(f,{value:u.id,children:e(x,{title:u.name??"",children:u.name})},u.id))]}),y(T,{name:"departmentID",control:o.control,MySelectProps:{label:l.resources.layout.department(),MenuProps:{sx:{".MuiPopover-paper":{maxWidth:B,maxHeight:H}}}},children:[e(f,{value:"",children:" "},"null"),g&&g.map(u=>e(f,{value:u.id,children:e(x,{title:u.name??"",children:u.name})},u.id))]})]})})})},x=P("div")`
  ${fe.ellipsisEffect}
`,$e=l=>{const{FilterComponent:t}=l,s=h(),c=z(q(S)),{data:a,isFetching:r,refetch:n}=Ie(c||ae.skipToken),m=E(),{open:b}=Oe(),g=I.useMemo(()=>[{type:"custom",getColumnDef:d=>d.display({id:"stt",header:s.messages.stt(),cell:p=>e(D,{children:p.row.index+1}),minSize:G,maxSize:G})},{type:"record",name:"id",headerLabel:"ID",renderCell:d=>e(D,{children:d.getValue()}),columnDefOptions:{maxSize:150},enableSort:!0},{type:"record",name:"name",headerLabel:s.resources.layout.name.short(),columnDefOptions:{size:450}},{type:"record",name:"modalityType",headerLabel:s.resources.layout.modalityType(),columnDefOptions:{size:150}},{type:"record",name:"description",headerLabel:s.resources.layout.description(),columnDefOptions:{size:650}},{type:"record",name:"format",headerLabel:s.resources.layout.format(),columnDefOptions:{size:300}}],[s.messages,s.resources.layout]);return e(Ee,{tableId:S,data:a==null?void 0:a.list,FilterComponent:t,tableColumnsDescription:g,MyDataGridProps:{isLoading:r,onRowRightClick:d=>{b(d)},onRowDoubleClick(){m.openEditModal()}},paginationControls:{totalRecords:a==null?void 0:a.meta.totalRecords,pageSize:a==null?void 0:a.list.length},TanstackTableOptions:{enableRowSelection:!0,enableMultiRowSelection:!1},renderActionButtons:()=>e(we,{tableId:S,refetch:n})})},Ze=()=>{const l=h(),t=E();return y(Ae,{children:[e(xe,{title:l.resources.layout.title.long(),TableComponent:e($e,{FilterComponent:e(Qe,{})}),ActionButtons:e(M,{children:e(X,{variant:"contained",onClick:()=>t.openCreateModal(),children:l.buttons.create()})})}),e(ve,{}),e(Ve,{}),e(We,{})]})};export{Ze as AdminLayoutTemplate};
