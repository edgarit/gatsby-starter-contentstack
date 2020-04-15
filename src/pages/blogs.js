import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const blogs = data.allContentstackBlogs.edges
  console.log('blogs', blogs)
  return (
    <Layout>
    <div class="container">
              <section class="articles">
            <div class="column is-8 is-offset-2">
        {blogs.map(edge => {
          return (
            <div key={edge.node.id} className="blogs">
              <br/>
              <div key={edge.node.id} class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title">{edge.node.title}</p>
                                <div class="tags has-addons level-item">
                                    <span class="tag is-rounded is-info">
                                    {edge.node.authors.map(author => {
                return <span key={author.id}>{author.name}</span>
              })}
                                    </span>
                                    <span class="tag is-rounded">May 10, 2018</span>
                                </div>
                            </div>
                        </div>
                        <div class="content article-body">
                            {edge.node.short_title}
                                <Link to={edge.node.url}>
                    <span> Read more </span>
                  </Link>
                        </div>
                    </div>
                </div>
            </div>
          )
        })}
              </div>
                      </section>
        
        </div>
       
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query BlogQuery {
    allContentstackBlogs(
      limit: 1000
      sort: { order: ASC, fields: [created_at] }
    ) {
      edges {
        node {
          id
          url
          title
          short_title
          authors {
            id
            name
          }
        }
      }
    }
  }
`