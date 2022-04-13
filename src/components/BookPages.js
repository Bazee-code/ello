import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

const BookPages = ({ data, loading, error }) => {
  const [selectedText, setSelectedText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedText(selectedText);
  }, [selectedText]);

  if (loading) return <p>Loading pages...</p>;
  if (error) return <p>Error : {error}</p>;

  const handleClick = (pageToken) => {
    if (getSelection) {
      setSelectedText(getSelection().toString());
    }

    pageToken.map(
      (token) => token.value === selectedText && navigate(`/${token.value}`)
    );
  };

  return (
    <div style={{ paddingLeft: 20 }}>
      <h3>Page Content</h3>

      {data && data.book && data.book.pages?.length > 0 ? (
        data.book.pages.map((page, index) => {
          let pageToken = page.tokens;
          let pageContent = page.content;
          return (
            <p
              key={index}
              style={{
                fontSize: 15,
                cursor: 'pointer',
              }}
              onClick={() => {
                handleClick(pageToken);
              }}
            >
              {pageContent}
            </p>
          );
        })
      ) : (
        <p>No books</p>
      )}
      <Pagination data={data} />
    </div>
  );
};

export default BookPages;
