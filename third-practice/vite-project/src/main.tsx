import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ToastContainer, toast } from "react-toastify";
import "./assets/styles/styles.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <App />
  </StrictMode>,
)
