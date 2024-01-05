export type ExampleDataType = {
  title: string;
  description: string;
};

export enum UserConfigTab {
  CommonConfig = 'CommonConfig',
  ShortcutConfig = 'ShortcutConfig',
}

export const exampleData = [
  {
    title: 'Tự động nhận ca',
    description: 'Khi mở ca, hệ thống sẽ tự động nhận ca chụp để viết kết quả',
  },
  {
    title: 'Tự động xem ảnh',
    description: 'Khi mở ca, hệ thống sẽ tự động hiển thị màn hình viewer xem hình chụp',
  },
  {
    title: 'Viết kết quả nhanh',
    description: 'Hiển thị màn hình viết kết quả trên cùng màn hình danh sách ca chụp',
  },
  {
    title: 'Tự động chọn mẫu kết quả',
    description: 'Khi nhận ca viết kết quả, hệ thống tự động chọn mẫu kết quả ưu tiên',
  },
  {
    title: 'Ưu tiên chọn mẫu cá nhân',
    description: 'Khi nhận ca viết kết quả, hệ thống tự ưu tiên tìm mẫu kết quả cá nhân',
  },
  {
    title: 'Mở ca khi double click vào chỉ định',
    description:
      'Khi double-click vào ca chụp, hệ thống sẽ bật tab mở ca. Mặc định bật viewer',
  },
];
