const INITIAL_STATE = {
  cartItems: [],
};

const BuyFoodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FOOD_ADD_TO_CART':
      return { ...state, cartItems: action.payload };
    case 'FOOD_REMOVE_FROM_CART':
      return { ...state, cartItems: action.payload };
    case 'GET_ALL_ITEMS_FROM_CART':
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};

export default BuyFoodReducer;
