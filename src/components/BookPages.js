import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_BOOK_PAGES } from '../queries/queries';
import { useNavigate, Link } from 'react-router-dom';

const BookPages = () => {
  const { data, loading, error } = useQuery(GET_BOOK_PAGES);
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
    <div>
      <h3 style={{ paddingLeft: 20 }}>Page Content</h3>

      {data && data.book && data.book.pages?.length > 0 ? (
        data.book.pages.map((page, index) => {
          let pageToken = page.tokens;
          let pageContent = page.content;
          return (
            <p
              key={index}
              style={{
                fontSize: 15,
                paddingLeft: 20,
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
        <p>Page empty</p>
      )}
    </div>
  );
};

export default BookPages;
