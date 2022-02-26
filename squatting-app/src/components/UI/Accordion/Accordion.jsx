import { useState } from 'react'

import './Accordion.scss'

import { ReactComponent as PlusIcon } from './assets/plus.svg'
import { ReactComponent as MinusIcon } from './assets/minus.svg'


const Accordion = ({ title, body }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div onClick={() => setIsActive(!isActive)} className={isActive ? 'accordion active' : 'accordion'}>
            <div className="accordion__title">
                <p>{ title }</p>
                <PlusIcon className="plus"/>
                <MinusIcon className="minus"/>
            </div>
            <div className="accordion__body">
                <p>{ body }</p>
            </div>
        </div>
    )
}

export default Accordion