export const reducer = (state, { type, payload }) => {
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
  return state;
};
