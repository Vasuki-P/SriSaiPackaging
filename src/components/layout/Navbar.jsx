import { useState, useRef, useEffect } from "react"
import "./Navbar.css"
import logo from "../../assets/icons/whiteLogo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // 🔥 wrap BOTH nav + button
  const navContainerRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="header">
      <div className="container nav-wrapper" ref={navContainerRef}>

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Sri Sai Packaging Logo" />
          <h2>Sri Sai Packaging</h2>
        </div>

        {/* NAV */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/infrastructure" onClick={() => setMenuOpen(false)}>Infrastructure</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        {/* HAMBURGER */}
        <div
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

      </div>
    </header>
  )
}

export default Navbar
