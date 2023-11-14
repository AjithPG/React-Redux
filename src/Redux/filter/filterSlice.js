import { createSlice } from "@reduxjs/toolkit";
import generate from "../../helpers/data";

export const filterSlice = createSlice({
  name: "filterData",
  initialState: {
    products: [],
    appliedFilters: [],
    filteredProducts: [],
  },
  reducers: {
    loadData: (state, action) => {
      let count = action.payload.count;
      let productItem = generate(count);

      return {
        ...state,
        products: productItem,
        filteredProducts: productItem,
      };
    },
    filterByValue: (state, action) => {
      let newState = Object.assign({}, state);
      let value = action.payload.value.toLowerCase();
      let filteredValues = state.products.filter((product) => {
        return (
          product.name.toLowerCase().includes(value) ||
          product.designer.toLowerCase().includes(value)
        );
      });

      let appliedFilters = state.appliedFilters;

      if (value) {
        newState.filteredProducts = filteredValues;
        newState.filteredCount = newState.filteredProducts.length;
      } else {
        if (appliedFilters.length === 0) {
          newState.filteredProducts = newState.products;
          newState.filteredCount = newState.filteredProducts.length;
        }
      }
      return newState;
    },
  },
});

export const { loadData, filterByValue } = filterSlice.actions;
export default filterSlice.reducer;
