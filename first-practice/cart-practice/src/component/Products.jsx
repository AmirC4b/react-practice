import { useState } from 'react';
import '../assets/product-styles.css'



export default function Products({ title, price, image,  onAddToCart}) {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const addToCart = () => {
    onAddToCart(quantity);
    setQuantity(1);     
  };

    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <div className="product-pricing">
                <p className="product-price">
                    قیمت واحد: {price.toLocaleString()} تومان
                </p>
                <p className="product-total">
                    قیمت کل: {(price * quantity).toLocaleString()} تومان
                </p>
            </div>
            
            <div className="quantity-control">
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
            </div>

            <button className="add-to-cart-btn" onClick={addToCart}>
                افزودن به سبد خرید
            </button>
        </div>
    );
}
