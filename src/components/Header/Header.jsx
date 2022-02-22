import './Header.scss'

import { useState } from 'react'

import logoImage from './assets/logo.png'
import logoRectImage from './assets/logo-rect.png'

import { ReactComponent as DiscordIcon } from './assets/discord.svg'
import { ReactComponent as TwitterIcon } from './assets/twitter.svg'
import { ReactComponent as OpenseaIcon } from './assets/opensea.svg'
import { ReactComponent as MenuIcon } from './assets/menu.svg'
import { ReactComponent as MenuCrossIcon } from './assets/menu-cross.svg'

import { ButtonWhite, ButtonEmpty } from '../UI/Button/Button'


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

const Nav = () => {
    return (
        <nav>{nav.map((el, idx) => <a key={idx} href={el.link}>{ el.body }</a>)}</nav>
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
            <img className="logo" src={logoImage} alt="logo"/>
            <Nav/>
            <Social/>
        </div>
    )
}

const Header = () => {

    const [ isActive, setIsActive ] = useState(false)

    return (
        <header>
            <MobileNav isActive={isActive} setIsActive={setIsActive}/>
            <Logo/>
            <Nav/>
            <Social/>
            <ButtonWhite>Connect Wallet</ButtonWhite>
            <ButtonEmpty onClick={() => setIsActive(true)}><MenuIcon/></ButtonEmpty>
        </header>
    )
}

export default Header