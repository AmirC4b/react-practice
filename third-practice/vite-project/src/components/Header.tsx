import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/styles.css";
import cart from "../assets/icons/cart.png";
import useCartStore from "../hooks/CartStore";
import { useEffect, useState } from "react";

export default function Header() {
  const [userFullName, setUserFullName] = useState("");
  const totalCount = useCartStore((state: any) => state.totalCount);
  const [login, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const fetchCart = useCartStore((state: any) => state.fetchCart);

  useEffect(() => {
    const checkLoginStatus = () => {
      const fullName = localStorage.getItem("FullName");
      const userId = localStorage.getItem("userId");
      if (fullName && userId) {
        setIsLogin(true);
        setUserFullName(fullName);
        fetchCart();
      } else {
        setIsLogin(false);
        setUserFullName("");
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("FullName");
    setIsLogin(false);
    setUserFullName("");
    navigate("/");
  };

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
            {login ? (
              <>
                <li className="text-green-400 font-bold">{userFullName}</li>
                <li onClick={handleLogout} className="cursor-pointer">
                  Logout
                </li>
              </>
            ) : (
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
            )}
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
