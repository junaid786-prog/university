import React from 'react'
import rect_1 from '../assets/rect.png'
import Post from './Post'
const Tweet = () => {
    return (
        <div>
            <div>
                <img src={rect_1} alt='tweet' />
                <p><label>University Alabama</label> @ Crypto_club Sep23</p>
            </div>
            <div>
                <p>Join us to transform Alabama. Take your tickets</p>
            </div>
            <div>
                <Post />
            </div>
        </div>
    )
}

export default Tweet