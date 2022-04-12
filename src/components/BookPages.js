import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_BOOK_PAGES } from '../queries/queries';

const BookPages = () => {
  const { data, loading, error } = useQuery(GET_BOOK_PAGES);
  const [text, setText] = useState('');
  console.log('selected', text);

  if (loading) return <p>Loading pages...</p>;
  if (error) return <p>Error : {error}</p>;

  const handleClick = (pageContent, pageToken) => {
    // const subStrings = pageContent.split(' ');
    // const eachString = subStrings.map((string) =>
    //   console.log('string', string)
    // );
    if (getSelection) {
      console.log(getSelection().toString());
    }
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
              style={{ fontSize: 15 }}
              onClick={handleClick}
              //   onClick={() => getSelection && setText(getSelection().toString())}
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
