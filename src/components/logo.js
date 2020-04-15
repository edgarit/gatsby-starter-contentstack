import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Logo = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
  contentstackLogo {
    file {
      url
    }
  }
}
    `}
    render={data => (
      <>
        <img 
          src={data.contentstackLogo.file.url}
          alt="AOK Systems GmbH"
        />
      </>
    )}
  />
)

export default Logo