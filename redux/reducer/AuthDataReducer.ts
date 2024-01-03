import { AuthStateType } from "@/interface/stateType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthStateType = {
  templatesData: [],
  templatesSingleValue: {},
  tokenValue: false,
  userData: null,
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
  },
});

export const { templatesData, tokenValue, userData } = dataSlice.actions;
export default dataSlice.reducer;
