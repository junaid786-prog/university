import pic from '../assets/Crypto.svg'
import '../css/navbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
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
                        <CallOutlinedIcon />
                        <p>+0123456789</p>
                    </div>
                    <div className='navbar_location_combo'>
                        <EmailOutlinedIcon />
                        <p>info@alabana cryptocurrency.com</p>
                    </div>
                    <div className='navbar_location_combo'>
                        <AddLocationAltOutlinedIcon />
                        <p>007 main street, NewYork, USA</p>
                    </div>
                </div>
                <div className='navbar_social_icons'>
                    <TwitterIcon />
                    <LinkedInIcon />
                    <FacebookIcon />
                    <CameraAltIcon />
                </div>
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