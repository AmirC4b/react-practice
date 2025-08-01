import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/productCard";

export default function MyCart() {
  const [cart, setCart] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        "https://nowruzi.top/api/Cart/GetCart?userId=3"
      );
      setCart(response.data.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="products px-4">
      <div className="grid mt-8 gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {cart.map((Product: any) => (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1">
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={`https://nowruzi.top/${Product.productImage}`}
                alt={Product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {Product.productTitle}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {Product.productDescription}
              </p>
              <div className="flex justify-between text-sm font-bold text-gray-800 mb-3">
                <span className="text-green-700">${Product.productPrice}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{Product.quantity}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
