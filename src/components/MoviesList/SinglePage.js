import React, { useState } from "react";
import LinksBar from "../Navbar/LinksBar";
import styles from "./SinglePage.module.css";
import main_styles from "../Main/Main.module.css";
import Rating from "./Rating/Rating.js";

export default function SinglePage({ itemInfo, setWebHref }) {

  const [activeMovieModal, setActiveMovieModal] = useState(false)
  const body = document.querySelector('body')
  if(activeMovieModal){
    body.style.overflow = "hidden"
  }else body.style.overflow = "auto"
  return (
    <>
      <div className={activeMovieModal ? styles.movie_modal__block : styles.unActive}>
        <div className={styles.movie_modal__bg} onClick={() => setActiveMovieModal(false)}>
          <iframe className={styles.movie_modal__film} title={itemInfo.title} src={itemInfo.film}></iframe>
        </div>
      </div>
      <h1 className={styles.singlep__title}>{itemInfo.title}</h1>
      <LinksBar styles={styles} />
      <section className={styles.signlep}>
        <div className={styles.signlep__inner}>
          <div className={styles.singlep__top}>
            <img src={itemInfo.image} alt="film_photo" />
            <div className={styles.single__top_info}>
              <div className={main_styles.movie__content_right}>
                <ul className={styles.movie__info_list}>
                  <li>
                    <span className={styles.movie__info_item_head}>Рік: </span>
                    <span className={styles.movie__info_item}>
                      {itemInfo.year}
                    </span>
                  </li>
                  <li className={styles.array_info_item}>
                    <span className={styles.movie__info_item_head}>
                      Країна:{" "}
                    </span>

                    {itemInfo.country.map((country_item) => {
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
                    {itemInfo.genre.map((genre_item) => {
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

                    {itemInfo.language.map((language_item) => {
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
                    <span className={styles.movie__info_item}>
                      {itemInfo.time}
                    </span>
                  </li>
                </ul>
                <div className={styles.movie__content_rate_watch}>
                  <div className={styles.movie__content_rate}>
                    <Rating movie={itemInfo} />
                  </div>
                  <a
                    href="##"
                    className={styles.movie__watch_movie_btns}
                    onClick={(e) => {e.preventDefault(); setActiveMovieModal(true)}}
                  >
                    Дивитись онлайн
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ssinglep__bottom}>
            <p className={styles.movie__description}>
              <span className={styles.mvie__description_header}>
                Опис фільму:
              </span>

              {itemInfo.description}
            </p>
          </div>
          <div className={styles.singlep__footer}>
            <div className={styles.movie__watched}>
              <p>
                <span className={styles.eye_icon}></span>
                <span>{itemInfo.views} переглядів</span>
              </p>
            </div>
            <span className={styles.movie__save_icon}></span>
          </div>
        </div>
      </section>
    </>
  );
}
