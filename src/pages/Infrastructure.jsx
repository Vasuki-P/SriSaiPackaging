import "./Infrastructure.css"

import factory from "../assets/images/slide1.jpg"
import production from "../assets/images/slide1.jpg"
import testing from "../assets/images/slide1.jpg"
import office from "../assets/images/slide1.jpg"

const infraData = [
  {
    title: "Manufacturing Unit",
    desc: "Our fully equipped facility ensures efficient production of high-quality corrugated boxes with modern machinery.",
    img: factory,
  },
  {
    title: "Production Area",
    desc: "Advanced cardboard processing and box-making units designed for speed, precision, and durability.",
    img: production,
  },
  {
    title: "Quality Testing Room",
    desc: "Dedicated testing space where every product undergoes strict quality checks to ensure strength and reliability.",
    img: testing,
  },
  {
    title: "Office & Operations",
    desc: "Our administrative team ensures smooth operations, order handling, and customer support.",
    img: office,
  },
]

const Infrastructure = () => {
  return (
    <section className="infra-page">
      <div className="container">

        <div className="infra-timeline">
          {infraData.map((item, index) => (
            <div
              key={index}
              className={`infra-item ${index % 2 !== 0 ? "reverse" : ""}`}
            >

              {/* IMAGE */}
              <div className="infra-img">
                <img src={item.img} alt={item.title} />
              </div>

              {/* TEXT */}
              <div className="infra-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Infrastructure
