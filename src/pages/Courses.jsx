import React, { useState } from 'react'
import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import '../css/about.css'
import pic from '../assets/course.png'
import Course from '../components/Course'
const Courses = ({ isActive, setActive }) => {
    useEffect(() => {
        setActive('Courses')
    }, [setActive])
    const [course, setCourse] = useState('Basic Course')
    return (
        <div className='page_'>
            <div className='sidebar_'>
                <Sidebar isActive={isActive} setActive={setActive} />
            </div>
            <div className='component_'>
                <div className='home_section'>
                    <div className='section_heading'>
                        <h1>Our Courses</h1>
                    </div>
                    <div className='d_flex'>
                        <div className='crypto_courses_left'>
                            <img src={pic} alt='courses' />
                        </div>
                        <div className='crypto_courses_right'>
                            <h4>Crypto Foundation Courses</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='crypto_courses_buttons'>
                                <button className={course === 'Basic Course' ? 'selected_course custom-btn btn-7' : 'custom-btn btn-7'} onClick={() => setCourse('Basic Course')}>Basics</button>
                                <button className={course === 'NFTs Course' ? 'selected_course custom-btn btn-7' : 'custom-btn btn-7'} onClick={() => setCourse('NFTs Course')}>NFTs</button>
                                <button className={course === 'Web3 Course' ? 'selected_course custom-btn btn-7' : 'custom-btn btn-7'} onClick={() => setCourse('Web3 Course')}>Web3</button>
                                <button className={course === 'Defi Course' ? 'selected_course custom-btn btn-7' : 'custom-btn btn-7'} onClick={() => setCourse('Defi Course')}>Defi</button>
                            </div>
                        </div>
                    </div>
                    <Course name={course} />
                </div>
            </div>
        </div>
    )
}

export default Courses