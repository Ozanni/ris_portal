import dayjs from 'dayjs';
import React, { FC } from 'react';

import { IOrderDTO } from '@/types/dto';
import { DISPLAY_FORMAT, itechDateToDayjs } from '@/utils/dateUtils';

import OrderInfoTypography from './OrderInfoTypography';

type OrderPanelAgeFieldProps = {
  order?: IOrderDTO;
};

const OrderPanelAgeField: FC<OrderPanelAgeFieldProps> = (props) => {
  const { order } = props;
  const currentYear = dayjs().year();
  const yearOfBirth = order
    ? itechDateToDayjs(order.patient?.birthDate || '')?.format(DISPLAY_FORMAT.year)
    : '';
  /**
   * This year - birth of year => age patient
   */
  const agePatient = currentYear - parseInt(yearOfBirth ?? '');

  return (
    <OrderInfoTypography title={`${agePatient}T`}>
      {agePatient ? `${agePatient}T` : ''}
    </OrderInfoTypography>
  );
};

export default OrderPanelAgeField;
