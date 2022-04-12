import { gql } from '@apollo/client';

export const GET_BOOK_PAGES = gql`
  {
    book {
      pages {
        content
        tokens {
          position
          value
        }
      }
    }
  }
`;
