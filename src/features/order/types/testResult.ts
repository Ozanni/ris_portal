import { BaseEntity } from '@/types';

export type ITestResultFilterDTO = {
  pid: BaseEntity['id'];
  startDate: string;
  endDate: string;
};
