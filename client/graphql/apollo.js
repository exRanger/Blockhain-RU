import {ApolloClient, ApolloLink, InMemoryCache} from "@apollo/client"
import {asyncMap} from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('token'),
    'client-name': 'WidgetX Ecom [web]',
    'client-version': '1.0.0'
  }
});

export const formatDateLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    if (response.data.date) {
      response.data.date = new Date(response.data.date);
    }
    return response;
  });
});

export const usdToEurLink = new ApolloLink((operation, forward) => {
  return asyncMap(forward(operation), async (response) => {
    let data = response.data;
    if (data.price && data.currency === "USD") {
      data.price = await usdToEur(data.price);
      data.currency = "EUR";
    }
    return response;
  });
});

export default client
