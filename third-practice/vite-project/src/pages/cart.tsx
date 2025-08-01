import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/productCard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useCartStore from "../hooks/CartStore";

export default function MyCart() {
  const totalCount = useCartStore((state: any) => state.totalCount);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const getProduct = async () => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        toast.info("برای مشاهده سبد خرید ابتدا وارد اکانت خود شوید");
      }
      const response = await axios.get(
        `https://nowruzi.top/api/Cart/GetCart?userId=${userId}`
      );
      setCart(response.data.data.items);
      setCartTotal(response.data.data.totalItems);
      setTotalPrice(response.data.data.totalPrice);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveFromCart = async (productId: number) => {
    try {
      const userId = localStorage.getItem("userId");

      const response = await axios.post(
        "https://nowruzi.top/api/Cart/RemoveFromCart",
        {
          userId: userId,
          productId: productId,
        }
      );

      if (response.data.isSuccess) {
        toast.success("محصول با موفقیت حذف شد");
        getProduct();
      } else {
        toast.error(response.data.message || "خطا در حذف محصول");
      }
    } catch (error) {
      toast.error("خطا در ارتباط با سرور");
      console.error("Remove Error:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (cartTotal === 0) {
    return (
      <div className="text-center mt-10 text-lg font-semibold text-gray-700">
        سبد خرید شما خالی است.
      </div>
    );
  }

  return (
    <>
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
                  <span className="text-green-700">
                    ProductPrice: {Product.productPrice.toLocaleString()}
                  </span>
                  <span className="text-green-700">
                    ProductTotalPrice: {Product.totalPrice.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{Product.quantity}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(Product.productId)}
                    className=" cursor-pointer mt-3 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded transition"
                  >
                    حذف از سبد
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t pt-6 flex flex-col gap-4 items-center text-center">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-gray-700">
            تعداد کالاها:{""}
            <span className="font-bold text-black">{totalCount}</span>
          </p>
          <p className="text-lg font-semibold text-gray-700">
            قیمت کل:{" "}
            <span className="font-bold text-green-600">
              {totalPrice.toLocaleString()}
            </span>
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => navigate("/")}
            className=" cursor-pointer bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg transition"
          >
            ادامه خرید
          </button>
          <button className=" cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            ادامه پرداخت
          </button>
        </div>
      </div>
    </>
  );
}
