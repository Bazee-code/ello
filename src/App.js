import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import BookPages from './components/BookPages';
import TokenValue from './components/TokenValue';
import EachBook from './components/EachBook';
import { GET_BOOK_PAGES } from './queries/queries';

const App = () => {
  const { data, loading, error } = useQuery(GET_BOOK_PAGES);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<BookPages data={data} error={error} loading={loading} />}
        />
        <Route path="/:tokenValue" element={<TokenValue />} />
        <Route path="/book/:pageIndex" element={<EachBook />} />
      </Routes>
    </Router>
  );
};

export default App;
