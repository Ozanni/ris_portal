import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';

import { useAppSelector, useTranslate } from '@/hooks';
import { TABLE_SCHEDULE } from '@/stores/table/tableInitialState';
import { getCurrentTableQuery } from '@/stores/table/tableSelectors';
import { DISPLAY_FORMAT, getCurrentDate, itechDateTimeToDayjs } from '@/utils/dateUtils';

import { SideBarTimetableFilter } from '../SidebarCalendar';

export const WeekInfomation = () => {
  const translate = useTranslate();
  const query = useAppSelector(
    getCurrentTableQuery<SideBarTimetableFilter>(TABLE_SCHEDULE),
  );
  const sidebarSelectedDay = query?.filter.sidebarSelectedDay
    ? itechDateTimeToDayjs(query?.filter.sidebarSelectedDay)
    : getCurrentDate();

  const startOfWeek = sidebarSelectedDay
    ? sidebarSelectedDay.startOf('week').toDate()
    : null;
  const endOfWeek = sidebarSelectedDay ? sidebarSelectedDay.endOf('week').toDate() : null;

  return (
    <Typography>
      {translate.resources.timetable.weekFrom()} :{' '}
      {startOfWeek && dayjs(startOfWeek).format(DISPLAY_FORMAT.date)}{' '}
      {translate.resources.timetable.weekTo()} :{' '}
      {endOfWeek && dayjs(endOfWeek).format(DISPLAY_FORMAT.date)}
    </Typography>
  );
};
