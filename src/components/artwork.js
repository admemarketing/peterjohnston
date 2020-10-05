import React from 'react'

/* Artwork Images */
import Img1 from '../../static/artworks/1.png'
import Img2 from '../../static/artworks/2.png'
import Img3 from '../../static/artworks/3.png'
import Img4 from '../../static/artworks/4.png'
import Img5 from '../../static/artworks/5.png'
import Img6 from '../../static/artworks/6.png'

const Artwork = () =>{
    
    const art = [Img1, Img2, Img3, Img4, Img5, Img6];

    return (
        <>
            <section className="artworks-section">
                <h1>Artworks</h1>
                <div className="art-row">
                    <div className="art-columns">
                        <img 
                        alt={`artwork-img`} 
                        src={Img1} />
                    </div>
                    <div className="art-columns">
                        <div className="two-columns">
                            <img 
                            alt={`artwork-img`} 
                            src={Img2} />
                            <img 
                            alt={`artwork-img`} 
                            src={Img4} />
                        </div>                
                        <img 
                        alt={`artwork-img`} 
                        src={Img3} />
                    </div>
                    <div className="art-columns">
                  
                        <img 
                        alt={`artwork-img`} 
                        src={Img6} />
                        <img 
                        alt={`artwork-img`} 
                        src={Img5} />
                    </div>
                </div>
            </section>        
        </>
    )
}

export default Artwork