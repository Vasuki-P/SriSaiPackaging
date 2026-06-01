import { useEffect, useState, useRef } from "react"
import "./Carousel.css"

import img1 from "../../../assets/images/carousel1.png"
import img2 from "../../../assets/images/carousel2.JPG"
import img3 from "../../../assets/images/carousel6.JPG"
import img4 from "../../../assets/images/carousel3.JPG"

const images = [img1, img3, img2, img4]

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const [transition, setTransition] = useState(true)
  const trackRef = useRef()

  const extendedImages = [...images, images[0]]

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Handle transition end (KEY FIX)
  const handleTransitionEnd = () => {
    if (index === images.length) {
      setTransition(false)
      setIndex(0)
    }
  }

  // Re-enable transition after reset
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true)
      })
    }
  }, [transition])

  return (
    <section className="carousel">
      <div
        ref={trackRef}
        className="carousel-track"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        {extendedImages.map((img, i) => (
          <div className="carousel-slide" key={i}>
            <img src={img} alt={`slide-${i}`} />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={index % images.length === i ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousel
