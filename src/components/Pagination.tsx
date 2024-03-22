import { PaginationProps } from "../interfaces/interface";
import styles from "./Pagination.module.css";

function Pagination({ paging, setPage }: PaginationProps) {
  const { currentPage, blockSize, lastPage } = paging;
  const startPage = Math.floor((currentPage - 1) / blockSize) * 10 + 1;
  const endPage =
    startPage + blockSize - 1 <= lastPage
      ? startPage + blockSize - 1
      : lastPage;
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => i + startPage
  );

  const handlePageClick = (pageNum: number) => {
    if (pageNum !== currentPage) {
      setPage(pageNum);
    }
  };

  const handlePrevClick = () => {
    if (startPage - blockSize > 0) setPage(startPage - blockSize);
  };

  const handleNextClick = () => {
    if (startPage + blockSize < lastPage) setPage(startPage + blockSize);
  };

  return (
    <div className={styles.container}>
      <button
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/page_prev.svg)`
        }}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      />
      <div className={styles.number_box}>
        {pageNumbers.map((number) => {
          return (
            <span
              key={number}
              className={number == currentPage ? styles.selected : ""}
              onClick={() => handlePageClick(number)}
            >
              {number}
            </span>
          );
        })}
      </div>
      <button
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/page_next.svg)`
        }}
        onClick={handleNextClick}
        disabled={currentPage === lastPage}
      />
    </div>
  );
}

export default Pagination;
