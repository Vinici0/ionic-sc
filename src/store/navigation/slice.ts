import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  showTabs: true,
};

const navagationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setShowTabs: (state, action) => {
      state.showTabs = action.payload;
    },
  },
});

export const { setShowTabs } = navagationSlice.actions;
export const navagatoinSelector = (state: RootState) => state.navigationReducer;
export default navagationSlice.reducer;
