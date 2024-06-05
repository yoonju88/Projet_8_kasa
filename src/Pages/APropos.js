import React from 'react'
import AproposBannerImage from '../Assets/apropos_banner.jpg'
import '../Styles/index.css'
import { contentList } from '../Data/contentList'
import ToggleItem from '../Components/ToggleItem'
import Banner from '../Components/Banner'

function APropos(){
    const bannerAlt= 'Apropos banner image'    
    return (
        <main className='apropos'>
            <Banner page='apropos' bannerImage={AproposBannerImage} bannerTitle={''} alt={bannerAlt}/>
            <section className='apropos_list'>
                {contentList.map(content =>(
                    <ToggleItem key={content.id}
                    page="apropos" 
                    title={content.title}>
                        <p>{content.content}</p>
                    </ToggleItem>
                ))}              
            </section>     
        </main>
    )        
}
export default APropos