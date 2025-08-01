import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";

export default function Home() {
  const [products, setproducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getProduct = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const url = userId
        ? `https://nowruzi.top/api/Product/GetProducts?UserId=${userId}`
        : "https://nowruzi.top/api/Product/GetProducts";

      const response = await axios.get(url);
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
      <h2 className="flex justify-center text-xl font-semibold mt-10">
        Loading...
      </h2>
    );
  }

  return (
    <div className="products px-4">
      <div className="grid mt-8 gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {products.map((products: any) => (
          <ProductCard products={products} />
        ))}
      </div>
    </div>
  );
}
