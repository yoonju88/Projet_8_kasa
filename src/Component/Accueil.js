import React from 'react'
import '../Styles/index.css'
import {GalleriesList} from "../Data/GalleriesList";
import BannerImage1 from '../Assets/home_banner.jpg'
import GalleryItem from './GalleryItem'

function Accueil(){
    const galleriesList = GalleriesList.map(gallery => (
            <GalleryItem
                key={gallery.id}
                galleryId={gallery.id}
                title={gallery.title}
                cover={gallery.cover}
            />
    )) 
    return (
        <section className='accueil'>
            <div className='banner'>
                <img src={BannerImage1} alt="Image banner" className='banner_image'/>
                <h2 className='banner_title'>Chez vous,<br className='break'/> partout et ailleurs</h2>
            </div>
            <div className='gallery'>
                {galleriesList}
            </div>
        </section>
    )
}

export default Accueil
