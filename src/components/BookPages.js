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
      <p>Book pages here</p>
    </div>
  );
};

export default BookPages;
