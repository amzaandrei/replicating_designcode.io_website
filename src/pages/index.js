import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card/Card"
import Section from "../components/Section/Section"
import Wave from "../components/Wave/Wave"
import staticData from "../../static.json"
import Cell from "../components/Cell/Cell"
import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 60;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px){
    grid-template-columns: repeat(1, 1fr);
  }
`

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
        {/* <Link to="/page-2/">Watch the video</Link> */}
        <Link to="/">Watch the video</Link>
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
    <SectionCaption> 12 Sections in 6 Sections</SectionCaption>
    <SectionCellGroup>
    {staticData.cells.map(cell => (
        <Cell
        title = {cell.title}
        image = {cell.image}
        />
    ))}
    </SectionCellGroup>
    </Layout>
)

export default IndexPage
