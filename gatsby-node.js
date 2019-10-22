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
        posts: allSanityPost {
            edges {
                node {
                    id
                    slug {
                        current
                    }
                }
            }
        }
    }`

    const result = await graphql(queryPosts)

    if(result.errors) throw new Error(result.errors)

    const {posts} = result.data

    const component = path.resolve(`./src/templates/post.js`)

    posts.edges.forEach(({node}) => {
        console.log(`Creating post at: /post/${node.slug.current}/`)
        createPage({
            path: `/blog/${node.slug.current}/`,
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
        tags: allSanityCategory {
            edges {
                node {
                    id
                    slug {
                        current
                    }
                    title
                }
            }
        }
    }`

    const result = await graphql(queryTags)

    if(result.errors) throw new Error(result.errors)

    const {tags} = result.data

    const component = path.resolve(`./src/templates/tag.js`)

    tags.edges.forEach(({node}) => {
        createPage({
            path: `/tag/${node.slug.current}/`,
            component: slash(component),
            context: {
                id: node.id
            }
        })
    })
}



/*
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
*/


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

  if(node.internal.type !== `SanityPost`) {
      return {}
  }

  //console.log('PARSING MARKDOWN NODE!!', node)

  const content = ""+node.body;

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


exports.sourceNodes = ({ actions, schema }) => {
    const { createTypes } = actions
    const typeDefs = [
        schema.buildObjectType({
          name: 'SanityPost_Post',
          interfaces: ["Node"],
          fields: {
            slug: {
              type: 'String!',
              resolve(parent) {
                return parent.slug.current
              }
            }
          }
        })
      ]
    createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers,schema }) => {
    const resolvers = {
      SanityCategory: {
        posts: {
            type: [`SanityPost`],
          resolve: (source, args, context, info) => {
            return context.nodeModel.runQuery({
                query: { filter: { categories: {slug: {current: { eq: source.slug.current } } }}},
                type: `SanityPost`,
                firstOnly: false,
            })
          }
        },
      },
      allSanityPost_Posts: {
        type: [`SanityPost_Post`],
        resolve: (source, args, context, info) => {
            return context.nodeModel.runQuery({
                query: {},
                type: `SanityPost`,
                firstOnly: false
            }).map(post=>{
                return {
                    slug: post.slug.current
                }
            })
        }
      }
      /*SanityPost: {
          slug: {
              type: `String`,
              resolve: (source, args, context, info) => {
                  return source.slug.current
              }
          }
      }*/
      /*SanityPost: {
          featuredImage: {
            
            resolve: (source, args, context, info) => {
                return {
                    extension: source.mainImage.asset.extension,
                    path: source.mainImage.asset.path,
                    url: source.mainImage.asset.url,
                    mimeType: source.mainImage.asset.mimeType
                }
                return source.mainImage.asset;
            }
          }
      }*/
    }
    createResolvers(resolvers)
  }