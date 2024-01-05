import { useEffect, useState } from 'react';

import { useGetTemplate } from '@/hooks/radiology/useGetTemplate';
import { selectRadiologyReportImages } from '@/stores/OrderRadiology';
import { BaseEntity } from '@/types';
import { ILayoutDTO } from '@/types/dto';

import { useAppSelector } from '..';

/**
 * Hook dùng cho component RadiologyReportImageSelectField
 */
export const useRadiologySelectImageField = ({
  orderID,
  requestID,
}: {
  orderID: BaseEntity['id'];
  requestID: BaseEntity['id'];
}) => {
  const [currentTemplate, setCurrentTemplate] = useState<ILayoutDTO>();
  const { getTemplate } = useGetTemplate(orderID);

  const currentImageReportImage = useAppSelector(
    selectRadiologyReportImages({ orderID, requestID }),
  );

  useEffect(() => {
    const getCurentTemplate = async () => {
      const template = await getTemplate();
      setCurrentTemplate(template);
    };
    getCurentTemplate();
  }, [getTemplate]);

  return {
    currentTemplate,
    numberImages: currentImageReportImage
      ? Object.values(currentImageReportImage).length
      : 0,
  };
};
