import './Welcome.scss'

import nftImage from './assets/nft.png'
import nftBackgroundImage from './assets/background.png'

import { Web3Context } from '../../../context/Web3Context'
import { PopupContext } from '../../../context/PopupContext'

import { ButtonRed } from '../../../components/UI/Button/Button'
import { useContext, useEffect, useRef } from 'react'

import Timer from '../../../components/UI/Timer/Timer'

import { mouseParallax } from '../../../utils/functions'
import { LAPTOP_BREAKPOINT } from '../../../utils/constants'
import { useRenderOnMount } from '../../../hooks/useRenderOnMount'

const Welcome = () => {
    const [ showPopupName, setShowPopupName ] = useContext(PopupContext)
    const { timer } = useContext(Web3Context)
    const welcomeRef = useRef()
    const imageRef = useRef()

    useRenderOnMount('welcomeMouseParallax', mouseParallax, welcomeRef, [imageRef], LAPTOP_BREAKPOINT)

    const MintButton = () => {
        if (timer.isRunning) {
            return <Timer/>
        }
        return <ButtonRed onClick={() => setShowPopupName('popup-mint')}>Mint the Gopnik</ButtonRed>
    }

    return (
        <div ref={welcomeRef} id="welcome" className="section welcome">
            <div className="welcome__content">
                <div className="welcome__image">
                    <img ref={imageRef} src={nftImage} width={526} height={715} alt="collection" />
                </div>
                <div className="welcome__text-block">
                    <h1>WELCOME TO THE<br/>SQUATTING CLUB</h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <MintButton/>
                </div>
            </div>
            <div className="welcome__background"></div>
        </div>
    )
}

export default Welcome