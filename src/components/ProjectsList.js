import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsList = ({ projects }) => {
  const backgroundColors = [
    "pastel-yellow",

    "pastelgreen",
    "neon-blue",
    "pastelviolet",
    "pastel-pink",
    //"sweatbitter",
  ]

  return (
    <div className="projects-list">
      {projects.map((project, id) => {
        const {
          frontmatter: { title, category, slug, image },
          id: projectId,
        } = project

        const backgroundColor = backgroundColors[id % backgroundColors.length]

        return (
          <Link className="project" to={`/project/${slug}`} key={projectId}>
            <div className={`project-info ${backgroundColor}`}>
              <h2 className="project-title">{title}</h2>
              <div className="project-category">{category}</div>
            </div>
            <GatsbyImage image={getImage(image)} className="img-wrapper" />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectsList
