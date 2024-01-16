import { PurchaseItemProps } from "@/src/interface/payment_props";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  templatesData: any[];
  templatesSingleValue: any;
  tokenValue: boolean;
  userData: any;
  customerId: string;
  serverSideToken: string;
  setPurchaseItems: PurchaseItemProps[];
  saveCardData: any;
}

const initialState: DataState = {
  templatesData: [],
  templatesSingleValue: {},
  tokenValue: false,
  userData: null,
  customerId: "",
  serverSideToken: "",
  setPurchaseItems: [],
  saveCardData: [],
};

const dataSlice = createSlice({
  name: "templatesDatas",
  initialState,
  reducers: {
    tokenValue: (state, action: PayloadAction<boolean>) => {
      state.tokenValue = action.payload;
    },
    userData: (state, action: PayloadAction<boolean>) => {
      state.userData = action.payload;
    },
    customerId: (state, action: PayloadAction<string>) => {
      state.customerId = action.payload;
    },
    serverSideToken: (state, action: PayloadAction<string>) => {
      state.serverSideToken = action.payload;
    },
    templatesData: (state, action: PayloadAction<any>) => {
      state.templatesData = action.payload;
    },
    setPurchaseItems: (state, action: PayloadAction<PurchaseItemProps[]>) => {
      state.setPurchaseItems = action.payload;
    },
    saveCardData: (state, action: PayloadAction<PurchaseItemProps[]>) => {
      state.saveCardData = action.payload;
    },
  },
});

export const {
  templatesData,
  tokenValue,
  userData,
  customerId,
  serverSideToken,
  setPurchaseItems,
  saveCardData,
} = dataSlice.actions;
export default dataSlice.reducer;
