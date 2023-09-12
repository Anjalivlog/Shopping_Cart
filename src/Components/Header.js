import React from 'react';
import { cartImg, logoDark } from '../Assets/Logo';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const Header = () => {
  
  const {total_item} = useCartContext();

  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont'>
        <div className='max-w-screen-lg h-full mx-auto flex items-center justify-between'>
            <Link to='/'>
              <div>
                 <img className='w-28' src={logoDark} alt='logoDark' />
              </div>
            </Link>
            <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
                <li className='text-base text-black font-bold hover:text-gray-400
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                <li className='text-base text-black font-bold hover:text-gray-400 
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                <li className='text-base text-black font-bold hover:text-gray-400 
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                <li className='text-base text-black font-bold hover:text-gray-400 
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                <li className='text-base text-black font-bold hover:text-gray-400 
                hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
            </ul>
            <Link to='/cart'>
             <div className='relative'>
               <img className='w-6' src={cartImg} alt='cartImg' />
               <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center
               font-semibold'>{total_item}</span>
             </div>
            </Link>
            <Link to='/login'>
             <img className='w-9 h-9 rounded-full '
               src='https://cdn-icons-png.flaticon.com/128/4526/4526817.png'
               alt='userlogo'
             />
            </Link> 
        </div>
        </div>
    </div>
  );
}

export default Header;