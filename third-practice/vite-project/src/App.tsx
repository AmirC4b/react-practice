import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Header from "./components/Header";
import NotFound from "./pages/NotFound"

export default function App(){
  return(
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
  )
}


function AppContent() {
  const location = useLocation();
  const pathUrl = location.pathname;


 return (   
  <>
  {pathUrl !== "/login" && pathUrl !== "/sign-up" && <Header />}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/sign-up" element={<Signup />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  );
}


