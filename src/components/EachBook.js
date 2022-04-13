import Pagination from './Pagination';
import { useParams } from 'react-router-dom';

const EachBook = ({ data, loading, error, handleClick }) => {
  let params = useParams();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  const bookContent =
    data &&
    data.book &&
    data.book.pages?.length > 0 &&
    data.book.pages.map((book, index) => {
      let pageToken = book.tokens;
      return (
        <p
          key={index}
          style={{
            fontSize: 20,
            cursor: 'pointer',
          }}
          onClick={() => handleClick(pageToken)}
        >
          {params.pageIndex == book.pageIndex ? book.content : null}
        </p>
      );
    });

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h3>Page Index : {params.pageIndex}</h3>
      <h4>Page Content : </h4>
      {bookContent && bookContent}
      <Pagination />
    </div>
  );
};

export default EachBook;
