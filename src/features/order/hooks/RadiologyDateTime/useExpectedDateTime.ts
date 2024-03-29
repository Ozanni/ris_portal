import { useAppSelector } from '@/hooks';
import { selectRadiologyReportSubmission } from '@/stores/OrderRadiology';
import { BaseEntity } from '@/types';
import { IOrderRequestDTO } from '@/types/dto';
import { itechDateTimeToDayjs } from '@/utils/dateUtils';

/**
 * Trả ra giá trị thời gian để hiển thị ở trường Duyệt KQ
 */
export const useExpectedDateTime = ({
  request,
  orderID,
  isDisabledField,
}: {
  request: IOrderRequestDTO;
  orderID: BaseEntity['id'];
  isDisabledField: boolean;
}) => {
  const reportSubmission = useAppSelector(
    selectRadiologyReportSubmission({ orderID, requestID: request.id }),
  );
  /**
   * Giá trị hiển thị ở trường Thời gian dự kiến KQ khi disabled,
   */
  const disabledValue =
    request && request.finalApprovedTime
      ? itechDateTimeToDayjs(request.finalApprovedTime)
      : null;
  /**
   * Giá trị hiển thị ở trường Thời gian dự kiến KQ khi active,
   */
  const activeValue =
    request && request.finalApprovedTime
      ? itechDateTimeToDayjs(request.finalApprovedTime)
      : itechDateTimeToDayjs(reportSubmission?.approvedTime ?? null);

  return isDisabledField ? disabledValue : activeValue;
};
