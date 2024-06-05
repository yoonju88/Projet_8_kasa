import React from "react"
import '../Styles/index.css'
import { Link } from 'react-router-dom'



function GalleryItem({galleryId, title, cover}) {


    return(
        <div className="gallery-item" > 
            <Link to={`/Logement/${galleryId}`}>
                <img src={cover} alt={title} className="gallery_item_image" />
                <div className="gallery_image-overlay"></div>
                <h3 className="gallery_item_title">{title}</h3>
            </Link>

        </div>
    )
}

export default GalleryItem
