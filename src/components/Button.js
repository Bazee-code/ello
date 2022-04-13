import React from 'react';

const Button = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        borderRadius: 10,
        backgroundColor: 'green',
        color: '#FFF',
        border: 'none',
        padding: 15,
        cursor: 'pointer',
      }}
    >
      {title}
    </button>
  );
};

export default Button;
