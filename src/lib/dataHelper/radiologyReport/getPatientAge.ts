import { IPatientDTO } from '@/types/dto';
import { getCurrentTime, itechDateToDayjs } from '@/utils/dateUtils';

export const getPatientAge = (age?: IPatientDTO['birthDate']) => {
  if (age) {
    const numYear = getCurrentTime().diff(itechDateToDayjs(age), 'year');
    return numYear;
  }
  return 0;
};
