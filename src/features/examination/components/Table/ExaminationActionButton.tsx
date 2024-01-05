import ItechTransferIcon from '@/assets/icon/TransferIcon';
import { IconButtonWithToolTip } from '@/components/Elements/Buttons/IconButtonWithToolTip';
import { ButtonViewImageWithOrder } from '@/components/Order/Buttons/ButtonViewImageWithOrder';
import { TableActionButtonsShell } from '@/components/Table/TableActionButtonsShell';
import { TableRefetchButton } from '@/components/Table/TableRefetchButton';
import { TableSVGIcon } from '@/components/Table/TableSVGIcon';
import { HOTKEYS } from '@/config';
import { useAppSelector, useKeybinds, useTranslate } from '@/hooks';
import { useButtonImage } from '@/hooks/result/useButtonImage';
import { TABLE_EXAMINATION } from '@/stores/table/tableInitialState';
import { getCurrentSelectedRow } from '@/stores/table/tableSelectors';
import { IOrderDTO } from '@/types/dto';

import { CreateOrderActionButton } from './CreateOrderActionButton';
import { MergeStudyActionButton } from './MergeStudyActionButton';

type OrderTableActionButtonsProps = {
  refetch?: () => void;
};

export const ExaminationActionButton = (props: OrderTableActionButtonsProps) => {
  const { refetch } = props;
  const rowSelected = useAppSelector(getCurrentSelectedRow<IOrderDTO>(TABLE_EXAMINATION));
  const translate = useTranslate();
  const { onClick: openImageInNewTab } = useButtonImage({ order: rowSelected });

  /**
   * HOTKEYS
   */
  useKeybinds(
    HOTKEYS.VIEW_IMAGE.key,
    () => {
      openImageInNewTab();
    },
    { disabled: !rowSelected },
  );

  // REFRESH
  useKeybinds(HOTKEYS.REFRESH.key, () => {
    refetch && refetch();
  });

  return (
    <TableActionButtonsShell
      ActionsButton={
        <>
          <ButtonViewImageWithOrder order={rowSelected} />
          {/**
           * Chuyển ca
           * tính năng chưa hoạt động
           */}
          <IconButtonWithToolTip
            title={translate.buttons.labelWithKeyBind({
              buttonName: translate.buttons.transfer(),
              key: HOTKEYS.TRANSFER.title,
            })}
            onClick={() => {}}
            disabled
          >
            <TableSVGIcon
              IconComponent={ItechTransferIcon}
              IconComponentProps={{ color: 'disabled' }}
            />
          </IconButtonWithToolTip>

          {/**
           * Ghép ca chụp
           */}
          <MergeStudyActionButton order={rowSelected} />

          {/**
           * Tạo chỉ định
           */}
          <CreateOrderActionButton />

          {refetch && <TableRefetchButton refetch={refetch} enableKeybind />}
        </>
      }
    />
  );
};
