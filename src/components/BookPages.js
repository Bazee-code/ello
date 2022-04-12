import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BOOK_PAGES } from '../queries/queries';

const BookPages = () => {
  const { data, loading, error } = useQuery(GET_BOOK_PAGES);

  console.log('data', data);

  if (loading) return <p>Loading pages...</p>;
  if (error) return <p>Error : {error}</p>;
  return (
    <div>
      <h3>Page Content</h3>
      <ul>
        {data && data.book && data.book.pages?.length > 0 ? (
          data.book.pages.map((page, index) => (
            <li key={index}>{page.content}</li>
          ))
        ) : (
          <p>Page empty</p>
        )}
      </ul>
    </div>
  );
};

export default BookPages;
