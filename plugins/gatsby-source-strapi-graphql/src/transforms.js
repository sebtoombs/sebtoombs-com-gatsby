const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require(`gatsby/graphql`)
const {
  visitSchema,
  VisitSchemaKind,
} = require(`graphql-tools/dist/transforms/visitSchema`)
const {
  createResolveType,
  fieldMapToFieldConfigMap,
} = require(`graphql-tools/dist/stitching/schemaRecreation`)
const _ = require('lodash')

class NamespaceUnderFieldTransform {
  constructor({ typeName, fieldName, resolver }) {
    this.typeName = typeName
    this.fieldName = fieldName
    this.resolver = resolver
  }

  transformSchema(schema) {

    //console.dir(schema);

    /*const replacedTypes = {};
    Object.keys(schema.getTypeMap()).map(typeName => {
      const type = schema.getType(typeName)
      if(!type.getFields) return;
      let fields = type.getFields();
      if(!fields.ext) return;
      //console.dir(fields.ext)
      /*schema._typeMap[typeName]._fields.extension = {
        type: GraphQLString,
        resolve: ()=>'extension'
      };*/
      //schema._typeMap[typeName]._fields.ext.resolve = () => 'EXTENSION'
    /*  schema._typeMap[typeName]._fields.extension = schema._typeMap[typeName]._fields.ext;
      schema._typeMap[typeName]._fields.extension.resolve = () => (parent, args, context) => {
        console.log(context);
        return 'ext'
      }
    })*/

    const newType = new GraphQLObjectType({
      name: 'Strapi_UploadFile',
      fields: {
        'extension': {
          type: GraphQLString,
          resolve: () => 'test!'
        }
      }
    })

    schema._typeMap.Strapi_UploadFile = newType;

    const query = schema.getQueryType()
    let newQuery
    const nestedType = new GraphQLObjectType({
      name: this.typeName,
      fields: () =>
        fieldMapToFieldConfigMap(
          query.getFields(),
          createResolveType(typeName => {
            /*console.log('FIELD: ',typeName)
            if(typeName === 'Strapi_UploadFile') {
              return newType;
            }*/
            if (typeName === query.name) {
              return newQuery
            } else {
              return schema.getType(typeName)
            }
          }),
          true
        ),
    })

    newQuery = new GraphQLObjectType({
      name: query.name,
      fields: {
        [this.fieldName]: {
          type: nestedType,
          resolve: (parent, args, context, info) => {
            if (this.resolver) {
              return this.resolver(parent, args, context, info)
            } else {
              return {}
            }
          },
        },
      },
    })
    const typeMap = schema.getTypeMap()
    const allTypes = Object.keys(typeMap)
      .filter(name => name !== query.name)
      .map(key => typeMap[key])

    return new GraphQLSchema({
      query: newQuery,
      types: allTypes,
    })
  }
}

class StripNonQueryTransform {
  transformSchema(schema) {
    return visitSchema(schema, {
      [VisitSchemaKind.MUTATION]() {
        return null
      },
      [VisitSchemaKind.SUBSCRIPTION]() {
        return null
      },
    })
  }
}




class CustomTransform {

  constructor({ typeName, fieldName, resolver }) {
    this.typeName = typeName
    this.fieldName = fieldName
    this.resolver = resolver
  }

  transformSchema(schema) {


    return visitSchema(schema, {
      [VisitSchemaKind.QUERY]() {
        return null
      }
    })


    //console.dir(schema._typeMap.UploadFile._fields)

    /*const newType = new GraphQLObjectType({
      name: 'UploadFile',
      fields: {
        'extension': {
          type: GraphQLString,
          resolve: () => 'test!'
        }
      }
    })*/

    /*schema._typeMap.UploadFile._fields['extension'] = {
      name:'extension',
      type: GraphQLString,
      resolve: ()=>'test!!'
    }*/


    const object = schema.getType('UploadFile')

    const methods = {}
    Object.getOwnPropertyNames( Object.getPrototypeOf(object) ).forEach(methodName => {
      methods[methodName] = object[methodName]
    })
    console.log(methods)

    return schema



    return new GraphQLSchema({
      query: schema.getQueryType(),
      types: [newType],
    })


    /*const query = schema.getQueryType()
    let newQuery
    const nestedType = new GraphQLObjectType({
      name: this.typeName,
      fields: () =>
          fieldMapToFieldConfigMap(
              query.getFields(),
              createResolveType(typeName => {
                if (typeName === query.name) {
                  return newQuery
                } else if(typeName === 'UploadFile') {
                  console.log('UPLOAD FILE!!')
                  return newType
                } else {
                  return schema.getType(typeName)
                }
              }),
              true
          ),
    })

    newQuery = new GraphQLObjectType({
      name: query.name,
      fields: {
        [this.fieldName]: {
          type: nestedType,
          resolve: (parent, args, context, info) => {
            if (this.resolver) {
              return this.resolver(parent, args, context, info)
            } else {
              return {}
            }
          },
        },
      },
    })
    const typeMap = schema.getTypeMap()
    const allTypes = Object.keys(typeMap)
        .filter(name => name !== query.name)
        .map(key => typeMap[key])





    return new GraphQLSchema({
      query: newQuery,
      types: allTypes,
    })*/
  }
}




module.exports = {
  NamespaceUnderFieldTransform,
  StripNonQueryTransform,
  CustomTransform
}