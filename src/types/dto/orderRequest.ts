import { BaseEntity, Nullable } from '@/types';
import {
  IConsumableDTO,
  IModalityDTO,
  IProcedureDTO,
  IRadiologyReportDTO,
} from '@/types/dto';

import { ICloudUserDTO, IUserDTO } from './user';

export enum HIS_REPORT_STATUS_TYPE {
  NOT_READY = 'NOT_READY',
  SENDING = 'SENDING',
  FAILED = 'FAILED',
  SUCCEEDED = 'SUCCEEDED',
}

/**
 * Yêu cầu chụp (thay cho service)
 */
export type IOrderRequestDTOBase = {
  /**
   * Vật tư tiêu hao
   */
  consumables: IConsumableDTO[];
  /**
   * Thời gian duyệt
   */
  finalApprovedTime: string;
  /**
   * Bác sĩ duyệt
   */
  finalApprover: ICloudUserDTO;
  /**
   * Bác sĩ duyệt
   */
  finalApproverID: ICloudUserDTO['id'];
  /**
   * final html report id
   */
  finalHtmlReportID: number;
  /**
   * ID kết quả
   */
  finalReportID: BaseEntity['id'];
  /**
   * final Pdf report id
   */
  finalSignedReportID: number;
  /**
   * Thời gian ký số
   */
  finalSignedTime: string;
  /**
   * Người ký
   */
  finalSigner: IUserDTO;

  hospitalID: string;

  /**
   * Mã ICD
   */
  icdCode: string;
  /**
   * Máy chụp
   */
  modality: IModalityDTO;
  /**
   * ID máy chụp
   */
  modalityID: BaseEntity['id'];
  /**
   * Tổng số vật tư
   */
  numOfConsumables: BaseEntity['id'];
  /**
   * Thời gian thực hiện
   */
  operationTime: string;
  /**
   * Các KTV
   */
  operators: ICloudUserDTO[];
  /**
   * orderID
   */
  orderID: BaseEntity['id'];
  /**
   * Dịch vụ chụp
   */
  procedure: IProcedureDTO;
  /**
   * id các dịch vụ chụp
   */
  procedureID: BaseEntity['id'];
  /**
   * Kết quả
   */
  reports: IRadiologyReportDTO[];
  /**
   * Mã yêu cầu
   */
  requestedNumber: string;
  uuid: string;
  /**
   * Người đọc dự kiến
   */
  expectedReporter: ICloudUserDTO;
  /**
   * Trạng thái kí số
   */
  hisReportStatus: `${HIS_REPORT_STATUS_TYPE}`;
};
export type IOrderRequestDTO = Nullable<IOrderRequestDTOBase> & BaseEntity;

export type IOrderRequestDTOUpdate = Partial<{
  icdCode: string;
  modalityID: BaseEntity['id'];
  procedureID: BaseEntity['id'];
  requestedNumber: string;
  requestedTime: string;
  technicianID: BaseEntity['id'];
  operationTime: string;
  expectedReporterID: BaseEntity['id'];
  finalApprovedTime: string;
}> &
  BaseEntity;
