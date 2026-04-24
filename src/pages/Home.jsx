import Navbar from "../components/layout/Navbar"
import Carousel from "../components/home/carousel/Carousel"
import Hero from "../components/home/hero/Hero"
import WhyChooseUs from "../components/home/whyChooseUs/WhyChooseUs"
import ProductsPreview from "../components/home/productsPreview/ProductsPreview"
import InfrastructurePreview from "../components/home/infrastructurePreview/InfrastructurePreview"
import ContactPreview from "../components/home/contactPreview/ContactPreview"
import Footer from "../components/layout/Footer"

const Home = () => {
  return (
    <>
      <main>
        <Carousel />
        <Hero />
        <WhyChooseUs />
        <ProductsPreview />
        <InfrastructurePreview />
        <ContactPreview />
      </main>
    </>
  )
}

export default Home
