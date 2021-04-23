const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetGuitars {
      allContentfulGuitar {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  console.log("gatsby node test", result)

  result.data.allContentfulGuitar.nodes.forEach(guitar => {
    guitar.content.tags.forEach(tag => {
      createPage({
        path: `/${tag}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
