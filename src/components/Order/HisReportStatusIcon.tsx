import { Stack } from '@mui/material';
import React from 'react';

import { useTranslate } from '@/hooks';
import { HIS_REPORT_STATUS_TYPE } from '@/types/dto';

import { ItechHisIcon } from '../../assets/icon';
import { MyTooltip } from '../Elements/Tooltip/MyTooltip';

const ICON_SIZE = '0.8rem';

export const HisReportStatusIcon = ({
  status,
  isApproved,
}: {
  status: `${HIS_REPORT_STATUS_TYPE}`;
  isApproved: boolean;
}) => {
  const translate = useTranslate();
  const StatusIcon = (status: `${HIS_REPORT_STATUS_TYPE}`) => {
    switch (status) {
      case 'NOT_READY':
        return <ItechHisIcon sx={{ fontSize: ICON_SIZE, color: '#2957A4' }} />;
      case 'FAILED':
        return <ItechHisIcon sx={{ fontSize: ICON_SIZE }} color="error" />;
      case 'SENDING':
        return (
          <ItechHisIcon sx={{ fontSize: ICON_SIZE, color: '#ED6C02' }} color="error" />
        );
      case 'SUCCEEDED':
        return <></>;
    }
  };
  return (
    <MyTooltip
      title={translate.resources.order.hisReportStatusMessage({
        status: status,
      })}
    >
      {isApproved ? <Stack alignItems={'center'}> {StatusIcon(status)}</Stack> : <></>}
    </MyTooltip>
  );
};
