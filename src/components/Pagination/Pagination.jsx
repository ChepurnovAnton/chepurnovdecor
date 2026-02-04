import styles from "./Pagination.module.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push("...");
      }
      
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevButton}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Предыдущая страница"
      >
        <MdNavigateBefore size={24} />
      </button>

      <div className={styles.pageNumbers}>
        {getPageNumbers().map((page, index) => (
          page === "..." ? (
            <span key={`dots-${index}`} className={styles.dots}>
              ...
            </span>
          ) : (
            <button
              key={page}
              className={`${styles.pageButton} ${
                currentPage === page ? styles.active : ""
              }`}
              onClick={() => {
                onPageChange(page);
              }}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          )
        ))}
      </div>

      <button
        className={styles.nextButton}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Следующая страница"
      >
        <MdNavigateNext size={24} />
      </button>
    </div>
  );
};

export default Pagination;
