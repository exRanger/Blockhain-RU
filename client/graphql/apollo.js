import {ApolloClient, ApolloLink, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('token'),
    'client-name': 'WidgetX Ecom [web]',
    'client-version': '1.0.0'
  }
});

const formatDateLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    if (response.data.date) {
      response.data.date = new Date(response.data.date);
    }
    return response;
  });
});

export default client
