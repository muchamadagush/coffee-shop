import { actionTypes } from "../constants/actionTypes";

const initialState = {
  profile: {},
  users: [],
  user: {},
  error: null
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        profile: action.payload
      }
    case actionTypes.EROR_LOGIN:
      return {
        error: action.payload
      }
    case actionTypes.UPDATE_USER:
      return {
        profile: action.payload
      }
    case actionTypes.GET_USERS:
      return {
        users: action.payload
      }
    case actionTypes.GET_USER:
      return {
        user: action.payload
      }
    default:
      return state;
  }
};
export default userReducer;