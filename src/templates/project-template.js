import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import VisitWebsiteIcon from "../images/icons/portfolio4.svg"
import Github from "../images/icons/github-mark-white.svg"
import ProjectsList from "../components/ProjectsList"

const shortcodes = { Link }

const PageTemplate = ({ data, children }) => {
  //single post info:
  const {
    frontmatter: { title, tags, link, image, github },
  } = data.mdx
  //for ProjectsList component:
  const { nodes: projectsList } = data.allMdx

  return (
    <Layout>
      <div className="project-page">
        <div className="img-wrapper">
          <a href={link} className="site-link" target="_blank" rel="noreferrer">
            <GatsbyImage
              image={getImage(image)}
              className="main-img"
              alt={title}
            />
          </a>
        </div>
        <h1>{title}</h1>
        <div className="project-info">
          <div className="description">
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </div>
          <div className="details">
            <a
              href={link}
              className="site-link"
              target="_blank"
              rel="noreferrer"
            >
              <VisitWebsiteIcon
                className="icon"
                alt="website with a lightbulb"
              />
              <span>Zobacz stronę</span>
            </a>
            {github && (
              <a
                href={github}
                className="site-link"
                target="_blank"
                rel="noreferrer"
              >
                <Github
                  className="icon"
                  alt="Github logo"
                  viewBox="0 0 100 100"
                />
                <span>Github</span>
              </a>
            )}

            <div className="">
              <h3>Technologie: </h3>
              <div className="tags">
                {tags.map(tag => {
                  return <span className="tag">{tag}</span>
                })}
              </div>
            </div>
          </div>
        </div>
        <h2>Inne projekty</h2>
        <ProjectsList projects={projectsList} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        category
        tags
        link
        github
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
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
      }
    }
  }
`

export default PageTemplate
