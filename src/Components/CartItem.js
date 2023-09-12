import React from 'react'
import { MdOutlineClose } from 'react-icons/md';
import { useCartContext } from '../Context/CartContext';
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';

const CartItem = () => {

    
    const {cart} = useCartContext();
    const {removeItem} = useCartContext();
    const {resetCart} = useCartContext();
    const {setDecrease, setIncrease} = useCartContext();

  return (
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='font-titleFont text-2xl'>Shopping Cart</h2>
        </div>
        <div>
        <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-6 mt-6"
              >
                <div className="flex items-center relative">
                  <img
                    className="w-32 h-32 object-cover"
                    src={item.image}
                    alt="productImg"
                  />
                  <MdOutlineClose onClick={() => removeItem(item.id) &
                      toast.error(`${item.title} is removed`)}
                    className="text-xl text-white hover:text-red-600 cursor-pointer duration-300 absolute top-2 right-1"
                  />
                </div>
                <h2 className="w-52 text-sm">{item.title}</h2>
                <p className="w-10 text-sm">${item.price}</p>
                <div className="w-45 flex items-center justify-between text-gray-500 gap-2 border p-3">
                  <p className="text-sm">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span onClick={() => setDecrease(item.id)}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                      -
                    </span>
                    <span className='w-3 items-center justify-center'>{item.baseQty}</span>
                    <span onClick={() => setIncrease(item.id)}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                      +
                    </span>
                  </div>
                </div>
                <p className="w-30 text-sm">${item.baseQty * item.price}</p>
              </div>
            ))}
          </div>
          <button onClick={resetCart}
             className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300">
             Reset Cart
          </button>
        </div>
        <Link to="/">
            <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                <span>
                 <HiOutlineArrowLeft />
                </span>
                go shopping
            </button>
        </Link>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  );
}

export default CartItem;