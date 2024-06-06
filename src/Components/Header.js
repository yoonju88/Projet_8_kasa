import logoKasa from '../Assets/kasa_logo.png'
import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import '../Styles/index.css'

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
                            <NavLink to="/" activeClassName='active'>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/A_Propos" activeClassName='active'>A propos</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}
export default Header