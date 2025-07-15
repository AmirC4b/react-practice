import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/home-styles.css"

export default function Home(){
    const [products, setproducts] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const getProduct = async () => {
        try {
            const response = await axios.get("https://nowruzi.top/api/Product");
            setproducts(response.data.data.products);
            setIsLoading(false);
        } catch(e) {
          console.log(e);
        }   
    }

    useEffect(() => {
        getProduct();
    },[])
    
    if(isloading){
      return(
      <h2 className="loading">Loading...</h2>
      )
    }

    return (
        <div className="products">
  <h2>Shop</h2>
  <div className="product-grid">
    {
      products.map((item, index) => (
        <div className="product-card" key={index}>
          <div className="product-img">
            <img src="../../assets/img/images.png" alt={item.title} />
          </div>
          <div className="product-details">
            <h3 className="product-title">{item.title}</h3>
            <p className="product-description">{item.description}</p>
            <div className="product-footer">
              <span className="product-price">${item.price}</span>
              <div className="quantity-controls">
                <button className="qty-btn">-</button>
                <span className="qty">{item.cartQuantity}</span>
                <button className="qty-btn">+</button>
              </div>
            </div>
            <button className="add-to-cart-btn">افزودن به سبد خرید</button>
          </div>
        </div>
      ))
    }
  </div>
</div>
    );
}