import { Stack, styled } from '@mui/material';
import { FC } from 'react';

import { useGetOneOrderQuery } from '@/api/order';
import { useGetOneOrderRequestQuery } from '@/api/orderRequest';
import { MyTextField } from '@/components/Elements';
import { CreateUpdateConsumableTable } from '@/components/Order/Consumable/CreateUpdateConsumableTable';
import { OrderRequestSelectField } from '@/components/Order/OrderRequestSelectField';
import { ConnectedRadiologyModalitySelectForm } from '@/components/Order/Panel/ModalitySelectForm';
import { ConnectedOperatorAutoCompleteForm } from '@/components/Order/Panel/OperatorAutoCompleteForm';
import { DescriptionEditor } from '@/components/Order/RadiologyReport/Editors/DescriptionEditor';
import { useAppDispatch, useTranslate } from '@/hooks';
import { IOrderReportKey, setCurrentRequestID } from '@/stores/OrderRadiology';
import { IOrderRequestDTO, ModalityTypeRequiredConsumables } from '@/types/dto';

import { DefaultInfoRadiologyButton } from '../../Buttons/DefaultInfoRadiologyButton';
import { ExpectedDateTime } from '../BottomFields/ExpectedDateTime';
import { OperationDateTime } from '../BottomFields/OperationDateTime';
import { RequestedDateTime } from '../BottomFields/RequestedDateTime';

import { ExpectedReporterSelectField } from './ExpectedReporterSelectField';
import { HisReportStatusInfo } from './HisReportStatusInfo';
import { NumberOfConsumable } from './NumberOfConsumable';
import { PatientInfomation } from './PatientInfomation';
import { RadiologyPageLeftSideHeader } from './RadiologyPageLeftSideHeader';
import SignInfomation from './SignInfomation';

/**
 * THông tin bên trái ở màn đọc ca chậm
 */
export const RadiologyPageLeftSideWrapper: FC<IOrderReportKey> = ({
  orderID,
  requestID,
}) => {
  const translate = useTranslate();
  const dispatch = useAppDispatch();
  const { data: order } = useGetOneOrderQuery({ id: orderID });
  const { data: request } = useGetOneOrderRequestQuery({ orderID, requestID });
  const handleRequestChange = (request: IOrderRequestDTO) => {
    if (order?.id) {
      dispatch(setCurrentRequestID({ orderID: order.id, requestID: request.id }));
    }
  };

  return (
    <StyledRadiologyPageLeftSideWrapper>
      <RadiologyPageLeftSideHeader
        PatientInfo={<PatientInfomation order={order} />}
        CofigButton={<DefaultInfoRadiologyButton />}
        SignIcon={<SignInfomation order={order} requestID={requestID} />}
        HisStatusIcon={
          request?.hisReportStatus ? (
            <HisReportStatusInfo status={request?.hisReportStatus} />
          ) : (
            <></>
          )
        }
      />

      <StyledOrderInfomation>
        <OrderRequestSelectField
          order={order}
          request={request}
          onRequestChange={handleRequestChange}
        />

        <StyledLeftSideRow>
          <MyTextField
            value={request?.icdCode ?? ' '}
            label={'Mã ICD'}
            size="small"
            disabled={true}
          />
          {order && request && <RequestedDateTime order={order} />}
        </StyledLeftSideRow>

        <StyledLeftSideRow>
          <ConnectedRadiologyModalitySelectForm />
          {order && request && <OperationDateTime order={order} request={request} />}
        </StyledLeftSideRow>

        <StyledLeftSideRow>
          {order && request && (
            <>
              <ExpectedReporterSelectField order={order} request={request} />
              <ExpectedDateTime order={order} request={request} />
            </>
          )}
        </StyledLeftSideRow>

        <ConnectedOperatorAutoCompleteForm
          key={requestID}
          orderID={orderID}
          requestID={requestID}
        />
        <MyTextField
          value={request?.finalApprover?.fullname ?? ''}
          label={translate.resources.order.approver.short()}
          size="small"
          disabled={true}
        />
        <DescriptionEditor />
      </StyledOrderInfomation>

      {order?.modalityType &&
        ModalityTypeRequiredConsumables.includes(order?.modalityType) && (
          <StyledConsumableWrapper>
            <>
              <NumberOfConsumable requestID={requestID} orderID={orderID} />
              <CreateUpdateConsumableTable
                requestID={requestID}
                orderID={orderID}
                request={request}
              />
            </>
          </StyledConsumableWrapper>
        )}
    </StyledRadiologyPageLeftSideWrapper>
  );
};

const StyledConsumableWrapper = styled(Stack)`
  width: 100%;
  height: 100%;
  min-height: 200px;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(0.5)};
  overflow: auto;
`;

const StyledOrderInfomation = styled(Stack)`
  gap: ${(props) => props.theme.spacing(1)};
`;
const StyledRadiologyPageLeftSideWrapper = styled('div')`
  height: 100%;
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(1)};
  overflow: auto;
  padding-right: ${(props) => props.theme.spacing(1)};
`;

const StyledLeftSideRow = styled('div')`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing(0.5)};
`;
