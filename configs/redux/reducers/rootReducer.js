import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
const rootReducers = combineReducers({
  user: userReducer,
  product: productReducer,
});

export default rootReducers;
