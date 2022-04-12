import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import BookPages from './components/BookPages';
import TokenValue from './components/TokenValue';

const client = new ApolloClient({
  uri: 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<BookPages />} />
          <Route path="/:tokenValue" element={<TokenValue />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
