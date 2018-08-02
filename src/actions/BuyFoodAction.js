export const addFoodToCart = (d) => {
  return (dispatch, getState) => {
    const finalCart = getState().cartItems.cartItems.filter(f => {
      return f.id !== d.id;
    });
    d['quantity'] = 1;
    finalCart.push(d);
    // console.log(finalCart, d);
    dispatch({
      type: 'FOOD_ADD_TO_CART',
      payload: finalCart
    });
  }
}

export const removeFoodFromCart = (id) => {
  return (dispatch, getState) => {
    const finalCart = getState().cartItems.cartItems.filter(d => {
      return d.id !== id;
    });
    console.log('After remove'. finalCart);
    dispatch({
      type: 'FOOD_REMOVE_FROM_CART',
      payload: finalCart
    });
  }
}

export const getAllCartItems = () => {
  return (dispatch, getState) => {
    const finalCart = getState().cartItems.cartItems;
    dispatch({
      type: 'GET_ALL_ITEMS_FROM_CART',
      payload: finalCart
    });
  }
}
