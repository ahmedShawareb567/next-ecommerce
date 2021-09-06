import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: "1",
        name: "T-Shirt Pollo",
        description:
          "software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 40,
        total: 40,
        wishlist_checked: false,
      },
      {
        id: "2",
        name: "T-Shirt classic",
        description:
          "software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 60,
        total: 60,
        wishlist_checked: false,
      },
      {
        id: "3",
        name: "T-Shirt black",
        description:
          "software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 55,
        total: 55,
        wishlist_checked: false,
      },
      {
        id: "4",
        name: "T-Shirt red",
        description:
          "software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 78,
        total: 78,
        wishlist_checked: false,
      },
      {
        id: "5",
        name: "T-Shirt yellow",
        description:
          "software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 90,
        total: 90,
        wishlist_checked: false,
      },
      {
        id: "6",
        name: "T-Shirt green",
        description:
          "software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 64,
        total: 64,
        wishlist_checked: false,
      },
    ],
  },
  reducers: {
    updateProducts(state: any, action: PayloadAction<any>) {
      let currentProduct = findProduct(state, action);
      currentProduct.wishlist_checked = !currentProduct.wishlist_checked;
    },
  },
});

const findProduct = (state: any, action: PayloadAction<any>): any => {
  let currentElement = state.products.find(
    (item: any): any => item.id === action.payload.id
  );
  return currentElement;
};

export const { updateProducts } = products.actions;
export const productsReducer = products.reducer;

export default products;
