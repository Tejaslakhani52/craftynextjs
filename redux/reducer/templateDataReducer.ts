import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  categoryTempData: any;
  categoryDataPage: number;
}

const initialState: DataState = {
  categoryTempData: [],
  categoryDataPage: 1,
};

const templatesDataStore = createSlice({
  name: "actions",
  initialState,
  reducers: {
    categoryTempData: (state, action: PayloadAction<any>) => {
      state.categoryTempData = action.payload;
    },
    categoryDataPage: (state, action: PayloadAction<number>) => {
      state.categoryDataPage = action.payload;
    },
  },
});

export const { categoryTempData, categoryDataPage } =
  templatesDataStore.actions;
export default templatesDataStore.reducer;
