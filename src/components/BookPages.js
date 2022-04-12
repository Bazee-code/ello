import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_BOOK_PAGES } from '../queries/queries';
import { useNavigate, Link } from 'react-router-dom';

const BookPages = () => {
  const { data, loading, error } = useQuery(GET_BOOK_PAGES);
  const [selectedText, setSelectedText] = useState('');
  const navigate = useNavigate();

  console.log('selected text', selectedText);

  useState(() => {
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
              onClick={(e) => {
                // e.persist();
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
