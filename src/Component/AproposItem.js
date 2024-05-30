import React, { useState } from 'react'
import arrow from '../Assets/chevron-up-solid.svg'

function ContentItem({ title, description }) {

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className='apropos-item'>
            <div className='title_box'>

                <h3 className='apropos_title'>{title}</h3>
                <button onClick={toggleVisibility}>
                    <img src={arrow} alt="arrow" className={`arrow_toggle ${isVisible ? 'rotated' : ''}`} />

                </button>
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