import{s as t,aB as a,a as r}from"./vendor-1c7a9a47.js";const l=e=>r(o,{children:e.TableComponent}),o=t("div")`
  width: 100%;
  height: 100%;
  overflow: auto;
  & .table-container,
  & .table {
    border-radius: 0;
    color: ${e=>e.theme.palette.getContrastText(e.theme.palette.primary.main)};
    background-color: ${e=>e.theme.palette.primary.main};
    font-size: ${e=>e.theme.typography.h5.fontSize};
    > thead {
      background-color: transparent;
    }
    > tbody {
      > tr {
        &:hover {
          background-color: ${e=>a(e.theme.palette.primary.main,.6)};
        }
      }
    }
  }
`;export{l as Q};
