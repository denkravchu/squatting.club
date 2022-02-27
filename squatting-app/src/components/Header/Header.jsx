import './Header.scss'

import { useState, useEffect, useContext } from 'react'

import logoImage from './assets/logo.png'
import logoRectImage from './assets/logo-rect.png'

import { ReactComponent as DiscordIcon } from './assets/discord.svg'
import { ReactComponent as TwitterIcon } from './assets/twitter.svg'
import { ReactComponent as OpenseaIcon } from './assets/opensea.svg'
import { ReactComponent as MenuIcon } from './assets/menu.svg'
import { ReactComponent as MenuCrossIcon } from './assets/menu-cross.svg'

import { ButtonWhite, ButtonEmpty, ButtonRed } from '../UI/Button/Button'

import renderer from '../../utils/renderer'

import { PopupContext } from '../../context/PopupContext'

const nav = [
    {
        body: 'About Us',
        link: '#aboutus'
    },
    {
        body: 'Roadmap',
        link: '#roadmap'
    },
    {
        body: 'Team',
        link: '#team'
    },
    {
        body: 'Rarity',
        link: '#rarity'
    },
    {
        body: 'FAQ',
        link: '#faq'
    },
]

const Social = () => {
    return (
        <div className="social">
            <a href="#"><OpenseaIcon/></a>
            <a href="#"><DiscordIcon/></a>
            <a href="#"><TwitterIcon/></a>
        </div>
    )
}

const Nav = ({ setIsActive }) => {
    return (
        <nav>{nav.map((el, idx) => <a key={idx} href={el.link} onClick={() => setIsActive(false)}>{ el.body }</a>)}</nav>
    )
}

const Logo = () => {
    return (
        <picture>
            <source srcSet={logoImage} media="(min-width: 1081px)"/>
            <img className="logo" src={logoRectImage} alt="logo"/>
        </picture>
    )
}

const MobileNav = ({ isActive, setIsActive }) => {
    return (
        <div className={ isActive ? 'mobile-nav active' : 'mobile-nav' }>
            <ButtonEmpty onClick={() => setIsActive(false)} className="mobile-nav__cross"><MenuCrossIcon/></ButtonEmpty>
            <a onClick={() => setIsActive(false)} href="#welcome"><img className="logo" src={logoImage} alt="logo"/></a>
            <Nav setIsActive={setIsActive}/>
            <Social/>
        </div>
    )
}

const Header = () => {
    const [ showPopupName, setShowPopupName ] = useContext(PopupContext)

    const [ isActive, setIsActive ] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        renderer.setToRender(scrollHeader.bind(undefined, setIsScrolled), 'scrollHeader')
        return () => renderer.removeFromRender('scrollHeader')
    }, [])

    function scrollHeader(setIsScrolled) {
        if (window.scrollY >= 100) {
            setIsScrolled(true)
            return
        }
        setIsScrolled(false) 
    }

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <MobileNav isActive={isActive} setIsActive={setIsActive}/>
            <a href="#welcome"><Logo/></a>
            <Nav setIsActive={setIsActive}/>
            <Social/>
            {/* <ButtonWhite>Connect Wallet</ButtonWhite> */}
            <ButtonRed onClick={() => setShowPopupName('popup-mint')}>Mint the Gopnik</ButtonRed>
            <ButtonEmpty onClick={() => setIsActive(true)}><MenuIcon/></ButtonEmpty>
        </header>
    )
}

export default Header