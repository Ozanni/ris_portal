import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { UseFormProps } from 'react-hook-form';
import { z } from 'zod';

import { useUpdateProcedureMutation } from '@/api/procedure';
import { MyFormGroupUnstyled } from '@/components/Form';
import { useTranslate } from '@/hooks';
import { useRegisterAdminFunctions } from '@/providers/Admin/AdminProvider';
import { useGenericNotifySnackbar } from '@/providers/NotificationProvider';
import { IProcedureDTO } from '@/types/dto';

import { useProcedureForm } from '../../hooks/useProcedureForm';

import { IProcedureFormFields, ProcedureFormFields } from './ProcedureFormFields';

type ProcedureEditFormProps = {
  onSuccessCallback: () => void;
  record: IProcedureDTO;
};
export const ProcedureEditForm: FC<ProcedureEditFormProps> = (props) => {
  const { onSuccessCallback, record } = props;
  const [updateProcedure] = useUpdateProcedureMutation();
  const translate = useTranslate();
  const register = useRegisterAdminFunctions();
  const { modalityAbbrData, listProcedureFiltedred } = useProcedureForm({
    record,
  });

  const formOptions: UseFormProps<IProcedureFormFields> = {
    mode: 'onChange',
    criteriaMode: 'all',
    // form validation and pre-processing
    resolver: zodResolver(
      z.object({
        name: z
          .string()
          .trim()
          .min(
            1,
            translate.messages.validation.genericRequired({
              resource: translate.resources.procedure.name(),
            }),
          ),
        code: z
          .string()
          .trim()
          .min(
            1,
            translate.messages.validation.genericRequired({
              resource: translate.resources.procedure.code(),
            }),
          )
          .refine(
            (value) => {
              // check if there is any procedure code exist in the list
              if (
                listProcedureFiltedred &&
                listProcedureFiltedred.some((item) => item.code === value)
              ) {
                return false;
              }
              return true;
            },
            {
              message: translate.messages.validation.genericDuplicated({
                name: translate.resources.procedure.code(),
              }),
            },
          ),
        modalityType: z
          .string()
          .trim()
          .min(
            1,
            translate.messages.validation.genericRequired({
              resource: translate.resources.modalityType.name(),
            }),
          ),
        dicomDescription: z.string().optional(),
        supportAI: z.boolean().optional(),
        bodyParts: z.array(z.string()).optional(),
        consumables: z
          .array(
            z.object({
              materialID: z.number().optional(),
              quantity: z.preprocess((val) => Number(val), z.number()).optional(),
            }),
          )
          .transform((val) => (val[0].materialID === undefined ? [] : val))
          .optional(),
      }),
    ),
    defaultValues: {
      code: record.code ?? '',
      modalityType: record.modalityType ?? '',
      dicomDescription: record.dicomDescription ?? '',
      name: record.name ?? '',
      supportAI: record.supportAI ?? false,
      bodyParts: record?.bodyParts ?? [],
      consumables: record?.consumables ?? [],
    },
  };

  const notifySuccess = useGenericNotifySnackbar(
    'success',
    translate.messages.titles.editResource({
      resource: translate.resources.procedure.title().toLowerCase(),
    }),
  );

  const notifyError = useGenericNotifySnackbar(
    'error',
    translate.messages.titles.editResource({
      resource: translate.resources.procedure.title().toLowerCase(),
    }),
  );

  const handleSubmit = async (formData: IProcedureFormFields) => {
    try {
      const res = await updateProcedure({ ...formData, id: record.id });
      if ('error' in res) {
        notifyError();
      } else {
        notifySuccess();
        onSuccessCallback();
      }
    } catch (e) {
      notifyError();
    }
  };

  return (
    <MyFormGroupUnstyled
      registerFormFunctions={(formInstance) =>
        register('submitEditForm', () => formInstance.submit && formInstance.submit())
      }
      onSubmit={handleSubmit}
      submitOnEnter
      formOptions={formOptions}
      renderInputs={(controls) => {
        return (
          <ProcedureFormFields
            record={record}
            modalityAbbrData={modalityAbbrData}
            {...controls}
          />
        );
      }}
    />
  );
};
