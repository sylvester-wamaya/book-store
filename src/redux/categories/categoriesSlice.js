import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categories.length < 1) {
        return 'Under construction';
      }
      return state.categories;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
