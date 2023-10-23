import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  templatesData: any[];
  templatesSingleValue: any;
}

const initialState: DataState = {
  templatesData: [],
  templatesSingleValue: {},
};

const dataSlice = createSlice({
  name: "templatesDatas",
  initialState,
  reducers: {
    templatesData: (state, action: PayloadAction<any>) => {
      state.templatesData = action.payload;
    },
  },
});

export const { templatesData } = dataSlice.actions;
export default dataSlice.reducer;
