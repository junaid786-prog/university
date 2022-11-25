import React from 'react'

const Article = ({ title, src }) => {
    return (
        <div className='main_box'>
            <div className='main_box_img'>
                <img src={src} alt='box_img' />
            </div>
            <div className='main_box_info'>
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci fugiat cumque </p>
            </div>
        </div>
    )
}

export default Article