import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  openSidebar: boolean;
  openMobileMenubar: boolean;
  openTempModal: boolean;
  modalClosePath: any;
  tempId: string;
}

const initialState: DataState = {
  openSidebar: false,
  openMobileMenubar: false,
  openTempModal: false,
  modalClosePath: "",
  tempId: "",
};

const dataActions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    openSidebar: (state, action: PayloadAction<boolean>) => {
      state.openSidebar = action.payload;
    },
    openMobileMenubar: (state, action: PayloadAction<boolean>) => {
      state.openMobileMenubar = action.payload;
    },
    openTempModal: (state, action: PayloadAction<boolean>) => {
      state.openTempModal = action.payload;
    },
    modalClosePath: (state, action: PayloadAction<any>) => {
      state.modalClosePath = action.payload;
    },
    tempId: (state, action: PayloadAction<any>) => {
      state.tempId = action.payload;
    },
  },
});

export const {
  openSidebar,
  openMobileMenubar,
  openTempModal,
  modalClosePath,
  tempId,
} = dataActions.actions;
export default dataActions.reducer;
