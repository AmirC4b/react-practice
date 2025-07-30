import { Link } from "react-router-dom";
import "../assets/styles/styles.css"
import cart from "../assets/icons/cart.png"
import useCartStore from "../hooks/CartStore";

export default function Header() {
    const userFullName = localStorage.getItem("FullName");

    const totalCount = useCartStore((state: any) => state.totalCount)
    return (
        <div className="w-full h-[120px] bg-black text-white">
            <div className="flex justify-between items-center px-5 py-[50px]">
                <nav>
                    <ul className="flex gap-2 list-none p-0 m-0">
                        <li>
                            <Link to="/" className="no-underline text-white">
                                Home
                            </Link>
                        </li>
                        {userFullName == null ? 
                        <>
                        <li>
                            <Link to="/sign-up" className="no-underline text-white">
                                Sign-Up
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="no-underline text-white">
                                Login
                            </Link>
                        </li>
                        </>    
                   :
                   <li className="text-green-400 font-bold">{userFullName}</li>
                    }
                    </ul>
                </nav>
                <div className="text-xl font-bold">
                    <h1>SHOP</h1>
                </div>
                <div className="relative inline-block">
                    <img src={cart} alt="" className="w-10 h-auto" />
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                        {totalCount}
                    </span>
                </div>
            </div>
        </div>
    );
}
