import "./Hero.css"
import heroImg from "../../../assets/images/hero-box.jpg"

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>
            Reliable Carton Box Manufacturer in Namakkal
          </h1>

          <p>
            We provide strong, durable and custom packaging solutions
            for safe transport, storage and export.
          </p>

          <div className="hero-buttons">
            <a href="tel:+919944154955" className="btn primary">
              Call Now
            </a>

            <a
              href="https://wa.me/919944154955"
              target="_blank"
              className="btn secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-image">
          <img src={heroImg} alt="Carton Boxes" />
        </div>

      </div>
    </section>
  )
}

export default Hero
