import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

const BookPages = ({ data, loading, error, handleClick }) => {
  if (loading) return <p>Loading pages...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ paddingLeft: 20, width: '70%' }}>
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
      </div>
      <div style={{ width: '30%', margin: 100 }}>
        <Pagination />
      </div>
    </div>
  );
};

export default BookPages;
