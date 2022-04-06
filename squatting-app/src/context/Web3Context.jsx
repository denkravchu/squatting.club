import React, { useState } from "react";
import { useTimer } from 'react-timer-hook';

const mintDate = 'June 04, 2022 03:00:00'
// const mintDate = 'February 23, 2022 10:56:00'


const Web3Context = React.createContext()
const Web3ContextProvider = ({ children }) => {
    const date = new Date(mintDate)

    const [ isAuthorised, setIsAuthorised ] = useState(false)
    const timer = useTimer({ expiryTimestamp: date, onExpire: () => console.log('Enable mint') })

    return (
        <Web3Context.Provider value={{ isAuthorised, setIsAuthorised, timer }}>
            { children }
        </Web3Context.Provider>
    )
}

export default Web3ContextProvider
export { Web3Context }