import "./ContactPreview.css"
import { Link } from "react-router-dom"

const ContactPreview = () => {
  return (
    <section className="contact-preview">
      <div className="container">
        <div className="section-header">
          <h2>
            <Link to="/products" className="title">
              Contact Us
            </Link>
          </h2>
          <p>We’d love to hear from you</p>
        </div>

        <div className="contact-info">
          <p>📍 1/105 Rasipalayam,
            Valaiyapatti Road,
            Mohanur, Namakkal – 637015</p>
          <p>📞 +91 9790322256 , +91 9524655664</p>
          <p>📧 shrisaipacks@gmail.com</p>
          
        </div>

        <Link to="/contact" className="btn primary">
          Get in Touch
        </Link>

      </div>
    </section>
  )
}

export default ContactPreview
