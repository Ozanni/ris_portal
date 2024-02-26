import { zodResolver } from '@hookform/resolvers/zod';
import { Box, MenuItem, Stack, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { UseFormProps } from 'react-hook-form';
import { z } from 'zod';

import { useGetListConsumableMaterialQuery } from '@/api/consumableMaterial';
import { useUpdateProcedureMutation } from '@/api/procedure';
import {
  MyCheckbox,
  MyFormCheckboxField,
  MyFormTextField,
  MyTextField,
} from '@/components';
import { MyFormSelectField } from '@/components/Elements/Inputs/MyFormSelectField';
import { MyFormGroupUnstyled } from '@/components/Form';
import { useTranslate } from '@/hooks';
import { useRegisterAdminFunctions } from '@/providers/Admin/AdminProvider';
import { useGenericNotifySnackbar } from '@/providers/NotificationProvider';
import { IProcedureDTO, IProcedureDTOUpdate } from '@/types/dto';

import { useProcedureForm } from '../../hooks/useProcedureForm';

import { ProcedureBodyPartAutocompleteField } from './ProcedureBodyPartAutocompleteField';

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
  const { data } = useGetListConsumableMaterialQuery({
    filter: {},
  });
  const consumableMaterialList = data?.list;

  const formOptions: UseFormProps<IProcedureDTOUpdate> = {
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
              quantity: z.preprocess((val) => Number(val), z.number().optional()),
            }),
          )
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
      consumables: record.consumables ?? [],
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

  const handleSubmit = async (formData: IProcedureDTOUpdate) => {
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
      renderInputs={({ control, onKeyDown }) => (
        <Stack spacing={1} alignItems="start" width="500px">
          <MyTextField value={record.id} label={'ID'} size="small" disabled fullWidth />
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
          <StyledDiv>
            <MyFormSelectField
              name={`consumables.0.materialID`}
              control={control}
              MySelectProps={{
                label: translate.resources.consumable.title(),
                placeholder: translate.resources.consumable.materialName(),
                fullWidth: true,
              }}
            >
              {consumableMaterialList &&
                consumableMaterialList?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
            </MyFormSelectField>
            <MyFormTextField
              control={control}
              name={`consumables.0.quantity`}
              MyTextFieldProps={{
                label: translate.resources.consumable.quantity(),
                placeholder: translate.resources.consumable.quantity(),
                size: 'small',
                type: 'number',
                inputProps: { min: 0 },
              }}
            />
          </StyledDiv>
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

const StyledDiv = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${(props) => props.theme.spacing(1)};
`;
