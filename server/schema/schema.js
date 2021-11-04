const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLID, GraphQLInt } = graphql;
//fake backend 
let users = [
  {
    id: 1,
    name: "KURT",
    surname: "KOBEIN",
    jobId: 1
  },
  {
    id: 2,
    name: "LOXNES ",
    surname: "KEK",
    jobId: 2
  },
  {
    id: 3,
    name: "THOMAS",
    surname: "SMITH",
    jobId: 3
  },
  {
    id: 4,
    name: "ADAM",
    surname: "MORNINGSTAR",
    jobId: 4
  }
]

const jobs = [
  {
    id: '1',
    job: 'Front-end developer',
    experience: 5
  },
  {
    id: '2',
    job: "DevOps engineer",
    experience: 4
  },
  {
    id: '3',
    job: 'Data science engineer',
    experience: 8
  },
  {
    id: '3',
    job: 'Bussines analitic expert',
    experience: 5
  }
]

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
