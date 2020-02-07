import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design <br/> and to create React apps</h1>
        <p>The perfect size ever</p>
        <br/>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
    </Layout>
)

export default IndexPage
