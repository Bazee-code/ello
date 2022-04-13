import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import BookPages from './components/BookPages';
import TokenValue from './components/TokenValue';
import EachBook from './components/EachBook';
import { GET_BOOK_PAGES } from './queries/queries';

const App = () => {
  const { data, loading, error } = useQuery(GET_BOOK_PAGES);
  const navigate = useNavigate();
  const [selectedText, setSelectedText] = useState('');

  const handleClick = (pageToken) => {
    if (getSelection) {
      setSelectedText(getSelection().toString());
    }

    pageToken.map(
      (token) => token.value === selectedText && navigate(`/${token.value}`)
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <BookPages
            data={data}
            error={error}
            loading={loading}
            handleClick={handleClick}
          />
        }
      />
      <Route path="/:tokenValue" element={<TokenValue />} />
      <Route
        path="/book/:pageIndex"
        element={
          <EachBook
            data={data}
            loading={loading}
            error={error}
            handleClick={handleClick}
          />
        }
      />
    </Routes>
  );
};

export default App;
