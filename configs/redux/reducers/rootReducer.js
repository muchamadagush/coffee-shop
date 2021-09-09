import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import orderReducer from './orderReducer';
const rootReducers = combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer
});

export default rootReducers;
