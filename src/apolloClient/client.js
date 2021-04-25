import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost';
import { concat } from '@apollo/client';


const httpLink = new HttpLink({ uri: 'https://graphql.org/swapi-graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      "credentials": 'omit'
    }
  });

  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
