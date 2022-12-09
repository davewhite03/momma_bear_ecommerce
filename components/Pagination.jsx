import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  console.log(pageNumbers);
  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    console.log(nPages);
  };
  const prevPage = (e) => {
    e.preventDefault();
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  console.log(currentPage);
  return (
    <nav>
      <ul className={styles.container}>
        <li className={styles.pageItem}>
          <a className="page-link" onClick={prevPage} href="#">
            Previous
          </a>
        </li>

        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`${styles.pageNumber} ${
              currentPage == pgNumber ? styles.active : ''
            } `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
