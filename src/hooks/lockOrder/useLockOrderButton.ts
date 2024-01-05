import { useEffect } from 'react';

import { useLazyGetOneModalityTypeByNameQuery } from '@/api/modalityType';
import { useGetOneOrderQuery } from '@/api/order';
import { useGetOneOrderRequestQuery } from '@/api/orderRequest';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getIsEnableLockOrder } from '@/lib/dataHelper/radiologyReport/validateLockOrder';
import { useUserPermission } from '@/providers/AuthProvider';
import { selectCurrentUser } from '@/stores/auth';
import { BUTTON_STATE } from '@/types';
import { IOrderDTO } from '@/types/dto';
import { getDefaultOperationTimeSubmissionData } from '@/utils/radiology/getRadiologyTime';

import { useCurrentOrderID } from '../../features/order/providers';
import {
  selectCurrentRequestID,
  selectRadiologyReportButtonsState,
  setRadiologyReportButtonState,
  setRadiologyReportSubmissionData,
} from '../../stores/OrderRadiology';

import { useLockOrder } from './useLockOrder';

export const useLockOrderButton = (orderId?: IOrderDTO['id']) => {
  const [triggerGetModalityType] = useLazyGetOneModalityTypeByNameQuery();
  const currentOrderID = useCurrentOrderID();
  const orderID = orderId ?? currentOrderID;
  const requestID = useAppSelector(selectCurrentRequestID(orderID));
  const { data: order } = useGetOneOrderQuery({ id: orderID }, { skip: !orderID });
  const { data: request } = useGetOneOrderRequestQuery(
    {
      orderID: order?.id ?? 0,
      requestID,
    },
    { skip: !order?.id || !requestID },
  );

  const user = useAppSelector(selectCurrentUser);
  const buttonState = useAppSelector(selectRadiologyReportButtonsState(orderID, 'LOCK'));
  const dispatch = useAppDispatch();
  const permission = useUserPermission();

  const handleLockOrder = useLockOrder();
  /**
   * Thời gian thực hiện ca chụp bắt đầu từ khi nhận ca
   */
  const lockOrderAndSetOperationTime = async () => {
    const isLocked = await handleLockOrder(orderID, request?.id);
    if (isLocked && order?.modalityType) {
      const modalityType = await triggerGetModalityType(
        {
          name: order.modalityType,
        },
        true,
      ).unwrap();

      dispatch(
        setRadiologyReportSubmissionData({
          orderID,
          requestID,
          operationTime: getDefaultOperationTimeSubmissionData({
            modalityType,
            request,
            operationTimeReportSubmission: undefined,
          }),
        }),
      );
    }

    return isLocked;
  };

  useEffect(() => {
    if (order && user && request) {
      let buttonState = BUTTON_STATE.DISABLED;
      if (getIsEnableLockOrder(permission, request)) {
        buttonState = BUTTON_STATE.ACTIVE;
      }
      dispatch(
        setRadiologyReportButtonState({ orderID, button: 'LOCK', state: buttonState }),
      );
    }
  }, [dispatch, order, orderID, permission, request, user]);

  return {
    buttonState: buttonState || BUTTON_STATE.DISABLED,
    onClick: () => lockOrderAndSetOperationTime(),
    requestID,
  };
};
