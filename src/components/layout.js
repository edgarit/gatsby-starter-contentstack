import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

//import Header from './header'
import Navbar from './navbar'
import "./mystyles.scss"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
{/*}        <Header siteTitle={data.site.siteMetadata.title} />*/}
        
        <section class="hero is-fullheight">
        <div class="hero-head edtransparent">
          <Navbar/>
        </div>
  <div class="hero-body">
    <div class="container">
          {children}
</div>
  </div>
</section>
<footer class="footer">
  <br/>
  <div class="content has-text-centered">
  <b>site built using only cloud services:</b><br/><br/>
  <a href="https://eu-app.contentstack.com/">consuming headless cms from eu host of Contentstack</a><br/>
  <a href="https://www.gatsbyjs.org/">
  site generator using react and graphql with Gatsby
</a><br/>
  spaceimage by <a href="https://pixabay.com/de/users/Sttefan-3916977/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1982212">Stefan Popovici</a> from <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1982212">Pixabay</a><br/>
    <a href="https://bulma.io">
  styles based on sass and Bulma
</a><br/>
<a href="https://www.netlify.com/">tested on CDN host using netlify</a><br/>
<a href="https://github.com/">code stored on github</a><br/>
<a href="https://repl.it/">code edited on replit</a>
  </div>
</footer>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
