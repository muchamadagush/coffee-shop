import { actionTypes } from '../constants/actionTypes';

const initialState = {
  order: [],
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_HISTORY_ADMIN:
      return {
        order: action.payload
      };
    case actionTypes.GET_ORDER_HISTORY_USER:
      return {
        order: action.payload
      };
    default:
      return state;
  }
};
export default orderReducer;
