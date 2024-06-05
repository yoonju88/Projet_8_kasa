import React,{useState} from 'react'
import arrowLeft from '../Assets/chevron-left-solid.svg'
import arrowRight from '../Assets/chevron-right-solid.svg'
import '../Styles/index.css'

function Banner ({page, bannerImage, bannerTitle, alt}) {

    const [bannerImageN, setBannerImageN] = useState(0)
    const isImageArray = Array.isArray(bannerImage)

    const increase = () => {
        setBannerImageN(bannerImageN === bannerImage.length - 1 ? 0 : bannerImageN + 1)
    }
    const decrease = () => {
        setBannerImageN(bannerImageN === 0 ? bannerImage.length - 1 : bannerImageN - 1)
    }
    const bannerType = `${page === 'logement' ? 'logement_banner' : 'banner'}`

    return (
        <section className={bannerType}>
            {isImageArray ? (
            <>
                <img src={bannerImage[bannerImageN]} alt={`${alt} ${bannerImageN+1}`} className='logement_bannerImage' />
                { bannerImage.length > 1 && (
                    <>
                        <img src={arrowLeft} alt="arrow left" onClick={decrease} className='arrow arrow_left' />
                        <img src={arrowRight} alt="arrow right" onClick={increase} className='arrow arrow_right'/>
                        <p className="image_number" >{bannerImageN+1}/{bannerImage.length}</p>
                    </>
                )} 
            </>   
        ) : (
            <img src={bannerImage} alt={alt} className='banner_image'/>
        )}
            <h2 className='banner_title'>{bannerTitle}</h2>
        </section>
    )
}
export default Banner