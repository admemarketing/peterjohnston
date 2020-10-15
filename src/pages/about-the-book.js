import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/main_book.png'


const ATB = (props)=>{

    const slug = (props.location.href);
     
	const disqusConfig = {
	  shortname: 'peter-johnston-1',
	  config: { identifier:  12, slug}
    }
    
	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path} 
                     blogNav={false}
                />

		 		<Banner titlePage={`<span>Books</span>`}/>

                <main className="wrapperMain" id="about-the-book-body">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:``,
                                    spanFirst: ``,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>
                                        I have written "THE EAGLES WAY" to help the reader understand
                                        holistic or integrate medicine, for most illness, conventional
                                        medicine is the first the phte eagle's way looks at the great
                                        advances in medical science and technology in the peter's lifetime
                                        but also at the rise in popularity of alternative and complementary
                                        therapies ove the last thirty years.
                                    </p> 
                                    <p>
                                        it explores the history of medicine and science, which has led to a 
                                        belief in separation just as psychiatric patients are kept separate from 
                                        medical and surgical  patients so is the mind treated as being separated
                                        from the body. disease is seen as an invasion by germs, allergens, trauma or
                                        carcinogens, while medications and surgery are weapon to fight the invaders.
                                    </p>

                                    <p>
                                        the new scinetific paradigm sees oneness rather than separation,
                                        quantum physics sees matter as a quantum field of energy, responsive to thought.
                                        as part of this, the body is also a structure of energy which responds to
                                        the thoughts and emotions that flow through it. 
                                    </p>

                                    <p>
                                        so while conventional medicine fights disease, the new scientific paradigm
                                        treats disease rather like we would treat a dashboard light indicating
                                        something amiss in our engine. rather than fighting it by disconnecting
                                        the fuse, the message needs to be absorbed, understood and then acted upon.
                                    </p>

                                    <p>
                                        the eagles way briefly describes more than 150 different therapuetic
                                        approaches and the ways in which they operate.
                                    <p>
                                    
                                    <p>
                                        apart from what therapists can do, the eagle's way shows that people
                                        can do for themselves to enhance their health and happiness joy is an
                                        inside job but well worth the search. sort of call but for those with
                                        chronic disease, alternative or complementary therapies can be very helpful.
                                        
                                    </p>
                                    `,

                                    ebooks:{
                                        stratton : '',
                                        barnes: '',
                                        amazon :'', 
                                    },
                                    paperback:{
                                        amazon:'',
                                        barnes:'',
                                        booksamillion:'',
                                    }
                                }} 
                            />
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;