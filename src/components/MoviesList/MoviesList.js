import React, { useState, useMemo } from "react";
import Pagination from "../Pagination/Pagination";
import styles from "../Main/Main.module.css";
import MovieComponent from "./MovieComponent";

let PageSize = 8;

export default function MoviesList({
  filterMovies,
  setItemInfo,
  handleOnClickAdd,
  handleOnClickRemove,
  favourites,
  setWebHref
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filterMovies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filterMovies]);

  return (
    <>
      <section className={styles.movie_list}>
        {currentTableData.map((movie) => (
          <MovieComponent
            styles={styles}
            movie={movie}
            setItemInfo={setItemInfo}
            handleOnClickAdd={handleOnClickAdd}
            handleOnClickRemove={handleOnClickRemove}
            favourites={favourites}
            setWebHref={setWebHref}
          />
        ))}
        <Pagination
          className={styles.pagination_bar}
          currentPage={currentPage}
          totalCount={filterMovies.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </>
  );
}
