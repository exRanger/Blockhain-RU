const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString,GraphQLSchema, GraphQLID, GraphQLInt } = graphql

type Token @entity {
  id: ID!
  tokenID: BigInt!
  contentURI: String
  tokenIPFSPath: String
  name: String!
  createdAtTimestamp: BigInt!
  creator: User!
  owner: User!
}
// entity
type User @entity {
  id: ID!
  tokens: [Token!]! @derivedFrom(field: "owner")
  created: [Token!]! @derivedFrom(field: "creator")
}

const MarketType = new GraphQLObjectType({
  name: 'getHash',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  }), 
}) as User
// topics
const TopicsType = new  GraphQLObjectType({
  name: "geetTokenName",
  fields: () => ({
    id: {type: GraphQLID},
    job: {type: GraphQLString },
    experience: {type: GraphQLInt },
    user: {  
      type: UserType,
      resolve(parent, args){
        return users.find( user => parent.id == user.id)
      }
    }
  })
})
// query gql
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ERC_20: {
      type: MarketType,
      args: { id: { type: GraphQLID } },
      resolve(token, args) {
          return token + sers.find(crypto => crypto.id == args.id)
      },
    },
    BSC_20: {
      type: TopicsType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return jobs.find(chainValue => parent.id == chainValue.id)
      }
    }
  }
}) as Token;

module.exports = new GraphQLSchema({
  query: Query,
});
