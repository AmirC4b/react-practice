import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Header from "./components/Header";

function App() {
 return (   
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/sign-up" element={<Signup />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App
