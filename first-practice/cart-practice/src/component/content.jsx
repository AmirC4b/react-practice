import { useState } from "react";
import Header from './Header.jsx';
import Products from './Products.jsx';

export default function Main() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (quantity) => {
    setCartCount(prev => prev + quantity);
  };
   return (
    <>
      <Header cartCount={cartCount} />
      <div className='product-grid'>
        <Products title="کفش ورزشی نایکی"
                  price={420000}
                  image={'/nike.jfif'}  
                  onAddToCart={handleAddToCart}/>
        <Products title="کفش نایکی مشکی"
                  price={1200000}
                  image={'/nike2.jfif'}  
                  onAddToCart={handleAddToCart}/>
        <Products title="کفش نایکی سفید"
                  price={2000000}
                  image={'/nike3.jfif'}  
                  onAddToCart={handleAddToCart}/>
        <Products title="کفش نایکی طوسی"
                  price={500000}
                  image={'/nike4.jfif'}  
                  onAddToCart={handleAddToCart}/>
      </div>
    </>
  );
}


