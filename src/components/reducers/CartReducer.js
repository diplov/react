const initialData = {
  cartitems: [],
};
const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cartitems: [...state.cartitems, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        cartitems: state.cartitems.filter((item) => item !== action.payload),
      };
    case "CLEAR_CART":
      return {
        cartitems: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
