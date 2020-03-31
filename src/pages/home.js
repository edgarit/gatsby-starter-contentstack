import React from 'react'
import { graphql } from 'gatsby'

import { Link } from 'gatsby'

import Layout from '../components/layout'


export default ({ data }) => {
  return (
    <div>
        <Layout>
    <h1>{data.contentstackWebsiteHome.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  {data.contentstackWebsiteHome.body}
    </div>
    
  )
}
export const pageQuery = graphql`
    query HomeQuery {
      contentstackWebsiteHome {
        title
        body
      }
    }
`