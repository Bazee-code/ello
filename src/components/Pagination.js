const Pagination = ({ data }) => {
  console.log('data', data);
  return (
    <div>
      {data && data.book && data.book.pages?.length > 0
        ? data.book.pages.map(
            (page) =>
              page.pageIndex % 2 === 0 && <button>{page.pageIndex}</button>
          )
        : null}
    </div>
  );
};

export default Pagination;
