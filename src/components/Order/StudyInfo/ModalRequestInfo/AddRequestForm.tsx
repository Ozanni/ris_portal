import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Control, UseFormProps, useWatch } from 'react-hook-form';
import { z } from 'zod';

import { useCreateOrderRequestMutation } from '@/api/order';
import { useGetListUsersQuery } from '@/api/users';
import { MyFormGroupUnstyled } from '@/components/Form';
import { transformSelfIncrementingValueWithRequests } from '@/dataHelper/transformSelfIncrementingValueWithRequests';
import { useAppDispatch, useAppSelector, useTranslate } from '@/hooks';
import { useDeleteRequest } from '@/hooks/examination/useDeleteRequest';
import { useGenericNotifySnackbar } from '@/providers/NotificationProvider';
import {
  useCreateOrderFunctions,
  useRegisterCreateOrderFunctions,
} from '@/providers/Order/CreateOrderFunctionsProvider';
import {
  deleteOrderRequestData,
  selectCurrentProcedureData,
  selectOrderRequestData,
  setOrderRequestData,
} from '@/stores/examinnation/createOrderSlice';
import { IOrderDTO, IOrderUpdateDTO, IProcedureDTO, IUserDTO } from '@/types/dto';
import { formatDateTime, getCurrentDateTime } from '@/utils/dateUtils';

import { OrderRequestFormType, RequestFormFields } from './RequestFormFields';

type AddRequestFormProps = {
  order?: IOrderDTO;
  control: Control<IOrderUpdateDTO>;
};

export const ConnectedAddRequestForm: FC<AddRequestFormProps> = (props) => {
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
    <AddRequestForm
      key={currentProcedure?.id}
      {...props}
      currentProcedure={currentProcedure}
      listOperators={listOperators ?? []}
    />
  );
};

const AddRequestForm: FC<
  AddRequestFormProps & {
    currentProcedure: IProcedureDTO | null;
    listOperators: IUserDTO[];
  }
> = (props) => {
  const { order, currentProcedure, control, listOperators } = props;
  const formData = useWatch({ control });
  const translate = useTranslate();
  const register = useRegisterCreateOrderFunctions();
  const [createOrderRequest] = useCreateOrderRequestMutation();
  const dispatch = useAppDispatch();
  const handleDeleteRequest = useDeleteRequest({});

  const requests = useAppSelector(selectOrderRequestData);

  const currentRequest = requests.find(
    (item) => item.procedureID === currentProcedure?.id,
  );

  const notifyCreateSuccess = useGenericNotifySnackbar(
    'success',
    translate.messages.titles.createResource({
      resource: translate.resources.order.requests().toLowerCase(),
    }),
  );

  const notifyCreateError = useGenericNotifySnackbar(
    'error',
    translate.messages.titles.createResource({
      resource: translate.resources.order.requests().toLowerCase(),
    }),
  );

  const handleSubmit = async (formData: OrderRequestFormType) => {
    if (order) {
      const res = await createOrderRequest({ ...formData, orderID: order.id });
      if ('error' in res) {
        notifyCreateError();
      } else {
        notifyCreateSuccess();
      }
    } else {
      dispatch(setOrderRequestData(formData));
      notifyCreateSuccess();
      // createOrderFunctions.handleSetValue(procedure);
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
      requestedNumber: formData.accessionNumber ?? '',
      requestedTime: formData.requestedTime ?? formatDateTime(getCurrentDateTime()),
      expectedReporterID: currentRequest?.expectedReporterID,
      finalApproverID: currentRequest?.finalApproverID,
      finalApprovedTime: currentRequest?.finalApprovedTime ?? '',
      operationTime: currentRequest?.operationTime ?? '',
      icdCode: '',
      procedureID: currentProcedure?.id,
      modalityID: currentRequest?.modalityID,
      operatorIDs: currentRequest?.operatorIDs,
      operators: listOperators,
      consumables: currentRequest?.consumables ?? undefined,
    },
  };
  return (
    <MyFormGroupUnstyled
      registerFormFunctions={(formInstance) =>
        register('createOrderRequest', () => formInstance.submit && formInstance.submit())
      }
      onSubmit={handleSubmit}
      submitOnEnter
      formOptions={formOptions}
      renderInputs={(controls) => (
        <RequestFormFields
          {...controls}
          procedure={currentProcedure}
          onDelete={handleDeleteRequest}
        />
      )}
    />
  );
};
