import { ADD_TO_CART } from "../Constants";

const initialState = {
  cartData: [],
};
export default function cartItem(state=initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: action.data,
      };
      break;
      default:
        return state
  }
}
