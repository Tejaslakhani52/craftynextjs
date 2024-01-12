import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  templatesData: any[];
  templatesSingleValue: any;
  tokenValue: boolean;
  userData: any;
  customerId: string;
  serverSideToken: string;
}

const initialState: DataState = {
  templatesData: [],
  templatesSingleValue: {},
  tokenValue: false,
  userData: null,
  customerId: "",
  serverSideToken: "",
};

const dataSlice = createSlice({
  name: "templatesDatas",
  initialState,
  reducers: {
    templatesData: (state, action: PayloadAction<any>) => {
      state.templatesData = action.payload;
    },
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
  },
});

export const {
  templatesData,
  tokenValue,
  userData,
  customerId,
  serverSideToken,
} = dataSlice.actions;
export default dataSlice.reducer;
