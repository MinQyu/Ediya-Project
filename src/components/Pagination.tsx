import { PaginationProps } from "../interfaces/interface";
import styles from "./Pagination.module.css";

function Pagination({ page, setPage }: PaginationProps) {
  const { currentPage, lastPage, blockSize } = page;

  const handlePageClick = (pageNum: number) => {
    if (pageNum !== currentPage) {
      setPage((prevState) => ({ ...prevState, currentPage: pageNum }));
    }
  };

  const handlePrevClick = () => {
    const prevPage = Math.max(currentPage - blockSize, 1);
    setPage((prevState) => ({ ...prevState, currentPage: prevPage }));
  };

  const handleNextClick = () => {
    const nextPage = Math.min(currentPage + blockSize, lastPage);
    setPage((prevState) => ({ ...prevState, currentPage: nextPage }));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(blockSize / 2));
    const endPage = Math.min(lastPage, startPage + blockSize - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={i === currentPage ? styles.active : ""}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
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
      <div className={styles.number_box}>{renderPageNumbers()}</div>
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
