import React from "react";
import { Link } from "react-router-dom";

export default function LinksBar({styles, setWebHref}) {
  return (
    <>
      <div className={styles.links_bar__inner}>
        <Link to="/" onClick={(e) => setWebHref(e.target.href)}>Головна</Link>
        <Link to="/" onClick={(e) => setWebHref(e.target.href)}>Новинки</Link>
        <Link to="/films" onClick={(e) => setWebHref(e.target.href)}>Фільми</Link>
        <Link to="/serials" onClick={(e) => setWebHref(e.target.href)}>Серіали</Link>
        <Link href="/anime" onClick={(e) => setWebHref(e.target.href)}>Аніме</Link>
        <Link to="/favourites" onClick={(e) => setWebHref(e.target.href)}>Збережені</Link>
      </div>
    </>
  );
}
