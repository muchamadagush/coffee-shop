import { actionTypes } from '../constants/actionTypes';

const initialState = {
  cart: [],
  total: 0,
  quantity: 0,
  time: '',
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.data.price * action.payload.amount,
        quantity: state.quantity + action.payload.amount,
        time: action.payload.data.time,
      };
    case actionTypes.EMPTY_CART:
      return {
        cart: [],
        total: 0,
        quantity: 0,
        time: '',
      };
    default:
      return state;
  }
};
export default productReducer;
