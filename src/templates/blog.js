import React from 'react'
import {graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Thumbnail from '../../static/thumbnail/main_author_thumbnail.png'
import { DiscussionEmbed } from "disqus-react"

export const query = graphql`
	query($slug:String!){
		markdownRemark(fields : {slug: {eq : $slug}}){
			frontmatter{
				title
				date
			}
			html
		}
	}
`

const Blog = (props) =>{
    
    const slug =(props.location.href);
    
    const disqusConfig = {
      shortname: 'peter-johnston-1',
      config: { identifier:  12, slug}
    }

    return(
        <>
            <Layout>
                <Nav 
                    pathExt={props.path}
                    blogNav={true}
                 />
           
                <section className="section-single-blog-post">
                	<div className="container">

                        <div className="two-blog-grid">
                            <div className="single-post-thumbnail">
                                <img src={Thumbnail} alt="thumbnail"/>
                            </div>
                            <div className="single-post-meta">
                                <span className="author-name-single-post">
                                    <Link to="/about-the-author">Peter Johnston</Link>
                                </span>

                               <span className="single-post-date">
                                Published On: {props.data.markdownRemark.frontmatter.date}
                               </span>
                            </div>
                        </div> 

                    	<h1 className="single-heading-title-post">
                    		{props.data.markdownRemark.frontmatter.title}
                    	</h1>

                    
                        <div className="single-post-content">
                             <div 
                                dangerouslySetInnerHTML={{__html: `${props.data.markdownRemark.html}`}}
                              />
                        </div>

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>

                	</div>
                </section>
            </Layout>
        </>
    )
}

export default Blog