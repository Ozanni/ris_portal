import { useCallback, useState } from 'react';

import { useTranslate } from '@/hooks';
import { usePrintRadiologyReport } from '@/hooks/order/usePrintRadiologyReport';
import { printPDF } from '@/lib/dataHelper/printPDF';
import { useGenericNotifySnackbar } from '@/providers/NotificationProvider';
import { BaseEntity } from '@/types';
import {
  ILayoutDTO,
  IOrderDTO,
  IOrderRequestDTO,
  IRadiologyReportDTO,
} from '@/types/dto';

import { useGetTemplate } from '../radiology/useGetTemplate';
import { ImageDataState } from '../useSelectDicomImage';

import { PRINT_MODAL_OPEN_MODE } from './printModal';
import { InformationPrintFormData } from './usePrintReportButton';

export enum StatusTemplate {
  SUCCESS = 'SUCCESS',
  NO_TEMPLATE = 'NO_TEMPLATE',
}

type PrintData = {
  blobURL?: string;
  blobPdf?: Blob;
};

type Template = {
  templateID?: ILayoutDTO['id'];
  numOfImages?: ILayoutDTO['numOfImages'];
};

type Options = {
  order: IOrderDTO;
  requestID?: IOrderRequestDTO['id'];
  reportID?: BaseEntity['id'];
};

/**
 * Use ONLY for PrintPreviewRadiologyReportModal
 */
export const useSlowPrintRadiologyReport = (options: Options) => {
  const { order: currentOrder, requestID = 0, reportID = 0 } = options;
  const translate = useTranslate();

  // const currentOrderID = orderID ?? rowSelected;
  const [printData, setPrintData] = useState<PrintData | undefined>();
  const { getTemplate } = useGetTemplate(currentOrder.id);
  const [isActiveActionButton, setIsActiveActionButton] = useState<boolean>(false);
  const [currentTemplate, setCurrentTemplate] = useState<Template | undefined>();
  const [modalMode, setModalMode] = useState<PRINT_MODAL_OPEN_MODE>(
    PRINT_MODAL_OPEN_MODE.PRINT_ONLY,
  );
  const { getFinalPdfBlob, exportReportPdf } = usePrintRadiologyReport({
    orderID: currentOrder.id,
    requestID,
  });

  const currentRequest = currentOrder?.requests?.find((item) => item.id === requestID);

  const notifySignReportSuccess = useGenericNotifySnackbar(
    'success',
    translate.pages.orderReport.actions.signReport(),
  );
  const notifySignReportError = useGenericNotifySnackbar(
    'error',
    translate.pages.orderReport.actions.signReport(),
  );

  /**
   * Update pdf blob
   */
  const updatePDFBlob = useCallback(
    async ({
      formData,
      currentReportID,
      order,
      images,
      printOnly = false,
    }: {
      formData?: InformationPrintFormData;
      currentReportID?: IRadiologyReportDTO['id'];
      order?: IOrderDTO;
      images?: ImageDataState[];
      printOnly?: boolean;
    }) => {
      if (currentRequest) {
        const reportID = currentReportID ?? currentRequest.finalReportID;
        const template = await getTemplate();
        if (template && currentOrder && currentOrder.patient && reportID) {
          const templateID: ILayoutDTO['id'] = formData?.templateID ?? template.id;

          // const composeHTML = await getReportHTML(options);
          // const contentHTML = composeHTML.body.innerHTML;
          const blobPdf = await exportReportPdf({
            order: currentOrder,
            reportID,
            request: currentRequest,
            templateID,
            selectedImages: images,
            formData,
          });
          // /**
          //  * Using for print button
          //  * Conditions: print status -> true and final pdf exist -> get pdf file from API
          //  */
          // if (
          //   printOnly &&
          //   currentRequest.finalPdfReport &&
          //   currentRequest.finalPdfReport.id
          // ) {
          //   blobPdf = await getFinalPdfBlob({
          //     orderID: order?.id ?? currentOrder.id,
          //     requestID,
          //     pdfID: currentRequest?.finalPdfReport?.id ?? 0,
          //     signed: false,
          //   });
          //   /**
          //    *If return true -> show buttons 'In trước', 'Đóng' and hide button 'Tạo và ký'
          //    * False -> hide buttons 'In trước', 'Đóng' and show button 'Tạo và ký'
          //    */
          //   setIsActiveActionButton(true);
          // } else {
          //   setIsActiveActionButton(
          //     currentRequest.finalReportID === currentReportID ||
          //       (!!currentRequest.finalPdfReport && !currentRequest.finalReportID),
          //   );
          //   blobPdf = await getPdfBlob({ contentHTML });
          // }

          const blobURL = URL.createObjectURL(blobPdf);
          setPrintData({ blobPdf, blobURL });
          setCurrentTemplate({ templateID, numOfImages: template.keyImageNames?.length });
        }
      }
    },
    [currentRequest, getTemplate, currentOrder, exportReportPdf],
  );

  const getValidateTemplateStatus = useCallback(async (): Promise<StatusTemplate> => {
    const template = await getTemplate();
    return template ? StatusTemplate.SUCCESS : StatusTemplate.NO_TEMPLATE;
  }, [getTemplate]);

  // const handleSignReport = useCallback(async () => {
  //   const template = await getTemplate();
  //   if (printData?.contentHTML) {
  //     const res = signReport({
  //       contentHTML: printData.contentHTML,
  //       templateID: template.id,
  //     });
  //     if ('error' in res) {
  //       notifySignReportError();
  //     } else {
  //       notifySignReportSuccess();
  //     }
  //   }
  //   setIsActiveActionButton(true);
  // }, [
  //   getTemplate,
  //   notifySignReportError,
  //   notifySignReportSuccess,
  //   printData?.contentHTML,
  //   signReport,
  // ]);

  /**
   * Open print dialog and sign report if possible
   */
  const handleConfirm = useCallback(() => {
    printData?.blobPdf && printPDF(printData.blobPdf);
    /**
     * Check if report is sign-able
     */
    // if (shouldSignReport) {
    //   handleSignReport();
    // }
  }, [printData?.blobPdf]);

  return {
    currentOrder,
    printData,
    updatePDFBlob,
    currentRequest,
    handleConfirm,
    // handleSignReport,
    getValidateTemplateStatus,
    isActiveActionButton,
    modalMode,
    setModalMode,
    currentTemplate,
    setCurrentTemplate,
    reportID,
  };
};
