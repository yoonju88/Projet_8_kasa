import logoKasa from '../Assets/kasa_logo.png'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/index.css'
import styles from '../Styles/logo.module.css'

function Header() {
    return(
            <header>
                <h1>
                    <Link to="/">
                        <img src={logoKasa} alt='Logo Kasa' className='header_logo' />
                    </Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/A_Propos">A propos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header