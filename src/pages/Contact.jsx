import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact-page">
            <div className="container">

                {/* TOP SECTION */}
                <div className="contact-top">

                    {/* MAP */}
                    <div className="contact-map">
                        <a
                            href="https://maps.app.goo.gl/2wkjarjzs7D4kRn18"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <iframe
                                title="map"
                                src="https://www.google.com/maps?q=SRI+SAI+PACKAGING+Valaiyapatti+Road+Rasipalayam+Mohanur+Post+Tamil+Nadu+637015&z=15&output=embed"
                                loading="lazy"
                            ></iframe>
                        </a>
                    </div>


                    {/* INFO */}
                    <div className="contact-details">
                        <h3>Get in Touch</h3>

                        <p>📍 1/105 Rasipalayam,
                            Valaiyapatti Road,
                            Mohanur, Namakkal - 637015</p>
                        <p>📞 +91 9790322256 , +91 9524655664</p>
                        <p>📧 shrisaipacks@gmail.com</p>

                        <div className="working-hours">
                            <h4>Working Hours</h4>
                            <p>Mon – Sat : 9:00 AM – 6:00 PM</p>
                            <p>Sunday : Closed</p>
                        </div>
                    </div>

                </div>

                {/* QUICK CONTACT */}
                <div className="quick-contact">

                    {/* CALL */}
                    <a href="tel:+919790322256" className="contact-card">
                        <h4>Call Us</h4>
                        <p>+91 9790322256</p>
                    </a>

                    {/* WHATSAPP */}
                    <a
                        href="https://wa.me/919944154955"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <h4>WhatsApp</h4>
                        <p>Chat with us</p>
                    </a>

                    {/* EMAIL */}
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=shrisaipacks@gmail.com&su=Product%20Inquiry&body=Hello%20I%20am%20interested%20in%20your%20products"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <h4>Email</h4>
                        <p>Send your query</p>
                    </a>


                </div>
            </div>

            {/* FLOATING WHATSAPP */}
            <a
                href="https://wa.me/919876543210"
                className="whatsapp-float"
                target="_blank"
                rel="noreferrer"
            >
                💬
            </a>

        </section>
    )
}

export default Contact
