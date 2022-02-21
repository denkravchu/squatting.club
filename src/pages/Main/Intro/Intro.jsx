import './Intro.scss'

import bottleImage from './assets/bottle.png'

const Intro = () => {
    return (
        <div className="section intro">
            <div className="intro__first wrapper">
                <h2>INTRODUCING THE SQUATIING</h2>
                <p>
                   <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                   <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span> 
                </p>
                <img src={bottleImage} width={466} height={209} alt="bottle" />
            </div>
            <div className="intro__second wrapper">
                <h3>INTRODUCING THE SQUATIING</h3>
                <p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </p>
            </div>
            <div className="intro__third wrapper">
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