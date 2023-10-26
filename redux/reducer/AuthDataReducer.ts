import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  templatesData: any[];
  templatesSingleValue: any;
  tokenValue: boolean;
}

const initialState: DataState = {
  templatesData: [],
  templatesSingleValue: {},
  tokenValue: false,
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
  },
});

export const { templatesData, tokenValue } = dataSlice.actions;
export default dataSlice.reducer;
