import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating/Rating";
import "./Rating/StarsComp.css";

export default function MovieComponent({
  styles,
  movie,
  setItemInfo,
  handleOnClickAdd,
  handleOnClickRemove,
  favourites,
  setWebHref
}) {
  const isFavourite = Boolean(
    favourites.find((favouriteItem) => favouriteItem.id === movie.id)
  );

  return (
    <>
      <div className={styles.movie__inner}>
        <div className={styles.movie__content}>
          <div className={styles.movie__content_left}>
            <img src={movie.image} alt="movie_photo" />
            <div className={styles.movie__content_rate}>
              <Rating movie={movie}/>
            </div>
          </div>
          <div className={styles.movie__content_right}>
            <h1 className={styles.movie__content_name}>{movie.title}</h1>
            <ul className={styles.movie__info_list}>
              <li>
                <span className={styles.movie__info_item_head}>Рік: </span>
                <span className={styles.movie__info_item}>{movie.year}</span>
              </li>
              <li className={styles.array_info_item}>
                <span className={styles.movie__info_item_head}>Країна: </span>

                {movie.country.map((country_item) => {
                  return (
                    <>
                      <span className={styles.movie__info_item}>
                        {country_item}
                      </span>
                      <span
                        className={styles.movie__info_item_dott_beetwen}
                      ></span>
                    </>
                  );
                })}
              </li>
              <li className={styles.array_info_item}>
                <span className={styles.movie__info_item_head}>Жанр: </span>
                {movie.genre.map((genre_item) => {
                  return (
                    <>
                      <span className={styles.movie__info_item}>
                        {genre_item}
                      </span>
                      <span
                        className={styles.movie__info_item_dott_beetwen}
                      ></span>
                    </>
                  );
                })}
              </li>
              <li className={styles.array_info_item}>
                <span className={styles.movie__info_item_head}>Мова: </span>

                {movie.language.map((language_item) => {
                  return (
                    <>
                      <span className={styles.movie__info_item}>
                        {language_item}
                      </span>
                      <span
                        className={styles.movie__info_item_dott_beetwen}
                      ></span>
                    </>
                  );
                })}
              </li>
              <li>
                <span className={styles.movie__info_item_head}>
                  Тривалість:{" "}
                </span>
                <span className={styles.movie__info_item}>{movie.time}</span>
              </li>
            </ul>
            <p className={styles.movie__description}>
              <span className={styles.mvie__description_header}>
                Опис фільму:
              </span>

              {movie.description}
            </p>
            <Link
              to={`/movie-web/singlepage/${movie.id}`}
              className={styles.movie__watch_movie_btn}
              onClick={(e) => {
                setWebHref(`https://pavelvynnpv.github.io/movie-web/singlepage/${movie.id}`)
                setItemInfo(movie);
              }}
            >
              Дивитись онлайн
            </Link>
          </div>
        </div>
        <div className={styles.movie__watched}>
          <p>
            <span className={styles.eye_icon}></span>
            <span>{movie.views} переглядів</span>
          </p>
        </div>
        <span
          className={
            !isFavourite
              ? styles.movie__save_icon
              : styles.movie__save_icon_active
          }
          onClick={() =>
            !isFavourite ? handleOnClickAdd(movie) : handleOnClickRemove(movie)
          }
        ></span>
      </div>
    </>
  );
}
