import React from 'react'
import '../Styles/index.css'
import {GalleriesList} from "../Data/GalleriesList";
import homeBannerImage from '../Assets/home_banner.jpg'
import GalleryItem from './GalleryItem'
import Banner from './Banner'

function Accueil(){
    const galleriesList = GalleriesList.map(gallery => (
            <GalleryItem
                key={gallery.id}
                galleryId={gallery.id}
                title={gallery.title}
                cover={gallery.cover}
            />
    )) 

    const bannerImage = homeBannerImage
    const bannerTitle = (
        <React.Fragment>Chez vous,<br className='break'/> partout et ailleurs</React.Fragment>
    )
    const bannerId = 'Home banner image'

    return (
        <section className='accueil'>
            <Banner bannerImage={bannerImage} bannerTitle={bannerTitle} id={bannerId}/>
            <div className='gallery'>
                {galleriesList}
            </div>
        </section>
    )
}

export default Accueil
