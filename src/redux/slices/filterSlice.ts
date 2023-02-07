import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "Popularity",
    sortProperty: "raiting",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action:PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setCurrentPage(state, action:PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
