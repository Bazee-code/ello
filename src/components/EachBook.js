import Pagination from './Pagination';
import { useParams } from 'react-router-dom';

const EachBook = () => {
  let params = useParams();
  console.log('params', params);

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h3>Page Number : {params.pageIndex}</h3>
      {/* get data from context , map , compare current page index to data page index and render page content */}
      <h5>Page Content : </h5>
      <Pagination />
    </div>
  );
};

export default EachBook;
