import { json } from "react-router-dom";

export const localCartMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const {cart } = store.getState();
    localStorage.setItem("cartProducts", JSON.stringify(cart.cartProducts));
    return result;
}