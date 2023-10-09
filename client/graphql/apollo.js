import {ApolloClient, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('token'),
    'client-name': 'WidgetX Ecom [web]',
    'client-version': '1.0.0'
  }
});

export default client
