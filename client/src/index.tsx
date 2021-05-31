import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider
} from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache'
import ChatApp from './pages/ChatApp';

const cache = new InMemoryCache({})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  headers: {
    authorization: localStorage.getItem('token') || '',
    'client-name': 'Chat App',
    'client-version': '1.0.0',
  },
  resolvers: {},
});


ReactDOM.render(
  <ApolloProvider client={client}>
       <ChatApp  />
  </ApolloProvider>,
  document.getElementById('root'),
);
