import React from 'react'
import AproposBannerImage from '../Assets/apropos_banner.jpg'
import '../Styles/index.css'
import { contentList } from '../Data/contentList'
import ContentItem from './AproposItem'
import Banner from './Banner'

function A_Propos(){
    const bannerImage = AproposBannerImage
    const bannerId = 'Apropos banner image'
    const bannerTitle =''
    
    return (
        <section className='apropos'>
            <Banner bannerImage={bannerImage} bannerTitle={bannerTitle} id={bannerId}/>
            <div className='apropos_list'>
                {contentList.map(content =>(
                    <ContentItem key={content.id}
                    title={content.title}
                    description={content.content} />
                ))}              
            </div>     
        </section>
    )        
}

export default A_Propos