import { combineReducers } from 'redux';
import BuyFoodReducer from './BuyFoodReducer';


export default combineReducers({
  cartItems: BuyFoodReducer
});
