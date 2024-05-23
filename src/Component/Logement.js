import React, { useEffect, useState, useId } from 'react'
import '../Styles/index.css'
import { GalleriesList } from '../Data/GalleriesList'
import { useParams } from 'react-router-dom'
import arrowLeft from '../Assets/chevron-left-solid.svg'
import arrowRight from '../Assets/chevron-right-solid.svg'
import arrow from '../Assets/chevron-down-solid.svg'

function Logement() {

    const { galleryId } = useParams()
    /*recup lien depuis galleryItems*/
    const gallery = GalleriesList.find(item => item.id === galleryId)
    const [bannerImageN, setBannerImageN] = useState(0)
    const bannerImage = gallery.pictures[bannerImageN]

    const increase = () => {
        setBannerImageN(bannerImageN === gallery.pictures.length - 1 ? 0 : bannerImageN + 1)
    }
    const decrease = () => {
        setBannerImageN(bannerImageN === 0 ? gallery.pictures.length - 1 : bannerImageN - 1)
    }

    const host = gallery.host
    const [firstName, lastName] = host.name.split(' ')

   
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
    const DescriptionVisibility = () => {
        setIsDescriptionVisible(!isDescriptionVisible)
    }
    const [isEquipementVisible, setIsEquipementVisible] = useState(false)
    const equipementVisibility = () => {
        setIsEquipementVisible(!isEquipementVisible)
    }

    return (
        <div className='logement'>
            <div className="logement_banner">
                <img src={bannerImage} alt={`{gallery.title} `} className='logement_bannerImage' />
                <img src={arrowLeft} alt="arrow left" onClick={decrease} className='arrow arrow_left' />
                <img src={arrowRight} alt="arrow right" onClick={increase} className='arrow arrow_right' />
            </div>
            <div className='logement_content'>
                <div className='logement_content-arrange'>
                    <div className='logement_title'>
                        <h2>{gallery.title}</h2>
                        <p>{gallery.location}</p>
                    </div>
                    <div className='host'>
                        <p className='host_name'>{firstName}<br />{lastName}</p>
                        <img src={host.picture} alt={`{host.name} image`} className="host_image" />
                    </div>
                </div>
                <div className='logement_content-arrange'>
                    <div className='tags'>
                            {gallery.tags.map((tag, index) => (
                                <span className='tags_box'>
                                    <p >{tag}</p>
                                </span>
                            ))}
                    </div>
                    <div className='rating'>

                    </div>
                </div>
                <div className='logement_content-arrange'>
                    <div className='description' >
                        <div className='title_box'>
                            <h3>Description</h3>
                            <a onClick={DescriptionVisibility}>
                                <img src={arrow} alt="arrow" className={`arrow_toggle ${isDescriptionVisible ? 'rotated' : ''}`} />

                            </a>
                        </div>
                        {isDescriptionVisible  && (
                        <div className={`description_box ${isDescriptionVisible ? 'visible' : 'hidden'}`} >
                            <p>{gallery.description}</p>
                        </div>
                        )}
                    </div>
                    <div className='equipement'>
                        <div className='title_box'>
                            <h3>Equipments</h3>
                            <a onClick={equipementVisibility}>
                                <img src={arrow} alt="arrow" className={`arrow_toggle  ${isEquipementVisible ? 'rotated' : ''}`} />
                            </a>
                    </div>
                    {isEquipementVisible  && (
                        <ul className={`description_box ${isEquipementVisible ? 'visible' : 'hidden'}`}>
                            {gallery.equipments.map((equipement, index) => (
                                <li>{equipement}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

        </div>
        </div >
    )

}
export default Logement
