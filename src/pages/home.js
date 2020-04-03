import React from 'react'
import { graphql } from 'gatsby'

import { Link } from 'gatsby'

import Layout from '../components/layout'


export default ({ data }) => {
  return (
    <div>
        <Layout>
    <h1>{data.contentstackWebsiteHome.title}</h1>
    <p>{data.contentstackWebsiteHome.body}</p>
    <Link to="/">Go back to the index</Link>
  </Layout>
  
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