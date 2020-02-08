import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card/Card"
import Section from "../components/Section/Section"
import Wave from "../components/Wave/Wave"

const IndexPage = () => (
    <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design <br/> and to create React apps</h1>
        <p>The perfect size ever</p>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
        </div>
        <br/>
        <Link to="/page-2/">Watch the video</Link>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses that are coming</h2>
      <div className="CardGroup">
        <Card 
        title="Design System"
        text="10 sections"
        image={require('../images/wallpaper.jpg')}
        />
        <Card 
        title="React for Designers"
        text="12 sections"
        image={require('../images/wallpaper2.jpg')}
        />
        <Card 
        title="Sound Design"
        text="9 sections"
        image={require('../images/wallpaper3.jpg')}
        />
        <Card 
        title="ARKit 2"
        text="7 sections"
        image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section 
      image = {require('../images/wallpaper2.jpg')}
      logo =  {require('../images/logo-react.png')}
      title = "React for Designers"
      text = "Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal brought minuter raising invited gay. Contented consisted continual curiosity contained get sex. Forth child dried in in aware do. You had met they song how feel lain evil near. Small she avoid six yet table china. And bed make say been then dine mrs. To household rapturous fulfilled attempted on so. "
    />
    </Layout>
)

export default IndexPage
