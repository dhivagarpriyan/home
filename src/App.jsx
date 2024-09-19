import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Carousel from "./components/carousel"
import Hero from "./components/Hero"
import NewsLetter from "./components/NewsLetter"
import Feature from "./components/Feature"
import Pricing from "./components/Pricing"
import { Fa1 } from "react-icons/fa6"
import FAQ from "./components/FAQ"


function App() {
  

  return (
    <>
       <Navbar/>
       <Hero/>
       <Feature/>
       <Pricing/>
       <FAQ/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
