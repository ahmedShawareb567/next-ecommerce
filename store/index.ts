import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./modules/cart";
import { productsReducer } from "./modules/products";
import { userReducer } from "./modules/user";
import { wishlistReducer } from "./modules/whishlist";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
