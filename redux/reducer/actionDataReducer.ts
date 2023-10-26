import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  openSidebar: boolean;
  openMobileMenubar: boolean;
}

const initialState: DataState = {
  openSidebar: false,
  openMobileMenubar: false,
};

const dataActions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    openSidebar: (state, action: PayloadAction<any>) => {
      state.openSidebar = action.payload;
    },
    openMobileMenubar: (state, action: PayloadAction<any>) => {
      state.openMobileMenubar = action.payload;
    },
  },
});

export const { openSidebar, openMobileMenubar } = dataActions.actions;
export default dataActions.reducer;
