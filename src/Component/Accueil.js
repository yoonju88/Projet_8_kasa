import React from 'react'
import '../Styles/index.css'
import {GalleriesList} from "../Data/GalleriesList";
import BannerImage1 from '../Assets/home_banner.jpg'
import GalleryItem from './GalleryItem'


function Accueil(){
    return (
        <div className='accueil'>
            <img src={BannerImage1} alt="Image banner" className='banner_image'/>
            <h2 className='banner_title'>Chez vous, partout et ailleurs</h2>
            <div className='gallery'>
                {GalleriesList.map(gallery => (
                        <GalleryItem key={gallery.id}
                        title={gallery.title}
                        cover={gallery.cover}
                        description={gallery.description} />   
                ))}
            </div>
        </div>
    )
}

export default Accueil
