/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Header from "./Header/header"
import "./layout.css"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)
  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
    />
      <Header />
      <main>{children}</main>
      <Footer data={data}>
        Background made in Cinema 4D, IOS App in Swift, site in React. <a href="mailto:andrei.amza13@yahoo.com">Email use</a>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
