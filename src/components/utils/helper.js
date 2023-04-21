import {Route} from "react-router-dom"


export const getData = (setData,setFilms, setSerials, setAnime) => {
    fetch("https://pavelvynnpv.github.io/mymovieapi/films.json")
      .then((response) => response.json())
      .then((apiInfo) => {
        setData(apiInfo.movies.all_movies);
        setFilms(apiInfo.movies.new_movies);
        setSerials(apiInfo.movies.serials);
        setAnime(apiInfo.movies.anime);
      });
  };


export const dataChanger = (
  webHref,
  data,
  films,
  anime,
  year,
  serials,
  country,
  movieTime,
  favourites
) => {
  if (webHref === "http://localhost:3000/") {
    <Route exact path="/"/>
    return data;
  } else if (webHref === "http://localhost:3000/films") {
    return films;
  } else if (webHref === "http://localhost:3000/serials") {
    return serials;
  } else if (webHref === "http://localhost:3000/anime") {
    return anime;
  } else if (webHref === "http://localhost:3000/filteryear") {
    return year;
  } else if (webHref === "http://localhost:3000/filtercountry") {
    return country;
  } else if (webHref === "http://localhost:3000/filtermovietime") {
    return movieTime;
  } else if (webHref === "http://localhost:3000/favourites") {
    return favourites;
  } else {
    return data;
  }
};
