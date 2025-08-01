import { useState } from "react";
import useCartStore from "../hooks/CartStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ products }: any) {
  const navigate = useNavigate();
  const addToTotal = useCartStore((state: any) => state.addToTotal);
  const addToCart = useCartStore((state: any) => state.addToCart);
  const addItemToCart = useCartStore((state: any) => state.addItemToCart);
  const fetchCart = useCartStore((state: any) => state.fetchCart);
  const [count, setCount] = useState(0);

  function handleAddCount() {
    setCount(count + 1);
  }

  function handleRemoveCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  async function handleAddToCart() {
    if (count === 0) return;
    if (localStorage.getItem("userId")) {
      await addToCart(products.id);
      addToTotal(count); // اختیاری؛ اگه نمی‌خوای دستی زیاد شه، حذف کن
      addItemToCart(products, count);
      await fetchCart(); // این خط مهمه
      setCount(0);
    } else {
      toast.info("ابتدا وارد اکانت شید");
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1">
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
        <span>in Cart: {products.cartQuantity}</span>
        <div className="flex justify-between text-sm font-bold text-gray-800 mb-3">
          <span className="text-green-700">${products.price}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRemoveCount}
              className="cursor-pointer w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              -
            </button>
            <span className="font-bold">{count}</span>
            <button
              onClick={handleAddCount}
              className="cursor-pointer w-8 h-8 text-lg bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="cursor-pointer mt-3 w-full py-2 text-white text-base font-bold bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300"
        >
          افزودن به سبد خرید
        </button>
        <button
          onClick={() => navigate(`/product-details/${products.id}`)}
          className="cursor-pointer mt-2 w-full py-2 text-blue-600 text-base font-bold border border-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-300"
        >
          جزئیات محصول
        </button>
      </div>
    </div>
  );
}
