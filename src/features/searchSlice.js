import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  count: 0,
  request: [],
};

export const scheardSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    fetch: {
      reducer(state, action) {
        state.request.push(action.payload);
      },
      prepare(url) {
        return {
          payload: {
            url,
          },
        };
      },
    },
  },
});

export const { increment, fetch } = scheardSlice.actions;

export const selectScheard = (state) => state.search.isScheard;
export default scheardSlice.reducer;
