import React from 'react'

const SocialCard = ({ title, src, link }) => {
    return (
        <div className='social_card'>
            <img src={src} alt={title} />
            <p className='social_title'>{title}</p>
            <p className='social_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod officia tenetur aperiam</p>
            <button className='custom-btn btn-7'><span>{title}</span></button>
        </div>
    )
}

export default SocialCard