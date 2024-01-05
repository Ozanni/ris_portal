import { Checkbox } from '@mui/material';
import React from 'react';
import { FieldValues, Path, Control, UseFormWatch } from 'react-hook-form';

import { useGetListUsersQuery } from '@/api/users';
import { MyFormAutoComplete } from '@/components/Form/MyFormAutoComplete';
import { StyledDivLeftChildren } from '@/components/Layout/StyledDiv';
import { useTranslate } from '@/hooks';
import { IUserDTO } from '@/types/dto';

import { UpdateTimetableFieldsType } from './UpdateTimetableForm';

type UsersAutoCompleteFieldProps = {
  control: Control<UpdateTimetableFieldsType>;
  watch: UseFormWatch<UpdateTimetableFieldsType>;
};

export const UsersAutoCompleteField = (props: UsersAutoCompleteFieldProps) => {
  const { control, watch } = props;
  const { data: userData } = useGetListUsersQuery({
    filter: { types: [watch('userType')] },
  });
  const translate = useTranslate();

  return (
    <MyFormAutoComplete
      name="users"
      control={control}
      label={translate.resources.analytics.approverNameTitle()}
      placeholder={'Thêm người dùng'}
      MyAutoCompleteProps={{
        options: userData?.list.filter((item) => item.enabled) ?? [],
        isOptionEqualToValue: (option, value) => option.id === value.id,
        getOptionLabel: (option) =>
          `${(option as IUserDTO)?.id} - ${(option as IUserDTO)?.fullname}`,
        fullWidth: true,
        renderOption: (props, option, { selected }) => {
          return (
            <li {...props}>
              <StyledDivLeftChildren>
                <Checkbox size="small" checked={selected} />
                {option?.id}-{option?.fullname}
              </StyledDivLeftChildren>
            </li>
          );
        },
      }}
    />
  );
};
