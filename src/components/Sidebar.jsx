import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Crypto.svg'
import '../css/sidebar.css'
const Sidebar = ({ isActive, setActive }) => {
    return (
        <div className='sidebar'>
            <div className='sidebar_logo'>
                <img src={logo} alt='university project' />
            </div>
            <div className='sidebar_options'>
                <Link to='/'>
                    <div className={isActive === 'Home' ? 'sidebar_option active_option' : 'sidebar_option'} onClick={() => setActive('Home')}>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/about'>
                    <div className={isActive === 'About' ? 'sidebar_option active_option' : 'sidebar_option'} onClick={() => setActive('About')}>
                        <p>About</p>
                    </div>
                </Link>
                <Link to='/articles'>
                    <div className={isActive === 'Articles' ? 'sidebar_option active_option' : 'sidebar_option'} onClick={() => setActive('Articles')}>
                        <p>Articles</p>
                    </div>
                </Link>
                <Link to='/courses'>
                    <div className={isActive === 'Courses' ? 'sidebar_option active_option' : 'sidebar_option'} onClick={() => setActive('Courses')}>
                        <p>Courses</p>
                    </div>
                </Link>
                <Link to='/contact'>
                    <div className={isActive === 'Contact' ? 'sidebar_option active_option' : 'sidebar_option'} onClick={() => setActive('Contact')}>
                        <p>Contact</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar