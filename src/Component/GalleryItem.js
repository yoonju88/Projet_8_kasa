import React from "react"
import '../Styles/Gallery.css'


function GalleryItem({ title, cover }) {
    return(
        <div className="gallery-item" > 
            <img src={cover} alt={title} className="gallery_item_image" />
            <div className="gallery_image-overlay"></div>
            <h3 className="gallery_item_title">{title}</h3>
        </div>
    )
}

export default GalleryItem
