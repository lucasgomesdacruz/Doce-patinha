import { Outlet, useLocation } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { useEffect } from "react"




const Layout = () => {

  const location = useLocation()

  useEffect(() => {
    
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />

    </div>
  )
}

export default Layout
