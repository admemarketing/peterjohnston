import React from "react"
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/banner'
import FrontBook from '../../static/books/main_book.png'



const Order =  (props) =>{
    return(
        <>
            <Layout>
                <Nav/>
                <Banner titlePage={`<span>Order</span>`} />

                <section className="upper-main" id="main-upper-author">
                    <div className="grid-one-col">
                        <div className="grid-child" id="author-contents">
                            <img 
                                className="book-order-display" 
                                src={FrontBook} 
                                alt="book-display-order"
                            />

                            {
                                /*
                                    Order Custom Powered By Snipcart
                                */
                            }
                            
                            <div className="snipcart-button-container">
                                <button
                                    className="snipcart-add-item"
                                    data-item-id="silver-stacking-ring"
                                    data-item-price="19.99"
                                    data-item-url="/"
                                    data-item-name="Silver Stacking Ring"
                                >
                                    Add to cart
                                </button>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Order;

