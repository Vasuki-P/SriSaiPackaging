import { Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import About from "./pages/About"
import Infrastructure from "./pages/Infrastructure"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
