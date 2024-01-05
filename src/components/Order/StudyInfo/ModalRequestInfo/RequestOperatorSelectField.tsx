import { MenuItem } from '@mui/material';
import React, { FC } from 'react';

import { useGetOneUserQuery, useLazyGetListUsersQuery } from '@/api/users';
import { MyFormSelectField } from '@/components/Elements/Inputs/MyFormSelectField';
import { MyLazyFormSelectField } from '@/components/Elements/Inputs/MyLazyFormSelectField';
import { getUserNameWithCode } from '@/dataHelper/radiologyReport/getUserNameWithCode';
import { useTranslate } from '@/hooks';

import { RequestFieldCommonProps } from './RequestFormFields';

/**
 * Trường Bác sĩ thực hiện trong form tạo,sửa request
 */
export const RequestOperatorSelectField: FC<RequestFieldCommonProps> = ({
  control,
  disabled,
  watch,
}) => {
  const translate = useTranslate();
  const [trigger] = useLazyGetListUsersQuery();
  const expectedReporterID = watch('expectedReporterID');

  const { data } = useGetOneUserQuery(
    { id: expectedReporterID },
    { skip: !expectedReporterID },
  );
  /**
   * func get list user by type
   */
  const getUserListByType = async () => {
    return (
      (
        await trigger(
          {
            filter: { types: ['TECHNICIAN', 'IMAGING_DOCTOR'] },
          },
          true,
        )
      ).data?.list ?? []
    );
  };
  return (
    <MyLazyFormSelectField
      name="expectedReporterID"
      control={control}
      MySelectProps={{
        label: translate.resources.order.reporter.short(),
        size: 'extrasmall',
        disabled,
      }}
      disableValue={data?.fullname ?? ''}
      onGetListRecord={getUserListByType}
      renderSelectField={({ listData: useList, formSelectFieldProps }) => (
        <MyFormSelectField {...formSelectFieldProps}>
          {useList.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {getUserNameWithCode(item)}
            </MenuItem>
          ))}
        </MyFormSelectField>
      )}
    />
  );
};
