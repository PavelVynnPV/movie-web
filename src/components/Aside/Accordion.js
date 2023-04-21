import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Accordion({
  styles,
  films,
  serials,
  anime,
  data,
  filters,
  setWebHref,
}) {
  const [activeCategory, setActiveCategory] = useState(false);
  const [activeYear, setActiveYear] = useState(false);
  const [activeCountry, setActiveCountry] = useState(false);
  const [activeFilmTime, setActiveFilmTime] = useState(false);
  const years = [];
  const country = [];
  const movieTime = [];

  data.map((item) => {
    return years.push(item.year);
  });
  data.map((item) => {
    return movieTime.push(item.time);
  });
  data.map((item) =>
    item.country.map((countryItem) => {
      return country.push(countryItem);
    })
  );
  let newYearArray = [...new Set(years)].sort().reverse();
  let newCoutryArray = [...new Set(country)].sort();
  let newMovieTimeArray = [...new Set(movieTime)].sort().reverse();

  return (
    <div className={styles.aside__accordion_item}>
      <div className={styles.accordion__box}>
        <div
          className={
            !activeCategory === true
              ? styles.accordion__title
              : styles.accordion_title_active
          }
          onClick={() => setActiveCategory(!activeCategory)}
        >
          <div>Категорія</div>
          <div className={styles.plus_mines_accordion}>
            {activeCategory ? "-" : "+"}
          </div>
        </div>
        {activeCategory && (
          <ul className={styles.accordion__content}>
            <Link
              to="/films"
              onClick={(e) => {
                setWebHref("http://localhost:3000/films");
              }}
            >
              {" "}
              <li className={styles.accordion__content_item}>
                Всі фільми <span>({films.length})</span>
              </li>
            </Link>
            <Link
              to="/serials"
              onClick={(e) => setWebHref("http://localhost:3000/serials")}
            >
              <li className={styles.accordion__content_item}>
                Серіали <span>({serials.length})</span>
              </li>
            </Link>
            <Link
              to="/anime"
              onClick={(e) => setWebHref("http://localhost:3000/anime")}
            >
              <li
                className={
                  !activeCategory === true
                    ? styles.accordion__content_item
                    : styles.accordion__content_item_active
                }
              >
                Аніме <span>({anime.length})</span>
              </li>
            </Link>
          </ul>
        )}
      </div>

      <div className={styles.accordion__box}>
        <div
          className={
            !activeYear === true
              ? styles.accordion__title
              : styles.accordion_title_active
          }
          onClick={() => setActiveYear(!activeYear)}
        >
          <div>Рік</div>
          <div className={styles.plus_mines_accordion}>
            {activeYear ? "-" : "+"}
          </div>
        </div>
        {activeYear && (
          <ul className={styles.accordion__content}>
            {newYearArray.map((item) => (
              <Link
                to="/filteryear"
                onClick={(e) => setWebHref("http://localhost:3000/filteryear")}
              >
                <li
                  className={styles.accordion__content_item}
                  onClick={(e) => filters([e.target.outerText])}
                >
                  {item} <span></span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.accordion__box}>
        <div
          className={
            !activeCountry === true
              ? styles.accordion__title
              : styles.accordion_title_active
          }
          onClick={() => setActiveCountry(!activeCountry)}
        >
          <div>Країна</div>
          <div className={styles.plus_mines_accordion}>
            {activeCountry ? "-" : "+"}
          </div>
        </div>
        {activeCountry && (
          <ul className={styles.accordion__content}>
            {newCoutryArray.map((item) => (
              <Link
                to="/filtercountry"
                onClick={(e) =>
                  setWebHref("http://localhost:3000/filtercountry")
                }
              >
                <li
                  className={styles.accordion__content_item}
                  onClick={(e) => {
                    filters([e.target.outerText]);
                  }}
                >
                  {item} <span></span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.accordion__box}>
        <div
          className={
            !activeFilmTime === true
              ? styles.accordion__title
              : styles.accordion_title_active
          }
          onClick={() => setActiveFilmTime(!activeFilmTime)}
        >
          <div>Тривалість</div>
          <div className={styles.plus_mines_accordion}>
            {activeFilmTime ? "-" : "+"}
          </div>
        </div>
        {activeFilmTime && (
          <ul className={styles.accordion__content}>
            {newMovieTimeArray.map((item) => (
              <Link
                to="/filtermovietime"
                onClick={(e) =>
                  setWebHref("http://localhost:3000/filtermovietime")
                }
              >
                <li
                  className={styles.accordion__content_item}
                  onClick={(e) => filters([e.target.outerText])}
                >
                  {item} <span></span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
