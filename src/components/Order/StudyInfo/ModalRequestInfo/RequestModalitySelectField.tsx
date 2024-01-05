import { MenuItem } from '@mui/material';
import React, { FC } from 'react';
import { UseFormGetValues } from 'react-hook-form';

import { useGetOneModalityQuery, useLazyGetListModalityQuery } from '@/api/modality';
import { MyFormSelectField } from '@/components/Elements/Inputs/MyFormSelectField';
import { MyLazyFormSelectField } from '@/components/Elements/Inputs/MyLazyFormSelectField';
import { useTranslate } from '@/hooks';
import { IProcedureDTO } from '@/types/dto';

import { getModalitynameString } from '../../Panel/ModalitySelectForm';

import { RequestFieldCommonProps, RequestFormFields } from './RequestFormFields';

/**
 * Trường chọn máy chụp trong form tạo,sửa request
 */
export const RequestModalitySelectField: FC<
  RequestFieldCommonProps & {
    modalityType: IProcedureDTO['modalityType'];
  }
> = ({ control, watch, disabled, modalityType }) => {
  const translate = useTranslate();
  const [trigger] = useLazyGetListModalityQuery();
  const modalityID = watch('modalityID');

  const { data } = useGetOneModalityQuery({ id: modalityID }, { skip: !modalityID });

  const getModalityListByType = async () => {
    if (modalityType) {
      return (
        (
          await trigger(
            {
              filter: { modalityTypes: modalityType ? [modalityType] : [] },
            },
            true,
          )
        ).data?.list ?? []
      );
    }
    return [];
  };

  return (
    <MyLazyFormSelectField
      name="modalityID"
      control={control}
      required
      MySelectProps={{
        label: translate.resources.order.actionModality(),
        disabled,
        size: 'extrasmall',
        error:
          data?.insurance && data?.capability
            ? data?.insurance >= data?.capability
            : false,
      }}
      disableValue={getModalitynameString(data) ?? ''}
      onGetListRecord={getModalityListByType}
      renderSelectField={({ listData: modalityList, formSelectFieldProps }) => (
        <MyFormSelectField {...formSelectFieldProps}>
          {modalityList.map((item) => (
            <MenuItem key={item.id} value={item?.id || 0}>
              {getModalitynameString(item)}
            </MenuItem>
          ))}
        </MyFormSelectField>
      )}
    />
  );
};
