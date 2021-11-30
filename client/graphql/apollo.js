import {ApolloClient, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
    uri: "https://gql-2.test.serafim.help/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':'123-123-123-123-123'
    }
})

export default client