import { useState } from "react";
import "../styles/Signup.css"
import axios from "axios";


export default function Signup(){
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const postData = async (e) => {
        e.preventDefault();
        
        try{
           const response = await axios.post('https://nowruzi.top/api/User/Register', {
            mobile: mobile,
            password: password,
            firstName: firstName,
            lastName: lastName
            
        });
            console.log("ثبت نام با موفقیت انجام شد",response.data);
             alert("ثبت‌نام با موفقیت انجام شد ✅");

            setMobile("");
            setPassword("");
            setFirstName("");
            setLastName("");

            const userId = response.data?.data?.id;
            if (userId) {
                localStorage.setItem("userId", userId);
            }


        } catch(error){
            console.error("خطا در ثبت‌نام:", error);
            alert("ثبت‌نام با خطا مواجه شد ❌");
        }
    } 
    
    return (
        <div className="Form">
            <h2 className="title">Sign Up</h2>
            <form onSubmit={postData}>
                <label>Mobile</label>
                <input type="text" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />

                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label>First Name</label>
                <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <label>Last Name</label>
                <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
