import { UserClockEditIcon } from '@/assets/icon';
import { IconButtonWithToolTip } from '@/components/Elements/Buttons/IconButtonWithToolTip';
import { TableActionButtonsShell } from '@/components/Table/TableActionButtonsShell';
import { useAppDispatch } from '@/hooks';

import { useTimetableFunctions } from '../../providers/TimeTableProvider';
import { setCurrentPeriodID } from '../../stores/currentPeriodIdSlice';

export type UsersCellActionButtonType = {
  periodID: number;
};
export const UsersCellActionButton = (props: UsersCellActionButtonType) => {
  const timetableFunction = useTimetableFunctions();
  const dispatch = useAppDispatch();
  return (
    <>
      <TableActionButtonsShell
        ActionsButton={
          <IconButtonWithToolTip
            title={'Sửa lịch'}
            onClick={() => {
              timetableFunction.openModalUpdateTimetable();
              dispatch(setCurrentPeriodID(props.periodID));
            }}
            color="primary"
          >
            <UserClockEditIcon />
          </IconButtonWithToolTip>
        }
      />
      {/* <ModalUpdateTimetable {...disclosure} {...props} /> */}
    </>
  );
};
