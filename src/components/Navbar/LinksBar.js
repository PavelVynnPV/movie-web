import React from "react";
import { Link } from "react-router-dom";

export default function LinksBar({styles, setWebHref}) {
  return (
    <>
      <div className={styles.links_bar__inner}>
        <Link to="/movie-web" onClick={(e) => setWebHref(e.target.href)}>Головна</Link>
        <Link to="/movie-web" onClick={(e) => setWebHref(e.target.href)}>Новинки</Link>
        <Link to="/movie-web/films" onClick={(e) => setWebHref(e.target.href)}>Фільми</Link>
        <Link to="/movie-web/serials" onClick={(e) => setWebHref(e.target.href)}>Серіали</Link>
        <Link to="/movie-web/anime" onClick={(e) => setWebHref(e.target.href)}>Аніме</Link>
        <Link to="/movie-web/favourites" onClick={(e) => setWebHref(e.target.href)}>Збережені</Link>
      </div>
    </>
  );
}
