import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/CartReducer';

const CartContext = createContext();

const CartProvider = ({children}) => {

    const initialState = {
        cart: [],
        total_item: '',
        total_price: '',
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (baseQty,details) => {
        dispatch({type:'ADD_TO_CART', payload: {baseQty,details}});
    };

    const setDecrease = (id) => {
        dispatch({type: 'SET_DECREASE', payload: id});
    };

    const setIncrease = (id) => {
        dispatch({type: 'SET_INCREASE', payload: id});
    };

    // const addToCart1 = (product) => {
    //     dispatch({type: 'ADD_TO_CART_1', payload: {product}});
    // };

    const removeItem = (id) => {
        dispatch({ type:'REMOVE_ITEM', payload: id });
    };

    const resetCart = () => {                                 
        dispatch({ type:'RESET_CART_ITEM' });
    };

    useEffect(() => {
        dispatch({type: 'CART_TOTAL_ITEM'});
        dispatch({type: 'CART_TOTAL_PRICE'});
    }, [state.cart]);

    return (<CartContext.Provider value={{...state, addToCart, removeItem, resetCart, setDecrease, setIncrease}}>
        {children}
    </CartContext.Provider>);
};

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext};