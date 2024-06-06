import React from "react"
import '../Styles/index.css'
import { Link } from 'react-router-dom'



function GalleryItem({galleryId, title, cover}) {


    return(
        <article className="gallery-item" > 
            <Link to={`/Logement/${galleryId}`}>
                <img src={cover} alt={title} className="gallery_item_image" />
                <span className="gallery_image-overlay"></span>
                <h3 className="gallery_item_title">{title}</h3>
            </Link>

        </article>
    )
}

export default GalleryItem
