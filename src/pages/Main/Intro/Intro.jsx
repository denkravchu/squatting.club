import './Intro.scss'

import bottleImage from './assets/bottle.png'

import { useRenderOnMount } from '../../../hooks/useRenderOnMount'
import { addClassOnVisible } from '../../../utils/functions'
import { useRef } from 'react'

const Intro = () => {
    const introBlockRef = useRef()
    const intro1Ref = useRef()
    const intro2Ref = useRef()
    const intro3Ref = useRef()
    useRenderOnMount('addClassOnVisibleIntro', addClassOnVisible, introBlockRef, [intro1Ref, intro2Ref, intro3Ref], 'visible')

    return (
        <div ref={introBlockRef} id="aboutus" className="section intro">
            <div ref={intro1Ref} className="intro__first wrapper hidden">
                <h2>INTRODUCING THE SQUATIING</h2>
                <p>
                   <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                   <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span> 
                </p>
                <img src={bottleImage} width={466} height={209} alt="bottle" />
            </div>
            <div ref={intro2Ref} className="intro__second wrapper hidden">
                <h3>INTRODUCING THE SQUATIING</h3>
                <p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </p>
            </div>
            <div ref={intro3Ref} className="intro__third wrapper hidden">
                <h3>INTRODUCING THE SQUATIING</h3>
                <p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </p>
            </div>

        </div>  
    )
}

export default Intro