import "./ProductsPreview.css"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

import corrugated_box from "../../../assets/images/home_product_corrugated_box.JPG"
import custom_box from "../../../assets/images/products/custom_size_box_1.jpg"
import printed_box from "../../../assets/images/products/printed_carton_box_2.jpg"
import cold_box from "../../../assets/images/products/cold_Storage_box_1.jpg"

const products = [
  { title: "Corrugated Boxes", img: corrugated_box },
  { title: "Printed Carton", img: printed_box },
  { title: "Cold Storage Boxes", img: cold_box },
  { title: "Custom Boxes", img: custom_box },
]

const ProductsPreview = () => {
  const scrollRef = useRef()
  const [isStart, setIsStart] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const scroll = (dir) => {
    const container = scrollRef.current
    const card = container.querySelector(".product-card")
    if (!card) return

    const scrollAmount = card.offsetWidth + 16

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  const checkScroll = () => {
    const c = scrollRef.current
    setIsStart(c.scrollLeft <= 0)
    setIsEnd(c.scrollLeft + c.offsetWidth >= c.scrollWidth - 5)
  }

  useEffect(() => {
    const c = scrollRef.current
    checkScroll()
    c.addEventListener("scroll", checkScroll)
    return () => c.removeEventListener("scroll", checkScroll)
  }, [])

  return (
    <section className="products">
      <div className="container">

        <div className="section-header">
          <h2>
            <Link to="/products" className="title">Our Products</Link>
          </h2>
          <p>Reliable packaging solutions for all industries</p>
        </div>

        <div className="scroll-wrapper">

          <button
            className={`scroll-btn left ${isStart ? "disabled" : ""}`}
            onClick={() => scroll("left")}
            disabled={isStart}
          >
            ‹
          </button>

          <div className="scroll-container" ref={scrollRef}>
            {products.map((item, i) => (
              <div className="product-card" key={i}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>

          <button
            className={`scroll-btn right ${isEnd ? "disabled" : ""}`}
            onClick={() => scroll("right")}
            disabled={isEnd}
          >
            ›
          </button>

        </div>

        <div className="products-btn">
          <Link to="/products" className="btn primary">
            View All Products
          </Link>
        </div>

      </div>
    </section>
  )
}

export default ProductsPreview
