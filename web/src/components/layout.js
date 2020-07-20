import React, { useState } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header1/Header"
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer"
import "../styles/global.css"

const TemplateWrapper = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="site-wrapper">
      <Header toggleMenu={toggleMenu} />
      <NavigationDrawer open={menuOpen} toggleMenu={toggleMenu} />
      <div className="site-content">{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
