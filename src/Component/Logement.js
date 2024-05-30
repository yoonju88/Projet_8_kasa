import React, { useEffect, useState } from 'react'
import '../Styles/index.css'
import { GalleriesList } from '../Data/GalleriesList'
import { useParams, useNavigate} from 'react-router-dom'
import arrowLeft from '../Assets/chevron-left-solid.svg'
import arrowRight from '../Assets/chevron-right-solid.svg'
import arrow from '../Assets/chevron-up-solid.svg'
import { FaStar } from "react-icons/fa"

function Logement() {
    const navigate = useNavigate()
    const { galleryId } = useParams()
    const [bannerImageN, setBannerImageN] = useState(0)
    const [gallery, setGallery] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
    const [isEquipementVisible, setIsEquipementVisible] = useState(false)

    useEffect(() => {
        const gallery = GalleriesList.find(item => item.id === galleryId)
         if (!gallery) {
            navigate("/404")
         } else {
            setGallery(gallery)
            setLoading(false)
         }
     }, [galleryId, navigate])
     if(loading) {
        return  <div className='loading_container'>
            <p className='loading_text'>Loading...</p>
            </div>   
     } 
    const bannerImage = gallery.pictures[bannerImageN]
    const increase = () => {
        setBannerImageN(bannerImageN === gallery.pictures.length - 1 ? 0 : bannerImageN + 1)
    }
    const decrease = () => {
        setBannerImageN(bannerImageN === 0 ? gallery.pictures.length - 1 : bannerImageN - 1)
    }
    const host = gallery.host
    const [firstName, lastName] = host.name.split(' ')
    const ratingByStars = () => {
        const totalStars = 5
        const stars = []
        for (let i = 1; i <= totalStars; i++) {
            stars.push(
                <FaStar key={i} className='star'
                    color={i <= gallery.rating ? '#ff6060' : '#f6f6f6'}
                />
            )
        }
        return <div className='stars_container'>{stars}</div>
    }
    const DescriptionVisibility = () => {
        setIsDescriptionVisible(!isDescriptionVisible)
    }
    const equipementVisibility = () => {
        setIsEquipementVisible(!isEquipementVisible)
    }
    
    return (
        <section className='logement'>
            <div className="logement_banner">
                <img src={bannerImage} alt={`${gallery.title} ${bannerImageN + 1}`} className='logement_bannerImage' />
                <img src={arrowLeft} alt="arrow left" onClick={decrease} className='arrow arrow_left' />
                <img src={arrowRight} alt="arrow right" onClick={increase} className='arrow arrow_right' />
            </div>
            <div className='logement_content'>
                <div className='logement_titleContainer'>
                    <div className='titleContainer'>
                        <h2>{gallery.title}</h2>
                        <p>{gallery.location}</p>
                        <div className='tags'>
                            {gallery.tags.map((tag) => (
                                <div key={tag} className='tags_box'>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='logement_hostWithRating'>
                        <div className='host'>
                            <p className='host_name'>{firstName}<br />{lastName}</p>
                            <img src={host.picture} alt={host.name} className="host_image" />
                        </div>
                        <div className='rating'>
                            {ratingByStars()}
                        </div>
                    </div>
                </div>
                <div className='logement_toggles'>
                    <div className='description'>
                        <div className='title_box'>
                            <p>Description</p>
                            <button onClick={DescriptionVisibility}>
                                <img src={arrow} alt="arrow" className={`arrow_toggle ${isDescriptionVisible ? 'rotated' : ''}`} />
                            </button>
                        </div>
                        {isDescriptionVisible && (
                            <div className={`description_box ${isDescriptionVisible ? 'visible' : 'hidden'}`} >
                                <p>{gallery.description}</p>
                            </div>
                        )}
                    </div>
                    <div className='equipement'>
                        <div className='title_box'>
                            <p>Equipments</p>
                            <button onClick={equipementVisibility}>
                                <img src={arrow} alt="arrow" className={`arrow_toggle  ${isEquipementVisible ? 'rotated' : ''}`} />
                            </button>
                        </div>
                        {isEquipementVisible && (
                            <ul className={`description_box ${isEquipementVisible ? 'visible' : 'hidden'}`}>
                                {gallery.equipments.map((equipement) => (
                                    <li key={equipement}>{equipement}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Logement
