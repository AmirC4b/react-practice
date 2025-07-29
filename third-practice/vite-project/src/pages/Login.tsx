import { useState } from "react";
import axios from "axios";
import "../assets/styles/styles.css"

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://nowruzi.top/api/User/Login", {
        mobile,
        password,
      });

      console.log("ورود با موفقیت انجام شد", response.data);
      alert("ورود با موفقیت انجام شد ✅");

      const userId = response.data?.data?.id;
      if (userId) {
        localStorage.setItem("userId", userId);
      }

      setMobile("");
      setPassword("");
    } catch (error) {
      console.error("خطا در ورود:", error);
      alert("ورود با خطا مواجه شد ❌");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <label className="font-semibold mb-1">Mobile</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="font-semibold mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="mt-2 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
