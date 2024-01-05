import { BaseEntity } from '@/types';
import { IUserDTO } from '@/types/dto';

export type ITimeTableDTO = {
  /**
   * id là ngày dạng YYYYMMDD
   */
  id: string;
  timetable?: { [key: number]: IUserDTO[] };
};

export type ITimeTableSearchDTO = Partial<{
  userIDs: BaseEntity['id'][];
  ids: BaseEntity['id'][];
  fromDate: string;
  toDate: string;
}>;

export type ITimeTableUpdateDTO = Partial<{
  userIDs: BaseEntity['id'][];
  periodID: BaseEntity['id'];
}> & { id: string };

export type TimeTableDatagrid = ITimeTableDTO & { dateOfWeek?: string };
