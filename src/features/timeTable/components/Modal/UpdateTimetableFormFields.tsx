import { Stack } from '@mui/material';
import React, { FC } from 'react';

import { IFormControlInputProps } from '@/components/Form';
import { MyFormDateTimePicker } from '@/components/Form/MyFormDateTimePicker';
import { useTranslate } from '@/hooks';

import { DateWorkingField } from './DateWorkingField';
import { PeriodSelectField } from './PeriodSelectField';
import { UpdateTimetableFieldsType } from './UpdateTimetableForm';
import { UsersAutoCompleteField } from './UsersAutoCompleteField';
import { UserTypeSelectField } from './UserTypeSelectField';

export type UpdateTimetableFormFieldsProps =
  IFormControlInputProps<UpdateTimetableFieldsType> & {
    onSuccessCallback?: () => void;
  };

export const UpdateTimetableFormFields: FC<UpdateTimetableFormFieldsProps> = (props) => {
  const translate = useTranslate();
  const { control, watch } = props;
  return (
    <Stack spacing={1}>
      <DateWorkingField />
      <PeriodSelectField {...props} />
      <UserTypeSelectField {...props} />
      <UsersAutoCompleteField {...props} />
    </Stack>
  );
};
