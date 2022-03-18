const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLID, GraphQLInt } = graphql;

// models scheme from mongoose coming in...

const MarketType = new GraphQLObjectType({
  name: 'Market',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  }), 
})

const TopicsType = new  GraphQLObjectType({
  name: "Topics",
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

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: MarketType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
          return  users.find( crypto => crypto.id == args.id)
      },
    },
    jobs: {
      type: TopicsType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return jobs.find(topics => topics.id == args.id)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
});
