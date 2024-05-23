import React from 'react'
import BannerImage2 from '../Assets/apropos_banner.jpg'
import '../Styles/index.css'
import { contentList } from '../Data/contentList'
import ContentItem from './AproposItem'

function A_Propos(){
    return (
        <div className='apropos'>
            <div className='banner'>
                <img src={BannerImage2} alt="Image banner" className='banner_image'/>   
            </div>
            <div className='apropos_list'>
                {contentList.map(content =>(
                    <ContentItem key={content.id}
                    title={content.title}
                    description={content.content} />
                ))}              
            </div>     
        </div>
    )        
}

export default A_Propos