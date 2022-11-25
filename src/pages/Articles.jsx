import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Article from '../components/Article'
import { OurArticles } from '../assets/OurArticles'

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
                        {OurArticles.map((article, i) => {
                            return <Article title={article.title} src={article.src} description={article.description} key={i} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles