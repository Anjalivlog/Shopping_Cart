
const CartReducer = (state, action) => {

    if(action.type === "ADD_TO_CART") {
        let {baseQty, details} = action.payload;
        //console.log(details);

        let existingProduct = state.cart.find((curItem) => curItem.id === details._id);
        if(existingProduct) {

          let updatedProduct = state.cart.map((curElem) => {
            if(curElem.id === details._id) {
              let newAmount = curElem.baseQty + baseQty;
              return {
                ...curElem,
                baseQty: newAmount,
              };
            } else {
              return  curElem;
            }
          });
          return{
            ...state,
            cart: updatedProduct,
          };

        } else {
          let cartProduct = {
            id: details._id,
            title: details.title,
            baseQty,
            image: details.image,
            price: details.price,
        };
        
        return {
            ...state,
            cart : [...state.cart, cartProduct],
        };
      }
    }

    // if(action.type === "ADD_TO_CART_1") {
    //   let {product} = action.payload;
    //   //console.log(details);

    //     let cartProduct1 = {
    //       id: product._id,
    //       title: product.title,
    //       image: product.image,
    //       price: product.price,
    //   };
      
    //   return {
    //       ...state,
    //       cart : [...state.cart, cartProduct1],
    //   };
    // }
 
    if(action.type === 'SET_DECREASE') {
      let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === action.payload) {
          let decAmount = curElem.baseQty - 1;

          if(decAmount <= 1) {
            decAmount = 1;
          }

          return {
            ...curElem,
            baseQty: decAmount,
          }
        } else {
          return curElem;
        }
      });
      return {...state, cart: updatedProduct};
    }

    if(action.type === 'SET_INCREASE') {
      let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === action.payload) {
          let incAmount = curElem.baseQty + 1;

          return {
            ...curElem,
            baseQty: incAmount,
          }
        } else {
          return curElem;
        }
      });
      return {...state, cart: updatedProduct};
    }

    if(action.type === 'REMOVE_ITEM') {
      let updatedCart = state.cart.filter(
        (currItem) => currItem.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
      };
    }

    if(action.type === 'RESET_CART_ITEM') {
      return {
        ...state,
        cart: [],
      };
    }

    if(action.type === 'CART_TOTAL_ITEM') {
      let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
        let {baseQty} = curElem;
        initialVal = initialVal + baseQty;
        return initialVal;
      }, 0);

      return {
        ...state,
        total_item: updatedItemVal,
      };
    }

    if(action.type === 'CART_TOTAL_PRICE') {
      let totalPrice = state.cart.reduce((initialVal, curElem) => {
        let {price, baseQty} = curElem;

        initialVal = initialVal + price * baseQty;

        return initialVal;
      }, 0);

      return {
        ...state,
        total_price: totalPrice,
      }
    }

return state;
};

export default CartReducer;