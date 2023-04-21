import React from "react";
import LinksBar from "../Navbar/LinksBar";
import Aside from "../Aside/Aside";
import styles from "./Main.module.css";
import Slider from "./Slider";
import MoviesList from "../MoviesList/MoviesList";
import nav_styles from "../Navbar/Navbar.module.css";
import "../Aside/Aside.css";

export default function Main({
  films,
  serials,
  anime,
  data,
  search,
  setItemInfo,
  handleOnClickAdd,
  handleOnClickRemove,
  favourites,
  setWebHref,
  filters,
  asideDataInfo,
  webHref,
  itemInfo,
}) {
  const filterMovies = data.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <main
        className={
          webHref === `http://localhost:3000/singlepage/${itemInfo.id}`
            ? styles.unActive
            : styles.active
        }
      >
        <div className={styles.main__inner}>
          <div className={styles.main__inner_links}>
            <LinksBar styles={nav_styles} setWebHref={setWebHref} />
          </div>
          <div className={styles.main__slider_box}>
            <Slider films={films} />
          </div>
          <div className={styles.main__middle_content}>
            <div class="aside">
              <div id="aside_content">
                <Aside
                  films={films}
                  serials={serials}
                  anime={anime}
                  data={asideDataInfo}
                  filters={filters}
                  setWebHref={setWebHref}
                />
              </div>
            </div>
            <div className={styles.main__movie_list_info}>
              <div className={styles.main__beetwen_line}></div>
              <MoviesList
                filterMovies={filterMovies}
                setItemInfo={setItemInfo}
                handleOnClickAdd={handleOnClickAdd}
                handleOnClickRemove={handleOnClickRemove}
                favourites={favourites}
                setWebHref={setWebHref}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
