import React from 'react'
import AproposBannerImage from '../Assets/apropos_banner.jpg'
import '../Styles/index.css'
import { contentList } from '../Data/contentList'
import ToggleItem from '../Components/ToggleItem'
import Banner from '../Components/Banner'

function APropos(){
    const bannerAlt= 'Apropos banner image'    
    return (
        <section className='apropos'>
            <Banner page='apropos' bannerImage={AproposBannerImage} bannerTitle={''} alt={bannerAlt}/>
            <div className='apropos_list'>
                {contentList.map(content =>(
                    <ToggleItem key={content.id}
                    page="apropos"
                    title={content.title}
                    description={content.content} />
                ))}              
            </div>     
        </section>
    )        
}
export default APropos