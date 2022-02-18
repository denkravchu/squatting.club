import React from 'react'
import './Button.scss'

const ButtonWhite = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='button button-white'>{ children }</button>
    )
}

const ButtonRed = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='button button-red'>{ children }</button>
    )
}

const ButtonEmpty = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='button-empty'>{ children }</button>
    )
}

export { 
    ButtonWhite,
    ButtonRed,
    ButtonEmpty
}