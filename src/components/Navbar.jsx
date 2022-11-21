import pic from '../assets/Crypto.svg'
import '../css/navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar_top'>
                <div className='navbar_logo'>
                    <img src={pic} alt='crypto' />
                </div>
                <div className='navbar_input_combo'>
                    <input placeholder='Your Email' />
                    <button><p>Subscribe Now</p></button>
                </div>
                <div className='navbar_location'>
                    <div className='navbar_location_combo'>
                        <p>+0123456789</p>
                    </div>
                    <div className='navbar_location_combo'>
                        <p>info@alabanacrypto currency.com</p>
                    </div>
                    <div className='navbar_location_combo'>
                        <p>007 main street, NewYork, USA</p>
                    </div>
                </div>
                <div className='navbar_social_icons'></div>
            </div>
            <hr />
            <div className='navbar_bottom'>
                <p className='w_30'>Copyright@alabanacryptocurrency2022 allrights reserved</p>
                <div>
                    <p>Privacy Policy</p>
                    <p>Terms and condition</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar