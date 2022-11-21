import React from 'react'
import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import '../css/about.css'
import pic from '../assets/course.png'
const Courses = ({ isActive, setActive }) => {
    useEffect(() => {
        setActive('Courses')
    }, [setActive])
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
                                <button>Basics</button>
                                <button>NFTs</button>
                                <button>Web3</button>
                                <button>Defi</button>
                            </div>
                        </div>
                    </div>
                    <div className='course'>
                        <div className='section_heading'>
                            <h3>Basic Course</h3>
                        </div>
                        <p className='section_para_2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque aperiam sapiente in vitae corrupti dicta culpa sunt illum error quidem laborum, eos nemo. Earum temporibus animi nihil accusantium nemo!
                        </p>
                        <h4>Schedule</h4>
                        <ul className='about_courses courses_section'>
                            <li>
                                <p>
                                    <label>Week 1 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 2 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 3 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 4 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 5 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 6 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 7 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 8 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                        </ul>
                        <h4>Previous classes</h4>
                        <p>Spring 2022</p>
                    </div>
                    <div className='course'>
                        <div className='section_heading'>
                            <h3>NFTs Course</h3>
                        </div>
                        <p className='section_para_2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque aperiam sapiente in vitae corrupti dicta culpa sunt illum error quidem laborum, eos nemo. Earum temporibus animi nihil accusantium nemo!
                        </p>
                        <h4>Schedule</h4>
                        <ul className='about_courses courses_section'>
                            <li>
                                <p>
                                    <label>Week 1 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 2 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 3 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 4 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 5 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 6 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 7 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 8 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                        </ul>
                        <h4>Previous classes</h4>
                        <p>Spring 2022</p>
                    </div>
                    <div className='course'>
                        <div className='section_heading'>
                            <h3>Web3 Course</h3>
                        </div>
                        <p className='section_para_2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque aperiam sapiente in vitae corrupti dicta culpa sunt illum error quidem laborum, eos nemo. Earum temporibus animi nihil accusantium nemo!
                        </p>
                        <h4>Schedule</h4>
                        <ul className='about_courses courses_section'>
                            <li>
                                <p>
                                    <label>Week 1 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 2 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 3 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 4 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 5 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 6 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 7 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 8 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                        </ul>
                        <h4>Previous classes</h4>
                        <p>Spring 2022</p>
                    </div>
                    <div className='course'>
                        <div className='section_heading'>
                            <h3>Defi Course</h3>
                        </div>
                        <p className='section_para_2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque aperiam sapiente in vitae corrupti dicta culpa sunt illum error quidem laborum, eos nemo. Earum temporibus animi nihil accusantium nemo!
                        </p>
                        <h4>Schedule</h4>
                        <ul className='about_courses courses_section'>
                            <li>
                                <p>
                                    <label>Week 1 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 2 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 3 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 4 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 5 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 6 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 7 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                            <li>
                                <p>
                                    <label>Week 8 : </label>
                                    what is crypto?  Principles of crypto! Decenteralization
                                </p>
                            </li>
                        </ul>
                        <h4>Previous classes</h4>
                        <p>Spring 2022</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Courses