import { Link } from "react-router-dom"
import "./WhyChooseUs.css"

import { FaBox, FaClock, FaRulerCombined, FaRupeeSign, FaUsers } from "react-icons/fa"

const features = [
  {
    title: "Consistent Quality",
    desc: "Strong and reliable boxes for safe packaging.",
    icon: <FaBox />,
  },
  {
    title: "On-Time Supply",
    desc: "Orders delivered as promised without delay.",
    icon: <FaClock />,
  },
  {
    title: "Custom Size & Strength",
    desc: "Boxes made exactly for your product needs.",
    icon: <FaRulerCombined />,
  },
  {
    title: "Fair Pricing",
    desc: "Affordable pricing without cutting quality.",
    icon: <FaRupeeSign />,
  },
  {
    title: "Reliable Support",
    desc: "Quick response and long-term service.",
    icon: <FaUsers />,
  }
]

const WhyChooseUs = () => {
  return (
    <section className="whychoose">
      <div className="container">

        <div className="section-header">
          <h2><Link to="/about" className="title">
            Why Choose Sri Sai Packaging
          </Link></h2>
          <p>
            Delivering strength, precision and reliability in every box we manufacture.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
