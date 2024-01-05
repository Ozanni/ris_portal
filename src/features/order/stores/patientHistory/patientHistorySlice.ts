import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOrderReportKey } from '@/stores/OrderRadiology';
import { RootState } from '@/stores/redux';
import { Nullable } from '@/types';

export const PATIENT_HISTORY = 'patientHistory';

const initialState: Nullable<IOrderReportKey> = {
  orderID: null,
  requestID: null,
};
export const patientHistorySlice = createSlice({
  name: PATIENT_HISTORY,
  initialState,
  reducers: {
    setPatientHistoryKey(state, action: PayloadAction<Nullable<IOrderReportKey>>) {
      state.orderID = action.payload.orderID;
      state.requestID = action.payload.requestID;
    },
  },
});

export const { setPatientHistoryKey } = patientHistorySlice.actions;
export const patientHistoryReducer = patientHistorySlice.reducer;

export const selectPatientHistoryKey = (state: RootState) => state.patientHistory;
