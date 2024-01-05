import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { UseFormProps } from 'react-hook-form';
import { z } from 'zod';

import {
  useCreateOrderRequestMutation,
  useUpdateOrderRequestMutation,
} from '@/api/order';
import { useGetListUsersQuery } from '@/api/users';
import { MyFormGroupUnstyled } from '@/components/Form';
import { useAppDispatch, useTranslate, useAppSelector } from '@/hooks';
import { useDeleteRequest } from '@/hooks/examination/useDeleteRequest';
import { useGenericNotifySnackbar } from '@/providers/NotificationProvider';
import { useCreateOrderFunctions } from '@/providers/Order/CreateOrderFunctionsProvider';
import { useRegisterEditOrderFunctions } from '@/providers/Order/EditOrderFunctionsProvider';
import {
  selectCurrentProcedureData,
  selectOrderRequestData,
  setOrderRequestData,
} from '@/stores/examinnation/createOrderSlice';
import { ICloudUserDTO, IOrderDTO, IProcedureDTO } from '@/types/dto';
import { formatDateTime, getCurrentDateTime, setZeroSeconds } from '@/utils/dateUtils';
import { uuidv4 } from '@/utils/uuidv4';

import { OrderRequestFormType, RequestFormFields } from './RequestFormFields';

type EditRequestFormProps = {
  onSuccessCallback?: () => void;
  procedure: IProcedureDTO | null;
  order?: IOrderDTO;
  accessionNumber?: IOrderDTO['accessionNumber'];
};

export const ConnectedEditRequestForm: FC<EditRequestFormProps> = (props) => {
  const currentProcedure = useAppSelector(selectCurrentProcedureData);
  const requests = useAppSelector(selectOrderRequestData);
  /**
   * request from local
   */
  const requestSelected = requests.find(
    (request) => request.procedureID === currentProcedure?.id,
  );
  const { data } = useGetListUsersQuery(
    {
      filter: { ids: requestSelected?.operatorIDs },
    },
    { skip: !requestSelected?.operatorIDs || requestSelected?.operatorIDs.length !== 0 },
  );
  const listOperators = data?.list ?? undefined;
  return (
    <EditRequestForm
      {...props}
      key={currentProcedure?.id ?? uuidv4()}
      listUsers={listOperators}
      procedure={currentProcedure}
    />
  );
};

const EditRequestForm: FC<EditRequestFormProps & { listUsers?: ICloudUserDTO[] }> = (
  props,
) => {
  const { onSuccessCallback, procedure, order, accessionNumber, listUsers } = props;
  const translate = useTranslate();
  const dispatch = useAppDispatch();
  const register = useRegisterEditOrderFunctions();
  const requests = useAppSelector(selectOrderRequestData);
  const currentProcedure = useAppSelector(selectCurrentProcedureData);
  const [updateOrderRequest] = useUpdateOrderRequestMutation();
  const [createOrderRequest] = useCreateOrderRequestMutation();
  const createOrderFunctions = useCreateOrderFunctions();
  const handleDeleteRequest = useDeleteRequest({ order });

  /**
   * request from order
   */
  const currentRequest = order?.requests?.find(
    (request) => request.procedure?.id === procedure?.id,
  );
  /**
   * request from local
   */
  const currentRequestLocal = requests.find(
    (request) => request.procedureID === procedure?.id,
  );

  const notifyEditSuccess = useGenericNotifySnackbar(
    'success',
    translate.messages.titles.editResource({
      resource: translate.resources.order.requests().toLowerCase(),
    }),
  );

  const notifyEditError = useGenericNotifySnackbar(
    'success',
    translate.messages.titles.editResource({
      resource: translate.resources.order.requests().toLowerCase(),
    }),
  );

  const handleSubmit = async (formData: OrderRequestFormType) => {
    if (order) {
      let res;
      if (!currentRequest && currentProcedure?.id) {
        res = await createOrderRequest({
          ...formData,
          orderID: order.id,
          procedureID: currentProcedure.id,
          finalApprovedTime: setZeroSeconds(formData.finalApprovedTime) ?? '',
          operationTime: setZeroSeconds(formData.operationTime) ?? '',
        });
      } else {
        res = await updateOrderRequest({
          ...formData,
          orderID: order.id,
          id: currentRequest?.id ?? 0,
          finalApprovedTime: setZeroSeconds(formData.finalApprovedTime),
          operationTime: setZeroSeconds(formData.operationTime),
        });
      }

      if ('error' in res) {
        notifyEditError();
      } else {
        notifyEditSuccess();
        createOrderFunctions.handleEditValue(
          procedure ?? undefined,
          formData.procedureID,
        );
        onSuccessCallback && onSuccessCallback();
      }
    } else {
      if (procedure?.id !== formData.procedureID) {
        createOrderFunctions.handleEditValue(
          procedure ?? undefined,
          formData.procedureID,
        );
      }
      dispatch(setOrderRequestData(formData));
      notifyEditSuccess();
      onSuccessCallback && onSuccessCallback();
    }
  };

  const formOptions: UseFormProps<OrderRequestFormType> = {
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: zodResolver(
      z
        .object({
          icdCode: z.string().optional(),
          modalityID: z.number().optional(),
          procedureID: z.number().optional(),
          requestedNumber: z
            .string()
            .trim()
            .min(
              1,
              translate.messages.validation.genericRequired({
                resource: translate.studyInfo.requestNumber(),
              }),
            ),
          requestedTime: z
            .string()
            .trim()
            .min(
              1,
              translate.messages.validation.genericRequired({
                resource: translate.resources.order.request.requestedTime(),
              }),
            ),
          expectedReportTime: z.string().optional(),
          operatorIDs: z.array(z.number()).optional(),
          operators: z.array(z.object({ id: z.number() })).optional(),
          consumables: z
            .array(
              z.object({
                id: z.number(),
                error: z.boolean(),
                quantity: z.number(),
                materialID: z.number(),
              }),
            )
            .optional(),
          operationTime: z.string().optional(),
          finalApprovedTime: z.string().optional(),
          expectedReporterID: z.number().optional(),
          finalApproverID: z.number().optional(),
        })
        .transform((val) => {
          return {
            ...val,
            operatorIDs: val.operators?.map((item) => item.id) ?? undefined,
            operators: undefined,
          };
        }),
    ),
    defaultValues: {
      icdCode: currentRequest?.icdCode ?? currentRequestLocal?.icdCode,
      modalityID: currentRequest?.modality?.id ?? currentRequestLocal?.modalityID,
      procedureID: currentRequestLocal?.procedureID ?? currentRequest?.procedure?.id,
      requestedNumber:
        currentRequestLocal?.requestedNumber ??
        currentRequest?.requestedNumber ??
        accessionNumber ??
        '',
      expectedReporterID:
        currentRequest?.expectedReporter?.id ??
        currentRequestLocal?.expectedReporterID ??
        undefined,
      operatorIDs:
        currentRequest?.operators?.map((item) => item.id) ??
        currentRequestLocal?.operatorIDs,
      operators: currentRequest?.operators ?? listUsers,
      finalApproverID:
        currentRequest?.finalApproverID ?? currentRequestLocal?.finalApproverID,
      finalApprovedTime:
        currentRequest?.finalApprovedTime ?? currentRequestLocal?.finalApprovedTime ?? '',
      operationTime:
        currentRequest?.operationTime ??
        currentRequestLocal?.operationTime ??
        formatDateTime(getCurrentDateTime()),
      requestedTime: order?.requestedTime ?? undefined,
      consumables: currentRequest?.consumables ?? undefined,
    },
  };
  return (
    <MyFormGroupUnstyled
      registerFormFunctions={(formInstance) =>
        register('editOrderRequest', () => formInstance.submit && formInstance.submit())
      }
      onSubmit={handleSubmit}
      submitOnEnter
      formOptions={formOptions}
      renderInputs={(controls) => (
        <RequestFormFields
          {...controls}
          orderID={order?.id}
          requestID={currentRequest?.id}
          procedure={procedure}
          disabledWithOrderFromHIS={order?.creationType === 'HIS'}
          isEdit
          onDelete={handleDeleteRequest}
          request={currentRequest}
        />
      )}
    />
  );
};
