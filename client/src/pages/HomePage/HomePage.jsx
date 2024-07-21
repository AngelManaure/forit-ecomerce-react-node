import Carrusel from "../../components/Carrusel/Carrusel"
import LoginSection from "../../components/LoginSection/LoginSection"
import FeacturedSection from "../../components/FeacturedSection/FeacturedSection"
import Footer from "../../components/Footer/Footer"

import "./HomePage.css"

function HomePage() {
  return (
    <main className="mainHomePage">
      <div className="homeGaleryContainer">
        <img src="src\assets\home-banner.png" alt="home banner" className="bannerHomeImg" />
        <Carrusel />
      </div>
        <LoginSection />
        <FeacturedSection />
        <Footer />
    </main>
  )
}

export default HomePage