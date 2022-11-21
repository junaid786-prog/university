import Sidebar from '../components/Sidebar'
import '../css/home.css'
import rect_1 from '../assets/rect.png'
import rect_2 from '../assets/rect_1.png'
import course from '../assets/course.png'

import { useEffect } from 'react'
const Home = ({ isActive, setActive }) => {
    useEffect(() => {
        setActive('Home')
    }, [setActive])
    return (
        <div className='page_'>
            <div className='sidebar_'>
                <Sidebar isActive={isActive} setActive={setActive} />
            </div>
            <div className='component_'>
                <div className='home_section'>
                    <div className='section_heading'>
                        <h1>University of <br /> Albama</h1>
                    </div>
                    <div className='main_boxes'>
                        <div className='main_box'>
                            <div className='main_box_img'>
                                <img src={rect_1} alt='box_img' />
                            </div>
                            <div className='main_box_info'>
                                <h3>Arbitrum Scalling Etherium</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci fugiat cumque </p>
                            </div>
                        </div>
                        <div className='main_box'>
                            <div className='main_box_img'>
                                <img src={rect_2} alt='box_img' />
                            </div>
                            <div className='main_box_info'>
                                <h3>Arbitrum Scalling Etherium</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio doloremque ipsa iure </p>
                            </div>
                        </div>
                    </div>
                    <div className='sub_section'>
                        <h3 className='m_10'>Upcoming Events</h3>
                        <div className='sub_section_box'>
                            <p>November 5 - 5:00 AM</p>
                            <h4>Web3 ATL</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam, praesentium reiciendis,</p>
                            <p>Tech Square Atlanta</p>
                        </div>
                    </div>
                    <div className='sub_section'>
                        <h3 className='m_10'>Crypto 101 Courses</h3>
                        <div className='d_flex'>
                            <div className='crypto_courses_left'>
                                <img src={course} alt='courses' />
                            </div>
                            <div className='crypto_courses_right'>
                                <h4>Crypto Foundation Courses</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className='crypto_courses_buttons'>
                                    <button>Basics</button>
                                    <button>NFTs</button>
                                    <button>Web3</button>
                                    <button>Defi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sub_section'>
                        <h3 className='m_10'>Partners</h3>
                        <div className='partner_boxes'>
                            <div className='partner_box'>
                                <h4>Genisis</h4>
                            </div>
                            <div className='partner_box'>
                                <h4>The Tie</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home