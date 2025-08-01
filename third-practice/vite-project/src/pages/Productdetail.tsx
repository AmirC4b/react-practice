import axios from "axios";
import { useEffect, useState } from "react";
import useCartStore from "../hooks/CartStore";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const addToCart = useCartStore((state) => state.addToCart);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const { productId } = useParams();
  const [product, setProduct] = useState<any>();
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    try {
      const userId = localStorage.getItem("userId");
      const url = userId
        ? `https://nowruzi.top/api/Product/GetProductById?productId=${productId}&userId=${userId}`
        : "https://nowruzi.top/api/Product/GetProductById?productId=1";

      const response = await axios.get(url);

      setProduct(response.data.data);
      setLoading(false);
    } catch (error) {
      toast.error("خطایی رخ داده");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleAddToCart() {
    if (!product) return;

    if (!localStorage.getItem("userId")) {
      toast.info("لطفاً ابتدا وارد حساب کاربری شوید");
      return;
    }

    try {
      await addToCart(product.id);
      await fetchCart();
      toast.success("محصول با موفقیت به سبد خرید افزوده شد");
    } catch (error) {
      toast.error("افزودن محصول به سبد خرید با خطا مواجه شد");
    }
  }

  if (loading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* تصویر محصول */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={`https://nowruzi.top/${product.image}`}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-gray-600 text-base leading-7">
            {product.description}
          </p>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold text-green-600">
              {product.price.toLocaleString("fa-IR")} تومان
            </span>
          </div>

          <div>
            <span className="text-sm text-gray-500">
              <span className="text-black font-bold">
                {product.cartQuantity}
              </span>
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="cursor-pointer mt-4 w-full py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl transition duration-300"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
