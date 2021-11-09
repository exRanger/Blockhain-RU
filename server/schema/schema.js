const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLID, GraphQLInt } = graphql;


// models scheme from mongoose coming in...

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
  }), 
});

const JobsType = new  GraphQLObjectType({
  name: "Jobs",
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
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
          return  users.find( user => user.id == args.id)
      },
    },
    jobs: {
      type: JobsType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return jobs.find(job => job.id == args.id)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
});
