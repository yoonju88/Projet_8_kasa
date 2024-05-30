import React from 'react'
import AproposBannerImage from '../Assets/apropos_banner.jpg'
import '../Styles/index.css'
import { contentList } from '../Data/contentList'
import ContentItem from './AproposItem'
import Banner from './Banner'

function APropos(){
    const bannerAlt= 'Apropos banner image'
    
    return (
        <section className='apropos'>
            <Banner bannerImage={AproposBannerImage} bannerTitle={''} alt={bannerAlt}/>
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

export default APropos