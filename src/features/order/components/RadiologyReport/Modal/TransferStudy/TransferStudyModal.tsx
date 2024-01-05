import { Modal } from '@mui/material';
import { useState } from 'react';

import { useGetListStoreQuery } from '@/api/store';
import { AppModalContent } from '@/components/Elements/Modal/AppModalContent';
import { useDisclosure, useTranslate } from '@/hooks';
import { useNotifyModal, useNotifySnackbar } from '@/providers/NotificationProvider';
import { BaseEntity } from '@/types';

import { TransformStudyModalContent } from './TransformStudyModalContent';

export const TransferStudyModal = ({
  disclosure,
}: {
  disclosure: ReturnType<typeof useDisclosure>;
}) => {
  const translate = useTranslate();
  const { close, isOpen, open } = disclosure;
  const notify = useNotifyModal();
  const notifySnackBar = useNotifySnackbar();
  const { data } = useGetListStoreQuery({ filter: { type: 'TRANSFER' } });
  const stores = data?.list ?? [];
  const [addressID, setAddressID] = useState(stores.length ? stores[0].id : undefined);
  const onChangeTransferAddress = (id: BaseEntity['id']) => {
    setAddressID(id);
  };

  const onSubmit = () => {
    const store = stores.find((item) => item.id === addressID);
    notify({
      message: `Đồng ý chuyển ca chụp đến  ${store?.name} ?`,
      options: {
        variant: 'info',
        onConfirm: () => {
          notifySnackBar({
            message: `Đang thực hiện chuyển hình ảnh DICOM của ca chụp sang kho ${store?.name}`,
            options: { variant: 'info' },
          });
          close();
        },
        onCancel: () => {},
      },
    });
  };
  return (
    <Modal open={isOpen}>
      <AppModalContent
        title={translate.resources.store.transferDicom()}
        BodyComponent={
          <TransformStudyModalContent
            onChangeTransferAddress={onChangeTransferAddress}
            stores={stores}
            addressID={addressID}
          />
        }
        handleClose={close}
        handleConfirm={onSubmit}
        BoxBodyProps={{ minHeight: '10vh' }}
        confirmLabel={translate.buttons.transfer()}
      />
    </Modal>
  );
};
