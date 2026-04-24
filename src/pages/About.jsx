import "./About.css"
import aboutImg from "../assets/images/slide1.jpg" // optional image

const About = () => {
  return (
    <section className="about">
      <div className="container">

        {/* INTRO */}
        <div className="about-section">

          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Sri Sai Packaging is a trusted carton box manufacturer based in Namakkal. 
              Led by Mr. Muthu Samy and Mr. Saravanan, we specialize in producing high-quality corrugated 
              boxes for various industries.
            </p>

            <p>
              We are committed to delivering strong, reliable packaging solutions 
              with a focus on quality and on-time service. Our products are designed 
              to meet the growing demands of logistics, storage and export industries.
            </p>

            <p>
              With a customer-first approach, we continuously improve our processes 
              to ensure durability, cost-effectiveness and satisfaction.
            </p>
          </div>

          {/* IMAGE (OPTIONAL) */}
          <div className="about-image">
            <img src={aboutImg} alt="company" />
          </div>

        </div>

        {/* VALUES */}
        <div className="about-values">
          <h2>Why Choose Us</h2>

          <div className="values-grid">

            <div className="value-card">
              <h4>Quality First</h4>
              <p>We ensure every box meets high durability standards.</p>
            </div>

            <div className="value-card">
              <h4>On-Time Delivery</h4>
              <p>We value your time and always deliver as promised.</p>
            </div>

            <div className="value-card">
              <h4>Custom Solutions</h4>
              <p>Packaging tailored to your exact business needs.</p>
            </div>

            <div className="value-card">
              <h4>Customer Trust</h4>
              <p>Building long-term relationships with consistent service.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About
