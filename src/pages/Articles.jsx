import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import rect_1 from '../assets/rect.png'
import rect_2 from '../assets/rect_1.png'
import rect_3 from '../assets/rect_3.png'

const Articles = ({ isActive, setActive }) => {
    useEffect(() => {
        setActive('Articles')
    }, [setActive])
    return (
        <div className='page_'>
            <div className='sidebar_'>
                <Sidebar isActive={isActive} setActive={setActive} />
            </div>
            <div className='component_'>
                <div className='home_section'>
                    <div className='section_heading'>
                        <h1>Our Articles</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque aperiam sapiente in vitae corrupti dicta culpa sunt illum error quidem laborum, eos nemo. Earum temporibus animi nihil accusantium nemo!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quam maiores repellendus est impedit aspernatur veritatis eius accusamus dolore, sint atque doloremque, minus suscipit blanditiis autem? Neque in exercitationem mollitia.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae atque, facilis unde quam molestias dolore quaerat blanditiis aut dicta vel eligendi quod debitis quia necessitatibus natus facere dolores fugit! Quam!
                    </p>
                    <div className='main_boxes mt_10'>
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
                    <div className='main_boxes mt_10'>
                        <div className='main_box'>
                            <div className='main_box_img'>
                                <img src={rect_3} alt='box_img' />
                            </div>
                            <div className='main_box_info'>
                                <h3>Arbitrum Scalling Etherium</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci fugiat cumque </p>
                            </div>
                        </div>
                        <div className='main_box'>
                            <div className='main_box_img'>
                                <img src={rect_1} alt='box_img' />
                            </div>
                            <div className='main_box_info'>
                                <h3>Arbitrum Scalling Etherium</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio doloremque ipsa iure </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles