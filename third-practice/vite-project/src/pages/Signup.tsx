import { useState } from "react";
import axios from "axios";
import "../assets/styles/styles.css"

export default function Signup() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://nowruzi.top/api/User/Register", {
        mobile,
        password,
        firstName,
        lastName,
      });

      console.log("ثبت نام با موفقیت انجام شد", response.data);
      alert("ثبت‌نام با موفقیت انجام شد ✅");

      const userId = response.data?.data?.id;
      if (userId) {
        localStorage.setItem("userId", userId);
      }

      setMobile("");
      setPassword("");
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.error("خطا در ثبت‌نام:", error);
      alert("ثبت‌نام با خطا مواجه شد ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg font-sans">
      <h2 className="text-center text-3xl font-semibold mb-8 text-gray-800">Sign Up</h2>
      <form onSubmit={postData} className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Mobile</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-blue-500 transition"
          required
        />

        <label className="mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-blue-500 transition"
          required
        />

        <label className="mb-1 font-medium text-gray-700">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-blue-500 transition"
          required
        />

        <label className="mb-1 font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-blue-500 transition"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-[16px] font-semibold rounded-lg transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
