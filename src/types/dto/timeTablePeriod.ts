import { BaseEntity } from '@/types';

export type ITimeTablePeriodDTOBase = {
  consecutive: boolean;
  enabled: boolean;
  fromTime: string;
  hospitalID: string;
  index: number;
  name: string;
  toTime: string;
  uuid: string;
  voided: boolean;
};

export type ITimeTablePeriodDTO = BaseEntity & Partial<ITimeTablePeriodDTOBase>;
