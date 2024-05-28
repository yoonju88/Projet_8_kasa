import Logo from '../Assets/kasa_logo.png'
import '../Styles/index.css'


function Footer() {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={Logo} alt='Logo Kasa' className='logo' />
            </div>
            <div>
                <p className='footer_txt'> @ 2020 Kasa. All <br className='break'/>rights reserved</p>
            </div>
        </footer>
    )

}
export default Footer