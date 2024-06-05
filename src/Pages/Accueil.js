import React from 'react'
import '../Styles/index.css'
import {GalleriesList} from "../Data/GalleriesList";
import homeBannerImage from '../Assets/home_banner.jpg'
import ToggleItem from '../Components/GalleryItem'
import Banner from '../Components/Banner'

function Accueil(){
    const galleriesList = GalleriesList.map(gallery => (
            <ToggleItem
                key={gallery.id}
                galleryId={gallery.id}
                title={gallery.title}
                cover={gallery.cover}
            />
    )) 
    const bannerTitle = (
        <React.Fragment>Chez vous,<br className='break'/> partout et ailleurs</React.Fragment>
    )
    const bannerAlt = 'Home banner image'

    return (
        <section className='accueil'>
            <Banner bannerImage={homeBannerImage} bannerTitle={bannerTitle} alt={bannerAlt}/>
            <div className='gallery'>
                {galleriesList}
            </div>
        </section>
    )
}
export default Accueil
