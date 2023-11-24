import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  openSidebar: boolean;
  openMobileMenubar: boolean;
  openTempModal: boolean;
  enterAccount: boolean;
  mainLoader: boolean;
  modalClosePath: any;
  tempId: string;
}

const initialState: DataState = {
  openSidebar: true,
  openMobileMenubar: false,
  openTempModal: false,
  enterAccount: false,
  mainLoader: true,
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
    enterAccount: (state, action: PayloadAction<boolean>) => {
      state.enterAccount = action.payload;
    },
    mainLoader: (state, action: PayloadAction<boolean>) => {
      state.mainLoader = action.payload;
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
  enterAccount,
  mainLoader,
  tempId,
} = dataActions.actions;
export default dataActions.reducer;
