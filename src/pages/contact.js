import React from 'react'
import Layout from '../components/layout'
import Inputs from "../components/Inputs/inputs"
import Nav from '../components/nav'
import Banner from '../components/banner'

import AuthorImg from '../../static/author/author.png'


import Fb from "../../static/logo/fb.png"
import Pinterest from "../../static/logo/pinterest.png"
import Twitter from "../../static/logo/twitter.png"

const Contact = (props)=>{

    
	function OnSubmitForm (e) {

	    e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            } else {
            	console.log('something went wrong')
            }
        };

        xhr.send(data);
       
    }
    

    return(
        <>
            <Layout>
		 		<Nav pathExt={props.path}/>
		 		<Banner titlePage={`<span>Contact</span>`}/>

                <main className="flexMainContainer" id="contact-bg">
                    <h1>Contact</h1>
                    <div className="flex-container-fx">
                        <div className="grid-two-columns">

                            <div className="grid-child author-image-container">
                                <img src={AuthorImg} alt="author-image"/>
                                <p className="author-name">Dr. Peter L. Johnston</p>

                                <ul className="social-media-list">
                                    <li>
                                        <img src={Pinterest} alt="medias"/>
                                    </li>
                                    <li>
                                        <img src={Twitter} alt="medias"/>
                                    </li>
                                    <li>
                                        <img src={Fb} alt="medias"/>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid-child">
                                <div className="">
                                    <form 
                                    onSubmit={OnSubmitForm}
                                    action="https://formspree.io/xvopdpny"
                                    method="POST"
                                    className="form-custom">
                                        <label>
                                            <input 
                                                type="text"
                                                placeholder="Name"
                                            />
                                        </label>

                                        <label>
                                            <input 
                                                type="Email"
                                                placeholder="Email"
                                            />
                                        </label>
                                        
                                        <label> 
                                            <textarea type="text" name='message' 
                                                className="textArea"
                                                placeholder='Message'
                                                required />
                                        </label>

                                        <div className="buttonContainer">
                                            <input 
                                                className="abtiaryButton" 
                                                value="Submit"
                                                type="submit" />
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

		 	</Layout>
        </>
    )
}

export default Contact;