import { Box, MenuItem, Stack, Typography } from '@mui/material';
import { FC } from 'react';

import {
  MyCheckbox,
  MyFormCheckboxField,
  MyFormTextField,
  MyTextField,
} from '@/components';
import { MyFormSelectField } from '@/components/Elements/Inputs/MyFormSelectField';
import { IFormControlInputProps } from '@/components/Form';
import { useTranslate } from '@/hooks';
import { IGetManyResourceQueryResult } from '@/types';
import { IModalityTypeNameDTO, IProcedureDTO, IProcedureDTOUpdate } from '@/types/dto';

import { useProcedureForm } from '../../hooks/useProcedureForm';

import { ProcedureBodyPartAutocompleteField } from './ProcedureBodyPartAutocompleteField';
import { ProcedureConsumableMaterialField } from './ProcedureConsumableMaterialField';

export type IProcedureFormFields = Partial<IProcedureDTOUpdate>;

type ProcedureFormFieldsProps = IFormControlInputProps<IProcedureFormFields> & {
  record?: IProcedureDTO;
  modalityAbbrData?: IGetManyResourceQueryResult<IModalityTypeNameDTO> | undefined;
};

export const ProcedureFormFields: FC<ProcedureFormFieldsProps> = (props) => {
  const { record, control, onKeyDown, modalityAbbrData } = props;
  const translate = useTranslate();

  return (
    <Stack spacing={1} alignItems="start" width="500px">
      {record && (
        <MyTextField value={record.id} label={'ID'} size="small" disabled fullWidth />
      )}
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
      <ProcedureConsumableMaterialField
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
  );
};
