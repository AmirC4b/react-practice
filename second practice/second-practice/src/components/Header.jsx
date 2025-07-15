import { Link } from "react-router-dom";
import "../styles/header-styles.css"



export default function Header(){
    return(
        <div className="header">
            <div className="header-container">
                <div className="nav">
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/sign-up"}>Sign-Up</Link>
                        </li>
                        <li>
                            <Link to={"/login"}>Login</Link>
                        </li>
                    </ul>
                </div>
                <div className='title'>
                <h1>SHOP</h1>
            </div>
                <div className='cart'>
                <img src="../../assets/img/cart.png" alt="" className='cart-img' />
                <span className='cart-count'>0</span>
            </div>
            </div>
        </div>
    );
}