import React from 'react'
import arrow from '../Assets/chevron-down-solid.svg'
function ContentItem({ title, description }) {
    return (
        <div className='apropos-item'>
            <div className='title_box'>
                <h3 className='apropo-title'>{title}</h3>
                <img src={arrow} alt="arrow down" className='arrow_down'/>
            </div>
            <div className='description_box'>
                <p>{description}</p>
            </div>            
        </div>

    )
}
export default ContentItem