import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, PropsWithChildren, ReactNode, useMemo, useRef } from 'react';

import { useGetListOrdersQuery } from '@/api/order';
import { StyledDivCenterChildren } from '@/components/Layout/StyledDiv';
import OrderTableStyles from '@/components/Order/OrderTable.styles';
import OrderTableInfoColumn from '@/components/Order/OrderTableInfoColumn';
import OrderTablePatientNameColumn from '@/components/Order/OrderTablePatientNameColumn';
import { OrderTableRequestProcedureColumn } from '@/components/Order/OrderTableRequestProcedureColumn';
import { ITableField, MyTable } from '@/components/Table/MyTable';
import { useAppSelector, useTranslate } from '@/hooks';
import { useContextMenu } from '@/hooks/useContextMenu';
import { getFinalApprovedRequest } from '@/lib/dataHelper/radiologyReport/getFinalApprovedRequest';
import { useOrderListFunctions } from '@/providers/Order/OrderListFunctionsProvider';
import { TABLE_EXAMINATION } from '@/stores/table/tableInitialState';
import { getCurrentTableQuery } from '@/stores/table/tableSelectors';
import { IOrderDTO, ISearchOrderFilter } from '@/types/dto';
import { DISPLAY_FORMAT, itechDateTimeToDayjs } from '@/utils/dateUtils';

import { OrderNumberOfConsumables } from '../../../order/components/OrderList/Table/OrderNumberOfConsumables';
import { ExaminationRightClickMenu } from '../RightClickMenu/ExaminationRightClickMenu';

import { ExaminationActionButton } from './ExaminationActionButton';

const { StyledOrderTableRow } = OrderTableStyles;

/**
 * After 30s -> auto refetch data order table
 */
const ORDER_POLLING_INTERVAL = 30 * 1000;

type OrderTableProps = {
  FilterComponent: ReactNode;
};
export const ExaminationTable: FC<OrderTableProps> = (props) => {
  const { FilterComponent } = props;
  const { open } = useContextMenu(TABLE_EXAMINATION);
  const translate = useTranslate();
  const orderListFunctions = useOrderListFunctions();
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const query = useAppSelector(
    getCurrentTableQuery<ISearchOrderFilter>(TABLE_EXAMINATION),
  );
  const { data, isFetching, refetch } = useGetListOrdersQuery(query ? query : skipToken, {
    pollingInterval: ORDER_POLLING_INTERVAL,
  });

  const tableColumns = useMemo<ITableField<IOrderDTO>[]>(() => {
    const CellWrapper: FC<PropsWithChildren<{ order: IOrderDTO }>> = ({
      order,
      children,
    }) => (
      <StyledOrderTableRow $reportStatus={order.reportStatus} $urgent={order.urgent}>
        {children}
      </StyledOrderTableRow>
    );
    return [
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'stt',
            header: translate.messages.stt(),
            cell: (props) => (
              <StyledDivCenterChildren>
                <CellWrapper order={props.row.original}>
                  {props.row.index + 1}
                </CellWrapper>
              </StyledDivCenterChildren>
            ),
            maxSize: 50,
          }),
      },
      {
        type: 'record',
        name: 'reportStatus',
        headerLabel: translate.resources.order.status(),
        renderCell: (context) => (
          <CellWrapper order={context.row.original}>
            <OrderTableInfoColumn order={context.row.original} />
          </CellWrapper>
        ),
        enableSort: true,
        columnDefOptions: {
          maxSize: 70,
        },
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'patientName',
            header: translate.resources.order.patient.fullname.long(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                <OrderTablePatientNameColumn order={props.row.original} />
              </CellWrapper>
            ),
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'patientPID',
            header: translate.resources.order.patient.pid.long(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                {props.row.original.patient?.pid}
              </CellWrapper>
            ),
          }),
      },
      {
        type: 'record',
        name: 'accessionNumber',
        headerLabel: translate.resources.order.accessionNumber.long(),
        renderCell: (context) => (
          <CellWrapper order={context.row.original}>{context.getValue()}</CellWrapper>
        ),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'patientGender',
            header: translate.resources.order.patient.gender(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                {props.row.original.patient?.gender &&
                  translate.messages.gender({
                    gender: props.row.original.patient?.gender,
                  })}
              </CellWrapper>
            ),
            maxSize: 100,
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'requests',
            header: translate.resources.order.requests(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                <OrderTableRequestProcedureColumn order={props.row.original} />
              </CellWrapper>
            ),
          }),
      },
      {
        type: 'record',
        name: 'requestedTime',
        headerLabel: translate.resources.order.requestedDate.long(),
        renderCell: (context) => (
          <CellWrapper order={context.row.original}>
            {itechDateTimeToDayjs(context.getValue())?.format(
              DISPLAY_FORMAT.dateTimeNoSecond,
            )}
          </CellWrapper>
        ),
        enableSort: true,
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'operationTime',
            header: translate.resources.order.request.operationTime(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                {props.row.original.requests &&
                props.row.original.requests[0].operationTime
                  ? itechDateTimeToDayjs(
                      props.row.original.requests[0].operationTime,
                    )?.format(DISPLAY_FORMAT.dateTimeNoSecond)
                  : ''}
              </CellWrapper>
            ),
            maxSize: 50,
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'approvedTime',
            header: translate.resources.order.approvedTime(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                {props.row.original.requests &&
                props.row.original.requests[0].finalApprovedTime
                  ? itechDateTimeToDayjs(
                      props.row.original.requests[0].finalApprovedTime,
                    )?.format(DISPLAY_FORMAT.dateTimeNoSecond)
                  : ''}
              </CellWrapper>
            ),
            maxSize: 50,
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'inpatient',
            header: translate.resources.order.inpatient(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                {props.row.original?.inpatient && props.row.original?.inpatient ? 1 : 0}
              </CellWrapper>
            ),
            maxSize: 50,
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'numOfConsumables',
            header: translate.resources.order.numOfConsumables.short(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                <OrderNumberOfConsumables order={props.row.original} />
              </CellWrapper>
            ),
            maxSize: 50,
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'studyTime',
            header: translate.resources.study.studyDatetime(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                {props.row.original.study?.studyTime &&
                  itechDateTimeToDayjs(props.row.original.study.studyTime)?.format(
                    DISPLAY_FORMAT.dateTimeNoSecond,
                  )}
              </CellWrapper>
            ),
          }),
      },
      {
        type: 'record',
        name: 'modalityType',
        headerLabel: translate.resources.order.modalityType.short(),
        renderCell: (context) => (
          <CellWrapper order={context.row.original}>{context.getValue()}</CellWrapper>
        ),
        columnDefOptions: {
          maxSize: 70,
        },
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'bodyPart',
            header: translate.resources.study.bodyPartExamined.title(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                {props.row.original.study?.bodyPartExamined}
              </CellWrapper>
            ),
            maxSize: 100,
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'approver',
            header: translate.resources.order.lockedBy.long(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                {props.row.original.requests
                  ? getFinalApprovedRequest(props.row.original)?.finalApprover?.fullname
                  : ''}
              </CellWrapper>
            ),
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'requestedDepartment',
            header: translate.resources.order.requestedDepartment.long(),
            cell: (props) => (
              <CellWrapper order={props.row.original}>
                {props.row.original.requestedDepartment?.name ?? '-'}
              </CellWrapper>
            ),
          }),
      },
    ];
  }, [translate.messages, translate.resources.order, translate.resources.study]);

  return (
    <>
      <MyTable
        tableId={TABLE_EXAMINATION}
        tableContainerRef={tableContainerRef}
        data={data?.list}
        tableColumnsDescription={tableColumns}
        FilterComponent={FilterComponent}
        MyDataGridProps={{
          isLoading: isFetching,
          selectRowOnRightClick: false,
          onRowRightClick: (e, row) => {
            open(e, row.original);
          },
          onRowDoubleClick(e, row, table) {
            orderListFunctions.openStudyInfoModal(row.original.id);
          },
        }}
        paginationControls={{
          totalRecords: data?.meta.totalRecords,
          pageSize: data?.list.length,
        }}
        TanstackTableOptions={{
          enableRowSelection: true,
          enableMultiRowSelection: false,
        }}
        renderActionButtons={() => <ExaminationActionButton refetch={refetch} />}
      />
      <ExaminationRightClickMenu menuID={TABLE_EXAMINATION} />
    </>
  );
};
