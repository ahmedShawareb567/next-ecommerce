import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    details: {
      total: 0,
      count: 0,
    },
  },
  reducers: {
    addToCart(state: any, action: PayloadAction<any>) {
      let isProductHere = findProductInCart(state, action);
      if (isProductHere) {
        isProductHere.quantity++;
      } else {
        state.cart.push(action.payload);
      }
      totalCart(state);
    },
    removeFromCart(state: any, action: PayloadAction<any>) {
      let currentElement = state.cart.findIndex(
        (item: any): any => item.id == action.payload.id
      );
      state.cart.splice(currentElement, 1);
      totalCart(state);
    },
    productIncrement(state: any, action: PayloadAction<any>) {
      let currentProduct = findProductInCart(state, action);
      currentProduct.quantity++;
      totalCart(state);
    },
    productDecrement(state: any, action: PayloadAction<any>) {
      let currentProduct = findProductInCart(state, action);
      if (currentProduct.quantity > 1) {
        currentProduct.quantity--;
        totalCart(state);
      }
    },
  },
});

const totalCart = (state: any): any => {
  let sum = 0,
    count = 0;
  state.cart.filter((item: any) => {
    item.total = item.price * item.quantity;
    sum += item.quantity * item.price;
    count += item.quantity;
  });
  state.details.total = sum;
  state.details.count = count;
};

const findProductInCart = (state: any, action: PayloadAction<any>): any => {
  let currentElement = state.cart.find(
    (item: any): any => item.id === action.payload.id
  );
  return currentElement;
};

export const { addToCart, removeFromCart, productIncrement, productDecrement } =
  cart.actions;
export const cartReducer = cart.reducer;

export default cart;
