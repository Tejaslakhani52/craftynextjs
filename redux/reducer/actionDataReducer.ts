import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  openSidebar: boolean;
}

const initialState: DataState = {
  openSidebar: false,
};

const dataActions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    openSidebar: (state, action: PayloadAction<any>) => {
      state.openSidebar = action.payload;
    },
  },
});

export const { openSidebar } = dataActions.actions;
export default dataActions.reducer;
