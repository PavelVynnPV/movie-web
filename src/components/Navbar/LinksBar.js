import React from "react";
import { Link } from "react-router-dom";

export default function LinksBar({styles, setWebHref}) {
  return (
    <>
      <div className={styles.links_bar__inner}>
        <Link to="/movie-web" onClick={(e) => {setWebHref(e.target.href); console.log(e)}}>Головна</Link>
        <Link to="/movie-web" onClick={(e) => {setWebHref(e.target.href); console.log(e)}}>Новинки</Link>
        <Link to="/movie-web/films" onClick={(e) => {setWebHref(e.target.href); console.log(e)}}>Фільми</Link>
        <Link to="/movie-web/serials" onClick={(e) => {setWebHref("http://pavelvynnpv.github.io/movie-web/serials"); console.log(e)}}>Серіали</Link>
        <Link to="/movie-web/anime" onClick={(e) => {setWebHref(e.target.href); console.log(e)}}>Аніме</Link>
        <Link to="/movie-web/favourites" onClick={(e) => {setWebHref(e.target.href); console.log(e)}}>Збережені</Link>
      </div>
    </>
  );
}
