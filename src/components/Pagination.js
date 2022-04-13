import { useNavigate } from 'react-router-dom';
import React, { useState,} from 'react';
import Button from './Button';

const Pagination = () => {
  let navigate = useNavigate();
  let [pageIndex, setPageIndex] = useState(0);

  const handleClick = () => {
    setPageIndex(pageIndex + 2);
    navigate(`/book/${pageIndex}`);
  };

  return (
    <div>
      <Button title="Next Page" handleClick={handleClick} />
    </div>
  );
};

export default Pagination;
