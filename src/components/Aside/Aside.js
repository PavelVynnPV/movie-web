import React from "react";
import styles from "../Main/Main.module.css";
import Accordion from "./Accordion";

export default function Aside({ films, serials, anime, data, filters, setWebHref }) {
  return (
    <>
      <div className={styles.aside__inner}>
        <h1 className={styles.aside__title}>
          Панель навігації <span className={styles.title_underline}></span>
        </h1>
        <Accordion
          filters={filters}
          styles={styles}
          films={films}
          serials={serials}
          anime={anime}
          data={data}
          setWebHref={setWebHref}
        />
      </div>
    </>
  );
}
