import React from 'react';

import ItechTransferIcon from '@/assets/icon/TransferIcon';
import { IconButtonWithToolTip } from '@/components/Elements/Buttons/IconButtonWithToolTip';
import { TableSVGIcon } from '@/components/Table/TableSVGIcon';
import { useDisclosure, useTranslate } from '@/hooks';
import { IOrderDTO } from '@/types/dto';

import { TransferStudyModal } from '../Modal/TransferStudy/TransferStudyModal';

/**
 * Nút chuyển ca + popup chuyển ca
 */
export const TransferButton = ({ order }: { order: IOrderDTO }) => {
  const translate = useTranslate();
  const disclosure = useDisclosure();
  return (
    <>
      <IconButtonWithToolTip
        title={translate.buttons.transfer()}
        onClick={disclosure.open}
        color="inherit"
        disabled={!order.study}
      >
        <TableSVGIcon IconComponent={ItechTransferIcon} />
      </IconButtonWithToolTip>
      {disclosure.isOpen && <TransferStudyModal disclosure={disclosure} />}
    </>
  );
};
