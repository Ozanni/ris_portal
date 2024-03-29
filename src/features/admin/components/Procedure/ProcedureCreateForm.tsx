import { zodResolver } from '@hookform/resolvers/zod';
import { Box, MenuItem, Stack, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { UseFormProps } from 'react-hook-form';
import { z } from 'zod';

import { useGetListConsumableMaterialQuery } from '@/api/consumableMaterial';
import { useCreateProcedureMutation } from '@/api/procedure';
import { MyCheckbox, MyFormCheckboxField, MyFormTextField } from '@/components';
import { MyFormSelectField } from '@/components/Elements/Inputs/MyFormSelectField';
import { MyFormGroupUnstyled } from '@/components/Form';
import { useTranslate } from '@/hooks';
import { useRegisterAdminFunctions } from '@/providers/Admin/AdminProvider';
import { useGenericNotifySnackbar } from '@/providers/NotificationProvider';
import { IProcedureDTOCreate } from '@/types/dto';

import { useProcedureForm } from '../../hooks/useProcedureForm';

import { ProcedureBodyPartAutocompleteField } from './ProcedureBodyPartAutocompleteField';
import { ProcedureConsumableMaterialAutocompleteField } from './ProcedureConsumableMaterialAutocompleteField';

type ProcedureCreateFormProps = {
  onSuccessCallback: () => void;
};
export const ProcedureCreateForm: FC<ProcedureCreateFormProps> = (props) => {
  const { onSuccessCallback } = props;
  const [createProcedure] = useCreateProcedureMutation();
  const translate = useTranslate();
  const register = useRegisterAdminFunctions();
  const { modalityAbbrData, listProcedure } = useProcedureForm();

  const formOptions: UseFormProps<IProcedureDTOCreate> = {
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
              if (listProcedure && listProcedure.some((item) => item.code === value)) {
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
        bodyParts: z.array(z.string()).optional(),
        supportAI: z.boolean().optional(),
        consumables: z
          .array(
            z.object({
              materialID: z.number().optional(),
              quantity: z
                .string()
                .transform((val) => Number(val))
                .optional(),
            }),
          )
          .optional(),
      }),
    ),
    defaultValues: {
      name: '',
      code: '',
      supportAI: false,
      modalityType: '',
    },
  };

  const notifySuccess = useGenericNotifySnackbar(
    'success',
    translate.messages.titles.createResource({
      resource: translate.resources.procedure.title().toLowerCase(),
    }),
  );

  const notifyError = useGenericNotifySnackbar(
    'error',
    translate.messages.titles.createResource({
      resource: translate.resources.procedure.title().toLowerCase(),
    }),
  );

  const handleSubmit = async (formData: IProcedureDTOCreate) => {
    try {
      const res = await createProcedure(formData);
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
        register('submitCreateForm', () => formInstance.submit && formInstance.submit())
      }
      onSubmit={handleSubmit}
      submitOnEnter
      formOptions={formOptions}
      renderInputs={({ control, formState, onKeyDown }) => (
        <Stack spacing={1} alignItems="start" width="500px">
          <MyFormTextField
            name="name"
            control={control}
            MyTextFieldProps={{
              label: translate.resources.procedure.name(),
              placeholder: translate.resources.procedure.name(),
              fullWidth: true,
              required: true,
              size: 'small',
              onKeyDown,
            }}
          />
          <MyFormTextField
            name="code"
            control={control}
            MyTextFieldProps={{
              label: translate.resources.procedure.code(),
              placeholder: translate.resources.procedure.code(),
              fullWidth: true,
              required: true,
              size: 'small',
              onKeyDown,
            }}
          />
          <MyFormSelectField
            name="modalityType"
            control={control}
            required
            MySelectProps={{
              label: translate.resources.procedure.modalityType(),
              placeholder: translate.resources.procedure.modalityType(),
              fullWidth: true,
            }}
          >
            {modalityAbbrData &&
              modalityAbbrData?.list.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.id}
                </MenuItem>
              ))}
          </MyFormSelectField>
          <ProcedureBodyPartAutocompleteField control={control} name="bodyParts" />
          <MyFormTextField
            name="dicomDescription"
            control={control}
            MyTextFieldProps={{
              label: translate.resources.procedure.dicomDescription(),
              placeholder: translate.resources.procedure.dicomDescription(),
              fullWidth: true,
              size: 'small',
              onKeyDown,
            }}
          />
          <ProcedureConsumableMaterialAutocompleteField
            control={control}
            materialID="consumables.0.materialID"
            quantity="consumables.0.quantity"
          />

          <MyFormCheckboxField
            control={control}
            render={({ value, onChange }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <MyCheckbox checked={!!value} onChange={onChange} />
                <Typography>{translate.resources.procedure.supportAI()}</Typography>
              </Box>
            )}
            name="supportAI"
          />
        </Stack>
      )}
    />
  );
};
