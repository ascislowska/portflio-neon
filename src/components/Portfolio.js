import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProjectsList from "./ProjectsList"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            category
            title
            slug
            image {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
          id
        }
      }
    }
  `)
  const {
    allMdx: { nodes: projects },
  } = data

  return (
    <div className="section dark">
      <h1 id="portfolio">My projects</h1>
      <ProjectsList projects={projects} />
    </div>
  )
}

export default Portfolio
