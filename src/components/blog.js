import React from 'react'
import { graphql } from 'gatsby'
import renderHTML from 'react-render-html'

import Layout from './layout'

const BlogPage = ({ data }) => {
  const blog = data.contentstackBlogs
  return (
    <Layout>
      <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title">{blog.title}</p>
                                <div class="tags has-addons level-item">
                                    <span class="tag is-rounded is-info">{blog.authors.map(author => {
                return <span key={author.id}>{author.name}</span>
              })}</span>
                                    <span class="tag is-rounded">May 10, 2018</span>
                                </div>
                            </div>
                        </div>
                        <div class="content article-body">
                            {renderHTML(blog.description)}
                        </div>
                    </div>
                </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    contentstackBlogs(id: { eq: $id }) {
      title
      id
      url
      description
      authors {
        id
        name
      }
    }
  }
`