import {Route} from "react-router-dom"


export const getData = (setData,setFilms, setSerials, setAnime) => {
    fetch("http://pavelvynnpv.github.io/mymovieapi/films.json")
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
  if (webHref === "http://pavelvynnpv.github.io/movie-web") {
    <Route exact path="/movie-web"/>
    return data;
  } else if (webHref === "http://pavelvynnpv.github.io/movie-web/films") {
    return films;
  } else if (webHref === "http://pavelvynnpv.github.io/movie-web/serials") {
    return serials;
  } else if (webHref === "http://pavelvynnpv.github.io/movie-web/anime") {
    return anime;
  } else if (webHref === "http://pavelvynnpv.github.io/movie-web/filteryear") {
    return year;
  } else if (webHref === "http://pavelvynnpv.github.io/movie-web/filtercountry") {
    return country;
  } else if (webHref === "http://pavelvynnpv.github.io/movie-web/filtermovietime") {
    return movieTime;
  } else if (webHref === "http://pavelvynnpv.github.io/movie-web/favourites") {
    return favourites;
  } else {
    return data;
  }
};
