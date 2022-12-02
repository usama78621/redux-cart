export const reducer = (state, { type, payload }) => {
  if (type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== payload.id),
    };
  }
  if (type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === payload.id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (type === "DECREASE") {
    let tempCart = [];
    if (payload.amount === 1) {
      tempCart = state.cart.filter((cartItem) => cartItem.id !== payload.id);
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === payload.id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }
  if (type === "GET_TOTALS") {
    let { amount, total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        let { price, amount } = cartItem;
        let itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        amount: 0,
        total: 0,
      }
    );
    total = total.toFixed(2);
    return { ...state, amount, total };
  }
  return state;
};
