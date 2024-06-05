import React from 'react'
import '../Styles/index.css'

function Banner ({bannerImage, bannerTitle, alt}) {
    return (
        <section className='banner'>
            <img src={bannerImage} alt={alt} className='banner_image'/>
            <h2 className='banner_title'>{bannerTitle}</h2>
        </section>
    )
}
export default Banner