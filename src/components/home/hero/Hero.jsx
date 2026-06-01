import "./Hero.css"
import heroImg from "../../../assets/images/home_hero_img1.JPG"

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
            <a href="tel:+919790322256 " className="btn primary">
              Call Now
            </a>

            <a
              href="https://wa.me/919790322256 "
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
