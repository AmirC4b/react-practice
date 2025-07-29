import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/styles/styles.css"

export default function Home() {
  const [products, setproducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getProduct = async () => {
    try {
      const response = await axios.get("https://nowruzi.top/api/Product/GetProducts");
      setproducts(response.data.data.products);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (isloading) {
    return (
      <h2 className="flex justify-center text-xl font-semibold mt-10">Loading...</h2>
    );
  }

  return (
    <div className="products px-4">
      <h2 className="flex justify-center mt-5 text-2xl font-bold">Shop</h2>
      <div className="grid mt-8 gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {products.map((item, index) => (
          <div
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            key={index}
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={`https://nowruzi.top/${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <div className="flex justify-between text-sm font-bold text-gray-800 mb-3">
                <span className="text-green-700">${item.price}</span>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded-md">
                    -
                  </button>
                  <span className="font-bold">{item.cartQuantity}</span>
                  <button className="w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded-md">
                    +
                  </button>
                </div>
              </div>
              <button className="mt-3 w-full py-2 text-white text-base font-bold bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
