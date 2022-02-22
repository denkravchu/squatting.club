import Header from "../../components/Header/Header"
import Welcome from "./Welcome/Welcome"
import Intro from "./Intro/Intro"
import Roadmap from "./Roadmap/Roadmap"
import Team from "./Team/Team"
import Rarity from "./Rarity/Rarity"
import FAQ from "./FAQ/FAQ"
import Footer from "../../components/Footer/Footer"

const Main = () => {
    return (
    <>
        <Header/>
        <Welcome/>
        <Intro/>
        <Roadmap/>
        <Team/>
        <Rarity/>
        <FAQ/>
        <Footer/>
    </>
    )
}

export default Main