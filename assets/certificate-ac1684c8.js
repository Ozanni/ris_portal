import{cP as a,cR as s,eN as u,cQ as n,cS as o}from"./index-cdd5c634.js";const C=a.injectEndpoints({endpoints:i=>({getOneCertificate:i.query({query:({id:e})=>({url:`${s.CERTIFICATE}/${e}`,method:"GET",useAsync:!0,useHospitalID:!0}),providesTags:(e,t)=>t?[]:[{type:s.CERTIFICATE,id:e==null?void 0:e.id}],transformResponse:u}),getListCertificate:i.query({query:e=>n(e,"certificate"),providesTags:(e={list:[],meta:{totalRecords:0}})=>[{type:s.CERTIFICATE,id:"LIST"},...e.list.map(t=>({type:s.CERTIFICATE,id:t.id}))],transformResponse:o}),createCertificate:i.mutation({query:e=>({url:s.CERTIFICATE,method:"POST",data:e,useAsync:!0,useHospitalID:!0}),invalidatesTags:(e,t)=>t?[]:[{type:s.CERTIFICATE,id:"LIST"}]}),updateCertificate:i.mutation({query:e=>({url:s.CERTIFICATE,method:"PUT",data:e,useAsync:!0,useHospitalID:!0}),invalidatesTags:(e,t,r)=>t?[]:[{type:s.CERTIFICATE,id:r.id}]}),deleteCertificate:i.mutation({query:e=>({url:`/${s.CERTIFICATE}/${e==null?void 0:e.id}`,method:"DELETE",data:e,useAsync:!0,useHospitalID:!0}),invalidatesTags:(e,t,r)=>t?[]:[{type:s.CERTIFICATE,id:r.id}]})})}),{useGetListCertificateQuery:T,useLazyGetListCertificateQuery:E,useGetOneCertificateQuery:I,useCreateCertificateMutation:p,useUpdateCertificateMutation:y,useDeleteCertificateMutation:R}=C;export{T as a,E as b,y as c,I as d,R as e,p as u};
