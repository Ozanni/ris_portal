// eslint-disable-next-line import/no-unresolved
import { TDocumentDefinitions } from 'pdfmake/interfaces';

import { ISummaryApproverDataDTO } from '@/types/dto/analytics';
import { DISPLAY_FORMAT, getCurrentDate, itechDateToDayjs } from '@/utils/dateUtils';

export const getSummaryApproverDoc = ({
  data,
  date,
}: {
  data: ISummaryApproverDataDTO;
  date: { fromDate: string; toDate: string };
}): TDocumentDefinitions => {
  const listModalityType: string[] = [];

  data.forEach((item) => {
    Object.keys(item.details).forEach((modalityType) => {
      if (!listModalityType.includes(modalityType)) {
        listModalityType.push(modalityType);
      }
    });
  });

  return {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [20, 20, 20, 20],
    info: {
      title: 'Thong-ke-dich-vu-theo-may-chup',
    },
    content: [
      {
        text: 'SỞ Y TẾ \nBệnh viện Bình Định\nKhoa Chẩn Đoán Hình Ảnh',
        fontSize: 14,
        lineHeight: 1.3,
        margin: [0, 0, 0, 16],
        bold: true,
      },
      {
        text: 'THỐNG KÊ SỐ CA THEO BÁC SĨ ĐỌC',
        fontSize: 16,
        alignment: 'center',
        italics: true,
        bold: true,
        margin: [0, 0, 0, 16],
      },
      {
        text: `Từ ngày ${itechDateToDayjs(date.fromDate)?.format(
          DISPLAY_FORMAT.date,
        )} đến ngày ${itechDateToDayjs(date.toDate)?.format(DISPLAY_FORMAT.date)} `,
        fontSize: 14,
        alignment: 'center',
        italics: true,
        margin: [0, 0, 0, 16],
      },
      {
        style: 'table',
        table: {
          headerRows: 1,
          // widths: [40, 100, 100, 100, 'auto   ', 'auto   '],
          widths: [
            'auto',
            100,
            'auto',
            ...listModalityType.map((item) => 'auto'),
            'auto',
          ],
          body: [
            [
              {
                text: 'STT',
                fontSize: 14,
                alignment: 'center',
                bold: true,
                margin: [4, 4, 4, 4],
              },

              {
                text: 'Tên bác sĩ',
                fontSize: 14,
                bold: true,
                alignment: 'center',
                margin: [4, 4, 4, 4],
              },
              {
                text: 'Đơn vị',
                fontSize: 14,
                bold: true,
                alignment: 'center',
                margin: [4, 4, 4, 4],
              },
              ...listModalityType.map((item) => {
                return {
                  text: item,
                  fontSize: 14,
                  bold: true,
                  alignment: 'center',
                  margin: [4, 4, 4, 4],
                };
              }),
              {
                text: 'Tổng số ca',
                bold: true,
                fontSize: 14,
                alignment: 'center',
                margin: [4, 4, 4, 4],
              },
            ],
            ...data.map((item, index) => {
              return [
                { text: index + 1, style: 'row', alignment: 'center' },
                { text: item.approver.fullname, style: 'row' },
                { text: 'Lần', style: 'row', alignment: 'center' },
                ...listModalityType.map((modalityType) => {
                  return {
                    text: item.details[modalityType] ?? 0,
                    fontSize: 14,
                    alignment: 'center',
                    margin: [4, 4, 4, 4],
                  };
                }),
                { text: item.total, style: 'row', alignment: 'center' },
              ];
            }),
          ],
        },
      },
      {
        style: 'tableExample',
        table: {
          headerRows: 1,
          widths: ['auto', '*', 'auto'],
          body: [
            [
              {
                text: 'NGƯỜI LẬP BIỂU\n (Ký và ghi rõ họ tên)',
                style: 'tableFooter',
                border: [false, false, false, false],
                alignment: 'center',
                bold: true,
                margin: [10, 45, 0, 0],
                lineHeight: 1.5,
              },
              {
                text: '',
                style: 'tableFooter',
                border: [false, false, false, false],
                alignment: 'center',
              },
              {
                text: `Ngày ${getCurrentDate().format(
                  DISPLAY_FORMAT.date,
                )} \nTRƯỞNG KHOA CHẨN ĐOÁN HÌNH ẢNH\n(Ký và ghi rõ họ tên)`,
                style: 'tableFooter',
                border: [false, false, false, false],
                alignment: 'center',
                lineHeight: 1.5,
                bold: true,
                margin: [0, 20, 0, 0],
              },
            ],
          ],
        },
      },
    ],
    styles: {
      row: {
        fontSize: 12,
        margin: [4, 4, 4, 4],
      },
      table: {
        marginLeft: 10,
        marginRight: 10,
      },
      tableFooter: {
        fontSize: 14,
      },
    },
  };
};