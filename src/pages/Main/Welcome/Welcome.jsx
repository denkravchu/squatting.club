import './Welcome.scss'

import nftImage from './assets/nft.png'
import nftBackgroundImage from './assets/background.png'


import { ButtonRed } from '../../../components/UI/Button/Button'

const Welcome = () => {
    return (
        <div id="welcome" className="section welcome">
            <div className="welcome__content">
                <div className="welcome__image">
                    <img src={nftImage} width={526} height={715} alt="collection" />
                </div>
                <div className="welcome__text-block">
                    <h1>WELCOME TO THE<br/>SQUATTING CLUB</h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <ButtonRed>Mint Boujee Leopards</ButtonRed>
                </div>
            </div>
            <div className="welcome__background"></div>
        </div>
    )
}

export default Welcome