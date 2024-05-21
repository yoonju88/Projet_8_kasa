import React, {useId} from 'react'
import BannerImage2 from '../Assets/apropos_banner.jpg'
import '../Styles/index.css'
import { contentList } from '../Data/contentList'
import ContentItem from './ContentItem'

function A_Propos(){
    const id=useId()
    return (
        <div className='apropos'>
            <img src={BannerImage2} alt="Image banner" className='banner_image'/>   
            <div className='apropos_list'>
                {contentList.map(content =>(
                    <ContentItem key={id}
                    title={content.title}
                    description={content.content} />
                ))}                
            </div>     
        </div>
    )        
}

export default A_Propos