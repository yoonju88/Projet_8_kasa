import React, { useState } from 'react'
import arrow from '../Assets/chevron-up-solid.svg'

function ToggleItem({ page, title, children }) {

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    const changeClassName = `${page === 'apropos' ? 'apropos-item' : 'description'}`
    const titleSize =`${page === 'apropos' ? 'apropos_title' : 'description-title'}`
    return (
        <div className={changeClassName}>
            <div className='title_box'>

                <h3 className={titleSize}>{title}</h3>
                <button onClick={toggleVisibility}>
                    <img src={arrow} alt="arrow" className={`arrow_toggle ${isVisible ? 'rotated' : ''}`} />
                </button>
            </div>
            {isVisible && (
                <div className={`description_box ${isVisible ? 'visible' : 'hidden'}`}>
                    <>{children}</>
                </div>
            )}
        </div>
    )
}
export default ToggleItem