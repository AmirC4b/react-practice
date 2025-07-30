import { useState } from "react";
import useCartStore from "../hooks/CartStore";

export default function ProductCard({products}: any){
      const addToTotal = useCartStore((state: any) => state.addToTotal);
      const addItemToCart = useCartStore((state: any) => state.addItemToCart);
      const [count, setCount] = useState(0);



      function handleAddCount(){
        setCount(count + 1);

      }

       function handleRemoveCount() {
        if (count > 0) {
            setCount(count - 1);
  }
}
function handleAddToCart() {
    if (count === 0) return; 
    addToTotal(count);
    addItemToCart(products, count);
    setCount(0);
  }



    return (

          <div
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={`https://nowruzi.top/${products.image}`}
                alt={products.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{products.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{products.description}</p>
              <div className="flex justify-between text-sm font-bold text-gray-800 mb-3">
                <span className="text-green-700">${products.price}</span>
                <div className="flex items-center gap-2">
                  <button onClick={handleRemoveCount} className="cursor-pointer w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded-md">
                    -
                  </button>
                  <span className="font-bold">{count}</span>
                  <button onClick={handleAddCount} className="cursor-pointer w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded-md">
                    +
                  </button>
                </div>
              </div>
              <button onClick={handleAddToCart} className="cursor-pointer mt-3 w-full py-2 text-white text-base font-bold bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
  );
}