import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  categoryTempData: any;
  categoryDataPage: number;
  setPurchaseItems: any;
}

const initialState: DataState = {
  categoryTempData: [],
  categoryDataPage: 1,
  setPurchaseItems: "",
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
    setPurchaseItems: (state, action: PayloadAction<any>) => {
      state.setPurchaseItems = action.payload;
    },
  },
});

export const { categoryTempData, categoryDataPage, setPurchaseItems } =
  templatesDataStore.actions;
export default templatesDataStore.reducer;
