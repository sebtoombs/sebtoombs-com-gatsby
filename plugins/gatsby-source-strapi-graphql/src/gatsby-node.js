const uuidv4 = require(`uuid/v4`)
const {graphql, buildSchema, printSchema } = require(`graphql`)
const {
  makeRemoteExecutableSchema,
  transformSchema,
  introspectSchema,
  RenameTypes,
    mergeSchemas
} = require(`graphql-tools`)
const { createHttpLink } = require(`apollo-link-http`)
const fetch = require(`node-fetch`)
const invariant = require(`invariant`)

const {request} =require('graphql-request')


const {
  NamespaceUnderFieldTransform,
  StripNonQueryTransform,
  CustomTransform
} = require(`./transforms`)

exports.sourceNodes = async (
  { actions, createNodeId, cache, createContentDigest },
  options
) => {
  const { addThirdPartySchema, createPageDependency, createNode } = actions
  const {
    url,
    typeName,
    fieldName,
    headers = {},
    fetchOptions = {},
    createLink,
    createSchema,
    refetchInterval,
  } = options

  invariant(
    typeName && typeName.length > 0,
    `gatsby-source-graphql requires option \`typeName\` to be specified`
  )
  invariant(
    fieldName && fieldName.length > 0,
    `gatsby-source-graphql requires option \`fieldName\` to be specified`
  )
  invariant(
    (url && url.length > 0) || createLink,
    `gatsby-source-graphql requires either option \`url\` or \`createLink\` callback`
  )

  let link
  if (createLink) {
    link = await createLink(options)
  } else {
    link = createHttpLink({
      uri: url,
      fetch,
      headers,
      fetchOptions,
    })
  }

  let introspectionSchema

  if (createSchema) {
    introspectionSchema = await createSchema(options)
  } else {
    const cacheKey = `gatsby-source-graphql-schema-${typeName}-${fieldName}`
    let sdl = await cache.get(cacheKey)

    if (!sdl) {
      introspectionSchema = await introspectSchema(link)
      sdl = printSchema(introspectionSchema)
    } else {
      introspectionSchema = buildSchema(sdl)
    }

    await cache.set(cacheKey, sdl)
  }

  const remoteSchema = makeRemoteExecutableSchema({
    schema: introspectionSchema,
    link,
  })

  const nodeId = createNodeId(`gatsby-source-graphql-${typeName}`)
  const node = createSchemaNode({
    id: nodeId,
    typeName,
    fieldName,
    createContentDigest,
  })
  createNode(node)

  const resolver = (parent, args, context) => {
    createPageDependency({ path: context.path, nodeId: nodeId })
    return {}
  }

  ////////////

  /*const typeExtensions = `
  extend type UploadFile {
    extension: String,
  }
 `;

  const schemaExtensionResolvers = {
    UploadFile: {
      extension: async (parent, args, context, info) => {

        //console.log('field: ', remoteSchema.getType(info.parentType)._fields.ext.resolve(parent, args, context, info));
        //console.dir(remoteSchema.getType(info.parentType)._fields.ext)
        //console.dir(info)
            // ._fields.ext - type, args, name, resolve (fn)
        console.dir(context)
        return parent.ext.replace('.', '')

      }
    }
  };

  const newSchema = mergeSchemas({
    schemas: [
      remoteSchema,
      typeExtensions
    ],
    resolvers: schemaExtensionResolvers
  });*/


  ////////////

  const schema = transformSchema(remoteSchema, [
      /*new CustomTransform({
        typeName, fieldName, resolver
      }),*/
    new StripNonQueryTransform(),
    //new RenameTypes(name => `${typeName}_${name}`),
    /*new NamespaceUnderFieldTransform({
      typeName,
      fieldName,
      resolver,
    })*/
  ])



  //addThirdPartySchema({ schema })

  /*if (process.env.NODE_ENV !== `production`) {
    if (refetchInterval) {
      const msRefetchInterval = refetchInterval * 1000
      const refetcher = () => {
        createNode(
          createSchemaNode({
            id: nodeId,
            typeName,
            fieldName,
            createContentDigest,
          })
        )
        setTimeout(refetcher, msRefetchInterval)
      }
      setTimeout(refetcher, msRefetchInterval)
    }
  }*/


  /*const promises = Object.keys(schema.getTypeMap()).map(typeName => {

  })*/



  console.log('!!!!!!!!!!!!!!!!  PLUGIN   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

  const query = schema.getType("Query");
  const fields = query.getFields()
  const promises = await Object.keys(fields).map(async fieldName => {
    const field = fields[fieldName]
    if(field.astNode.type.kind === 'ListType') {
      console.log('FIELD', fieldName)
      //console.log(fields[fieldName])
      const listType = field.type.ofType
      const listTypeFields = schema.getType(listType).getFields()

      Object.keys(listTypeFields).map(listTypeFieldName => {
        console.log('FIeld: ',listTypeFieldName)
        console.log('TYPE', listTypeFields[listTypeFieldName].type instanceof GraphQLScalarType)
      })

      const q = `
      {
        ${fieldName} {
          ${Object.keys(listTypeFields).map(key => {
            if(listTypeFields[key].type instanceof GraphQLScalarType) return `${key}`
          })}
        }
      }
      `
      console.log('q', q)

      let data = await graphql(schema, q)
      console.log('DATA', data.data)
    }
  })






}

function createSchemaNode({ id, typeName, fieldName, createContentDigest }) {
  const nodeContent = uuidv4()
  const nodeContentDigest = createContentDigest(nodeContent)
  return {
    id,
    typeName: typeName,
    fieldName: fieldName,
    parent: null,
    children: [],
    internal: {
      type: `GraphQLSource`,
      contentDigest: nodeContentDigest,
      ignoreType: true,
    },
  }
}
