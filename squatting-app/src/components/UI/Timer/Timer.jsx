import './Timer.scss'

import { Web3Context } from '../../../context/Web3Context'
import { useContext } from 'react'

const Timer = () => {
    const { timer } = useContext(Web3Context)
    return (
        <div className="timer">
            <h4>Mint in</h4>
            <div className="timer__time">
                <div data-text="days">
                    <p>{ timer.days }</p>
                </div>
                <div data-text="hours">
                    <p>{ timer.hours }</p>
                </div>
                <div data-text="minutes">
                    <p>{ timer.minutes }</p>
                </div>
                <div data-text="seconds">
                    <p>{ timer.seconds }</p>
                </div>
            </div>
        </div>
    )
}

export default Timer
