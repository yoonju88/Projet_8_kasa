import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/index.css'

function Banner ({bannerImage, bannerTitle, alt}) {

    return (
        <div className='banner' key={bannerTitle}>
            <img src={bannerImage} alt={alt} className='banner_image'/>
            <h2 className='banner_title'>{bannerTitle}</h2>
        </div>
    )
}
export default Banner