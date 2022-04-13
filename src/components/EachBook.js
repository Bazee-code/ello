import Pagination from './Pagination';
import { useParams } from 'react-router-dom';

const EachBook = ({ data, loading, error }) => {
  let params = useParams();
  console.log('data', data);
  console.log('params', params.pageIndex);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  const bookContent =
    data &&
    data.book &&
    data.book.pages?.length > 0 &&
    data.book.pages.map((book) =>
      params.pageIndex == book.pageIndex ? book.content : null
    );

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h3>Page Number : {params.pageIndex}</h3>
      <h5>Page Content : {bookContent}</h5>
      <Pagination />
    </div>
  );
};

export default EachBook;
