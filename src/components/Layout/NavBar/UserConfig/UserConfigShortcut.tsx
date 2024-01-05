import { Typography } from '@mui/material';
import { CellContext } from '@tanstack/react-table';
import React, { FC, useMemo, useState } from 'react';

import { MyTextField } from '@/components/Elements';
import { ITableField, MyTable } from '@/components/Table/MyTable';
import { useTranslate } from '@/hooks';
import { useUserShortcutKey } from '@/hooks/UserConfig/useUserShortcutKey';
import { TABLE_SHORTCUTKEY } from '@/stores/table/tableInitialState';
import { IShortcutKeyDTO } from '@/types/dto';

import { StyledDivCenterChildren } from '../../StyledDiv';

const EditShortcutCell: FC<CellContext<IShortcutKeyDTO, unknown>> = ({
  cell,
  column,
  row,
}) => {
  const initialValue = cell.row.original.defaultKey;

  const [value, setValue] = useState(initialValue);

  return (
    <StyledDivCenterChildren>
      <Typography>ALT + </Typography>
      <MyTextField
        size="extrasmall"
        type="text"
        InputProps={{
          value: value,
          // onBlur: onBlur,
          // disabled,
        }}
        onChange={(e) => {
          setValue(e.target.value.slice(0, 1).toLocaleUpperCase());
        }}
        sx={{ height: '25px', width: '60px' }}
      />
    </StyledDivCenterChildren>
  );
};

export const UserConfigShortcut = () => {
  const translate = useTranslate();
  const { isFetching, listShortcutKey } = useUserShortcutKey();

  const tableColumns = useMemo<ITableField<IShortcutKeyDTO>[]>(
    () => [
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'stt',
            header: translate.messages.stt(),
            cell: (props) => (
              <StyledDivCenterChildren>{props.row.index + 1}</StyledDivCenterChildren>
            ),
            maxSize: 50,
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'modalityName',
            header: 'Chức năng',
            cell: (props) => <Typography>{props.row.original.name}</Typography>,
            size: 300,
          }),
      },
      {
        type: 'custom',
        getColumnDef: (columnHelper) =>
          columnHelper.display({
            id: 'modalityType',
            header: 'Phím tắt',
            cell: (props) => <EditShortcutCell {...props} />,
            size: 150,
          }),
      },
    ],
    [translate.messages],
  );

  return (
    <div>
      <MyTable
        tableId={TABLE_SHORTCUTKEY}
        data={listShortcutKey}
        tableColumnsDescription={tableColumns}
        MyDataGridProps={{
          isLoading: isFetching,
        }}
        TanstackTableOptions={{
          enableRowSelection: false,
          enableMultiRowSelection: false,
        }}
        hiddenFooter
      />
    </div>
  );
};
