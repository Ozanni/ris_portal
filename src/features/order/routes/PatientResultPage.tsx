import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { FullPageSpinner } from '@/components/Layout/FullPageSpinner';
import { useAppDispatch, useAppSelector, useTranslate } from '@/hooks';
import { TABLE_PATIENT_HISTORY } from '@/stores/table/tableInitialState';
import { getCurrentTableQuery } from '@/stores/table/tableSelectors';
import { BaseEntity } from '@/types';
import { IOrderRequestDTO, PatientRequestFilter } from '@/types/dto';

import { useGetOnePatientQuery } from '../api';
import { useGetListPatientRequestsQuery } from '../api/patientRequestHistory';
import { OrderListLayout } from '../components';
import PatientHistoryContent from '../components/PatientHistory/PatientHistoryContent';
import { SidebarPatientHistory } from '../components/PatientHistory/SidebarPatientHistory';

export const PatientResultPage = () => {
  const { pid = 'NaN' } = useParams();
  const translate = useTranslate();
  const dispatch = useAppDispatch();

  const id: BaseEntity['id'] = parseInt(pid);
  const { data: patient } = useGetOnePatientQuery({ id });

  const query = useAppSelector(
    getCurrentTableQuery<PatientRequestFilter>(TABLE_PATIENT_HISTORY),
  );
  const { data, isFetching } = useGetListPatientRequestsQuery(
    {
      patientID: patient?.id,
      fromDate: query?.filter.requestedDateFrom,
      toDate: query?.filter.requestedDateTo,
      procedureID: query?.filter.procedureID,
    },
    { skip: !patient?.id },
  );

  const requests = useMemo(() => data?.list ?? [], [data?.list]);

  return isFetching ? (
    <FullPageSpinner />
  ) : (
    <OrderListLayout title={translate.resources.order.patientHistory.title()}>
      <SidebarPatientHistory patient={patient} requests={requests} />
      <PatientHistoryContent requests={requests} />
    </OrderListLayout>
  );
};
