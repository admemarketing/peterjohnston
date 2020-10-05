import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import UpperMain from "../components/author"




const IndexPage = (props) => (
  <Layout>
      <Nav pathExt={props.path}/>
      <Banner titlePage={`
          <span>The</span>
          <span>Eagle's</span>
          <span>Way</span>`
        }/>
      <UpperMain/> 
  </Layout>
)

export default IndexPage