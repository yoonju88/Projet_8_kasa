import Logo from '../Assets/kasa_logo.png'
import '../Styles/Footer.css'


function Footer() {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={Logo} alt='Logo Kasa' className='logoKasa_Footer' />
            </div>
            <div>
                <p className='footer_txt'> @ 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )

}
export default Footer