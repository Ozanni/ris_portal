import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { UseFormProps } from 'react-hook-form';
import { z } from 'zod';

import { useUpdateTimeTableMutation } from '@/api/timeTable';
import { MyFormGroupUnstyled } from '@/components/Form';
import { useTranslate } from '@/hooks';
import { useGenericNotifySnackbar } from '@/providers/NotificationProvider';
import { IUserDTO, USER_TYPE } from '@/types/dto';
import { ITimeTableUpdateDTO, TimeTableDatagrid } from '@/types/dto/timeTable';
import { ITimeTablePeriodDTO } from '@/types/dto/timeTablePeriod';

import { useRegisterTimetableFunctions } from '../../providers/TimeTableProvider';

import { UpdateTimetableFormFields } from './UpdateTimetableFormFields';

export type UpdateTimetableFieldsType = {
  id: string;
  periodID: ITimeTablePeriodDTO['id'];
  userType: `${USER_TYPE}`;
  userIDs: number[];
  users?: IUserDTO[];
};
type UpdateTimetableFormProps = {
  record: TimeTableDatagrid;
  onSuccessCallback: () => void;
  periodID: number;
};
export const UpdateTimetableForm: FC<UpdateTimetableFormProps> = (props) => {
  const { onSuccessCallback, record, periodID } = props;
  const register = useRegisterTimetableFunctions();
  const translate = useTranslate();
  const [updateTimeTable] = useUpdateTimeTableMutation();

  const notifySuccess = useGenericNotifySnackbar(
    'success',
    translate.messages.titles.createResource({
      resource: translate.pages.timeTable.title().toLowerCase(),
    }),
  );

  const notifyError = useGenericNotifySnackbar(
    'error',
    translate.messages.titles.createResource({
      resource: translate.pages.timeTable.title().toLowerCase(),
    }),
  );

  const formOptions: UseFormProps<UpdateTimetableFieldsType> = {
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: zodResolver(
      z
        .object({
          id: z.string(),
          periodID: z.number(),
          userType: z.string().optional(),
          userIDs: z.array(z.number()).optional(),
          users: z.array(z.object({ id: z.number() })).optional(),
        })
        .transform((val) => {
          return {
            ...val,
            userIDs: val.users ? val.users.map((item) => item.id) : undefined,
            users: undefined,
          };
        }),
    ),
    defaultValues: {
      id: record?.id,
      periodID,
      userIDs: [],
      users: record?.timetable ? record?.timetable[periodID] : [],
      userType: undefined,
    },
  };
  const handleSubmit = async (formData: UpdateTimetableFieldsType) => {
    try {
      const submitForm: ITimeTableUpdateDTO = {
        id: formData.id ?? '',
        periodID: formData.periodID,
        userIDs: formData.userIDs,
      };
      const res = await updateTimeTable(submitForm);
      if ('error' in res) {
        notifyError();
      } else {
        notifySuccess();
        onSuccessCallback && onSuccessCallback();
      }
    } catch (e) {
      notifyError();
    }
  };
  return (
    <MyFormGroupUnstyled
      registerFormFunctions={(formInstance) =>
        register(
          'submitUpdateTimetable',
          () => formInstance.submit && formInstance.submit(),
        )
      }
      onSubmit={handleSubmit}
      submitOnEnter
      formOptions={formOptions}
      renderInputs={(controls) => <UpdateTimetableFormFields {...controls} />}
    />
  );
};
