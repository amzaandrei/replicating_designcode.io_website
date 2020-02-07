import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGrup">
        <h1>Learn to design and to create React apps</h1>
        <p>The perfect size ever</p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
