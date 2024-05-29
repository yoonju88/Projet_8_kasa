import React from 'react'
import '../Styles/index.css'

function Banner ({bannerImage, bannerTitle, id}) {
    return (
        <div className='banner' key={id}>
            <img src={bannerImage} alt={id} className='banner_image'/>
            <h2 className='banner_title'>{bannerTitle}</h2>
        </div>
    )
}
export default Banner