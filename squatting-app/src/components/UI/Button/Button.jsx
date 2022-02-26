import React from 'react'
import './Button.scss'

const ButtonWhite = ({ children, onClick, className = '' }) => {
    const classes = 'button button-white ' + className 
    return (
        <button onClick={onClick} type='button' className={classes}>{ children }</button>
    )
}

const ButtonRed = ({ children, onClick, className = '' }) => {
    const classes = 'button button-red ' + className 
    return (
        <button onClick={onClick} type='button' className={classes}>{ children }</button>
    )
}

const ButtonEmpty = ({ children, onClick, className = '' }) => {
    const classes = 'button-empty ' + className 
    return (
        <button onClick={onClick} type='button' className={classes}>{ children }</button>
    )
}

export { 
    ButtonWhite,
    ButtonRed,
    ButtonEmpty
}