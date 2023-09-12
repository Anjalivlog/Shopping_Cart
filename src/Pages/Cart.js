import React from 'react'
import CartItem from '../Components/CartItem';
import { useCartContext } from '../Context/CartContext';

const Cart = () => {
    
    const {cart, total_price} = useCartContext();
    if (cart.length === 0) {
        return (
        <div className='h-full'>
            <img 
            className='w-full h-60 object-cover'
            src='https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='cartImage'
            />
            <h1 className='h-[60px] text-center text-lg text-red-600 font-bold py-4 font-titleFont'>No Cart Item</h1>
        </div>);
   }

  return (
    <div>
        <img 
            className='w-full h-60 object-cover'
            src='https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='cartImage'
        />
        <div className='max-w-screen-lg mx-auto py-20 flex'>
            <CartItem />
            <div className='w-1/2 bg-[#fafafa] py-6 px-4 '>
                <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                    <h1 className='text-2xl font-medium'>cart totals</h1>
                    <p className='flex items-center gap-4 text-base'>
                        Subtotal:
                        <span className='font-titleFont font-bold text-lg '>
                            ${total_price}
                        </span>
                    </p>
                    <p className='flex items-start gap-4 text-base'>
                        Shipping:
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipiscing elit. Quos,
                            vertitatis.
                        </span>
                    </p>
                </div>
                <p className='font-titleFont font-semibold flex justify-between mt-6'>
                    Total <span className='text-xl font-bold'>${total_price}</span>
                </p>
                <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800
                 duration-300'>proceed to checkout
                </button>
            </div>
        </div>
    </div>
  );
}

export default Cart;