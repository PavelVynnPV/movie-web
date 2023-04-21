import React from "react";
import styles from "../Main/Main.module.css";
import { Main } from "../Main";

export default function Favourites({
  films,
  serials,
  anime,
  setItemInfo,
  handleOnClickAdd,
  handleOnClickRemove,
  favourites,
  search,
}) {

  return (
    <>
      <Main
      search={search}
        films={films}
        serials={serials}
        anime={anime}
        styles={styles}
        data={favourites}
        favourites={favourites}
        setItemInfo={setItemInfo}
        handleOnClickAdd={handleOnClickAdd}
        handleOnClickRemove={handleOnClickRemove}
      />
    </>
  );
}
