import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";

const useCartStore = create((set) => ({
  totalCount: 0,
  cartItems: [],

  addToTotal: (amount: number) =>
    set((state) => ({
      totalCount: state.totalCount + amount,
    })),

  removeFromTotal: (amount: number) =>
    set((state) => ({
      totalCount: state.totalCount - amount,
    })),

  addItemToCart: (product, count) =>
    set((state) => ({
      cartItems: [...state.cartItems, { product, count }],
    })),

  addToCart: async (productId: number) => {
    try {
      if (localStorage.getItem("userId")) {
        const result = await axios.post(
          "https://nowruzi.top/api/Cart/AddToCart",
          {
            userId: localStorage.getItem("userId"),
            productId: productId,
          }
        );
        if (result.data.isSuccess) {
          toast.success("با موفقیت به سبد خرید اضافه شد");
        } else {
          toast.error("خطا رخ داد");
        }
      } else {
        toast.info("ابتدا وارد اکانت شید");
      }
    } catch (error) {
      toast.error("خطا رخ داد");
    }
  },

  fetchCart: async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      const response = await axios.get("https://nowruzi.top/api/Cart/GetCart", {
        params: { userId },
      });

      const cartList = response.data.data.items;

      const total = response.data.data.totalItems;
      set({
        totalCount: total,
        cartItems: cartList,
      });
    } catch (err) {
      console.error("خطا در دریافت سبد خرید:", err);
    }
  },
}));

export default useCartStore;
