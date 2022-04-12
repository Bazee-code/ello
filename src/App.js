import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import BookPages from './components/BookPages';

const client = new ApolloClient({
  uri: 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: 20 }}>
        <BookPages />
      </div>
    </ApolloProvider>
  );
};

export default App;
