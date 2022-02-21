import Header from "../../components/Header/Header"
import Welcome from "./Welcome/Welcome"
import Intro from "./Intro/Intro"
import Roadmap from "./Roadmap/Roadmap"
import Team from "./Team/Team"
import Rarity from "./Rarity/Rarity"
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
        <Footer/>
    </>
    )
}

export default Main