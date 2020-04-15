import React from 'react'
//import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import renderHTML from 'react-render-html'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const cards = data.allContentstackCards.edges
  console.log('cards', cards)
  return (
  <Layout>
       <div class="container">
        <div id="flow">
            <span class="flow-1"></span>
            <span class="flow-2"></span>
            <span class="flow-3"></span>
        </div>
        <div class="section">
            <div class="row columns">
            {cards.map(edge => {
          return (
            <div class="column is-one-third">
                    <div class="card large">
                        <div class="card-image">
                            <figure class="image">
                                <img src={edge.node.image.url} alt="a card"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 no-padding">{edge.node.title}</p>
                                </div>
                            </div>
                            <div class="content">
                                {renderHTML(edge.node.content)}
                            </div>
                        </div>
                    </div>
                </div>
          )})}
                
            </div>
    </div>
    </div>
    </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query CardsQuery {
    allContentstackCards(
      limit: 1000
      sort: { order: ASC, fields: [created_at] }
    ) {
      edges {
        node {
          id
          url
          title
          content
          image {
            url
          }
        }
      }
    }
  }
`