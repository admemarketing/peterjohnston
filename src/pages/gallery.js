import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/banner'


const Gallery = ()=>{
    return(
        <>
            <Layout>
		 		<Nav pathExt={props.path} 
                     blogNav={false}
                />

		 		<Banner titlePage={`<span>Gallery</span>`}/>

                <div className="gallery-images">
                

                </div>
            </Layout>
        </>
    )
}

export default Gallery;