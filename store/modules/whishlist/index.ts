import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {},
});

export const {} = wishlist.actions;
export const wishlistReducer = wishlist.reducer;

export default wishlist;
