import React from 'react'
import '../Styles/index.css'
import {GalleriesList} from "../Data/GalleriesList";
import BannerImage1 from '../Assets/home_banner.jpg'
import GalleryItem from './GalleryItem'

function Accueil(){
    return (
        <div className='accueil'>
            <div className='banner'>
                <img src={BannerImage1} alt="Image banner" className='banner_image'/>
                <h2 className='banner_title'>Chez vous, partout et ailleurs</h2>
            </div>
            <div className='gallery'>
                {GalleriesList.map(gallery => (
                        <GalleryItem key={gallery.id}
                        title={gallery.title}
                        cover={gallery.cover}
                        description={gallery.description} 
                        pictures={gallery.pictures}
                        host={gallery.host}
                        rating={gallery.rating}
                        location={gallery.location}
                        equipements={gallery.equipments}
                        tags={gallery.tags}                        
                        />   
                ))}
            </div>
        </div>
    )
}

export default Accueil
