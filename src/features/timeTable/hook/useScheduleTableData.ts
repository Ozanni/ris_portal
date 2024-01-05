import dayjs from 'dayjs';

import { useGetListTimetableQuery } from '@/api/timeTable';
import { useAppSelector, useTranslate } from '@/hooks';
import { TABLE_SCHEDULE } from '@/stores/table/tableInitialState';
import { getCurrentTableQuery } from '@/stores/table/tableSelectors';
import { TimeTableDatagrid } from '@/types/dto/timeTable';
import { getCurrentDate, itechDateTimeToDayjs } from '@/utils/dateUtils';

import { SideBarTimetableFilter } from '../components/SidebarCalendar';

export const TIMETABLE_FORMAT = 'YYYYMMDD';

type WeekdayType = '1' | '2' | '3' | '4' | '5' | '6' | '7';

/**
 * Xử lý để trả ra data dùng cho bảng Lịch làm việc
 */
export const useScheduleTableData = () => {
  const query = useAppSelector(
    getCurrentTableQuery<SideBarTimetableFilter>(TABLE_SCHEDULE),
  );
  const translate = useTranslate();
  const sidebarSelectedDay = query?.filter.sidebarSelectedDay
    ? itechDateTimeToDayjs(query?.filter.sidebarSelectedDay)
    : getCurrentDate();

  const startOfWeek = sidebarSelectedDay
    ? sidebarSelectedDay.startOf('week').toDate()
    : null;
  const endOfWeek = sidebarSelectedDay ? sidebarSelectedDay.endOf('week').toDate() : null;

  const fromDate = dayjs(startOfWeek).format(TIMETABLE_FORMAT);
  const toDate = dayjs(endOfWeek).format(TIMETABLE_FORMAT);

  const { data } = useGetListTimetableQuery(
    {
      filter: { userIDs: query?.filter.userIDs, fromDate, toDate },
    },
    { skip: !sidebarSelectedDay },
  );

  const timetableListData: TimeTableDatagrid[] = [];

  for (let index = 0; index < 7; index++) {
    const date = sidebarSelectedDay
      ? sidebarSelectedDay.startOf('week').add(index, 'day').toDate()
      : null;
    timetableListData.push({
      id: dayjs(date).format(TIMETABLE_FORMAT),
      timetable: data?.list.find(
        (item) => item.id === dayjs(date).format(TIMETABLE_FORMAT),
      )?.timetable,
      dateOfWeek: translate.resources.timetable.weekday({
        weekday: (index + 1).toString() as WeekdayType,
      }),
    });
  }

  return timetableListData;
};
