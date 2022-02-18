import './Header.scss'

import logoImage from './assets/logo.png'
import { ReactComponent as DiscordIcon } from './assets/discord.svg'
import { ReactComponent as TwitterIcon } from './assets/twitter.svg'
import { ReactComponent as OpenseaIcon } from './assets/opensea.svg'

import { ButtonWhite } from '../UI/Button/Button'


const nav = [
    {
        body: 'About Us',
        link: '#aboutus'
    },
    {
        body: 'Road Map',
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

const Header = () => {
    return (
        <header>
            <img src={logoImage} width={154} height={42} alt="logo" />
            <nav>{nav.forEach(el => <a href={el.link}>{ el.body }</a>)}</nav>
            <div className="social">
                <OpenseaIcon/>
                <DiscordIcon/>
                <TwitterIcon/>
            </div>
            <ButtonWhite>Connect Wallet</ButtonWhite>
        </header>
    )
}

export default Header