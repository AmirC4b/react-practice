import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/Header.jsx'
import Products from './component/Products.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
      <div className='product-grid'>
        <Products title="کفش ورزشی نایکی"
                    price={420000}
                    image={'/nike.jfif'}  />
        <Products title="کفش ورزشی نایکی"
                    price={1200000}
                    image={'/nike2.jfif'}  />
        <Products title="کفش ورزشی نایکی"
                    price={2000000}
                    image={'/nike3.jfif'}  />
        <Products title="کفش ورزشی نایکی"
                    price={500000}
                    image={'/nike4.jfif'}  />
      </div>
  </StrictMode>,
)
