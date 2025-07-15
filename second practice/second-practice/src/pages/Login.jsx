import { useState } from "react";
import axios from "axios";
import "../styles/login.css"


export default function Login(){
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
         e.preventDefault();
         
            try{
                const response = await axios.post("https://nowruzi.top/api/User/Login",{
                    mobile,
                    password,
                })

                console.log("ورود با موفقیت انجام شد",response.data)
                alert("ورود با موفقیت انجام شد ✅");

                const userId = response.data?.data?.id;
                if (userId) {
                localStorage.setItem("userId", userId);
                 }


                 setMobile("");
                 setPassword("");

            }catch (error){
                console.error("خطا در ورود:", error);
                alert("ورود با خطا مواجه شد ❌");
            }
    }


   return (
    <div className="Form">
      <h2 className="title">Login</h2>
      <form onSubmit={handleLogin}>
        <label>Mobile</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}