import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: null,
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //----------------------------------------------------------------
    findProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    findProductSuccess: (state, action) => {
      state.isFetching = false;
      state.currentProduct = action.payload;
    },
    findProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  findProductStart,
  findProductSuccess,
  findProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
