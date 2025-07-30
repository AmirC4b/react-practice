import { create } from "zustand";

const useCartStore = create((set) =>({
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
}));

export default useCartStore;