const path = require("path")
const projectTemplate = path.resolve(`./src/templates/project-template.js`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }

  const projects = result.data.allMdx.nodes

  projects.forEach(node => {
    createPage({
      path: `/project/${node.frontmatter.slug}`,
      component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}
