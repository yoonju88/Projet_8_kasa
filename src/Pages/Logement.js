import React, { useEffect, useState } from 'react'
import '../Styles/index.css'
import { GalleriesList } from '../Data/GalleriesList'
import { useParams, useNavigate} from 'react-router-dom'
import { FaStar } from "react-icons/fa"
import ToggleItem from '../Components/ToggleItem'
import Banner from '../Components/Banner'

function Logement() {
    const navigate = useNavigate()
    const { galleryId } = useParams()
    const [gallery, setGallery] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const gallery = GalleriesList.find(item => item.id === galleryId)
         if (!gallery) {
            navigate("/404")
         } else {
            setGallery(gallery)
            setLoading(false)
         }
         //console.log('useEffet excute')
     },[galleryId, navigate])
     
     if(loading) {
        return  <div className='loading_container'>
                    <p className='loading_text'>Chargement...</p>
                </div>   
     } 
    const bannerImage = gallery.pictures
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
        return <span className='stars_container'>{stars}</span>
    }
    return (
        <main className='logement'>
            <Banner page='logement' bannerTitle='' bannerImage={bannerImage} alt = {gallery.title}/>
            <section className='logement_content'>
                <div className='logement_titleContainer'>
                    <div className='titleContainer'>
                        <h2>{gallery.title}</h2>
                        <p>{gallery.location}</p>
                        <div className='tags'>
                            {gallery.tags.map((tag) => (
                                <span key={tag} className='tags_box'>
                                    {tag}
                                </span>
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
                    <ToggleItem  page="logement" title= "Description">
                        <p>{gallery.description}</p>
                    </ToggleItem> 
                    <ToggleItem  page="logement" title= "Equipments" >
                        <ul>
                        {gallery.equipments.map((equipement) => (
                                    <li key={equipement}>{equipement}</li>
                        ))}
                        </ul>
                    </ToggleItem>                                
                </div>
            </section>
        </main >
    )
}
export default Logement