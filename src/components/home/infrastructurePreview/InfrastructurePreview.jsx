import "./InfrastructurePreview.css"

import img1 from "../../../assets/images/slide1.jpg"
import img2 from "../../../assets/images/slide2.jpg"
import img3 from "../../../assets/images/slide3.jpg"
import img4 from "../../../assets/images/slide2.jpg"
import { Link } from "react-router-dom"

const infraData = [
    {
        title: "Advanced Machinery",
        desc: "Equipped with high-speed automated machines for large-scale production.",
        img: img1,
    },
    {
        title: "Quality Control",
        desc: "Strict quality checks at every stage to ensure durability and precision.",
        img: img2,
    },
    {
        title: "Warehouse Facility",
        desc: "Spacious storage units for safe and organized product handling.",
        img: img3,
    },
    {
        title: "Skilled Workforce",
        desc: "Experienced professionals ensuring consistent output and innovation.",
        img: img4,
    },
]

const InfrastructurePreview = () => {
    return (
        <section className="infra section">
            <div className="container">

                <div className="section-header">
                    <h2>
                        <Link to="/infrastructure" className="title">
                            Our Infrastructure
                        </Link>
                    </h2>
                    <p>Strong foundation backed by modern technology and expertise</p>
                </div>


                <div className="infra-grid">
                    {infraData.map((item, index) => (
                        <div className="infra-card" key={index}>

                            <div className="infra-img">
                                <img src={item.img} alt={item.title} />
                            </div>

                            <div className="infra-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="infra-btn">
                    <Link to="/infrastructure" className="btn primary">
                        View Infrastructure
                    </Link>
                </div>


            </div>
        </section>
    )
}

export default InfrastructurePreview
