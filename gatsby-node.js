/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const slash = require(`slash`)
const path = require(`path`)



exports.createPages = async({graphql, actions}) => {
    //const {createPage, createRedirect} = actions

    await createTags({graphql, actions})
    await createPosts({graphql, actions})
}




const createPosts = async ({graphql, actions}) => {

    const {createPage, createRedirect} = actions

    const queryPosts = `{
        allStrapiPost {
            edges {
                node {
                    id: strapiId
                    slug
                }
            }
        }
    }`

    const result = await graphql(queryPosts)

    if(result.errors) throw new Error(result.errors)

    const {allStrapiPost} = result.data

    const component = path.resolve(`./src/templates/post.js`)

    allStrapiPost.edges.forEach(({node}) => {
        console.log(`Creating post at: /post/${node.slug}/`)
        createPage({
            path: `/blog/${node.slug}/`,
            component: slash(component),
            context: {
                id: node.id
            }
        })
    })
}



const createTags = async({graphql, actions}) => {
    const {createPage, createRedirect} = actions

    const queryTags = `{
        allStrapiTag {
            edges {
                node {
                    id: strapiId
                    slug
                    title
                }
            }
        }
    }`

    const result = await graphql(queryTags)

    if(result.errors) throw new Error(result.errors)

    const {allStrapiTag} = result.data

    const component = path.resolve(`./src/templates/tag.js`)

    allStrapiTag.edges.forEach(edge => {
        createPage({
            path: `/tag/${edge.node.slug}/`,
            component: slash(component),
            context: {
                id: edge.node.id
            }
        })
    })
}




const readingTime = require('reading-time')

exports.sourceNodes = ({
    actions,
    schema
}) => {
    const { createTypes , createResolvers} = actions

    createTypes([
        `type StrapiTag implements Node {
            posts: [StrapiPost]
        }`,
        schema.buildObjectType({
            name: `StrapiPost`,
            fields: {
                tags: {
                    type: `[StrapiTag]`
                },
              readingTime: {
                type: `String`,
                resolve(parent, args, context) {
                  if(parent.readingTime) return parent.readingTime
                  const stats = readingTime(""+parent.content)
                  return stats.text;
                },
              }
            },
            interfaces: [`Node`],
        })
    ])
}





const showdown = require('showdown')
const _ = require(`lodash`)

exports.onCreateNode = async function(
  {
    node,
    loadNodeContent,
    actions,
    createNodeId,
    reporter,
    createContentDigest,
  }
) {
  const { createNode, createParentChildLink } = actions

  if(node.internal.type !== `StrapiPost`) {
      return {}
  }

  //console.log('PARSING MARKDOWN NODE!!', node)

  const content = ""+node.content;

  const converter = new showdown.Converter();
  const html = converter.makeHtml(content)

  let markdownNode = {
    id: createNodeId(`${node.id} >>> MarkdownRemark`),
    children: [],
    parent: node.id,
    internal: {
      content: content,
      type: `MarkdownRemark`,
    },
  }

  markdownNode.html = html
  
  markdownNode.rawMarkdownBody = node.content

  markdownNode.internal.contentDigest = createContentDigest(markdownNode)

  createNode(markdownNode)
  createParentChildLink({ parent: node, child: markdownNode })

  return markdownNode
}
