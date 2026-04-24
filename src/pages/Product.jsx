import { useState } from "react"
import "./Product.css"

// IMAGES
import c1 from "../assets/images/slide1.jpg"
import c2 from "../assets/images/slide2.jpg"
import c3 from "../assets/images/slide3.jpg"

import e1 from "../assets/images/slide3.jpg"
import e2 from "../assets/images/slide2.jpg"

import p1 from "../assets/images/slide1.jpg"
import p2 from "../assets/images/slide3.jpg"

import cs1 from "../assets/images/slide1.jpg"
import cs2 from "../assets/images/slide2.jpg"

import v1 from "../assets/images/slide1.jpg"
import v2 from "../assets/images/slide3.jpg"

import cold1 from "../assets/images/slide2.jpg"
import cold2 from "../assets/images/slide1.jpg"

import cc1 from "../assets/images/slide3.jpg"
import cc2 from "../assets/images/slide1.jpg"

const products = [
  {
    title: "Corrugated Boxes",
    description:
      "Strong and durable boxes designed for safe transportation and storage of goods.",
    note: "Available in various ply options and load capacities.",
    images: [c1, c2, c3],
  },
  {
    title: "Printed Carton Boxes",
    description:
      "Custom printed boxes to enhance branding and product visibility.",
    note: "Premium print finishing available.",
    images: [p1, p2],
  },
  {
    title: "Custom Size Boxes",
    description:
      "Boxes made according to your exact size and strength requirements.",
    note: "Fully customizable.",
    images: [cs1, cs2],
  },
  {
    title: "Cold Storage Boxes",
    description:
      "Boxes designed for low temperature storage and transport.",
    note: "Ideal for frozen goods.",
    images: [cold1, cold2],
  },
]

const ProductsShowcase = () => {
  return (
    <section className="products-page">
      <div className="container">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsShowcase


// SINGLE PRODUCT
const ProductItem = ({ product }) => {
  const [active, setActive] = useState(product.images[0])

  return (
    <div className="product-item">

      <h2 className="product-title">{product.title}</h2>

      <div className="product-box">

        {/* IMAGE */}
        <div className="product-left">

          <div className="main-image">
            <img src={active} alt="product" />
          </div>

          <div className="thumbs">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                onClick={() => setActive(img)}
                className={active === img ? "active" : ""}
              />
            ))}
          </div>

        </div>

        {/* TEXT */}
        <div className="product-right">
          <p>{product.description}</p>
          <p className="note">{product.note}</p>
        </div>

      </div>

    </div>
  )
}
