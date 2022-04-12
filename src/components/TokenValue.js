import React from 'react';
import { useParams } from 'react-router-dom';

const TokenValue = () => {
  let params = useParams();

  return (
    <>
      <p
        style={{
          fontSize: 20,
          padding: 20,
        }}
      >
        Token value : {params.tokenValue}{' '}
      </p>
    </>
  );
};

export default TokenValue;
