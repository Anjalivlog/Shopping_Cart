import React, { useEffect, useState } from 'react'
import Slider from '../Components/Slider';
import Products from '../Components/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
   
  const [products, setProducts] = useState([]);
  const data = useLoaderData()
  
  useEffect(()=>{
    setProducts(data.data);
  },[data]);

  return (
    <div>
        <Slider />
        <Products products={products} />
    </div>
  );
}

export default Home;