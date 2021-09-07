import { actionTypes } from '../constants/actionTypes';

const initialState = {
  cart: [],
  total: 0,
  quantity: 0,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
        quantity: state.quantity + 1,
      };
    default:
      return state;
  }
};
export default productReducer;
