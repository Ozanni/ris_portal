import { MenuItem } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { Control, Path } from 'react-hook-form';

import { MyFormSelectField } from '@/components/Elements/Inputs/MyFormSelectField';
import { useTranslate } from '@/hooks';
import { InformationPrintFormData } from '@/hooks/printRadiologyReport/usePrintReportButton';
import { useGetTemplate } from '@/hooks/radiology/useGetTemplate';
import { ILayoutDTO, IOrderDTO } from '@/types/dto';

type SelectTemplateFieldProps = {
  name: Path<InformationPrintFormData>;
  control: Control<InformationPrintFormData>;
  orderID: IOrderDTO['id'];
};
/**
 * Trường chọn mẫu in kết quả,
 * Dùng ở modal Xem trước kết quả
 */
const SelectTemplateField: FC<SelectTemplateFieldProps> = (props) => {
  const { name, control, orderID } = props;
  const [templates, setTemplates] = useState<ILayoutDTO[]>();
  const translate = useTranslate();
  const { getTemplates } = useGetTemplate(orderID);

  useEffect(() => {
    const setTemplateForSelectField = async () => {
      const templates = await getTemplates();
      setTemplates(templates);
    };
    setTemplateForSelectField();
  }, [getTemplates]);

  return templates ? (
    <MyFormSelectField
      name={name}
      control={control}
      MySelectProps={{
        label: translate.resources.layout.title.long(),
      }}
    >
      {templates.map((template) => (
        <MenuItem key={template.id} value={template.id}>
          {template.name}
        </MenuItem>
      ))}
    </MyFormSelectField>
  ) : (
    <></>
  );
};

export default SelectTemplateField;
