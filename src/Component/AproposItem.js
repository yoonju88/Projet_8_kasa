import React, { useState } from 'react'
import arrow from '../Assets/chevron-down-solid.svg'

function ContentItem({ title, description }) {

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className='apropos-item'>
            <div className='title_box'>

                <h3 className='apropo-title'>{title}</h3>
                <a onClick={toggleVisibility}>
                    <img src={arrow} alt="arrow" className={`.arrow_toggle ${isVisible ? 'rotated' : ''}`} />

                </a>
            </div>
            {isVisible && (
                <div className={`description_box ${isVisible ? 'visible' : 'hidden'}`}>
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}
export default ContentItem